# FIZZPUNK ✳

A complete, responsive single-file fictional soda storefront and mini-game.

## Run
Open `index.html` in a modern browser, or serve the folder with `python -m http.server 8000`. Internet access is needed for Tailwind CDN, Poppins fonts, and Three.js **r128**; all custom CSS, application code, artwork and synthesized audio are inline. A CSS can illustration is used if WebGL or Three.js is unavailable. There are no image or audio file dependencies.

## Features
- Procedural beveled 3D can, metal lid/pull tab/rims, floating fizz, pointer drag, 360° spin and multi-axis kickflip.
- Three flavor themes with animated material colors and nutrition updates.
- Accessible native-dialog pack drawer, quantity caps, device-local persistence and demo order summary. US$3.00/can, 12 cans/US$36.00.
- Wholesale inquiry validation and local preview. No contact data is stored or sent.
- Flappy Can: 400×600 responsive canvas, fixed-timestep physics, straw collisions, +1 per cleared pair and +5 per orb, particles, synthesized audio, pause/resume/restart and local best score.
- Three regional boards with 5 sample players each, sorted local submissions and concept prizes.
- Keyboard controls, visible focus states, live announcements, reduced-motion support, manual ticker pause and graceful storage fallback.

## GitHub Pages
In **Settings → Pages → Build and deployment**, select **Deploy from a branch**, branch **main**, folder **/(root)** and save. GitHub then hosts the page at:

https://sweemingxx.github.io/fizzpunk/

This is a single static file: no build step, npm dependencies or secrets are required. The repository upload alone does not enable GitHub Pages; a repository administrator must select its publishing source if it is not already enabled.

## Game controls
Click **Let's get fizzy**, then tap/click the game or press **Space** while the canvas has focus. **Escape** or the pause button pauses/resumes. Losing window focus, leaving the game viewport, opening a dialog, or hiding the tab automatically pauses. Audio is muted initially; use the music button to enable it.

## Customize
Edit `flavors` in the inline script for color, sugar, calories, fiber and flavor notes. Edit both `.marquee-group` copies together for seamless ticker text. The matching product-card copy is static HTML. Palette, layout and typography are defined in the inline style block. All price references currently use USD.

## Honest demo boundaries
FIZZPUNK is fictional. Nutrition, retailer references and prizes are illustrative, not commercial or health claims. No contest is active. There is no real checkout, payment processor, order fulfillment, wholesale endpoint, shared leaderboard or anti-cheat system. Regional scores and pack state are saved only in this browser when localStorage is available. Do not use the local scoring implementation for a real prize competition; use server-authoritative scoring, authentication, rules and abuse protection first.

## Privacy
No analytics or backend requests are made by the application. The browser requests public dependencies from Google Fonts, Tailwind's CDN and cdnjs. Contact-form data stays in memory. The page can be made fully offline by vendoring those dependencies, but this version intentionally uses the requested CDNs.
