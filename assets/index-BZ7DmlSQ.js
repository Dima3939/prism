var jx=Object.defineProperty;var Kx=(n,e,t)=>e in n?jx(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Me=(n,e,t)=>Kx(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yd(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Lt={},sa=[],fr=()=>{},w_=()=>!1,Fu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ku=n=>n.startsWith("onUpdate:"),ln=Object.assign,Sd=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Zx=Object.prototype.hasOwnProperty,yt=(n,e)=>Zx.call(n,e),Ke=Array.isArray,fs=n=>Xl(n)==="[object Map]",au=n=>Xl(n)==="[object Set]",xp=n=>Xl(n)==="[object Date]",rt=n=>typeof n=="function",Vt=n=>typeof n=="string",Zi=n=>typeof n=="symbol",St=n=>n!==null&&typeof n=="object",A_=n=>(St(n)||rt(n))&&rt(n.then)&&rt(n.catch),C_=Object.prototype.toString,Xl=n=>C_.call(n),Jx=n=>Xl(n).slice(8,-1),R_=n=>Xl(n)==="[object Object]",Md=n=>Vt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,sl=yd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bu=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Qx=/-\w/g,$n=Bu(n=>n.replace(Qx,e=>e.slice(1).toUpperCase())),ey=/\B([A-Z])/g,yo=Bu(n=>n.replace(ey,"-$1").toLowerCase()),zu=Bu(n=>n.charAt(0).toUpperCase()+n.slice(1)),ff=Bu(n=>n?`on${zu(n)}`:""),or=(n,e)=>!Object.is(n,e),Yc=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},P_=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},bd=n=>{const e=parseFloat(n);return isNaN(e)?n:e},ty=n=>{const e=Vt(n)?Number(n):NaN;return isNaN(e)?n:e};let yp;const Hu=()=>yp||(yp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ji(n){if(Ke(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Vt(i)?sy(i):ji(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Vt(n)||St(n))return n}const ny=/;(?![^(]*\))/g,iy=/:([^]+)/,ry=/\/\*[^]*?\*\//g;function sy(n){const e={};return n.replace(ry,"").split(ny).forEach(t=>{if(t){const i=t.split(iy);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function gn(n){let e="";if(Vt(n))e=n;else if(Ke(n))for(let t=0;t<n.length;t++){const i=gn(n[t]);i&&(e+=i+" ")}else if(St(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const oy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ay=yd(oy);function L_(n){return!!n||n===""}function ly(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Gu(n[i],e[i]);return t}function Sp(n,e){if(n.size!==e.size)return!1;const t=Array.from(e),i=new Uint8Array(t.length);for(const r of n){let s=-1;for(let o=0;o<t.length;o++)if(!i[o]&&Gu(r,t[o])){s=o;break}if(s<0)return!1;i[s]=1}return!0}function Gu(n,e){if(n===e)return!0;let t=xp(n),i=xp(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Zi(n),i=Zi(e),t||i)return n===e;if(t=Ke(n),i=Ke(e),t||i)return t&&i?ly(n,e):!1;if(t=St(n),i=St(e),t||i){if(!t||!i)return!1;if(t=fs(n),i=fs(e),t||i||(t=au(n),i=au(e),t||i))return t&&i?Sp(n,e):!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Gu(n[o],e[o]))return!1}}return String(n)===String(e)}const D_=n=>!!(n&&n.__v_isRef===!0),Ze=n=>Vt(n)?n:n==null?"":Ke(n)||St(n)&&(n.toString===C_||!rt(n.toString))?D_(n)?Ze(n.value):JSON.stringify(n,I_,2):String(n),I_=(n,e)=>D_(e)?I_(n,e.value):fs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[hf(i,s)+" =>"]=r,t),{})}:au(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>hf(t))}:Zi(e)?hf(e):St(e)&&!Ke(e)&&!R_(e)?String(e):e,hf=(n,e="")=>{var t;return Zi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let mn;class cy{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&mn&&(mn.active?(this.parent=mn,this.index=(mn.scopes||(mn.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const r=this.scopes.slice();for(e=0,t=r.length;e<t;e++)r[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=mn;try{return mn=this,e()}finally{mn=t}}}on(){++this._on===1&&(this.prevScope=mn,mn=this)}off(){if(this._on>0&&--this._on===0){if(mn===this)mn=this.prevScope;else{let e=mn;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(t=0,i=r.length;t<i;t++)r[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function uy(){return mn}let Ut;const df=new WeakSet;class U_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,mn&&(mn.active?mn.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,df.has(this)&&(df.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||O_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Mp(this),F_(this);const e=Ut,t=Ki;Ut=this,Ki=!0;try{return this.fn()}finally{k_(this),Ut=e,Ki=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)wd(e);this.deps=this.depsTail=void 0,Mp(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?df.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Th(this)&&this.run()}get dirty(){return Th(this)}}let N_=0,ol,al;function O_(n,e=!1){if(n.flags|=8,e){n.next=al,al=n;return}n.next=ol,ol=n}function Ed(){N_++}function Td(){if(--N_>0)return;if(al){let e=al;for(al=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;ol;){let e=ol;for(ol=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function F_(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function k_(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),wd(i),fy(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Th(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(B_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function B_(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===El)||(n.globalVersion=El,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Th(n))))return;n.flags|=2;const e=n.dep,t=Ut,i=Ki;Ut=n,Ki=!0;try{F_(n);const r=n.fn(n._value);(e.version===0||or(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ut=t,Ki=i,k_(n),n.flags&=-3}}function wd(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)wd(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function fy(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Ki=!0;const z_=[];function kr(){z_.push(Ki),Ki=!1}function Br(){const n=z_.pop();Ki=n===void 0?!0:n}function Mp(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ut;Ut=void 0;try{e()}finally{Ut=t}}}let El=0;class hy{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ad{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ut||!Ki||Ut===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ut)t=this.activeLink=new hy(Ut,this),Ut.deps?(t.prevDep=Ut.depsTail,Ut.depsTail.nextDep=t,Ut.depsTail=t):Ut.deps=Ut.depsTail=t,H_(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Ut.depsTail,t.nextDep=void 0,Ut.depsTail.nextDep=t,Ut.depsTail=t,Ut.deps===t&&(Ut.deps=i)}return t}trigger(e){this.version++,El++,this.notify(e)}notify(e){Ed();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Td()}}}function H_(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)H_(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const wh=new WeakMap,io=Symbol(""),Ah=Symbol(""),Tl=Symbol("");function wn(n,e,t){if(Ki&&Ut){let i=wh.get(n);i||wh.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Ad),r.map=i,r.key=t),r.track()}}function Rr(n,e,t,i,r,s){const o=wh.get(n);if(!o){El++;return}const a=l=>{l&&l.trigger()};if(Ed(),e==="clear")o.forEach(a);else{const l=Ke(n),c=l&&Md(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,d)=>{(d==="length"||d===Tl||!Zi(d)&&d>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Tl)),e){case"add":l?c&&a(o.get("length")):(a(o.get(io)),fs(n)&&a(o.get(Ah)));break;case"delete":l||(a(o.get(io)),fs(n)&&a(o.get(Ah)));break;case"set":fs(n)&&a(o.get(io));break}}Td()}function Eo(n){const e=vt(n);return e===n?e:(wn(e,"iterate",Tl),Fi(n)?e:e.map(Ji))}function Vu(n){return wn(n=vt(n),"iterate",Tl),n}function ir(n,e){return zr(n)?va(ro(n)?Ji(e):e):Ji(e)}const dy={__proto__:null,[Symbol.iterator](){return pf(this,Symbol.iterator,n=>ir(this,n))},concat(...n){return Eo(this).concat(...n.map(e=>Ke(e)?Eo(e):e))},entries(){return pf(this,"entries",n=>(n[1]=ir(this,n[1]),n))},every(n,e){return gr(this,"every",n,e,void 0,arguments)},filter(n,e){return gr(this,"filter",n,e,t=>t.map(i=>ir(this,i)),arguments)},find(n,e){return gr(this,"find",n,e,t=>ir(this,t),arguments)},findIndex(n,e){return gr(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return gr(this,"findLast",n,e,t=>ir(this,t),arguments)},findLastIndex(n,e){return gr(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return gr(this,"forEach",n,e,void 0,arguments)},includes(...n){return mf(this,"includes",n)},indexOf(...n){return mf(this,"indexOf",n)},join(n){return Eo(this).join(n)},lastIndexOf(...n){return mf(this,"lastIndexOf",n)},map(n,e){return gr(this,"map",n,e,void 0,arguments)},pop(){return Ia(this,"pop")},push(...n){return Ia(this,"push",n)},reduce(n,...e){return bp(this,"reduce",n,e)},reduceRight(n,...e){return bp(this,"reduceRight",n,e)},shift(){return Ia(this,"shift")},some(n,e){return gr(this,"some",n,e,void 0,arguments)},splice(...n){return Ia(this,"splice",n)},toReversed(){return Eo(this).toReversed()},toSorted(n){return Eo(this).toSorted(n)},toSpliced(...n){return Eo(this).toSpliced(...n)},unshift(...n){return Ia(this,"unshift",n)},values(){return pf(this,"values",n=>ir(this,n))}};function pf(n,e,t){const i=Vu(n),r=i[e]();return i!==n&&!Fi(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const py=Array.prototype;function gr(n,e,t,i,r,s){const o=Vu(n),a=o!==n&&!Fi(n),l=o[e];if(l!==py[e]){const h=l.apply(n,s);return a?Ji(h):h}let c=t;o!==n&&(a?c=function(h,d){return t.call(this,ir(n,h),d,n)}:t.length>2&&(c=function(h,d){return t.call(this,h,d,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function bp(n,e,t,i){const r=Vu(n),s=r!==n&&!Fi(n);let o=t,a=!1;r!==n&&(s?(a=i.length===0,o=function(c,u,h){return a&&(a=!1,c=ir(n,c)),t.call(this,c,ir(n,u),h,n)}):t.length>3&&(o=function(c,u,h){return t.call(this,c,u,h,n)}));const l=r[e](o,...i);return a?ir(n,l):l}function mf(n,e,t){const i=vt(n);wn(i,"iterate",Tl);const r=i[e](...t);return(r===-1||r===!1)&&Pd(t[0])?(t[0]=vt(t[0]),i[e](...t)):r}function Ia(n,e,t=[]){kr(),Ed();const i=vt(n)[e].apply(n,t);return Td(),Br(),i}const my=yd("__proto__,__v_isRef,__isVue"),G_=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Zi));function gy(n){Zi(n)||(n=String(n));const e=vt(this);return wn(e,"has",n),e.hasOwnProperty(n)}class V_{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?wy:Y_:s?$_:X_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ke(e);if(!r){let l;if(o&&(l=dy[t]))return l;if(t==="hasOwnProperty")return gy}const a=Reflect.get(e,t,Dn(e)?e:i);if((Zi(t)?G_.has(t):my(t))||(r||wn(e,"get",t),s))return a;if(Dn(a)){const l=o&&Md(t)?a:a.value;return r&&St(l)?Rh(l):l}return St(a)?r?Rh(a):Ra(a):a}}class W_ extends V_{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=Ke(e)&&Md(t);if(!this._isShallow){const c=zr(s);if(!Fi(i)&&!zr(i)&&(s=vt(s),i=vt(i)),!o&&Dn(s)&&!Dn(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:yt(e,t),l=Reflect.set(e,t,i,Dn(e)?e:r);return e===vt(r)&&l&&(a?or(i,s)&&Rr(e,"set",t,i):Rr(e,"add",t,i)),l}deleteProperty(e,t){const i=yt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Rr(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Zi(t)||!G_.has(t))&&wn(e,"has",t),i}ownKeys(e){return wn(e,"iterate",Ke(e)?"length":io),Reflect.ownKeys(e)}}class _y extends V_{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const vy=new W_,xy=new _y,yy=new W_(!0);const Ch=n=>n,Ql=n=>Reflect.getPrototypeOf(n);function Sy(n,e,t){return function(...i){const r=this.__v_raw,s=vt(r),o=fs(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Ch:e?va:Ji;return!e&&wn(s,"iterate",l?Ah:io),ln(Object.create(c),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}}})}}function ec(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function My(n,e){const t={get(r){const s=this.__v_raw,o=vt(s),a=vt(r);n||(or(r,a)&&wn(o,"get",r),wn(o,"get",a));const{has:l}=Ql(o),c=e?Ch:n?va:Ji;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&wn(vt(r),"iterate",io),r.size},has(r){const s=this.__v_raw,o=vt(s),a=vt(r);return n||(or(r,a)&&wn(o,"has",r),wn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=vt(a),c=e?Ch:n?va:Ji;return!n&&wn(l,"iterate",io),a.forEach((u,h)=>r.call(s,c(u),c(h),o))}};return ln(t,n?{add:ec("add"),set:ec("set"),delete:ec("delete"),clear:ec("clear")}:{add(r){const s=vt(this),o=Ql(s),a=vt(r),l=!e&&!Fi(r)&&!zr(r)?a:r;return o.has.call(s,l)||or(r,l)&&o.has.call(s,r)||or(a,l)&&o.has.call(s,a)||(s.add(l),Rr(s,"add",l,l)),this},set(r,s){!e&&!Fi(s)&&!zr(s)&&(s=vt(s));const o=vt(this),{has:a,get:l}=Ql(o);let c=a.call(o,r);c||(r=vt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?or(s,u)&&Rr(o,"set",r,s):Rr(o,"add",r,s),this},delete(r){const s=vt(this),{has:o,get:a}=Ql(s);let l=o.call(s,r);l||(r=vt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Rr(s,"delete",r,void 0),c},clear(){const r=vt(this),s=r.size!==0,o=r.clear();return s&&Rr(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Sy(r,n,e)}),t}function Cd(n,e){const t=My(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(yt(t,r)&&r in i?t:i,r,s)}const by={get:Cd(!1,!1)},Ey={get:Cd(!1,!0)},Ty={get:Cd(!0,!1)};const X_=new WeakMap,$_=new WeakMap,Y_=new WeakMap,wy=new WeakMap;function Ay(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ra(n){return zr(n)?n:Rd(n,!1,vy,by,X_)}function Cy(n){return Rd(n,!1,yy,Ey,$_)}function Rh(n){return Rd(n,!0,xy,Ty,Y_)}function Rd(n,e,t,i,r){if(!St(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const o=Ay(Jx(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function ro(n){return zr(n)?ro(n.__v_raw):!!(n&&n.__v_isReactive)}function zr(n){return!!(n&&n.__v_isReadonly)}function Fi(n){return!!(n&&n.__v_isShallow)}function Pd(n){return n?!!n.__v_raw:!1}function vt(n){const e=n&&n.__v_raw;return e?vt(e):n}function Ry(n){return!yt(n,"__v_skip")&&Object.isExtensible(n)&&P_(n,"__v_skip",!0),n}const Ji=n=>St(n)?Ra(n):n,va=n=>St(n)?Rh(n):n;function Dn(n){return n?n.__v_isRef===!0:!1}function Ct(n){return Py(n,!1)}function Py(n,e){return Dn(n)?n:new Ly(n,e)}class Ly{constructor(e,t){this.dep=new Ad,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:vt(e),this._value=t?e:Ji(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Fi(e)||zr(e);e=i?e:vt(e),or(e,t)&&(this._rawValue=e,this._value=i?e:Ji(e),this.dep.trigger())}}function ie(n){return Dn(n)?n.value:n}const Dy={get:(n,e,t)=>e==="__v_raw"?n:ie(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Dn(r)&&!Dn(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function q_(n){return ro(n)?n:new Proxy(n,Dy)}class Iy{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ad(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=El-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ut!==this)return O_(this,!0),!0}get value(){const e=this.dep.track();return B_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Uy(n,e,t=!1){let i,r;return rt(n)?i=n:(i=n.get,r=n.set),new Iy(i,r,t)}const tc={},lu=new WeakMap;let Vs;function Ny(n,e=!1,t=Vs){if(t){let i=lu.get(t);i||lu.set(t,i=[]),i.push(n)}}function Oy(n,e,t=Lt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=S=>r?S:Fi(S)||r===!1||r===0?Pr(S,1):Pr(S);let u,h,d,f,g=!1,_=!1;if(Dn(n)?(h=()=>n.value,g=Fi(n)):ro(n)?(h=()=>c(n),g=!0):Ke(n)?(_=!0,g=n.some(S=>ro(S)||Fi(S)),h=()=>n.map(S=>{if(Dn(S))return S.value;if(ro(S))return c(S);if(rt(S))return l?l(S,2):S()})):rt(n)?e?h=l?()=>l(n,2):n:h=()=>{if(d){kr();try{d()}finally{Br()}}const S=Vs;Vs=u;try{return l?l(n,3,[f]):n(f)}finally{Vs=S}}:h=fr,e&&r){const S=h,w=r===!0?1/0:r;h=()=>Pr(S(),w)}const m=uy(),p=()=>{u.stop(),m&&m.active&&Sd(m.effects,u)};if(s&&e){const S=e;e=(...w)=>{const C=S(...w);return p(),C}}let y=_?new Array(n.length).fill(tc):tc;const v=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const w=u.run();if(S||r||g||(_?w.some((C,T)=>or(C,y[T])):or(w,y))){d&&d();const C=Vs;Vs=u;try{const T=[w,y===tc?void 0:_&&y[0]===tc?[]:y,f];y=w,l?l(e,3,T):e(...T)}finally{Vs=C}}}else u.run()};return a&&a(v),u=new U_(h),u.scheduler=o?()=>o(v,!1):v,f=S=>Ny(S,!1,u),d=u.onStop=()=>{const S=lu.get(u);if(S){if(l)l(S,4);else for(const w of S)w();lu.delete(u)}},e?i?v(!0):y=u.run():o?o(v.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Pr(n,e=1/0,t){if(e<=0||!St(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Dn(n))Pr(n.value,e,t);else if(Ke(n))for(let i=0;i<n.length;i++)Pr(n[i],e,t);else if(au(n)||fs(n))n.forEach(i=>{Pr(i,e,t)});else if(R_(n)){for(const i in n)Pr(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Pr(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $l(n,e,t,i){try{return i?n(...i):n()}catch(r){Wu(r,e,t)}}function zi(n,e,t,i){if(rt(n)){const r=$l(n,e,t,i);return r&&A_(r)&&r.catch(s=>{Wu(s,e,t)}),r}if(Ke(n)){const r=[];for(let s=0;s<n.length;s++)r.push(zi(n[s],e,t,i));return r}}function Wu(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Lt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(s){kr(),$l(s,null,10,[n,l,c]),Br();return}}Fy(n,t,r,i,o)}function Fy(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Wn=[];let er=-1;const oa=[];let is=null,Ko=0;const j_=Promise.resolve();let cu=null;function ky(n){const e=cu||j_;return n?e.then(this?n.bind(this):n):e}function By(n){let e=er+1,t=Wn.length;for(;e<t;){const i=e+t>>>1,r=Wn[i],s=wl(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Ld(n){if(!(n.flags&1)){const e=wl(n),t=Wn[Wn.length-1];!t||!(n.flags&2)&&e>=wl(t)?Wn.push(n):Wn.splice(By(e),0,n),n.flags|=1,K_()}}function K_(){cu||(cu=j_.then(J_))}function zy(n){if(!Ke(n))is&&n.id===-1?is.splice(Ko+1,0,n):n.flags&1||(oa.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)oa.push(n[e]);K_()}function Ep(n,e,t=er+1){for(;t<Wn.length;t++){const i=Wn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Wn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Z_(n){if(oa.length){const e=[...new Set(oa)].sort((t,i)=>wl(t)-wl(i));if(oa.length=0,is){for(let t=0;t<e.length;t++)is.push(e[t]);return}for(is=e,Ko=0;Ko<is.length;Ko++){const t=is[Ko];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}is=null,Ko=0}}const wl=n=>n.id==null?n.flags&2?-1:1/0:n.id;function J_(n){try{for(er=0;er<Wn.length;er++){const e=Wn[er];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),$l(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;er<Wn.length;er++){const e=Wn[er];e&&(e.flags&=-2)}er=-1,Wn.length=0,Z_(),cu=null,(Wn.length||oa.length)&&J_()}}let _n=null,Q_=null;function uu(n){const e=_n;return _n=n,Q_=n&&n.type.__scopeId||null,e}function on(n,e=_n,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&pu(-1);const s=uu(e),o=Or.length;let a;try{a=n(...r)}finally{for(let l=Or.length;l>o;l--)Ud();uu(s),i._d&&pu(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Js(n,e){if(_n===null)return n;const t=Zu(_n),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=Lt]=e[r];s&&(rt(s)&&(s={mounted:s,updated:s}),s.deep&&Pr(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ps(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(kr(),zi(l,t,8,[n.el,a,n,e]),Br())}}function Hy(n,e){if(Rn){let t=Rn.provides;const i=Rn.parent&&Rn.parent.provides;i===t&&(t=Rn.provides=Object.create(i)),t[n]=e}}function qc(n,e,t=!1){const i=D0();if(i||la){let r=la?la._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&rt(e)?e.call(i&&i.proxy):e}}const Gy=Symbol.for("v-scx"),Vy=()=>qc(Gy);function ll(n,e,t){return e0(n,e,t)}function e0(n,e,t=Lt){const{immediate:i,deep:r,flush:s,once:o}=t,a=ln({},t),l=e&&i||!e&&s!=="post";let c;if(Ll){if(s==="sync"){const f=Vy();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=fr,f.resume=fr,f.pause=fr,f}}const u=Rn;a.call=(f,g,_)=>zi(f,u,g,_);let h=!1;s==="post"?a.scheduler=f=>{jn(f,u&&u.suspense)}:s!=="sync"&&(h=!0,a.scheduler=(f,g)=>{g?f():Ld(f)}),a.augmentJob=f=>{e&&(f.flags|=4),h&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const d=Oy(n,e,a);return Ll&&(c?c.push(d):l&&d()),d}function Wy(n,e,t){const i=this.proxy,r=Vt(n)?n.includes(".")?t0(i,n):()=>i[n]:n.bind(i,i);let s;rt(e)?s=e:(s=e.handler,t=e);const o=Yl(this),a=e0(r,s.bind(i),t);return o(),a}function t0(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Xy=Symbol("_vte"),Xu=n=>n.__isTeleport,Li=Symbol("_leaveCb"),Ua=Symbol("_enterCb");function $y(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return $r(()=>{n.isMounted=!0}),c0(()=>{n.isUnmounting=!0}),n}const Ai=[Function,Array],n0={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ai,onEnter:Ai,onAfterEnter:Ai,onEnterCancelled:Ai,onBeforeLeave:Ai,onLeave:Ai,onAfterLeave:Ai,onLeaveCancelled:Ai,onBeforeAppear:Ai,onAppear:Ai,onAfterAppear:Ai,onAppearCancelled:Ai},i0=n=>{const e=n.subTree;return e.component?i0(e.component):e},Yy={name:"BaseTransition",props:n0,setup(n,{slots:e}){const t=D0(),i=$y();return()=>{const r=e.default&&o0(e.default(),!0),s=r&&r.length?r0(r):t.subTree?ys():void 0;if(!s)return;const o=vt(n),{mode:a}=o;if(i.isLeaving)return gf(s);const l=fu(s);if(!l)return gf(s);let c=Ph(l,o,i,t,h=>c=h);l.type!==Cn&&Al(l,c);let u=t.subTree&&fu(t.subTree);if(u&&u.type!==Cn&&!js(u,l)&&i0(t).type!==Cn){let h=Ph(u,o,i,t);if(Al(u,h),a==="out-in"&&l.type!==Cn)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete h.afterLeave,u=void 0},gf(s);a==="in-out"&&l.type!==Cn?h.delayLeave=(d,f,g)=>{const _=s0(i,u);_[String(u.key)]=u,d[Li]=()=>{f(),d[Li]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function r0(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Cn){e=t;break}}return e}const qy=Yy;function s0(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Ph(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:d,onLeave:f,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:y,onAppearCancelled:v}=e,S=String(n.key),w=s0(t,n),C=(N,x)=>{N&&zi(N,i,9,x)},T=(N,x)=>{const R=x[1];C(N,x),Ke(N)?N.every(F=>F.length<=1)&&R():N.length<=1&&R()},I={mode:o,persisted:a,beforeEnter(N){let x=l;if(!t.isMounted)if(s)x=m||l;else return;N[Li]&&N[Li](!0);const R=w[S];R&&js(n,R)&&R.el[Li]&&R.el[Li](),C(x,[N])},enter(N){if(w[S]===n)return;let x=c,R=u,F=h;if(!t.isMounted)if(s)x=p||c,R=y||u,F=v||h;else return;let ne=!1;N[Ua]=K=>{ne||(ne=!0,K?C(F,[N]):C(R,[N]),I.delayedLeave&&I.delayedLeave(),N[Ua]=void 0)};const U=N[Ua].bind(null,!1);x?T(x,[N,U]):U()},leave(N,x){const R=String(n.key);if(N[Ua]&&N[Ua](!0),t.isUnmounting)return x();C(d,[N]);let F=!1;N[Li]=U=>{F||(F=!0,x(),U?C(_,[N]):C(g,[N]),N[Li]=void 0,w[R]===n&&delete w[R])};const ne=N[Li].bind(null,!1);w[R]=n,f?T(f,[N,ne]):ne()},clone(N){const x=Ph(N,e,t,i,r);return r&&r(x),x}};return I}function gf(n){if($u(n))return n=xs(n),n.children=null,n}function fu(n){if(!$u(n))return Xu(n.type)&&n.children?r0(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&rt(t.default))return t.default()}}function Al(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;Al(Xu(t.type)&&fu(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function o0(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Nt?(o.patchFlag&128&&r++,i=i.concat(o0(o.children,e,a))):(e||o.type!==Cn)&&i.push(a!=null?xs(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Ei(n,e){return rt(n)?ln({name:n.name},e,{setup:n}):n}function a0(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Tp(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const hu=new WeakMap;function cl(n,e,t,i,r=!1){if(Ke(n)){n.forEach((_,m)=>cl(_,e&&(Ke(e)?e[m]:e),t,i,r));return}if(aa(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&cl(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Zu(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Lt?a.refs={}:a.refs,h=a.setupState,d=vt(h),f=h===Lt?w_:_=>Tp(u,_)?!1:yt(d,_),g=(_,m)=>!(m&&Tp(u,m));if(c!=null&&c!==l){if(wp(e),Vt(c))u[c]=null,f(c)&&(h[c]=null);else if(Dn(c)){const _=e;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(rt(l))$l(l,a,12,[o,u]);else{const _=Vt(l),m=Dn(l);if(_||m){const p=()=>{if(n.f){const y=_?f(l)?h[l]:u[l]:g()||!n.k?l.value:u[n.k];if(r)Ke(y)&&Sd(y,s);else if(Ke(y))y.includes(s)||y.push(s);else if(_)u[l]=[s],f(l)&&(h[l]=u[l]);else{const v=[s];g(l,n.k)&&(l.value=v),n.k&&(u[n.k]=v)}}else _?(u[l]=o,f(l)&&(h[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const y=()=>{p(),hu.delete(n)};y.id=-1,hu.set(n,y),jn(y,t)}else wp(n),p()}}}function wp(n){const e=hu.get(n);e&&(e.flags|=8,hu.delete(n))}Hu().requestIdleCallback;Hu().cancelIdleCallback;const aa=n=>!!n.type.__asyncLoader,$u=n=>n.type.__isKeepAlive;function jy(n,e){l0(n,"a",e)}function Ky(n,e){l0(n,"da",e)}function l0(n,e,t=Rn){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Yu(e,i,t),t){let r=t.parent;for(;r&&r.parent;)$u(r.parent.vnode)&&Zy(i,e,t,r),r=r.parent}}function Zy(n,e,t,i){const r=Yu(e,n,i,!0);So(()=>{Sd(i[e],r)},t)}function Yu(n,e,t=Rn,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{kr();const a=Yl(t),l=zi(e,t,n,o);return a(),Br(),l});return i?r.unshift(s):r.push(s),s}}const Xr=n=>(e,t=Rn)=>{(!Ll||n==="sp")&&Yu(n,(...i)=>e(...i),t)},Jy=Xr("bm"),$r=Xr("m"),Qy=Xr("bu"),eS=Xr("u"),c0=Xr("bum"),So=Xr("um"),tS=Xr("sp"),nS=Xr("rtg"),iS=Xr("rtc");function rS(n,e=Rn){Yu("ec",n,e)}const sS="components",u0=Symbol.for("v-ndc");function qu(n){return Vt(n)?oS(sS,n,!1)||n:n||u0}function oS(n,e,t=!0,i=!1){const r=_n||Rn;if(r){const s=r.type;{const a=VS(s,!1);if(a&&(a===e||a===$n(e)||a===zu($n(e))))return s}const o=Ap(r[n]||s[n],e)||Ap(r.appContext[n],e);return!o&&i?s:o}}function Ap(n,e){return n&&(n[e]||n[$n(e)]||n[zu($n(e))])}function vi(n,e,t,i){let r;const s=t,o=Ke(n);if(o||Vt(n)){const a=o&&ro(n);let l=!1,c=!1;a&&(l=!Fi(n),c=zr(n),n=Vu(n)),r=new Array(n.length);for(let u=0,h=n.length;u<h;u++)r[u]=e(l?c?va(Ji(n[u])):Ji(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(St(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}function f0(n,e,t,i,r,s){if(t==null&&(t={}),_n.ce||_n.parent&&aa(_n.parent)&&_n.parent.ce){const c=t,u=Object.keys(c).length>0;return He(),An(Nt,null,[Ue("slot",c,i)],u?-2:64)}let o=n[e];o&&o._c&&(o._d=!1);const a=Or.length;He();let l;try{const c=o&&h0(o(t)),u=t.key||s||c&&c.key;l=An(Nt,{key:(u&&!Zi(u)?u:`_${e}`)+(!c&&i?"_fb":"")},c||(i?i():[]),c&&n._===1?64:-2)}catch(c){for(let u=Or.length;u>a;u--)Ud();throw c}finally{o&&o._c&&(o._d=!0)}return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),l}function h0(n){return n.some(e=>Rl(e)?!(e.type===Cn||e.type===Nt&&!h0(e.children)):!0)?n:null}const Lh=n=>n?I0(n)?Zu(n):Lh(n.parent):null,ul=ln(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Lh(n.parent),$root:n=>Lh(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>p0(n),$forceUpdate:n=>n.f||(n.f=()=>{Ld(n.update)}),$nextTick:n=>n.n||(n.n=ky.bind(n.proxy)),$watch:n=>Wy.bind(n)}),_f=(n,e)=>n!==Lt&&!n.__isScriptSetup&&yt(n,e),aS={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(_f(i,e))return o[e]=1,i[e];if(r!==Lt&&yt(r,e))return o[e]=2,r[e];if(yt(s,e))return o[e]=3,s[e];if(t!==Lt&&yt(t,e))return o[e]=4,t[e];Dh&&(o[e]=0)}}const c=ul[e];let u,h;if(c)return e==="$attrs"&&wn(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==Lt&&yt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,yt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return _f(r,e)?(r[e]=t,!0):i!==Lt&&yt(i,e)?(i[e]=t,!0):yt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==Lt&&a[0]!=="$"&&yt(n,a)||_f(e,a)||yt(s,a)||yt(i,a)||yt(ul,a)||yt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:yt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Cp(n){return Ke(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Dh=!0;function lS(n){const e=p0(n),t=n.proxy,i=n.ctx;Dh=!1,e.beforeCreate&&Rp(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:y,destroyed:v,unmounted:S,render:w,renderTracked:C,renderTriggered:T,errorCaptured:I,serverPrefetch:N,expose:x,inheritAttrs:R,components:F,directives:ne,filters:U}=e;if(c&&cS(c,i,null),o)for(const X in o){const G=o[X];rt(G)&&(i[X]=G.bind(t))}if(r){const X=r.call(t,t);St(X)&&(n.data=Ra(X))}if(Dh=!0,s)for(const X in s){const G=s[X],re=rt(G)?G.bind(t,t):rt(G.get)?G.get.bind(t,t):fr,L=!rt(G)&&rt(G.set)?G.set.bind(t):fr,ue=XS({get:re,set:L});Object.defineProperty(i,X,{enumerable:!0,configurable:!0,get:()=>ue.value,set:_e=>ue.value=_e})}if(a)for(const X in a)d0(a[X],i,t,X);if(l){const X=rt(l)?l.call(t):l;Reflect.ownKeys(X).forEach(G=>{Hy(G,X[G])})}u&&Rp(u,n,"c");function W(X,G){Ke(G)?G.forEach(re=>X(re.bind(t))):G&&X(G.bind(t))}if(W(Jy,h),W($r,d),W(Qy,f),W(eS,g),W(jy,_),W(Ky,m),W(rS,I),W(iS,C),W(nS,T),W(c0,y),W(So,S),W(tS,N),Ke(x))if(x.length){const X=n.exposed||(n.exposed={});x.forEach(G=>{Object.defineProperty(X,G,{get:()=>t[G],set:re=>t[G]=re,enumerable:!0})})}else n.exposed||(n.exposed={});w&&n.render===fr&&(n.render=w),R!=null&&(n.inheritAttrs=R),F&&(n.components=F),ne&&(n.directives=ne),N&&a0(n)}function cS(n,e,t=fr){Ke(n)&&(n=Ih(n));for(const i in n){const r=n[i];let s;St(r)?"default"in r?s=qc(r.from||i,r.default,!0):s=qc(r.from||i):s=qc(r),Dn(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Rp(n,e,t){zi(Ke(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function d0(n,e,t,i){let r=i.includes(".")?t0(t,i):()=>t[i];if(Vt(n)){const s=e[n];rt(s)&&ll(r,s)}else if(rt(n))ll(r,n.bind(t));else if(St(n))if(Ke(n))n.forEach(s=>d0(s,e,t,i));else{const s=rt(n.handler)?n.handler.bind(t):e[n.handler];rt(s)&&ll(r,s,n)}}function p0(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>du(l,c,o,!0)),du(l,e,o)),St(e)&&s.set(e,l),l}function du(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&du(n,s,t,!0),r&&r.forEach(o=>du(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=uS[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const uS={data:Pp,props:Lp,emits:Lp,methods:ja,computed:ja,beforeCreate:Fn,created:Fn,beforeMount:Fn,mounted:Fn,beforeUpdate:Fn,updated:Fn,beforeDestroy:Fn,beforeUnmount:Fn,destroyed:Fn,unmounted:Fn,activated:Fn,deactivated:Fn,errorCaptured:Fn,serverPrefetch:Fn,components:ja,directives:ja,watch:hS,provide:Pp,inject:fS};function Pp(n,e){return e?n?function(){return ln(rt(n)?n.call(this,this):n,rt(e)?e.call(this,this):e)}:e:n}function fS(n,e){return ja(Ih(n),Ih(e))}function Ih(n){if(Ke(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Fn(n,e){return n?[...new Set([].concat(n,e))]:e}function ja(n,e){return n?ln(Object.create(null),n,e):e}function Lp(n,e){return n?Ke(n)&&Ke(e)?[...new Set([...n,...e])]:ln(Object.create(null),Cp(n),Cp(e??{})):e}function hS(n,e){if(!n)return e;if(!e)return n;const t=ln(Object.create(null),n);for(const i in e)t[i]=Fn(n[i],e[i]);return t}function m0(){return{app:null,config:{isNativeTag:w_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dS=0;function pS(n,e){return function(i,r=null){rt(i)||(i=ln({},i)),r!=null&&!St(r)&&(r=null);const s=m0(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:dS++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:$S,get config(){return s.config},set config(u){},use(u,...h){return o.has(u)||(u&&rt(u.install)?(o.add(u),u.install(c,...h)):rt(u)&&(o.add(u),u(c,...h))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,h){return h?(s.components[u]=h,c):s.components[u]},directive(u,h){return h?(s.directives[u]=h,c):s.directives[u]},mount(u,h,d){if(!l){const f=c._ceVNode||Ue(i,r);return f.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(f,u,d),l=!0,c._container=u,u.__vue_app__=c,Zu(f.component)}},onUnmount(u){a.push(u)},unmount(){l&&(zi(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return s.provides[u]=h,c},runWithContext(u){const h=la;la=c;try{return u()}finally{la=h}}};return c}}let la=null;const mS=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${$n(e)}Modifiers`]||n[`${yo(e)}Modifiers`];function gS(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Lt;let r=t;const s=e.startsWith("update:"),o=s&&mS(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Vt(u)?u.trim():u)),o.number&&(r=r.map(bd)));let a,l=i[a=ff(e)]||i[a=ff($n(e))];!l&&s&&(l=i[a=ff(yo(e))]),l&&zi(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,zi(c,n,6,r)}}const _S=new WeakMap;function g0(n,e,t=!1){const i=t?_S:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!rt(n)){const l=c=>{const u=g0(c,e,!0);u&&(a=!0,ln(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(St(n)&&i.set(n,null),null):(Ke(s)?s.forEach(l=>o[l]=null):ln(o,s),St(n)&&i.set(n,o),o)}function ju(n,e){return!n||!Fu(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),yt(n,e[0].toLowerCase()+e.slice(1))||yt(n,yo(e))||yt(n,e))}function Dp(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:f,ctx:g,inheritAttrs:_}=n,m=uu(n);let p,y;try{if(t.shapeFlag&4){const S=r||i,w=S;p=rr(c.call(w,S,u,h,f,d,g)),y=a}else{const S=e;p=rr(S.length>1?S(h,{attrs:a,slots:o,emit:l}):S(h,null)),y=e.props?a:vS(a)}}catch(S){Or.length=0,Wu(S,n,1),p=Ue(Cn)}let v=p;if(y&&_!==!1){const S=Object.keys(y),{shapeFlag:w}=v;S.length&&w&7&&(s&&S.some(ku)&&(y=xS(y,s)),v=xs(v,y,!1,!0))}if(t.dirs&&(v=xs(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition){const S=Xu(v.type)&&fu(v)||v;Al(S,t.transition)}return p=v,uu(m),p}const vS=n=>{let e;for(const t in n)(t==="class"||t==="style"||Fu(t))&&((e||(e={}))[t]=n[t]);return e},xS=(n,e)=>{const t={};for(const i in n)(!ku(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function yS(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Ip(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(_0(o,i,d)&&!ju(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Ip(i,o,c):!0:!!o;return!1}function Ip(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(_0(e,n,s)&&!ju(t,s))return!0}return!1}function _0(n,e,t){const i=n[t],r=e[t];return t==="style"&&St(i)&&St(r)?!Gu(i,r):i!==r}function SS({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const v0={},x0=()=>Object.create(v0),y0=n=>Object.getPrototypeOf(n)===v0;function MS(n,e,t,i=!1){const r={},s=x0();n.propsDefaults=Object.create(null),S0(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Cy(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function bS(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=vt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ju(n.emitsOptions,d))continue;const f=e[d];if(l)if(yt(s,d))f!==s[d]&&(s[d]=f,c=!0);else{const g=$n(d);r[g]=Uh(l,a,g,f,n,!1)}else f!==s[d]&&(s[d]=f,c=!0)}}}else{S0(n,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!yt(e,h)&&((u=yo(h))===h||!yt(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=Uh(l,a,h,void 0,n,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!yt(e,h))&&(delete s[h],c=!0)}c&&Rr(n.attrs,"set","")}function S0(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(sl(l))continue;const c=e[l];let u;r&&yt(r,u=$n(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:ju(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=vt(t),c=a||Lt;for(let u=0;u<s.length;u++){const h=s[u];t[h]=Uh(r,l,h,c[h],n,!yt(c,h))}}return o}function Uh(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=yt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&rt(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Yl(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===yo(t))&&(i=!0))}return i}const ES=new WeakMap;function M0(n,e,t=!1){const i=t?ES:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!rt(n)){const u=h=>{l=!0;const[d,f]=M0(h,e,!0);ln(o,d),f&&a.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return St(n)&&i.set(n,sa),sa;if(Ke(s))for(let u=0;u<s.length;u++){const h=$n(s[u]);Up(h)&&(o[h]=Lt)}else if(s)for(const u in s){const h=$n(u);if(Up(h)){const d=s[u],f=o[h]=Ke(d)||rt(d)?{type:d}:ln({},d),g=f.type;let _=!1,m=!0;if(Ke(g))for(let p=0;p<g.length;++p){const y=g[p],v=rt(y)&&y.name;if(v==="Boolean"){_=!0;break}else v==="String"&&(m=!1)}else _=rt(g)&&g.name==="Boolean";f[0]=_,f[1]=m,(_||yt(f,"default"))&&a.push(h)}}const c=[o,a];return St(n)&&i.set(n,c),c}function Up(n){return n[0]!=="$"&&!sl(n)}const Dd=n=>n==="_"||n==="_ctx"||n==="$stable",Id=n=>Ke(n)?n.map(rr):[rr(n)],TS=(n,e,t)=>{if(e._n)return e;const i=on((...r)=>Id(e(...r)),t);return i._c=!1,i},b0=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Dd(r))continue;const s=n[r];if(rt(s))e[r]=TS(r,s,i);else if(s!=null){const o=Id(s);e[r]=()=>o}}},E0=(n,e)=>{const t=Id(e);n.slots.default=()=>t},T0=(n,e,t)=>{for(const i in e)(t||!Dd(i))&&(n[i]=e[i])},wS=(n,e,t)=>{const i=n.slots=x0();if(n.vnode.shapeFlag&32){const r=e._;r?(T0(i,e,t),t&&P_(i,"_",r,!0)):b0(e,i)}else e&&E0(n,e)},AS=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=Lt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:T0(r,e,t):(s=!e.$stable,b0(e,r)),o=e}else e&&(E0(n,e),o={default:1});if(s)for(const a in r)!Dd(a)&&o[a]==null&&delete r[a]},jn=DS;function CS(n){return RS(n)}function RS(n,e){const t=Hu();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=fr,insertStaticContent:g}=n,_=(M,O,B,te=null,q=null,P=null,oe=void 0,ae=null,ce=!!O.dynamicChildren)=>{if(M===O)return;M&&!js(M,O)&&(te=Pe(M),_e(M,q,P,!0),M=null),O.patchFlag===-2&&(ce=!1,O.dynamicChildren=null);const{type:E,ref:b,shapeFlag:k}=O;switch(E){case Ku:m(M,O,B,te);break;case Cn:p(M,O,B,te);break;case jc:M==null&&y(O,B,te,oe);break;case Nt:F(M,O,B,te,q,P,oe,ae,ce);break;default:k&1?w(M,O,B,te,q,P,oe,ae,ce):k&6?ne(M,O,B,te,q,P,oe,ae,ce):(k&64||k&128)&&E.process(M,O,B,te,q,P,oe,ae,ce,it)}b!=null&&q?cl(b,M&&M.ref,P,O||M,!O):b==null&&M&&M.ref!=null&&cl(M.ref,null,P,M,!0)},m=(M,O,B,te)=>{if(M==null)i(O.el=a(O.children),B,te);else{const q=O.el=M.el;O.children!==M.children&&c(q,O.children)}},p=(M,O,B,te)=>{M==null?i(O.el=l(O.children||""),B,te):O.el=M.el},y=(M,O,B,te)=>{[M.el,M.anchor]=g(M.children,O,B,te,M.el,M.anchor)},v=({el:M,anchor:O},B,te)=>{let q;for(;M&&M!==O;)q=d(M),i(M,B,te),M=q;i(O,B,te)},S=({el:M,anchor:O})=>{let B;for(;M&&M!==O;)B=d(M),r(M),M=B;r(O)},w=(M,O,B,te,q,P,oe,ae,ce)=>{if(O.type==="svg"?oe="svg":O.type==="math"&&(oe="mathml"),M==null)C(O,B,te,q,P,oe,ae,ce);else{const E=M.el&&M.el._isVueCE?M.el:null;try{E&&E._beginPatch(),N(M,O,q,P,oe,ae,ce)}finally{E&&E._endPatch()}}},C=(M,O,B,te,q,P,oe,ae)=>{let ce,E;const{props:b,shapeFlag:k,transition:$,dirs:j}=M;if(ce=M.el=o(M.type,P,b&&b.is,b),k&8?u(ce,M.children):k&16&&I(M.children,ce,null,te,q,vf(M,P),oe,ae),j&&Ps(M,null,te,"created"),T(ce,M,M.scopeId,oe,te),b){for(const pe in b)pe!=="value"&&!sl(pe)&&s(ce,pe,null,b[pe],P,te);"value"in b&&s(ce,"value",null,b.value,P),(E=b.onVnodeBeforeMount)&&Qi(E,te,M)}j&&Ps(M,null,te,"beforeMount");const se=PS(q,$);se&&$.beforeEnter(ce),i(ce,O,B),((E=b&&b.onVnodeMounted)||se||j)&&jn(()=>{try{E&&Qi(E,te,M),se&&$.enter(ce),j&&Ps(M,null,te,"mounted")}finally{}},q)},T=(M,O,B,te,q)=>{if(B&&f(M,B),te)for(let P=0;P<te.length;P++)f(M,te[P]);if(q){let P=q.subTree;if(O===P||R0(P.type)&&(P.ssContent===O||P.ssFallback===O)){const oe=q.vnode;T(M,oe,oe.scopeId,oe.slotScopeIds,q.parent)}}},I=(M,O,B,te,q,P,oe,ae,ce=0)=>{for(let E=ce;E<M.length;E++){const b=M[E]=ae?Ar(M[E]):rr(M[E]);_(null,b,O,B,te,q,P,oe,ae)}},N=(M,O,B,te,q,P,oe)=>{const ae=O.el=M.el;let{patchFlag:ce,dynamicChildren:E,dirs:b}=O;ce|=M.patchFlag&16;const k=M.props||Lt,$=O.props||Lt;let j;if(B&&Ls(B,!1),(j=$.onVnodeBeforeUpdate)&&Qi(j,B,O,M),b&&Ps(O,M,B,"beforeUpdate"),B&&Ls(B,!0),E&&(!M.dynamicChildren||M.dynamicChildren.length!==E.length)&&(ce=0,oe=!1,E=null),(k.innerHTML&&$.innerHTML==null||k.textContent&&$.textContent==null)&&u(ae,""),E?x(M.dynamicChildren,E,ae,B,te,vf(O,q),P):oe||G(M,O,ae,null,B,te,vf(O,q),P,!1),ce>0){if(ce&16)R(ae,k,$,B,q);else if(ce&2&&k.class!==$.class&&s(ae,"class",null,$.class,q),ce&4&&s(ae,"style",k.style,$.style,q),ce&8){const se=O.dynamicProps;for(let pe=0;pe<se.length;pe++){const xe=se[pe],fe=k[xe],de=$[xe];(de!==fe||xe==="value")&&s(ae,xe,fe,de,q,B)}}ce&1&&M.children!==O.children&&u(ae,O.children)}else!oe&&E==null&&R(ae,k,$,B,q);((j=$.onVnodeUpdated)||b)&&jn(()=>{j&&Qi(j,B,O,M),b&&Ps(O,M,B,"updated")},te)},x=(M,O,B,te,q,P,oe)=>{for(let ae=0;ae<O.length;ae++){const ce=M[ae],E=O[ae],b=ce.el&&(ce.type===Nt||!js(ce,E)||ce.shapeFlag&198)?h(ce.el):B;_(ce,E,b,null,te,q,P,oe,!0)}},R=(M,O,B,te,q)=>{if(O!==B){if(O!==Lt)for(const P in O)!sl(P)&&!(P in B)&&s(M,P,O[P],null,q,te);for(const P in B){if(sl(P))continue;const oe=B[P],ae=O[P];oe!==ae&&P!=="value"&&s(M,P,ae,oe,q,te)}"value"in B&&s(M,"value",O.value,B.value,q)}},F=(M,O,B,te,q,P,oe,ae,ce)=>{const E=O.el=M?M.el:a(""),b=O.anchor=M?M.anchor:a("");let{patchFlag:k,dynamicChildren:$,slotScopeIds:j}=O;j&&(ae=ae?ae.concat(j):j),M==null?(i(E,B,te),i(b,B,te),I(O.children||[],B,b,q,P,oe,ae,ce)):k>0&&k&64&&$&&M.dynamicChildren&&M.dynamicChildren.length===$.length?(x(M.dynamicChildren,$,B,q,P,oe,ae),(O.key!=null||q&&O===q.subTree)&&w0(M,O,!0)):G(M,O,B,b,q,P,oe,ae,ce)},ne=(M,O,B,te,q,P,oe,ae,ce)=>{O.slotScopeIds=ae,M==null?O.shapeFlag&512?q.ctx.activate(O,B,te,oe,ce):U(O,B,te,q,P,oe,ce):K(M,O,ce)},U=(M,O,B,te,q,P,oe)=>{const ae=M.component=kS(M,te,q);if($u(M)&&(ae.ctx.renderer=it),BS(ae,!1,oe),ae.asyncDep){if(q&&q.registerDep(ae,W,oe),!M.el){const ce=ae.subTree=Ue(Cn);p(null,ce,O,B),M.placeholder=ce.el}}else W(ae,M,O,B,q,P,oe)},K=(M,O,B)=>{const te=O.component=M.component;if(yS(M,O,B))if(te.asyncDep&&!te.asyncResolved){X(te,O,B);return}else te.next=O,te.update();else O.el=M.el,te.vnode=O},W=(M,O,B,te,q,P,oe)=>{const ae=()=>{if(M.isMounted){let{next:k,bu:$,u:j,parent:se,vnode:pe}=M;{const le=A0(M);if(le){k&&(k.el=pe.el,X(M,k,oe)),le.asyncDep.then(()=>{jn(()=>{M.isUnmounted||E()},q)});return}}let xe=k,fe;Ls(M,!1),k?(k.el=pe.el,X(M,k,oe)):k=pe,$&&Yc($),(fe=k.props&&k.props.onVnodeBeforeUpdate)&&Qi(fe,se,k,pe),Ls(M,!0);const de=Dp(M),Ge=M.subTree;M.subTree=de,_(Ge,de,h(Ge.el),Pe(Ge),M,q,P),k.el=de.el,xe===null&&SS(M,de.el),j&&jn(j,q),(fe=k.props&&k.props.onVnodeUpdated)&&jn(()=>Qi(fe,se,k,pe),q)}else{let k;const{el:$,props:j}=O,{bm:se,m:pe,parent:xe,root:fe,type:de}=M,Ge=aa(O);Ls(M,!1),se&&Yc(se),!Ge&&(k=j&&j.onVnodeBeforeMount)&&Qi(k,xe,O),Ls(M,!0);{fe.ce&&fe.ce._hasShadowRoot()&&fe.ce._injectChildStyle(de,M.parent?M.parent.type:void 0);const le=M.subTree=Dp(M);_(null,le,B,te,M,q,P),O.el=le.el}if(pe&&jn(pe,q),!Ge&&(k=j&&j.onVnodeMounted)){const le=O;jn(()=>Qi(k,xe,le),q)}(O.shapeFlag&256||xe&&aa(xe.vnode)&&xe.vnode.shapeFlag&256)&&M.a&&jn(M.a,q),M.isMounted=!0,O=B=te=null}};M.scope.on();const ce=M.effect=new U_(ae);M.scope.off();const E=M.update=ce.run.bind(ce),b=M.job=ce.runIfDirty.bind(ce);b.i=M,b.id=M.uid,ce.scheduler=()=>Ld(b),Ls(M,!0),E()},X=(M,O,B)=>{O.component=M;const te=M.vnode.props;M.vnode=O,M.next=null,bS(M,O.props,te,B),AS(M,O.children,B),kr(),Ep(M),Br()},G=(M,O,B,te,q,P,oe,ae,ce=!1)=>{const E=M&&M.children,b=M?M.shapeFlag:0,k=O.children,{patchFlag:$,shapeFlag:j}=O;if($>0){if($&128){L(E,k,B,te,q,P,oe,ae,ce);return}else if($&256){re(E,k,B,te,q,P,oe,ae,ce);return}}j&8?(b&16&&ve(E,q,P),k!==E&&u(B,k)):b&16?j&16?L(E,k,B,te,q,P,oe,ae,ce):ve(E,q,P,!0):(b&8&&u(B,""),j&16&&I(k,B,te,q,P,oe,ae,ce))},re=(M,O,B,te,q,P,oe,ae,ce)=>{M=M||sa,O=O||sa;const E=M.length,b=O.length,k=Math.min(E,b);let $;for($=0;$<k;$++){const j=O[$]=ce?Ar(O[$]):rr(O[$]);_(M[$],j,B,null,q,P,oe,ae,ce)}E>b?ve(M,q,P,!0,!1,k):I(O,B,te,q,P,oe,ae,ce,k)},L=(M,O,B,te,q,P,oe,ae,ce)=>{let E=0;const b=O.length;let k=M.length-1,$=b-1;for(;E<=k&&E<=$;){const j=M[E],se=O[E]=ce?Ar(O[E]):rr(O[E]);if(js(j,se))_(j,se,B,null,q,P,oe,ae,ce);else break;E++}for(;E<=k&&E<=$;){const j=M[k],se=O[$]=ce?Ar(O[$]):rr(O[$]);if(js(j,se))_(j,se,B,null,q,P,oe,ae,ce);else break;k--,$--}if(E>k){if(E<=$){const j=$+1,se=j<b?O[j].el:te;for(;E<=$;)_(null,O[E]=ce?Ar(O[E]):rr(O[E]),B,se,q,P,oe,ae,ce),E++}}else if(E>$)for(;E<=k;)_e(M[E],q,P,!0),E++;else{const j=E,se=E,pe=new Map;for(E=se;E<=$;E++){const Re=O[E]=ce?Ar(O[E]):rr(O[E]);Re.key!=null&&pe.set(Re.key,E)}let xe,fe=0;const de=$-se+1;let Ge=!1,le=0;const _t=new Array(de);for(E=0;E<de;E++)_t[E]=0;for(E=j;E<=k;E++){const Re=M[E];if(fe>=de){_e(Re,q,P,!0);continue}let Ae;if(Re.key!=null)Ae=pe.get(Re.key);else for(xe=se;xe<=$;xe++)if(_t[xe-se]===0&&js(Re,O[xe])){Ae=xe;break}Ae===void 0?_e(Re,q,P,!0):(_t[Ae-se]=E+1,Ae>=le?le=Ae:Ge=!0,_(Re,O[Ae],B,null,q,P,oe,ae,ce),fe++)}const qe=Ge?LS(_t):sa;for(xe=qe.length-1,E=de-1;E>=0;E--){const Re=se+E,Ae=O[Re],Le=O[Re+1],et=Re+1<b?Le.el||C0(Le):te;_t[E]===0?_(null,Ae,B,et,q,P,oe,ae,ce):Ge&&(xe<0||E!==qe[xe]?ue(Ae,B,et,2):xe--)}}},ue=(M,O,B,te,q=null)=>{const{el:P,type:oe,transition:ae,children:ce,shapeFlag:E}=M;if(E&6){ue(M.component.subTree,O,B,te);return}if(E&128){M.suspense.move(O,B,te);return}if(E&64){oe.move(M,O,B,it);return}if(oe===Nt){i(P,O,B);for(let k=0;k<ce.length;k++)ue(ce[k],O,B,te);i(M.anchor,O,B);return}if(oe===jc){v(M,O,B);return}if(te!==2&&E&1&&ae)if(te===0)ae.persisted&&!P[Li]?i(P,O,B):(ae.beforeEnter(P),i(P,O,B),jn(()=>ae.enter(P),q));else{const{leave:k,delayLeave:$,afterLeave:j}=ae,se=()=>{M.ctx.isUnmounted?r(P):i(P,O,B)},pe=()=>{const xe=P._isLeaving||!!P[Li];P._isLeaving&&P[Li](!0),ae.persisted&&!xe?se():k(P,()=>{se(),j&&j()})};$?$(P,se,pe):pe()}else i(P,O,B)},_e=(M,O,B,te=!1,q=!1)=>{const{type:P,props:oe,ref:ae,children:ce,dynamicChildren:E,shapeFlag:b,patchFlag:k,dirs:$,cacheIndex:j,memo:se}=M;if(k===-2&&(q=!1),ae!=null&&(kr(),cl(ae,null,B,M,!0),Br()),j!=null&&(O.renderCache[j]=void 0),b&256){O.ctx.deactivate(M);return}const pe=b&1&&$,xe=!aa(M);let fe;if(xe&&(fe=oe&&oe.onVnodeBeforeUnmount)&&Qi(fe,O,M),b&6)he(M.component,B,te);else{if(b&128){M.suspense.unmount(B,te);return}pe&&Ps(M,null,O,"beforeUnmount"),b&64?M.type.remove(M,O,B,it,te):E&&!E.hasOnce&&(P!==Nt||k>0&&k&64)?ve(E,O,B,!1,!0):(P===Nt&&k&384||!q&&b&16)&&ve(ce,O,B),te&&Ve(M)}const de=se!=null&&j==null;(xe&&(fe=oe&&oe.onVnodeUnmounted)||pe||de)&&jn(()=>{fe&&Qi(fe,O,M),pe&&Ps(M,null,O,"unmounted"),de&&(M.el=null)},B)},Ve=M=>{const{type:O,el:B,anchor:te,transition:q}=M;if(O===Nt){Z(B,te);return}if(O===jc){S(M);return}const P=()=>{r(B),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(M.shapeFlag&1&&q&&!q.persisted){const{leave:oe,delayLeave:ae}=q,ce=()=>oe(B,P);ae?ae(M.el,P,ce):ce()}else P()},Z=(M,O)=>{let B;for(;M!==O;)B=d(M),r(M),M=B;r(O)},he=(M,O,B)=>{const{bum:te,scope:q,job:P,subTree:oe,um:ae,m:ce,a:E}=M;Np(ce),Np(E),te&&Yc(te),q.stop(),P&&(P.flags|=8,_e(oe,M,O,B)),ae&&jn(ae,O),jn(()=>{M.isUnmounted=!0},O)},ve=(M,O,B,te=!1,q=!1,P=0)=>{for(let oe=P;oe<M.length;oe++)_e(M[oe],O,B,te,q)},Pe=M=>{if(M.shapeFlag&6)return Pe(M.component.subTree);if(M.shapeFlag&128)return M.suspense.next();const O=d(M.anchor||M.el),B=O&&O[Xy];return B?d(B):O};let Ce=!1;const be=(M,O,B)=>{let te;M==null?O._vnode&&(_e(O._vnode,null,null,!0),te=O._vnode.component):_(O._vnode||null,M,O,null,null,null,B),O._vnode=M,Ce||(Ce=!0,Ep(te),Z_(),Ce=!1)},it={p:_,um:_e,m:ue,r:Ve,mt:U,mc:I,pc:G,pbc:x,n:Pe,o:n};return{render:be,hydrate:void 0,createApp:pS(be)}}function vf({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ls({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function PS(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function w0(n,e,t=!1){const i=n.children,r=e.children;if(Ke(i)&&Ke(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ar(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&w0(o,a)),a.type===Ku&&(a.patchFlag===-1&&(a=r[s]=Ar(a)),a.el=o.el),a.type===Cn&&!a.el&&(a.el=o.el)}}function LS(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function A0(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:A0(e)}function Np(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function C0(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?C0(e.subTree):null}const R0=n=>n.__isSuspense;function DS(n,e){e&&e.pendingBranch?Ke(n)?e.effects.push(...n):e.effects.push(n):zy(n)}const Nt=Symbol.for("v-fgt"),Ku=Symbol.for("v-txt"),Cn=Symbol.for("v-cmt"),jc=Symbol.for("v-stc"),Or=[];let mi=null;function He(n=!1){Or.push(mi=n?null:[])}function Ud(){Or.pop(),mi=Or[Or.length-1]||null}let Cl=1;function pu(n,e=!1){Cl+=n,n<0&&mi&&e&&(mi.hasOnce=!0)}function P0(n){return n.dynamicChildren=Cl>0?mi||sa:null,Ud(),Cl>0&&mi&&mi.push(n),n}function st(n,e,t,i,r,s){return P0(D(n,e,t,i,r,s,!0))}function An(n,e,t,i,r){return P0(Ue(n,e,t,i,r,!0))}function Rl(n){return n?n.__v_isVNode===!0:!1}function js(n,e){return n.type===e.type&&n.key===e.key}const L0=({key:n})=>n??null,Kc=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Vt(n)||Dn(n)||rt(n)?{i:_n,r:n,k:e,f:!!t}:n:null);function D(n,e=null,t=null,i=0,r=null,s=n===Nt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&L0(e),ref:e&&Kc(e),scopeId:Q_,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:_n};return a?(mu(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Vt(t)?8:16),Cl>0&&!o&&mi&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&mi.push(l),l}const Ue=IS;function IS(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===u0)&&(n=Cn),Rl(n)){const a=xs(n,e,!0);return t&&mu(a,t),Cl>0&&!s&&mi&&(a.shapeFlag&6?mi[mi.indexOf(n)]=a:mi.push(a)),a.patchFlag=-2,a}if(WS(n)&&(n=n.__vccOpts),e){e=US(e);let{class:a,style:l}=e;a&&!Vt(a)&&(e.class=gn(a)),St(l)&&(Pd(l)&&!Ke(l)&&(l=ln({},l)),e.style=ji(l))}const o=Vt(n)?1:R0(n)?128:Xu(n)?64:St(n)?4:rt(n)?2:0;return D(n,e,t,i,r,o,s,!0)}function US(n){return n?Pd(n)||y0(n)?ln({},n):n:null}function xs(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?NS(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&L0(c),ref:e&&e.ref?t&&s?Ke(s)?s.concat(Kc(e)):[s,Kc(e)]:Kc(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Nt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&xs(n.ssContent),ssFallback:n.ssFallback&&xs(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Al(u,l.clone(u)),u}function an(n=" ",e=0){return Ue(Ku,null,n,e)}function so(n,e){const t=Ue(jc,null,n);return t.staticCount=e,t}function ys(n="",e=!1){return e?(He(),An(Cn,null,n)):Ue(Cn,null,n)}function rr(n){return n==null||typeof n=="boolean"?Ue(Cn):Ke(n)?Ue(Nt,null,n.slice()):Rl(n)?Ar(n):Ue(Ku,null,String(n))}function Ar(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:xs(n)}function mu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ke(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),mu(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!y0(e)?e._ctx=_n:r===3&&_n&&(_n.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(rt(e)){if(i&65){mu(n,{default:e});return}e={default:e,_ctx:_n},t=32}else e=String(e),i&64?(t=16,e=[an(e)]):t=8;n.children=e,n.shapeFlag|=t}function NS(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=gn([e.class,i.class]));else if(r==="style")e.style=ji([e.style,i.style]);else if(Fu(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ke(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!ku(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function Qi(n,e,t,i=null){zi(n,e,7,[t,i])}const OS=m0();let FS=0;function kS(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||OS,s={uid:FS++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new cy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:M0(i,r),emitsOptions:g0(i,r),emit:null,emitted:null,propsDefaults:Lt,inheritAttrs:i.inheritAttrs,ctx:Lt,data:Lt,props:Lt,attrs:Lt,slots:Lt,refs:Lt,setupState:Lt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=gS.bind(null,s),n.ce&&n.ce(s),s}let Rn=null;const D0=()=>Rn||_n;let gu,Pl;{const n=Hu(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};gu=e("__VUE_INSTANCE_SETTERS__",t=>Rn=t),Pl=e("__VUE_SSR_SETTERS__",t=>Ll=t)}const Yl=n=>{const e=Rn;return gu(n),n.scope.on(),()=>{n.scope.off(),gu(e)}},Op=()=>{Rn&&Rn.scope.off(),gu(null)};function I0(n){return n.vnode.shapeFlag&4}let Ll=!1;function BS(n,e=!1,t=!1){e&&Pl(e);const{props:i,children:r}=n.vnode,s=I0(n);MS(n,i,s,e),wS(n,r,t||e);const o=s?zS(n,e):void 0;return e&&Pl(!1),o}function zS(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,aS);const{setup:i}=t;if(i){kr();const r=n.setupContext=i.length>1?GS(n):null,s=Yl(n),o=$l(i,n,0,[n.props,r]),a=A_(o);if(Br(),s(),(a||n.sp)&&!aa(n)&&a0(n),a){if(o.then(Op,Op),e)return o.then(l=>{Pl(!0);try{Fp(n,l,e)}finally{Pl(!1)}}).catch(l=>{Wu(l,n,0)});n.asyncDep=o}else Fp(n,o)}else U0(n)}function Fp(n,e,t){rt(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:St(e)&&(n.setupState=q_(e)),U0(n)}function U0(n,e,t){const i=n.type;n.render||(n.render=i.render||fr);{const r=Yl(n);kr();try{lS(n)}finally{Br(),r()}}}const HS={get(n,e){return wn(n,"get",""),n[e]}};function GS(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,HS),slots:n.slots,emit:n.emit,expose:e}}function Zu(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(q_(Ry(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ul)return ul[t](n)},has(e,t){return t in e||t in ul}})):n.proxy}function VS(n,e=!0){return rt(n)?n.displayName||n.name:n.name||e&&n.__name}function WS(n){return rt(n)&&"__vccOpts"in n}const XS=(n,e)=>Uy(n,e,Ll);function Nh(n,e,t){try{pu(-1);const i=arguments.length;return i===2?St(e)&&!Ke(e)?Rl(e)?Ue(n,null,[e]):Ue(n,e):Ue(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Rl(t)&&(t=[t]),Ue(n,e,t))}finally{pu(1)}}const $S="3.5.42";/**
* @vue/runtime-dom v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oh;const kp=typeof window<"u"&&window.trustedTypes;if(kp)try{Oh=kp.createPolicy("vue",{createHTML:n=>n})}catch{}const N0=Oh?n=>Oh.createHTML(n):n=>n,YS="http://www.w3.org/2000/svg",qS="http://www.w3.org/1998/Math/MathML",Tr=typeof document<"u"?document:null,Bp=Tr&&Tr.createElement("template"),jS={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Tr.createElementNS(YS,n):e==="mathml"?Tr.createElementNS(qS,n):t?Tr.createElement(n,{is:t}):Tr.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Tr.createTextNode(n),createComment:n=>Tr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Tr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Bp.innerHTML=N0(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Bp.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},qr="transition",Na="animation",Dl=Symbol("_vtc"),O0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},KS=ln({},n0,O0),ZS=n=>(n.displayName="Transition",n.props=KS,n),F0=ZS((n,{slots:e})=>Nh(qy,JS(n),e)),Ds=(n,e=[])=>{Ke(n)?n.forEach(t=>t(...e)):n&&n(...e)},zp=n=>n?Ke(n)?n.some(e=>e.length>1):n.length>1:!1;function JS(n){const e={};for(const F in n)F in O0||(e[F]=n[F]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:f=`${t}-leave-to`}=n,g=QS(r),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:y,onEnterCancelled:v,onLeave:S,onLeaveCancelled:w,onBeforeAppear:C=p,onAppear:T=y,onAppearCancelled:I=v}=e,N=(F,ne,U,K)=>{F._enterCancelled=K,Is(F,ne?u:a),Is(F,ne?c:o),U&&U()},x=(F,ne)=>{F._isLeaving=!1,Is(F,h),Is(F,f),Is(F,d),ne&&ne()},R=F=>(ne,U)=>{const K=F?T:y,W=()=>N(ne,F,U);Ds(K,[ne,W]),Hp(()=>{Is(ne,F?l:s),_r(ne,F?u:a),zp(K)||Gp(ne,i,_,W)})};return ln(e,{onBeforeEnter(F){Ds(p,[F]),_r(F,s),_r(F,o)},onBeforeAppear(F){Ds(C,[F]),_r(F,l),_r(F,c)},onEnter:R(!1),onAppear:R(!0),onLeave(F,ne){F._isLeaving=!0;const U=()=>x(F,ne);_r(F,h),F._enterCancelled?(_r(F,d),Xp(F)):(Xp(F),_r(F,d)),Hp(()=>{F._isLeaving&&(Is(F,h),_r(F,f),zp(S)||Gp(F,i,m,U))}),Ds(S,[F,U])},onEnterCancelled(F){N(F,!1,void 0,!0),Ds(v,[F])},onAppearCancelled(F){N(F,!0,void 0,!0),Ds(I,[F])},onLeaveCancelled(F){x(F),Ds(w,[F])}})}function QS(n){if(n==null)return null;if(St(n))return[xf(n.enter),xf(n.leave)];{const e=xf(n);return[e,e]}}function xf(n){return ty(n)}function _r(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Dl]||(n[Dl]=new Set)).add(e)}function Is(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Dl];t&&(t.delete(e),t.size||(n[Dl]=void 0))}function Hp(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let eM=0;function Gp(n,e,t,i){const r=n._endId=++eM,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=tM(n,e);if(!o)return i();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,d),s()},d=f=>{f.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,d)}function tM(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),r=i(`${qr}Delay`),s=i(`${qr}Duration`),o=Vp(r,s),a=i(`${Na}Delay`),l=i(`${Na}Duration`),c=Vp(a,l);let u=null,h=0,d=0;e===qr?o>0&&(u=qr,h=o,d=s.length):e===Na?c>0&&(u=Na,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?qr:Na:null,d=u?u===qr?s.length:l.length:0);const f=u===qr&&/\b(?:transform|all)(?:,|$)/.test(i(`${qr}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function Vp(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Wp(t)+Wp(n[i])))}function Wp(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Xp(n){return(n?n.ownerDocument:document).body.offsetHeight}function nM(n,e,t){const i=n[Dl];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const $p=Symbol("_vod"),iM=Symbol("_vsh"),rM=Symbol(""),sM=/(?:^|;)\s*display\s*:/;function oM(n,e,t){const i=n.style,r=Vt(t);let s=!1;if(t&&!r){if(e)if(Vt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Ka(i,a,"")}else for(const o in e)t[o]==null&&Ka(i,o,"");for(const o in t){o==="display"&&(s=!0);const a=t[o];a!=null?lM(n,o,!Vt(e)&&e?e[o]:void 0,a)||Ka(i,o,a):Ka(i,o,"")}}else if(r){if(e!==t){const o=i[rM];o&&(t+=";"+o),i.cssText=t,s=sM.test(t)}}else e&&n.removeAttribute("style");$p in n&&(n[$p]=s?i.display:"",n[iM]&&(i.display="none"))}const nc=/\s*!important$/;function Ka(n,e,t){if(Ke(t))t.forEach(i=>Ka(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))nc.test(t)?n.setProperty(e,t.replace(nc,""),"important"):n.setProperty(e,t);else{const i=aM(n,e);nc.test(t)?n.setProperty(yo(i),t.replace(nc,""),"important"):n[i]=t}}const Yp=["Webkit","Moz","ms"],yf={};function aM(n,e){const t=yf[e];if(t)return t;let i=$n(e);if(i!=="filter"&&i in n)return yf[e]=i;i=zu(i);for(let r=0;r<Yp.length;r++){const s=Yp[r]+i;if(s in n)return yf[e]=s}return e}function lM(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Vt(i)&&t===i}const qp="http://www.w3.org/1999/xlink";function jp(n,e,t,i,r,s=ay(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(qp,e.slice(6,e.length)):n.setAttributeNS(qp,e,t):t==null||s&&!L_(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Zi(t)?String(t):t)}function Kp(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?N0(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=L_(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Zo(n,e,t,i){n.addEventListener(e,t,i)}function cM(n,e,t,i){n.removeEventListener(e,t,i)}const Zp=Symbol("_vei");function uM(n,e,t,i,r=null){const s=n[Zp]||(n[Zp]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=dM(e);if(i){const c=s[e]=gM(i,r);Zo(n,a,c,l)}else o&&(cM(n,a,o,l),s[e]=void 0)}}const fM=/(Once|Passive|Capture)$/,hM=/^on:?(?:Once|Passive|Capture)$/;function dM(n){let e,t;for(;(t=n.match(fM))&&!hM.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):yo(n.slice(2)),e]}let Sf=0;const pM=Promise.resolve(),mM=()=>Sf||(pM.then(()=>Sf=0),Sf=Date.now());function gM(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const r=t.value;if(Ke(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const o=r.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&zi(c,e,5,a)}}else zi(r,e,5,[i])};return t.value=n,t.attached=mM(),t}const Jp=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,_M=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?nM(n,i,o):e==="style"?oM(n,t,i):Fu(e)?ku(e)||uM(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vM(n,e,i,o))?(Kp(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&jp(n,e,i,o,s,e!=="value")):n._isVueCE&&(xM(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Vt(i)))?Kp(n,$n(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),jp(n,e,i,o))};function vM(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Jp(e)&&rt(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Jp(e)&&Vt(t)?!1:e in n}function xM(n,e){const t=n._def.props;if(!t)return!1;const i=$n(e);return Array.isArray(t)?t.some(r=>$n(r)===i):Object.keys(t).some(r=>$n(r)===i)}const Qp=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ke(e)?t=>Yc(e,t):e};function yM(n){n.target.composing=!0}function em(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ic=Symbol("_assign"),rc=Symbol("_initialValue");function Mf(n,e,t){return e&&(n=n.trim()),t&&(n=bd(n)),n}const Qs={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n.parentNode&&(n.type==="text"?n[rc]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[rc]=n.defaultValue.replace(/\r\n?/g,`
`))),n[ic]=Qp(r);const s=i||r.props&&r.props.type==="number";Zo(n,e?"change":"input",o=>{o.target.composing||n[ic](Mf(n.value,t,s))}),(t||s)&&Zo(n,"change",()=>{n.value=Mf(n.value,t,s)}),e||(Zo(n,"compositionstart",yM),Zo(n,"compositionend",em),Zo(n,"change",em))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const r=e??"",s=n[rc];delete n[rc],s!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==s?n[ic](Mf(n.value,t,i)):n.value=r},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[ic]=Qp(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?bd(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l)}},SM=["ctrl","shift","alt","meta"],MM={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>SM.some(t=>n[`${t}Key`]&&!e.includes(t))},Ri=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=MM[e[o]];if(a&&a(r,e))return}return n(r,...s)})},bM=ln({patchProp:_M},jS);let tm;function EM(){return tm||(tm=CS(bM))}const TM=(...n)=>{const e=EM().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=AM(i);if(!r)return;const s=e._component;!rt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,wM(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function wM(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function AM(n){return Vt(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nd="162",CM=0,nm=1,RM=2,k0=1,PM=2,br=3,Hr=0,Yn=1,Lr=2,hs=0,ca=1,fl=2,im=3,rm=4,LM=5,Ks=100,DM=101,IM=102,sm=103,om=104,UM=200,NM=201,OM=202,FM=203,Fh=204,kh=205,kM=206,BM=207,zM=208,HM=209,GM=210,VM=211,WM=212,XM=213,$M=214,YM=0,qM=1,jM=2,_u=3,KM=4,ZM=5,JM=6,QM=7,B0=0,eb=1,tb=2,ds=0,nb=1,ib=2,rb=3,z0=4,sb=5,ob=6,ab=7,H0=300,xa=301,ya=302,vu=303,Bh=304,Ju=306,zh=1e3,$i=1001,Hh=1002,Vn=1003,am=1004,Oa=1005,Zn=1006,bf=1007,eo=1008,ps=1009,lb=1010,cb=1011,Od=1012,G0=1013,ss=1014,Dr=1015,Il=1016,V0=1017,W0=1018,oo=1020,ub=1021,Yi=1023,fb=1024,hb=1025,ao=1026,Sa=1027,db=1028,X0=1029,pb=1030,$0=1031,Y0=1033,Ef=33776,Tf=33777,wf=33778,Af=33779,lm=35840,cm=35841,um=35842,fm=35843,q0=36196,hm=37492,dm=37496,pm=37808,mm=37809,gm=37810,_m=37811,vm=37812,xm=37813,ym=37814,Sm=37815,Mm=37816,bm=37817,Em=37818,Tm=37819,wm=37820,Am=37821,Cf=36492,Cm=36494,Rm=36495,mb=36283,Pm=36284,Lm=36285,Dm=36286,gb=3200,_b=3201,vb=0,xb=1,rs="",Xi="srgb",Ts="srgb-linear",Fd="display-p3",Qu="display-p3-linear",xu="linear",Ft="srgb",yu="rec709",Su="p3",To=7680,Im=519,yb=512,Sb=513,Mb=514,j0=515,bb=516,Eb=517,Tb=518,wb=519,Gh=35044,Um="300 es",Vh=1035,Ur=2e3,Mu=2001;class Pa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rf=Math.PI/180,Wh=180/Math.PI;function ms(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]).toLowerCase()}function Jn(n,e,t){return Math.max(e,Math.min(t,n))}function Ab(n,e){return(n%e+e)%e}function Pf(n,e,t){return(1-t)*n+t*e}function Nm(n){return(n&n-1)===0&&n!==0}function Xh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ar(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Jn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,i,r,s,o,a,l,c){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],_=r[0],m=r[3],p=r[6],y=r[1],v=r[4],S=r[7],w=r[2],C=r[5],T=r[8];return s[0]=o*_+a*y+l*w,s[3]=o*m+a*v+l*C,s[6]=o*p+a*S+l*T,s[1]=c*_+u*y+h*w,s[4]=c*m+u*v+h*C,s[7]=c*p+u*S+h*T,s[2]=d*_+f*y+g*w,s[5]=d*m+f*v+g*C,s[8]=d*p+f*S+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,f=c*s-o*l,g=t*h+i*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Lf.makeScale(e,t)),this}rotate(e){return this.premultiply(Lf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lf=new lt;function K0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function bu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Cb(){const n=bu("canvas");return n.style.display="block",n}const Om={};function Z0(n){n in Om||(Om[n]=!0,console.warn(n))}const Fm=new lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),km=new lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),sc={[Ts]:{transfer:xu,primaries:yu,toReference:n=>n,fromReference:n=>n},[Xi]:{transfer:Ft,primaries:yu,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Qu]:{transfer:xu,primaries:Su,toReference:n=>n.applyMatrix3(km),fromReference:n=>n.applyMatrix3(Fm)},[Fd]:{transfer:Ft,primaries:Su,toReference:n=>n.convertSRGBToLinear().applyMatrix3(km),fromReference:n=>n.applyMatrix3(Fm).convertLinearToSRGB()}},Rb=new Set([Ts,Qu]),At={enabled:!0,_workingColorSpace:Ts,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Rb.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=sc[e].toReference,r=sc[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return sc[n].primaries},getTransfer:function(n){return n===rs?xu:sc[n].transfer}};function ua(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Df(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let wo;class J0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wo===void 0&&(wo=bu("canvas")),wo.width=e.width,wo.height=e.height;const i=wo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=wo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ua(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ua(t[i]/255)*255):t[i]=ua(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Pb=0;class Q0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pb++}),this.uuid=ms(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(If(r[o].image)):s.push(If(r[o]))}else s=If(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function If(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?J0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lb=0;class qn extends Pa{constructor(e=qn.DEFAULT_IMAGE,t=qn.DEFAULT_MAPPING,i=$i,r=$i,s=Zn,o=eo,a=Yi,l=ps,c=qn.DEFAULT_ANISOTROPY,u=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=ms(),this.name="",this.source=new Q0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==H0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zh:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case Hh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zh:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case Hh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=H0;qn.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,t=0,i=0,r=1){Ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(f+1)/2,w=(p+1)/2,C=(u+d)/4,T=(h+_)/4,I=(g+m)/4;return v>S&&v>w?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=T/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=I/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=T/s,r=I/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Db extends Pa{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new qn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Q0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class go extends Db{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ev extends qn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ib extends qn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ql{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==g){let m=1-a;const p=l*d+c*f+u*g+h*_,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const w=Math.sqrt(v),C=Math.atan2(w,p*y);m=Math.sin(m*C)/w,a=Math.sin(a*C)/w}const S=a*y;if(l=l*m+d*S,c=c*m+f*S,u=u*m+g*S,h=h*m+_*S,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),f=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Uf.copy(this).projectOnVector(e),this.sub(Uf)}reflect(e){return this.sub(Uf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Jn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uf=new H,Bm=new ql;class jl{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hi):Hi.fromBufferAttribute(s,o),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oc.copy(i.boundingBox)),oc.applyMatrix4(e.matrixWorld),this.union(oc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fa),ac.subVectors(this.max,Fa),Ao.subVectors(e.a,Fa),Co.subVectors(e.b,Fa),Ro.subVectors(e.c,Fa),jr.subVectors(Co,Ao),Kr.subVectors(Ro,Co),Us.subVectors(Ao,Ro);let t=[0,-jr.z,jr.y,0,-Kr.z,Kr.y,0,-Us.z,Us.y,jr.z,0,-jr.x,Kr.z,0,-Kr.x,Us.z,0,-Us.x,-jr.y,jr.x,0,-Kr.y,Kr.x,0,-Us.y,Us.x,0];return!Nf(t,Ao,Co,Ro,ac)||(t=[1,0,0,0,1,0,0,0,1],!Nf(t,Ao,Co,Ro,ac))?!1:(lc.crossVectors(jr,Kr),t=[lc.x,lc.y,lc.z],Nf(t,Ao,Co,Ro,ac))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vr=[new H,new H,new H,new H,new H,new H,new H,new H],Hi=new H,oc=new jl,Ao=new H,Co=new H,Ro=new H,jr=new H,Kr=new H,Us=new H,Fa=new H,ac=new H,lc=new H,Ns=new H;function Nf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ns.fromArray(n,s);const a=r.x*Math.abs(Ns.x)+r.y*Math.abs(Ns.y)+r.z*Math.abs(Ns.z),l=e.dot(Ns),c=t.dot(Ns),u=i.dot(Ns);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ub=new jl,ka=new H,Of=new H;class Kl{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ub.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ka.subVectors(e,this.center);const t=ka.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ka,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Of.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ka.copy(e.center).add(Of)),this.expandByPoint(ka.copy(e.center).sub(Of))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xr=new H,Ff=new H,cc=new H,Zr=new H,kf=new H,uc=new H,Bf=new H;class kd{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xr.copy(this.origin).addScaledVector(this.direction,t),xr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ff.copy(e).add(t).multiplyScalar(.5),cc.copy(t).sub(e).normalize(),Zr.copy(this.origin).sub(Ff);const s=e.distanceTo(t)*.5,o=-this.direction.dot(cc),a=Zr.dot(this.direction),l=-Zr.dot(cc),c=Zr.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ff).addScaledVector(cc,d),f}intersectSphere(e,t){xr.subVectors(e.center,this.origin);const i=xr.dot(this.direction),r=xr.dot(xr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,xr)!==null}intersectTriangle(e,t,i,r,s){kf.subVectors(t,e),uc.subVectors(i,e),Bf.crossVectors(kf,uc);let o=this.direction.dot(Bf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zr.subVectors(this.origin,e);const l=a*this.direction.dot(uc.crossVectors(Zr,uc));if(l<0)return null;const c=a*this.direction.dot(kf.cross(Zr));if(c<0||l+c>o)return null;const u=-a*Zr.dot(Bf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(e,t,i,r,s,o,a,l,c,u,h,d,f,g,_,m){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,d,f,g,_,m)}set(e,t,i,r,s,o,a,l,c,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Po.setFromMatrixColumn(e,0).length(),s=1/Po.setFromMatrixColumn(e,1).length(),o=1/Po.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nb,e,Ob)}lookAt(e,t,i){const r=this.elements;return oi.subVectors(e,t),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),Jr.crossVectors(i,oi),Jr.lengthSq()===0&&(Math.abs(i.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),Jr.crossVectors(i,oi)),Jr.normalize(),fc.crossVectors(oi,Jr),r[0]=Jr.x,r[4]=fc.x,r[8]=oi.x,r[1]=Jr.y,r[5]=fc.y,r[9]=oi.y,r[2]=Jr.z,r[6]=fc.z,r[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],y=i[3],v=i[7],S=i[11],w=i[15],C=r[0],T=r[4],I=r[8],N=r[12],x=r[1],R=r[5],F=r[9],ne=r[13],U=r[2],K=r[6],W=r[10],X=r[14],G=r[3],re=r[7],L=r[11],ue=r[15];return s[0]=o*C+a*x+l*U+c*G,s[4]=o*T+a*R+l*K+c*re,s[8]=o*I+a*F+l*W+c*L,s[12]=o*N+a*ne+l*X+c*ue,s[1]=u*C+h*x+d*U+f*G,s[5]=u*T+h*R+d*K+f*re,s[9]=u*I+h*F+d*W+f*L,s[13]=u*N+h*ne+d*X+f*ue,s[2]=g*C+_*x+m*U+p*G,s[6]=g*T+_*R+m*K+p*re,s[10]=g*I+_*F+m*W+p*L,s[14]=g*N+_*ne+m*X+p*ue,s[3]=y*C+v*x+S*U+w*G,s[7]=y*T+v*R+S*K+w*re,s[11]=y*I+v*F+S*W+w*L,s[15]=y*N+v*ne+S*X+w*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*f-i*l*f)+_*(+t*l*f-t*c*d+s*o*d-r*o*f+r*c*u-s*l*u)+m*(+t*c*h-t*a*f-s*o*h+i*o*f+s*a*u-i*c*u)+p*(-r*a*u-t*l*h+t*a*d+r*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=h*m*c-_*d*c+_*l*f-a*m*f-h*l*p+a*d*p,v=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,S=u*_*c-g*h*c+g*a*f-o*_*f-u*a*p+o*h*p,w=g*h*l-u*_*l-g*a*d+o*_*d+u*a*m-o*h*m,C=t*y+i*v+r*S+s*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=y*T,e[1]=(_*d*s-h*m*s-_*r*f+i*m*f+h*r*p-i*d*p)*T,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*p+i*l*p)*T,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*f-i*l*f)*T,e[4]=v*T,e[5]=(u*m*s-g*d*s+g*r*f-t*m*f-u*r*p+t*d*p)*T,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*T,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*f+t*l*f)*T,e[8]=S*T,e[9]=(g*h*s-u*_*s-g*i*f+t*_*f+u*i*p-t*h*p)*T,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*p+t*a*p)*T,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*f-t*a*f)*T,e[12]=w*T,e[13]=(u*_*r-g*h*r+g*i*d-t*_*d-u*i*m+t*h*m)*T,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*T,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*d+t*a*d)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,f=s*u,g=s*h,_=o*u,m=o*h,p=a*h,y=l*c,v=l*u,S=l*h,w=i.x,C=i.y,T=i.z;return r[0]=(1-(_+p))*w,r[1]=(f+S)*w,r[2]=(g-v)*w,r[3]=0,r[4]=(f-S)*C,r[5]=(1-(d+p))*C,r[6]=(m+y)*C,r[7]=0,r[8]=(g+v)*T,r[9]=(m-y)*T,r[10]=(1-(d+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Po.set(r[0],r[1],r[2]).length();const o=Po.set(r[4],r[5],r[6]).length(),a=Po.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gi.copy(this);const c=1/s,u=1/o,h=1/a;return Gi.elements[0]*=c,Gi.elements[1]*=c,Gi.elements[2]*=c,Gi.elements[4]*=u,Gi.elements[5]*=u,Gi.elements[6]*=u,Gi.elements[8]*=h,Gi.elements[9]*=h,Gi.elements[10]*=h,t.setFromRotationMatrix(Gi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ur){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let f,g;if(a===Ur)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Mu)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ur){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-s),d=(t+e)*c,f=(i+r)*u;let g,_;if(a===Ur)g=(o+s)*h,_=-2*h;else if(a===Mu)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Po=new H,Gi=new kt,Nb=new H(0,0,0),Ob=new H(1,1,1),Jr=new H,fc=new H,oi=new H,zm=new kt,Hm=new ql;class Gr{constructor(e=0,t=0,i=0,r=Gr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Jn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Jn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Jn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Jn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return zm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hm.setFromEuler(this),this.setFromQuaternion(Hm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gr.DEFAULT_ORDER="XYZ";let tv=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Fb=0;const Gm=new H,Lo=new ql,yr=new kt,hc=new H,Ba=new H,kb=new H,Bb=new ql,Vm=new H(1,0,0),Wm=new H(0,1,0),Xm=new H(0,0,1),zb={type:"added"},Hb={type:"removed"},zf={type:"childadded",child:null},Hf={type:"childremoved",child:null};class xn extends Pa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fb++}),this.uuid=ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new H,t=new Gr,i=new ql,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new kt},normalMatrix:{value:new lt}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Lo.setFromAxisAngle(e,t),this.quaternion.multiply(Lo),this}rotateOnWorldAxis(e,t){return Lo.setFromAxisAngle(e,t),this.quaternion.premultiply(Lo),this}rotateX(e){return this.rotateOnAxis(Vm,e)}rotateY(e){return this.rotateOnAxis(Wm,e)}rotateZ(e){return this.rotateOnAxis(Xm,e)}translateOnAxis(e,t){return Gm.copy(e).applyQuaternion(this.quaternion),this.position.add(Gm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vm,e)}translateY(e){return this.translateOnAxis(Wm,e)}translateZ(e){return this.translateOnAxis(Xm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?hc.copy(e):hc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yr.lookAt(Ba,hc,this.up):yr.lookAt(hc,Ba,this.up),this.quaternion.setFromRotationMatrix(yr),r&&(yr.extractRotation(r.matrixWorld),Lo.setFromRotationMatrix(yr),this.quaternion.premultiply(Lo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(zb),zf.child=e,this.dispatchEvent(zf),zf.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hb),Hf.child=e,this.dispatchEvent(Hf),Hf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yr.multiply(e.parent.matrixWorld)),e.applyMatrix4(yr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,e,kb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,Bb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}xn.DEFAULT_UP=new H(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vi=new H,Sr=new H,Gf=new H,Mr=new H,Do=new H,Io=new H,$m=new H,Vf=new H,Wf=new H,Xf=new H;class qi{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Vi.subVectors(e,t),r.cross(Vi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Vi.subVectors(r,t),Sr.subVectors(i,t),Gf.subVectors(e,t);const o=Vi.dot(Vi),a=Vi.dot(Sr),l=Vi.dot(Gf),c=Sr.dot(Sr),u=Sr.dot(Gf),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Mr)===null?!1:Mr.x>=0&&Mr.y>=0&&Mr.x+Mr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Mr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Mr.x),l.addScaledVector(o,Mr.y),l.addScaledVector(a,Mr.z),l)}static isFrontFacing(e,t,i,r){return Vi.subVectors(i,t),Sr.subVectors(e,t),Vi.cross(Sr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vi.subVectors(this.c,this.b),Sr.subVectors(this.a,this.b),Vi.cross(Sr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return qi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return qi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Do.subVectors(r,i),Io.subVectors(s,i),Vf.subVectors(e,i);const l=Do.dot(Vf),c=Io.dot(Vf);if(l<=0&&c<=0)return t.copy(i);Wf.subVectors(e,r);const u=Do.dot(Wf),h=Io.dot(Wf);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Do,o);Xf.subVectors(e,s);const f=Do.dot(Xf),g=Io.dot(Xf);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Io,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return $m.subVectors(s,r),a=(h-u)/(h-u+(f-g)),t.copy(r).addScaledVector($m,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(i).addScaledVector(Do,o).addScaledVector(Io,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qr={h:0,s:0,l:0},dc={h:0,s:0,l:0};function $f(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class gt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=At.workingColorSpace){return this.r=e,this.g=t,this.b=i,At.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=At.workingColorSpace){if(e=Ab(e,1),t=Jn(t,0,1),i=Jn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=$f(o,s,e+1/3),this.g=$f(o,s,e),this.b=$f(o,s,e-1/3)}return At.toWorkingColorSpace(this,r),this}setStyle(e,t=Xi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xi){const i=nv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ua(e.r),this.g=ua(e.g),this.b=ua(e.b),this}copyLinearToSRGB(e){return this.r=Df(e.r),this.g=Df(e.g),this.b=Df(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xi){return At.fromWorkingColorSpace(bn.copy(this),e),Math.round(Jn(bn.r*255,0,255))*65536+Math.round(Jn(bn.g*255,0,255))*256+Math.round(Jn(bn.b*255,0,255))}getHexString(e=Xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.fromWorkingColorSpace(bn.copy(this),t);const i=bn.r,r=bn.g,s=bn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=At.workingColorSpace){return At.fromWorkingColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=Xi){At.fromWorkingColorSpace(bn.copy(this),e);const t=bn.r,i=bn.g,r=bn.b;return e!==Xi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Qr),this.setHSL(Qr.h+e,Qr.s+t,Qr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qr),e.getHSL(dc);const i=Pf(Qr.h,dc.h,t),r=Pf(Qr.s,dc.s,t),s=Pf(Qr.l,dc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new gt;gt.NAMES=nv;let Gb=0;class Mo extends Pa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gb++}),this.uuid=ms(),this.name="",this.type="Material",this.blending=ca,this.side=Hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fh,this.blendDst=kh,this.blendEquation=Ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=_u,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Im,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=To,this.stencilZFail=To,this.stencilZPass=To,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ca&&(i.blending=this.blending),this.side!==Hr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fh&&(i.blendSrc=this.blendSrc),this.blendDst!==kh&&(i.blendDst=this.blendDst),this.blendEquation!==Ks&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_u&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Im&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==To&&(i.stencilFail=this.stencilFail),this.stencilZFail!==To&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==To&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class iv extends Mo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gr,this.combine=B0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new H,pc=new Qe;class ki{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Dr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Z0("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)pc.fromBufferAttribute(this,t),pc.applyMatrix3(e),this.setXY(t,pc.x,pc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ar(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ar(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ar(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ar(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ar(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gh&&(e.usage=this.usage),e}}class rv extends ki{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class sv extends ki{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class xi extends ki{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Vb=0;const Ci=new kt,Yf=new xn,Uo=new H,ai=new jl,za=new jl,fn=new H;class Ti extends Pa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vb++}),this.uuid=ms(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(K0(e)?sv:rv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new lt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,t,i){return Ci.makeTranslation(e,t,i),this.applyMatrix4(Ci),this}scale(e,t,i){return Ci.makeScale(e,t,i),this.applyMatrix4(Ci),this}lookAt(e){return Yf.lookAt(e),Yf.updateMatrix(),this.applyMatrix4(Yf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Uo).negate(),this.translate(Uo.x,Uo.y,Uo.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new xi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];ai.setFromBufferAttribute(s),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];za.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(ai.min,za.min),ai.expandByPoint(fn),fn.addVectors(ai.max,za.max),ai.expandByPoint(fn)):(ai.expandByPoint(za.min),ai.expandByPoint(za.max))}ai.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)fn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(fn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)fn.fromBufferAttribute(a,c),l&&(Uo.fromBufferAttribute(e,c),fn.add(Uo)),r=Math.max(r,i.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ki(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new H,l[I]=new H;const c=new H,u=new H,h=new H,d=new Qe,f=new Qe,g=new Qe,_=new H,m=new H;function p(I,N,x){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,N),h.fromBufferAttribute(i,x),d.fromBufferAttribute(s,I),f.fromBufferAttribute(s,N),g.fromBufferAttribute(s,x),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(R),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(R),a[I].add(_),a[N].add(_),a[x].add(_),l[I].add(m),l[N].add(m),l[x].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let I=0,N=y.length;I<N;++I){const x=y[I],R=x.start,F=x.count;for(let ne=R,U=R+F;ne<U;ne+=3)p(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const v=new H,S=new H,w=new H,C=new H;function T(I){w.fromBufferAttribute(r,I),C.copy(w);const N=a[I];v.copy(N),v.sub(w.multiplyScalar(w.dot(N))).normalize(),S.crossVectors(C,N);const R=S.dot(l[I])<0?-1:1;o.setXYZW(I,v.x,v.y,v.z,R)}for(let I=0,N=y.length;I<N;++I){const x=y[I],R=x.start,F=x.count;for(let ne=R,U=R+F;ne<U;ne+=3)T(e.getX(ne+0)),T(e.getX(ne+1)),T(e.getX(ne+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ki(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,h=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new ki(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ti,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ym=new kt,Os=new kd,mc=new Kl,qm=new H,No=new H,Oo=new H,Fo=new H,qf=new H,gc=new H,_c=new Qe,vc=new Qe,xc=new Qe,jm=new H,Km=new H,Zm=new H,yc=new H,Sc=new H;class Ui extends xn{constructor(e=new Ti,t=new iv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){gc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(qf.fromBufferAttribute(h,e),o?gc.addScaledVector(qf,u):gc.addScaledVector(qf.sub(t),u))}t.add(gc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),mc.copy(i.boundingSphere),mc.applyMatrix4(s),Os.copy(e.ray).recast(e.near),!(mc.containsPoint(Os.origin)===!1&&(Os.intersectSphere(mc,qm)===null||Os.origin.distanceToSquared(qm)>(e.far-e.near)**2))&&(Ym.copy(s).invert(),Os.copy(e.ray).applyMatrix4(Ym),!(i.boundingBox!==null&&Os.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Os)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=y,w=v;S<w;S+=3){const C=a.getX(S),T=a.getX(S+1),I=a.getX(S+2);r=Mc(this,p,e,i,c,u,h,C,T,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);r=Mc(this,o,e,i,c,u,h,y,v,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=y,w=v;S<w;S+=3){const C=S,T=S+1,I=S+2;r=Mc(this,p,e,i,c,u,h,C,T,I),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,v=m+1,S=m+2;r=Mc(this,o,e,i,c,u,h,y,v,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Wb(n,e,t,i,r,s,o,a){let l;if(e.side===Yn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Hr,a),l===null)return null;Sc.copy(a),Sc.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Sc);return c<t.near||c>t.far?null:{distance:c,point:Sc.clone(),object:n}}function Mc(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,No),n.getVertexPosition(l,Oo),n.getVertexPosition(c,Fo);const u=Wb(n,e,t,i,No,Oo,Fo,yc);if(u){r&&(_c.fromBufferAttribute(r,a),vc.fromBufferAttribute(r,l),xc.fromBufferAttribute(r,c),u.uv=qi.getInterpolation(yc,No,Oo,Fo,_c,vc,xc,new Qe)),s&&(_c.fromBufferAttribute(s,a),vc.fromBufferAttribute(s,l),xc.fromBufferAttribute(s,c),u.uv1=qi.getInterpolation(yc,No,Oo,Fo,_c,vc,xc,new Qe)),o&&(jm.fromBufferAttribute(o,a),Km.fromBufferAttribute(o,l),Zm.fromBufferAttribute(o,c),u.normal=qi.getInterpolation(yc,No,Oo,Fo,jm,Km,Zm,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new H,materialIndex:0};qi.getNormal(No,Oo,Fo,h.normal),u.face=h}return u}class Zl extends Ti{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xi(c,3)),this.setAttribute("normal",new xi(u,3)),this.setAttribute("uv",new xi(h,2));function g(_,m,p,y,v,S,w,C,T,I,N){const x=S/T,R=w/I,F=S/2,ne=w/2,U=C/2,K=T+1,W=I+1;let X=0,G=0;const re=new H;for(let L=0;L<W;L++){const ue=L*R-ne;for(let _e=0;_e<K;_e++){const Ve=_e*x-F;re[_]=Ve*y,re[m]=ue*v,re[p]=U,c.push(re.x,re.y,re.z),re[_]=0,re[m]=0,re[p]=C>0?1:-1,u.push(re.x,re.y,re.z),h.push(_e/T),h.push(1-L/I),X+=1}}for(let L=0;L<I;L++)for(let ue=0;ue<T;ue++){const _e=d+ue+K*L,Ve=d+ue+K*(L+1),Z=d+(ue+1)+K*(L+1),he=d+(ue+1)+K*L;l.push(_e,Ve,he),l.push(Ve,Z,he),G+=6}a.addGroup(f,G,N),f+=G,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ma(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Bn(n){const e={};for(let t=0;t<n.length;t++){const i=Ma(n[t]);for(const r in i)e[r]=i[r]}return e}function Xb(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ov(n){return n.getRenderTarget()===null?n.outputColorSpace:At.workingColorSpace}const $b={clone:Ma,merge:Bn};var Yb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pr extends Mo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yb,this.fragmentShader=qb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ma(e.uniforms),this.uniformsGroups=Xb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class av extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=Ur}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const es=new H,Jm=new Qe,Qm=new Qe;class fi extends av{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wh*2*Math.atan(Math.tan(Rf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(es.x,es.y).multiplyScalar(-e/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(es.x,es.y).multiplyScalar(-e/es.z)}getViewSize(e,t){return this.getViewBounds(e,Jm,Qm),t.subVectors(Qm,Jm)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rf*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ko=-90,Bo=1;class jb extends xn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fi(ko,Bo,e,t);r.layers=this.layers,this.add(r);const s=new fi(ko,Bo,e,t);s.layers=this.layers,this.add(s);const o=new fi(ko,Bo,e,t);o.layers=this.layers,this.add(o);const a=new fi(ko,Bo,e,t);a.layers=this.layers,this.add(a);const l=new fi(ko,Bo,e,t);l.layers=this.layers,this.add(l);const c=new fi(ko,Bo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ur)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Mu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class lv extends qn{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:xa,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kb extends go{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new lv(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Zl(5,5,5),s=new pr({name:"CubemapFromEquirect",uniforms:Ma(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yn,blending:hs});s.uniforms.tEquirect.value=t;const o=new Ui(r,s),a=t.minFilter;return t.minFilter===eo&&(t.minFilter=Zn),new jb(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const jf=new H,Zb=new H,Jb=new lt;class Ws{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=jf.subVectors(i,t).cross(Zb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(jf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Jb.getNormalMatrix(e),r=this.coplanarPoint(jf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fs=new Kl,bc=new H;class Bd{constructor(e=new Ws,t=new Ws,i=new Ws,r=new Ws,s=new Ws,o=new Ws){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ur){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],f=r[8],g=r[9],_=r[10],m=r[11],p=r[12],y=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,d-c,m-f,S-p).normalize(),i[1].setComponents(l+s,d+c,m+f,S+p).normalize(),i[2].setComponents(l+o,d+u,m+g,S+y).normalize(),i[3].setComponents(l-o,d-u,m-g,S-y).normalize(),i[4].setComponents(l-a,d-h,m-_,S-v).normalize(),t===Ur)i[5].setComponents(l+a,d+h,m+_,S+v).normalize();else if(t===Mu)i[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(e){return Fs.center.set(0,0,0),Fs.radius=.7071067811865476,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(bc.x=r.normal.x>0?e.max.x:e.min.x,bc.y=r.normal.y>0?e.max.y:e.min.y,bc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(bc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Qb(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const h=c.array,d=c.usage,f=h.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,h,d),c.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,u,h){const d=u.array,f=u._updateRange,g=u.updateRanges;if(n.bindBuffer(h,c),f.count===-1&&g.length===0&&n.bufferSubData(h,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){const p=g[_];t?n.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):n.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}f.count!==-1&&(t?n.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):n.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class ef extends Ti{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*d-o;for(let v=0;v<c;v++){const S=v*h-s;g.push(S,-y,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const v=y+c*p,S=y+c*(p+1),w=y+1+c*(p+1),C=y+1+c*p;f.push(v,S,C),f.push(S,w,C)}this.setIndex(f),this.setAttribute("position",new xi(g,3)),this.setAttribute("normal",new xi(_,3)),this.setAttribute("uv",new xi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ef(e.width,e.height,e.widthSegments,e.heightSegments)}}var e1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,t1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,n1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,i1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,o1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,a1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,l1=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,c1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,u1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,d1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,p1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,g1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,v1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,x1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,y1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,S1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,M1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,b1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,E1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,T1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,w1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,A1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,C1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,R1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,P1="gl_FragColor = linearToOutputTexel( gl_FragColor );",L1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,D1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,I1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,U1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,N1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,O1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,F1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,k1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,z1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,H1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,G1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,V1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,W1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Y1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,q1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,j1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Q1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,eE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,oE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,aE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,gE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,_E=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,vE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ME=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,EE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,PE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,IE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,UE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,FE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,BE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,GE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,WE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$E=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ZE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,JE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,QE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,aT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,lT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,uT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_T=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ST=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,MT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ET=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,TT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,RT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,DT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,IT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:e1,alphahash_pars_fragment:t1,alphamap_fragment:n1,alphamap_pars_fragment:i1,alphatest_fragment:r1,alphatest_pars_fragment:s1,aomap_fragment:o1,aomap_pars_fragment:a1,batching_pars_vertex:l1,batching_vertex:c1,begin_vertex:u1,beginnormal_vertex:f1,bsdfs:h1,iridescence_fragment:d1,bumpmap_pars_fragment:p1,clipping_planes_fragment:m1,clipping_planes_pars_fragment:g1,clipping_planes_pars_vertex:_1,clipping_planes_vertex:v1,color_fragment:x1,color_pars_fragment:y1,color_pars_vertex:S1,color_vertex:M1,common:b1,cube_uv_reflection_fragment:E1,defaultnormal_vertex:T1,displacementmap_pars_vertex:w1,displacementmap_vertex:A1,emissivemap_fragment:C1,emissivemap_pars_fragment:R1,colorspace_fragment:P1,colorspace_pars_fragment:L1,envmap_fragment:D1,envmap_common_pars_fragment:I1,envmap_pars_fragment:U1,envmap_pars_vertex:N1,envmap_physical_pars_fragment:Y1,envmap_vertex:O1,fog_vertex:F1,fog_pars_vertex:k1,fog_fragment:B1,fog_pars_fragment:z1,gradientmap_pars_fragment:H1,lightmap_fragment:G1,lightmap_pars_fragment:V1,lights_lambert_fragment:W1,lights_lambert_pars_fragment:X1,lights_pars_begin:$1,lights_toon_fragment:q1,lights_toon_pars_fragment:j1,lights_phong_fragment:K1,lights_phong_pars_fragment:Z1,lights_physical_fragment:J1,lights_physical_pars_fragment:Q1,lights_fragment_begin:eE,lights_fragment_maps:tE,lights_fragment_end:nE,logdepthbuf_fragment:iE,logdepthbuf_pars_fragment:rE,logdepthbuf_pars_vertex:sE,logdepthbuf_vertex:oE,map_fragment:aE,map_pars_fragment:lE,map_particle_fragment:cE,map_particle_pars_fragment:uE,metalnessmap_fragment:fE,metalnessmap_pars_fragment:hE,morphinstance_vertex:dE,morphcolor_vertex:pE,morphnormal_vertex:mE,morphtarget_pars_vertex:gE,morphtarget_vertex:_E,normal_fragment_begin:vE,normal_fragment_maps:xE,normal_pars_fragment:yE,normal_pars_vertex:SE,normal_vertex:ME,normalmap_pars_fragment:bE,clearcoat_normal_fragment_begin:EE,clearcoat_normal_fragment_maps:TE,clearcoat_pars_fragment:wE,iridescence_pars_fragment:AE,opaque_fragment:CE,packing:RE,premultiplied_alpha_fragment:PE,project_vertex:LE,dithering_fragment:DE,dithering_pars_fragment:IE,roughnessmap_fragment:UE,roughnessmap_pars_fragment:NE,shadowmap_pars_fragment:OE,shadowmap_pars_vertex:FE,shadowmap_vertex:kE,shadowmask_pars_fragment:BE,skinbase_vertex:zE,skinning_pars_vertex:HE,skinning_vertex:GE,skinnormal_vertex:VE,specularmap_fragment:WE,specularmap_pars_fragment:XE,tonemapping_fragment:$E,tonemapping_pars_fragment:YE,transmission_fragment:qE,transmission_pars_fragment:jE,uv_pars_fragment:KE,uv_pars_vertex:ZE,uv_vertex:JE,worldpos_vertex:QE,background_vert:eT,background_frag:tT,backgroundCube_vert:nT,backgroundCube_frag:iT,cube_vert:rT,cube_frag:sT,depth_vert:oT,depth_frag:aT,distanceRGBA_vert:lT,distanceRGBA_frag:cT,equirect_vert:uT,equirect_frag:fT,linedashed_vert:hT,linedashed_frag:dT,meshbasic_vert:pT,meshbasic_frag:mT,meshlambert_vert:gT,meshlambert_frag:_T,meshmatcap_vert:vT,meshmatcap_frag:xT,meshnormal_vert:yT,meshnormal_frag:ST,meshphong_vert:MT,meshphong_frag:bT,meshphysical_vert:ET,meshphysical_frag:TT,meshtoon_vert:wT,meshtoon_frag:AT,points_vert:CT,points_frag:RT,shadow_vert:PT,shadow_frag:LT,sprite_vert:DT,sprite_frag:IT},Te={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},sr={basic:{uniforms:Bn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Bn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new gt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Bn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Bn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Bn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new gt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Bn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Bn([Te.points,Te.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Bn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Bn([Te.common,Te.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Bn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Bn([Te.sprite,Te.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:Bn([Te.common,Te.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:Bn([Te.lights,Te.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};sr.physical={uniforms:Bn([sr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Ec={r:0,b:0,g:0},ks=new Gr,UT=new kt;function NT(n,e,t,i,r,s,o){const a=new gt(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function g(m,p){let y=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),y=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ju)?(u===void 0&&(u=new Ui(new Zl(1,1,1),new pr({name:"BackgroundCubeMaterial",uniforms:Ma(sr.backgroundCube.uniforms),vertexShader:sr.backgroundCube.vertexShader,fragmentShader:sr.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ks.copy(p.backgroundRotation),ks.x*=-1,ks.y*=-1,ks.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ks.y*=-1,ks.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(UT.makeRotationFromEuler(ks)),u.material.toneMapped=At.getTransfer(v.colorSpace)!==Ft,(h!==v||d!==v.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ui(new ef(2,2),new pr({name:"BackgroundMaterial",uniforms:Ma(sr.background.uniforms),vertexShader:sr.background.vertexShader,fragmentShader:sr.background.fragmentShader,side:Hr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=At.getTransfer(v.colorSpace)!==Ft,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(Ec,ov(n)),i.buffers.color.setClear(Ec.r,Ec.g,Ec.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function OT(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(U,K,W,X,G){let re=!1;if(o){const L=_(X,W,K);c!==L&&(c=L,f(c.object)),re=p(U,X,W,G),re&&y(U,X,W,G)}else{const L=K.wireframe===!0;(c.geometry!==X.id||c.program!==W.id||c.wireframe!==L)&&(c.geometry=X.id,c.program=W.id,c.wireframe=L,re=!0)}G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(re||u)&&(u=!1,I(U,K,W,X),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function f(U){return i.isWebGL2?n.bindVertexArray(U):s.bindVertexArrayOES(U)}function g(U){return i.isWebGL2?n.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function _(U,K,W){const X=W.wireframe===!0;let G=a[U.id];G===void 0&&(G={},a[U.id]=G);let re=G[K.id];re===void 0&&(re={},G[K.id]=re);let L=re[X];return L===void 0&&(L=m(d()),re[X]=L),L}function m(U){const K=[],W=[],X=[];for(let G=0;G<r;G++)K[G]=0,W[G]=0,X[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:W,attributeDivisors:X,object:U,attributes:{},index:null}}function p(U,K,W,X){const G=c.attributes,re=K.attributes;let L=0;const ue=W.getAttributes();for(const _e in ue)if(ue[_e].location>=0){const Z=G[_e];let he=re[_e];if(he===void 0&&(_e==="instanceMatrix"&&U.instanceMatrix&&(he=U.instanceMatrix),_e==="instanceColor"&&U.instanceColor&&(he=U.instanceColor)),Z===void 0||Z.attribute!==he||he&&Z.data!==he.data)return!0;L++}return c.attributesNum!==L||c.index!==X}function y(U,K,W,X){const G={},re=K.attributes;let L=0;const ue=W.getAttributes();for(const _e in ue)if(ue[_e].location>=0){let Z=re[_e];Z===void 0&&(_e==="instanceMatrix"&&U.instanceMatrix&&(Z=U.instanceMatrix),_e==="instanceColor"&&U.instanceColor&&(Z=U.instanceColor));const he={};he.attribute=Z,Z&&Z.data&&(he.data=Z.data),G[_e]=he,L++}c.attributes=G,c.attributesNum=L,c.index=X}function v(){const U=c.newAttributes;for(let K=0,W=U.length;K<W;K++)U[K]=0}function S(U){w(U,0)}function w(U,K){const W=c.newAttributes,X=c.enabledAttributes,G=c.attributeDivisors;W[U]=1,X[U]===0&&(n.enableVertexAttribArray(U),X[U]=1),G[U]!==K&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,K),G[U]=K)}function C(){const U=c.newAttributes,K=c.enabledAttributes;for(let W=0,X=K.length;W<X;W++)K[W]!==U[W]&&(n.disableVertexAttribArray(W),K[W]=0)}function T(U,K,W,X,G,re,L){L===!0?n.vertexAttribIPointer(U,K,W,G,re):n.vertexAttribPointer(U,K,W,X,G,re)}function I(U,K,W,X){if(i.isWebGL2===!1&&(U.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const G=X.attributes,re=W.getAttributes(),L=K.defaultAttributeValues;for(const ue in re){const _e=re[ue];if(_e.location>=0){let Ve=G[ue];if(Ve===void 0&&(ue==="instanceMatrix"&&U.instanceMatrix&&(Ve=U.instanceMatrix),ue==="instanceColor"&&U.instanceColor&&(Ve=U.instanceColor)),Ve!==void 0){const Z=Ve.normalized,he=Ve.itemSize,ve=t.get(Ve);if(ve===void 0)continue;const Pe=ve.buffer,Ce=ve.type,be=ve.bytesPerElement,it=i.isWebGL2===!0&&(Ce===n.INT||Ce===n.UNSIGNED_INT||Ve.gpuType===G0);if(Ve.isInterleavedBufferAttribute){const Fe=Ve.data,M=Fe.stride,O=Ve.offset;if(Fe.isInstancedInterleavedBuffer){for(let B=0;B<_e.locationSize;B++)w(_e.location+B,Fe.meshPerAttribute);U.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let B=0;B<_e.locationSize;B++)S(_e.location+B);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let B=0;B<_e.locationSize;B++)T(_e.location+B,he/_e.locationSize,Ce,Z,M*be,(O+he/_e.locationSize*B)*be,it)}else{if(Ve.isInstancedBufferAttribute){for(let Fe=0;Fe<_e.locationSize;Fe++)w(_e.location+Fe,Ve.meshPerAttribute);U.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let Fe=0;Fe<_e.locationSize;Fe++)S(_e.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let Fe=0;Fe<_e.locationSize;Fe++)T(_e.location+Fe,he/_e.locationSize,Ce,Z,he*be,he/_e.locationSize*Fe*be,it)}}else if(L!==void 0){const Z=L[ue];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(_e.location,Z);break;case 3:n.vertexAttrib3fv(_e.location,Z);break;case 4:n.vertexAttrib4fv(_e.location,Z);break;default:n.vertexAttrib1fv(_e.location,Z)}}}}C()}function N(){F();for(const U in a){const K=a[U];for(const W in K){const X=K[W];for(const G in X)g(X[G].object),delete X[G];delete K[W]}delete a[U]}}function x(U){if(a[U.id]===void 0)return;const K=a[U.id];for(const W in K){const X=K[W];for(const G in X)g(X[G].object),delete X[G];delete K[W]}delete a[U.id]}function R(U){for(const K in a){const W=a[K];if(W[U.id]===void 0)continue;const X=W[U.id];for(const G in X)g(X[G].object),delete X[G];delete W[U.id]}}function F(){ne(),u=!0,c!==l&&(c=l,f(c.object))}function ne(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:F,resetDefaultState:ne,dispose:N,releaseStatesOfGeometry:x,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:S,disableUnusedAttributes:C}}function FT(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,h){n.drawArrays(s,u,h),t.update(h,s,1)}function l(u,h,d){if(d===0)return;let f,g;if(r)f=n,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,u,h,d),t.update(h,s,d)}function c(u,h,d){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{f.multiDrawArraysWEBGL(s,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function kT(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,S=o||e.has("OES_texture_float"),w=v&&S,C=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:w,maxSamples:C}}function BT(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ws,a=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:i,v=y*4;let S=p.clippingState||null;l.value=S,S=u(g,d,v,f);for(let w=0;w!==v;++w)S[w]=t[w];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,S=f;v!==_;++v,S+=4)o.copy(h[v]).applyMatrix4(y,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function zT(n){let e=new WeakMap;function t(o,a){return a===vu?o.mapping=xa:a===Bh&&(o.mapping=ya),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===vu||a===Bh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Kb(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class HT extends av{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ea=4,eg=[.125,.215,.35,.446,.526,.582],Zs=20,Kf=new HT,tg=new gt;let Zf=null,Jf=0,Qf=0;const Xs=(1+Math.sqrt(5))/2,zo=1/Xs,ng=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,Xs,zo),new H(0,Xs,-zo),new H(zo,0,Xs),new H(-zo,0,Xs),new H(Xs,zo,0),new H(-Xs,zo,0)];class $h{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Zf=this._renderer.getRenderTarget(),Jf=this._renderer.getActiveCubeFace(),Qf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zf,Jf,Qf),e.scissorTest=!1,Tc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xa||e.mapping===ya?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zf=this._renderer.getRenderTarget(),Jf=this._renderer.getActiveCubeFace(),Qf=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:Il,format:Yi,colorSpace:Ts,depthBuffer:!1},r=ig(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ig(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=GT(s)),this._blurMaterial=VT(s,e,t)}return r}_compileMaterial(e){const t=new Ui(this._lodPlanes[0],e);this._renderer.compile(t,Kf)}_sceneToCubeUV(e,t,i,r){const a=new fi(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(tg),u.toneMapping=ds,u.autoClear=!1;const f=new iv({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),g=new Ui(new Zl,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(tg),_=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;Tc(r,y*v,p>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===xa||e.mapping===ya;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ui(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Tc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Kf)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ng[(r-1)%ng.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ui(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Zs-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Zs;m>Zs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zs}`);const p=[];let y=0;for(let T=0;T<Zs;++T){const I=T/_,N=Math.exp(-I*I/2);p.push(N),T===0?y+=N:T<m&&(y+=2*N)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;const S=this._sizeLods[r],w=3*S*(r>v-ea?r-v+ea:0),C=4*(this._cubeSize-S);Tc(t,w,C,3*S,2*S),l.setRenderTarget(t),l.render(h,Kf)}}function GT(n){const e=[],t=[],i=[];let r=n;const s=n-ea+1+eg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ea?l=eg[o-n+ea-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),v=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let C=0;C<f;C++){const T=C%3*2/3-1,I=C>2?0:-1,N=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];y.set(N,_*g*C),v.set(d,m*g*C);const x=[C,C,C,C,C,C];S.set(x,p*g*C)}const w=new Ti;w.setAttribute("position",new ki(y,_)),w.setAttribute("uv",new ki(v,m)),w.setAttribute("faceIndex",new ki(S,p)),e.push(w),r>ea&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ig(n,e,t){const i=new go(n,e,t);return i.texture.mapping=Ju,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Tc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function VT(n,e,t){const i=new Float32Array(Zs),r=new H(0,1,0);return new pr({name:"SphericalGaussianBlur",defines:{n:Zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hs,depthTest:!1,depthWrite:!1})}function rg(){return new pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hs,depthTest:!1,depthWrite:!1})}function sg(){return new pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hs,depthTest:!1,depthWrite:!1})}function zd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function WT(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===vu||l===Bh,u=l===xa||l===ya;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new $h(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new $h(n));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function XT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function $T(n,e,t,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let v=0,S=y.length;v<S;v+=3){const w=y[v+0],C=y[v+1],T=y[v+2];d.push(w,C,C,T,T,w)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,S=y.length/3-1;v<S;v+=3){const w=v+0,C=v+1,T=v+2;d.push(w,C,C,T,T,w)}}else return;const m=new(K0(d)?sv:rv)(d,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function YT(n,e,t,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,g){n.drawElements(s,g,a,f*l),t.update(g,s,1)}function h(f,g,_){if(_===0)return;let m,p;if(r)m=n,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,g,a,f*l,_),t.update(g,s,_)}function d(f,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(s,g,0,a,f,0,_);let p=0;for(let y=0;y<_;y++)p+=g[y];t.update(p,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function qT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function jT(n,e){return n[0]-e[0]}function KT(n,e){return Math.abs(e[1])-Math.abs(n[1])}function ZT(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Ht,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let ne=function(){R.dispose(),s.delete(u),u.removeEventListener("dispose",ne)};var f=ne;m!==void 0&&m.texture.dispose();const p=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let T=0;p===!0&&(T=1),y===!0&&(T=2),v===!0&&(T=3);let I=u.attributes.position.count*T,N=1;I>e.maxTextureSize&&(N=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const x=new Float32Array(I*N*4*_),R=new ev(x,I,N,_);R.type=Dr,R.needsUpdate=!0;const F=T*4;for(let U=0;U<_;U++){const K=S[U],W=w[U],X=C[U],G=I*N*4*U;for(let re=0;re<K.count;re++){const L=re*F;p===!0&&(o.fromBufferAttribute(K,re),x[G+L+0]=o.x,x[G+L+1]=o.y,x[G+L+2]=o.z,x[G+L+3]=0),y===!0&&(o.fromBufferAttribute(W,re),x[G+L+4]=o.x,x[G+L+5]=o.y,x[G+L+6]=o.z,x[G+L+7]=0),v===!0&&(o.fromBufferAttribute(X,re),x[G+L+8]=o.x,x[G+L+9]=o.y,x[G+L+10]=o.z,x[G+L+11]=X.itemSize===4?o.w:1)}}m={count:_,texture:R,size:new Qe(I,N)},s.set(u,m),u.addEventListener("dispose",ne)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let p=0;for(let v=0;v<d.length;v++)p+=d[v];const y=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(n,"morphTargetBaseInfluence",y),h.getUniforms().setValue(n,"morphTargetInfluences",d)}h.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=i[u.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];i[u.id]=_}for(let S=0;S<g;S++){const w=_[S];w[0]=S,w[1]=d[S]}_.sort(KT);for(let S=0;S<8;S++)S<g&&_[S][1]?(a[S][0]=_[S][0],a[S][1]=_[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(jT);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let y=0;for(let S=0;S<8;S++){const w=a[S],C=w[0],T=w[1];C!==Number.MAX_SAFE_INTEGER&&T?(m&&u.getAttribute("morphTarget"+S)!==m[C]&&u.setAttribute("morphTarget"+S,m[C]),p&&u.getAttribute("morphNormal"+S)!==p[C]&&u.setAttribute("morphNormal"+S,p[C]),r[S]=T,y+=T):(m&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),p&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const v=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function JT(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class uv extends qn{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:ao,u!==ao&&u!==Sa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ao&&(i=ss),i===void 0&&u===Sa&&(i=oo),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Vn,this.minFilter=l!==void 0?l:Vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const fv=new qn,hv=new uv(1,1);hv.compareFunction=j0;const dv=new ev,pv=new Ib,mv=new lv,og=[],ag=[],lg=new Float32Array(16),cg=new Float32Array(9),ug=new Float32Array(4);function La(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=og[r];if(s===void 0&&(s=new Float32Array(r),og[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function cn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function un(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function tf(n,e){let t=ag[e];t===void 0&&(t=new Int32Array(e),ag[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function QT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ew(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2fv(this.addr,e),un(t,e)}}function tw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;n.uniform3fv(this.addr,e),un(t,e)}}function nw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4fv(this.addr,e),un(t,e)}}function iw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(cn(t,i))return;ug.set(i),n.uniformMatrix2fv(this.addr,!1,ug),un(t,i)}}function rw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(cn(t,i))return;cg.set(i),n.uniformMatrix3fv(this.addr,!1,cg),un(t,i)}}function sw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(cn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(cn(t,i))return;lg.set(i),n.uniformMatrix4fv(this.addr,!1,lg),un(t,i)}}function ow(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function aw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2iv(this.addr,e),un(t,e)}}function lw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;n.uniform3iv(this.addr,e),un(t,e)}}function cw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4iv(this.addr,e),un(t,e)}}function uw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function fw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;n.uniform2uiv(this.addr,e),un(t,e)}}function hw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;n.uniform3uiv(this.addr,e),un(t,e)}}function dw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;n.uniform4uiv(this.addr,e),un(t,e)}}function pw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?hv:fv;t.setTexture2D(e||s,r)}function mw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||pv,r)}function gw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||mv,r)}function _w(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||dv,r)}function vw(n){switch(n){case 5126:return QT;case 35664:return ew;case 35665:return tw;case 35666:return nw;case 35674:return iw;case 35675:return rw;case 35676:return sw;case 5124:case 35670:return ow;case 35667:case 35671:return aw;case 35668:case 35672:return lw;case 35669:case 35673:return cw;case 5125:return uw;case 36294:return fw;case 36295:return hw;case 36296:return dw;case 35678:case 36198:case 36298:case 36306:case 35682:return pw;case 35679:case 36299:case 36307:return mw;case 35680:case 36300:case 36308:case 36293:return gw;case 36289:case 36303:case 36311:case 36292:return _w}}function xw(n,e){n.uniform1fv(this.addr,e)}function yw(n,e){const t=La(e,this.size,2);n.uniform2fv(this.addr,t)}function Sw(n,e){const t=La(e,this.size,3);n.uniform3fv(this.addr,t)}function Mw(n,e){const t=La(e,this.size,4);n.uniform4fv(this.addr,t)}function bw(n,e){const t=La(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ew(n,e){const t=La(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Tw(n,e){const t=La(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ww(n,e){n.uniform1iv(this.addr,e)}function Aw(n,e){n.uniform2iv(this.addr,e)}function Cw(n,e){n.uniform3iv(this.addr,e)}function Rw(n,e){n.uniform4iv(this.addr,e)}function Pw(n,e){n.uniform1uiv(this.addr,e)}function Lw(n,e){n.uniform2uiv(this.addr,e)}function Dw(n,e){n.uniform3uiv(this.addr,e)}function Iw(n,e){n.uniform4uiv(this.addr,e)}function Uw(n,e,t){const i=this.cache,r=e.length,s=tf(t,r);cn(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||fv,s[o])}function Nw(n,e,t){const i=this.cache,r=e.length,s=tf(t,r);cn(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||pv,s[o])}function Ow(n,e,t){const i=this.cache,r=e.length,s=tf(t,r);cn(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||mv,s[o])}function Fw(n,e,t){const i=this.cache,r=e.length,s=tf(t,r);cn(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||dv,s[o])}function kw(n){switch(n){case 5126:return xw;case 35664:return yw;case 35665:return Sw;case 35666:return Mw;case 35674:return bw;case 35675:return Ew;case 35676:return Tw;case 5124:case 35670:return ww;case 35667:case 35671:return Aw;case 35668:case 35672:return Cw;case 35669:case 35673:return Rw;case 5125:return Pw;case 36294:return Lw;case 36295:return Dw;case 36296:return Iw;case 35678:case 36198:case 36298:case 36306:case 35682:return Uw;case 35679:case 36299:case 36307:return Nw;case 35680:case 36300:case 36308:case 36293:return Ow;case 36289:case 36303:case 36311:case 36292:return Fw}}class Bw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=vw(t.type)}}class zw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kw(t.type)}}class Hw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const eh=/(\w+)(\])?(\[|\.)?/g;function fg(n,e){n.seq.push(e),n.map[e.id]=e}function Gw(n,e,t){const i=n.name,r=i.length;for(eh.lastIndex=0;;){const s=eh.exec(i),o=eh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){fg(t,c===void 0?new Bw(a,n,e):new zw(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Hw(a),fg(t,h)),t=h}}}class Zc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Gw(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function hg(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Vw=37297;let Ww=0;function Xw(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function $w(n){const e=At.getPrimaries(At.workingColorSpace),t=At.getPrimaries(n);let i;switch(e===t?i="":e===Su&&t===yu?i="LinearDisplayP3ToLinearSRGB":e===yu&&t===Su&&(i="LinearSRGBToLinearDisplayP3"),n){case Ts:case Qu:return[i,"LinearTransferOETF"];case Xi:case Fd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function dg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Xw(n.getShaderSource(e),o)}else return r}function Yw(n,e){const t=$w(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function qw(n,e){let t;switch(e){case nb:t="Linear";break;case ib:t="Reinhard";break;case rb:t="OptimizedCineon";break;case z0:t="ACESFilmic";break;case ob:t="AgX";break;case ab:t="Neutral";break;case sb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function jw(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ta).join(`
`)}function Kw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function Zw(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Jw(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ta(n){return n!==""}function pg(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yh(n){return n.replace(Qw,tA)}const eA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function tA(n,e){let t=at[e];if(t===void 0){const i=eA.get(e);if(i!==void 0)t=at[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yh(t)}const nA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gg(n){return n.replace(nA,iA)}function iA(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _g(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;return n.isWebGL2&&(e+=`precision ${n.precision} sampler3D;
		precision ${n.precision} sampler2DArray;
		precision ${n.precision} sampler2DShadow;
		precision ${n.precision} samplerCubeShadow;
		precision ${n.precision} sampler2DArrayShadow;
		precision ${n.precision} isampler2D;
		precision ${n.precision} isampler3D;
		precision ${n.precision} isamplerCube;
		precision ${n.precision} isampler2DArray;
		precision ${n.precision} usampler2D;
		precision ${n.precision} usampler3D;
		precision ${n.precision} usamplerCube;
		precision ${n.precision} usampler2DArray;
		`),n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===k0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===PM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===br&&(e="SHADOWMAP_TYPE_VSM"),e}function sA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case xa:case ya:e="ENVMAP_TYPE_CUBE";break;case Ju:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ya:e="ENVMAP_MODE_REFRACTION";break}return e}function aA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case B0:e="ENVMAP_BLENDING_MULTIPLY";break;case eb:e="ENVMAP_BLENDING_MIX";break;case tb:e="ENVMAP_BLENDING_ADD";break}return e}function lA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function cA(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=rA(t),c=sA(t),u=oA(t),h=aA(t),d=lA(t),f=t.isWebGL2?"":jw(t),g=Kw(t),_=Zw(s),m=r.createProgram();let p,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ta).join(`
`),p.length>0&&(p+=`
`),y=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ta).join(`
`),y.length>0&&(y+=`
`)):(p=[_g(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),y=[f,_g(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ds?"#define TONE_MAPPING":"",t.toneMapping!==ds?at.tonemapping_pars_fragment:"",t.toneMapping!==ds?qw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,Yw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ta).join(`
`)),o=Yh(o),o=pg(o,t),o=mg(o,t),a=Yh(a),a=pg(a,t),a=mg(a,t),o=gg(o),a=gg(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Um?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Um?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const S=v+p+o,w=v+y+a,C=hg(r,r.VERTEX_SHADER,S),T=hg(r,r.FRAGMENT_SHADER,w);r.attachShader(m,C),r.attachShader(m,T),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function I(F){if(n.debug.checkShaderErrors){const ne=r.getProgramInfoLog(m).trim(),U=r.getShaderInfoLog(C).trim(),K=r.getShaderInfoLog(T).trim();let W=!0,X=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,C,T);else{const G=dg(r,C,"vertex"),re=dg(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ne+`
`+G+`
`+re)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(U===""||K==="")&&(X=!1);X&&(F.diagnostics={runnable:W,programLog:ne,vertexShader:{log:U,prefix:p},fragmentShader:{log:K,prefix:y}})}r.deleteShader(C),r.deleteShader(T),N=new Zc(r,m),x=Jw(r,m)}let N;this.getUniforms=function(){return N===void 0&&I(this),N};let x;this.getAttributes=function(){return x===void 0&&I(this),x};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(m,Vw)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ww++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=T,this}let uA=0;class fA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new hA(e),t.set(e,i)),i}}class hA{constructor(e){this.id=uA++,this.code=e,this.usedTimes=0}}function dA(n,e,t,i,r,s,o){const a=new tv,l=new fA,c=new Set,u=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,R,F,ne,U){const K=ne.fog,W=U.geometry,X=x.isMeshStandardMaterial?ne.environment:null,G=(x.isMeshStandardMaterial?t:e).get(x.envMap||X),re=G&&G.mapping===Ju?G.image.height:null,L=_[x.type];x.precision!==null&&(g=r.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const ue=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,_e=ue!==void 0?ue.length:0;let Ve=0;W.morphAttributes.position!==void 0&&(Ve=1),W.morphAttributes.normal!==void 0&&(Ve=2),W.morphAttributes.color!==void 0&&(Ve=3);let Z,he,ve,Pe;if(L){const mt=sr[L];Z=mt.vertexShader,he=mt.fragmentShader}else Z=x.vertexShader,he=x.fragmentShader,l.update(x),ve=l.getVertexShaderID(x),Pe=l.getFragmentShaderID(x);const Ce=n.getRenderTarget(),be=U.isInstancedMesh===!0,it=U.isBatchedMesh===!0,Fe=!!x.map,M=!!x.matcap,O=!!G,B=!!x.aoMap,te=!!x.lightMap,q=!!x.bumpMap,P=!!x.normalMap,oe=!!x.displacementMap,ae=!!x.emissiveMap,ce=!!x.metalnessMap,E=!!x.roughnessMap,b=x.anisotropy>0,k=x.clearcoat>0,$=x.iridescence>0,j=x.sheen>0,se=x.transmission>0,pe=b&&!!x.anisotropyMap,xe=k&&!!x.clearcoatMap,fe=k&&!!x.clearcoatNormalMap,de=k&&!!x.clearcoatRoughnessMap,Ge=$&&!!x.iridescenceMap,le=$&&!!x.iridescenceThicknessMap,_t=j&&!!x.sheenColorMap,qe=j&&!!x.sheenRoughnessMap,Re=!!x.specularMap,Ae=!!x.specularColorMap,Le=!!x.specularIntensityMap,et=se&&!!x.transmissionMap,Ee=se&&!!x.thicknessMap,pt=!!x.gradientMap,z=!!x.alphaMap,ye=x.alphaTest>0,Q=!!x.alphaHash,me=!!x.extensions;let we=ds;x.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(we=n.toneMapping);const Je={isWebGL2:h,shaderID:L,shaderType:x.type,shaderName:x.name,vertexShader:Z,fragmentShader:he,defines:x.defines,customVertexShaderID:ve,customFragmentShaderID:Pe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:it,instancing:be,instancingColor:be&&U.instanceColor!==null,instancingMorph:be&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Ce===null?n.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:Ts,alphaToCoverage:!!x.alphaToCoverage,map:Fe,matcap:M,envMap:O,envMapMode:O&&G.mapping,envMapCubeUVHeight:re,aoMap:B,lightMap:te,bumpMap:q,normalMap:P,displacementMap:f&&oe,emissiveMap:ae,normalMapObjectSpace:P&&x.normalMapType===xb,normalMapTangentSpace:P&&x.normalMapType===vb,metalnessMap:ce,roughnessMap:E,anisotropy:b,anisotropyMap:pe,clearcoat:k,clearcoatMap:xe,clearcoatNormalMap:fe,clearcoatRoughnessMap:de,iridescence:$,iridescenceMap:Ge,iridescenceThicknessMap:le,sheen:j,sheenColorMap:_t,sheenRoughnessMap:qe,specularMap:Re,specularColorMap:Ae,specularIntensityMap:Le,transmission:se,transmissionMap:et,thicknessMap:Ee,gradientMap:pt,opaque:x.transparent===!1&&x.blending===ca&&x.alphaToCoverage===!1,alphaMap:z,alphaTest:ye,alphaHash:Q,combine:x.combine,mapUv:Fe&&m(x.map.channel),aoMapUv:B&&m(x.aoMap.channel),lightMapUv:te&&m(x.lightMap.channel),bumpMapUv:q&&m(x.bumpMap.channel),normalMapUv:P&&m(x.normalMap.channel),displacementMapUv:oe&&m(x.displacementMap.channel),emissiveMapUv:ae&&m(x.emissiveMap.channel),metalnessMapUv:ce&&m(x.metalnessMap.channel),roughnessMapUv:E&&m(x.roughnessMap.channel),anisotropyMapUv:pe&&m(x.anisotropyMap.channel),clearcoatMapUv:xe&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:fe&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ge&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:le&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:qe&&m(x.sheenRoughnessMap.channel),specularMapUv:Re&&m(x.specularMap.channel),specularColorMapUv:Ae&&m(x.specularColorMap.channel),specularIntensityMapUv:Le&&m(x.specularIntensityMap.channel),transmissionMapUv:et&&m(x.transmissionMap.channel),thicknessMapUv:Ee&&m(x.thicknessMap.channel),alphaMapUv:z&&m(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(P||b),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!W.attributes.uv&&(Fe||z),fog:!!K,useFog:x.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Ve,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:we,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Fe&&x.map.isVideoTexture===!0&&At.getTransfer(x.map.colorSpace)===Ft,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Lr,flipSided:x.side===Yn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:me&&x.extensions.derivatives===!0,extensionFragDepth:me&&x.extensions.fragDepth===!0,extensionDrawBuffers:me&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:me&&x.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Je.vertexUv1s=c.has(1),Je.vertexUv2s=c.has(2),Je.vertexUv3s=c.has(3),c.clear(),Je}function y(x){const R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(const F in x.defines)R.push(F),R.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(v(R,x),S(R,x),R.push(n.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function v(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapCubeUVHeight),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.anisotropyMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.morphAttributeCount),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.numLightProbes),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function S(x,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.instancingMorph&&a.enable(4),R.matcap&&a.enable(5),R.envMap&&a.enable(6),R.normalMapObjectSpace&&a.enable(7),R.normalMapTangentSpace&&a.enable(8),R.clearcoat&&a.enable(9),R.iridescence&&a.enable(10),R.alphaTest&&a.enable(11),R.vertexColors&&a.enable(12),R.vertexAlphas&&a.enable(13),R.vertexUv1s&&a.enable(14),R.vertexUv2s&&a.enable(15),R.vertexUv3s&&a.enable(16),R.vertexTangents&&a.enable(17),R.anisotropy&&a.enable(18),R.alphaHash&&a.enable(19),R.batching&&a.enable(20),x.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.alphaToCoverage&&a.enable(20),x.push(a.mask)}function w(x){const R=_[x.type];let F;if(R){const ne=sr[R];F=$b.clone(ne.uniforms)}else F=x.uniforms;return F}function C(x,R){let F;for(let ne=0,U=u.length;ne<U;ne++){const K=u[ne];if(K.cacheKey===R){F=K,++F.usedTimes;break}}return F===void 0&&(F=new cA(n,R,x,s),u.push(F)),F}function T(x){if(--x.usedTimes===0){const R=u.indexOf(x);u[R]=u[u.length-1],u.pop(),x.destroy()}}function I(x){l.remove(x)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:w,acquireProgram:C,releaseProgram:T,releaseShaderCache:I,programs:u,dispose:N}}function pA(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function mA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function vg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function xg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,d,f,g,_,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||mA),i.length>1&&i.sort(d||vg),r.length>1&&r.sort(d||vg)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function gA(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new xg,n.set(i,[o])):r>=s.length?(o=new xg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function _A(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new gt};break;case"SpotLight":t={position:new H,direction:new H,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function vA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let xA=0;function yA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function SA(n,e){const t=new _A,i=vA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new H);const s=new H,o=new kt,a=new kt;function l(u,h){let d=0,f=0,g=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let _=0,m=0,p=0,y=0,v=0,S=0,w=0,C=0,T=0,I=0,N=0;u.sort(yA);const x=h===!0?Math.PI:1;for(let F=0,ne=u.length;F<ne;F++){const U=u[F],K=U.color,W=U.intensity,X=U.distance,G=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=K.r*W*x,f+=K.g*W*x,g+=K.b*W*x;else if(U.isLightProbe){for(let re=0;re<9;re++)r.probe[re].addScaledVector(U.sh.coefficients[re],W);N++}else if(U.isDirectionalLight){const re=t.get(U);if(re.color.copy(U.color).multiplyScalar(U.intensity*x),U.castShadow){const L=U.shadow,ue=i.get(U);ue.shadowBias=L.bias,ue.shadowNormalBias=L.normalBias,ue.shadowRadius=L.radius,ue.shadowMapSize=L.mapSize,r.directionalShadow[_]=ue,r.directionalShadowMap[_]=G,r.directionalShadowMatrix[_]=U.shadow.matrix,S++}r.directional[_]=re,_++}else if(U.isSpotLight){const re=t.get(U);re.position.setFromMatrixPosition(U.matrixWorld),re.color.copy(K).multiplyScalar(W*x),re.distance=X,re.coneCos=Math.cos(U.angle),re.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),re.decay=U.decay,r.spot[p]=re;const L=U.shadow;if(U.map&&(r.spotLightMap[T]=U.map,T++,L.updateMatrices(U),U.castShadow&&I++),r.spotLightMatrix[p]=L.matrix,U.castShadow){const ue=i.get(U);ue.shadowBias=L.bias,ue.shadowNormalBias=L.normalBias,ue.shadowRadius=L.radius,ue.shadowMapSize=L.mapSize,r.spotShadow[p]=ue,r.spotShadowMap[p]=G,C++}p++}else if(U.isRectAreaLight){const re=t.get(U);re.color.copy(K).multiplyScalar(W),re.halfWidth.set(U.width*.5,0,0),re.halfHeight.set(0,U.height*.5,0),r.rectArea[y]=re,y++}else if(U.isPointLight){const re=t.get(U);if(re.color.copy(U.color).multiplyScalar(U.intensity*x),re.distance=U.distance,re.decay=U.decay,U.castShadow){const L=U.shadow,ue=i.get(U);ue.shadowBias=L.bias,ue.shadowNormalBias=L.normalBias,ue.shadowRadius=L.radius,ue.shadowMapSize=L.mapSize,ue.shadowCameraNear=L.camera.near,ue.shadowCameraFar=L.camera.far,r.pointShadow[m]=ue,r.pointShadowMap[m]=G,r.pointShadowMatrix[m]=U.shadow.matrix,w++}r.point[m]=re,m++}else if(U.isHemisphereLight){const re=t.get(U);re.skyColor.copy(U.color).multiplyScalar(W*x),re.groundColor.copy(U.groundColor).multiplyScalar(W*x),r.hemi[v]=re,v++}}y>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_FLOAT_1,r.rectAreaLTC2=Te.LTC_FLOAT_2):(r.rectAreaLTC1=Te.LTC_HALF_1,r.rectAreaLTC2=Te.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_FLOAT_1,r.rectAreaLTC2=Te.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_HALF_1,r.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=f,r.ambient[2]=g;const R=r.hash;(R.directionalLength!==_||R.pointLength!==m||R.spotLength!==p||R.rectAreaLength!==y||R.hemiLength!==v||R.numDirectionalShadows!==S||R.numPointShadows!==w||R.numSpotShadows!==C||R.numSpotMaps!==T||R.numLightProbes!==N)&&(r.directional.length=_,r.spot.length=p,r.rectArea.length=y,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=C+T-I,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=N,R.directionalLength=_,R.pointLength=m,R.spotLength=p,R.rectAreaLength=y,R.hemiLength=v,R.numDirectionalShadows=S,R.numPointShadows=w,R.numSpotShadows=C,R.numSpotMaps=T,R.numLightProbes=N,r.version=xA++)}function c(u,h){let d=0,f=0,g=0,_=0,m=0;const p=h.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){const S=u[y];if(S.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),d++}else if(S.isSpotLight){const w=r.spot[g];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),g++}else if(S.isRectAreaLight){const w=r.rectArea[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),a.identity(),o.copy(S.matrixWorld),o.premultiply(p),a.extractRotation(o),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const w=r.point[f];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const w=r.hemi[m];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:r}}function yg(n,e){const t=new SA(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function MA(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new yg(n,e),t.set(s,[l])):o>=a.length?(l=new yg(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class bA extends Mo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class EA extends Mo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const TA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function AA(n,e,t){let i=new Bd;const r=new Qe,s=new Qe,o=new Ht,a=new bA({depthPacking:_b}),l=new EA,c={},u=t.maxTextureSize,h={[Hr]:Yn,[Yn]:Hr,[Lr]:Lr},d=new pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:TA,fragmentShader:wA}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ti;g.setAttribute("position",new ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ui(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=k0;let p=this.type;this.render=function(C,T,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const N=n.getRenderTarget(),x=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),F=n.state;F.setBlending(hs),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const ne=p!==br&&this.type===br,U=p===br&&this.type!==br;for(let K=0,W=C.length;K<W;K++){const X=C[K],G=X.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const re=G.getFrameExtents();if(r.multiply(re),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/re.x),r.x=s.x*re.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/re.y),r.y=s.y*re.y,G.mapSize.y=s.y)),G.map===null||ne===!0||U===!0){const ue=this.type!==br?{minFilter:Vn,magFilter:Vn}:{};G.map!==null&&G.map.dispose(),G.map=new go(r.x,r.y,ue),G.map.texture.name=X.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const L=G.getViewportCount();for(let ue=0;ue<L;ue++){const _e=G.getViewport(ue);o.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),F.viewport(o),G.updateMatrices(X,ue),i=G.getFrustum(),S(T,I,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===br&&y(G,I),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(N,x,R)};function y(C,T){const I=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new go(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(T,null,I,d,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(T,null,I,f,_,null)}function v(C,T,I,N){let x=null;const R=I.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)x=R;else if(x=I.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=x.uuid,ne=T.uuid;let U=c[F];U===void 0&&(U={},c[F]=U);let K=U[ne];K===void 0&&(K=x.clone(),U[ne]=K,T.addEventListener("dispose",w)),x=K}if(x.visible=T.visible,x.wireframe=T.wireframe,N===br?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:h[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const F=n.properties.get(x);F.light=I}return x}function S(C,T,I,N,x){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===br)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,C.matrixWorld);const ne=e.update(C),U=C.material;if(Array.isArray(U)){const K=ne.groups;for(let W=0,X=K.length;W<X;W++){const G=K[W],re=U[G.materialIndex];if(re&&re.visible){const L=v(C,re,N,x);C.onBeforeShadow(n,C,T,I,ne,L,G),n.renderBufferDirect(I,null,ne,L,C,G),C.onAfterShadow(n,C,T,I,ne,L,G)}}}else if(U.visible){const K=v(C,U,N,x);C.onBeforeShadow(n,C,T,I,ne,K,null),n.renderBufferDirect(I,null,ne,K,C,null),C.onAfterShadow(n,C,T,I,ne,K,null)}}const F=C.children;for(let ne=0,U=F.length;ne<U;ne++)S(F[ne],T,I,N,x)}function w(C){C.target.removeEventListener("dispose",w);for(const I in c){const N=c[I],x=C.target.uuid;x in N&&(N[x].dispose(),delete N[x])}}}function CA(n,e,t){const i=t.isWebGL2;function r(){let z=!1;const ye=new Ht;let Q=null;const me=new Ht(0,0,0,0);return{setMask:function(we){Q!==we&&!z&&(n.colorMask(we,we,we,we),Q=we)},setLocked:function(we){z=we},setClear:function(we,Je,mt,ke,Ne){Ne===!0&&(we*=ke,Je*=ke,mt*=ke),ye.set(we,Je,mt,ke),me.equals(ye)===!1&&(n.clearColor(we,Je,mt,ke),me.copy(ye))},reset:function(){z=!1,Q=null,me.set(-1,0,0,0)}}}function s(){let z=!1,ye=null,Q=null,me=null;return{setTest:function(we){we?be(n.DEPTH_TEST):it(n.DEPTH_TEST)},setMask:function(we){ye!==we&&!z&&(n.depthMask(we),ye=we)},setFunc:function(we){if(Q!==we){switch(we){case YM:n.depthFunc(n.NEVER);break;case qM:n.depthFunc(n.ALWAYS);break;case jM:n.depthFunc(n.LESS);break;case _u:n.depthFunc(n.LEQUAL);break;case KM:n.depthFunc(n.EQUAL);break;case ZM:n.depthFunc(n.GEQUAL);break;case JM:n.depthFunc(n.GREATER);break;case QM:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=we}},setLocked:function(we){z=we},setClear:function(we){me!==we&&(n.clearDepth(we),me=we)},reset:function(){z=!1,ye=null,Q=null,me=null}}}function o(){let z=!1,ye=null,Q=null,me=null,we=null,Je=null,mt=null,ke=null,Ne=null;return{setTest:function(ze){z||(ze?be(n.STENCIL_TEST):it(n.STENCIL_TEST))},setMask:function(ze){ye!==ze&&!z&&(n.stencilMask(ze),ye=ze)},setFunc:function(ze,ge,Xe){(Q!==ze||me!==ge||we!==Xe)&&(n.stencilFunc(ze,ge,Xe),Q=ze,me=ge,we=Xe)},setOp:function(ze,ge,Xe){(Je!==ze||mt!==ge||ke!==Xe)&&(n.stencilOp(ze,ge,Xe),Je=ze,mt=ge,ke=Xe)},setLocked:function(ze){z=ze},setClear:function(ze){Ne!==ze&&(n.clearStencil(ze),Ne=ze)},reset:function(){z=!1,ye=null,Q=null,me=null,we=null,Je=null,mt=null,ke=null,Ne=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let d={},f={},g=new WeakMap,_=[],m=null,p=!1,y=null,v=null,S=null,w=null,C=null,T=null,I=null,N=new gt(0,0,0),x=0,R=!1,F=null,ne=null,U=null,K=null,W=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,re=0;const L=n.getParameter(n.VERSION);L.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(L)[1]),G=re>=1):L.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),G=re>=2);let ue=null,_e={};const Ve=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),he=new Ht().fromArray(Ve),ve=new Ht().fromArray(Z);function Pe(z,ye,Q,me){const we=new Uint8Array(4),Je=n.createTexture();n.bindTexture(z,Je),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let mt=0;mt<Q;mt++)i&&(z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY)?n.texImage3D(ye,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(ye+mt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return Je}const Ce={};Ce[n.TEXTURE_2D]=Pe(n.TEXTURE_2D,n.TEXTURE_2D,1),Ce[n.TEXTURE_CUBE_MAP]=Pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ce[n.TEXTURE_2D_ARRAY]=Pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ce[n.TEXTURE_3D]=Pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),be(n.DEPTH_TEST),l.setFunc(_u),oe(!1),ae(nm),be(n.CULL_FACE),q(hs);function be(z){d[z]!==!0&&(n.enable(z),d[z]=!0)}function it(z){d[z]!==!1&&(n.disable(z),d[z]=!1)}function Fe(z,ye){return f[z]!==ye?(n.bindFramebuffer(z,ye),f[z]=ye,i&&(z===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ye),z===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ye)),!0):!1}function M(z,ye){let Q=_,me=!1;if(z){Q=g.get(ye),Q===void 0&&(Q=[],g.set(ye,Q));const we=z.textures;if(Q.length!==we.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let Je=0,mt=we.length;Je<mt;Je++)Q[Je]=n.COLOR_ATTACHMENT0+Je;Q.length=we.length,me=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,me=!0);if(me)if(t.isWebGL2)n.drawBuffers(Q);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function O(z){return m!==z?(n.useProgram(z),m=z,!0):!1}const B={[Ks]:n.FUNC_ADD,[DM]:n.FUNC_SUBTRACT,[IM]:n.FUNC_REVERSE_SUBTRACT};if(i)B[sm]=n.MIN,B[om]=n.MAX;else{const z=e.get("EXT_blend_minmax");z!==null&&(B[sm]=z.MIN_EXT,B[om]=z.MAX_EXT)}const te={[UM]:n.ZERO,[NM]:n.ONE,[OM]:n.SRC_COLOR,[Fh]:n.SRC_ALPHA,[GM]:n.SRC_ALPHA_SATURATE,[zM]:n.DST_COLOR,[kM]:n.DST_ALPHA,[FM]:n.ONE_MINUS_SRC_COLOR,[kh]:n.ONE_MINUS_SRC_ALPHA,[HM]:n.ONE_MINUS_DST_COLOR,[BM]:n.ONE_MINUS_DST_ALPHA,[VM]:n.CONSTANT_COLOR,[WM]:n.ONE_MINUS_CONSTANT_COLOR,[XM]:n.CONSTANT_ALPHA,[$M]:n.ONE_MINUS_CONSTANT_ALPHA};function q(z,ye,Q,me,we,Je,mt,ke,Ne,ze){if(z===hs){p===!0&&(it(n.BLEND),p=!1);return}if(p===!1&&(be(n.BLEND),p=!0),z!==LM){if(z!==y||ze!==R){if((v!==Ks||C!==Ks)&&(n.blendEquation(n.FUNC_ADD),v=Ks,C=Ks),ze)switch(z){case ca:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fl:n.blendFunc(n.ONE,n.ONE);break;case im:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ca:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case im:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}S=null,w=null,T=null,I=null,N.set(0,0,0),x=0,y=z,R=ze}return}we=we||ye,Je=Je||Q,mt=mt||me,(ye!==v||we!==C)&&(n.blendEquationSeparate(B[ye],B[we]),v=ye,C=we),(Q!==S||me!==w||Je!==T||mt!==I)&&(n.blendFuncSeparate(te[Q],te[me],te[Je],te[mt]),S=Q,w=me,T=Je,I=mt),(ke.equals(N)===!1||Ne!==x)&&(n.blendColor(ke.r,ke.g,ke.b,Ne),N.copy(ke),x=Ne),y=z,R=!1}function P(z,ye){z.side===Lr?it(n.CULL_FACE):be(n.CULL_FACE);let Q=z.side===Yn;ye&&(Q=!Q),oe(Q),z.blending===ca&&z.transparent===!1?q(hs):q(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),a.setMask(z.colorWrite);const me=z.stencilWrite;c.setTest(me),me&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),E(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?be(n.SAMPLE_ALPHA_TO_COVERAGE):it(n.SAMPLE_ALPHA_TO_COVERAGE)}function oe(z){F!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),F=z)}function ae(z){z!==CM?(be(n.CULL_FACE),z!==ne&&(z===nm?n.cullFace(n.BACK):z===RM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):it(n.CULL_FACE),ne=z}function ce(z){z!==U&&(G&&n.lineWidth(z),U=z)}function E(z,ye,Q){z?(be(n.POLYGON_OFFSET_FILL),(K!==ye||W!==Q)&&(n.polygonOffset(ye,Q),K=ye,W=Q)):it(n.POLYGON_OFFSET_FILL)}function b(z){z?be(n.SCISSOR_TEST):it(n.SCISSOR_TEST)}function k(z){z===void 0&&(z=n.TEXTURE0+X-1),ue!==z&&(n.activeTexture(z),ue=z)}function $(z,ye,Q){Q===void 0&&(ue===null?Q=n.TEXTURE0+X-1:Q=ue);let me=_e[Q];me===void 0&&(me={type:void 0,texture:void 0},_e[Q]=me),(me.type!==z||me.texture!==ye)&&(ue!==Q&&(n.activeTexture(Q),ue=Q),n.bindTexture(z,ye||Ce[z]),me.type=z,me.texture=ye)}function j(){const z=_e[ue];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xe(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function de(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _t(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function qe(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Re(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ae(z){he.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),he.copy(z))}function Le(z){ve.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),ve.copy(z))}function et(z,ye){let Q=h.get(ye);Q===void 0&&(Q=new WeakMap,h.set(ye,Q));let me=Q.get(z);me===void 0&&(me=n.getUniformBlockIndex(ye,z.name),Q.set(z,me))}function Ee(z,ye){const me=h.get(ye).get(z);u.get(ye)!==me&&(n.uniformBlockBinding(ye,me,z.__bindingPointIndex),u.set(ye,me))}function pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ue=null,_e={},f={},g=new WeakMap,_=[],m=null,p=!1,y=null,v=null,S=null,w=null,C=null,T=null,I=null,N=new gt(0,0,0),x=0,R=!1,F=null,ne=null,U=null,K=null,W=null,he.set(0,0,n.canvas.width,n.canvas.height),ve.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:be,disable:it,bindFramebuffer:Fe,drawBuffers:M,useProgram:O,setBlending:q,setMaterial:P,setFlipSided:oe,setCullFace:ae,setLineWidth:ce,setPolygonOffset:E,setScissorTest:b,activeTexture:k,bindTexture:$,unbindTexture:j,compressedTexImage2D:se,compressedTexImage3D:pe,texImage2D:qe,texImage3D:Re,updateUBOMapping:et,uniformBlockBinding:Ee,texStorage2D:le,texStorage3D:_t,texSubImage2D:xe,texSubImage3D:fe,compressedTexSubImage2D:de,compressedTexSubImage3D:Ge,scissor:Ae,viewport:Le,reset:pt}}function RA(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Qe,h=new WeakMap;let d;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,b){return g?new OffscreenCanvas(E,b):bu("canvas")}function m(E,b,k,$){let j=1;const se=ce(E);if((se.width>$||se.height>$)&&(j=$/Math.max(se.width,se.height)),j<1||b===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const pe=b?Xh:Math.floor,xe=pe(j*se.width),fe=pe(j*se.height);d===void 0&&(d=_(xe,fe));const de=k?_(xe,fe):d;return de.width=xe,de.height=fe,de.getContext("2d").drawImage(E,0,0,xe,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+xe+"x"+fe+")."),de}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),E;return E}function p(E){const b=ce(E);return Nm(b.width)&&Nm(b.height)}function y(E){return a?!1:E.wrapS!==$i||E.wrapT!==$i||E.minFilter!==Vn&&E.minFilter!==Zn}function v(E,b){return E.generateMipmaps&&b&&E.minFilter!==Vn&&E.minFilter!==Zn}function S(E){n.generateMipmap(E)}function w(E,b,k,$,j=!1){if(a===!1)return b;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let se=b;if(b===n.RED&&(k===n.FLOAT&&(se=n.R32F),k===n.HALF_FLOAT&&(se=n.R16F),k===n.UNSIGNED_BYTE&&(se=n.R8)),b===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(se=n.R8UI),k===n.UNSIGNED_SHORT&&(se=n.R16UI),k===n.UNSIGNED_INT&&(se=n.R32UI),k===n.BYTE&&(se=n.R8I),k===n.SHORT&&(se=n.R16I),k===n.INT&&(se=n.R32I)),b===n.RG&&(k===n.FLOAT&&(se=n.RG32F),k===n.HALF_FLOAT&&(se=n.RG16F),k===n.UNSIGNED_BYTE&&(se=n.RG8)),b===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(se=n.RG8UI),k===n.UNSIGNED_SHORT&&(se=n.RG16UI),k===n.UNSIGNED_INT&&(se=n.RG32UI),k===n.BYTE&&(se=n.RG8I),k===n.SHORT&&(se=n.RG16I),k===n.INT&&(se=n.RG32I)),b===n.RGBA){const pe=j?xu:At.getTransfer($);k===n.FLOAT&&(se=n.RGBA32F),k===n.HALF_FLOAT&&(se=n.RGBA16F),k===n.UNSIGNED_BYTE&&(se=pe===Ft?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function C(E,b,k){return v(E,k)===!0||E.isFramebufferTexture&&E.minFilter!==Vn&&E.minFilter!==Zn?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function T(E){return E===Vn||E===am||E===Oa?n.NEAREST:n.LINEAR}function I(E){const b=E.target;b.removeEventListener("dispose",I),x(b),b.isVideoTexture&&h.delete(b)}function N(E){const b=E.target;b.removeEventListener("dispose",N),F(b)}function x(E){const b=i.get(E);if(b.__webglInit===void 0)return;const k=E.source,$=f.get(k);if($){const j=$[b.__cacheKey];j.usedTimes--,j.usedTimes===0&&R(E),Object.keys($).length===0&&f.delete(k)}i.remove(E)}function R(E){const b=i.get(E);n.deleteTexture(b.__webglTexture);const k=E.source,$=f.get(k);delete $[b.__cacheKey],o.memory.textures--}function F(E){const b=i.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let j=0;j<b.__webglFramebuffer[$].length;j++)n.deleteFramebuffer(b.__webglFramebuffer[$][j]);else n.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)n.deleteFramebuffer(b.__webglFramebuffer[$]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const k=E.textures;for(let $=0,j=k.length;$<j;$++){const se=i.get(k[$]);se.__webglTexture&&(n.deleteTexture(se.__webglTexture),o.memory.textures--),i.remove(k[$])}i.remove(E)}let ne=0;function U(){ne=0}function K(){const E=ne;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),ne+=1,E}function W(E){const b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.colorSpace),b.join()}function X(E,b){const k=i.get(E);if(E.isVideoTexture&&oe(E),E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){const $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(k,E,b);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+b)}function G(E,b){const k=i.get(E);if(E.version>0&&k.__version!==E.version){ve(k,E,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+b)}function re(E,b){const k=i.get(E);if(E.version>0&&k.__version!==E.version){ve(k,E,b);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+b)}function L(E,b){const k=i.get(E);if(E.version>0&&k.__version!==E.version){Pe(k,E,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+b)}const ue={[zh]:n.REPEAT,[$i]:n.CLAMP_TO_EDGE,[Hh]:n.MIRRORED_REPEAT},_e={[Vn]:n.NEAREST,[am]:n.NEAREST_MIPMAP_NEAREST,[Oa]:n.NEAREST_MIPMAP_LINEAR,[Zn]:n.LINEAR,[bf]:n.LINEAR_MIPMAP_NEAREST,[eo]:n.LINEAR_MIPMAP_LINEAR},Ve={[yb]:n.NEVER,[wb]:n.ALWAYS,[Sb]:n.LESS,[j0]:n.LEQUAL,[Mb]:n.EQUAL,[Tb]:n.GEQUAL,[bb]:n.GREATER,[Eb]:n.NOTEQUAL};function Z(E,b,k){if(b.type===Dr&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Zn||b.magFilter===bf||b.magFilter===Oa||b.magFilter===eo||b.minFilter===Zn||b.minFilter===bf||b.minFilter===Oa||b.minFilter===eo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),k?(n.texParameteri(E,n.TEXTURE_WRAP_S,ue[b.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ue[b.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ue[b.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,_e[b.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,_e[b.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==$i||b.wrapT!==$i)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,T(b.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,T(b.minFilter)),b.minFilter!==Vn&&b.minFilter!==Zn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Ve[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Vn||b.minFilter!==Oa&&b.minFilter!==eo||b.type===Dr&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===Il&&e.has("OES_texture_half_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function he(E,b){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",I));const $=b.source;let j=f.get($);j===void 0&&(j={},f.set($,j));const se=W(b);if(se!==E.__cacheKey){j[se]===void 0&&(j[se]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),j[se].usedTimes++;const pe=j[E.__cacheKey];pe!==void 0&&(j[E.__cacheKey].usedTimes--,pe.usedTimes===0&&R(b)),E.__cacheKey=se,E.__webglTexture=j[se].texture}return k}function ve(E,b,k){let $=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=n.TEXTURE_3D);const j=he(E,b),se=b.source;t.bindTexture($,E.__webglTexture,n.TEXTURE0+k);const pe=i.get(se);if(se.version!==pe.__version||j===!0){t.activeTexture(n.TEXTURE0+k);const xe=At.getPrimaries(At.workingColorSpace),fe=b.colorSpace===rs?null:At.getPrimaries(b.colorSpace),de=b.colorSpace===rs||xe===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ge=y(b)&&p(b.image)===!1;let le=m(b.image,Ge,!1,r.maxTextureSize);le=ae(b,le);const _t=p(le)||a,qe=s.convert(b.format,b.colorSpace);let Re=s.convert(b.type),Ae=w(b.internalFormat,qe,Re,b.colorSpace,b.isVideoTexture);Z($,b,_t);let Le;const et=b.mipmaps,Ee=a&&b.isVideoTexture!==!0&&Ae!==q0,pt=pe.__version===void 0||j===!0,z=se.dataReady,ye=C(b,le,_t);if(b.isDepthTexture)Ae=n.DEPTH_COMPONENT,a?b.type===Dr?Ae=n.DEPTH_COMPONENT32F:b.type===ss?Ae=n.DEPTH_COMPONENT24:b.type===oo?Ae=n.DEPTH24_STENCIL8:Ae=n.DEPTH_COMPONENT16:b.type===Dr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ao&&Ae===n.DEPTH_COMPONENT&&b.type!==Od&&b.type!==ss&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=ss,Re=s.convert(b.type)),b.format===Sa&&Ae===n.DEPTH_COMPONENT&&(Ae=n.DEPTH_STENCIL,b.type!==oo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=oo,Re=s.convert(b.type))),pt&&(Ee?t.texStorage2D(n.TEXTURE_2D,1,Ae,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Ae,le.width,le.height,0,qe,Re,null));else if(b.isDataTexture)if(et.length>0&&_t){Ee&&pt&&t.texStorage2D(n.TEXTURE_2D,ye,Ae,et[0].width,et[0].height);for(let Q=0,me=et.length;Q<me;Q++)Le=et[Q],Ee?z&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Le.width,Le.height,qe,Re,Le.data):t.texImage2D(n.TEXTURE_2D,Q,Ae,Le.width,Le.height,0,qe,Re,Le.data);b.generateMipmaps=!1}else Ee?(pt&&t.texStorage2D(n.TEXTURE_2D,ye,Ae,le.width,le.height),z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,qe,Re,le.data)):t.texImage2D(n.TEXTURE_2D,0,Ae,le.width,le.height,0,qe,Re,le.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ee&&pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ae,et[0].width,et[0].height,le.depth);for(let Q=0,me=et.length;Q<me;Q++)Le=et[Q],b.format!==Yi?qe!==null?Ee?z&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Le.width,Le.height,le.depth,qe,Le.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Ae,Le.width,Le.height,le.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Le.width,Le.height,le.depth,qe,Re,Le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Ae,Le.width,Le.height,le.depth,0,qe,Re,Le.data)}else{Ee&&pt&&t.texStorage2D(n.TEXTURE_2D,ye,Ae,et[0].width,et[0].height);for(let Q=0,me=et.length;Q<me;Q++)Le=et[Q],b.format!==Yi?qe!==null?Ee?z&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,Le.width,Le.height,qe,Le.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Ae,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?z&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Le.width,Le.height,qe,Re,Le.data):t.texImage2D(n.TEXTURE_2D,Q,Ae,Le.width,Le.height,0,qe,Re,Le.data)}else if(b.isDataArrayTexture)Ee?(pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ae,le.width,le.height,le.depth),z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,qe,Re,le.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,le.width,le.height,le.depth,0,qe,Re,le.data);else if(b.isData3DTexture)Ee?(pt&&t.texStorage3D(n.TEXTURE_3D,ye,Ae,le.width,le.height,le.depth),z&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,qe,Re,le.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,le.width,le.height,le.depth,0,qe,Re,le.data);else if(b.isFramebufferTexture){if(pt)if(Ee)t.texStorage2D(n.TEXTURE_2D,ye,Ae,le.width,le.height);else{let Q=le.width,me=le.height;for(let we=0;we<ye;we++)t.texImage2D(n.TEXTURE_2D,we,Ae,Q,me,0,qe,Re,null),Q>>=1,me>>=1}}else if(et.length>0&&_t){if(Ee&&pt){const Q=ce(et[0]);t.texStorage2D(n.TEXTURE_2D,ye,Ae,Q.width,Q.height)}for(let Q=0,me=et.length;Q<me;Q++)Le=et[Q],Ee?z&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,qe,Re,Le):t.texImage2D(n.TEXTURE_2D,Q,Ae,qe,Re,Le);b.generateMipmaps=!1}else if(Ee){if(pt){const Q=ce(le);t.texStorage2D(n.TEXTURE_2D,ye,Ae,Q.width,Q.height)}z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,qe,Re,le)}else t.texImage2D(n.TEXTURE_2D,0,Ae,qe,Re,le);v(b,_t)&&S($),pe.__version=se.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function Pe(E,b,k){if(b.image.length!==6)return;const $=he(E,b),j=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+k);const se=i.get(j);if(j.version!==se.__version||$===!0){t.activeTexture(n.TEXTURE0+k);const pe=At.getPrimaries(At.workingColorSpace),xe=b.colorSpace===rs?null:At.getPrimaries(b.colorSpace),fe=b.colorSpace===rs||pe===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const de=b.isCompressedTexture||b.image[0].isCompressedTexture,Ge=b.image[0]&&b.image[0].isDataTexture,le=[];for(let Q=0;Q<6;Q++)!de&&!Ge?le[Q]=m(b.image[Q],!1,!0,r.maxCubemapSize):le[Q]=Ge?b.image[Q].image:b.image[Q],le[Q]=ae(b,le[Q]);const _t=le[0],qe=p(_t)||a,Re=s.convert(b.format,b.colorSpace),Ae=s.convert(b.type),Le=w(b.internalFormat,Re,Ae,b.colorSpace),et=a&&b.isVideoTexture!==!0,Ee=se.__version===void 0||$===!0,pt=j.dataReady;let z=C(b,_t,qe);Z(n.TEXTURE_CUBE_MAP,b,qe);let ye;if(de){et&&Ee&&t.texStorage2D(n.TEXTURE_CUBE_MAP,z,Le,_t.width,_t.height);for(let Q=0;Q<6;Q++){ye=le[Q].mipmaps;for(let me=0;me<ye.length;me++){const we=ye[me];b.format!==Yi?Re!==null?et?pt&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,0,0,we.width,we.height,Re,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,Le,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?pt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,0,0,we.width,we.height,Re,Ae,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,Le,we.width,we.height,0,Re,Ae,we.data)}}}else{if(ye=b.mipmaps,et&&Ee){ye.length>0&&z++;const Q=ce(le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,z,Le,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(Ge){et?pt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,le[Q].width,le[Q].height,Re,Ae,le[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Le,le[Q].width,le[Q].height,0,Re,Ae,le[Q].data);for(let me=0;me<ye.length;me++){const Je=ye[me].image[Q].image;et?pt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,0,0,Je.width,Je.height,Re,Ae,Je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,Le,Je.width,Je.height,0,Re,Ae,Je.data)}}else{et?pt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Re,Ae,le[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Le,Re,Ae,le[Q]);for(let me=0;me<ye.length;me++){const we=ye[me];et?pt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,0,0,Re,Ae,we.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,Le,Re,Ae,we.image[Q])}}}v(b,qe)&&S(n.TEXTURE_CUBE_MAP),se.__version=j.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function Ce(E,b,k,$,j,se){const pe=s.convert(k.format,k.colorSpace),xe=s.convert(k.type),fe=w(k.internalFormat,pe,xe,k.colorSpace);if(!i.get(b).__hasExternalTextures){const Ge=Math.max(1,b.width>>se),le=Math.max(1,b.height>>se);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,se,fe,Ge,le,b.depth,0,pe,xe,null):t.texImage2D(j,se,fe,Ge,le,0,pe,xe,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),P(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,j,i.get(k).__webglTexture,0,q(b)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,j,i.get(k).__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function be(E,b,k){if(n.bindRenderbuffer(n.RENDERBUFFER,E),b.depthBuffer&&!b.stencilBuffer){let $=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(k||P(b)){const j=b.depthTexture;j&&j.isDepthTexture&&(j.type===Dr?$=n.DEPTH_COMPONENT32F:j.type===ss&&($=n.DEPTH_COMPONENT24));const se=q(b);P(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,$,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,se,$,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,$,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(b.depthBuffer&&b.stencilBuffer){const $=q(b);k&&P(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,$,n.DEPTH24_STENCIL8,b.width,b.height):P(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{const $=b.textures;for(let j=0;j<$.length;j++){const se=$[j],pe=s.convert(se.format,se.colorSpace),xe=s.convert(se.type),fe=w(se.internalFormat,pe,xe,se.colorSpace),de=q(b);k&&P(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,fe,b.width,b.height):P(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,fe,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,fe,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function it(E,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),X(b.depthTexture,0);const $=i.get(b.depthTexture).__webglTexture,j=q(b);if(b.depthTexture.format===ao)P(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(b.depthTexture.format===Sa)P(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Fe(E){const b=i.get(E),k=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");it(b.__webglFramebuffer,E)}else if(k){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]=n.createRenderbuffer(),be(b.__webglDepthbuffer[$],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),be(b.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function M(E,b,k){const $=i.get(E);b!==void 0&&Ce($.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Fe(E)}function O(E){const b=E.texture,k=i.get(E),$=i.get(b);E.addEventListener("dispose",N);const j=E.textures,se=E.isWebGLCubeRenderTarget===!0,pe=j.length>1,xe=p(E)||a;if(pe||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=b.version,o.memory.textures++),se){k.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(a&&b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[fe]=[];for(let de=0;de<b.mipmaps.length;de++)k.__webglFramebuffer[fe][de]=n.createFramebuffer()}else k.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let fe=0;fe<b.mipmaps.length;fe++)k.__webglFramebuffer[fe]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(pe)if(r.drawBuffers)for(let fe=0,de=j.length;fe<de;fe++){const Ge=i.get(j[fe]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=n.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&P(E)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let fe=0;fe<j.length;fe++){const de=j[fe];k.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[fe]);const Ge=s.convert(de.format,de.colorSpace),le=s.convert(de.type),_t=w(de.internalFormat,Ge,le,de.colorSpace,E.isXRRenderTarget===!0),qe=q(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,_t,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,k.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),be(k.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),Z(n.TEXTURE_CUBE_MAP,b,xe);for(let fe=0;fe<6;fe++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let de=0;de<b.mipmaps.length;de++)Ce(k.__webglFramebuffer[fe][de],E,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,de);else Ce(k.__webglFramebuffer[fe],E,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);v(b,xe)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let fe=0,de=j.length;fe<de;fe++){const Ge=j[fe],le=i.get(Ge);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),Z(n.TEXTURE_2D,Ge,xe),Ce(k.__webglFramebuffer,E,Ge,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),v(Ge,xe)&&S(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?fe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,$.__webglTexture),Z(fe,b,xe),a&&b.mipmaps&&b.mipmaps.length>0)for(let de=0;de<b.mipmaps.length;de++)Ce(k.__webglFramebuffer[de],E,b,n.COLOR_ATTACHMENT0,fe,de);else Ce(k.__webglFramebuffer,E,b,n.COLOR_ATTACHMENT0,fe,0);v(b,xe)&&S(fe),t.unbindTexture()}E.depthBuffer&&Fe(E)}function B(E){const b=p(E)||a,k=E.textures;for(let $=0,j=k.length;$<j;$++){const se=k[$];if(v(se,b)){const pe=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,xe=i.get(se).__webglTexture;t.bindTexture(pe,xe),S(pe),t.unbindTexture()}}}function te(E){if(a&&E.samples>0&&P(E)===!1){const b=E.textures,k=E.width,$=E.height;let j=n.COLOR_BUFFER_BIT;const se=[],pe=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(E),fe=b.length>1;if(fe)for(let de=0;de<b.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let de=0;de<b.length;de++){se.push(n.COLOR_ATTACHMENT0+de),E.depthBuffer&&se.push(pe);const Ge=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(Ge===!1&&(E.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),fe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[de]),Ge===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[pe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[pe])),fe){const le=i.get(b[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,k,$,0,0,k,$,j,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let de=0;de<b.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,xe.__webglColorRenderbuffer[de]);const Ge=i.get(b[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,Ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function q(E){return Math.min(r.maxSamples,E.samples)}function P(E){const b=i.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function oe(E){const b=o.render.frame;h.get(E)!==b&&(h.set(E,b),E.update())}function ae(E,b){const k=E.colorSpace,$=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Vh||k!==Ts&&k!==rs&&(At.getTransfer(k)===Ft?a===!1?e.has("EXT_sRGB")===!0&&$===Yi?(E.format=Vh,E.minFilter=Zn,E.generateMipmaps=!1):b=J0.sRGBToLinear(b):($!==Yi||j!==ps)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}function ce(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(u.width=E.naturalWidth||E.width,u.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(u.width=E.displayWidth,u.height=E.displayHeight):(u.width=E.width,u.height=E.height),u}this.allocateTextureUnit=K,this.resetTextureUnits=U,this.setTexture2D=X,this.setTexture2DArray=G,this.setTexture3D=re,this.setTextureCube=L,this.rebindTextures=M,this.setupRenderTarget=O,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=P}function PA(n,e,t){const i=t.isWebGL2;function r(s,o=rs){let a;const l=At.getTransfer(o);if(s===ps)return n.UNSIGNED_BYTE;if(s===V0)return n.UNSIGNED_SHORT_4_4_4_4;if(s===W0)return n.UNSIGNED_SHORT_5_5_5_1;if(s===lb)return n.BYTE;if(s===cb)return n.SHORT;if(s===Od)return n.UNSIGNED_SHORT;if(s===G0)return n.INT;if(s===ss)return n.UNSIGNED_INT;if(s===Dr)return n.FLOAT;if(s===Il)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ub)return n.ALPHA;if(s===Yi)return n.RGBA;if(s===fb)return n.LUMINANCE;if(s===hb)return n.LUMINANCE_ALPHA;if(s===ao)return n.DEPTH_COMPONENT;if(s===Sa)return n.DEPTH_STENCIL;if(s===Vh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===db)return n.RED;if(s===X0)return n.RED_INTEGER;if(s===pb)return n.RG;if(s===$0)return n.RG_INTEGER;if(s===Y0)return n.RGBA_INTEGER;if(s===Ef||s===Tf||s===wf||s===Af)if(l===Ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ef)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Tf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===wf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Af)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ef)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Tf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Af)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===lm||s===cm||s===um||s===fm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===lm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===cm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===um)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===q0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===hm||s===dm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===hm)return l===Ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===dm)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===pm||s===mm||s===gm||s===_m||s===vm||s===xm||s===ym||s===Sm||s===Mm||s===bm||s===Em||s===Tm||s===wm||s===Am)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===pm)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===mm)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===gm)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_m)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===vm)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===xm)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ym)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Sm)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Mm)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===bm)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Em)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Tm)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===wm)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Am)return l===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Cf||s===Cm||s===Rm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Cf)return l===Ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Cm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Rm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===mb||s===Pm||s===Lm||s===Dm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Cf)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Pm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Lm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Dm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===oo?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class LA extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Za extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DA={type:"move"};class th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Za,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Za,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Za,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(DA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Za;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const IA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class NA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new qn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new pr({extensions:{fragDepth:!0},vertexShader:IA,fragmentShader:UA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ui(new ef(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class OA extends Pa{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const _=new NA,m=t.getContextAttributes();let p=null,y=null;const v=[],S=[],w=new Qe;let C=null;const T=new fi;T.layers.enable(1),T.viewport=new Ht;const I=new fi;I.layers.enable(2),I.viewport=new Ht;const N=[T,I],x=new LA;x.layers.enable(1),x.layers.enable(2);let R=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let he=v[Z];return he===void 0&&(he=new th,v[Z]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Z){let he=v[Z];return he===void 0&&(he=new th,v[Z]=he),he.getGripSpace()},this.getHand=function(Z){let he=v[Z];return he===void 0&&(he=new th,v[Z]=he),he.getHandSpace()};function ne(Z){const he=S.indexOf(Z.inputSource);if(he===-1)return;const ve=v[he];ve!==void 0&&(ve.update(Z.inputSource,Z.frame,c||o),ve.dispatchEvent({type:Z.type,data:Z.inputSource}))}function U(){r.removeEventListener("select",ne),r.removeEventListener("selectstart",ne),r.removeEventListener("selectend",ne),r.removeEventListener("squeeze",ne),r.removeEventListener("squeezestart",ne),r.removeEventListener("squeezeend",ne),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",K);for(let Z=0;Z<v.length;Z++){const he=S[Z];he!==null&&(S[Z]=null,v[Z].disconnect(he))}R=null,F=null,_.reset(),e.setRenderTarget(p),f=null,d=null,h=null,r=null,y=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",ne),r.addEventListener("selectstart",ne),r.addEventListener("selectend",ne),r.addEventListener("squeeze",ne),r.addEventListener("squeezestart",ne),r.addEventListener("squeezeend",ne),r.addEventListener("end",U),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const he={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new go(f.framebufferWidth,f.framebufferHeight,{format:Yi,type:ps,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let he=null,ve=null,Pe=null;m.depth&&(Pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=m.stencil?Sa:ao,ve=m.stencil?oo:ss);const Ce={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(Ce),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new go(d.textureWidth,d.textureHeight,{format:Yi,type:ps,depthTexture:new uv(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const be=e.properties.get(y);be.__ignoreDepthValues=d.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function K(Z){for(let he=0;he<Z.removed.length;he++){const ve=Z.removed[he],Pe=S.indexOf(ve);Pe>=0&&(S[Pe]=null,v[Pe].disconnect(ve))}for(let he=0;he<Z.added.length;he++){const ve=Z.added[he];let Pe=S.indexOf(ve);if(Pe===-1){for(let be=0;be<v.length;be++)if(be>=S.length){S.push(ve),Pe=be;break}else if(S[be]===null){S[be]=ve,Pe=be;break}if(Pe===-1)break}const Ce=v[Pe];Ce&&Ce.connect(ve)}}const W=new H,X=new H;function G(Z,he,ve){W.setFromMatrixPosition(he.matrixWorld),X.setFromMatrixPosition(ve.matrixWorld);const Pe=W.distanceTo(X),Ce=he.projectionMatrix.elements,be=ve.projectionMatrix.elements,it=Ce[14]/(Ce[10]-1),Fe=Ce[14]/(Ce[10]+1),M=(Ce[9]+1)/Ce[5],O=(Ce[9]-1)/Ce[5],B=(Ce[8]-1)/Ce[0],te=(be[8]+1)/be[0],q=it*B,P=it*te,oe=Pe/(-B+te),ae=oe*-B;he.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ae),Z.translateZ(oe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const ce=it+oe,E=Fe+oe,b=q-ae,k=P+(Pe-ae),$=M*Fe/E*ce,j=O*Fe/E*ce;Z.projectionMatrix.makePerspective(b,k,$,j,ce,E),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function re(Z,he){he===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(he.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;_.texture!==null&&(Z.near=_.depthNear,Z.far=_.depthFar),x.near=I.near=T.near=Z.near,x.far=I.far=T.far=Z.far,(R!==x.near||F!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,F=x.far,T.near=R,T.far=F,I.near=R,I.far=F,T.updateProjectionMatrix(),I.updateProjectionMatrix(),Z.updateProjectionMatrix());const he=Z.parent,ve=x.cameras;re(x,he);for(let Pe=0;Pe<ve.length;Pe++)re(ve[Pe],he);ve.length===2?G(x,T,I):x.projectionMatrix.copy(T.projectionMatrix),L(Z,x,he)};function L(Z,he,ve){ve===null?Z.matrix.copy(he.matrixWorld):(Z.matrix.copy(ve.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(he.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(he.projectionMatrix),Z.projectionMatrixInverse.copy(he.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Wh*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null};let ue=null;function _e(Z,he){if(u=he.getViewerPose(c||o),g=he,u!==null){const ve=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Pe=!1;ve.length!==x.cameras.length&&(x.cameras.length=0,Pe=!0);for(let be=0;be<ve.length;be++){const it=ve[be];let Fe=null;if(f!==null)Fe=f.getViewport(it);else{const O=h.getViewSubImage(d,it);Fe=O.viewport,be===0&&(e.setRenderTargetTextures(y,O.colorTexture,d.ignoreDepthValues?void 0:O.depthStencilTexture),e.setRenderTarget(y))}let M=N[be];M===void 0&&(M=new fi,M.layers.enable(be),M.viewport=new Ht,N[be]=M),M.matrix.fromArray(it.transform.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale),M.projectionMatrix.fromArray(it.projectionMatrix),M.projectionMatrixInverse.copy(M.projectionMatrix).invert(),M.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),be===0&&(x.matrix.copy(M.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Pe===!0&&x.cameras.push(M)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const be=h.getDepthInformation(ve[0]);be&&be.isValid&&be.texture&&_.init(e,be,r.renderState)}}for(let ve=0;ve<v.length;ve++){const Pe=S[ve],Ce=v[ve];Pe!==null&&Ce!==void 0&&Ce.update(Pe,he,c||o)}_.render(e,x),ue&&ue(Z,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),g=null}const Ve=new cv;Ve.setAnimationLoop(_e),this.setAnimationLoop=function(Z){ue=Z},this.dispose=function(){}}}const Bs=new Gr,FA=new kt;function kA(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ov(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,v,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Yn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Yn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),v=y.envMap,S=y.envMapRotation;if(v&&(m.envMap.value=v,Bs.copy(S),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),m.envMapRotation.value.setFromMatrix4(FA.makeRotationFromEuler(Bs)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const w=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*w,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function BA(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const S=v.program;i.uniformBlockBinding(y,S)}function c(y,v){let S=r[y.id];S===void 0&&(g(y),S=u(y),r[y.id]=S,y.addEventListener("dispose",m));const w=v.program;i.updateUBOMapping(y,w);const C=e.render.frame;s[y.id]!==C&&(d(y),s[y.id]=C)}function u(y){const v=h();y.__bindingPointIndex=v;const S=n.createBuffer(),w=y.__size,C=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,w,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,S),S}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=r[y.id],S=y.uniforms,w=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let C=0,T=S.length;C<T;C++){const I=Array.isArray(S[C])?S[C]:[S[C]];for(let N=0,x=I.length;N<x;N++){const R=I[N];if(f(R,C,N,w)===!0){const F=R.__offset,ne=Array.isArray(R.value)?R.value:[R.value];let U=0;for(let K=0;K<ne.length;K++){const W=ne[K],X=_(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,F+U,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,U),U+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,v,S,w){const C=y.value,T=v+"_"+S;if(w[T]===void 0)return typeof C=="number"||typeof C=="boolean"?w[T]=C:w[T]=C.clone(),!0;{const I=w[T];if(typeof C=="number"||typeof C=="boolean"){if(I!==C)return w[T]=C,!0}else if(I.equals(C)===!1)return I.copy(C),!0}return!1}function g(y){const v=y.uniforms;let S=0;const w=16;for(let T=0,I=v.length;T<I;T++){const N=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,R=N.length;x<R;x++){const F=N[x],ne=Array.isArray(F.value)?F.value:[F.value];for(let U=0,K=ne.length;U<K;U++){const W=ne[U],X=_(W),G=S%w;G!==0&&w-G<X.boundary&&(S+=w-G),F.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=X.storage}}}const C=S%w;return C>0&&(S+=w-C),y.__size=S,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class gv{constructor(e={}){const{canvas:t=Cb(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xi,this._useLegacyLights=!1,this.toneMapping=ds,this.toneMappingExposure=1;const v=this;let S=!1,w=0,C=0,T=null,I=-1,N=null;const x=new Ht,R=new Ht;let F=null;const ne=new gt(0);let U=0,K=t.width,W=t.height,X=1,G=null,re=null;const L=new Ht(0,0,K,W),ue=new Ht(0,0,K,W);let _e=!1;const Ve=new Bd;let Z=!1,he=!1,ve=null;const Pe=new kt,Ce=new Qe,be=new H,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return T===null?X:1}let M=i;function O(A,V){for(let ee=0;ee<A.length;ee++){const J=A[ee],Y=t.getContext(J,V);if(Y!==null)return Y}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nd}`),t.addEventListener("webglcontextlost",pt,!1),t.addEventListener("webglcontextrestored",z,!1),t.addEventListener("webglcontextcreationerror",ye,!1),M===null){const V=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&V.shift(),M=O(V,A),M===null)throw O(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&M instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),M.getShaderPrecisionFormat===void 0&&(M.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let B,te,q,P,oe,ae,ce,E,b,k,$,j,se,pe,xe,fe,de,Ge,le,_t,qe,Re,Ae,Le;function et(){B=new XT(M),te=new kT(M,B,e),B.init(te),Re=new PA(M,B,te),q=new CA(M,B,te),P=new qT(M),oe=new pA,ae=new RA(M,B,q,oe,te,Re,P),ce=new zT(v),E=new WT(v),b=new Qb(M,te),Ae=new OT(M,B,b,te),k=new $T(M,b,P,Ae),$=new JT(M,k,b,P),le=new ZT(M,te,ae),fe=new BT(oe),j=new dA(v,ce,E,B,te,Ae,fe),se=new kA(v,oe),pe=new gA,xe=new MA(B,te),Ge=new NT(v,ce,E,q,$,d,l),de=new AA(v,$,te),Le=new BA(M,P,te,q),_t=new FT(M,B,P,te),qe=new YT(M,B,P,te),P.programs=j.programs,v.capabilities=te,v.extensions=B,v.properties=oe,v.renderLists=pe,v.shadowMap=de,v.state=q,v.info=P}et();const Ee=new OA(v,M);this.xr=Ee,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const A=B.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=B.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(K,W,!1))},this.getSize=function(A){return A.set(K,W)},this.setSize=function(A,V,ee=!0){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=A,W=V,t.width=Math.floor(A*X),t.height=Math.floor(V*X),ee===!0&&(t.style.width=A+"px",t.style.height=V+"px"),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(K*X,W*X).floor()},this.setDrawingBufferSize=function(A,V,ee){K=A,W=V,X=ee,t.width=Math.floor(A*ee),t.height=Math.floor(V*ee),this.setViewport(0,0,A,V)},this.getCurrentViewport=function(A){return A.copy(x)},this.getViewport=function(A){return A.copy(L)},this.setViewport=function(A,V,ee,J){A.isVector4?L.set(A.x,A.y,A.z,A.w):L.set(A,V,ee,J),q.viewport(x.copy(L).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(ue)},this.setScissor=function(A,V,ee,J){A.isVector4?ue.set(A.x,A.y,A.z,A.w):ue.set(A,V,ee,J),q.scissor(R.copy(ue).multiplyScalar(X).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(A){q.setScissorTest(_e=A)},this.setOpaqueSort=function(A){G=A},this.setTransparentSort=function(A){re=A},this.getClearColor=function(A){return A.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor.apply(Ge,arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha.apply(Ge,arguments)},this.clear=function(A=!0,V=!0,ee=!0){let J=0;if(A){let Y=!1;if(T!==null){const Se=T.texture.format;Y=Se===Y0||Se===$0||Se===X0}if(Y){const Se=T.texture.type,Ie=Se===ps||Se===ss||Se===Od||Se===oo||Se===V0||Se===W0,$e=Ge.getClearColor(),Oe=Ge.getClearAlpha(),Be=$e.r,Ye=$e.g,nt=$e.b;Ie?(f[0]=Be,f[1]=Ye,f[2]=nt,f[3]=Oe,M.clearBufferuiv(M.COLOR,0,f)):(g[0]=Be,g[1]=Ye,g[2]=nt,g[3]=Oe,M.clearBufferiv(M.COLOR,0,g))}else J|=M.COLOR_BUFFER_BIT}V&&(J|=M.DEPTH_BUFFER_BIT),ee&&(J|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pt,!1),t.removeEventListener("webglcontextrestored",z,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),pe.dispose(),xe.dispose(),oe.dispose(),ce.dispose(),E.dispose(),$.dispose(),Ae.dispose(),Le.dispose(),j.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Ne),Ee.removeEventListener("sessionend",ze),ve&&(ve.dispose(),ve=null),ge.stop()};function pt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=P.autoReset,V=de.enabled,ee=de.autoUpdate,J=de.needsUpdate,Y=de.type;et(),P.autoReset=A,de.enabled=V,de.autoUpdate=ee,de.needsUpdate=J,de.type=Y}function ye(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Q(A){const V=A.target;V.removeEventListener("dispose",Q),me(V)}function me(A){we(A),oe.remove(A)}function we(A){const V=oe.get(A).programs;V!==void 0&&(V.forEach(function(ee){j.releaseProgram(ee)}),A.isShaderMaterial&&j.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,ee,J,Y,Se){V===null&&(V=it);const Ie=Y.isMesh&&Y.matrixWorld.determinant()<0,$e=It(A,V,ee,J,Y);q.setMaterial(J,Ie);let Oe=ee.index,Be=1;if(J.wireframe===!0){if(Oe=k.getWireframeAttribute(ee),Oe===void 0)return;Be=2}const Ye=ee.drawRange,nt=ee.attributes.position;let Bt=Ye.start*Be,nn=(Ye.start+Ye.count)*Be;Se!==null&&(Bt=Math.max(Bt,Se.start*Be),nn=Math.min(nn,(Se.start+Se.count)*Be)),Oe!==null?(Bt=Math.max(Bt,0),nn=Math.min(nn,Oe.count)):nt!=null&&(Bt=Math.max(Bt,0),nn=Math.min(nn,nt.count));const bt=nn-Bt;if(bt<0||bt===1/0)return;Ae.setup(Y,J,$e,ee,Oe);let Un,Tt=_t;if(Oe!==null&&(Un=b.get(Oe),Tt=qe,Tt.setIndex(Un)),Y.isMesh)J.wireframe===!0?(q.setLineWidth(J.wireframeLinewidth*Fe()),Tt.setMode(M.LINES)):Tt.setMode(M.TRIANGLES);else if(Y.isLine){let je=J.linewidth;je===void 0&&(je=1),q.setLineWidth(je*Fe()),Y.isLineSegments?Tt.setMode(M.LINES):Y.isLineLoop?Tt.setMode(M.LINE_LOOP):Tt.setMode(M.LINE_STRIP)}else Y.isPoints?Tt.setMode(M.POINTS):Y.isSprite&&Tt.setMode(M.TRIANGLES);if(Y.isBatchedMesh)Tt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)Tt.renderInstances(Bt,bt,Y.count);else if(ee.isInstancedBufferGeometry){const je=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,af=Math.min(ee.instanceCount,je);Tt.renderInstances(Bt,bt,af)}else Tt.render(Bt,bt)};function Je(A,V,ee){A.transparent===!0&&A.side===Lr&&A.forceSinglePass===!1?(A.side=Yn,A.needsUpdate=!0,Dt(A,V,ee),A.side=Hr,A.needsUpdate=!0,Dt(A,V,ee),A.side=Lr):Dt(A,V,ee)}this.compile=function(A,V,ee=null){ee===null&&(ee=A),m=xe.get(ee),m.init(),y.push(m),ee.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),A!==ee&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights(v._useLegacyLights);const J=new Set;return A.traverse(function(Y){const Se=Y.material;if(Se)if(Array.isArray(Se))for(let Ie=0;Ie<Se.length;Ie++){const $e=Se[Ie];Je($e,ee,Y),J.add($e)}else Je(Se,ee,Y),J.add(Se)}),y.pop(),m=null,J},this.compileAsync=function(A,V,ee=null){const J=this.compile(A,V,ee);return new Promise(Y=>{function Se(){if(J.forEach(function(Ie){oe.get(Ie).currentProgram.isReady()&&J.delete(Ie)}),J.size===0){Y(A);return}setTimeout(Se,10)}B.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let mt=null;function ke(A){mt&&mt(A)}function Ne(){ge.stop()}function ze(){ge.start()}const ge=new cv;ge.setAnimationLoop(ke),typeof self<"u"&&ge.setContext(self),this.setAnimationLoop=function(A){mt=A,Ee.setAnimationLoop(A),A===null?ge.stop():ge.start()},Ee.addEventListener("sessionstart",Ne),Ee.addEventListener("sessionend",ze),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(V),V=Ee.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,V,T),m=xe.get(A,y.length),m.init(),y.push(m),Pe.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Ve.setFromProjectionMatrix(Pe),he=this.localClippingEnabled,Z=fe.init(this.clippingPlanes,he),_=pe.get(A,p.length),_.init(),p.push(_),Xe(A,V,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(G,re),this.info.render.frame++,Z===!0&&fe.beginShadows();const ee=m.state.shadowsArray;if(de.render(ee,A,V),Z===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1)&&Ge.render(_,A),m.setupLights(v._useLegacyLights),V.isArrayCamera){const J=V.cameras;for(let Y=0,Se=J.length;Y<Se;Y++){const Ie=J[Y];We(_,A,Ie,Ie.viewport)}}else We(_,A,V);T!==null&&(ae.updateMultisampleRenderTarget(T),ae.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(v,A,V),Ae.resetDefaultState(),I=-1,N=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Xe(A,V,ee,J){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)ee=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ve.intersectsSprite(A)){J&&be.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Pe);const Ie=$.update(A),$e=A.material;$e.visible&&_.push(A,Ie,$e,ee,be.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ve.intersectsObject(A))){const Ie=$.update(A),$e=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),be.copy(A.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),be.copy(Ie.boundingSphere.center)),be.applyMatrix4(A.matrixWorld).applyMatrix4(Pe)),Array.isArray($e)){const Oe=Ie.groups;for(let Be=0,Ye=Oe.length;Be<Ye;Be++){const nt=Oe[Be],Bt=$e[nt.materialIndex];Bt&&Bt.visible&&_.push(A,Ie,Bt,ee,be.z,nt)}}else $e.visible&&_.push(A,Ie,$e,ee,be.z,null)}}const Se=A.children;for(let Ie=0,$e=Se.length;Ie<$e;Ie++)Xe(Se[Ie],V,ee,J)}function We(A,V,ee,J){const Y=A.opaque,Se=A.transmissive,Ie=A.transparent;m.setupLightsView(ee),Z===!0&&fe.setGlobalState(v.clippingPlanes,ee),Se.length>0&&tt(Y,Se,V,ee),J&&q.viewport(x.copy(J)),Y.length>0&&Wt(Y,V,ee),Se.length>0&&Wt(Se,V,ee),Ie.length>0&&Wt(Ie,V,ee),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function tt(A,V,ee,J){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;const Se=te.isWebGL2;ve===null&&(ve=new go(1,1,{generateMipmaps:!0,type:B.has("EXT_color_buffer_half_float")?Il:ps,minFilter:eo,samples:Se?4:0})),v.getDrawingBufferSize(Ce),Se?ve.setSize(Ce.x,Ce.y):ve.setSize(Xh(Ce.x),Xh(Ce.y));const Ie=v.getRenderTarget();v.setRenderTarget(ve),v.getClearColor(ne),U=v.getClearAlpha(),U<1&&v.setClearColor(16777215,.5),v.clear();const $e=v.toneMapping;v.toneMapping=ds,Wt(A,ee,J),ae.updateMultisampleRenderTarget(ve),ae.updateRenderTargetMipmap(ve);let Oe=!1;for(let Be=0,Ye=V.length;Be<Ye;Be++){const nt=V[Be],Bt=nt.object,nn=nt.geometry,bt=nt.material,Un=nt.group;if(bt.side===Lr&&Bt.layers.test(J.layers)){const Tt=bt.side;bt.side=Yn,bt.needsUpdate=!0,ut(Bt,ee,J,nn,bt,Un),bt.side=Tt,bt.needsUpdate=!0,Oe=!0}}Oe===!0&&(ae.updateMultisampleRenderTarget(ve),ae.updateRenderTargetMipmap(ve)),v.setRenderTarget(Ie),v.setClearColor(ne,U),v.toneMapping=$e}function Wt(A,V,ee){const J=V.isScene===!0?V.overrideMaterial:null;for(let Y=0,Se=A.length;Y<Se;Y++){const Ie=A[Y],$e=Ie.object,Oe=Ie.geometry,Be=J===null?Ie.material:J,Ye=Ie.group;$e.layers.test(ee.layers)&&ut($e,V,ee,Oe,Be,Ye)}}function ut(A,V,ee,J,Y,Se){A.onBeforeRender(v,V,ee,J,Y,Se),A.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(v,V,ee,J,A,Se),Y.transparent===!0&&Y.side===Lr&&Y.forceSinglePass===!1?(Y.side=Yn,Y.needsUpdate=!0,v.renderBufferDirect(ee,V,J,Y,A,Se),Y.side=Hr,Y.needsUpdate=!0,v.renderBufferDirect(ee,V,J,Y,A,Se),Y.side=Lr):v.renderBufferDirect(ee,V,J,Y,A,Se),A.onAfterRender(v,V,ee,J,Y,Se)}function Dt(A,V,ee){V.isScene!==!0&&(V=it);const J=oe.get(A),Y=m.state.lights,Se=m.state.shadowsArray,Ie=Y.state.version,$e=j.getParameters(A,Y.state,Se,V,ee),Oe=j.getProgramCacheKey($e);let Be=J.programs;J.environment=A.isMeshStandardMaterial?V.environment:null,J.fog=V.fog,J.envMap=(A.isMeshStandardMaterial?E:ce).get(A.envMap||J.environment),J.envMapRotation=J.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,Be===void 0&&(A.addEventListener("dispose",Q),Be=new Map,J.programs=Be);let Ye=Be.get(Oe);if(Ye!==void 0){if(J.currentProgram===Ye&&J.lightsStateVersion===Ie)return Ot(A,$e),Ye}else $e.uniforms=j.getUniforms(A),A.onBuild(ee,$e,v),A.onBeforeCompile($e,v),Ye=j.acquireProgram($e,Oe),Be.set(Oe,Ye),J.uniforms=$e.uniforms;const nt=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(nt.clippingPlanes=fe.uniform),Ot(A,$e),J.needsLights=si(A),J.lightsStateVersion=Ie,J.needsLights&&(nt.ambientLightColor.value=Y.state.ambient,nt.lightProbe.value=Y.state.probe,nt.directionalLights.value=Y.state.directional,nt.directionalLightShadows.value=Y.state.directionalShadow,nt.spotLights.value=Y.state.spot,nt.spotLightShadows.value=Y.state.spotShadow,nt.rectAreaLights.value=Y.state.rectArea,nt.ltc_1.value=Y.state.rectAreaLTC1,nt.ltc_2.value=Y.state.rectAreaLTC2,nt.pointLights.value=Y.state.point,nt.pointLightShadows.value=Y.state.pointShadow,nt.hemisphereLights.value=Y.state.hemi,nt.directionalShadowMap.value=Y.state.directionalShadowMap,nt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,nt.spotShadowMap.value=Y.state.spotShadowMap,nt.spotLightMatrix.value=Y.state.spotLightMatrix,nt.spotLightMap.value=Y.state.spotLightMap,nt.pointShadowMap.value=Y.state.pointShadowMap,nt.pointShadowMatrix.value=Y.state.pointShadowMatrix),J.currentProgram=Ye,J.uniformsList=null,Ye}function tn(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=Zc.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function Ot(A,V){const ee=oe.get(A);ee.outputColorSpace=V.outputColorSpace,ee.batching=V.batching,ee.instancing=V.instancing,ee.instancingColor=V.instancingColor,ee.instancingMorph=V.instancingMorph,ee.skinning=V.skinning,ee.morphTargets=V.morphTargets,ee.morphNormals=V.morphNormals,ee.morphColors=V.morphColors,ee.morphTargetsCount=V.morphTargetsCount,ee.numClippingPlanes=V.numClippingPlanes,ee.numIntersection=V.numClipIntersection,ee.vertexAlphas=V.vertexAlphas,ee.vertexTangents=V.vertexTangents,ee.toneMapping=V.toneMapping}function It(A,V,ee,J,Y){V.isScene!==!0&&(V=it),ae.resetTextureUnits();const Se=V.fog,Ie=J.isMeshStandardMaterial?V.environment:null,$e=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ts,Oe=(J.isMeshStandardMaterial?E:ce).get(J.envMap||Ie),Be=J.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Ye=!!ee.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),nt=!!ee.morphAttributes.position,Bt=!!ee.morphAttributes.normal,nn=!!ee.morphAttributes.color;let bt=ds;J.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(bt=v.toneMapping);const Un=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Tt=Un!==void 0?Un.length:0,je=oe.get(J),af=m.state.lights;if(Z===!0&&(he===!0||A!==N)){const wi=A===N&&J.id===I;fe.setState(J,A,wi)}let zt=!1;J.version===je.__version?(je.needsLights&&je.lightsStateVersion!==af.state.version||je.outputColorSpace!==$e||Y.isBatchedMesh&&je.batching===!1||!Y.isBatchedMesh&&je.batching===!0||Y.isInstancedMesh&&je.instancing===!1||!Y.isInstancedMesh&&je.instancing===!0||Y.isSkinnedMesh&&je.skinning===!1||!Y.isSkinnedMesh&&je.skinning===!0||Y.isInstancedMesh&&je.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&je.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&je.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&je.instancingMorph===!1&&Y.morphTexture!==null||je.envMap!==Oe||J.fog===!0&&je.fog!==Se||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==fe.numPlanes||je.numIntersection!==fe.numIntersection)||je.vertexAlphas!==Be||je.vertexTangents!==Ye||je.morphTargets!==nt||je.morphNormals!==Bt||je.morphColors!==nn||je.toneMapping!==bt||te.isWebGL2===!0&&je.morphTargetsCount!==Tt)&&(zt=!0):(zt=!0,je.__version=J.version);let Cs=je.currentProgram;zt===!0&&(Cs=Dt(J,V,Y));let _p=!1,Da=!1,lf=!1;const Sn=Cs.getUniforms(),Rs=je.uniforms;if(q.useProgram(Cs.program)&&(_p=!0,Da=!0,lf=!0),J.id!==I&&(I=J.id,Da=!0),_p||N!==A){Sn.setValue(M,"projectionMatrix",A.projectionMatrix),Sn.setValue(M,"viewMatrix",A.matrixWorldInverse);const wi=Sn.map.cameraPosition;wi!==void 0&&wi.setValue(M,be.setFromMatrixPosition(A.matrixWorld)),te.logarithmicDepthBuffer&&Sn.setValue(M,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Sn.setValue(M,"isOrthographic",A.isOrthographicCamera===!0),N!==A&&(N=A,Da=!0,lf=!0)}if(Y.isSkinnedMesh){Sn.setOptional(M,Y,"bindMatrix"),Sn.setOptional(M,Y,"bindMatrixInverse");const wi=Y.skeleton;wi&&(te.floatVertexTextures?(wi.boneTexture===null&&wi.computeBoneTexture(),Sn.setValue(M,"boneTexture",wi.boneTexture,ae)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(Sn.setOptional(M,Y,"batchingTexture"),Sn.setValue(M,"batchingTexture",Y._matricesTexture,ae));const cf=ee.morphAttributes;if((cf.position!==void 0||cf.normal!==void 0||cf.color!==void 0&&te.isWebGL2===!0)&&le.update(Y,ee,Cs),(Da||je.receiveShadow!==Y.receiveShadow)&&(je.receiveShadow=Y.receiveShadow,Sn.setValue(M,"receiveShadow",Y.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Rs.envMap.value=Oe,Rs.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),Da&&(Sn.setValue(M,"toneMappingExposure",v.toneMappingExposure),je.needsLights&&Mt(Rs,lf),Se&&J.fog===!0&&se.refreshFogUniforms(Rs,Se),se.refreshMaterialUniforms(Rs,J,X,W,ve),Zc.upload(M,tn(je),Rs,ae)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Zc.upload(M,tn(je),Rs,ae),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Sn.setValue(M,"center",Y.center),Sn.setValue(M,"modelViewMatrix",Y.modelViewMatrix),Sn.setValue(M,"normalMatrix",Y.normalMatrix),Sn.setValue(M,"modelMatrix",Y.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const wi=J.uniformsGroups;for(let uf=0,qx=wi.length;uf<qx;uf++)if(te.isWebGL2){const vp=wi[uf];Le.update(vp,Cs),Le.bind(vp,Cs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Cs}function Mt(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function si(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,V,ee){oe.get(A.texture).__webglTexture=V,oe.get(A.depthTexture).__webglTexture=ee;const J=oe.get(A);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=ee===void 0,J.__autoAllocateDepthBuffer||B.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,V){const ee=oe.get(A);ee.__webglFramebuffer=V,ee.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,ee=0){T=A,w=V,C=ee;let J=!0,Y=null,Se=!1,Ie=!1;if(A){const Oe=oe.get(A);Oe.__useDefaultFramebuffer!==void 0?(q.bindFramebuffer(M.FRAMEBUFFER,null),J=!1):Oe.__webglFramebuffer===void 0?ae.setupRenderTarget(A):Oe.__hasExternalTextures&&ae.rebindTextures(A,oe.get(A.texture).__webglTexture,oe.get(A.depthTexture).__webglTexture);const Be=A.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ie=!0);const Ye=oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ye[V])?Y=Ye[V][ee]:Y=Ye[V],Se=!0):te.isWebGL2&&A.samples>0&&ae.useMultisampledRTT(A)===!1?Y=oe.get(A).__webglMultisampledFramebuffer:Array.isArray(Ye)?Y=Ye[ee]:Y=Ye,x.copy(A.viewport),R.copy(A.scissor),F=A.scissorTest}else x.copy(L).multiplyScalar(X).floor(),R.copy(ue).multiplyScalar(X).floor(),F=_e;if(q.bindFramebuffer(M.FRAMEBUFFER,Y)&&te.drawBuffers&&J&&q.drawBuffers(A,Y),q.viewport(x),q.scissor(R),q.setScissorTest(F),Se){const Oe=oe.get(A.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+V,Oe.__webglTexture,ee)}else if(Ie){const Oe=oe.get(A.texture),Be=V||0;M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,Oe.__webglTexture,ee||0,Be)}I=-1},this.readRenderTargetPixels=function(A,V,ee,J,Y,Se,Ie){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&($e=$e[Ie]),$e){q.bindFramebuffer(M.FRAMEBUFFER,$e);try{const Oe=A.texture,Be=Oe.format,Ye=Oe.type;if(Be!==Yi&&Re.convert(Be)!==M.getParameter(M.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const nt=Ye===Il&&(B.has("EXT_color_buffer_half_float")||te.isWebGL2&&B.has("EXT_color_buffer_float"));if(Ye!==ps&&Re.convert(Ye)!==M.getParameter(M.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ye===Dr&&(te.isWebGL2||B.has("OES_texture_float")||B.has("WEBGL_color_buffer_float")))&&!nt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-J&&ee>=0&&ee<=A.height-Y&&M.readPixels(V,ee,J,Y,Re.convert(Be),Re.convert(Ye),Se)}finally{const Oe=T!==null?oe.get(T).__webglFramebuffer:null;q.bindFramebuffer(M.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(A,V,ee=0){const J=Math.pow(2,-ee),Y=Math.floor(V.image.width*J),Se=Math.floor(V.image.height*J);ae.setTexture2D(V,0),M.copyTexSubImage2D(M.TEXTURE_2D,ee,0,0,A.x,A.y,Y,Se),q.unbindTexture()},this.copyTextureToTexture=function(A,V,ee,J=0){const Y=V.image.width,Se=V.image.height,Ie=Re.convert(ee.format),$e=Re.convert(ee.type);ae.setTexture2D(ee,0),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,ee.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,ee.unpackAlignment),V.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,J,A.x,A.y,Y,Se,Ie,$e,V.image.data):V.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,J,A.x,A.y,V.mipmaps[0].width,V.mipmaps[0].height,Ie,V.mipmaps[0].data):M.texSubImage2D(M.TEXTURE_2D,J,A.x,A.y,Ie,$e,V.image),J===0&&ee.generateMipmaps&&M.generateMipmap(M.TEXTURE_2D),q.unbindTexture()},this.copyTextureToTexture3D=function(A,V,ee,J,Y=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=Math.round(A.max.x-A.min.x),Ie=Math.round(A.max.y-A.min.y),$e=A.max.z-A.min.z+1,Oe=Re.convert(J.format),Be=Re.convert(J.type);let Ye;if(J.isData3DTexture)ae.setTexture3D(J,0),Ye=M.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)ae.setTexture2DArray(J,0),Ye=M.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,J.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,J.unpackAlignment);const nt=M.getParameter(M.UNPACK_ROW_LENGTH),Bt=M.getParameter(M.UNPACK_IMAGE_HEIGHT),nn=M.getParameter(M.UNPACK_SKIP_PIXELS),bt=M.getParameter(M.UNPACK_SKIP_ROWS),Un=M.getParameter(M.UNPACK_SKIP_IMAGES),Tt=ee.isCompressedTexture?ee.mipmaps[Y]:ee.image;M.pixelStorei(M.UNPACK_ROW_LENGTH,Tt.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Tt.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,A.min.x),M.pixelStorei(M.UNPACK_SKIP_ROWS,A.min.y),M.pixelStorei(M.UNPACK_SKIP_IMAGES,A.min.z),ee.isDataTexture||ee.isData3DTexture?M.texSubImage3D(Ye,Y,V.x,V.y,V.z,Se,Ie,$e,Oe,Be,Tt.data):J.isCompressedArrayTexture?M.compressedTexSubImage3D(Ye,Y,V.x,V.y,V.z,Se,Ie,$e,Oe,Tt.data):M.texSubImage3D(Ye,Y,V.x,V.y,V.z,Se,Ie,$e,Oe,Be,Tt),M.pixelStorei(M.UNPACK_ROW_LENGTH,nt),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Bt),M.pixelStorei(M.UNPACK_SKIP_PIXELS,nn),M.pixelStorei(M.UNPACK_SKIP_ROWS,bt),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Un),Y===0&&J.generateMipmaps&&M.generateMipmap(Ye),q.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?ae.setTextureCube(A,0):A.isData3DTexture?ae.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ae.setTexture2DArray(A,0):ae.setTexture2D(A,0),q.unbindTexture()},this.resetState=function(){w=0,C=0,T=null,q.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ur}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Fd?"display-p3":"srgb",t.unpackColorSpace=At.workingColorSpace===Qu?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class zA extends gv{}zA.prototype.isWebGL1Renderer=!0;class HA extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gr,this.environmentRotation=new Gr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class GA{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ms()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Z0("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ms()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ms()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Nn=new H;class Eu{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix4(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyNormalMatrix(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.transformDirection(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ar(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ar(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ar(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ar(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ar(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),r=wt(r,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new ki(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Eu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class _v extends Mo{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ho;const Ha=new H,Go=new H,Vo=new H,Wo=new Qe,Ga=new Qe,vv=new kt,wc=new H,Va=new H,Ac=new H,Sg=new Qe,nh=new Qe,Mg=new Qe;class VA extends xn{constructor(e=new _v){if(super(),this.isSprite=!0,this.type="Sprite",Ho===void 0){Ho=new Ti;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new GA(t,5);Ho.setIndex([0,1,2,0,2,3]),Ho.setAttribute("position",new Eu(i,3,0,!1)),Ho.setAttribute("uv",new Eu(i,2,3,!1))}this.geometry=Ho,this.material=e,this.center=new Qe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Go.setFromMatrixScale(this.matrixWorld),vv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Go.multiplyScalar(-Vo.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Cc(wc.set(-.5,-.5,0),Vo,o,Go,r,s),Cc(Va.set(.5,-.5,0),Vo,o,Go,r,s),Cc(Ac.set(.5,.5,0),Vo,o,Go,r,s),Sg.set(0,0),nh.set(1,0),Mg.set(1,1);let a=e.ray.intersectTriangle(wc,Va,Ac,!1,Ha);if(a===null&&(Cc(Va.set(-.5,.5,0),Vo,o,Go,r,s),nh.set(0,1),a=e.ray.intersectTriangle(wc,Ac,Va,!1,Ha),a===null))return;const l=e.ray.origin.distanceTo(Ha);l<e.near||l>e.far||t.push({distance:l,point:Ha.clone(),uv:qi.getInterpolation(Ha,wc,Va,Ac,Sg,nh,Mg,new Qe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Cc(n,e,t,i,r,s){Wo.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Ga.x=s*Wo.x-r*Wo.y,Ga.y=r*Wo.x+s*Wo.y):Ga.copy(Wo),n.copy(e),n.x+=Ga.x,n.y+=Ga.y,n.applyMatrix4(vv)}class xv extends Mo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bg=new H,Eg=new H,Tg=new kt,ih=new kd,Rc=new Kl;class WA extends xn{constructor(e=new Ti,t=new xv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)bg.fromBufferAttribute(t,r-1),Eg.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=bg.distanceTo(Eg);e.setAttribute("lineDistance",new xi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rc.copy(i.boundingSphere),Rc.applyMatrix4(r),Rc.radius+=s,e.ray.intersectsSphere(Rc)===!1)return;Tg.copy(r).invert(),ih.copy(e.ray).applyMatrix4(Tg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new H,u=new H,h=new H,d=new H,f=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const p=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let v=p,S=y-1;v<S;v+=f){const w=g.getX(v),C=g.getX(v+1);if(c.fromBufferAttribute(m,w),u.fromBufferAttribute(m,C),ih.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(d);I<e.near||I>e.far||t.push({distance:I,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let v=p,S=y-1;v<S;v+=f){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),ih.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const wg=new H,Ag=new H;class XA extends WA{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)wg.fromBufferAttribute(t,r),Ag.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+wg.distanceTo(Ag);e.setAttribute("lineDistance",new xi(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yv extends Mo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Cg=new kt,qh=new kd,Pc=new Kl,Lc=new H;class $A extends xn{constructor(e=new Ti,t=new yv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pc.copy(i.boundingSphere),Pc.applyMatrix4(r),Pc.radius+=s,e.ray.intersectsSphere(Pc)===!1)return;Cg.copy(r).invert(),qh.copy(e.ray).applyMatrix4(Cg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);Lc.fromBufferAttribute(h,m),Rg(Lc,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Lc.fromBufferAttribute(h,g),Rg(Lc,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Rg(n,e,t,i,r,s,o){const a=qh.distanceSqToPoint(n);if(a<t){const l=new H;qh.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class jh extends qn{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hd extends Ti{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new xi(s,3)),this.setAttribute("normal",new xi(s.slice(),3)),this.setAttribute("uv",new xi(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const v=new H,S=new H,w=new H;for(let C=0;C<t.length;C+=3)f(t[C+0],v),f(t[C+1],S),f(t[C+2],w),l(v,S,w,y)}function l(y,v,S,w){const C=w+1,T=[];for(let I=0;I<=C;I++){T[I]=[];const N=y.clone().lerp(S,I/C),x=v.clone().lerp(S,I/C),R=C-I;for(let F=0;F<=R;F++)F===0&&I===C?T[I][F]=N:T[I][F]=N.clone().lerp(x,F/R)}for(let I=0;I<C;I++)for(let N=0;N<2*(C-I)-1;N++){const x=Math.floor(N/2);N%2===0?(d(T[I][x+1]),d(T[I+1][x]),d(T[I][x])):(d(T[I][x+1]),d(T[I+1][x+1]),d(T[I+1][x]))}}function c(y){const v=new H;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(y),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function u(){const y=new H;for(let v=0;v<s.length;v+=3){y.x=s[v+0],y.y=s[v+1],y.z=s[v+2];const S=m(y)/2/Math.PI+.5,w=p(y)/Math.PI+.5;o.push(S,1-w)}g(),h()}function h(){for(let y=0;y<o.length;y+=6){const v=o[y+0],S=o[y+2],w=o[y+4],C=Math.max(v,S,w),T=Math.min(v,S,w);C>.9&&T<.1&&(v<.2&&(o[y+0]+=1),S<.2&&(o[y+2]+=1),w<.2&&(o[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function f(y,v){const S=y*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function g(){const y=new H,v=new H,S=new H,w=new H,C=new Qe,T=new Qe,I=new Qe;for(let N=0,x=0;N<s.length;N+=9,x+=6){y.set(s[N+0],s[N+1],s[N+2]),v.set(s[N+3],s[N+4],s[N+5]),S.set(s[N+6],s[N+7],s[N+8]),C.set(o[x+0],o[x+1]),T.set(o[x+2],o[x+3]),I.set(o[x+4],o[x+5]),w.copy(y).add(v).add(S).divideScalar(3);const R=m(w);_(C,x+0,y,R),_(T,x+2,v,R),_(I,x+4,S,R)}}function _(y,v,S,w){w<0&&y.x===1&&(o[v]=y.x-1),S.x===0&&S.z===0&&(o[v]=w/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hd(e.vertices,e.indices,e.radius,e.details)}}class Tu extends Hd{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Tu(e.radius,e.detail)}}class YA extends Ti{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,r=new H,s=new H;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],d=h.start,f=h.count;for(let g=d,_=d+f;g<_;g+=3)for(let m=0;m<3;m++){const p=a.getX(g+m),y=a.getX(g+(m+1)%3);r.fromBufferAttribute(o,p),s.fromBufferAttribute(o,y),Pg(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,h=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,h),Pg(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new xi(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Pg(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}class Sv extends xn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const rh=new kt,Lg=new H,Dg=new H;class qA{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bd,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Lg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lg),Dg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dg),t.updateMatrixWorld(),rh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(rh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ig=new kt,Wa=new H,sh=new H;class jA extends qA{constructor(){super(new fi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Qe(4,2),this._viewportCount=6,this._viewports=[new Ht(2,1,1,1),new Ht(0,1,1,1),new Ht(3,1,1,1),new Ht(1,1,1,1),new Ht(3,0,1,1),new Ht(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Wa.setFromMatrixPosition(e.matrixWorld),i.position.copy(Wa),sh.copy(i.position),sh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(sh),i.updateMatrixWorld(),r.makeTranslation(-Wa.x,-Wa.y,-Wa.z),Ig.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ig)}}class oh extends Sv{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new jA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class KA extends Sv{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ZA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ug(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ug();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ug(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nd);function wr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Mv(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var yi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ul={duration:.5,overwrite:!1,delay:0},Gd,yn,Gt,Ni=1e8,Pt=1/Ni,Kh=Math.PI*2,JA=Kh/4,QA=0,bv=Math.sqrt,eC=Math.cos,tC=Math.sin,pn=function(e){return typeof e=="string"},jt=function(e){return typeof e=="function"},Vr=function(e){return typeof e=="number"},Vd=function(e){return typeof e>"u"},mr=function(e){return typeof e=="object"},ei=function(e){return e!==!1},Wd=function(){return typeof window<"u"},Dc=function(e){return jt(e)||pn(e)},Ev=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},In=Array.isArray,nC=/random\([^)]+\)/g,iC=/,\s*/g,Ng=/(?:-?\.?\d|\.)+/gi,Tv=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,na=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ah=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,wv=/[+-]=-?[.\d]+/,rC=/[^,'"\[\]\s]+/gi,sC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,$t,tr,Zh,Xd,Mi={},wu={},Av,Cv=function(e){return(wu=ba(e,Mi))&&ri},$d=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Nl=function(e,t){return!t&&console.warn(e)},Rv=function(e,t){return e&&(Mi[e]=t)&&wu&&(wu[e]=t)||Mi},Ol=function(){return 0},oC={suppressEvents:!0,isStart:!0,kill:!1},Jc={suppressEvents:!0,kill:!1},aC={suppressEvents:!0},Yd={},gs=[],Jh={},Pv,ui={},lh={},Og=30,Qc=[],qd="",jd=function(e){var t=e[0],i,r;if(mr(t)||jt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Qc.length;r--&&!Qc[r].targetTest(t););i=Qc[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Jv(e[r],i)))||e.splice(r,1);return e},lo=function(e){return e._gsap||jd(Oi(e))[0]._gsap},Lv=function(e,t,i){return(i=e[t])&&jt(i)?e[t]():Vd(i)&&e.getAttribute&&e.getAttribute(t)||i},ti=function(e,t){return(e=e.split(",")).forEach(t)||e},Kt=function(e){return Math.round(e*1e5)/1e5||0},Xt=function(e){return Math.round(e*1e7)/1e7||0},fa=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},lC=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Au=function(){var e=gs.length,t=gs.slice(0),i,r;for(Jh={},gs.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Kd=function(e){return!!(e._initted||e._startAt||e.add)},Dv=function(e,t,i,r){gs.length&&!yn&&Au(),e.render(t,i,!!(yn&&t<0&&Kd(e))),gs.length&&!yn&&Au()},Iv=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(rC).length<2?t:pn(e)?e.trim():e},Uv=function(e){return e},bi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},cC=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},ba=function(e,t){for(var i in t)e[i]=t[i];return e},Fg=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=mr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Cu=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},hl=function(e){var t=e.parent||$t,i=e.keyframes?cC(In(e.keyframes)):bi;if(ei(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},uC=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Nv=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},nf=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ss=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},co=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},fC=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Qh=function(e,t,i,r){return e._startAt&&(yn?e._startAt.revert(Jc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},hC=function n(e){return!e||e._ts&&n(e.parent)},kg=function(e){return e._repeat?Ea(e._tTime,e=e.duration()+e._rDelay)*e:0},Ea=function(e,t){var i=Math.floor(e=Xt(e/t));return e&&i===e?i-1:i},Ru=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},rf=function(e){return e._end=Xt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Pt)||0))},sf=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Xt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),rf(e),i._dirty||co(i,e)),e},Ov=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Ru(e.rawTime(),t),(!t._dur||Jl(0,t.totalDuration(),i)-t._tTime>Pt)&&t.render(i,!0)),co(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Pt}},lr=function(e,t,i,r){return t.parent&&Ss(t),t._start=Xt((Vr(i)?i:i||e!==$t?Pi(e,i,t):e._time)+t._delay),t._end=Xt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Nv(e,t,"_first","_last",e._sort?"_start":0),ed(t)||(e._recent=t),r||Ov(e,t),e._ts<0&&sf(e,e._tTime),e},Fv=function(e,t){return(Mi.ScrollTrigger||$d("scrollTrigger",t))&&Mi.ScrollTrigger.create(t,e)},kv=function(e,t,i,r,s){if(Jd(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!yn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Pv!==di.frame)return gs.push(e),e._lazy=[s,r],1},dC=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},ed=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},pC=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&dC(e)&&!(!e._initted&&ed(e))||(e._ts<0||e._dp._ts<0)&&!ed(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Jl(0,e._tDur,t),u=Ea(l,a),e._yoyo&&u&1&&(o=1-o),u!==Ea(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||yn||r||e._zTime===Pt||!t&&e._zTime){if(!e._initted&&kv(e,t,r,i,l))return;for(h=e._zTime,e._zTime=t||(i?Pt:0),i||(i=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Qh(e,t,i,!0),e._onUpdate&&!i&&gi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&gi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ss(e,1),!i&&!yn&&(gi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},mC=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ta=function(e,t,i,r){var s=e._repeat,o=Xt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Xt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&sf(e,e._tTime=e._tDur*a),e.parent&&rf(e),i||co(e.parent,e),e},Bg=function(e){return e instanceof Qn?co(e):Ta(e,e._dur)},gC={_start:0,endTime:Ol,totalDuration:Ol},Pi=function n(e,t,i){var r=e.labels,s=e._recent||gC,o=e.duration()>=Ni?s.endTime(!1):e._dur,a,l,c;return pn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(In(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},dl=function(e,t,i){var r=Vr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ei(l.vars.inherit)&&l.parent;o.immediateRender=ei(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new en(t[0],o,t[s+1])},ws=function(e,t){return e||e===0?t(e):t},Jl=function(e,t,i){return i<e?e:i>t?t:i},Pn=function(e,t){return!pn(e)||!(t=sC.exec(e))?"":t[1]},_C=function(e,t,i){return ws(i,function(r){return Jl(e,t,r)})},td=[].slice,Bv=function(e,t){return e&&mr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&mr(e[0]))&&!e.nodeType&&e!==tr},vC=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return pn(r)&&!t||Bv(r,1)?(s=i).push.apply(s,Oi(r)):i.push(r)})||i},Oi=function(e,t,i){return Gt&&!t&&Gt.selector?Gt.selector(e):pn(e)&&!i&&(Zh||!wa())?td.call((t||Xd).querySelectorAll(e),0):In(e)?vC(e,i):Bv(e)?td.call(e,0):e?[e]:[]},nd=function(e){return e=Oi(e)[0]||Nl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Oi(t,i.querySelectorAll?i:i===e?Nl("Invalid scope")||Xd.createElement("div"):e)}},zv=function(e){return e.sort(function(){return .5-Math.random()})},Hv=function(e){if(jt(e))return e;var t=mr(e)?e:{each:e},i=uo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,h=r;return pn(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],h=r[1]),function(d,f,g){var _=(g||t).length,m=o[_],p,y,v,S,w,C,T,I,N;if(!m){if(N=t.grid==="auto"?0:(t.grid||[1,Ni])[1],!N){for(T=-Ni;T<(T=g[N++].getBoundingClientRect().left)&&N<_;);N<_&&N--}for(m=o[_]=[],p=l?Math.min(N,_)*u-.5:r%N,y=N===Ni?0:l?_*h/N-.5:r/N|0,T=0,I=Ni,C=0;C<_;C++)v=C%N-p,S=y-(C/N|0),m[C]=w=c?Math.abs(c==="y"?S:v):bv(v*v+S*S),w>T&&(T=w),w<I&&(I=w);r==="random"&&zv(m),m.max=T-I,m.min=I,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(N>_?_-1:c?c==="y"?_/N:N:Math.max(N,_/N))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Pn(t.amount||t.each)||0,i=i&&_<0?LC(i):i}return _=(m[d]-m.min)/m.max||0,Xt(m.b+(i?i(_):_)*m.v)+m.u}},id=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Xt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Vr(i)?0:Pn(i))}},Gv=function(e,t){var i=In(e),r,s;return!i&&mr(e)&&(r=i=e.radius||Ni,e.values?(e=Oi(e.values),(s=!Vr(e[0]))&&(r*=r)):e=id(e.increment)),ws(t,i?jt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Ni,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-a,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-a),d<c&&(c=d,u=h);return u=!r||c<=r?e[u]:o,s||u===o||Vr(o)?u:u+Pn(o)}:id(e))},Vv=function(e,t,i,r){return ws(In(e)?!t:i===!0?!!(i=0):!r,function(){return In(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},xC=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},yC=function(e,t){return function(i){return e(parseFloat(i))+(t||Pn(i))}},SC=function(e,t,i){return Xv(e,t,0,1,i)},Wv=function(e,t,i){return ws(i,function(r){return e[~~t(r)]})},MC=function n(e,t,i){var r=t-e;return In(e)?Wv(e,n(0,e.length),t):ws(i,function(s){return(r+(s-e)%r)%r+e})},bC=function n(e,t,i){var r=t-e,s=r*2;return In(e)?Wv(e,n(0,e.length-1),t):ws(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Fl=function(e){return e.replace(nC,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(iC);return Vv(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},Xv=function(e,t,i,r,s){var o=t-e,a=r-i;return ws(s,function(l){return i+((l-e)/o*a||0)})},EC=function n(e,t,i,r){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=pn(e),a={},l,c,u,h,d;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(In(e)&&!In(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(n(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(d,~~g);return u[_](g-_)},i=t}else r||(e=ba(In(e)?[]:{},e));if(!u){for(l in t)Zd.call(a,e,l,"get",t[l]);s=function(g){return tp(g,a)||(o?e.p:e)}}}return ws(i,s)},zg=function(e,t,i){var r=e.labels,s=Ni,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},gi=function(e,t,i){var r=e.vars,s=r[t],o=Gt,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&gs.length&&Au(),a&&(Gt=a),u=l?s.apply(c,l):s.call(c),Gt=o,u},Ja=function(e){return Ss(e),e.scrollTrigger&&e.scrollTrigger.kill(!!yn),e.progress()<1&&gi(e,"onInterrupt"),e},ia,$v=[],Yv=function(e){if(e)if(e=!e.name&&e.default||e,Wd()||e.headless){var t=e.name,i=jt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Ol,render:tp,add:Zd,kill:HC,modifier:zC,rawVars:0},o={targetTest:0,get:0,getSetter:ep,aliases:{},register:0};if(wa(),e!==r){if(ui[t])return;bi(r,bi(Cu(e,s),o)),ba(r.prototype,ba(s,Cu(e,o))),ui[r.prop=t]=r,e.targetTest&&(Qc.push(r),Yd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Rv(t,r),e.register&&e.register(ri,r,ni)}else $v.push(e)},Rt=255,Qa={aqua:[0,Rt,Rt],lime:[0,Rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Rt],navy:[0,0,128],white:[Rt,Rt,Rt],olive:[128,128,0],yellow:[Rt,Rt,0],orange:[Rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Rt,0,0],pink:[Rt,192,203],cyan:[0,Rt,Rt],transparent:[Rt,Rt,Rt,0]},ch=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Rt+.5|0},qv=function(e,t,i){var r=e?Vr(e)?[e>>16,e>>8&Rt,e&Rt]:0:Qa.black,s,o,a,l,c,u,h,d,f,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Qa[e])r=Qa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Rt,r&Rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Rt,e&Rt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(Ng),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=ch(l+1/3,s,o),r[1]=ch(l,s,o),r[2]=ch(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Tv),i&&r.length<4&&(r[3]=1),r}else r=e.match(Ng)||Qa.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/Rt,o=r[1]/Rt,a=r[2]/Rt,h=Math.max(s,o,a),d=Math.min(s,o,a),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(o-a)/f+(o<a?6:0):h===o?(a-s)/f+2:(s-o)/f+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},jv=function(e){var t=[],i=[],r=-1;return e.split(_s).forEach(function(s){var o=s.match(na)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},Hg=function(e,t,i){var r="",s=(e+r).match(_s),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=qv(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(u=jv(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(_s,"1").split(na),h=c.length-1;a<h;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(_s),h=c.length-1;a<h;a++)r+=c[a]+s[a];return r+c[h]},_s=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Qa)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),TC=/hsl[a]?\(/,Kv=function(e){var t=e.join(" "),i;if(_s.lastIndex=0,_s.test(t))return i=TC.test(t),e[1]=Hg(e[1],i),e[0]=Hg(e[0],i,jv(e[1])),!0},kl,di=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,h,d,f,g=function _(m){var p=n()-r,y=m===!0,v,S,w,C;if((p>e||p<0)&&(i+=p-t),r+=p,w=r-i,v=w-o,(v>0||y)&&(C=++h.frame,d=w-h.time*1e3,h.time=w=w/1e3,o+=v+(v>=s?4:s-v),S=1),y||(l=c(_)),S)for(f=0;f<a.length;f++)a[f](w,d,C,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Av&&(!Zh&&Wd()&&(tr=Zh=window,Xd=tr.document||{},Mi.gsap=ri,(tr.gsapVersions||(tr.gsapVersions=[])).push(ri.version),Cv(wu||tr.GreenSockGlobals||!tr.gsap&&tr||{}),$v.forEach(Yv)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},kl=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),kl=0,c=Ol},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,y){var v=p?function(S,w,C,T){m(S,w,C,T),h.remove(v)}:m;return h.remove(m),a[y?"unshift":"push"](v),wa(),v},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},h}(),wa=function(){return!kl&&di.wake()},dt={},wC=/^[\d.\-M][\d.\-,\s]/,AC=/["']/g,CC=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(AC,"").trim():+c,r=l.substr(a+1).trim();return t},RC=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},PC=function(e){var t=(e+"").split("("),i=dt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[CC(t[1])]:RC(e).split(",").map(Iv)):dt._CE&&wC.test(e)?dt._CE("",e):i},LC=function(e){return function(t){return 1-e(1-t)}},uo=function(e,t){return e&&(jt(e)?e:dt[e]||PC(e))||t},bo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return ti(e,function(a){dt[a]=Mi[a]=s,dt[o=a.toLowerCase()]=i;for(var l in s)dt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=dt[a+"."+l]=s[l]}),s},Zv=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},uh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Kh*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*tC((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Zv(a);return s=Kh/s,l.config=function(c,u){return n(e,c,u)},l},fh=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:Zv(i);return r.config=function(s){return n(e,s)},r};ti("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;bo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});dt.Linear.easeNone=dt.none=dt.Linear.easeIn;bo("Elastic",uh("in"),uh("out"),uh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};bo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);bo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});bo("Circ",function(n){return-(bv(1-n*n)-1)});bo("Sine",function(n){return n===1?1:-eC(n*JA)+1});bo("Back",fh("in"),fh("out"),fh());dt.SteppedEase=dt.steps=Mi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Pt;return function(a){return((r*Jl(0,o,a)|0)+s)*i}}};Ul.ease=dt["quad.out"];ti("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return qd+=n+","+n+"Params,"});var Jv=function(e,t){this.id=QA++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Lv,this.set=t?t.getSetter:ep},Bl=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ta(this,+t.duration,1,1),this.data=t.data,Gt&&(this._ctx=Gt,Gt.data.push(this)),kl||di.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ta(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(wa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(sf(this,i),!s._dp||s.parent||Ov(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&lr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Pt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Dv(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+kg(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+kg(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Ea(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Pt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Ru(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Pt?0:this._rts,this.totalTime(Jl(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),rf(this),fC(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(wa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Pt&&(this._tTime-=Pt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Xt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&lr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ei(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ru(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=aC);var r=yn;return yn=i,Kd(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),yn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Bg(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Bg(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Pi(this,i),ei(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ei(r)),this._dur||(this._zTime=-Pt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Pt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Pt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=jt(i)?i:Uv,l=function(){var u=r.then;r.then=null,s&&s(),jt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Ja(this)},n}();bi(Bl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Pt,_prom:0,_ps:!1,_rts:1});var Qn=function(n){Mv(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ei(i.sortChildren),$t&&lr(i.parent||$t,wr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Fv(wr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return dl(0,arguments,this),this},t.from=function(r,s,o){return dl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return dl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,hl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new en(r,s,Pi(this,o),1),this},t.call=function(r,s,o){return lr(this,en.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new en(r,o,Pi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,hl(o).immediateRender=ei(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,h){return a.startAt=o,hl(a).immediateRender=ei(a.immediateRender),this.staggerTo(r,s,a,l,c,u,h)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Xt(r),h=this._zTime<0!=r<0&&(this._initted||!c),d,f,g,_,m,p,y,v,S,w,C,T;if(this!==$t&&u>l&&r>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),d=u,S=this._start,v=this._ts,p=!v,h&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(d=Xt(u%m),u===l?(_=this._repeat,d=c):(w=Xt(u/m),_=~~w,_&&_===w&&(d=c,_--),d>c&&(d=c)),w=Ea(this._tTime,m),!a&&this._tTime&&w!==_&&this._tTime-w*m-this._dur<=0&&(w=_),C&&_&1&&(d=c-d,T=1),_!==w&&!this._lock){var I=C&&w&1,N=I===(C&&_&1);if(_<w&&(I=!I),a=I?0:u%c?c:u,this._lock=1,this.render(a||(T?0:Xt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&gi(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,w=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,N&&(this._lock=2,a=I?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=mC(this,Xt(a),Xt(d)),y&&(u-=d-(d=y._start))),this._tTime=u,this._time=d,this._act=!!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!w&&(gi(this,"onStart"),this._tTime!==u))return this;if(d>=a&&r>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(r,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=-Pt);break}}f=g}else{f=this._last;for(var x=r<0?r:d;f;){if(g=f._prev,(f._act||x<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(r,s,o);if(f.render(f._ts>0?(x-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(x-f._start)*f._ts,s,o||yn&&Kd(f)),d!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=x?-Pt:Pt);break}}f=g}}if(y&&!s&&(this.pause(),y.render(d>=a?0:-Pt)._zTime=d>=a?1:-1,this._ts))return this._start=S,rf(this),this.render(r,s,o);this._onUpdate&&!s&&gi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ss(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(gi(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Vr(s)||(s=Pi(this,s,r)),!(r instanceof Bl)){if(In(r))return r.forEach(function(a){return o.add(a,s)}),this;if(pn(r))return this.addLabel(r,s);if(jt(r))r=en.delayedCall(0,r);else return this}return this!==r?lr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ni);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof en?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return pn(r)?this.removeLabel(r):jt(r)?this.killTweensOf(r):(r.parent===this&&nf(this,r),r===this._recent&&(this._recent=this._last),co(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Xt(di.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Pi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=en.delayedCall(0,s||Ol,o);return a.data="isPause",this._hasPause=1,lr(this,a,Pi(this,r))},t.removePause=function(r){var s=this._first;for(r=Pi(this,r);s;)s._start===r&&s.data==="isPause"&&Ss(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)os!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Oi(r),l=this._first,c=Vr(s),u;l;)l instanceof en?lC(l._targets,a)&&(c?(!os||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Pi(o,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,g=en.to(o,bi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Pt,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Ta(g,m,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,h||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,bi({startAt:{time:Pi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),zg(this,Pi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),zg(this,Pi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Pt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=Xt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return co(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),co(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Ni,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,lr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Xt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ta(o,o===$t&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if($t._ts&&(Dv($t,Ru(r,$t)),Pv=di.frame),di.frame>=Og){Og+=yi.autoSleep||120;var s=$t._first;if((!s||!s._ts)&&yi.autoSleep&&di._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||di.sleep()}}},e}(Bl);bi(Qn.prototype,{_lock:0,_hasPause:0,_forcing:0});var DC=function(e,t,i,r,s,o,a){var l=new ni(this._pt,e,t,0,1,rx,null,s),c=0,u=0,h,d,f,g,_,m,p,y;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=Fl(r)),o&&(y=[i,r],o(y,e,t),i=y[0],r=y[1]),d=i.match(ah)||[];h=ah.exec(r);)g=h[0],_=r.substring(c,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?fa(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=ah.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(wv.test(r)||p)&&(l.e=0),this._pt=l,l},Zd=function(e,t,i,r,s,o,a,l,c,u){jt(r)&&(r=r(s||0,e,o));var h=e[t],d=i!=="get"?i:jt(h)?c?e[t.indexOf("set")||!jt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=jt(h)?c?FC:nx:Qd,g;if(pn(r)&&(~r.indexOf("random(")&&(r=Fl(r)),r.charAt(1)==="="&&(g=fa(d,r)+(Pn(d)||0),(g||g===0)&&(r=g))),!u||d!==r||rd)return!isNaN(d*r)&&r!==""?(g=new ni(this._pt,e,t,+d||0,r-(d||0),typeof h=="boolean"?BC:ix,0,f),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&$d(t,r),DC.call(this,e,t,d,r,f,l||yi.stringFilter,c))},IC=function(e,t,i,r,s){if(jt(e)&&(e=pl(e,s,t,i,r)),!mr(e)||e.style&&e.nodeType||In(e)||Ev(e))return pn(e)?pl(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=pl(e[a],s,t,i,r);return o},Qv=function(e,t,i,r,s,o){var a,l,c,u;if(ui[e]&&(a=new ui[e]).init(s,a.rawVars?t[e]:IC(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new ni(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==ia))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},os,rd,Jd=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,d=r.keyframes,f=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,y=p&&p.data==="nested"?p.vars.targets:m,v=e._overwrite==="auto"&&!Gd,S=e.timeline,w=r.easeReverse||h,C,T,I,N,x,R,F,ne,U,K,W,X,G;if(S&&(!d||!s)&&(s="none"),e._ease=uo(s,Ul.ease),e._rEase=w&&(uo(w)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||d&&!r.stagger){if(ne=m[0]?lo(m[0]).harness:0,X=ne&&r[ne.prop],C=Cu(r,Yd),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!f?_.render(-1,!0):_.revert(u&&g?Jc:oC),_._lazy=0),o){if(Ss(e._startAt=en.set(m,bi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&ei(l),startAt:null,delay:0,onUpdate:c&&function(){return gi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn||!a&&!f)&&e._startAt.revert(Jc),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),I=bi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ei(l),immediateRender:a,stagger:0,parent:p},C),X&&(I[ne.prop]=X),Ss(e._startAt=en.set(m,I)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn?e._startAt.revert(Jc):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Pt,Pt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&ei(l)||l&&!g,T=0;T<m.length;T++){if(x=m[T],F=x._gsap||jd(m)[T]._gsap,e._ptLookup[T]=K={},Jh[F.id]&&gs.length&&Au(),W=y===m?T:y.indexOf(x),ne&&(U=new ne).init(x,X||C,e,W,y)!==!1&&(e._pt=N=new ni(e._pt,x,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(re){K[re]=N}),U.priority&&(R=1)),!ne||X)for(I in C)ui[I]&&(U=Qv(I,C,e,W,x,y))?U.priority&&(R=1):K[I]=N=Zd.call(e,x,I,"get",C[I],W,y,0,r.stringFilter);e._op&&e._op[T]&&e.kill(x,e._op[T]),v&&e._pt&&(os=e,$t.killTweensOf(x,K,e.globalTime(t)),G=!e.parent,os=0),e._pt&&l&&(Jh[F.id]=1)}R&&sx(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!G,d&&t<=0&&S.render(Ni,!0,!0)},UC=function(e,t,i,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return rd=1,e.vars[t]="+=0",Jd(e,a),rd=0,l?Nl(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,h.e&&(h.e=Kt(i)+Pn(h.e)),h.b&&(h.b=u.s+Pn(h.b))},NC=function(e,t){var i=e[0]?lo(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=ba({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},OC=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(In(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},pl=function(e,t,i,r,s){return jt(e)?e.call(t,i,r,s):pn(e)&&~e.indexOf("random(")?Fl(e):e},ex=qd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",tx={};ti(ex+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return tx[n]=1});var en=function(n){Mv(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:hl(r))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=r.parent||$t,y=(In(i)||Ev(i)?Vr(i[0]):"length"in r)?[i]:Oi(i),v,S,w,C,T,I,N,x;if(a._targets=y.length?jd(y):Nl("GSAP target "+i+" not found. https://gsap.com",!yi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||d||Dc(c)||Dc(u)){r=a.vars;var R=r.easeReverse||r.yoyoEase;if(v=a.timeline=new Qn({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:y}),v.kill(),v.parent=v._dp=wr(a),v._start=0,d||Dc(c)||Dc(u)){if(C=y.length,N=d&&Hv(d),mr(d))for(T in d)~ex.indexOf(T)&&(x||(x={}),x[T]=d[T]);for(S=0;S<C;S++)w=Cu(r,tx),w.stagger=0,R&&(w.easeReverse=R),x&&ba(w,x),I=y[S],w.duration=+pl(c,wr(a),S,I,y),w.delay=(+pl(u,wr(a),S,I,y)||0)-a._delay,!d&&C===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),v.to(I,w,N?N(S,I,y):0),v._ease=dt.none;v.duration()?c=u=0:a.timeline=0}else if(g){hl(bi(v.vars.defaults,{ease:"none"})),v._ease=uo(g.ease||r.ease||"none");var F=0,ne,U,K;if(In(g))g.forEach(function(W){return v.to(y,W,">")}),v.duration();else{w={};for(T in g)T==="ease"||T==="easeEach"||OC(T,g[T],w,g.easeEach);for(T in w)for(ne=w[T].sort(function(W,X){return W.t-X.t}),F=0,S=0;S<ne.length;S++)U=ne[S],K={ease:U.e,duration:(U.t-(S?ne[S-1].t:0))/100*c},K[T]=U.v,v.to(y,K,F),F+=K.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return f===!0&&!Gd&&(os=wr(a),$t.killTweensOf(y),os=0),lr(p,wr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!c&&!g&&a._start===Xt(p._time)&&ei(h)&&hC(wr(a))&&p.data!=="nested")&&(a._tTime=-Pt,a.render(Math.max(0,-u)||0)),m&&Fv(wr(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-Pt&&!u?l:r<Pt?0:r,d,f,g,_,m,p,y,v;if(!c)pC(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(d=Xt(h%_),h===l?(g=this._repeat,d=c):(m=Xt(h/_),g=~~m,g&&g===m?(d=c,g--):d>c&&(d=c)),p=this._yoyo&&g&1,p&&(d=c-d),m=Ea(this._tTime,_),d===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(Xt(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(kv(this,u?r:d,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._rEase){var S=d<a;if(S!==this._inv){var w=S?a:c-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=w?(S?-1:1)/w:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(d/c);if(this._from&&(this.ratio=y=1-y),this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!m&&(gi(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;v&&v.render(r<0?r:v._dur*v._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Qh(this,r,s,o),gi(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&gi(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Qh(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ss(this,1),!s&&!(u&&!a)&&(h||a||p)&&(gi(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){kl||di.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Jd(this,c),u=this._ease(c/this._dur),UC(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(sf(this,0),this.parent||Nv(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ja(this):this.scrollTrigger&&this.scrollTrigger.kill(!!yn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,os&&os.vars.overwrite!==!0)._first||Ja(this),this.parent&&o!==this.timeline.totalDuration()&&Ta(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Oi(r):a,c=this._ptLookup,u=this._pt,h,d,f,g,_,m,p;if((!s||s==="all")&&uC(a,l))return s==="all"&&(this._pt=0),Ja(this);for(h=this._op=this._op||[],s!=="all"&&(pn(s)&&(_={},ti(s,function(y){return _[y]=1}),s=_),s=NC(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(h[p]=s,g=d,f={}):(f=h[p]=h[p]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&nf(this,m,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&Ja(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return dl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return dl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return $t.killTweensOf(r,s,o)},e}(Bl);bi(en.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ti("staggerTo,staggerFrom,staggerFromTo",function(n){en[n]=function(){var e=new Qn,t=td.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Qd=function(e,t,i){return e[t]=i},nx=function(e,t,i){return e[t](i)},FC=function(e,t,i,r){return e[t](r.fp,i)},kC=function(e,t,i){return e.setAttribute(t,i)},ep=function(e,t){return jt(e[t])?nx:Vd(e[t])&&e.setAttribute?kC:Qd},ix=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},BC=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},rx=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},tp=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},zC=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},HC=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?nf(this,t,"_pt"):t.dep||(i=1),t=r;return!i},GC=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},sx=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},ni=function(){function n(t,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||ix,this.d=l||this,this.set=c||Qd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=GC,this.m=i,this.mt=s,this.tween=r},n}();ti(qd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return Yd[n]=1});Mi.TweenMax=Mi.TweenLite=en;Mi.TimelineLite=Mi.TimelineMax=Qn;$t=new Qn({sortChildren:!1,defaults:Ul,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});yi.stringFilter=Kv;var fo=[],eu={},VC=[],Gg=0,WC=0,hh=function(e){return(eu[e]||VC).map(function(t){return t()})},sd=function(){var e=Date.now(),t=[];e-Gg>2&&(hh("matchMediaInit"),fo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=tr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),hh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Gg=e,hh("matchMedia"))},ox=function(){function n(t,i){this.selector=i&&nd(i),this.data=[],this._r=[],this.isReverted=!1,this.id=WC++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){jt(i)&&(s=r,r=i,i=jt);var o=this,a=function(){var c=Gt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=nd(s)),Gt=o,h=r.apply(o,arguments),jt(h)&&o._r.push(h),Gt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,i===jt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Gt;Gt=null,i(this),Gt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof en&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof Qn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof en)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=fo.length;o--;)fo[o].id===this.id&&fo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),XC=function(){function n(t){this.contexts=[],this.scope=t,Gt&&Gt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){mr(i)||(i={matches:i});var o=new ox(0,s||this.scope),a=o.conditions={},l,c,u;Gt&&!o.selector&&(o.selector=Gt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=tr.matchMedia(i[c]),l&&(fo.indexOf(o)<0&&fo.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(sd):l.addEventListener("change",sd)));return u&&r(o,function(h){return o.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Pu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return Yv(r)})},timeline:function(e){return new Qn(e)},getTweensOf:function(e,t){return $t.getTweensOf(e,t)},getProperty:function(e,t,i,r){pn(e)&&(e=Oi(e)[0]);var s=lo(e||{}).get,o=i?Uv:Iv;return i==="native"&&(i=""),e&&(t?o((ui[t]&&ui[t].get||s)(e,t,i,r)):function(a,l,c){return o((ui[a]&&ui[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=Oi(e),e.length>1){var r=e.map(function(u){return ri.quickSetter(u,t,i)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var o=ui[t],a=lo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;ia._pt=0,h.init(e,i?u+i:u,ia,0,[e]),h.render(1,h),ia._pt&&tp(1,ia)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,s=ri.to(e,bi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return $t.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=uo(e.ease,Ul.ease)),Fg(Ul,e||{})},config:function(e){return Fg(yi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!ui[a]&&!Mi[a]&&Nl(t+" effect requires "+a+" plugin.")}),lh[t]=function(a,l,c){return i(Oi(a),bi(l||{},s),c)},o&&(Qn.prototype[t]=function(a,l,c){return this.add(lh[t](a,mr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){dt[e]=uo(t)},parseEase:function(e,t){return arguments.length?uo(e,t):dt},getById:function(e){return $t.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Qn(e),r,s;for(i.smoothChildTiming=ei(e.smoothChildTiming),$t.remove(i),i._dp=0,i._time=i._tTime=$t._time,r=$t._first;r;)s=r._next,(t||!(!r._dur&&r instanceof en&&r.vars.onComplete===r._targets[0]))&&lr(i,r,r._start-r._delay),r=s;return lr($t,i,0),i},context:function(e,t){return e?new ox(e,t):Gt},matchMedia:function(e){return new XC(e)},matchMediaRefresh:function(){return fo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||sd()},addEventListener:function(e,t){var i=eu[e]||(eu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=eu[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:MC,wrapYoyo:bC,distribute:Hv,random:Vv,snap:Gv,normalize:SC,getUnit:Pn,clamp:_C,splitColor:qv,toArray:Oi,selector:nd,mapRange:Xv,pipe:xC,unitize:yC,interpolate:EC,shuffle:zv},install:Cv,effects:lh,ticker:di,updateRoot:Qn.updateRoot,plugins:ui,globalTimeline:$t,core:{PropTween:ni,globals:Rv,Tween:en,Timeline:Qn,Animation:Bl,getCache:lo,_removeLinkedListItem:nf,reverting:function(){return yn},context:function(e){return e&&Gt&&(Gt.data.push(e),e._ctx=Gt),Gt},suppressOverwrites:function(e){return Gd=e}}};ti("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Pu[n]=en[n]});di.add(Qn.updateRoot);ia=Pu.to({},{duration:0});var $C=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},YC=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=$C(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},dh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(pn(s)&&(l={},ti(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}YC(a,s)}}}},ri=Pu.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)yn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},dh("roundProps",id),dh("modifiers"),dh("snap",Gv))||Pu;en.version=Qn.version=ri.version="3.15.0";Av=1;Wd()&&wa();dt.Power0;dt.Power1;dt.Power2;dt.Power3;dt.Power4;dt.Linear;dt.Quad;dt.Cubic;dt.Quart;dt.Quint;dt.Strong;dt.Elastic;dt.Back;dt.SteppedEase;dt.Bounce;dt.Sine;dt.Expo;dt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Vg,as,ha,np,to,Wg,ip,qC=function(){return typeof window<"u"},Wr={},$s=180/Math.PI,da=Math.PI/180,Xo=Math.atan2,Xg=1e8,rp=/([A-Z])/g,jC=/(left|right|width|margin|padding|x)/i,KC=/[\s,\(]\S/,cr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},od=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ZC=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},JC=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},QC=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},eR=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},ax=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},lx=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},tR=function(e,t,i){return e.style[t]=i},nR=function(e,t,i){return e.style.setProperty(t,i)},iR=function(e,t,i){return e._gsap[t]=i},rR=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},sR=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},oR=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Yt="transform",ii=Yt+"Origin",aR=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Wr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=cr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Cr(r,a)}):this.tfm[e]=o.x?o[e]:Cr(r,e),e===ii&&(this.tfm.zOrigin=o.zOrigin);else return cr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Yt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ii,t,"")),e=Yt}(s||t)&&this.props.push(e,t,s[e])},cx=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},lR=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(rp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ip(),(!s||!s.isStart)&&!i[Yt]&&(cx(i),r.zOrigin&&i[ii]&&(i[ii]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},ux=function(e,t){var i={target:e,props:[],revert:lR,save:aR};return e._gsap||ri.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},fx,ad=function(e,t){var i=as.createElementNS?as.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):as.createElement(e);return i&&i.style?i:as.createElement(e)},_i=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(rp,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Aa(t)||t,1)||""},$g="O,Moz,ms,Ms,Webkit".split(","),Aa=function(e,t,i){var r=t||to,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!($g[o]+e in s););return o<0?null:(o===3?"ms":o>=0?$g[o]:"")+e},ld=function(){qC()&&window.document&&(Vg=window,as=Vg.document,ha=as.documentElement,to=ad("div")||{style:{}},ad("div"),Yt=Aa(Yt),ii=Yt+"Origin",to.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",fx=!!Aa("perspective"),ip=ri.core.reverting,np=1)},Yg=function(e){var t=e.ownerSVGElement,i=ad("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),ha.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),ha.removeChild(i),s},qg=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},hx=function(e){var t,i;try{t=e.getBBox()}catch{t=Yg(e),i=1}return t&&(t.width||t.height)||i||(t=Yg(e)),t&&!t.width&&!t.x&&!t.y?{x:+qg(e,["x","cx","x1"])||0,y:+qg(e,["y","cy","y1"])||0,width:0,height:0}:t},dx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&hx(e))},Ms=function(e,t){if(t){var i=e.style,r;t in Wr&&t!==ii&&(t=Yt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(rp,"-$1").toLowerCase())):i.removeAttribute(t)}},ls=function(e,t,i,r,s,o){var a=new ni(e._pt,t,i,0,1,o?lx:ax);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},jg={deg:1,rad:1,turn:1},cR={grid:1,flex:1},bs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=to.style,l=jC.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=r==="px",f=r==="%",g,_,m,p;if(r===o||!s||jg[r]||jg[o])return s;if(o!=="px"&&!d&&(s=n(e,t,i,"px")),p=e.getCTM&&dx(e),(f||o==="%")&&(Wr[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Kt(f?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(d?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===as||!_.appendChild)&&(_=as.body),m=_._gsap,m&&f&&m.width&&l&&m.time===di.time&&!m.uncache)return Kt(s/m.width*h);if(f&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=h+r,g=e[u],y?e.style[t]=y:Ms(e,t)}else(f||o==="%")&&!cR[_i(_,"display")]&&(a.position=_i(e,"position")),_===e&&(a.position="static"),_.appendChild(to),g=to[u],_.removeChild(to),a.position="absolute";return l&&f&&(m=lo(_),m.time=di.time,m.width=_[u]),Kt(d?g*s/h:g&&s?h/g*s:0)},Cr=function(e,t,i,r){var s;return np||ld(),t in cr&&t!=="transform"&&(t=cr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Wr[t]&&t!=="transform"?(s=Hl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Du(_i(e,ii))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Lu[t]&&Lu[t](e,t,i)||_i(e,t)||Lv(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?bs(e,t,s,i)+i:s},uR=function(e,t,i,r){if(!i||i==="none"){var s=Aa(t,e,1),o=s&&_i(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=_i(e,"borderTopColor"))}var a=new ni(this._pt,e.style,t,0,1,rx),l=0,c=0,u,h,d,f,g,_,m,p,y,v,S,w;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=_i(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=_i(e,t)||r,_?e.style[t]=_:Ms(e,t)),u=[i,r],Kv(u),i=u[0],r=u[1],d=i.match(na)||[],w=r.match(na)||[],w.length){for(;h=na.exec(r);)m=h[0],y=r.substring(l,h.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(f=parseFloat(_)||0,S=_.substr((f+"").length),m.charAt(1)==="="&&(m=fa(f,m)+S),p=parseFloat(m),v=m.substr((p+"").length),l=na.lastIndex-v.length,v||(v=v||yi.units[t]||S,l===r.length&&(r+=v,a.e+=v)),S!==v&&(f=bs(e,t,_,v)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:f,c:p-f,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?lx:ax;return wv.test(r)&&(a.e=0),this._pt=a,a},Kg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},fR=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Kg[i]||i,t[1]=Kg[r]||r,t.join(" ")},hR=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Wr[a]&&(l=1,a=a==="transformOrigin"?ii:Yt),Ms(i,a);l&&(Ms(i,Yt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Hl(i,1),o.uncache=1,cx(r)))}},Lu={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new ni(e._pt,t,i,0,0,hR);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},zl=[1,0,0,1,0,0],px={},mx=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Zg=function(e){var t=_i(e,Yt);return mx(t)?zl:t.substr(7).match(Tv).map(Kt)},sp=function(e,t){var i=e._gsap||lo(e),r=e.style,s=Zg(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?zl:s):(s===zl&&!e.offsetParent&&e!==ha&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,ha.appendChild(e)),s=Zg(e),l?r.display=l:Ms(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ha.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},cd=function(e,t,i,r,s,o){var a=e._gsap,l=s||sp(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],y=l[5],v=t.split(" "),S=parseFloat(v[0])||0,w=parseFloat(v[1])||0,C,T,I,N;i?l!==zl&&(T=f*m-g*_)&&(I=S*(m/T)+w*(-_/T)+(_*y-m*p)/T,N=S*(-g/T)+w*(f/T)-(f*y-g*p)/T,S=I,w=N):(C=hx(e),S=C.x+(~v[0].indexOf("%")?S/100*C.width:S),w=C.y+(~(v[1]||v[0]).indexOf("%")?w/100*C.height:w)),r||r!==!1&&a.smooth?(p=S-c,y=w-u,a.xOffset=h+(p*f+y*_)-p,a.yOffset=d+(p*g+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=w,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[ii]="0px 0px",o&&(ls(o,a,"xOrigin",c,S),ls(o,a,"yOrigin",u,w),ls(o,a,"xOffset",h,a.xOffset),ls(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+w)},Hl=function(e,t){var i=e._gsap||new Jv(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=_i(e,ii)||"0",u,h,d,f,g,_,m,p,y,v,S,w,C,T,I,N,x,R,F,ne,U,K,W,X,G,re,L,ue,_e,Ve,Z,he;return u=h=d=_=m=p=y=v=S=0,f=g=1,i.svg=!!(e.getCTM&&dx(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Yt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Yt]!=="none"?l[Yt]:"")),r.scale=r.rotate=r.translate="none"),T=sp(e,i.svg),i.svg&&(i.uncache?(G=e.getBBox(),c=i.xOrigin-G.x+"px "+(i.yOrigin-G.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),cd(e,X||c,!!X||i.originIsAbsolute,i.smooth!==!1,T)),w=i.xOrigin||0,C=i.yOrigin||0,T!==zl&&(R=T[0],F=T[1],ne=T[2],U=T[3],u=K=T[4],h=W=T[5],T.length===6?(f=Math.sqrt(R*R+F*F),g=Math.sqrt(U*U+ne*ne),_=R||F?Xo(F,R)*$s:0,y=ne||U?Xo(ne,U)*$s+_:0,y&&(g*=Math.abs(Math.cos(y*da))),i.svg&&(u-=w-(w*R+C*ne),h-=C-(w*F+C*U))):(he=T[6],Ve=T[7],L=T[8],ue=T[9],_e=T[10],Z=T[11],u=T[12],h=T[13],d=T[14],I=Xo(he,_e),m=I*$s,I&&(N=Math.cos(-I),x=Math.sin(-I),X=K*N+L*x,G=W*N+ue*x,re=he*N+_e*x,L=K*-x+L*N,ue=W*-x+ue*N,_e=he*-x+_e*N,Z=Ve*-x+Z*N,K=X,W=G,he=re),I=Xo(-ne,_e),p=I*$s,I&&(N=Math.cos(-I),x=Math.sin(-I),X=R*N-L*x,G=F*N-ue*x,re=ne*N-_e*x,Z=U*x+Z*N,R=X,F=G,ne=re),I=Xo(F,R),_=I*$s,I&&(N=Math.cos(I),x=Math.sin(I),X=R*N+F*x,G=K*N+W*x,F=F*N-R*x,W=W*N-K*x,R=X,K=G),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=Kt(Math.sqrt(R*R+F*F+ne*ne)),g=Kt(Math.sqrt(W*W+he*he)),I=Xo(K,W),y=Math.abs(I)>2e-4?I*$s:0,S=Z?1/(Z<0?-Z:Z):0),i.svg&&(X=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!mx(_i(e,Yt)),X&&e.setAttribute("transform",X))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(f*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=d+o,i.scaleX=Kt(f),i.scaleY=Kt(g),i.rotation=Kt(_)+a,i.rotationX=Kt(m)+a,i.rotationY=Kt(p)+a,i.skewX=y+a,i.skewY=v+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[ii]=Du(c)),i.xOffset=i.yOffset=0,i.force3D=yi.force3D,i.renderTransform=i.svg?pR:fx?gx:dR,i.uncache=0,i},Du=function(e){return(e=e.split(" "))[0]+" "+e[1]},ph=function(e,t,i){var r=Pn(t);return Kt(parseFloat(t)+parseFloat(bs(e,"x",i+"px",r)))+r},dR=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,gx(e,t)},zs="0deg",Xa="0px",Hs=") ",gx=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,h=i.rotationX,d=i.skewX,f=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,p=i.force3D,y=i.target,v=i.zOrigin,S="",w=p==="auto"&&e&&e!==1||p===!0;if(v&&(h!==zs||u!==zs)){var C=parseFloat(u)*da,T=Math.sin(C),I=Math.cos(C),N;C=parseFloat(h)*da,N=Math.cos(C),o=ph(y,o,T*N*-v),a=ph(y,a,-Math.sin(C)*-v),l=ph(y,l,I*N*-v+v)}m!==Xa&&(S+="perspective("+m+Hs),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(w||o!==Xa||a!==Xa||l!==Xa)&&(S+=l!==Xa||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Hs),c!==zs&&(S+="rotate("+c+Hs),u!==zs&&(S+="rotateY("+u+Hs),h!==zs&&(S+="rotateX("+h+Hs),(d!==zs||f!==zs)&&(S+="skew("+d+", "+f+Hs),(g!==1||_!==1)&&(S+="scale("+g+", "+_+Hs),y.style[Yt]=S||"translate(0, 0)"},pR=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,h=i.scaleX,d=i.scaleY,f=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,p=i.yOffset,y=i.forceCSS,v=parseFloat(o),S=parseFloat(a),w,C,T,I,N;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=da,c*=da,w=Math.cos(l)*h,C=Math.sin(l)*h,T=Math.sin(l-c)*-d,I=Math.cos(l-c)*d,c&&(u*=da,N=Math.tan(c-u),N=Math.sqrt(1+N*N),T*=N,I*=N,u&&(N=Math.tan(u),N=Math.sqrt(1+N*N),w*=N,C*=N)),w=Kt(w),C=Kt(C),T=Kt(T),I=Kt(I)):(w=h,I=d,C=T=0),(v&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(v=bs(f,"x",o,"px"),S=bs(f,"y",a,"px")),(g||_||m||p)&&(v=Kt(v+g-(g*w+_*T)+m),S=Kt(S+_-(g*C+_*I)+p)),(r||s)&&(N=f.getBBox(),v=Kt(v+r/100*N.width),S=Kt(S+s/100*N.height)),N="matrix("+w+","+C+","+T+","+I+","+v+","+S+")",f.setAttribute("transform",N),y&&(f.style[Yt]=N)},mR=function(e,t,i,r,s){var o=360,a=pn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?$s:1),c=l-r,u=r+c+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Xg)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Xg)%o-~~(c/o)*o)),e._pt=d=new ni(e._pt,t,i,r,c,ZC),d.e=u,d.u="deg",e._props.push(i),d},Jg=function(e,t){for(var i in t)e[i]=t[i];return e},gR=function(e,t,i){var r=Jg({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,h,d,f,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[Yt]=t,a=Hl(i,1),Ms(i,Yt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Yt],o[Yt]=t,a=Hl(i,1),o[Yt]=c);for(l in Wr)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(f=Pn(c),g=Pn(u),h=f!==g?bs(i,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new ni(e._pt,a,l,h,d-h,od),e._pt.u=g||0,e._props.push(l));Jg(a,r)};ti("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Lu[e>1?"border"+n:n]=function(a,l,c,u,h){var d,f;if(arguments.length<4)return d=o.map(function(g){return Cr(a,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},o.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,f,h)}});var _x={name:"css",register:ld,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,h,d,f,g,_,m,p,y,v,S,w,C,T,I,N;np||ld(),this.styles=this.styles||ux(e),I=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(ui[_]&&Qv(_,t,i,r,e,s)))){if(f=typeof u,g=Lu[_],f==="function"&&(u=u.call(i,r,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Fl(u)),g)g(this,e,_,u,i)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",_s.lastIndex=0,_s.test(c)||(m=Pn(c),p=Pn(u),p?m!==p&&(c=bs(e,_,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),I.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],pn(c)&&~c.indexOf("random(")&&(c=Fl(c)),Pn(c+"")||c==="auto"||(c+=yi.units[_]||Pn(Cr(e,_))||""),(c+"").charAt(1)==="="&&(c=Cr(e,_))):c=Cr(e,_),d=parseFloat(c),y=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),_ in cr&&(_==="autoAlpha"&&(d===1&&Cr(e,"visibility")==="hidden"&&h&&(d=0),I.push("visibility",0,a.visibility),ls(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=cr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Wr,v){if(this.styles.save(_),N=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=_i(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var x=e.style.perspective;e.style.perspective=u,u=_i(e,"perspective"),x?e.style.perspective=x:Ms(e,"perspective")}h=parseFloat(u)}if(S||(w=e._gsap,w.renderTransform&&!t.parseTransform||Hl(e,t.parseTransform),C=t.smoothOrigin!==!1&&w.smooth,S=this._pt=new ni(this._pt,a,Yt,0,1,w.renderTransform,w,0,-1),S.dep=1),_==="scale")this._pt=new ni(this._pt,w,"scaleY",w.scaleY,(y?fa(w.scaleY,y+h):h)-w.scaleY||0,od),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){I.push(ii,0,a[ii]),u=fR(u),w.svg?cd(e,u,0,C,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==w.zOrigin&&ls(this,w,"zOrigin",w.zOrigin,p),ls(this,a,_,Du(c),Du(u)));continue}else if(_==="svgOrigin"){cd(e,u,1,C,0,this);continue}else if(_ in px){mR(this,w,_,d,y?fa(d,y+u):u);continue}else if(_==="smoothOrigin"){ls(this,w,"smooth",w.smooth,u);continue}else if(_==="force3D"){w[_]=u;continue}else if(_==="transform"){gR(this,u,e);continue}}else _ in a||(_=Aa(_)||_);if(v||(h||h===0)&&(d||d===0)&&!KC.test(u)&&_ in a)m=(c+"").substr((d+"").length),h||(h=0),p=Pn(u)||(_ in yi.units?yi.units[_]:m),m!==p&&(d=bs(e,_,c,p)),this._pt=new ni(this._pt,v?w:a,_,d,(y?fa(d,y+h):h)-d,!v&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?eR:od),this._pt.u=p||0,v&&N!==u?(this._pt.b=c,this._pt.e=N,this._pt.r=QC):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=JC);else if(_ in a)uR.call(this,e,_,c,y?y+u:u);else if(_ in e)this.add(e,_,c||e[_],y?y+u:u,r,s);else if(_!=="parseTransform"){$d(_,u);continue}v||(_ in a?I.push(_,0,a[_]):typeof e[_]=="function"?I.push(_,2,e[_]()):I.push(_,1,c||e[_])),o.push(_)}}T&&sx(this)},render:function(e,t){if(t.tween._time||!ip())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Cr,aliases:cr,getSetter:function(e,t,i){var r=cr[t];return r&&r.indexOf(",")<0&&(t=r),t in Wr&&t!==ii&&(e._gsap.x||Cr(e,"x"))?i&&Wg===i?t==="scale"?rR:iR:(Wg=i||{})&&(t==="scale"?sR:oR):e.style&&!Vd(e.style[t])?tR:~t.indexOf("-")?nR:ep(e,t)},core:{_removeProperty:Ms,_getMatrix:sp}};ri.utils.checkPrefix=Aa;ri.core.getStyleSaver=ux;(function(n,e,t,i){var r=ti(n+","+e+","+t,function(s){Wr[s]=1});ti(e,function(s){yi.units[s]="deg",px[s]=1}),cr[r[13]]=n+","+e,ti(i,function(s){var o=s.split(":");cr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ti("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){yi.units[n]="px"});ri.registerPlugin(_x);var Si=ri.registerPlugin(_x)||ri;Si.core.Tween;class _R{constructor(e=.08){Me(this,"current",{x:0,y:0});Me(this,"target",{x:0,y:0});Me(this,"velocity",{x:0,y:0});Me(this,"ease");this.ease=e,typeof window<"u"&&(window.addEventListener("mousemove",this.onMouseMove.bind(this)),window.addEventListener("touchmove",this.onTouchMove.bind(this),{passive:!0}))}onMouseMove(e){this.target.x=e.clientX/window.innerWidth*2-1,this.target.y=-(e.clientY/window.innerHeight)*2+1}onTouchMove(e){if(e.touches.length>0){const t=e.touches[0];this.target.x=t.clientX/window.innerWidth*2-1,this.target.y=-(t.clientY/window.innerHeight)*2+1}}update(){const e=this.current.x,t=this.current.y;this.current.x+=(this.target.x-this.current.x)*this.ease,this.current.y+=(this.target.y-this.current.y)*this.ease,this.velocity.x=this.current.x-e,this.velocity.y=this.current.y-t}destroy(){typeof window<"u"&&(window.removeEventListener("mousemove",this.onMouseMove.bind(this)),window.removeEventListener("touchmove",this.onTouchMove.bind(this)))}}const Qg=`varying vec3 vNormalVec;
varying vec3 vWorldPosition;
varying vec3 vEyeVector;

void main() {
  vNormalVec = normalize(normalMatrix * normal);
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPosition.xyz;
  vEyeVector = normalize(worldPosition.xyz - cameraPosition);
  gl_Position = projectionMatrix * viewMatrix * worldPosition;
}`,e_=`precision highp float;

varying vec3 vNormalVec;
varying vec3 vWorldPosition;
varying vec3 vEyeVector;

uniform float uTime;
uniform vec2 uMouse;
uniform float uDispersion;
uniform float uRoughness;
uniform float uTransmission;
uniform float uColorTheme;
uniform float uIsBack;

// Subtle muted cosine palette
vec3 palette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
  return a + b * cos(6.28318 * (c * t + d));
}

void main() {
  // 1. Sharp flat facet normal
  vec3 fdx = dFdx(vWorldPosition);
  vec3 fdy = dFdy(vWorldPosition);
  vec3 facetNormal = normalize(cross(fdx, fdy));
  vec3 normal = normalize(mix(facetNormal, vNormalVec, 0.05));
  vec3 eye = normalize(vEyeVector);

  // 2. Light vectors
  vec3 light1 = normalize(vec3(uMouse.x * 2.0 + 0.5, uMouse.y * 2.0 + 1.2, 2.2));
  vec3 light2 = normalize(vec3(-2.0, -1.5, 1.2));

  // 3. Controlled, elegant specular gleams (not blinding)
  vec3 half1 = normalize(light1 - eye);
  float spec1 = pow(max(dot(normal, half1), 0.0), 32.0 / (uRoughness + 0.03));

  // 4. Subtle Fresnel rim
  float fresnel = pow(1.0 - max(dot(-eye, normal), 0.0), 2.5);

  // 5. Chromatic Dispersion
  float disp = uDispersion * 0.05;
  vec3 refr = refract(eye, normal, 1.0 / 1.35);
  float dispIndex = dot(refr, facetNormal) * 1.8 + sin(uTime * 0.35 + vWorldPosition.y * 1.2) * 0.4;

  // More subdued, elegant luxury palette (less saturated neon)
  vec3 palA = vec3(0.35, 0.30, 0.40);
  vec3 palB = vec3(0.25, 0.25, 0.30);
  vec3 palC = vec3(0.80, 0.80, 0.80);
  vec3 palD = vec3(0.00, 0.33, 0.67);

  if (uColorTheme > 0.5 && uColorTheme < 1.5) {
    palA = vec3(0.45, 0.20, 0.40);
    palB = vec3(0.30, 0.18, 0.35);
    palD = vec3(0.80, 0.15, 0.90);
  } else if (uColorTheme >= 1.5) {
    palA = vec3(0.45, 0.38, 0.20);
    palB = vec3(0.30, 0.22, 0.10);
    palD = vec3(0.10, 0.25, 0.40);
  }

  vec3 rainbow = palette(dispIndex, palA, palB, palC, palD);

  // Deep smoky crystal base
  vec3 baseGlass = vec3(0.03, 0.04, 0.08);
  vec3 color = baseGlass;

  // Subdued internal caustics (dimmed by ~60%)
  color += rainbow * (0.45 + uDispersion * 0.2);

  // Soft diamond specular highlights
  color += vec3(0.9, 0.95, 1.0) * spec1 * 1.1;

  // Delicate Fresnel edge sheen
  vec3 rimColor = uColorTheme < 0.5 ? vec3(0.0, 0.7, 0.85) : (uColorTheme < 1.5 ? vec3(0.8, 0.2, 0.5) : vec3(0.8, 0.65, 0.3));
  color += rimColor * fresnel * 0.55;

  // Subtle facet edge highlight
  float facetGlint = pow(1.0 - abs(dot(facetNormal, vec3(0.0, 0.0, 1.0))), 2.0) * 0.35;
  color += vec3(0.6, 0.7, 0.8) * facetGlint;

  if (uIsBack > 0.5) {
    // Back faces: deeper smoky glass
    gl_FragColor = vec4(color * 0.5, 0.5);
  } else {
    // Front faces: clean translucent glass
    float alpha = clamp(0.55 + fresnel * 0.25 + spec1 * 0.15, 0.35, 0.85);
    gl_FragColor = vec4(color, alpha);
  }
}`;class vR{constructor(e){Me(this,"group");Me(this,"backMesh");Me(this,"frontMesh");Me(this,"edgeLinesMesh");Me(this,"coreFlareSprite");Me(this,"particlesMesh");Me(this,"backMaterial");Me(this,"frontMaterial");Me(this,"edgeLinesMaterial");Me(this,"config",{dispersion:1,roughness:.08,transmission:.82,colorTheme:0,wireframe:!0,rotationSpeed:.65});this.group=new Za,this.initDualPassCrystal(),this.initEdgeLines(),this.initCoreFlare(),this.initParticles()}initDualPassCrystal(){const e=new Tu(1.6,0).toNonIndexed();e.computeVertexNormals(),this.backMaterial=new pr({vertexShader:Qg,fragmentShader:e_,transparent:!0,depthWrite:!1,depthTest:!0,side:Yn,uniforms:{uTime:{value:0},uMouse:{value:new Qe(0,0)},uDispersion:{value:this.config.dispersion},uRoughness:{value:this.config.roughness},uTransmission:{value:.5},uColorTheme:{value:this.config.colorTheme},uIsBack:{value:1},uScrollProgress:{value:0}}}),this.backMesh=new Ui(e,this.backMaterial),this.group.add(this.backMesh),this.frontMaterial=new pr({vertexShader:Qg,fragmentShader:e_,transparent:!0,depthWrite:!0,depthTest:!0,side:Hr,uniforms:{uTime:{value:0},uMouse:{value:new Qe(0,0)},uDispersion:{value:this.config.dispersion},uRoughness:{value:this.config.roughness},uTransmission:{value:this.config.transmission},uColorTheme:{value:this.config.colorTheme},uIsBack:{value:0},uScrollProgress:{value:0}}}),this.frontMesh=new Ui(e,this.frontMaterial),this.group.add(this.frontMesh)}initEdgeLines(){const e=new YA(new Tu(1.604,0));this.edgeLinesMaterial=new xv({color:61695,transparent:!0,opacity:.35,blending:fl}),this.edgeLinesMesh=new XA(e,this.edgeLinesMaterial),this.edgeLinesMesh.visible=this.config.wireframe,this.group.add(this.edgeLinesMesh)}initCoreFlare(){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d"),i=t.createRadialGradient(64,64,0,64,64,64);i.addColorStop(0,"rgba(255, 255, 255, 0.4)"),i.addColorStop(.3,"rgba(0, 240, 255, 0.25)"),i.addColorStop(.7,"rgba(255, 46, 147, 0.1)"),i.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=i,t.fillRect(0,0,128,128);const r=new jh(e),s=new _v({map:r,transparent:!0,blending:fl,opacity:.35});this.coreFlareSprite=new VA(s),this.coreFlareSprite.scale.set(2.4,2.4,1),this.group.add(this.coreFlareSprite)}initParticles(){const t=new Float32Array(540);for(let c=0;c<180;c++){const u=2.2+Math.random()*4.5,h=Math.random()*Math.PI*2,d=Math.acos(Math.random()*2-1);t[c*3]=u*Math.sin(d)*Math.cos(h),t[c*3+1]=u*Math.sin(d)*Math.sin(h),t[c*3+2]=u*Math.cos(d)}const i=new Ti;i.setAttribute("position",new ki(t,3));const r=document.createElement("canvas");r.width=32,r.height=32;const s=r.getContext("2d"),o=s.createRadialGradient(16,16,0,16,16,16);o.addColorStop(0,"rgba(255, 255, 255, 0.8)"),o.addColorStop(.35,"rgba(0, 240, 255, 0.5)"),o.addColorStop(1,"rgba(0, 0, 0, 0)"),s.fillStyle=o,s.fillRect(0,0,32,32);const a=new jh(r),l=new yv({size:.11,map:a,transparent:!0,blending:fl,depthWrite:!1,opacity:.5});this.particlesMesh=new $A(i,l),this.group.add(this.particlesMesh)}update(e,t,i){this.backMaterial.uniforms.uTime.value=e,this.backMaterial.uniforms.uMouse.value.set(t.x,t.y),this.backMaterial.uniforms.uScrollProgress.value=i,this.frontMaterial.uniforms.uTime.value=e,this.frontMaterial.uniforms.uMouse.value.set(t.x,t.y),this.frontMaterial.uniforms.uScrollProgress.value=i;const r=this.config.rotationSpeed,s=e*.08*r+t.y*.25,o=e*.12*r+t.x*.35,a=Math.sin(e*.05)*.08;this.frontMesh.rotation.set(s,o,a),this.backMesh.rotation.set(s,o,a),this.edgeLinesMesh.rotation.copy(this.frontMesh.rotation),this.particlesMesh&&(this.particlesMesh.rotation.y=-e*.015*r,this.particlesMesh.rotation.x=e*.008*r),this.group.position.y=-i*2.2}setConfig(e){Object.assign(this.config,e),e.dispersion!==void 0&&(this.frontMaterial.uniforms.uDispersion.value=this.config.dispersion,this.backMaterial.uniforms.uDispersion.value=this.config.dispersion),e.roughness!==void 0&&(this.frontMaterial.uniforms.uRoughness.value=this.config.roughness,this.backMaterial.uniforms.uRoughness.value=this.config.roughness),e.transmission!==void 0&&(this.frontMaterial.uniforms.uTransmission.value=this.config.transmission),e.colorTheme!==void 0&&(this.frontMaterial.uniforms.uColorTheme.value=this.config.colorTheme,this.backMaterial.uniforms.uColorTheme.value=this.config.colorTheme,this.config.colorTheme===0?this.edgeLinesMaterial.color.setHex(61695):this.config.colorTheme===1?this.edgeLinesMaterial.color.setHex(16723603):this.edgeLinesMaterial.color.setHex(16765286)),e.wireframe!==void 0&&(this.edgeLinesMesh.visible=this.config.wireframe)}}function xR(n){const e=new $h(n);e.compileEquirectangularShader();const t=document.createElement("canvas");t.width=2048,t.height=1024;const i=t.getContext("2d"),r=i.createLinearGradient(0,0,0,1024);r.addColorStop(0,"#040508"),r.addColorStop(.5,"#080912"),r.addColorStop(1,"#040508"),i.fillStyle=r,i.fillRect(0,0,2048,1024);const s=i.createRadialGradient(1500,300,0,1500,300,450);s.addColorStop(0,"rgba(0, 240, 255, 1)"),s.addColorStop(.3,"rgba(0, 200, 255, 0.8)"),s.addColorStop(.7,"rgba(0, 120, 255, 0.3)"),s.addColorStop(1,"rgba(0, 0, 0, 0)"),i.fillStyle=s,i.fillRect(1e3,0,1e3,700);const o=i.createRadialGradient(400,700,0,400,700,500);o.addColorStop(0,"rgba(255, 46, 147, 1)"),o.addColorStop(.35,"rgba(200, 30, 180, 0.75)"),o.addColorStop(.7,"rgba(123, 44, 191, 0.3)"),o.addColorStop(1,"rgba(0, 0, 0, 0)"),i.fillStyle=o,i.fillRect(0,300,900,724);const a=i.createRadialGradient(1024,150,0,1024,150,350);a.addColorStop(0,"rgba(255, 255, 255, 1)"),a.addColorStop(.25,"rgba(255, 209, 102, 0.9)"),a.addColorStop(.6,"rgba(255, 140, 0, 0.3)"),a.addColorStop(1,"rgba(0, 0, 0, 0)"),i.fillStyle=a,i.fillRect(700,0,650,450),i.fillStyle="rgba(255, 255, 255, 0.95)",i.fillRect(950,80,150,20),i.fillRect(1400,250,120,15);const l=new jh(t);l.mapping=vu,l.needsUpdate=!0;const c=e.fromEquirectangular(l);return e.dispose(),l.dispose(),c.texture}function yR(n){n.traverse(e=>{e instanceof Ui&&(e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t_(t)):t_(e.material)))})}function t_(n){n.dispose(),Object.keys(n).forEach(e=>{const t=n[e];t&&typeof t=="object"&&"minFilter"in t&&t.dispose()})}class SR{constructor(e){Me(this,"canvas");Me(this,"renderer");Me(this,"scene");Me(this,"camera");Me(this,"mouseTracker");Me(this,"prismScene");Me(this,"clock");Me(this,"isRunning",!1);Me(this,"scrollProgress",0);Me(this,"tickerCallback");this.canvas=e,this.clock=new ZA,this.mouseTracker=new _R(.06),this.scene=new HA,this.camera=new fi(45,window.innerWidth/window.innerHeight,.1,100),this.camera.position.set(0,0,7.2),this.renderer=new gv({canvas:this.canvas,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=Xi,this.renderer.toneMapping=z0,this.renderer.toneMappingExposure=1.35,this.scene.environment=xR(this.renderer);const t=new KA(922144,2);this.scene.add(t);const i=new oh(61695,8,30);i.position.set(5,4,6),this.scene.add(i);const r=new oh(16723603,7,30);r.position.set(-5,-4,5),this.scene.add(r);const s=new oh(16765286,4,25);s.position.set(0,6,3),this.scene.add(s),this.prismScene=new vR(this.renderer),this.scene.add(this.prismScene.group),this.onResize=this.onResize.bind(this),this.render=this.render.bind(this),window.addEventListener("resize",this.onResize),this.tickerCallback=()=>this.render(),Si.ticker.add(this.tickerCallback),this.isRunning=!0}onResize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,e<768?this.camera.position.z=9.2:this.camera.position.z=7.2,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}setScrollProgress(e){this.scrollProgress=e}updateLabConfig(e){this.prismScene.setConfig(e)}render(){if(!this.isRunning)return;const e=this.clock.getElapsedTime();this.mouseTracker.update(),this.prismScene.update(e,this.mouseTracker.current,this.scrollProgress),this.renderer.render(this.scene,this.camera)}destroy(){this.isRunning=!1,window.removeEventListener("resize",this.onResize),Si.ticker.remove(this.tickerCallback),this.mouseTracker.destroy(),yR(this.scene),this.renderer.dispose()}}var n_="1.3.26";function vx(n,e,t){return Math.max(n,Math.min(e,t))}function MR(n,e,t){return(1-t)*n+t*e}function bR(n,e,t,i){return MR(n,e,1-Math.exp(-t*i))}function ER(n,e){return(n%e+e)%e}var TR=class{constructor(){Me(this,"isRunning",!1);Me(this,"value",0);Me(this,"from",0);Me(this,"to",0);Me(this,"currentTime",0);Me(this,"lerp");Me(this,"duration");Me(this,"easing");Me(this,"onUpdate")}advance(n){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=n;const i=vx(0,this.currentTime/this.duration,1);e=i>=1;const r=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=bR(this.value,this.to,this.lerp*60,n),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(n,e,{lerp:t,duration:i,easing:r,onStart:s,onUpdate:o}){this.from=this.value=n,this.to=e,this.lerp=t,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function wR(n,e){let t;return function(...i){clearTimeout(t),t=setTimeout(()=>{t=void 0,n.apply(this,i)},e)}}var AR=class{constructor(n,e,{autoResize:t=!0,debounce:i=250}={}){Me(this,"width",0);Me(this,"height",0);Me(this,"scrollHeight",0);Me(this,"scrollWidth",0);Me(this,"debouncedResize");Me(this,"wrapperResizeObserver");Me(this,"contentResizeObserver");Me(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Me(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Me(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=n,this.content=e,t&&(this.debouncedResize=wR(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var n,e;(n=this.wrapperResizeObserver)==null||n.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},xx=class{constructor(){Me(this,"events",{})}emit(n,...e){var i;const t=this.events[n]||[];for(let r=0,s=t.length;r<s;r++)(i=t[r])==null||i.call(t,...e)}on(n,e){return this.events[n]?this.events[n].push(e):this.events[n]=[e],()=>{var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}}off(n,e){var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}destroy(){this.events={}}};const CR=100/6,ts={passive:!1};function i_(n,e){return n===1?CR:n===2?e:1}var RR=class{constructor(n,e={wheelMultiplier:1,touchMultiplier:1}){Me(this,"touchStart",{x:0,y:0});Me(this,"lastDelta",{x:0,y:0});Me(this,"window",{width:0,height:0});Me(this,"emitter",new xx);Me(this,"onTouchStart",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})});Me(this,"onTouchMove",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n,i=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:n})});Me(this,"onTouchEnd",n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})});Me(this,"onWheel",n=>{let{deltaX:e,deltaY:t,deltaMode:i}=n;const r=i_(i,this.window.width),s=i_(i,this.window.height);e*=r,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:n})});Me(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=n,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,ts),this.element.addEventListener("touchstart",this.onTouchStart,ts),this.element.addEventListener("touchmove",this.onTouchMove,ts),this.element.addEventListener("touchend",this.onTouchEnd,ts)}on(n,e){return this.emitter.on(n,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,ts),this.element.removeEventListener("touchstart",this.onTouchStart,ts),this.element.removeEventListener("touchmove",this.onTouchMove,ts),this.element.removeEventListener("touchend",this.onTouchEnd,ts)}};const r_=n=>Math.min(1,1.001-2**(-10*n));var PR=class{constructor({wrapper:n=window,content:e=document.documentElement,eventsTarget:t=n,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:d=h==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:y=!0,autoRaf:v=!1,anchors:S=!1,autoToggle:w=!1,allowNestedScroll:C=!1,__experimental__naiveDimensions:T=!1,naiveDimensions:I=T,stopInertiaOnNavigate:N=!1,respectReducedMotion:x=!0}={}){Me(this,"_isScrolling",!1);Me(this,"_isStopped",!1);Me(this,"_isLocked",!1);Me(this,"_preventNextNativeScrollEvent",!1);Me(this,"_resetVelocityTimeout",null);Me(this,"_rafId",null);Me(this,"_isDraggingSelection",!1);Me(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Me(this,"isTouching");Me(this,"isIos");Me(this,"time",0);Me(this,"userData",{});Me(this,"lastVelocity",0);Me(this,"velocity",0);Me(this,"direction",0);Me(this,"options");Me(this,"targetScroll");Me(this,"animatedScroll");Me(this,"animate",new TR);Me(this,"emitter",new xx);Me(this,"dimensions");Me(this,"virtualScroll");Me(this,"onScrollEnd",n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()});Me(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Me(this,"onTransitionEnd",n=>{var e;(e=n.propertyName)!=null&&e.includes("overflow")&&n.target===this.rootElement&&this.checkOverflow()});Me(this,"onClick",n=>{const e=n.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),t=new URL(window.location.href);if(this.options.anchors){const i=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(i){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(i.hash);this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>t.host===i.host&&t.pathname!==i.pathname)){this.reset();return}});Me(this,"onPointerDown",n=>{n.button===1&&this.reset()});Me(this,"onVirtualScroll",n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;const{deltaX:e,deltaY:t,event:i}=n;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const r=i.type.includes("touch"),s=i.type.includes("wheel");if(r&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&r&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(g=>{var _,m,p,y,v;return g instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(g))||((_=g.hasAttribute)==null?void 0:_.call(g,"data-lenis-prevent"))||u==="vertical"&&((m=g.hasAttribute)==null?void 0:m.call(g,"data-lenis-prevent-vertical"))||u==="horizontal"&&((p=g.hasAttribute)==null?void 0:p.call(g,"data-lenis-prevent-horizontal"))||r&&((y=g.hasAttribute)==null?void 0:y.call(g,"data-lenis-prevent-touch"))||s&&((v=g.hasAttribute)==null?void 0:v.call(g,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let h=t;this.options.gestureOrientation==="both"?h=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(h=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const d=r&&this.options.syncTouch,f=r&&i.type==="touchend";f&&(h=Math.sign(h)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+h,{programmatic:!1,...d?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Me(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Me(this,"raf",n=>{const e=n-(this.time||n);this.time=n,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=n_,window.lenis||(window.lenis={}),window.lenis.version=n_,h==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!n||n===document.documentElement)&&(n=window),typeof a=="number"&&typeof l!="function"?l=r_:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:n,content:e,eventsTarget:t,smoothWheel:i,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:d,orientation:h,touchMultiplier:f,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:y,autoRaf:v,anchors:S,autoToggle:w,allowNestedScroll:C,naiveDimensions:I,stopInertiaOnNavigate:N,respectReducedMotion:x},this.dimensions=new AR(n,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new RR(t,{touchMultiplier:f,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(n,e){return this.emitter.on(n,e)}off(n,e){return this.emitter.off(n,e)}get overflow(){const n=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[n]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}isTouchOnSelectionHandle(n){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=n.targetTouches[0]??n.changedTouches[0];if(!t)return!1;const i=e.getRangeAt(0).getClientRects();if(i.length===0)return!1;const r=i[0],s=i[i.length-1],o=40,a=Math.hypot(t.clientX-r.left,t.clientY-r.top)<=o,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(n,{offset:e=0,immediate:t=!1,lock:i=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:h}={}){if(this.prefersReducedMotion&&(r?t=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let d=n,f=e;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let g=null;if(typeof d=="string"?(g=d.startsWith("#")?document.getElementById(d.slice(1)):document.querySelector(d),g||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof HTMLElement&&(d!=null&&d.nodeType)&&(g=d),g){if(this.options.wrapper!==window){const S=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?S.left:S.top}const _=g.getBoundingClientRect(),m=getComputedStyle(g),p=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),y=getComputedStyle(this.rootElement),v=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);d=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(v)?0:v)}}if(typeof d=="number"){if(d+=f,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const g=d-this.animatedScroll;g>this.limit/2?d-=this.limit:g<-this.limit/2&&(d+=this.limit)}}else d=vx(0,d,this.limit);if(d===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=d),typeof o=="number"&&typeof a!="function"?a=r_:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,d,{duration:o,easing:a,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(g,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),r&&(this.targetScroll=g),_||this.emit(),_&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(n,{deltaX:e,deltaY:t}){const i=Date.now();n._lenis||(n._lenis={});const r=n._lenis;let s,o,a,l,c,u,h,d,f,g;if(i-(r.time??0)>2e3){r.time=Date.now();const C=window.getComputedStyle(n);if(r.computedStyle=C,s=["auto","overlay","scroll"].includes(C.overflowX),o=["auto","overlay","scroll"].includes(C.overflowY),c=["auto"].includes(C.overscrollBehaviorX),u=["auto"].includes(C.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=o,!(s||o))return!1;h=n.scrollWidth,d=n.scrollHeight,f=n.clientWidth,g=n.clientHeight,a=h>f,l=d>g,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=h,r.scrollHeight=d,r.clientWidth=f,r.clientHeight=g,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=u}else a=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,h=r.scrollWidth,d=r.scrollHeight,f=r.clientWidth,g=r.clientHeight,c=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const _=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let m,p,y,v,S,w;if(_==="horizontal")m=Math.round(n.scrollLeft),p=h-f,y=e,v=s,S=a,w=c;else if(_==="vertical")m=Math.round(n.scrollTop),p=d-g,y=t,v=o,S=l,w=u;else return!1;return!w&&(m>=p||m<=0)?!0:(y>0?m<p:m>0)&&v&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const n=this.options.wrapper;return this.isHorizontal?n.scrollX??n.scrollLeft:n.scrollY??n.scrollTop}get scroll(){return this.options.infinite?ER(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let n="lenis";return this.options.autoToggle&&(n+=" lenis-autoToggle"),this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(n=>{this.rootElement.classList.add(n)})}cleanUpClassName(){for(const n of Array.from(this.rootElement.classList))(n==="lenis"||n.startsWith("lenis-"))&&this.rootElement.classList.remove(n)}};function LR(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function DR(n,e,t){return e&&LR(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vn,tu,pi,cs,us,pa,yx,Ys,ma,Sx,Nr,Wi,Mx,bx=function(){return vn||typeof window<"u"&&(vn=window.gsap)&&vn.registerPlugin&&vn},Ex=1,ra=[],ht=[],hr=[],ml=Date.now,ud=function(e,t){return t},IR=function(){var e=ma.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,ht),r.push.apply(r,hr),ht=i,hr=r,ud=function(o,a){return t[o](a)}},vs=function(e,t){return~hr.indexOf(e)&&hr[hr.indexOf(e)+1][t]},gl=function(e){return!!~Sx.indexOf(e)},kn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},On=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Ic="scrollLeft",Uc="scrollTop",fd=function(){return Nr&&Nr.isPressed||ht.cache++},Iu=function(e,t){var i=function r(s){if(s||s===0){Ex&&(pi.history.scrollRestoration="manual");var o=Nr&&Nr.isPressed;s=r.v=Math.round(s)||(Nr&&Nr.iOS?1:0),e(s),r.cacheID=ht.cache,o&&ud("ss",s)}else(t||ht.cache!==r.cacheID||ud("ref"))&&(r.cacheID=ht.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Xn={s:Ic,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Iu(function(n){return arguments.length?pi.scrollTo(n,sn.sc()):pi.pageXOffset||cs[Ic]||us[Ic]||pa[Ic]||0})},sn={s:Uc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Xn,sc:Iu(function(n){return arguments.length?pi.scrollTo(Xn.sc(),n):pi.pageYOffset||cs[Uc]||us[Uc]||pa[Uc]||0})},Kn=function(e,t){return(t&&t._ctx&&t._ctx.selector||vn.utils.toArray)(e)[0]||(typeof e=="string"&&vn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},UR=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Es=function(e,t){var i=t.s,r=t.sc;gl(e)&&(e=cs.scrollingElement||us);var s=ht.indexOf(e),o=r===sn.sc?1:2;!~s&&(s=ht.push(e)-1),ht[s+o]||kn(e,"scroll",fd);var a=ht[s+o],l=a||(ht[s+o]=Iu(vs(e,i),!0)||(gl(e)?r:Iu(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,a||(l.smooth=vn.getProperty(e,"scrollBehavior")==="smooth"),l},hd=function(e,t,i){var r=e,s=e,o=ml(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=ml();_||m-o>l?(s=r,r=g,a=o,o=m):i?r+=g:r=s+(g-s)/(m-a)*(o-a)},h=function(){s=r=i?0:r,a=o=0},d=function(g){var _=a,m=s,p=ml();return(g||g===0)&&g!==r&&u(g),o===a||p-a>c?0:(r+(i?m:-m))/((i?p:o)-_)*1e3};return{update:u,reset:h,getVelocity:d}},$a=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},s_=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},Tx=function(){ma=vn.core.globals().ScrollTrigger,ma&&ma.core&&IR()},wx=function(e){return vn=e||bx(),!tu&&vn&&typeof document<"u"&&document.body&&(pi=window,cs=document,us=cs.documentElement,pa=cs.body,Sx=[pi,cs,us,pa],vn.utils.clamp,Mx=vn.core.context||function(){},Ys="onpointerenter"in pa?"pointer":"mouse",yx=Zt.isTouch=pi.matchMedia&&pi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in pi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Wi=Zt.eventTypes=("ontouchstart"in us?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in us?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Ex=0},500),tu=1),ma||Tx(),tu};Xn.op=sn;ht.cache=0;var Zt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){tu||wx(vn)||console.warn("Please gsap.registerPlugin(Observer)"),ma||Tx();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,h=i.onStop,d=i.onStopDelay,f=i.ignore,g=i.wheelSpeed,_=i.event,m=i.onDragStart,p=i.onDragEnd,y=i.onDrag,v=i.onPress,S=i.onRelease,w=i.onRight,C=i.onLeft,T=i.onUp,I=i.onDown,N=i.onChangeX,x=i.onChangeY,R=i.onChange,F=i.onToggleX,ne=i.onToggleY,U=i.onHover,K=i.onHoverEnd,W=i.onMove,X=i.ignoreCheck,G=i.isNormalizer,re=i.onGestureStart,L=i.onGestureEnd,ue=i.onWheel,_e=i.onEnable,Ve=i.onDisable,Z=i.onClick,he=i.scrollSpeed,ve=i.capture,Pe=i.allowClicks,Ce=i.lockAxis,be=i.onLockAxis;this.target=a=Kn(a)||us,this.vars=i,f&&(f=vn.utils.toArray(f)),r=r||1e-9,s=s||0,g=g||1,he=he||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(pi.getComputedStyle(pa).lineHeight)||22);var it,Fe,M,O,B,te,q,P=this,oe=0,ae=0,ce=i.passive||!u&&i.passive!==!1,E=Es(a,Xn),b=Es(a,sn),k=E(),$=b(),j=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Wi[0]==="pointerdown",se=gl(a),pe=a.ownerDocument||cs,xe=[0,0,0],fe=[0,0,0],de=0,Ge=function(){return de=ml()},le=function(Ne,ze){return(P.event=Ne)&&f&&UR(Ne.target,f)||ze&&j&&Ne.pointerType!=="touch"||X&&X(Ne,ze)},_t=function(){P._vx.reset(),P._vy.reset(),Fe.pause(),h&&h(P)},qe=function(){var Ne=P.deltaX=s_(xe),ze=P.deltaY=s_(fe),ge=Math.abs(Ne)>=r,Xe=Math.abs(ze)>=r;R&&(ge||Xe)&&R(P,Ne,ze,xe,fe),ge&&(w&&P.deltaX>0&&w(P),C&&P.deltaX<0&&C(P),N&&N(P),F&&P.deltaX<0!=oe<0&&F(P),oe=P.deltaX,xe[0]=xe[1]=xe[2]=0),Xe&&(I&&P.deltaY>0&&I(P),T&&P.deltaY<0&&T(P),x&&x(P),ne&&P.deltaY<0!=ae<0&&ne(P),ae=P.deltaY,fe[0]=fe[1]=fe[2]=0),(O||M)&&(W&&W(P),M&&(m&&M===1&&m(P),y&&y(P),M=0),O=!1),te&&!(te=!1)&&be&&be(P),B&&(ue(P),B=!1),it=0},Re=function(Ne,ze,ge){xe[ge]+=Ne,fe[ge]+=ze,P._vx.update(Ne),P._vy.update(ze),c?it||(it=requestAnimationFrame(qe)):qe()},Ae=function(Ne,ze){Ce&&!q&&(P.axis=q=Math.abs(Ne)>Math.abs(ze)?"x":"y",te=!0),q!=="y"&&(xe[2]+=Ne,P._vx.update(Ne,!0)),q!=="x"&&(fe[2]+=ze,P._vy.update(ze,!0)),c?it||(it=requestAnimationFrame(qe)):qe()},Le=function(Ne){if(!le(Ne,1)){Ne=$a(Ne,u);var ze=Ne.clientX,ge=Ne.clientY,Xe=ze-P.x,We=ge-P.y,tt=P.isDragging;P.x=ze,P.y=ge,(tt||(Xe||We)&&(Math.abs(P.startX-ze)>=s||Math.abs(P.startY-ge)>=s))&&(M||(M=tt?2:1),tt||(P.isDragging=!0),Ae(Xe,We))}},et=P.onPress=function(ke){le(ke,1)||ke&&ke.button||(P.axis=q=null,Fe.pause(),P.isPressed=!0,ke=$a(ke),oe=ae=0,P.startX=P.x=ke.clientX,P.startY=P.y=ke.clientY,P._vx.reset(),P._vy.reset(),kn(G?a:pe,Wi[1],Le,ce,!0),P.deltaX=P.deltaY=0,v&&v(P))},Ee=P.onRelease=function(ke){if(!le(ke,1)){On(G?a:pe,Wi[1],Le,!0);var Ne=!isNaN(P.y-P.startY),ze=P.isDragging,ge=ze&&(Math.abs(P.x-P.startX)>3||Math.abs(P.y-P.startY)>3),Xe=$a(ke);!ge&&Ne&&(P._vx.reset(),P._vy.reset(),u&&Pe&&vn.delayedCall(.08,function(){if(ml()-de>300&&!ke.defaultPrevented){if(ke.target.click)ke.target.click();else if(pe.createEvent){var We=pe.createEvent("MouseEvents");We.initMouseEvent("click",!0,!0,pi,1,Xe.screenX,Xe.screenY,Xe.clientX,Xe.clientY,!1,!1,!1,!1,0,null),ke.target.dispatchEvent(We)}}})),P.isDragging=P.isGesturing=P.isPressed=!1,h&&ze&&!G&&Fe.restart(!0),M&&qe(),p&&ze&&p(P),S&&S(P,ge)}},pt=function(Ne){return Ne.touches&&Ne.touches.length>1&&(P.isGesturing=!0)&&re(Ne,P.isDragging)},z=function(){return(P.isGesturing=!1)||L(P)},ye=function(Ne){if(!le(Ne)){var ze=E(),ge=b();Re((ze-k)*he,(ge-$)*he,1),k=ze,$=ge,h&&Fe.restart(!0)}},Q=function(Ne){if(!le(Ne)){Ne=$a(Ne,u),ue&&(B=!0);var ze=(Ne.deltaMode===1?l:Ne.deltaMode===2?pi.innerHeight:1)*g;Re(Ne.deltaX*ze,Ne.deltaY*ze,0),h&&!G&&Fe.restart(!0)}},me=function(Ne){if(!le(Ne)){var ze=Ne.clientX,ge=Ne.clientY,Xe=ze-P.x,We=ge-P.y;P.x=ze,P.y=ge,O=!0,h&&Fe.restart(!0),(Xe||We)&&Ae(Xe,We)}},we=function(Ne){P.event=Ne,U(P)},Je=function(Ne){P.event=Ne,K(P)},mt=function(Ne){return le(Ne)||$a(Ne,u)&&Z(P)};Fe=P._dc=vn.delayedCall(d||.25,_t).pause(),P.deltaX=P.deltaY=0,P._vx=hd(0,50,!0),P._vy=hd(0,50,!0),P.scrollX=E,P.scrollY=b,P.isDragging=P.isGesturing=P.isPressed=!1,Mx(this),P.enable=function(ke){return P.isEnabled||(kn(se?pe:a,"scroll",fd),o.indexOf("scroll")>=0&&kn(se?pe:a,"scroll",ye,ce,ve),o.indexOf("wheel")>=0&&kn(a,"wheel",Q,ce,ve),(o.indexOf("touch")>=0&&yx||o.indexOf("pointer")>=0)&&(kn(a,Wi[0],et,ce,ve),kn(pe,Wi[2],Ee),kn(pe,Wi[3],Ee),Pe&&kn(a,"click",Ge,!0,!0),Z&&kn(a,"click",mt),re&&kn(pe,"gesturestart",pt),L&&kn(pe,"gestureend",z),U&&kn(a,Ys+"enter",we),K&&kn(a,Ys+"leave",Je),W&&kn(a,Ys+"move",me)),P.isEnabled=!0,P.isDragging=P.isGesturing=P.isPressed=O=M=!1,P._vx.reset(),P._vy.reset(),k=E(),$=b(),ke&&ke.type&&et(ke),_e&&_e(P)),P},P.disable=function(){P.isEnabled&&(ra.filter(function(ke){return ke!==P&&gl(ke.target)}).length||On(se?pe:a,"scroll",fd),P.isPressed&&(P._vx.reset(),P._vy.reset(),On(G?a:pe,Wi[1],Le,!0)),On(se?pe:a,"scroll",ye,ve),On(a,"wheel",Q,ve),On(a,Wi[0],et,ve),On(pe,Wi[2],Ee),On(pe,Wi[3],Ee),On(a,"click",Ge,!0),On(a,"click",mt),On(pe,"gesturestart",pt),On(pe,"gestureend",z),On(a,Ys+"enter",we),On(a,Ys+"leave",Je),On(a,Ys+"move",me),P.isEnabled=P.isPressed=P.isDragging=!1,Ve&&Ve(P))},P.kill=P.revert=function(){P.disable();var ke=ra.indexOf(P);ke>=0&&ra.splice(ke,1),Nr===P&&(Nr=0)},ra.push(P),G&&gl(a)&&(Nr=P),P.enable(_)},DR(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();Zt.version="3.15.0";Zt.create=function(n){return new Zt(n)};Zt.register=wx;Zt.getAll=function(){return ra.slice()};Zt.getById=function(n){return ra.filter(function(e){return e.vars.id===n})[0]};bx()&&vn.registerPlugin(Zt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var De,Jo,ft,Et,hi,xt,op,Uu,Gl,_l,el,Nc,En,of,dd,Hn,o_,a_,Qo,Ax,mh,Cx,zn,pd,Rx,Px,ns,md,ap,ga,lp,vl,gd,gh,Oc=1,Tn=Date.now,_h=Tn(),Bi=0,tl=0,l_=function(e,t,i){var r=ci(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},c_=function(e,t){return t&&(!ci(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},NR=function n(){return tl&&requestAnimationFrame(n)},u_=function(){return of=1},f_=function(){return of=0},nr=function(e){return e},nl=function(e){return Math.round(e*1e5)/1e5||0},Lx=function(){return typeof window<"u"},Dx=function(){return De||Lx()&&(De=window.gsap)&&De.registerPlugin&&De},_o=function(e){return!!~op.indexOf(e)},Ix=function(e){return(e==="Height"?lp:ft["inner"+e])||hi["client"+e]||xt["client"+e]},Ux=function(e){return vs(e,"getBoundingClientRect")||(_o(e)?function(){return ou.width=ft.innerWidth,ou.height=lp,ou}:function(){return Ir(e)})},OR=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=vs(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?Ix(s):e["client"+s])||0}},FR=function(e,t){return!t||~hr.indexOf(e)?Ux(e):function(){return ou}},ur=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=vs(e,i))?o()-Ux(e)()[s]:_o(e)?(hi[i]||xt[i])-Ix(r):e[i]-e["offset"+r])},Fc=function(e,t){for(var i=0;i<Qo.length;i+=3)(!t||~t.indexOf(Qo[i+1]))&&e(Qo[i],Qo[i+1],Qo[i+2])},ci=function(e){return typeof e=="string"},Ln=function(e){return typeof e=="function"},il=function(e){return typeof e=="number"},qs=function(e){return typeof e=="object"},Ya=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},$o=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},Yo=Math.abs,Nx="left",Ox="top",cp="right",up="bottom",ho="width",po="height",xl="Right",yl="Left",Sl="Top",Ml="Bottom",Qt="padding",Di="margin",Ca="Width",fp="Height",rn="px",Ii=function(e){return ft.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},kR=function(e){var t=Ii(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},h_=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Ir=function(e,t){var i=t&&Ii(e)[dd]!=="matrix(1, 0, 0, 1, 0, 0)"&&De.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},Nu=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},Fx=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},BR=function(e){return function(t){return De.utils.snap(Fx(e),t)}},hp=function(e){var t=De.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},zR=function(e){return function(t,i){return hp(Fx(e))(t,i.direction)}},kc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},dn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},hn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Bc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},d_={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},zc={toggleActions:"play",anticipatePin:0},Ou={top:0,left:0,center:.5,bottom:1,right:1},nu=function(e,t){if(ci(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in Ou?Ou[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Hc=function(e,t,i,r,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,d=s.indent,f=s.fontWeight,g=Et.createElement("div"),_=_o(i)||vs(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?xt:i.tagName==="IFRAME"?i.contentDocument.body:i,y=e.indexOf("start")!==-1,v=y?c:u,S="border-color:"+v+";font-size:"+h+";color:"+v+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(S+=(r===sn?cp:up)+":"+(o+parseFloat(d))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+r.op.d2],iu(g,0,r,y),g},iu=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+Ca]=1,s["border"+a+Ca]=0,s[i.p]=t+"px",De.set(e,s)},ct=[],_d={},Vl,p_=function(){return Tn()-Bi>34&&(Vl||(Vl=requestAnimationFrame(Fr)))},qo=function(){(!zn||!zn.isPressed||zn.startX>xt.clientWidth)&&(ht.cache++,zn?Vl||(Vl=requestAnimationFrame(Fr)):Fr(),Bi||xo("scrollStart"),Bi=Tn())},vh=function(){Px=ft.innerWidth,Rx=ft.innerHeight},rl=function(e){ht.cache++,(e===!0||!En&&!Cx&&!Et.fullscreenElement&&!Et.webkitFullscreenElement&&(!pd||Px!==ft.innerWidth||Math.abs(ft.innerHeight-Rx)>ft.innerHeight*.25))&&Uu.restart(!0)},vo={},HR=[],kx=function n(){return hn(ot,"scrollEnd",n)||no(!0)},xo=function(e){return vo[e]&&vo[e].map(function(t){return t()})||HR},li=[],Bx=function(e){for(var t=0;t<li.length;t+=5)(!e||li[t+4]&&li[t+4].query===e)&&(li[t].style.cssText=li[t+1],li[t].getBBox&&li[t].setAttribute("transform",li[t+2]||""),li[t+3].uncache=1)},zx=function(){return ht.forEach(function(e){return Ln(e)&&++e.cacheID&&(e.rec=e())})},dp=function(e,t){var i;for(Hn=0;Hn<ct.length;Hn++)i=ct[Hn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));vl=!0,t&&Bx(t),t||xo("revert")},Hx=function(e,t){ht.cache++,(t||!Gn)&&ht.forEach(function(i){return Ln(i)&&i.cacheID++&&(i.rec=0)}),ci(e)&&(ft.history.scrollRestoration=ap=e)},Gn,mo=0,m_,GR=function(){if(m_!==mo){var e=m_=mo;requestAnimationFrame(function(){return e===mo&&no(!0)})}},Gx=function(){xt.appendChild(ga),lp=!zn&&ga.offsetHeight||ft.innerHeight,xt.removeChild(ga)},g_=function(e){return Gl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},no=function(e,t){if(hi=Et.documentElement,xt=Et.body,op=[ft,Et,hi,xt],Bi&&!e&&!vl){dn(ot,"scrollEnd",kx);return}Gx(),Gn=ot.isRefreshing=!0,vl||zx();var i=xo("refreshInit");Ax&&ot.sort(),t||dp(),ht.forEach(function(r){Ln(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),ct.slice(0).forEach(function(r){return r.refresh()}),vl=!1,ct.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),gd=1,g_(!0),ct.forEach(function(r){var s=ur(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),g_(!1),gd=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),ht.forEach(function(r){Ln(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Hx(ap,1),Uu.pause(),mo++,Gn=2,Fr(2),ct.forEach(function(r){return Ln(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Gn=ot.isRefreshing=!1,xo("refresh")},vd=0,ru=1,bl,Fr=function(e){if(e===2||!Gn&&!vl){ot.isUpdating=!0,bl&&bl.update(0);var t=ct.length,i=Tn(),r=i-_h>=50,s=t&&ct[0].scroll();if(ru=vd>s?-1:1,Gn||(vd=s),r&&(Bi&&!of&&i-Bi>200&&(Bi=0,xo("scrollEnd")),el=_h,_h=i),ru<0){for(Hn=t;Hn-- >0;)ct[Hn]&&ct[Hn].update(0,r);ru=1}else for(Hn=0;Hn<t;Hn++)ct[Hn]&&ct[Hn].update(0,r);ot.isUpdating=!1}Vl=0},xd=[Nx,Ox,up,cp,Di+Ml,Di+xl,Di+Sl,Di+yl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],su=xd.concat([ho,po,"boxSizing","max"+Ca,"max"+fp,"position",Di,Qt,Qt+Sl,Qt+xl,Qt+Ml,Qt+yl]),VR=function(e,t,i){_a(i);var r=e._gsap;if(r.spacerIsNative)_a(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},xh=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=xd.length,o=t.style,a=e.style,l;s--;)l=xd[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[up]=a[cp]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ho]=Nu(e,Xn)+rn,o[po]=Nu(e,sn)+rn,o[Qt]=a[Di]=a[Ox]=a[Nx]="0",_a(r),a[ho]=a["max"+Ca]=i[ho],a[po]=a["max"+fp]=i[po],a[Qt]=i[Qt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},WR=/([A-Z])/g,_a=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||De.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(WR,"-$1").toLowerCase())}},Gc=function(e){for(var t=su.length,i=e.style,r=[],s=0;s<t;s++)r.push(su[s],i[su[s]]);return r.t=e,r},XR=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},ou={left:0,top:0},__=function(e,t,i,r,s,o,a,l,c,u,h,d,f,g){Ln(e)&&(e=e(l)),ci(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?nu("0"+e.substr(3),i):0));var _=f?f.time():0,m,p,y;if(f&&f.seek(0),isNaN(e)||(e=+e),il(e))f&&(e=De.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),a&&iu(a,i,r,!0);else{Ln(t)&&(t=t(l));var v=(e||"0").split(" "),S,w,C,T;y=Kn(t,l)||xt,S=Ir(y)||{},(!S||!S.left&&!S.top)&&Ii(y).display==="none"&&(T=y.style.display,y.style.display="block",S=Ir(y),T?y.style.display=T:y.style.removeProperty("display")),w=nu(v[0],S[r.d]),C=nu(v[1]||"0",i),e=S[r.p]-c[r.p]-u+w+s-C,a&&iu(a,C,r,i-C<20||a._isStart&&C>20),i-=i-C}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var I=e+i,N=o._isStart;m="scroll"+r.d2,iu(o,I,r,N&&I>20||!N&&(h?Math.max(xt[m],hi[m]):o.parentNode[m])<=I+1),h&&(c=Ir(a),h&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+rn))}return f&&y&&(m=Ir(y),f.seek(d),p=Ir(y),f._caScrollDist=m[r.p]-p[r.p],e=e/f._caScrollDist*d),f&&f.seek(_),f?e:Math.round(e)},$R=/(webkit|moz|length|cssText|inset)/i,v_=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===xt){e._stOrig=s.cssText,a=Ii(e);for(o in a)!+o&&!$R.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;De.core.getCache(e).uncache=1,t.appendChild(e)}},Vx=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},Vc=function(e,t,i){var r={};r[t.p]="+="+i,De.set(e,r)},x_=function(e,t){var i=Es(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,h){var d=o.tween,f=l.onComplete,g={};c=c||i();var _=Vx(i,c,function(){d.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,d&&d.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){ht.cache++,o.tween&&Fr()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=De.to(e,l),d};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},dn(e,"wheel",i.wheelHandler),ot.isTouch&&dn(e,"touchmove",i.wheelHandler),s},ot=function(){function n(t,i){Jo||n.register(De)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),md(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!tl){this.update=this.refresh=this.kill=nr;return}i=h_(ci(i)||il(i)||i.nodeType?{trigger:i}:i,zc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,d=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,y=s.onSnapComplete,v=s.once,S=s.snap,w=s.pinReparent,C=s.pinSpacer,T=s.containerAnimation,I=s.fastScrollEnd,N=s.preventOverlaps,x=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Xn:sn,R=!h&&h!==0,F=Kn(i.scroller||ft),ne=De.core.getCache(F),U=_o(F),K=("pinType"in i?i.pinType:vs(F,"pinType")||U&&"fixed")==="fixed",W=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],X=R&&i.toggleActions.split(" "),G="markers"in i?i.markers:zc.markers,re=U?0:parseFloat(Ii(F)["border"+x.p2+Ca])||0,L=this,ue=i.onRefreshInit&&function(){return i.onRefreshInit(L)},_e=OR(F,U,x),Ve=FR(F,U),Z=0,he=0,ve=0,Pe=Es(F,x),Ce,be,it,Fe,M,O,B,te,q,P,oe,ae,ce,E,b,k,$,j,se,pe,xe,fe,de,Ge,le,_t,qe,Re,Ae,Le,et,Ee,pt,z,ye,Q,me,we,Je;if(L._startClamp=L._endClamp=!1,L._dir=x,m*=45,L.scroller=F,L.scroll=T?T.time.bind(T):Pe,Fe=Pe(),L.vars=i,r=r||i.animation,"refreshPriority"in i&&(Ax=1,i.refreshPriority===-9999&&(bl=L)),ne.tweenScroll=ne.tweenScroll||{top:x_(F,sn),left:x_(F,Xn)},L.tweenTo=Ce=ne.tweenScroll[x.p],L.scrubDuration=function(ge){pt=il(ge)&&ge,pt?Ee?Ee.duration(ge):Ee=De.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:pt,paused:!0,onComplete:function(){return p&&p(L)}}):(Ee&&Ee.progress(1).kill(),Ee=0)},r&&(r.vars.lazy=!1,r._initted&&!L.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),L.animation=r.pause(),r.scrollTrigger=L,L.scrubDuration(h),Le=0,l||(l=r.vars.id)),S&&((!qs(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in xt.style&&De.set(U?[xt,hi]:F,{scrollBehavior:"auto"}),ht.forEach(function(ge){return Ln(ge)&&ge.target===(U?Et.scrollingElement||hi:F)&&(ge.smooth=!1)}),it=Ln(S.snapTo)?S.snapTo:S.snapTo==="labels"?BR(r):S.snapTo==="labelsDirectional"?zR(r):S.directional!==!1?function(ge,Xe){return hp(S.snapTo)(ge,Tn()-he<500?0:Xe.direction)}:De.utils.snap(S.snapTo),z=S.duration||{min:.1,max:2},z=qs(z)?_l(z.min,z.max):_l(z,z),ye=De.delayedCall(S.delay||pt/2||.1,function(){var ge=Pe(),Xe=Tn()-he<500,We=Ce.tween;if((Xe||Math.abs(L.getVelocity())<10)&&!We&&!of&&Z!==ge){var tt=(ge-O)/E,Wt=r&&!R?r.totalProgress():tt,ut=Xe?0:(Wt-et)/(Tn()-el)*1e3||0,Dt=De.utils.clamp(-tt,1-tt,Yo(ut/2)*ut/.185),tn=tt+(S.inertia===!1?0:Dt),Ot,It,Mt=S,si=Mt.onStart,A=Mt.onInterrupt,V=Mt.onComplete;if(Ot=it(tn,L),il(Ot)||(Ot=tn),It=Math.max(0,Math.round(O+Ot*E)),ge<=B&&ge>=O&&It!==ge){if(We&&!We._initted&&We.data<=Yo(It-ge))return;S.inertia===!1&&(Dt=Ot-tt),Ce(It,{duration:z(Yo(Math.max(Yo(tn-Wt),Yo(Ot-Wt))*.185/ut/.05||0)),ease:S.ease||"power3",data:Yo(It-ge),onInterrupt:function(){return ye.restart(!0)&&A&&$o(L,A)},onComplete:function(){L.update(),Z=Pe(),r&&!R&&(Ee?Ee.resetTo("totalProgress",Ot,r._tTime/r._tDur):r.progress(Ot)),Le=et=r&&!R?r.totalProgress():L.progress,y&&y(L),V&&$o(L,V)}},ge,Dt*E,It-ge-Dt*E),si&&$o(L,si,Ce.tween)}}else L.isActive&&Z!==ge&&ye.restart(!0)}).pause()),l&&(_d[l]=L),d=L.trigger=Kn(d||f!==!0&&f),Je=d&&d._gsap&&d._gsap.stRevert,Je&&(Je=Je(L)),f=f===!0?d:Kn(f),ci(a)&&(a={targets:d,className:a}),f&&(g===!1||g===Di||(g=!g&&f.parentNode&&f.parentNode.style&&Ii(f.parentNode).display==="flex"?!1:Qt),L.pin=f,be=De.core.getCache(f),be.spacer?b=be.pinState:(C&&(C=Kn(C),C&&!C.nodeType&&(C=C.current||C.nativeElement),be.spacerIsNative=!!C,C&&(be.spacerState=Gc(C))),be.spacer=j=C||Et.createElement("div"),j.classList.add("pin-spacer"),l&&j.classList.add("pin-spacer-"+l),be.pinState=b=Gc(f)),i.force3D!==!1&&De.set(f,{force3D:!0}),L.spacer=j=be.spacer,Ae=Ii(f),Ge=Ae[g+x.os2],pe=De.getProperty(f),xe=De.quickSetter(f,x.a,rn),xh(f,j,Ae),$=Gc(f)),G){ae=qs(G)?h_(G,d_):d_,P=Hc("scroller-start",l,F,x,ae,0),oe=Hc("scroller-end",l,F,x,ae,0,P),se=P["offset"+x.op.d2];var mt=Kn(vs(F,"content")||F);te=this.markerStart=Hc("start",l,mt,x,ae,se,0,T),q=this.markerEnd=Hc("end",l,mt,x,ae,se,0,T),T&&(we=De.quickSetter([te,q],x.a,rn)),!K&&!(hr.length&&vs(F,"fixedMarkers")===!0)&&(kR(U?xt:F),De.set([P,oe],{force3D:!0}),_t=De.quickSetter(P,x.a,rn),Re=De.quickSetter(oe,x.a,rn))}if(T){var ke=T.vars.onUpdate,Ne=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){L.update(0,0,1),ke&&ke.apply(T,Ne||[])})}if(L.previous=function(){return ct[ct.indexOf(L)-1]},L.next=function(){return ct[ct.indexOf(L)+1]},L.revert=function(ge,Xe){if(!Xe)return L.kill(!0);var We=ge!==!1||!L.enabled,tt=En;We!==L.isReverted&&(We&&(Q=Math.max(Pe(),L.scroll.rec||0),ve=L.progress,me=r&&r.progress()),te&&[te,q,P,oe].forEach(function(Wt){return Wt.style.display=We?"none":"block"}),We&&(En=L,L.update(We)),f&&(!w||!L.isActive)&&(We?VR(f,j,b):xh(f,j,Ii(f),le)),We||L.update(We),En=tt,L.isReverted=We)},L.refresh=function(ge,Xe,We,tt){if(!((En||!L.enabled)&&!Xe)){if(f&&ge&&Bi){dn(n,"scrollEnd",kx);return}!Gn&&ue&&ue(L),En=L,Ce.tween&&!We&&(Ce.tween.kill(),Ce.tween=0),Ee&&Ee.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(je){return je.vars.immediateRender&&je.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Wt=_e(),ut=Ve(),Dt=T?T.duration():ur(F,x),tn=E<=.01||!E,Ot=0,It=tt||0,Mt=qs(We)?We.end:i.end,si=i.endTrigger||d,A=qs(We)?We.start:i.start||(i.start===0||!d?0:f?"0 0":"0 100%"),V=L.pinnedContainer=i.pinnedContainer&&Kn(i.pinnedContainer,L),ee=d&&Math.max(0,ct.indexOf(L))||0,J=ee,Y,Se,Ie,$e,Oe,Be,Ye,nt,Bt,nn,bt,Un,Tt;for(G&&qs(We)&&(Un=De.getProperty(P,x.p),Tt=De.getProperty(oe,x.p));J-- >0;)Be=ct[J],Be.end||Be.refresh(0,1)||(En=L),Ye=Be.pin,Ye&&(Ye===d||Ye===f||Ye===V)&&!Be.isReverted&&(nn||(nn=[]),nn.unshift(Be),Be.revert(!0,!0)),Be!==ct[J]&&(ee--,J--);for(Ln(A)&&(A=A(L)),A=l_(A,"start",L),O=__(A,d,Wt,x,Pe(),te,P,L,ut,re,K,Dt,T,L._startClamp&&"_startClamp")||(f?-.001:0),Ln(Mt)&&(Mt=Mt(L)),ci(Mt)&&!Mt.indexOf("+=")&&(~Mt.indexOf(" ")?Mt=(ci(A)?A.split(" ")[0]:"")+Mt:(Ot=nu(Mt.substr(2),Wt),Mt=ci(A)?A:(T?De.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,O):O)+Ot,si=d)),Mt=l_(Mt,"end",L),B=Math.max(O,__(Mt||(si?"100% 0":Dt),si,Wt,x,Pe()+Ot,q,oe,L,ut,re,K,Dt,T,L._endClamp&&"_endClamp"))||-.001,Ot=0,J=ee;J--;)Be=ct[J]||{},Ye=Be.pin,Ye&&Be.start-Be._pinPush<=O&&!T&&Be.end>0&&(Y=Be.end-(L._startClamp?Math.max(0,Be.start):Be.start),(Ye===d&&Be.start-Be._pinPush<O||Ye===V)&&isNaN(A)&&(Ot+=Y*(1-Be.progress)),Ye===f&&(It+=Y));if(O+=Ot,B+=Ot,L._startClamp&&(L._startClamp+=Ot),L._endClamp&&!Gn&&(L._endClamp=B||-.001,B=Math.min(B,ur(F,x))),E=B-O||(O-=.01)&&.001,tn&&(ve=De.utils.clamp(0,1,De.utils.normalize(O,B,Q))),L._pinPush=It,te&&Ot&&(Y={},Y[x.a]="+="+Ot,V&&(Y[x.p]="-="+Pe()),De.set([te,q],Y)),f&&!(gd&&L.end>=ur(F,x)))Y=Ii(f),$e=x===sn,Ie=Pe(),fe=parseFloat(pe(x.a))+It,!Dt&&B>1&&(bt=(U?Et.scrollingElement||hi:F).style,bt={style:bt,value:bt["overflow"+x.a.toUpperCase()]},U&&Ii(xt)["overflow"+x.a.toUpperCase()]!=="scroll"&&(bt.style["overflow"+x.a.toUpperCase()]="scroll")),xh(f,j,Y),$=Gc(f),Se=Ir(f,!0),nt=K&&Es(F,$e?Xn:sn)(),g?(le=[g+x.os2,E+It+rn],le.t=j,J=g===Qt?Nu(f,x)+E+It:0,J&&(le.push(x.d,J+rn),j.style.flexBasis!=="auto"&&(j.style.flexBasis=J+rn)),_a(le),V&&ct.forEach(function(je){je.pin===V&&je.vars.pinSpacing!==!1&&(je._subPinOffset=!0)}),K&&Pe(Q)):(J=Nu(f,x),J&&j.style.flexBasis!=="auto"&&(j.style.flexBasis=J+rn)),K&&(Oe={top:Se.top+($e?Ie-O:nt)+rn,left:Se.left+($e?nt:Ie-O)+rn,boxSizing:"border-box",position:"fixed"},Oe[ho]=Oe["max"+Ca]=Math.ceil(Se.width)+rn,Oe[po]=Oe["max"+fp]=Math.ceil(Se.height)+rn,Oe[Di]=Oe[Di+Sl]=Oe[Di+xl]=Oe[Di+Ml]=Oe[Di+yl]="0",Oe[Qt]=Y[Qt],Oe[Qt+Sl]=Y[Qt+Sl],Oe[Qt+xl]=Y[Qt+xl],Oe[Qt+Ml]=Y[Qt+Ml],Oe[Qt+yl]=Y[Qt+yl],k=XR(b,Oe,w),Gn&&Pe(0)),r?(Bt=r._initted,mh(1),r.render(r.duration(),!0,!0),de=pe(x.a)-fe+E+It,qe=Math.abs(E-de)>1,K&&qe&&k.splice(k.length-2,2),r.render(0,!0,!0),Bt||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),mh(0)):de=E,bt&&(bt.value?bt.style["overflow"+x.a.toUpperCase()]=bt.value:bt.style.removeProperty("overflow-"+x.a));else if(d&&Pe()&&!T)for(Se=d.parentNode;Se&&Se!==xt;)Se._pinOffset&&(O-=Se._pinOffset,B-=Se._pinOffset),Se=Se.parentNode;nn&&nn.forEach(function(je){return je.revert(!1,!0)}),L.start=O,L.end=B,Fe=M=Gn?Q:Pe(),!T&&!Gn&&(Fe<Q&&Pe(Q),L.scroll.rec=0),L.revert(!1,!0),he=Tn(),ye&&(Z=-1,ye.restart(!0)),En=0,r&&R&&(r._initted||me)&&r.progress()!==me&&r.progress(me||0,!0).render(r.time(),!0,!0),(tn||ve!==L.progress||T||_||r&&!r._initted)&&(r&&!R&&(r._initted||ve||r.vars.immediateRender!==!1)&&r.totalProgress(T&&O<-.001&&!ve?De.utils.normalize(O,B,0):ve,!0),L.progress=tn||(Fe-O)/E===ve?0:ve),f&&g&&(j._pinOffset=Math.round(L.progress*de)),Ee&&Ee.invalidate(),isNaN(Un)||(Un-=De.getProperty(P,x.p),Tt-=De.getProperty(oe,x.p),Vc(P,x,Un),Vc(te,x,Un-(tt||0)),Vc(oe,x,Tt),Vc(q,x,Tt-(tt||0))),tn&&!Gn&&L.update(),u&&!Gn&&!ce&&(ce=!0,u(L),ce=!1)}},L.getVelocity=function(){return(Pe()-M)/(Tn()-el)*1e3||0},L.endAnimation=function(){Ya(L.callbackAnimation),r&&(Ee?Ee.progress(1):r.paused()?R||Ya(r,L.direction<0,1):Ya(r,r.reversed()))},L.labelToScroll=function(ge){return r&&r.labels&&(O||L.refresh()||O)+r.labels[ge]/r.duration()*E||0},L.getTrailing=function(ge){var Xe=ct.indexOf(L),We=L.direction>0?ct.slice(0,Xe).reverse():ct.slice(Xe+1);return(ci(ge)?We.filter(function(tt){return tt.vars.preventOverlaps===ge}):We).filter(function(tt){return L.direction>0?tt.end<=O:tt.start>=B})},L.update=function(ge,Xe,We){if(!(T&&!We&&!ge)){var tt=Gn===!0?Q:L.scroll(),Wt=ge?0:(tt-O)/E,ut=Wt<0?0:Wt>1?1:Wt||0,Dt=L.progress,tn,Ot,It,Mt,si,A,V,ee;if(Xe&&(M=Fe,Fe=T?Pe():tt,S&&(et=Le,Le=r&&!R?r.totalProgress():ut)),m&&f&&!En&&!Oc&&Bi&&(!ut&&O<tt+(tt-M)/(Tn()-el)*m?ut=1e-4:ut===1&&B>tt+(tt-M)/(Tn()-el)*m&&(ut=.9999)),ut!==Dt&&L.enabled){if(tn=L.isActive=!!ut&&ut<1,Ot=!!Dt&&Dt<1,A=tn!==Ot,si=A||!!ut!=!!Dt,L.direction=ut>Dt?1:-1,L.progress=ut,si&&!En&&(It=ut&&!Dt?0:ut===1?1:Dt===1?2:3,R&&(Mt=!A&&X[It+1]!=="none"&&X[It+1]||X[It],ee=r&&(Mt==="complete"||Mt==="reset"||Mt in r))),N&&(A||ee)&&(ee||h||!r)&&(Ln(N)?N(L):L.getTrailing(N).forEach(function(Ie){return Ie.endAnimation()})),R||(Ee&&!En&&!Oc?(Ee._dp._time-Ee._start!==Ee._time&&Ee.render(Ee._dp._time-Ee._start),Ee.resetTo?Ee.resetTo("totalProgress",ut,r._tTime/r._tDur):(Ee.vars.totalProgress=ut,Ee.invalidate().restart())):r&&r.totalProgress(ut,!!(En&&(he||ge)))),f){if(ge&&g&&(j.style[g+x.os2]=Ge),!K)xe(nl(fe+de*ut));else if(si){if(V=!ge&&ut>Dt&&B+1>tt&&tt+1>=ur(F,x),w)if(!ge&&(tn||V)){var J=Ir(f,!0),Y=tt-O;v_(f,xt,J.top+(x===sn?Y:0)+rn,J.left+(x===sn?0:Y)+rn)}else v_(f,j);_a(tn||V?k:$),qe&&ut<1&&tn||xe(fe+(ut===1&&!V?de:0))}}S&&!Ce.tween&&!En&&!Oc&&ye.restart(!0),a&&(A||v&&ut&&(ut<1||!gh))&&Gl(a.targets).forEach(function(Ie){return Ie.classList[tn||v?"add":"remove"](a.className)}),o&&!R&&!ge&&o(L),si&&!En?(R&&(ee&&(Mt==="complete"?r.pause().totalProgress(1):Mt==="reset"?r.restart(!0).pause():Mt==="restart"?r.restart(!0):r[Mt]()),o&&o(L)),(A||!gh)&&(c&&A&&$o(L,c),W[It]&&$o(L,W[It]),v&&(ut===1?L.kill(!1,1):W[It]=0),A||(It=ut===1?1:3,W[It]&&$o(L,W[It]))),I&&!tn&&Math.abs(L.getVelocity())>(il(I)?I:2500)&&(Ya(L.callbackAnimation),Ee?Ee.progress(1):Ya(r,Mt==="reverse"?1:!ut,1))):R&&o&&!En&&o(L)}if(Re){var Se=T?tt/T.duration()*(T._caScrollDist||0):tt;_t(Se+(P._isFlipped?1:0)),Re(Se)}we&&we(-tt/T.duration()*(T._caScrollDist||0))}},L.enable=function(ge,Xe){L.enabled||(L.enabled=!0,dn(F,"resize",rl),U||dn(F,"scroll",qo),ue&&dn(n,"refreshInit",ue),ge!==!1&&(L.progress=ve=0,Fe=M=Z=Pe()),Xe!==!1&&L.refresh())},L.getTween=function(ge){return ge&&Ce?Ce.tween:Ee},L.setPositions=function(ge,Xe,We,tt){if(T){var Wt=T.scrollTrigger,ut=T.duration(),Dt=Wt.end-Wt.start;ge=Wt.start+Dt*ge/ut,Xe=Wt.start+Dt*Xe/ut}L.refresh(!1,!1,{start:c_(ge,We&&!!L._startClamp),end:c_(Xe,We&&!!L._endClamp)},tt),L.update()},L.adjustPinSpacing=function(ge){if(le&&ge){var Xe=le.indexOf(x.d)+1;le[Xe]=parseFloat(le[Xe])+ge+rn,le[1]=parseFloat(le[1])+ge+rn,_a(le)}},L.disable=function(ge,Xe){if(ge!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,Xe||Ee&&Ee.pause(),Q=0,be&&(be.uncache=1),ue&&hn(n,"refreshInit",ue),ye&&(ye.pause(),Ce.tween&&Ce.tween.kill()&&(Ce.tween=0)),!U)){for(var We=ct.length;We--;)if(ct[We].scroller===F&&ct[We]!==L)return;hn(F,"resize",rl),U||hn(F,"scroll",qo)}},L.kill=function(ge,Xe){L.disable(ge,Xe),Ee&&!Xe&&Ee.kill(),l&&delete _d[l];var We=ct.indexOf(L);We>=0&&ct.splice(We,1),We===Hn&&ru>0&&Hn--,We=0,ct.forEach(function(tt){return tt.scroller===L.scroller&&(We=1)}),We||Gn||(L.scroll.rec=0),r&&(r.scrollTrigger=null,ge&&r.revert({kill:!1}),Xe||r.kill()),te&&[te,q,P,oe].forEach(function(tt){return tt.parentNode&&tt.parentNode.removeChild(tt)}),bl===L&&(bl=0),f&&(be&&(be.uncache=1),We=0,ct.forEach(function(tt){return tt.pin===f&&We++}),We||(be.spacer=0)),i.onKill&&i.onKill(L)},ct.push(L),L.enable(!1,!1),Je&&Je(L),r&&r.add&&!E){var ze=L.update;L.update=function(){L.update=ze,ht.cache++,O||B||L.refresh()},De.delayedCall(.01,L.update),E=.01,O=B=0}else L.refresh();f&&GR()},n.register=function(i){return Jo||(De=i||Dx(),Lx()&&window.document&&n.enable(),Jo=tl),Jo},n.defaults=function(i){if(i)for(var r in i)zc[r]=i[r];return zc},n.disable=function(i,r){tl=0,ct.forEach(function(o){return o[r?"kill":"disable"](i)}),hn(ft,"wheel",qo),hn(Et,"scroll",qo),clearInterval(Nc),hn(Et,"touchcancel",nr),hn(xt,"touchstart",nr),kc(hn,Et,"pointerdown,touchstart,mousedown",u_),kc(hn,Et,"pointerup,touchend,mouseup",f_),Uu.kill(),Fc(hn);for(var s=0;s<ht.length;s+=3)Bc(hn,ht[s],ht[s+1]),Bc(hn,ht[s],ht[s+2])},n.enable=function(){if(ft=window,Et=document,hi=Et.documentElement,xt=Et.body,De){if(Gl=De.utils.toArray,_l=De.utils.clamp,md=De.core.context||nr,mh=De.core.suppressOverwrites||nr,ap=ft.history.scrollRestoration||"auto",vd=ft.pageYOffset||0,De.core.globals("ScrollTrigger",n),xt){tl=1,ga=document.createElement("div"),ga.style.height="100vh",ga.style.position="absolute",Gx(),NR(),Zt.register(De),n.isTouch=Zt.isTouch,ns=Zt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),pd=Zt.isTouch===1,dn(ft,"wheel",qo),op=[ft,Et,hi,xt],De.matchMedia?(n.matchMedia=function(u){var h=De.matchMedia(),d;for(d in u)h.add(d,u[d]);return h},De.addEventListener("matchMediaInit",function(){zx(),dp()}),De.addEventListener("matchMediaRevert",function(){return Bx()}),De.addEventListener("matchMedia",function(){no(0,1),xo("matchMedia")}),De.matchMedia().add("(orientation: portrait)",function(){return vh(),vh})):console.warn("Requires GSAP 3.11.0 or later"),vh(),dn(Et,"scroll",qo);var i=xt.hasAttribute("style"),r=xt.style,s=r.borderTopStyle,o=De.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Ir(xt),sn.m=Math.round(a.top+sn.sc())||0,Xn.m=Math.round(a.left+Xn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(xt.setAttribute("style",""),xt.removeAttribute("style")),Nc=setInterval(p_,250),De.delayedCall(.5,function(){return Oc=0}),dn(Et,"touchcancel",nr),dn(xt,"touchstart",nr),kc(dn,Et,"pointerdown,touchstart,mousedown",u_),kc(dn,Et,"pointerup,touchend,mouseup",f_),dd=De.utils.checkPrefix("transform"),su.push(dd),Jo=Tn(),Uu=De.delayedCall(.2,no).pause(),Qo=[Et,"visibilitychange",function(){var u=ft.innerWidth,h=ft.innerHeight;Et.hidden?(o_=u,a_=h):(o_!==u||a_!==h)&&rl()},Et,"DOMContentLoaded",no,ft,"load",no,ft,"resize",rl],Fc(dn),ct.forEach(function(u){return u.enable(0,1)}),l=0;l<ht.length;l+=3)Bc(hn,ht[l],ht[l+1]),Bc(hn,ht[l],ht[l+2])}else if(Et){var c=function u(){n.enable(),Et.removeEventListener("DOMContentLoaded",u)};Et.addEventListener("DOMContentLoaded",c)}}},n.config=function(i){"limitCallbacks"in i&&(gh=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Nc)||(Nc=r)&&setInterval(p_,r),"ignoreMobileResize"in i&&(pd=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Fc(hn)||Fc(dn,i.autoRefreshEvents||"none"),Cx=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=Kn(i),o=ht.indexOf(s),a=_o(s);~o&&ht.splice(o,a?6:2),r&&(a?hr.unshift(ft,r,xt,r,hi,r):hr.unshift(s,r))},n.clearMatchMedia=function(i){ct.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(ci(i)?Kn(i):i).getBoundingClientRect(),a=o[s?ho:po]*r||0;return s?o.right-a>0&&o.left+a<ft.innerWidth:o.bottom-a>0&&o.top+a<ft.innerHeight},n.positionInViewport=function(i,r,s){ci(i)&&(i=Kn(i));var o=i.getBoundingClientRect(),a=o[s?ho:po],l=r==null?a/2:r in Ou?Ou[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/ft.innerWidth:(o.top+l)/ft.innerHeight},n.killAll=function(i){if(ct.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=vo.killAll||[];vo={},r.forEach(function(s){return s()})}},n}();ot.version="3.15.0";ot.saveStyles=function(n){return n?Gl(n).forEach(function(e){if(e&&e.style){var t=li.indexOf(e);t>=0&&li.splice(t,5),li.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),De.core.getCache(e),md())}}):li};ot.revert=function(n,e){return dp(!n,e)};ot.create=function(n,e){return new ot(n,e)};ot.refresh=function(n){return n?rl(!0):(Jo||ot.register())&&no(!0)};ot.update=function(n){return++ht.cache&&Fr(n===!0?2:0)};ot.clearScrollMemory=Hx;ot.maxScroll=function(n,e){return ur(n,e?Xn:sn)};ot.getScrollFunc=function(n,e){return Es(Kn(n),e?Xn:sn)};ot.getById=function(n){return _d[n]};ot.getAll=function(){return ct.filter(function(n){return n.vars.id!=="ScrollSmoother"})};ot.isScrolling=function(){return!!Bi};ot.snapDirectional=hp;ot.addEventListener=function(n,e){var t=vo[n]||(vo[n]=[]);~t.indexOf(e)||t.push(e)};ot.removeEventListener=function(n,e){var t=vo[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};ot.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],d=[],f=De.delayedCall(r,function(){u(h,d),h=[],d=[]}).pause();return function(g){h.length||f.restart(!0),h.push(g.trigger),d.push(g),s<=h.length&&f.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Ln(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Ln(s)&&(s=s(),dn(ot,"refresh",function(){return s=e.batchMax()})),Gl(n).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,t.push(ot.create(c))}),t};var y_=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},yh=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Zt.isTouch?" pinch-zoom":""):"none",e===hi&&n(xt,t)},Wc={auto:1,scroll:1},YR=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||De.core.getCache(s),a=Tn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==xt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Wc[(l=Ii(s)).overflowY]||Wc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!_o(s)&&(Wc[(l=Ii(s)).overflowY]||Wc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Wx=function(e,t,i,r){return Zt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&YR,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&dn(Et,Zt.eventTypes[0],M_,!1,!0)},onDisable:function(){return hn(Et,Zt.eventTypes[0],M_,!0)}})},qR=/(input|label|select|textarea)/i,S_,M_=function(e){var t=qR.test(e.target.tagName);(t||S_)&&(e._gsapAllow=!0,S_=t)},jR=function(e){qs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Kn(e.target)||hi,u=De.core.globals().ScrollSmoother,h=u&&u.get(),d=ns&&(e.content&&Kn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),f=Es(c,sn),g=Es(c,Xn),_=1,m=(Zt.isTouch&&ft.visualViewport?ft.visualViewport.scale*ft.visualViewport.width:ft.outerWidth)/ft.innerWidth,p=0,y=Ln(r)?function(){return r(a)}:function(){return r||2.8},v,S,w=Wx(c,e.type,!0,s),C=function(){return S=!1},T=nr,I=nr,N=function(){l=ur(c,sn),I=_l(ns?1:0,l),i&&(T=_l(0,ur(c,Xn))),v=mo},x=function(){d._gsap.y=nl(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},R=function(){if(S){requestAnimationFrame(C);var G=nl(a.deltaY/2),re=I(f.v-G);if(d&&re!==f.v+f.offset){f.offset=re-f.v;var L=nl((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",d._gsap.y=L+"px",f.cacheID=ht.cache,Fr()}return!0}f.offset&&x(),S=!0},F,ne,U,K,W=function(){N(),F.isActive()&&F.vars.scrollY>l&&(f()>l?F.progress(1)&&f(l):F.resetTo("scrollY",l))};return d&&De.set(d,{y:"+=0"}),e.ignoreCheck=function(X){return ns&&X.type==="touchmove"&&R()||_>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},e.onPress=function(){S=!1;var X=_;_=nl((ft.visualViewport&&ft.visualViewport.scale||1)/m),F.pause(),X!==_&&yh(c,_>1.01?!0:i?!1:"x"),ne=g(),U=f(),N(),v=mo},e.onRelease=e.onGestureStart=function(X,G){if(f.offset&&x(),!G)K.restart(!0);else{ht.cache++;var re=y(),L,ue;i&&(L=g(),ue=L+re*.05*-X.velocityX/.227,re*=y_(g,L,ue,ur(c,Xn)),F.vars.scrollX=T(ue)),L=f(),ue=L+re*.05*-X.velocityY/.227,re*=y_(f,L,ue,ur(c,sn)),F.vars.scrollY=I(ue),F.invalidate().duration(re).play(.01),(ns&&F.vars.scrollY>=l||L>=l-1)&&De.to({},{onUpdate:W,duration:re})}o&&o(X)},e.onWheel=function(){F._ts&&F.pause(),Tn()-p>1e3&&(v=0,p=Tn())},e.onChange=function(X,G,re,L,ue){if(mo!==v&&N(),G&&i&&g(T(L[2]===G?ne+(X.startX-X.x):g()+G-L[1])),re){f.offset&&x();var _e=ue[2]===re,Ve=_e?U+X.startY-X.y:f()+re-ue[1],Z=I(Ve);_e&&Ve!==Z&&(U+=Z-Ve),f(Z)}(re||G)&&Fr()},e.onEnable=function(){yh(c,i?!1:"x"),ot.addEventListener("refresh",W),dn(ft,"resize",W),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),w.enable()},e.onDisable=function(){yh(c,!0),hn(ft,"resize",W),ot.removeEventListener("refresh",W),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new Zt(e),a.iOS=ns,ns&&!f()&&f(1),ns&&De.ticker.add(nr),K=a._dc,F=De.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Vx(f,f(),function(){return F.pause()})},onUpdate:Fr,onComplete:K.vars.onComplete}),a};ot.sort=function(n){if(Ln(n))return ct.sort(n);var e=ft.pageYOffset||0;return ot.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ft.innerHeight}),ct.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};ot.observe=function(n){return new Zt(n)};ot.normalizeScroll=function(n){if(typeof n>"u")return zn;if(n===!0&&zn)return zn.enable();if(n===!1){zn&&zn.kill(),zn=n;return}var e=n instanceof Zt?n:jR(n);return zn&&zn.target===e.target&&zn.kill(),_o(e.target)&&(zn=e),e};ot.core={_getVelocityProp:hd,_inputObserver:Wx,_scrollers:ht,_proxies:hr,bridge:{ss:function(){Bi||xo("scrollStart"),Bi=Tn()},ref:function(){return En}}};Dx()&&De.registerPlugin(ot);Si.registerPlugin(ot);const qa=Ct(null),b_=Ct(0);function pp(){function n(){if(typeof window>"u")return;const t=new PR({duration:1.2,easing:r=>Math.min(1,1.001-Math.pow(2,-10*r)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,wheelMultiplier:1,touchMultiplier:1.5,infinite:!1});qa.value=t,t.on("scroll",r=>{ot.update(),document.documentElement.scrollHeight>window.innerHeight&&(b_.value=r.scroll/(document.documentElement.scrollHeight-window.innerHeight))});const i=r=>{t.raf(r*1e3)};return Si.ticker.add(i),Si.ticker.lagSmoothing(0),()=>{Si.ticker.remove(i),t.destroy(),qa.value=null}}function e(t,i){qa.value&&qa.value.scrollTo(t,i)}return{lenis:qa,scrollProgress:b_,initLenis:n,scrollTo:e}}const Sh=Ct("DEFAULT"),Mh=Ct(""),bh=Ra({x:-100,y:-100}),Eh=Ct(!1);function As(){function n(i,r=""){Sh.value=i,Mh.value=r,Eh.value=i!=="DEFAULT"}function e(){Sh.value="DEFAULT",Mh.value="",Eh.value=!1}function t(i,r){bh.x=i,bh.y=r}return{cursorState:Sh,cursorLabel:Mh,cursorPosition:bh,isHoveringInteractive:Eh,setCursor:n,resetCursor:e,updatePosition:t}}const Gs=Ct(!0);let jo=null;function Xc(){if(typeof window>"u")return null;if(!jo){const n=window.AudioContext||window.webkitAudioContext;n&&(jo=new n)}return jo&&jo.state==="suspended"&&jo.resume(),jo}function Yr(){function n(){Gs.value=!Gs.value,Gs.value||(Xc(),e())}function e(){if(Gs.value)return;const r=Xc();if(r)try{const s=r.createOscillator(),o=r.createGain();s.type="sine",s.frequency.setValueAtTime(1200,r.currentTime),s.frequency.exponentialRampToValueAtTime(400,r.currentTime+.05),o.gain.setValueAtTime(.12,r.currentTime),o.gain.exponentialRampToValueAtTime(.001,r.currentTime+.05),s.connect(o),o.connect(r.destination),s.start(),s.stop(r.currentTime+.05)}catch{}}function t(){if(Gs.value)return;const r=Xc();if(r)try{const s=r.createOscillator(),o=r.createGain();s.type="triangle",s.frequency.setValueAtTime(320,r.currentTime),s.frequency.exponentialRampToValueAtTime(580,r.currentTime+.04),o.gain.setValueAtTime(.035,r.currentTime),o.gain.exponentialRampToValueAtTime(.001,r.currentTime+.04),s.connect(o),o.connect(r.destination),s.start(),s.stop(r.currentTime+.04)}catch{}}function i(){if(Gs.value)return;const r=Xc();if(r)try{const s=r.createOscillator(),o=r.createGain();s.type="sine",s.frequency.setValueAtTime(200,r.currentTime),s.frequency.exponentialRampToValueAtTime(800,r.currentTime+.15),o.gain.setValueAtTime(.08,r.currentTime),o.gain.exponentialRampToValueAtTime(.001,r.currentTime+.15),s.connect(o),o.connect(r.destination),s.start(),s.stop(r.currentTime+.15)}catch{}}return{isMuted:Gs,toggleMute:n,playClick:e,playHover:t,playSwoosh:i}}/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $c={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KR=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=(n,e)=>({size:t,strokeWidth:i=2,absoluteStrokeWidth:r,color:s,class:o,...a},{attrs:l,slots:c})=>Nh("svg",{...$c,width:t||$c.width,height:t||$c.height,stroke:s||$c.stroke,"stroke-width":r?Number(i)*24/Number(t):i,...l,class:["lucide",`lucide-${KR(n)}`],...a},[...e.map(u=>Nh(...u)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZR=qt("ActivityIcon",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JR=qt("ArrowDownIcon",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QR=qt("ArrowRightIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=qt("ArrowUpRightIcon",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=qt("AwardIcon",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=qt("CircleCheckIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=qt("CpuIcon",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=qt("EyeOffIcon",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=qt("EyeIcon",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=qt("FlameIcon",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=qt("LayersIcon",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=qt("MailIcon",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=qt("MenuIcon",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=qt("PaletteIcon",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=qt("RefreshCwIcon",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=qt("SendIcon",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=qt("ShieldCheckIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=qt("SlidersVerticalIcon",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=qt("SparklesIcon",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=qt("Volume2Icon",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_=qt("VolumeXIcon",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=qt("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=qt("ZapIcon",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),h2={class:"relative z-10 flex items-center gap-2"},Wl=Ei({__name:"UiButton",props:{variant:{default:"primary"},size:{default:"md"},icon:{},href:{}},setup(n){const{setCursor:e,resetCursor:t}=As(),{playClick:i,playHover:r}=Yr(),s=Ct(null),o=Ct({transform:"translate(0px, 0px)"});function a(h){if(!s.value)return;const d=s.value.getBoundingClientRect(),f=d.left+d.width/2,g=d.top+d.height/2,_=(h.clientX-f)*.25,m=(h.clientY-g)*.25;o.value={transform:`translate(${_}px, ${m}px)`}}function l(){e("HOVER"),r()}function c(){t(),o.value={transform:"translate(0px, 0px)"}}function u(){i()}return(h,d)=>(He(),An(qu(n.href?"a":"button"),{ref_key:"buttonRef",ref:s,href:n.href,style:ji(o.value),class:gn(["relative inline-flex items-center justify-center font-display font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer select-none group",[n.size==="sm"?"px-4 py-2 text-xs rounded-full gap-1.5":"",n.size==="md"?"px-6 py-3.5 text-xs md:text-sm rounded-full gap-2.5":"",n.size==="lg"?"px-8 py-4 text-sm md:text-base rounded-full gap-3":"",n.variant==="primary"?"bg-gradient-to-r from-prism-cyan via-prism-electric to-prism-magenta text-black hover:shadow-[0_0_28px_rgba(0,240,255,0.45)]":"",n.variant==="secondary"?"bg-white text-black hover:bg-prism-cyan hover:text-black":"",n.variant==="glass"?"bg-void-800/80 backdrop-blur-md text-white border border-white/10 hover:border-prism-cyan/60 hover:text-prism-cyan shadow-lg":"",n.variant==="outline"?"bg-transparent text-white border border-white/20 hover:border-prism-magenta hover:text-prism-magenta":""]]),onMousemove:a,onMouseenter:l,onMouseleave:c,onClick:u},{default:on(()=>[D("span",h2,[f0(h.$slots,"default")])]),_:3},40,["href","style","class"]))}}),d2={class:"max-w-7xl mx-auto flex items-center justify-between pointer-events-auto"},p2={class:"hidden xl:flex items-center gap-4 px-4 py-2 rounded-full bg-void-900/60 border border-white/5 text-[11px] font-mono text-hud-text"},m2={class:"flex items-center gap-1.5"},g2={class:"flex items-center gap-1.5"},_2={class:"flex items-center gap-1.5"},v2={class:"hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-zinc-300"},x2={class:"flex items-center gap-3"},y2={class:"uppercase tracking-wider"},S2={key:0,class:"md:hidden mt-3 p-6 rounded-3xl bg-void-950/95 border border-white/10 backdrop-blur-2xl pointer-events-auto space-y-5 shadow-2xl"},M2={class:"flex flex-col gap-4 text-base font-display font-bold uppercase tracking-wider text-left text-zinc-200"},b2={class:"pt-2 flex items-center justify-between border-t border-white/10"},E2={class:"text-xs font-mono text-zinc-600"},T2=Ei({__name:"AppHeader",setup(n){const{setCursor:e,resetCursor:t}=As(),{isMuted:i,toggleMute:r,playHover:s,playClick:o}=Yr(),{scrollTo:a}=pp(),l=Ct(!1),c=Ct(!1),u=Ct(""),h=Ct(""),d=Ct("");function f(){const m=new Date;u.value=m.toLocaleTimeString("en-US",{timeZone:"America/New_York",hour:"2-digit",minute:"2-digit",hour12:!1}),h.value=m.toLocaleTimeString("en-GB",{timeZone:"Europe/London",hour:"2-digit",minute:"2-digit",hour12:!1}),d.value=m.toLocaleTimeString("ja-JP",{timeZone:"Asia/Tokyo",hour:"2-digit",minute:"2-digit",hour12:!1})}let g;$r(()=>{f(),g=window.setInterval(f,1e3);const m=()=>{l.value=window.scrollY>40};window.addEventListener("scroll",m)}),So(()=>{clearInterval(g)});function _(m){o(),c.value=!1,a(m)}return(m,p)=>(He(),st("header",{class:gn(["fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 sm:py-5 transition-all duration-300 pointer-events-none",[l.value?"backdrop-blur-md bg-void-950/80 border-b border-white/5 py-3.5":"bg-transparent"]])},[D("div",d2,[D("a",{href:"#hero",class:"flex items-center gap-3 group cursor-pointer",onClick:p[0]||(p[0]=Ri(y=>_("#hero"),["prevent"])),onMouseenter:p[1]||(p[1]=y=>{ie(e)("HOVER"),ie(s)()}),onMouseleave:p[2]||(p[2]=(...y)=>ie(t)&&ie(t)(...y))},[...p[26]||(p[26]=[so('<div class="w-8 h-8 rounded-lg bg-gradient-to-tr from-prism-cyan via-prism-magenta to-prism-gold flex items-center justify-center text-black font-mono font-bold text-xs rotate-45 group-hover:rotate-180 transition-transform duration-500 shadow-[0_0_16px_rgba(0,240,255,0.4)]"><span class="-rotate-45 group-hover:-rotate-180 transition-transform duration-500 font-extrabold text-white">P</span></div><div class="flex flex-col text-left"><span class="font-display font-extrabold text-sm sm:text-base tracking-widest text-white leading-none"> PRISM </span><span class="font-mono text-[9px] text-hud-text tracking-widest uppercase"> Creative Atelier </span></div>',2)])],32),D("div",p2,[D("span",m2,[p[27]||(p[27]=D("span",{class:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"},null,-1)),an(" NYC "+Ze(u.value),1)]),p[30]||(p[30]=D("span",null,"•",-1)),D("span",g2,[p[28]||(p[28]=D("span",{class:"w-1.5 h-1.5 rounded-full bg-prism-cyan"},null,-1)),an(" LON "+Ze(h.value),1)]),p[31]||(p[31]=D("span",null,"•",-1)),D("span",_2,[p[29]||(p[29]=D("span",{class:"w-1.5 h-1.5 rounded-full bg-prism-gold"},null,-1)),an(" TYO "+Ze(d.value),1)])]),D("nav",v2,[D("a",{href:"#works",class:"hover:text-prism-cyan transition-colors",onClick:p[3]||(p[3]=Ri(y=>_("#works"),["prevent"])),onMouseenter:p[4]||(p[4]=y=>{ie(e)("HOVER"),ie(s)()}),onMouseleave:p[5]||(p[5]=(...y)=>ie(t)&&ie(t)(...y))}," Selected Works ",32),D("a",{href:"#manifesto",class:"hover:text-prism-magenta transition-colors",onClick:p[6]||(p[6]=Ri(y=>_("#manifesto"),["prevent"])),onMouseenter:p[7]||(p[7]=y=>{ie(e)("HOVER"),ie(s)()}),onMouseleave:p[8]||(p[8]=(...y)=>ie(t)&&ie(t)(...y))}," Manifesto ",32),D("a",{href:"#shader-lab",class:"hover:text-prism-gold transition-colors flex items-center gap-1.5",onClick:p[9]||(p[9]=Ri(y=>_("#shader-lab"),["prevent"])),onMouseenter:p[10]||(p[10]=y=>{ie(e)("TWEAK"),ie(s)()}),onMouseleave:p[11]||(p[11]=(...y)=>ie(t)&&ie(t)(...y))},[...p[32]||(p[32]=[D("span",{class:"w-2 h-2 rounded-full bg-prism-gold animate-ping"},null,-1),an(" 3D Lab ",-1)])],32),D("a",{href:"#services",class:"hover:text-prism-cyan transition-colors",onClick:p[12]||(p[12]=Ri(y=>_("#services"),["prevent"])),onMouseenter:p[13]||(p[13]=y=>{ie(e)("HOVER"),ie(s)()}),onMouseleave:p[14]||(p[14]=(...y)=>ie(t)&&ie(t)(...y))}," Capabilities ",32)]),D("div",x2,[D("button",{class:gn(["hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-void-900/80 border border-white/10 hover:border-white/20 text-[11px] font-mono text-hud-text hover:text-white transition-all cursor-pointer",{"border-prism-cyan/40 text-prism-cyan":!ie(i)}]),onClick:p[15]||(p[15]=y=>{ie(r)(),ie(o)()}),onMouseenter:p[16]||(p[16]=y=>ie(e)("HOVER")),onMouseleave:p[17]||(p[17]=(...y)=>ie(t)&&ie(t)(...y))},[ie(i)?(He(),An(ie(T_),{key:1,class:"w-3.5 h-3.5 text-zinc-500"})):(He(),An(ie(E_),{key:0,class:"w-3.5 h-3.5 text-prism-cyan animate-pulse"})),D("span",y2,Ze(ie(i)?"Sound Off":"Sound On"),1)],34),Ue(Wl,{variant:"secondary",size:"sm",class:"hidden sm:inline-flex",onClick:p[18]||(p[18]=y=>_("#contact"))},{default:on(()=>[...p[33]||(p[33]=[an(" Let's Talk ",-1)])]),_:1}),D("button",{class:"md:hidden w-10 h-10 rounded-full bg-void-900 border border-white/10 text-white flex items-center justify-center cursor-pointer",onClick:p[19]||(p[19]=y=>{c.value=!c.value,ie(o)()})},[c.value?(He(),An(ie(Yx),{key:1,class:"w-5 h-5"})):(He(),An(ie(s2),{key:0,class:"w-5 h-5"}))])])]),Ue(F0,{"enter-active-class":"transition duration-300 ease-out","enter-from-class":"opacity-0 -translate-y-4","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition duration-200 ease-in","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 -translate-y-4"},{default:on(()=>[c.value?(He(),st("div",S2,[D("nav",M2,[D("a",{href:"#works",class:"py-2 border-b border-white/5",onClick:p[20]||(p[20]=Ri(y=>_("#works"),["prevent"]))},"Selected Works"),D("a",{href:"#manifesto",class:"py-2 border-b border-white/5",onClick:p[21]||(p[21]=Ri(y=>_("#manifesto"),["prevent"]))},"Manifesto"),D("a",{href:"#shader-lab",class:"py-2 border-b border-white/5 text-prism-gold",onClick:p[22]||(p[22]=Ri(y=>_("#shader-lab"),["prevent"]))},"3D Crystal Lab"),D("a",{href:"#services",class:"py-2 border-b border-white/5",onClick:p[23]||(p[23]=Ri(y=>_("#services"),["prevent"]))},"Capabilities"),D("a",{href:"#contact",class:"py-2 text-prism-cyan",onClick:p[24]||(p[24]=Ri(y=>_("#contact"),["prevent"]))},"Initiate Collaboration")]),D("div",b2,[D("button",{class:"flex items-center gap-2 text-xs font-mono text-zinc-400",onClick:p[25]||(p[25]=y=>{ie(r)(),ie(o)()})},[ie(i)?(He(),An(ie(T_),{key:1,class:"w-4 h-4"})):(He(),An(ie(E_),{key:0,class:"w-4 h-4 text-prism-cyan"})),D("span",null,Ze(ie(i)?"Enable Audio":"Mute Audio"),1)]),D("span",E2,"NYC "+Ze(u.value),1)])])):ys("",!0)]),_:1})],2))}}),w2={class:"relative pt-20 pb-12 px-4 sm:px-8 md:px-10 border-t border-white/10 bg-void-950 z-20 select-none overflow-hidden text-left"},A2={class:"relative w-full overflow-hidden py-4 border-b border-white/10 mb-16"},C2={class:"flex gap-8 whitespace-nowrap animate-marquee"},R2={class:"max-w-7xl mx-auto space-y-16"},P2={class:"grid grid-cols-1 md:grid-cols-4 gap-10"},L2={class:"md:col-span-2 space-y-4"},D2={class:"flex items-center gap-4 pt-2"},I2={class:"space-y-3"},U2={class:"space-y-2 text-sm font-display font-medium text-zinc-300"},N2={class:"space-y-3"},O2={class:"space-y-2 text-sm font-display font-medium text-zinc-300"},F2=Ei({__name:"AppFooter",setup(n){const{setCursor:e,resetCursor:t}=As(),{playHover:i}=Yr(),r=["CREATIVE WEBGL ATELIER","CUSTOM GLSL SHADERS","GSAP KINETIC MOTION","AWWWARDS BENCHMARK","SPATIAL 3D EXPERIENCES","120 FPS FLUID PHYSICS","HIGH-TICKET CLIENT ROI"];return(s,o)=>(He(),st("footer",w2,[D("div",A2,[D("div",C2,[(He(!0),st(Nt,null,vi([...r,...r],(a,l)=>(He(),st("div",{key:l,class:"flex items-center gap-8 text-xs sm:text-sm md:text-base font-mono font-bold tracking-widest text-zinc-400 uppercase"},[D("span",null,Ze(a),1),o[18]||(o[18]=D("span",{class:"w-2 h-2 rounded-full bg-prism-cyan"},null,-1))]))),128))])]),D("div",R2,[D("div",P2,[D("div",L2,[o[20]||(o[20]=so('<div class="flex items-center gap-3" data-v-d7ec059c><div class="w-8 h-8 rounded-lg bg-gradient-to-tr from-prism-cyan via-prism-magenta to-prism-gold flex items-center justify-center text-black font-mono font-bold text-xs rotate-45" data-v-d7ec059c><span class="-rotate-45 font-extrabold text-white" data-v-d7ec059c>P</span></div><span class="text-xl font-display font-extrabold tracking-widest text-white" data-v-d7ec059c> PRISM ATELIER </span></div><p class="text-sm font-body text-zinc-400 max-w-md leading-relaxed" data-v-d7ec059c> A multidisciplinary creative tech laboratory engineering bespoke WebGL, GLSL shader choreography, and high-conversion flagship web experiences for global brands. </p>',2)),D("div",D2,[D("a",{href:"mailto:contact@prism-atelier.dev",class:"inline-flex items-center gap-2 text-xs font-mono text-prism-cyan hover:underline",onMouseenter:o[0]||(o[0]=a=>{ie(e)("HOVER"),ie(i)()}),onMouseleave:o[1]||(o[1]=(...a)=>ie(t)&&ie(t)(...a))},[Ue(ie(r2),{class:"w-4 h-4"}),o[19]||(o[19]=D("span",null,"contact@prism-atelier.dev",-1))],32)])]),D("div",I2,[o[25]||(o[25]=D("p",{class:"text-xs font-mono uppercase text-hud-text tracking-widest"}," Freelance & Direct ",-1)),D("ul",U2,[D("li",null,[D("a",{href:"#",class:"hover:text-prism-cyan transition-colors flex items-center gap-1.5",onMouseenter:o[2]||(o[2]=a=>ie(e)("HOVER")),onMouseleave:o[3]||(o[3]=(...a)=>ie(t)&&ie(t)(...a))},[o[21]||(o[21]=D("span",null,"Upwork Pro Profile",-1)),Ue(ie(Er),{class:"w-3.5 h-3.5 text-hud-text"})],32)]),D("li",null,[D("a",{href:"#",class:"hover:text-prism-cyan transition-colors flex items-center gap-1.5",onMouseenter:o[4]||(o[4]=a=>ie(e)("HOVER")),onMouseleave:o[5]||(o[5]=(...a)=>ie(t)&&ie(t)(...a))},[o[22]||(o[22]=D("span",null,"Fiverr Pro Top Rated",-1)),Ue(ie(Er),{class:"w-3.5 h-3.5 text-hud-text"})],32)]),D("li",null,[D("a",{href:"#",class:"hover:text-prism-cyan transition-colors flex items-center gap-1.5",onMouseenter:o[6]||(o[6]=a=>ie(e)("HOVER")),onMouseleave:o[7]||(o[7]=(...a)=>ie(t)&&ie(t)(...a))},[o[23]||(o[23]=D("span",null,"Awwwards Directory",-1)),Ue(ie(Er),{class:"w-3.5 h-3.5 text-hud-text"})],32)]),D("li",null,[D("a",{href:"#",class:"hover:text-prism-cyan transition-colors flex items-center gap-1.5",onMouseenter:o[8]||(o[8]=a=>ie(e)("HOVER")),onMouseleave:o[9]||(o[9]=(...a)=>ie(t)&&ie(t)(...a))},[o[24]||(o[24]=D("span",null,"Telegram Direct",-1)),Ue(ie(Er),{class:"w-3.5 h-3.5 text-hud-text"})],32)])])]),D("div",N2,[o[30]||(o[30]=D("p",{class:"text-xs font-mono uppercase text-hud-text tracking-widest"}," Network & Code ",-1)),D("ul",O2,[D("li",null,[D("a",{href:"#",class:"hover:text-prism-magenta transition-colors flex items-center gap-1.5",onMouseenter:o[10]||(o[10]=a=>ie(e)("HOVER")),onMouseleave:o[11]||(o[11]=(...a)=>ie(t)&&ie(t)(...a))},[o[26]||(o[26]=D("span",null,"GitHub Repository",-1)),Ue(ie(Er),{class:"w-3.5 h-3.5 text-hud-text"})],32)]),D("li",null,[D("a",{href:"#",class:"hover:text-prism-magenta transition-colors flex items-center gap-1.5",onMouseenter:o[12]||(o[12]=a=>ie(e)("HOVER")),onMouseleave:o[13]||(o[13]=(...a)=>ie(t)&&ie(t)(...a))},[o[27]||(o[27]=D("span",null,"Twitter / X (@prism_dev)",-1)),Ue(ie(Er),{class:"w-3.5 h-3.5 text-hud-text"})],32)]),D("li",null,[D("a",{href:"#",class:"hover:text-prism-magenta transition-colors flex items-center gap-1.5",onMouseenter:o[14]||(o[14]=a=>ie(e)("HOVER")),onMouseleave:o[15]||(o[15]=(...a)=>ie(t)&&ie(t)(...a))},[o[28]||(o[28]=D("span",null,"LinkedIn Atelier",-1)),Ue(ie(Er),{class:"w-3.5 h-3.5 text-hud-text"})],32)]),D("li",null,[D("a",{href:"#",class:"hover:text-prism-magenta transition-colors flex items-center gap-1.5",onMouseenter:o[16]||(o[16]=a=>ie(e)("HOVER")),onMouseleave:o[17]||(o[17]=(...a)=>ie(t)&&ie(t)(...a))},[o[29]||(o[29]=D("span",null,"CodePen Creative Lab",-1)),Ue(ie(Er),{class:"w-3.5 h-3.5 text-hud-text"})],32)])])])]),o[31]||(o[31]=D("div",{class:"pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-hud-text"},[D("div",null," (C) 2026 PRISM CREATIVE ATELIER. ALL RIGHTS RESERVED. "),D("div",{class:"flex items-center gap-4"},[D("span",null,"DESIGNED FOR MAXIMUM WOW"),D("span",null,"-"),D("span",{class:"text-prism-cyan"},"VUE 3 + THREE.JS + GSAP")])],-1))])]))}}),k2=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},B2=k2(F2,[["__scopeId","data-v-d7ec059c"]]),z2={key:0,class:"fixed inset-0 pointer-events-none z-[9999] hidden md:block overflow-hidden"},H2={key:0,class:"animate-fade-in text-center px-2"},G2=Ei({__name:"CustomCursor",setup(n){const{cursorState:e,cursorLabel:t}=As(),i=Ct(-100),r=Ct(-100),s=Ct(-100),o=Ct(-100),a=Ct(!1);let l;function c(h){i.value=h.clientX,r.value=h.clientY,a.value||(a.value=!0)}function u(){s.value+=(i.value-s.value)*.18,o.value+=(r.value-o.value)*.18,l=requestAnimationFrame(u)}return $r(()=>{window.matchMedia("(pointer: fine)").matches&&(window.addEventListener("mousemove",c),l=requestAnimationFrame(u))}),So(()=>{window.removeEventListener("mousemove",c),cancelAnimationFrame(l)}),(h,d)=>a.value?(He(),st("div",z2,[D("div",{class:gn(["fixed top-0 left-0 w-2.5 h-2.5 -ml-1.25 -mt-1.25 rounded-full bg-prism-cyan transition-transform duration-75 ease-out shadow-[0_0_12px_#00F0FF]",{"opacity-0":ie(e)==="VIEW_CASE"||ie(e)==="DRAG"}]),style:ji({transform:`translate3d(${i.value}px, ${r.value}px, 0)`})},null,6),D("div",{class:gn(["fixed top-0 left-0 rounded-full flex items-center justify-center font-display font-bold tracking-widest text-[10px] text-black uppercase transition-all duration-300 ease-out backdrop-blur-sm -translate-x-1/2 -translate-y-1/2 select-none",[ie(e)==="DEFAULT"?"w-9 h-9 border border-white/25 bg-transparent":"",ie(e)==="HOVER"?"w-14 h-14 bg-prism-cyan/20 border border-prism-cyan scale-110 shadow-[0_0_24px_rgba(0,240,255,0.4)]":"",ie(e)==="VIEW_CASE"?"w-24 h-24 bg-gradient-to-tr from-prism-cyan via-white to-prism-magenta text-black shadow-[0_0_32px_rgba(255,255,255,0.6)] scale-100":"",ie(e)==="DRAG"?"w-20 h-20 bg-prism-magenta text-white shadow-[0_0_28px_#FF2E93]":"",ie(e)==="TWEAK"?"w-20 h-20 bg-prism-gold text-black shadow-[0_0_28px_#FFD166]":""]]),style:ji({transform:`translate3d(${s.value}px, ${o.value}px, 0)`})},[ie(t)?(He(),st("span",H2,Ze(ie(t)),1)):ys("",!0)],6)])):ys("",!0)}}),dr=Ei({__name:"UiBadge",props:{variant:{default:"glass"},dot:{type:Boolean,default:!1}},setup(n){return(e,t)=>(He(),st("span",{class:gn(["inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono tracking-widest uppercase rounded-full border backdrop-blur-md transition-all duration-300",[n.variant==="cyan"?"bg-prism-cyan/10 border-prism-cyan/30 text-prism-cyan":"",n.variant==="magenta"?"bg-prism-magenta/10 border-prism-magenta/30 text-prism-magenta":"",n.variant==="gold"?"bg-prism-gold/10 border-prism-gold/30 text-prism-gold":"",n.variant==="glass"?"bg-white/5 border-white/10 text-hud-text hover:text-white hover:border-white/20":""]])},[n.dot?(He(),st("span",{key:0,class:gn(["w-1.5 h-1.5 rounded-full animate-pulse",[n.variant==="cyan"?"bg-prism-cyan shadow-[0_0_8px_#00F0FF]":"",n.variant==="magenta"?"bg-prism-magenta shadow-[0_0_8px_#FF2E93]":"",n.variant==="gold"?"bg-prism-gold shadow-[0_0_8px_#FFD166]":"",n.variant==="glass"?"bg-white shadow-[0_0_6px_#fff]":""]])},null,2)):ys("",!0),f0(e.$slots,"default")],2))}}),V2={class:"relative h-60 md:h-80 w-full overflow-hidden -mt-14"},W2=["src","alt"],X2={class:"absolute bottom-6 left-6 md:left-10 right-6 flex flex-wrap items-end justify-between gap-4"},$2={class:"flex items-center gap-3 mb-2"},Y2={class:"text-xs font-mono text-hud-text"},q2={class:"text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white"},j2={class:"text-right hidden sm:block"},K2={class:"text-xl font-mono font-bold text-prism-cyan"},Z2={class:"p-6 md:p-10 space-y-8"},J2={class:"text-base md:text-lg text-zinc-300 font-body leading-relaxed"},Q2={class:"grid grid-cols-1 sm:grid-cols-3 gap-4"},eP={class:"text-xs font-mono uppercase text-hud-text tracking-wider"},tP={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},nP={class:"p-6 rounded-2xl bg-void-950/60 border border-white/5 space-y-3"},iP={class:"flex items-center gap-2 text-prism-magenta font-mono text-xs uppercase tracking-wider"},rP={class:"text-sm font-body text-zinc-300 leading-relaxed"},sP={class:"p-6 rounded-2xl bg-void-950/60 border border-white/5 space-y-3"},oP={class:"flex items-center gap-2 text-prism-cyan font-mono text-xs uppercase tracking-wider"},aP={class:"text-sm font-body text-zinc-300 leading-relaxed"},lP={key:0,class:"p-5 rounded-2xl bg-void-950/50 border border-white/5"},cP={class:"flex items-center gap-2 mb-3 text-prism-gold font-mono text-xs uppercase tracking-wider"},uP={class:"flex flex-wrap gap-2"},fP={class:"flex flex-wrap gap-2"},hP={class:"pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4"},dP={class:"text-xs font-mono text-hud-text"},pP={class:"text-white"},mP=Ei({__name:"CaseModal",props:{project:{},isOpen:{type:Boolean}},emits:["close"],setup(n,{emit:e}){const t=n,i=e,{playClick:r,playSwoosh:s}=Yr();function o(){r(),i("close")}function a(l){l.key==="Escape"&&t.isOpen&&o()}return ll(()=>t.isOpen,l=>{l?(s(),document.body.style.overflow="hidden"):document.body.style.overflow=""}),$r(()=>{window.addEventListener("keydown",a)}),So(()=>{window.removeEventListener("keydown",a),document.body.style.overflow=""}),(l,c)=>(He(),An(F0,{"enter-active-class":"transition duration-300 ease-out","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"transition duration-200 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:on(()=>[n.isOpen&&n.project?(He(),st("div",{key:0,"data-lenis-prevent":"",class:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-void-950/90 backdrop-blur-2xl overflow-y-auto",onClick:Ri(o,["self"])},[D("div",{"data-lenis-prevent":"",class:"relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-void-900 border border-white/10 rounded-3xl shadow-2xl shadow-black/90 my-auto text-left",style:ji({borderColor:`${n.project.accentColor}33`})},[D("div",{class:"sticky top-0 left-0 right-0 h-1 bg-gradient-to-r z-30",style:ji({backgroundImage:`linear-gradient(to right, ${n.project.accentColor}, #FF2E93, #00F0FF)`})},null,4),D("button",{class:"sticky top-6 right-6 float-right z-30 w-10 h-10 rounded-full bg-void-950/90 border border-white/20 hover:border-white/40 text-white flex items-center justify-center transition-all hover:scale-110 cursor-pointer shadow-lg ml-auto mr-6 mt-4",onClick:o},[Ue(ie(Yx),{class:"w-5 h-5"})]),D("div",V2,[D("img",{src:n.project.thumbnail,alt:n.project.title,class:"w-full h-full object-cover filter brightness-90"},null,8,W2),c[1]||(c[1]=D("div",{class:"absolute inset-0 bg-gradient-to-t from-void-900 via-void-900/40 to-transparent"},null,-1)),D("div",X2,[D("div",null,[D("div",$2,[Ue(dr,{variant:"cyan",dot:""},{default:on(()=>[an(Ze(n.project.category),1)]),_:1}),D("span",Y2,Ze(n.project.year)+" // "+Ze(n.project.client),1)]),D("h2",q2,Ze(n.project.title),1)]),D("div",j2,[c[0]||(c[0]=D("span",{class:"text-xs font-mono text-hud-text"},"CASE ID",-1)),D("p",K2,"// "+Ze(n.project.number),1)])])]),D("div",Z2,[D("div",null,[D("p",J2,Ze(n.project.description),1)]),D("div",Q2,[(He(!0),st(Nt,null,vi(n.project.metrics,(u,h)=>(He(),st("div",{key:h,class:"p-5 rounded-2xl bg-void-950/80 border border-white/5 flex flex-col justify-between"},[D("span",eP,Ze(u.label),1),D("p",{class:"text-2xl sm:text-3xl font-display font-bold text-white mt-2",style:ji({color:n.project.accentColor})},Ze(u.value),5)]))),128))]),D("div",tP,[D("div",nP,[D("div",iP,[Ue(ie(Xx),{class:"w-4 h-4"}),c[2]||(c[2]=D("span",null,"The Engineering Challenge",-1))]),D("p",rP,Ze(n.project.challenge),1)]),D("div",sP,[D("div",oP,[Ue(ie(gp),{class:"w-4 h-4"}),c[3]||(c[3]=D("span",null,"Architectural Solution",-1))]),D("p",aP,Ze(n.project.solution),1)])]),n.project.awards&&n.project.awards.length>0?(He(),st("div",lP,[D("div",cP,[Ue(ie(mp),{class:"w-4 h-4"}),c[4]||(c[4]=D("span",null,"Accolades & Industry Recognition",-1))]),D("div",uP,[(He(!0),st(Nt,null,vi(n.project.awards,u=>(He(),An(dr,{key:u,variant:"gold"},{default:on(()=>[an(" 🏆 "+Ze(u),1)]),_:2},1024))),128))])])):ys("",!0),D("div",null,[c[5]||(c[5]=D("span",{class:"block text-xs font-mono text-hud-text uppercase tracking-wider mb-3"},"Technologies Deployed",-1)),D("div",fP,[(He(!0),st(Nt,null,vi(n.project.techStack,u=>(He(),An(dr,{key:u,variant:"glass"},{default:on(()=>[an(Ze(u),1)]),_:2},1024))),128))])]),D("div",hP,[D("div",dP,[c[6]||(c[6]=an(" ROLE: ",-1)),D("span",pP,Ze(n.project.role),1)]),Ue(Wl,{variant:"primary",size:"md",onClick:o},{default:on(()=>[...c[7]||(c[7]=[an(" Close Case Study ",-1)])]),_:1})])])],4)])):ys("",!0)]),_:1}))}}),gP={id:"hero",class:"relative h-screen w-full flex flex-col justify-between pt-28 pb-8 px-4 sm:px-8 select-none overflow-hidden"},_P={class:"flex items-center gap-5"},vP=Ei({__name:"HeroSection",setup(n){const{playClick:e}=Yr(),{scrollTo:t}=pp(),i=Ct(null);$r(()=>{Si.timeline({defaults:{ease:"power4.out",duration:1.2}}).from(".hero-line-1, .hero-line-2, .hero-line-3",{y:70,opacity:0,rotateX:-15,stagger:.1,delay:.1}).from(i.value,{opacity:0,y:25,duration:.8},"-=0.5")});function r(){e(),t("#works")}return(s,o)=>(He(),st("section",gP,[o[3]||(o[3]=so('<div class="w-full flex items-center justify-between z-10 pointer-events-none opacity-0"><span>TOP SPACING</span></div><div class="backdrop-layer w-full text-center my-auto pointer-events-none flex flex-col justify-center items-center select-none space-y-1 sm:space-y-2"><div class="w-full overflow-hidden flex justify-center"><h1 class="hero-line-1 whitespace-nowrap text-[6.2vw] lg:text-[6.8vw] font-condensed font-black uppercase tracking-tight leading-none text-[#F4F4F0] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"> PRISM CREATIVE STUDIO </h1></div><div class="w-full overflow-hidden flex justify-center"><h2 class="hero-line-2 whitespace-nowrap text-[6.8vw] lg:text-[7.4vw] font-condensed font-black uppercase tracking-tight leading-none text-[#E8E8E3] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"> DIGITAL EXPERIENCE </h2></div><div class="w-full overflow-hidden flex justify-center"><p class="hero-line-3 whitespace-nowrap text-[6.0vw] lg:text-[6.6vw] font-condensed font-black uppercase tracking-tight leading-none text-[#E8E8E3] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"> &amp; WEBGL ATELIER </p></div></div>',2)),D("div",{ref_key:"bottomHudRef",ref:i,class:"max-w-7xl mx-auto w-full z-30 flex flex-col sm:flex-row items-end sm:items-center justify-between gap-4 pointer-events-auto"},[o[2]||(o[2]=so('<div class="flex items-center gap-4 sm:gap-5 p-3 sm:p-4 rounded-2xl bg-void-950/85 border border-white/15 backdrop-blur-2xl shadow-2xl"><div class="w-10 sm:w-11 h-10 sm:h-11 rounded-xl bg-void-900 border border-white/15 overflow-hidden flex items-center justify-center relative flex-shrink-0 shadow-lg"><div class="w-5 h-5 rounded bg-gradient-to-tr from-prism-cyan via-prism-magenta to-prism-gold rotate-45 animate-spin-slow opacity-95 shadow-[0_0_14px_#00F0FF]"></div></div><div class="text-left space-y-0.5"><div class="flex items-center gap-2"><span class="text-xs font-condensed font-bold tracking-wider text-white uppercase">WORKS</span><span class="text-[10px] font-mono text-prism-cyan font-bold">70%</span></div><p class="text-[10px] sm:text-[11px] font-mono text-zinc-400"> Coordinates: 40.7128 N, 74.0060 W | New York </p></div><div class="hidden md:block h-8 w-px bg-white/15 mx-1"></div><div class="hidden md:block text-left space-y-0.5"><span class="text-xs font-condensed font-bold tracking-wider text-white uppercase">SERVICES</span><p class="text-[11px] font-mono text-zinc-400"> Coordinates: 51.5074 N, 0.1278 W | London </p></div></div>',1)),D("div",_P,[Ue(Wl,{variant:"primary",size:"md",onClick:r},{default:on(()=>[o[0]||(o[0]=D("span",null,"Explore Projects",-1)),Ue(ie(JR),{class:"w-3.5 h-3.5 animate-bounce"})]),_:1}),o[1]||(o[1]=D("span",{class:"hidden lg:inline text-xs font-mono text-hud-text tracking-widest uppercase"}," Paris | LA ",-1))])],512)]))}}),xP={class:"flex items-center gap-3 mb-8"},yP={class:"text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight text-white flex flex-wrap gap-x-3 gap-y-2"},SP={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"},MP={class:"w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"},bP={class:"text-3xl sm:text-4xl lg:text-[2.2rem] xl:text-4xl font-condensed font-black text-white tracking-normal mb-1.5 whitespace-nowrap"},EP={class:"text-[11px] font-mono uppercase tracking-wider text-hud-text"},TP="We architect digital masterworks at the exact intersection of high-octane WebGL 3D graphics, fluid physics choreography, and conversion psychology. In a web flooded with generic templates, PRISM engineers bespoke interactive worlds that command premium valuations and captivate global audiences.",wP=Ei({__name:"ManifestoSection",setup(n){Si.registerPlugin(ot);const e=Ct(null),t=Ct(null);$r(()=>{if(!t.value)return;const r=t.value.querySelectorAll(".manifesto-word");Si.fromTo(r,{opacity:.15,y:15},{opacity:1,y:0,stagger:.05,ease:"none",scrollTrigger:{trigger:e.value,start:"top 75%",end:"bottom 60%",scrub:.8}})});const i=[{value:"120 FPS",label:"Ultra-Fluid Frame Rate",icon:f2,color:"text-prism-cyan"},{value:"14+",label:"Awwwards & FWA Honors",icon:mp,color:"text-prism-gold"},{value:"$50M+",label:"Client Value Generated",icon:n2,color:"text-prism-magenta"},{value:"100%",label:"Bespoke GLSL Codebase",icon:$x,color:"text-emerald-400"}];return(r,s)=>(He(),st("section",{id:"manifesto",ref_key:"sectionRef",ref:e,class:"relative py-28 px-4 sm:px-8 md:px-10 max-w-7xl mx-auto z-20 select-none"},[D("div",xP,[Ue(dr,{variant:"magenta",dot:""},{default:on(()=>[...s[0]||(s[0]=[an(" Studio Manifesto // 01 ",-1)])]),_:1}),s[1]||(s[1]=D("span",{class:"text-xs font-mono text-hud-text uppercase tracking-widest"}," Why Creative Development Dominates ",-1))]),D("div",{ref_key:"manifestoWords",ref:t,class:"mb-16"},[D("p",yP,[(He(!0),st(Nt,null,vi(TP.split(" "),(o,a)=>(He(),st("span",{key:a,class:"manifesto-word inline-block transition-colors duration-200"},Ze(o),1))),128))])],512),D("div",SP,[(He(),st(Nt,null,vi(i,(o,a)=>D("div",{key:a,class:"p-6 sm:p-7 rounded-3xl bg-void-950/80 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-300 group overflow-hidden"},[D("div",MP,[(He(),An(qu(o.icon),{class:gn(["w-5 h-5",o.color])},null,8,["class"]))]),D("p",bP,Ze(o.value),1),D("p",EP,Ze(o.label),1)])),64))])],512))}}),AP=[{id:"neo-vortex",number:"01",title:"NEO VORTEX",subtitle:"Autonomous AI Neural Compute Platform",client:"Vortex Quantum Labs (San Francisco)",year:"2026",role:"Creative WebGL Engineering & Art Direction",category:"WEBGL & 3D",tags:["THREE.JS","CUSTOM GLSL","PARTICLE PHYSICS","GSAP SCROLL"],awards:["Awwwards Site of the Day","FWA of the Day","CSSDA Best UI/UX"],metrics:[{label:"Conversion Lift",value:"+142%"},{label:"Avg Session Time",value:"3m 48s"},{label:"Series-A Funding Raised",value:"$24M"}],thumbnail:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",accentColor:"#00F0FF",description:"A groundbreaking WebGL interactive experience representing quantum neural compute matrices through high-density particle fluid dynamics and optical chromatic dispersion.",challenge:"Deliver 120 FPS high-fidelity 3D fluid simulations across desktop and mobile without stalling main-thread UI interactions.",solution:"Engineered an instanced particle computation engine utilizing GPGPU curl noise textures, GPU instanced meshes, and adaptive dynamic resolution scaling.",techStack:["Vue 3","Three.js GPGPU","GLSL Shaders","GSAP ScrollTrigger","Lenis Smooth Scroll","TailwindCSS"]},{id:"aetheria-xr",number:"02",title:"AETHERIA XR",subtitle:"Spatial Computing & Mixed Reality OS",client:"Aetheria Systems (Zurich / Tokyo)",year:"2025",role:"Lead Spatial Frontend Architect",category:"SPATIAL XR",tags:["WEBXR","THREE.JS","PHYSICS ENGINE","SHADERS"],awards:["Awwwards Developer Award","FWA of the Month"],metrics:[{label:"Frame Rate",value:"120 FPS"},{label:"App Store Waitlist",value:"180K+"},{label:"Global Press Features",value:"35+"}],thumbnail:"https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop",accentColor:"#FF2E93",description:"An avant-garde digital ecosystem showcasing next-generation holographic interface primitives, spatial depth audio, and interactive refractive glass geometry.",challenge:"Translating complex spatial UI navigation paradigms into intuitive browser gestures with instantaneous feedback.",solution:"Designed custom raycasting controllers paired with inertia-weighted spring kinematics and optical Fresnel shader material pipelines.",techStack:["Vue 3 Composition API","Three.js","Web Audio API","Custom Postprocessing","TypeScript"]},{id:"lumina-void",number:"03",title:"LUMINA VOID",subtitle:"Haute Horlogerie & Digital Timepiece Exhibition",client:"Atelier Lumina (Geneva)",year:"2025",role:"Creative WebGL & Motion Developer",category:"LUXURY MOTION",tags:["RAYMARCHING","PBR MATERIALS","KINETIC MOTION","LENIS"],awards:["CSSDA Special Kudos","Awwwards Mobile of the Week"],metrics:[{label:"Pre-Order Volume",value:"$8.2M"},{label:"Bounce Rate Reduction",value:"-38%"},{label:"Lighthouse Performance",value:"98/100"}],thumbnail:"https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop",accentColor:"#FFD166",description:"A digital high-luxury gallery unveiling a limited-edition tourbillon mechanical watch through interactive 3D exploded assemblies and micro-precision animations.",challenge:"Achieving photorealistic metallic reflections, diamond caustics, and sapphire crystal transparency in real-time WebGL.",solution:"Implemented HDRI environment probe reflections, custom transmission roughness shaders, and cinematic GSAP camera path interpolations.",techStack:["Vue 3","Three.js PBR","GLSL Transmission","GSAP Timeline","Lenis"]},{id:"kroma-ai",number:"04",title:"KROMA AI",subtitle:"Generative Diffusion Intelligence Suite",client:"Kroma Labs (New York)",year:"2026",role:"Interactive Developer & System Designer",category:"AI PRODUCT",tags:["GENERATIVE CANVAS","WEB WORKERS","BENTO UI","GLSL NOISE"],awards:["Awwwards Honorable Mention","FWA of the Day"],metrics:[{label:"Monthly Active Users",value:"1.2M+"},{label:"Design System Adoption",value:"100%"},{label:"Customer Retention",value:"91%"}],thumbnail:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",accentColor:"#4D6BFE",description:"An ultra-refined SaaS interface combining generative noise shaders, interactive bento grid layouts, and real-time neural canvas rendering.",challenge:"Rendering heavy multi-layered canvas previews without blocking standard interactive Vue state mutations.",solution:"Delegated background image synthesis to Web Workers while maintaining a lightweight GLSL post-processing pass on the main thread.",techStack:["Vue 3","TypeScript","Web Workers","TailwindCSS","GSAP Flip"]},{id:"chrono-pulse",number:"05",title:"CHRONO PULSE",subtitle:"Hyper-Performance Electric Hypercar Showcase",client:"Chrono Motors (Milan / Munich)",year:"2025",role:"Lead Creative Developer",category:"IMMERSIVE BRAND",tags:["3D CONFIGURATOR","THREE.JS","AUDIO SYNTH","GSAP SCROLL"],awards:["Awwwards Site of the Month Nominee","CSSDA Site of the Day"],metrics:[{label:"VIP Test Drive Bookings",value:"4,200+"},{label:"Global Reach",value:"3.8M Views"},{label:"Engagement Rate",value:"14.6%"}],thumbnail:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",accentColor:"#00F0FF",description:"A high-octane 3D car configurator featuring real-time carbon fiber shaders, aerodynamic particle wind tunnels, and dynamic engine acoustic synthesis.",challenge:"Smoothly streaming high-poly GLTF CAD models without long initial loader pauses.",solution:"Implemented Draco mesh compression, progressive LOD level-of-detail streaming, and Web Audio API Doppler effect synthesis.",techStack:["Vue 3","Three.js Draco","Custom GLSL Shaders","Web Audio API","GSAP"]}],CP={class:"max-w-7xl mx-auto flex flex-wrap items-end justify-between gap-6 mb-12"},RP={class:"flex items-center gap-3 mb-3"},PP=["onClick"],LP={class:"relative h-64 sm:h-72 md:h-80 w-full overflow-hidden"},DP=["src","alt"],IP={class:"absolute top-4 sm:top-5 left-4 sm:left-5 right-4 sm:right-5 flex items-center justify-between z-10"},UP={class:"w-9 h-9 rounded-full bg-void-900/80 border border-white/10 backdrop-blur-md flex items-center justify-center text-xs font-mono font-bold text-white group-hover:bg-prism-cyan group-hover:text-black transition-colors"},NP={key:0,class:"absolute bottom-4 left-4 sm:left-5 z-10 flex items-center gap-1.5 text-[11px] font-mono text-prism-gold bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-prism-gold/30"},OP={class:"p-6 sm:p-8 space-y-4 text-left"},FP={class:"flex items-baseline justify-between gap-2"},kP={class:"text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight group-hover:text-prism-cyan transition-colors"},BP={class:"text-xs font-mono font-bold text-hud-text"},zP={class:"text-sm font-body text-zinc-300 line-clamp-2"},HP={class:"grid grid-cols-2 gap-3 pt-4 border-t border-white/5"},GP={class:"block text-[10px] font-mono uppercase text-hud-text"},VP={class:"flex flex-wrap gap-1.5 pt-2"},WP=Ei({__name:"ShowcaseSection",emits:["select-project"],setup(n,{emit:e}){Si.registerPlugin(ot);const t=e,{setCursor:i,resetCursor:r}=As(),{playHover:s,playClick:o}=Yr(),a=Ct(null),l=Ct(null);let c=null;function u(){if(c&&(c.kill(),c=null),window.innerWidth>=768&&l.value&&a.value){const d=l.value.scrollWidth-window.innerWidth+120;c=ot.create({trigger:a.value,start:"top top",end:()=>`+=${d}`,pin:!0,scrub:1,animation:Si.to(l.value,{x:()=>-d,ease:"none"}),invalidateOnRefresh:!0})}else l.value&&Si.set(l.value,{clearProps:"x,transform"})}$r(()=>{u(),window.addEventListener("resize",u)}),So(()=>{c&&c.kill(),window.removeEventListener("resize",u)});function h(d){o(),t("select-project",d)}return(d,f)=>(He(),st("section",{id:"works",ref_key:"sectionRef",ref:a,class:"relative min-h-screen py-24 px-4 md:px-10 z-20 select-none overflow-hidden"},[D("div",CP,[D("div",null,[D("div",RP,[Ue(dr,{variant:"cyan",dot:""},{default:on(()=>[...f[2]||(f[2]=[an(" Selected Works // 02 ",-1)])]),_:1}),f[3]||(f[3]=D("span",{class:"text-xs font-mono text-hud-text uppercase tracking-wider"}," Curated WebGL Case Studies ",-1))]),f[4]||(f[4]=D("h2",{class:"text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight"}," ARCHITECTED TO WIN. ",-1))]),f[5]||(f[5]=D("div",{class:"hidden md:flex items-center gap-4 text-xs font-mono text-hud-text"},[D("span",{class:"w-2 h-2 rounded-full bg-prism-cyan animate-ping"}),D("span",null,"SCROLL HORIZONTALLY TO EXPLORE CASES")],-1))]),D("div",{ref_key:"trackRef",ref:l,class:"flex flex-col md:flex-row gap-8 md:gap-10 pb-8 will-change-transform"},[(He(!0),st(Nt,null,vi(ie(AP),(g,_)=>(He(),st("div",{key:g.id,class:"w-full md:w-[480px] lg:w-[540px] flex-shrink-0 group cursor-pointer",onClick:m=>h(g),onMouseenter:f[0]||(f[0]=m=>{ie(i)("VIEW_CASE","VIEW CASE"),ie(s)()}),onMouseleave:f[1]||(f[1]=(...m)=>ie(r)&&ie(r)(...m))},[D("div",{class:"relative rounded-3xl bg-void-950/80 border border-white/10 overflow-hidden backdrop-blur-2xl transition-all duration-500 group-hover:border-white/30 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]",style:ji({borderColor:`${g.accentColor}22`})},[D("div",LP,[D("img",{src:g.thumbnail,alt:g.title,class:"w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95"},null,8,DP),f[6]||(f[6]=D("div",{class:"absolute inset-0 bg-gradient-to-t from-void-950 via-void-950/30 to-transparent"},null,-1)),D("div",IP,[Ue(dr,{variant:"glass"},{default:on(()=>[an(Ze(g.category),1)]),_:2},1024),D("span",UP,[Ue(ie(Er),{class:"w-4 h-4"})])]),g.awards[0]?(He(),st("div",NP,[Ue(ie(mp),{class:"w-3.5 h-3.5"}),D("span",null,Ze(g.awards[0]),1)])):ys("",!0)]),D("div",OP,[D("div",FP,[D("h3",kP,Ze(g.title),1),D("span",BP," // "+Ze(g.number),1)]),D("p",zP,Ze(g.subtitle),1),D("div",HP,[(He(!0),st(Nt,null,vi(g.metrics.slice(0,2),(m,p)=>(He(),st("div",{key:p},[D("span",GP,Ze(m.label),1),D("span",{class:"text-lg font-display font-bold text-white",style:ji({color:g.accentColor})},Ze(m.value),5)]))),128))]),D("div",VP,[(He(!0),st(Nt,null,vi(g.tags.slice(0,3),m=>(He(),st("span",{key:m,class:"px-2.5 py-0.5 text-[10px] font-mono text-hud-text rounded bg-white/5 border border-white/5"},Ze(m),1))),128))])])],4)],40,PP))),128))],512)],512))}}),XP={id:"shader-lab",class:"relative py-28 px-4 md:px-10 max-w-7xl mx-auto z-20 select-none"},$P={class:"flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12"},YP={class:"flex items-center gap-3 mb-3"},qP={class:"flex items-center gap-3"},jP={class:"p-6 md:p-10 rounded-3xl bg-void-950/80 border border-white/10 backdrop-blur-2xl shadow-2xl space-y-8 text-left"},KP={class:"flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/5"},ZP={class:"flex items-center gap-3"},JP={class:"w-10 h-10 rounded-xl bg-prism-gold/10 border border-prism-gold/30 flex items-center justify-center text-prism-gold"},QP={class:"flex items-center gap-3"},eL={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"},tL={class:"p-5 rounded-2xl bg-void-900/70 border border-white/5 space-y-3"},nL={class:"flex justify-between items-center text-xs font-mono"},iL={class:"text-prism-cyan font-bold"},rL={class:"p-5 rounded-2xl bg-void-900/70 border border-white/5 space-y-3"},sL={class:"flex justify-between items-center text-xs font-mono"},oL={class:"text-prism-magenta font-bold"},aL={class:"p-5 rounded-2xl bg-void-900/70 border border-white/5 space-y-3"},lL={class:"flex justify-between items-center text-xs font-mono"},cL={class:"text-prism-gold font-bold"},uL={class:"p-5 rounded-2xl bg-void-900/70 border border-white/5 space-y-3"},fL={class:"flex justify-between items-center text-xs font-mono"},hL={class:"text-emerald-400 font-bold"},dL={class:"space-y-3 pt-4 border-t border-white/5"},pL={class:"flex items-center gap-2 text-xs font-mono text-hud-text uppercase tracking-wider"},mL={class:"grid grid-cols-1 sm:grid-cols-3 gap-4"},gL=Ei({__name:"ShaderLabSection",emits:["update-config"],setup(n,{emit:e}){const t=e,{setCursor:i,resetCursor:r}=As(),{playHover:s,playClick:o}=Yr(),a=Ra({dispersion:1.4,roughness:.12,transmission:.95,colorTheme:0,wireframe:!1,rotationSpeed:1.2});function l(){t("update-config",{...a})}function c(d){o(),a.colorTheme=d,l()}function u(){o(),a.wireframe=!a.wireframe,l()}function h(){o(),a.dispersion=1.2,a.roughness=.15,a.transmission=.95,a.colorTheme=0,a.wireframe=!1,a.rotationSpeed=1,l()}return ll(a,()=>{l()},{deep:!0}),(d,f)=>(He(),st("section",XP,[D("div",$P,[D("div",null,[D("div",YP,[Ue(dr,{variant:"gold",dot:""},{default:on(()=>[...f[21]||(f[21]=[an(" Interactive 3D Lab // 03 ",-1)])]),_:1}),f[22]||(f[22]=D("span",{class:"text-xs font-mono text-hud-text uppercase tracking-wider"}," Real-Time GLSL Shaders & Physics Sandbox ",-1))]),f[23]||(f[23]=D("h2",{class:"text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight"}," TWEAK THE CRYSTAL. ",-1))]),D("div",qP,[D("button",{class:"flex items-center gap-2 px-4 py-2 rounded-full bg-void-950/70 border border-white/10 hover:border-white/30 text-xs font-mono text-hud-text hover:text-white transition-all cursor-pointer",onClick:h,onMouseenter:f[0]||(f[0]=g=>{ie(i)("HOVER"),ie(s)()}),onMouseleave:f[1]||(f[1]=(...g)=>ie(r)&&ie(r)(...g))},[Ue(ie(a2),{class:"w-3.5 h-3.5"}),f[24]||(f[24]=D("span",null,"RESET DEFAULTS",-1))],32)])]),D("div",jP,[D("div",KP,[D("div",ZP,[D("div",JP,[Ue(ie(c2),{class:"w-5 h-5"})]),f[25]||(f[25]=D("div",null,[D("h3",{class:"text-lg font-display font-bold text-white uppercase"}," Live Shader Control Deck "),D("p",{class:"text-xs font-mono text-hud-text"}," Direct uniform manipulation affecting the background 3D canvas in real-time ")],-1))]),D("div",QP,[D("button",{class:gn(["flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono border transition-all cursor-pointer",[a.wireframe?"bg-prism-cyan/20 border-prism-cyan text-prism-cyan shadow-[0_0_12px_rgba(0,240,255,0.3)]":"bg-white/5 border-white/10 text-hud-text hover:text-white"]]),onClick:u,onMouseenter:f[2]||(f[2]=g=>{ie(i)("HOVER"),ie(s)()}),onMouseleave:f[3]||(f[3]=(...g)=>ie(r)&&ie(r)(...g))},[(He(),An(qu(a.wireframe?ie(t2):ie(e2)),{class:"w-4 h-4"})),D("span",null,"WIREFRAME: "+Ze(a.wireframe?"ON":"OFF"),1)],34)])]),D("div",eL,[D("div",tL,[D("div",nL,[f[26]||(f[26]=D("span",{class:"text-hud-text uppercase"},"Light Dispersion",-1)),D("span",iL,Ze(a.dispersion.toFixed(2)),1)]),Js(D("input",{"onUpdate:modelValue":f[4]||(f[4]=g=>a.dispersion=g),type:"range",min:"0.2",max:"3.0",step:"0.05",class:"w-full accent-prism-cyan cursor-pointer",onInput:f[5]||(f[5]=(...g)=>ie(s)&&ie(s)(...g))},null,544),[[Qs,a.dispersion,void 0,{number:!0}]]),f[27]||(f[27]=D("p",{class:"text-[11px] font-mono text-zinc-500"}," Calculates chromatic separation of refracted RGB spectral rays. ",-1))]),D("div",rL,[D("div",sL,[f[28]||(f[28]=D("span",{class:"text-hud-text uppercase"},"Micro-Roughness",-1)),D("span",oL,Ze(a.roughness.toFixed(2)),1)]),Js(D("input",{"onUpdate:modelValue":f[6]||(f[6]=g=>a.roughness=g),type:"range",min:"0.02",max:"0.8",step:"0.02",class:"w-full accent-prism-magenta cursor-pointer",onInput:f[7]||(f[7]=(...g)=>ie(s)&&ie(s)(...g))},null,544),[[Qs,a.roughness,void 0,{number:!0}]]),f[29]||(f[29]=D("p",{class:"text-[11px] font-mono text-zinc-500"}," Controls specular crystal gleam and facet sharpness. ",-1))]),D("div",aL,[D("div",lL,[f[30]||(f[30]=D("span",{class:"text-hud-text uppercase"},"Transmission Clarity",-1)),D("span",cL,Ze((a.transmission*100).toFixed(0))+"%",1)]),Js(D("input",{"onUpdate:modelValue":f[8]||(f[8]=g=>a.transmission=g),type:"range",min:"0.4",max:"1.0",step:"0.02",class:"w-full accent-prism-gold cursor-pointer",onInput:f[9]||(f[9]=(...g)=>ie(s)&&ie(s)(...g))},null,544),[[Qs,a.transmission,void 0,{number:!0}]]),f[31]||(f[31]=D("p",{class:"text-[11px] font-mono text-zinc-500"}," Simulates optical light passing through solid dielectric crystal. ",-1))]),D("div",uL,[D("div",fL,[f[32]||(f[32]=D("span",{class:"text-hud-text uppercase"},"Orbital Speed",-1)),D("span",hL,Ze(a.rotationSpeed.toFixed(1))+"x",1)]),Js(D("input",{"onUpdate:modelValue":f[10]||(f[10]=g=>a.rotationSpeed=g),type:"range",min:"0.2",max:"3.0",step:"0.1",class:"w-full accent-emerald-400 cursor-pointer",onInput:f[11]||(f[11]=(...g)=>ie(s)&&ie(s)(...g))},null,544),[[Qs,a.rotationSpeed,void 0,{number:!0}]]),f[33]||(f[33]=D("p",{class:"text-[11px] font-mono text-zinc-500"}," Angular velocity of the 3D crystal polyhedron in space. ",-1))])]),D("div",dL,[D("div",pL,[Ue(ie(o2),{class:"w-4 h-4"}),f[34]||(f[34]=D("span",null,"Spectral Color Themes",-1))]),D("div",mL,[D("button",{class:gn(["p-4 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between cursor-pointer",[a.colorTheme===0?"bg-void-900 border-prism-cyan shadow-[0_0_20px_rgba(0,240,255,0.2)]":"bg-void-900/40 border-white/5 hover:border-white/20"]]),onClick:f[12]||(f[12]=g=>c(0)),onMouseenter:f[13]||(f[13]=g=>ie(i)("HOVER")),onMouseleave:f[14]||(f[14]=(...g)=>ie(r)&&ie(r)(...g))},[...f[35]||(f[35]=[so('<div><p class="text-xs font-display font-bold text-white uppercase">Prism Rainbow &amp; Cyan</p><p class="text-[10px] font-mono text-hud-text">Full visible light spectrum</p></div><div class="flex gap-1"><span class="w-3 h-3 rounded-full bg-prism-cyan"></span><span class="w-3 h-3 rounded-full bg-prism-magenta"></span><span class="w-3 h-3 rounded-full bg-prism-gold"></span></div>',2)])],34),D("button",{class:gn(["p-4 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between cursor-pointer",[a.colorTheme===1?"bg-void-900 border-prism-magenta shadow-[0_0_20px_rgba(255,46,147,0.2)]":"bg-void-900/40 border-white/5 hover:border-white/20"]]),onClick:f[15]||(f[15]=g=>c(1)),onMouseenter:f[16]||(f[16]=g=>ie(i)("HOVER")),onMouseleave:f[17]||(f[17]=(...g)=>ie(r)&&ie(r)(...g))},[...f[36]||(f[36]=[so('<div><p class="text-xs font-display font-bold text-white uppercase">Cyber Magenta &amp; Violet</p><p class="text-[10px] font-mono text-hud-text">Deep ultraviolet laser caustics</p></div><div class="flex gap-1"><span class="w-3 h-3 rounded-full bg-prism-magenta"></span><span class="w-3 h-3 rounded-full bg-prism-violet"></span><span class="w-3 h-3 rounded-full bg-pink-300"></span></div>',2)])],34),D("button",{class:gn(["p-4 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between cursor-pointer",[a.colorTheme===2?"bg-void-900 border-prism-gold shadow-[0_0_20px_rgba(255,209,102,0.2)]":"bg-void-900/40 border-white/5 hover:border-white/20"]]),onClick:f[18]||(f[18]=g=>c(2)),onMouseenter:f[19]||(f[19]=g=>ie(i)("HOVER")),onMouseleave:f[20]||(f[20]=(...g)=>ie(r)&&ie(r)(...g))},[...f[37]||(f[37]=[so('<div><p class="text-xs font-display font-bold text-white uppercase">Quantum Gold &amp; Amber</p><p class="text-[10px] font-mono text-hud-text">Warm radiant luxury photons</p></div><div class="flex gap-1"><span class="w-3 h-3 rounded-full bg-prism-gold"></span><span class="w-3 h-3 rounded-full bg-amber-600"></span><span class="w-3 h-3 rounded-full bg-yellow-200"></span></div>',2)])],34)])])])]))}}),_L=[{id:"webgl-3d",number:"01",title:"Creative WebGL & 3D Shaders",tagline:"Hyper-immersive, awards-winning interactive 3D web experiences.",description:"We engineer bespoke WebGL scenes, custom GLSL vertex/fragment shaders, particle fluid dynamics, and optical dispersion models that turn standard websites into world-class digital art.",features:["Custom GLSL Vertex & Fragment Shaders","Interactive 3D Meshes & GPGPU Particles","Zero-Latency 60/120 FPS Performance Architecture","Photorealistic PBR Materials & Caustics"],icon:"Sparkles",badge:"FLAGSHIP EXPERTISE"},{id:"motion-gsap",number:"02",title:"Kinetic Motion & Micro-Physics",tagline:"Fluid choreography engineered with mathematical precision.",description:"Every scroll, hover, and drag carries organic weight. We leverage GSAP 3, Lenis inertial physics, and responsive SVG/Canvas choreography to captivate visitors and drive conversions.",features:["Inertial Lenis Smooth Scroll Architecture","GSAP ScrollTrigger Timeline Orchestration","Split-Type Kinetic Typography Reveals","Magnetic Cursor Trailing & Spring Mechanics"],icon:"Activity",badge:"AWARDS BENCHMARK"},{id:"brand-experience",number:"03",title:"Digital Brand Architecture & UI/UX",tagline:"Avant-garde digital presence for high-growth tech & luxury.",description:"From Silicon Valley AI unicorns to European luxury ateliers, we architect distinctive design systems, Bento Grid UI frameworks, and interactive product narratives.",features:["Avant-Garde Typography & Design Tokens","Interactive Bento Grids & HUD Overlays","High-Conversion Landing Page Archetypes","Sound Design & Web Audio API Synthesis"],icon:"Layers",badge:"HIGH IMPACT"},{id:"fullstack-arch",number:"04",title:"High-Performance Frontend Engineering",tagline:"Enterprise-grade stability meets creative avant-garde execution.",description:"We ensure your creative website loads instantaneously worldwide, passes 100/100 Lighthouse audits, is fully accessible, and scales smoothly across every device.",features:["Vue 3 / TypeScript Clean Architecture","Adaptive DPR & Mobile GPU Throttling","Automated Asset Optimization & Zero-Leak GC","Complete SEO, OpenGraph & Structured Data"],icon:"Cpu",badge:"ENGINEERING EXCELLENCE"}],vL={id:"services",class:"relative py-28 px-4 md:px-10 max-w-7xl mx-auto z-20 select-none"},xL={class:"flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16"},yL={class:"flex items-center gap-3 mb-3"},SL={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},ML={class:"relative z-10 space-y-6"},bL={class:"flex items-center justify-between"},EL={class:"w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-prism-cyan group-hover:scale-110 transition-transform"},TL={class:"flex items-baseline gap-2 mb-2"},wL={class:"text-2xl sm:text-3xl font-display font-bold text-white tracking-tight group-hover:text-prism-cyan transition-colors"},AL={class:"text-xs font-mono text-hud-text font-bold"},CL={class:"text-sm font-display font-medium text-prism-gold mb-3"},RL={class:"text-sm font-body text-zinc-300 leading-relaxed"},PL={class:"space-y-2 pt-4 border-t border-white/5"},LL={class:"relative z-10 pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-hud-text group-hover:text-white transition-colors"},DL=Ei({__name:"ServicesBento",setup(n){const{setCursor:e,resetCursor:t}=As(),{playHover:i}=Yr(),r={Sparkles:u2,Activity:ZR,Layers:i2,Cpu:Xx};function s(o,a){const l=a.getBoundingClientRect(),c=o.clientX-l.left,u=o.clientY-l.top;a.style.setProperty("--mouse-x",`${c}px`),a.style.setProperty("--mouse-y",`${u}px`)}return(o,a)=>(He(),st("section",vL,[D("div",xL,[D("div",null,[D("div",yL,[Ue(dr,{variant:"cyan",dot:""},{default:on(()=>[...a[3]||(a[3]=[an(" Capabilities // 04 ",-1)])]),_:1}),a[4]||(a[4]=D("span",{class:"text-xs font-mono text-hud-text uppercase tracking-wider"}," Full-Spectrum Creative Engineering ",-1))]),a[5]||(a[5]=D("h2",{class:"text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight"}," CORE CAPABILITIES. ",-1))]),a[6]||(a[6]=D("p",{class:"text-sm font-body text-zinc-400 max-w-md"}," We bridge the gap between avant-garde visual artistry and bulletproof software engineering. ",-1))]),D("div",SL,[(He(!0),st(Nt,null,vi(ie(_L),(l,c)=>(He(),st("div",{key:l.id,class:"relative p-8 md:p-10 rounded-3xl bg-void-950/70 border border-white/10 backdrop-blur-2xl overflow-hidden group hover:border-white/25 transition-all duration-300 flex flex-col justify-between",onMousemove:a[0]||(a[0]=u=>s(u,u.currentTarget)),onMouseenter:a[1]||(a[1]=u=>{ie(e)("HOVER"),ie(i)()}),onMouseleave:a[2]||(a[2]=(...u)=>ie(t)&&ie(t)(...u))},[a[8]||(a[8]=D("div",{class:"pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300",style:{background:"radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(0, 240, 255, 0.08), transparent 40%)"}},null,-1)),D("div",ML,[D("div",bL,[D("div",EL,[(He(),An(qu(r[l.icon]),{class:"w-6 h-6"}))]),Ue(dr,{variant:"glass"},{default:on(()=>[an(Ze(l.badge),1)]),_:2},1024)]),D("div",null,[D("div",TL,[D("h3",wL,Ze(l.title),1),D("span",AL,"// "+Ze(l.number),1)]),D("p",CL,Ze(l.tagline),1),D("p",RL,Ze(l.description),1)]),D("div",PL,[(He(!0),st(Nt,null,vi(l.features,(u,h)=>(He(),st("div",{key:h,class:"flex items-center gap-2.5 text-xs font-mono text-zinc-300"},[Ue(ie(gp),{class:"w-3.5 h-3.5 text-prism-cyan flex-shrink-0"}),D("span",null,Ze(u),1)]))),128))])]),D("div",LL,[a[7]||(a[7]=D("span",null,"DEPLOYABLE WITHIN 2-4 WEEKS",-1)),Ue(ie(QR),{class:"w-4 h-4 text-prism-cyan group-hover:translate-x-1 transition-transform"})])],32))),128))])]))}}),IL={id:"contact",class:"relative py-28 px-4 sm:px-8 md:px-10 max-w-7xl mx-auto z-20 select-none"},UL={class:"text-center max-w-3xl mx-auto mb-16 space-y-4"},NL={class:"flex items-center justify-center gap-3"},OL={class:"max-w-4xl mx-auto p-6 sm:p-8 md:p-12 rounded-3xl bg-void-950/85 border border-white/10 backdrop-blur-2xl shadow-2xl text-left"},FL={key:0,class:"py-16 text-center space-y-6 animate-fade-in"},kL={class:"w-16 h-16 rounded-full bg-emerald-400/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_32px_rgba(52,211,153,0.3)]"},BL={class:"space-y-2"},zL={class:"text-sm font-mono text-hud-text max-w-md mx-auto"},HL={class:"space-y-3"},GL={class:"flex flex-wrap gap-2.5"},VL=["onClick"],WL={class:"space-y-3"},XL={class:"flex flex-wrap gap-2.5"},$L=["onClick"],YL={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},qL={class:"space-y-2"},jL={class:"space-y-2"},KL={class:"space-y-2"},ZL={class:"flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5"},JL={class:"flex items-center gap-2 text-xs font-mono text-hud-text"},QL={key:0,class:"animate-pulse"},e3={key:1,class:"flex items-center gap-2"},t3=Ei({__name:"ContactSection",setup(n){const{setCursor:e,resetCursor:t}=As(),{playClick:i,playSwoosh:r}=Yr(),s=Ra({name:"",email:"",service:"WebGL & 3D Experience",budget:"$5k - $10k",message:""}),o=Ct(!1),a=Ct(!1),l=["WebGL & 3D Experience","Flagship Creative Site","3D Product Configurator","Subcontracting / Motion"],c=["$3k - $5k","$5k - $10k","$10k - $20k","$20k+"];function u(){i(),o.value=!0,setTimeout(()=>{o.value=!1,a.value=!0,r()},1200)}function h(){a.value=!1,s.name="",s.email="",s.message=""}return(d,f)=>(He(),st("section",IL,[D("div",UL,[D("div",NL,[Ue(dr,{variant:"magenta",dot:""},{default:on(()=>[...f[7]||(f[7]=[an(" Initialize Collaboration // 05 ",-1)])]),_:1})]),f[8]||(f[8]=D("h2",{class:"text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight"}," LET'S BUILD A MASTERPIECE. ",-1)),f[9]||(f[9]=D("p",{class:"text-sm sm:text-base font-body text-zinc-300"}," Ready to captivate your audience and command premium industry authority? Fill out the brief below or contact directly. ",-1))]),D("div",OL,[a.value?(He(),st("div",FL,[D("div",kL,[Ue(ie(gp),{class:"w-8 h-8"})]),D("div",BL,[f[10]||(f[10]=D("h3",{class:"text-2xl sm:text-3xl font-display font-bold text-white"},"INQUIRY RECEIVED.",-1)),D("p",zL," Thank you "+Ze(s.name)+". Our creative directors will review your brief and reply within 12 business hours. ",1)]),Ue(Wl,{variant:"primary",size:"md",onClick:h},{default:on(()=>[...f[11]||(f[11]=[an(" Send Another Message ",-1)])]),_:1})])):(He(),st("form",{key:1,class:"space-y-8",onSubmit:Ri(u,["prevent"])},[D("div",HL,[f[12]||(f[12]=D("label",{class:"block text-xs font-mono uppercase text-hud-text tracking-wider"}," 1. Select Project Scope ",-1)),D("div",GL,[(He(),st(Nt,null,vi(l,g=>D("button",{key:g,type:"button",class:gn(["px-4 py-2.5 text-xs font-mono rounded-full border transition-all cursor-pointer",[s.service===g?"bg-prism-cyan/20 border-prism-cyan text-prism-cyan shadow-[0_0_16px_rgba(0,240,255,0.2)]":"bg-void-900/60 border-white/10 text-hud-text hover:text-white hover:border-white/20"]]),onClick:_=>{s.service=g,ie(i)()},onMouseenter:f[0]||(f[0]=_=>ie(e)("HOVER")),onMouseleave:f[1]||(f[1]=(..._)=>ie(t)&&ie(t)(..._))},Ze(g),43,VL)),64))])]),D("div",WL,[f[13]||(f[13]=D("label",{class:"block text-xs font-mono uppercase text-hud-text tracking-wider"}," 2. Anticipated Investment Tier ",-1)),D("div",XL,[(He(),st(Nt,null,vi(c,g=>D("button",{key:g,type:"button",class:gn(["px-4 py-2.5 text-xs font-mono rounded-full border transition-all cursor-pointer",[s.budget===g?"bg-prism-magenta/20 border-prism-magenta text-prism-magenta shadow-[0_0_16px_rgba(255,46,147,0.2)]":"bg-void-900/60 border-white/10 text-hud-text hover:text-white hover:border-white/20"]]),onClick:_=>{s.budget=g,ie(i)()},onMouseenter:f[2]||(f[2]=_=>ie(e)("HOVER")),onMouseleave:f[3]||(f[3]=(..._)=>ie(t)&&ie(t)(..._))},Ze(g),43,$L)),64))])]),D("div",YL,[D("div",qL,[f[14]||(f[14]=D("label",{class:"block text-xs font-mono uppercase text-hud-text tracking-wider"}," Your Name / Studio ",-1)),Js(D("input",{"onUpdate:modelValue":f[4]||(f[4]=g=>s.name=g),type:"text",required:"",placeholder:"e.g. Alex Vance",class:"w-full px-5 py-4 rounded-2xl bg-void-900/80 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-prism-cyan focus:ring-1 focus:ring-prism-cyan transition-all text-sm font-body"},null,512),[[Qs,s.name]])]),D("div",jL,[f[15]||(f[15]=D("label",{class:"block text-xs font-mono uppercase text-hud-text tracking-wider"}," Work Email Address ",-1)),Js(D("input",{"onUpdate:modelValue":f[5]||(f[5]=g=>s.email=g),type:"email",required:"",placeholder:"alex@company.com",class:"w-full px-5 py-4 rounded-2xl bg-void-900/80 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-prism-cyan focus:ring-1 focus:ring-prism-cyan transition-all text-sm font-body"},null,512),[[Qs,s.email]])])]),D("div",KL,[f[16]||(f[16]=D("label",{class:"block text-xs font-mono uppercase text-hud-text tracking-wider"}," Project Overview & Goals ",-1)),Js(D("textarea",{"onUpdate:modelValue":f[6]||(f[6]=g=>s.message=g),rows:"4",required:"",placeholder:"Tell us about your brand, launch deadlines, or desired interactive features...",class:"w-full px-5 py-4 rounded-2xl bg-void-900/80 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-prism-cyan focus:ring-1 focus:ring-prism-cyan transition-all text-sm font-body resize-none"},null,512),[[Qs,s.message]])]),D("div",ZL,[D("div",JL,[Ue(ie($x),{class:"w-4 h-4 text-emerald-400"}),f[17]||(f[17]=D("span",null,"NDA & Confidentiality Guaranteed",-1))]),Ue(Wl,{variant:"primary",size:"lg",disabled:o.value},{default:on(()=>[o.value?(He(),st("span",QL,"Transmitting Brief...")):(He(),st("span",e3,[f[18]||(f[18]=D("span",null,"Submit Project Brief",-1)),Ue(ie(l2),{class:"w-4 h-4"})]))]),_:1},8,["disabled"])])],32))])]))}}),n3={class:"relative min-h-screen bg-void-950 text-white selection:bg-prism-cyan selection:text-black"},i3={class:"content-layer"},r3=Ei({__name:"App",setup(n){const e=Ct(null);let t=null;const{initLenis:i}=pp();let r;const s=Ct(null),o=Ct(!1);function a(u){s.value=u,o.value=!0}function l(){o.value=!1}function c(u){t&&t.updateLabConfig(u)}return $r(()=>{r=i(),e.value&&(t=new SR(e.value)),window.addEventListener("scroll",()=>{if(t){const u=document.documentElement.scrollHeight-window.innerHeight,h=u>0?window.scrollY/u:0;t.setScrollProgress(h)}},{passive:!0})}),So(()=>{r&&r(),t&&t.destroy()}),(u,h)=>(He(),st("div",n3,[D("canvas",{id:"webgl-canvas",ref_key:"canvasRef",ref:e},null,512),h[0]||(h[0]=D("div",{class:"grain-overlay"},null,-1)),Ue(G2),Ue(T2),D("main",i3,[Ue(vP),Ue(wP),Ue(WP,{onSelectProject:a}),Ue(gL,{onUpdateConfig:c}),Ue(DL),Ue(t3)]),Ue(B2),Ue(mP,{"is-open":o.value,project:s.value,onClose:l},null,8,["is-open","project"])]))}}),s3=TM(r3);s3.mount("#app");
