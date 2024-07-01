import{r as C,bm as lt,e as N,f as a,H as f,I as s,g as Me,bn as st,bo as dt,d as Ae,h as Pe,k as ve,i as Ee,l as p,t as Ne,j as Ue,a4 as De,bp as ct,n as Ve,p as ut,q as $e,s as d,V as ht,v as ft,bq as vt,x as bt,T as gt,br as mt,bs as he,bt as fe,aq as Se,F as oe,bu as Fe,G as _e,bv as ze,bw as j,bx as wt,by as pt,bz as xt,bA as K,bB as Ce,bC as I}from"./index-3af22ecb.js";function Ie(t){return window.TouchEvent&&t instanceof window.TouchEvent}function He(){const t=C(new Map),l=V=>x=>{t.value.set(V,x)};return lt(()=>t.value.clear()),[t,l]}const yt=N([a("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[f("reverse",[a("slider-handles",[a("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),a("slider-dots",[a("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),f("vertical",[a("slider-handles",[a("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),a("slider-marks",[a("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),a("slider-dots",[a("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),f("vertical",`
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[a("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[a("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),a("slider-rail",`
 height: 100%;
 `,[s("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),f("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),a("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[a("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),a("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[a("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),f("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[a("slider-handle",`
 cursor: not-allowed;
 `)]),f("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),N("&:hover",[a("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[s("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),a("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),f("active",[a("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[s("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),a("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),a("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[a("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),a("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[s("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),a("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[a("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[a("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[N("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),N("&:focus",[a("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[N("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),a("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[f("transition-disabled",[a("slider-dot","transition: none;")]),a("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[f("active","border: var(--n-dot-border-active);")])])]),a("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[Me()]),a("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[f("top",`
 margin-bottom: 12px;
 `),f("right",`
 margin-left: 12px;
 `),f("bottom",`
 margin-top: 12px;
 `),f("left",`
 margin-right: 12px;
 `),Me()]),st(a("slider",[a("slider-dot","background-color: var(--n-dot-color-modal);")])),dt(a("slider",[a("slider-dot","background-color: var(--n-dot-color-popover);")]))]),kt=0,Rt=Object.assign(Object.assign({},ve.props),{to:$e.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),Vt=Ae({name:"Slider",props:Rt,setup(t){const{mergedClsPrefixRef:l,namespaceRef:V,inlineThemeDisabled:x}=Pe(t),u=ve("Slider","-slider",yt,mt,t,l),v=C(null),[R,$]=He(),[O,D]=He(),U=C(new Set),F=Ee(t),{mergedDisabledRef:h}=F,T=p(()=>{const{step:e}=t;if(e<=0||e==="mark")return 0;const n=e.toString();let o=0;return n.includes(".")&&(o=n.length-n.indexOf(".")-1),o}),S=C(t.defaultValue),be=Ne(t,"value"),G=Ue(be,S),y=p(()=>{const{value:e}=G;return(t.range?e:[e]).map(A)}),ae=p(()=>y.value.length>2),ge=p(()=>t.placement===void 0?t.vertical?"right":"top":t.placement),ie=p(()=>{const{marks:e}=t;return e?Object.keys(e).map(parseFloat):null}),k=C(-1),J=C(-1),w=C(-1),r=C(!1),_=C(!1),H=p(()=>{const{vertical:e,reverse:n}=t;return e?n?"top":"bottom":n?"right":"left"}),W=p(()=>{if(ae.value)return;const e=y.value,n=L(t.range?Math.min(...e):t.min),o=L(t.range?Math.max(...e):e[0]),{value:i}=H;return t.vertical?{[i]:`${n}%`,height:`${o-n}%`}:{[i]:`${n}%`,width:`${o-n}%`}}),Q=p(()=>{const e=[],{marks:n}=t;if(n){const o=y.value.slice();o.sort((g,m)=>g-m);const{value:i}=H,{value:c}=ae,{range:b}=t,M=c?()=>!1:g=>b?g>=o[0]&&g<=o[o.length-1]:g<=o[0];for(const g of Object.keys(n)){const m=Number(g);e.push({active:M(m),label:n[g],style:{[i]:`${L(m)}%`}})}}return e});function Z(e,n){const o=L(e),{value:i}=H;return{[i]:`${o}%`,zIndex:n===k.value?1:0}}function re(e){return t.showTooltip||w.value===e||k.value===e&&r.value}function me(e){return r.value?!(k.value===e&&J.value===e):!0}function we(e){var n;~e&&(k.value=e,(n=R.value.get(e))===null||n===void 0||n.focus())}function pe(){O.value.forEach((e,n)=>{re(n)&&e.syncPosition()})}function B(e){const{"onUpdate:value":n,onUpdateValue:o}=t,{nTriggerFormInput:i,nTriggerFormChange:c}=F;o&&oe(o,e),n&&oe(n,e),S.value=e,i(),c()}function le(e){const{range:n}=t;if(n){if(Array.isArray(e)){const{value:o}=y;e.join()!==o.join()&&B(e)}}else Array.isArray(e)||y.value[0]!==e&&B(e)}function ee(e,n){if(t.range){const o=y.value.slice();o.splice(n,1,e),le(o)}else le(e)}function z(e,n,o){const i=o!==void 0;o||(o=e-n>0?1:-1);const c=ie.value||[],{step:b}=t;if(b==="mark"){const m=P(e,c.concat(n),i?o:void 0);return m?m.value:n}if(b<=0)return n;const{value:M}=T;let g;if(i){const m=Number((n/b).toFixed(M)),E=Math.floor(m),ke=m>E?E:E-1,Re=m<E?E:E+1;g=P(n,[Number((ke*b).toFixed(M)),Number((Re*b).toFixed(M)),...c],o)}else{const m=ye(e);g=P(e,[...c,m])}return g?A(g.value):n}function A(e){return Math.min(t.max,Math.max(t.min,e))}function L(e){const{max:n,min:o}=t;return(e-o)/(n-o)*100}function xe(e){const{max:n,min:o}=t;return o+(n-o)*e}function ye(e){const{step:n,min:o}=t;if(n<=0||n==="mark")return e;const i=Math.round((e-o)/n)*n+o;return Number(i.toFixed(T.value))}function P(e,n=ie.value,o){if(!(n!=null&&n.length))return null;let i=null,c=-1;for(;++c<n.length;){const b=n[c]-e,M=Math.abs(b);(o===void 0||b*o>0)&&(i===null||M<i.distance)&&(i={index:c,distance:M,value:n[c]})}return i}function X(e){const n=v.value;if(!n)return;const o=Ie(e)?e.touches[0]:e,i=n.getBoundingClientRect();let c;return t.vertical?c=(i.bottom-o.clientY)/i.height:c=(o.clientX-i.left)/i.width,t.reverse&&(c=1-c),xe(c)}function te(e){if(h.value||!t.keyboard)return;const{vertical:n,reverse:o}=t;switch(e.key){case"ArrowUp":e.preventDefault(),se(n&&o?-1:1);break;case"ArrowRight":e.preventDefault(),se(!n&&o?-1:1);break;case"ArrowDown":e.preventDefault(),se(n&&o?1:-1);break;case"ArrowLeft":e.preventDefault(),se(!n&&o?1:-1);break}}function se(e){const n=k.value;if(n===-1)return;const{step:o}=t,i=y.value[n],c=o<=0||o==="mark"?i:i+o*e;ee(z(c,i,e>0?1:-1),n)}function je(e){var n,o;if(h.value||!Ie(e)&&e.button!==kt)return;const i=X(e);if(i===void 0)return;const c=y.value.slice(),b=t.range?(o=(n=P(i,c))===null||n===void 0?void 0:n.index)!==null&&o!==void 0?o:-1:0;b!==-1&&(e.preventDefault(),we(b),Ke(),ee(z(i,y.value[b]),b))}function Ke(){r.value||(r.value=!0,he("touchend",document,ue),he("mouseup",document,ue),he("touchmove",document,ce),he("mousemove",document,ce))}function de(){r.value&&(r.value=!1,fe("touchend",document,ue),fe("mouseup",document,ue),fe("touchmove",document,ce),fe("mousemove",document,ce))}function ce(e){const{value:n}=k;if(!r.value||n===-1){de();return}const o=X(e);ee(z(o,y.value[n]),n)}function ue(){de()}function Oe(e){k.value=e,h.value||(w.value=e)}function We(e){k.value===e&&(k.value=-1,de()),w.value===e&&(w.value=-1)}function Le(e){w.value=e}function Xe(e){w.value===e&&(w.value=-1)}De(k,(e,n)=>void Se(()=>J.value=n)),De(G,()=>{if(t.marks){if(_.value)return;_.value=!0,Se(()=>{_.value=!1})}Se(pe)}),ct(()=>{de()});const Te=p(()=>{const{self:{markFontSize:e,railColor:n,railColorHover:o,fillColor:i,fillColorHover:c,handleColor:b,opacityDisabled:M,dotColor:g,dotColorModal:m,handleBoxShadow:E,handleBoxShadowHover:ke,handleBoxShadowActive:Re,handleBoxShadowFocus:Ye,dotBorder:qe,dotBoxShadow:Ge,railHeight:Je,railWidthVertical:Qe,handleSize:Ze,dotHeight:et,dotWidth:tt,dotBorderRadius:nt,fontSize:ot,dotBorderActive:at,dotColorPopover:it},common:{cubicBezierEaseInOut:rt}}=u.value;return{"--n-bezier":rt,"--n-dot-border":qe,"--n-dot-border-active":at,"--n-dot-border-radius":nt,"--n-dot-box-shadow":Ge,"--n-dot-color":g,"--n-dot-color-modal":m,"--n-dot-color-popover":it,"--n-dot-height":et,"--n-dot-width":tt,"--n-fill-color":i,"--n-fill-color-hover":c,"--n-font-size":ot,"--n-handle-box-shadow":E,"--n-handle-box-shadow-active":Re,"--n-handle-box-shadow-focus":Ye,"--n-handle-box-shadow-hover":ke,"--n-handle-color":b,"--n-handle-size":Ze,"--n-opacity-disabled":M,"--n-rail-color":n,"--n-rail-color-hover":o,"--n-rail-height":Je,"--n-rail-width-vertical":Qe,"--n-mark-font-size":e}}),Y=x?Ve("slider",void 0,Te,t):void 0,Be=p(()=>{const{self:{fontSize:e,indicatorColor:n,indicatorBoxShadow:o,indicatorTextColor:i,indicatorBorderRadius:c}}=u.value;return{"--n-font-size":e,"--n-indicator-border-radius":c,"--n-indicator-box-shadow":o,"--n-indicator-color":n,"--n-indicator-text-color":i}}),q=x?Ve("slider-indicator",void 0,Be,t):void 0;return{mergedClsPrefix:l,namespace:V,uncontrolledValue:S,mergedValue:G,mergedDisabled:h,mergedPlacement:ge,isMounted:ut(),adjustedTo:$e(t),dotTransitionDisabled:_,markInfos:Q,isShowTooltip:re,shouldKeepTooltipTransition:me,handleRailRef:v,setHandleRefs:$,setFollowerRefs:D,fillStyle:W,getHandleStyle:Z,activeIndex:k,arrifiedValues:y,followerEnabledIndexSet:U,handleRailMouseDown:je,handleHandleFocus:Oe,handleHandleBlur:We,handleHandleMouseEnter:Le,handleHandleMouseLeave:Xe,handleRailKeyDown:te,indicatorCssVars:x?void 0:Be,indicatorThemeClass:q==null?void 0:q.themeClass,indicatorOnRender:q==null?void 0:q.onRender,cssVars:x?void 0:Te,themeClass:Y==null?void 0:Y.themeClass,onRender:Y==null?void 0:Y.onRender}},render(){var t;const{mergedClsPrefix:l,themeClass:V,formatTooltip:x}=this;return(t=this.onRender)===null||t===void 0||t.call(this),d("div",{class:[`${l}-slider`,V,{[`${l}-slider--disabled`]:this.mergedDisabled,[`${l}-slider--active`]:this.activeIndex!==-1,[`${l}-slider--with-mark`]:this.marks,[`${l}-slider--vertical`]:this.vertical,[`${l}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},d("div",{class:`${l}-slider-rail`},d("div",{class:`${l}-slider-rail__fill`,style:this.fillStyle}),this.marks?d("div",{class:[`${l}-slider-dots`,this.dotTransitionDisabled&&`${l}-slider-dots--transition-disabled`]},this.markInfos.map(u=>d("div",{key:u.label,class:[`${l}-slider-dot`,{[`${l}-slider-dot--active`]:u.active}],style:u.style}))):null,d("div",{ref:"handleRailRef",class:`${l}-slider-handles`},this.arrifiedValues.map((u,v)=>{const R=this.isShowTooltip(v);return d(ht,null,{default:()=>[d(ft,null,{default:()=>d("div",{ref:this.setHandleRefs(v),class:`${l}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,style:this.getHandleStyle(u,v),onFocus:()=>this.handleHandleFocus(v),onBlur:()=>this.handleHandleBlur(v),onMouseenter:()=>this.handleHandleMouseEnter(v),onMouseleave:()=>this.handleHandleMouseLeave(v)},vt(this.$slots.thumb,()=>[d("div",{class:`${l}-slider-handle`})]))}),this.tooltip&&d(bt,{ref:this.setFollowerRefs(v),show:R,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(v),teleportDisabled:this.adjustedTo===$e.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>d(gt,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(v),onEnter:()=>{this.followerEnabledIndexSet.add(v)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(v)}},{default:()=>{var $;return R?(($=this.indicatorOnRender)===null||$===void 0||$.call(this),d("div",{class:[`${l}-slider-handle-indicator`,this.indicatorThemeClass,`${l}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof x=="function"?x(u):u)):null}})})]})})),this.marks?d("div",{class:`${l}-slider-marks`},this.markInfos.map(u=>d("div",{key:u.label,class:`${l}-slider-mark`,style:u.style},u.label))):null))}}),St=a("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[s("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),s("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),s("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),a("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[Fe({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),s("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),s("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),s("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),N("&:focus",[s("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),f("round",[s("rail","border-radius: calc(var(--n-rail-height) / 2);",[s("button","border-radius: calc(var(--n-button-height) / 2);")])]),_e("disabled",[_e("icon",[f("rubber-band",[f("pressed",[s("rail",[s("button","max-width: var(--n-button-width-pressed);")])]),s("rail",[N("&:active",[s("button","max-width: var(--n-button-width-pressed);")])]),f("active",[f("pressed",[s("rail",[s("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),s("rail",[N("&:active",[s("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),f("active",[s("rail",[s("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),s("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[s("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[Fe()]),s("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),f("active",[s("rail","background-color: var(--n-rail-color-active);")]),f("loading",[s("rail",`
 cursor: wait;
 `)]),f("disabled",[s("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),zt=Object.assign(Object.assign({},ve.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let ne;const $t=Ae({name:"Switch",props:zt,setup(t){ne===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?ne=CSS.supports("width","max(1px)"):ne=!1:ne=!0);const{mergedClsPrefixRef:l,inlineThemeDisabled:V}=Pe(t),x=ve("Switch","-switch",St,xt,t,l),u=Ee(t),{mergedSizeRef:v,mergedDisabledRef:R}=u,$=C(t.defaultValue),O=Ne(t,"value"),D=Ue(O,$),U=p(()=>D.value===t.checkedValue),F=C(!1),h=C(!1),T=p(()=>{const{railStyle:r}=t;if(r)return r({focused:h.value,checked:U.value})});function S(r){const{"onUpdate:value":_,onChange:H,onUpdateValue:W}=t,{nTriggerFormInput:Q,nTriggerFormChange:Z}=u;_&&oe(_,r),W&&oe(W,r),H&&oe(H,r),$.value=r,Q(),Z()}function be(){const{nTriggerFormFocus:r}=u;r()}function G(){const{nTriggerFormBlur:r}=u;r()}function y(){t.loading||R.value||(D.value!==t.checkedValue?S(t.checkedValue):S(t.uncheckedValue))}function ae(){h.value=!0,be()}function ge(){h.value=!1,G(),F.value=!1}function ie(r){t.loading||R.value||r.key===" "&&(D.value!==t.checkedValue?S(t.checkedValue):S(t.uncheckedValue),F.value=!1)}function k(r){t.loading||R.value||r.key===" "&&(r.preventDefault(),F.value=!0)}const J=p(()=>{const{value:r}=v,{self:{opacityDisabled:_,railColor:H,railColorActive:W,buttonBoxShadow:Q,buttonColor:Z,boxShadowFocus:re,loadingColor:me,textColor:we,iconColor:pe,[K("buttonHeight",r)]:B,[K("buttonWidth",r)]:le,[K("buttonWidthPressed",r)]:ee,[K("railHeight",r)]:z,[K("railWidth",r)]:A,[K("railBorderRadius",r)]:L,[K("buttonBorderRadius",r)]:xe},common:{cubicBezierEaseInOut:ye}}=x.value;let P,X,te;return ne?(P=`calc((${z} - ${B}) / 2)`,X=`max(${z}, ${B})`,te=`max(${A}, calc(${A} + ${B} - ${z}))`):(P=Ce((I(z)-I(B))/2),X=Ce(Math.max(I(z),I(B))),te=I(z)>I(B)?A:Ce(I(A)+I(B)-I(z))),{"--n-bezier":ye,"--n-button-border-radius":xe,"--n-button-box-shadow":Q,"--n-button-color":Z,"--n-button-width":le,"--n-button-width-pressed":ee,"--n-button-height":B,"--n-height":X,"--n-offset":P,"--n-opacity-disabled":_,"--n-rail-border-radius":L,"--n-rail-color":H,"--n-rail-color-active":W,"--n-rail-height":z,"--n-rail-width":A,"--n-width":te,"--n-box-shadow-focus":re,"--n-loading-color":me,"--n-text-color":we,"--n-icon-color":pe}}),w=V?Ve("switch",p(()=>v.value[0]),J,t):void 0;return{handleClick:y,handleBlur:ge,handleFocus:ae,handleKeyup:ie,handleKeydown:k,mergedRailStyle:T,pressed:F,mergedClsPrefix:l,mergedValue:D,checked:U,mergedDisabled:R,cssVars:V?void 0:J,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender}},render(){const{mergedClsPrefix:t,mergedDisabled:l,checked:V,mergedRailStyle:x,onRender:u,$slots:v}=this;u==null||u();const{checked:R,unchecked:$,icon:O,"checked-icon":D,"unchecked-icon":U}=v,F=!(ze(O)&&ze(D)&&ze(U));return d("div",{role:"switch","aria-checked":V,class:[`${t}-switch`,this.themeClass,F&&`${t}-switch--icon`,V&&`${t}-switch--active`,l&&`${t}-switch--disabled`,this.round&&`${t}-switch--round`,this.loading&&`${t}-switch--loading`,this.pressed&&`${t}-switch--pressed`,this.rubberBand&&`${t}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},d("div",{class:`${t}-switch__rail`,"aria-hidden":"true",style:x},j(R,h=>j($,T=>h||T?d("div",{"aria-hidden":!0,class:`${t}-switch__children-placeholder`},d("div",{class:`${t}-switch__rail-placeholder`},d("div",{class:`${t}-switch__button-placeholder`}),h),d("div",{class:`${t}-switch__rail-placeholder`},d("div",{class:`${t}-switch__button-placeholder`}),T)):null)),d("div",{class:`${t}-switch__button`},j(O,h=>j(D,T=>j(U,S=>d(wt,null,{default:()=>this.loading?d(pt,{key:"loading",clsPrefix:t,strokeWidth:20}):this.checked&&(T||h)?d("div",{class:`${t}-switch__button-icon`,key:T?"checked-icon":"icon"},T||h):!this.checked&&(S||h)?d("div",{class:`${t}-switch__button-icon`,key:S?"unchecked-icon":"icon"},S||h):null})))),j(R,h=>h&&d("div",{key:"checked",class:`${t}-switch__checked`},h)),j($,h=>h&&d("div",{key:"unchecked",class:`${t}-switch__unchecked`},h)))))}});export{$t as N,Vt as a};
