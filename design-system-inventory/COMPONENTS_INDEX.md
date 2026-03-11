# Design System Components Index

This document catalogs all Vue components found in the codebase, organized by type and location.

**Total Components Found:** ~352 Vue components  
**Last Updated:** Generated from codebase scan

## Component Categories

### Base/Primitive Components

These are foundational UI components that form the building blocks of the design system.

| Component Name | File Path | Type | Key Props | Slots | Storybook | Usage Notes |
|---------------|-----------|------|-----------|-------|-----------|-------------|
| BaseButton | `connections/client/components/base-button.vue` | primitive | action, size, disabled, loading, fullWidth, border, pill | default, left, right | ✅ `base-button.stories.js` | Primary button component. Supports: primary, secondary, danger, ghost, trial-primary actions |
| BaseCircleButton | `connections/client/components/base-circle-button.vue` | primitive | size, disabled | default | unknown | Circular button variant |
| BaseCloseButton | `connections/client/components/base-close-button.vue` | primitive | size | - | unknown | Close button with X icon |
| BasePrimaryNav | `connections/client/components/base-primary-nav.vue` | primitive | - | - | unknown | Primary navigation component |
| BaseTableBordered | `connections/client/components/base-table-bordered.vue` | primitive | - | - | ✅ `deprecated-base-table-bordered.stories.js` | **DEPRECATED** - Legacy table component |

### Pilot Design System Components

Components prefixed with `pilot-` are part of the newer design system.

| Component Name | File Path | Type | Key Props | Slots | Storybook | Usage Notes |
|---------------|-----------|------|-----------|-------|-----------|-------------|
| PilotCard | `connections/client/components/pilot-card.vue` | composed | padding, border, separatedRows, requiresPermissions | default, header, fallback | ✅ Multiple stories | Card container with border variants (none, default, error, highlight, etc.) |
| PilotText | `connections/client/components/pilot-text.vue` | primitive | tag, color, fontSize | default, left, right | ✅ Multiple stories | Typography component with color/font size options |
| PilotTitle | `connections/client/components/pilot-title.vue` | primitive | - | default | ✅ `pilot-title.stories.js` | Title component |
| PilotTag | `connections/client/components/pilot-tag.vue` | primitive | - | default | unknown | Tag/badge component |
| PilotCheckbox | `connections/client/components/pilot-checkbox.vue` | primitive | - | - | unknown | Checkbox component |
| PilotTooltip | `connections/client/components/pilot-tooltip.vue` | primitive | - | - | ✅ `pilot-tooltip.stories.js` | Tooltip component |
| PilotPopover | `connections/client/components/pilot-popover.vue` | primitive | - | - | ✅ `pilot-popover.stories.js` | Popover component |
| PilotPopoverTooltip | `connections/client/components/pilot-popover-tooltip.vue` | primitive | - | - | unknown | Popover tooltip variant |
| PilotSwitcher | `connections/client/components/pilot-switcher.vue` | primitive | - | - | unknown | Switch/toggle component |
| PilotSidebar | `connections/client/components/pilot-sidebar.vue` | layout | - | - | unknown | Sidebar component |
| PilotPagination | `connections/client/components/pilot-pagination.vue` | composed | - | - | ✅ `pilot-pagination.stories.js` | Pagination component |
| PilotPageContent | `connections/client/components/pilot-page-content.vue` | layout | - | default | unknown | Page content wrapper with styling |
| PilotBanner | `connections/client/components/pilot-banner.vue` | composed | - | - | ✅ `pilot-banner.stories.js` | Banner/notification component |
| PilotBubble | `connections/client/components/pilot-bubble.vue` | composed | - | - | ✅ `pilot-bubble.stories.js` | Bubble/popover component |
| PilotOnboardingCard | `connections/client/components/pilot-onboarding-card.vue` | composed | - | - | unknown | Onboarding card variant |
| PilotCoachmark | `connections/client/components/pilot-coachmark.vue` | composed | - | - | ✅ `coachmarks.stories.js` | Coachmark/tour component |
| PilotAttachments | `connections/client/components/pilot-attachments.vue` | composed | - | - | unknown | File attachments component |

### Container Components

Modal, drawer, and overlay components.

