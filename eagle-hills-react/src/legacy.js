/* Imperative page behaviour (ported from the single-file version). Runs once after React mounts. */
export function runLegacy(){
var LEADS_URL='https://script.google.com/macros/s/AKfycbxi3TzpeHf_SGZ4rcmjmcS4PxEmK0AhwL6NryRICbz4qt7bat2BM_SnOxp6bqWJq38zSw/exec';
(function(){
  var root=document.documentElement, $=function(id){return document.getElementById(id)};
  function setLang(l){root.lang=l;root.dir=l==='ar'?'rtl':'ltr';window.dispatchEvent(new CustomEvent('langchange',{detail:l}));try{localStorage.setItem('ehs-lang',l)}catch(e){}calc()}
  $('langBtn').addEventListener('click',function(){setLang(root.lang==='ar'?'en':'ar')});
  var saved='ar';try{saved=localStorage.getItem('ehs-lang')||'ar'}catch(e){}
  root.lang=saved;root.dir=saved==='ar'?'rtl':'ltr';
  // tabs
  var tabs=[['t-dam','p-dam'],['t-lat','p-lat']];
  tabs.forEach(function(t){$(t[0]).addEventListener('click',function(){tabs.forEach(function(u){var on=u===t;$(u[0]).setAttribute('aria-selected',on);$(u[1]).hidden=!on})})});
  // calculator
  var fmt=function(n){return Math.round(n).toLocaleString('en-US')};
  function calc(){var a=+$('area').value,p=+$('ppm').value,u=a*p;$('areaOut').textContent=a;$('ppmOut').textContent=fmt(p);$('usd').textContent='$'+fmt(u);$('aed').textContent='AED '+fmt(u*3.6725);$('sz').textContent=a+' m²';$('pm').textContent='$'+fmt(p)}
  $('typeSeg').addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;this.querySelectorAll('button').forEach(function(x){x.classList.toggle('on',x===b)});$('area').value=b.dataset.a;calc()});
  ['area','ppm'].forEach(function(id){$(id).addEventListener('input',calc)});calc();
  // copy
  $('copyNum').addEventListener('click',function(){var t='+971555550035',b=this;function sel(){var r=document.createRange();r.selectNodeContents($('num'));var s=getSelection();s.removeAllRanges();s.addRange(r)}try{navigator.clipboard.writeText(t).then(function(){b.textContent=root.lang==='ar'?'تم النسخ':'Copied'},sel)}catch(e){sel()}});
  // form
  var f=$('rf');
  f.querySelectorAll('.seg[data-name]').forEach(function(g){g.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;g.querySelectorAll('button').forEach(function(x){x.classList.toggle('on',x===b)})})});
  function bad(id,c){$(id).classList.toggle('err',c);return c}
  [['rName','f-name'],['rPhone','f-phone'],['rEmail','f-email']].forEach(function(p){$(p[0]).addEventListener('input',function(){$(p[1]).classList.remove('err')})});
  $('rOk').addEventListener('change',function(){$('f-consent').classList.remove('err')});
  f.addEventListener('submit',function(e){
    e.preventDefault(); if($('rWeb').value) return;
    var name=$('rName').value.trim(),dig=$('rPhone').value.replace(/\D/g,''),em=$('rEmail').value.trim(),x=false;
    x=bad('f-name',name.length<2)||x; x=bad('f-phone',dig.length<7||dig.length>15)||x;
    x=bad('f-email',!!em&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em))||x; x=bad('f-consent',!$('rOk').checked)||x;
    if(x){var q=f.querySelector('.err');q&&q.scrollIntoView({behavior:'smooth',block:'center'});return}
    var ar=root.lang==='ar',proj=(f.querySelector('.seg[data-name=project] .on')||{}).dataset.v||'';
    var d={name:name,phone:($('rCc').value+' '+$('rPhone').value.trim()).trim(),email:em,goal:'Eagle Hills Syria – '+proj,ptype:$('rType').value,budget:$('rBudget').value,area:$('rRes').value.trim(),timeline:'',via:'WhatsApp',message:$('rMsg').value.trim(),lang:ar?'AR':'EN',page:'Eagle Hills Syria guide'};
    var msg=(ar?'مرحباً Syrian Eagle، سجّلت اهتمامي بمشروع إيجل هيلز سوريا:':'Hi Syrian Eagle, I registered interest in Eagle Hills Syria:')+'\n• '+d.name+' · '+d.phone+(em?' · '+em:'')+'\n• '+proj+' · '+d.ptype+'\n• '+d.budget+(d.area?' · '+d.area:'')+(d.message?'\n• '+d.message:'');
    $('rWa').href='https://wa.me/971555550035?text='+encodeURIComponent(msg);
    function done(){try{window.fbq&&fbq('track','Lead',{content_name:'Eagle Hills Syria'})}catch(e){}f.classList.add('sent');f.scrollIntoView({behavior:'smooth',block:'center'})}
    if(!LEADS_URL){done();return}
    $('rBtn').disabled=true; fetch(LEADS_URL,{method:'POST',mode:'no-cors',body:new URLSearchParams(d)}).then(done,done);
  });
  // sea waves + bubbles canvas
  var c=$('waves'),g=c.getContext('2d'),still=matchMedia('(prefers-reduced-motion: reduce)').matches,t0=performance.now(),bub=[];
  function size(){var k=Math.min(2,devicePixelRatio||1);c.width=c.clientWidth*k;c.height=c.clientHeight*k;g.setTransform(k,0,0,k,0,0)}
  for(var i=0;i<40;i++)bub.push({x:Math.random(),y:Math.random(),r:1+Math.random()*3,s:.02+Math.random()*.05});
  var layers=[['rgba(47,211,224,.18)',.55,22,.7],['rgba(10,92,120,.45)',.68,18,-.5],['rgba(3,36,58,.85)',.8,14,.4],['#03243A',.9,10,-.3]];
  function draw(now){var w=c.clientWidth,h=c.clientHeight,t=(now-t0)/1000;g.clearRect(0,0,w,h);
    bub.forEach(function(p){p.y-=p.s*.016;if(p.y<0){p.y=1;p.x=Math.random()}g.beginPath();g.arc(p.x*w,p.y*h,p.r,0,7);g.fillStyle='rgba(234,247,248,'+(0.25*p.y)+')';g.fill()});
    layers.forEach(function(L,n){g.beginPath();g.moveTo(0,h);for(var x=0;x<=w;x+=8){var y=h*L[1]+Math.sin(x*.012+t*L[3]*1.6+n)*L[2]+Math.sin(x*.004-t*.6*L[3])*L[2]*.8;g.lineTo(x,y)}g.lineTo(w,h);g.closePath();g.fillStyle=L[0];g.fill()});
    if(!still)requestAnimationFrame(draw)}
  size();addEventListener('resize',size);requestAnimationFrame(draw);

  // intro curtain
  var intro=$('intro');function hideIntro(){intro.classList.add('out');setTimeout(function(){intro.remove()},1300)}
  if(still)intro.remove();else{addEventListener('load',function(){setTimeout(hideIntro,500)});setTimeout(function(){if(document.body.contains(intro))hideIntro()},1300)}
  // cursor glow
  var glow=$('glow');if(matchMedia('(hover:hover)').matches&&!still){addEventListener('pointermove',function(e){glow.style.opacity=1;glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'},{passive:true})}
  // counters
  var counted=false;function countUp(){if(counted)return;counted=true;document.querySelectorAll('.facts .count').forEach(function(el){var to=+el.dataset.to,pre=el.dataset.pre||'',t0=performance.now();(function f(n){var p=Math.min(1,(n-t0)/1800),v=Math.round(to*(1-Math.pow(1-p,3)));el.textContent=pre+v.toLocaleString('en-US');if(p<1)requestAnimationFrame(f)})(t0)})}
  if(!still){setTimeout(countUp,900);if('IntersectionObserver' in window){var co=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var el=e.target,to=+el.dataset.to,pre=el.dataset.pre||'',t0=performance.now(),yr=to>1900&&to<2100;(function f(n){var p=Math.min(1,(n-t0)/1600),v=yr?Math.round(to-60*(1-Math.pow(p,.5))*(1-p)):Math.round(to*(1-Math.pow(1-p,3)));el.textContent=pre+(yr?v:v.toLocaleString('en-US'));if(p<1)requestAnimationFrame(f)})(t0);co.unobserve(el)}})},{threshold:.6});document.querySelectorAll('.gcard .count,.kpis3 .count').forEach(function(el){co.observe(el)})}}
  // split panels: hover plays video, click opens tab
  document.querySelectorAll('.panel').forEach(function(p){var v=p.querySelector('video');
    p.addEventListener('mouseenter',function(){if(still)return;v.play().then(function(){p.classList.add('playing')}).catch(function(){})});
    p.addEventListener('mouseleave',function(){v.pause();p.classList.remove('playing')});
    p.addEventListener('click',function(){var t=$(p.dataset.tab);t&&t.click()})});
  // sticky story
  var sImgs=document.querySelectorAll('.story-bg img');if('IntersectionObserver' in window){var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var i=e.target.dataset.i;sImgs.forEach(function(im){im.classList.toggle('on',im.dataset.i===i)})}})},{threshold:.55});document.querySelectorAll('.step').forEach(function(s){so.observe(s)})}
  // magnetic buttons
  if(!still&&matchMedia('(hover:hover)').matches)document.querySelectorAll('.btn,.pill.gold').forEach(function(bt){bt.addEventListener('pointermove',function(e){var r=bt.getBoundingClientRect();bt.style.transform='translate('+((e.clientX-r.left-r.width/2)*.18)+'px,'+((e.clientY-r.top-r.height/2)*.25)+'px)'});bt.addEventListener('pointerleave',function(){bt.style.transform=''})});
  // mobile sticky CTA after hero
  var mc=document.querySelector('.mcta');addEventListener('scroll',function(){var r=$('register').getBoundingClientRect();mc.classList.toggle('show',scrollY>500&&r.top>innerHeight)},{passive:true});

  // procedural sea-wave sound (Web Audio, starts only on tap)
  var actx=null,master=null;
  function startSea(){actx=new (window.AudioContext||window.webkitAudioContext)();master=actx.createGain();master.gain.value=0;master.connect(actx.destination);
    var len=actx.sampleRate*4,buf=actx.createBuffer(2,len,actx.sampleRate);
    for(var ch=0;ch<2;ch++){var d=buf.getChannelData(ch),last=0;for(var i=0;i<len;i++){var w=Math.random()*2-1;last=(last+0.02*w)/1.02;d[i]=last*3.5}}
    function layer(freq,q,gain,rate,phase){var src=actx.createBufferSource();src.buffer=buf;src.loop=true;src.playbackRate.value=rate;
      var f=actx.createBiquadFilter();f.type='lowpass';f.frequency.value=freq;f.Q.value=q;var g=actx.createGain();g.gain.value=0;
      var lfo=actx.createOscillator(),lg=actx.createGain();lfo.frequency.value=phase;lg.gain.value=gain;lfo.connect(lg);lg.connect(g.gain);
      var off=actx.createConstantSource?actx.createConstantSource():null;if(off){off.offset.value=gain;off.connect(g.gain);off.start()}
      src.connect(f);f.connect(g);g.connect(master);src.start(0,Math.random()*3);lfo.start()}
    layer(500,.7,.55,1,.09);layer(1200,.5,.25,.9,.13);layer(260,.9,.5,1.1,.07);
    master.gain.linearRampToValueAtTime(.9,actx.currentTime+2)}
  $('sound').addEventListener('click',function(){var on=this.getAttribute('aria-pressed')!=='true';this.setAttribute('aria-pressed',on);
    try{if(on){if(!actx)startSea();else{actx.resume();master.gain.linearRampToValueAtTime(.9,actx.currentTime+1.5)}}else if(actx){master.gain.linearRampToValueAtTime(0,actx.currentTime+.8);setTimeout(function(){actx.suspend()},900)}}catch(e){}});

  // ===== WebGL sunset sea =====
  (function(){var cv=$('seaGL');if(!cv)return;var gl=cv.getContext('webgl',{antialias:false,premultipliedAlpha:false});if(!gl)return;
  var vs='attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
  var fs=`precision highp float;uniform vec2 R;uniform float T;uniform vec2 M;
  float h21(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
  float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h21(i),h21(i+vec2(1,0)),f.x),mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x),f.y);}
  float fbm(vec2 p){float a=.5,s=0.;for(int i=0;i<5;i++){s+=a*n2(p);p*=2.03;a*=.5;}return s;}
  vec3 W(vec2 p,float t){float h=0.;vec2 d=vec2(0.);
    vec4 dirs[6];dirs[0]=vec4(1.,.2,.9,1.1);dirs[1]=vec4(.7,.7,1.4,.8);dirs[2]=vec4(-.3,1.,2.3,.55);dirs[3]=vec4(.9,-.4,3.7,.35);dirs[4]=vec4(-.8,.5,5.9,.2);dirs[5]=vec4(.2,-1.,8.3,.12);
    for(int i=0;i<6;i++){vec2 k=normalize(dirs[i].xy);float f=dirs[i].z*.35,a=dirs[i].w*.22;float ph=dot(k,p)*f+t*sqrt(9.8*f)*.55;h+=a*sin(ph);d+=a*f*k*cos(ph);}
    return vec3(h,d);}
  vec3 sky(vec3 rd){float y=max(rd.y,0.);vec3 top=vec3(.10,.15,.32),mid=vec3(.93,.52,.36),hor=vec3(1.,.80,.55);
    vec3 c=mix(hor,mid,smoothstep(0.,.12,y));c=mix(c,top,smoothstep(.1,.6,y));
    vec3 sd=normalize(vec3(.0,.09,1.));float s=max(dot(rd,sd),0.);c+=vec3(1.,.75,.45)*pow(s,8.)*.45+vec3(1.,.9,.7)*pow(s,900.)*4.;
    vec2 cp=rd.xz/(rd.y+.08);float cl=smoothstep(.55,.85,fbm(cp*1.2+vec2(T*.02,0.)));c=mix(c,mix(vec3(1.,.72,.55),vec3(.55,.35,.45),y*2.),cl*.55*smoothstep(0.,.08,y));
    return c;}
  void main(){vec2 uv=(gl_FragCoord.xy-.5*R)/R.y;
    vec3 ro=vec3(0.,1.25+M.y*.35,0.);float yaw=M.x*.25;vec3 fw=normalize(vec3(sin(yaw),-.06+M.y*.05,cos(yaw)));vec3 rt=normalize(cross(vec3(0,1,0),fw)),up=cross(fw,rt);
    vec3 rd=normalize(fw+uv.x*rt+uv.y*up);vec3 col;
    if(rd.y>=0.){col=sky(rd);}else{
      float t=-ro.y/rd.y;vec3 p=ro+rd*t;vec3 w=W(p.xz,T);
      vec3 nrm=normalize(vec3(-w.y,1.,-w.z));float fd=1.-exp(-t*.025);nrm=normalize(mix(nrm,vec3(0,1,0),fd*.85));
      vec3 rf=reflect(rd,nrm);rf.y=abs(rf.y);vec3 sc=sky(rf);
      float fres=.04+.96*pow(1.-max(dot(nrm,-rd),0.),5.);
      vec3 deep=vec3(.01,.12,.20),shal=vec3(.02,.42,.48);vec3 water=mix(deep,shal,clamp(w.x*1.4+.35,0.,1.)*.6);
      col=mix(water,sc,fres);
      vec3 sd=normalize(vec3(0.,.09,1.));float sp=pow(max(dot(rf,sd),0.),220.);col+=vec3(1.,.85,.6)*sp*3.5*(1.-fd*.5);
      float glit=step(.992,h21(floor(p.xz*90.+T*3.)))*pow(max(dot(rf,sd),0.),10.)*smoothstep(.05,.45,fd);col+=vec3(1.,.9,.7)*glit*1.6;
      float foam=smoothstep(.16,.30,w.x+(fbm(p.xz*3.+T*.3)-.5)*.12);col=mix(col,vec3(.92,.96,.97),foam*.55*(1.-fd));
      col=mix(col,sky(vec3(rd.x,0.001,rd.z)),pow(fd,3.));}
    col=pow(col,vec3(.92));col*=1.-.25*dot(uv,uv);gl_FragColor=vec4(col,1.);}`;
  function sh(t,s){var o=gl.createShader(t);gl.shaderSource(o,s);gl.compileShader(o);if(!gl.getShaderParameter(o,gl.COMPILE_STATUS)){console.warn(gl.getShaderInfoLog(o));return null}return o}
  var v=sh(gl.VERTEX_SHADER,vs),f=sh(gl.FRAGMENT_SHADER,fs);if(!v||!f)return;var pr=gl.createProgram();gl.attachShader(pr,v);gl.attachShader(pr,f);gl.linkProgram(pr);gl.useProgram(pr);
  var buf=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buf);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
  var loc=gl.getAttribLocation(pr,'p');gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,2,gl.FLOAT,false,0,0);
  var uR=gl.getUniformLocation(pr,'R'),uT=gl.getUniformLocation(pr,'T'),uM=gl.getUniformLocation(pr,'M');
  var mx=0,my=0,tx=0,ty=0,vis=false,t0=performance.now(),scale=Math.min(1.25,devicePixelRatio||1)*(innerWidth<700?.7:.8);
  function rs(){cv.width=Math.round(cv.clientWidth*scale);cv.height=Math.round(cv.clientHeight*scale);gl.viewport(0,0,cv.width,cv.height)}
  rs();addEventListener('resize',rs);
  var sec=$('sea3d');sec.addEventListener('pointermove',function(e){var r=sec.getBoundingClientRect();tx=((e.clientX-r.left)/r.width-.5)*2;ty=((e.clientY-r.top)/r.height-.5)*-1});
  sec.addEventListener('pointerleave',function(){tx=0;ty=0});
  if('IntersectionObserver' in window)new IntersectionObserver(function(es){vis=es[0].isIntersecting;if(vis)requestAnimationFrame(fr)},{rootMargin:'200px'}).observe(sec);else vis=true;
  function fr(now){if(!vis)return;mx+=(tx-mx)*.04;my+=(ty-my)*.04;gl.uniform2f(uR,cv.width,cv.height);gl.uniform1f(uT,still?8.:(now-t0)/1000);gl.uniform2f(uM,mx,my);gl.drawArrays(gl.TRIANGLE_STRIP,0,4);if(!still)requestAnimationFrame(fr)}
  requestAnimationFrame(fr);})();
  $('sound2').addEventListener('click',function(){$('sound').click()});

  // map pins <-> cards
  function pick(k){document.querySelectorAll('.pin').forEach(function(p){p.classList.toggle('on',p.dataset.k===k)});document.querySelectorAll('.mcard').forEach(function(c){c.classList.toggle('on',c.dataset.k===k)})}
  document.querySelectorAll('.pin,.mcard').forEach(function(el){el.addEventListener('click',function(){pick(el.dataset.k)});el.addEventListener('keydown',function(e){if(e.key==='Enter')pick(el.dataset.k)})});
  pick('lat');

  // satellite map (falls back to the vector map if Leaflet or tiles are unavailable)
  (function(){var tm=$('tmap');if(!tm||!window.L)return;
    var SY=[[[38.792341, 33.378686], [36.834062, 32.312938], [35.719918, 32.709192], [35.700798, 32.716014], [35.836397, 32.868123], [35.821101, 33.277426], [36.06646, 33.824912], [36.61175, 34.201789], [36.448194, 34.593935], [35.998403, 34.644914], [35.905023, 35.410009], [36.149763, 35.821535], [36.41755, 36.040617], [36.685389, 36.259699], [36.739494, 36.81752], [37.066761, 36.623036], [38.167727, 36.90121], [38.699891, 36.712927], [39.52258, 36.716054], [40.673259, 37.091276], [41.212089, 37.074352], [42.349591, 37.229873], [41.837064, 36.605854], [41.289707, 36.358815], [41.383965, 35.628317], [41.006159, 34.419372], [38.792341, 33.378686]]];
    var P={dam:[33.513,36.20],lat:[35.53,35.78]};
    var m=L.map('leaf',{zoomControl:true,attributionControl:true,scrollWheelZoom:false,zoomSnap:.25,minZoom:4,maxZoom:15}).setView([35,38.5],5);
    var ok=false,tl=L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{maxZoom:17,attribution:'Imagery © Esri'}).addTo(m);
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',{maxZoom:17,opacity:.75}).addTo(m);
    tl.on('tileload',function(){if(!ok){ok=true;tm.classList.add('sat');setTimeout(function(){m.invalidateSize();m.flyToBounds(L.latLngBounds(SY[0].map(function(c){return[c[1],c[0]]})),{duration:2.4,paddingTopLeft:[40,60],paddingBottomRight:[innerWidth>760?380:40,60]})},400)}});
    L.polygon(SY.map(function(r){return r.map(function(c){return[c[1],c[0]]})}),{color:'#2FD3E0',weight:2.5,fillColor:'#2FD3E0',fillOpacity:.06,dashArray:'8 6',className:'syr-line'}).addTo(m);
    L.polyline([P.dam,[34.7,36.6],P.lat],{color:'#F6DFB0',weight:2,dashArray:'4 8',opacity:.85}).addTo(m);
    var names={dam:{ar:'تلال دمشق',en:'Damascus Heights'},lat:{ar:'مارينا اللاذقية',en:'Latakia Marina'}},mk={};
    Object.keys(P).forEach(function(k){var ic=L.divIcon({className:'',iconSize:[0,0],html:'<div class="lpin" data-k="'+k+'"><span class="ring"></span><span class="ring r2"></span><span class="core"></span><span class="tag">'+(root.lang==='ar'?names[k].ar:names[k].en)+'</span></div>'});
      mk[k]=L.marker(P[k],{icon:ic}).addTo(m).on('click',function(){fly(k)})});
    function fly(k){document.querySelectorAll('.mcard').forEach(function(c){c.classList.toggle('on',c.dataset.k===k)});document.querySelectorAll('.lpin').forEach(function(p){p.classList.toggle('on',p.dataset.k===k)});
      if(k==='all')m.flyToBounds(L.latLngBounds(SY[0].map(function(c){return[c[1],c[0]]})),{duration:2,paddingTopLeft:[40,60],paddingBottomRight:[innerWidth>760?380:40,60]});else m.flyTo(P[k],12,{duration:2.6})}
    document.querySelectorAll('.map-panel .mcard').forEach(function(c){c.addEventListener('click',function(){if(ok)fly(c.dataset.k)})});
    m.on('mousemove',function(e){$('coord').textContent=e.latlng.lat.toFixed(3)+'°N · '+e.latlng.lng.toFixed(3)+'°E'});
    m.on('zoomend',function(){$('zoomr').textContent='ZOOM '+m.getZoom().toFixed(1)});
    document.getElementById('langBtn').addEventListener('click',function(){setTimeout(function(){document.querySelectorAll('.lpin').forEach(function(p){p.querySelector('.tag').textContent=root.lang==='ar'?names[p.dataset.k].ar:names[p.dataset.k].en})},50)});
  })();
  // hero parallax
  var hv=$('heroVid');addEventListener('scroll',function(){var y=scrollY;if(y<900&&hv)hv.style.transform='translateY('+(y*.35)+'px) scale('+(1+y/3000)+')'},{passive:true});
  // 3D tilt
  if(!still&&matchMedia('(hover:hover)').matches)document.querySelectorAll('.tilt').forEach(function(el){
    el.addEventListener('pointermove',function(e){var r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;el.style.transform='perspective(900px) rotateY('+((x-.5)*10)+'deg) rotateX('+((.5-y)*8)+'deg) translateZ(6px)';el.style.setProperty('--gx',x*100+'%');el.style.setProperty('--gy',y*100+'%')});
    el.addEventListener('pointerleave',function(){el.style.transform=''})});
  // ken burns slideshows
  document.querySelectorAll('.kb').forEach(function(k){var im=k.querySelectorAll('img'),n=0;if(im.length<2)return;setInterval(function(){im[n].classList.remove('on');n=(n+1)%im.length;im[n].classList.add('on')},4200)});
  // hide broken images gracefully
  document.querySelectorAll('img').forEach(function(im){im.addEventListener('error',function(){im.style.visibility='hidden'})});
  // gallery nav
  /* gallery nav replaced by CircularGallery */
  // scroll reveal (translate only, content stays visible)
  if('IntersectionObserver' in window&&!still){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.animate([{transform:'translateY(30px) rotateX(8deg)'},{transform:'none'}],{duration:900,easing:'cubic-bezier(.2,.7,.2,1)'});io.unobserve(e.target)}})},{threshold:.15});document.querySelectorAll('.sec-head,.unit,.dest,.vcard,.who article,.steps li,.calc').forEach(function(el){io.observe(el)})}
})();

}
export function runMotion(){
/* Motion layer: GSAP + ScrollTrigger + SplitText + Lenis. Effects adapted from React Bits (SplitText, ScrollReveal, ScrollVelocity, ShinyText, SpotlightCard, ClickSpark). */
(function(){
  var still=matchMedia('(prefers-reduced-motion: reduce)').matches, root=document.documentElement;
  if(!window.gsap||!window.ScrollTrigger||still)return;
  gsap.registerPlugin(ScrollTrigger);if(window.SplitText)gsap.registerPlugin(SplitText);
  // Lenis smooth scroll
  var lenis=null;if(window.Lenis){lenis=new Lenis({lerp:.085,smoothWheel:true,wheelMultiplier:1});lenis.on('scroll',ScrollTrigger.update);gsap.ticker.add(function(t){lenis.raf(t*1000)});gsap.ticker.lagSmoothing(0);
    document.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){var id=a.getAttribute('href');if(id.length<2)return;var t=document.querySelector(id);if(!t)return;e.preventDefault();lenis.scrollTo(t,{offset:-90,duration:1.4})})})}
  // progress bar
  gsap.to('#prog',{scaleX:1,ease:'none',scrollTrigger:{start:0,end:'max',scrub:.3}});
  gsap.from('.hero .sub,.hero .cta-row,.hero .facts > div',{y:20,opacity:0,duration:.8,ease:'power2.out',stagger:.08,delay:1.2});
  document.querySelectorAll('.sec-head .lead > span').forEach(function(s){if(!window.SplitText)return;var sp=SplitText.create(s,{type:'words',wordsClass:'sr-w'});gsap.fromTo(sp.words,{opacity:1},{opacity:1,stagger:.04,ease:'none',scrollTrigger:{trigger:s.closest('.sec-head'),start:'top 85%',end:'bottom 45%',scrub:true}})});
  // staggered card entrances (no opacity, page stays complete at rest)
  [['.facts4 .gcard'],['.units .unit'],['.steps li'],['.who article'],['.gl-row'],['.ftl li'],['.vids .vcard'],['.map-panel .mcard']].forEach(function(g){var els=document.querySelectorAll(g[0]);if(!els.length)return;gsap.from(els,{y:24,opacity:0,duration:.7,ease:'power2.out',stagger:.06,scrollTrigger:{trigger:els[0],start:'top 90%'}})});
  // parallax media
  document.querySelectorAll('.dest-art .kb,.panel img').forEach(function(el){gsap.fromTo(el,{yPercent:-6,scale:1.12},{yPercent:6,scale:1.12,ease:'none',scrollTrigger:{trigger:el.parentNode,start:'top bottom',end:'bottom top',scrub:true}})});
  gsap.to('.sea-title',{yPercent:-30,ease:'none',scrollTrigger:{trigger:'#sea3d',start:'top bottom',end:'bottom top',scrub:true}});
  // ScrollVelocity marquee
  var tr=document.querySelector('.mq-track');if(tr){tr.classList.add('gsap');var dir=root.dir==='rtl'?1:-1,x=0,v=0,skew=gsap.quickSetter(tr,'skewX','deg'),setX=gsap.quickSetter(tr,'xPercent');
    ScrollTrigger.create({onUpdate:function(s){v=s.getVelocity()}});
    gsap.ticker.add(function(t,dt){var boost=1;x+=dir*.025*boost*(dt/16);if(x<-50)x+=50;if(x>0)x-=50;setX(root.dir==='rtl'?-x:x);skew(0);v*=.92})}
  document.getElementById('langBtn').addEventListener('click',function(){setTimeout(function(){ScrollTrigger.refresh()},80)});
  addEventListener('load',function(){ScrollTrigger.refresh()});
})();

}
