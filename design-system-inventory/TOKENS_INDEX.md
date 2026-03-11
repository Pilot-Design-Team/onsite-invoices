# Design Tokens Index

This document catalogs all design tokens found in the codebase: colors, typography, spacing, borders, shadows, z-index, and motion values.

**Token System:** SCSS variables (primary), minimal CSS custom properties  
**Token Files:** `connections/client/css/_colors.scss`, `connections/client/css/_globals.scss`

## Token Sources

### Primary Token Files

1. **`connections/client/css/_colors.scss`**
   - Defines all color tokens
   - Exported to JavaScript via `connections/client/css/exports/_colors.scss`

2. **`connections/client/css/_globals.scss`**
   - Defines spacing, typography, borders, shadows, z-index, and sizing tokens

3. **`connections/client/css/_typography.scss`**
   - Typography styles and font size classes

4. **`connections/client/css/_layout.scss`**
   - Layout-specific tokens (page header heights, breakpoints)

5. **`connections/client/css/_button.scss`**
   - Button-specific styling (legacy, being replaced by BaseButton)

6. **`connections/client/css/_form.scss`**
   - Form input styling tokens

7. **`connections/client/css/_grid.scss`**
   - Grid system tokens

8. **`connections/client/css/_cards.scss`**
   - Card component styling

## Color Tokens

### Base Colors

Located in: `connections/client/css/_colors.scss`

```scss
$activeGreen: #3da291;
$brightBlue: #4f9bf3;
$brightPurple: #c8b6fc;
$brighterPurple: color.adjust($brightPurple, $lightness: 5%);
$ctaGreen: #47bfa4;
$darkGrey: #999;
$lightGrey: #f8f8f8;
$lightWarmGrey: #fcfcfc;
$matteBlue: #423d71;
$mattePurple: #473c70;
$offBlack: #3f3c3d;
$pastelBlue: #f9fafc;
$pastelUltramarine: #f3f5fa;
$pastelRed: #edd0d4;
$pastelViolet: #edeef5;
$highlightPurple: #e3dafd;
$pastelGreen: #e4f0cf;
$pilotPurple: #5f2ee5;
$pilotPurpleDark: #281350;
$pilotText: #3c2d89;
```

### Semantic Color System

```scss
// Brand colors
$brandColorPrimary: $pilotPurple;              // #5f2ee5
$brandColorPrimaryContrast: #fff;
$brandColorPrimaryDark: $pilotText;            // #3c2d89
$brandColorPrimaryDesaturated: color.adjust($brandColorPrimary, $lightness: 20%, $saturation: -30%);
$brandColorPrimaryLight: color.adjust($pilotPurple, $lightness: 10%);
$brandColorSecondary: $ctaGreen;                // #47bfa4

// Content colors
$contentColorPrimary: $offBlack;                // #3f3c3d
$contentColorSecondary: #656363;                // 0.8 opacity on $contentColorPrimary
$contentColorTertiary: $darkGrey;               // #999

// Background colors
$backgroundColorPrimary: #fff;
$backgroundColorSecondary: $pastelUltramarine;  // #f3f5fa
$backgroundColorTertiary: $pastelViolet;         // #edeef5
$backgroundDarkPrimary: $matteBlue;            // #423d71
$backgroundDarkPrimaryContrast: #fff;
$backgroundDarkSecondary: $contentColorSecondary;
$backgroundDarkSecondaryContrast: #fff;
$backgroundTonalGrey: $lightGrey;              // #f8f8f8
$backgroundColorGrey: #e0e0e0;

// Border colors
$borderColorLight: #e0e0e0;
$borderColorLighter: #eff0f3;
$borderColorDark: color.adjust($borderColorLight, $lightness: -27%);

// Link colors
$linkColorPrimary: $activeGreen;                // #3da291
$linkColorSecondary: $brandColorPrimaryLight;
```

### Status Colors

