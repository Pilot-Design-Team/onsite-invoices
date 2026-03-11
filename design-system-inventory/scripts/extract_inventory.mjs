#!/usr/bin/env node

/**
 * Design System Inventory Extraction Script
 * 
 * Scans the codebase for components, stories, and tokens, then outputs
 * a machine-readable JSON inventory file.
 * 
 * Usage: node extract_inventory.mjs
 */

import { readdir, readFile } from 'fs/promises';
import { join, relative, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const repoRoot = join(__dirname, '../..');
const componentsDir = join(repoRoot, 'connections/client/components');
const storiesDir = join(repoRoot, 'connections/stories');
const cssDir = join(repoRoot, 'connections/client/css');

/**
 * Recursively find all files matching a pattern
 */
async function findFiles(dir, pattern, results = []) {
    try {
        const entries = await readdir(dir, { withFileTypes: true });
        
        for (const entry of entries) {
            const fullPath = join(dir, entry.name);
            
            if (entry.isDirectory()) {
                await findFiles(fullPath, pattern, results);
            } else if (entry.isFile() && pattern.test(entry.name)) {
                results.push(fullPath);
            }
        }
    } catch (err) {
        // Directory doesn't exist or permission error
        console.warn(`Warning: Could not read directory ${dir}: ${err.message}`);
    }
    
    return results;
}

/**
 * Extract component name from file path
 */
function getComponentName(filePath) {
    const relativePath = relative(componentsDir, filePath);
    const name = relativePath.replace(/\.vue$/, '').replace(/\//g, '-');
    return name;
}

/**
 * Extract story name from file path
 */
function getStoryName(filePath) {
    const relativePath = relative(storiesDir, filePath);
    const name = relativePath.replace(/\.stories\.(js|ts)$/, '').replace(/\//g, '-');
    return name;
}

/**
 * Check if component has a corresponding story
 */
function hasStory(componentName, stories) {
    // Try various naming patterns
    const patterns = [
        componentName,
        componentName.replace(/-/g, ''),
        componentName.toLowerCase(),
    ];
    
    return stories.some(story => {
        const storyName = story.name.toLowerCase();
        return patterns.some(pattern => storyName.includes(pattern.toLowerCase()));
    });
}

/**
 * Extract basic info from Vue component file
 */
async function extractComponentInfo(filePath) {
    try {
        const content = await readFile(filePath, 'utf-8');
        const relativePath = relative(repoRoot, filePath);
        
        // Try to extract component name from export
        const nameMatch = content.match(/name:\s*["']([^"']+)["']/);
        const componentName = nameMatch ? nameMatch[1] : null;
        
        // Check for props
        const hasProps = /props:\s*\{/.test(content);
        
        // Check for slots
        const slotMatches = content.match(/<slot[^>]*name=["']([^"']+)["']/g);
        const slots = slotMatches ? slotMatches.map(s => {
            const match = s.match(/name=["']([^"']+)["']/);
            return match ? match[1] : null;
        }).filter(Boolean) : [];
        
        // Determine component type
        let type = 'unknown';
        const fileName = filePath.split('/').pop();
        if (fileName.startsWith('base-')) {
            type = 'primitive';
        } else if (fileName.startsWith('pilot-')) {
            type = 'composed';
        } else if (fileName.includes('table')) {
            type = 'table';
        } else if (fileName.includes('layout') || fileName.includes('page')) {
            type = 'layout';
        } else if (fileName.includes('input') || fileName.includes('form') || fileName.includes('picker')) {
            type = 'form';
        } else if (fileName.includes('icon-') || fileName.includes('svg')) {
            type = 'icon';
        } else if (fileName.includes('modal') || fileName.includes('drawer') || fileName.includes('container')) {
            type = 'container';
        }
        
        return {
            name: componentName || getComponentName(filePath),
            file: relativePath,
            type,
            hasProps,
            slots: slots.length > 0 ? slots : (content.includes('<slot') ? ['default'] : []),
        };
    } catch (err) {
        console.warn(`Warning: Could not read component ${filePath}: ${err.message}`);
        return null;
    }
}

/**
 * Extract info from story file
 */
async function extractStoryInfo(filePath) {
    try {
        const content = await readFile(filePath, 'utf-8');
        const relativePath = relative(repoRoot, filePath);
        
        // Try to extract title
        const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
        const title = titleMatch ? titleMatch[1] : null;
        
        // Try to extract component import
        const importMatch = content.match(/import\s+(\w+)\s+from\s+["'][^"']+["']/);
        const componentName = importMatch ? importMatch[1] : null;
        
        return {
            name: getStoryName(filePath),
            file: relativePath,
            title,
            componentName,
        };
    } catch (err) {
        console.warn(`Warning: Could not read story ${filePath}: ${err.message}`);
        return null;
    }
}

/**
 * Main extraction function
 */
async function extractInventory() {
    console.log('Scanning for components...');
    const componentFiles = await findFiles(componentsDir, /\.vue$/);
    console.log(`Found ${componentFiles.length} component files`);
    
    console.log('Scanning for stories...');
    const storyFiles = await findFiles(storiesDir, /\.stories\.(js|ts)$/);
    console.log(`Found ${storyFiles.length} story files`);
    
    console.log('Extracting component information...');
    const components = (await Promise.all(
        componentFiles.map(extractComponentInfo)
    )).filter(Boolean);
    
    console.log('Extracting story information...');
    const stories = (await Promise.all(
        storyFiles.map(extractStoryInfo)
    )).filter(Boolean);
    
    // Match components to stories
    const componentsWithStories = components.map(comp => {
        const hasStoryFile = hasStory(comp.name, stories);
        return {
            ...comp,
            hasStory: hasStoryFile,
        };
    });
    
    // Count stories without components
    const storiesWithoutComponents = stories.filter(story => {
        return !components.some(comp => 
            comp.name.toLowerCase() === story.name.toLowerCase() ||
            comp.name.toLowerCase().replace(/-/g, '') === story.name.toLowerCase().replace(/-/g, '')
        );
    });
    
    const inventory = {
        metadata: {
            generatedAt: new Date().toISOString(),
            repoRoot: relative(repoRoot, repoRoot),
            componentCount: components.length,
            storyCount: stories.length,
        },
        components: componentsWithStories,
        stories: stories,
        summary: {
            componentsWithStories: componentsWithStories.filter(c => c.hasStory).length,
            componentsWithoutStories: componentsWithStories.filter(c => !c.hasStory).length,
            storiesWithoutComponents: storiesWithoutComponents.length,
            componentsByType: componentsWithStories.reduce((acc, comp) => {
                acc[comp.type] = (acc[comp.type] || 0) + 1;
                return acc;
            }, {}),
        },
    };
    
    return inventory;
}

// Run extraction
(async () => {
    try {
        const inventory = await extractInventory();
        const outputPath = join(__dirname, '../inventory.json');
        const { writeFile } = await import('fs/promises');
        await writeFile(outputPath, JSON.stringify(inventory, null, 2));
        console.log(`\n✅ Inventory extracted successfully!`);
        console.log(`   Components: ${inventory.metadata.componentCount}`);
        console.log(`   Stories: ${inventory.metadata.storyCount}`);
        console.log(`   Components with stories: ${inventory.summary.componentsWithStories}`);
        console.log(`   Components without stories: ${inventory.summary.componentsWithoutStories}`);
        console.log(`\n📄 Output: ${relative(process.cwd(), outputPath)}`);
    } catch (err) {
        console.error('Error extracting inventory:', err);
        process.exit(1);
    }
})();

