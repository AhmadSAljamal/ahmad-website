import { createRoot } from 'react-dom/client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';
import * as L from 'leaflet';
import App from './App.jsx';
import './site.css';
import './extra.css';

gsap.registerPlugin(ScrollTrigger, SplitText);
Object.assign(window, { gsap, ScrollTrigger, SplitText, Lenis, L });

const root = document.documentElement;
let saved = 'ar'; try { saved = localStorage.getItem('ehs-lang') || 'ar'; } catch (e) {}
root.lang = saved; root.dir = saved === 'ar' ? 'rtl' : 'ltr';

createRoot(document.getElementById('app')).render(
  <App />
);
