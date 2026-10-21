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
  return <h2 key={lang} className="scroll-reveal rv-h2"><span className="scroll-reveal-text rv-h2-text">{lang === 'ar' ? ar : en}</span></h2>;
}

export function Eyebrow({ ar, en }){
  const lang = useLang();
  return <p className="eyebrow">{lang === 'ar' ? ar : en}</p>;
}

export function Spot({ children }){
  return <SpotlightCard className="spot-wrap" spotlightColor="rgba(47, 211, 224, 0.28)" intensity={0.22} borderGlow={0.8}>{children}</SpotlightCard>;
}

const GAL = [
  ['lat-marina', 'المارينا', 'The marina'], ['dam-vert', 'تلال دمشق', 'Damascus Heights'], ['lat-front', 'الواجهة البحرية', 'The waterfront'],
  ['lat-park', 'مدينة الألعاب', 'Theme park'], ['lat-life', 'الحياة على البحر', 'Life by the sea'], ['umayyad', 'الجامع الأموي', 'Umayyad Mosque'],
  ['khan', 'خان أسعد باشا', "Khan As'ad Pasha"], ['azm', 'قصر العظم', 'Azm Palace'], ['souq', 'سوق الحميدية', 'Al-Hamidiyah Souq'],
  ['coast-1', 'ساحل اللاذقية', 'Latakia coast'], ['coast-2', 'خليج اللاذقية', 'Latakia bay'], ['lat-3', 'سهرة على البحر', 'Evenings by the sea'], ['lat-pool', 'رياضات مائية', 'Water sports'], ['lat-1', 'النادي الشاطئي', 'Beach club']
];
export function Gallery3D(){
  const lang = useLang();
  const items = GAL.map(g => ({ image: M(g[0]), text: lang === 'ar' ? g[1] : g[2] }));
  return (
    <div className="gal3d">
      <CircularGallery key={lang} items={items} bend={0.8} textColor="#EAF7F8" borderRadius={0.06} scrollSpeed={2} scrollEase={0.06}
        font="600 26px Alexandria, IBM Plex Sans Arabic, sans-serif" autoScroll={still ? 0 : 0.4} itemAspect={0.72} />
      <p className="gal-hint">{lang === 'ar' ? 'اسحب يميناً ويساراً للتنقل بين الصور' : 'Drag sideways to browse'}</p>
    </div>
  );
}

const Bg = () => null; // section WebGL backgrounds off for speed
export const RBThreads = () => <Bg><Threads color={[0.18, 0.83, 0.88]} accentColor={[0.95, 0.82, 0.6]} amplitude={1.2} distance={0.3} lineCount={60} enableMouseInteraction paused={still} opacity={0.55} /></Bg>;
export const RBParticles = () => <Bg><Particles particleCount={260} particleSpread={11} speed={0.08} particleColors={['#7CF3FF', '#F3D29A', '#ffffff']} moveParticlesOnHover alphaParticles particleBaseSize={90} disableRotation={false} connections /></Bg>;
export const RBAurora = () => <Bg><Aurora colorStops={['#0FB5C9', '#1D4ED8', '#F3D29A']} amplitude={1.1} blend={0.55} speed={0.6} opacity={0.75} paused={still} /></Bg>;
export const RBAurora2 = () => <Bg><Aurora colorStops={['#2FD3E0', '#0A5C78', '#7CF3FF']} amplitude={0.8} blend={0.6} speed={0.45} direction="bottom" opacity={0.45} paused={still} /></Bg>;

