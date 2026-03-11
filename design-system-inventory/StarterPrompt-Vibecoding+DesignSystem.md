# Pilot Vibecoding Prompt for Design System Integration

## Source of truth
Use Pilot’s design system as the only source of truth:  

https://github.com/Pilot-Design-Team/design-system-ai.git

## Hard requirements

### Typography
- Use **only** the Euclid font files provided in the design system repo  
- Do not use system fonts, default fonts, or web-safe fallbacks  
- Explicitly reference Euclid for all text styles  

### Design tokens
- Use only tokens defined in the design system markdown files  
- Do not invent, approximate, or infer colors, spacing, or sizes  

### Copy and content lock
- Do not change, rewrite, shorten, or generate new copy  
- Do not modify labels, headings, or body text  
- Do not infer missing content  
- Preserve all existing text exactly as provided  
- Only update visual styling and layout  

### Components and patterns
- Prefer existing components and layouts from the system  
- If something is missing, choose the closest existing pattern  
- Do not create new visual styles  

### Assets
- Load logos directly from the design system repo  
- Use `logos/pilot_logo_small.png` for the full Pilot logo  
- Use `logos/dark-pilot-logo.svg` when an icon is needed  
- Do not substitute, recreate, or stylize logos  
- Ensure logos render correctly and are visible  

## Constraints
- Do not introduce new fonts, icons, or branding  
- Do not guess values or aesthetics  
- Match Pilot’s current UI density and hierarchy  

## Outcome
The prototype should be visually indistinguishable from Pilot’s production UI while preserving all original copy and content.
