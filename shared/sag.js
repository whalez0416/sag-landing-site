/* SAG shared runtime: screens, phone/window mocks, scroll + reveal, countup, typewriter, orb shader, form */
window.SAG=(function(){
'use strict';
var CONFIG={email:'contact@ncconsulting.co.kr',phone:''}; /* 진단 신청이 도착할 메일 주소 */
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
var S={};
S.search='<div class="sb">9:41<i></i></div><div class="sc"><div class="srch">강북구 갑상선 수술 잘하는 곳</div><div class="tabs"><b>통합</b><span>지도</span><span>블로그</span><span>뉴스</span></div><div class="res hi"><div class="t"><span class="pill1">1위</span>&nbsp; OOO 병원</div><div class="u">갑상선 전문 외과 · 강북구</div><div class="ln m"></div><div class="ln s"></div></div><div class="res"><div class="t">△△ 내과</div><div class="ln m"></div><div class="ln s"></div></div><div class="res"><div class="t">□□ 병원</div><div class="ln m"></div><div class="ln s"></div></div></div>';
S.ai='<div class="sb">9:41<i></i></div><div class="sc"><div class="ai-h"><i></i>AI</div><div class="msg u">강북구에서 갑상선 수술 잘하는 병원 추천해줘</div><div class="msg a">강북구에서는 <span class="hl">OOO 병원</span>이 갑상선 수술을 전문으로 하는 외과 병원으로 알려져 있습니다. 로봇 수술과 흉터 최소화 수술 사례가 여러 매체에서 확인됩니다.<br><span class="chip r">[1] 건강 전문지</span><span class="chip">[2] 병원 지식 문서</span><span class="chip">[3] 구글 리뷰</span></div></div>';
S.site='<div class="sb">9:41<i></i></div><div class="sc"><div class="site-nav">OOO 병원<i></i></div><div class="hero-m"><b>갑상선 수술 1,200례<br>흉터 없는 로봇 수술</b><span>갑상선 전문 외과 · 강북구</span></div><div class="docs"><div><b>김OO 원장</b><br>갑상선 외과</div><div><b>이OO 원장</b><br>내분비 내과</div></div><div class="cta-m">진료 예약</div></div>';
S.news='<div class="sb">9:41<i></i></div><div class="sc"><div class="news-h"><b>건강 전문지</b><span>헬스</span></div><div class="headline">갑상선 결절, 꼭 수술해야 할까</div><div class="by">의학 전문 기자 · 2026.07.12</div><div class="fig"></div><p class="p">갑상선 수술은 <span class="hl">OOO 병원</span> 김OO 원장에 따르면 결절의 크기와 조직 검사 결과에 따라 결정된다. 최근에는 흉터를 남기지 않는 로봇 수술이 자주 언급된다.</p></div>';
S.video='<div class="sb">9:41<i></i></div><div class="sc"><div class="vid"><i></i></div><div class="vt">갑상선 수술 전 꼭 알아야 할 3가지</div><div class="vc">OOO 병원 · 조회수 4.2만</div><div class="ln m" style="margin-top:22px"></div><div class="ln s"></div><div class="vid" style="height:150px;margin-top:18px;background:linear-gradient(135deg,#2c2c34,#4a4a58)"></div></div>';
S.review='<div class="sb">9:41<i></i></div><div class="sc"><div style="display:flex;align-items:flex-end;gap:12px;margin-top:8px"><div class="big48">4.8</div><div><div class="stars">★★★★★</div><div style="font-size:12px;color:#888">리뷰 312개</div></div></div><div class="rv"><div class="stars">★★★★★</div>수술 전 설명이 자세했고 흉터가 거의 안 보여요. <span class="hl">OOO 병원</span> 추천합니다.</div><div class="rv"><div class="stars">★★★★★</div>대기 짧고 원장님이 직접 설명해주십니다.</div><div class="rv"><div class="stars">★★★★☆</div>주차가 조금 불편하지만 진료는 만족.</div></div>';
S.map='<div class="map"><div class="rd" style="left:0;right:0;top:36%;height:26px"></div><div class="rd" style="top:0;bottom:0;left:58%;width:22px"></div><div class="rd" style="left:0;right:0;top:64%;height:14px"></div><div class="pk"></div><div class="card"><b>OOO 병원</b><small>갑상선 전문 외과 · ★ 4.8 (312) · 도보 5분</small><div class="cta-m" style="margin-top:14px;background:#EF3E29">예약하기</div></div></div><div class="sb" style="position:absolute;top:0;left:0;right:0">9:41<i></i></div>';
var STEPS=[['01','증상 검색','search'],['02','AI에게 질문','ai'],['03','홈페이지 확인','site'],['04','기사 · 문서로 재확인','news'],['05','유튜브 시청','video'],['06','리뷰 확인','review'],['07','위치 · 예약','map']];
function phone(key,cls,style,mark){ return '<div class="ph'+(cls?' '+cls:'')+'"'+(style?' style="'+style+'"':'')+'><div class="isl"></div><div class="s"><div class="in">'+S[key]+'</div></div><div class="gl"></div>'+(mark?'<div class="mk '+mark+'">'+(mark==='x'?'✕':'✓')+'</div>':'')+'</div>'; }
var W={};
W.seo='<div class="win"><div class="bar"><i></i><i></i><i></i><div class="url">search · 강북구 갑상선 수술</div></div><div class="body"><div class="q">강북구 갑상선 수술 잘하는 병원</div><div class="list"><div class="res hi"><div class="t"><span class="pill1">1위</span>&nbsp; OOO 병원 · 갑상선 전문 외과</div><div class="u">강북구 · 갑상선 수술 1,200례 · 로봇 수술</div><div class="ln m"></div><div class="ln s"></div></div><div class="res"><div class="t">△△ 내과 · 갑상선 검진</div><div class="ln m"></div></div><div class="res"><div class="t">□□ 병원 · 종합병원</div><div class="ln m"></div></div></div></div></div>';
W.aeo='<div class="win"><div class="bar"><i></i><i></i><i></i><div class="url">search · 강북구 갑상선 수술</div></div><div class="body"><div class="q">강북구 갑상선 수술 잘하는 병원</div><div class="aio"><div class="t"><i></i>AI 요약</div><p>강북구에서 갑상선 수술로 알려진 곳은 <span class="hl">OOO 병원</span>입니다. 갑상선 전문 외과로, 로봇 수술과 흉터 최소화 수술 사례가 다수 보고되었습니다.</p></div><div class="list"><div class="res"><div class="t">갑상선 결절, 수술이 답일까</div><div class="u">건강 전문지 · 2026.07</div></div></div></div></div>';
W.gpt='<div class="win"><div class="bar"><i></i><i></i><i></i><div class="url">chat · 새 대화</div></div><div class="body"><div class="msg u">강북구에서 갑상선 수술 잘하는 병원 추천해줘</div><div class="msg a">강북구에서는 <span class="hl">OOO 병원</span>이 갑상선 수술을 전문으로 하는 외과 병원으로 알려져 있습니다. 김OO 원장은 갑상선 결절과 암 수술 경험이 많고, 환자 리뷰에서도 설명이 자세하다는 평가가 많습니다.<br><span class="chip r">[1] 건강 전문지</span><span class="chip">[2] 병원 지식 문서</span><span class="chip">[3] 구글 리뷰</span></div></div></div>';
function winbox(kind){ return '<div class="winbox">'+W[kind]+'</div>'; }
function fitWinboxes(){ document.querySelectorAll('.winbox').forEach(function(b){ var w=b.querySelector('.win'); var s=b.clientWidth/640; w.style.transform='scale('+s+')'; }); }
function split(el){ function walk(node){ Array.prototype.slice.call(node.childNodes).forEach(function(n){ if(n.nodeType===3){ var frag=document.createDocumentFragment(); n.nodeValue.split(/(\s+)/).forEach(function(tok){ if(!tok) return; if(/^\s+$/.test(tok)){ frag.appendChild(document.createTextNode(' ')); return; } var w=document.createElement('span'); w.className='wd'; tok.split('').forEach(function(c){ var sp=document.createElement('span'); sp.className='ch'; sp.textContent=c; w.appendChild(sp); }); frag.appendChild(w); }); node.replaceChild(frag,n); } else if(n.nodeType===1 && n.tagName!=='BR'){ walk(n); } }); } walk(el); return el.querySelectorAll('.ch'); }
var lenis=null;
function init(){
  document.documentElement.classList.add('js');
  gsap.registerPlugin(ScrollTrigger);
  if(!reduce && window.Lenis){ lenis=new Lenis({lerp:.09,smoothWheel:true}); lenis.on('scroll',ScrollTrigger.update); gsap.ticker.add(function(t){lenis.raf(t*1000);}); gsap.ticker.lagSmoothing(0); }
  document.querySelectorAll('a[href^="#"]').forEach(function(a){ a.addEventListener('click',function(e){ var id=a.getAttribute('href'); if(id.length<2) return; var t=document.querySelector(id); if(!t) return; e.preventDefault(); if(lenis) lenis.scrollTo(t,{offset:-40}); else t.scrollIntoView({behavior:'smooth'}); }); });
  fitWinboxes(); addEventListener('resize',fitWinboxes);
  floatBtns();
  if(reduce){ document.querySelectorAll('[data-split]').forEach(split); return; }
  document.querySelectorAll('[data-split]').forEach(function(el){ var chs=split(el); gsap.to(chs,{opacity:1,y:0,duration:.8,stagger:.022,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 85%',once:true}}); });
  document.querySelectorAll('[data-reveal]').forEach(function(el){ gsap.to(el,{opacity:1,y:0,duration:.9,ease:'power3.out',delay:+(el.dataset.delay||0),scrollTrigger:{trigger:el,start:'top 88%',once:true}}); });
  document.querySelectorAll('[data-stagger]').forEach(function(g){ var kids=g.children; gsap.from(kids,{opacity:0,y:24,duration:.8,stagger:.12,ease:'power3.out',scrollTrigger:{trigger:g,start:'top 82%',once:true}}); });
  document.querySelectorAll('.cnt').forEach(function(el){ var to=+el.dataset.to, suf=el.dataset.suf||'', dec=+(el.dataset.dec||0); var o={v:0}; gsap.to(o,{v:to,duration:1.8,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 85%',once:true},onUpdate:function(){ el.textContent=o.v.toFixed(dec)+suf; }}); });
  form();
}
function type(el,text,opts){ opts=opts||{}; var i=0, done=false;
  function render(){ var s=text.slice(0,i); s=s.replace(/OOO 병원|OOO 원장|김OO 원장/g,'<span class="hl2">$&</span>'); var k=s.indexOf('출처'); if(k>=0) s=s.slice(0,k)+'<span class="src">'+s.slice(k)+'</span>'; el.innerHTML=s+(i<text.length?'<span class="cur">|</span>':''); }
  function step(){ if(i<=text.length){ render(); i++; setTimeout(step,reduce?0:22);} }
  if(reduce){ i=text.length; render(); return; }
  ScrollTrigger.create({trigger:opts.trigger||el,start:'top 80%',once:true,onEnter:function(){ if(!done){done=true;step();} }});
}
function form(){ var f=document.getElementById('dform'); if(!f) return;
  f.addEventListener('submit',function(e){ e.preventDefault(); var d=new FormData(f); var body=['병원명: '+d.get('name'),'지역: '+d.get('area'),'진료과: '+d.get('dept'),'연락처: '+d.get('contact'),'','무료 AI 추천 진단을 신청합니다.'].join('\n');
    location.href='mailto:'+CONFIG.email+'?subject='+encodeURIComponent('[무료 AI 추천 진단] '+d.get('name'))+'&body='+encodeURIComponent(body);
    var n=f.querySelector('.note'); if(n) n.textContent='메일 앱이 열립니다. 전송하시면 하루 안에 리포트를 보내드립니다.'; });
}
function floatBtns(){ if(document.querySelector('.fbtns')) return;
  var diag=document.getElementById('diag');
  var wrap=document.createElement('div'); wrap.className='fbtns';
  wrap.innerHTML='<a class="fb fb-cta" href="#diag">무료 AI 추천 진단</a><button class="fb fb-top" aria-label="맨 위로">\u2191</button>';
  document.body.appendChild(wrap);
  wrap.querySelector('.fb-cta').addEventListener('click',function(e){ if(diag){ e.preventDefault(); if(lenis) lenis.scrollTo(diag,{offset:-40}); else diag.scrollIntoView({behavior:'smooth'}); } });
  wrap.querySelector('.fb-top').addEventListener('click',function(){ if(lenis) lenis.scrollTo(0); else scrollTo({top:0,behavior:'smooth'}); });
  function upd(){ wrap.classList.toggle('show',(pageYOffset||document.documentElement.scrollTop)>700); } upd(); addEventListener('scroll',upd,{passive:true});
}
/* ---------- orb ---------- */
var FS=[
'precision highp float;uniform vec2 res;uniform float t;uniform vec2 mouse;uniform float lit;uniform float rip;uniform vec2 off;uniform float rad;uniform float alpha;',
'float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}',
'float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}',
'float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*noise(p);p*=2.03;a*=.5;}return v;}',
'float hexd(vec2 p){p=abs(p);return max(dot(p,normalize(vec2(1.,1.732))),p.x);}',
'void main(){vec2 uv=(gl_FragCoord.xy-.5*res)/res.y; vec2 m=(mouse-.5)*vec2(res.x/res.y,1.); vec2 q=uv-off; q+=m*0.05;',
' float r=rad; float d=hexd(q)-r; float inside=1.-smoothstep(-0.0025,0.0025,d);',
' vec2 p=q/r*.29; float n=fbm(p*2.2+vec2(t*.05,-t*.03));',
' vec3 coral=vec3(.74,.20,.22), rose=vec3(.62,.13,.38), violet=vec3(.38,.13,.66), indigo=vec3(.15,.18,.60), teal=vec3(.08,.56,.58);',
' float ax=(p.x+p.y*.4)/.29; float ay=(p.y-p.x*.3)/.29;',
' float g=clamp(.40+ax*.32+n*.55,0.,1.);',
' vec3 col=mix(coral,rose,smoothstep(0.,.35,g)); col=mix(col,violet,smoothstep(.3,.62,g)); col=mix(col,indigo,smoothstep(.6,.85,g)); col=mix(col,teal,smoothstep(.55,1.15,ax*.55-ay*.75));',
' float core=exp(-dot(p-vec2(.01,.01),p-vec2(.01,.01))*26.); col*=1.-core*.7;',
' col*=.80+.26*fbm(p*5.+t*.04);',
' float a=atan(q.y,q.x); float sec=floor(mod((a+3.14159)/1.0472,6.)); float secf=mod((a+3.14159)/1.0472,1.);',
' float on=smoothstep(0.,1.,lit-sec+0.35*(1.-abs(secf-.5)*2.)*step(0.001,lit-sec)); if(lit>=5.999) on=1.;',
' vec3 dark=vec3(.075,.06,.10)*(0.8+0.4*fbm(p*4.)); vec3 body=mix(dark,col,on);',
' float sp=abs(fract((a+3.14159)/1.0472+.5)-.5)*1.0472*length(q); float spoke=smoothstep(.006*r/.29,0.,sp)*smoothstep(.02,.1,length(q)); body+=vec3(1.)*spoke*(.03+.05*(1.-min(lit,6.)/6.));',
' float rim=exp(-abs(d)*170.*.29/r); body+=body*rim*.6+vec3(.3,.4,.55)*rim*.15*(.3+.7*on);',
' vec3 bg=vec3(.043,.031,.063)+vec3(.05,.02,.06)*exp(-length(uv-off)*1.8);',
' float glow=exp(-max(d,0.)*7.5*.29/r)*(0.15+0.85*min(lit,6.)/6.); vec3 gc=mix(coral,violet,clamp(.5+ax*.5,0.,1.)); gc=mix(gc,teal,smoothstep(.2,.9,ax-ay*.5));',
' vec3 c=mix(bg+gc*glow*.30,body,inside);',
' if(rip>0.){for(int k=0;k<3;k++){float rr=r*(1.25+float(k)*.30)+rip*r*1.4; float ring=smoothstep(.007,0.,abs(hexd(q)-rr)); c+=vec3(1.,.5,.35)*ring*(.55-rip*.45)/(1.+float(k)*.7);}}',
' c=mix(bg,c,alpha); c+=(hash(gl_FragCoord.xy+fract(t))-.5)*.03; gl_FragColor=vec4(c,1.);}'].join('\n');
function orb(cv,opts){ opts=opts||{}; var gl=cv.getContext('webgl',{antialias:false}); if(!gl) return null;
  function sh(t,s){var o=gl.createShader(t);gl.shaderSource(o,s);gl.compileShader(o);return o;}
  var pr=gl.createProgram(); gl.attachShader(pr,sh(gl.VERTEX_SHADER,'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}')); gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,FS)); gl.linkProgram(pr); gl.useProgram(pr);
  var buf=gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER,buf); gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW); var lp=gl.getAttribLocation(pr,'p'); gl.enableVertexAttribArray(lp); gl.vertexAttribPointer(lp,2,gl.FLOAT,false,0,0);
  var U={}; ['res','t','mouse','lit','rip','off','rad','alpha'].forEach(function(k){U[k]=gl.getUniformLocation(pr,k);});
  var st={lit:opts.lit!=null?opts.lit:6,rip:0,x:opts.x||0,y:opts.y||0,r:opts.r||.29,alpha:1,mx:.5,my:.5,paused:false};
  var dpr=Math.min(devicePixelRatio||1,opts.maxDpr||1.5);
  function size(){ var w=cv.clientWidth||innerWidth, h=cv.clientHeight||innerHeight; var sc=dpr, cap=opts.maxPx||0; if(cap){ var m=Math.max(w,h)*dpr; if(m>cap) sc=dpr*cap/m; } cv.width=Math.round(w*sc); cv.height=Math.round(h*sc); gl.viewport(0,0,cv.width,cv.height); } size(); addEventListener('resize',size);
  if(opts.mouse!==false){ addEventListener('pointermove',function(e){ st.mx=e.clientX/innerWidth; st.my=1-e.clientY/innerHeight; }); }
  var t0=performance.now(), vis=true;
  if('IntersectionObserver' in window){ new IntersectionObserver(function(en){vis=en[0].isIntersecting;}).observe(cv); }
  var _last=0, _min=opts.fps?1000/opts.fps:0;
  (function loop(now){ requestAnimationFrame(loop); if(!(vis&&!document.hidden)||st.paused) return; if(_min&&now&&now-_last<_min) return; _last=now||0; gl.uniform2f(U.res,cv.width,cv.height); gl.uniform1f(U.t,reduce?0:(performance.now()-t0)/1000); gl.uniform2f(U.mouse,st.mx,st.my); gl.uniform1f(U.lit,st.lit); gl.uniform1f(U.rip,st.rip); gl.uniform2f(U.off,st.x,st.y); gl.uniform1f(U.rad,st.r); gl.uniform1f(U.alpha,st.alpha); gl.drawArrays(gl.TRIANGLE_STRIP,0,4); })();
  return st;
}
return {S:S,W:W,STEPS:STEPS,phone:phone,winbox:winbox,split:split,init:init,type:type,orb:orb,reduce:reduce,CONFIG:CONFIG,lenis:function(){return lenis;}};
})();
