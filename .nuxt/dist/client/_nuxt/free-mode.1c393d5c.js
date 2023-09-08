import{d as N,g as U,f as F,h as W,b as V,i as R}from"./swiper-vue.f69c632b.js";function q(A){let{swiper:e,extendParams:B,on:m,emit:y}=A;const d=N(),M=U();e.keyboard={enabled:!1},B({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function x(t){if(!e.enabled)return;const{rtlTranslate:c}=e;let i=t;i.originalEvent&&(i=i.originalEvent);const s=i.keyCode||i.charCode,u=e.params.keyboard.pageUpDown,b=u&&s===33,g=u&&s===34,o=s===37,D=s===39,a=s===38,S=s===40;if(!e.allowSlideNext&&(e.isHorizontal()&&D||e.isVertical()&&S||g)||!e.allowSlidePrev&&(e.isHorizontal()&&o||e.isVertical()&&a||b))return!1;if(!(i.shiftKey||i.altKey||i.ctrlKey||i.metaKey)&&!(d.activeElement&&d.activeElement.nodeName&&(d.activeElement.nodeName.toLowerCase()==="input"||d.activeElement.nodeName.toLowerCase()==="textarea"))){if(e.params.keyboard.onlyInViewport&&(b||g||o||D||a||S)){let T=!1;if(F(e.el,`.${e.params.slideClass}, swiper-slide`).length>0&&F(e.el,`.${e.params.slideActiveClass}`).length===0)return;const h=e.el,E=h.clientWidth,r=h.clientHeight,l=M.innerWidth,k=M.innerHeight,p=W(h);c&&(p.left-=h.scrollLeft);const C=[[p.left,p.top],[p.left+E,p.top],[p.left,p.top+r],[p.left+E,p.top+r]];for(let O=0;O<C.length;O+=1){const P=C[O];if(P[0]>=0&&P[0]<=l&&P[1]>=0&&P[1]<=k){if(P[0]===0&&P[1]===0)continue;T=!0}}if(!T)return}e.isHorizontal()?((b||g||o||D)&&(i.preventDefault?i.preventDefault():i.returnValue=!1),((g||D)&&!c||(b||o)&&c)&&e.slideNext(),((b||o)&&!c||(g||D)&&c)&&e.slidePrev()):((b||g||a||S)&&(i.preventDefault?i.preventDefault():i.returnValue=!1),(g||S)&&e.slideNext(),(b||a)&&e.slidePrev()),y("keyPress",s)}}function f(){e.keyboard.enabled||(d.addEventListener("keydown",x),e.keyboard.enabled=!0)}function v(){e.keyboard.enabled&&(d.removeEventListener("keydown",x),e.keyboard.enabled=!1)}m("init",()=>{e.params.keyboard.enabled&&f()}),m("destroy",()=>{e.keyboard.enabled&&v()}),Object.assign(e.keyboard,{enable:f,disable:v})}function _(A){let{swiper:e,extendParams:B,on:m,emit:y,params:d}=A;e.autoplay={running:!1,paused:!1,timeLeft:0},B({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let M,x,f=d&&d.autoplay?d.autoplay.delay:3e3,v=d&&d.autoplay?d.autoplay.delay:3e3,t,c=new Date().getTime,i,s,u,b,g,o;function D(n){!e||e.destroyed||!e.wrapperEl||n.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",D),l())}const a=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?i=!0:i&&(v=t,i=!1);const n=e.autoplay.paused?t:c+v-new Date().getTime();e.autoplay.timeLeft=n,y("autoplayTimeLeft",n,n/f),x=requestAnimationFrame(()=>{a()})},S=()=>{let n;return e.virtual&&e.params.virtual.enabled?n=e.slides.filter(w=>w.classList.contains("swiper-slide-active"))[0]:n=e.slides[e.activeIndex],n?parseInt(n.getAttribute("data-swiper-autoplay"),10):void 0},T=n=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(x),a();let L=typeof n>"u"?e.params.autoplay.delay:n;f=e.params.autoplay.delay,v=e.params.autoplay.delay;const w=S();!Number.isNaN(w)&&w>0&&typeof n>"u"&&(L=w,f=w,v=w),t=L;const I=e.params.speed,H=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(I,!0,!0),y("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,I,!0,!0),y("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(I,!0,!0),y("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,I,!0,!0),y("autoplay")),e.params.cssMode&&(c=new Date().getTime(),requestAnimationFrame(()=>{T()})))};return L>0?(clearTimeout(M),M=setTimeout(()=>{H()},L)):requestAnimationFrame(()=>{H()}),L},h=()=>{e.autoplay.running=!0,T(),y("autoplayStart")},E=()=>{e.autoplay.running=!1,clearTimeout(M),cancelAnimationFrame(x),y("autoplayStop")},r=(n,L)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(M),n||(o=!0);const w=()=>{y("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",D):l()};if(e.autoplay.paused=!0,L){g&&(t=e.params.autoplay.delay),g=!1,w();return}t=(t||e.params.autoplay.delay)-(new Date().getTime()-c),!(e.isEnd&&t<0&&!e.params.loop)&&(t<0&&(t=0),w())},l=()=>{e.isEnd&&t<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(c=new Date().getTime(),o?(o=!1,T(t)):T(),e.autoplay.paused=!1,y("autoplayResume"))},k=()=>{if(e.destroyed||!e.autoplay.running)return;const n=N();n.visibilityState==="hidden"&&(o=!0,r(!0)),n.visibilityState==="visible"&&l()},p=n=>{n.pointerType==="mouse"&&(o=!0,!(e.animating||e.autoplay.paused)&&r(!0))},C=n=>{n.pointerType==="mouse"&&e.autoplay.paused&&l()},O=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",p),e.el.addEventListener("pointerleave",C))},P=()=>{e.el.removeEventListener("pointerenter",p),e.el.removeEventListener("pointerleave",C)},z=()=>{N().addEventListener("visibilitychange",k)},K=()=>{N().removeEventListener("visibilitychange",k)};m("init",()=>{e.params.autoplay.enabled&&(O(),z(),c=new Date().getTime(),h())}),m("destroy",()=>{P(),K(),e.autoplay.running&&E()}),m("beforeTransitionStart",(n,L,w)=>{e.destroyed||!e.autoplay.running||(w||!e.params.autoplay.disableOnInteraction?r(!0,!0):E())}),m("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){E();return}s=!0,u=!1,o=!1,b=setTimeout(()=>{o=!0,u=!0,r(!0)},200)}}),m("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!s)){if(clearTimeout(b),clearTimeout(M),e.params.autoplay.disableOnInteraction){u=!1,s=!1;return}u&&e.params.cssMode&&l(),u=!1,s=!1}}),m("slideChange",()=>{e.destroyed||!e.autoplay.running||(g=!0)}),Object.assign(e.autoplay,{start:h,stop:E,pause:r,resume:l})}function G(A){let{swiper:e,extendParams:B,emit:m,once:y}=A;B({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function d(){if(e.params.cssMode)return;const f=e.getTranslate();e.setTranslate(f),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function M(){if(e.params.cssMode)return;const{touchEventsData:f,touches:v}=e;f.velocities.length===0&&f.velocities.push({position:v[e.isHorizontal()?"startX":"startY"],time:f.touchStartTime}),f.velocities.push({position:v[e.isHorizontal()?"currentX":"currentY"],time:V()})}function x(f){let{currentPos:v}=f;if(e.params.cssMode)return;const{params:t,wrapperEl:c,rtlTranslate:i,snapGrid:s,touchEventsData:u}=e,g=V()-u.touchStartTime;if(v<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(v>-e.maxTranslate()){e.slides.length<s.length?e.slideTo(s.length-1):e.slideTo(e.slides.length-1);return}if(t.freeMode.momentum){if(u.velocities.length>1){const r=u.velocities.pop(),l=u.velocities.pop(),k=r.position-l.position,p=r.time-l.time;e.velocity=k/p,e.velocity/=2,Math.abs(e.velocity)<t.freeMode.minimumVelocity&&(e.velocity=0),(p>150||V()-r.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=t.freeMode.momentumVelocityRatio,u.velocities.length=0;let o=1e3*t.freeMode.momentumRatio;const D=e.velocity*o;let a=e.translate+D;i&&(a=-a);let S=!1,T;const h=Math.abs(e.velocity)*20*t.freeMode.momentumBounceRatio;let E;if(a<e.maxTranslate())t.freeMode.momentumBounce?(a+e.maxTranslate()<-h&&(a=e.maxTranslate()-h),T=e.maxTranslate(),S=!0,u.allowMomentumBounce=!0):a=e.maxTranslate(),t.loop&&t.centeredSlides&&(E=!0);else if(a>e.minTranslate())t.freeMode.momentumBounce?(a-e.minTranslate()>h&&(a=e.minTranslate()+h),T=e.minTranslate(),S=!0,u.allowMomentumBounce=!0):a=e.minTranslate(),t.loop&&t.centeredSlides&&(E=!0);else if(t.freeMode.sticky){let r;for(let l=0;l<s.length;l+=1)if(s[l]>-a){r=l;break}Math.abs(s[r]-a)<Math.abs(s[r-1]-a)||e.swipeDirection==="next"?a=s[r]:a=s[r-1],a=-a}if(E&&y("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(i?o=Math.abs((-a-e.translate)/e.velocity):o=Math.abs((a-e.translate)/e.velocity),t.freeMode.sticky){const r=Math.abs((i?-a:a)-e.translate),l=e.slidesSizesGrid[e.activeIndex];r<l?o=t.speed:r<2*l?o=t.speed*1.5:o=t.speed*2.5}}else if(t.freeMode.sticky){e.slideToClosest();return}t.freeMode.momentumBounce&&S?(e.updateProgress(T),e.setTransition(o),e.setTranslate(a),e.transitionStart(!0,e.swipeDirection),e.animating=!0,R(c,()=>{!e||e.destroyed||!u.allowMomentumBounce||(m("momentumBounce"),e.setTransition(t.speed),setTimeout(()=>{e.setTranslate(T),R(c,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(m("_freeModeNoMomentumRelease"),e.updateProgress(a),e.setTransition(o),e.setTranslate(a),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,R(c,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(a),e.updateActiveIndex(),e.updateSlidesClasses()}else if(t.freeMode.sticky){e.slideToClosest();return}else t.freeMode&&m("_freeModeNoMomentumRelease");(!t.freeMode.momentum||g>=t.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:d,onTouchMove:M,onTouchEnd:x}})}export{_ as A,q as K,G as f};