```scss
// Blue
$blue1: $brightBlue;                            // #4f9bf3
$blue1Background: color.adjust($blue1, $lightness: 28%, $saturation: -30%);
$blue2: #06d;
$blue2Background: #edf5fe;

// Green
$green1: #68A400;
$green1Background: color.adjust($green1, $lightness: 48%, $saturation: -25%);
$green1Dark: color.adjust($green1, $lightness: -20%);

// Red
$red1: #ce1836;
$red1Background: color.adjust($red1, $lightness: 42%, $saturation: -35%);
$red1Desaturated: color.adjust($red1, $lightness: 25%, $saturation: -50%);
$red1Light: #ff879a;
$red2Background: #ffe7ea;
$powerButtonRed: #e1393f;
$backgroundColorDarkRed: #7c0e20;

// Yellow/Orange
$orange1: #F85C23;
$yellow1Background: #fff8de;
$yellow1: color.adjust($yellow1Background, $lightness: -20%);
$yellow1Border: #dcc46d;
$yellow1Text: #756012;
$warningYellow: #f4b13e;
$pilotTypeYellow: #FFE278;

// Purple
$purpleSelectionBackground: $highlightPurple;
$purpleSelectionHoverBackground: #d8d1f5;
```

### Portal Home Colors (100/200/300 scale)

```scss
// Green scale
$green100: #E4F0CF;  // soft
$green200: #AEDB8D;  // default
$green300: #55A840;  // deep

// Blue scale
$blue100: #B8D4F5;
$blue200: #4F9BF3;
$blue300: #06D;

// Red scale
$red100: #F7C3C3;
$red200: #EE8688;
$red300: #F05469;
```

### Trial Colors

```scss
$trialPurple: #563ddd;
$trialGrayishGreen: #d9e5cc;
$trialLightGreen: #c8d3bc;
$trialLightGrey: #DFDFDF;
```

### Color Export to JavaScript

Colors are exported to JavaScript via `connections/client/css/exports/_colors.scss` using CSS Modules `:export` syntax. This allows JavaScript/TypeScript code to reference SCSS color variables.

## Typography Tokens

Located in: `connections/client/css/_globals.scss`

### Font Sizes

```scss
$fontSizeMicro: 12px;
$fontSizeSmall: 13px;
$fontSizeBase: 15px;
$fontSizeMedium: 18px;
$fontSizeLarge: 24px;
$fontSizeLarger: 32px;
$fontSizeHuge: 48px;
$defaultLineHeightScalar: 1.5;
```

### Font Family

```scss
// Defined in connections.scss
font-family: Euclid, sans-serif;

// Font files (located in design-system-inventory/fonts/):
// Regular weight:
// - EuclidCircularB-Regular-WebXL.woff2 (primary, larger file)
// - EuclidCircularB-Regular-WebXL.woff (fallback)
// - EuclidCircularB-Regular-WebS.woff2 (smaller variant)
// - EuclidCircularB-Regular-WebS.woff (fallback)

// Bold/Semibold weight:
// - EuclidCircularB-Semibold-WebXL.woff2 (primary, larger file)
// - EuclidCircularB-Semibold-WebXL.woff (fallback)
// - EuclidCircularB-Semibold-WebS.woff2 (smaller variant)
// - EuclidCircularB-Semibold-WebS.woff (fallback)

// Production location: connections/client/static/fonts/
// Design system location: design-system-inventory/fonts/
```

**Font Details:**
- **Font Family:** Euclid (Euclid Circular B)
- **Weights:** Regular (400) and Semibold (600/bold)
- **Formats:** WOFF2 (primary) and WOFF (fallback)
- **Variants:** WebXL (larger, higher quality) and WebS (smaller, optimized)
- **Usage:** WebXL variants are used in production (`connections.scss`)

### Typography Classes

Located in: `connections/client/css/_typography.scss`

```scss
.font-size-small    // 13px
.font-size-base     // 15px
.font-size-medium   // 18px
.font-size-large    // 24px
.font-size-larger   // 32px
.font-size-huge     // 48px
```

### Heading Styles

