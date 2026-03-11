# Font System Documentation

## Font Family: Euclid Circular B

The Pilot design system uses **Euclid Circular B** as its primary typeface.

### Font Files

All font files are located in `design-system-inventory/fonts/` (local) and `connections/client/static/fonts/` (production).

#### Regular Weight (400)
- `EuclidCircularB-Regular-WebXL.woff2` - Primary format, larger file size
- `EuclidCircularB-Regular-WebXL.woff` - Fallback format
- `EuclidCircularB-Regular-WebS.woff2` - Smaller variant, optimized
- `EuclidCircularB-Regular-WebS.woff` - Fallback format

#### Semibold Weight (600/Bold)
- `EuclidCircularB-Semibold-WebXL.woff2` - Primary format, larger file size
- `EuclidCircularB-Semibold-WebXL.woff` - Fallback format
- `EuclidCircularB-Semibold-WebS.woff2` - Smaller variant, optimized
- `EuclidCircularB-Semibold-WebS.woff` - Fallback format

### Font Loading

Fonts are loaded via `@font-face` declarations in `connections/client/css/connections.scss`:

```scss
@font-face {
    font-family: Euclid;
    src: url("../static/fonts/EuclidCircularB-Regular-WebXL.woff2") format("woff2"),
        url("../static/fonts/EuclidCircularB-Regular-WebXL.woff") format("woff");
}

@font-face {
    font-family: Euclid;
    font-weight: bold;
    src: url("../static/fonts/EuclidCircularB-Semibold-WebXL.woff2") format("woff2"),
        url("../static/fonts/EuclidCircularB-Semibold-WebXL.woff") format("woff");
}
```

### Usage

The font is applied globally via the base styles in `connections/client/css/_base.scss`:

```scss
body {
    font-family: Euclid, sans-serif;
}
```

### Typography Scale

See [TOKENS_INDEX.md](./TOKENS_INDEX.md#typography-tokens) for the complete typography scale and font size tokens.

### Font Variants

- **WebXL**: Higher quality, larger file size. Used in production.
- **WebS**: Smaller file size, optimized for performance. Available but not currently used in production.

### Browser Support

- WOFF2: Modern browsers (Chrome, Firefox, Safari, Edge)
- WOFF: Fallback for older browsers
