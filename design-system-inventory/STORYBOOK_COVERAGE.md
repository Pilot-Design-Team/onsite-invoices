# Storybook Coverage Report

This document maps Storybook stories to components and identifies coverage gaps.

**Total Stories Found:** ~603 story files  
**Total Components:** ~352 Vue components  
**Coverage:** ~60% (estimated, many stories cover multiple components)

## Story Organization

### Story Naming Convention

Stories follow the pattern: `{component-name}.stories.{js|ts}`

**Examples:**
- `base-button.stories.js`
- `pilot-card.stories.js`
- `modal-dialog.stories.ts`

### Story Location

All stories are located in: `connections/stories/`

### Story Structure

Stories use Storybook's component story format (CSF) or older format:

```javascript
export default {
    title: "Design System/Buttons/Base Button",
    component: BaseButton,
    argTypes: { ... }
};
```

## Story Coverage by Component Category

### Base/Primitive Components

| Component | Story File | Status | Notes |
|-----------|------------|--------|-------|
| BaseButton | `base-button.stories.js` | ✅ | Comprehensive coverage |
| BaseCircleButton | - | ❌ | Missing |
| BaseCloseButton | - | ❌ | Missing |
| BasePrimaryNav | - | ❌ | Missing |
| BaseTableBordered | `deprecated-base-table-bordered.stories.js` | ✅ | Deprecated component |

### Pilot Design System Components

| Component | Story File | Status | Notes |
|-----------|------------|--------|-------|
| PilotCard | Multiple stories | ✅ | Used in many stories |
| PilotText | Multiple stories | ✅ | Used extensively |
| PilotTitle | `pilot-title.stories.js` | ✅ | Has story |
| PilotTag | - | ❌ | Missing |
| PilotCheckbox | - | ❌ | Missing |
| PilotTooltip | `pilot-tooltip.stories.js` | ✅ | Has story |
| PilotPopover | `pilot-popover.stories.js` | ✅ | Has story |
| PilotPopoverTooltip | - | ❌ | Missing |
| PilotSwitcher | - | ❌ | Missing |
| PilotSidebar | - | ❌ | Missing |
| PilotPagination | `pilot-pagination.stories.js` | ✅ | Has story |
| PilotPageContent | - | ❌ | Missing |
| PilotBanner | `pilot-banner.stories.js` | ✅ | Has story |
| PilotBubble | `pilot-bubble.stories.js` | ✅ | Has story |
| PilotOnboardingCard | - | ❌ | Missing |
| PilotCoachmark | `coachmarks.stories.js` | ✅ | Has story |
| PilotAttachments | - | ❌ | Missing |

### Container Components

| Component | Story File | Status | Notes |
|-----------|------------|--------|-------|
| Modal | `modal.stories.js` | ✅ | Has story |
| ModalDialog | `modal-dialog.stories.ts` | ✅ | Has story |
| Drawer | `drawer.stories.js` | ✅ | Has story |
| Expander | `expander.stories.js` | ✅ | Has story |
| Trouser | `trouser.stories.js` | ✅ | Has story |
| StaticContainer | `static-container.stories.js` | ✅ | Has story |
| DotList | - | ❌ | Missing |

### Form Components

| Component | Story File | Status | Notes |
|-----------|------------|--------|-------|
| InputCheckbox | `input-checkbox.stories.js` | ✅ | Has story |
| Multiselect | `multiselect.stories.js` | ✅ | Has story |
| DatePicker | `date-picker.stories.js` | ✅ | Has story |
| MonthPicker | `month-picker.stories.js` | ✅ | Has story |
| MonthAndYearPicker | `month-and-year-picker.stories.js` | ✅ | Has story |
| PasswordInput | - | ❌ | Missing |
| InputActive | - | ❌ | Missing |
| InputList | `input-list.stories.js` | ✅ | Has story |
| LabeledInputRow | `labeled-input-row.stories.js` | ✅ | Has story |
| RemovableTextInput | - | ❌ | Missing |
| ValidationWrapper | `validation-wrapper.stories.js` | ✅ | Has story |
| ValidationMessage | `validation-message.stories.js` | ✅ | Has story |
| FormErrors | `form-errors.stories.js` | ✅ | Has story |
| RadioButtons | - | ❌ | Missing |
| BoolPicker | - | ❌ | Missing |
| Toggle | `toggles.stories.js` | ✅ | Has story |
| CountryPicker | - | ❌ | Missing |
| UsStatePicker | - | ❌ | Missing |
| EntityTypePicker | - | ❌ | Missing |
| GroupSelect | `group-select.stories.js` | ✅ | Has story |
| CheckboxList | `checkbox-list.stories.js` | ✅ | Has story |
| ListEditor | `list-editor.stories.js` | ✅ | Has story |

