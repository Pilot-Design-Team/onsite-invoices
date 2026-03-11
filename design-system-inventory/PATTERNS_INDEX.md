# UI Patterns Index

This document catalogs repeated UI patterns found across the codebase, including forms, tables, modals, navigation, and other common patterns.

## Pattern Categories

### Form Patterns

#### Standard Form Layout
**Components:** `LabeledInputRow`, `ValidationWrapper`, `ValidationMessage`, `FormErrors`

**Pattern Description:** Standard form field with label, input, validation, and error messaging.

**Example Usage:**
- `connections/client/components/labeled-input-row.vue`
- `connections/client/components/validation-wrapper.vue`
- `connections/client/components/form-errors.vue`

**Key Features:**
- Label above or adjacent to input
- Validation error messages below input
- Required field indicators
- Inline validation feedback

#### Multi-Step Forms / Wizards
**Components:** `StepsList`, custom wizard components

**Pattern Description:** Multi-step form flows with step indicators.

**Example Usage:**
- `connections/client/components/steps-list.vue`
- `connections/stories/steps-list.stories.js`
- Bank connection wizards (see `connections/stories/bank-and-cc-wizard.stories.ts`)

**Key Features:**
- Step indicator showing progress
- Navigation between steps
- Step validation before proceeding

#### Inline Form Editing
**Components:** `ListEditor`, `InputList`, `RemovableTextInput`

**Pattern Description:** Editable lists and inline editing patterns.

**Example Usage:**
- `connections/client/components/list-editor.vue`
- `connections/client/components/input-list.vue`
- `connections/client/components/removable-text-input.vue`

**Key Features:**
- Add/remove items dynamically
- Inline editing capabilities
- Validation on edit

#### File Upload Patterns
**Components:** `FilePicker`, `DragAndDropFilePicker`, `FileCard`, `FileCardUploadable`

**Pattern Description:** File upload with drag-and-drop support.

**Example Usage:**
- `connections/client/components/file-picker.vue`
- `connections/client/components/drag-and-drop-file-picker.vue`
- `connections/client/components/file-card-uploadable.vue`
- `connections/client/components/upload/upload-row.vue`

**Key Features:**
- Drag and drop interface
- File preview cards
- Upload progress indication
- File type validation

### Table Patterns

#### Data Tables
**Components:** `PilotTable`, `PilotTableData`, `PilotTableHeader`, `PilotTableRow`, `PilotTablePagination`

**Pattern Description:** Standard data table with sorting, pagination, and filtering.

**Example Usage:**
- `connections/client/components/tables/pilot-table.vue`
- `connections/stories/transactions-table.stories.ts`
- `connections/stories/vendor-mapping-table.stories.ts`

**Key Features:**
- Sortable columns
- Pagination
- Row selection
- Bulk actions
- Custom cell renderers

#### Table Filtering
**Components:** `PilotTableFilter`, `PilotTableSearchFilter`, `PilotTableMultiselectFilter`, `PilotTableDateRangeFilter`, `TableFilter`

**Pattern Description:** Table filtering with search, multiselect, and date range filters.

**Example Usage:**
- `connections/client/components/tables/table-filters/pilot-table-filter.vue`
- `connections/client/components/table-filter.vue`
- `connections/stories/table-filter.stories.js`

**Key Features:**
- Search/filter bar
- Multiple filter types
- Filter state management
- Clear filters action

#### Transaction Tables
**Components:** Transaction-specific table cells and components

**Pattern Description:** Specialized tables for displaying financial transactions.

**Example Usage:**
- `connections/client/components/tables/pilot-table-amount-and-txn-type-cell.vue`
- `connections/client/components/tables/pilot-table-vendor-and-logo-cell.vue`
- `connections/client/components/tables/pilot-table-category-cell.vue`
- `connections/stories/transactions-table.stories.ts`

**Key Features:**
- Currency formatting
- Transaction type indicators
- Vendor logos
- Category display
- Memo/notes display

### Modal Patterns

#### Standard Modal Dialog
**Components:** `Modal`, `ModalDialog`

**Pattern Description:** Full-screen overlay modal with header, body, and actions.

**Example Usage:**
- `connections/client/components/containers/modal.vue`
- `connections/client/components/containers/modal-dialog.vue`
- `connections/stories/modal.stories.js`
- `connections/stories/modal-dialog.stories.ts`

**Key Features:**
- Overlay backdrop
- Centered content
- Header with close button
- Footer with action buttons
- Progress indicator support
- Click-outside-to-close

#### Confirmation Dialogs / Speedbumps
**Components:** `Speedbump`

**Pattern Description:** Confirmation dialogs for destructive actions.

**Example Usage:**
- `connections/client/components/speedbump.vue`
- `connections/stories/speedbump.stories.js`