```scss
h1 {
    font-size: $fontSizeLarger;  // 32px
    font-weight: bold;
    line-height: 1.07;
    margin: 0 0 $spacingMedium;
}

h2 {
    font-size: $fontSizeLarge;   // 24px
    font-weight: bold;
    line-height: 1.05;
    margin: 0 0 $spacingMedium;
}

h3 {
    font-size: $fontSizeMedium;  // 18px
    font-weight: bold;
    line-height: 1.05;
    margin: 0 0 $spacingSmall;
}
```

## Spacing Tokens

Located in: `connections/client/css/_globals.scss`

```scss
$spacingSmallest: 2px;
$spacingSmaller: 6px;
$spacingSmall: 10px;
$spacingMediumSmall: 15px;
$spacingMedium: 20px;
$spacingMediumLarge: 30px;
$spacingLarge: 40px;
$spacingLarger: 80px;
$spacingHuge: 120px;
$spacingMassive: 180px;
$spacingSuperMassive: 240px;
```

### Spacing Usage Pattern

- **Smallest/Smaller**: Tight spacing (2px, 6px)
- **Small**: Small gaps (10px)
- **Medium**: Default spacing (20px)
- **MediumSmall/MediumLarge**: Intermediate (15px, 30px)
- **Large**: Section spacing (40px)
- **Larger**: Major sections (80px)
- **Huge/Massive/SuperMassive**: Page-level spacing (120px+)

## Border Radius Tokens

Located in: `connections/client/css/_globals.scss`

```scss
$borderRadiusSmall: 3px;
$borderRadiusMedium: 4px;
$borderRadiusLarge: 5px;
```

## Shadow Tokens

Located in: `connections/client/css/_globals.scss`

```scss
$flyoutShadow: 0 2px 8px rgb(0, 0, 0, 0.25);
$purpleShadow: 0 2px 8px 0 rgba(colors.$brandColorPrimaryLight, 0.1), 0 0 3px 0 colors.$pilotPurple;
```

### Additional Shadows (found in components)

- Modal shadow: `0 0 9px rgb(0, 0, 0, 0.5)` (in `_globals.scss` mixin)
- Card shadow: `0 4px 14px rgb(66, 61, 113, 0.08)` (in `pilot-page-content.vue`)

## Z-Index Tokens

Located in: `connections/client/css/_globals.scss`

```scss
$zIndexBase: 1;
$zIndexFlyout: 100;
$zIndexNav: 200;
$zIndexSecondaryView: 300;
$zIndexDrawer: 400;
$zIndexModal: 500;
$zIndexSpeedbump: 600;
$zIndexToast: 700;
```

### Z-Index Usage

- **Base (1)**: Default stacking
- **Flyout (100)**: Dropdowns, popovers
- **Nav (200)**: Navigation elements
- **SecondaryView (300)**: Secondary views/panels
- **Drawer (400)**: Side drawers
- **Modal (500)**: Modal dialogs
- **Speedbump (600)**: Confirmation dialogs
- **Toast (700)**: Toast notifications (highest)

## Layout Tokens

### Page Dimensions

Located in: `connections/client/css/_globals.scss` and `_layout.scss`

```scss
// Page margins and padding
$pageMargin: $spacingLarge;                    // 40px
$pageMarginMobile: $spacingMedium;             // 20px
$pagePaddingTop: $spacingMedium;               // 20px
$pagePaddingBottom: $spacingMediumLarge;       // 30px
$pageWidthMax: 1440px;

// Header heights
$pageHeaderDefaultHeight: 110px;
$pageHeaderHasSecondaryNavHeight: 150px;
$pageHeaderHeight: 110px;                     // in _layout.scss
$secondaryNavHeight: 40px;                    // in _layout.scss
$topForStickyPosition: $pageHeaderHasSecondaryNavHeight + $spacingMedium;

// Non-admin specific
$nonAdminTitleHeight: 34px;
$nonAdminHeaderHeight: 144px;

// Navigation
$expandedNavWidth: 240px;
$collapsedNavWidth: 70px;
$collapseNavBreakpoint: 2000px;
```