### Table Components

| Component | Story File | Status | Notes |
|-----------|------------|--------|-------|
| PilotTable | Multiple stories | ✅ | Used in many table stories |
| PilotTableData | - | ❌ | Missing individual story |
| PilotTableHeader | - | ❌ | Missing individual story |
| PilotTableHeaderCell | - | ❌ | Missing individual story |
| PilotTableRow | - | ❌ | Missing individual story |
| PilotTableRowCell | - | ❌ | Missing individual story |
| PilotTablePagination | - | ❌ | Missing individual story |
| PilotTableBulkActions | - | ❌ | Missing individual story |
| PilotTableDateCell | - | ❌ | Missing individual story |
| PilotTableCurrencyCell | - | ❌ | Missing individual story |
| PilotTableCategoryCell | - | ❌ | Missing individual story |
| PilotTableVendorAndLogoCell | - | ❌ | Missing individual story |
| PilotTableAmountAndTxnTypeCell | - | ❌ | Missing individual story |
| PilotTableTransactionTypeCell | - | ❌ | Missing individual story |
| PilotTableTxnMemoCell | - | ❌ | Missing individual story |
| PilotTableMarkdownCell | - | ❌ | Missing individual story |
| PilotTableFilter | - | ❌ | Missing individual story |
| PilotTableSearchFilter | - | ❌ | Missing individual story |
| PilotTableMultiselectFilter | - | ❌ | Missing individual story |
| PilotTableDateRangeFilter | - | ❌ | Missing individual story |
| TableFilter | `table-filter.stories.js` | ✅ | Has story (legacy) |

### Navigation Components

| Component | Story File | Status | Notes |
|-----------|------------|--------|-------|
| NavigationHeader | `navigation-header.stories.js` | ✅ | Has story |
| TertiaryNav | `tertiary-nav.stories.js` | ✅ | Has story |
| Tabs | `tabs.stories.js` | ✅ | Has story |
| TaxPartnerNav | - | ❌ | Missing |

### Feedback Components

| Component | Story File | Status | Notes |
|-----------|------------|--------|-------|
| Loading | `loading.stories.js` | ✅ | Has story |
| FancyLoading | `fancy-loading.stories.js` | ✅ | Has story |
| FancyLoadingDots | `fancy-loading-dots.stories.js` | ✅ | Has story |
| LoadingSkeleton | - | ❌ | Missing |
| ShimmerLoading | - | ❌ | Missing |
| LoadingError | `loading-error.stories.js` | ✅ | Has story |
| Toasts | `toasts.stories.js` | ✅ | Has story |
| SnackBar | `snack-bar.stories.ts` | ✅ | Has story |
| PortalBanner | - | ❌ | Missing |
| PortalEmpty | `portal-empty.stories.js` | ✅ | Has story |
| ErrorForbidden | `error-forbidden.stories.ts` | ✅ | Has story |

### Other Components

| Component | Story File | Status | Notes |
|-----------|------------|--------|-------|
| Accordion | `accordions.stories.js` | ✅ | Has story |
| Collapsible | `collapsible.stories.js` | ✅ | Has story |
| StepsList | `steps-list.stories.js` | ✅ | Has story |
| TroubleshootingSteps | `troubleshooting-steps.stories.js` | ✅ | Has story |
| Speedbump | `speedbump.stories.js` | ✅ | Has story |
| Veilable | `veilable.stories.js` | ✅ | Has story |
| Revealable | - | ❌ | Missing |
| StickyBubble | `sticky-bubble.stories.js` | ✅ | Has story |
| HoverBubble | `hover-bubble.stories.js` | ✅ | Has story |
| InfoTooltip | `info-tooltip.stories.js` | ✅ | Has story |
| NoticeCard | `notice-card.stories.js` | ✅ | Has story |
| NotificationBadge | `notification-badge.stories.js` | ✅ | Has story |
| ProgressBar | - | ❌ | Missing |
| TrafficLight | `traffic-light.stories.js` | ✅ | Has story |
| SmallText | `small-text.stories.js` | ✅ | Has story |
| SafeMarkdown | - | ❌ | Missing |
| UserAvatar | - | ❌ | Missing |
| VendorLogo | `vendor-logo.stories.js` | ✅ | Has story |
| FileCard | `file-card.stories.js` | ✅ | Has story |
| FileCardUploadable | `file-card-uploadable.stories.js` | ✅ | Has story |
| FilePicker | `file-picker.stories.js` | ✅ | Has story |
| DragAndDropFilePicker | `drag-and-drop-file-picker.stories.js` | ✅ | Has story |