**Key Features:**
- Warning message
- Confirm/cancel actions
- High z-index (600)

#### Drawer / Side Panel
**Components:** `Drawer`

**Pattern Description:** Side drawer that slides in from the right.

**Example Usage:**
- `connections/client/components/containers/drawer.vue`
- `connections/stories/drawer.stories.js`
- `connections/stories/transactions-drawer.stories.ts`
- `connections/stories/tax-drawer.stories.ts`

**Key Features:**
- Slides in from right
- Overlay backdrop
- Header with close button
- Full-bleed or padded content
- Report issue link option

### Navigation Patterns

#### Primary Navigation
**Components:** `BasePrimaryNav`, `NavigationHeader`, `PageWrapper`

**Pattern Description:** Main application navigation.

**Example Usage:**
- `connections/client/components/base-primary-nav.vue`
- `connections/client/components/navigation-header.vue`
- `connections/stories/navigation-header.stories.js`

**Key Features:**
- Logo/brand
- Main nav items
- User menu
- Responsive collapse

#### Tab Navigation
**Components:** `Tabs`, `TertiaryNav`

**Pattern Description:** Tab-based navigation for sections.

**Example Usage:**
- `connections/client/components/tabs.vue`
- `connections/client/components/tertiary-nav.vue`
- `connections/stories/tabs.stories.js`
- `connections/stories/tertiary-nav.stories.js`

**Key Features:**
- Active tab indication
- Tab switching
- Nested navigation support

#### Breadcrumbs / Secondary Navigation
**Pattern Description:** Secondary navigation showing current location.

**Example Usage:**
- Found in various page layouts
- Often combined with tertiary nav

### Empty States

**Components:** `PortalEmpty`, custom empty state components

**Pattern Description:** Empty state displays when no data is available.

**Example Usage:**
- `connections/client/components/portal-empty.vue`
- `connections/stories/portal-empty.stories.js`
- `connections/client/modules/customer-transactions/_components/portal-txns-empty-state.vue`
- `connections/stories/insights-404.stories.js`

**Key Features:**
- Illustrative icon/image
- Descriptive message
- Call-to-action button
- Helpful guidance

**Common Empty States:**
- No transactions
- No connections
- No reports
- No search results
- 404 pages

### Loading States

**Components:** `Loading`, `FancyLoading`, `FancyLoadingDots`, `LoadingSkeleton`, `ShimmerLoading`

**Pattern Description:** Loading indicators for async operations.

**Example Usage:**
- `connections/client/components/loading.vue`
- `connections/client/components/fancy-loading.vue`
- `connections/client/components/loading-skeleton.vue`
- `connections/client/components/shimmer-loading.vue`

**Key Features:**
- Spinner animations
- Skeleton screens
- Shimmer effects
- Progress indicators

**Loading Patterns:**
- **Spinner**: Simple rotating spinner (`Loading`)
- **Dots**: Animated dots (`FancyLoadingDots`)
- **Skeleton**: Placeholder content (`LoadingSkeleton`, `ShimmerLoading`)
- **Fancy**: Custom animated loading (`FancyLoading`)

### Notification Patterns

#### Toast Notifications
**Components:** `Toasts`, `SnackBar`

**Pattern Description:** Temporary notifications that appear and auto-dismiss.

**Example Usage:**
- `connections/client/components/toasts.vue`
- `connections/client/components/snack-bar.vue`
- `connections/stories/toasts.stories.js`
- `connections/stories/snack-bar.stories.ts`

**Key Features:**
- Auto-dismiss after timeout
- Stack multiple toasts
- Success/error/warning variants
- High z-index (700)

#### Banner Notifications
**Components:** `PilotBanner`, `PortalBanner`, `NoticeCard`

**Pattern Description:** Persistent banner notifications at top of page.

**Example Usage:**
- `connections/client/components/pilot-banner.vue`
- `connections/client/components/portal-banner.vue`
- `connections/client/components/notice-card.vue`
- `connections/stories/pilot-banner.stories.js`

**Key Features:**
- Dismissible
- Color-coded (success/warning/error)
- Persistent until dismissed
- Can be sticky

#### Notification Badge
**Components:** `NotificationBadge`

**Pattern Description:** Badge showing count of notifications.

**Example Usage:**
- `connections/client/components/notification-badge.vue`
- `connections/stories/notification-badge.stories.js`

### Card Patterns

#### Standard Card
**Components:** `PilotCard`

**Pattern Description:** Container card with padding and optional borders.

**Example Usage:**
- `connections/client/components/pilot-card.vue`
- Used extensively across views

**Key Features:**
- Padding control
- Border variants (none, default, error, highlight, etc.)
- Separated rows option
- Header slot

#### Onboarding Card
**Components:** `PilotOnboardingCard`

