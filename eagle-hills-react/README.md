# Eagle Hills Syria guide (React)

Source for `/eagle-hills-syria/`. Built with esbuild into `../eagle-hills-syria/app.js` and `app.css`.

- React 19, GSAP 3 (ScrollTrigger, SplitText), Lenis, Leaflet: vendored from their GitHub repositories in `vendor/`.
- React Bits components (MIT + Commons Clause, by David Haz) in `src/rb/`: SplitText, ScrollReveal, ShinyText, SpotlightCard, ClickSpark, Aurora, Threads, Particles, CircularGallery.
- Images are mirrored into `../eagle-hills-syria/media/` by `.github/workflows/fetch-media.yml`.

Build: `npm i react react-dom esbuild && node build.mjs`
