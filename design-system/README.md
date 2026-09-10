# Siiru Design Library

Reusable CSS foundation for Siiru app projects. Import `siiru.css` after your reset, then use the `siiru-` prefixed classes so the library stays isolated from product-specific styles.

## Quick start

```html
<link rel="stylesheet" href="design-system/siiru.css">

<button class="siiru-button siiru-button--primary">
  Mulai sekarang <span class="siiru-button__icon">↗</span>
</button>
```

## Included

- Design tokens: color, typography, spacing, radius, elevation, motion, and breakpoints
- Typography utilities: display, heading, body, label, caption
- Buttons: primary, secondary, ghost, icon, and disabled states
- Form controls: label, input, select, textarea, helper/error text
- Surfaces: card, badge, divider, avatar, and alert
- Layout utilities: stack, cluster, grid, container
- Accessible focus states and reduced-motion support

Override tokens at the product level with `--siiru-*` variables; component markup does not need to change.