**Pattern Description:** Card variant for onboarding flows.

**Example Usage:**
- `connections/client/components/pilot-onboarding-card.vue`

### Accordion / Collapsible Patterns

**Components:** `Accordion`, `Collapsible`, `Expander`, `Trouser`, `StickyCollapsible`

**Pattern Description:** Expandable/collapsible content sections.

**Example Usage:**
- `connections/client/components/accordion.vue`
- `connections/client/components/collapsible.vue`
- `connections/client/components/containers/expander.vue`
- `connections/client/components/containers/trouser.vue`
- `connections/stories/accordions.stories.js`
- `connections/stories/collapsible.stories.js`

**Key Features:**
- Expand/collapse toggle
- Smooth animations
- Icon indicators
- Nested support

### Tooltip / Popover Patterns

**Components:** `PilotTooltip`, `PilotPopover`, `PilotPopoverTooltip`, `InfoTooltip`, `HoverBubble`, `StickyBubble`

**Pattern Description:** Contextual help and information overlays.

**Example Usage:**
- `connections/client/components/pilot-tooltip.vue`
- `connections/client/components/pilot-popover.vue`
- `connections/client/components/info-tooltip.vue`
- `connections/client/components/hover-bubble.vue`
- `connections/stories/pilot-tooltip.stories.js`
- `connections/stories/pilot-popover.stories.js`

**Key Features:**
- Hover or click trigger
- Positioned relative to trigger
- Rich content support
- Auto-dismiss on outside click

### Status Indicators

**Components:** `TrafficLight`, `TransactionType`, custom status components

**Pattern Description:** Visual status indicators (colors, icons, badges).

**Example Usage:**
- `connections/client/components/traffic-light.vue`
- `connections/client/components/transaction-type.vue`
- `connections/stories/traffic-light.stories.js`

**Key Features:**
- Color-coded (red/yellow/green)
- Icon-based
- Text labels
- Consistent across app

### Search Patterns

**Components:** `TableFilter` (search), `PilotTableSearchFilter`, custom search components

**Pattern Description:** Search interfaces with filters.

**Example Usage:**
- `connections/client/components/table-filter.vue`
- `connections/client/components/tables/table-filters/pilot-table-search-filter.vue`
- Various search implementations in modules

**Key Features:**
- Search input
- Filter dropdowns
- Clear search
- Search results highlighting

### Settings / Configuration Patterns

**Pattern Description:** Settings panels and configuration forms.

**Example Usage:**
- Customer settings views
- Admin settings
- Connection configuration

**Key Features:**
- Grouped settings
- Save/cancel actions
- Validation
- Success feedback

### Wizard / Onboarding Patterns

**Pattern Description:** Step-by-step onboarding and setup flows.

**Example Usage:**
- `connections/stories/bank-and-cc-wizard.stories.ts`
- `connections/stories/customer-add-new-wizard.stories.js`
- Trial onboarding flows

**Key Features:**
- Multi-step progression
- Step validation
- Progress indicator
- Back/next navigation
- Completion state

### Data Visualization Patterns

**Pattern Description:** Charts and data visualization components.

**Example Usage:**
- `connections/stories/burn-rate-chart.stories.js`
- `connections/stories/cash-chart.stories.ts`
- `connections/stories/monthly-trend-chart.stories.js`
- Various chart wrapper components

**Key Features:**
- Chart libraries integration
- Responsive sizing
- Interactive tooltips
- Legend and labels

## Pattern Usage Frequency

### Most Common Patterns

1. **Form Patterns** - Used extensively across all views
2. **Table Patterns** - Primary data display method
3. **Modal Patterns** - Common for confirmations and details
4. **Loading States** - Used for all async operations
5. **Empty States** - Standard for data-less views
6. **Card Patterns** - Primary container pattern
7. **Notification Patterns** - User feedback mechanism

### Pattern Duplication Issues

1. **Multiple Modal Implementations** - `Modal` vs `ModalDialog`
2. **Multiple Table Filter Implementations** - `TableFilter` vs `PilotTableFilter` variants
3. **Multiple Loading Components** - `Loading`, `FancyLoading`, `FancyLoadingDots`, `ShimmerLoading`
4. **Multiple Tooltip/Popover Components** - `PilotTooltip`, `PilotPopover`, `InfoTooltip`, `HoverBubble`
5. **Multiple Accordion/Collapsible Components** - `Accordion`, `Collapsible`, `Expander`, `Trouser`

## Pattern Recommendations

1. **Consolidate Modal Components** - Standardize on one modal implementation
2. **Unify Loading States** - Create single loading component with variants
3. **Standardize Tooltip/Popover** - Consolidate to one component system
4. **Document Pattern Usage** - Create pattern library documentation
5. **Create Pattern Examples** - Add pattern examples to Storybook