/* ===== more React Bits visual effects ===== */
import { useEffect, useRef, useState } from 'react';
import SplashCursor from './rb/SplashCursor.jsx';
import LightRays from './rb/LightRays.jsx';
import Galaxy from './rb/Galaxy.jsx';
import Beams from './rb/Beams.jsx';
import Orb from './rb/Orb.jsx';
import Prism from './rb/Prism.jsx';
import DotGrid from './rb/DotGrid.jsx';
import Silk from './rb/Silk.jsx';
import ScrollStack, { ScrollStackItem } from './rb/ScrollStack.jsx';
import InfiniteMenu from './rb/InfiniteMenu.jsx';
import ElectricBorder from './rb/ElectricBorder.jsx';
import GlareHover from './rb/GlareHover.jsx';
import CurvedLoop from './rb/CurvedLoop.jsx';

const fine = typeof matchMedia !== 'undefined' && matchMedia('(hover: hover) and (pointer: fine)').matches;

// Mounts a WebGL background only while its section is near the viewport (keeps GPU contexts low).
export function Lazy({ children, margin = '400px' }){
  const ref = useRef(null); const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el || !('IntersectionObserver' in window)) { setOn(true); return; }
    const io = new IntersectionObserver(([e]) => setOn(e.isIntersecting), { rootMargin: margin });
    io.observe(el); return () => io.disconnect();
  }, [margin]);
  return <div ref={ref} className="rb-bg" aria-hidden="true">{on ? children : null}</div>;
}

export const FxCursor = () => (fine && !still) ? <SplashCursor colors={['#2FD3E0', '#1D4ED8', '#F3D29A']} rainbow={false} intensity={0.55} size={0.9} swirl={2.5} quality="medium" clickSplash glow={0.3} zIndex={140} /> : null;

export const HeroRays = () => still ? null : <div className="hero-rays" aria-hidden="true"><LightRays raysOrigin="top-center" raysColor="#BFF8FF" raysSpeed={0.8} lightSpread={0.7} rayLength={2.2} glow={0.5} haze={0.2} intensity={0.75} followMouse mouseInfluence={0.12} opacity={0.7} /></div>;

export const BgGalaxy = () => <Lazy><Galaxy hueShift={185} density={0.9} glowIntensity={0.35} saturation={0.4} starSpeed={0.35} mouseRepulsion twinkleIntensity={0.4} transparent opacity={0.85} /></Lazy>;
export const BgBeams = () => <Lazy><Beams color="#7CF3FF" beamWidth={110} rotation={28} speed={1.2} brightness={1.4} grain={0.25} opacity={0.55} /></Lazy>;
export const BgPrism = () => <Lazy><Prism animationType="rotate" glow={0.9} scale={3.2} hueShift={0.35} colorFrequency={0.9} timeScale={0.35} saturation={1.1} /></Lazy>;
export const BgDots = () => <Lazy><DotGrid dotSize={4} gap={22} baseColor="#0E3A50" activeColor="#7CF3FF" proximity={150} shockRadius={260} glow={0.6} opacity={0.9} /></Lazy>;
export const BgSilk = () => <Lazy><Silk speed={4} scale={1.1} color="#0A4D68" sheenColor="#BFF8FF" noiseIntensity={1.2} sheen={0.45} glow={0.35} opacity={0.8} /></Lazy>;

export function AdvisorOrb({ logo }){
  return (
    <div className="orb-box">
      <Lazy margin="200px"><Orb colors={['#2FD3E0', '#F3D29A', '#1D4ED8']} backgroundColor="#021522" glow={1.2} hoverIntensity={0.8} followCursor /></Lazy>
      <img src={logo} alt="Syrian Eagle" />
    </div>
  );
}

export function Electric({ children }){
  return <ElectricBorder color="#7CF3FF" glowColor="#2FD3E0" speed={0.9} chaos={0.45} thickness={1.6} strands={3} borderRadius={28} className="calc-electric">{children}</ElectricBorder>;
}

export function Glare({ children }){
  return <GlareHover width="100%" height="auto" borderRadius="28px" glareColor="#BFF8FF" glareOpacity={0.45} glareSize={40} variant="streak" className="vglare">{children}</GlareHover>;
}

