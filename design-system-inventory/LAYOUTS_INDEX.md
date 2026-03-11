# Layout System Index

This document catalogs the layout system, including page shells, grid systems, and responsive approaches.

## Layout Architecture

The layout system is primarily managed through the `PageWrapper` component, which dynamically selects the appropriate layout based on user state, feature flags, and user type.

**Main Entry Point:** `connections/client/components/page-wrapper.vue`

## Layout Components

### PageWrapper

**File:** `connections/client/components/page-wrapper.vue`

**Purpose:** Main layout router that selects the appropriate layout component based on:
- User type (admin, customer, tax partner, logged out)
- Feature flags
- Screen size (mobile, tablet, desktop)

**Layouts Routed To:**
- `NewAdminLayout` - Admin interface
- `PortalLayout` - Customer portal
- `TaxPartnerLayout` - Tax partner interface
- `LoggedOutLayout` - Public/logged out pages

**Slots:**
- `default` - Main page content
- `header` - Page header
- `secondary-nav` - Secondary navigation
- `tertiary-nav` - Tertiary navigation tabs

**Responsive Breakpoints:**
- Mobile: `max-width: 500px`
- Tablet: `max-width: 1000px`
- Desktop: `> 1000px`

### Admin Layout

**File:** `connections/client/components/architecture/admin/new-admin-layout.vue`

**Purpose:** Layout for admin interface.

**Features:**
- Primary navigation sidebar
- Main content area
- Header with user menu
- Collapsible sidebar

### Portal Layout

**File:** `connections/client/components/architecture/portal-nav/portal-layout.vue`

**Purpose:** Layout for customer portal interface.

**Features:**
- Portal navigation
- Main content area
- Responsive design

### Tax Partner Layout

**File:** `connections/client/layouts/tax-partner.vue`

**Purpose:** Layout for tax partner interface.

**Features:**
- Tax partner navigation
- Specialized header
- Tax-specific navigation items

### Logged Out Layout

**File:** `connections/client/layouts/logged-out-layout.vue`

**Purpose:** Layout for public/unauthenticated pages.

**Features:**
- Minimal navigation
- Centered content
- Public-facing design

## Grid System

### Column System

**File:** `connections/client/css/_grid.scss`

**Pattern:** Flexbox-based column system with responsive breakpoints.

**Usage:**
```html
<div class="columns">
    <div class="column one-third">...</div>
    <div class="column two-thirds">...</div>
</div>
```

**Column Widths:**
- `one-twelfth` - 8.33%
- `one-fourth` - 25%
- `one-third` - 33.33%
- `three-eighths` - 37.5%
- `five-twelfths` - 41.67%
- `half` - 50%
- `five-eighths` - 62.5%
- `two-thirds` - 66.67%
- `three-fourths` - 75%

**Responsive Behavior:**
- **Mobile (< 559px)**: All columns stack vertically
- **Tablet (560px - 799px)**: Columns stack unless `.break-mobile` class is applied
- **Desktop (> 800px)**: Columns display side-by-side

**Example:**
```scss
.columns {
    display: flex;
    margin: 0 (-$spacingMedium);
    
    .column {
        flex: 1 1 auto;
        padding: $spacingMedium;
        
        &.half {
            flex: 0 0 50%;
            max-width: 50%;
        }
    }
}
```

### Split Layout

**Component:** `connections/client/components/split-layout.vue`

**Purpose:** Two-column split screen layout.

**Usage:** See `connections/stories/split-layout.stories.js`

## Page Structure

### Page Dimensions

**Tokens:** (from `_globals.scss` and `_layout.scss`)

```scss
$pageWidthMax: 1440px;
$pageMargin: $spacingLarge;              // 40px
$pageMarginMobile: $spacingMedium;      // 20px
$pagePaddingTop: $spacingMedium;        // 20px
$pagePaddingBottom: $spacingMediumLarge; // 30px
```

### Header Heights

```scss
$pageHeaderDefaultHeight: 110px;
$pageHeaderHasSecondaryNavHeight: 150px;
$secondaryNavHeight: 40px;
$nonAdminHeaderHeight: 144px;
$nonAdminTitleHeight: 34px;
```

### Navigation Dimensions

```scss
$expandedNavWidth: 240px;
$collapsedNavWidth: 70px;
$collapseNavBreakpoint: 2000px;
```

## Responsive Breakpoints

### Breakpoint Tokens

**File:** `connections/client/css/_layout.scss`

```scss
$mobileMaxWidth: 500px;
$tabletMaxWidth: 1000px;
```

### Media Query Usage

**File:** `connections/client/css/_grid.scss`

```scss
// Tablet and below
@media (max-width: 799px) {
    .columns:not(.break-mobile) {
        flex-direction: column;
    }
}

// Mobile
@media (max-width: 559px) {
    .columns {
        flex-direction: column;
    }
}
```

### Responsive Patterns

1. **Mobile-First Approach**: Base styles for mobile, enhanced for larger screens
2. **Column Stacking**: Columns automatically stack on mobile
3. **Navigation Collapse**: Sidebar collapses on smaller screens
4. **Touch-Friendly**: Larger tap targets on mobile

## Layout Primitives

### PilotPageContent

**File:** `connections/client/components/pilot-page-content.vue`

**Purpose:** Content wrapper with card-like styling.

**Features:**
- White background
- Border radius
- Box shadow
- Padding control
- Centered variant (`.pilot-page-centered`)