| Component Name | File Path | Type | Key Props | Slots | Storybook | Usage Notes |
|---------------|-----------|------|-----------|-------|-----------|-------------|
| Modal | `connections/client/components/containers/modal.vue` | container | shown, width, modalProgress, highlightActions | default, header, actions-left, actions-right, modal-body-header, modal-body-footer | ✅ `modal.stories.js` | Full modal dialog with header/body/actions |
| ModalDialog | `connections/client/components/containers/modal-dialog.vue` | container | - | - | ✅ `modal-dialog.stories.ts` | Alternative modal implementation |
| Drawer | `connections/client/components/containers/drawer.vue` | container | shown, width, showReportIssue, fullBleedContent | default, header | ✅ `drawer.stories.js` | Side drawer component |
| Expander | `connections/client/components/containers/expander.vue` | container | - | - | ✅ `expander.stories.js` | Expandable/collapsible container |
| Trouser | `connections/client/components/containers/trouser.vue` | container | - | - | ✅ `trouser.stories.js` | Accordion-like component |
| StaticContainer | `connections/client/components/containers/static-container.vue` | container | - | - | ✅ `static-container.stories.js` | Static container component |
| DotList | `connections/client/components/containers/dot-list.vue` | container | - | - | unknown | List with dot markers |

### Layout Components

Page structure and layout primitives.

| Component Name | File Path | Type | Key Props | Slots | Storybook | Usage Notes |
|---------------|-----------|------|-----------|-------|-----------|-------------|
| PageWrapper | `connections/client/components/page-wrapper.vue` | layout | layout, collapsed, navs | default, header, secondary-nav, tertiary-nav | unknown | Main page wrapper - routes to different layouts based on user state |
| SplitLayout | `connections/client/components/split-layout.vue` | layout | - | - | ✅ `split-layout.stories.js` | Split screen layout |
| OppositeEnds | `connections/client/components/layout/opposite-ends.vue` | layout | - | - | unknown | Layout for opposite-end alignment |
| SpacedList | `connections/client/components/layout/spaced-list.vue` | layout | - | - | unknown | List with spacing |

### Form Components

Input and form-related components.

| Component Name | File Path | Type | Key Props | Slots | Storybook | Usage Notes |
|---------------|-----------|------|-----------|-------|-----------|-------------|
| InputCheckbox | `connections/client/components/inputs/input-checkbox.vue` | form | - | - | ✅ `input-checkbox.stories.js` | Checkbox input |
| Multiselect | `connections/client/components/multiselect.vue` | form | - | - | ✅ `multiselect.stories.js` | Multi-select dropdown |
| DatePicker | `connections/client/components/date-picker.vue` | form | - | - | ✅ `date-picker.stories.js` | Date picker component |
| MonthPicker | `connections/client/components/month-picker.vue` | form | - | - | ✅ `month-picker.stories.js` | Month picker |
| MonthAndYearPicker | `connections/client/components/month-and-year-picker.vue` | form | - | - | ✅ `month-and-year-picker.stories.js` | Month and year picker |
| PasswordInput | `connections/client/components/password-input.vue` | form | - | - | unknown | Password input with visibility toggle |
| InputActive | `connections/client/components/input-active.vue` | form | - | - | unknown | Active input state component |
| InputList | `connections/client/components/input-list.vue` | form | - | - | ✅ `input-list.stories.js` | List of inputs |
| LabeledInputRow | `connections/client/components/labeled-input-row.vue` | form | - | - | ✅ `labeled-input-row.stories.js` | Input with label row |
| RemovableTextInput | `connections/client/components/removable-text-input.vue` | form | - | - | unknown | Text input with remove button |
| ValidationWrapper | `connections/client/components/validation-wrapper.vue` | form | - | - | ✅ `validation-wrapper.stories.js` | Wrapper for form validation |
| ValidationMessage | `connections/client/components/validation-message.vue` | form | - | - | ✅ `validation-message.stories.js` | Validation error message |
| FormErrors | `connections/client/components/form-errors.vue` | form | - | - | ✅ `form-errors.stories.js` | Form error display |
| RadioButtons | `connections/client/components/radio-buttons.vue` | form | - | - | unknown | Radio button group |
| BoolPicker | `connections/client/components/bool-picker.vue` | form | - | - | unknown | Boolean picker |
| Toggle | `connections/client/components/toggle.vue` | form | - | - | ✅ `toggles.stories.js` | Toggle switch |
| CountryPicker | `connections/client/components/country-picker.vue` | form | - | - | unknown | Country selector |
| UsStatePicker | `connections/client/components/us-state-picker.vue` | form | - | - | unknown | US state selector |
| EntityTypePicker | `connections/client/components/entity-type-picker.vue` | form | - | - | unknown | Entity type selector |
| GroupSelect | `connections/client/components/group-select.vue` | form | - | - | ✅ `group-select.stories.js` | Grouped select dropdown |
| CheckboxList | `connections/client/components/checkbox-list.vue` | form | - | - | ✅ `checkbox-list.stories.js` | List of checkboxes |
| ListEditor | `connections/client/components/list-editor.vue` | form | - | - | ✅ `list-editor.stories.js` | Editable list component |