const HERITAGE = [
  ['umayyad', 'الجامع الأموي', 'Umayyad Mosque', 'دمشق القديمة', 'Old Damascus'],
  ['khan', 'خان أسعد باشا', "Khan As'ad Pasha", 'سوق البزورية، دمشق', 'Al-Bzouriyeh, Damascus'],
  ['azm', 'قصر العظم', 'Azm Palace', 'تراث دمشقي من القرن الثامن عشر', '18th-century Damascene heritage'],
  ['souq', 'سوق الحميدية', 'Al-Hamidiyah Souq', 'قلب دمشق التجاري', "Damascus's historic market"],
  ['coast-1', 'ساحل اللاذقية', 'Latakia coast', 'المتوسط بأجمل ألوانه', 'The Mediterranean at its best'],
  ['coast-2', 'صخور الشاطئ الأبيض', 'White rock coast', 'شمال اللاذقية', 'North of Latakia'],
  ['hero-latakia', 'مارينا اللاذقية', 'Latakia Marina', 'تصميم المشروع', 'Project render'],
  ['dam-1', 'تلال دمشق', 'Damascus Heights', 'فناء دمشقي حديث', 'A modern Damascene courtyard'],
  ['dam-2', 'حدائق تلال دمشق', 'Damascus Heights parks', 'ممرات وحدائق', 'Walks and gardens'],
  ['lat-3', 'سهرة على البحر', 'Evenings by the sea', 'مطاعم على الواجهة', 'Waterfront dining'],
  ['lat-park', 'مدينة الألعاب', 'Theme park', 'اللاذقية', 'Latakia'],
  ['lat-marina', 'كورنيش المارينا', 'Marina promenade', 'اللاذقية', 'Latakia']
];
export function HeritageSphere(){
  const lang = useLang();
  const items = HERITAGE.map(h => ({ image: M(h[0]), title: lang === 'ar' ? h[1] : h[2], description: lang === 'ar' ? h[3] : h[4] }));
  return (
    <div className="sphere-wrap">
      <Lazy margin="300px"><InfiniteMenu key={lang} items={items} grayscale={false} dim={0.25} autoplay={3} accentColor="#2FD3E0" backgroundColor="#021522" /></Lazy>
      <p className="gal-hint">{lang === 'ar' ? 'اسحب الكرة لاستكشاف سوريا' : 'Drag the sphere to explore Syria'}</p>
    </div>
  );
}

const STEPS = [
  ['سجّل اهتمامك', 'Register', 'املأ النموذج بالوجهة ونوع الوحدة.', 'Fill in the form with the destination and home type.'],
  ['مكالمة تعريفية', 'Intro call', 'نتواصل معك خلال يوم عمل لفهم ميزانيتك وهدفك.', 'We call you within one working day to understand your budget and goal.'],
  ['الطلب الرسمي', 'Official request', 'نساعدك في تقديم طلبك عبر قنوات المطوّر الرسمية.', "We help you file your request through the developer's official channels."],
  ['عند الإطلاق', 'At launch', 'نراجع معاً الأسعار وخطة الدفع والعقد قبل أي التزام.', 'We review prices, the payment plan and the contract together before you commit.']
];
export function StepsStack(){
  const lang = useLang();
  return (
    <ScrollStack useWindowScroll smoothScroll={false} itemDistance={60} itemStackDistance={26} stackPosition="22%" baseScale={0.86} blurAmount={1.5} rotationAmount={0} className="steps-stack">
      {STEPS.map((s, i) => (
        <ScrollStackItem key={i} itemClassName="step-card">
          <span className="step-n">0{i + 1}</span>
          <h3>{lang === 'ar' ? s[0] : s[1]}</h3>
          <p>{lang === 'ar' ? s[2] : s[3]}</p>
        </ScrollStackItem>
      ))}
    </ScrollStack>
  );
}

