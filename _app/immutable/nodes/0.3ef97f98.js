import{s as de,r as _e,u as q,f as M,g as C,h as U,d as p,v as V,i as v,w as R,x as Q,y as j,z as W,A as he,B as pe,C as Ee,D as Be,E as te,F as Fe,G as Pe,o as Te,H as Ve,p as ge,a as B,I as Ge,c as F,j as g,J as Ke,K as X,l as je,m as qe,k as Xe,n as ze}from"../chunks/scheduler.8de5dfe6.js";import{S as be,i as Ae,a as z,t as Y,b as Se,d as Ie,m as Oe,e as Me}from"../chunks/index.2f036f68.js";import{p as ne,e as se,c as Ye,g as xe}from"../chunks/classAdderBuilder.47cd2560.js";import{b as He}from"../chunks/paths.6a2fd9d1.js";import{_ as Je,a as ae,M as Qe,c as G,u as ie,g as re,f as We,d as K,p as Ze,r as oe,C as we,b as $e,e as et,n as tt}from"../chunks/radixDappToolkit.d76b9e76.js";const nt=!1,st=!0,St=Object.freeze(Object.defineProperty({__proto__:null,prerender:st,ssr:nt},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var k={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},x={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},N={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var at=N.ARIA_LIVE_DELAY_MS,le=x.ARIA_LIVE_LABEL_TEXT_ATTR;function it(n,e){e===void 0&&(e=n);var t=n.getAttribute("aria-live"),s=e.textContent.trim();if(!(!s||!t)){n.setAttribute("aria-live","off"),e.textContent="";var i=document.createElement("span");i.setAttribute("style","display: inline-block; width: 0; height: 1px;"),i.textContent=" ",e.appendChild(i),e.setAttribute(le,s),setTimeout(function(){n.setAttribute("aria-live",t),e.removeAttribute(le),e.textContent=s},at)}}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ue=k.OPENING,ce=k.OPEN,fe=k.CLOSING,rt=x.REASON_ACTION,Z=x.REASON_DISMISS,ot=function(n){Je(e,n);function e(t){var s=n.call(this,ae(ae({},e.defaultAdapter),t))||this;return s.opened=!1,s.animationFrame=0,s.animationTimer=0,s.autoDismissTimer=0,s.autoDismissTimeoutMs=N.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,s.closeOnEscape=!0,s}return Object.defineProperty(e,"cssClasses",{get:function(){return k},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return x},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return N},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.clearAutoDismissTimer(),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0,this.adapter.removeClass(ue),this.adapter.removeClass(ce),this.adapter.removeClass(fe)},e.prototype.open=function(){var t=this;this.clearAutoDismissTimer(),this.opened=!0,this.adapter.notifyOpening(),this.adapter.removeClass(fe),this.adapter.addClass(ue),this.adapter.announce(),this.runNextAnimationFrame(function(){t.adapter.addClass(ce),t.animationTimer=setTimeout(function(){var s=t.getTimeoutMs();t.handleAnimationTimerEnd(),t.adapter.notifyOpened(),s!==N.INDETERMINATE&&(t.autoDismissTimer=setTimeout(function(){t.close(Z)},s))},N.SNACKBAR_ANIMATION_OPEN_TIME_MS)})},e.prototype.close=function(t){var s=this;t===void 0&&(t=""),this.opened&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.clearAutoDismissTimer(),this.opened=!1,this.adapter.notifyClosing(t),this.adapter.addClass(k.CLOSING),this.adapter.removeClass(k.OPEN),this.adapter.removeClass(k.OPENING),clearTimeout(this.animationTimer),this.animationTimer=setTimeout(function(){s.handleAnimationTimerEnd(),s.adapter.notifyClosed(t)},N.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},e.prototype.isOpen=function(){return this.opened},e.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs},e.prototype.setTimeoutMs=function(t){var s=N.MIN_AUTO_DISMISS_TIMEOUT_MS,i=N.MAX_AUTO_DISMISS_TIMEOUT_MS,l=N.INDETERMINATE;if(t===N.INDETERMINATE||t<=i&&t>=s)this.autoDismissTimeoutMs=t;else throw new Error(`
        timeoutMs must be an integer in the range `+s+"–"+i+`
        (or `+l+" to disable), but got '"+t+"'")},e.prototype.getCloseOnEscape=function(){return this.closeOnEscape},e.prototype.setCloseOnEscape=function(t){this.closeOnEscape=t},e.prototype.handleKeyDown=function(t){var s=t.key==="Escape"||t.keyCode===27;s&&this.getCloseOnEscape()&&this.close(Z)},e.prototype.handleActionButtonClick=function(t){this.close(rt)},e.prototype.handleActionIconClick=function(t){this.close(Z)},e.prototype.clearAutoDismissTimer=function(){clearTimeout(this.autoDismissTimer),this.autoDismissTimer=0},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(k.OPENING),this.adapter.removeClass(k.CLOSING)},e.prototype.runNextAnimationFrame=function(t){var s=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){s.animationFrame=0,clearTimeout(s.animationTimer),s.animationTimer=setTimeout(t,0)})},e}(Qe);function lt(n){let e,t,s,i,l,u,c,E,h;const A=n[25].default,d=_e(A,n,n[24],null);let I=[{class:s=G({[n[4]]:!0,"mdc-snackbar__surface":!0})},{role:"status"},{"aria-relevant":"additions"},ne(n[12],"surface$")],f={};for(let o=0;o<I.length;o+=1)f=q(f,I[o]);let b=[{class:l=G({[n[1]]:!0,"mdc-snackbar":!0,"mdc-snackbar--stacked":n[2]==="stacked","mdc-snackbar--leading":n[3],...n[8]})},se(n[12],["surface$"])],S={};for(let o=0;o<b.length;o+=1)S=q(S,b[o]);return{c(){e=M("aside"),t=M("div"),d&&d.c(),this.h()},l(o){e=C(o,"ASIDE",{class:!0});var _=U(e);t=C(_,"DIV",{class:!0,role:!0,"aria-relevant":!0});var r=U(t);d&&d.l(r),r.forEach(p),_.forEach(p),this.h()},h(){V(t,f),V(e,S)},m(o,_){v(o,e,_),R(e,t),d&&d.m(t,null),n[26](e),c=!0,E||(h=[Q(i=ie.call(null,t,n[5])),j(t,"click",n[10]),Q(u=ie.call(null,e,n[0])),Q(n[9].call(null,e)),j(e,"SMUISnackbar:closed",n[11]),j(e,"keydown",function(){W(n[6]&&n[6].handleKeyDown.bind(n[6]))&&(n[6]&&n[6].handleKeyDown.bind(n[6])).apply(this,arguments)})],E=!0)},p(o,_){n=o,d&&d.p&&(!c||_[0]&16777216)&&he(d,A,n,n[24],c?Ee(A,n[24],_,null):pe(n[24]),null),V(t,f=re(I,[(!c||_[0]&16&&s!==(s=G({[n[4]]:!0,"mdc-snackbar__surface":!0})))&&{class:s},{role:"status"},{"aria-relevant":"additions"},_[0]&4096&&ne(n[12],"surface$")])),i&&W(i.update)&&_[0]&32&&i.update.call(null,n[5]),V(e,S=re(b,[(!c||_[0]&270&&l!==(l=G({[n[1]]:!0,"mdc-snackbar":!0,"mdc-snackbar--stacked":n[2]==="stacked","mdc-snackbar--leading":n[3],...n[8]})))&&{class:l},_[0]&4096&&se(n[12],["surface$"])])),u&&W(u.update)&&_[0]&1&&u.update.call(null,n[0])},i(o){c||(z(d,o),c=!0)},o(o){Y(d,o),c=!1},d(o){o&&p(e),d&&d.d(o),n[26](null),E=!1,Be(h)}}}let me=Promise.resolve();function ut(n,e,t){const s=["use","class","variant","leading","timeoutMs","closeOnEscape","labelText","actionButtonText","surface$class","surface$use","open","forceOpen","close","isOpen","getLabelElement","getActionButtonElement","getElement"];let i=te(e,s),{$$slots:l={},$$scope:u}=e;const{closest:c}=Ze,E=We(Fe());let h=()=>{};function A(a){return a===h}let{use:d=[]}=e,{class:I=""}=e,{variant:f=""}=e,{leading:b=!1}=e,{timeoutMs:S=5e3}=e,{closeOnEscape:o=!0}=e,{labelText:_=h}=e,{actionButtonText:r=h}=e,{surface$class:T=""}=e,{surface$use:O=[]}=e,D,m,y={},H,$=new Promise(a=>H=a);Pe("SMUI:label:context","snackbar"),Te(()=>(t(6,m=new ot({addClass:Ce,announce:()=>it(P()),notifyClosed:a=>K(L(),"SMUISnackbar:closed",a?{reason:a}:{},void 0,!0),notifyClosing:a=>K(L(),"SMUISnackbar:closing",a?{reason:a}:{},void 0,!0),notifyOpened:()=>K(L(),"SMUISnackbar:opened",void 0,void 0,!0),notifyOpening:()=>K(L(),"SMUISnackbar:opening",void 0,void 0,!0),removeClass:ve})),m.init(),()=>{m.destroy()}));function Ce(a){y[a]||t(8,y[a]=!0,y)}function ve(a){(!(a in y)||y[a])&&t(8,y[a]=!1,y)}function Ne(a){const ee=a.target;m&&(c(ee,".mdc-snackbar__action")?m.handleActionButtonClick(a):c(ee,".mdc-snackbar__dismiss")&&m.handleActionIconClick(a))}function ke(){H(),$=new Promise(a=>H=a)}function ye(){me=me.then(()=>(m.open(),$))}function De(){return m.open()}function Le(a){return m.close(a)}function Re(){return m.isOpen()}function P(){var a;return(a=L().querySelector(".mdc-snackbar__label"))!==null&&a!==void 0?a:document.createElement("div")}function J(){var a;return(a=L().querySelector(".mdc-snackbar__action"))!==null&&a!==void 0?a:document.createElement("button")}function L(){return D}function Ue(a){ge[a?"unshift":"push"](()=>{D=a,t(7,D)})}return n.$$set=a=>{e=q(q({},e),Ve(a)),t(12,i=te(e,s)),"use"in a&&t(0,d=a.use),"class"in a&&t(1,I=a.class),"variant"in a&&t(2,f=a.variant),"leading"in a&&t(3,b=a.leading),"timeoutMs"in a&&t(13,S=a.timeoutMs),"closeOnEscape"in a&&t(14,o=a.closeOnEscape),"labelText"in a&&t(15,_=a.labelText),"actionButtonText"in a&&t(16,r=a.actionButtonText),"surface$class"in a&&t(4,T=a.surface$class),"surface$use"in a&&t(5,O=a.surface$use),"$$scope"in a&&t(24,u=a.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&8256&&m&&m.getTimeoutMs()!==S&&m.setTimeoutMs(S),n.$$.dirty[0]&16448&&m&&m.getCloseOnEscape()!==o&&m.setCloseOnEscape(o),n.$$.dirty[0]&32832&&m&&!A(_)&&P().textContent!==_&&(P().textContent=_),n.$$.dirty[0]&65600&&m&&!A(r)&&J().textContent!==r&&(J().textContent=r)},[d,I,f,b,T,O,m,D,y,E,Ne,ke,i,S,o,_,r,ye,De,Le,Re,P,J,L,u,l,Ue]}class ct extends be{constructor(e){super(),Ae(this,e,ut,lt,de,{use:0,class:1,variant:2,leading:3,timeoutMs:13,closeOnEscape:14,labelText:15,actionButtonText:16,surface$class:4,surface$use:5,open:17,forceOpen:18,close:19,isOpen:20,getLabelElement:21,getActionButtonElement:22,getElement:23},null,[-1,-1])}get open(){return this.$$.ctx[17]}get forceOpen(){return this.$$.ctx[18]}get close(){return this.$$.ctx[19]}get isOpen(){return this.$$.ctx[20]}get getLabelElement(){return this.$$.ctx[21]}get getActionButtonElement(){return this.$$.ctx[22]}get getElement(){return this.$$.ctx[23]}}Ye({class:"mdc-snackbar__actions",tag:"div",props:{"aria-atomic":"true"},contexts:{"SMUI:button:context":"snackbar:actions","SMUI:icon-button:context":"snackbar:actions","SMUI:label:context":void 0}});const{document:w}=xe;function ft(n){let e,t,s,i,l;return{c(){e=M("img"),s=B(),i=M("img"),this.h()},l(u){e=C(u,"IMG",{src:!0,alt:!0,class:!0}),s=F(u),i=C(u,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){X(e.src,t="./fullscreen-enter.svg")||g(e,"src",t),g(e,"alt",""),g(e,"class","w-16 h-16 group-hover:hidden"),X(i.src,l="./fullscreen-enter-hover.svg")||g(i,"src",l),g(i,"alt",""),g(i,"class","w-16 h-16 hidden group-hover:block")},m(u,c){v(u,e,c),v(u,s,c),v(u,i,c)},d(u){u&&(p(e),p(s),p(i))}}}function mt(n){let e,t,s,i,l;return{c(){e=M("img"),s=B(),i=M("img"),this.h()},l(u){e=C(u,"IMG",{src:!0,alt:!0,class:!0}),s=F(u),i=C(u,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){X(e.src,t="./fullscreen-exit.svg")||g(e,"src",t),g(e,"alt",""),g(e,"class","w-16 h-16 group-hover:hidden"),X(i.src,l="./fullscreen-exit-hover.svg")||g(i,"src",l),g(i,"alt",""),g(i,"class","w-16 h-16 hidden group-hover:block")},m(u,c){v(u,e,c),v(u,s,c),v(u,i,c)},d(u){u&&(p(e),p(s),p(i))}}}function dt(n){let e,t;return{c(){e=M("span"),t=je(n[3]),this.h()},l(s){e=C(s,"SPAN",{style:!0});var i=U(e);t=qe(i,n[3]),i.forEach(p),this.h()},h(){Xe(e,"font-weight","bold")},m(s,i){v(s,e,i),R(e,t)},p(s,i){i&8&&ze(t,s[3])},d(s){s&&p(e)}}}function _t(n){let e,t;return e=new et({props:{$$slots:{default:[dt]},$$scope:{ctx:n}}}),{c(){Se(e.$$.fragment)},l(s){Ie(e.$$.fragment,s)},m(s,i){Oe(e,s,i),t=!0},p(s,i){const l={};i&520&&(l.$$scope={dirty:i,ctx:s}),e.$set(l)},i(s){t||(z(e.$$.fragment,s),t=!0)},o(s){Y(e.$$.fragment,s),t=!1},d(s){Me(e,s)}}}function ht(n){let e,t,s,i,l,u,c,E,h,A,d;function I(r,T){return r[1]?mt:ft}let f=I(n),b=f(n);const S=n[7].default,o=_e(S,n,n[9],null);let _={class:n[2]==="Success"?"message-success":n[2]==="Error"?"message-error":"",$$slots:{default:[_t]},$$scope:{ctx:n}};return E=new ct({props:_}),n[8](E),{c(){e=M("link"),t=B(),s=M("div"),i=M("div"),l=M("button"),b.c(),u=B(),o&&o.c(),c=B(),Se(E.$$.fragment),this.h()},l(r){const T=Ge("svelte-t1hpn",w.head);e=C(T,"LINK",{rel:!0,href:!0}),T.forEach(p),t=F(r),s=C(r,"DIV",{class:!0});var O=U(s);i=C(O,"DIV",{class:!0});var D=U(i);l=C(D,"BUTTON",{class:!0});var m=U(l);b.l(m),m.forEach(p),D.forEach(p),u=F(O),o&&o.l(O),O.forEach(p),c=F(r),Ie(E.$$.fragment,r),this.h()},h(){w.title="The Radix Billboard",g(e,"rel","stylesheet"),g(e,"href",He+"/smui.css"),g(l,"class","group"),g(i,"class","absolute top-4 left-4 hidden min-[1450px]:block"),g(s,"class","relative")},m(r,T){R(w.head,e),v(r,t,T),v(r,s,T),R(s,i),R(i,l),b.m(l,null),R(s,u),o&&o.m(s,null),v(r,c,T),Oe(E,r,T),h=!0,A||(d=j(l,"click",n[5]),A=!0)},p(r,[T]){f!==(f=I(r))&&(b.d(1),b=f(r),b&&(b.c(),b.m(l,null))),o&&o.p&&(!h||T&512)&&he(o,S,r,r[9],h?Ee(S,r[9],T,null):pe(r[9]),null);const O={};T&4&&(O.class=r[2]==="Success"?"message-success":r[2]==="Error"?"message-error":""),T&520&&(O.$$scope={dirty:T,ctx:r}),E.$set(O)},i(r){h||(z(o,r),z(E.$$.fragment,r),h=!0)},o(r){Y(o,r),Y(E.$$.fragment,r),h=!1},d(r){r&&(p(t),p(s),p(c)),p(e),b.d(),o&&o.d(r),n[8](null),Me(E,r),A=!1,d()}}}function pt(n,e,t){let s,i,l,{$$slots:u={},$$scope:c}=e;const{notification:E}=tt;Ke(n,E,f=>t(6,l=f));let h,A=document.fullscreenElement!==null;oe.buttonApi.setTheme(we),oe.buttonApi.setMode($e);function d(){A?document.exitFullscreen():document.documentElement.requestFullscreen()}Te(()=>{const f=()=>{t(1,A=document.fullscreenElement!==null)};return document.addEventListener("fullscreenchange",f),()=>{document.removeEventListener("fullscreenchange",f)}});function I(f){ge[f?"unshift":"push"](()=>{h=f,t(0,h)})}return n.$$set=f=>{"$$scope"in f&&t(9,c=f.$$scope)},n.$$.update=()=>{n.$$.dirty&64&&t(3,s=l==null?void 0:l.text),n.$$.dirty&64&&t(2,i=l==null?void 0:l.notificationType),n.$$.dirty&65&&l&&h&&h.open()},[h,A,i,s,E,d,l,u,I,c]}class It extends be{constructor(e){super(),Ae(this,e,pt,ht,de,{})}}export{It as component,St as universal};
