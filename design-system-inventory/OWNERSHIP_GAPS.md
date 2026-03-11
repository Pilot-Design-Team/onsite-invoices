# Ownership Gaps and Recommendations

This document identifies areas of the design system that lack clear ownership, have duplication, or need improvement.

## Legacy Components

### Deprecated Components

1. **BaseTableBordered**
   - **File:** `connections/client/components/base-table-bordered.vue`
   - **Status:** Explicitly deprecated
   - **Story:** `deprecated-base-table-bordered.stories.js`
   - **Recommendation:** Remove after migration to PilotTable

2. **Legacy Button Classes**
   - **File:** `connections/client/css/_button.scss`
   - **Status:** Legacy CSS classes (`.button`, `.x`)
   - **Comment in code:** "TODO: delete when <BaseButton> is used everywhere"
   - **Recommendation:** Complete migration to BaseButton component, then remove legacy styles

## Duplicated Patterns

### Modal Components

**Issue:** Two modal implementations exist:
- `connections/client/components/containers/modal.vue`
- `connections/client/components/containers/modal-dialog.vue`

**Recommendation:**
- Audit usage of both components
- Standardize on one implementation
- Migrate remaining usage to chosen component
- Deprecate and remove the other

### Table Filter Components

**Issue:** Multiple table filter implementations:
- `connections/client/components/table-filter.vue` (legacy)
- `connections/client/components/tables/table-filters/pilot-table-filter.vue` (new)
- `connections/client/components/tables/table-filters/pilot-table-search-filter.vue`
- `connections/client/components/tables/table-filters/pilot-table-multiselect-filter.vue`
- `connections/client/components/tables/table-filters/pilot-table-date-range-filter.vue`

**Recommendation:**
- Migrate from legacy `table-filter.vue` to new `pilot-table-filter` system
- Document filter component hierarchy
- Remove legacy component after migration

### Loading Components

**Issue:** Multiple loading state components:
- `connections/client/components/loading.vue` (simple spinner)
- `connections/client/components/fancy-loading.vue` (animated)
- `connections/client/components/fancy-loading-dots.vue` (dots animation)
- `connections/client/components/loading-skeleton.vue` (skeleton screen)
- `connections/client/components/shimmer-loading.vue` (shimmer effect)

**Recommendation:**
- Create unified Loading component with variants
- Document when to use each variant
- Consider consolidating if variants are redundant

### Tooltip/Popover Components

**Issue:** Multiple tooltip/popover implementations:
- `connections/client/components/pilot-tooltip.vue`
- `connections/client/components/pilot-popover.vue`
- `connections/client/components/pilot-popover-tooltip.vue`
- `connections/client/components/info-tooltip.vue`
- `connections/client/components/hover-bubble.vue`
- `connections/client/components/sticky-bubble.vue`

**Recommendation:**
- Audit usage and determine if all are needed
- Consolidate to single tooltip/popover system with variants
- Document use cases for each variant
- Consider deprecating redundant components

### Accordion/Collapsible Components

**Issue:** Multiple expandable/collapsible components:
- `connections/client/components/accordion.vue`
- `connections/client/components/collapsible.vue`
- `connections/client/components/containers/expander.vue`
- `connections/client/components/containers/trouser.vue`
- `connections/stories/sticky-collapsible.stories.js` (referenced but component not found)

**Recommendation:**
- Document differences between components
- Standardize on naming and API
- Consider consolidating if functionality overlaps

## Missing Storybook Coverage

### Components Without Stories

Based on component scan, many components lack Storybook stories. Key missing stories:

**Base Components:**
- `base-circle-button.vue`
- `base-close-button.vue`
- `base-primary-nav.vue`

**Pilot Components:**
- `pilot-tag.vue`
- `pilot-checkbox.vue`
- `pilot-popover-tooltip.vue`
- `pilot-switcher.vue`
- `pilot-sidebar.vue`
- `pilot-page-content.vue`
- `pilot-attachments.vue`

**Form Components:**
- `password-input.vue`
- `input-active.vue`
- `removable-text-input.vue`
- `radio-buttons.vue`
- `bool-picker.vue`
- `country-picker.vue`
- `us-state-picker.vue`
- `entity-type-picker.vue`

**Table Components:**
- Most `pilot-table-*` cell components lack individual stories
- Table filter components lack stories

**Layout Components:**
- `page-wrapper.vue`
- `split-layout.vue`
- `opposite-ends.vue`
- `spaced-list.vue`

**Other Components:**
- `progress-bar.vue`
- `user-avatar.vue`
- `gated-router-link.vue`
- `requires-permissions.vue`

**Recommendation:**
- Prioritize stories for design system components (base-*, pilot-*)
- Create stories for commonly used components
- Document story coverage in component index

## Missing Design Tokens

### CSS Custom Properties

**Issue:** Design system primarily uses SCSS variables, not CSS custom properties.

**Impact:**
- No runtime theming capability
- Limited browser support for dynamic theming
- Cannot override tokens per-component easily

