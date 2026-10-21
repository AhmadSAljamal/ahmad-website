import { useEffect } from 'react';
import { HeroTitle, RevealHeading, Eyebrow, Gallery3D, RBThreads, RBParticles, RBAurora, RBAurora2, Spot, HeroRays, BgGalaxy, BgBeams, BgPrism, BgDots, BgSilk, AdvisorOrb, Electric, Glare, HeritageSphere, StepsStack, SeaLoop, PriceExamples, BuyerChecklist } from './bits.jsx';
import { runLegacy, runMotion } from './legacy.js';
import LOGO from './logo.png';

export default function App(){
  useEffect(()=>{
    document.querySelectorAll('video[autoplay]').forEach(v=>{v.muted=true;v.play().catch(()=>{})});
    {const hv=document.getElementById('heroVid');if(hv){let done=0;const go=()=>{if(done)return;done=1;hv.preload='auto';hv.load();hv.play().catch(()=>{})};const later=()=>setTimeout(go,matchMedia('(max-width:700px)').matches?1800:600);document.readyState==='complete'?later():addEventListener('load',later,{once:true});setTimeout(go,4000)}}
    try{ runLegacy(); }catch(e){ console.error('legacy',e); }
    try{ runMotion(); }catch(e){ console.error('motion',e); }
  },[]);
  return (<>


<div className="intro" id="intro" aria-hidden="true"><div className="intro-in"><img className="se-intro" src="brand/logo-gold.png" alt="Syrian Eagle Properties" /><p><span data-ar="">دمشق · اللاذقية</span><span data-en="">Damascus · Latakia</span></p><div className="bar"><i></i></div></div></div>
<div className="glow" id="glow" aria-hidden="true"></div>
<div className="scroll-prog" id="prog" aria-hidden="true"></div>
<div className="aurora" aria-hidden="true"><i></i><i></i><i></i></div><div className="grain" aria-hidden="true"></div>
<header className="top">
  <div className="wrap">
    <a className="brand se" href="#top" aria-label="Syrian Eagle"><img className="se-mark" src="brand/mark-gold.png" alt="" /><strong className="se-word">SYRIAN EAGLE</strong><span><span data-ar="">دليل مشاريع سوريا الجديدة</span><span data-en="">Guide to Syria's new projects</span></span></a>
    <nav className="links" aria-label="Sections">
      <a href="#destinations"><span data-ar="">الوجهتان</span><span data-en="">Destinations</span></a>
      <a href="#developer"><span data-ar="">المطوّر</span><span data-en="">Developer</span></a>
      <a href="#gallery"><span data-ar="">الصور</span><span data-en="">Gallery</span></a>
      <a href="#homes"><span data-ar="">الوحدات</span><span data-en="">Homes</span></a>
      <a href="#price"><span data-ar="">السعر</span><span data-en="">Price</span></a>
      <a href="#invest"><span data-ar="">الاستثمار</span><span data-en="">Invest</span></a>
      <a href="#faq"><span data-ar="">أسئلة</span><span data-en="">FAQ</span></a>
    </nav>
    <div className="tools">
      <button className="pill" type="button" id="langBtn"><span data-ar="">English</span><span data-en="">العربية</span></button>
      <a className="pill gold" href="#register"><span data-ar="">سجّل اهتمامك</span><span data-en="">Register</span></a>
    </div>
  </div>
</header>

<section className="hero" id="top">
  <div className="poster" aria-hidden="true"></div><HeroRays /><video id="heroVid" muted loop playsInline preload="none" poster="media/hero-latakia.jpg" aria-hidden="true"><source media="(max-width:700px)" src="https://syriacdn.eaglehills.ai/videos/Damascus-heights-refined-hero-4-mobile.mp4" type="video/mp4" /><source src="https://syriacdn.eaglehills.ai/videos/eagle-hills-syria-full-projects-v3-desktop.mp4" type="video/mp4" /></video><canvas id="waves" aria-hidden="true"></canvas>
  <div className="wrap">
    <p className="eyebrow rise live"><i></i><span data-ar="">مشروع إيجل هيلز في سوريا · التسجيل مفتوح الآن</span><span data-en="">Eagle Hills in Syria · Registration open now</span></p>
    <HeroTitle />
    <p className="sub rise d2"><span data-ar="">دليل واضح لمشروعَي «تلال دمشق» و«اللاذقية لليخوت والمارينا»: الوحدات، الأسعار، من يحق له الشراء، وكيف تسجّل اهتمامك. مع فريق Syrian Eagle للاستشارات العقارية.</span><span data-en="">A clear guide to Damascus Heights and Latakia Yachts &amp; Marina: the homes, the prices, who can buy, and how to register. With the Syrian Eagle property advisory team.</span></p>
    <div className="cta-row rise d3">
      <a className="btn solid" href="#register"><span data-ar="">سجّل اهتمامك الآن</span><span data-en="">Register your interest</span> <span aria-hidden="true"><span data-ar="">←</span><span data-en="">→</span></span></a>
      <a className="btn ghost" id="waHero" href="https://wa.me/971555550035" target="_blank" rel="noopener"><span data-ar="">اسأل على واتساب</span><span data-en="">Ask on WhatsApp</span></a>
    </div>
    <div className="facts rise d3">
      <div><b className="count" data-to="11000">11,000</b><span><span data-ar="">منزل مخطط في مشروع دمشق</span><span data-en="">homes planned in the Damascus project</span></span></div>
      <div><b className="count" data-to="1600" data-pre="$">$1,600</b><span><span data-ar="">سعر المتر المربع يبدأ من</span><span data-en="">per m², starting price</span></span></div>
      <div><b className="count" data-to="1500">1,500</b><span><span data-ar="">غرفة فندقية وشقة فندقية في دمشق</span><span data-en="">hotel rooms and serviced apartments in Damascus</span></span></div>
      <div><b>2</b><span><span data-ar="">وجهتان: دمشق واللاذقية</span><span data-en="">destinations: Damascus and Latakia</span></span></div>
    </div>
  </div>
  <svg className="scene" viewBox="0 0 1200 220" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
    <defs><linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#4FB3BF" stopOpacity=".55" /><stop offset="1" stopColor="#0D1424" stopOpacity="0" /></linearGradient></defs>
    <path d="M0 150 Q 150 70 300 120 T 620 100 T 900 130 T 1200 90 V220 H0Z" fill="#141E35" />
    <path d="M0 175 Q 200 120 420 160 T 760 150 T 1200 140 V220 H0Z" fill="#18233D" />
    <g fill="#23252C">
      <rect x="120" y="128" width="6" height="40" /><path d="M116 128 h14 l-7 -12z" />
      <path d="M180 168 v-22 a22 22 0 0 1 44 0 v22z" /><rect x="226" y="120" width="5" height="48" /><path d="M223 120 h11 l-5.5 -11z" />
      <path d="M300 168 v-14 a14 14 0 0 1 28 0 v14z" />
    </g>
    <g fill="#2A3656"><path d="M520 168 q 6 -40 12 0z" /><path d="M545 168 q 7 -50 14 0z" /><path d="M570 168 q 6 -36 12 0z" /></g>
    <rect x="760" y="168" width="440" height="52" fill="url(#sea)" />
    <g stroke="#EDE6D6" strokeWidth="2" fill="none" opacity=".75"><path d="M880 160 v-38 l22 34z" /><path d="M980 164 v-30 l18 27z" /><path d="M1080 160 v-42 l24 38z" /></g>
    <g fill="#EDE6D6" opacity=".75"><path d="M868 162 h40 l-6 6 h-28z" /><path d="M970 165 h34 l-5 5 h-24z" /><path d="M1068 162 h44 l-6 6 h-32z" /></g>
  </svg>
</section>
<div className="marquee" aria-hidden="true"><div className="mq-track"><div data-ar=""><span>مارينا لليخوت</span><b>✦</b><span>ملعب غولف</span><b>✦</b><span>نادٍ شاطئي</span><b>✦</b><span>فنادق عالمية</span><b>✦</b><span>حدائق دمشقية</span><b>✦</b><span>مدارس دولية</span><b>✦</b><span>حمّام سوري</span><b>✦</b><span>كورنيش بحري</span><b>✦</b><span>مسابح خاصة</span><b>✦</b><span>إطلالات على المتوسط</span><b>✦</b><span>مارينا لليخوت</span><b>✦</b><span>ملعب غولف</span><b>✦</b><span>نادٍ شاطئي</span><b>✦</b><span>فنادق عالمية</span><b>✦</b><span>حدائق دمشقية</span><b>✦</b><span>مدارس دولية</span><b>✦</b><span>حمّام سوري</span><b>✦</b><span>كورنيش بحري</span><b>✦</b><span>مسابح خاصة</span><b>✦</b><span>إطلالات على المتوسط</span><b>✦</b></div><div data-en=""><span>Yacht marina</span><b>✦</b><span>Golf course</span><b>✦</b><span>Beach club</span><b>✦</b><span>International hotels</span><b>✦</b><span>Damascene gardens</span><b>✦</b><span>International schools</span><b>✦</b><span>Syrian hammam</span><b>✦</b><span>Seafront promenade</span><b>✦</b><span>Private pools</span><b>✦</b><span>Mediterranean views</span><b>✦</b><span>Yacht marina</span><b>✦</b><span>Golf course</span><b>✦</b><span>Beach club</span><b>✦</b><span>International hotels</span><b>✦</b><span>Damascene gardens</span><b>✦</b><span>International schools</span><b>✦</b><span>Syrian hammam</span><b>✦</b><span>Seafront promenade</span><b>✦</b><span>Private pools</span><b>✦</b><span>Mediterranean views</span><b>✦</b></div></div></div>
<section className="split" id="choose" aria-label="Choose a destination">
  <a className="panel" href="#destinations" data-tab="t-dam">
    <img src="media/dam-1.jpg" alt="" loading="lazy" />
    <video muted loop playsInline preload="none"><source src="https://syriacdn.eaglehills.ai/videos/damascus-heights-final-desktop-v5.mp4" type="video/mp4" /></video>
    <div className="panel-txt"><Eyebrow ar="الجبل والمدينة" en="Mountain and city" /><RevealHeading ar="تلال دمشق" en="Damascus Heights" /><p><span data-ar="">11,000 منزل · غولف · مدارس · مستشفى</span><span data-en="">11,000 homes · golf · schools · hospital</span></p><span className="go"><span data-ar="">اكتشف ←</span><span data-en="">Explore →</span></span></div>
  </a>
  <a className="panel" href="#destinations" data-tab="t-lat">
    <img src="media/hero-latakia.jpg" alt="" loading="lazy" />
    <video muted loop playsInline preload="none"><source src="https://syriacdn.eaglehills.ai/videos/latakia-marina-final-desktop-v6.mp4" type="video/mp4" /></video>
    <div className="panel-txt"><Eyebrow ar="البحر والمرفأ" en="Sea and harbour" /><RevealHeading ar="مارينا اللاذقية" en="Latakia Marina" /><p><span data-ar="">يخوت · نادٍ شاطئي · فنادق على البحر</span><span data-en="">Yachts · beach club · seafront hotels</span></p><span className="go"><span data-ar="">اكتشف ←</span><span data-en="">Explore →</span></span></div>
  </a>
</section>
<div className="ablaq" aria-hidden="true"></div>

<main>
<section className="sec wrap" id="destinations">
  <div className="sec-head">
    <Eyebrow ar="الوجهتان" en="Two destinations" />
    <RevealHeading ar="مدينتان، أسلوبا حياة" en="Two cities, two ways to live" />
    <p className="lead"><span data-ar="">كل وجهة مجتمع متكامل: سكن وفنادق وحدائق ومطاعم ومرافق عامة ضمن مخطط واحد.</span><span data-en="">Each destination is a full community: homes, hotels, gardens, dining and public spaces in one master plan.</span></p>
  </div>
  <div className="tabs" role="tablist" aria-label="Destination">
    <button type="button" role="tab" id="t-dam" aria-selected="true" aria-controls="p-dam"><span data-ar="">تلال دمشق</span><span data-en="">Damascus Heights</span></button>
    <button type="button" role="tab" id="t-lat" aria-selected="false" aria-controls="p-lat"><span data-ar="">اللاذقية لليخوت والمارينا</span><span data-en="">Latakia Yachts &amp; Marina</span></button>
  </div>

  <div className="dest" id="p-dam" role="tabpanel" aria-labelledby="t-dam">
    <div className="dest-art tilt"><div className="kb"><img src="media/dam-1.jpg" alt="" loading="lazy" decoding="async" className="on" /><img src="media/dam-2.jpg" alt="" loading="lazy" decoding="async" /><img src="media/dam-vert.jpg" alt="" loading="lazy" decoding="async" /><img src="media/azm.jpg" alt="" loading="lazy" decoding="async" /></div><span className="tag"><span data-ar="">غرب دمشق · فوق المدينة</span><span data-en="">West Damascus · above the city</span></span><span className="glare" aria-hidden="true"></span></div>
    <div className="dest-body">
      <h3><span data-ar="">تلال دمشق</span><span data-en="">Damascus Heights</span></h3>
      <p className="lead"><span data-ar="">حيّ على التلال المطلة على دمشق، بعمارة مستوحاة من البيت الدمشقي: مشربيات خشبية وواجهات حجر بالأبيض والأسود. حدائق وممرات مشجرة، ملعب غولف، فنادق، مدارس دولية ومركز صحي.</span><span data-en="">A district on the hills above Damascus, with architecture drawn from the Damascene house: wooden mashrabiya screens and black-and-white stone facades. Gardens, tree-lined walks, a golf course, hotels, international schools and a healthcare centre.</span></p>
      <ul className="chips">
        <li><span data-ar="">11,000 منزل</span><span data-en="">11,000 homes</span></li>
        <li><span data-ar="">500 غرفة فندقية</span><span data-en="">500 hotel rooms</span></li>
        <li><span data-ar="">1,000 شقة فندقية</span><span data-en="">1,000 serviced apartments</span></li>
        <li><span data-ar="">مدرستان ومستشفى</span><span data-en="">2 schools and a hospital</span></li>
        <li><span data-ar="">ملعب غولف</span><span data-en="">Golf course</span></li>
        <li><span data-ar="">مكاتب ومحلات</span><span data-en="">Offices and retail</span></li>
      </ul>
      <div>
        <p className="mini-h"><span data-ar="">بالسيارة من المشروع</span><span data-en="">Drive time from the project</span></p>
        <ul className="route">
          <li><span><span data-ar="">ساحة الأمويين</span><span data-en="">Umayyad Square</span></span><b>13 <span data-ar="">د</span><span data-en="">min</span></b></li>
          <li><span><span data-ar="">المتحف الوطني</span><span data-en="">National Museum</span></span><b>15 <span data-ar="">د</span><span data-en="">min</span></b></li>
          <li><span><span data-ar="">دمشق القديمة</span><span data-en="">Old Damascus</span></span><b>20 <span data-ar="">د</span><span data-en="">min</span></b></li>
          <li><span><span data-ar="">باب شرقي</span><span data-en="">Bab Sharqi</span></span><b>24 <span data-ar="">د</span><span data-en="">min</span></b></li>
        </ul>
      </div>
    </div>
  </div>

  <div className="dest" id="p-lat" role="tabpanel" aria-labelledby="t-lat" hidden>
    <div className="dest-art tilt"><div className="kb"><img src="media/lat-4.jpg" alt="" loading="lazy" decoding="async" className="on" /><img src="media/lat-2.jpg" alt="" loading="lazy" decoding="async" /><img src="media/hero-latakia.jpg" alt="" loading="lazy" decoding="async" /><img src="media/dam-4.jpg" alt="" loading="lazy" decoding="async" /></div><span className="tag"><span data-ar="">ساحل اللاذقية · البحر المتوسط</span><span data-en="">Latakia coast · Mediterranean</span></span><span className="glare" aria-hidden="true"></span></div>
    <div className="dest-body">
      <h3><span data-ar="">اللاذقية لليخوت والمارينا</span><span data-en="">Latakia Yachts &amp; Marina</span></h3>
      <p className="lead"><span data-ar="">واجهة بحرية قرب وسط اللاذقية: مارينا بمراسٍ للمياه العميقة ونادٍ لليخوت، فنادق عالمية على البحر، نادٍ شاطئي، كورنيش للمشاة ومطاعم على الماء. وحدات مع مسابح خاصة وإطلالات على المارينا.</span><span data-en="">A waterfront close to central Latakia: a deep-water marina and yacht club, international seafront hotels, a beach club, a promenade and dining on the water. Homes with private pools and marina views.</span></p>
      <ul className="chips">
        <li><span data-ar="">مارينا ونادي يخوت</span><span data-en="">Marina and yacht club</span></li>
        <li><span data-ar="">نادٍ شاطئي</span><span data-en="">Beach club</span></li>
        <li><span data-ar="">فنادق على البحر</span><span data-en="">Seafront hotels</span></li>
        <li><span data-ar="">مدينة ألعاب</span><span data-en="">Theme park</span></li>
        <li><span data-ar="">إبحار وغوص</span><span data-en="">Sailing and diving</span></li>
        <li><span data-ar="">سبا وحمّام سوري</span><span data-en="">Spa and Syrian hammam</span></li>
      </ul>
      <div>
        <p className="mini-h"><span data-ar="">بالسيارة من المشروع</span><span data-en="">Drive time from the project</span></p>
        <ul className="route">
          <li><span><span data-ar="">المدينة الرياضية</span><span data-en="">Latakia Sports City</span></span><b>10 <span data-ar="">د</span><span data-en="">min</span></b></li>
          <li><span><span data-ar="">كورنيش اللاذقية</span><span data-en="">Latakia Corniche</span></span><b>12 <span data-ar="">د</span><span data-en="">min</span></b></li>
          <li><span><span data-ar="">المتحف الوطني</span><span data-en="">National Museum</span></span><b>14 <span data-ar="">د</span><span data-en="">min</span></b></li>
          <li><span><span data-ar="">مرفأ اللاذقية</span><span data-en="">Latakia Port</span></span><b>15 <span data-ar="">د</span><span data-en="">min</span></b></li>
          <li><span><span data-ar="">أوغاريت</span><span data-en="">Ugarit</span></span><b>25 <span data-ar="">د</span><span data-en="">min</span></b></li>
          <li><span><span data-ar="">قلعة صلاح الدين</span><span data-en="">Saladin Castle</span></span><b>50 <span data-ar="">د</span><span data-en="">min</span></b></li>
        </ul>
      </div>
    </div>
  </div>
</section>
<div className="ablaq" aria-hidden="true"></div>
<section className="sec wrap" id="map">
  <div className="sec-head">
    <Eyebrow ar="على الخريطة" en="On the map" />
    <RevealHeading ar="أين يقع المشروعان؟" en="Where in Syria?" />
    <p className="lead"><span data-ar="">وجهة في العاصمة دمشق، وأخرى على ساحل اللاذقية. المسافة بينهما نحو 230 كم بخط مستقيم.</span><span data-en="">One destination in the capital, Damascus, and one on the Latakia coast, about 230 km apart in a straight line.</span></p>
  </div>
  <div className="tmap" id="tmap">
    <div className="map-fallback"><svg className="map" preserveAspectRatio="xMidYMid slice" viewBox="0 0 800 665" role="img" aria-label="Map of Syria showing Damascus Heights and Latakia Yachts and Marina">
<defs><radialGradient id="seaG" cx="0" cy="0.4" r="0.9"><stop offset="0" stopColor="#0A6E8A" /><stop offset="1" stopColor="#04314B" /></radialGradient>
<linearGradient id="landG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#E8C98E" stopOpacity=".22" /><stop offset="1" stopColor="#E8C98E" stopOpacity=".08" /></linearGradient>
<filter id="glowF"><feGaussianBlur stdDeviation="6" /></filter></defs>
<rect width="800" height="665" fill="url(#seaG)" />
<g className="nb"><path d="M245.9 -416.7 L381.0 -372.3 L490.6 -390.0 L571.6 -379.8 L682.7 -439.6 L783.0 -445.1 L873.7 -388.8 L889.7 -348.5 L880.6 -292.7 L950.6 -264.2 L987.7 -230.7 L923.2 -198.1 L952.6 -66.6 L934.2 -31.1 L985.7 60.7 L940.6 80.1 L907.5 50.9 L798.0 36.1 L757.6 53.9 L650.5 71.7 L599.8 69.8 L491.5 112.8 L414.1 113.1 L364.0 91.6 L260.4 123.4 L229.6 101.1 L224.5 165.1 L199.3 190.2 L174.1 215.3 L139.5 163.3 L175.1 120.3 L117.7 130.0 L39.0 103.7 L-25.7 169.6 L-168.5 182.5 L-244.7 121.0 L-346.2 117.2 L-367.9 164.7 L-432.9 178.3 L-524.0 117.3 L-626.7 119.3 L-682.5 5.3 L-751.2 -58.2 L-705.4 -147.4 L-765.1 -202.1 L-660.7 -311.8 L-515.8 -316.3 L-476.2 -403.5 L-296.9 -388.3 L-183.7 -462.6 L-74.0 -495.0 L81.7 -497.5 L245.9 -416.7ZM-669.0 -342.8 L-747.5 -281.0 L-777.1 -334.4 L-775.8 -358.1 L-753.4 -370.9 L-724.3 -442.7 L-770.2 -473.0 L-674.3 -509.1 L-593.2 -493.7 L-582.1 -449.6 L-499.9 -412.6 L-517.0 -384.5 L-628.8 -378.2 L-669.0 -342.8Z" /><path d="M143.2 506.9 L117.9 508.4 L109.2 528.5 L77.7 528.3 L111.3 434.9 L158.1 354.2 L159.8 350.2 L202.2 356.0 L217.6 401.0 L166.3 444.2 L143.2 506.9Z" /><path d="M117.2 608.2 L133.6 572.0 L238.5 617.4 L422.8 495.3 L460.7 634.9 L442.8 652.1 L254.3 709.7 L348.1 824.3 L317.0 843.7 L301.5 882.1 L229.7 898.0 L207.2 939.3 L166.5 974.5 L61.7 956.3 L58.6 939.7 L105.5 756.5 L103.3 711.9 L117.2 678.2 L117.2 608.2Z" /><path d="M1046.6 197.4 L1108.4 231.8 L1115.5 298.8 L1068.1 338.3 L1046.3 427.8 L1111.5 536.7 L1226.8 599.5 L1275.2 686.7 L1259.8 769.7 L1289.9 769.6 L1290.8 830.7 L1342.9 890.9 L1287.0 885.3 L1223.8 875.8 L1154.7 985.8 L979.7 976.7 L714.4 746.2 L574.1 665.9 L460.7 634.9 L422.8 495.3 L631.2 376.0 L666.7 237.5 L657.9 153.7 L709.4 125.4 L757.6 53.9 L798.0 36.1 L907.5 50.9 L940.6 80.1 L985.7 60.7 L1046.6 197.4Z" /><path d="M133.6 572.0 L117.2 608.2 L83.2 592.3 L63.5 668.6 L87.1 681.5 L63.1 697.2 L59.1 727.4 L103.3 711.9 L105.5 756.5 L58.6 939.7 L-3.3 742.8 L24.1 705.0 L17.7 698.5 L42.6 645.0 L61.7 558.5 L75.1 529.5 L77.7 528.3 L109.2 528.5 L117.9 508.4 L143.2 506.9 L144.6 553.8 L131.8 571.2 L133.6 572.0Z" /><path d="M-30.7 302.8 L-27.8 312.0 L-124.3 358.5 L-170.3 343.7 L-192.3 297.6 L-147.6 293.4 L-129.9 299.4 L-104.4 289.6 L-86.2 290.8 L-79.4 297.8 L-77.6 309.4 L-72.9 305.0 L-58.8 307.4 L-40.8 298.7 L-30.7 302.8Z" /></g>
<path className="sy-glow" d="M422.8 495.3 L238.5 617.4 L133.6 572.0 L131.8 571.2 L144.6 553.8 L143.2 506.9 L166.3 444.2 L217.6 401.0 L202.2 356.0 L159.8 350.2 L151.1 262.5 L174.1 215.3 L199.3 190.2 L224.5 165.1 L229.6 101.1 L260.4 123.4 L364.0 91.6 L414.1 113.1 L491.5 112.8 L599.8 69.8 L650.5 71.7 L757.6 53.9 L709.4 125.4 L657.9 153.7 L666.7 237.5 L631.2 376.0 L422.8 495.3Z" filter="url(#glowF)" />
<path className="sy" d="M422.8 495.3 L238.5 617.4 L133.6 572.0 L131.8 571.2 L144.6 553.8 L143.2 506.9 L166.3 444.2 L217.6 401.0 L202.2 356.0 L159.8 350.2 L151.1 262.5 L174.1 215.3 L199.3 190.2 L224.5 165.1 L229.6 101.1 L260.4 123.4 L364.0 91.6 L414.1 113.1 L491.5 112.8 L599.8 69.8 L650.5 71.7 L757.6 53.9 L709.4 125.4 L657.9 153.7 L666.7 237.5 L631.2 376.0 L422.8 495.3Z" pathLength="1" />
<text className="sea-lbl" x="30" y="600" transform="rotate(-72 30 600)"><tspan data-ar="">البحر المتوسط</tspan><tspan data-en="">Mediterranean</tspan></text><text className="lbl" x="560" y="60"><tspan data-ar="">تركيا</tspan><tspan data-en="">Türkiye</tspan></text><text className="lbl" x="140" y="400"><tspan data-ar="">لبنان</tspan><tspan data-en="">Lebanon</tspan></text><text className="lbl" x="230" y="640"><tspan data-ar="">الأردن</tspan><tspan data-en="">Jordan</tspan></text><text className="lbl" x="680" y="470"><tspan data-ar="">العراق</tspan><tspan data-en="">Iraq</tspan></text><text className="country" x="470" y="330"><tspan data-ar="">سوريا</tspan><tspan data-en="">SYRIA</tspan></text><circle className="city" cx="266.7" cy="171.7" r="3.5" /><text className="city-lbl" x="276" y="176"><tspan data-ar="">حلب</tspan><tspan data-en="">Aleppo</tspan></text><circle className="city" cx="227.5" cy="340.1" r="3.5" /><text className="city-lbl" x="236" y="344"><tspan data-ar="">حمص</tspan><tspan data-en="">Homs</tspan></text><circle className="city" cx="149.4" cy="322.2" r="3.5" /><text className="city-lbl" x="158" y="326"><tspan data-ar="">طرطوس</tspan><tspan data-en="">Tartus</tspan></text><path className="route" d="M187.5 479.9 Q 234.0 364.7 140.4 249.5" /><g className="pin" data-k="dam" tabIndex="0" transform="translate(187.5 479.9)"><circle className="pulse" r="10" /><circle className="pulse p2" r="10" /><path className="drop" d="M0 0 C -12 -16 -14 -24 -14 -30 A 14 14 0 1 1 14 -30 C 14 -24 12 -16 0 0Z" /><circle className="dot" cy="-30" r="5.5" /><text className="pin-lbl" x="20" y="-26"><tspan data-ar="">تلال دمشق</tspan><tspan data-en="">Damascus Heights</tspan></text></g><g className="pin" data-k="lat" tabIndex="0" transform="translate(140.4 249.5)"><circle className="pulse" r="10" /><circle className="pulse p2" r="10" /><path className="drop" d="M0 0 C -12 -16 -14 -24 -14 -30 A 14 14 0 1 1 14 -30 C 14 -24 12 -16 0 0Z" /><circle className="dot" cy="-30" r="5.5" /><text className="pin-lbl" x="20" y="-26"><tspan data-ar="">اللاذقية لليخوت والمارينا</tspan><tspan data-en="">Latakia Yachts & Marina</tspan></text></g></svg></div>
    <div id="leaf" className="leaf" aria-label="Satellite map of Syria"></div>
    <div className="hud" aria-hidden="true"><i className="c tl"></i><i className="c tr"></i><i className="c bl"></i><i className="c br"></i><div className="grid"></div><div className="scan"></div>
      <div className="hud-top"><span className="live"><i></i>LIVE · SAT</span><span id="coord">33.513°N · 36.292°E</span></div>
      <div className="hud-bot"><span>SYRIA · 185,180 km²</span><span id="zoomr">ZOOM 6</span></div>
    </div>
    <div className="map-panel">
      <button type="button" className="mcard on" data-k="lat"><span className="mnum">01</span><b><span data-ar="">اللاذقية لليخوت والمارينا</span><span data-en="">Latakia Yachts &amp; Marina</span></b><span><span data-ar="">على البحر المتوسط، قرب وسط اللاذقية. الكورنيش 12 دقيقة والمرفأ 15 دقيقة.</span><span data-en="">On the Mediterranean near central Latakia. Corniche 12 min, port 15 min.</span></span></button>
      <button type="button" className="mcard" data-k="dam"><span className="mnum">02</span><b><span data-ar="">تلال دمشق</span><span data-en="">Damascus Heights</span></b><span><span data-ar="">على التلال غرب دمشق. ساحة الأمويين 13 دقيقة ودمشق القديمة 20 دقيقة.</span><span data-en="">On the hills west of Damascus. Umayyad Square 13 min, Old City 20 min.</span></span></button>
      <button type="button" className="mcard mini" data-k="all"><b><span data-ar="">عرض سوريا كاملة</span><span data-en="">Show all of Syria</span></b></button>
      <div className="cta-row"><a className="pill" href="https://www.google.com/maps/search/?api=1&amp;query=Latakia%2C+Syria" target="_blank" rel="noopener"><span data-ar="">اللاذقية على Google Maps</span><span data-en="">Latakia on Google Maps</span></a><a className="pill" href="https://www.google.com/maps/search/?api=1&amp;query=Damascus%2C+Syria" target="_blank" rel="noopener"><span data-ar="">دمشق على Google Maps</span><span data-en="">Damascus on Google Maps</span></a></div>
    </div>
  </div>
  <p className="note"><span data-ar="">صور الأقمار الصناعية: Esri World Imagery. الدبابيس على مستوى المدينة لأن مواقع الأراضي الدقيقة لم تُنشر.</span><span data-en="">Satellite imagery: Esri World Imagery. Pins mark the city; exact plots are not published.</span></p>
</section>
<div className="ablaq" aria-hidden="true"></div>
<section className="sec wrap rb-host" id="syria"><RBAurora2 />
  <div className="sec-head">
    <Eyebrow ar="عن سوريا" en="About Syria" />
    <RevealHeading ar="أرض عمرها آلاف السنين" en="A land thousands of years old" />
    <p className="lead"><span data-ar="">من أقدم العواصم المأهولة في العالم إلى ساحل على المتوسط. المشروعان يقعان في أهم مدينتين بالبلد: العاصمة، والميناء الأول.</span><span data-en="">From one of the world's oldest inhabited capitals to a Mediterranean coastline. The two projects sit in the country's key cities: the capital and its main port.</span></p>
  </div>
  <div className="facts4">
    <Spot><article className="gcard"><b className="count" data-to="1979">1979</b><span><span data-ar="">سنة إدراج دمشق القديمة على قائمة اليونسكو للتراث العالمي</span><span data-en="">the year Old Damascus joined UNESCO's World Heritage List</span></span></article></Spot>
    <Spot><article className="gcard"><b><span data-ar="">~190 كم</span><span data-en="">~190 km</span></b><span><span data-ar="">طول الساحل السوري على البحر المتوسط</span><span data-en="">of Syrian coastline on the Mediterranean</span></span></article></Spot>
    <Spot><article className="gcard"><b><span data-ar="">أوغاريت</span><span data-en="">Ugarit</span></b><span><span data-ar="">قرب اللاذقية، حيث وُجدت من أقدم الأبجديات المعروفة</span><span data-en="">near Latakia, home to one of the earliest known alphabets</span></span></article></Spot>
    <Spot><article className="gcard"><b><span data-ar="">المرفأ الأول</span><span data-en="">Main port</span></b><span><span data-ar="">اللاذقية بوابة سوريا البحرية الرئيسية</span><span data-en="">Latakia is Syria's principal seaport</span></span></article></Spot>
  </div>
<HeritageSphere />
</section>
<div className="ablaq" aria-hidden="true"></div>
<section className="sec wrap rb-host" id="developer"><RBThreads />
  <div className="dev-grid">
    <div className="sec-head">
      <Eyebrow ar="المطوّر" en="The developer" />
      <RevealHeading ar="إيجل هيلز" en="Eagle Hills" />
      <p className="lead"><span data-ar="">شركة استثمار وتطوير عقاري خاصة مقرها أبوظبي، تأسست عام 2014. تبني مجتمعات متكاملة تجمع السكن والفنادق والتجزئة والمساحات الخضراء، ولها مشاريع في الشرق الأوسط وأوروبا وأفريقيا.</span><span data-en="">A private real estate investment and development company based in Abu Dhabi, founded in 2014. It builds full communities that combine homes, hotels, retail and green space, with projects across the Middle East, Europe and Africa.</span></p>
      <div className="kpis3"><div><b className="count" data-to="2014">2014</b><span><span data-ar="">سنة التأسيس</span><span data-en="">founded</span></span></div><div><b className="count" data-to="10">10</b><span><span data-ar="">دول بما فيها سوريا</span><span data-en="">countries incl. Syria</span></span></div><div><b><span data-ar="">أبوظبي</span><span data-en="">Abu Dhabi</span></b><span><span data-ar="">المقر الرئيسي</span><span data-en="">headquarters</span></span></div></div>
    </div>
    <div className="globe-list">
<div className="gl-row"><span className="flag">🇦🇪</span><b><span data-ar="">الإمارات</span><span data-en="">UAE</span></b><span><span data-ar="">جزيرة مريم وواجهة كلباء البحرية</span><span data-en="">Maryam Island, Kalba Waterfront</span></span></div><div className="gl-row"><span className="flag">🇷🇸</span><b><span data-ar="">صربيا</span><span data-en="">Serbia</span></b><span><span data-ar="">واجهة بلغراد المائية</span><span data-en="">Belgrade Waterfront</span></span></div><div className="gl-row"><span className="flag">🇧🇭</span><b><span data-ar="">البحرين</span><span data-en="">Bahrain</span></b><span><span data-ar="">مراسي البحرين</span><span data-en="">Marassi Al Bahrain</span></span></div><div className="gl-row"><span className="flag">🇴🇲</span><b><span data-ar="">عُمان</span><span data-en="">Oman</span></b><span><span data-ar="">ماندارين أورينتال مسقط</span><span data-en="">Mandarin Oriental, Muscat</span></span></div><div className="gl-row"><span className="flag">🇯🇴</span><b><span data-ar="">الأردن</span><span data-en="">Jordan</span></b><span><span data-ar="">سرايا العقبة</span><span data-en="">Saraya Aqaba</span></span></div><div className="gl-row"><span className="flag">🇬🇪</span><b><span data-ar="">جورجيا</span><span data-en="">Georgia</span></b><span><span data-ar="">واجهة تبليسي المائية</span><span data-en="">Tbilisi Waterfront</span></span></div><div className="gl-row"><span className="flag">🇪🇹</span><b><span data-ar="">إثيوبيا</span><span data-en="">Ethiopia</span></b><span><span data-ar="">مشروع لا غار في أديس أبابا</span><span data-en="">La Gare, Addis Ababa</span></span></div><div className="gl-row"><span className="flag">🇱🇻</span><b><span data-ar="">لاتفيا</span><span data-en="">Latvia</span></b><span><span data-ar="">واجهة ريغا المائية</span><span data-en="">Riga Waterfront</span></span></div><div className="gl-row"><span className="flag">🇦🇱</span><b><span data-ar="">ألبانيا</span><span data-en="">Albania</span></b><span><span data-ar="">مارينا دوريس</span><span data-en="">Durrës marina</span></span></div><div className="gl-row"><span className="flag">🇸🇾</span><b><span data-ar="">سوريا</span><span data-en="">Syria</span></b><span><span data-ar="">تلال دمشق ومارينا اللاذقية · جديد</span><span data-en="">Damascus Heights & Latakia Marina · new</span></span></div>
    </div>
  </div>
</section>
<div className="ablaq" aria-hidden="true"></div>
<section className="sec wrap rb-host" id="founder"><RBParticles />
  <div className="founder">
    <div className="f-card">
      <div className="mono portrait"><img src="media/alabbar.jpg" alt="Mohamed Alabbar" loading="lazy" /></div>
      <Eyebrow ar="المؤسس ورئيس مجلس الإدارة" en="Founder and Chairman" />
      <RevealHeading ar="محمد العبار" en="Mohamed Alabbar" />
      <p className="lead"><span data-ar="">رجل الأعمال الإماراتي الذي أسّس إعمار العقارية، الشركة التي بنت برج خليفة. أسّس أيضاً منصة نون، ويرأس مجموعة أمريكانا، ويقود اليوم إيجل هيلز.</span><span data-en="">The Emirati businessman who founded Emaar Properties, the company behind Burj Khalifa. He also founded noon, chairs Americana Group, and today leads Eagle Hills.</span></p>
      <blockquote><span data-ar="">«بداية جديدة لإيجل هيلز في سوريا»</span><span data-en="">"A new beginning for Eagle Hills in Syria."</span><cite><span data-ar="">محمد العبار، تشرين الأول 2026</span><span data-en="">Mohamed Alabbar, October 2026</span></cite></blockquote>
    </div>
    <ol className="ftl">
      <li><time>1956</time><p><span data-ar="">وُلد في الإمارات.</span><span data-en="">Born in the UAE.</span></p></li>
      <li><time>1981</time><p><span data-ar="">تخرّج في إدارة الأعمال من جامعة سياتل.</span><span data-en="">Business degree from Seattle University.</span></p></li>
      <li><time>1992</time><p><span data-ar="">أول مدير عام لدائرة التنمية الاقتصادية.</span><span data-en="">Founding director general of the Department of Economic Development.</span></p></li>
      <li><time>1997</time><p><span data-ar="">أسّس إعمار العقارية.</span><span data-en="">Founded Emaar Properties.</span></p></li>
      <li><time>2010</time><p><span data-ar="">افتتاح برج خليفة، أطول مبنى في العالم.</span><span data-en="">Burj Khalifa, the world's tallest building, opens.</span></p></li>
      <li><time>2014</time><p><span data-ar="">أسّس إيجل هيلز في أبوظبي.</span><span data-en="">Founded Eagle Hills in Abu Dhabi.</span></p></li>
      <li><time>2017</time><p><span data-ar="">أطلق منصة نون للتجارة الإلكترونية.</span><span data-en="">Launched the noon e-commerce platform.</span></p></li>
      <li className="now"><time>2026</time><p><span data-ar="">توقيع اتفاقية مشاريع سوريا في دمشق.</span><span data-en="">Signs the Syria framework agreement in Damascus.</span></p></li>
    </ol>
  </div>
</section>
<div className="ablaq" aria-hidden="true"></div>
<section className="sec wrap" id="gallery">
  <div className="sec-head">
    <Eyebrow ar="معرض الصور" en="Gallery" />
    <RevealHeading ar="شاهد المشروع" en="See the project" />
    <p className="lead"><span data-ar="">تصاميم المطوّر ومعالم من دمشق واللاذقية. اسحب للمزيد.</span><span data-en="">Developer renders and landmarks of Damascus and Latakia. Swipe for more.</span></p>
  </div>
  <Gallery3D />
</section>
<div className="ablaq" aria-hidden="true"></div>
<section className="sec wrap rb-host" id="videos"><BgBeams />
  <div className="sec-head">
    <Eyebrow ar="فيديوهات" en="Films" />
    <RevealHeading ar="جولة بالفيديو" en="Video tour" />
    <p className="lead"><span data-ar="">أفلام المشروع الرسمية من إيجل هيلز.</span><span data-en="">Official project films from Eagle Hills.</span></p>
  </div>
  <div className="vids"><div className="vcard tilt"><Glare><video controls playsInline preload="none" poster="media/dam-1.jpg"><source src="https://syriacdn.eaglehills.ai/videos/damascus-heights-final-desktop-v5.mp4" type="video/mp4" /></video></Glare><p><span data-ar="">فيلم تلال دمشق</span><span data-en="">Damascus Heights film</span> · <a href="https://syriacdn.eaglehills.ai/videos/damascus-heights-final-desktop-v5.mp4" target="_blank" rel="noopener"><span data-ar="">فتح الفيديو</span><span data-en="">Open video</span></a></p></div><div className="vcard tilt"><Glare><video controls playsInline preload="none" poster="media/lat-1.jpg"><source src="https://syriacdn.eaglehills.ai/videos/latakia-marina-final-desktop-v6.mp4" type="video/mp4" /></video></Glare><p><span data-ar="">فيلم مارينا اللاذقية</span><span data-en="">Latakia Marina film</span> · <a href="https://syriacdn.eaglehills.ai/videos/latakia-marina-final-desktop-v6.mp4" target="_blank" rel="noopener"><span data-ar="">فتح الفيديو</span><span data-en="">Open video</span></a></p></div><div className="vcard tilt"><Glare><video controls playsInline preload="none" poster="media/lat-4.jpg"><source src="https://syriacdn.eaglehills.ai/videos/syria-eaglehills-latakia-hospitality-updated.mp4" type="video/mp4" /></video></Glare><p><span data-ar="">الفنادق والضيافة في اللاذقية</span><span data-en="">Latakia hospitality</span> · <a href="https://syriacdn.eaglehills.ai/videos/syria-eaglehills-latakia-hospitality-updated.mp4" target="_blank" rel="noopener"><span data-ar="">فتح الفيديو</span><span data-en="">Open video</span></a></p></div><div className="vcard tilt"><Glare><video controls playsInline preload="none" poster="media/dam-2.jpg"><source src="https://syriacdn.eaglehills.ai/videos/syria-eaglehills-damascus-heights-hospitality-desktop.mp4" type="video/mp4" /></video></Glare><p><span data-ar="">الضيافة في دمشق</span><span data-en="">Damascus hospitality</span> · <a href="https://syriacdn.eaglehills.ai/videos/syria-eaglehills-damascus-heights-hospitality-desktop.mp4" target="_blank" rel="noopener"><span data-ar="">فتح الفيديو</span><span data-en="">Open video</span></a></p></div></div>
</section>
<section className="story" id="story">
  <div className="story-bg"><img src="media/lat-morning.jpg" alt="" loading="lazy" data-i="0" className="on" /><img src="media/lat-pool.jpg" alt="" loading="lazy" data-i="1" /><img src="media/lat-3.jpg" alt="" loading="lazy" data-i="2" /><div className="story-shade"></div></div>
  <div className="story-steps wrap">
    <Eyebrow ar="يوم من حياتك هناك" en="A day in your life there" />
<article className="step" data-i="0"><span className="when"><span data-ar="">الصباح</span><span data-en="">Morning</span></span><p><span data-ar="">قهوة على الشرفة أمام البحر، والمارينا تستيقظ على يوم جديد.</span><span data-en="">Coffee on the terrace with the sea in front of you, as the marina wakes up.</span></p></article><article className="step" data-i="1"><span className="when"><span data-ar="">الظهر</span><span data-en="">Afternoon</span></span><p><span data-ar="">إبحار، غوص، أو استرخاء بالنادي الشاطئي والمسبح المطل على البحر.</span><span data-en="">Sailing, diving, or a slow afternoon at the beach club pool.</span></p></article><article className="step" data-i="2"><span className="when"><span data-ar="">المساء</span><span data-en="">Evening</span></span><p><span data-ar="">عشاء على الكورنيش، أو أمسية في دمشق القديمة على بُعد عشرين دقيقة.</span><span data-en="">Dinner on the promenade, or a night in Old Damascus twenty minutes away.</span></p></article>
  </div>
</section>
<div className="ablaq" aria-hidden="true"></div>

<section className="sec wrap rb-host" id="homes"><BgPrism />
  <div className="sec-head">
    <Eyebrow ar="أنواع الوحدات" en="Home types" />
    <RevealHeading ar="شقة، تاون هاوس، أو فيلا" en="Apartment, townhouse or villa" />
    <p className="lead"><span data-ar="">الأنواع نفسها متاحة في دمشق واللاذقية. المساحات والأسعار التفصيلية تُعلن مع كل مرحلة.</span><span data-en="">The same home types are offered in Damascus and Latakia. Exact sizes and prices are released with each phase.</span></p>
  </div>
  <div className="units">
    <article className="unit tilt">
      <svg viewBox="0 0 44 44" aria-hidden="true"><rect x="8" y="6" width="28" height="34" rx="2" fill="none" stroke="#D6A85A" strokeWidth="2" /><g fill="#D6A85A"><rect x="13" y="11" width="6" height="6" /><rect x="25" y="11" width="6" height="6" /><rect x="13" y="21" width="6" height="6" /><rect x="25" y="21" width="6" height="6" /><rect x="19" y="31" width="6" height="9" /></g></svg>
      <h3><span data-ar="">شقق</span><span data-en="">Apartments</span></h3>
      <div className="beds"><span>1</span><span>2</span><span>3</span></div>
      <p><span data-ar="">غرفة إلى ثلاث غرف نوم. الخيار الأقرب للمستثمر وللسكن الأول.</span><span data-en="">One to three bedrooms. The usual entry point for investors and first homes.</span></p>
    </article>
    <article className="unit tilt">
      <svg viewBox="0 0 44 44" aria-hidden="true"><path d="M4 22 L14 13 L24 22 V38 H4Z M20 22 L30 13 L40 22 V38 H20Z" fill="none" stroke="#D6A85A" strokeWidth="2" /><g fill="#D6A85A"><rect x="11" y="28" width="6" height="10" /><rect x="27" y="28" width="6" height="10" /></g></svg>
      <h3><span data-ar="">تاون هاوس</span><span data-en="">Townhouses</span></h3>
      <div className="beds"><span>3</span><span>4</span></div>
      <p><span data-ar="">ثلاث أو أربع غرف نوم، للعائلة التي تريد مساحة ومدخلاً خاصاً.</span><span data-en="">Three or four bedrooms, for families who want space and their own entrance.</span></p>
    </article>
    <article className="unit tilt">
      <svg viewBox="0 0 44 44" aria-hidden="true"><path d="M4 20 L22 7 L40 20 V38 H4Z" fill="none" stroke="#D6A85A" strokeWidth="2" /><path d="M17 38 v-9 a5 5 0 0 1 10 0 v9" fill="#D6A85A" /><path d="M2 40 H42" stroke="#4FB3BF" strokeWidth="2" /></svg>
      <h3><span data-ar="">فلل</span><span data-en="">Villas</span></h3>
      <div className="beds"><span>3</span><span>4</span><span>5+</span></div>
      <p><span data-ar="">من ثلاث إلى خمس غرف وأكثر. في اللاذقية بعضها بمسبح خاص وإطلالة على المارينا.</span><span data-en="">Three to five-plus bedrooms. In Latakia some come with a private pool and marina views.</span></p>
    </article>
  </div>
</section>
<div className="ablaq" aria-hidden="true"></div>

<section className="sec wrap rb-host" id="price"><BgSilk />
  <div className="sec-head">
    <Eyebrow ar="حاسبة السعر" en="Price estimator" />
    <RevealHeading ar="كم قد تكلّف وحدتك؟" en="What might your home cost?" />
    <p className="lead"><span data-ar="">السعر المعلن يبدأ من 1,600 دولار للمتر المربع، ويختلف حسب الموقع والإطلالة والمواصفات. اختر المساحة لتقدير نقطة البداية.</span><span data-en="">The published price starts at $1,600 per m² and varies by location, view and specification. Pick a size to see a starting estimate.</span></p>
  </div>
  <Electric><div className="calc">
    <div className="calc-in">
      <div className="field"><label><span data-ar="">نوع الوحدة</span><span data-en="">Home type</span></label>
        <div className="seg" id="typeSeg">
          <button type="button" data-a="75" className="on"><span data-ar="">شقة غرفة</span><span data-en="">1-bed apt</span></button>
          <button type="button" data-a="120"><span data-ar="">شقة غرفتين</span><span data-en="">2-bed apt</span></button>
          <button type="button" data-a="165"><span data-ar="">شقة 3 غرف</span><span data-en="">3-bed apt</span></button>
          <button type="button" data-a="230"><span data-ar="">تاون هاوس</span><span data-en="">Townhouse</span></button>
          <button type="button" data-a="380"><span data-ar="">فيلا</span><span data-en="">Villa</span></button>
        </div>
        <p className="note"><span data-ar="">المساحات هنا أمثلة شائعة للمقارنة فقط، وليست مساحات المشروع الرسمية.</span><span data-en="">These sizes are common examples for comparison only, not the project's official sizes.</span></p>
      </div>
      <div className="field"><label htmlFor="area"><span data-ar="">المساحة (م²)</span><span data-en="">Size (m²)</span> <b id="areaOut">75</b></label><input id="area" type="range" min="45" max="700" step="5" value="75" /></div>
      <div className="field"><label htmlFor="ppm"><span data-ar="">سعر المتر (دولار)</span><span data-en="">Price per m² (USD)</span> <b id="ppmOut">1,600</b></label><input id="ppm" type="range" min="1600" max="4000" step="50" value="1600" />
        <p className="note"><span data-ar="">1,600 هو الحد الأدنى المعلن. الإطلالات البحرية والفلل عادةً أعلى.</span><span data-en="">1,600 is the published minimum. Sea views and villas usually price higher.</span></p></div>
    </div>
    <div className="calc-out" aria-live="polite">
      <p className="mini-h"><span data-ar="">السعر التقديري يبدأ من</span><span data-en="">Estimated starting price</span></p>
      <div className="big" id="usd">$120,000</div>
      <dl>
        <dt><span data-ar="">بالدرهم الإماراتي</span><span data-en="">In UAE dirhams</span></dt><dd id="aed">AED 440,700</dd>
        <dt><span data-ar="">المساحة</span><span data-en="">Size</span></dt><dd id="sz">75 m²</dd>
        <dt><span data-ar="">سعر المتر</span><span data-en="">Per m²</span></dt><dd id="pm">$1,600</dd>
      </dl>
      <p className="note"><span data-ar="">تقدير للاسترشاد فقط. الأسعار وخطط الدفع الرسمية تصدر عن المطوّر عند الإطلاق.</span><span data-en="">For guidance only. Official prices and payment plans come from the developer at launch.</span></p>
      <a className="btn solid" href="#register"><span data-ar="">احجز أولويتك</span><span data-en="">Get priority access</span></a>
    </div>
  </div></Electric>
<PriceExamples />
</section>
<div className="ablaq" aria-hidden="true"></div>

<section className="sec wrap" id="invest">
  <div className="sec-head">
    <Eyebrow ar="من يحق له الشراء" en="Who can buy" />
    <RevealHeading ar="الأولوية للسوريين، أينما كانوا" en="Priority goes to Syrians, wherever they live" />
    <p className="lead"><span data-ar="">بحسب المطوّر، تُمنح الأولوية للأفراد والشركات والمؤسسات السورية المؤهلة. باب الاهتمام مفتوح أيضاً للمستثمرين الأجانب.</span><span data-en="">According to the developer, qualified Syrian individuals, companies and institutions get priority. Foreign investors can also register interest.</span></p>
  </div>
  <div className="who">
    <article><h3><span data-ar="">المقيمون في سوريا</span><span data-en="">Residents of Syria</span></h3><p><span data-ar="">أفراد وشركات داخل البلد، يسجّلون اهتمامهم مباشرة.</span><span data-en="">Individuals and companies in the country register directly.</span></p></article>
    <article><h3><span data-ar="">السوريون في الخارج والعائدون</span><span data-en="">Syrians abroad and returnees</span></h3><p><span data-ar="">من الإمارات والخليج وأوروبا. نتابع معك كل خطوة أينما كنت.</span><span data-en="">From the UAE, the Gulf or Europe. We handle each step with you wherever you are.</span></p></article>
    <article><h3><span data-ar="">المستثمرون الأجانب</span><span data-en="">Foreign investors</span></h3><p><span data-ar="">يمكنهم تسجيل الاهتمام، والطلبات تُراجع حسب تقدير المطوّر.</span><span data-en="">They can register interest. Requests are reviewed at the developer's discretion.</span></p></article>
  </div>
  <StepsStack />
</section>
<div className="ablaq" aria-hidden="true"></div>

<section className="sec wrap rb-host" id="timeline"><BgGalaxy />
  <div className="sec-head">
    <Eyebrow ar="المسار حتى اليوم" en="The story so far" />
    <RevealHeading ar="من الإعلان إلى التوقيع" en="From announcement to signing" />
  </div>
  <ol className="tl">
    <li><time><span data-ar="">أيار 2026</span><span data-en="">May 2026</span></time><p><b><span data-ar="">الإعلان الأول.</span><span data-en="">First announcement.</span></b> <span data-ar="">تقارير إقليمية عن دراسة مشاريع في سوريا بقيمة تتجاوز 50 مليار دولار.</span><span data-en="">Regional reports of Syria projects under study worth over $50 billion.</span></p></li>
    <li><time><span data-ar="">تموز 2026</span><span data-en="">July 2026</span></time><p><b><span data-ar="">حجم الاستثمار.</span><span data-en="">Investment size.</span></b> <span data-ar="">بلومبرغ تقدّر الاستثمارات بما لا يقل عن 20 مليار دولار.</span><span data-en="">Bloomberg puts the investment at no less than $20 billion.</span></p></li>
    <li><time><span data-ar="">5 تشرين الأول 2026</span><span data-en="">5 Oct 2026</span></time><p><b><span data-ar="">توقيع الاتفاقية الإطارية.</span><span data-en="">Framework agreement signed.</span></b> <span data-ar="">في قصر الشعب بدمشق، مع وزارتي الأشغال العامة والإسكان والسياحة.</span><span data-en="">At the People's Palace in Damascus, with the Ministries of Public Works and Housing, and Tourism.</span></p></li>
    <li><time><span data-ar="">الآن</span><span data-en="">Now</span></time><p><b><span data-ar="">التسجيل مفتوح.</span><span data-en="">Registration open.</span></b> <span data-ar="">استقبال طلبات الاهتمام، والأسعار التفصيلية وخطط الدفع تُعلن لاحقاً.</span><span data-en="">Interest requests are open. Detailed prices and payment plans come later.</span></p></li>
  </ol>
</section>
<div className="ablaq" aria-hidden="true"></div>

<section className="sec wrap" id="advisor">
  <div className="adv">
    <AdvisorOrb logo="brand/mark-gold.png" />
    <div>
      <Eyebrow ar="لماذا Syrian Eagle" en="Why Syrian Eagle" />
      <h2 style={{fontSize:"clamp(1.7rem,3.6vw,2.4rem)"}}><span data-ar="">فريق يعرف المشاريع على المخطط</span><span data-en="">A team that knows off-plan</span></h2>
      <ul>
        <li><span data-ar="">خبرة تزيد على 11 سنة في مبيعات المشاريع على المخطط والمخططات الرئيسية.</span><span data-en="">11+ years of experience in off-plan and master-development sales.</span></li>
        <li><span data-ar="">خبرة من داخل كبرى شركات التطوير، ونعرف كيف تُسعّر الإطلاقات.</span><span data-en="">Experience from inside major developers; we know how launches are priced.</span></li>
        <li><span data-ar="">نتابع معك أينما كنت، بلغتك وبوضوح.</span><span data-en="">We follow up with you wherever you are, in your language.</span></li>
      </ul>
    </div>
  </div>
</section>

<section className="sec wrap rb-host" id="faq"><BgDots />
  <div className="sec-head">
    <Eyebrow ar="أسئلة شائعة" en="FAQ" />
    <RevealHeading ar="قبل أن تسجّل" en="Before you register" />
  </div>
  <div>
    <BuyerChecklist />
<details><summary><span data-ar="">هل التسجيل يُلزمني بالشراء؟</span><span data-en="">Does registering commit me to buy?</span></summary><p><span data-ar="">لا. تسجيل الاهتمام لا يُنشئ أي التزام أو علاقة تعاقدية، والطلبات تُراجع حسب تقدير المطوّر.</span><span data-en="">No. Registering interest creates no obligation or contract, and requests are reviewed at the developer's discretion.</span></p></details>
    <details><summary><span data-ar="">هل أُعلنت خطة الدفع ومواعيد التسليم؟</span><span data-en="">Are the payment plan and handover dates out?</span></summary><p><span data-ar="">ليس بعد. المعلن حالياً هو سعر البداية 1,600 دولار للمتر المربع. سنرسل لك التفاصيل فور صدورها.</span><span data-en="">Not yet. The published figure so far is a starting price of $1,600 per m². We will send you details as soon as they are released.</span></p></details>
    <details><summary><span data-ar="">أعيش خارج سوريا، هل أستطيع الشراء؟</span><span data-en="">I live outside Syria. Can I buy?</span></summary><p><span data-ar="">نعم، السوريون في الخارج من الفئات التي يذكرها المطوّر بالأولوية. نتابع معك الإجراءات خطوة بخطوة.</span><span data-en="">Yes. Syrians abroad are among the groups the developer names for priority. We handle the process with you step by step.</span></p></details>
    <details><summary><span data-ar="">ما الفرق بين دمشق واللاذقية؟</span><span data-en="">Damascus or Latakia?</span></summary><p><span data-ar="">دمشق مجتمع سكني كبير مع مدارس ومستشفى وملعب غولف، يناسب السكن الدائم. اللاذقية وجهة بحرية مع مارينا وفنادق ونادٍ شاطئي، تناسب البيت الثاني والاستثمار السياحي.</span><span data-en="">Damascus is a large residential community with schools, a hospital and golf, suited to full-time living. Latakia is a seaside destination with a marina, hotels and a beach club, suited to second homes and holiday investment.</span></p></details>
  </div>
</section>
<div className="ablaq" aria-hidden="true"></div>

<section className="sec wrap rb-host" id="register"><RBAurora />
  <div className="reg">
    <div className="sec-head">
      <Eyebrow ar="سجّل اهتمامك" en="Register your interest" />
      <RevealHeading ar="كن من أوائل من يعرف" en="Be among the first to know" />
      <p className="lead"><span data-ar="">اترك بياناتك وسنتواصل معك خلال يوم عمل واحد، ونرسل لك الأسعار والمخططات فور صدورها.</span><span data-en="">Leave your details and we'll call you within one working day, and send prices and plans the moment they are released.</span></p>
      <div className="contact-line"><span className="num" id="num">+971 55 555 0035</span><button className="pill" type="button" id="copyNum"><span data-ar="">نسخ الرقم</span><span data-en="">Copy number</span></button></div>
          </div>
    <form className="rf" id="rf" noValidate>
      <div className="field"><label><span data-ar="">الوجهة</span><span data-en="">Destination</span></label>
        <div className="seg" data-name="project"><button type="button" className="on" data-v="Damascus Heights"><span data-ar="">تلال دمشق</span><span data-en="">Damascus Heights</span></button><button type="button" data-v="Latakia Yachts &amp; Marina"><span data-ar="">اللاذقية لليخوت والمارينا</span><span data-en="">Latakia Marina</span></button><button type="button" data-v="Both"><span data-ar="">الاثنتان</span><span data-en="">Both</span></button></div></div>
      <div className="row2">
        <div className="field" id="f-name"><label htmlFor="rName"><span data-ar="">الاسم الكامل *</span><span data-en="">Full name *</span></label><input id="rName" autoComplete="name" maxLength="80" /><span className="err-msg"><span data-ar="">يرجى كتابة اسمك.</span><span data-en="">Please enter your name.</span></span></div>
        <div className="field" id="f-phone"><label htmlFor="rPhone"><span data-ar="">الجوال / واتساب *</span><span data-en="">Mobile / WhatsApp *</span></label>
          <div className="phone-row" dir="ltr"><select id="rCc" aria-label="Country code" defaultValue="+971"><option value="+963">🇸🇾 +963</option><option value="+971">🇦🇪 +971</option><option value="+966">🇸🇦 +966</option><option value="+965">🇰🇼 +965</option><option value="+974">🇶🇦 +974</option><option value="+973">🇧🇭 +973</option><option value="+968">🇴🇲 +968</option><option value="+962">🇯🇴 +962</option><option value="+961">🇱🇧 +961</option><option value="+90">🇹🇷 +90</option><option value="+49">🇩🇪 +49</option><option value="+46">🇸🇪 +46</option><option value="+31">🇳🇱 +31</option><option value="+44">🇬🇧 +44</option><option value="+33">🇫🇷 +33</option><option value="+1">🇺🇸 +1</option><option value="">Other</option></select><input id="rPhone" type="tel" inputMode="tel" autoComplete="tel-national" maxLength="20" placeholder="50 123 4567" /></div>
          <span className="err-msg"><span data-ar="">يرجى إدخال رقم صحيح.</span><span data-en="">Please enter a valid number.</span></span></div>
      </div>
      <div className="row2">
        <div className="field" id="f-email"><label htmlFor="rEmail"><span data-ar="">البريد الإلكتروني</span><span data-en="">Email</span></label><input id="rEmail" type="email" dir="ltr" autoComplete="email" maxLength="120" /><span className="err-msg"><span data-ar="">تحقق من البريد.</span><span data-en="">Please check the email.</span></span></div>
        <div className="field"><label htmlFor="rType"><span data-ar="">نوع الوحدة</span><span data-en="">Home type</span></label><select id="rType">
          <option value="1BR apartment">شقة غرفة نوم · 1BR apartment</option><option value="2BR apartment">شقة غرفتين · 2BR apartment</option><option value="3BR apartment">شقة 3 غرف · 3BR apartment</option><option value="3BR townhouse">تاون هاوس 3 غرف · 3BR townhouse</option><option value="4BR townhouse">تاون هاوس 4 غرف · 4BR townhouse</option><option value="3BR villa">فيلا 3 غرف · 3BR villa</option><option value="4BR villa">فيلا 4 غرف · 4BR villa</option><option value="5+BR villa">فيلا 5 غرف وأكثر · 5+BR villa</option></select></div>
      </div>
      <div className="row2">
        <div className="field"><label htmlFor="rBudget"><span data-ar="">الميزانية (دولار)</span><span data-en="">Budget (USD)</span></label><select id="rBudget"><option>Under $100K</option><option>$100K – 200K</option><option>$200K – 400K</option><option>$400K – 800K</option><option>$800K+</option></select></div>
        <div className="field"><label htmlFor="rRes"><span data-ar="">بلد الإقامة</span><span data-en="">Country of residence</span></label><input id="rRes" maxLength="60" placeholder="UAE, Syria, Germany…" /></div>
      </div>
      <div className="field"><label htmlFor="rMsg"><span data-ar="">ملاحظات</span><span data-en="">Notes</span></label><textarea id="rMsg" maxLength="600"></textarea></div>
      <input className="hp" id="rWeb" tabIndex="-1" autoComplete="off" aria-hidden="true" />
      <label className="consent" id="f-consent"><input type="checkbox" id="rOk" /><span><span data-ar="">أوافق على أن يتواصل معي فريق Syrian Eagle بخصوص هذا المشروع.</span><span data-en="">I agree to be contacted by the Syrian Eagle team about this project.</span></span></label>
      <button className="btn solid" type="submit" id="rBtn" style={{justifyContent:"center"}}><span data-ar="">سجّل اهتمامي</span><span data-en="">Register my interest</span></button>
      <div className="done" aria-live="polite">
        <div className="ok">✓</div>
        <h3><span data-ar="">تم تسجيل اهتمامك</span><span data-en="">You're registered</span></h3>
        <p className="lead"><span data-ar="">سنتواصل معك خلال يوم عمل واحد. للرد الأسرع أرسل بياناتك على واتساب.</span><span data-en="">We'll be in touch within one working day. For a faster reply, send your details on WhatsApp.</span></p>
        <a className="btn solid" id="rWa" href="https://wa.me/971555550035" target="_blank" rel="noopener"><span data-ar="">أرسل على واتساب</span><span data-en="">Send on WhatsApp</span></a>
      </div>
    </form>
  </div>
</section>
</main>

<SeaLoop />
<section className="sea3d" id="sea3d">
  <canvas id="seaGL" aria-hidden="true"></canvas>
  <div className="sea-ui wrap">
    <Eyebrow ar="المتوسط بانتظارك" en="The Mediterranean is waiting" />
    <h2 className="sea-title"><span data-ar="">بيتك القادم<br />على البحر</span><span data-en="">Your next home<br />by the sea</span></h2>
    <div className="cta-row"><a className="btn solid" href="#register"><span data-ar="">احجز أولويتك</span><span data-en="">Get priority access</span></a><button className="btn ghost" type="button" id="sound2"><span data-ar="">🔊 اسمع البحر</span><span data-en="">🔊 Hear the sea</span></button></div>
  </div>
  <div className="sea-hint" aria-hidden="true"><span data-ar="">حرّك الماوس أو إصبعك</span><span data-en="">Move your mouse or finger</span></div>
</section>
<footer className="wrap">
  <p><span data-ar="">صفحة تعريفية مستقلة من Syrian Eagle للاستشارات العقارية. ليست الموقع الرسمي لشركة إيجل هيلز. المعلومات مأخوذة مما نشره المطوّر ووسائل الإعلام حتى تشرين الأول 2026، وقد تتغير. الصور رسوم توضيحية.</span><span data-en="">An independent guide by Syrian Eagle property advisory. This is not Eagle Hills' official website. Information is taken from what the developer and the press published up to October 2026 and may change. Images are illustrations.</span></p>
  <p className="src"><span data-ar="">المصادر:</span><span data-en="">Sources:</span> <a href="https://eaglehillssyria.com/ar/" target="_blank" rel="noopener">eaglehillssyria.com</a> · <a href="https://damascusheights.com/ar/" target="_blank" rel="noopener">damascusheights.com</a> · <a href="https://latakiayachtsandmarina.com/ar/" target="_blank" rel="noopener">latakiayachtsandmarina.com</a> · <a href="https://gulfnews.com/business/property/eagle-hills-enters-syria-with-damascus-latakia-deals-1.500700060" target="_blank" rel="noopener">Gulf News</a></p>
  <p>© 2026 Syrian Eagle</p>
</footer>

<button className="sound" type="button" id="sound" aria-pressed="false"><span className="ico">🔊</span><span className="lbl"><span data-ar="">صوت البحر</span><span data-en="">Sea sound</span></span></button>
<a className="mcta" href="#register"><span data-ar="">سجّل اهتمامك · الأولوية للأوائل</span><span data-en="">Register · early priority</span></a>
<a className="wa-fab" href="https://wa.me/971555550035" target="_blank" rel="noopener" aria-label="WhatsApp"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-3.3-.8-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.4.6-.3.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.3.1.1.1.6-.1 1.2z" /></svg></a>


  </>);
}