### Table Components

Table and data grid components.

| Component Name | File Path | Type | Key Props | Slots | Storybook | Usage Notes |
|---------------|-----------|------|-----------|-------|-----------|-------------|
| PilotTable | `connections/client/components/tables/pilot-table.vue` | composed | - | - | ✅ Multiple stories | Main table component |
| PilotTableData | `connections/client/components/tables/pilot-table-data.vue` | primitive | - | - | unknown | Table data wrapper |
| PilotTableHeader | `connections/client/components/tables/pilot-table-header.vue` | primitive | - | - | unknown | Table header |
| PilotTableHeaderCell | `connections/client/components/tables/pilot-table-header-cell.vue` | primitive | - | - | unknown | Table header cell |
| PilotTableRow | `connections/client/components/tables/pilot-table-row.vue` | primitive | - | - | unknown | Table row |
| PilotTableRowCell | `connections/client/components/tables/pilot-table-row-cell.vue` | primitive | - | - | unknown | Table row cell |
| PilotTablePagination | `connections/client/components/tables/pilot-table-pagination.vue` | composed | - | - | unknown | Table pagination |
| PilotTableBulkActions | `connections/client/components/tables/pilot-table-bulk-actions.vue` | composed | - | - | unknown | Bulk actions for table |
| PilotTableDateCell | `connections/client/components/tables/pilot-table-date-cell.vue` | cell | - | - | unknown | Date cell formatter |
| PilotTableCurrencyCell | `connections/client/components/tables/pilot-table-currency-cell.vue` | cell | - | - | unknown | Currency cell formatter |
| PilotTableCategoryCell | `connections/client/components/tables/pilot-table-category-cell.vue` | cell | - | - | unknown | Category cell formatter |
| PilotTableVendorAndLogoCell | `connections/client/components/tables/pilot-table-vendor-and-logo-cell.vue` | cell | - | - | unknown | Vendor with logo cell |
| PilotTableAmountAndTxnTypeCell | `connections/client/components/tables/pilot-table-amount-and-txn-type-cell.vue` | cell | - | - | unknown | Amount and transaction type cell |
| PilotTableTransactionTypeCell | `connections/client/components/tables/pilot-table-transaction-type-cell.vue` | cell | - | - | unknown | Transaction type cell |
| PilotTableTxnMemoCell | `connections/client/components/tables/pilot-table-txn-memo-cell.vue` | cell | - | - | unknown | Transaction memo cell |
| PilotTableMarkdownCell | `connections/client/components/tables/pilot-table-markdown-cell.vue` | cell | - | - | unknown | Markdown cell formatter |
| PilotTableFilter | `connections/client/components/tables/table-filters/pilot-table-filter.vue` | form | - | - | unknown | Table filter base |
| PilotTableSearchFilter | `connections/client/components/tables/table-filters/pilot-table-search-filter.vue` | form | - | - | unknown | Search filter |
| PilotTableMultiselectFilter | `connections/client/components/tables/table-filters/pilot-table-multiselect-filter.vue` | form | - | - | unknown | Multiselect filter |
| PilotTableDateRangeFilter | `connections/client/components/tables/table-filters/pilot-table-date-range-filter.vue` | form | - | - | unknown | Date range filter |
| TableFilter | `connections/client/components/table-filter.vue` | form | - | - | ✅ `table-filter.stories.js` | Legacy table filter |
| SortTh | `connections/client/components/sort-th.vue` | primitive | - | - | unknown | Sortable table header |
| SortArrow | `connections/client/components/sort-arrow.vue` | primitive | - | - | unknown | Sort arrow indicator |