export function SeaLoop(){
  const lang = useLang();
  const t = lang === 'ar' ? 'دمشق ✦ اللاذقية ✦ إيجل هيلز ✦ بيتك على المتوسط ✦ ' : 'Damascus ✦ Latakia ✦ Eagle Hills ✦ Your home on the Mediterranean ✦ ';
  return <div className="curved-wrap" aria-hidden="true"><CurvedLoop key={lang} marqueeText={t} speed={1.6} curveAmount={260} direction={lang === 'ar' ? 'right' : 'left'} interactive fontSize={84} fontWeight={800} color="#EAF7F8" edgeFade={0.2} scrollBoost={1} /></div>;
}

/* quick price examples at the published starting rate ($1,600/m²) */
export function PriceExamples(){
  const lang = useLang();
  const sizes = [80, 100, 120, 150, 200];
  const pick = a => { const r = document.getElementById('area'); if (!r) return; r.value = a; r.dispatchEvent(new Event('input', { bubbles: true })); };
  return (
    <div className="px-row">
      <p className="mini-h">{lang === 'ar' ? 'أمثلة سريعة بسعر البداية 1,600$/م² (اضغط للتجربة):' : 'Quick examples at the $1,600/m² starting rate (tap to try):'}</p>
      <div className="px-chips">
        {sizes.map(s => <button type="button" key={s} onClick={() => pick(s)}><b>{s} m²</b><span>${(s * 1600).toLocaleString('en-US')}</span></button>)}
      </div>
    </div>
  );
}

export function BuyerChecklist(){
  const lang = useLang();
  const items = lang === 'ar'
    ? ['ترخيص المشروع وتسجيله الرسمي', 'الوثائق القانونية وملكية الأرض', 'بنود العقد بالتفصيل', 'جدول التسليم المكتوب', 'خطة الدفع ومواعيد الدفعات', 'سياسة الاسترداد والإلغاء']
    : ['Project licence and official registration', 'Legal documents and land title', 'Contract terms in full', 'A written delivery schedule', 'Payment plan and instalment dates', 'Refund and cancellation policy'];
  return (
    <details className="check-faq" open>
      <summary>{lang === 'ar' ? 'ما الذي يجب التحقق منه قبل الشراء؟' : 'What should you check before buying?'}</summary>
      <ul className="buy-check">{items.map((t, i) => <li key={i}><i>✓</i>{t}</li>)}</ul>
      <p>{lang === 'ar' ? 'تسجيل الاهتمام لا يعني حجزاً مؤكداً. نراجع معك كل هذه النقاط قبل أي دفعة.' : 'Registering interest is not a confirmed booking. We review every point with you before any payment.'}</p>
    </details>
  );
}

/* Closing section: the logo's Damascus arch, drawn once in gold, with a flow field of
   gold drifters rising through it (algorithmic-art). One orchestrated moment. */
