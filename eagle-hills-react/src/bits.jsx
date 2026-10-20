import SplitText from './rb/SplitText.jsx';
import ScrollReveal from './rb/ScrollReveal.jsx';
import ShinyText from './rb/ShinyText.jsx';
import SpotlightCard from './rb/SpotlightCard.jsx';
import CircularGallery from './rb/CircularGallery.jsx';
import Threads from './rb/Threads.jsx';
import Particles from './rb/Particles.jsx';
import Aurora from './rb/Aurora.jsx';
import { useLang } from './i18n.js';
import { M } from './media.js';

const still = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

export function HeroTitle(){
  const lang = useLang();
  const parts = lang === 'ar'
    ? [['من تلال ', 0], ['دمشق', 1], ['\n'], ['إلى مرفأ ', 0], ['اللاذقية', 1]]
    : [['From the hills of ', 0], ['Damascus', 1], ['\n'], ['to the marina of ', 0], ['Latakia', 1]];
  let d = 0;
  return (
    <h1 className="hero-title" key={lang}>
      {parts.map((p, i) => {
        if (p[0] === '\n') return <br key={i} />;
        const words = p[0].trim().split(/\s+/).length; const delay = 1500 + d * 90; d += words;
        return <SplitText key={i} tag="span" text={p[0].trim()} splitType="words" delay={90} duration={1.1}
          effect="rise" mask trigger="load" textAlign={lang === 'ar' ? 'right' : 'left'}
          className={(p[1] ? 'grad ' : '') + 'hero-seg'} from={{ opacity: 0, yPercent: 110 }} to={{ opacity: 1, yPercent: 0, delay: delay / 1000 }} />;
      })}
    </h1>
  );
}

export function RevealHeading({ ar, en }){
  const lang = useLang();
  return <ScrollReveal key={lang} containerClassName="rv-h2" textClassName="rv-h2-text" baseOpacity={0.12} baseRotation={2} blurStrength={6} wordAnimationEnd="bottom 55%">{lang === 'ar' ? ar : en}</ScrollReveal>;
}

export function Eyebrow({ ar, en }){
  const lang = useLang();
  return <p className="eyebrow"><ShinyText key={lang} text={lang === 'ar' ? ar : en} color="#9FF3FA" shineColor="#ffffff" speed={2.6} /></p>;
}

export function Spot({ children }){
  return <SpotlightCard className="spot-wrap" spotlightColor="rgba(47, 211, 224, 0.28)" intensity={0.22} borderGlow={0.8}>{children}</SpotlightCard>;
}

const GAL = [
  ['lat-marina', 'المارينا', 'The marina'], ['dam-vert', 'تلال دمشق', 'Damascus Heights'], ['lat-front', 'الواجهة البحرية', 'The waterfront'],
  ['lat-park', 'مدينة الألعاب', 'Theme park'], ['lat-life', 'الحياة على البحر', 'Life by the sea'], ['umayyad', 'الجامع الأموي', 'Umayyad Mosque'],
  ['khan', 'خان أسعد باشا', "Khan As'ad Pasha"], ['azm', 'قصر العظم', 'Azm Palace'], ['souq', 'سوق الحميدية', 'Al-Hamidiyah Souq'],
  ['coast-1', 'ساحل اللاذقية', 'Latakia coast'], ['coast-2', 'خليج اللاذقية', 'Latakia bay']
];
export function Gallery3D(){
  const lang = useLang();
  const items = GAL.map(g => ({ image: M(g[0]), text: lang === 'ar' ? g[1] : g[2] }));
  return (
    <div className="gal3d" data-lenis-prevent-wheel="">
      <CircularGallery key={lang} items={items} bend={2.4} textColor="#EAF7F8" borderRadius={0.06} scrollSpeed={2} scrollEase={0.06}
        font="600 26px Alexandria, IBM Plex Sans Arabic, sans-serif" autoScroll={still ? 0 : 0.4} itemAspect={0.72} />
      <p className="gal-hint">{lang === 'ar' ? 'اسحب أو مرّر للتنقل بين الصور' : 'Drag or scroll to browse'}</p>
    </div>
  );
}

const Bg = ({ children }) => <div className="rb-bg" aria-hidden="true">{children}</div>;
export const RBThreads = () => <Bg><Threads color={[0.18, 0.83, 0.88]} accentColor={[0.95, 0.82, 0.6]} amplitude={1.2} distance={0.3} lineCount={60} enableMouseInteraction paused={still} opacity={0.55} /></Bg>;
export const RBParticles = () => <Bg><Particles particleCount={260} particleSpread={11} speed={0.08} particleColors={['#7CF3FF', '#F3D29A', '#ffffff']} moveParticlesOnHover alphaParticles particleBaseSize={90} disableRotation={false} connections /></Bg>;
export const RBAurora = () => <Bg><Aurora colorStops={['#0FB5C9', '#1D4ED8', '#F3D29A']} amplitude={1.1} blend={0.55} speed={0.6} opacity={0.75} paused={still} /></Bg>;
export const RBAurora2 = () => <Bg><Aurora colorStops={['#2FD3E0', '#0A5C78', '#7CF3FF']} amplitude={0.8} blend={0.6} speed={0.45} direction="bottom" opacity={0.45} paused={still} /></Bg>;