### Navigation Components

Navigation and menu components.

| Component Name | File Path | Type | Key Props | Slots | Storybook | Usage Notes |
|---------------|-----------|------|-----------|-------|-----------|-------------|
| NavigationHeader | `connections/client/components/navigation-header.vue` | layout | - | - | ✅ `navigation-header.stories.js` | Navigation header component |
| TertiaryNav | `connections/client/components/tertiary-nav.vue` | navigation | - | - | ✅ `tertiary-nav.stories.js` | Tertiary navigation tabs |
| Tabs | `connections/client/components/tabs.vue` | navigation | - | - | ✅ `tabs.stories.js` | Tab navigation component |
| TaxPartnerNav | `connections/client/components/tax-partner-nav.vue` | navigation | - | - | unknown | Tax partner navigation |

### Feedback Components

Loading, error, and notification components.

| Component Name | File Path | Type | Key Props | Slots | Storybook | Usage Notes |
|---------------|-----------|------|-----------|-------|-----------|-------------|
| Loading | `connections/client/components/loading.vue` | feedback | - | - | ✅ `loading.stories.js` | Loading spinner |
| FancyLoading | `connections/client/components/fancy-loading.vue` | feedback | - | - | ✅ `fancy-loading.stories.js` | Animated loading component |
| FancyLoadingDots | `connections/client/components/fancy-loading-dots.vue` | feedback | - | - | ✅ `fancy-loading-dots.stories.js` | Loading dots animation |
| LoadingSkeleton | `connections/client/components/loading-skeleton.vue` | feedback | - | - | unknown | Skeleton loading state |
| ShimmerLoading | `connections/client/components/shimmer-loading.vue` | feedback | - | - | unknown | Shimmer loading effect |
| LoadingError | `connections/client/components/loading-error.vue` | feedback | - | - | ✅ `loading-error.stories.js` | Error state component |
| Toasts | `connections/client/components/toasts.vue` | feedback | - | - | ✅ `toasts.stories.js` | Toast notification system |
| SnackBar | `connections/client/components/snack-bar.vue` | feedback | - | - | ✅ `snack-bar.stories.ts` | Snackbar notification |
| PortalBanner | `connections/client/components/portal-banner.vue` | feedback | - | - | unknown | Portal banner notification |
| PortalEmpty | `connections/client/components/portal-empty.vue` | feedback | - | - | ✅ `portal-empty.stories.js` | Empty state component |
| ErrorForbidden | `connections/client/components/error-forbidden.vue` | feedback | - | - | ✅ `error-forbidden.stories.ts` | 403 error component |

### Icon Components

SVG icon components (located in `components/svg/`).

**Note:** There are 100+ icon components. Key ones include:
- `icon-check.vue`, `icon-checkmark.vue`, `icon-x.vue`
- `icon-search.vue`, `icon-filter.vue`, `icon-settings.vue`
- `icon-calendar.vue`, `icon-clock.vue`
- `icon-caution.vue`, `icon-alert-error.vue`, `icon-alert-warning.vue`
- `icon-chevron.vue`, `icon-arrow.vue`
- `pilot-logo.vue`, `pilot-icon.vue`

**Full list:** See `connections/client/components/svg/` directory (100+ files)

### Other Components