const ARCH_OUT = 'M24 600V262Q24 186 96 140Q164 98 200 24Q236 98 304 140Q376 186 376 262V600';
const ARCH_IN = 'M44 600V266Q44 198 108 157Q170 118 200 62Q230 118 292 157Q356 198 356 266V600';
export function GatewayFinale(){
  const lang = useLang();
  const secRef = useRef(null), cvRef = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const sec = secRef.current, cv = cvRef.current; if (!sec || !cv) return;
    const ctx = cv.getContext('2d'); const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w = 0, h = 0, dpr = Math.min(2, devicePixelRatio || 1), raf = 0, vis = false, t = 0;
    const N = innerWidth < 700 ? 260 : 520, P = [];
    // smooth value noise
    const perm = new Uint8Array(512); for (let i = 0; i < 256; i++) perm[i] = i;
    let seed = 1963; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    for (let i = 255; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [perm[i], perm[j]] = [perm[j], perm[i]]; }
    for (let i = 0; i < 256; i++) perm[i + 256] = perm[i];
    const fade = x => x * x * (3 - 2 * x);
    const noise = (x, y) => { const xi = Math.floor(x) & 255, yi = Math.floor(y) & 255, xf = x - Math.floor(x), yf = y - Math.floor(y);
      const a = perm[perm[xi] + yi] / 255, b = perm[perm[xi + 1] + yi] / 255, c = perm[perm[xi] + yi + 1] / 255, d = perm[perm[xi + 1] + yi + 1] / 255;
      const u = fade(xf), v = fade(yf); return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v; };
    const spawn = (p, init) => { const cx = w / 2, span = Math.min(w * 0.36, 300);
      p.x = cx + (rnd() * 2 - 1) * span; p.y = init ? rnd() * h : h + rnd() * 40; p.v = 0.4 + rnd() * 0.9; p.a = 0.25 + rnd() * 0.55; p.s = rnd() < 0.12 ? 1.6 : 0.9; };
    const size = () => { const r = sec.getBoundingClientRect(); w = r.width; h = r.height; cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.fillStyle = '#021226'; ctx.fillRect(0, 0, w, h); };
    size(); for (let i = 0; i < N; i++) { const p = {}; spawn(p, true); P.push(p); }
    const step = () => {
      t += 0.004; ctx.fillStyle = 'rgba(2,18,38,0.08)'; ctx.fillRect(0, 0, w, h);
      for (const p of P) {
        const ang = (noise(p.x * 0.004, p.y * 0.004 + t) - 0.5) * 2.4 - Math.PI / 2;
        const nx = p.x + Math.cos(ang) * p.v * 1.4, ny = p.y + Math.sin(ang) * p.v * 1.4;
        ctx.strokeStyle = `rgba(211,180,126,${p.a})`; ctx.lineWidth = p.s; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(nx, ny); ctx.stroke();
        p.x = nx; p.y = ny; if (p.y < -10 || p.x < -10 || p.x > w + 10) spawn(p, false);
      }
    };
    const loop = () => { if (!vis) return; step(); raf = requestAnimationFrame(loop); };
    if (still) { for (let i = 0; i < 160; i++) step(); }
    const io = new IntersectionObserver(es => { vis = es[0].isIntersecting; if (vis) { setOn(true); if (!still) { cancelAnimationFrame(raf); raf = requestAnimationFrame(loop); } } }, { threshold: 0.15 });
    io.observe(sec); addEventListener('resize', size);
    return () => { io.disconnect(); cancelAnimationFrame(raf); removeEventListener('resize', size); };
  }, []);
  return (
    <section className={'gateway' + (on ? ' in' : '')} id="gateway" ref={secRef}>
      <canvas ref={cvRef} aria-hidden="true" />
      <div className="gw-frame" aria-hidden="true">
        <svg viewBox="0 0 400 600" preserveAspectRatio="xMidYMax meet"><path className="gw-out" d={ARCH_OUT} pathLength="1" /><path className="gw-in" d={ARCH_IN} pathLength="1" /></svg>
      </div>
      <div className="gw-content">
        <img className="gw-mark" src="brand/mark-gold.png" alt="" />
        <p className="eyebrow">{lang === 'ar' ? 'Syrian Eagle Properties' : 'Syrian Eagle Properties'}</p>
        <h2>{lang === 'ar' ? 'بوابتك إلى سوريا الجديدة' : 'Your gateway to the new Syria'}</h2>
        <p className="gw-sub">{lang === 'ar' ? 'سجّل اهتمامك اليوم، ونكون معك من أول سؤال حتى استلام المفتاح.' : 'Register today. We stay with you from the first question to the day you get the keys.'}</p>
        <div className="cta-row">
          <a className="btn solid" href="#register">{lang === 'ar' ? 'سجّل اهتمامك' : 'Register your interest'}</a>
          <a className="btn ghost" href="https://wa.me/971555550035" target="_blank" rel="noopener">{lang === 'ar' ? 'تحدّث معنا على واتساب' : 'Talk to us on WhatsApp'}</a>
        </div>
      </div>
    </section>
  );
}