### Form/Input Dimensions

```scss
$inputPaddingTop: 9px;
$inputPaddingBottom: 10px;
$inputPaddingHorizontal: 12px;
$fieldWidthBase: 480px;
$fieldWidthWide: 720px;
$fieldHeight: 71px;
$fieldValueHeight: 40px;
$defaultButtonHeight: $fieldValueHeight;      // 40px
```

### Breakpoints

Located in: `connections/client/css/_layout.scss` and `_grid.scss`

```scss
$mobileMaxWidth: 500px;
$tabletMaxWidth: 1000px;
```

### Media Query Breakpoints (from _grid.scss)

```scss
@media (max-width: 799px) { /* Tablet and below */ }
@media (max-width: 559px) { /* Mobile */ }
```

### Other Layout Tokens

```scss
$flowbotItemPadding: 6px;
$flowbotTaskMaxWidth: 920px;
$flowbotTaskLeftGutterWidth: 160px;
$flowbotTaskRightGutterWidth: 400px;
$flowbotCheckboxWidth: 32px;
$primaryNavAdjacentBoxShadow: inset 2px 0 0 rgb(66, 61, 113, 0.06);
$pilotBackgroundTopHeight: 270px;
$userAvatarSize: 34px;
```

## Motion/Duration Tokens

Located in: `connections/client/css/_globals.scss`

```scss
$modalAppearDuration: 0.25s;
```

### CSS Variables (Limited Usage)

Found in specific components:

```scss
// sparkle-button.vue
--background-color
--border-color
--border-radius
--text-color
--hover-background-color
--hover-border-color
--hover-text-color
--font-size

// shimmer-loading.vue
--shimmer-base
--row-height
--animation-speed
--shimmer-highlight

// fancy-loading-dots.vue
--animation-order

// tax-1099-2021/draft-contractors-2021.vue
--size
```

**Note:** CSS custom properties are used sparingly, primarily for component-specific theming. The design system primarily uses SCSS variables.

## Token System Maturity Assessment

### ✅ Strengths

1. **Comprehensive color system** - Well-organized semantic colors
2. **Consistent spacing scale** - Clear spacing ramp from 2px to 240px
3. **Typography scale** - Defined font sizes with clear hierarchy
4. **Z-index system** - Organized layering system
5. **JavaScript export** - Colors exported for JS/TS usage

### ⚠️ Gaps

1. **No CSS custom properties** - Primarily SCSS variables, not CSS variables
2. **No token JSON/YAML** - No style-dictionary or design token format
3. **Limited motion tokens** - Only one duration token found
4. **No breakpoint tokens** - Breakpoints defined inline in media queries
5. **Mixed naming conventions** - Some camelCase (`$fontSizeBase`), some kebab-case would be better
6. **No design token documentation** - Tokens not documented in a design tool format

### Recommendations

1. **Migrate to CSS custom properties** - Enable runtime theming and better browser support
2. **Create token JSON/YAML** - Export tokens in standard format (style-dictionary, Design Tokens W3C)
3. **Expand motion tokens** - Add easing functions, duration scale
4. **Document breakpoints** - Create breakpoint token system
5. **Standardize naming** - Consider kebab-case for CSS custom properties
6. **Token documentation** - Generate token documentation from source

## Token Usage Examples

### Colors in Components

```vue
<!-- Using SCSS variables -->
<style lang="scss">
@use "client/css/globals" as *;

.my-component {
    color: $contentColorPrimary;
    background: $backgroundColorSecondary;
    border: 1px solid $borderColorLight;
}
</style>
```

### Colors in JavaScript

```typescript
// Using exported colors
import colors from 'client/css/exports/_colors.scss';

const primaryColor = colors.$brandColorPrimary;
```

### Spacing in Components

```vue
<style lang="scss">
@use "client/css/globals" as *;

.my-component {
    padding: $spacingMedium;
    margin-bottom: $spacingLarge;
}
</style>
```