**Styling:**
```scss
.pilot-page-content {
    background-color: $backgroundColorPrimary;
    border-radius: $borderRadiusLarge;
    box-shadow: 0 4px 14px rgb(66, 61, 113, 0.08);
    padding: $spacingMediumLarge;
}
```

### Opposite Ends

**File:** `connections/client/components/layout/opposite-ends.vue`

**Purpose:** Layout utility for placing content at opposite ends.

### Spaced List

**File:** `connections/client/components/layout/spaced-list.vue`

**Purpose:** List layout with consistent spacing.

## Container Components

### Modal Layout

**File:** `connections/client/components/containers/modal.vue`

**Layout Structure:**
- Overlay backdrop
- Centered modal container
- Header (optional)
- Body
- Footer/actions (optional)

**Width Control:**
- Default width
- Custom width via `width` prop
- Responsive sizing

### Drawer Layout

**File:** `connections/client/components/containers/drawer.vue`

**Layout Structure:**
- Overlay backdrop
- Right-side drawer
- Header with close button
- Scrollable content area

**Width Control:**
- Default: 560px (2 * $spacingLarge + $fieldWidthBase)
- Custom width via `width` prop
- Full-bleed or padded content options

## Sticky Positioning

### Sticky Elements

**Token:** `$topForStickyPosition: $pageHeaderHasSecondaryNavHeight + $spacingMedium`

**Usage:** Elements that stick to top when scrolling, accounting for header height.

**Example:** Table headers, filters, navigation

## Layout Patterns

### Standard Page Layout

```
┌─────────────────────────────────────┐
│ Header (110px)                     │
├─────────────────────────────────────┤
│ Secondary Nav (40px, optional)     │
├─────────────────────────────────────┤
│                                     │
│  Main Content Area                 │
│  (max-width: 1440px, centered)     │
│  (padding: 20px top, 30px bottom)  │
│                                     │
└─────────────────────────────────────┘
```

### Admin Layout Structure

```
┌──────┬──────────────────────────────┐
│      │ Header                       │
│ Nav  ├──────────────────────────────┤
│      │ Secondary Nav (optional)     │
│      ├──────────────────────────────┤
│      │                              │
│      │  Main Content                │
│      │                              │
└──────┴──────────────────────────────┘
```

### Portal Layout Structure

```
┌─────────────────────────────────────┐
│ Portal Navigation                   │
├─────────────────────────────────────┤
│                                     │
│  Portal Content Area               │
│                                     │
└─────────────────────────────────────┘
```

### Modal Layout Structure

```
┌─────────────────────────────────────┐
│           Overlay                   │
│  ┌───────────────────────────────┐  │
│  │ Header + Close Button        │  │
│  ├───────────────────────────────┤  │
│  │                               │  │
│  │  Modal Body                   │  │
│  │                               │  │
│  ├───────────────────────────────┤  │
│  │ Actions (Left/Right)         │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

### Drawer Layout Structure

```
┌─────────────────────────────────────┐
│ Overlay │ Drawer (right side)       │
│         │ ┌───────────────────────┐ │
│         │ │ Header + Close       │ │
│         │ ├───────────────────────┤ │
│         │ │                       │ │
│         │ │  Scrollable Content   │ │
│         │ │                       │ │
│         │ └───────────────────────┘ │
└─────────────────────────────────────┘
```

## Responsive Strategies

### Mobile Optimization

1. **Column Stacking**: All columns stack vertically on mobile
2. **Reduced Padding**: `$pageMarginMobile` (20px) vs `$pageMargin` (40px)
3. **Navigation Collapse**: Sidebar collapses or becomes hamburger menu
4. **Touch Targets**: Minimum 40px height for interactive elements
5. **Simplified Layouts**: Reduced complexity on small screens

### Tablet Optimization

1. **Conditional Stacking**: Columns stack unless `.break-mobile` class applied
2. **Adaptive Navigation**: Sidebar may collapse or remain visible
3. **Medium Padding**: Uses standard spacing tokens

### Desktop Optimization

1. **Full Layout**: All columns visible, sidebar expanded
2. **Maximum Width**: Content constrained to 1440px max
3. **Hover States**: Full hover interactions enabled
4. **Expanded Navigation**: Full sidebar width (240px)

## Layout Recommendations

### Current State

✅ **Strengths:**
- Flexible grid system
- Responsive breakpoints defined
- Multiple layout options for different user types
- Consistent spacing system

⚠️ **Gaps:**
- No CSS Grid usage (only Flexbox)
- Breakpoint tokens not consistently used
- Layout components not well-documented
- No layout component library in Storybook
- Mixed layout approaches (some in components, some in layouts)

### Recommendations

1. **Document Layout Patterns** - Create Storybook stories for each layout
2. **Standardize Breakpoints** - Use breakpoint tokens consistently
3. **Create Layout Components** - Extract common layout patterns into reusable components
4. **Add CSS Grid Support** - Consider CSS Grid for complex layouts
5. **Responsive Testing** - Ensure all layouts work across breakpoints
6. **Layout Documentation** - Document when to use which layout

## Layout Component Usage

### Most Common Layouts

1. **PageWrapper** - Used on every page
2. **PilotPageContent** - Common content wrapper
3. **Modal** - Overlay dialogs
4. **Drawer** - Side panels
5. **SplitLayout** - Two-column layouts

### Layout Naming Conventions

- Layout components in `layouts/` directory
- Architecture components in `components/architecture/`
- Layout utilities in `components/layout/`