| Component Name | File Path | Type | Key Props | Slots | Storybook | Usage Notes |
|---------------|-----------|------|-----------|-------|-----------|-------------|
| Accordion | `connections/client/components/accordion.vue` | composed | - | - | ✅ `accordions.stories.js` | Accordion component |
| Collapsible | `connections/client/components/collapsible.vue` | composed | - | - | ✅ `collapsible.stories.js` | Collapsible section |
| StepsList | `connections/client/components/steps-list.vue` | composed | - | - | ✅ `steps-list.stories.js` | Step indicator list |
| TroubleshootingSteps | `connections/client/components/troubleshooting-steps.vue` | composed | - | - | ✅ `troubleshooting-steps.stories.js` | Troubleshooting steps display |
| Speedbump | `connections/client/components/speedbump.vue` | composed | - | - | ✅ `speedbump.stories.js` | Confirmation dialog |
| Veilable | `connections/client/components/veilable.vue` | composed | - | - | ✅ `veilable.stories.js` | Component that can be veiled/covered |
| Revealable | `connections/client/components/revealable.vue` | composed | - | - | unknown | Revealable content |
| StickyBubble | `connections/client/components/sticky-bubble.vue` | composed | - | - | ✅ `sticky-bubble.stories.js` | Sticky tooltip/bubble |
| HoverBubble | `connections/client/components/hover-bubble.vue` | composed | - | - | ✅ `hover-bubble.stories.js` | Hover tooltip |
| InfoTooltip | `connections/client/components/info-tooltip.vue` | composed | - | - | ✅ `info-tooltip.stories.js` | Information tooltip |
| NoticeCard | `connections/client/components/notice-card.vue` | composed | - | - | ✅ `notice-card.stories.js` | Notice/alert card |
| NotificationBadge | `connections/client/components/notification-badge.vue` | composed | - | - | ✅ `notification-badge.stories.js` | Notification badge |
| ProgressBar | `connections/client/components/progress-bar.vue` | composed | - | - | unknown | Progress bar |
| TrafficLight | `connections/client/components/traffic-light.vue` | composed | - | - | ✅ `traffic-light.stories.js` | Status indicator (red/yellow/green) |
| SmallText | `connections/client/components/small-text.vue` | primitive | - | - | ✅ `small-text.stories.js` | Small text component |
| SafeMarkdown | `connections/client/components/safe-markdown.vue` | composed | - | - | unknown | Safe markdown renderer |
| UserAvatar | `connections/client/components/user-avatar.vue` | composed | - | - | unknown | User avatar component |
| VendorLogo | `connections/client/components/vendor-logo.vue` | composed | - | - | ✅ `vendor-logo.stories.js` | Vendor logo display |
| VendorHeading | `connections/client/components/vendor-heading.vue` | composed | - | - | unknown | Vendor heading component |
| FileCard | `connections/client/components/file-card.vue` | composed | - | - | ✅ `file-card.stories.js` | File card display |
| FileCardUploadable | `connections/client/components/file-card-uploadable.vue` | composed | - | - | ✅ `file-card-uploadable.stories.js` | Uploadable file card |
| FilePicker | `connections/client/components/file-picker.vue` | form | - | - | ✅ `file-picker.stories.js` | File picker input |
| DragAndDropFilePicker | `connections/client/components/drag-and-drop-file-picker.vue` | form | - | - | ✅ `drag-and-drop-file-picker.stories.js` | Drag and drop file picker |
| GatedRouterLink | `connections/client/components/gated-router-link.vue` | navigation | - | - | unknown | Router link with permission gating |
| RequiresPermissions | `connections/client/components/requires-permissions.vue` | composed | - | - | unknown | Permission wrapper component |
| FeatureUnlockGate | `connections/client/components/feature-unlock-gate.vue` | composed | - | - | ✅ `feature-unlock-gate.stories.ts` | Feature gate component |

## Component Usage Patterns

### Most Used Components (based on import patterns)

1. **BaseButton** - Used extensively across views and modules
2. **PilotCard** - Common container component
3. **PilotText** - Typography component
4. **Loading/FancyLoading** - Loading states
5. **Modal/Drawer** - Overlay components
6. **PageWrapper** - Page layout wrapper
7. **PilotTable** - Data tables
8. **ValidationWrapper/ValidationMessage** - Form validation

### Component Naming Conventions

- **`base-*`**: Base/primitive components (e.g., `base-button.vue`)
- **`pilot-*`**: Design system components (e.g., `pilot-card.vue`, `pilot-text.vue`)
- **`icon-*`**: Icon components in `svg/` directory
- **`pilot-table-*`**: Table-related components
- **No prefix**: Feature-specific or legacy components

### Deprecated Components

- **BaseTableBordered** - Marked as deprecated, has story file `deprecated-base-table-bordered.stories.js`

## Notes

- Component count: ~352 Vue files in `connections/client/components/`
- Story coverage: ~603 story files found
- Many components lack explicit Storybook stories
- Component organization mixes design system components with feature-specific components
- Some components are in `modules/` directory (feature-specific, not design system)

