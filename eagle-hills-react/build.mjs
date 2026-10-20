// Build: node build.mjs  (esbuild; libraries vendored from their GitHub repos under ./vendor)
import { build } from 'esbuild';
import path from 'node:path';
const V = p => path.resolve('vendor', p);
const alias = {
  'gsap/ScrollTrigger': V('gsap/ScrollTrigger.js'),
  'gsap/SplitText': V('gsap/SplitText.js'),
  'gsap': V('gsap/index.js'),
  '@gsap/react': V('gsap-react/index.js'),
  'lenis': V('lenis/index.ts'),
  'leaflet': V('leaflet/Leaflet.js'),
};
await build({
  entryPoints: ['src/main.jsx'], bundle: true, minify: true, format: 'esm', target: ['es2020'],
  outfile: '../eagle-hills-syria/app.js', jsx: 'automatic', loader: { '.png': 'dataurl', '.js': 'jsx' },
  nodePaths: [process.env.NODE_DEPS || 'node_modules'], alias, define: { 'process.env.NODE_ENV': '"production"' },
  legalComments: 'none', logLevel: 'info'
});
