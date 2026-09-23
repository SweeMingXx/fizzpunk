# Browser verification

Verified with Chromium / Playwright 1.51.1. Engine hooks are injected into test responses only.

- [x] Three.js r128 loads and the WebGL can renders
- [x] Flavor colors, nutrition, 360° spin and kickflip controls update without reload
- [x] Pack caps at 12, subtotal recalculates, checkout unlocks exactly at 12 and pack persists
- [x] Pack cannot go below zero; Escape closes the drawer and restores keyboard focus
- [x] Wholesale form blocks invalid input, previews valid drafts and supports editing
- [x] All regional boards contain 5 seed entries and tabs support keyboard navigation
- [x] Flap and pause/resume work; orb +5, straw +1 and ceiling collision are correct
- [x] Score submission switches region, sorts, prevents duplicates and persists with best score
- [x] Straw and ground AABB collisions, replay, auto-pause on dialog and audio toggle work
- [x] Ambient motion and ticker can be stopped independently
- [x] Automated axe WCAG 2 A/AA and 2.1 AA checks report no violations
- [x] Open pack dialog passes automated accessibility checks
- [x] No horizontal page overflow at 320, 375, 390, 768, 1024 and 1440px
- [x] Mobile navigation opens, navigates and closes correctly
- [x] Blocked Three.js and localStorage degrade gracefully
- [x] No uncaught browser JavaScript errors

Automated accessibility checks do not replace manual assistive-technology testing. [Desktop preview](desktop.png) · [Mobile preview](mobile.png).
