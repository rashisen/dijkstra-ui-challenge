# Dijkstra UI Challenge

This project recreates a Figma-based UI design using HTML, CSS, and vanilla JavaScript.  
It includes 3 UI states: initial form, filled form, and result display.

## Setup

Just open `index.html` in your browser — no build tools or frameworks required.

## Structure

- `index.html` – Main layout
- `styles.css` – Figma-based styling
- `script.js` – Basic interactivity (optional)
- `assets/illustrations/` – Exported SVGs for each UI state


## Known Issues – Responsiveness

The current implementation is partially responsive, but there are known limitations:

- **Limited mobile support**  
  *Issue:* Layout does not adapt well on very small screens (e.g., phones under 480px).  
  *Impact:* Elements may appear cramped or overflow outside the viewport.  
  *Planned fix:* Add more granular media queries to support smaller breakpoints.

- **Fixed dimensions in layout**  
  *Issue:* Several layout sections use fixed pixel widths and paddings.  
  *Impact:* Layout may appear broken or misaligned on uncommon screen sizes.  
  *Planned fix:* Refactor layout to use flexible units (`%`, `vw`, `vh`) and improve responsiveness.

- **Dropdown icon misalignment**  
  *Issue:* The custom dropdown chevron icon may not align perfectly across all browsers.  
  *Impact:* Slight inconsistencies in dropdown alignment, especially in Safari and Firefox.  
  *Planned fix:* Use flexbox for better vertical alignment and test across major browsers.

- **Layout shift for form and result containers**  
  *Issue:* When the result box is shown, the combined layout may not gracefully stack on smaller screens.  
  *Impact:* Visual overlap or horizontal scrolling can occur on tablets and narrow windows.  
  *Planned fix:* Stack layout vertically below 768px width using media queries.

_Last updated: August 2, 2025_
_Author: Rashmi Senanayake_