**Recommendation:**
- Migrate SCSS variables to CSS custom properties
- Maintain SCSS variables as fallback
- Enable runtime theming

### Motion Tokens

**Issue:** Only one motion token found: `$modalAppearDuration: 0.25s`

**Missing:**
- Easing functions
- Duration scale
- Animation timing tokens

**Recommendation:**
- Define motion token system
- Add easing functions (ease-in, ease-out, etc.)
- Create duration scale (fast, normal, slow)

### Breakpoint Tokens

**Issue:** Breakpoints defined inline in media queries, not as reusable tokens.

**Current:**
```scss
@media (max-width: 799px) { ... }
@media (max-width: 559px) { ... }
```

**Recommendation:**
- Create breakpoint token system
- Use tokens consistently across codebase
- Document breakpoint usage

### Design Token Format

**Issue:** No standard design token format (JSON/YAML).

**Impact:**
- Cannot export tokens to design tools
- No single source of truth for tokens
- Difficult to generate documentation

**Recommendation:**
- Create token JSON/YAML files
- Use style-dictionary or Design Tokens W3C format
- Generate SCSS/CSS from token files

## Inconsistent Naming

### Component Naming

**Issue:** Mixed naming conventions:
- `base-*` prefix for primitives
- `pilot-*` prefix for design system
- No prefix for feature components
- `icon-*` for icons
- `pilot-table-*` for table components

**Recommendation:**
- Document naming conventions
- Create migration plan for inconsistent names
- Enforce naming in code review

### Token Naming

**Issue:** SCSS variables use camelCase, but CSS custom properties typically use kebab-case.

**Current:**
```scss
$fontSizeBase: 15px;
$spacingMedium: 20px;
```

**Recommendation:**
- Use kebab-case for CSS custom properties: `--font-size-base`
- Maintain camelCase for SCSS variables for compatibility
- Document naming conventions

## Missing Documentation

### Component Documentation

**Issue:** Many components lack:
- JSDoc comments
- Prop documentation
- Usage examples
- Accessibility notes

**Recommendation:**
- Add JSDoc comments to all components
- Document props, slots, and events
- Include usage examples
- Document accessibility considerations

### Pattern Documentation

**Issue:** UI patterns not documented in centralized location.

**Recommendation:**
- Create pattern library documentation
- Document common patterns (forms, tables, modals)
- Include code examples
- Link to Storybook stories

### Token Documentation

**Issue:** Design tokens not documented in design tool format.

**Recommendation:**
- Generate token documentation
- Export tokens to design tools (Figma, etc.)
- Create token reference guide

## Component Organization

### Mixed Component Locations

**Issue:** Components located in multiple directories:
- `connections/client/components/` - Design system components
- `connections/client/modules/` - Feature-specific components
- `connections/client/views/` - Page-level components

**Recommendation:**
- Document component organization strategy
- Clarify what belongs in each directory
- Consider design system package structure

### Component Categorization

**Issue:** No clear categorization of components by type (primitive, composed, layout, etc.).

**Recommendation:**
- Organize components by type in documentation
- Use consistent type labels
- Create component taxonomy

## Accessibility Gaps

### Missing ARIA Labels

**Issue:** Many components may lack proper ARIA labels and roles.

**Recommendation:**
- Audit components for accessibility
- Add ARIA labels where needed
- Document accessibility requirements
- Test with screen readers

### Keyboard Navigation

**Issue:** Keyboard navigation may not be fully implemented in all components.

**Recommendation:**
- Audit keyboard navigation
- Ensure all interactive elements are keyboard accessible
- Document keyboard shortcuts

## Testing Gaps

### Component Tests

**Issue:** Many components lack unit tests.

**Recommendation:**
- Add unit tests for design system components
- Test component props and events
- Test accessibility features

### Visual Regression Testing

**Issue:** Limited visual regression testing coverage.

**Recommendation:**
- Set up visual regression testing (Chromatic, Percy, etc.)
- Test all Storybook stories
- Ensure visual consistency

## Recommendations Summary

### High Priority

1. **Consolidate Duplicated Components**
   - Modal components
   - Table filter components
   - Loading components
   - Tooltip/popover components

2. **Add Missing Stories**
   - Base components
   - Pilot design system components
   - Commonly used components

3. **Migrate to CSS Custom Properties**
   - Enable runtime theming
   - Better browser support
   - Component-level token overrides

4. **Create Design Token Format**
   - JSON/YAML token files
   - Style-dictionary integration
   - Design tool export

### Medium Priority

5. **Document Components**
   - JSDoc comments
   - Usage examples
   - Accessibility notes

6. **Standardize Naming**
   - Component naming conventions
   - Token naming conventions
   - Consistent prefixes

7. **Expand Motion Tokens**
   - Duration scale
   - Easing functions
   - Animation timing

### Low Priority

8. **Component Organization**
   - Clear directory structure
   - Component taxonomy
   - Design system package

9. **Testing Coverage**
   - Unit tests
   - Visual regression tests
   - Accessibility tests

10. **Pattern Documentation**
    - Pattern library
    - Code examples
    - Best practices

