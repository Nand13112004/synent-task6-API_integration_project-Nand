# Taskify — Modern Task Management Web App

Overview
- Taskify is a lightweight, feature-focused task management web application built with plain HTML, CSS, and Vanilla JavaScript. It delivers a modern glassmorphic UI, theme switching, task CRUD, filtering, sorting, persistence, toast notifications, and a canvas-based confetti celebration when tasks are completed.

**Objective**
- Build a responsive, accessible, and visually polished task manager implementing core productivity workflows: add, edit, complete, delete, categorize, prioritize, search, filter, sort, and persist data locally.

**Tools Used**
- Frontend: HTML5, CSS3 (custom properties, Grid, Flexbox)
- Logic: Vanilla JavaScript (ES6+, DOM API, LocalStorage, Canvas API)
- Fonts & Icons: Google Fonts and SVG/FontAwesome where applicable
- Development: local VS Code environment and simple file-based testing in browser

**Key Features**
- Core CRUD operations: create, read, update, and delete tasks
- Categorization: Work, Personal, Shopping, Health, Others
- Priority levels: Low, Medium, High
- Real-time search and status filters (All / Active / Completed)
- Sorting by creation date, due date, or priority
- Local persistence via `localStorage` (tasks + theme preference)
- Glassmorphic UI with smooth micro-animations and responsive layout
- Toast notifications for user feedback and a canvas confetti celebration

**Files**
- [INDEX.HTML](INDEX.HTML) — Application markup and UI containers
- [style6.css](style6.css) — Theme system, layout, glassmorphic styles, and responsive rules
- [script.js](script.js) — Application state, rendering pipeline, event handlers, persistence, and confetti engine

**Development / Implementation Notes**
1. Planning & Design
	- Chose glassmorphism as the visual language (backdrop-filter, translucency, soft shadows).
	- Defined CSS variables in `style6.css` for colors, spacing, and transitions to enable easy theme toggling.

2. HTML Structure (`INDEX.HTML`)
	- Semantic header with date and theme toggle.
	- Sidebar area for task creation and statistics.
	- Main content area for search, filters, sort controls, and the dynamic task list.
	- Modal container for editing tasks and a toast container for transient notifications.
	- A full-viewport `<canvas>` element reserved for confetti animations.

3. Styling (`style6.css`)
	- Implemented dark and light themes using a `data-theme` attribute to the root.
	- Built responsive grid layout that collapses into a single-column mobile view.
	- Added subtle transitions and animated ambient glow orbs to elevate polish.

4. Application Logic (`script.js`)
	- State management using in-memory arrays synchronized to `localStorage`.
	- Input sanitation and simple XSS-safe escaping when rendering user-provided text.
	- Unified filter / search / sort pipeline so controls compose predictably.
	- Toast system queues transient messages for create/update/delete actions.
	- Confetti engine uses simple particle physics on the canvas and triggers when all tasks are completed.

**How to Run**
1. Open [INDEX.HTML](INDEX.HTML) in a modern browser (drag file into the browser or use a local static server).
2. Use the UI to add tasks, assign categories and priorities, and experiment with filters and sorting.
3. Theme preference and tasks persist across reloads via `localStorage`.

**Outcome & Notes**
- Lightweight, zero-dependency app with a premium UI feel and responsive behavior.
- Ideal as a demonstration or a starting point for progressive enhancements (syncing to a backend, user accounts, or offline support).

If you want, I can:
- Add a small README demo GIF or screenshots
- Wire up a tiny local dev server script (e.g., `npm` + `serve`) for easier testing
- Expand inline code comments in `script.js` to explain the render pipeline