## Story Categories

### Design System Stories

Stories organized under "Design System" category:
- `Design System/Buttons/Base Button`
- `Design System/...`

### Feature Stories

Many stories are feature-specific and not part of the design system:
- Tax-related stories
- Customer portal stories
- Admin stories
- Connection stories

### Pattern Stories

Stories that demonstrate patterns:
- `forms.stories.js`
- `icons.stories.js`
- `colors.stories.js`
- `fonts.vue` / `font-ramp.stories.js`
- `spacing-ramp.stories.js`

## Story Conventions

### Story Naming

- Component stories: `{component-name}.stories.{js|ts}`
- Pattern stories: `{pattern-name}.stories.{js|ts}`
- Feature stories: `{feature-name}.stories.{js|ts}`

### Story Organization

Stories are organized by:
1. **Design System** - Core design system components
2. **Features** - Feature-specific components
3. **Patterns** - UI patterns and examples

### Story Format

**Modern (TypeScript):**
```typescript
export default {
    title: "Design System/...",
    component: ComponentName,
    argTypes: { ... }
};
```

**Legacy (JavaScript):**
```javascript
export default {
    title: "...",
    component: ComponentName
};
```

## Coverage Gaps

### Missing Stories for Design System Components

**High Priority:**
1. `base-circle-button.vue`
2. `base-close-button.vue`
3. `pilot-tag.vue`
4. `pilot-checkbox.vue`
5. `pilot-page-content.vue`
6. `page-wrapper.vue`
7. `password-input.vue`
8. `progress-bar.vue`

**Medium Priority:**
1. `pilot-switcher.vue`
2. `pilot-sidebar.vue`
3. `pilot-attachments.vue`
4. `pilot-popover-tooltip.vue`
5. `radio-buttons.vue`
6. `country-picker.vue`
7. `us-state-picker.vue`
8. `entity-type-picker.vue`

**Low Priority:**
1. Table cell components (covered in table stories)
2. Layout utilities
3. Icon components (covered in icons.stories.js)

### Stories Without Clear Component Mapping

Some stories may not map directly to a single component:
- `forms.stories.js` - Demonstrates form patterns
- `icons.stories.js` - Shows all icons
- `colors.stories.js` - Color palette
- `spacing-ramp.stories.js` - Spacing scale
- `font-ramp.stories.js` - Typography scale

These are pattern/documentation stories, not component stories.

## Story Quality

### Comprehensive Stories

Stories with good coverage:
- `base-button.stories.js` - Multiple variants, all props
- `pilot-card.stories.js` - All border variants
- `modal.stories.js` - Various modal configurations
- `drawer.stories.js` - Different drawer states

### Basic Stories

Stories with minimal coverage:
- Some stories only show default state
- Missing variant examples
- No interaction examples

## Recommendations

### High Priority

1. **Add Missing Design System Stories**
   - Base components
   - Pilot components
   - Commonly used components

2. **Improve Story Quality**
   - Add all variants
   - Include interaction examples
   - Document props and usage

3. **Organize Stories**
   - Consistent naming
   - Clear categorization
   - Design system vs feature stories

### Medium Priority

4. **Create Pattern Stories**
   - Form patterns
   - Table patterns
   - Modal patterns
   - Layout patterns

5. **Add Documentation Stories**
   - Color palette
   - Typography scale
   - Spacing scale
   - Icon library

### Low Priority

6. **Story Maintenance**
   - Keep stories up to date
   - Remove deprecated component stories
   - Consolidate duplicate stories

## Story Statistics

- **Total Stories:** ~603
- **Design System Stories:** ~150 (estimated)
- **Feature Stories:** ~450 (estimated)
- **Pattern Stories:** ~10 (estimated)
- **Component Coverage:** ~60% (estimated)

## Story File Types

- **JavaScript:** Most stories (`.stories.js`)
- **TypeScript:** Newer stories (`.stories.ts`)
- **Vue:** Pattern examples (`.vue` files in stories directory)

