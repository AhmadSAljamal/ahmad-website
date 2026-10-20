import { createRoot } from 'react-dom/client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';
import * as L from 'leaflet';
import ClickSpark from './rb/ClickSpark.jsx';
import App from './App.jsx';
import './site.css';
import './extra.css';

gsap.registerPlugin(ScrollTrigger, SplitText);
Object.assign(window, { gsap, ScrollTrigger, SplitText, Lenis, L });

const root = document.documentElement;
let saved = 'ar'; try { saved = localStorage.getItem('ehs-lang') || 'ar'; } catch (e) {}
root.lang = saved; root.dir = saved === 'ar' ? 'rtl' : 'ltr';

createRoot(document.getElementById('app')).render(
  <ClickSpark sparkColor="#7CF3FF" sparkSize={12} sparkRadius={26} sparkCount={10} duration={480} glow={0.6} layer="front" style={{ minHeight: '100vh' }}>
    <App />
  </ClickSpark>
);
