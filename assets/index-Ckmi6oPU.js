var py=Object.defineProperty;var my=(n,e,t)=>e in n?py(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var be=(n,e,t)=>my(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Th(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Dt={},ia=[],Zi=()=>{},z_=()=>!1,zu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Hu=n=>n.startsWith("onUpdate:"),un=Object.assign,Ah=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},gy=Object.prototype.hasOwnProperty,bt=(n,e)=>gy.call(n,e),Je=Array.isArray,ms=n=>Xl(n)==="[object Map]",cu=n=>Xl(n)==="[object Set]",Dp=n=>Xl(n)==="[object Date]",st=n=>typeof n=="function",$t=n=>typeof n=="string",er=n=>typeof n=="symbol",Mt=n=>n!==null&&typeof n=="object",H_=n=>(Mt(n)||st(n))&&st(n.then)&&st(n.catch),G_=Object.prototype.toString,Xl=n=>G_.call(n),_y=n=>Xl(n).slice(8,-1),V_=n=>Xl(n)==="[object Object]",Ch=n=>$t(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,rl=Th(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gu=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},vy=/-\w/g,Kn=Gu(n=>n.replace(vy,e=>e.slice(1).toUpperCase())),xy=/\B([A-Z])/g,xo=Gu(n=>n.replace(xy,"-$1").toLowerCase()),Vu=Gu(n=>n.charAt(0).toUpperCase()+n.slice(1)),pf=Gu(n=>n?`on${Vu(n)}`:""),fr=(n,e)=>!Object.is(n,e),Kc=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},W_=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Rh=n=>{const e=parseFloat(n);return isNaN(e)?n:e},yy=n=>{const e=$t(n)?Number(n):NaN;return isNaN(e)?n:e};let Ip;const Wu=()=>Ip||(Ip=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ri(n){if(Je(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=$t(i)?Ey(i):ri(i);if(r)for(const s in r)e[s]=r[s]}return e}else if($t(n)||Mt(n))return n}const Sy=/;(?![^(]*\))/g,by=/:([^]+)/,My=/\/\*[^]*?\*\//g;function Ey(n){const e={};return n.replace(My,"").split(Sy).forEach(t=>{if(t){const i=t.split(by);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Xt(n){let e="";if($t(n))e=n;else if(Je(n))for(let t=0;t<n.length;t++){const i=Xt(n[t]);i&&(e+=i+" ")}else if(Mt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const wy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ty=Th(wy);function X_(n){return!!n||n===""}function Ay(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Xu(n[i],e[i]);return t}function Up(n,e){if(n.size!==e.size)return!1;const t=Array.from(e),i=new Uint8Array(t.length);for(const r of n){let s=-1;for(let o=0;o<t.length;o++)if(!i[o]&&Xu(r,t[o])){s=o;break}if(s<0)return!1;i[s]=1}return!0}function Xu(n,e){if(n===e)return!0;let t=Dp(n),i=Dp(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=er(n),i=er(e),t||i)return n===e;if(t=Je(n),i=Je(e),t||i)return t&&i?Ay(n,e):!1;if(t=Mt(n),i=Mt(e),t||i){if(!t||!i)return!1;if(t=ms(n),i=ms(e),t||i||(t=cu(n),i=cu(e),t||i))return t&&i?Up(n,e):!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Xu(n[o],e[o]))return!1}}return String(n)===String(e)}const $_=n=>!!(n&&n.__v_isRef===!0),Ie=n=>$t(n)?n:n==null?"":Je(n)||Mt(n)&&(n.toString===G_||!st(n.toString))?$_(n)?Ie(n.value):JSON.stringify(n,Y_,2):String(n),Y_=(n,e)=>$_(e)?Y_(n,e.value):ms(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[mf(i,s)+" =>"]=r,t),{})}:cu(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>mf(t))}:er(e)?mf(e):Mt(e)&&!Je(e)&&!V_(e)?String(e):e,mf=(n,e="")=>{var t;return er(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};function Cy(n){return n==null?"initial":typeof n=="string"?n===""?" ":n:String(n)}/**
* @vue/reactivity v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xn;class Ry{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&xn&&(xn.active?(this.parent=xn,this.index=(xn.scopes||(xn.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const r=this.scopes.slice();for(e=0,t=r.length;e<t;e++)r[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=xn;try{return xn=this,e()}finally{xn=t}}}on(){++this._on===1&&(this.prevScope=xn,xn=this)}off(){if(this._on>0&&--this._on===0){if(xn===this)xn=this.prevScope;else{let e=xn;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(t=0,i=r.length;t<i;t++)r[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Py(){return xn}let Nt;const gf=new WeakSet;class q_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,xn&&(xn.active?xn.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,gf.has(this)&&(gf.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||K_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Np(this),Z_(this);const e=Nt,t=Ji;Nt=this,Ji=!0;try{return this.fn()}finally{J_(this),Nt=e,Ji=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Dh(e);this.deps=this.depsTail=void 0,Np(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?gf.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Pd(this)&&this.run()}get dirty(){return Pd(this)}}let j_=0,sl,ol;function K_(n,e=!1){if(n.flags|=8,e){n.next=ol,ol=n;return}n.next=sl,sl=n}function Ph(){j_++}function Lh(){if(--j_>0)return;if(ol){let e=ol;for(ol=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;sl;){let e=sl;for(sl=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Z_(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function J_(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Dh(i),Ly(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Pd(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Q_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Q_(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===El)||(n.globalVersion=El,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Pd(n))))return;n.flags|=2;const e=n.dep,t=Nt,i=Ji;Nt=n,Ji=!0;try{Z_(n);const r=n.fn(n._value);(e.version===0||fr(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Nt=t,Ji=i,J_(n),n.flags&=-3}}function Dh(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Dh(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Ly(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Ji=!0;const e0=[];function Gr(){e0.push(Ji),Ji=!1}function Vr(){const n=e0.pop();Ji=n===void 0?!0:n}function Np(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Nt;Nt=void 0;try{e()}finally{Nt=t}}}let El=0;class Dy{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ih{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Nt||!Ji||Nt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Nt)t=this.activeLink=new Dy(Nt,this),Nt.deps?(t.prevDep=Nt.depsTail,Nt.depsTail.nextDep=t,Nt.depsTail=t):Nt.deps=Nt.depsTail=t,t0(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Nt.depsTail,t.nextDep=void 0,Nt.depsTail.nextDep=t,Nt.depsTail=t,Nt.deps===t&&(Nt.deps=i)}return t}trigger(e){this.version++,El++,this.notify(e)}notify(e){Ph();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Lh()}}}function t0(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)t0(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ld=new WeakMap,io=Symbol(""),Dd=Symbol(""),wl=Symbol("");function Rn(n,e,t){if(Ji&&Nt){let i=Ld.get(n);i||Ld.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Ih),r.map=i,r.key=t),r.track()}}function Ir(n,e,t,i,r,s){const o=Ld.get(n);if(!o){El++;return}const a=l=>{l&&l.trigger()};if(Ph(),e==="clear")o.forEach(a);else{const l=Je(n),c=l&&Ch(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===wl||!er(d)&&d>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(wl)),e){case"add":l?c&&a(o.get("length")):(a(o.get(io)),ms(n)&&a(o.get(Dd)));break;case"delete":l||(a(o.get(io)),ms(n)&&a(o.get(Dd)));break;case"set":ms(n)&&a(o.get(io));break}}Lh()}function bo(n){const e=yt(n);return e===n?e:(Rn(e,"iterate",wl),ki(n)?e:e.map(tr))}function $u(n){return Rn(n=yt(n),"iterate",wl),n}function lr(n,e){return Wr(n)?ga(ro(n)?tr(e):e):tr(e)}const Iy={__proto__:null,[Symbol.iterator](){return _f(this,Symbol.iterator,n=>lr(this,n))},concat(...n){return bo(this).concat(...n.map(e=>Je(e)?bo(e):e))},entries(){return _f(this,"entries",n=>(n[1]=lr(this,n[1]),n))},every(n,e){return yr(this,"every",n,e,void 0,arguments)},filter(n,e){return yr(this,"filter",n,e,t=>t.map(i=>lr(this,i)),arguments)},find(n,e){return yr(this,"find",n,e,t=>lr(this,t),arguments)},findIndex(n,e){return yr(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return yr(this,"findLast",n,e,t=>lr(this,t),arguments)},findLastIndex(n,e){return yr(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return yr(this,"forEach",n,e,void 0,arguments)},includes(...n){return vf(this,"includes",n)},indexOf(...n){return vf(this,"indexOf",n)},join(n){return bo(this).join(n)},lastIndexOf(...n){return vf(this,"lastIndexOf",n)},map(n,e){return yr(this,"map",n,e,void 0,arguments)},pop(){return Da(this,"pop")},push(...n){return Da(this,"push",n)},reduce(n,...e){return Op(this,"reduce",n,e)},reduceRight(n,...e){return Op(this,"reduceRight",n,e)},shift(){return Da(this,"shift")},some(n,e){return yr(this,"some",n,e,void 0,arguments)},splice(...n){return Da(this,"splice",n)},toReversed(){return bo(this).toReversed()},toSorted(n){return bo(this).toSorted(n)},toSpliced(...n){return bo(this).toSpliced(...n)},unshift(...n){return Da(this,"unshift",n)},values(){return _f(this,"values",n=>lr(this,n))}};function _f(n,e,t){const i=$u(n),r=i[e]();return i!==n&&!ki(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Uy=Array.prototype;function yr(n,e,t,i,r,s){const o=$u(n),a=o!==n&&!ki(n),l=o[e];if(l!==Uy[e]){const f=l.apply(n,s);return a?tr(f):f}let c=t;o!==n&&(a?c=function(f,d){return t.call(this,lr(n,f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Op(n,e,t,i){const r=$u(n),s=r!==n&&!ki(n);let o=t,a=!1;r!==n&&(s?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=lr(n,c)),t.call(this,c,lr(n,u),f,n)}):t.length>3&&(o=function(c,u,f){return t.call(this,c,u,f,n)}));const l=r[e](o,...i);return a?lr(n,l):l}function vf(n,e,t){const i=yt(n);Rn(i,"iterate",wl);const r=i[e](...t);return(r===-1||r===!1)&&Oh(t[0])?(t[0]=yt(t[0]),i[e](...t)):r}function Da(n,e,t=[]){Gr(),Ph();const i=yt(n)[e].apply(n,t);return Lh(),Vr(),i}const Ny=Th("__proto__,__v_isRef,__isVue"),n0=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(er));function Oy(n){er(n)||(n=String(n));const e=yt(this);return Rn(e,"has",n),e.hasOwnProperty(n)}class i0{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?$y:a0:s?o0:s0).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Je(e);if(!r){let l;if(o&&(l=Iy[t]))return l;if(t==="hasOwnProperty")return Oy}const a=Reflect.get(e,t,Un(e)?e:i);if((er(t)?n0.has(t):Ny(t))||(r||Rn(e,"get",t),s))return a;if(Un(a)){const l=o&&Ch(t)?a:a.value;return r&&Mt(l)?Ud(l):l}return Mt(a)?r?Ud(a):Ca(a):a}}class r0 extends i0{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=Je(e)&&Ch(t);if(!this._isShallow){const c=Wr(s);if(!ki(i)&&!Wr(i)&&(s=yt(s),i=yt(i)),!o&&Un(s)&&!Un(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:bt(e,t),l=Reflect.set(e,t,i,Un(e)?e:r);return e===yt(r)&&l&&(a?fr(i,s)&&Ir(e,"set",t,i):Ir(e,"add",t,i)),l}deleteProperty(e,t){const i=bt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Ir(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!er(t)||!n0.has(t))&&Rn(e,"has",t),i}ownKeys(e){return Rn(e,"iterate",Je(e)?"length":io),Reflect.ownKeys(e)}}class Fy extends i0{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const ky=new r0,By=new Fy,zy=new r0(!0);const Id=n=>n,ec=n=>Reflect.getPrototypeOf(n);function Hy(n,e,t){return function(...i){const r=this.__v_raw,s=yt(r),o=ms(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Id:e?ga:tr;return!e&&Rn(s,"iterate",l?Dd:io),un(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function tc(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Gy(n,e){const t={get(r){const s=this.__v_raw,o=yt(s),a=yt(r);n||(fr(r,a)&&Rn(o,"get",r),Rn(o,"get",a));const{has:l}=ec(o),c=e?Id:n?ga:tr;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Rn(yt(r),"iterate",io),r.size},has(r){const s=this.__v_raw,o=yt(s),a=yt(r);return n||(fr(r,a)&&Rn(o,"has",r),Rn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=yt(a),c=e?Id:n?ga:tr;return!n&&Rn(l,"iterate",io),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return un(t,n?{add:tc("add"),set:tc("set"),delete:tc("delete"),clear:tc("clear")}:{add(r){const s=yt(this),o=ec(s),a=yt(r),l=!e&&!ki(r)&&!Wr(r)?a:r;return o.has.call(s,l)||fr(r,l)&&o.has.call(s,r)||fr(a,l)&&o.has.call(s,a)||(s.add(l),Ir(s,"add",l,l)),this},set(r,s){!e&&!ki(s)&&!Wr(s)&&(s=yt(s));const o=yt(this),{has:a,get:l}=ec(o);let c=a.call(o,r);c||(r=yt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?fr(s,u)&&Ir(o,"set",r,s):Ir(o,"add",r,s),this},delete(r){const s=yt(this),{has:o,get:a}=ec(s);let l=o.call(s,r);l||(r=yt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Ir(s,"delete",r,void 0),c},clear(){const r=yt(this),s=r.size!==0,o=r.clear();return s&&Ir(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Hy(r,n,e)}),t}function Uh(n,e){const t=Gy(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(bt(t,r)&&r in i?t:i,r,s)}const Vy={get:Uh(!1,!1)},Wy={get:Uh(!1,!0)},Xy={get:Uh(!0,!1)};const s0=new WeakMap,o0=new WeakMap,a0=new WeakMap,$y=new WeakMap;function Yy(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ca(n){return Wr(n)?n:Nh(n,!1,ky,Vy,s0)}function qy(n){return Nh(n,!1,zy,Wy,o0)}function Ud(n){return Nh(n,!0,By,Xy,a0)}function Nh(n,e,t,i,r){if(!Mt(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const o=Yy(_y(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function ro(n){return Wr(n)?ro(n.__v_raw):!!(n&&n.__v_isReactive)}function Wr(n){return!!(n&&n.__v_isReadonly)}function ki(n){return!!(n&&n.__v_isShallow)}function Oh(n){return n?!!n.__v_raw:!1}function yt(n){const e=n&&n.__v_raw;return e?yt(e):n}function jy(n){return!bt(n,"__v_skip")&&Object.isExtensible(n)&&W_(n,"__v_skip",!0),n}const tr=n=>Mt(n)?Ca(n):n,ga=n=>Mt(n)?Ud(n):n;function Un(n){return n?n.__v_isRef===!0:!1}function ht(n){return Ky(n,!1)}function Ky(n,e){return Un(n)?n:new Zy(n,e)}class Zy{constructor(e,t){this.dep=new Ih,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:yt(e),this._value=t?e:tr(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||ki(e)||Wr(e);e=i?e:yt(e),fr(e,t)&&(this._rawValue=e,this._value=i?e:tr(e),this.dep.trigger())}}function j(n){return Un(n)?n.value:n}const Jy={get:(n,e,t)=>e==="__v_raw"?n:j(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Un(r)&&!Un(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function l0(n){return ro(n)?n:new Proxy(n,Jy)}class Qy{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ih(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=El-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Nt!==this)return K_(this,!0),!0}get value(){const e=this.dep.track();return Q_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function eS(n,e,t=!1){let i,r;return st(n)?i=n:(i=n.get,r=n.set),new Qy(i,r,t)}const nc={},uu=new WeakMap;let Xs;function tS(n,e=!1,t=Xs){if(t){let i=uu.get(t);i||uu.set(t,i=[]),i.push(n)}}function nS(n,e,t=Dt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=y=>r?y:ki(y)||r===!1||r===0?Ur(y,1):Ur(y);let u,f,d,h,_=!1,g=!1;if(Un(n)?(f=()=>n.value,_=ki(n)):ro(n)?(f=()=>c(n),_=!0):Je(n)?(g=!0,_=n.some(y=>ro(y)||ki(y)),f=()=>n.map(y=>{if(Un(y))return y.value;if(ro(y))return c(y);if(st(y))return l?l(y,2):y()})):st(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){Gr();try{d()}finally{Vr()}}const y=Xs;Xs=u;try{return l?l(n,3,[h]):n(h)}finally{Xs=y}}:f=Zi,e&&r){const y=f,b=r===!0?1/0:r;f=()=>Ur(y(),b)}const m=Py(),p=()=>{u.stop(),m&&m.active&&Ah(m.effects,u)};if(s&&e){const y=e;e=(...b)=>{const A=y(...b);return p(),A}}let x=g?new Array(n.length).fill(nc):nc;const v=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const b=u.run();if(y||r||_||(g?b.some((A,w)=>fr(A,x[w])):fr(b,x))){d&&d();const A=Xs;Xs=u;try{const w=[b,x===nc?void 0:g&&x[0]===nc?[]:x,h];x=b,l?l(e,3,w):e(...w)}finally{Xs=A}}}else u.run()};return a&&a(v),u=new q_(f),u.scheduler=o?()=>o(v,!1):v,h=y=>tS(y,!1,u),d=u.onStop=()=>{const y=uu.get(u);if(y){if(l)l(y,4);else for(const b of y)b();uu.delete(u)}},e?i?v(!0):x=u.run():o?o(v.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Ur(n,e=1/0,t){if(e<=0||!Mt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Un(n))Ur(n.value,e,t);else if(Je(n))for(let i=0;i<n.length;i++)Ur(n[i],e,t);else if(cu(n)||ms(n))n.forEach(i=>{Ur(i,e,t)});else if(V_(n)){for(const i in n)Ur(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ur(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $l(n,e,t,i){try{return i?n(...i):n()}catch(r){Yu(r,e,t)}}function Hi(n,e,t,i){if(st(n)){const r=$l(n,e,t,i);return r&&H_(r)&&r.catch(s=>{Yu(s,e,t)}),r}if(Je(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Hi(n[s],e,t,i));return r}}function Yu(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Dt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){Gr(),$l(s,null,10,[n,l,c]),Vr();return}}iS(n,t,r,i,o)}function iS(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const qn=[];let sr=-1;const ra=[];let as=null,qo=0;const c0=Promise.resolve();let fu=null;function u0(n){const e=fu||c0;return n?e.then(this?n.bind(this):n):e}function rS(n){let e=sr+1,t=qn.length;for(;e<t;){const i=e+t>>>1,r=qn[i],s=Tl(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Fh(n){if(!(n.flags&1)){const e=Tl(n),t=qn[qn.length-1];!t||!(n.flags&2)&&e>=Tl(t)?qn.push(n):qn.splice(rS(e),0,n),n.flags|=1,f0()}}function f0(){fu||(fu=c0.then(p0))}function d0(n){if(!Je(n))as&&n.id===-1?as.splice(qo+1,0,n):n.flags&1||(ra.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)ra.push(n[e]);f0()}function Fp(n,e,t=sr+1){for(;t<qn.length;t++){const i=qn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;qn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function h0(n){if(ra.length){const e=[...new Set(ra)].sort((t,i)=>Tl(t)-Tl(i));if(ra.length=0,as){for(let t=0;t<e.length;t++)as.push(e[t]);return}for(as=e,qo=0;qo<as.length;qo++){const t=as[qo];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}as=null,qo=0}}const Tl=n=>n.id==null?n.flags&2?-1:1/0:n.id;function p0(n){try{for(sr=0;sr<qn.length;sr++){const e=qn[sr];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),$l(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;sr<qn.length;sr++){const e=qn[sr];e&&(e.flags&=-2)}sr=-1,qn.length=0,h0(),fu=null,(qn.length||ra.length)&&p0()}}let yn=null,m0=null;function du(n){const e=yn;return yn=n,m0=n&&n.type.__scopeId||null,e}function Zt(n,e=yn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&gu(-1);const s=du(e),o=zr.length;let a;try{a=n(...r)}finally{for(let l=zr.length;l>o;l--)Hh();du(s),i._d&&gu(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function xf(n,e){if(yn===null)return n;const t=Qu(yn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=Dt]=e[r];s&&(st(s)&&(s={mounted:s,updated:s}),s.deep&&Ur(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ds(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Gr(),Hi(l,t,8,[n.el,a,n,e]),Vr())}}function sS(n,e){if(Ln){let t=Ln.provides;const i=Ln.parent&&Ln.parent.provides;i===t&&(t=Ln.provides=Object.create(i)),t[n]=e}}function Zc(n,e,t=!1){const i=Gh();if(i||oa){let r=oa?oa._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&st(e)?e.call(i&&i.proxy):e}}const oS=Symbol.for("v-scx"),aS=()=>Zc(oS);function al(n,e,t){return g0(n,e,t)}function g0(n,e,t=Dt){const{immediate:i,deep:r,flush:s,once:o}=t,a=un({},t),l=e&&i||!e&&s!=="post";let c;if(Ll){if(s==="sync"){const h=aS();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Zi,h.resume=Zi,h.pause=Zi,h}}const u=Ln;a.call=(h,_,g)=>Hi(h,u,_,g);let f=!1;s==="post"?a.scheduler=h=>{Qn(h,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(h,_)=>{_?h():Fh(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=nS(n,e,a);return Ll&&(c?c.push(d):l&&d()),d}function lS(n,e,t){const i=this.proxy,r=$t(n)?n.includes(".")?_0(i,n):()=>i[n]:n.bind(i,i);let s;st(e)?s=e:(s=e.handler,t=e);const o=Yl(this),a=g0(r,s.bind(i),t);return o(),a}function _0(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const cS=Symbol("_vte"),qu=n=>n.__isTeleport,Di=Symbol("_leaveCb"),Ia=Symbol("_enterCb");function uS(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ir(()=>{n.isMounted=!0}),T0(()=>{n.isUnmounting=!0}),n}const Ci=[Function,Array],v0={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ci,onEnter:Ci,onAfterEnter:Ci,onEnterCancelled:Ci,onBeforeLeave:Ci,onLeave:Ci,onAfterLeave:Ci,onLeaveCancelled:Ci,onBeforeAppear:Ci,onAppear:Ci,onAfterAppear:Ci,onAppearCancelled:Ci},x0=n=>{const e=n.subTree;return e.component?x0(e.component):e},fS={name:"BaseTransition",props:v0,setup(n,{slots:e}){const t=Gh(),i=uS();return()=>{const r=e.default&&b0(e.default(),!0),s=r&&r.length?y0(r):t.subTree?nr():void 0;if(!s)return;const o=yt(n),{mode:a}=o;if(i.isLeaving)return yf(s);const l=hu(s);if(!l)return yf(s);let c=Nd(l,o,i,t,f=>c=f);l.type!==Pn&&Al(l,c);let u=t.subTree&&hu(t.subTree);if(u&&u.type!==Pn&&!Zs(u,l)&&x0(t).type!==Pn){let f=Nd(u,o,i,t);if(Al(u,f),a==="out-in"&&l.type!==Pn)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},yf(s);a==="in-out"&&l.type!==Pn?f.delayLeave=(d,h,_)=>{const g=S0(i,u);g[String(u.key)]=u,d[Di]=()=>{h(),d[Di]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function y0(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Pn){e=t;break}}return e}const dS=fS;function S0(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Nd(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:h,onAfterLeave:_,onLeaveCancelled:g,onBeforeAppear:m,onAppear:p,onAfterAppear:x,onAppearCancelled:v}=e,y=String(n.key),b=S0(t,n),A=(U,S)=>{U&&Hi(U,i,9,S)},w=(U,S)=>{const P=S[1];A(U,S),Je(U)?U.every(F=>F.length<=1)&&P():U.length<=1&&P()},D={mode:o,persisted:a,beforeEnter(U){let S=l;if(!t.isMounted)if(s)S=m||l;else return;U[Di]&&U[Di](!0);const P=b[y];P&&Zs(n,P)&&P.el[Di]&&P.el[Di](),A(S,[U])},enter(U){if(b[y]===n)return;let S=c,P=u,F=f;if(!t.isMounted)if(s)S=p||c,P=x||u,F=v||f;else return;let te=!1;U[Ia]=Z=>{te||(te=!0,Z?A(F,[U]):A(P,[U]),D.delayedLeave&&D.delayedLeave(),U[Ia]=void 0)};const N=U[Ia].bind(null,!1);S?w(S,[U,N]):N()},leave(U,S){const P=String(n.key);if(U[Ia]&&U[Ia](!0),t.isUnmounting)return S();A(d,[U]);let F=!1;U[Di]=N=>{F||(F=!0,S(),N?A(g,[U]):A(_,[U]),U[Di]=void 0,b[P]===n&&delete b[P])};const te=U[Di].bind(null,!1);b[P]=n,h?w(h,[U,te]):te()},clone(U){const S=Nd(U,e,t,i,r);return r&&r(S),S}};return D}function yf(n){if(ju(n))return n=Ms(n),n.children=null,n}function hu(n){if(!ju(n))return qu(n.type)&&n.children?y0(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&st(t.default))return t.default()}}function Al(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;Al(qu(t.type)&&hu(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function b0(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===mt?(o.patchFlag&128&&r++,i=i.concat(b0(o.children,e,a))):(e||o.type!==Pn)&&i.push(a!=null?Ms(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Fn(n,e){return st(n)?un({name:n.name},e,{setup:n}):n}function M0(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function kp(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const pu=new WeakMap;function ll(n,e,t,i,r=!1){if(Je(n)){n.forEach((g,m)=>ll(g,e&&(Je(e)?e[m]:e),t,i,r));return}if(sa(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ll(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Qu(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Dt?a.refs={}:a.refs,f=a.setupState,d=yt(f),h=f===Dt?z_:g=>kp(u,g)?!1:bt(d,g),_=(g,m)=>!(m&&kp(u,m));if(c!=null&&c!==l){if(Bp(e),$t(c))u[c]=null,h(c)&&(f[c]=null);else if(Un(c)){const g=e;_(c,g.k)&&(c.value=null),g.k&&(u[g.k]=null)}}if(st(l))$l(l,a,12,[o,u]);else{const g=$t(l),m=Un(l);if(g||m){const p=()=>{if(n.f){const x=g?h(l)?f[l]:u[l]:_()||!n.k?l.value:u[n.k];if(r)Je(x)&&Ah(x,s);else if(Je(x))x.includes(s)||x.push(s);else if(g)u[l]=[s],h(l)&&(f[l]=u[l]);else{const v=[s];_(l,n.k)&&(l.value=v),n.k&&(u[n.k]=v)}}else g?(u[l]=o,h(l)&&(f[l]=o)):m&&(_(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const x=()=>{p(),pu.delete(n)};x.id=-1,pu.set(n,x),Qn(x,t)}else Bp(n),p()}}}function Bp(n){const e=pu.get(n);e&&(e.flags|=8,pu.delete(n))}Wu().requestIdleCallback;Wu().cancelIdleCallback;const sa=n=>!!n.type.__asyncLoader,ju=n=>n.type.__isKeepAlive;function hS(n,e){E0(n,"a",e)}function pS(n,e){E0(n,"da",e)}function E0(n,e,t=Ln){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ku(e,i,t),t){let r=t.parent;for(;r&&r.parent;)ju(r.parent.vnode)&&mS(i,e,t,r),r=r.parent}}function mS(n,e,t,i){const r=Ku(e,n,i,!0);Kr(()=>{Ah(i[e],r)},t)}function Ku(n,e,t=Ln,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Gr();const a=Yl(t),l=Hi(e,t,n,o);return a(),Vr(),l});return i?r.unshift(s):r.push(s),s}}const jr=n=>(e,t=Ln)=>{(!Ll||n==="sp")&&Ku(n,(...i)=>e(...i),t)},gS=jr("bm"),ir=jr("m"),w0=jr("bu"),_S=jr("u"),T0=jr("bum"),Kr=jr("um"),vS=jr("sp"),xS=jr("rtg"),yS=jr("rtc");function SS(n,e=Ln){Ku("ec",n,e)}const bS="components",A0=Symbol.for("v-ndc");function kh(n){return $t(n)?MS(bS,n,!1)||n:n||A0}function MS(n,e,t=!0,i=!1){const r=yn||Ln;if(r){const s=r.type;{const a=o1(s,!1);if(a&&(a===e||a===Kn(e)||a===Vu(Kn(e))))return s}const o=zp(r[n]||s[n],e)||zp(r.appContext[n],e);return!o&&i?s:o}}function zp(n,e){return n&&(n[e]||n[Kn(e)]||n[Vu(Kn(e))])}function sn(n,e,t,i){let r;const s=t,o=Je(n);if(o||$t(n)){const a=o&&ro(n);let l=!1,c=!1;a&&(l=!ki(n),c=Wr(n),n=$u(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?ga(tr(n[u])):tr(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(Mt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}function C0(n,e,t,i,r,s){if(t==null&&(t={}),yn.ce||yn.parent&&sa(yn.parent)&&yn.parent.ce){const c=t,u=Object.keys(c).length>0;return Re(),_n(mt,null,[Me("slot",c,i)],u?-2:64)}let o=n[e];o&&o._c&&(o._d=!1);const a=zr.length;Re();let l;try{const c=o&&R0(o(t)),u=t.key||s||c&&c.key;l=_n(mt,{key:(u&&!er(u)?u:`_${e}`)+(!c&&i?"_fb":"")},c||(i?i():[]),c&&n._===1?64:-2)}catch(c){for(let u=zr.length;u>a;u--)Hh();throw c}finally{o&&o._c&&(o._d=!0)}return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),l}function R0(n){return n.some(e=>Rl(e)?!(e.type===Pn||e.type===mt&&!R0(e.children)):!0)?n:null}const Od=n=>n?j0(n)?Qu(n):Od(n.parent):null,cl=un(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Od(n.parent),$root:n=>Od(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>L0(n),$forceUpdate:n=>n.f||(n.f=()=>{Fh(n.update)}),$nextTick:n=>n.n||(n.n=u0.bind(n.proxy)),$watch:n=>lS.bind(n)}),Sf=(n,e)=>n!==Dt&&!n.__isScriptSetup&&bt(n,e),ES={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Sf(i,e))return o[e]=1,i[e];if(r!==Dt&&bt(r,e))return o[e]=2,r[e];if(bt(s,e))return o[e]=3,s[e];if(t!==Dt&&bt(t,e))return o[e]=4,t[e];Fd&&(o[e]=0)}}const c=cl[e];let u,f;if(c)return e==="$attrs"&&Rn(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==Dt&&bt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,bt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Sf(r,e)?(r[e]=t,!0):i!==Dt&&bt(i,e)?(i[e]=t,!0):bt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==Dt&&a[0]!=="$"&&bt(n,a)||Sf(e,a)||bt(s,a)||bt(i,a)||bt(cl,a)||bt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:bt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Hp(n){return Je(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Fd=!0;function wS(n){const e=L0(n),t=n.proxy,i=n.ctx;Fd=!1,e.beforeCreate&&Gp(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:_,activated:g,deactivated:m,beforeDestroy:p,beforeUnmount:x,destroyed:v,unmounted:y,render:b,renderTracked:A,renderTriggered:w,errorCaptured:D,serverPrefetch:U,expose:S,inheritAttrs:P,components:F,directives:te,filters:N}=e;if(c&&TS(c,i,null),o)for(const X in o){const G=o[X];st(G)&&(i[X]=G.bind(t))}if(r){const X=r.call(t,t);Mt(X)&&(n.data=Ca(X))}if(Fd=!0,s)for(const X in s){const G=s[X],re=st(G)?G.bind(t,t):st(G.get)?G.get.bind(t,t):Zi,I=!st(G)&&st(G.set)?G.set.bind(t):Zi,ue=Dl({get:re,set:I});Object.defineProperty(i,X,{enumerable:!0,configurable:!0,get:()=>ue.value,set:_e=>ue.value=_e})}if(a)for(const X in a)P0(a[X],i,t,X);if(l){const X=st(l)?l.call(t):l;Reflect.ownKeys(X).forEach(G=>{sS(G,X[G])})}u&&Gp(u,n,"c");function W(X,G){Je(G)?G.forEach(re=>X(re.bind(t))):G&&X(G.bind(t))}if(W(gS,f),W(ir,d),W(w0,h),W(_S,_),W(hS,g),W(pS,m),W(SS,D),W(yS,A),W(xS,w),W(T0,x),W(Kr,y),W(vS,U),Je(S))if(S.length){const X=n.exposed||(n.exposed={});S.forEach(G=>{Object.defineProperty(X,G,{get:()=>t[G],set:re=>t[G]=re,enumerable:!0})})}else n.exposed||(n.exposed={});b&&n.render===Zi&&(n.render=b),P!=null&&(n.inheritAttrs=P),F&&(n.components=F),te&&(n.directives=te),U&&M0(n)}function TS(n,e,t=Zi){Je(n)&&(n=kd(n));for(const i in n){const r=n[i];let s;Mt(r)?"default"in r?s=Zc(r.from||i,r.default,!0):s=Zc(r.from||i):s=Zc(r),Un(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Gp(n,e,t){Hi(Je(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function P0(n,e,t,i){let r=i.includes(".")?_0(t,i):()=>t[i];if($t(n)){const s=e[n];st(s)&&al(r,s)}else if(st(n))al(r,n.bind(t));else if(Mt(n))if(Je(n))n.forEach(s=>P0(s,e,t,i));else{const s=st(n.handler)?n.handler.bind(t):e[n.handler];st(s)&&al(r,s,n)}}function L0(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>mu(l,c,o,!0)),mu(l,e,o)),Mt(e)&&s.set(e,l),l}function mu(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&mu(n,s,t,!0),r&&r.forEach(o=>mu(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=AS[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const AS={data:Vp,props:Wp,emits:Wp,methods:qa,computed:qa,beforeCreate:Hn,created:Hn,beforeMount:Hn,mounted:Hn,beforeUpdate:Hn,updated:Hn,beforeDestroy:Hn,beforeUnmount:Hn,destroyed:Hn,unmounted:Hn,activated:Hn,deactivated:Hn,errorCaptured:Hn,serverPrefetch:Hn,components:qa,directives:qa,watch:RS,provide:Vp,inject:CS};function Vp(n,e){return e?n?function(){return un(st(n)?n.call(this,this):n,st(e)?e.call(this,this):e)}:e:n}function CS(n,e){return qa(kd(n),kd(e))}function kd(n){if(Je(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Hn(n,e){return n?[...new Set([].concat(n,e))]:e}function qa(n,e){return n?un(Object.create(null),n,e):e}function Wp(n,e){return n?Je(n)&&Je(e)?[...new Set([...n,...e])]:un(Object.create(null),Hp(n),Hp(e??{})):e}function RS(n,e){if(!n)return e;if(!e)return n;const t=un(Object.create(null),n);for(const i in e)t[i]=Hn(n[i],e[i]);return t}function D0(){return{app:null,config:{isNativeTag:z_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let PS=0;function LS(n,e){return function(i,r=null){st(i)||(i=un({},i)),r!=null&&!Mt(r)&&(r=null);const s=D0(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:PS++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:l1,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&st(u.install)?(o.add(u),u.install(c,...f)):st(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||Me(i,r);return h.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(h,u,d),l=!0,c._container=u,u.__vue_app__=c,Qu(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Hi(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=oa;oa=c;try{return u()}finally{oa=f}}};return c}}let oa=null;const DS=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Kn(e)}Modifiers`]||n[`${xo(e)}Modifiers`];function IS(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Dt;let r=t;const s=e.startsWith("update:"),o=s&&DS(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>$t(u)?u.trim():u)),o.number&&(r=r.map(Rh)));let a,l=i[a=pf(e)]||i[a=pf(Kn(e))];!l&&s&&(l=i[a=pf(xo(e))]),l&&Hi(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Hi(c,n,6,r)}}const US=new WeakMap;function I0(n,e,t=!1){const i=t?US:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!st(n)){const l=c=>{const u=I0(c,e,!0);u&&(a=!0,un(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(Mt(n)&&i.set(n,null),null):(Je(s)?s.forEach(l=>o[l]=null):un(o,s),Mt(n)&&i.set(n,o),o)}function Zu(n,e){return!n||!zu(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),bt(n,e[0].toLowerCase()+e.slice(1))||bt(n,xo(e))||bt(n,e))}function Xp(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:_,inheritAttrs:g}=n,m=du(n);let p,x;try{if(t.shapeFlag&4){const y=r||i,b=y;p=cr(c.call(b,y,u,f,h,d,_)),x=a}else{const y=e;p=cr(y.length>1?y(f,{attrs:a,slots:o,emit:l}):y(f,null)),x=e.props?a:NS(a)}}catch(y){zr.length=0,Yu(y,n,1),p=Me(Pn)}let v=p;if(x&&g!==!1){const y=Object.keys(x),{shapeFlag:b}=v;y.length&&b&7&&(s&&y.some(Hu)&&(x=OS(x,s)),v=Ms(v,x,!1,!0))}if(t.dirs&&(v=Ms(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition){const y=qu(v.type)&&hu(v)||v;Al(y,t.transition)}return p=v,du(m),p}const NS=n=>{let e;for(const t in n)(t==="class"||t==="style"||zu(t))&&((e||(e={}))[t]=n[t]);return e},OS=(n,e)=>{const t={};for(const i in n)(!Hu(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function FS(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?$p(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(U0(o,i,d)&&!Zu(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?$p(i,o,c):!0:!!o;return!1}function $p(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(U0(e,n,s)&&!Zu(t,s))return!0}return!1}function U0(n,e,t){const i=n[t],r=e[t];return t==="style"&&Mt(i)&&Mt(r)?!Xu(i,r):i!==r}function kS({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const N0={},O0=()=>Object.create(N0),F0=n=>Object.getPrototypeOf(n)===N0;function BS(n,e,t,i=!1){const r={},s=O0();n.propsDefaults=Object.create(null),k0(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:qy(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function zS(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=yt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Zu(n.emitsOptions,d))continue;const h=e[d];if(l)if(bt(s,d))h!==s[d]&&(s[d]=h,c=!0);else{const _=Kn(d);r[_]=Bd(l,a,_,h,n,!1)}else h!==s[d]&&(s[d]=h,c=!0)}}}else{k0(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!bt(e,f)&&((u=xo(f))===f||!bt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Bd(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!bt(e,f))&&(delete s[f],c=!0)}c&&Ir(n.attrs,"set","")}function k0(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(rl(l))continue;const c=e[l];let u;r&&bt(r,u=Kn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Zu(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=yt(t),c=a||Dt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Bd(r,l,f,c[f],n,!bt(c,f))}}return o}function Bd(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=bt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&st(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Yl(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===xo(t))&&(i=!0))}return i}const HS=new WeakMap;function B0(n,e,t=!1){const i=t?HS:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!st(n)){const u=f=>{l=!0;const[d,h]=B0(f,e,!0);un(o,d),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return Mt(n)&&i.set(n,ia),ia;if(Je(s))for(let u=0;u<s.length;u++){const f=Kn(s[u]);Yp(f)&&(o[f]=Dt)}else if(s)for(const u in s){const f=Kn(u);if(Yp(f)){const d=s[u],h=o[f]=Je(d)||st(d)?{type:d}:un({},d),_=h.type;let g=!1,m=!0;if(Je(_))for(let p=0;p<_.length;++p){const x=_[p],v=st(x)&&x.name;if(v==="Boolean"){g=!0;break}else v==="String"&&(m=!1)}else g=st(_)&&_.name==="Boolean";h[0]=g,h[1]=m,(g||bt(h,"default"))&&a.push(f)}}const c=[o,a];return Mt(n)&&i.set(n,c),c}function Yp(n){return n[0]!=="$"&&!rl(n)}const Bh=n=>n==="_"||n==="_ctx"||n==="$stable",zh=n=>Je(n)?n.map(cr):[cr(n)],GS=(n,e,t)=>{if(e._n)return e;const i=Zt((...r)=>zh(e(...r)),t);return i._c=!1,i},z0=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Bh(r))continue;const s=n[r];if(st(s))e[r]=GS(r,s,i);else if(s!=null){const o=zh(s);e[r]=()=>o}}},H0=(n,e)=>{const t=zh(e);n.slots.default=()=>t},G0=(n,e,t)=>{for(const i in e)(t||!Bh(i))&&(n[i]=e[i])},VS=(n,e,t)=>{const i=n.slots=O0();if(n.vnode.shapeFlag&32){const r=e._;r?(G0(i,e,t),t&&W_(i,"_",r,!0)):z0(e,i)}else e&&H0(n,e)},WS=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=Dt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:G0(r,e,t):(s=!e.$stable,z0(e,r)),o=e}else e&&(H0(n,e),o={default:1});if(s)for(const a in r)!Bh(a)&&o[a]==null&&delete r[a]},Qn=jS;function XS(n){return $S(n)}function $S(n,e){const t=Wu();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=Zi,insertStaticContent:_}=n,g=(M,O,B,ie=null,q=null,L=null,oe=void 0,ae=null,ce=!!O.dynamicChildren)=>{if(M===O)return;M&&!Zs(M,O)&&(ie=De(M),_e(M,q,L,!0),M=null),O.patchFlag===-2&&(ce=!1,O.dynamicChildren=null);const{type:T,ref:E,shapeFlag:k}=O;switch(T){case Ju:m(M,O,B,ie);break;case Pn:p(M,O,B,ie);break;case ul:M==null&&x(O,B,ie,oe);break;case mt:F(M,O,B,ie,q,L,oe,ae,ce);break;default:k&1?b(M,O,B,ie,q,L,oe,ae,ce):k&6?te(M,O,B,ie,q,L,oe,ae,ce):(k&64||k&128)&&T.process(M,O,B,ie,q,L,oe,ae,ce,rt)}E!=null&&q?ll(E,M&&M.ref,L,O||M,!O):E==null&&M&&M.ref!=null&&ll(M.ref,null,L,M,!0)},m=(M,O,B,ie)=>{if(M==null)i(O.el=a(O.children),B,ie);else{const q=O.el=M.el;O.children!==M.children&&c(q,O.children)}},p=(M,O,B,ie)=>{M==null?i(O.el=l(O.children||""),B,ie):O.el=M.el},x=(M,O,B,ie)=>{[M.el,M.anchor]=_(M.children,O,B,ie,M.el,M.anchor)},v=({el:M,anchor:O},B,ie)=>{let q;for(;M&&M!==O;)q=d(M),i(M,B,ie),M=q;i(O,B,ie)},y=({el:M,anchor:O})=>{let B;for(;M&&M!==O;)B=d(M),r(M),M=B;r(O)},b=(M,O,B,ie,q,L,oe,ae,ce)=>{if(O.type==="svg"?oe="svg":O.type==="math"&&(oe="mathml"),M==null)A(O,B,ie,q,L,oe,ae,ce);else{const T=M.el&&M.el._isVueCE?M.el:null;try{T&&T._beginPatch(),U(M,O,q,L,oe,ae,ce)}finally{T&&T._endPatch()}}},A=(M,O,B,ie,q,L,oe,ae)=>{let ce,T;const{props:E,shapeFlag:k,transition:$,dirs:K}=M;if(ce=M.el=o(M.type,L,E&&E.is,E),k&8?u(ce,M.children):k&16&&D(M.children,ce,null,ie,q,bf(M,L),oe,ae),K&&Ds(M,null,ie,"created"),w(ce,M,M.scopeId,oe,ie),E){for(const pe in E)pe!=="value"&&!rl(pe)&&s(ce,pe,null,E[pe],L,ie);"value"in E&&s(ce,"value",null,E.value,L),(T=E.onVnodeBeforeMount)&&rr(T,ie,M)}K&&Ds(M,null,ie,"beforeMount");const se=YS(q,$);se&&$.beforeEnter(ce),i(ce,O,B),((T=E&&E.onVnodeMounted)||se||K)&&Qn(()=>{try{T&&rr(T,ie,M),se&&$.enter(ce),K&&Ds(M,null,ie,"mounted")}finally{}},q)},w=(M,O,B,ie,q)=>{if(B&&h(M,B),ie)for(let L=0;L<ie.length;L++)h(M,ie[L]);if(q){let L=q.subTree;if(O===L||$0(L.type)&&(L.ssContent===O||L.ssFallback===O)){const oe=q.vnode;w(M,oe,oe.scopeId,oe.slotScopeIds,q.parent)}}},D=(M,O,B,ie,q,L,oe,ae,ce=0)=>{for(let T=ce;T<M.length;T++){const E=M[T]=ae?Lr(M[T]):cr(M[T]);g(null,E,O,B,ie,q,L,oe,ae)}},U=(M,O,B,ie,q,L,oe)=>{const ae=O.el=M.el;let{patchFlag:ce,dynamicChildren:T,dirs:E}=O;ce|=M.patchFlag&16;const k=M.props||Dt,$=O.props||Dt;let K;if(B&&Is(B,!1),(K=$.onVnodeBeforeUpdate)&&rr(K,B,O,M),E&&Ds(O,M,B,"beforeUpdate"),B&&Is(B,!0),T&&(!M.dynamicChildren||M.dynamicChildren.length!==T.length)&&(ce=0,oe=!1,T=null),(k.innerHTML&&$.innerHTML==null||k.textContent&&$.textContent==null)&&u(ae,""),T?S(M.dynamicChildren,T,ae,B,ie,bf(O,q),L):oe||G(M,O,ae,null,B,ie,bf(O,q),L,!1),ce>0){if(ce&16)P(ae,k,$,B,q);else if(ce&2&&k.class!==$.class&&s(ae,"class",null,$.class,q),ce&4&&s(ae,"style",k.style,$.style,q),ce&8){const se=O.dynamicProps;for(let pe=0;pe<se.length;pe++){const xe=se[pe],fe=k[xe],he=$[xe];(he!==fe||xe==="value")&&s(ae,xe,fe,he,q,B)}}ce&1&&M.children!==O.children&&u(ae,O.children)}else!oe&&T==null&&P(ae,k,$,B,q);((K=$.onVnodeUpdated)||E)&&Qn(()=>{K&&rr(K,B,O,M),E&&Ds(O,M,B,"updated")},ie)},S=(M,O,B,ie,q,L,oe)=>{for(let ae=0;ae<O.length;ae++){const ce=M[ae],T=O[ae],E=ce.el&&(ce.type===mt||!Zs(ce,T)||ce.shapeFlag&198)?f(ce.el):B;g(ce,T,E,null,ie,q,L,oe,!0)}},P=(M,O,B,ie,q)=>{if(O!==B){if(O!==Dt)for(const L in O)!rl(L)&&!(L in B)&&s(M,L,O[L],null,q,ie);for(const L in B){if(rl(L))continue;const oe=B[L],ae=O[L];oe!==ae&&L!=="value"&&s(M,L,ae,oe,q,ie)}"value"in B&&s(M,"value",O.value,B.value,q)}},F=(M,O,B,ie,q,L,oe,ae,ce)=>{const T=O.el=M?M.el:a(""),E=O.anchor=M?M.anchor:a("");let{patchFlag:k,dynamicChildren:$,slotScopeIds:K}=O;K&&(ae=ae?ae.concat(K):K),M==null?(i(T,B,ie),i(E,B,ie),D(O.children||[],B,E,q,L,oe,ae,ce)):k>0&&k&64&&$&&M.dynamicChildren&&M.dynamicChildren.length===$.length?(S(M.dynamicChildren,$,B,q,L,oe,ae),(O.key!=null||q&&O===q.subTree)&&V0(M,O,!0)):G(M,O,B,E,q,L,oe,ae,ce)},te=(M,O,B,ie,q,L,oe,ae,ce)=>{O.slotScopeIds=ae,M==null?O.shapeFlag&512?q.ctx.activate(O,B,ie,oe,ce):N(O,B,ie,q,L,oe,ce):Z(M,O,ce)},N=(M,O,B,ie,q,L,oe)=>{const ae=M.component=t1(M,ie,q);if(ju(M)&&(ae.ctx.renderer=rt),n1(ae,!1,oe),ae.asyncDep){if(q&&q.registerDep(ae,W,oe),!M.el){const ce=ae.subTree=Me(Pn);p(null,ce,O,B),M.placeholder=ce.el}}else W(ae,M,O,B,q,L,oe)},Z=(M,O,B)=>{const ie=O.component=M.component;if(FS(M,O,B))if(ie.asyncDep&&!ie.asyncResolved){X(ie,O,B);return}else ie.next=O,ie.update();else O.el=M.el,ie.vnode=O},W=(M,O,B,ie,q,L,oe)=>{const ae=()=>{if(M.isMounted){let{next:k,bu:$,u:K,parent:se,vnode:pe}=M;{const le=W0(M);if(le){k&&(k.el=pe.el,X(M,k,oe)),le.asyncDep.then(()=>{Qn(()=>{M.isUnmounted||T()},q)});return}}let xe=k,fe;Is(M,!1),k?(k.el=pe.el,X(M,k,oe)):k=pe,$&&Kc($),(fe=k.props&&k.props.onVnodeBeforeUpdate)&&rr(fe,se,k,pe),Is(M,!0);const he=Xp(M),Ve=M.subTree;M.subTree=he,g(Ve,he,f(Ve.el),De(Ve),M,q,L),k.el=he.el,xe===null&&kS(M,he.el),K&&Qn(K,q),(fe=k.props&&k.props.onVnodeUpdated)&&Qn(()=>rr(fe,se,k,pe),q)}else{let k;const{el:$,props:K}=O,{bm:se,m:pe,parent:xe,root:fe,type:he}=M,Ve=sa(O);Is(M,!1),se&&Kc(se),!Ve&&(k=K&&K.onVnodeBeforeMount)&&rr(k,xe,O),Is(M,!0);{fe.ce&&fe.ce._hasShadowRoot()&&fe.ce._injectChildStyle(he,M.parent?M.parent.type:void 0);const le=M.subTree=Xp(M);g(null,le,B,ie,M,q,L),O.el=le.el}if(pe&&Qn(pe,q),!Ve&&(k=K&&K.onVnodeMounted)){const le=O;Qn(()=>rr(k,xe,le),q)}(O.shapeFlag&256||xe&&sa(xe.vnode)&&xe.vnode.shapeFlag&256)&&M.a&&Qn(M.a,q),M.isMounted=!0,O=B=ie=null}};M.scope.on();const ce=M.effect=new q_(ae);M.scope.off();const T=M.update=ce.run.bind(ce),E=M.job=ce.runIfDirty.bind(ce);E.i=M,E.id=M.uid,ce.scheduler=()=>Fh(E),Is(M,!0),T()},X=(M,O,B)=>{O.component=M;const ie=M.vnode.props;M.vnode=O,M.next=null,zS(M,O.props,ie,B),WS(M,O.children,B),Gr(),Fp(M),Vr()},G=(M,O,B,ie,q,L,oe,ae,ce=!1)=>{const T=M&&M.children,E=M?M.shapeFlag:0,k=O.children,{patchFlag:$,shapeFlag:K}=O;if($>0){if($&128){I(T,k,B,ie,q,L,oe,ae,ce);return}else if($&256){re(T,k,B,ie,q,L,oe,ae,ce);return}}K&8?(E&16&&ve(T,q,L),k!==T&&u(B,k)):E&16?K&16?I(T,k,B,ie,q,L,oe,ae,ce):ve(T,q,L,!0):(E&8&&u(B,""),K&16&&D(k,B,ie,q,L,oe,ae,ce))},re=(M,O,B,ie,q,L,oe,ae,ce)=>{M=M||ia,O=O||ia;const T=M.length,E=O.length,k=Math.min(T,E);let $;for($=0;$<k;$++){const K=O[$]=ce?Lr(O[$]):cr(O[$]);g(M[$],K,B,null,q,L,oe,ae,ce)}T>E?ve(M,q,L,!0,!1,k):D(O,B,ie,q,L,oe,ae,ce,k)},I=(M,O,B,ie,q,L,oe,ae,ce)=>{let T=0;const E=O.length;let k=M.length-1,$=E-1;for(;T<=k&&T<=$;){const K=M[T],se=O[T]=ce?Lr(O[T]):cr(O[T]);if(Zs(K,se))g(K,se,B,null,q,L,oe,ae,ce);else break;T++}for(;T<=k&&T<=$;){const K=M[k],se=O[$]=ce?Lr(O[$]):cr(O[$]);if(Zs(K,se))g(K,se,B,null,q,L,oe,ae,ce);else break;k--,$--}if(T>k){if(T<=$){const K=$+1,se=K<E?O[K].el:ie;for(;T<=$;)g(null,O[T]=ce?Lr(O[T]):cr(O[T]),B,se,q,L,oe,ae,ce),T++}}else if(T>$)for(;T<=k;)_e(M[T],q,L,!0),T++;else{const K=T,se=T,pe=new Map;for(T=se;T<=$;T++){const Le=O[T]=ce?Lr(O[T]):cr(O[T]);Le.key!=null&&pe.set(Le.key,T)}let xe,fe=0;const he=$-se+1;let Ve=!1,le=0;const xt=new Array(he);for(T=0;T<he;T++)xt[T]=0;for(T=K;T<=k;T++){const Le=M[T];if(fe>=he){_e(Le,q,L,!0);continue}let Ce;if(Le.key!=null)Ce=pe.get(Le.key);else for(xe=se;xe<=$;xe++)if(xt[xe-se]===0&&Zs(Le,O[xe])){Ce=xe;break}Ce===void 0?_e(Le,q,L,!0):(xt[Ce-se]=T+1,Ce>=le?le=Ce:Ve=!0,g(Le,O[Ce],B,null,q,L,oe,ae,ce),fe++)}const Ke=Ve?qS(xt):ia;for(xe=Ke.length-1,T=he-1;T>=0;T--){const Le=se+T,Ce=O[Le],Ue=O[Le+1],tt=Le+1<E?Ue.el||X0(Ue):ie;xt[T]===0?g(null,Ce,B,tt,q,L,oe,ae,ce):Ve&&(xe<0||T!==Ke[xe]?ue(Ce,B,tt,2):xe--)}}},ue=(M,O,B,ie,q=null)=>{const{el:L,type:oe,transition:ae,children:ce,shapeFlag:T}=M;if(T&6){ue(M.component.subTree,O,B,ie);return}if(T&128){M.suspense.move(O,B,ie);return}if(T&64){oe.move(M,O,B,rt);return}if(oe===mt){i(L,O,B);for(let k=0;k<ce.length;k++)ue(ce[k],O,B,ie);i(M.anchor,O,B);return}if(oe===ul){v(M,O,B);return}if(ie!==2&&T&1&&ae)if(ie===0)ae.persisted&&!L[Di]?i(L,O,B):(ae.beforeEnter(L),i(L,O,B),Qn(()=>ae.enter(L),q));else{const{leave:k,delayLeave:$,afterLeave:K}=ae,se=()=>{M.ctx.isUnmounted?r(L):i(L,O,B)},pe=()=>{const xe=L._isLeaving||!!L[Di];L._isLeaving&&L[Di](!0),ae.persisted&&!xe?se():k(L,()=>{se(),K&&K()})};$?$(L,se,pe):pe()}else i(L,O,B)},_e=(M,O,B,ie=!1,q=!1)=>{const{type:L,props:oe,ref:ae,children:ce,dynamicChildren:T,shapeFlag:E,patchFlag:k,dirs:$,cacheIndex:K,memo:se}=M;if(k===-2&&(q=!1),ae!=null&&(Gr(),ll(ae,null,B,M,!0),Vr()),K!=null&&(O.renderCache[K]=void 0),E&256){O.ctx.deactivate(M);return}const pe=E&1&&$,xe=!sa(M);let fe;if(xe&&(fe=oe&&oe.onVnodeBeforeUnmount)&&rr(fe,O,M),E&6)de(M.component,B,ie);else{if(E&128){M.suspense.unmount(B,ie);return}pe&&Ds(M,null,O,"beforeUnmount"),E&64?M.type.remove(M,O,B,rt,ie):T&&!T.hasOnce&&(L!==mt||k>0&&k&64)?ve(T,O,B,!1,!0):(L===mt&&k&384||!q&&E&16)&&ve(ce,O,B),ie&&Xe(M)}const he=se!=null&&K==null;(xe&&(fe=oe&&oe.onVnodeUnmounted)||pe||he)&&Qn(()=>{fe&&rr(fe,O,M),pe&&Ds(M,null,O,"unmounted"),he&&(M.el=null)},B)},Xe=M=>{const{type:O,el:B,anchor:ie,transition:q}=M;if(O===mt){J(B,ie);return}if(O===ul){y(M);return}const L=()=>{r(B),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(M.shapeFlag&1&&q&&!q.persisted){const{leave:oe,delayLeave:ae}=q,ce=()=>oe(B,L);ae?ae(M.el,L,ce):ce()}else L()},J=(M,O)=>{let B;for(;M!==O;)B=d(M),r(M),M=B;r(O)},de=(M,O,B)=>{const{bum:ie,scope:q,job:L,subTree:oe,um:ae,m:ce,a:T}=M;qp(ce),qp(T),ie&&Kc(ie),q.stop(),L&&(L.flags|=8,_e(oe,M,O,B)),ae&&Qn(ae,O),Qn(()=>{M.isUnmounted=!0},O)},ve=(M,O,B,ie=!1,q=!1,L=0)=>{for(let oe=L;oe<M.length;oe++)_e(M[oe],O,B,ie,q)},De=M=>{if(M.shapeFlag&6)return De(M.component.subTree);if(M.shapeFlag&128)return M.suspense.next();const O=d(M.anchor||M.el),B=O&&O[cS];return B?d(B):O};let Pe=!1;const Ee=(M,O,B)=>{let ie;M==null?O._vnode&&(_e(O._vnode,null,null,!0),ie=O._vnode.component):g(O._vnode||null,M,O,null,null,null,B),O._vnode=M,Pe||(Pe=!0,Fp(ie),h0(),Pe=!1)},rt={p:g,um:_e,m:ue,r:Xe,mt:N,mc:D,pc:G,pbc:S,n:De,o:n};return{render:Ee,hydrate:void 0,createApp:LS(Ee)}}function bf({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Is({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function YS(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function V0(n,e,t=!1){const i=n.children,r=e.children;if(Je(i)&&Je(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Lr(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&V0(o,a)),a.type===Ju&&(a.patchFlag===-1&&(a=r[s]=Lr(a)),a.el=o.el),a.type===Pn&&!a.el&&(a.el=o.el)}}function qS(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function W0(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:W0(e)}function qp(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function X0(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?X0(e.subTree):null}const $0=n=>n.__isSuspense;function jS(n,e){e&&e.pendingBranch?Je(n)?e.effects.push(...n):e.effects.push(n):d0(n)}const mt=Symbol.for("v-fgt"),Ju=Symbol.for("v-txt"),Pn=Symbol.for("v-cmt"),ul=Symbol.for("v-stc"),zr=[];let Si=null;function Re(n=!1){zr.push(Si=n?null:[])}function Hh(){zr.pop(),Si=zr[zr.length-1]||null}let Cl=1;function gu(n,e=!1){Cl+=n,n<0&&Si&&e&&(Si.hasOnce=!0)}function Y0(n){return n.dynamicChildren=Cl>0?Si||ia:null,Hh(),Cl>0&&Si&&Si.push(n),n}function We(n,e,t,i,r,s){return Y0(C(n,e,t,i,r,s,!0))}function _n(n,e,t,i,r){return Y0(Me(n,e,t,i,r,!0))}function Rl(n){return n?n.__v_isVNode===!0:!1}function Zs(n,e){return n.type===e.type&&n.key===e.key}const q0=({key:n})=>n??null,Jc=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?$t(n)||Un(n)||st(n)?{i:yn,r:n,k:e,f:!!t}:n:null);function C(n,e=null,t=null,i=0,r=null,s=n===mt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&q0(e),ref:e&&Jc(e),scopeId:m0,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:yn};return a?(vu(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=$t(t)?8:16),Cl>0&&!o&&Si&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Si.push(l),l}const Me=KS;function KS(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===A0)&&(n=Pn),Rl(n)){const a=Ms(n,e,!0);return t&&vu(a,t),Cl>0&&!s&&Si&&(a.shapeFlag&6?Si[Si.indexOf(n)]=a:Si.push(a)),a.patchFlag=-2,a}if(a1(n)&&(n=n.__vccOpts),e){e=ZS(e);let{class:a,style:l}=e;a&&!$t(a)&&(e.class=Xt(a)),Mt(l)&&(Oh(l)&&!Je(l)&&(l=un({},l)),e.style=ri(l))}const o=$t(n)?1:$0(n)?128:qu(n)?64:Mt(n)?4:st(n)?2:0;return C(n,e,t,i,r,o,s,!0)}function ZS(n){return n?Oh(n)||F0(n)?un({},n):n:null}function Ms(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?JS(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&q0(c),ref:e&&e.ref?t&&s?Je(s)?s.concat(Jc(e)):[s,Jc(e)]:Jc(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==mt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ms(n.ssContent),ssFallback:n.ssFallback&&Ms(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Al(u,l.clone(u)),u}function Wt(n=" ",e=0){return Me(Ju,null,n,e)}function _u(n,e){const t=Me(ul,null,n);return t.staticCount=e,t}function nr(n="",e=!1){return e?(Re(),_n(Pn,null,n)):Me(Pn,null,n)}function cr(n){return n==null||typeof n=="boolean"?Me(Pn):Je(n)?Me(mt,null,n.slice()):Rl(n)?Lr(n):Me(Ju,null,String(n))}function Lr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ms(n)}function vu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Je(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),vu(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!F0(e)?e._ctx=yn:r===3&&yn&&(yn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(st(e)){if(i&65){vu(n,{default:e});return}e={default:e,_ctx:yn},t=32}else e=String(e),i&64?(t=16,e=[Wt(e)]):t=8;n.children=e,n.shapeFlag|=t}function JS(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Xt([e.class,i.class]));else if(r==="style")e.style=ri([e.style,i.style]);else if(zu(r)){const s=e[r],o=i[r];o&&s!==o&&!(Je(s)&&s.includes(o))?e[r]=s?[].concat(s,o):o:o==null&&s==null&&!Hu(r)&&(e[r]=o)}else r!==""&&(e[r]=i[r])}return e}function rr(n,e,t,i=null){Hi(n,e,7,[t,i])}const QS=D0();let e1=0;function t1(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||QS,s={uid:e1++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ry(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:B0(i,r),emitsOptions:I0(i,r),emit:null,emitted:null,propsDefaults:Dt,inheritAttrs:i.inheritAttrs,ctx:Dt,data:Dt,props:Dt,attrs:Dt,slots:Dt,refs:Dt,setupState:Dt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=IS.bind(null,s),n.ce&&n.ce(s),s}let Ln=null;const Gh=()=>Ln||yn;let xu,Pl;{const n=Wu(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};xu=e("__VUE_INSTANCE_SETTERS__",t=>Ln=t),Pl=e("__VUE_SSR_SETTERS__",t=>Ll=t)}const Yl=n=>{const e=Ln;return xu(n),n.scope.on(),()=>{n.scope.off(),xu(e)}},jp=()=>{Ln&&Ln.scope.off(),xu(null)};function j0(n){return n.vnode.shapeFlag&4}let Ll=!1;function n1(n,e=!1,t=!1){e&&Pl(e);const{props:i,children:r}=n.vnode,s=j0(n);BS(n,i,s,e),VS(n,r,t||e);const o=s?i1(n,e):void 0;return e&&Pl(!1),o}function i1(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,ES);const{setup:i}=t;if(i){Gr();const r=n.setupContext=i.length>1?s1(n):null,s=Yl(n),o=$l(i,n,0,[n.props,r]),a=H_(o);if(Vr(),s(),(a||n.sp)&&!sa(n)&&M0(n),a){if(o.then(jp,jp),e)return o.then(l=>{Pl(!0);try{Kp(n,l,e)}finally{Pl(!1)}}).catch(l=>{Yu(l,n,0)});n.asyncDep=o}else Kp(n,o)}else K0(n)}function Kp(n,e,t){st(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Mt(e)&&(n.setupState=l0(e)),K0(n)}function K0(n,e,t){const i=n.type;n.render||(n.render=i.render||Zi);{const r=Yl(n);Gr();try{wS(n)}finally{Vr(),r()}}}const r1={get(n,e){return Rn(n,"get",""),n[e]}};function s1(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,r1),slots:n.slots,emit:n.emit,expose:e}}function Qu(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(l0(jy(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in cl)return cl[t](n)},has(e,t){return t in e||t in cl}})):n.proxy}function o1(n,e=!0){return st(n)?n.displayName||n.name:n.name||e&&n.__name}function a1(n){return st(n)&&"__vccOpts"in n}const Dl=(n,e)=>eS(n,e,Ll);function zd(n,e,t){try{gu(-1);const i=arguments.length;return i===2?Mt(e)&&!Je(e)?Rl(e)?Me(n,null,[e]):Me(n,e):Me(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Rl(t)&&(t=[t]),Me(n,e,t))}finally{gu(1)}}const l1="3.5.42";/**
* @vue/runtime-dom v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Hd;const Zp=typeof window<"u"&&window.trustedTypes;if(Zp)try{Hd=Zp.createPolicy("vue",{createHTML:n=>n})}catch{}const Z0=Hd?n=>Hd.createHTML(n):n=>n,c1="http://www.w3.org/2000/svg",u1="http://www.w3.org/1998/Math/MathML",Rr=typeof document<"u"?document:null,Jp=Rr&&Rr.createElement("template"),f1={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Rr.createElementNS(c1,n):e==="mathml"?Rr.createElementNS(u1,n):t?Rr.createElement(n,{is:t}):Rr.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Rr.createTextNode(n),createComment:n=>Rr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Rr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Jp.innerHTML=Z0(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Jp.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Jr="transition",Ua="animation",Il=Symbol("_vtc"),J0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},d1=un({},v0,J0),h1=n=>(n.displayName="Transition",n.props=d1,n),Vh=h1((n,{slots:e})=>zd(dS,p1(n),e)),Us=(n,e=[])=>{Je(n)?n.forEach(t=>t(...e)):n&&n(...e)},Qp=n=>n?Je(n)?n.some(e=>e.length>1):n.length>1:!1;function p1(n){const e={};for(const F in n)F in J0||(e[F]=n[F]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=n,_=m1(r),g=_&&_[0],m=_&&_[1],{onBeforeEnter:p,onEnter:x,onEnterCancelled:v,onLeave:y,onLeaveCancelled:b,onBeforeAppear:A=p,onAppear:w=x,onAppearCancelled:D=v}=e,U=(F,te,N,Z)=>{F._enterCancelled=Z,Ns(F,te?u:a),Ns(F,te?c:o),N&&N()},S=(F,te)=>{F._isLeaving=!1,Ns(F,f),Ns(F,h),Ns(F,d),te&&te()},P=F=>(te,N)=>{const Z=F?w:x,W=()=>U(te,F,N);Us(Z,[te,W]),em(()=>{Ns(te,F?l:s),Sr(te,F?u:a),Qp(Z)||tm(te,i,g,W)})};return un(e,{onBeforeEnter(F){Us(p,[F]),Sr(F,s),Sr(F,o)},onBeforeAppear(F){Us(A,[F]),Sr(F,l),Sr(F,c)},onEnter:P(!1),onAppear:P(!0),onLeave(F,te){F._isLeaving=!0;const N=()=>S(F,te);Sr(F,f),F._enterCancelled?(Sr(F,d),rm(F)):(rm(F),Sr(F,d)),em(()=>{F._isLeaving&&(Ns(F,f),Sr(F,h),Qp(y)||tm(F,i,m,N))}),Us(y,[F,N])},onEnterCancelled(F){U(F,!1,void 0,!0),Us(v,[F])},onAppearCancelled(F){U(F,!0,void 0,!0),Us(D,[F])},onLeaveCancelled(F){S(F),Us(b,[F])}})}function m1(n){if(n==null)return null;if(Mt(n))return[Mf(n.enter),Mf(n.leave)];{const e=Mf(n);return[e,e]}}function Mf(n){return yy(n)}function Sr(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Il]||(n[Il]=new Set)).add(e)}function Ns(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Il];t&&(t.delete(e),t.size||(n[Il]=void 0))}function em(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let g1=0;function tm(n,e,t,i){const r=n._endId=++g1,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=_1(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,d),s()},d=h=>{h.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,d)}function _1(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),r=i(`${Jr}Delay`),s=i(`${Jr}Duration`),o=nm(r,s),a=i(`${Ua}Delay`),l=i(`${Ua}Duration`),c=nm(a,l);let u=null,f=0,d=0;e===Jr?o>0&&(u=Jr,f=o,d=s.length):e===Ua?c>0&&(u=Ua,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?Jr:Ua:null,d=u?u===Jr?s.length:l.length:0);const h=u===Jr&&/\b(?:transform|all)(?:,|$)/.test(i(`${Jr}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:h}}function nm(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>im(t)+im(n[i])))}function im(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function rm(n){return(n?n.ownerDocument:document).body.offsetHeight}function v1(n,e,t){const i=n[Il];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const sm=Symbol("_vod"),x1=Symbol("_vsh"),Q0=Symbol("");function y1(n){const e=Gh();if(!e)return;const t=e.ut=(r=n(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(s=>yu(s,r))},i=()=>{const r=n(e.proxy);e.ce?yu(e.ce,r):Gd(e.subTree,r),t(r)};w0(()=>{d0(i)}),ir(()=>{al(i,Zi,{flush:"post"});const r=new MutationObserver(i);r.observe(e.subTree.el.parentNode,{childList:!0}),Kr(()=>r.disconnect())})}function Gd(n,e){if(n.shapeFlag&128){const t=n.suspense;n=t.activeBranch,t.pendingBranch&&!t.isHydrating&&t.effects.push(()=>{Gd(t.activeBranch,e)})}for(;n.component;)n=n.component.subTree;if(n.shapeFlag&1&&n.el)yu(n.el,e);else if(n.type===mt)n.children.forEach(t=>Gd(t,e));else if(n.type===ul){let{el:t,anchor:i}=n;for(;t&&(yu(t,e),t!==i);)t=t.nextSibling}}function yu(n,e){if(n.nodeType===1){const t=n.style;let i="";for(const r in e){const s=Cy(e[r]);t.setProperty(`--${r}`,s),i+=`--${r}: ${s};`}t[Q0]=i}}const S1=/(?:^|;)\s*display\s*:/;function b1(n,e,t){const i=n.style,r=$t(t);let s=!1;if(t&&!r){if(e)if($t(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ja(i,a,"")}else for(const o in e)t[o]==null&&ja(i,o,"");for(const o in t){o==="display"&&(s=!0);const a=t[o];a!=null?E1(n,o,!$t(e)&&e?e[o]:void 0,a)||ja(i,o,a):ja(i,o,"")}}else if(r){if(e!==t){const o=i[Q0];o&&(t+=";"+o),i.cssText=t,s=S1.test(t)}}else e&&n.removeAttribute("style");sm in n&&(n[sm]=s?i.display:"",n[x1]&&(i.display="none"))}const ic=/\s*!important$/;function ja(n,e,t){if(Je(t))t.forEach(i=>ja(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))ic.test(t)?n.setProperty(e,t.replace(ic,""),"important"):n.setProperty(e,t);else{const i=M1(n,e);ic.test(t)?n.setProperty(xo(i),t.replace(ic,""),"important"):n[i]=t}}const om=["Webkit","Moz","ms"],Ef={};function M1(n,e){const t=Ef[e];if(t)return t;let i=Kn(e);if(i!=="filter"&&i in n)return Ef[e]=i;i=Vu(i);for(let r=0;r<om.length;r++){const s=om[r]+i;if(s in n)return Ef[e]=s}return e}function E1(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&$t(i)&&t===i}const am="http://www.w3.org/1999/xlink";function lm(n,e,t,i,r,s=Ty(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(am,e.slice(6,e.length)):n.setAttributeNS(am,e,t):t==null||s&&!X_(t)?n.removeAttribute(e):n.setAttribute(e,s?"":er(t)?String(t):t)}function cm(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Z0(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=X_(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function jo(n,e,t,i){n.addEventListener(e,t,i)}function w1(n,e,t,i){n.removeEventListener(e,t,i)}const um=Symbol("_vei");function T1(n,e,t,i,r=null){const s=n[um]||(n[um]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=R1(e);if(i){const c=s[e]=D1(i,r);jo(n,a,c,l)}else o&&(w1(n,a,o,l),s[e]=void 0)}}const A1=/(Once|Passive|Capture)$/,C1=/^on:?(?:Once|Passive|Capture)$/;function R1(n){let e,t;for(;(t=n.match(A1))&&!C1.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):xo(n.slice(2)),e]}let wf=0;const P1=Promise.resolve(),L1=()=>wf||(P1.then(()=>wf=0),wf=Date.now());function D1(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const r=t.value;if(Je(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const o=r.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Hi(c,e,5,a)}}else Hi(r,e,5,[i])};return t.value=n,t.attached=L1(),t}const fm=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,I1=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?v1(n,i,o):e==="style"?b1(n,t,i):zu(e)?Hu(e)||T1(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):U1(n,e,i,o))?(cm(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&lm(n,e,i,o,s,e!=="value")):n._isVueCE&&(N1(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!$t(i)))?cm(n,Kn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),lm(n,e,i,o))};function U1(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&fm(e)&&st(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return fm(e)&&$t(t)?!1:e in n}function N1(n,e){const t=n._def.props;if(!t)return!1;const i=Kn(e);return Array.isArray(t)?t.some(r=>Kn(r)===i):Object.keys(t).some(r=>Kn(r)===i)}const dm=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Je(e)?t=>Kc(e,t):e};function O1(n){n.target.composing=!0}function hm(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const rc=Symbol("_assign"),sc=Symbol("_initialValue");function Tf(n,e,t){return e&&(n=n.trim()),t&&(n=Rh(n)),n}const Af={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n.parentNode&&(n.type==="text"?n[sc]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[sc]=n.defaultValue.replace(/\r\n?/g,`
`))),n[rc]=dm(r);const s=i||r.props&&r.props.type==="number";jo(n,e?"change":"input",o=>{o.target.composing||n[rc](Tf(n.value,t,s))}),(t||s)&&jo(n,"change",()=>{n.value=Tf(n.value,t,s)}),e||(jo(n,"compositionstart",O1),jo(n,"compositionend",hm),jo(n,"change",hm))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const r=e??"",s=n[sc];delete n[sc],s!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==s?n[rc](Tf(n.value,t,i)):n.value=r},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[rc]=dm(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?Rh(n.value):n.value,l=e??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l)}},F1=["ctrl","shift","alt","meta"],k1={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>F1.some(t=>n[`${t}Key`]&&!e.includes(t))},Pi=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=k1[e[o]];if(a&&a(r,e))return}return n(r,...s)})},B1=un({patchProp:I1},f1);let pm;function z1(){return pm||(pm=XS(B1))}const H1=(...n)=>{const e=z1().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=V1(i);if(!r)return;const s=e._component;!st(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,G1(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function G1(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function V1(n){return $t(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wh="162",W1=0,mm=1,X1=2,ev=1,$1=2,Ar=3,Xr=0,Zn=1,Nr=2,gs=0,aa=1,fl=2,gm=3,_m=4,Y1=5,Js=100,q1=101,j1=102,vm=103,xm=104,K1=200,Z1=201,J1=202,Q1=203,Vd=204,Wd=205,eb=206,tb=207,nb=208,ib=209,rb=210,sb=211,ob=212,ab=213,lb=214,cb=0,ub=1,fb=2,Su=3,db=4,hb=5,pb=6,mb=7,tv=0,gb=1,_b=2,_s=0,vb=1,xb=2,yb=3,nv=4,Sb=5,bb=6,Mb=7,iv=300,_a=301,va=302,bu=303,Xd=304,ef=306,$d=1e3,qi=1001,Yd=1002,Yn=1003,ym=1004,Na=1005,ti=1006,Cf=1007,eo=1008,vs=1009,Eb=1010,wb=1011,Xh=1012,rv=1013,cs=1014,Or=1015,Ul=1016,sv=1017,ov=1018,so=1020,Tb=1021,ji=1023,Ab=1024,Cb=1025,oo=1026,xa=1027,Rb=1028,av=1029,Pb=1030,lv=1031,cv=1033,Rf=33776,Pf=33777,Lf=33778,Df=33779,Sm=35840,bm=35841,Mm=35842,Em=35843,uv=36196,wm=37492,Tm=37496,Am=37808,Cm=37809,Rm=37810,Pm=37811,Lm=37812,Dm=37813,Im=37814,Um=37815,Nm=37816,Om=37817,Fm=37818,km=37819,Bm=37820,zm=37821,If=36492,Hm=36494,Gm=36495,Lb=36283,Vm=36284,Wm=36285,Xm=36286,Db=3200,Ib=3201,Ub=0,Nb=1,ls="",Yi="srgb",Cs="srgb-linear",$h="display-p3",tf="display-p3-linear",Mu="linear",kt="srgb",Eu="rec709",wu="p3",Mo=7680,$m=519,Ob=512,Fb=513,kb=514,fv=515,Bb=516,zb=517,Hb=518,Gb=519,qd=35044,Ym="300 es",jd=1035,kr=2e3,Tu=2001;class Ra{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uf=Math.PI/180,Kd=180/Math.PI;function xs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]).toLowerCase()}function ni(n,e,t){return Math.max(e,Math.min(t,n))}function Vb(n,e){return(n%e+e)%e}function Nf(n,e,t){return(1-t)*n+t*e}function qm(n){return(n&n-1)===0&&n!==0}function Zd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function dr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ct(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ni(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,i,r,s,o,a,l,c){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],_=i[8],g=r[0],m=r[3],p=r[6],x=r[1],v=r[4],y=r[7],b=r[2],A=r[5],w=r[8];return s[0]=o*g+a*x+l*b,s[3]=o*m+a*v+l*A,s[6]=o*p+a*y+l*w,s[1]=c*g+u*x+f*b,s[4]=c*m+u*v+f*A,s[7]=c*p+u*y+f*w,s[2]=d*g+h*x+_*b,s[5]=d*m+h*v+_*A,s[8]=d*p+h*y+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,_=t*f+i*d+r*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(r*c-u*i)*g,e[2]=(a*i-r*o)*g,e[3]=d*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=h*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Of.makeScale(e,t)),this}rotate(e){return this.premultiply(Of.makeRotation(-e)),this}translate(e,t){return this.premultiply(Of.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Of=new lt;function dv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Au(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Wb(){const n=Au("canvas");return n.style.display="block",n}const jm={};function hv(n){n in jm||(jm[n]=!0,console.warn(n))}const Km=new lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zm=new lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),oc={[Cs]:{transfer:Mu,primaries:Eu,toReference:n=>n,fromReference:n=>n},[Yi]:{transfer:kt,primaries:Eu,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[tf]:{transfer:Mu,primaries:wu,toReference:n=>n.applyMatrix3(Zm),fromReference:n=>n.applyMatrix3(Km)},[$h]:{transfer:kt,primaries:wu,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Zm),fromReference:n=>n.applyMatrix3(Km).convertLinearToSRGB()}},Xb=new Set([Cs,tf]),Rt={enabled:!0,_workingColorSpace:Cs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Xb.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=oc[e].toReference,r=oc[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return oc[n].primaries},getTransfer:function(n){return n===ls?Mu:oc[n].transfer}};function la(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ff(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Eo;class pv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Eo===void 0&&(Eo=Au("canvas")),Eo.width=e.width,Eo.height=e.height;const i=Eo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Eo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Au("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=la(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(la(t[i]/255)*255):t[i]=la(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $b=0;class mv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$b++}),this.uuid=xs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(kf(r[o].image)):s.push(kf(r[o]))}else s=kf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function kf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?pv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yb=0;class Jn extends Ra{constructor(e=Jn.DEFAULT_IMAGE,t=Jn.DEFAULT_MAPPING,i=qi,r=qi,s=ti,o=eo,a=ji,l=vs,c=Jn.DEFAULT_ANISOTROPY,u=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yb++}),this.uuid=xs(),this.name="",this.source=new mv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==iv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $d:e.x=e.x-Math.floor(e.x);break;case qi:e.x=e.x<0?0:1;break;case Yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $d:e.y=e.y-Math.floor(e.y);break;case qi:e.y=e.y<0?0:1;break;case Yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=iv;Jn.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,t=0,i=0,r=1){Gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(h+1)/2,b=(p+1)/2,A=(u+d)/4,w=(f+g)/4,D=(_+m)/4;return v>y&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=w/i):y>b?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=D/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=w/s,r=D/s),this.set(i,r,s,t),this}let x=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(f-g)/x,this.z=(d-u)/x,this.w=Math.acos((c+h+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qb extends Ra{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new Jn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new mv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mo extends qb{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class gv extends Jn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jb extends Jn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ql{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],h=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=h,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==d||c!==h||u!==_){let m=1-a;const p=l*d+c*h+u*_+f*g,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const b=Math.sqrt(v),A=Math.atan2(b,p*x);m=Math.sin(m*A)/b,a=Math.sin(a*A)/b}const y=a*x;if(l=l*m+d*y,c=c*m+h*y,u=u*m+_*y,f=f*m+g*y,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],h=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*h-c*d,e[t+1]=l*_+u*d+c*f-a*h,e[t+2]=c*_+u*h+a*d-l*f,e[t+3]=u*_-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),h=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f-d*h*_;break;case"YXZ":this._x=d*u*f+c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f+d*h*_;break;case"ZXY":this._x=d*u*f-c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f-d*h*_;break;case"ZYX":this._x=d*u*f-c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f+d*h*_;break;case"YZX":this._x=d*u*f+c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f-d*h*_;break;case"XZY":this._x=d*u*f-c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f+d*h*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ni(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bf.copy(this).projectOnVector(e),this.sub(Bf)}reflect(e){return this.sub(Bf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ni(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bf=new H,Jm=new ql;class jl{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gi):Gi.fromBufferAttribute(s,o),Gi.applyMatrix4(e.matrixWorld),this.expandByPoint(Gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ac.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ac.copy(i.boundingBox)),ac.applyMatrix4(e.matrixWorld),this.union(ac)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gi),Gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oa),lc.subVectors(this.max,Oa),wo.subVectors(e.a,Oa),To.subVectors(e.b,Oa),Ao.subVectors(e.c,Oa),Qr.subVectors(To,wo),es.subVectors(Ao,To),Os.subVectors(wo,Ao);let t=[0,-Qr.z,Qr.y,0,-es.z,es.y,0,-Os.z,Os.y,Qr.z,0,-Qr.x,es.z,0,-es.x,Os.z,0,-Os.x,-Qr.y,Qr.x,0,-es.y,es.x,0,-Os.y,Os.x,0];return!zf(t,wo,To,Ao,lc)||(t=[1,0,0,0,1,0,0,0,1],!zf(t,wo,To,Ao,lc))?!1:(cc.crossVectors(Qr,es),t=[cc.x,cc.y,cc.z],zf(t,wo,To,Ao,lc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(br[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),br[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),br[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),br[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),br[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),br[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),br[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),br[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(br),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const br=[new H,new H,new H,new H,new H,new H,new H,new H],Gi=new H,ac=new jl,wo=new H,To=new H,Ao=new H,Qr=new H,es=new H,Os=new H,Oa=new H,lc=new H,cc=new H,Fs=new H;function zf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Fs.fromArray(n,s);const a=r.x*Math.abs(Fs.x)+r.y*Math.abs(Fs.y)+r.z*Math.abs(Fs.z),l=e.dot(Fs),c=t.dot(Fs),u=i.dot(Fs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Kb=new jl,Fa=new H,Hf=new H;class Kl{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Kb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fa.subVectors(e,this.center);const t=Fa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Fa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fa.copy(e.center).add(Hf)),this.expandByPoint(Fa.copy(e.center).sub(Hf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mr=new H,Gf=new H,uc=new H,ts=new H,Vf=new H,fc=new H,Wf=new H;class Yh{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mr.copy(this.origin).addScaledVector(this.direction,t),Mr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Gf.copy(e).add(t).multiplyScalar(.5),uc.copy(t).sub(e).normalize(),ts.copy(this.origin).sub(Gf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(uc),a=ts.dot(this.direction),l=-ts.dot(uc),c=ts.lengthSq(),u=Math.abs(1-o*o);let f,d,h,_;if(u>0)if(f=o*l-a,d=o*a-l,_=s*u,f>=0)if(d>=-_)if(d<=_){const g=1/u;f*=g,d*=g,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Gf).addScaledVector(uc,d),h}intersectSphere(e,t){Mr.subVectors(e.center,this.origin);const i=Mr.dot(this.direction),r=Mr.dot(Mr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Mr)!==null}intersectTriangle(e,t,i,r,s){Vf.subVectors(t,e),fc.subVectors(i,e),Wf.crossVectors(Vf,fc);let o=this.direction.dot(Wf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ts.subVectors(this.origin,e);const l=a*this.direction.dot(fc.crossVectors(ts,fc));if(l<0)return null;const c=a*this.direction.dot(Vf.cross(ts));if(c<0||l+c>o)return null;const u=-a*ts.dot(Wf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,t,i,r,s,o,a,l,c,u,f,d,h,_,g,m){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,d,h,_,g,m)}set(e,t,i,r,s,o,a,l,c,u,f,d,h,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Co.setFromMatrixColumn(e,0).length(),s=1/Co.setFromMatrixColumn(e,1).length(),o=1/Co.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,h=o*f,_=a*u,g=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+_*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=_+h*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,_=c*u,g=c*f;t[0]=d+g*a,t[4]=_*a-h,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=h*a-_,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,_=c*u,g=c*f;t[0]=d-g*a,t[4]=-o*f,t[8]=_+h*a,t[1]=h+_*a,t[5]=o*u,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,_=a*u,g=a*f;t[0]=l*u,t[4]=_*c-h,t[8]=d*c+g,t[1]=l*f,t[5]=g*c+d,t[9]=h*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-d*f,t[8]=_*f+h,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*f+_,t[10]=d-g*f}else if(e.order==="XZY"){const d=o*l,h=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+g,t[5]=o*u,t[9]=h*f-_,t[2]=_*f-h,t[6]=a*u,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zb,e,Jb)}lookAt(e,t,i){const r=this.elements;return di.subVectors(e,t),di.lengthSq()===0&&(di.z=1),di.normalize(),ns.crossVectors(i,di),ns.lengthSq()===0&&(Math.abs(i.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),ns.crossVectors(i,di)),ns.normalize(),dc.crossVectors(di,ns),r[0]=ns.x,r[4]=dc.x,r[8]=di.x,r[1]=ns.y,r[5]=dc.y,r[9]=di.y,r[2]=ns.z,r[6]=dc.z,r[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],_=i[2],g=i[6],m=i[10],p=i[14],x=i[3],v=i[7],y=i[11],b=i[15],A=r[0],w=r[4],D=r[8],U=r[12],S=r[1],P=r[5],F=r[9],te=r[13],N=r[2],Z=r[6],W=r[10],X=r[14],G=r[3],re=r[7],I=r[11],ue=r[15];return s[0]=o*A+a*S+l*N+c*G,s[4]=o*w+a*P+l*Z+c*re,s[8]=o*D+a*F+l*W+c*I,s[12]=o*U+a*te+l*X+c*ue,s[1]=u*A+f*S+d*N+h*G,s[5]=u*w+f*P+d*Z+h*re,s[9]=u*D+f*F+d*W+h*I,s[13]=u*U+f*te+d*X+h*ue,s[2]=_*A+g*S+m*N+p*G,s[6]=_*w+g*P+m*Z+p*re,s[10]=_*D+g*F+m*W+p*I,s[14]=_*U+g*te+m*X+p*ue,s[3]=x*A+v*S+y*N+b*G,s[7]=x*w+v*P+y*Z+b*re,s[11]=x*D+v*F+y*W+b*I,s[15]=x*U+v*te+y*X+b*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*h-i*l*h)+g*(+t*l*h-t*c*d+s*o*d-r*o*h+r*c*u-s*l*u)+m*(+t*c*f-t*a*h-s*o*f+i*o*h+s*a*u-i*c*u)+p*(-r*a*u-t*l*f+t*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],_=e[12],g=e[13],m=e[14],p=e[15],x=f*m*c-g*d*c+g*l*h-a*m*h-f*l*p+a*d*p,v=_*d*c-u*m*c-_*l*h+o*m*h+u*l*p-o*d*p,y=u*g*c-_*f*c+_*a*h-o*g*h-u*a*p+o*f*p,b=_*f*l-u*g*l-_*a*d+o*g*d+u*a*m-o*f*m,A=t*x+i*v+r*y+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=x*w,e[1]=(g*d*s-f*m*s-g*r*h+i*m*h+f*r*p-i*d*p)*w,e[2]=(a*m*s-g*l*s+g*r*c-i*m*c-a*r*p+i*l*p)*w,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*h-i*l*h)*w,e[4]=v*w,e[5]=(u*m*s-_*d*s+_*r*h-t*m*h-u*r*p+t*d*p)*w,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*p-t*l*p)*w,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*h+t*l*h)*w,e[8]=y*w,e[9]=(_*f*s-u*g*s-_*i*h+t*g*h+u*i*p-t*f*p)*w,e[10]=(o*g*s-_*a*s+_*i*c-t*g*c-o*i*p+t*a*p)*w,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*h-t*a*h)*w,e[12]=b*w,e[13]=(u*g*r-_*f*r+_*i*d-t*g*d-u*i*m+t*f*m)*w,e[14]=(_*a*r-o*g*r-_*i*l+t*g*l+o*i*m-t*a*m)*w,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*d+t*a*d)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,_=s*f,g=o*u,m=o*f,p=a*f,x=l*c,v=l*u,y=l*f,b=i.x,A=i.y,w=i.z;return r[0]=(1-(g+p))*b,r[1]=(h+y)*b,r[2]=(_-v)*b,r[3]=0,r[4]=(h-y)*A,r[5]=(1-(d+p))*A,r[6]=(m+x)*A,r[7]=0,r[8]=(_+v)*w,r[9]=(m-x)*w,r[10]=(1-(d+g))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Co.set(r[0],r[1],r[2]).length();const o=Co.set(r[4],r[5],r[6]).length(),a=Co.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vi.copy(this);const c=1/s,u=1/o,f=1/a;return Vi.elements[0]*=c,Vi.elements[1]*=c,Vi.elements[2]*=c,Vi.elements[4]*=u,Vi.elements[5]*=u,Vi.elements[6]*=u,Vi.elements[8]*=f,Vi.elements[9]*=f,Vi.elements[10]*=f,t.setFromRotationMatrix(Vi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=kr){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let h,_;if(a===kr)h=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Tu)h=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=kr){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),d=(t+e)*c,h=(i+r)*u;let _,g;if(a===kr)_=(o+s)*f,g=-2*f;else if(a===Tu)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Co=new H,Vi=new Bt,Zb=new H(0,0,0),Jb=new H(1,1,1),ns=new H,dc=new H,di=new H,Qm=new Bt,eg=new ql;class $r{constructor(e=0,t=0,i=0,r=$r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(ni(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ni(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ni(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ni(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ni(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-ni(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Qm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eg.setFromEuler(this),this.setFromQuaternion(eg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$r.DEFAULT_ORDER="XYZ";let _v=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Qb=0;const tg=new H,Ro=new ql,Er=new Bt,hc=new H,ka=new H,eM=new H,tM=new ql,ng=new H(1,0,0),ig=new H(0,1,0),rg=new H(0,0,1),nM={type:"added"},iM={type:"removed"},Xf={type:"childadded",child:null},$f={type:"childremoved",child:null};class bn extends Ra{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qb++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new H,t=new $r,i=new ql,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Bt},normalMatrix:{value:new lt}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _v,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ro.setFromAxisAngle(e,t),this.quaternion.multiply(Ro),this}rotateOnWorldAxis(e,t){return Ro.setFromAxisAngle(e,t),this.quaternion.premultiply(Ro),this}rotateX(e){return this.rotateOnAxis(ng,e)}rotateY(e){return this.rotateOnAxis(ig,e)}rotateZ(e){return this.rotateOnAxis(rg,e)}translateOnAxis(e,t){return tg.copy(e).applyQuaternion(this.quaternion),this.position.add(tg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ng,e)}translateY(e){return this.translateOnAxis(ig,e)}translateZ(e){return this.translateOnAxis(rg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Er.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?hc.copy(e):hc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Er.lookAt(ka,hc,this.up):Er.lookAt(hc,ka,this.up),this.quaternion.setFromRotationMatrix(Er),r&&(Er.extractRotation(r.matrixWorld),Ro.setFromRotationMatrix(Er),this.quaternion.premultiply(Ro.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(nM),Xf.child=e,this.dispatchEvent(Xf),Xf.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(iM),$f.child=e,this.dispatchEvent($f),$f.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Er.multiply(e.parent.matrixWorld)),e.applyMatrix4(Er),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,e,eM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,tM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}bn.DEFAULT_UP=new H(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wi=new H,wr=new H,Yf=new H,Tr=new H,Po=new H,Lo=new H,sg=new H,qf=new H,jf=new H,Kf=new H;class Ki{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Wi.subVectors(e,t),r.cross(Wi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Wi.subVectors(r,t),wr.subVectors(i,t),Yf.subVectors(e,t);const o=Wi.dot(Wi),a=Wi.dot(wr),l=Wi.dot(Yf),c=wr.dot(wr),u=wr.dot(Yf),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,_=(o*u-a*l)*d;return s.set(1-h-_,_,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Tr)===null?!1:Tr.x>=0&&Tr.y>=0&&Tr.x+Tr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Tr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Tr.x),l.addScaledVector(o,Tr.y),l.addScaledVector(a,Tr.z),l)}static isFrontFacing(e,t,i,r){return Wi.subVectors(i,t),wr.subVectors(e,t),Wi.cross(wr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wi.subVectors(this.c,this.b),wr.subVectors(this.a,this.b),Wi.cross(wr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ki.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ki.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Ki.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Ki.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ki.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Po.subVectors(r,i),Lo.subVectors(s,i),qf.subVectors(e,i);const l=Po.dot(qf),c=Lo.dot(qf);if(l<=0&&c<=0)return t.copy(i);jf.subVectors(e,r);const u=Po.dot(jf),f=Lo.dot(jf);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Po,o);Kf.subVectors(e,s);const h=Po.dot(Kf),_=Lo.dot(Kf);if(_>=0&&h<=_)return t.copy(s);const g=h*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Lo,a);const m=u*_-h*f;if(m<=0&&f-u>=0&&h-_>=0)return sg.subVectors(s,r),a=(f-u)/(f-u+(h-_)),t.copy(r).addScaledVector(sg,a);const p=1/(m+g+d);return o=g*p,a=d*p,t.copy(i).addScaledVector(Po,o).addScaledVector(Lo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},pc={h:0,s:0,l:0};function Zf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class vt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Rt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Rt.workingColorSpace){if(e=Vb(e,1),t=ni(t,0,1),i=ni(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Zf(o,s,e+1/3),this.g=Zf(o,s,e),this.b=Zf(o,s,e-1/3)}return Rt.toWorkingColorSpace(this,r),this}setStyle(e,t=Yi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yi){const i=vv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}copyLinearToSRGB(e){return this.r=Ff(e.r),this.g=Ff(e.g),this.b=Ff(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yi){return Rt.fromWorkingColorSpace(Tn.copy(this),e),Math.round(ni(Tn.r*255,0,255))*65536+Math.round(ni(Tn.g*255,0,255))*256+Math.round(ni(Tn.b*255,0,255))}getHexString(e=Yi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(Tn.copy(this),t);const i=Tn.r,r=Tn.g,s=Tn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=Yi){Rt.fromWorkingColorSpace(Tn.copy(this),e);const t=Tn.r,i=Tn.g,r=Tn.b;return e!==Yi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(is),this.setHSL(is.h+e,is.s+t,is.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(is),e.getHSL(pc);const i=Nf(is.h,pc.h,t),r=Nf(is.s,pc.s,t),s=Nf(is.l,pc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new vt;vt.NAMES=vv;let rM=0;class yo extends Ra{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=xs(),this.name="",this.type="Material",this.blending=aa,this.side=Xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vd,this.blendDst=Wd,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Su,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$m,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mo,this.stencilZFail=Mo,this.stencilZPass=Mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==aa&&(i.blending=this.blending),this.side!==Xr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vd&&(i.blendSrc=this.blendSrc),this.blendDst!==Wd&&(i.blendDst=this.blendDst),this.blendEquation!==Js&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Su&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$m&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Mo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Mo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xv extends yo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.combine=tv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tn=new H,mc=new et;class Bi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=qd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Or,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return hv("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)mc.fromBufferAttribute(this,t),mc.applyMatrix3(e),this.setXY(t,mc.x,mc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=dr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),r=Ct(r,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qd&&(e.usage=this.usage),e}}class yv extends Bi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Sv extends Bi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Nn extends Bi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let sM=0;const Ri=new Bt,Jf=new bn,Do=new H,hi=new jl,Ba=new jl,hn=new H;class ui extends Ra{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dv(e)?Sv:yv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new lt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,t,i){return Ri.makeTranslation(e,t,i),this.applyMatrix4(Ri),this}scale(e,t,i){return Ri.makeScale(e,t,i),this.applyMatrix4(Ri),this}lookAt(e){return Jf.lookAt(e),Jf.updateMatrix(),this.applyMatrix4(Jf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Do).negate(),this.translate(Do.x,Do.y,Do.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Nn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];hi.setFromBufferAttribute(s),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ba.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(hi.min,Ba.min),hi.expandByPoint(hn),hn.addVectors(hi.max,Ba.max),hi.expandByPoint(hn)):(hi.expandByPoint(Ba.min),hi.expandByPoint(Ba.max))}hi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)hn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(hn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)hn.fromBufferAttribute(a,c),l&&(Do.fromBufferAttribute(e,c),hn.add(Do)),r=Math.max(r,i.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new H,l[D]=new H;const c=new H,u=new H,f=new H,d=new et,h=new et,_=new et,g=new H,m=new H;function p(D,U,S){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,U),f.fromBufferAttribute(i,S),d.fromBufferAttribute(s,D),h.fromBufferAttribute(s,U),_.fromBufferAttribute(s,S),u.sub(c),f.sub(c),h.sub(d),_.sub(d);const P=1/(h.x*_.y-_.x*h.y);isFinite(P)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(f,-h.y).multiplyScalar(P),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-_.x).multiplyScalar(P),a[D].add(g),a[U].add(g),a[S].add(g),l[D].add(m),l[U].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let D=0,U=x.length;D<U;++D){const S=x[D],P=S.start,F=S.count;for(let te=P,N=P+F;te<N;te+=3)p(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const v=new H,y=new H,b=new H,A=new H;function w(D){b.fromBufferAttribute(r,D),A.copy(b);const U=a[D];v.copy(U),v.sub(b.multiplyScalar(b.dot(U))).normalize(),y.crossVectors(A,U);const P=y.dot(l[D])<0?-1:1;o.setXYZW(D,v.x,v.y,v.z,P)}for(let D=0,U=x.length;D<U;++D){const S=x[D],P=S.start,F=S.count;for(let te=P,N=P+F;te<N;te+=3)w(e.getX(te+0)),w(e.getX(te+1)),w(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let d=0,h=e.count;d<h;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?h=l[g]*a.data.stride+a.offset:h=l[g]*u;for(let p=0;p<u;p++)d[_++]=c[h++]}return new Bi(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ui,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const og=new Bt,ks=new Yh,gc=new Kl,ag=new H,Io=new H,Uo=new H,No=new H,Qf=new H,_c=new H,vc=new et,xc=new et,yc=new et,lg=new H,cg=new H,ug=new H,Sc=new H,bc=new H;class Ni extends bn{constructor(e=new ui,t=new xv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){_c.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Qf.fromBufferAttribute(f,e),o?_c.addScaledVector(Qf,u):_c.addScaledVector(Qf.sub(t),u))}t.add(_c)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gc.copy(i.boundingSphere),gc.applyMatrix4(s),ks.copy(e.ray).recast(e.near),!(gc.containsPoint(ks.origin)===!1&&(ks.intersectSphere(gc,ag)===null||ks.origin.distanceToSquared(ag)>(e.far-e.near)**2))&&(og.copy(s).invert(),ks.copy(e.ray).applyMatrix4(og),!(i.boundingBox!==null&&ks.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ks)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],x=Math.max(m.start,h.start),v=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let y=x,b=v;y<b;y+=3){const A=a.getX(y),w=a.getX(y+1),D=a.getX(y+2);r=Mc(this,p,e,i,c,u,f,A,w,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let m=_,p=g;m<p;m+=3){const x=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);r=Mc(this,o,e,i,c,u,f,x,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],x=Math.max(m.start,h.start),v=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let y=x,b=v;y<b;y+=3){const A=y,w=y+1,D=y+2;r=Mc(this,p,e,i,c,u,f,A,w,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let m=_,p=g;m<p;m+=3){const x=m,v=m+1,y=m+2;r=Mc(this,o,e,i,c,u,f,x,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function oM(n,e,t,i,r,s,o,a){let l;if(e.side===Zn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Xr,a),l===null)return null;bc.copy(a),bc.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(bc);return c<t.near||c>t.far?null:{distance:c,point:bc.clone(),object:n}}function Mc(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Io),n.getVertexPosition(l,Uo),n.getVertexPosition(c,No);const u=oM(n,e,t,i,Io,Uo,No,Sc);if(u){r&&(vc.fromBufferAttribute(r,a),xc.fromBufferAttribute(r,l),yc.fromBufferAttribute(r,c),u.uv=Ki.getInterpolation(Sc,Io,Uo,No,vc,xc,yc,new et)),s&&(vc.fromBufferAttribute(s,a),xc.fromBufferAttribute(s,l),yc.fromBufferAttribute(s,c),u.uv1=Ki.getInterpolation(Sc,Io,Uo,No,vc,xc,yc,new et)),o&&(lg.fromBufferAttribute(o,a),cg.fromBufferAttribute(o,l),ug.fromBufferAttribute(o,c),u.normal=Ki.getInterpolation(Sc,Io,Uo,No,lg,cg,ug,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new H,materialIndex:0};Ki.getNormal(Io,Uo,No,f.normal),u.face=f}return u}class Zl extends ui{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Nn(c,3)),this.setAttribute("normal",new Nn(u,3)),this.setAttribute("uv",new Nn(f,2));function _(g,m,p,x,v,y,b,A,w,D,U){const S=y/w,P=b/D,F=y/2,te=b/2,N=A/2,Z=w+1,W=D+1;let X=0,G=0;const re=new H;for(let I=0;I<W;I++){const ue=I*P-te;for(let _e=0;_e<Z;_e++){const Xe=_e*S-F;re[g]=Xe*x,re[m]=ue*v,re[p]=N,c.push(re.x,re.y,re.z),re[g]=0,re[m]=0,re[p]=A>0?1:-1,u.push(re.x,re.y,re.z),f.push(_e/w),f.push(1-I/D),X+=1}}for(let I=0;I<D;I++)for(let ue=0;ue<w;ue++){const _e=d+ue+Z*I,Xe=d+ue+Z*(I+1),J=d+(ue+1)+Z*(I+1),de=d+(ue+1)+Z*I;l.push(_e,Xe,de),l.push(Xe,J,de),G+=6}a.addGroup(h,G,U),h+=G,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ya(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Vn(n){const e={};for(let t=0;t<n.length;t++){const i=ya(n[t]);for(const r in i)e[r]=i[r]}return e}function aM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function bv(n){return n.getRenderTarget()===null?n.outputColorSpace:Rt.workingColorSpace}const lM={clone:ya,merge:Vn};var cM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _r extends yo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cM,this.fragmentShader=uM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ya(e.uniforms),this.uniformsGroups=aM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Mv extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=kr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rs=new H,fg=new et,dg=new et;class _i extends Mv{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Kd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Uf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kd*2*Math.atan(Math.tan(Uf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rs.x,rs.y).multiplyScalar(-e/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rs.x,rs.y).multiplyScalar(-e/rs.z)}getViewSize(e,t){return this.getViewBounds(e,fg,dg),t.subVectors(dg,fg)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Uf*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Oo=-90,Fo=1;class fM extends bn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _i(Oo,Fo,e,t);r.layers=this.layers,this.add(r);const s=new _i(Oo,Fo,e,t);s.layers=this.layers,this.add(s);const o=new _i(Oo,Fo,e,t);o.layers=this.layers,this.add(o);const a=new _i(Oo,Fo,e,t);a.layers=this.layers,this.add(a);const l=new _i(Oo,Fo,e,t);l.layers=this.layers,this.add(l);const c=new _i(Oo,Fo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===kr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Tu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Ev extends Jn{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:_a,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class dM extends mo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ev(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ti}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Zl(5,5,5),s=new _r({name:"CubemapFromEquirect",uniforms:ya(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zn,blending:gs});s.uniforms.tEquirect.value=t;const o=new Ni(r,s),a=t.minFilter;return t.minFilter===eo&&(t.minFilter=ti),new fM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const ed=new H,hM=new H,pM=new lt;class $s{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ed.subVectors(i,t).cross(hM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ed),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||pM.getNormalMatrix(e),r=this.coplanarPoint(ed).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bs=new Kl,Ec=new H;class qh{constructor(e=new $s,t=new $s,i=new $s,r=new $s,s=new $s,o=new $s){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=kr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],h=r[8],_=r[9],g=r[10],m=r[11],p=r[12],x=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,d-c,m-h,y-p).normalize(),i[1].setComponents(l+s,d+c,m+h,y+p).normalize(),i[2].setComponents(l+o,d+u,m+_,y+x).normalize(),i[3].setComponents(l-o,d-u,m-_,y-x).normalize(),i[4].setComponents(l-a,d-f,m-g,y-v).normalize(),t===kr)i[5].setComponents(l+a,d+f,m+g,y+v).normalize();else if(t===Tu)i[5].setComponents(a,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bs)}intersectsSprite(e){return Bs.center.set(0,0,0),Bs.radius=.7071067811865476,Bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bs)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ec.x=r.normal.x>0?e.max.x:e.min.x,Ec.y=r.normal.y>0?e.max.y:e.min.y,Ec.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function mM(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,h=f.byteLength,_=n.createBuffer();n.bindBuffer(u,_),n.bufferData(u,f,d),c.onUploadCallback();let g;if(f instanceof Float32Array)g=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=n.SHORT;else if(f instanceof Uint32Array)g=n.UNSIGNED_INT;else if(f instanceof Int32Array)g=n.INT;else if(f instanceof Int8Array)g=n.BYTE;else if(f instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:h}}function s(c,u,f){const d=u.array,h=u._updateRange,_=u.updateRanges;if(n.bindBuffer(f,c),h.count===-1&&_.length===0&&n.bufferSubData(f,0,d),_.length!==0){for(let g=0,m=_.length;g<m;g++){const p=_[g];t?n.bufferSubData(f,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):n.bufferSubData(f,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}h.count!==-1&&(t?n.bufferSubData(f,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count):n.bufferSubData(f,h.offset*d.BYTES_PER_ELEMENT,d.subarray(h.offset,h.offset+h.count)),h.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}class nf extends ui{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,h=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const x=p*d-o;for(let v=0;v<c;v++){const y=v*f-s;_.push(y,-x,0),g.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const v=x+c*p,y=x+c*(p+1),b=x+1+c*(p+1),A=x+1+c*p;h.push(v,y,A),h.push(y,b,A)}this.setIndex(h),this.setAttribute("position",new Nn(_,3)),this.setAttribute("normal",new Nn(g,3)),this.setAttribute("uv",new Nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nf(e.width,e.height,e.widthSegments,e.heightSegments)}}var gM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_M=`#ifdef USE_ALPHAHASH
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
#endif`,vM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,SM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bM=`#ifdef USE_AOMAP
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
#endif`,MM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,EM=`#ifdef USE_BATCHING
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
#endif`,wM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,TM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,CM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,RM=`#ifdef USE_IRIDESCENCE
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
#endif`,PM=`#ifdef USE_BUMPMAP
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
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,OM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,FM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,BM=`#define PI 3.141592653589793
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
} // validated`,zM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,HM=`vec3 transformedNormal = objectNormal;
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
#endif`,GM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,VM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$M="gl_FragColor = linearToOutputTexel( gl_FragColor );",YM=`
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
}`,qM=`#ifdef USE_ENVMAP
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
#endif`,jM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,KM=`#ifdef USE_ENVMAP
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
#endif`,ZM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JM=`#ifdef USE_ENVMAP
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
#endif`,QM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iE=`#ifdef USE_GRADIENTMAP
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
}`,rE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lE=`uniform bool receiveShadow;
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
#endif`,cE=`#ifdef USE_ENVMAP
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
#endif`,uE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pE=`PhysicalMaterial material;
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
#endif`,mE=`struct PhysicalMaterial {
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
}`,gE=`
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
#endif`,_E=`#if defined( RE_IndirectDiffuse )
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
#endif`,vE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,bE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ME=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,EE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,TE=`#if defined( USE_POINTS_UV )
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
#endif`,AE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LE=`#ifdef USE_MORPHNORMALS
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
#endif`,DE=`#ifdef USE_MORPHTARGETS
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
#endif`,IE=`#ifdef USE_MORPHTARGETS
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
#endif`,UE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,NE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,OE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BE=`#ifdef USE_NORMALMAP
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
#endif`,zE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,VE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$E=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ew=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tw=`float getShadowMask() {
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
}`,nw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iw=`#ifdef USE_SKINNING
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
#endif`,rw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sw=`#ifdef USE_SKINNING
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
#endif`,ow=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uw=`#ifdef USE_TRANSMISSION
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
#endif`,fw=`#ifdef USE_TRANSMISSION
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
#endif`,dw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_w=`uniform sampler2D t2D;
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
}`,vw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bw=`#include <common>
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
}`,Mw=`#if DEPTH_PACKING == 3200
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
}`,Ew=`#define DISTANCE
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
}`,ww=`#define DISTANCE
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
}`,Tw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Aw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cw=`uniform float scale;
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
}`,Rw=`uniform vec3 diffuse;
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
}`,Pw=`#include <common>
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
}`,Lw=`uniform vec3 diffuse;
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
}`,Dw=`#define LAMBERT
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
}`,Iw=`#define LAMBERT
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
}`,Uw=`#define MATCAP
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
}`,Nw=`#define MATCAP
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
}`,Ow=`#define NORMAL
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
}`,Fw=`#define NORMAL
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
}`,kw=`#define PHONG
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
}`,Bw=`#define PHONG
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
}`,zw=`#define STANDARD
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
}`,Hw=`#define STANDARD
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
}`,Gw=`#define TOON
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
}`,Vw=`#define TOON
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
}`,Ww=`uniform float size;
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
}`,Xw=`uniform vec3 diffuse;
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
}`,$w=`#include <common>
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
}`,Yw=`uniform vec3 color;
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
}`,qw=`uniform float rotation;
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
}`,jw=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:gM,alphahash_pars_fragment:_M,alphamap_fragment:vM,alphamap_pars_fragment:xM,alphatest_fragment:yM,alphatest_pars_fragment:SM,aomap_fragment:bM,aomap_pars_fragment:MM,batching_pars_vertex:EM,batching_vertex:wM,begin_vertex:TM,beginnormal_vertex:AM,bsdfs:CM,iridescence_fragment:RM,bumpmap_pars_fragment:PM,clipping_planes_fragment:LM,clipping_planes_pars_fragment:DM,clipping_planes_pars_vertex:IM,clipping_planes_vertex:UM,color_fragment:NM,color_pars_fragment:OM,color_pars_vertex:FM,color_vertex:kM,common:BM,cube_uv_reflection_fragment:zM,defaultnormal_vertex:HM,displacementmap_pars_vertex:GM,displacementmap_vertex:VM,emissivemap_fragment:WM,emissivemap_pars_fragment:XM,colorspace_fragment:$M,colorspace_pars_fragment:YM,envmap_fragment:qM,envmap_common_pars_fragment:jM,envmap_pars_fragment:KM,envmap_pars_vertex:ZM,envmap_physical_pars_fragment:cE,envmap_vertex:JM,fog_vertex:QM,fog_pars_vertex:eE,fog_fragment:tE,fog_pars_fragment:nE,gradientmap_pars_fragment:iE,lightmap_fragment:rE,lightmap_pars_fragment:sE,lights_lambert_fragment:oE,lights_lambert_pars_fragment:aE,lights_pars_begin:lE,lights_toon_fragment:uE,lights_toon_pars_fragment:fE,lights_phong_fragment:dE,lights_phong_pars_fragment:hE,lights_physical_fragment:pE,lights_physical_pars_fragment:mE,lights_fragment_begin:gE,lights_fragment_maps:_E,lights_fragment_end:vE,logdepthbuf_fragment:xE,logdepthbuf_pars_fragment:yE,logdepthbuf_pars_vertex:SE,logdepthbuf_vertex:bE,map_fragment:ME,map_pars_fragment:EE,map_particle_fragment:wE,map_particle_pars_fragment:TE,metalnessmap_fragment:AE,metalnessmap_pars_fragment:CE,morphinstance_vertex:RE,morphcolor_vertex:PE,morphnormal_vertex:LE,morphtarget_pars_vertex:DE,morphtarget_vertex:IE,normal_fragment_begin:UE,normal_fragment_maps:NE,normal_pars_fragment:OE,normal_pars_vertex:FE,normal_vertex:kE,normalmap_pars_fragment:BE,clearcoat_normal_fragment_begin:zE,clearcoat_normal_fragment_maps:HE,clearcoat_pars_fragment:GE,iridescence_pars_fragment:VE,opaque_fragment:WE,packing:XE,premultiplied_alpha_fragment:$E,project_vertex:YE,dithering_fragment:qE,dithering_pars_fragment:jE,roughnessmap_fragment:KE,roughnessmap_pars_fragment:ZE,shadowmap_pars_fragment:JE,shadowmap_pars_vertex:QE,shadowmap_vertex:ew,shadowmask_pars_fragment:tw,skinbase_vertex:nw,skinning_pars_vertex:iw,skinning_vertex:rw,skinnormal_vertex:sw,specularmap_fragment:ow,specularmap_pars_fragment:aw,tonemapping_fragment:lw,tonemapping_pars_fragment:cw,transmission_fragment:uw,transmission_pars_fragment:fw,uv_pars_fragment:dw,uv_pars_vertex:hw,uv_vertex:pw,worldpos_vertex:mw,background_vert:gw,background_frag:_w,backgroundCube_vert:vw,backgroundCube_frag:xw,cube_vert:yw,cube_frag:Sw,depth_vert:bw,depth_frag:Mw,distanceRGBA_vert:Ew,distanceRGBA_frag:ww,equirect_vert:Tw,equirect_frag:Aw,linedashed_vert:Cw,linedashed_frag:Rw,meshbasic_vert:Pw,meshbasic_frag:Lw,meshlambert_vert:Dw,meshlambert_frag:Iw,meshmatcap_vert:Uw,meshmatcap_frag:Nw,meshnormal_vert:Ow,meshnormal_frag:Fw,meshphong_vert:kw,meshphong_frag:Bw,meshphysical_vert:zw,meshphysical_frag:Hw,meshtoon_vert:Gw,meshtoon_frag:Vw,points_vert:Ww,points_frag:Xw,shadow_vert:$w,shadow_frag:Yw,sprite_vert:qw,sprite_frag:jw},Te={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},ur={basic:{uniforms:Vn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Vn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new vt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Vn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Vn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Vn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new vt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Vn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Vn([Te.points,Te.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Vn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Vn([Te.common,Te.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Vn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Vn([Te.sprite,Te.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:Vn([Te.common,Te.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:Vn([Te.lights,Te.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};ur.physical={uniforms:Vn([ur.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const wc={r:0,b:0,g:0},zs=new $r,Kw=new Bt;function Zw(n,e,t,i,r,s,o){const a=new vt(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function _(m,p){let x=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),x=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ef)?(u===void 0&&(u=new Ni(new Zl(1,1,1),new _r({name:"BackgroundCubeMaterial",uniforms:ya(ur.backgroundCube.uniforms),vertexShader:ur.backgroundCube.vertexShader,fragmentShader:ur.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),zs.copy(p.backgroundRotation),zs.x*=-1,zs.y*=-1,zs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Kw.makeRotationFromEuler(zs)),u.material.toneMapped=Rt.getTransfer(v.colorSpace)!==kt,(f!==v||d!==v.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=v,d=v.version,h=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ni(new nf(2,2),new _r({name:"BackgroundMaterial",uniforms:ya(ur.background.uniforms),vertexShader:ur.background.vertexShader,fragmentShader:ur.background.fragmentShader,side:Xr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Rt.getTransfer(v.colorSpace)!==kt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=v,d=v.version,h=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,p){m.getRGB(wc,bv(n)),i.buffers.color.setClear(wc.r,wc.g,wc.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:_}}function Jw(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(N,Z,W,X,G){let re=!1;if(o){const I=g(X,W,Z);c!==I&&(c=I,h(c.object)),re=p(N,X,W,G),re&&x(N,X,W,G)}else{const I=Z.wireframe===!0;(c.geometry!==X.id||c.program!==W.id||c.wireframe!==I)&&(c.geometry=X.id,c.program=W.id,c.wireframe=I,re=!0)}G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(re||u)&&(u=!1,D(N,Z,W,X),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function h(N){return i.isWebGL2?n.bindVertexArray(N):s.bindVertexArrayOES(N)}function _(N){return i.isWebGL2?n.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function g(N,Z,W){const X=W.wireframe===!0;let G=a[N.id];G===void 0&&(G={},a[N.id]=G);let re=G[Z.id];re===void 0&&(re={},G[Z.id]=re);let I=re[X];return I===void 0&&(I=m(d()),re[X]=I),I}function m(N){const Z=[],W=[],X=[];for(let G=0;G<r;G++)Z[G]=0,W[G]=0,X[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:W,attributeDivisors:X,object:N,attributes:{},index:null}}function p(N,Z,W,X){const G=c.attributes,re=Z.attributes;let I=0;const ue=W.getAttributes();for(const _e in ue)if(ue[_e].location>=0){const J=G[_e];let de=re[_e];if(de===void 0&&(_e==="instanceMatrix"&&N.instanceMatrix&&(de=N.instanceMatrix),_e==="instanceColor"&&N.instanceColor&&(de=N.instanceColor)),J===void 0||J.attribute!==de||de&&J.data!==de.data)return!0;I++}return c.attributesNum!==I||c.index!==X}function x(N,Z,W,X){const G={},re=Z.attributes;let I=0;const ue=W.getAttributes();for(const _e in ue)if(ue[_e].location>=0){let J=re[_e];J===void 0&&(_e==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),_e==="instanceColor"&&N.instanceColor&&(J=N.instanceColor));const de={};de.attribute=J,J&&J.data&&(de.data=J.data),G[_e]=de,I++}c.attributes=G,c.attributesNum=I,c.index=X}function v(){const N=c.newAttributes;for(let Z=0,W=N.length;Z<W;Z++)N[Z]=0}function y(N){b(N,0)}function b(N,Z){const W=c.newAttributes,X=c.enabledAttributes,G=c.attributeDivisors;W[N]=1,X[N]===0&&(n.enableVertexAttribArray(N),X[N]=1),G[N]!==Z&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,Z),G[N]=Z)}function A(){const N=c.newAttributes,Z=c.enabledAttributes;for(let W=0,X=Z.length;W<X;W++)Z[W]!==N[W]&&(n.disableVertexAttribArray(W),Z[W]=0)}function w(N,Z,W,X,G,re,I){I===!0?n.vertexAttribIPointer(N,Z,W,G,re):n.vertexAttribPointer(N,Z,W,X,G,re)}function D(N,Z,W,X){if(i.isWebGL2===!1&&(N.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const G=X.attributes,re=W.getAttributes(),I=Z.defaultAttributeValues;for(const ue in re){const _e=re[ue];if(_e.location>=0){let Xe=G[ue];if(Xe===void 0&&(ue==="instanceMatrix"&&N.instanceMatrix&&(Xe=N.instanceMatrix),ue==="instanceColor"&&N.instanceColor&&(Xe=N.instanceColor)),Xe!==void 0){const J=Xe.normalized,de=Xe.itemSize,ve=t.get(Xe);if(ve===void 0)continue;const De=ve.buffer,Pe=ve.type,Ee=ve.bytesPerElement,rt=i.isWebGL2===!0&&(Pe===n.INT||Pe===n.UNSIGNED_INT||Xe.gpuType===rv);if(Xe.isInterleavedBufferAttribute){const Be=Xe.data,M=Be.stride,O=Xe.offset;if(Be.isInstancedInterleavedBuffer){for(let B=0;B<_e.locationSize;B++)b(_e.location+B,Be.meshPerAttribute);N.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let B=0;B<_e.locationSize;B++)y(_e.location+B);n.bindBuffer(n.ARRAY_BUFFER,De);for(let B=0;B<_e.locationSize;B++)w(_e.location+B,de/_e.locationSize,Pe,J,M*Ee,(O+de/_e.locationSize*B)*Ee,rt)}else{if(Xe.isInstancedBufferAttribute){for(let Be=0;Be<_e.locationSize;Be++)b(_e.location+Be,Xe.meshPerAttribute);N.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Xe.meshPerAttribute*Xe.count)}else for(let Be=0;Be<_e.locationSize;Be++)y(_e.location+Be);n.bindBuffer(n.ARRAY_BUFFER,De);for(let Be=0;Be<_e.locationSize;Be++)w(_e.location+Be,de/_e.locationSize,Pe,J,de*Ee,de/_e.locationSize*Be*Ee,rt)}}else if(I!==void 0){const J=I[ue];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(_e.location,J);break;case 3:n.vertexAttrib3fv(_e.location,J);break;case 4:n.vertexAttrib4fv(_e.location,J);break;default:n.vertexAttrib1fv(_e.location,J)}}}}A()}function U(){F();for(const N in a){const Z=a[N];for(const W in Z){const X=Z[W];for(const G in X)_(X[G].object),delete X[G];delete Z[W]}delete a[N]}}function S(N){if(a[N.id]===void 0)return;const Z=a[N.id];for(const W in Z){const X=Z[W];for(const G in X)_(X[G].object),delete X[G];delete Z[W]}delete a[N.id]}function P(N){for(const Z in a){const W=a[Z];if(W[N.id]===void 0)continue;const X=W[N.id];for(const G in X)_(X[G].object),delete X[G];delete W[N.id]}}function F(){te(),u=!0,c!==l&&(c=l,h(c.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:F,resetDefaultState:te,dispose:U,releaseStatesOfGeometry:S,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:y,disableUnusedAttributes:A}}function Qw(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,f){n.drawArrays(s,u,f),t.update(f,s,1)}function l(u,f,d){if(d===0)return;let h,_;if(r)h=n,_="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[_](s,u,f,d),t.update(f,s,d)}function c(u,f,d){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let _=0;_<d;_++)this.render(u[_],f[_]);else{h.multiDrawArraysWEBGL(s,u,0,f,0,d);let _=0;for(let g=0;g<d;g++)_+=f[g];t.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function eT(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),p=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,y=o||e.has("OES_texture_float"),b=v&&y,A=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:h,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:b,maxSamples:A}}function tT(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new $s,a=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const x=s?0:i,v=x*4;let y=p.clippingState||null;l.value=y,y=u(_,d,v,h);for(let b=0;b!==v;++b)y[b]=t[b];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=h+g*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=h;v!==g;++v,y+=4)o.copy(f[v]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function nT(n){let e=new WeakMap;function t(o,a){return a===bu?o.mapping=_a:a===Xd&&(o.mapping=va),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===bu||a===Xd)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new dM(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class iT extends Mv{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Jo=4,hg=[.125,.215,.35,.446,.526,.582],Qs=20,td=new iT,pg=new vt;let nd=null,id=0,rd=0;const Ys=(1+Math.sqrt(5))/2,ko=1/Ys,mg=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,Ys,ko),new H(0,Ys,-ko),new H(ko,0,Ys),new H(-ko,0,Ys),new H(Ys,ko,0),new H(-Ys,ko,0)];class Jd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),rd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_g(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nd,id,rd),e.scissorTest=!1,Tc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_a||e.mapping===va?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),rd=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:Ul,format:ji,colorSpace:Cs,depthBuffer:!1},r=gg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gg(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rT(s)),this._blurMaterial=sT(s,e,t)}return r}_compileMaterial(e){const t=new Ni(this._lodPlanes[0],e);this._renderer.compile(t,td)}_sceneToCubeUV(e,t,i,r){const a=new _i(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(pg),u.toneMapping=_s,u.autoClear=!1;const h=new xv({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1}),_=new Ni(new Zl,h);let g=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,g=!0):(h.color.copy(pg),g=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;Tc(r,x*v,p>2?v:0,v,v),u.setRenderTarget(r),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===_a||e.mapping===va;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_g());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ni(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Tc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,td)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=mg[(r-1)%mg.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ni(this._lodPlanes[r],c),d=c.uniforms,h=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Qs-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Qs;m>Qs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qs}`);const p=[];let x=0;for(let w=0;w<Qs;++w){const D=w/g,U=Math.exp(-D*D/2);p.push(U),w===0?x+=U:w<m&&(x+=2*U)}for(let w=0;w<p.length;w++)p[w]=p[w]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-i;const y=this._sizeLods[r],b=3*y*(r>v-Jo?r-v+Jo:0),A=4*(this._cubeSize-y);Tc(t,b,A,3*y,2*y),l.setRenderTarget(t),l.render(f,td)}}function rT(n){const e=[],t=[],i=[];let r=n;const s=n-Jo+1+hg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Jo?l=hg[o-n+Jo-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,_=6,g=3,m=2,p=1,x=new Float32Array(g*_*h),v=new Float32Array(m*_*h),y=new Float32Array(p*_*h);for(let A=0;A<h;A++){const w=A%3*2/3-1,D=A>2?0:-1,U=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];x.set(U,g*_*A),v.set(d,m*_*A);const S=[A,A,A,A,A,A];y.set(S,p*_*A)}const b=new ui;b.setAttribute("position",new Bi(x,g)),b.setAttribute("uv",new Bi(v,m)),b.setAttribute("faceIndex",new Bi(y,p)),e.push(b),r>Jo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function gg(n,e,t){const i=new mo(n,e,t);return i.texture.mapping=ef,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Tc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function sT(n,e,t){const i=new Float32Array(Qs),r=new H(0,1,0);return new _r({name:"SphericalGaussianBlur",defines:{n:Qs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jh(),fragmentShader:`

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
		`,blending:gs,depthTest:!1,depthWrite:!1})}function _g(){return new _r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jh(),fragmentShader:`

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
		`,blending:gs,depthTest:!1,depthWrite:!1})}function vg(){return new _r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function jh(){return`

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
	`}function oT(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===bu||l===Xd,u=l===_a||l===va;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Jd(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Jd(n));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function aT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function lT(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const h=f.morphAttributes;for(const _ in h){const g=h[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],n.ARRAY_BUFFER)}}function c(f){const d=[],h=f.index,_=f.attributes.position;let g=0;if(h!==null){const x=h.array;g=h.version;for(let v=0,y=x.length;v<y;v+=3){const b=x[v+0],A=x[v+1],w=x[v+2];d.push(b,A,A,w,w,b)}}else if(_!==void 0){const x=_.array;g=_.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const b=v+0,A=v+1,w=v+2;d.push(b,A,A,w,w,b)}}else return;const m=new(dv(d)?Sv:yv)(d,1);m.version=g;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function cT(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,_){n.drawElements(s,_,a,h*l),t.update(_,s,1)}function f(h,_,g){if(g===0)return;let m,p;if(r)m=n,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,_,a,h*l,g),t.update(_,s,g)}function d(h,_,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<g;p++)this.render(h[p]/l,_[p]);else{m.multiDrawElementsWEBGL(s,_,0,a,h,0,g);let p=0;for(let x=0;x<g;x++)p+=_[x];t.update(p,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function uT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function fT(n,e){return n[0]-e[0]}function dT(n,e){return Math.abs(e[1])-Math.abs(n[1])}function hT(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Gt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let m=s.get(u);if(m===void 0||m.count!==g){let te=function(){P.dispose(),s.delete(u),u.removeEventListener("dispose",te)};var h=te;m!==void 0&&m.texture.dispose();const p=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,y=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let w=0;p===!0&&(w=1),x===!0&&(w=2),v===!0&&(w=3);let D=u.attributes.position.count*w,U=1;D>e.maxTextureSize&&(U=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const S=new Float32Array(D*U*4*g),P=new gv(S,D,U,g);P.type=Or,P.needsUpdate=!0;const F=w*4;for(let N=0;N<g;N++){const Z=y[N],W=b[N],X=A[N],G=D*U*4*N;for(let re=0;re<Z.count;re++){const I=re*F;p===!0&&(o.fromBufferAttribute(Z,re),S[G+I+0]=o.x,S[G+I+1]=o.y,S[G+I+2]=o.z,S[G+I+3]=0),x===!0&&(o.fromBufferAttribute(W,re),S[G+I+4]=o.x,S[G+I+5]=o.y,S[G+I+6]=o.z,S[G+I+7]=0),v===!0&&(o.fromBufferAttribute(X,re),S[G+I+8]=o.x,S[G+I+9]=o.y,S[G+I+10]=o.z,S[G+I+11]=X.itemSize===4?o.w:1)}}m={count:g,texture:P,size:new et(D,U)},s.set(u,m),u.addEventListener("dispose",te)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let p=0;for(let v=0;v<d.length;v++)p+=d[v];const x=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(n,"morphTargetBaseInfluence",x),f.getUniforms().setValue(n,"morphTargetInfluences",d)}f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const _=d===void 0?0:d.length;let g=i[u.id];if(g===void 0||g.length!==_){g=[];for(let y=0;y<_;y++)g[y]=[y,0];i[u.id]=g}for(let y=0;y<_;y++){const b=g[y];b[0]=y,b[1]=d[y]}g.sort(dT);for(let y=0;y<8;y++)y<_&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(fT);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const b=a[y],A=b[0],w=b[1];A!==Number.MAX_SAFE_INTEGER&&w?(m&&u.getAttribute("morphTarget"+y)!==m[A]&&u.setAttribute("morphTarget"+y,m[A]),p&&u.getAttribute("morphNormal"+y)!==p[A]&&u.setAttribute("morphNormal"+y,p[A]),r[y]=w,x+=w):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),p&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const v=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function pT(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Tv extends Jn{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:oo,u!==oo&&u!==xa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===oo&&(i=cs),i===void 0&&u===xa&&(i=so),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Yn,this.minFilter=l!==void 0?l:Yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Av=new Jn,Cv=new Tv(1,1);Cv.compareFunction=fv;const Rv=new gv,Pv=new jb,Lv=new Ev,xg=[],yg=[],Sg=new Float32Array(16),bg=new Float32Array(9),Mg=new Float32Array(4);function Pa(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=xg[r];if(s===void 0&&(s=new Float32Array(r),xg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function fn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function dn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function rf(n,e){let t=yg[e];t===void 0&&(t=new Int32Array(e),yg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function mT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function gT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2fv(this.addr,e),dn(t,e)}}function _T(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;n.uniform3fv(this.addr,e),dn(t,e)}}function vT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4fv(this.addr,e),dn(t,e)}}function xT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,i))return;Mg.set(i),n.uniformMatrix2fv(this.addr,!1,Mg),dn(t,i)}}function yT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,i))return;bg.set(i),n.uniformMatrix3fv(this.addr,!1,bg),dn(t,i)}}function ST(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(fn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,i))return;Sg.set(i),n.uniformMatrix4fv(this.addr,!1,Sg),dn(t,i)}}function bT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function MT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2iv(this.addr,e),dn(t,e)}}function ET(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3iv(this.addr,e),dn(t,e)}}function wT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4iv(this.addr,e),dn(t,e)}}function TT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function AT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;n.uniform2uiv(this.addr,e),dn(t,e)}}function CT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;n.uniform3uiv(this.addr,e),dn(t,e)}}function RT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;n.uniform4uiv(this.addr,e),dn(t,e)}}function PT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Cv:Av;t.setTexture2D(e||s,r)}function LT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Pv,r)}function DT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Lv,r)}function IT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Rv,r)}function UT(n){switch(n){case 5126:return mT;case 35664:return gT;case 35665:return _T;case 35666:return vT;case 35674:return xT;case 35675:return yT;case 35676:return ST;case 5124:case 35670:return bT;case 35667:case 35671:return MT;case 35668:case 35672:return ET;case 35669:case 35673:return wT;case 5125:return TT;case 36294:return AT;case 36295:return CT;case 36296:return RT;case 35678:case 36198:case 36298:case 36306:case 35682:return PT;case 35679:case 36299:case 36307:return LT;case 35680:case 36300:case 36308:case 36293:return DT;case 36289:case 36303:case 36311:case 36292:return IT}}function NT(n,e){n.uniform1fv(this.addr,e)}function OT(n,e){const t=Pa(e,this.size,2);n.uniform2fv(this.addr,t)}function FT(n,e){const t=Pa(e,this.size,3);n.uniform3fv(this.addr,t)}function kT(n,e){const t=Pa(e,this.size,4);n.uniform4fv(this.addr,t)}function BT(n,e){const t=Pa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function zT(n,e){const t=Pa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function HT(n,e){const t=Pa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function GT(n,e){n.uniform1iv(this.addr,e)}function VT(n,e){n.uniform2iv(this.addr,e)}function WT(n,e){n.uniform3iv(this.addr,e)}function XT(n,e){n.uniform4iv(this.addr,e)}function $T(n,e){n.uniform1uiv(this.addr,e)}function YT(n,e){n.uniform2uiv(this.addr,e)}function qT(n,e){n.uniform3uiv(this.addr,e)}function jT(n,e){n.uniform4uiv(this.addr,e)}function KT(n,e,t){const i=this.cache,r=e.length,s=rf(t,r);fn(i,s)||(n.uniform1iv(this.addr,s),dn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Av,s[o])}function ZT(n,e,t){const i=this.cache,r=e.length,s=rf(t,r);fn(i,s)||(n.uniform1iv(this.addr,s),dn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Pv,s[o])}function JT(n,e,t){const i=this.cache,r=e.length,s=rf(t,r);fn(i,s)||(n.uniform1iv(this.addr,s),dn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Lv,s[o])}function QT(n,e,t){const i=this.cache,r=e.length,s=rf(t,r);fn(i,s)||(n.uniform1iv(this.addr,s),dn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Rv,s[o])}function eA(n){switch(n){case 5126:return NT;case 35664:return OT;case 35665:return FT;case 35666:return kT;case 35674:return BT;case 35675:return zT;case 35676:return HT;case 5124:case 35670:return GT;case 35667:case 35671:return VT;case 35668:case 35672:return WT;case 35669:case 35673:return XT;case 5125:return $T;case 36294:return YT;case 36295:return qT;case 36296:return jT;case 35678:case 36198:case 36298:case 36306:case 35682:return KT;case 35679:case 36299:case 36307:return ZT;case 35680:case 36300:case 36308:case 36293:return JT;case 36289:case 36303:case 36311:case 36292:return QT}}class tA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=UT(t.type)}}class nA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eA(t.type)}}class iA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const sd=/(\w+)(\])?(\[|\.)?/g;function Eg(n,e){n.seq.push(e),n.map[e.id]=e}function rA(n,e,t){const i=n.name,r=i.length;for(sd.lastIndex=0;;){const s=sd.exec(i),o=sd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Eg(t,c===void 0?new tA(a,n,e):new nA(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new iA(a),Eg(t,f)),t=f}}}class Qc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);rA(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function wg(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const sA=37297;let oA=0;function aA(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function lA(n){const e=Rt.getPrimaries(Rt.workingColorSpace),t=Rt.getPrimaries(n);let i;switch(e===t?i="":e===wu&&t===Eu?i="LinearDisplayP3ToLinearSRGB":e===Eu&&t===wu&&(i="LinearSRGBToLinearDisplayP3"),n){case Cs:case tf:return[i,"LinearTransferOETF"];case Yi:case $h:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Tg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+aA(n.getShaderSource(e),o)}else return r}function cA(n,e){const t=lA(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function uA(n,e){let t;switch(e){case vb:t="Linear";break;case xb:t="Reinhard";break;case yb:t="OptimizedCineon";break;case nv:t="ACESFilmic";break;case bb:t="AgX";break;case Mb:t="Neutral";break;case Sb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function fA(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qo).join(`
`)}function dA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function hA(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function pA(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Qo(n){return n!==""}function Ag(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qd(n){return n.replace(mA,_A)}const gA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _A(n,e){let t=at[e];if(t===void 0){const i=gA.get(e);if(i!==void 0)t=at[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qd(t)}const vA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rg(n){return n.replace(vA,xA)}function xA(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Pg(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function yA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ev?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===$1?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ar&&(e="SHADOWMAP_TYPE_VSM"),e}function SA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _a:case va:e="ENVMAP_TYPE_CUBE";break;case ef:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case va:e="ENVMAP_MODE_REFRACTION";break}return e}function MA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case tv:e="ENVMAP_BLENDING_MULTIPLY";break;case gb:e="ENVMAP_BLENDING_MIX";break;case _b:e="ENVMAP_BLENDING_ADD";break}return e}function EA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function wA(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=yA(t),c=SA(t),u=bA(t),f=MA(t),d=EA(t),h=t.isWebGL2?"":fA(t),_=dA(t),g=hA(s),m=r.createProgram();let p,x,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qo).join(`
`),p.length>0&&(p+=`
`),x=[h,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qo).join(`
`),x.length>0&&(x+=`
`)):(p=[Pg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),x=[h,Pg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_s?"#define TONE_MAPPING":"",t.toneMapping!==_s?at.tonemapping_pars_fragment:"",t.toneMapping!==_s?uA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,cA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qo).join(`
`)),o=Qd(o),o=Ag(o,t),o=Cg(o,t),a=Qd(a),a=Ag(a,t),a=Cg(a,t),o=Rg(o),a=Rg(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ym?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ym?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=v+p+o,b=v+x+a,A=wg(r,r.VERTEX_SHADER,y),w=wg(r,r.FRAGMENT_SHADER,b);r.attachShader(m,A),r.attachShader(m,w),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function D(F){if(n.debug.checkShaderErrors){const te=r.getProgramInfoLog(m).trim(),N=r.getShaderInfoLog(A).trim(),Z=r.getShaderInfoLog(w).trim();let W=!0,X=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,A,w);else{const G=Tg(r,A,"vertex"),re=Tg(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+te+`
`+G+`
`+re)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(N===""||Z==="")&&(X=!1);X&&(F.diagnostics={runnable:W,programLog:te,vertexShader:{log:N,prefix:p},fragmentShader:{log:Z,prefix:x}})}r.deleteShader(A),r.deleteShader(w),U=new Qc(r,m),S=pA(r,m)}let U;this.getUniforms=function(){return U===void 0&&D(this),U};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(m,sA)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=oA++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=w,this}let TA=0;class AA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new CA(e),t.set(e,i)),i}}class CA{constructor(e){this.id=TA++,this.code=e,this.usedTimes=0}}function RA(n,e,t,i,r,s,o){const a=new _v,l=new AA,c=new Set,u=[],f=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let _=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,P,F,te,N){const Z=te.fog,W=N.geometry,X=S.isMeshStandardMaterial?te.environment:null,G=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),re=G&&G.mapping===ef?G.image.height:null,I=g[S.type];S.precision!==null&&(_=r.getMaxPrecision(S.precision),_!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",_,"instead."));const ue=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,_e=ue!==void 0?ue.length:0;let Xe=0;W.morphAttributes.position!==void 0&&(Xe=1),W.morphAttributes.normal!==void 0&&(Xe=2),W.morphAttributes.color!==void 0&&(Xe=3);let J,de,ve,De;if(I){const _t=ur[I];J=_t.vertexShader,de=_t.fragmentShader}else J=S.vertexShader,de=S.fragmentShader,l.update(S),ve=l.getVertexShaderID(S),De=l.getFragmentShaderID(S);const Pe=n.getRenderTarget(),Ee=N.isInstancedMesh===!0,rt=N.isBatchedMesh===!0,Be=!!S.map,M=!!S.matcap,O=!!G,B=!!S.aoMap,ie=!!S.lightMap,q=!!S.bumpMap,L=!!S.normalMap,oe=!!S.displacementMap,ae=!!S.emissiveMap,ce=!!S.metalnessMap,T=!!S.roughnessMap,E=S.anisotropy>0,k=S.clearcoat>0,$=S.iridescence>0,K=S.sheen>0,se=S.transmission>0,pe=E&&!!S.anisotropyMap,xe=k&&!!S.clearcoatMap,fe=k&&!!S.clearcoatNormalMap,he=k&&!!S.clearcoatRoughnessMap,Ve=$&&!!S.iridescenceMap,le=$&&!!S.iridescenceThicknessMap,xt=K&&!!S.sheenColorMap,Ke=K&&!!S.sheenRoughnessMap,Le=!!S.specularMap,Ce=!!S.specularColorMap,Ue=!!S.specularIntensityMap,tt=se&&!!S.transmissionMap,we=se&&!!S.thicknessMap,gt=!!S.gradientMap,z=!!S.alphaMap,ye=S.alphaTest>0,ee=!!S.alphaHash,me=!!S.extensions;let Ae=_s;S.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(Ae=n.toneMapping);const Qe={isWebGL2:f,shaderID:I,shaderType:S.type,shaderName:S.name,vertexShader:J,fragmentShader:de,defines:S.defines,customVertexShaderID:ve,customFragmentShaderID:De,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:_,batching:rt,instancing:Ee,instancingColor:Ee&&N.instanceColor!==null,instancingMorph:Ee&&N.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Pe===null?n.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:Cs,alphaToCoverage:!!S.alphaToCoverage,map:Be,matcap:M,envMap:O,envMapMode:O&&G.mapping,envMapCubeUVHeight:re,aoMap:B,lightMap:ie,bumpMap:q,normalMap:L,displacementMap:h&&oe,emissiveMap:ae,normalMapObjectSpace:L&&S.normalMapType===Nb,normalMapTangentSpace:L&&S.normalMapType===Ub,metalnessMap:ce,roughnessMap:T,anisotropy:E,anisotropyMap:pe,clearcoat:k,clearcoatMap:xe,clearcoatNormalMap:fe,clearcoatRoughnessMap:he,iridescence:$,iridescenceMap:Ve,iridescenceThicknessMap:le,sheen:K,sheenColorMap:xt,sheenRoughnessMap:Ke,specularMap:Le,specularColorMap:Ce,specularIntensityMap:Ue,transmission:se,transmissionMap:tt,thicknessMap:we,gradientMap:gt,opaque:S.transparent===!1&&S.blending===aa&&S.alphaToCoverage===!1,alphaMap:z,alphaTest:ye,alphaHash:ee,combine:S.combine,mapUv:Be&&m(S.map.channel),aoMapUv:B&&m(S.aoMap.channel),lightMapUv:ie&&m(S.lightMap.channel),bumpMapUv:q&&m(S.bumpMap.channel),normalMapUv:L&&m(S.normalMap.channel),displacementMapUv:oe&&m(S.displacementMap.channel),emissiveMapUv:ae&&m(S.emissiveMap.channel),metalnessMapUv:ce&&m(S.metalnessMap.channel),roughnessMapUv:T&&m(S.roughnessMap.channel),anisotropyMapUv:pe&&m(S.anisotropyMap.channel),clearcoatMapUv:xe&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:fe&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:le&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&m(S.sheenRoughnessMap.channel),specularMapUv:Le&&m(S.specularMap.channel),specularColorMapUv:Ce&&m(S.specularColorMap.channel),specularIntensityMapUv:Ue&&m(S.specularIntensityMap.channel),transmissionMapUv:tt&&m(S.transmissionMap.channel),thicknessMapUv:we&&m(S.thicknessMap.channel),alphaMapUv:z&&m(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(L||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&(Be||z),fog:!!Z,useFog:S.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Xe,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ae,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Be&&S.map.isVideoTexture===!0&&Rt.getTransfer(S.map.colorSpace)===kt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Nr,flipSided:S.side===Zn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:me&&S.extensions.derivatives===!0,extensionFragDepth:me&&S.extensions.fragDepth===!0,extensionDrawBuffers:me&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:me&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function x(S){const P=[];if(S.shaderID?P.push(S.shaderID):(P.push(S.customVertexShaderID),P.push(S.customFragmentShaderID)),S.defines!==void 0)for(const F in S.defines)P.push(F),P.push(S.defines[F]);return S.isRawShaderMaterial===!1&&(v(P,S),y(P,S),P.push(n.outputColorSpace)),P.push(S.customProgramCacheKey),P.join()}function v(S,P){S.push(P.precision),S.push(P.outputColorSpace),S.push(P.envMapMode),S.push(P.envMapCubeUVHeight),S.push(P.mapUv),S.push(P.alphaMapUv),S.push(P.lightMapUv),S.push(P.aoMapUv),S.push(P.bumpMapUv),S.push(P.normalMapUv),S.push(P.displacementMapUv),S.push(P.emissiveMapUv),S.push(P.metalnessMapUv),S.push(P.roughnessMapUv),S.push(P.anisotropyMapUv),S.push(P.clearcoatMapUv),S.push(P.clearcoatNormalMapUv),S.push(P.clearcoatRoughnessMapUv),S.push(P.iridescenceMapUv),S.push(P.iridescenceThicknessMapUv),S.push(P.sheenColorMapUv),S.push(P.sheenRoughnessMapUv),S.push(P.specularMapUv),S.push(P.specularColorMapUv),S.push(P.specularIntensityMapUv),S.push(P.transmissionMapUv),S.push(P.thicknessMapUv),S.push(P.combine),S.push(P.fogExp2),S.push(P.sizeAttenuation),S.push(P.morphTargetsCount),S.push(P.morphAttributeCount),S.push(P.numDirLights),S.push(P.numPointLights),S.push(P.numSpotLights),S.push(P.numSpotLightMaps),S.push(P.numHemiLights),S.push(P.numRectAreaLights),S.push(P.numDirLightShadows),S.push(P.numPointLightShadows),S.push(P.numSpotLightShadows),S.push(P.numSpotLightShadowsWithMaps),S.push(P.numLightProbes),S.push(P.shadowMapType),S.push(P.toneMapping),S.push(P.numClippingPlanes),S.push(P.numClipIntersection),S.push(P.depthPacking)}function y(S,P){a.disableAll(),P.isWebGL2&&a.enable(0),P.supportsVertexTextures&&a.enable(1),P.instancing&&a.enable(2),P.instancingColor&&a.enable(3),P.instancingMorph&&a.enable(4),P.matcap&&a.enable(5),P.envMap&&a.enable(6),P.normalMapObjectSpace&&a.enable(7),P.normalMapTangentSpace&&a.enable(8),P.clearcoat&&a.enable(9),P.iridescence&&a.enable(10),P.alphaTest&&a.enable(11),P.vertexColors&&a.enable(12),P.vertexAlphas&&a.enable(13),P.vertexUv1s&&a.enable(14),P.vertexUv2s&&a.enable(15),P.vertexUv3s&&a.enable(16),P.vertexTangents&&a.enable(17),P.anisotropy&&a.enable(18),P.alphaHash&&a.enable(19),P.batching&&a.enable(20),S.push(a.mask),a.disableAll(),P.fog&&a.enable(0),P.useFog&&a.enable(1),P.flatShading&&a.enable(2),P.logarithmicDepthBuffer&&a.enable(3),P.skinning&&a.enable(4),P.morphTargets&&a.enable(5),P.morphNormals&&a.enable(6),P.morphColors&&a.enable(7),P.premultipliedAlpha&&a.enable(8),P.shadowMapEnabled&&a.enable(9),P.useLegacyLights&&a.enable(10),P.doubleSided&&a.enable(11),P.flipSided&&a.enable(12),P.useDepthPacking&&a.enable(13),P.dithering&&a.enable(14),P.transmission&&a.enable(15),P.sheen&&a.enable(16),P.opaque&&a.enable(17),P.pointsUvs&&a.enable(18),P.decodeVideoTexture&&a.enable(19),P.alphaToCoverage&&a.enable(20),S.push(a.mask)}function b(S){const P=g[S.type];let F;if(P){const te=ur[P];F=lM.clone(te.uniforms)}else F=S.uniforms;return F}function A(S,P){let F;for(let te=0,N=u.length;te<N;te++){const Z=u[te];if(Z.cacheKey===P){F=Z,++F.usedTimes;break}}return F===void 0&&(F=new wA(n,P,S,s),u.push(F)),F}function w(S){if(--S.usedTimes===0){const P=u.indexOf(S);u[P]=u[u.length-1],u.pop(),S.destroy()}}function D(S){l.remove(S)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:b,acquireProgram:A,releaseProgram:w,releaseShaderCache:D,programs:u,dispose:U}}function PA(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function LA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Lg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Dg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,h,_,g,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=g,p.group=m),e++,p}function a(f,d,h,_,g,m){const p=o(f,d,h,_,g,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function l(f,d,h,_,g,m){const p=o(f,d,h,_,g,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||LA),i.length>1&&i.sort(d||Lg),r.length>1&&r.sort(d||Lg)}function u(){for(let f=e,d=n.length;f<d;f++){const h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function DA(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Dg,n.set(i,[o])):r>=s.length?(o=new Dg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function IA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new vt};break;case"SpotLight":t={position:new H,direction:new H,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new vt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":t={color:new vt,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function UA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let NA=0;function OA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function FA(n,e){const t=new IA,i=UA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new H);const s=new H,o=new Bt,a=new Bt;function l(u,f){let d=0,h=0,_=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let g=0,m=0,p=0,x=0,v=0,y=0,b=0,A=0,w=0,D=0,U=0;u.sort(OA);const S=f===!0?Math.PI:1;for(let F=0,te=u.length;F<te;F++){const N=u[F],Z=N.color,W=N.intensity,X=N.distance,G=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=Z.r*W*S,h+=Z.g*W*S,_+=Z.b*W*S;else if(N.isLightProbe){for(let re=0;re<9;re++)r.probe[re].addScaledVector(N.sh.coefficients[re],W);U++}else if(N.isDirectionalLight){const re=t.get(N);if(re.color.copy(N.color).multiplyScalar(N.intensity*S),N.castShadow){const I=N.shadow,ue=i.get(N);ue.shadowBias=I.bias,ue.shadowNormalBias=I.normalBias,ue.shadowRadius=I.radius,ue.shadowMapSize=I.mapSize,r.directionalShadow[g]=ue,r.directionalShadowMap[g]=G,r.directionalShadowMatrix[g]=N.shadow.matrix,y++}r.directional[g]=re,g++}else if(N.isSpotLight){const re=t.get(N);re.position.setFromMatrixPosition(N.matrixWorld),re.color.copy(Z).multiplyScalar(W*S),re.distance=X,re.coneCos=Math.cos(N.angle),re.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),re.decay=N.decay,r.spot[p]=re;const I=N.shadow;if(N.map&&(r.spotLightMap[w]=N.map,w++,I.updateMatrices(N),N.castShadow&&D++),r.spotLightMatrix[p]=I.matrix,N.castShadow){const ue=i.get(N);ue.shadowBias=I.bias,ue.shadowNormalBias=I.normalBias,ue.shadowRadius=I.radius,ue.shadowMapSize=I.mapSize,r.spotShadow[p]=ue,r.spotShadowMap[p]=G,A++}p++}else if(N.isRectAreaLight){const re=t.get(N);re.color.copy(Z).multiplyScalar(W),re.halfWidth.set(N.width*.5,0,0),re.halfHeight.set(0,N.height*.5,0),r.rectArea[x]=re,x++}else if(N.isPointLight){const re=t.get(N);if(re.color.copy(N.color).multiplyScalar(N.intensity*S),re.distance=N.distance,re.decay=N.decay,N.castShadow){const I=N.shadow,ue=i.get(N);ue.shadowBias=I.bias,ue.shadowNormalBias=I.normalBias,ue.shadowRadius=I.radius,ue.shadowMapSize=I.mapSize,ue.shadowCameraNear=I.camera.near,ue.shadowCameraFar=I.camera.far,r.pointShadow[m]=ue,r.pointShadowMap[m]=G,r.pointShadowMatrix[m]=N.shadow.matrix,b++}r.point[m]=re,m++}else if(N.isHemisphereLight){const re=t.get(N);re.skyColor.copy(N.color).multiplyScalar(W*S),re.groundColor.copy(N.groundColor).multiplyScalar(W*S),r.hemi[v]=re,v++}}x>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_FLOAT_1,r.rectAreaLTC2=Te.LTC_FLOAT_2):(r.rectAreaLTC1=Te.LTC_HALF_1,r.rectAreaLTC2=Te.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_FLOAT_1,r.rectAreaLTC2=Te.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_HALF_1,r.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=h,r.ambient[2]=_;const P=r.hash;(P.directionalLength!==g||P.pointLength!==m||P.spotLength!==p||P.rectAreaLength!==x||P.hemiLength!==v||P.numDirectionalShadows!==y||P.numPointShadows!==b||P.numSpotShadows!==A||P.numSpotMaps!==w||P.numLightProbes!==U)&&(r.directional.length=g,r.spot.length=p,r.rectArea.length=x,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=A+w-D,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=U,P.directionalLength=g,P.pointLength=m,P.spotLength=p,P.rectAreaLength=x,P.hemiLength=v,P.numDirectionalShadows=y,P.numPointShadows=b,P.numSpotShadows=A,P.numSpotMaps=w,P.numLightProbes=U,r.version=NA++)}function c(u,f){let d=0,h=0,_=0,g=0,m=0;const p=f.matrixWorldInverse;for(let x=0,v=u.length;x<v;x++){const y=u[x];if(y.isDirectionalLight){const b=r.directional[d];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),d++}else if(y.isSpotLight){const b=r.spot[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),_++}else if(y.isRectAreaLight){const b=r.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),a.identity(),o.copy(y.matrixWorld),o.premultiply(p),a.extractRotation(o),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const b=r.point[h];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),h++}else if(y.isHemisphereLight){const b=r.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:r}}function Ig(n,e){const t=new FA(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function kA(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Ig(n,e),t.set(s,[l])):o>=a.length?(l=new Ig(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class BA extends yo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Db,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zA extends yo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const HA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GA=`uniform sampler2D shadow_pass;
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
}`;function VA(n,e,t){let i=new qh;const r=new et,s=new et,o=new Gt,a=new BA({depthPacking:Ib}),l=new zA,c={},u=t.maxTextureSize,f={[Xr]:Zn,[Zn]:Xr,[Nr]:Nr},d=new _r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:HA,fragmentShader:GA}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const _=new ui;_.setAttribute("position",new Bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ni(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ev;let p=this.type;this.render=function(A,w,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const U=n.getRenderTarget(),S=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),F=n.state;F.setBlending(gs),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const te=p!==Ar&&this.type===Ar,N=p===Ar&&this.type!==Ar;for(let Z=0,W=A.length;Z<W;Z++){const X=A[Z],G=X.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const re=G.getFrameExtents();if(r.multiply(re),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/re.x),r.x=s.x*re.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/re.y),r.y=s.y*re.y,G.mapSize.y=s.y)),G.map===null||te===!0||N===!0){const ue=this.type!==Ar?{minFilter:Yn,magFilter:Yn}:{};G.map!==null&&G.map.dispose(),G.map=new mo(r.x,r.y,ue),G.map.texture.name=X.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const I=G.getViewportCount();for(let ue=0;ue<I;ue++){const _e=G.getViewport(ue);o.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),F.viewport(o),G.updateMatrices(X,ue),i=G.getFrustum(),y(w,D,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===Ar&&x(G,D),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(U,S,P)};function x(A,w){const D=e.update(g);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new mo(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(w,null,D,d,g,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(w,null,D,h,g,null)}function v(A,w,D,U){let S=null;const P=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)S=P;else if(S=D.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const F=S.uuid,te=w.uuid;let N=c[F];N===void 0&&(N={},c[F]=N);let Z=N[te];Z===void 0&&(Z=S.clone(),N[te]=Z,w.addEventListener("dispose",b)),S=Z}if(S.visible=w.visible,S.wireframe=w.wireframe,U===Ar?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:f[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=n.properties.get(S);F.light=D}return S}function y(A,w,D,U,S){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Ar)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const te=e.update(A),N=A.material;if(Array.isArray(N)){const Z=te.groups;for(let W=0,X=Z.length;W<X;W++){const G=Z[W],re=N[G.materialIndex];if(re&&re.visible){const I=v(A,re,U,S);A.onBeforeShadow(n,A,w,D,te,I,G),n.renderBufferDirect(D,null,te,I,A,G),A.onAfterShadow(n,A,w,D,te,I,G)}}}else if(N.visible){const Z=v(A,N,U,S);A.onBeforeShadow(n,A,w,D,te,Z,null),n.renderBufferDirect(D,null,te,Z,A,null),A.onAfterShadow(n,A,w,D,te,Z,null)}}const F=A.children;for(let te=0,N=F.length;te<N;te++)y(F[te],w,D,U,S)}function b(A){A.target.removeEventListener("dispose",b);for(const D in c){const U=c[D],S=A.target.uuid;S in U&&(U[S].dispose(),delete U[S])}}}function WA(n,e,t){const i=t.isWebGL2;function r(){let z=!1;const ye=new Gt;let ee=null;const me=new Gt(0,0,0,0);return{setMask:function(Ae){ee!==Ae&&!z&&(n.colorMask(Ae,Ae,Ae,Ae),ee=Ae)},setLocked:function(Ae){z=Ae},setClear:function(Ae,Qe,_t,ze,Fe){Fe===!0&&(Ae*=ze,Qe*=ze,_t*=ze),ye.set(Ae,Qe,_t,ze),me.equals(ye)===!1&&(n.clearColor(Ae,Qe,_t,ze),me.copy(ye))},reset:function(){z=!1,ee=null,me.set(-1,0,0,0)}}}function s(){let z=!1,ye=null,ee=null,me=null;return{setTest:function(Ae){Ae?Ee(n.DEPTH_TEST):rt(n.DEPTH_TEST)},setMask:function(Ae){ye!==Ae&&!z&&(n.depthMask(Ae),ye=Ae)},setFunc:function(Ae){if(ee!==Ae){switch(Ae){case cb:n.depthFunc(n.NEVER);break;case ub:n.depthFunc(n.ALWAYS);break;case fb:n.depthFunc(n.LESS);break;case Su:n.depthFunc(n.LEQUAL);break;case db:n.depthFunc(n.EQUAL);break;case hb:n.depthFunc(n.GEQUAL);break;case pb:n.depthFunc(n.GREATER);break;case mb:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=Ae}},setLocked:function(Ae){z=Ae},setClear:function(Ae){me!==Ae&&(n.clearDepth(Ae),me=Ae)},reset:function(){z=!1,ye=null,ee=null,me=null}}}function o(){let z=!1,ye=null,ee=null,me=null,Ae=null,Qe=null,_t=null,ze=null,Fe=null;return{setTest:function(Ge){z||(Ge?Ee(n.STENCIL_TEST):rt(n.STENCIL_TEST))},setMask:function(Ge){ye!==Ge&&!z&&(n.stencilMask(Ge),ye=Ge)},setFunc:function(Ge,ge,Ye){(ee!==Ge||me!==ge||Ae!==Ye)&&(n.stencilFunc(Ge,ge,Ye),ee=Ge,me=ge,Ae=Ye)},setOp:function(Ge,ge,Ye){(Qe!==Ge||_t!==ge||ze!==Ye)&&(n.stencilOp(Ge,ge,Ye),Qe=Ge,_t=ge,ze=Ye)},setLocked:function(Ge){z=Ge},setClear:function(Ge){Fe!==Ge&&(n.clearStencil(Ge),Fe=Ge)},reset:function(){z=!1,ye=null,ee=null,me=null,Ae=null,Qe=null,_t=null,ze=null,Fe=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let d={},h={},_=new WeakMap,g=[],m=null,p=!1,x=null,v=null,y=null,b=null,A=null,w=null,D=null,U=new vt(0,0,0),S=0,P=!1,F=null,te=null,N=null,Z=null,W=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,re=0;const I=n.getParameter(n.VERSION);I.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(I)[1]),G=re>=1):I.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),G=re>=2);let ue=null,_e={};const Xe=n.getParameter(n.SCISSOR_BOX),J=n.getParameter(n.VIEWPORT),de=new Gt().fromArray(Xe),ve=new Gt().fromArray(J);function De(z,ye,ee,me){const Ae=new Uint8Array(4),Qe=n.createTexture();n.bindTexture(z,Qe),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let _t=0;_t<ee;_t++)i&&(z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY)?n.texImage3D(ye,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(ye+_t,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return Qe}const Pe={};Pe[n.TEXTURE_2D]=De(n.TEXTURE_2D,n.TEXTURE_2D,1),Pe[n.TEXTURE_CUBE_MAP]=De(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Pe[n.TEXTURE_2D_ARRAY]=De(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Pe[n.TEXTURE_3D]=De(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ee(n.DEPTH_TEST),l.setFunc(Su),oe(!1),ae(mm),Ee(n.CULL_FACE),q(gs);function Ee(z){d[z]!==!0&&(n.enable(z),d[z]=!0)}function rt(z){d[z]!==!1&&(n.disable(z),d[z]=!1)}function Be(z,ye){return h[z]!==ye?(n.bindFramebuffer(z,ye),h[z]=ye,i&&(z===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ye),z===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ye)),!0):!1}function M(z,ye){let ee=g,me=!1;if(z){ee=_.get(ye),ee===void 0&&(ee=[],_.set(ye,ee));const Ae=z.textures;if(ee.length!==Ae.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let Qe=0,_t=Ae.length;Qe<_t;Qe++)ee[Qe]=n.COLOR_ATTACHMENT0+Qe;ee.length=Ae.length,me=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,me=!0);if(me)if(t.isWebGL2)n.drawBuffers(ee);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function O(z){return m!==z?(n.useProgram(z),m=z,!0):!1}const B={[Js]:n.FUNC_ADD,[q1]:n.FUNC_SUBTRACT,[j1]:n.FUNC_REVERSE_SUBTRACT};if(i)B[vm]=n.MIN,B[xm]=n.MAX;else{const z=e.get("EXT_blend_minmax");z!==null&&(B[vm]=z.MIN_EXT,B[xm]=z.MAX_EXT)}const ie={[K1]:n.ZERO,[Z1]:n.ONE,[J1]:n.SRC_COLOR,[Vd]:n.SRC_ALPHA,[rb]:n.SRC_ALPHA_SATURATE,[nb]:n.DST_COLOR,[eb]:n.DST_ALPHA,[Q1]:n.ONE_MINUS_SRC_COLOR,[Wd]:n.ONE_MINUS_SRC_ALPHA,[ib]:n.ONE_MINUS_DST_COLOR,[tb]:n.ONE_MINUS_DST_ALPHA,[sb]:n.CONSTANT_COLOR,[ob]:n.ONE_MINUS_CONSTANT_COLOR,[ab]:n.CONSTANT_ALPHA,[lb]:n.ONE_MINUS_CONSTANT_ALPHA};function q(z,ye,ee,me,Ae,Qe,_t,ze,Fe,Ge){if(z===gs){p===!0&&(rt(n.BLEND),p=!1);return}if(p===!1&&(Ee(n.BLEND),p=!0),z!==Y1){if(z!==x||Ge!==P){if((v!==Js||A!==Js)&&(n.blendEquation(n.FUNC_ADD),v=Js,A=Js),Ge)switch(z){case aa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fl:n.blendFunc(n.ONE,n.ONE);break;case gm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _m:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case aa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case gm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _m:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}y=null,b=null,w=null,D=null,U.set(0,0,0),S=0,x=z,P=Ge}return}Ae=Ae||ye,Qe=Qe||ee,_t=_t||me,(ye!==v||Ae!==A)&&(n.blendEquationSeparate(B[ye],B[Ae]),v=ye,A=Ae),(ee!==y||me!==b||Qe!==w||_t!==D)&&(n.blendFuncSeparate(ie[ee],ie[me],ie[Qe],ie[_t]),y=ee,b=me,w=Qe,D=_t),(ze.equals(U)===!1||Fe!==S)&&(n.blendColor(ze.r,ze.g,ze.b,Fe),U.copy(ze),S=Fe),x=z,P=!1}function L(z,ye){z.side===Nr?rt(n.CULL_FACE):Ee(n.CULL_FACE);let ee=z.side===Zn;ye&&(ee=!ee),oe(ee),z.blending===aa&&z.transparent===!1?q(gs):q(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),a.setMask(z.colorWrite);const me=z.stencilWrite;c.setTest(me),me&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),T(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Ee(n.SAMPLE_ALPHA_TO_COVERAGE):rt(n.SAMPLE_ALPHA_TO_COVERAGE)}function oe(z){F!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),F=z)}function ae(z){z!==W1?(Ee(n.CULL_FACE),z!==te&&(z===mm?n.cullFace(n.BACK):z===X1?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):rt(n.CULL_FACE),te=z}function ce(z){z!==N&&(G&&n.lineWidth(z),N=z)}function T(z,ye,ee){z?(Ee(n.POLYGON_OFFSET_FILL),(Z!==ye||W!==ee)&&(n.polygonOffset(ye,ee),Z=ye,W=ee)):rt(n.POLYGON_OFFSET_FILL)}function E(z){z?Ee(n.SCISSOR_TEST):rt(n.SCISSOR_TEST)}function k(z){z===void 0&&(z=n.TEXTURE0+X-1),ue!==z&&(n.activeTexture(z),ue=z)}function $(z,ye,ee){ee===void 0&&(ue===null?ee=n.TEXTURE0+X-1:ee=ue);let me=_e[ee];me===void 0&&(me={type:void 0,texture:void 0},_e[ee]=me),(me.type!==z||me.texture!==ye)&&(ue!==ee&&(n.activeTexture(ee),ue=ee),n.bindTexture(z,ye||Pe[z]),me.type=z,me.texture=ye)}function K(){const z=_e[ue];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xe(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xt(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ke(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Le(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ce(z){de.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),de.copy(z))}function Ue(z){ve.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),ve.copy(z))}function tt(z,ye){let ee=f.get(ye);ee===void 0&&(ee=new WeakMap,f.set(ye,ee));let me=ee.get(z);me===void 0&&(me=n.getUniformBlockIndex(ye,z.name),ee.set(z,me))}function we(z,ye){const me=f.get(ye).get(z);u.get(ye)!==me&&(n.uniformBlockBinding(ye,me,z.__bindingPointIndex),u.set(ye,me))}function gt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ue=null,_e={},h={},_=new WeakMap,g=[],m=null,p=!1,x=null,v=null,y=null,b=null,A=null,w=null,D=null,U=new vt(0,0,0),S=0,P=!1,F=null,te=null,N=null,Z=null,W=null,de.set(0,0,n.canvas.width,n.canvas.height),ve.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ee,disable:rt,bindFramebuffer:Be,drawBuffers:M,useProgram:O,setBlending:q,setMaterial:L,setFlipSided:oe,setCullFace:ae,setLineWidth:ce,setPolygonOffset:T,setScissorTest:E,activeTexture:k,bindTexture:$,unbindTexture:K,compressedTexImage2D:se,compressedTexImage3D:pe,texImage2D:Ke,texImage3D:Le,updateUBOMapping:tt,uniformBlockBinding:we,texStorage2D:le,texStorage3D:xt,texSubImage2D:xe,texSubImage3D:fe,compressedTexSubImage2D:he,compressedTexSubImage3D:Ve,scissor:Ce,viewport:Ue,reset:gt}}function XA(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new et,f=new WeakMap;let d;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,E){return _?new OffscreenCanvas(T,E):Au("canvas")}function m(T,E,k,$){let K=1;const se=ce(T);if((se.width>$||se.height>$)&&(K=$/Math.max(se.width,se.height)),K<1||E===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const pe=E?Zd:Math.floor,xe=pe(K*se.width),fe=pe(K*se.height);d===void 0&&(d=g(xe,fe));const he=k?g(xe,fe):d;return he.width=xe,he.height=fe,he.getContext("2d").drawImage(T,0,0,xe,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+xe+"x"+fe+")."),he}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),T;return T}function p(T){const E=ce(T);return qm(E.width)&&qm(E.height)}function x(T){return a?!1:T.wrapS!==qi||T.wrapT!==qi||T.minFilter!==Yn&&T.minFilter!==ti}function v(T,E){return T.generateMipmaps&&E&&T.minFilter!==Yn&&T.minFilter!==ti}function y(T){n.generateMipmap(T)}function b(T,E,k,$,K=!1){if(a===!1)return E;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let se=E;if(E===n.RED&&(k===n.FLOAT&&(se=n.R32F),k===n.HALF_FLOAT&&(se=n.R16F),k===n.UNSIGNED_BYTE&&(se=n.R8)),E===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(se=n.R8UI),k===n.UNSIGNED_SHORT&&(se=n.R16UI),k===n.UNSIGNED_INT&&(se=n.R32UI),k===n.BYTE&&(se=n.R8I),k===n.SHORT&&(se=n.R16I),k===n.INT&&(se=n.R32I)),E===n.RG&&(k===n.FLOAT&&(se=n.RG32F),k===n.HALF_FLOAT&&(se=n.RG16F),k===n.UNSIGNED_BYTE&&(se=n.RG8)),E===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(se=n.RG8UI),k===n.UNSIGNED_SHORT&&(se=n.RG16UI),k===n.UNSIGNED_INT&&(se=n.RG32UI),k===n.BYTE&&(se=n.RG8I),k===n.SHORT&&(se=n.RG16I),k===n.INT&&(se=n.RG32I)),E===n.RGBA){const pe=K?Mu:Rt.getTransfer($);k===n.FLOAT&&(se=n.RGBA32F),k===n.HALF_FLOAT&&(se=n.RGBA16F),k===n.UNSIGNED_BYTE&&(se=pe===kt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function A(T,E,k){return v(T,k)===!0||T.isFramebufferTexture&&T.minFilter!==Yn&&T.minFilter!==ti?Math.log2(Math.max(E.width,E.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?E.mipmaps.length:1}function w(T){return T===Yn||T===ym||T===Na?n.NEAREST:n.LINEAR}function D(T){const E=T.target;E.removeEventListener("dispose",D),S(E),E.isVideoTexture&&f.delete(E)}function U(T){const E=T.target;E.removeEventListener("dispose",U),F(E)}function S(T){const E=i.get(T);if(E.__webglInit===void 0)return;const k=T.source,$=h.get(k);if($){const K=$[E.__cacheKey];K.usedTimes--,K.usedTimes===0&&P(T),Object.keys($).length===0&&h.delete(k)}i.remove(T)}function P(T){const E=i.get(T);n.deleteTexture(E.__webglTexture);const k=T.source,$=h.get(k);delete $[E.__cacheKey],o.memory.textures--}function F(T){const E=i.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(E.__webglFramebuffer[$]))for(let K=0;K<E.__webglFramebuffer[$].length;K++)n.deleteFramebuffer(E.__webglFramebuffer[$][K]);else n.deleteFramebuffer(E.__webglFramebuffer[$]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[$])}else{if(Array.isArray(E.__webglFramebuffer))for(let $=0;$<E.__webglFramebuffer.length;$++)n.deleteFramebuffer(E.__webglFramebuffer[$]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let $=0;$<E.__webglColorRenderbuffer.length;$++)E.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[$]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const k=T.textures;for(let $=0,K=k.length;$<K;$++){const se=i.get(k[$]);se.__webglTexture&&(n.deleteTexture(se.__webglTexture),o.memory.textures--),i.remove(k[$])}i.remove(T)}let te=0;function N(){te=0}function Z(){const T=te;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),te+=1,T}function W(T){const E=[];return E.push(T.wrapS),E.push(T.wrapT),E.push(T.wrapR||0),E.push(T.magFilter),E.push(T.minFilter),E.push(T.anisotropy),E.push(T.internalFormat),E.push(T.format),E.push(T.type),E.push(T.generateMipmaps),E.push(T.premultiplyAlpha),E.push(T.flipY),E.push(T.unpackAlignment),E.push(T.colorSpace),E.join()}function X(T,E){const k=i.get(T);if(T.isVideoTexture&&oe(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){const $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(k,T,E);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+E)}function G(T,E){const k=i.get(T);if(T.version>0&&k.__version!==T.version){ve(k,T,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+E)}function re(T,E){const k=i.get(T);if(T.version>0&&k.__version!==T.version){ve(k,T,E);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+E)}function I(T,E){const k=i.get(T);if(T.version>0&&k.__version!==T.version){De(k,T,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+E)}const ue={[$d]:n.REPEAT,[qi]:n.CLAMP_TO_EDGE,[Yd]:n.MIRRORED_REPEAT},_e={[Yn]:n.NEAREST,[ym]:n.NEAREST_MIPMAP_NEAREST,[Na]:n.NEAREST_MIPMAP_LINEAR,[ti]:n.LINEAR,[Cf]:n.LINEAR_MIPMAP_NEAREST,[eo]:n.LINEAR_MIPMAP_LINEAR},Xe={[Ob]:n.NEVER,[Gb]:n.ALWAYS,[Fb]:n.LESS,[fv]:n.LEQUAL,[kb]:n.EQUAL,[Hb]:n.GEQUAL,[Bb]:n.GREATER,[zb]:n.NOTEQUAL};function J(T,E,k){if(E.type===Or&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ti||E.magFilter===Cf||E.magFilter===Na||E.magFilter===eo||E.minFilter===ti||E.minFilter===Cf||E.minFilter===Na||E.minFilter===eo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),k?(n.texParameteri(T,n.TEXTURE_WRAP_S,ue[E.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ue[E.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ue[E.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,_e[E.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,_e[E.minFilter])):(n.texParameteri(T,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(T,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==qi||E.wrapT!==qi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,n.TEXTURE_MAG_FILTER,w(E.magFilter)),n.texParameteri(T,n.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==Yn&&E.minFilter!==ti&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Xe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Yn||E.minFilter!==Na&&E.minFilter!==eo||E.type===Or&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Ul&&e.has("OES_texture_half_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function de(T,E){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,E.addEventListener("dispose",D));const $=E.source;let K=h.get($);K===void 0&&(K={},h.set($,K));const se=W(E);if(se!==T.__cacheKey){K[se]===void 0&&(K[se]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),K[se].usedTimes++;const pe=K[T.__cacheKey];pe!==void 0&&(K[T.__cacheKey].usedTimes--,pe.usedTimes===0&&P(E)),T.__cacheKey=se,T.__webglTexture=K[se].texture}return k}function ve(T,E,k){let $=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&($=n.TEXTURE_3D);const K=de(T,E),se=E.source;t.bindTexture($,T.__webglTexture,n.TEXTURE0+k);const pe=i.get(se);if(se.version!==pe.__version||K===!0){t.activeTexture(n.TEXTURE0+k);const xe=Rt.getPrimaries(Rt.workingColorSpace),fe=E.colorSpace===ls?null:Rt.getPrimaries(E.colorSpace),he=E.colorSpace===ls||xe===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ve=x(E)&&p(E.image)===!1;let le=m(E.image,Ve,!1,r.maxTextureSize);le=ae(E,le);const xt=p(le)||a,Ke=s.convert(E.format,E.colorSpace);let Le=s.convert(E.type),Ce=b(E.internalFormat,Ke,Le,E.colorSpace,E.isVideoTexture);J($,E,xt);let Ue;const tt=E.mipmaps,we=a&&E.isVideoTexture!==!0&&Ce!==uv,gt=pe.__version===void 0||K===!0,z=se.dataReady,ye=A(E,le,xt);if(E.isDepthTexture)Ce=n.DEPTH_COMPONENT,a?E.type===Or?Ce=n.DEPTH_COMPONENT32F:E.type===cs?Ce=n.DEPTH_COMPONENT24:E.type===so?Ce=n.DEPTH24_STENCIL8:Ce=n.DEPTH_COMPONENT16:E.type===Or&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===oo&&Ce===n.DEPTH_COMPONENT&&E.type!==Xh&&E.type!==cs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=cs,Le=s.convert(E.type)),E.format===xa&&Ce===n.DEPTH_COMPONENT&&(Ce=n.DEPTH_STENCIL,E.type!==so&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=so,Le=s.convert(E.type))),gt&&(we?t.texStorage2D(n.TEXTURE_2D,1,Ce,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Ce,le.width,le.height,0,Ke,Le,null));else if(E.isDataTexture)if(tt.length>0&&xt){we&&gt&&t.texStorage2D(n.TEXTURE_2D,ye,Ce,tt[0].width,tt[0].height);for(let ee=0,me=tt.length;ee<me;ee++)Ue=tt[ee],we?z&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,Ue.width,Ue.height,Ke,Le,Ue.data):t.texImage2D(n.TEXTURE_2D,ee,Ce,Ue.width,Ue.height,0,Ke,Le,Ue.data);E.generateMipmaps=!1}else we?(gt&&t.texStorage2D(n.TEXTURE_2D,ye,Ce,le.width,le.height),z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,Ke,Le,le.data)):t.texImage2D(n.TEXTURE_2D,0,Ce,le.width,le.height,0,Ke,Le,le.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){we&&gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ce,tt[0].width,tt[0].height,le.depth);for(let ee=0,me=tt.length;ee<me;ee++)Ue=tt[ee],E.format!==ji?Ke!==null?we?z&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,Ue.width,Ue.height,le.depth,Ke,Ue.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,Ce,Ue.width,Ue.height,le.depth,0,Ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,Ue.width,Ue.height,le.depth,Ke,Le,Ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,Ce,Ue.width,Ue.height,le.depth,0,Ke,Le,Ue.data)}else{we&&gt&&t.texStorage2D(n.TEXTURE_2D,ye,Ce,tt[0].width,tt[0].height);for(let ee=0,me=tt.length;ee<me;ee++)Ue=tt[ee],E.format!==ji?Ke!==null?we?z&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,Ue.width,Ue.height,Ke,Ue.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,Ce,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?z&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,Ue.width,Ue.height,Ke,Le,Ue.data):t.texImage2D(n.TEXTURE_2D,ee,Ce,Ue.width,Ue.height,0,Ke,Le,Ue.data)}else if(E.isDataArrayTexture)we?(gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ce,le.width,le.height,le.depth),z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Ke,Le,le.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,le.width,le.height,le.depth,0,Ke,Le,le.data);else if(E.isData3DTexture)we?(gt&&t.texStorage3D(n.TEXTURE_3D,ye,Ce,le.width,le.height,le.depth),z&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Ke,Le,le.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,le.width,le.height,le.depth,0,Ke,Le,le.data);else if(E.isFramebufferTexture){if(gt)if(we)t.texStorage2D(n.TEXTURE_2D,ye,Ce,le.width,le.height);else{let ee=le.width,me=le.height;for(let Ae=0;Ae<ye;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,Ce,ee,me,0,Ke,Le,null),ee>>=1,me>>=1}}else if(tt.length>0&&xt){if(we&&gt){const ee=ce(tt[0]);t.texStorage2D(n.TEXTURE_2D,ye,Ce,ee.width,ee.height)}for(let ee=0,me=tt.length;ee<me;ee++)Ue=tt[ee],we?z&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,Ke,Le,Ue):t.texImage2D(n.TEXTURE_2D,ee,Ce,Ke,Le,Ue);E.generateMipmaps=!1}else if(we){if(gt){const ee=ce(le);t.texStorage2D(n.TEXTURE_2D,ye,Ce,ee.width,ee.height)}z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ke,Le,le)}else t.texImage2D(n.TEXTURE_2D,0,Ce,Ke,Le,le);v(E,xt)&&y($),pe.__version=se.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function De(T,E,k){if(E.image.length!==6)return;const $=de(T,E),K=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+k);const se=i.get(K);if(K.version!==se.__version||$===!0){t.activeTexture(n.TEXTURE0+k);const pe=Rt.getPrimaries(Rt.workingColorSpace),xe=E.colorSpace===ls?null:Rt.getPrimaries(E.colorSpace),fe=E.colorSpace===ls||pe===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const he=E.isCompressedTexture||E.image[0].isCompressedTexture,Ve=E.image[0]&&E.image[0].isDataTexture,le=[];for(let ee=0;ee<6;ee++)!he&&!Ve?le[ee]=m(E.image[ee],!1,!0,r.maxCubemapSize):le[ee]=Ve?E.image[ee].image:E.image[ee],le[ee]=ae(E,le[ee]);const xt=le[0],Ke=p(xt)||a,Le=s.convert(E.format,E.colorSpace),Ce=s.convert(E.type),Ue=b(E.internalFormat,Le,Ce,E.colorSpace),tt=a&&E.isVideoTexture!==!0,we=se.__version===void 0||$===!0,gt=K.dataReady;let z=A(E,xt,Ke);J(n.TEXTURE_CUBE_MAP,E,Ke);let ye;if(he){tt&&we&&t.texStorage2D(n.TEXTURE_CUBE_MAP,z,Ue,xt.width,xt.height);for(let ee=0;ee<6;ee++){ye=le[ee].mipmaps;for(let me=0;me<ye.length;me++){const Ae=ye[me];E.format!==ji?Le!==null?tt?gt&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me,0,0,Ae.width,Ae.height,Le,Ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me,Ue,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?gt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me,0,0,Ae.width,Ae.height,Le,Ce,Ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me,Ue,Ae.width,Ae.height,0,Le,Ce,Ae.data)}}}else{if(ye=E.mipmaps,tt&&we){ye.length>0&&z++;const ee=ce(le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,z,Ue,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Ve){tt?gt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,le[ee].width,le[ee].height,Le,Ce,le[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ue,le[ee].width,le[ee].height,0,Le,Ce,le[ee].data);for(let me=0;me<ye.length;me++){const Qe=ye[me].image[ee].image;tt?gt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me+1,0,0,Qe.width,Qe.height,Le,Ce,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me+1,Ue,Qe.width,Qe.height,0,Le,Ce,Qe.data)}}else{tt?gt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Le,Ce,le[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ue,Le,Ce,le[ee]);for(let me=0;me<ye.length;me++){const Ae=ye[me];tt?gt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me+1,0,0,Le,Ce,Ae.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me+1,Ue,Le,Ce,Ae.image[ee])}}}v(E,Ke)&&y(n.TEXTURE_CUBE_MAP),se.__version=K.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function Pe(T,E,k,$,K,se){const pe=s.convert(k.format,k.colorSpace),xe=s.convert(k.type),fe=b(k.internalFormat,pe,xe,k.colorSpace);if(!i.get(E).__hasExternalTextures){const Ve=Math.max(1,E.width>>se),le=Math.max(1,E.height>>se);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,se,fe,Ve,le,E.depth,0,pe,xe,null):t.texImage2D(K,se,fe,Ve,le,0,pe,xe,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),L(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,K,i.get(k).__webglTexture,0,q(E)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,K,i.get(k).__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(T,E,k){if(n.bindRenderbuffer(n.RENDERBUFFER,T),E.depthBuffer&&!E.stencilBuffer){let $=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(k||L(E)){const K=E.depthTexture;K&&K.isDepthTexture&&(K.type===Or?$=n.DEPTH_COMPONENT32F:K.type===cs&&($=n.DEPTH_COMPONENT24));const se=q(E);L(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,$,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,se,$,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,$,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,T)}else if(E.depthBuffer&&E.stencilBuffer){const $=q(E);k&&L(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,$,n.DEPTH24_STENCIL8,E.width,E.height):L(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,T)}else{const $=E.textures;for(let K=0;K<$.length;K++){const se=$[K],pe=s.convert(se.format,se.colorSpace),xe=s.convert(se.type),fe=b(se.internalFormat,pe,xe,se.colorSpace),he=q(E);k&&L(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,fe,E.width,E.height):L(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,fe,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,fe,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function rt(T,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);const $=i.get(E.depthTexture).__webglTexture,K=q(E);if(E.depthTexture.format===oo)L(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(E.depthTexture.format===xa)L(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Be(T){const E=i.get(T),k=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");rt(E.__webglFramebuffer,T)}else if(k){E.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[$]),E.__webglDepthbuffer[$]=n.createRenderbuffer(),Ee(E.__webglDepthbuffer[$],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),Ee(E.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function M(T,E,k){const $=i.get(T);E!==void 0&&Pe($.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Be(T)}function O(T){const E=T.texture,k=i.get(T),$=i.get(E);T.addEventListener("dispose",U);const K=T.textures,se=T.isWebGLCubeRenderTarget===!0,pe=K.length>1,xe=p(T)||a;if(pe||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=E.version,o.memory.textures++),se){k.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(a&&E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[fe]=[];for(let he=0;he<E.mipmaps.length;he++)k.__webglFramebuffer[fe][he]=n.createFramebuffer()}else k.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)k.__webglFramebuffer[fe]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(pe)if(r.drawBuffers)for(let fe=0,he=K.length;fe<he;fe++){const Ve=i.get(K[fe]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=n.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&L(T)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let fe=0;fe<K.length;fe++){const he=K[fe];k.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[fe]);const Ve=s.convert(he.format,he.colorSpace),le=s.convert(he.type),xt=b(he.internalFormat,Ve,le,he.colorSpace,T.isXRRenderTarget===!0),Ke=q(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke,xt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,k.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Ee(k.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),J(n.TEXTURE_CUBE_MAP,E,xe);for(let fe=0;fe<6;fe++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)Pe(k.__webglFramebuffer[fe][he],T,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,he);else Pe(k.__webglFramebuffer[fe],T,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);v(E,xe)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let fe=0,he=K.length;fe<he;fe++){const Ve=K[fe],le=i.get(Ve);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),J(n.TEXTURE_2D,Ve,xe),Pe(k.__webglFramebuffer,T,Ve,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,0),v(Ve,xe)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?fe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,$.__webglTexture),J(fe,E,xe),a&&E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)Pe(k.__webglFramebuffer[he],T,E,n.COLOR_ATTACHMENT0,fe,he);else Pe(k.__webglFramebuffer,T,E,n.COLOR_ATTACHMENT0,fe,0);v(E,xe)&&y(fe),t.unbindTexture()}T.depthBuffer&&Be(T)}function B(T){const E=p(T)||a,k=T.textures;for(let $=0,K=k.length;$<K;$++){const se=k[$];if(v(se,E)){const pe=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,xe=i.get(se).__webglTexture;t.bindTexture(pe,xe),y(pe),t.unbindTexture()}}}function ie(T){if(a&&T.samples>0&&L(T)===!1){const E=T.textures,k=T.width,$=T.height;let K=n.COLOR_BUFFER_BIT;const se=[],pe=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(T),fe=E.length>1;if(fe)for(let he=0;he<E.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let he=0;he<E.length;he++){se.push(n.COLOR_ATTACHMENT0+he),T.depthBuffer&&se.push(pe);const Ve=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(Ve===!1&&(T.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),fe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[he]),Ve===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[pe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[pe])),fe){const le=i.get(E[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,k,$,0,0,k,$,K,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let he=0;he<E.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,xe.__webglColorRenderbuffer[he]);const Ve=i.get(E[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,Ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function q(T){return Math.min(r.maxSamples,T.samples)}function L(T){const E=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function oe(T){const E=o.render.frame;f.get(T)!==E&&(f.set(T,E),T.update())}function ae(T,E){const k=T.colorSpace,$=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===jd||k!==Cs&&k!==ls&&(Rt.getTransfer(k)===kt?a===!1?e.has("EXT_sRGB")===!0&&$===ji?(T.format=jd,T.minFilter=ti,T.generateMipmaps=!1):E=pv.sRGBToLinear(E):($!==ji||K!==vs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}function ce(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(u.width=T.naturalWidth||T.width,u.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(u.width=T.displayWidth,u.height=T.displayHeight):(u.width=T.width,u.height=T.height),u}this.allocateTextureUnit=Z,this.resetTextureUnits=N,this.setTexture2D=X,this.setTexture2DArray=G,this.setTexture3D=re,this.setTextureCube=I,this.rebindTextures=M,this.setupRenderTarget=O,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=L}function $A(n,e,t){const i=t.isWebGL2;function r(s,o=ls){let a;const l=Rt.getTransfer(o);if(s===vs)return n.UNSIGNED_BYTE;if(s===sv)return n.UNSIGNED_SHORT_4_4_4_4;if(s===ov)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Eb)return n.BYTE;if(s===wb)return n.SHORT;if(s===Xh)return n.UNSIGNED_SHORT;if(s===rv)return n.INT;if(s===cs)return n.UNSIGNED_INT;if(s===Or)return n.FLOAT;if(s===Ul)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Tb)return n.ALPHA;if(s===ji)return n.RGBA;if(s===Ab)return n.LUMINANCE;if(s===Cb)return n.LUMINANCE_ALPHA;if(s===oo)return n.DEPTH_COMPONENT;if(s===xa)return n.DEPTH_STENCIL;if(s===jd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Rb)return n.RED;if(s===av)return n.RED_INTEGER;if(s===Pb)return n.RG;if(s===lv)return n.RG_INTEGER;if(s===cv)return n.RGBA_INTEGER;if(s===Rf||s===Pf||s===Lf||s===Df)if(l===kt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Rf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Pf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Lf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Df)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Rf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Pf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Lf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Df)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Sm||s===bm||s===Mm||s===Em)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Sm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===bm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Mm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Em)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===uv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===wm||s===Tm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===wm)return l===kt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Tm)return l===kt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Am||s===Cm||s===Rm||s===Pm||s===Lm||s===Dm||s===Im||s===Um||s===Nm||s===Om||s===Fm||s===km||s===Bm||s===zm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Am)return l===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Cm)return l===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Rm)return l===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Pm)return l===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Lm)return l===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Dm)return l===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Im)return l===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Um)return l===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Nm)return l===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Om)return l===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Fm)return l===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===km)return l===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Bm)return l===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===zm)return l===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===If||s===Hm||s===Gm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===If)return l===kt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Hm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Gm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Lb||s===Vm||s===Wm||s===Xm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===If)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Vm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Wm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Xm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===so?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class YA extends _i{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ka extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qA={type:"move"};class od{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ka,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ka,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ka,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,_=.005;c.inputState.pinching&&d>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ka;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const jA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KA=`
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

}`;class ZA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Jn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new _r({extensions:{fragDepth:!0},vertexShader:jA,fragmentShader:KA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ni(new nf(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class JA extends Ra{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,_=null;const g=new ZA,m=t.getContextAttributes();let p=null,x=null;const v=[],y=[],b=new et;let A=null;const w=new _i;w.layers.enable(1),w.viewport=new Gt;const D=new _i;D.layers.enable(2),D.viewport=new Gt;const U=[w,D],S=new YA;S.layers.enable(1),S.layers.enable(2);let P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let de=v[J];return de===void 0&&(de=new od,v[J]=de),de.getTargetRaySpace()},this.getControllerGrip=function(J){let de=v[J];return de===void 0&&(de=new od,v[J]=de),de.getGripSpace()},this.getHand=function(J){let de=v[J];return de===void 0&&(de=new od,v[J]=de),de.getHandSpace()};function te(J){const de=y.indexOf(J.inputSource);if(de===-1)return;const ve=v[de];ve!==void 0&&(ve.update(J.inputSource,J.frame,c||o),ve.dispatchEvent({type:J.type,data:J.inputSource}))}function N(){r.removeEventListener("select",te),r.removeEventListener("selectstart",te),r.removeEventListener("selectend",te),r.removeEventListener("squeeze",te),r.removeEventListener("squeezestart",te),r.removeEventListener("squeezeend",te),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",Z);for(let J=0;J<v.length;J++){const de=y[J];de!==null&&(y[J]=null,v[J].disconnect(de))}P=null,F=null,g.reset(),e.setRenderTarget(p),h=null,d=null,f=null,r=null,x=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",te),r.addEventListener("selectstart",te),r.addEventListener("selectend",te),r.addEventListener("squeeze",te),r.addEventListener("squeezestart",te),r.addEventListener("squeezeend",te),r.addEventListener("end",N),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const de={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new mo(h.framebufferWidth,h.framebufferHeight,{format:ji,type:vs,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let de=null,ve=null,De=null;m.depth&&(De=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=m.stencil?xa:oo,ve=m.stencil?so:cs);const Pe={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Pe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new mo(d.textureWidth,d.textureHeight,{format:ji,type:vs,depthTexture:new Tv(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const Ee=e.properties.get(x);Ee.__ignoreDepthValues=d.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Z(J){for(let de=0;de<J.removed.length;de++){const ve=J.removed[de],De=y.indexOf(ve);De>=0&&(y[De]=null,v[De].disconnect(ve))}for(let de=0;de<J.added.length;de++){const ve=J.added[de];let De=y.indexOf(ve);if(De===-1){for(let Ee=0;Ee<v.length;Ee++)if(Ee>=y.length){y.push(ve),De=Ee;break}else if(y[Ee]===null){y[Ee]=ve,De=Ee;break}if(De===-1)break}const Pe=v[De];Pe&&Pe.connect(ve)}}const W=new H,X=new H;function G(J,de,ve){W.setFromMatrixPosition(de.matrixWorld),X.setFromMatrixPosition(ve.matrixWorld);const De=W.distanceTo(X),Pe=de.projectionMatrix.elements,Ee=ve.projectionMatrix.elements,rt=Pe[14]/(Pe[10]-1),Be=Pe[14]/(Pe[10]+1),M=(Pe[9]+1)/Pe[5],O=(Pe[9]-1)/Pe[5],B=(Pe[8]-1)/Pe[0],ie=(Ee[8]+1)/Ee[0],q=rt*B,L=rt*ie,oe=De/(-B+ie),ae=oe*-B;de.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ae),J.translateZ(oe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const ce=rt+oe,T=Be+oe,E=q-ae,k=L+(De-ae),$=M*Be/T*ce,K=O*Be/T*ce;J.projectionMatrix.makePerspective(E,k,$,K,ce,T),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function re(J,de){de===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(de.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;g.texture!==null&&(J.near=g.depthNear,J.far=g.depthFar),S.near=D.near=w.near=J.near,S.far=D.far=w.far=J.far,(P!==S.near||F!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,F=S.far,w.near=P,w.far=F,D.near=P,D.far=F,w.updateProjectionMatrix(),D.updateProjectionMatrix(),J.updateProjectionMatrix());const de=J.parent,ve=S.cameras;re(S,de);for(let De=0;De<ve.length;De++)re(ve[De],de);ve.length===2?G(S,w,D):S.projectionMatrix.copy(w.projectionMatrix),I(J,S,de)};function I(J,de,ve){ve===null?J.matrix.copy(de.matrixWorld):(J.matrix.copy(ve.matrixWorld),J.matrix.invert(),J.matrix.multiply(de.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(de.projectionMatrix),J.projectionMatrixInverse.copy(de.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Kd*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null};let ue=null;function _e(J,de){if(u=de.getViewerPose(c||o),_=de,u!==null){const ve=u.views;h!==null&&(e.setRenderTargetFramebuffer(x,h.framebuffer),e.setRenderTarget(x));let De=!1;ve.length!==S.cameras.length&&(S.cameras.length=0,De=!0);for(let Ee=0;Ee<ve.length;Ee++){const rt=ve[Ee];let Be=null;if(h!==null)Be=h.getViewport(rt);else{const O=f.getViewSubImage(d,rt);Be=O.viewport,Ee===0&&(e.setRenderTargetTextures(x,O.colorTexture,d.ignoreDepthValues?void 0:O.depthStencilTexture),e.setRenderTarget(x))}let M=U[Ee];M===void 0&&(M=new _i,M.layers.enable(Ee),M.viewport=new Gt,U[Ee]=M),M.matrix.fromArray(rt.transform.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale),M.projectionMatrix.fromArray(rt.projectionMatrix),M.projectionMatrixInverse.copy(M.projectionMatrix).invert(),M.viewport.set(Be.x,Be.y,Be.width,Be.height),Ee===0&&(S.matrix.copy(M.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),De===!0&&S.cameras.push(M)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Ee=f.getDepthInformation(ve[0]);Ee&&Ee.isValid&&Ee.texture&&g.init(e,Ee,r.renderState)}}for(let ve=0;ve<v.length;ve++){const De=y[ve],Pe=v[ve];De!==null&&Pe!==void 0&&Pe.update(De,de,c||o)}g.render(e,S),ue&&ue(J,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),_=null}const Xe=new wv;Xe.setAnimationLoop(_e),this.setAnimationLoop=function(J){ue=J},this.dispose=function(){}}}const Hs=new $r,QA=new Bt;function eC(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,bv(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,x,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Zn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Zn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),v=x.envMap,y=x.envMapRotation;if(v&&(m.envMap.value=v,Hs.copy(y),Hs.x*=-1,Hs.y*=-1,Hs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Hs.y*=-1,Hs.z*=-1),m.envMapRotation.value.setFromMatrix4(QA.makeRotationFromEuler(Hs)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const b=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*b,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function tC(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){const y=v.program;i.uniformBlockBinding(x,y)}function c(x,v){let y=r[x.id];y===void 0&&(_(x),y=u(x),r[x.id]=y,x.addEventListener("dispose",m));const b=v.program;i.updateUBOMapping(x,b);const A=e.render.frame;s[x.id]!==A&&(d(x),s[x.id]=A)}function u(x){const v=f();x.__bindingPointIndex=v;const y=n.createBuffer(),b=x.__size,A=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,b,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=r[x.id],y=x.uniforms,b=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let A=0,w=y.length;A<w;A++){const D=Array.isArray(y[A])?y[A]:[y[A]];for(let U=0,S=D.length;U<S;U++){const P=D[U];if(h(P,A,U,b)===!0){const F=P.__offset,te=Array.isArray(P.value)?P.value:[P.value];let N=0;for(let Z=0;Z<te.length;Z++){const W=te[Z],X=g(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,F+N,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,N),N+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(x,v,y,b){const A=x.value,w=v+"_"+y;if(b[w]===void 0)return typeof A=="number"||typeof A=="boolean"?b[w]=A:b[w]=A.clone(),!0;{const D=b[w];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return b[w]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function _(x){const v=x.uniforms;let y=0;const b=16;for(let w=0,D=v.length;w<D;w++){const U=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,P=U.length;S<P;S++){const F=U[S],te=Array.isArray(F.value)?F.value:[F.value];for(let N=0,Z=te.length;N<Z;N++){const W=te[N],X=g(W),G=y%b;G!==0&&b-G<X.boundary&&(y+=b-G),F.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=X.storage}}}const A=y%b;return A>0&&(y+=b-A),x.__size=y,x.__cache={},this}function g(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const x in r)n.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Dv{constructor(e={}){const{canvas:t=Wb(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const h=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yi,this._useLegacyLights=!1,this.toneMapping=_s,this.toneMappingExposure=1;const v=this;let y=!1,b=0,A=0,w=null,D=-1,U=null;const S=new Gt,P=new Gt;let F=null;const te=new vt(0);let N=0,Z=t.width,W=t.height,X=1,G=null,re=null;const I=new Gt(0,0,Z,W),ue=new Gt(0,0,Z,W);let _e=!1;const Xe=new qh;let J=!1,de=!1,ve=null;const De=new Bt,Pe=new et,Ee=new H,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return w===null?X:1}let M=i;function O(R,V){for(let ne=0;ne<R.length;ne++){const Q=R[ne],Y=t.getContext(Q,V);if(Y!==null)return Y}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wh}`),t.addEventListener("webglcontextlost",gt,!1),t.addEventListener("webglcontextrestored",z,!1),t.addEventListener("webglcontextcreationerror",ye,!1),M===null){const V=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&V.shift(),M=O(V,R),M===null)throw O(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&M instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),M.getShaderPrecisionFormat===void 0&&(M.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let B,ie,q,L,oe,ae,ce,T,E,k,$,K,se,pe,xe,fe,he,Ve,le,xt,Ke,Le,Ce,Ue;function tt(){B=new aT(M),ie=new eT(M,B,e),B.init(ie),Le=new $A(M,B,ie),q=new WA(M,B,ie),L=new uT(M),oe=new PA,ae=new XA(M,B,q,oe,ie,Le,L),ce=new nT(v),T=new oT(v),E=new mM(M,ie),Ce=new Jw(M,B,E,ie),k=new lT(M,E,L,Ce),$=new pT(M,k,E,L),le=new hT(M,ie,ae),fe=new tT(oe),K=new RA(v,ce,T,B,ie,Ce,fe),se=new eC(v,oe),pe=new DA,xe=new kA(B,ie),Ve=new Zw(v,ce,T,q,$,d,l),he=new VA(v,$,ie),Ue=new tC(M,L,ie,q),xt=new Qw(M,B,L,ie),Ke=new cT(M,B,L,ie),L.programs=K.programs,v.capabilities=ie,v.extensions=B,v.properties=oe,v.renderLists=pe,v.shadowMap=he,v.state=q,v.info=L}tt();const we=new JA(v,M);this.xr=we,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const R=B.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=B.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(R){R!==void 0&&(X=R,this.setSize(Z,W,!1))},this.getSize=function(R){return R.set(Z,W)},this.setSize=function(R,V,ne=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=R,W=V,t.width=Math.floor(R*X),t.height=Math.floor(V*X),ne===!0&&(t.style.width=R+"px",t.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(Z*X,W*X).floor()},this.setDrawingBufferSize=function(R,V,ne){Z=R,W=V,X=ne,t.width=Math.floor(R*ne),t.height=Math.floor(V*ne),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(S)},this.getViewport=function(R){return R.copy(I)},this.setViewport=function(R,V,ne,Q){R.isVector4?I.set(R.x,R.y,R.z,R.w):I.set(R,V,ne,Q),q.viewport(S.copy(I).multiplyScalar(X).round())},this.getScissor=function(R){return R.copy(ue)},this.setScissor=function(R,V,ne,Q){R.isVector4?ue.set(R.x,R.y,R.z,R.w):ue.set(R,V,ne,Q),q.scissor(P.copy(ue).multiplyScalar(X).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(R){q.setScissorTest(_e=R)},this.setOpaqueSort=function(R){G=R},this.setTransparentSort=function(R){re=R},this.getClearColor=function(R){return R.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(R=!0,V=!0,ne=!0){let Q=0;if(R){let Y=!1;if(w!==null){const Se=w.texture.format;Y=Se===cv||Se===lv||Se===av}if(Y){const Se=w.texture.type,Oe=Se===vs||Se===cs||Se===Xh||Se===so||Se===sv||Se===ov,qe=Ve.getClearColor(),ke=Ve.getClearAlpha(),He=qe.r,je=qe.g,it=qe.b;Oe?(h[0]=He,h[1]=je,h[2]=it,h[3]=ke,M.clearBufferuiv(M.COLOR,0,h)):(_[0]=He,_[1]=je,_[2]=it,_[3]=ke,M.clearBufferiv(M.COLOR,0,_))}else Q|=M.COLOR_BUFFER_BIT}V&&(Q|=M.DEPTH_BUFFER_BIT),ne&&(Q|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",z,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),pe.dispose(),xe.dispose(),oe.dispose(),ce.dispose(),T.dispose(),$.dispose(),Ce.dispose(),Ue.dispose(),K.dispose(),we.dispose(),we.removeEventListener("sessionstart",Fe),we.removeEventListener("sessionend",Ge),ve&&(ve.dispose(),ve=null),ge.stop()};function gt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=L.autoReset,V=he.enabled,ne=he.autoUpdate,Q=he.needsUpdate,Y=he.type;tt(),L.autoReset=R,he.enabled=V,he.autoUpdate=ne,he.needsUpdate=Q,he.type=Y}function ye(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ee(R){const V=R.target;V.removeEventListener("dispose",ee),me(V)}function me(R){Ae(R),oe.remove(R)}function Ae(R){const V=oe.get(R).programs;V!==void 0&&(V.forEach(function(ne){K.releaseProgram(ne)}),R.isShaderMaterial&&K.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,ne,Q,Y,Se){V===null&&(V=rt);const Oe=Y.isMesh&&Y.matrixWorld.determinant()<0,qe=Ut(R,V,ne,Q,Y);q.setMaterial(Q,Oe);let ke=ne.index,He=1;if(Q.wireframe===!0){if(ke=k.getWireframeAttribute(ne),ke===void 0)return;He=2}const je=ne.drawRange,it=ne.attributes.position;let zt=je.start*He,an=(je.start+je.count)*He;Se!==null&&(zt=Math.max(zt,Se.start*He),an=Math.min(an,(Se.start+Se.count)*He)),ke!==null?(zt=Math.max(zt,0),an=Math.min(an,ke.count)):it!=null&&(zt=Math.max(zt,0),an=Math.min(an,it.count));const wt=an-zt;if(wt<0||wt===1/0)return;Ce.setup(Y,Q,qe,ne,ke);let kn,At=xt;if(ke!==null&&(kn=E.get(ke),At=Ke,At.setIndex(kn)),Y.isMesh)Q.wireframe===!0?(q.setLineWidth(Q.wireframeLinewidth*Be()),At.setMode(M.LINES)):At.setMode(M.TRIANGLES);else if(Y.isLine){let Ze=Q.linewidth;Ze===void 0&&(Ze=1),q.setLineWidth(Ze*Be()),Y.isLineSegments?At.setMode(M.LINES):Y.isLineLoop?At.setMode(M.LINE_LOOP):At.setMode(M.LINE_STRIP)}else Y.isPoints?At.setMode(M.POINTS):Y.isSprite&&At.setMode(M.TRIANGLES);if(Y.isBatchedMesh)At.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)At.renderInstances(zt,wt,Y.count);else if(ne.isInstancedBufferGeometry){const Ze=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,uf=Math.min(ne.instanceCount,Ze);At.renderInstances(zt,wt,uf)}else At.render(zt,wt)};function Qe(R,V,ne){R.transparent===!0&&R.side===Nr&&R.forceSinglePass===!1?(R.side=Zn,R.needsUpdate=!0,It(R,V,ne),R.side=Xr,R.needsUpdate=!0,It(R,V,ne),R.side=Nr):It(R,V,ne)}this.compile=function(R,V,ne=null){ne===null&&(ne=R),m=xe.get(ne),m.init(),x.push(m),ne.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),R!==ne&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights(v._useLegacyLights);const Q=new Set;return R.traverse(function(Y){const Se=Y.material;if(Se)if(Array.isArray(Se))for(let Oe=0;Oe<Se.length;Oe++){const qe=Se[Oe];Qe(qe,ne,Y),Q.add(qe)}else Qe(Se,ne,Y),Q.add(Se)}),x.pop(),m=null,Q},this.compileAsync=function(R,V,ne=null){const Q=this.compile(R,V,ne);return new Promise(Y=>{function Se(){if(Q.forEach(function(Oe){oe.get(Oe).currentProgram.isReady()&&Q.delete(Oe)}),Q.size===0){Y(R);return}setTimeout(Se,10)}B.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let _t=null;function ze(R){_t&&_t(R)}function Fe(){ge.stop()}function Ge(){ge.start()}const ge=new wv;ge.setAnimationLoop(ze),typeof self<"u"&&ge.setContext(self),this.setAnimationLoop=function(R){_t=R,we.setAnimationLoop(R),R===null?ge.stop():ge.start()},we.addEventListener("sessionstart",Fe),we.addEventListener("sessionend",Ge),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(V),V=we.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,V,w),m=xe.get(R,x.length),m.init(),x.push(m),De.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Xe.setFromProjectionMatrix(De),de=this.localClippingEnabled,J=fe.init(this.clippingPlanes,de),g=pe.get(R,p.length),g.init(),p.push(g),Ye(R,V,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(G,re),this.info.render.frame++,J===!0&&fe.beginShadows();const ne=m.state.shadowsArray;if(he.render(ne,R,V),J===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1)&&Ve.render(g,R),m.setupLights(v._useLegacyLights),V.isArrayCamera){const Q=V.cameras;for(let Y=0,Se=Q.length;Y<Se;Y++){const Oe=Q[Y];$e(g,R,Oe,Oe.viewport)}}else $e(g,R,V);w!==null&&(ae.updateMultisampleRenderTarget(w),ae.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(v,R,V),Ce.resetDefaultState(),D=-1,U=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function Ye(R,V,ne,Q){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)ne=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Xe.intersectsSprite(R)){Q&&Ee.setFromMatrixPosition(R.matrixWorld).applyMatrix4(De);const Oe=$.update(R),qe=R.material;qe.visible&&g.push(R,Oe,qe,ne,Ee.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Xe.intersectsObject(R))){const Oe=$.update(R),qe=R.material;if(Q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ee.copy(R.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Ee.copy(Oe.boundingSphere.center)),Ee.applyMatrix4(R.matrixWorld).applyMatrix4(De)),Array.isArray(qe)){const ke=Oe.groups;for(let He=0,je=ke.length;He<je;He++){const it=ke[He],zt=qe[it.materialIndex];zt&&zt.visible&&g.push(R,Oe,zt,ne,Ee.z,it)}}else qe.visible&&g.push(R,Oe,qe,ne,Ee.z,null)}}const Se=R.children;for(let Oe=0,qe=Se.length;Oe<qe;Oe++)Ye(Se[Oe],V,ne,Q)}function $e(R,V,ne,Q){const Y=R.opaque,Se=R.transmissive,Oe=R.transparent;m.setupLightsView(ne),J===!0&&fe.setGlobalState(v.clippingPlanes,ne),Se.length>0&&nt(Y,Se,V,ne),Q&&q.viewport(S.copy(Q)),Y.length>0&&Yt(Y,V,ne),Se.length>0&&Yt(Se,V,ne),Oe.length>0&&Yt(Oe,V,ne),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function nt(R,V,ne,Q){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;const Se=ie.isWebGL2;ve===null&&(ve=new mo(1,1,{generateMipmaps:!0,type:B.has("EXT_color_buffer_half_float")?Ul:vs,minFilter:eo,samples:Se?4:0})),v.getDrawingBufferSize(Pe),Se?ve.setSize(Pe.x,Pe.y):ve.setSize(Zd(Pe.x),Zd(Pe.y));const Oe=v.getRenderTarget();v.setRenderTarget(ve),v.getClearColor(te),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear();const qe=v.toneMapping;v.toneMapping=_s,Yt(R,ne,Q),ae.updateMultisampleRenderTarget(ve),ae.updateRenderTargetMipmap(ve);let ke=!1;for(let He=0,je=V.length;He<je;He++){const it=V[He],zt=it.object,an=it.geometry,wt=it.material,kn=it.group;if(wt.side===Nr&&zt.layers.test(Q.layers)){const At=wt.side;wt.side=Zn,wt.needsUpdate=!0,ut(zt,ne,Q,an,wt,kn),wt.side=At,wt.needsUpdate=!0,ke=!0}}ke===!0&&(ae.updateMultisampleRenderTarget(ve),ae.updateRenderTargetMipmap(ve)),v.setRenderTarget(Oe),v.setClearColor(te,N),v.toneMapping=qe}function Yt(R,V,ne){const Q=V.isScene===!0?V.overrideMaterial:null;for(let Y=0,Se=R.length;Y<Se;Y++){const Oe=R[Y],qe=Oe.object,ke=Oe.geometry,He=Q===null?Oe.material:Q,je=Oe.group;qe.layers.test(ne.layers)&&ut(qe,V,ne,ke,He,je)}}function ut(R,V,ne,Q,Y,Se){R.onBeforeRender(v,V,ne,Q,Y,Se),R.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(v,V,ne,Q,R,Se),Y.transparent===!0&&Y.side===Nr&&Y.forceSinglePass===!1?(Y.side=Zn,Y.needsUpdate=!0,v.renderBufferDirect(ne,V,Q,Y,R,Se),Y.side=Xr,Y.needsUpdate=!0,v.renderBufferDirect(ne,V,Q,Y,R,Se),Y.side=Nr):v.renderBufferDirect(ne,V,Q,Y,R,Se),R.onAfterRender(v,V,ne,Q,Y,Se)}function It(R,V,ne){V.isScene!==!0&&(V=rt);const Q=oe.get(R),Y=m.state.lights,Se=m.state.shadowsArray,Oe=Y.state.version,qe=K.getParameters(R,Y.state,Se,V,ne),ke=K.getProgramCacheKey(qe);let He=Q.programs;Q.environment=R.isMeshStandardMaterial?V.environment:null,Q.fog=V.fog,Q.envMap=(R.isMeshStandardMaterial?T:ce).get(R.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,He===void 0&&(R.addEventListener("dispose",ee),He=new Map,Q.programs=He);let je=He.get(ke);if(je!==void 0){if(Q.currentProgram===je&&Q.lightsStateVersion===Oe)return Ft(R,qe),je}else qe.uniforms=K.getUniforms(R),R.onBuild(ne,qe,v),R.onBeforeCompile(qe,v),je=K.acquireProgram(qe,ke),He.set(ke,je),Q.uniforms=qe.uniforms;const it=Q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(it.clippingPlanes=fe.uniform),Ft(R,qe),Q.needsLights=fi(R),Q.lightsStateVersion=Oe,Q.needsLights&&(it.ambientLightColor.value=Y.state.ambient,it.lightProbe.value=Y.state.probe,it.directionalLights.value=Y.state.directional,it.directionalLightShadows.value=Y.state.directionalShadow,it.spotLights.value=Y.state.spot,it.spotLightShadows.value=Y.state.spotShadow,it.rectAreaLights.value=Y.state.rectArea,it.ltc_1.value=Y.state.rectAreaLTC1,it.ltc_2.value=Y.state.rectAreaLTC2,it.pointLights.value=Y.state.point,it.pointLightShadows.value=Y.state.pointShadow,it.hemisphereLights.value=Y.state.hemi,it.directionalShadowMap.value=Y.state.directionalShadowMap,it.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,it.spotShadowMap.value=Y.state.spotShadowMap,it.spotLightMatrix.value=Y.state.spotLightMatrix,it.spotLightMap.value=Y.state.spotLightMap,it.pointShadowMap.value=Y.state.pointShadowMap,it.pointShadowMatrix.value=Y.state.pointShadowMatrix),Q.currentProgram=je,Q.uniformsList=null,je}function on(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=Qc.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function Ft(R,V){const ne=oe.get(R);ne.outputColorSpace=V.outputColorSpace,ne.batching=V.batching,ne.instancing=V.instancing,ne.instancingColor=V.instancingColor,ne.instancingMorph=V.instancingMorph,ne.skinning=V.skinning,ne.morphTargets=V.morphTargets,ne.morphNormals=V.morphNormals,ne.morphColors=V.morphColors,ne.morphTargetsCount=V.morphTargetsCount,ne.numClippingPlanes=V.numClippingPlanes,ne.numIntersection=V.numClipIntersection,ne.vertexAlphas=V.vertexAlphas,ne.vertexTangents=V.vertexTangents,ne.toneMapping=V.toneMapping}function Ut(R,V,ne,Q,Y){V.isScene!==!0&&(V=rt),ae.resetTextureUnits();const Se=V.fog,Oe=Q.isMeshStandardMaterial?V.environment:null,qe=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Cs,ke=(Q.isMeshStandardMaterial?T:ce).get(Q.envMap||Oe),He=Q.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,je=!!ne.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),it=!!ne.morphAttributes.position,zt=!!ne.morphAttributes.normal,an=!!ne.morphAttributes.color;let wt=_s;Q.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(wt=v.toneMapping);const kn=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,At=kn!==void 0?kn.length:0,Ze=oe.get(Q),uf=m.state.lights;if(J===!0&&(de===!0||R!==U)){const Ai=R===U&&Q.id===D;fe.setState(Q,R,Ai)}let Ht=!1;Q.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==uf.state.version||Ze.outputColorSpace!==qe||Y.isBatchedMesh&&Ze.batching===!1||!Y.isBatchedMesh&&Ze.batching===!0||Y.isInstancedMesh&&Ze.instancing===!1||!Y.isInstancedMesh&&Ze.instancing===!0||Y.isSkinnedMesh&&Ze.skinning===!1||!Y.isSkinnedMesh&&Ze.skinning===!0||Y.isInstancedMesh&&Ze.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ze.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ze.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ze.instancingMorph===!1&&Y.morphTexture!==null||Ze.envMap!==ke||Q.fog===!0&&Ze.fog!==Se||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==fe.numPlanes||Ze.numIntersection!==fe.numIntersection)||Ze.vertexAlphas!==He||Ze.vertexTangents!==je||Ze.morphTargets!==it||Ze.morphNormals!==zt||Ze.morphColors!==an||Ze.toneMapping!==wt||ie.isWebGL2===!0&&Ze.morphTargetsCount!==At)&&(Ht=!0):(Ht=!0,Ze.__version=Q.version);let Ps=Ze.currentProgram;Ht===!0&&(Ps=It(Q,V,Y));let Pp=!1,La=!1,ff=!1;const En=Ps.getUniforms(),Ls=Ze.uniforms;if(q.useProgram(Ps.program)&&(Pp=!0,La=!0,ff=!0),Q.id!==D&&(D=Q.id,La=!0),Pp||U!==R){En.setValue(M,"projectionMatrix",R.projectionMatrix),En.setValue(M,"viewMatrix",R.matrixWorldInverse);const Ai=En.map.cameraPosition;Ai!==void 0&&Ai.setValue(M,Ee.setFromMatrixPosition(R.matrixWorld)),ie.logarithmicDepthBuffer&&En.setValue(M,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&En.setValue(M,"isOrthographic",R.isOrthographicCamera===!0),U!==R&&(U=R,La=!0,ff=!0)}if(Y.isSkinnedMesh){En.setOptional(M,Y,"bindMatrix"),En.setOptional(M,Y,"bindMatrixInverse");const Ai=Y.skeleton;Ai&&(ie.floatVertexTextures?(Ai.boneTexture===null&&Ai.computeBoneTexture(),En.setValue(M,"boneTexture",Ai.boneTexture,ae)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(En.setOptional(M,Y,"batchingTexture"),En.setValue(M,"batchingTexture",Y._matricesTexture,ae));const df=ne.morphAttributes;if((df.position!==void 0||df.normal!==void 0||df.color!==void 0&&ie.isWebGL2===!0)&&le.update(Y,ne,Ps),(La||Ze.receiveShadow!==Y.receiveShadow)&&(Ze.receiveShadow=Y.receiveShadow,En.setValue(M,"receiveShadow",Y.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Ls.envMap.value=ke,Ls.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),La&&(En.setValue(M,"toneMappingExposure",v.toneMappingExposure),Ze.needsLights&&Et(Ls,ff),Se&&Q.fog===!0&&se.refreshFogUniforms(Ls,Se),se.refreshMaterialUniforms(Ls,Q,X,W,ve),Qc.upload(M,on(Ze),Ls,ae)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Qc.upload(M,on(Ze),Ls,ae),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&En.setValue(M,"center",Y.center),En.setValue(M,"modelViewMatrix",Y.modelViewMatrix),En.setValue(M,"normalMatrix",Y.normalMatrix),En.setValue(M,"modelMatrix",Y.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Ai=Q.uniformsGroups;for(let hf=0,hy=Ai.length;hf<hy;hf++)if(ie.isWebGL2){const Lp=Ai[hf];Ue.update(Lp,Ps),Ue.bind(Lp,Ps)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ps}function Et(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function fi(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,V,ne){oe.get(R.texture).__webglTexture=V,oe.get(R.depthTexture).__webglTexture=ne;const Q=oe.get(R);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=ne===void 0,Q.__autoAllocateDepthBuffer||B.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,V){const ne=oe.get(R);ne.__webglFramebuffer=V,ne.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,ne=0){w=R,b=V,A=ne;let Q=!0,Y=null,Se=!1,Oe=!1;if(R){const ke=oe.get(R);ke.__useDefaultFramebuffer!==void 0?(q.bindFramebuffer(M.FRAMEBUFFER,null),Q=!1):ke.__webglFramebuffer===void 0?ae.setupRenderTarget(R):ke.__hasExternalTextures&&ae.rebindTextures(R,oe.get(R.texture).__webglTexture,oe.get(R.depthTexture).__webglTexture);const He=R.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Oe=!0);const je=oe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(je[V])?Y=je[V][ne]:Y=je[V],Se=!0):ie.isWebGL2&&R.samples>0&&ae.useMultisampledRTT(R)===!1?Y=oe.get(R).__webglMultisampledFramebuffer:Array.isArray(je)?Y=je[ne]:Y=je,S.copy(R.viewport),P.copy(R.scissor),F=R.scissorTest}else S.copy(I).multiplyScalar(X).floor(),P.copy(ue).multiplyScalar(X).floor(),F=_e;if(q.bindFramebuffer(M.FRAMEBUFFER,Y)&&ie.drawBuffers&&Q&&q.drawBuffers(R,Y),q.viewport(S),q.scissor(P),q.setScissorTest(F),Se){const ke=oe.get(R.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+V,ke.__webglTexture,ne)}else if(Oe){const ke=oe.get(R.texture),He=V||0;M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,ke.__webglTexture,ne||0,He)}D=-1},this.readRenderTargetPixels=function(R,V,ne,Q,Y,Se,Oe){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=oe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Oe!==void 0&&(qe=qe[Oe]),qe){q.bindFramebuffer(M.FRAMEBUFFER,qe);try{const ke=R.texture,He=ke.format,je=ke.type;if(He!==ji&&Le.convert(He)!==M.getParameter(M.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const it=je===Ul&&(B.has("EXT_color_buffer_half_float")||ie.isWebGL2&&B.has("EXT_color_buffer_float"));if(je!==vs&&Le.convert(je)!==M.getParameter(M.IMPLEMENTATION_COLOR_READ_TYPE)&&!(je===Or&&(ie.isWebGL2||B.has("OES_texture_float")||B.has("WEBGL_color_buffer_float")))&&!it){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-Q&&ne>=0&&ne<=R.height-Y&&M.readPixels(V,ne,Q,Y,Le.convert(He),Le.convert(je),Se)}finally{const ke=w!==null?oe.get(w).__webglFramebuffer:null;q.bindFramebuffer(M.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(R,V,ne=0){const Q=Math.pow(2,-ne),Y=Math.floor(V.image.width*Q),Se=Math.floor(V.image.height*Q);ae.setTexture2D(V,0),M.copyTexSubImage2D(M.TEXTURE_2D,ne,0,0,R.x,R.y,Y,Se),q.unbindTexture()},this.copyTextureToTexture=function(R,V,ne,Q=0){const Y=V.image.width,Se=V.image.height,Oe=Le.convert(ne.format),qe=Le.convert(ne.type);ae.setTexture2D(ne,0),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,ne.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,ne.unpackAlignment),V.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,Q,R.x,R.y,Y,Se,Oe,qe,V.image.data):V.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,Q,R.x,R.y,V.mipmaps[0].width,V.mipmaps[0].height,Oe,V.mipmaps[0].data):M.texSubImage2D(M.TEXTURE_2D,Q,R.x,R.y,Oe,qe,V.image),Q===0&&ne.generateMipmaps&&M.generateMipmap(M.TEXTURE_2D),q.unbindTexture()},this.copyTextureToTexture3D=function(R,V,ne,Q,Y=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=Math.round(R.max.x-R.min.x),Oe=Math.round(R.max.y-R.min.y),qe=R.max.z-R.min.z+1,ke=Le.convert(Q.format),He=Le.convert(Q.type);let je;if(Q.isData3DTexture)ae.setTexture3D(Q,0),je=M.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)ae.setTexture2DArray(Q,0),je=M.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,Q.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,Q.unpackAlignment);const it=M.getParameter(M.UNPACK_ROW_LENGTH),zt=M.getParameter(M.UNPACK_IMAGE_HEIGHT),an=M.getParameter(M.UNPACK_SKIP_PIXELS),wt=M.getParameter(M.UNPACK_SKIP_ROWS),kn=M.getParameter(M.UNPACK_SKIP_IMAGES),At=ne.isCompressedTexture?ne.mipmaps[Y]:ne.image;M.pixelStorei(M.UNPACK_ROW_LENGTH,At.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,At.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,R.min.x),M.pixelStorei(M.UNPACK_SKIP_ROWS,R.min.y),M.pixelStorei(M.UNPACK_SKIP_IMAGES,R.min.z),ne.isDataTexture||ne.isData3DTexture?M.texSubImage3D(je,Y,V.x,V.y,V.z,Se,Oe,qe,ke,He,At.data):Q.isCompressedArrayTexture?M.compressedTexSubImage3D(je,Y,V.x,V.y,V.z,Se,Oe,qe,ke,At.data):M.texSubImage3D(je,Y,V.x,V.y,V.z,Se,Oe,qe,ke,He,At),M.pixelStorei(M.UNPACK_ROW_LENGTH,it),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,zt),M.pixelStorei(M.UNPACK_SKIP_PIXELS,an),M.pixelStorei(M.UNPACK_SKIP_ROWS,wt),M.pixelStorei(M.UNPACK_SKIP_IMAGES,kn),Y===0&&Q.generateMipmaps&&M.generateMipmap(je),q.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?ae.setTextureCube(R,0):R.isData3DTexture?ae.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ae.setTexture2DArray(R,0):ae.setTexture2D(R,0),q.unbindTexture()},this.resetState=function(){b=0,A=0,w=null,q.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===$h?"display-p3":"srgb",t.unpackColorSpace=Rt.workingColorSpace===tf?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class nC extends Dv{}nC.prototype.isWebGL1Renderer=!0;class iC extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $r,this.environmentRotation=new $r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class rC{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=xs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return hv("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bn=new H;class Cu{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Bn.fromBufferAttribute(this,t),Bn.applyMatrix4(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bn.fromBufferAttribute(this,t),Bn.applyNormalMatrix(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bn.fromBufferAttribute(this,t),Bn.transformDirection(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=dr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ct(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=dr(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=dr(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=dr(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=dr(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),r=Ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),r=Ct(r,this.array),s=Ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Bi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Cu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Iv extends yo{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Bo;const za=new H,zo=new H,Ho=new H,Go=new et,Ha=new et,Uv=new Bt,Ac=new H,Ga=new H,Cc=new H,Ug=new et,ad=new et,Ng=new et;class sC extends bn{constructor(e=new Iv){if(super(),this.isSprite=!0,this.type="Sprite",Bo===void 0){Bo=new ui;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new rC(t,5);Bo.setIndex([0,1,2,0,2,3]),Bo.setAttribute("position",new Cu(i,3,0,!1)),Bo.setAttribute("uv",new Cu(i,2,3,!1))}this.geometry=Bo,this.material=e,this.center=new et(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zo.setFromMatrixScale(this.matrixWorld),Uv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ho.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zo.multiplyScalar(-Ho.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Rc(Ac.set(-.5,-.5,0),Ho,o,zo,r,s),Rc(Ga.set(.5,-.5,0),Ho,o,zo,r,s),Rc(Cc.set(.5,.5,0),Ho,o,zo,r,s),Ug.set(0,0),ad.set(1,0),Ng.set(1,1);let a=e.ray.intersectTriangle(Ac,Ga,Cc,!1,za);if(a===null&&(Rc(Ga.set(-.5,.5,0),Ho,o,zo,r,s),ad.set(0,1),a=e.ray.intersectTriangle(Ac,Cc,Ga,!1,za),a===null))return;const l=e.ray.origin.distanceTo(za);l<e.near||l>e.far||t.push({distance:l,point:za.clone(),uv:Ki.getInterpolation(za,Ac,Ga,Cc,Ug,ad,Ng,new et),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Rc(n,e,t,i,r,s){Go.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Ha.x=s*Go.x-r*Go.y,Ha.y=r*Go.x+s*Go.y):Ha.copy(Go),n.copy(e),n.x+=Ha.x,n.y+=Ha.y,n.applyMatrix4(Uv)}class Nv extends yo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Og=new H,Fg=new H,kg=new Bt,ld=new Yh,Pc=new Kl;class oC extends bn{constructor(e=new ui,t=new Nv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Og.fromBufferAttribute(t,r-1),Fg.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Og.distanceTo(Fg);e.setAttribute("lineDistance",new Nn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pc.copy(i.boundingSphere),Pc.applyMatrix4(r),Pc.radius+=s,e.ray.intersectsSphere(Pc)===!1)return;kg.copy(r).invert(),ld.copy(e.ray).applyMatrix4(kg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new H,u=new H,f=new H,d=new H,h=this.isLineSegments?2:1,_=i.index,m=i.attributes.position;if(_!==null){const p=Math.max(0,o.start),x=Math.min(_.count,o.start+o.count);for(let v=p,y=x-1;v<y;v+=h){const b=_.getX(v),A=_.getX(v+1);if(c.fromBufferAttribute(m,b),u.fromBufferAttribute(m,A),ld.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let v=p,y=x-1;v<y;v+=h){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),ld.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Bg=new H,zg=new H;class aC extends oC{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Bg.fromBufferAttribute(t,r),zg.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Bg.distanceTo(zg);e.setAttribute("lineDistance",new Nn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ov extends yo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hg=new Bt,eh=new Yh,Lc=new Kl,Dc=new H;class lC extends bn{constructor(e=new ui,t=new Ov){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Lc.copy(i.boundingSphere),Lc.applyMatrix4(r),Lc.radius+=s,e.ray.intersectsSphere(Lc)===!1)return;Hg.copy(r).invert(),eh.copy(e.ray).applyMatrix4(Hg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let _=d,g=h;_<g;_++){const m=c.getX(_);Dc.fromBufferAttribute(f,m),Gg(Dc,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let _=d,g=h;_<g;_++)Dc.fromBufferAttribute(f,_),Gg(Dc,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Gg(n,e,t,i,r,s,o){const a=eh.distanceSqToPoint(n);if(a<t){const l=new H;eh.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class th extends Jn{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jl extends ui{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new Nn(s,3)),this.setAttribute("normal",new Nn(s.slice(),3)),this.setAttribute("uv",new Nn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const v=new H,y=new H,b=new H;for(let A=0;A<t.length;A+=3)h(t[A+0],v),h(t[A+1],y),h(t[A+2],b),l(v,y,b,x)}function l(x,v,y,b){const A=b+1,w=[];for(let D=0;D<=A;D++){w[D]=[];const U=x.clone().lerp(y,D/A),S=v.clone().lerp(y,D/A),P=A-D;for(let F=0;F<=P;F++)F===0&&D===A?w[D][F]=U:w[D][F]=U.clone().lerp(S,F/P)}for(let D=0;D<A;D++)for(let U=0;U<2*(A-D)-1;U++){const S=Math.floor(U/2);U%2===0?(d(w[D][S+1]),d(w[D+1][S]),d(w[D][S])):(d(w[D][S+1]),d(w[D+1][S+1]),d(w[D+1][S]))}}function c(x){const v=new H;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(x),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function u(){const x=new H;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];const y=m(x)/2/Math.PI+.5,b=p(x)/Math.PI+.5;o.push(y,1-b)}_(),f()}function f(){for(let x=0;x<o.length;x+=6){const v=o[x+0],y=o[x+2],b=o[x+4],A=Math.max(v,y,b),w=Math.min(v,y,b);A>.9&&w<.1&&(v<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),b<.2&&(o[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function h(x,v){const y=x*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function _(){const x=new H,v=new H,y=new H,b=new H,A=new et,w=new et,D=new et;for(let U=0,S=0;U<s.length;U+=9,S+=6){x.set(s[U+0],s[U+1],s[U+2]),v.set(s[U+3],s[U+4],s[U+5]),y.set(s[U+6],s[U+7],s[U+8]),A.set(o[S+0],o[S+1]),w.set(o[S+2],o[S+3]),D.set(o[S+4],o[S+5]),b.copy(x).add(v).add(y).divideScalar(3);const P=m(b);g(A,S+0,x,P),g(w,S+2,v,P),g(D,S+4,y,P)}}function g(x,v,y,b){b<0&&x.x===1&&(o[v]=x.x-1),y.x===0&&y.z===0&&(o[v]=b/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jl(e.vertices,e.indices,e.radius,e.details)}}class Kh extends Jl{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Kh(e.radius,e.detail)}}class Zh extends Jl{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Zh(e.radius,e.detail)}}class Jh extends Jl{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Jh(e.radius,e.detail)}}class Qh extends ui{constructor(e=1,t=.4,i=64,r=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:o},i=Math.floor(i),r=Math.floor(r);const a=[],l=[],c=[],u=[],f=new H,d=new H,h=new H,_=new H,g=new H,m=new H,p=new H;for(let v=0;v<=i;++v){const y=v/i*s*Math.PI*2;x(y,s,o,e,h),x(y+.01,s,o,e,_),m.subVectors(_,h),p.addVectors(_,h),g.crossVectors(m,p),p.crossVectors(g,m),g.normalize(),p.normalize();for(let b=0;b<=r;++b){const A=b/r*Math.PI*2,w=-t*Math.cos(A),D=t*Math.sin(A);f.x=h.x+(w*p.x+D*g.x),f.y=h.y+(w*p.y+D*g.y),f.z=h.z+(w*p.z+D*g.z),l.push(f.x,f.y,f.z),d.subVectors(f,h).normalize(),c.push(d.x,d.y,d.z),u.push(v/i),u.push(b/r)}}for(let v=1;v<=i;v++)for(let y=1;y<=r;y++){const b=(r+1)*(v-1)+(y-1),A=(r+1)*v+(y-1),w=(r+1)*v+y,D=(r+1)*(v-1)+y;a.push(b,A,D),a.push(A,w,D)}this.setIndex(a),this.setAttribute("position",new Nn(l,3)),this.setAttribute("normal",new Nn(c,3)),this.setAttribute("uv",new Nn(u,2));function x(v,y,b,A,w){const D=Math.cos(v),U=Math.sin(v),S=b/y*v,P=Math.cos(S);w.x=A*(2+P)*.5*D,w.y=A*(2+P)*U*.5,w.z=A*Math.sin(S)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qh(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Vg extends ui{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,r=new H,s=new H;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const f=l[c],d=f.start,h=f.count;for(let _=d,g=d+h;_<g;_+=3)for(let m=0;m<3;m++){const p=a.getX(_+m),x=a.getX(_+(m+1)%3);r.fromBufferAttribute(o,p),s.fromBufferAttribute(o,x),Wg(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,f=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,f),Wg(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Nn(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Wg(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}class Fv extends bn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const cd=new Bt,Xg=new H,$g=new H;class cC{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qh,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Xg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xg),$g.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($g),t.updateMatrixWorld(),cd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(cd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Yg=new Bt,Va=new H,ud=new H;class uC extends cC{constructor(){super(new _i(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new Gt(2,1,1,1),new Gt(0,1,1,1),new Gt(3,1,1,1),new Gt(1,1,1,1),new Gt(3,0,1,1),new Gt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Va.setFromMatrixPosition(e.matrixWorld),i.position.copy(Va),ud.copy(i.position),ud.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ud),i.updateMatrixWorld(),r.makeTranslation(-Va.x,-Va.y,-Va.z),Yg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yg)}}class fd extends Fv{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new uC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class fC extends Fv{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}let dC=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=qg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function qg(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wh);function Pr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function kv(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ei={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Nl={duration:.5,overwrite:!1,delay:0},ep,Mn,Vt,Oi=1e8,Lt=1/Oi,nh=Math.PI*2,hC=nh/4,pC=0,Bv=Math.sqrt,mC=Math.cos,gC=Math.sin,vn=function(e){return typeof e=="string"},Jt=function(e){return typeof e=="function"},Yr=function(e){return typeof e=="number"},tp=function(e){return typeof e>"u"},vr=function(e){return typeof e=="object"},si=function(e){return e!==!1},np=function(){return typeof window<"u"},Ic=function(e){return Jt(e)||vn(e)},zv=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},On=Array.isArray,_C=/random\([^)]+\)/g,vC=/,\s*/g,jg=/(?:-?\.?\d|\.)+/gi,Hv=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ea=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,dd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Gv=/[+-]=-?[.\d]+/,xC=/[^,'"\[\]\s]+/gi,yC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,jt,or,ih,ip,wi={},Ru={},Vv,Wv=function(e){return(Ru=Sa(e,wi))&&ci},rp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ol=function(e,t){return!t&&console.warn(e)},Xv=function(e,t){return e&&(wi[e]=t)&&Ru&&(Ru[e]=t)||wi},Fl=function(){return 0},SC={suppressEvents:!0,isStart:!0,kill:!1},eu={suppressEvents:!0,kill:!1},bC={suppressEvents:!0},sp={},ys=[],rh={},$v,gi={},hd={},Kg=30,tu=[],op="",ap=function(e){var t=e[0],i,r;if(vr(t)||Jt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=tu.length;r--&&!tu[r].targetTest(t););i=tu[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new px(e[r],i)))||e.splice(r,1);return e},ao=function(e){return e._gsap||ap(Fi(e))[0]._gsap},Yv=function(e,t,i){return(i=e[t])&&Jt(i)?e[t]():tp(i)&&e.getAttribute&&e.getAttribute(t)||i},oi=function(e,t){return(e=e.split(",")).forEach(t)||e},Qt=function(e){return Math.round(e*1e5)/1e5||0},qt=function(e){return Math.round(e*1e7)/1e7||0},ca=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},MC=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Pu=function(){var e=ys.length,t=ys.slice(0),i,r;for(rh={},ys.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},lp=function(e){return!!(e._initted||e._startAt||e.add)},qv=function(e,t,i,r){ys.length&&!Mn&&Pu(),e.render(t,i,!!(Mn&&t<0&&lp(e))),ys.length&&!Mn&&Pu()},jv=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(xC).length<2?t:vn(e)?e.trim():e},Kv=function(e){return e},Ti=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},EC=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Sa=function(e,t){for(var i in t)e[i]=t[i];return e},Zg=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=vr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Lu=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},dl=function(e){var t=e.parent||jt,i=e.keyframes?EC(On(e.keyframes)):Ti;if(si(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},wC=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Zv=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},sf=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Es=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},lo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},TC=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},sh=function(e,t,i,r){return e._startAt&&(Mn?e._startAt.revert(eu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},AC=function n(e){return!e||e._ts&&n(e.parent)},Jg=function(e){return e._repeat?ba(e._tTime,e=e.duration()+e._rDelay)*e:0},ba=function(e,t){var i=Math.floor(e=qt(e/t));return e&&i===e?i-1:i},Du=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},of=function(e){return e._end=qt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Lt)||0))},af=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=qt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),of(e),i._dirty||lo(i,e)),e},Jv=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Du(e.rawTime(),t),(!t._dur||Ql(0,t.totalDuration(),i)-t._tTime>Lt)&&t.render(i,!0)),lo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Lt}},hr=function(e,t,i,r){return t.parent&&Es(t),t._start=qt((Yr(i)?i:i||e!==jt?Li(e,i,t):e._time)+t._delay),t._end=qt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Zv(e,t,"_first","_last",e._sort?"_start":0),oh(t)||(e._recent=t),r||Jv(e,t),e._ts<0&&af(e,e._tTime),e},Qv=function(e,t){return(wi.ScrollTrigger||rp("scrollTrigger",t))&&wi.ScrollTrigger.create(t,e)},ex=function(e,t,i,r,s){if(up(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Mn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&$v!==xi.frame)return ys.push(e),e._lazy=[s,r],1},CC=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},oh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},RC=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&CC(e)&&!(!e._initted&&oh(e))||(e._ts<0||e._dp._ts<0)&&!oh(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Ql(0,e._tDur,t),u=ba(l,a),e._yoyo&&u&1&&(o=1-o),u!==ba(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Mn||r||e._zTime===Lt||!t&&e._zTime){if(!e._initted&&ex(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?Lt:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&sh(e,t,i,!0),e._onUpdate&&!i&&bi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&bi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Es(e,1),!i&&!Mn&&(bi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},PC=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ma=function(e,t,i,r){var s=e._repeat,o=qt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:qt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&af(e,e._tTime=e._tDur*a),e.parent&&of(e),i||lo(e.parent,e),e},Qg=function(e){return e instanceof ii?lo(e):Ma(e,e._dur)},LC={_start:0,endTime:Fl,totalDuration:Fl},Li=function n(e,t,i){var r=e.labels,s=e._recent||LC,o=e.duration()>=Oi?s.endTime(!1):e._dur,a,l,c;return vn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(On(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},hl=function(e,t,i){var r=Yr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=si(l.vars.inherit)&&l.parent;o.immediateRender=si(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new rn(t[0],o,t[s+1])},Rs=function(e,t){return e||e===0?t(e):t},Ql=function(e,t,i){return i<e?e:i>t?t:i},Dn=function(e,t){return!vn(e)||!(t=yC.exec(e))?"":t[1]},DC=function(e,t,i){return Rs(i,function(r){return Ql(e,t,r)})},ah=[].slice,tx=function(e,t){return e&&vr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&vr(e[0]))&&!e.nodeType&&e!==or},IC=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return vn(r)&&!t||tx(r,1)?(s=i).push.apply(s,Fi(r)):i.push(r)})||i},Fi=function(e,t,i){return Vt&&!t&&Vt.selector?Vt.selector(e):vn(e)&&!i&&(ih||!Ea())?ah.call((t||ip).querySelectorAll(e),0):On(e)?IC(e,i):tx(e)?ah.call(e,0):e?[e]:[]},lh=function(e){return e=Fi(e)[0]||Ol("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Fi(t,i.querySelectorAll?i:i===e?Ol("Invalid scope")||ip.createElement("div"):e)}},nx=function(e){return e.sort(function(){return .5-Math.random()})},ix=function(e){if(Jt(e))return e;var t=vr(e)?e:{each:e},i=co(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return vn(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(d,h,_){var g=(_||t).length,m=o[g],p,x,v,y,b,A,w,D,U;if(!m){if(U=t.grid==="auto"?0:(t.grid||[1,Oi])[1],!U){for(w=-Oi;w<(w=_[U++].getBoundingClientRect().left)&&U<g;);U<g&&U--}for(m=o[g]=[],p=l?Math.min(U,g)*u-.5:r%U,x=U===Oi?0:l?g*f/U-.5:r/U|0,w=0,D=Oi,A=0;A<g;A++)v=A%U-p,y=x-(A/U|0),m[A]=b=c?Math.abs(c==="y"?y:v):Bv(v*v+y*y),b>w&&(w=b),b<D&&(D=b);r==="random"&&nx(m),m.max=w-D,m.min=D,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(U>g?g-1:c?c==="y"?g/U:U:Math.max(U,g/U))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Dn(t.amount||t.each)||0,i=i&&g<0?$C(i):i}return g=(m[d]-m.min)/m.max||0,qt(m.b+(i?i(g):g)*m.v)+m.u}},ch=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=qt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Yr(i)?0:Dn(i))}},rx=function(e,t){var i=On(e),r,s;return!i&&vr(e)&&(r=i=e.radius||Oi,e.values?(e=Fi(e.values),(s=!Yr(e[0]))&&(r*=r)):e=ch(e.increment)),Rs(t,i?Jt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Oi,u=0,f=e.length,d,h;f--;)s?(d=e[f].x-a,h=e[f].y-l,d=d*d+h*h):d=Math.abs(e[f]-a),d<c&&(c=d,u=f);return u=!r||c<=r?e[u]:o,s||u===o||Yr(o)?u:u+Dn(o)}:ch(e))},sx=function(e,t,i,r){return Rs(On(e)?!t:i===!0?!!(i=0):!r,function(){return On(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},UC=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},NC=function(e,t){return function(i){return e(parseFloat(i))+(t||Dn(i))}},OC=function(e,t,i){return ax(e,t,0,1,i)},ox=function(e,t,i){return Rs(i,function(r){return e[~~t(r)]})},FC=function n(e,t,i){var r=t-e;return On(e)?ox(e,n(0,e.length),t):Rs(i,function(s){return(r+(s-e)%r)%r+e})},kC=function n(e,t,i){var r=t-e,s=r*2;return On(e)?ox(e,n(0,e.length-1),t):Rs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},kl=function(e){return e.replace(_C,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(vC);return sx(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},ax=function(e,t,i,r,s){var o=t-e,a=r-i;return Rs(s,function(l){return i+((l-e)/o*a||0)})},BC=function n(e,t,i,r){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var o=vn(e),a={},l,c,u,f,d;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(On(e)&&!On(t)){for(u=[],f=e.length,d=f-2,c=1;c<f;c++)u.push(n(e[c-1],e[c]));f--,s=function(_){_*=f;var g=Math.min(d,~~_);return u[g](_-g)},i=t}else r||(e=Sa(On(e)?[]:{},e));if(!u){for(l in t)cp.call(a,e,l,"get",t[l]);s=function(_){return hp(_,a)||(o?e.p:e)}}}return Rs(i,s)},e_=function(e,t,i){var r=e.labels,s=Oi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},bi=function(e,t,i){var r=e.vars,s=r[t],o=Vt,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&ys.length&&Pu(),a&&(Vt=a),u=l?s.apply(c,l):s.call(c),Vt=o,u},Za=function(e){return Es(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Mn),e.progress()<1&&bi(e,"onInterrupt"),e},ta,lx=[],cx=function(e){if(e)if(e=!e.name&&e.default||e,np()||e.headless){var t=e.name,i=Jt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Fl,render:hp,add:cp,kill:n2,modifier:t2,rawVars:0},o={targetTest:0,get:0,getSetter:dp,aliases:{},register:0};if(Ea(),e!==r){if(gi[t])return;Ti(r,Ti(Lu(e,s),o)),Sa(r.prototype,Sa(s,Lu(e,o))),gi[r.prop=t]=r,e.targetTest&&(tu.push(r),sp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Xv(t,r),e.register&&e.register(ci,r,ai)}else lx.push(e)},Pt=255,Ja={aqua:[0,Pt,Pt],lime:[0,Pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Pt],navy:[0,0,128],white:[Pt,Pt,Pt],olive:[128,128,0],yellow:[Pt,Pt,0],orange:[Pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Pt,0,0],pink:[Pt,192,203],cyan:[0,Pt,Pt],transparent:[Pt,Pt,Pt,0]},pd=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Pt+.5|0},ux=function(e,t,i){var r=e?Yr(e)?[e>>16,e>>8&Pt,e&Pt]:0:Ja.black,s,o,a,l,c,u,f,d,h,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ja[e])r=Ja[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Pt,r&Pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Pt,e&Pt]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(jg),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=pd(l+1/3,s,o),r[1]=pd(l,s,o),r[2]=pd(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Hv),i&&r.length<4&&(r[3]=1),r}else r=e.match(jg)||Ja.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/Pt,o=r[1]/Pt,a=r[2]/Pt,f=Math.max(s,o,a),d=Math.min(s,o,a),u=(f+d)/2,f===d?l=c=0:(h=f-d,c=u>.5?h/(2-f-d):h/(f+d),l=f===s?(o-a)/h+(o<a?6:0):f===o?(a-s)/h+2:(s-o)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},fx=function(e){var t=[],i=[],r=-1;return e.split(Ss).forEach(function(s){var o=s.match(ea)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},t_=function(e,t,i){var r="",s=(e+r).match(Ss),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(d){return(d=ux(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(u=fx(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Ss,"1").split(ea),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Ss),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},Ss=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ja)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),zC=/hsl[a]?\(/,dx=function(e){var t=e.join(" "),i;if(Ss.lastIndex=0,Ss.test(t))return i=zC.test(t),e[1]=t_(e[1],i),e[0]=t_(e[0],i,fx(e[1])),!0},Bl,xi=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,f,d,h,_=function g(m){var p=n()-r,x=m===!0,v,y,b,A;if((p>e||p<0)&&(i+=p-t),r+=p,b=r-i,v=b-o,(v>0||x)&&(A=++f.frame,d=b-f.time*1e3,f.time=b=b/1e3,o+=v+(v>=s?4:s-v),y=1),x||(l=c(g)),y)for(h=0;h<a.length;h++)a[h](b,d,A,m)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Vv&&(!ih&&np()&&(or=ih=window,ip=or.document||{},wi.gsap=ci,(or.gsapVersions||(or.gsapVersions=[])).push(ci.version),Wv(Ru||or.GreenSockGlobals||!or.gsap&&or||{}),lx.forEach(cx)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Bl=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Bl=0,c=Fl},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,x){var v=p?function(y,b,A,w){m(y,b,A,w),f.remove(v)}:m;return f.remove(m),a[x?"unshift":"push"](v),Ea(),v},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&h>=p&&h--},_listeners:a},f}(),Ea=function(){return!Bl&&xi.wake()},pt={},HC=/^[\d.\-M][\d.\-,\s]/,GC=/["']/g,VC=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(GC,"").trim():+c,r=l.substr(a+1).trim();return t},WC=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},XC=function(e){var t=(e+"").split("("),i=pt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[VC(t[1])]:WC(e).split(",").map(jv)):pt._CE&&HC.test(e)?pt._CE("",e):i},$C=function(e){return function(t){return 1-e(1-t)}},co=function(e,t){return e&&(Jt(e)?e:pt[e]||XC(e))||t},So=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return oi(e,function(a){pt[a]=wi[a]=s,pt[o=a.toLowerCase()]=i;for(var l in s)pt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=pt[a+"."+l]=s[l]}),s},hx=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},md=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/nh*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*gC((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:hx(a);return s=nh/s,l.config=function(c,u){return n(e,c,u)},l},gd=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:hx(i);return r.config=function(s){return n(e,s)},r};oi("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;So(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});pt.Linear.easeNone=pt.none=pt.Linear.easeIn;So("Elastic",md("in"),md("out"),md());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};So("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);So("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});So("Circ",function(n){return-(Bv(1-n*n)-1)});So("Sine",function(n){return n===1?1:-mC(n*hC)+1});So("Back",gd("in"),gd("out"),gd());pt.SteppedEase=pt.steps=wi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Lt;return function(a){return((r*Ql(0,o,a)|0)+s)*i}}};Nl.ease=pt["quad.out"];oi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return op+=n+","+n+"Params,"});var px=function(e,t){this.id=pC++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Yv,this.set=t?t.getSetter:dp},zl=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ma(this,+t.duration,1,1),this.data=t.data,Vt&&(this._ctx=Vt,Vt.data.push(this)),Bl||xi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ma(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Ea(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(af(this,i),!s._dp||s.parent||Jv(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&hr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Lt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),qv(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Jg(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Jg(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?ba(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Lt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Du(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Lt?0:this._rts,this.totalTime(Ql(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),of(this),TC(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ea(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Lt&&(this._tTime-=Lt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=qt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&hr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(si(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Du(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=bC);var r=Mn;return Mn=i,lp(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Mn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Qg(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Qg(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Li(this,i),si(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,si(r)),this._dur||(this._zTime=-Lt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Lt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Lt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Lt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Jt(i)?i:Kv,l=function(){var u=r.then;r.then=null,s&&s(),Jt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Za(this)},n}();Ti(zl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Lt,_prom:0,_ps:!1,_rts:1});var ii=function(n){kv(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=si(i.sortChildren),jt&&hr(i.parent||jt,Pr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Qv(Pr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return hl(0,arguments,this),this},t.from=function(r,s,o){return hl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return hl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,dl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new rn(r,s,Li(this,o),1),this},t.call=function(r,s,o){return hr(this,rn.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new rn(r,o,Li(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,dl(o).immediateRender=si(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,dl(a).immediateRender=si(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:qt(r),f=this._zTime<0!=r<0&&(this._initted||!c),d,h,_,g,m,p,x,v,y,b,A,w;if(this!==jt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),d=u,y=this._start,v=this._ts,p=!v,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(d=qt(u%m),u===l?(g=this._repeat,d=c):(b=qt(u/m),g=~~b,g&&g===b&&(d=c,g--),d>c&&(d=c)),b=ba(this._tTime,m),!a&&this._tTime&&b!==g&&this._tTime-b*m-this._dur<=0&&(b=g),A&&g&1&&(d=c-d,w=1),g!==b&&!this._lock){var D=A&&b&1,U=D===(A&&g&1);if(g<b&&(D=!D),a=D?0:u%c?c:u,this._lock=1,this.render(a||(w?0:qt(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&bi(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,b=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,U&&(this._lock=2,a=D?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=PC(this,qt(a),qt(d)),x&&(u-=d-(d=x._start))),this._tTime=u,this._time=d,this._act=!!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!b&&(bi(this,"onStart"),this._tTime!==u))return this;if(d>=a&&r>=0)for(h=this._first;h;){if(_=h._next,(h._act||d>=h._start)&&h._ts&&x!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(d-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(d-h._start)*h._ts,s,o),d!==this._time||!this._ts&&!p){x=0,_&&(u+=this._zTime=-Lt);break}}h=_}else{h=this._last;for(var S=r<0?r:d;h;){if(_=h._prev,(h._act||S<=h._end)&&h._ts&&x!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(S-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(S-h._start)*h._ts,s,o||Mn&&lp(h)),d!==this._time||!this._ts&&!p){x=0,_&&(u+=this._zTime=S?-Lt:Lt);break}}h=_}}if(x&&!s&&(this.pause(),x.render(d>=a?0:-Lt)._zTime=d>=a?1:-1,this._ts))return this._start=y,of(this),this.render(r,s,o);this._onUpdate&&!s&&bi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Es(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(bi(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Yr(s)||(s=Li(this,s,r)),!(r instanceof zl)){if(On(r))return r.forEach(function(a){return o.add(a,s)}),this;if(vn(r))return this.addLabel(r,s);if(Jt(r))r=rn.delayedCall(0,r);else return this}return this!==r?hr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Oi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof rn?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return vn(r)?this.removeLabel(r):Jt(r)?this.killTweensOf(r):(r.parent===this&&sf(this,r),r===this._recent&&(this._recent=this._last),lo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=qt(xi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Li(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=rn.delayedCall(0,s||Fl,o);return a.data="isPause",this._hasPause=1,hr(this,a,Li(this,r))},t.removePause=function(r){var s=this._first;for(r=Li(this,r);s;)s._start===r&&s.data==="isPause"&&Es(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)us!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Fi(r),l=this._first,c=Yr(s),u;l;)l instanceof rn?MC(l._targets,a)&&(c?(!us||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Li(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,h,_=rn.to(o,Ti({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Lt,onStart:function(){if(o.pause(),!h){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&Ma(_,m,0,1).render(_._time,!0,!0),h=1}u&&u.apply(_,f||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Ti({startAt:{time:Li(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),e_(this,Li(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),e_(this,Li(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Lt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=qt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return lo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),lo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Oi,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,hr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=qt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ma(o,o===jt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(jt._ts&&(qv(jt,Du(r,jt)),$v=xi.frame),xi.frame>=Kg){Kg+=Ei.autoSleep||120;var s=jt._first;if((!s||!s._ts)&&Ei.autoSleep&&xi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||xi.sleep()}}},e}(zl);Ti(ii.prototype,{_lock:0,_hasPause:0,_forcing:0});var YC=function(e,t,i,r,s,o,a){var l=new ai(this._pt,e,t,0,1,yx,null,s),c=0,u=0,f,d,h,_,g,m,p,x;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=kl(r)),o&&(x=[i,r],o(x,e,t),i=x[0],r=x[1]),d=i.match(dd)||[];f=dd.exec(r);)_=f[0],g=r.substring(c,f.index),h?h=(h+1)%5:g.substr(-5)==="rgba("&&(h=1),_!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?ca(m,_)-m:parseFloat(_)-m,m:h&&h<4?Math.round:0},c=dd.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Gv.test(r)||p)&&(l.e=0),this._pt=l,l},cp=function(e,t,i,r,s,o,a,l,c,u){Jt(r)&&(r=r(s||0,e,o));var f=e[t],d=i!=="get"?i:Jt(f)?c?e[t.indexOf("set")||!Jt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,h=Jt(f)?c?JC:vx:fp,_;if(vn(r)&&(~r.indexOf("random(")&&(r=kl(r)),r.charAt(1)==="="&&(_=ca(d,r)+(Dn(d)||0),(_||_===0)&&(r=_))),!u||d!==r||uh)return!isNaN(d*r)&&r!==""?(_=new ai(this._pt,e,t,+d||0,r-(d||0),typeof f=="boolean"?e2:xx,0,h),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!f&&!(t in e)&&rp(t,r),YC.call(this,e,t,d,r,h,l||Ei.stringFilter,c))},qC=function(e,t,i,r,s){if(Jt(e)&&(e=pl(e,s,t,i,r)),!vr(e)||e.style&&e.nodeType||On(e)||zv(e))return vn(e)?pl(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=pl(e[a],s,t,i,r);return o},mx=function(e,t,i,r,s,o){var a,l,c,u;if(gi[e]&&(a=new gi[e]).init(s,a.rawVars?t[e]:qC(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new ai(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==ta))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},us,uh,up=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,d=r.keyframes,h=r.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,x=p&&p.data==="nested"?p.vars.targets:m,v=e._overwrite==="auto"&&!ep,y=e.timeline,b=r.easeReverse||f,A,w,D,U,S,P,F,te,N,Z,W,X,G;if(y&&(!d||!s)&&(s="none"),e._ease=co(s,Nl.ease),e._rEase=b&&(co(b)||e._ease),e._from=!y&&!!r.runBackwards,e._from&&(e.ratio=1),!y||d&&!r.stagger){if(te=m[0]?ao(m[0]).harness:0,X=te&&r[te.prop],A=Lu(r,sp),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!h?g.render(-1,!0):g.revert(u&&_?eu:SC),g._lazy=0),o){if(Es(e._startAt=rn.set(m,Ti({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&si(l),startAt:null,delay:0,onUpdate:c&&function(){return bi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mn||!a&&!h)&&e._startAt.revert(eu),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),D=Ti({overwrite:!1,data:"isFromStart",lazy:a&&!g&&si(l),immediateRender:a,stagger:0,parent:p},A),X&&(D[te.prop]=X),Es(e._startAt=rn.set(m,D)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mn?e._startAt.revert(eu):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Lt,Lt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&si(l)||l&&!_,w=0;w<m.length;w++){if(S=m[w],F=S._gsap||ap(m)[w]._gsap,e._ptLookup[w]=Z={},rh[F.id]&&ys.length&&Pu(),W=x===m?w:x.indexOf(S),te&&(N=new te).init(S,X||A,e,W,x)!==!1&&(e._pt=U=new ai(e._pt,S,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(re){Z[re]=U}),N.priority&&(P=1)),!te||X)for(D in A)gi[D]&&(N=mx(D,A,e,W,S,x))?N.priority&&(P=1):Z[D]=U=cp.call(e,S,D,"get",A[D],W,x,0,r.stringFilter);e._op&&e._op[w]&&e.kill(S,e._op[w]),v&&e._pt&&(us=e,jt.killTweensOf(S,Z,e.globalTime(t)),G=!e.parent,us=0),e._pt&&l&&(rh[F.id]=1)}P&&Sx(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!G,d&&t<=0&&y.render(Oi,!0,!0)},jC=function(e,t,i,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,d,h;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,h=e._targets.length;h--;){if(u=d[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return uh=1,e.vars[t]="+=0",up(e,a),uh=0,l?Ol(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(h=c.length;h--;)f=c[h],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,f.e&&(f.e=Qt(i)+Dn(f.e)),f.b&&(f.b=u.s+Dn(f.b))},KC=function(e,t){var i=e[0]?ao(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Sa({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},ZC=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(On(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},pl=function(e,t,i,r,s){return Jt(e)?e.call(t,i,r,s):vn(e)&&~e.indexOf("random(")?kl(e):e},gx=op+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",_x={};oi(gx+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return _x[n]=1});var rn=function(n){kv(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:dl(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,h=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=r.parent||jt,x=(On(i)||zv(i)?Yr(i[0]):"length"in r)?[i]:Fi(i),v,y,b,A,w,D,U,S;if(a._targets=x.length?ap(x):Ol("GSAP target "+i+" not found. https://gsap.com",!Ei.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,_||d||Ic(c)||Ic(u)){r=a.vars;var P=r.easeReverse||r.yoyoEase;if(v=a.timeline=new ii({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:x}),v.kill(),v.parent=v._dp=Pr(a),v._start=0,d||Ic(c)||Ic(u)){if(A=x.length,U=d&&ix(d),vr(d))for(w in d)~gx.indexOf(w)&&(S||(S={}),S[w]=d[w]);for(y=0;y<A;y++)b=Lu(r,_x),b.stagger=0,P&&(b.easeReverse=P),S&&Sa(b,S),D=x[y],b.duration=+pl(c,Pr(a),y,D,x),b.delay=(+pl(u,Pr(a),y,D,x)||0)-a._delay,!d&&A===1&&b.delay&&(a._delay=u=b.delay,a._start+=u,b.delay=0),v.to(D,b,U?U(y,D,x):0),v._ease=pt.none;v.duration()?c=u=0:a.timeline=0}else if(_){dl(Ti(v.vars.defaults,{ease:"none"})),v._ease=co(_.ease||r.ease||"none");var F=0,te,N,Z;if(On(_))_.forEach(function(W){return v.to(x,W,">")}),v.duration();else{b={};for(w in _)w==="ease"||w==="easeEach"||ZC(w,_[w],b,_.easeEach);for(w in b)for(te=b[w].sort(function(W,X){return W.t-X.t}),F=0,y=0;y<te.length;y++)N=te[y],Z={ease:N.e,duration:(N.t-(y?te[y-1].t:0))/100*c},Z[w]=N.v,v.to(x,Z,F),F+=Z.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return h===!0&&!ep&&(us=Pr(a),jt.killTweensOf(x),us=0),hr(p,Pr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!_&&a._start===qt(p._time)&&si(f)&&AC(Pr(a))&&p.data!=="nested")&&(a._tTime=-Lt,a.render(Math.max(0,-u)||0)),m&&Qv(Pr(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-Lt&&!u?l:r<Lt?0:r,d,h,_,g,m,p,x,v;if(!c)RC(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=f,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,o);if(d=qt(f%g),f===l?(_=this._repeat,d=c):(m=qt(f/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(d=c-d),m=ba(this._tTime,g),d===a&&!o&&this._initted&&_===m)return this._tTime=f,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(qt(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(ex(this,u?r:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._rEase){var y=d<a;if(y!==this._inv){var b=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=b?(y?-1:1)/b:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(d/c);if(this._from&&(this.ratio=x=1-x),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&f&&!s&&!m&&(bi(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(x,h.d),h=h._next;v&&v.render(r<0?r:v._dur*v._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&sh(this,r,s,o),bi(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&bi(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&sh(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Es(this,1),!s&&!(u&&!a)&&(f||a||p)&&(bi(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Bl||xi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||up(this,c),u=this._ease(c/this._dur),jC(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(af(this,0),this.parent||Zv(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Za(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Mn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,us&&us.vars.overwrite!==!0)._first||Za(this),this.parent&&o!==this.timeline.totalDuration()&&Ma(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Fi(r):a,c=this._ptLookup,u=this._pt,f,d,h,_,g,m,p;if((!s||s==="all")&&wC(a,l))return s==="all"&&(this._pt=0),Za(this);for(f=this._op=this._op||[],s!=="all"&&(vn(s)&&(g={},oi(s,function(x){return g[x]=1}),s=g),s=KC(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(f[p]=s,_=d,h={}):(h=f[p]=f[p]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&sf(this,m,"_pt"),delete d[g]),h!=="all"&&(h[g]=1)}return this._initted&&!this._pt&&u&&Za(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return hl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return hl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return jt.killTweensOf(r,s,o)},e}(zl);Ti(rn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});oi("staggerTo,staggerFrom,staggerFromTo",function(n){rn[n]=function(){var e=new ii,t=ah.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var fp=function(e,t,i){return e[t]=i},vx=function(e,t,i){return e[t](i)},JC=function(e,t,i,r){return e[t](r.fp,i)},QC=function(e,t,i){return e.setAttribute(t,i)},dp=function(e,t){return Jt(e[t])?vx:tp(e[t])&&e.setAttribute?QC:fp},xx=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},e2=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},yx=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},hp=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},t2=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},n2=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?sf(this,t,"_pt"):t.dep||(i=1),t=r;return!i},i2=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},Sx=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},ai=function(){function n(t,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||xx,this.d=l||this,this.set=c||fp,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=i2,this.m=i,this.mt=s,this.tween=r},n}();oi(op+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return sp[n]=1});wi.TweenMax=wi.TweenLite=rn;wi.TimelineLite=wi.TimelineMax=ii;jt=new ii({sortChildren:!1,defaults:Nl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ei.stringFilter=dx;var uo=[],nu={},r2=[],n_=0,s2=0,_d=function(e){return(nu[e]||r2).map(function(t){return t()})},fh=function(){var e=Date.now(),t=[];e-n_>2&&(_d("matchMediaInit"),uo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=or.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),_d("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),n_=e,_d("matchMedia"))},bx=function(){function n(t,i){this.selector=i&&lh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=s2++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Jt(i)&&(s=r,r=i,i=Jt);var o=this,a=function(){var c=Vt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=lh(s)),Vt=o,f=r.apply(o,arguments),Jt(f)&&o._r.push(f),Vt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,i===Jt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Vt;Vt=null,i(this),Vt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof rn&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof ii?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof rn)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=uo.length;o--;)uo[o].id===this.id&&uo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),o2=function(){function n(t){this.contexts=[],this.scope=t,Vt&&Vt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){vr(i)||(i={matches:i});var o=new bx(0,s||this.scope),a=o.conditions={},l,c,u;Vt&&!o.selector&&(o.selector=Vt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=or.matchMedia(i[c]),l&&(uo.indexOf(o)<0&&uo.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(fh):l.addEventListener("change",fh)));return u&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Iu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return cx(r)})},timeline:function(e){return new ii(e)},getTweensOf:function(e,t){return jt.getTweensOf(e,t)},getProperty:function(e,t,i,r){vn(e)&&(e=Fi(e)[0]);var s=ao(e||{}).get,o=i?Kv:jv;return i==="native"&&(i=""),e&&(t?o((gi[t]&&gi[t].get||s)(e,t,i,r)):function(a,l,c){return o((gi[a]&&gi[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=Fi(e),e.length>1){var r=e.map(function(u){return ci.quickSetter(u,t,i)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=gi[t],a=ao(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;ta._pt=0,f.init(e,i?u+i:u,ta,0,[e]),f.render(1,f),ta._pt&&hp(1,ta)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,s=ci.to(e,Ti((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return jt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=co(e.ease,Nl.ease)),Zg(Nl,e||{})},config:function(e){return Zg(Ei,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!gi[a]&&!wi[a]&&Ol(t+" effect requires "+a+" plugin.")}),hd[t]=function(a,l,c){return i(Fi(a),Ti(l||{},s),c)},o&&(ii.prototype[t]=function(a,l,c){return this.add(hd[t](a,vr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){pt[e]=co(t)},parseEase:function(e,t){return arguments.length?co(e,t):pt},getById:function(e){return jt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new ii(e),r,s;for(i.smoothChildTiming=si(e.smoothChildTiming),jt.remove(i),i._dp=0,i._time=i._tTime=jt._time,r=jt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof rn&&r.vars.onComplete===r._targets[0]))&&hr(i,r,r._start-r._delay),r=s;return hr(jt,i,0),i},context:function(e,t){return e?new bx(e,t):Vt},matchMedia:function(e){return new o2(e)},matchMediaRefresh:function(){return uo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||fh()},addEventListener:function(e,t){var i=nu[e]||(nu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=nu[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:FC,wrapYoyo:kC,distribute:ix,random:sx,snap:rx,normalize:OC,getUnit:Dn,clamp:DC,splitColor:ux,toArray:Fi,selector:lh,mapRange:ax,pipe:UC,unitize:NC,interpolate:BC,shuffle:nx},install:Wv,effects:hd,ticker:xi,updateRoot:ii.updateRoot,plugins:gi,globalTimeline:jt,core:{PropTween:ai,globals:Xv,Tween:rn,Timeline:ii,Animation:zl,getCache:ao,_removeLinkedListItem:sf,reverting:function(){return Mn},context:function(e){return e&&Vt&&(Vt.data.push(e),e._ctx=Vt),Vt},suppressOverwrites:function(e){return ep=e}}};oi("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Iu[n]=rn[n]});xi.add(ii.updateRoot);ta=Iu.to({},{duration:0});var a2=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},l2=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=a2(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},vd=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(vn(s)&&(l={},oi(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}l2(a,s)}}}},ci=Iu.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Mn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},vd("roundProps",ch),vd("modifiers"),vd("snap",rx))||Iu;rn.version=ii.version=ci.version="3.15.0";Vv=1;np()&&Ea();pt.Power0;pt.Power1;pt.Power2;pt.Power3;pt.Power4;pt.Linear;pt.Quad;pt.Cubic;pt.Quart;pt.Quint;pt.Strong;pt.Elastic;pt.Back;pt.SteppedEase;pt.Bounce;pt.Sine;pt.Expo;pt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var i_,fs,ua,pp,to,r_,mp,c2=function(){return typeof window<"u"},qr={},qs=180/Math.PI,fa=Math.PI/180,Vo=Math.atan2,s_=1e8,gp=/([A-Z])/g,u2=/(left|right|width|margin|padding|x)/i,f2=/[\s,\(]\S/,pr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},dh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},d2=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},h2=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},p2=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},m2=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Mx=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Ex=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},g2=function(e,t,i){return e.style[t]=i},_2=function(e,t,i){return e.style.setProperty(t,i)},v2=function(e,t,i){return e._gsap[t]=i},x2=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},y2=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},S2=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Kt="transform",li=Kt+"Origin",b2=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in qr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=pr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Dr(r,a)}):this.tfm[e]=o.x?o[e]:Dr(r,e),e===li&&(this.tfm.zOrigin=o.zOrigin);else return pr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Kt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(li,t,"")),e=Kt}(s||t)&&this.props.push(e,t,s[e])},wx=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},M2=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(gp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=mp(),(!s||!s.isStart)&&!i[Kt]&&(wx(i),r.zOrigin&&i[li]&&(i[li]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Tx=function(e,t){var i={target:e,props:[],revert:M2,save:b2};return e._gsap||ci.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},Ax,hh=function(e,t){var i=fs.createElementNS?fs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):fs.createElement(e);return i&&i.style?i:fs.createElement(e)},Mi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(gp,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,wa(t)||t,1)||""},o_="O,Moz,ms,Ms,Webkit".split(","),wa=function(e,t,i){var r=t||to,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(o_[o]+e in s););return o<0?null:(o===3?"ms":o>=0?o_[o]:"")+e},ph=function(){c2()&&window.document&&(i_=window,fs=i_.document,ua=fs.documentElement,to=hh("div")||{style:{}},hh("div"),Kt=wa(Kt),li=Kt+"Origin",to.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ax=!!wa("perspective"),mp=ci.core.reverting,pp=1)},a_=function(e){var t=e.ownerSVGElement,i=hh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),ua.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),ua.removeChild(i),s},l_=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Cx=function(e){var t,i;try{t=e.getBBox()}catch{t=a_(e),i=1}return t&&(t.width||t.height)||i||(t=a_(e)),t&&!t.width&&!t.x&&!t.y?{x:+l_(e,["x","cx","x1"])||0,y:+l_(e,["y","cy","y1"])||0,width:0,height:0}:t},Rx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Cx(e))},ws=function(e,t){if(t){var i=e.style,r;t in qr&&t!==li&&(t=Kt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(gp,"-$1").toLowerCase())):i.removeAttribute(t)}},ds=function(e,t,i,r,s,o){var a=new ai(e._pt,t,i,0,1,o?Ex:Mx);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},c_={deg:1,rad:1,turn:1},E2={grid:1,flex:1},Ts=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=to.style,l=u2.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",h=r==="%",_,g,m,p;if(r===o||!s||c_[r]||c_[o])return s;if(o!=="px"&&!d&&(s=n(e,t,i,"px")),p=e.getCTM&&Rx(e),(h||o==="%")&&(qr[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],Qt(h?s/_*f:s/100*_);if(a[l?"width":"height"]=f+(d?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===fs||!g.appendChild)&&(g=fs.body),m=g._gsap,m&&h&&m.width&&l&&m.time===xi.time&&!m.uncache)return Qt(s/m.width*f);if(h&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=f+r,_=e[u],x?e.style[t]=x:ws(e,t)}else(h||o==="%")&&!E2[Mi(g,"display")]&&(a.position=Mi(e,"position")),g===e&&(a.position="static"),g.appendChild(to),_=to[u],g.removeChild(to),a.position="absolute";return l&&h&&(m=ao(g),m.time=xi.time,m.width=g[u]),Qt(d?_*s/f:_&&s?f/_*s:0)},Dr=function(e,t,i,r){var s;return pp||ph(),t in pr&&t!=="transform"&&(t=pr[t],~t.indexOf(",")&&(t=t.split(",")[0])),qr[t]&&t!=="transform"?(s=Gl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Nu(Mi(e,li))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Uu[t]&&Uu[t](e,t,i)||Mi(e,t)||Yv(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Ts(e,t,s,i)+i:s},w2=function(e,t,i,r){if(!i||i==="none"){var s=wa(t,e,1),o=s&&Mi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Mi(e,"borderTopColor"))}var a=new ai(this._pt,e.style,t,0,1,yx),l=0,c=0,u,f,d,h,_,g,m,p,x,v,y,b;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Mi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=Mi(e,t)||r,g?e.style[t]=g:ws(e,t)),u=[i,r],dx(u),i=u[0],r=u[1],d=i.match(ea)||[],b=r.match(ea)||[],b.length){for(;f=ea.exec(r);)m=f[0],x=r.substring(l,f.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(h=parseFloat(g)||0,y=g.substr((h+"").length),m.charAt(1)==="="&&(m=ca(h,m)+y),p=parseFloat(m),v=m.substr((p+"").length),l=ea.lastIndex-v.length,v||(v=v||Ei.units[t]||y,l===r.length&&(r+=v,a.e+=v)),y!==v&&(h=Ts(e,t,g,v)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:h,c:p-h,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Ex:Mx;return Gv.test(r)&&(a.e=0),this._pt=a,a},u_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},T2=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=u_[i]||i,t[1]=u_[r]||r,t.join(" ")},A2=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],qr[a]&&(l=1,a=a==="transformOrigin"?li:Kt),ws(i,a);l&&(ws(i,Kt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Gl(i,1),o.uncache=1,wx(r)))}},Uu={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new ai(e._pt,t,i,0,0,A2);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Hl=[1,0,0,1,0,0],Px={},Lx=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},f_=function(e){var t=Mi(e,Kt);return Lx(t)?Hl:t.substr(7).match(Hv).map(Qt)},_p=function(e,t){var i=e._gsap||ao(e),r=e.style,s=f_(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Hl:s):(s===Hl&&!e.offsetParent&&e!==ua&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,ua.appendChild(e)),s=f_(e),l?r.display=l:ws(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ua.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},mh=function(e,t,i,r,s,o){var a=e._gsap,l=s||_p(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,h=l[0],_=l[1],g=l[2],m=l[3],p=l[4],x=l[5],v=t.split(" "),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,A,w,D,U;i?l!==Hl&&(w=h*m-_*g)&&(D=y*(m/w)+b*(-g/w)+(g*x-m*p)/w,U=y*(-_/w)+b*(h/w)-(h*x-_*p)/w,y=D,b=U):(A=Cx(e),y=A.x+(~v[0].indexOf("%")?y/100*A.width:y),b=A.y+(~(v[1]||v[0]).indexOf("%")?b/100*A.height:b)),r||r!==!1&&a.smooth?(p=y-c,x=b-u,a.xOffset=f+(p*h+x*g)-p,a.yOffset=d+(p*_+x*m)-x):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=b,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[li]="0px 0px",o&&(ds(o,a,"xOrigin",c,y),ds(o,a,"yOrigin",u,b),ds(o,a,"xOffset",f,a.xOffset),ds(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+b)},Gl=function(e,t){var i=e._gsap||new px(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Mi(e,li)||"0",u,f,d,h,_,g,m,p,x,v,y,b,A,w,D,U,S,P,F,te,N,Z,W,X,G,re,I,ue,_e,Xe,J,de;return u=f=d=g=m=p=x=v=y=0,h=_=1,i.svg=!!(e.getCTM&&Rx(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Kt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Kt]!=="none"?l[Kt]:"")),r.scale=r.rotate=r.translate="none"),w=_p(e,i.svg),i.svg&&(i.uncache?(G=e.getBBox(),c=i.xOrigin-G.x+"px "+(i.yOrigin-G.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),mh(e,X||c,!!X||i.originIsAbsolute,i.smooth!==!1,w)),b=i.xOrigin||0,A=i.yOrigin||0,w!==Hl&&(P=w[0],F=w[1],te=w[2],N=w[3],u=Z=w[4],f=W=w[5],w.length===6?(h=Math.sqrt(P*P+F*F),_=Math.sqrt(N*N+te*te),g=P||F?Vo(F,P)*qs:0,x=te||N?Vo(te,N)*qs+g:0,x&&(_*=Math.abs(Math.cos(x*fa))),i.svg&&(u-=b-(b*P+A*te),f-=A-(b*F+A*N))):(de=w[6],Xe=w[7],I=w[8],ue=w[9],_e=w[10],J=w[11],u=w[12],f=w[13],d=w[14],D=Vo(de,_e),m=D*qs,D&&(U=Math.cos(-D),S=Math.sin(-D),X=Z*U+I*S,G=W*U+ue*S,re=de*U+_e*S,I=Z*-S+I*U,ue=W*-S+ue*U,_e=de*-S+_e*U,J=Xe*-S+J*U,Z=X,W=G,de=re),D=Vo(-te,_e),p=D*qs,D&&(U=Math.cos(-D),S=Math.sin(-D),X=P*U-I*S,G=F*U-ue*S,re=te*U-_e*S,J=N*S+J*U,P=X,F=G,te=re),D=Vo(F,P),g=D*qs,D&&(U=Math.cos(D),S=Math.sin(D),X=P*U+F*S,G=Z*U+W*S,F=F*U-P*S,W=W*U-Z*S,P=X,Z=G),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),h=Qt(Math.sqrt(P*P+F*F+te*te)),_=Qt(Math.sqrt(W*W+de*de)),D=Vo(Z,W),x=Math.abs(D)>2e-4?D*qs:0,y=J?1/(J<0?-J:J):0),i.svg&&(X=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Lx(Mi(e,Kt)),X&&e.setAttribute("transform",X))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(h*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=d+o,i.scaleX=Qt(h),i.scaleY=Qt(_),i.rotation=Qt(g)+a,i.rotationX=Qt(m)+a,i.rotationY=Qt(p)+a,i.skewX=x+a,i.skewY=v+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[li]=Nu(c)),i.xOffset=i.yOffset=0,i.force3D=Ei.force3D,i.renderTransform=i.svg?R2:Ax?Dx:C2,i.uncache=0,i},Nu=function(e){return(e=e.split(" "))[0]+" "+e[1]},xd=function(e,t,i){var r=Dn(t);return Qt(parseFloat(t)+parseFloat(Ts(e,"x",i+"px",r)))+r},C2=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Dx(e,t)},Gs="0deg",Wa="0px",Vs=") ",Dx=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,d=i.skewX,h=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,p=i.force3D,x=i.target,v=i.zOrigin,y="",b=p==="auto"&&e&&e!==1||p===!0;if(v&&(f!==Gs||u!==Gs)){var A=parseFloat(u)*fa,w=Math.sin(A),D=Math.cos(A),U;A=parseFloat(f)*fa,U=Math.cos(A),o=xd(x,o,w*U*-v),a=xd(x,a,-Math.sin(A)*-v),l=xd(x,l,D*U*-v+v)}m!==Wa&&(y+="perspective("+m+Vs),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(b||o!==Wa||a!==Wa||l!==Wa)&&(y+=l!==Wa||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Vs),c!==Gs&&(y+="rotate("+c+Vs),u!==Gs&&(y+="rotateY("+u+Vs),f!==Gs&&(y+="rotateX("+f+Vs),(d!==Gs||h!==Gs)&&(y+="skew("+d+", "+h+Vs),(_!==1||g!==1)&&(y+="scale("+_+", "+g+Vs),x.style[Kt]=y||"translate(0, 0)"},R2=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,d=i.scaleY,h=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,p=i.yOffset,x=i.forceCSS,v=parseFloat(o),y=parseFloat(a),b,A,w,D,U;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=fa,c*=fa,b=Math.cos(l)*f,A=Math.sin(l)*f,w=Math.sin(l-c)*-d,D=Math.cos(l-c)*d,c&&(u*=fa,U=Math.tan(c-u),U=Math.sqrt(1+U*U),w*=U,D*=U,u&&(U=Math.tan(u),U=Math.sqrt(1+U*U),b*=U,A*=U)),b=Qt(b),A=Qt(A),w=Qt(w),D=Qt(D)):(b=f,D=d,A=w=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=Ts(h,"x",o,"px"),y=Ts(h,"y",a,"px")),(_||g||m||p)&&(v=Qt(v+_-(_*b+g*w)+m),y=Qt(y+g-(_*A+g*D)+p)),(r||s)&&(U=h.getBBox(),v=Qt(v+r/100*U.width),y=Qt(y+s/100*U.height)),U="matrix("+b+","+A+","+w+","+D+","+v+","+y+")",h.setAttribute("transform",U),x&&(h.style[Kt]=U)},P2=function(e,t,i,r,s){var o=360,a=vn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?qs:1),c=l-r,u=r+c+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*s_)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*s_)%o-~~(c/o)*o)),e._pt=d=new ai(e._pt,t,i,r,c,d2),d.e=u,d.u="deg",e._props.push(i),d},d_=function(e,t){for(var i in t)e[i]=t[i];return e},L2=function(e,t,i){var r=d_({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,f,d,h,_;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[Kt]=t,a=Gl(i,1),ws(i,Kt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Kt],o[Kt]=t,a=Gl(i,1),o[Kt]=c);for(l in qr)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(h=Dn(c),_=Dn(u),f=h!==_?Ts(i,l,c,_):parseFloat(c),d=parseFloat(u),e._pt=new ai(e._pt,a,l,f,d-f,dh),e._pt.u=_||0,e._props.push(l));d_(a,r)};oi("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Uu[e>1?"border"+n:n]=function(a,l,c,u,f){var d,h;if(arguments.length<4)return d=o.map(function(_){return Dr(a,_,c)}),h=d.join(" "),h.split(d[0]).length===5?d[0]:h;d=(u+"").split(" "),h={},o.forEach(function(_,g){return h[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,h,f)}});var Ix={name:"css",register:ph,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,f,d,h,_,g,m,p,x,v,y,b,A,w,D,U;pp||ph(),this.styles=this.styles||Tx(e),D=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(u=t[g],!(gi[g]&&mx(g,t,i,r,e,s)))){if(h=typeof u,_=Uu[g],h==="function"&&(u=u.call(i,r,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=kl(u)),_)_(this,e,g,u,i)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Ss.lastIndex=0,Ss.test(c)||(m=Dn(c),p=Dn(u),p?m!==p&&(c=Ts(e,g,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,r,s,0,0,g),o.push(g),D.push(g,0,a[g]);else if(h!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],vn(c)&&~c.indexOf("random(")&&(c=kl(c)),Dn(c+"")||c==="auto"||(c+=Ei.units[g]||Dn(Dr(e,g))||""),(c+"").charAt(1)==="="&&(c=Dr(e,g))):c=Dr(e,g),d=parseFloat(c),x=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),f=parseFloat(u),g in pr&&(g==="autoAlpha"&&(d===1&&Dr(e,"visibility")==="hidden"&&f&&(d=0),D.push("visibility",0,a.visibility),ds(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=pr[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in qr,v){if(this.styles.save(g),U=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=Mi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var S=e.style.perspective;e.style.perspective=u,u=Mi(e,"perspective"),S?e.style.perspective=S:ws(e,"perspective")}f=parseFloat(u)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||Gl(e,t.parseTransform),A=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new ai(this._pt,a,Kt,0,1,b.renderTransform,b,0,-1),y.dep=1),g==="scale")this._pt=new ai(this._pt,b,"scaleY",b.scaleY,(x?ca(b.scaleY,x+f):f)-b.scaleY||0,dh),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){D.push(li,0,a[li]),u=T2(u),b.svg?mh(e,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==b.zOrigin&&ds(this,b,"zOrigin",b.zOrigin,p),ds(this,a,g,Nu(c),Nu(u)));continue}else if(g==="svgOrigin"){mh(e,u,1,A,0,this);continue}else if(g in Px){P2(this,b,g,d,x?ca(d,x+u):u);continue}else if(g==="smoothOrigin"){ds(this,b,"smooth",b.smooth,u);continue}else if(g==="force3D"){b[g]=u;continue}else if(g==="transform"){L2(this,u,e);continue}}else g in a||(g=wa(g)||g);if(v||(f||f===0)&&(d||d===0)&&!f2.test(u)&&g in a)m=(c+"").substr((d+"").length),f||(f=0),p=Dn(u)||(g in Ei.units?Ei.units[g]:m),m!==p&&(d=Ts(e,g,c,p)),this._pt=new ai(this._pt,v?b:a,g,d,(x?ca(d,x+f):f)-d,!v&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?m2:dh),this._pt.u=p||0,v&&U!==u?(this._pt.b=c,this._pt.e=U,this._pt.r=p2):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=h2);else if(g in a)w2.call(this,e,g,c,x?x+u:u);else if(g in e)this.add(e,g,c||e[g],x?x+u:u,r,s);else if(g!=="parseTransform"){rp(g,u);continue}v||(g in a?D.push(g,0,a[g]):typeof e[g]=="function"?D.push(g,2,e[g]()):D.push(g,1,c||e[g])),o.push(g)}}w&&Sx(this)},render:function(e,t){if(t.tween._time||!mp())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Dr,aliases:pr,getSetter:function(e,t,i){var r=pr[t];return r&&r.indexOf(",")<0&&(t=r),t in qr&&t!==li&&(e._gsap.x||Dr(e,"x"))?i&&r_===i?t==="scale"?x2:v2:(r_=i||{})&&(t==="scale"?y2:S2):e.style&&!tp(e.style[t])?g2:~t.indexOf("-")?_2:dp(e,t)},core:{_removeProperty:ws,_getMatrix:_p}};ci.utils.checkPrefix=wa;ci.core.getStyleSaver=Tx;(function(n,e,t,i){var r=oi(n+","+e+","+t,function(s){qr[s]=1});oi(e,function(s){Ei.units[s]="deg",Px[s]=1}),pr[r[13]]=n+","+e,oi(i,function(s){var o=s.split(":");pr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");oi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ei.units[n]="px"});ci.registerPlugin(Ix);var gn=ci.registerPlugin(Ix)||ci;gn.core.Tween;class D2{constructor(e=.08){be(this,"current",{x:0,y:0});be(this,"target",{x:0,y:0});be(this,"velocity",{x:0,y:0});be(this,"ease");this.ease=e,typeof window<"u"&&(window.addEventListener("mousemove",this.onMouseMove.bind(this)),window.addEventListener("touchmove",this.onTouchMove.bind(this),{passive:!0}))}onMouseMove(e){this.target.x=e.clientX/window.innerWidth*2-1,this.target.y=-(e.clientY/window.innerHeight)*2+1}onTouchMove(e){if(e.touches.length>0){const t=e.touches[0];this.target.x=t.clientX/window.innerWidth*2-1,this.target.y=-(t.clientY/window.innerHeight)*2+1}}update(){const e=this.current.x,t=this.current.y;this.current.x+=(this.target.x-this.current.x)*this.ease,this.current.y+=(this.target.y-this.current.y)*this.ease,this.velocity.x=this.current.x-e,this.velocity.y=this.current.y-t}destroy(){typeof window<"u"&&(window.removeEventListener("mousemove",this.onMouseMove.bind(this)),window.removeEventListener("touchmove",this.onTouchMove.bind(this)))}}const h_=`varying vec3 vNormalVec;
varying vec3 vWorldPosition;
varying vec3 vEyeVector;

void main() {
  vNormalVec = normalize(normalMatrix * normal);
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPosition.xyz;
  vEyeVector = normalize(worldPosition.xyz - cameraPosition);
  gl_Position = projectionMatrix * viewMatrix * worldPosition;
}`,p_=`precision highp float;

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
}`;class I2{constructor(e){be(this,"group");be(this,"backMesh");be(this,"frontMesh");be(this,"edgeLinesMesh");be(this,"coreFlareSprite");be(this,"particlesMesh");be(this,"backMaterial");be(this,"frontMaterial");be(this,"edgeLinesMaterial");be(this,"config",{shape:"icosahedron",dispersion:1,roughness:.08,transmission:.82,colorTheme:0,wireframe:!0,rotationSpeed:.65});this.group=new Ka,this.initDualPassCrystal(),this.initEdgeLines(),this.initCoreFlare(),this.initParticles()}createGeometry(e){let t;switch(e){case"torusKnot":t=new Qh(1,.38,64,16,2,3).toNonIndexed();break;case"octahedron":t=new Jh(1.65,0).toNonIndexed();break;case"dodecahedron":t=new Kh(1.5,0).toNonIndexed();break;case"icosahedron":default:t=new Zh(1.6,0).toNonIndexed();break}return t.computeVertexNormals(),t}initDualPassCrystal(){const e=this.createGeometry(this.config.shape);this.backMaterial=new _r({vertexShader:h_,fragmentShader:p_,transparent:!0,depthWrite:!1,depthTest:!0,side:Zn,uniforms:{uTime:{value:0},uMouse:{value:new et(0,0)},uDispersion:{value:this.config.dispersion},uRoughness:{value:this.config.roughness},uTransmission:{value:.5},uColorTheme:{value:this.config.colorTheme},uIsBack:{value:1},uScrollProgress:{value:0}}}),this.backMesh=new Ni(e,this.backMaterial),this.group.add(this.backMesh),this.frontMaterial=new _r({vertexShader:h_,fragmentShader:p_,transparent:!0,depthWrite:!0,depthTest:!0,side:Xr,uniforms:{uTime:{value:0},uMouse:{value:new et(0,0)},uDispersion:{value:this.config.dispersion},uRoughness:{value:this.config.roughness},uTransmission:{value:this.config.transmission},uColorTheme:{value:this.config.colorTheme},uIsBack:{value:0},uScrollProgress:{value:0}}}),this.frontMesh=new Ni(e,this.frontMaterial),this.group.add(this.frontMesh)}initEdgeLines(){const e=new Vg(this.createGeometry(this.config.shape));this.edgeLinesMaterial=new Nv({color:61695,transparent:!0,opacity:.35,blending:fl}),this.edgeLinesMesh=new aC(e,this.edgeLinesMaterial),this.edgeLinesMesh.visible=this.config.wireframe,this.group.add(this.edgeLinesMesh)}setShape(e){this.config.shape=e,this.frontMesh.geometry.dispose(),this.edgeLinesMesh.geometry.dispose();const t=this.createGeometry(e);this.frontMesh.geometry=t,this.backMesh.geometry=t;const i=new Vg(this.createGeometry(e));this.edgeLinesMesh.geometry=i}initCoreFlare(){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d"),i=t.createRadialGradient(64,64,0,64,64,64);i.addColorStop(0,"rgba(255, 255, 255, 0.4)"),i.addColorStop(.3,"rgba(0, 240, 255, 0.25)"),i.addColorStop(.7,"rgba(255, 46, 147, 0.1)"),i.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=i,t.fillRect(0,0,128,128);const r=new th(e),s=new Iv({map:r,transparent:!0,blending:fl,opacity:.35});this.coreFlareSprite=new sC(s),this.coreFlareSprite.scale.set(2.4,2.4,1),this.group.add(this.coreFlareSprite)}initParticles(){const t=new Float32Array(540);for(let c=0;c<180;c++){const u=2.2+Math.random()*4.5,f=Math.random()*Math.PI*2,d=Math.acos(Math.random()*2-1);t[c*3]=u*Math.sin(d)*Math.cos(f),t[c*3+1]=u*Math.sin(d)*Math.sin(f),t[c*3+2]=u*Math.cos(d)}const i=new ui;i.setAttribute("position",new Bi(t,3));const r=document.createElement("canvas");r.width=32,r.height=32;const s=r.getContext("2d"),o=s.createRadialGradient(16,16,0,16,16,16);o.addColorStop(0,"rgba(255, 255, 255, 0.8)"),o.addColorStop(.35,"rgba(0, 240, 255, 0.5)"),o.addColorStop(1,"rgba(0, 0, 0, 0)"),s.fillStyle=o,s.fillRect(0,0,32,32);const a=new th(r),l=new Ov({size:.11,map:a,transparent:!0,blending:fl,depthWrite:!1,opacity:.5});this.particlesMesh=new lC(i,l),this.group.add(this.particlesMesh)}update(e,t,i){this.backMaterial.uniforms.uTime.value=e,this.backMaterial.uniforms.uMouse.value.set(t.x,t.y),this.backMaterial.uniforms.uScrollProgress.value=i,this.frontMaterial.uniforms.uTime.value=e,this.frontMaterial.uniforms.uMouse.value.set(t.x,t.y),this.frontMaterial.uniforms.uScrollProgress.value=i;const r=this.config.rotationSpeed,s=e*.08*r+t.y*.25,o=e*.12*r+t.x*.35,a=Math.sin(e*.05)*.08;this.frontMesh.rotation.set(s,o,a),this.backMesh.rotation.set(s,o,a),this.edgeLinesMesh.rotation.copy(this.frontMesh.rotation),this.particlesMesh&&(this.particlesMesh.rotation.y=-e*.015*r,this.particlesMesh.rotation.x=e*.008*r),this.group.position.y=-i*2.2}setConfig(e){Object.assign(this.config,e),e.shape!==void 0&&this.setShape(e.shape),e.dispersion!==void 0&&(this.frontMaterial.uniforms.uDispersion.value=this.config.dispersion,this.backMaterial.uniforms.uDispersion.value=this.config.dispersion),e.roughness!==void 0&&(this.frontMaterial.uniforms.uRoughness.value=this.config.roughness,this.backMaterial.uniforms.uRoughness.value=this.config.roughness),e.transmission!==void 0&&(this.frontMaterial.uniforms.uTransmission.value=this.config.transmission),e.colorTheme!==void 0&&(this.frontMaterial.uniforms.uColorTheme.value=this.config.colorTheme,this.backMaterial.uniforms.uColorTheme.value=this.config.colorTheme,this.config.colorTheme===0?this.edgeLinesMaterial.color.setHex(61695):this.config.colorTheme===1?this.edgeLinesMaterial.color.setHex(16723603):this.edgeLinesMaterial.color.setHex(16765286)),e.wireframe!==void 0&&(this.edgeLinesMesh.visible=this.config.wireframe)}}function U2(n){const e=new Jd(n);e.compileEquirectangularShader();const t=document.createElement("canvas");t.width=2048,t.height=1024;const i=t.getContext("2d"),r=i.createLinearGradient(0,0,0,1024);r.addColorStop(0,"#040508"),r.addColorStop(.5,"#080912"),r.addColorStop(1,"#040508"),i.fillStyle=r,i.fillRect(0,0,2048,1024);const s=i.createRadialGradient(1500,300,0,1500,300,450);s.addColorStop(0,"rgba(0, 240, 255, 1)"),s.addColorStop(.3,"rgba(0, 200, 255, 0.8)"),s.addColorStop(.7,"rgba(0, 120, 255, 0.3)"),s.addColorStop(1,"rgba(0, 0, 0, 0)"),i.fillStyle=s,i.fillRect(1e3,0,1e3,700);const o=i.createRadialGradient(400,700,0,400,700,500);o.addColorStop(0,"rgba(255, 46, 147, 1)"),o.addColorStop(.35,"rgba(200, 30, 180, 0.75)"),o.addColorStop(.7,"rgba(123, 44, 191, 0.3)"),o.addColorStop(1,"rgba(0, 0, 0, 0)"),i.fillStyle=o,i.fillRect(0,300,900,724);const a=i.createRadialGradient(1024,150,0,1024,150,350);a.addColorStop(0,"rgba(255, 255, 255, 1)"),a.addColorStop(.25,"rgba(255, 209, 102, 0.9)"),a.addColorStop(.6,"rgba(255, 140, 0, 0.3)"),a.addColorStop(1,"rgba(0, 0, 0, 0)"),i.fillStyle=a,i.fillRect(700,0,650,450),i.fillStyle="rgba(255, 255, 255, 0.95)",i.fillRect(950,80,150,20),i.fillRect(1400,250,120,15);const l=new th(t);l.mapping=bu,l.needsUpdate=!0;const c=e.fromEquirectangular(l);return e.dispose(),l.dispose(),c.texture}function N2(n){n.traverse(e=>{e instanceof Ni&&(e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>m_(t)):m_(e.material)))})}function m_(n){n.dispose(),Object.keys(n).forEach(e=>{const t=n[e];t&&typeof t=="object"&&"minFilter"in t&&t.dispose()})}class O2{constructor(e){be(this,"canvas");be(this,"renderer");be(this,"scene");be(this,"camera");be(this,"mouseTracker");be(this,"prismScene");be(this,"clock");be(this,"isRunning",!1);be(this,"scrollProgress",0);be(this,"tickerCallback");this.canvas=e,this.clock=new dC,this.mouseTracker=new D2(.06),this.scene=new iC,this.camera=new _i(45,window.innerWidth/window.innerHeight,.1,100),this.camera.position.set(0,0,7.2),this.renderer=new Dv({canvas:this.canvas,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=Yi,this.renderer.toneMapping=nv,this.renderer.toneMappingExposure=1.35,this.scene.environment=U2(this.renderer);const t=new fC(922144,2);this.scene.add(t);const i=new fd(61695,8,30);i.position.set(5,4,6),this.scene.add(i);const r=new fd(16723603,7,30);r.position.set(-5,-4,5),this.scene.add(r);const s=new fd(16765286,4,25);s.position.set(0,6,3),this.scene.add(s),this.prismScene=new I2(this.renderer),this.scene.add(this.prismScene.group),this.onResize=this.onResize.bind(this),this.render=this.render.bind(this),window.addEventListener("resize",this.onResize),this.tickerCallback=()=>this.render(),gn.ticker.add(this.tickerCallback),this.isRunning=!0}onResize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,e<768?this.camera.position.z=9.2:this.camera.position.z=7.2,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}setScrollProgress(e){this.scrollProgress=e}updateLabConfig(e){this.prismScene.setConfig(e)}render(){if(!this.isRunning)return;const e=this.clock.getElapsedTime();this.mouseTracker.update(),this.prismScene.update(e,this.mouseTracker.current,this.scrollProgress),this.renderer.render(this.scene,this.camera)}destroy(){this.isRunning=!1,window.removeEventListener("resize",this.onResize),gn.ticker.remove(this.tickerCallback),this.mouseTracker.destroy(),N2(this.scene),this.renderer.dispose()}}var g_="1.3.26";function Ux(n,e,t){return Math.max(n,Math.min(e,t))}function F2(n,e,t){return(1-t)*n+t*e}function k2(n,e,t,i){return F2(n,e,1-Math.exp(-t*i))}function B2(n,e){return(n%e+e)%e}var z2=class{constructor(){be(this,"isRunning",!1);be(this,"value",0);be(this,"from",0);be(this,"to",0);be(this,"currentTime",0);be(this,"lerp");be(this,"duration");be(this,"easing");be(this,"onUpdate")}advance(n){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=n;const i=Ux(0,this.currentTime/this.duration,1);e=i>=1;const r=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=k2(this.value,this.to,this.lerp*60,n),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(n,e,{lerp:t,duration:i,easing:r,onStart:s,onUpdate:o}){this.from=this.value=n,this.to=e,this.lerp=t,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function H2(n,e){let t;return function(...i){clearTimeout(t),t=setTimeout(()=>{t=void 0,n.apply(this,i)},e)}}var G2=class{constructor(n,e,{autoResize:t=!0,debounce:i=250}={}){be(this,"width",0);be(this,"height",0);be(this,"scrollHeight",0);be(this,"scrollWidth",0);be(this,"debouncedResize");be(this,"wrapperResizeObserver");be(this,"contentResizeObserver");be(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});be(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});be(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=n,this.content=e,t&&(this.debouncedResize=H2(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var n,e;(n=this.wrapperResizeObserver)==null||n.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Nx=class{constructor(){be(this,"events",{})}emit(n,...e){var i;const t=this.events[n]||[];for(let r=0,s=t.length;r<s;r++)(i=t[r])==null||i.call(t,...e)}on(n,e){return this.events[n]?this.events[n].push(e):this.events[n]=[e],()=>{var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}}off(n,e){var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}destroy(){this.events={}}};const V2=100/6,ss={passive:!1};function __(n,e){return n===1?V2:n===2?e:1}var W2=class{constructor(n,e={wheelMultiplier:1,touchMultiplier:1}){be(this,"touchStart",{x:0,y:0});be(this,"lastDelta",{x:0,y:0});be(this,"window",{width:0,height:0});be(this,"emitter",new Nx);be(this,"onTouchStart",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})});be(this,"onTouchMove",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n,i=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:n})});be(this,"onTouchEnd",n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})});be(this,"onWheel",n=>{let{deltaX:e,deltaY:t,deltaMode:i}=n;const r=__(i,this.window.width),s=__(i,this.window.height);e*=r,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:n})});be(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=n,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,ss),this.element.addEventListener("touchstart",this.onTouchStart,ss),this.element.addEventListener("touchmove",this.onTouchMove,ss),this.element.addEventListener("touchend",this.onTouchEnd,ss)}on(n,e){return this.emitter.on(n,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,ss),this.element.removeEventListener("touchstart",this.onTouchStart,ss),this.element.removeEventListener("touchmove",this.onTouchMove,ss),this.element.removeEventListener("touchend",this.onTouchEnd,ss)}};const v_=n=>Math.min(1,1.001-2**(-10*n));var X2=class{constructor({wrapper:n=window,content:e=document.documentElement,eventsTarget:t=n,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:d=f==="horizontal"?"both":"vertical",touchMultiplier:h=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:m,virtualScroll:p,overscroll:x=!0,autoRaf:v=!1,anchors:y=!1,autoToggle:b=!1,allowNestedScroll:A=!1,__experimental__naiveDimensions:w=!1,naiveDimensions:D=w,stopInertiaOnNavigate:U=!1,respectReducedMotion:S=!0}={}){be(this,"_isScrolling",!1);be(this,"_isStopped",!1);be(this,"_isLocked",!1);be(this,"_preventNextNativeScrollEvent",!1);be(this,"_resetVelocityTimeout",null);be(this,"_rafId",null);be(this,"_isDraggingSelection",!1);be(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));be(this,"isTouching");be(this,"isIos");be(this,"time",0);be(this,"userData",{});be(this,"lastVelocity",0);be(this,"velocity",0);be(this,"direction",0);be(this,"options");be(this,"targetScroll");be(this,"animatedScroll");be(this,"animate",new z2);be(this,"emitter",new Nx);be(this,"dimensions");be(this,"virtualScroll");be(this,"onScrollEnd",n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()});be(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});be(this,"onTransitionEnd",n=>{var e;(e=n.propertyName)!=null&&e.includes("overflow")&&n.target===this.rootElement&&this.checkOverflow()});be(this,"onClick",n=>{const e=n.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),t=new URL(window.location.href);if(this.options.anchors){const i=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(i){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(i.hash);this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>t.host===i.host&&t.pathname!==i.pathname)){this.reset();return}});be(this,"onPointerDown",n=>{n.button===1&&this.reset()});be(this,"onVirtualScroll",n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;const{deltaX:e,deltaY:t,event:i}=n;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const r=i.type.includes("touch"),s=i.type.includes("wheel");if(r&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&r&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(_=>{var g,m,p,x,v;return _ instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(_))||((g=_.hasAttribute)==null?void 0:g.call(_,"data-lenis-prevent"))||u==="vertical"&&((m=_.hasAttribute)==null?void 0:m.call(_,"data-lenis-prevent-vertical"))||u==="horizontal"&&((p=_.hasAttribute)==null?void 0:p.call(_,"data-lenis-prevent-horizontal"))||r&&((x=_.hasAttribute)==null?void 0:x.call(_,"data-lenis-prevent-touch"))||s&&((v=_.hasAttribute)==null?void 0:v.call(_,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(_,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const d=r&&this.options.syncTouch,h=r&&i.type==="touchend";h&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...d?{lerp:h?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});be(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});be(this,"raf",n=>{const e=n-(this.time||n);this.time=n,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=g_,window.lenis||(window.lenis={}),window.lenis.version=g_,f==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!n||n===document.documentElement)&&(n=window),typeof a=="number"&&typeof l!="function"?l=v_:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:n,content:e,eventsTarget:t,smoothWheel:i,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:d,orientation:f,touchMultiplier:h,wheelMultiplier:_,autoResize:g,prevent:m,virtualScroll:p,overscroll:x,autoRaf:v,anchors:y,autoToggle:b,allowNestedScroll:A,naiveDimensions:D,stopInertiaOnNavigate:U,respectReducedMotion:S},this.dimensions=new G2(n,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new W2(t,{touchMultiplier:h,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(n,e){return this.emitter.on(n,e)}off(n,e){return this.emitter.off(n,e)}get overflow(){const n=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[n]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}isTouchOnSelectionHandle(n){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=n.targetTouches[0]??n.changedTouches[0];if(!t)return!1;const i=e.getRangeAt(0).getClientRects();if(i.length===0)return!1;const r=i[0],s=i[i.length-1],o=40,a=Math.hypot(t.clientX-r.left,t.clientY-r.top)<=o,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(n,{offset:e=0,immediate:t=!1,lock:i=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:f}={}){if(this.prefersReducedMotion&&(r?t=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let d=n,h=e;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let _=null;if(typeof d=="string"?(_=d.startsWith("#")?document.getElementById(d.slice(1)):document.querySelector(d),_||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof HTMLElement&&(d!=null&&d.nodeType)&&(_=d),_){if(this.options.wrapper!==window){const y=this.rootElement.getBoundingClientRect();h-=this.isHorizontal?y.left:y.top}const g=_.getBoundingClientRect(),m=getComputedStyle(_),p=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),x=getComputedStyle(this.rootElement),v=this.isHorizontal?Number.parseFloat(x.scrollPaddingLeft):Number.parseFloat(x.scrollPaddingTop);d=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(v)?0:v)}}if(typeof d=="number"){if(d+=h,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const _=d-this.animatedScroll;_>this.limit/2?d-=this.limit:_<-this.limit/2&&(d+=this.limit)}}else d=Ux(0,d,this.limit);if(d===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=f??{},t){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=d),typeof o=="number"&&typeof a!="function"?a=v_:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,d,{duration:o,easing:a,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(_,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=_-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=_,this.setScroll(this.scroll),r&&(this.targetScroll=_),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(n,{deltaX:e,deltaY:t}){const i=Date.now();n._lenis||(n._lenis={});const r=n._lenis;let s,o,a,l,c,u,f,d,h,_;if(i-(r.time??0)>2e3){r.time=Date.now();const A=window.getComputedStyle(n);if(r.computedStyle=A,s=["auto","overlay","scroll"].includes(A.overflowX),o=["auto","overlay","scroll"].includes(A.overflowY),c=["auto"].includes(A.overscrollBehaviorX),u=["auto"].includes(A.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=o,!(s||o))return!1;f=n.scrollWidth,d=n.scrollHeight,h=n.clientWidth,_=n.clientHeight,a=f>h,l=d>_,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=f,r.scrollHeight=d,r.clientWidth=h,r.clientHeight=_,r.hasOverscrollBehaviorX=c,r.hasOverscrollBehaviorY=u}else a=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,f=r.scrollWidth,d=r.scrollHeight,h=r.clientWidth,_=r.clientHeight,c=r.hasOverscrollBehaviorX,u=r.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const g=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let m,p,x,v,y,b;if(g==="horizontal")m=Math.round(n.scrollLeft),p=f-h,x=e,v=s,y=a,b=c;else if(g==="vertical")m=Math.round(n.scrollTop),p=d-_,x=t,v=o,y=l,b=u;else return!1;return!b&&(m>=p||m<=0)?!0:(x>0?m<p:m>0)&&v&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const n=this.options.wrapper;return this.isHorizontal?n.scrollX??n.scrollLeft:n.scrollY??n.scrollTop}get scroll(){return this.options.infinite?B2(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let n="lenis";return this.options.autoToggle&&(n+=" lenis-autoToggle"),this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(n=>{this.rootElement.classList.add(n)})}cleanUpClassName(){for(const n of Array.from(this.rootElement.classList))(n==="lenis"||n.startsWith("lenis-"))&&this.rootElement.classList.remove(n)}};function $2(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function Y2(n,e,t){return e&&$2(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Sn,iu,yi,hs,ps,da,Ox,js,ha,Fx,Br,$i,kx,Bx=function(){return Sn||typeof window<"u"&&(Sn=window.gsap)&&Sn.registerPlugin&&Sn},zx=1,na=[],dt=[],gr=[],ml=Date.now,gh=function(e,t){return t},q2=function(){var e=ha.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,dt),r.push.apply(r,gr),dt=i,gr=r,gh=function(o,a){return t[o](a)}},bs=function(e,t){return~gr.indexOf(e)&&gr[gr.indexOf(e)+1][t]},gl=function(e){return!!~Fx.indexOf(e)},Gn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},zn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Uc="scrollLeft",Nc="scrollTop",_h=function(){return Br&&Br.isPressed||dt.cache++},Ou=function(e,t){var i=function r(s){if(s||s===0){zx&&(yi.history.scrollRestoration="manual");var o=Br&&Br.isPressed;s=r.v=Math.round(s)||(Br&&Br.iOS?1:0),e(s),r.cacheID=dt.cache,o&&gh("ss",s)}else(t||dt.cache!==r.cacheID||gh("ref"))&&(r.cacheID=dt.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},jn={s:Uc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ou(function(n){return arguments.length?yi.scrollTo(n,cn.sc()):yi.pageXOffset||hs[Uc]||ps[Uc]||da[Uc]||0})},cn={s:Nc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:jn,sc:Ou(function(n){return arguments.length?yi.scrollTo(jn.sc(),n):yi.pageYOffset||hs[Nc]||ps[Nc]||da[Nc]||0})},ei=function(e,t){return(t&&t._ctx&&t._ctx.selector||Sn.utils.toArray)(e)[0]||(typeof e=="string"&&Sn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},j2=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},As=function(e,t){var i=t.s,r=t.sc;gl(e)&&(e=hs.scrollingElement||ps);var s=dt.indexOf(e),o=r===cn.sc?1:2;!~s&&(s=dt.push(e)-1),dt[s+o]||Gn(e,"scroll",_h);var a=dt[s+o],l=a||(dt[s+o]=Ou(bs(e,i),!0)||(gl(e)?r:Ou(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,a||(l.smooth=Sn.getProperty(e,"scrollBehavior")==="smooth"),l},vh=function(e,t,i){var r=e,s=e,o=ml(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,g){var m=ml();g||m-o>l?(s=r,r=_,a=o,o=m):i?r+=_:r=s+(_-s)/(m-a)*(o-a)},f=function(){s=r=i?0:r,a=o=0},d=function(_){var g=a,m=s,p=ml();return(_||_===0)&&_!==r&&u(_),o===a||p-a>c?0:(r+(i?m:-m))/((i?p:o)-g)*1e3};return{update:u,reset:f,getVelocity:d}},Xa=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},x_=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},Hx=function(){ha=Sn.core.globals().ScrollTrigger,ha&&ha.core&&q2()},Gx=function(e){return Sn=e||Bx(),!iu&&Sn&&typeof document<"u"&&document.body&&(yi=window,hs=document,ps=hs.documentElement,da=hs.body,Fx=[yi,hs,ps,da],Sn.utils.clamp,kx=Sn.core.context||function(){},js="onpointerenter"in da?"pointer":"mouse",Ox=en.isTouch=yi.matchMedia&&yi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in yi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,$i=en.eventTypes=("ontouchstart"in ps?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ps?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return zx=0},500),iu=1),ha||Hx(),iu};jn.op=cn;dt.cache=0;var en=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){iu||Gx(Sn)||console.warn("Please gsap.registerPlugin(Observer)"),ha||Hx();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,f=i.onStop,d=i.onStopDelay,h=i.ignore,_=i.wheelSpeed,g=i.event,m=i.onDragStart,p=i.onDragEnd,x=i.onDrag,v=i.onPress,y=i.onRelease,b=i.onRight,A=i.onLeft,w=i.onUp,D=i.onDown,U=i.onChangeX,S=i.onChangeY,P=i.onChange,F=i.onToggleX,te=i.onToggleY,N=i.onHover,Z=i.onHoverEnd,W=i.onMove,X=i.ignoreCheck,G=i.isNormalizer,re=i.onGestureStart,I=i.onGestureEnd,ue=i.onWheel,_e=i.onEnable,Xe=i.onDisable,J=i.onClick,de=i.scrollSpeed,ve=i.capture,De=i.allowClicks,Pe=i.lockAxis,Ee=i.onLockAxis;this.target=a=ei(a)||ps,this.vars=i,h&&(h=Sn.utils.toArray(h)),r=r||1e-9,s=s||0,_=_||1,de=de||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(yi.getComputedStyle(da).lineHeight)||22);var rt,Be,M,O,B,ie,q,L=this,oe=0,ae=0,ce=i.passive||!u&&i.passive!==!1,T=As(a,jn),E=As(a,cn),k=T(),$=E(),K=~o.indexOf("touch")&&!~o.indexOf("pointer")&&$i[0]==="pointerdown",se=gl(a),pe=a.ownerDocument||hs,xe=[0,0,0],fe=[0,0,0],he=0,Ve=function(){return he=ml()},le=function(Fe,Ge){return(L.event=Fe)&&h&&j2(Fe.target,h)||Ge&&K&&Fe.pointerType!=="touch"||X&&X(Fe,Ge)},xt=function(){L._vx.reset(),L._vy.reset(),Be.pause(),f&&f(L)},Ke=function(){var Fe=L.deltaX=x_(xe),Ge=L.deltaY=x_(fe),ge=Math.abs(Fe)>=r,Ye=Math.abs(Ge)>=r;P&&(ge||Ye)&&P(L,Fe,Ge,xe,fe),ge&&(b&&L.deltaX>0&&b(L),A&&L.deltaX<0&&A(L),U&&U(L),F&&L.deltaX<0!=oe<0&&F(L),oe=L.deltaX,xe[0]=xe[1]=xe[2]=0),Ye&&(D&&L.deltaY>0&&D(L),w&&L.deltaY<0&&w(L),S&&S(L),te&&L.deltaY<0!=ae<0&&te(L),ae=L.deltaY,fe[0]=fe[1]=fe[2]=0),(O||M)&&(W&&W(L),M&&(m&&M===1&&m(L),x&&x(L),M=0),O=!1),ie&&!(ie=!1)&&Ee&&Ee(L),B&&(ue(L),B=!1),rt=0},Le=function(Fe,Ge,ge){xe[ge]+=Fe,fe[ge]+=Ge,L._vx.update(Fe),L._vy.update(Ge),c?rt||(rt=requestAnimationFrame(Ke)):Ke()},Ce=function(Fe,Ge){Pe&&!q&&(L.axis=q=Math.abs(Fe)>Math.abs(Ge)?"x":"y",ie=!0),q!=="y"&&(xe[2]+=Fe,L._vx.update(Fe,!0)),q!=="x"&&(fe[2]+=Ge,L._vy.update(Ge,!0)),c?rt||(rt=requestAnimationFrame(Ke)):Ke()},Ue=function(Fe){if(!le(Fe,1)){Fe=Xa(Fe,u);var Ge=Fe.clientX,ge=Fe.clientY,Ye=Ge-L.x,$e=ge-L.y,nt=L.isDragging;L.x=Ge,L.y=ge,(nt||(Ye||$e)&&(Math.abs(L.startX-Ge)>=s||Math.abs(L.startY-ge)>=s))&&(M||(M=nt?2:1),nt||(L.isDragging=!0),Ce(Ye,$e))}},tt=L.onPress=function(ze){le(ze,1)||ze&&ze.button||(L.axis=q=null,Be.pause(),L.isPressed=!0,ze=Xa(ze),oe=ae=0,L.startX=L.x=ze.clientX,L.startY=L.y=ze.clientY,L._vx.reset(),L._vy.reset(),Gn(G?a:pe,$i[1],Ue,ce,!0),L.deltaX=L.deltaY=0,v&&v(L))},we=L.onRelease=function(ze){if(!le(ze,1)){zn(G?a:pe,$i[1],Ue,!0);var Fe=!isNaN(L.y-L.startY),Ge=L.isDragging,ge=Ge&&(Math.abs(L.x-L.startX)>3||Math.abs(L.y-L.startY)>3),Ye=Xa(ze);!ge&&Fe&&(L._vx.reset(),L._vy.reset(),u&&De&&Sn.delayedCall(.08,function(){if(ml()-he>300&&!ze.defaultPrevented){if(ze.target.click)ze.target.click();else if(pe.createEvent){var $e=pe.createEvent("MouseEvents");$e.initMouseEvent("click",!0,!0,yi,1,Ye.screenX,Ye.screenY,Ye.clientX,Ye.clientY,!1,!1,!1,!1,0,null),ze.target.dispatchEvent($e)}}})),L.isDragging=L.isGesturing=L.isPressed=!1,f&&Ge&&!G&&Be.restart(!0),M&&Ke(),p&&Ge&&p(L),y&&y(L,ge)}},gt=function(Fe){return Fe.touches&&Fe.touches.length>1&&(L.isGesturing=!0)&&re(Fe,L.isDragging)},z=function(){return(L.isGesturing=!1)||I(L)},ye=function(Fe){if(!le(Fe)){var Ge=T(),ge=E();Le((Ge-k)*de,(ge-$)*de,1),k=Ge,$=ge,f&&Be.restart(!0)}},ee=function(Fe){if(!le(Fe)){Fe=Xa(Fe,u),ue&&(B=!0);var Ge=(Fe.deltaMode===1?l:Fe.deltaMode===2?yi.innerHeight:1)*_;Le(Fe.deltaX*Ge,Fe.deltaY*Ge,0),f&&!G&&Be.restart(!0)}},me=function(Fe){if(!le(Fe)){var Ge=Fe.clientX,ge=Fe.clientY,Ye=Ge-L.x,$e=ge-L.y;L.x=Ge,L.y=ge,O=!0,f&&Be.restart(!0),(Ye||$e)&&Ce(Ye,$e)}},Ae=function(Fe){L.event=Fe,N(L)},Qe=function(Fe){L.event=Fe,Z(L)},_t=function(Fe){return le(Fe)||Xa(Fe,u)&&J(L)};Be=L._dc=Sn.delayedCall(d||.25,xt).pause(),L.deltaX=L.deltaY=0,L._vx=vh(0,50,!0),L._vy=vh(0,50,!0),L.scrollX=T,L.scrollY=E,L.isDragging=L.isGesturing=L.isPressed=!1,kx(this),L.enable=function(ze){return L.isEnabled||(Gn(se?pe:a,"scroll",_h),o.indexOf("scroll")>=0&&Gn(se?pe:a,"scroll",ye,ce,ve),o.indexOf("wheel")>=0&&Gn(a,"wheel",ee,ce,ve),(o.indexOf("touch")>=0&&Ox||o.indexOf("pointer")>=0)&&(Gn(a,$i[0],tt,ce,ve),Gn(pe,$i[2],we),Gn(pe,$i[3],we),De&&Gn(a,"click",Ve,!0,!0),J&&Gn(a,"click",_t),re&&Gn(pe,"gesturestart",gt),I&&Gn(pe,"gestureend",z),N&&Gn(a,js+"enter",Ae),Z&&Gn(a,js+"leave",Qe),W&&Gn(a,js+"move",me)),L.isEnabled=!0,L.isDragging=L.isGesturing=L.isPressed=O=M=!1,L._vx.reset(),L._vy.reset(),k=T(),$=E(),ze&&ze.type&&tt(ze),_e&&_e(L)),L},L.disable=function(){L.isEnabled&&(na.filter(function(ze){return ze!==L&&gl(ze.target)}).length||zn(se?pe:a,"scroll",_h),L.isPressed&&(L._vx.reset(),L._vy.reset(),zn(G?a:pe,$i[1],Ue,!0)),zn(se?pe:a,"scroll",ye,ve),zn(a,"wheel",ee,ve),zn(a,$i[0],tt,ve),zn(pe,$i[2],we),zn(pe,$i[3],we),zn(a,"click",Ve,!0),zn(a,"click",_t),zn(pe,"gesturestart",gt),zn(pe,"gestureend",z),zn(a,js+"enter",Ae),zn(a,js+"leave",Qe),zn(a,js+"move",me),L.isEnabled=L.isPressed=L.isDragging=!1,Xe&&Xe(L))},L.kill=L.revert=function(){L.disable();var ze=na.indexOf(L);ze>=0&&na.splice(ze,1),Br===L&&(Br=0)},na.push(L),G&&gl(a)&&(Br=L),L.enable(g)},Y2(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();en.version="3.15.0";en.create=function(n){return new en(n)};en.register=Gx;en.getAll=function(){return na.slice()};en.getById=function(n){return na.filter(function(e){return e.vars.id===n})[0]};Bx()&&Sn.registerPlugin(en);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ne,Ko,ft,Tt,vi,St,vp,Fu,Vl,_l,Qa,Oc,An,lf,xh,Xn,y_,S_,Zo,Vx,yd,Wx,Wn,yh,Xx,$x,os,Sh,xp,pa,yp,vl,bh,Sd,Fc=1,Cn=Date.now,bd=Cn(),zi=0,el=0,b_=function(e,t,i){var r=mi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},M_=function(e,t){return t&&(!mi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},K2=function n(){return el&&requestAnimationFrame(n)},E_=function(){return lf=1},w_=function(){return lf=0},ar=function(e){return e},tl=function(e){return Math.round(e*1e5)/1e5||0},Yx=function(){return typeof window<"u"},qx=function(){return Ne||Yx()&&(Ne=window.gsap)&&Ne.registerPlugin&&Ne},go=function(e){return!!~vp.indexOf(e)},jx=function(e){return(e==="Height"?yp:ft["inner"+e])||vi["client"+e]||St["client"+e]},Kx=function(e){return bs(e,"getBoundingClientRect")||(go(e)?function(){return lu.width=ft.innerWidth,lu.height=yp,lu}:function(){return Fr(e)})},Z2=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=bs(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?jx(s):e["client"+s])||0}},J2=function(e,t){return!t||~gr.indexOf(e)?Kx(e):function(){return lu}},mr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=bs(e,i))?o()-Kx(e)()[s]:go(e)?(vi[i]||St[i])-jx(r):e[i]-e["offset"+r])},kc=function(e,t){for(var i=0;i<Zo.length;i+=3)(!t||~t.indexOf(Zo[i+1]))&&e(Zo[i],Zo[i+1],Zo[i+2])},mi=function(e){return typeof e=="string"},In=function(e){return typeof e=="function"},nl=function(e){return typeof e=="number"},Ks=function(e){return typeof e=="object"},$a=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Wo=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},Xo=Math.abs,Zx="left",Jx="top",Sp="right",bp="bottom",fo="width",ho="height",xl="Right",yl="Left",Sl="Top",bl="Bottom",nn="padding",Ii="margin",Ta="Width",Mp="Height",ln="px",Ui=function(e){return ft.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},Q2=function(e){var t=Ui(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},T_=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Fr=function(e,t){var i=t&&Ui(e)[xh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ne.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},ku=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},Qx=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},eR=function(e){return function(t){return Ne.utils.snap(Qx(e),t)}},Ep=function(e){var t=Ne.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},tR=function(e){return function(t,i){return Ep(Qx(e))(t,i.direction)}},Bc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},mn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},pn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},zc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},A_={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Hc={toggleActions:"play",anticipatePin:0},Bu={top:0,left:0,center:.5,bottom:1,right:1},ru=function(e,t){if(mi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in Bu?Bu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Gc=function(e,t,i,r,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,d=s.indent,h=s.fontWeight,_=Tt.createElement("div"),g=go(i)||bs(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=g?St:i.tagName==="IFRAME"?i.contentDocument.body:i,x=e.indexOf("start")!==-1,v=x?c:u,y="border-color:"+v+";font-size:"+f+";color:"+v+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(y+=(r===cn?Sp:bp)+":"+(o+parseFloat(d))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=x,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=y,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+r.op.d2],su(_,0,r,x),_},su=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+Ta]=1,s["border"+a+Ta]=0,s[i.p]=t+"px",Ne.set(e,s)},ct=[],Mh={},Wl,C_=function(){return Cn()-zi>34&&(Wl||(Wl=requestAnimationFrame(Hr)))},$o=function(){(!Wn||!Wn.isPressed||Wn.startX>St.clientWidth)&&(dt.cache++,Wn?Wl||(Wl=requestAnimationFrame(Hr)):Hr(),zi||vo("scrollStart"),zi=Cn())},Md=function(){$x=ft.innerWidth,Xx=ft.innerHeight},il=function(e){dt.cache++,(e===!0||!An&&!Wx&&!Tt.fullscreenElement&&!Tt.webkitFullscreenElement&&(!yh||$x!==ft.innerWidth||Math.abs(ft.innerHeight-Xx)>ft.innerHeight*.25))&&Fu.restart(!0)},_o={},nR=[],ey=function n(){return pn(ot,"scrollEnd",n)||no(!0)},vo=function(e){return _o[e]&&_o[e].map(function(t){return t()})||nR},pi=[],ty=function(e){for(var t=0;t<pi.length;t+=5)(!e||pi[t+4]&&pi[t+4].query===e)&&(pi[t].style.cssText=pi[t+1],pi[t].getBBox&&pi[t].setAttribute("transform",pi[t+2]||""),pi[t+3].uncache=1)},ny=function(){return dt.forEach(function(e){return In(e)&&++e.cacheID&&(e.rec=e())})},wp=function(e,t){var i;for(Xn=0;Xn<ct.length;Xn++)i=ct[Xn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));vl=!0,t&&ty(t),t||vo("revert")},iy=function(e,t){dt.cache++,(t||!$n)&&dt.forEach(function(i){return In(i)&&i.cacheID++&&(i.rec=0)}),mi(e)&&(ft.history.scrollRestoration=xp=e)},$n,po=0,R_,iR=function(){if(R_!==po){var e=R_=po;requestAnimationFrame(function(){return e===po&&no(!0)})}},ry=function(){St.appendChild(pa),yp=!Wn&&pa.offsetHeight||ft.innerHeight,St.removeChild(pa)},P_=function(e){return Vl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},no=function(e,t){if(vi=Tt.documentElement,St=Tt.body,vp=[ft,Tt,vi,St],zi&&!e&&!vl){mn(ot,"scrollEnd",ey);return}ry(),$n=ot.isRefreshing=!0,vl||ny();var i=vo("refreshInit");Vx&&ot.sort(),t||wp(),dt.forEach(function(r){In(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),ct.slice(0).forEach(function(r){return r.refresh()}),vl=!1,ct.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),bh=1,P_(!0),ct.forEach(function(r){var s=mr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),P_(!1),bh=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),dt.forEach(function(r){In(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),iy(xp,1),Fu.pause(),po++,$n=2,Hr(2),ct.forEach(function(r){return In(r.vars.onRefresh)&&r.vars.onRefresh(r)}),$n=ot.isRefreshing=!1,vo("refresh")},Eh=0,ou=1,Ml,Hr=function(e){if(e===2||!$n&&!vl){ot.isUpdating=!0,Ml&&Ml.update(0);var t=ct.length,i=Cn(),r=i-bd>=50,s=t&&ct[0].scroll();if(ou=Eh>s?-1:1,$n||(Eh=s),r&&(zi&&!lf&&i-zi>200&&(zi=0,vo("scrollEnd")),Qa=bd,bd=i),ou<0){for(Xn=t;Xn-- >0;)ct[Xn]&&ct[Xn].update(0,r);ou=1}else for(Xn=0;Xn<t;Xn++)ct[Xn]&&ct[Xn].update(0,r);ot.isUpdating=!1}Wl=0},wh=[Zx,Jx,bp,Sp,Ii+bl,Ii+xl,Ii+Sl,Ii+yl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],au=wh.concat([fo,ho,"boxSizing","max"+Ta,"max"+Mp,"position",Ii,nn,nn+Sl,nn+xl,nn+bl,nn+yl]),rR=function(e,t,i){ma(i);var r=e._gsap;if(r.spacerIsNative)ma(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Ed=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=wh.length,o=t.style,a=e.style,l;s--;)l=wh[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[bp]=a[Sp]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[fo]=ku(e,jn)+ln,o[ho]=ku(e,cn)+ln,o[nn]=a[Ii]=a[Jx]=a[Zx]="0",ma(r),a[fo]=a["max"+Ta]=i[fo],a[ho]=a["max"+Mp]=i[ho],a[nn]=i[nn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},sR=/([A-Z])/g,ma=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Ne.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(sR,"-$1").toLowerCase())}},Vc=function(e){for(var t=au.length,i=e.style,r=[],s=0;s<t;s++)r.push(au[s],i[au[s]]);return r.t=e,r},oR=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},lu={left:0,top:0},L_=function(e,t,i,r,s,o,a,l,c,u,f,d,h,_){In(e)&&(e=e(l)),mi(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?ru("0"+e.substr(3),i):0));var g=h?h.time():0,m,p,x;if(h&&h.seek(0),isNaN(e)||(e=+e),nl(e))h&&(e=Ne.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,d,e)),a&&su(a,i,r,!0);else{In(t)&&(t=t(l));var v=(e||"0").split(" "),y,b,A,w;x=ei(t,l)||St,y=Fr(x)||{},(!y||!y.left&&!y.top)&&Ui(x).display==="none"&&(w=x.style.display,x.style.display="block",y=Fr(x),w?x.style.display=w:x.style.removeProperty("display")),b=ru(v[0],y[r.d]),A=ru(v[1]||"0",i),e=y[r.p]-c[r.p]-u+b+s-A,a&&su(a,A,r,i-A<20||a._isStart&&A>20),i-=i-A}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var D=e+i,U=o._isStart;m="scroll"+r.d2,su(o,D,r,U&&D>20||!U&&(f?Math.max(St[m],vi[m]):o.parentNode[m])<=D+1),f&&(c=Fr(a),f&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+ln))}return h&&x&&(m=Fr(x),h.seek(d),p=Fr(x),h._caScrollDist=m[r.p]-p[r.p],e=e/h._caScrollDist*d),h&&h.seek(g),h?e:Math.round(e)},aR=/(webkit|moz|length|cssText|inset)/i,D_=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===St){e._stOrig=s.cssText,a=Ui(e);for(o in a)!+o&&!aR.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Ne.core.getCache(e).uncache=1,t.appendChild(e)}},sy=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},Wc=function(e,t,i){var r={};r[t.p]="+="+i,Ne.set(e,r)},I_=function(e,t){var i=As(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,f){var d=o.tween,h=l.onComplete,_={};c=c||i();var g=sy(i,c,function(){d.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,d&&d.kill(),l[r]=a,l.inherit=!1,l.modifiers=_,_[r]=function(){return g(c+u*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){dt.cache++,o.tween&&Hr()},l.onComplete=function(){o.tween=0,h&&h.call(d)},d=o.tween=Ne.to(e,l),d};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},mn(e,"wheel",i.wheelHandler),ot.isTouch&&mn(e,"touchmove",i.wheelHandler),s},ot=function(){function n(t,i){Ko||n.register(Ne)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Sh(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!el){this.update=this.refresh=this.kill=ar;return}i=T_(mi(i)||nl(i)||i.nodeType?{trigger:i}:i,Hc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,d=s.trigger,h=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,x=s.onSnapComplete,v=s.once,y=s.snap,b=s.pinReparent,A=s.pinSpacer,w=s.containerAnimation,D=s.fastScrollEnd,U=s.preventOverlaps,S=i.horizontal||i.containerAnimation&&i.horizontal!==!1?jn:cn,P=!f&&f!==0,F=ei(i.scroller||ft),te=Ne.core.getCache(F),N=go(F),Z=("pinType"in i?i.pinType:bs(F,"pinType")||N&&"fixed")==="fixed",W=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],X=P&&i.toggleActions.split(" "),G="markers"in i?i.markers:Hc.markers,re=N?0:parseFloat(Ui(F)["border"+S.p2+Ta])||0,I=this,ue=i.onRefreshInit&&function(){return i.onRefreshInit(I)},_e=Z2(F,N,S),Xe=J2(F,N),J=0,de=0,ve=0,De=As(F,S),Pe,Ee,rt,Be,M,O,B,ie,q,L,oe,ae,ce,T,E,k,$,K,se,pe,xe,fe,he,Ve,le,xt,Ke,Le,Ce,Ue,tt,we,gt,z,ye,ee,me,Ae,Qe;if(I._startClamp=I._endClamp=!1,I._dir=S,m*=45,I.scroller=F,I.scroll=w?w.time.bind(w):De,Be=De(),I.vars=i,r=r||i.animation,"refreshPriority"in i&&(Vx=1,i.refreshPriority===-9999&&(Ml=I)),te.tweenScroll=te.tweenScroll||{top:I_(F,cn),left:I_(F,jn)},I.tweenTo=Pe=te.tweenScroll[S.p],I.scrubDuration=function(ge){gt=nl(ge)&&ge,gt?we?we.duration(ge):we=Ne.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:gt,paused:!0,onComplete:function(){return p&&p(I)}}):(we&&we.progress(1).kill(),we=0)},r&&(r.vars.lazy=!1,r._initted&&!I.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),I.animation=r.pause(),r.scrollTrigger=I,I.scrubDuration(f),Ue=0,l||(l=r.vars.id)),y&&((!Ks(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in St.style&&Ne.set(N?[St,vi]:F,{scrollBehavior:"auto"}),dt.forEach(function(ge){return In(ge)&&ge.target===(N?Tt.scrollingElement||vi:F)&&(ge.smooth=!1)}),rt=In(y.snapTo)?y.snapTo:y.snapTo==="labels"?eR(r):y.snapTo==="labelsDirectional"?tR(r):y.directional!==!1?function(ge,Ye){return Ep(y.snapTo)(ge,Cn()-de<500?0:Ye.direction)}:Ne.utils.snap(y.snapTo),z=y.duration||{min:.1,max:2},z=Ks(z)?_l(z.min,z.max):_l(z,z),ye=Ne.delayedCall(y.delay||gt/2||.1,function(){var ge=De(),Ye=Cn()-de<500,$e=Pe.tween;if((Ye||Math.abs(I.getVelocity())<10)&&!$e&&!lf&&J!==ge){var nt=(ge-O)/T,Yt=r&&!P?r.totalProgress():nt,ut=Ye?0:(Yt-tt)/(Cn()-Qa)*1e3||0,It=Ne.utils.clamp(-nt,1-nt,Xo(ut/2)*ut/.185),on=nt+(y.inertia===!1?0:It),Ft,Ut,Et=y,fi=Et.onStart,R=Et.onInterrupt,V=Et.onComplete;if(Ft=rt(on,I),nl(Ft)||(Ft=on),Ut=Math.max(0,Math.round(O+Ft*T)),ge<=B&&ge>=O&&Ut!==ge){if($e&&!$e._initted&&$e.data<=Xo(Ut-ge))return;y.inertia===!1&&(It=Ft-nt),Pe(Ut,{duration:z(Xo(Math.max(Xo(on-Yt),Xo(Ft-Yt))*.185/ut/.05||0)),ease:y.ease||"power3",data:Xo(Ut-ge),onInterrupt:function(){return ye.restart(!0)&&R&&Wo(I,R)},onComplete:function(){I.update(),J=De(),r&&!P&&(we?we.resetTo("totalProgress",Ft,r._tTime/r._tDur):r.progress(Ft)),Ue=tt=r&&!P?r.totalProgress():I.progress,x&&x(I),V&&Wo(I,V)}},ge,It*T,Ut-ge-It*T),fi&&Wo(I,fi,Pe.tween)}}else I.isActive&&J!==ge&&ye.restart(!0)}).pause()),l&&(Mh[l]=I),d=I.trigger=ei(d||h!==!0&&h),Qe=d&&d._gsap&&d._gsap.stRevert,Qe&&(Qe=Qe(I)),h=h===!0?d:ei(h),mi(a)&&(a={targets:d,className:a}),h&&(_===!1||_===Ii||(_=!_&&h.parentNode&&h.parentNode.style&&Ui(h.parentNode).display==="flex"?!1:nn),I.pin=h,Ee=Ne.core.getCache(h),Ee.spacer?E=Ee.pinState:(A&&(A=ei(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Ee.spacerIsNative=!!A,A&&(Ee.spacerState=Vc(A))),Ee.spacer=K=A||Tt.createElement("div"),K.classList.add("pin-spacer"),l&&K.classList.add("pin-spacer-"+l),Ee.pinState=E=Vc(h)),i.force3D!==!1&&Ne.set(h,{force3D:!0}),I.spacer=K=Ee.spacer,Ce=Ui(h),Ve=Ce[_+S.os2],pe=Ne.getProperty(h),xe=Ne.quickSetter(h,S.a,ln),Ed(h,K,Ce),$=Vc(h)),G){ae=Ks(G)?T_(G,A_):A_,L=Gc("scroller-start",l,F,S,ae,0),oe=Gc("scroller-end",l,F,S,ae,0,L),se=L["offset"+S.op.d2];var _t=ei(bs(F,"content")||F);ie=this.markerStart=Gc("start",l,_t,S,ae,se,0,w),q=this.markerEnd=Gc("end",l,_t,S,ae,se,0,w),w&&(Ae=Ne.quickSetter([ie,q],S.a,ln)),!Z&&!(gr.length&&bs(F,"fixedMarkers")===!0)&&(Q2(N?St:F),Ne.set([L,oe],{force3D:!0}),xt=Ne.quickSetter(L,S.a,ln),Le=Ne.quickSetter(oe,S.a,ln))}if(w){var ze=w.vars.onUpdate,Fe=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){I.update(0,0,1),ze&&ze.apply(w,Fe||[])})}if(I.previous=function(){return ct[ct.indexOf(I)-1]},I.next=function(){return ct[ct.indexOf(I)+1]},I.revert=function(ge,Ye){if(!Ye)return I.kill(!0);var $e=ge!==!1||!I.enabled,nt=An;$e!==I.isReverted&&($e&&(ee=Math.max(De(),I.scroll.rec||0),ve=I.progress,me=r&&r.progress()),ie&&[ie,q,L,oe].forEach(function(Yt){return Yt.style.display=$e?"none":"block"}),$e&&(An=I,I.update($e)),h&&(!b||!I.isActive)&&($e?rR(h,K,E):Ed(h,K,Ui(h),le)),$e||I.update($e),An=nt,I.isReverted=$e)},I.refresh=function(ge,Ye,$e,nt){if(!((An||!I.enabled)&&!Ye)){if(h&&ge&&zi){mn(n,"scrollEnd",ey);return}!$n&&ue&&ue(I),An=I,Pe.tween&&!$e&&(Pe.tween.kill(),Pe.tween=0),we&&we.pause(),g&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Ze){return Ze.vars.immediateRender&&Ze.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var Yt=_e(),ut=Xe(),It=w?w.duration():mr(F,S),on=T<=.01||!T,Ft=0,Ut=nt||0,Et=Ks($e)?$e.end:i.end,fi=i.endTrigger||d,R=Ks($e)?$e.start:i.start||(i.start===0||!d?0:h?"0 0":"0 100%"),V=I.pinnedContainer=i.pinnedContainer&&ei(i.pinnedContainer,I),ne=d&&Math.max(0,ct.indexOf(I))||0,Q=ne,Y,Se,Oe,qe,ke,He,je,it,zt,an,wt,kn,At;for(G&&Ks($e)&&(kn=Ne.getProperty(L,S.p),At=Ne.getProperty(oe,S.p));Q-- >0;)He=ct[Q],He.end||He.refresh(0,1)||(An=I),je=He.pin,je&&(je===d||je===h||je===V)&&!He.isReverted&&(an||(an=[]),an.unshift(He),He.revert(!0,!0)),He!==ct[Q]&&(ne--,Q--);for(In(R)&&(R=R(I)),R=b_(R,"start",I),O=L_(R,d,Yt,S,De(),ie,L,I,ut,re,Z,It,w,I._startClamp&&"_startClamp")||(h?-.001:0),In(Et)&&(Et=Et(I)),mi(Et)&&!Et.indexOf("+=")&&(~Et.indexOf(" ")?Et=(mi(R)?R.split(" ")[0]:"")+Et:(Ft=ru(Et.substr(2),Yt),Et=mi(R)?R:(w?Ne.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,O):O)+Ft,fi=d)),Et=b_(Et,"end",I),B=Math.max(O,L_(Et||(fi?"100% 0":It),fi,Yt,S,De()+Ft,q,oe,I,ut,re,Z,It,w,I._endClamp&&"_endClamp"))||-.001,Ft=0,Q=ne;Q--;)He=ct[Q]||{},je=He.pin,je&&He.start-He._pinPush<=O&&!w&&He.end>0&&(Y=He.end-(I._startClamp?Math.max(0,He.start):He.start),(je===d&&He.start-He._pinPush<O||je===V)&&isNaN(R)&&(Ft+=Y*(1-He.progress)),je===h&&(Ut+=Y));if(O+=Ft,B+=Ft,I._startClamp&&(I._startClamp+=Ft),I._endClamp&&!$n&&(I._endClamp=B||-.001,B=Math.min(B,mr(F,S))),T=B-O||(O-=.01)&&.001,on&&(ve=Ne.utils.clamp(0,1,Ne.utils.normalize(O,B,ee))),I._pinPush=Ut,ie&&Ft&&(Y={},Y[S.a]="+="+Ft,V&&(Y[S.p]="-="+De()),Ne.set([ie,q],Y)),h&&!(bh&&I.end>=mr(F,S)))Y=Ui(h),qe=S===cn,Oe=De(),fe=parseFloat(pe(S.a))+Ut,!It&&B>1&&(wt=(N?Tt.scrollingElement||vi:F).style,wt={style:wt,value:wt["overflow"+S.a.toUpperCase()]},N&&Ui(St)["overflow"+S.a.toUpperCase()]!=="scroll"&&(wt.style["overflow"+S.a.toUpperCase()]="scroll")),Ed(h,K,Y),$=Vc(h),Se=Fr(h,!0),it=Z&&As(F,qe?jn:cn)(),_?(le=[_+S.os2,T+Ut+ln],le.t=K,Q=_===nn?ku(h,S)+T+Ut:0,Q&&(le.push(S.d,Q+ln),K.style.flexBasis!=="auto"&&(K.style.flexBasis=Q+ln)),ma(le),V&&ct.forEach(function(Ze){Ze.pin===V&&Ze.vars.pinSpacing!==!1&&(Ze._subPinOffset=!0)}),Z&&De(ee)):(Q=ku(h,S),Q&&K.style.flexBasis!=="auto"&&(K.style.flexBasis=Q+ln)),Z&&(ke={top:Se.top+(qe?Oe-O:it)+ln,left:Se.left+(qe?it:Oe-O)+ln,boxSizing:"border-box",position:"fixed"},ke[fo]=ke["max"+Ta]=Math.ceil(Se.width)+ln,ke[ho]=ke["max"+Mp]=Math.ceil(Se.height)+ln,ke[Ii]=ke[Ii+Sl]=ke[Ii+xl]=ke[Ii+bl]=ke[Ii+yl]="0",ke[nn]=Y[nn],ke[nn+Sl]=Y[nn+Sl],ke[nn+xl]=Y[nn+xl],ke[nn+bl]=Y[nn+bl],ke[nn+yl]=Y[nn+yl],k=oR(E,ke,b),$n&&De(0)),r?(zt=r._initted,yd(1),r.render(r.duration(),!0,!0),he=pe(S.a)-fe+T+Ut,Ke=Math.abs(T-he)>1,Z&&Ke&&k.splice(k.length-2,2),r.render(0,!0,!0),zt||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),yd(0)):he=T,wt&&(wt.value?wt.style["overflow"+S.a.toUpperCase()]=wt.value:wt.style.removeProperty("overflow-"+S.a));else if(d&&De()&&!w)for(Se=d.parentNode;Se&&Se!==St;)Se._pinOffset&&(O-=Se._pinOffset,B-=Se._pinOffset),Se=Se.parentNode;an&&an.forEach(function(Ze){return Ze.revert(!1,!0)}),I.start=O,I.end=B,Be=M=$n?ee:De(),!w&&!$n&&(Be<ee&&De(ee),I.scroll.rec=0),I.revert(!1,!0),de=Cn(),ye&&(J=-1,ye.restart(!0)),An=0,r&&P&&(r._initted||me)&&r.progress()!==me&&r.progress(me||0,!0).render(r.time(),!0,!0),(on||ve!==I.progress||w||g||r&&!r._initted)&&(r&&!P&&(r._initted||ve||r.vars.immediateRender!==!1)&&r.totalProgress(w&&O<-.001&&!ve?Ne.utils.normalize(O,B,0):ve,!0),I.progress=on||(Be-O)/T===ve?0:ve),h&&_&&(K._pinOffset=Math.round(I.progress*he)),we&&we.invalidate(),isNaN(kn)||(kn-=Ne.getProperty(L,S.p),At-=Ne.getProperty(oe,S.p),Wc(L,S,kn),Wc(ie,S,kn-(nt||0)),Wc(oe,S,At),Wc(q,S,At-(nt||0))),on&&!$n&&I.update(),u&&!$n&&!ce&&(ce=!0,u(I),ce=!1)}},I.getVelocity=function(){return(De()-M)/(Cn()-Qa)*1e3||0},I.endAnimation=function(){$a(I.callbackAnimation),r&&(we?we.progress(1):r.paused()?P||$a(r,I.direction<0,1):$a(r,r.reversed()))},I.labelToScroll=function(ge){return r&&r.labels&&(O||I.refresh()||O)+r.labels[ge]/r.duration()*T||0},I.getTrailing=function(ge){var Ye=ct.indexOf(I),$e=I.direction>0?ct.slice(0,Ye).reverse():ct.slice(Ye+1);return(mi(ge)?$e.filter(function(nt){return nt.vars.preventOverlaps===ge}):$e).filter(function(nt){return I.direction>0?nt.end<=O:nt.start>=B})},I.update=function(ge,Ye,$e){if(!(w&&!$e&&!ge)){var nt=$n===!0?ee:I.scroll(),Yt=ge?0:(nt-O)/T,ut=Yt<0?0:Yt>1?1:Yt||0,It=I.progress,on,Ft,Ut,Et,fi,R,V,ne;if(Ye&&(M=Be,Be=w?De():nt,y&&(tt=Ue,Ue=r&&!P?r.totalProgress():ut)),m&&h&&!An&&!Fc&&zi&&(!ut&&O<nt+(nt-M)/(Cn()-Qa)*m?ut=1e-4:ut===1&&B>nt+(nt-M)/(Cn()-Qa)*m&&(ut=.9999)),ut!==It&&I.enabled){if(on=I.isActive=!!ut&&ut<1,Ft=!!It&&It<1,R=on!==Ft,fi=R||!!ut!=!!It,I.direction=ut>It?1:-1,I.progress=ut,fi&&!An&&(Ut=ut&&!It?0:ut===1?1:It===1?2:3,P&&(Et=!R&&X[Ut+1]!=="none"&&X[Ut+1]||X[Ut],ne=r&&(Et==="complete"||Et==="reset"||Et in r))),U&&(R||ne)&&(ne||f||!r)&&(In(U)?U(I):I.getTrailing(U).forEach(function(Oe){return Oe.endAnimation()})),P||(we&&!An&&!Fc?(we._dp._time-we._start!==we._time&&we.render(we._dp._time-we._start),we.resetTo?we.resetTo("totalProgress",ut,r._tTime/r._tDur):(we.vars.totalProgress=ut,we.invalidate().restart())):r&&r.totalProgress(ut,!!(An&&(de||ge)))),h){if(ge&&_&&(K.style[_+S.os2]=Ve),!Z)xe(tl(fe+he*ut));else if(fi){if(V=!ge&&ut>It&&B+1>nt&&nt+1>=mr(F,S),b)if(!ge&&(on||V)){var Q=Fr(h,!0),Y=nt-O;D_(h,St,Q.top+(S===cn?Y:0)+ln,Q.left+(S===cn?0:Y)+ln)}else D_(h,K);ma(on||V?k:$),Ke&&ut<1&&on||xe(fe+(ut===1&&!V?he:0))}}y&&!Pe.tween&&!An&&!Fc&&ye.restart(!0),a&&(R||v&&ut&&(ut<1||!Sd))&&Vl(a.targets).forEach(function(Oe){return Oe.classList[on||v?"add":"remove"](a.className)}),o&&!P&&!ge&&o(I),fi&&!An?(P&&(ne&&(Et==="complete"?r.pause().totalProgress(1):Et==="reset"?r.restart(!0).pause():Et==="restart"?r.restart(!0):r[Et]()),o&&o(I)),(R||!Sd)&&(c&&R&&Wo(I,c),W[Ut]&&Wo(I,W[Ut]),v&&(ut===1?I.kill(!1,1):W[Ut]=0),R||(Ut=ut===1?1:3,W[Ut]&&Wo(I,W[Ut]))),D&&!on&&Math.abs(I.getVelocity())>(nl(D)?D:2500)&&($a(I.callbackAnimation),we?we.progress(1):$a(r,Et==="reverse"?1:!ut,1))):P&&o&&!An&&o(I)}if(Le){var Se=w?nt/w.duration()*(w._caScrollDist||0):nt;xt(Se+(L._isFlipped?1:0)),Le(Se)}Ae&&Ae(-nt/w.duration()*(w._caScrollDist||0))}},I.enable=function(ge,Ye){I.enabled||(I.enabled=!0,mn(F,"resize",il),N||mn(F,"scroll",$o),ue&&mn(n,"refreshInit",ue),ge!==!1&&(I.progress=ve=0,Be=M=J=De()),Ye!==!1&&I.refresh())},I.getTween=function(ge){return ge&&Pe?Pe.tween:we},I.setPositions=function(ge,Ye,$e,nt){if(w){var Yt=w.scrollTrigger,ut=w.duration(),It=Yt.end-Yt.start;ge=Yt.start+It*ge/ut,Ye=Yt.start+It*Ye/ut}I.refresh(!1,!1,{start:M_(ge,$e&&!!I._startClamp),end:M_(Ye,$e&&!!I._endClamp)},nt),I.update()},I.adjustPinSpacing=function(ge){if(le&&ge){var Ye=le.indexOf(S.d)+1;le[Ye]=parseFloat(le[Ye])+ge+ln,le[1]=parseFloat(le[1])+ge+ln,ma(le)}},I.disable=function(ge,Ye){if(ge!==!1&&I.revert(!0,!0),I.enabled&&(I.enabled=I.isActive=!1,Ye||we&&we.pause(),ee=0,Ee&&(Ee.uncache=1),ue&&pn(n,"refreshInit",ue),ye&&(ye.pause(),Pe.tween&&Pe.tween.kill()&&(Pe.tween=0)),!N)){for(var $e=ct.length;$e--;)if(ct[$e].scroller===F&&ct[$e]!==I)return;pn(F,"resize",il),N||pn(F,"scroll",$o)}},I.kill=function(ge,Ye){I.disable(ge,Ye),we&&!Ye&&we.kill(),l&&delete Mh[l];var $e=ct.indexOf(I);$e>=0&&ct.splice($e,1),$e===Xn&&ou>0&&Xn--,$e=0,ct.forEach(function(nt){return nt.scroller===I.scroller&&($e=1)}),$e||$n||(I.scroll.rec=0),r&&(r.scrollTrigger=null,ge&&r.revert({kill:!1}),Ye||r.kill()),ie&&[ie,q,L,oe].forEach(function(nt){return nt.parentNode&&nt.parentNode.removeChild(nt)}),Ml===I&&(Ml=0),h&&(Ee&&(Ee.uncache=1),$e=0,ct.forEach(function(nt){return nt.pin===h&&$e++}),$e||(Ee.spacer=0)),i.onKill&&i.onKill(I)},ct.push(I),I.enable(!1,!1),Qe&&Qe(I),r&&r.add&&!T){var Ge=I.update;I.update=function(){I.update=Ge,dt.cache++,O||B||I.refresh()},Ne.delayedCall(.01,I.update),T=.01,O=B=0}else I.refresh();h&&iR()},n.register=function(i){return Ko||(Ne=i||qx(),Yx()&&window.document&&n.enable(),Ko=el),Ko},n.defaults=function(i){if(i)for(var r in i)Hc[r]=i[r];return Hc},n.disable=function(i,r){el=0,ct.forEach(function(o){return o[r?"kill":"disable"](i)}),pn(ft,"wheel",$o),pn(Tt,"scroll",$o),clearInterval(Oc),pn(Tt,"touchcancel",ar),pn(St,"touchstart",ar),Bc(pn,Tt,"pointerdown,touchstart,mousedown",E_),Bc(pn,Tt,"pointerup,touchend,mouseup",w_),Fu.kill(),kc(pn);for(var s=0;s<dt.length;s+=3)zc(pn,dt[s],dt[s+1]),zc(pn,dt[s],dt[s+2])},n.enable=function(){if(ft=window,Tt=document,vi=Tt.documentElement,St=Tt.body,Ne){if(Vl=Ne.utils.toArray,_l=Ne.utils.clamp,Sh=Ne.core.context||ar,yd=Ne.core.suppressOverwrites||ar,xp=ft.history.scrollRestoration||"auto",Eh=ft.pageYOffset||0,Ne.core.globals("ScrollTrigger",n),St){el=1,pa=document.createElement("div"),pa.style.height="100vh",pa.style.position="absolute",ry(),K2(),en.register(Ne),n.isTouch=en.isTouch,os=en.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),yh=en.isTouch===1,mn(ft,"wheel",$o),vp=[ft,Tt,vi,St],Ne.matchMedia?(n.matchMedia=function(u){var f=Ne.matchMedia(),d;for(d in u)f.add(d,u[d]);return f},Ne.addEventListener("matchMediaInit",function(){ny(),wp()}),Ne.addEventListener("matchMediaRevert",function(){return ty()}),Ne.addEventListener("matchMedia",function(){no(0,1),vo("matchMedia")}),Ne.matchMedia().add("(orientation: portrait)",function(){return Md(),Md})):console.warn("Requires GSAP 3.11.0 or later"),Md(),mn(Tt,"scroll",$o);var i=St.hasAttribute("style"),r=St.style,s=r.borderTopStyle,o=Ne.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Fr(St),cn.m=Math.round(a.top+cn.sc())||0,jn.m=Math.round(a.left+jn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(St.setAttribute("style",""),St.removeAttribute("style")),Oc=setInterval(C_,250),Ne.delayedCall(.5,function(){return Fc=0}),mn(Tt,"touchcancel",ar),mn(St,"touchstart",ar),Bc(mn,Tt,"pointerdown,touchstart,mousedown",E_),Bc(mn,Tt,"pointerup,touchend,mouseup",w_),xh=Ne.utils.checkPrefix("transform"),au.push(xh),Ko=Cn(),Fu=Ne.delayedCall(.2,no).pause(),Zo=[Tt,"visibilitychange",function(){var u=ft.innerWidth,f=ft.innerHeight;Tt.hidden?(y_=u,S_=f):(y_!==u||S_!==f)&&il()},Tt,"DOMContentLoaded",no,ft,"load",no,ft,"resize",il],kc(mn),ct.forEach(function(u){return u.enable(0,1)}),l=0;l<dt.length;l+=3)zc(pn,dt[l],dt[l+1]),zc(pn,dt[l],dt[l+2])}else if(Tt){var c=function u(){n.enable(),Tt.removeEventListener("DOMContentLoaded",u)};Tt.addEventListener("DOMContentLoaded",c)}}},n.config=function(i){"limitCallbacks"in i&&(Sd=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Oc)||(Oc=r)&&setInterval(C_,r),"ignoreMobileResize"in i&&(yh=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(kc(pn)||kc(mn,i.autoRefreshEvents||"none"),Wx=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=ei(i),o=dt.indexOf(s),a=go(s);~o&&dt.splice(o,a?6:2),r&&(a?gr.unshift(ft,r,St,r,vi,r):gr.unshift(s,r))},n.clearMatchMedia=function(i){ct.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(mi(i)?ei(i):i).getBoundingClientRect(),a=o[s?fo:ho]*r||0;return s?o.right-a>0&&o.left+a<ft.innerWidth:o.bottom-a>0&&o.top+a<ft.innerHeight},n.positionInViewport=function(i,r,s){mi(i)&&(i=ei(i));var o=i.getBoundingClientRect(),a=o[s?fo:ho],l=r==null?a/2:r in Bu?Bu[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/ft.innerWidth:(o.top+l)/ft.innerHeight},n.killAll=function(i){if(ct.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=_o.killAll||[];_o={},r.forEach(function(s){return s()})}},n}();ot.version="3.15.0";ot.saveStyles=function(n){return n?Vl(n).forEach(function(e){if(e&&e.style){var t=pi.indexOf(e);t>=0&&pi.splice(t,5),pi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ne.core.getCache(e),Sh())}}):pi};ot.revert=function(n,e){return wp(!n,e)};ot.create=function(n,e){return new ot(n,e)};ot.refresh=function(n){return n?il(!0):(Ko||ot.register())&&no(!0)};ot.update=function(n){return++dt.cache&&Hr(n===!0?2:0)};ot.clearScrollMemory=iy;ot.maxScroll=function(n,e){return mr(n,e?jn:cn)};ot.getScrollFunc=function(n,e){return As(ei(n),e?jn:cn)};ot.getById=function(n){return Mh[n]};ot.getAll=function(){return ct.filter(function(n){return n.vars.id!=="ScrollSmoother"})};ot.isScrolling=function(){return!!zi};ot.snapDirectional=Ep;ot.addEventListener=function(n,e){var t=_o[n]||(_o[n]=[]);~t.indexOf(e)||t.push(e)};ot.removeEventListener=function(n,e){var t=_o[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};ot.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],d=[],h=Ne.delayedCall(r,function(){u(f,d),f=[],d=[]}).pause();return function(_){f.length||h.restart(!0),f.push(_.trigger),d.push(_),s<=f.length&&h.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&In(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return In(s)&&(s=s(),mn(ot,"refresh",function(){return s=e.batchMax()})),Vl(n).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,t.push(ot.create(c))}),t};var U_=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},wd=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(en.isTouch?" pinch-zoom":""):"none",e===vi&&n(St,t)},Xc={auto:1,scroll:1},lR=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ne.core.getCache(s),a=Cn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==St&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Xc[(l=Ui(s)).overflowY]||Xc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!go(s)&&(Xc[(l=Ui(s)).overflowY]||Xc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},oy=function(e,t,i,r){return en.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&lR,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&mn(Tt,en.eventTypes[0],O_,!1,!0)},onDisable:function(){return pn(Tt,en.eventTypes[0],O_,!0)}})},cR=/(input|label|select|textarea)/i,N_,O_=function(e){var t=cR.test(e.target.tagName);(t||N_)&&(e._gsapAllow=!0,N_=t)},uR=function(e){Ks(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=ei(e.target)||vi,u=Ne.core.globals().ScrollSmoother,f=u&&u.get(),d=os&&(e.content&&ei(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),h=As(c,cn),_=As(c,jn),g=1,m=(en.isTouch&&ft.visualViewport?ft.visualViewport.scale*ft.visualViewport.width:ft.outerWidth)/ft.innerWidth,p=0,x=In(r)?function(){return r(a)}:function(){return r||2.8},v,y,b=oy(c,e.type,!0,s),A=function(){return y=!1},w=ar,D=ar,U=function(){l=mr(c,cn),D=_l(os?1:0,l),i&&(w=_l(0,mr(c,jn))),v=po},S=function(){d._gsap.y=tl(parseFloat(d._gsap.y)+h.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},P=function(){if(y){requestAnimationFrame(A);var G=tl(a.deltaY/2),re=D(h.v-G);if(d&&re!==h.v+h.offset){h.offset=re-h.v;var I=tl((parseFloat(d&&d._gsap.y)||0)-h.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",d._gsap.y=I+"px",h.cacheID=dt.cache,Hr()}return!0}h.offset&&S(),y=!0},F,te,N,Z,W=function(){U(),F.isActive()&&F.vars.scrollY>l&&(h()>l?F.progress(1)&&h(l):F.resetTo("scrollY",l))};return d&&Ne.set(d,{y:"+=0"}),e.ignoreCheck=function(X){return os&&X.type==="touchmove"&&P()||g>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},e.onPress=function(){y=!1;var X=g;g=tl((ft.visualViewport&&ft.visualViewport.scale||1)/m),F.pause(),X!==g&&wd(c,g>1.01?!0:i?!1:"x"),te=_(),N=h(),U(),v=po},e.onRelease=e.onGestureStart=function(X,G){if(h.offset&&S(),!G)Z.restart(!0);else{dt.cache++;var re=x(),I,ue;i&&(I=_(),ue=I+re*.05*-X.velocityX/.227,re*=U_(_,I,ue,mr(c,jn)),F.vars.scrollX=w(ue)),I=h(),ue=I+re*.05*-X.velocityY/.227,re*=U_(h,I,ue,mr(c,cn)),F.vars.scrollY=D(ue),F.invalidate().duration(re).play(.01),(os&&F.vars.scrollY>=l||I>=l-1)&&Ne.to({},{onUpdate:W,duration:re})}o&&o(X)},e.onWheel=function(){F._ts&&F.pause(),Cn()-p>1e3&&(v=0,p=Cn())},e.onChange=function(X,G,re,I,ue){if(po!==v&&U(),G&&i&&_(w(I[2]===G?te+(X.startX-X.x):_()+G-I[1])),re){h.offset&&S();var _e=ue[2]===re,Xe=_e?N+X.startY-X.y:h()+re-ue[1],J=D(Xe);_e&&Xe!==J&&(N+=J-Xe),h(J)}(re||G)&&Hr()},e.onEnable=function(){wd(c,i?!1:"x"),ot.addEventListener("refresh",W),mn(ft,"resize",W),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=_.smooth=!1),b.enable()},e.onDisable=function(){wd(c,!0),pn(ft,"resize",W),ot.removeEventListener("refresh",W),b.kill()},e.lockAxis=e.lockAxis!==!1,a=new en(e),a.iOS=os,os&&!h()&&h(1),os&&Ne.ticker.add(ar),Z=a._dc,F=Ne.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:sy(h,h(),function(){return F.pause()})},onUpdate:Hr,onComplete:Z.vars.onComplete}),a};ot.sort=function(n){if(In(n))return ct.sort(n);var e=ft.pageYOffset||0;return ot.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ft.innerHeight}),ct.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};ot.observe=function(n){return new en(n)};ot.normalizeScroll=function(n){if(typeof n>"u")return Wn;if(n===!0&&Wn)return Wn.enable();if(n===!1){Wn&&Wn.kill(),Wn=n;return}var e=n instanceof en?n:uR(n);return Wn&&Wn.target===e.target&&Wn.kill(),go(e.target)&&(Wn=e),e};ot.core={_getVelocityProp:vh,_inputObserver:oy,_scrollers:dt,_proxies:gr,bridge:{ss:function(){zi||vo("scrollStart"),zi=Cn()},ref:function(){return An}}};qx()&&Ne.registerPlugin(ot);gn.registerPlugin(ot);const Ya=ht(null),F_=ht(0);function cf(){function n(){if(typeof window>"u")return;const t=new X2({duration:1.2,easing:r=>Math.min(1,1.001-Math.pow(2,-10*r)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,wheelMultiplier:1,touchMultiplier:1.5,infinite:!1});Ya.value=t,t.on("scroll",r=>{ot.update(),document.documentElement.scrollHeight>window.innerHeight&&(F_.value=r.scroll/(document.documentElement.scrollHeight-window.innerHeight))});const i=r=>{t.raf(r*1e3)};return gn.ticker.add(i),gn.ticker.lagSmoothing(0),()=>{gn.ticker.remove(i),t.destroy(),Ya.value=null}}function e(t,i){Ya.value&&Ya.value.scrollTo(t,i)}return{lenis:Ya,scrollProgress:F_,initLenis:n,scrollTo:e}}const Td=ht("DEFAULT"),Ad=ht(""),Cd=Ca({x:-100,y:-100}),Rd=ht(!1);function Zr(){function n(i,r=""){Td.value=i,Ad.value=r,Rd.value=i!=="DEFAULT"}function e(){Td.value="DEFAULT",Ad.value="",Rd.value=!1}function t(i,r){Cd.x=i,Cd.y=r}return{cursorState:Td,cursorLabel:Ad,cursorPosition:Cd,isHoveringInteractive:Rd,setCursor:n,resetCursor:e,updatePosition:t}}const Ws=ht(!0);let Yo=null;function $c(){if(typeof window>"u")return null;if(!Yo){const n=window.AudioContext||window.webkitAudioContext;n&&(Yo=new n)}return Yo&&Yo.state==="suspended"&&Yo.resume(),Yo}function xr(){function n(){Ws.value=!Ws.value,Ws.value||($c(),e())}function e(){if(Ws.value)return;const r=$c();if(r)try{const s=r.createOscillator(),o=r.createGain();s.type="sine",s.frequency.setValueAtTime(1200,r.currentTime),s.frequency.exponentialRampToValueAtTime(400,r.currentTime+.05),o.gain.setValueAtTime(.12,r.currentTime),o.gain.exponentialRampToValueAtTime(.001,r.currentTime+.05),s.connect(o),o.connect(r.destination),s.start(),s.stop(r.currentTime+.05)}catch{}}function t(){if(Ws.value)return;const r=$c();if(r)try{const s=r.createOscillator(),o=r.createGain();s.type="triangle",s.frequency.setValueAtTime(320,r.currentTime),s.frequency.exponentialRampToValueAtTime(580,r.currentTime+.04),o.gain.setValueAtTime(.035,r.currentTime),o.gain.exponentialRampToValueAtTime(.001,r.currentTime+.04),s.connect(o),o.connect(r.destination),s.start(),s.stop(r.currentTime+.04)}catch{}}function i(){if(Ws.value)return;const r=$c();if(r)try{const s=r.createOscillator(),o=r.createGain();s.type="sine",s.frequency.setValueAtTime(200,r.currentTime),s.frequency.exponentialRampToValueAtTime(800,r.currentTime+.15),o.gain.setValueAtTime(.08,r.currentTime),o.gain.exponentialRampToValueAtTime(.001,r.currentTime+.15),s.connect(o),o.connect(r.destination),s.start(),s.stop(r.currentTime+.15)}catch{}}return{isMuted:Ws,toggleMute:n,playClick:e,playHover:t,playSwoosh:i}}/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Yc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fR=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=(n,e)=>({size:t,strokeWidth:i=2,absoluteStrokeWidth:r,color:s,class:o,...a},{attrs:l,slots:c})=>zd("svg",{...Yc,width:t||Yc.width,height:t||Yc.height,stroke:s||Yc.stroke,"stroke-width":r?Number(i)*24/Number(t):i,...l,class:["lucide",`lucide-${fR(n)}`],...a},[...e.map(u=>zd(...u)),...c.default?[c.default()]:[]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=Ot("ActivityIcon",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dR=Ot("ArrowDownIcon",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=Ot("ArrowRightIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=Ot("ArrowUpRightIcon",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=Ot("AwardIcon",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hR=Ot("BoxIcon",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pR=Ot("CalculatorIcon",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=Ot("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mR=Ot("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gR=Ot("ChevronUpIcon",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=Ot("CircleCheckIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _R=Ot("ClockIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=Ot("CpuIcon",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vR=Ot("EyeIcon",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xR=Ot("FlameIcon",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yR=Ot("LayersIcon",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SR=Ot("MailIcon",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bR=Ot("MenuIcon",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MR=Ot("RotateCcwIcon",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ER=Ot("SendIcon",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=Ot("ShieldCheckIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=Ot("SparklesIcon",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=Ot("Volume2Icon",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=Ot("VolumeXIcon",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=Ot("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-vue-next v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=Ot("ZapIcon",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),wR={class:"relative z-10 flex items-center gap-2"},Aa=Fn({__name:"UiButton",props:{variant:{default:"primary"},size:{default:"md"},icon:{},href:{}},setup(n){const{setCursor:e,resetCursor:t}=Zr(),{playClick:i,playHover:r}=xr(),s=ht(null),o=ht({transform:"translate(0px, 0px)"});function a(f){if(!s.value)return;const d=s.value.getBoundingClientRect(),h=d.left+d.width/2,_=d.top+d.height/2,g=(f.clientX-h)*.25,m=(f.clientY-_)*.25;o.value={transform:`translate(${g}px, ${m}px)`}}function l(){e("HOVER"),r()}function c(){t(),o.value={transform:"translate(0px, 0px)"}}function u(){i()}return(f,d)=>(Re(),_n(kh(n.href?"a":"button"),{ref_key:"buttonRef",ref:s,href:n.href,style:ri(o.value),class:Xt(["relative inline-flex items-center justify-center font-display font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer select-none group",[n.size==="sm"?"px-4 py-2 text-xs rounded-full gap-1.5":"",n.size==="md"?"px-6 py-3.5 text-xs md:text-sm rounded-full gap-2.5":"",n.size==="lg"?"px-8 py-4 text-sm md:text-base rounded-full gap-3":"",n.variant==="primary"?"bg-gradient-to-r from-prism-cyan via-prism-electric to-prism-magenta text-black hover:shadow-[0_0_28px_rgba(0,240,255,0.45)]":"",n.variant==="secondary"?"bg-white text-black hover:bg-prism-cyan hover:text-black":"",n.variant==="glass"?"bg-void-800/80 backdrop-blur-md text-white border border-white/10 hover:border-prism-cyan/60 hover:text-prism-cyan shadow-lg":"",n.variant==="outline"?"bg-transparent text-white border border-white/20 hover:border-prism-magenta hover:text-prism-magenta":""]]),onMousemove:a,onMouseenter:l,onMouseleave:c,onClick:u},{default:Zt(()=>[C("span",wR,[C0(f.$slots,"default")])]),_:3},40,["href","style","class"]))}}),TR={class:"max-w-7xl mx-auto flex items-center justify-between pointer-events-auto"},AR={class:"hidden xl:flex items-center gap-4 px-4 py-2 rounded-full bg-void-900/60 border border-white/5 text-[11px] font-mono text-hud-text"},CR={class:"flex items-center gap-1.5"},RR={class:"flex items-center gap-1.5"},PR={class:"flex items-center gap-1.5"},LR={class:"hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-zinc-300"},DR={class:"flex items-center gap-3"},IR={class:"uppercase tracking-wider"},UR={key:0,class:"md:hidden mt-3 p-6 rounded-3xl bg-void-950/95 border border-white/10 backdrop-blur-2xl pointer-events-auto space-y-5 shadow-2xl"},NR={class:"flex flex-col gap-4 text-base font-display font-bold uppercase tracking-wider text-left text-zinc-200"},OR={class:"pt-2 flex items-center justify-between border-t border-white/10"},FR={class:"text-xs font-mono text-zinc-600"},kR=Fn({__name:"AppHeader",setup(n){const{setCursor:e,resetCursor:t}=Zr(),{isMuted:i,toggleMute:r,playHover:s,playClick:o}=xr(),{scrollTo:a}=cf(),l=ht(!1),c=ht(!1),u=ht(""),f=ht(""),d=ht("");function h(){const m=new Date;u.value=m.toLocaleTimeString("en-US",{timeZone:"America/New_York",hour:"2-digit",minute:"2-digit",hour12:!1}),f.value=m.toLocaleTimeString("en-GB",{timeZone:"Europe/London",hour:"2-digit",minute:"2-digit",hour12:!1}),d.value=m.toLocaleTimeString("ja-JP",{timeZone:"Asia/Tokyo",hour:"2-digit",minute:"2-digit",hour12:!1})}let _;ir(()=>{h(),_=window.setInterval(h,1e3);const m=()=>{l.value=window.scrollY>40};window.addEventListener("scroll",m)}),Kr(()=>{clearInterval(_)});function g(m){o(),c.value=!1,a(m)}return(m,p)=>(Re(),We("header",{class:Xt(["fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 sm:py-5 transition-all duration-300 pointer-events-none",[l.value?"backdrop-blur-md bg-void-950/80 border-b border-white/5 py-3.5":"bg-transparent"]])},[C("div",TR,[C("a",{href:"#hero",class:"flex items-center gap-3 group cursor-pointer",onClick:p[0]||(p[0]=Pi(x=>g("#hero"),["prevent"])),onMouseenter:p[1]||(p[1]=x=>{j(e)("HOVER"),j(s)()}),onMouseleave:p[2]||(p[2]=(...x)=>j(t)&&j(t)(...x))},[...p[26]||(p[26]=[_u('<div class="w-8 h-8 rounded-lg bg-gradient-to-tr from-prism-cyan via-prism-magenta to-prism-gold flex items-center justify-center text-black font-mono font-bold text-xs rotate-45 group-hover:rotate-180 transition-transform duration-500 shadow-[0_0_16px_rgba(0,240,255,0.4)]"><span class="-rotate-45 group-hover:-rotate-180 transition-transform duration-500 font-extrabold text-white">P</span></div><div class="flex flex-col text-left"><span class="font-display font-extrabold text-sm sm:text-base tracking-widest text-white leading-none"> PRISM </span><span class="font-mono text-[9px] text-hud-text tracking-widest uppercase"> Creative Atelier </span></div>',2)])],32),C("div",AR,[C("span",CR,[p[27]||(p[27]=C("span",{class:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"},null,-1)),Wt(" NYC "+Ie(u.value),1)]),p[30]||(p[30]=C("span",null,"•",-1)),C("span",RR,[p[28]||(p[28]=C("span",{class:"w-1.5 h-1.5 rounded-full bg-prism-cyan"},null,-1)),Wt(" LON "+Ie(f.value),1)]),p[31]||(p[31]=C("span",null,"•",-1)),C("span",PR,[p[29]||(p[29]=C("span",{class:"w-1.5 h-1.5 rounded-full bg-prism-gold"},null,-1)),Wt(" TYO "+Ie(d.value),1)])]),C("nav",LR,[C("a",{href:"#works",class:"hover:text-prism-cyan transition-colors",onClick:p[3]||(p[3]=Pi(x=>g("#works"),["prevent"])),onMouseenter:p[4]||(p[4]=x=>{j(e)("HOVER"),j(s)()}),onMouseleave:p[5]||(p[5]=(...x)=>j(t)&&j(t)(...x))}," Selected Works ",32),C("a",{href:"#manifesto",class:"hover:text-prism-magenta transition-colors",onClick:p[6]||(p[6]=Pi(x=>g("#manifesto"),["prevent"])),onMouseenter:p[7]||(p[7]=x=>{j(e)("HOVER"),j(s)()}),onMouseleave:p[8]||(p[8]=(...x)=>j(t)&&j(t)(...x))}," Manifesto ",32),C("a",{href:"#shader-lab",class:"hover:text-prism-gold transition-colors flex items-center gap-1.5",onClick:p[9]||(p[9]=Pi(x=>g("#shader-lab"),["prevent"])),onMouseenter:p[10]||(p[10]=x=>{j(e)("TWEAK"),j(s)()}),onMouseleave:p[11]||(p[11]=(...x)=>j(t)&&j(t)(...x))},[...p[32]||(p[32]=[C("span",{class:"w-2 h-2 rounded-full bg-prism-gold animate-ping"},null,-1),Wt(" 3D Lab ",-1)])],32),C("a",{href:"#services",class:"hover:text-prism-cyan transition-colors",onClick:p[12]||(p[12]=Pi(x=>g("#services"),["prevent"])),onMouseenter:p[13]||(p[13]=x=>{j(e)("HOVER"),j(s)()}),onMouseleave:p[14]||(p[14]=(...x)=>j(t)&&j(t)(...x))}," Capabilities ",32)]),C("div",DR,[C("button",{class:Xt(["hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-void-900/80 border border-white/10 hover:border-white/20 text-[11px] font-mono text-hud-text hover:text-white transition-all cursor-pointer",{"border-prism-cyan/40 text-prism-cyan":!j(i)}]),onClick:p[15]||(p[15]=x=>{j(r)(),j(o)()}),onMouseenter:p[16]||(p[16]=x=>j(e)("HOVER")),onMouseleave:p[17]||(p[17]=(...x)=>j(t)&&j(t)(...x))},[j(i)?(Re(),_n(j(B_),{key:1,class:"w-3.5 h-3.5 text-zinc-500"})):(Re(),_n(j(k_),{key:0,class:"w-3.5 h-3.5 text-prism-cyan animate-pulse"})),C("span",IR,Ie(j(i)?"Sound Off":"Sound On"),1)],34),Me(Aa,{variant:"secondary",size:"sm",class:"hidden sm:inline-flex",onClick:p[18]||(p[18]=x=>g("#contact"))},{default:Zt(()=>[...p[33]||(p[33]=[Wt(" Let's Talk ",-1)])]),_:1}),C("button",{class:"md:hidden w-10 h-10 rounded-full bg-void-900 border border-white/10 text-white flex items-center justify-center cursor-pointer",onClick:p[19]||(p[19]=x=>{c.value=!c.value,j(o)()})},[c.value?(Re(),_n(j(fy),{key:1,class:"w-5 h-5"})):(Re(),_n(j(bR),{key:0,class:"w-5 h-5"}))])])]),Me(Vh,{"enter-active-class":"transition duration-300 ease-out","enter-from-class":"opacity-0 -translate-y-4","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition duration-200 ease-in","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 -translate-y-4"},{default:Zt(()=>[c.value?(Re(),We("div",UR,[C("nav",NR,[C("a",{href:"#works",class:"py-2 border-b border-white/5",onClick:p[20]||(p[20]=Pi(x=>g("#works"),["prevent"]))},"Selected Works"),C("a",{href:"#manifesto",class:"py-2 border-b border-white/5",onClick:p[21]||(p[21]=Pi(x=>g("#manifesto"),["prevent"]))},"Manifesto"),C("a",{href:"#shader-lab",class:"py-2 border-b border-white/5 text-prism-gold",onClick:p[22]||(p[22]=Pi(x=>g("#shader-lab"),["prevent"]))},"3D Crystal Lab"),C("a",{href:"#services",class:"py-2 border-b border-white/5",onClick:p[23]||(p[23]=Pi(x=>g("#services"),["prevent"]))},"Capabilities"),C("a",{href:"#contact",class:"py-2 text-prism-cyan",onClick:p[24]||(p[24]=Pi(x=>g("#contact"),["prevent"]))},"Initiate Collaboration")]),C("div",OR,[C("button",{class:"flex items-center gap-2 text-xs font-mono text-zinc-400",onClick:p[25]||(p[25]=x=>{j(r)(),j(o)()})},[j(i)?(Re(),_n(j(B_),{key:1,class:"w-4 h-4"})):(Re(),_n(j(k_),{key:0,class:"w-4 h-4 text-prism-cyan"})),C("span",null,Ie(j(i)?"Enable Audio":"Mute Audio"),1)]),C("span",FR,"NYC "+Ie(u.value),1)])])):nr("",!0)]),_:1})],2))}}),BR={class:"relative pt-20 pb-12 px-4 sm:px-8 md:px-10 border-t border-white/10 bg-void-950 z-20 select-none overflow-hidden text-left"},zR={class:"relative w-full overflow-hidden py-4 border-b border-white/10 mb-16"},HR={class:"flex gap-8 whitespace-nowrap animate-marquee"},GR={class:"max-w-7xl mx-auto space-y-16"},VR={class:"grid grid-cols-1 md:grid-cols-4 gap-10"},WR={class:"md:col-span-2 space-y-4"},XR={class:"flex items-center gap-4 pt-2"},$R={class:"space-y-3"},YR={class:"space-y-2 text-sm font-display font-medium text-zinc-300"},qR={class:"space-y-3"},jR={class:"space-y-2 text-sm font-display font-medium text-zinc-300"},KR=Fn({__name:"AppFooter",setup(n){const{setCursor:e,resetCursor:t}=Zr(),{playHover:i}=xr(),r=["CREATIVE WEBGL ATELIER","CUSTOM GLSL SHADERS","GSAP KINETIC MOTION","AWWWARDS BENCHMARK","SPATIAL 3D EXPERIENCES","120 FPS FLUID PHYSICS","HIGH-TICKET CLIENT ROI"];return(s,o)=>(Re(),We("footer",BR,[C("div",zR,[C("div",HR,[(Re(!0),We(mt,null,sn([...r,...r],(a,l)=>(Re(),We("div",{key:l,class:"flex items-center gap-8 text-xs sm:text-sm md:text-base font-mono font-bold tracking-widest text-zinc-400 uppercase"},[C("span",null,Ie(a),1),o[18]||(o[18]=C("span",{class:"w-2 h-2 rounded-full bg-prism-cyan"},null,-1))]))),128))])]),C("div",GR,[C("div",VR,[C("div",WR,[o[20]||(o[20]=_u('<div class="flex items-center gap-3" data-v-d7ec059c><div class="w-8 h-8 rounded-lg bg-gradient-to-tr from-prism-cyan via-prism-magenta to-prism-gold flex items-center justify-center text-black font-mono font-bold text-xs rotate-45" data-v-d7ec059c><span class="-rotate-45 font-extrabold text-white" data-v-d7ec059c>P</span></div><span class="text-xl font-display font-extrabold tracking-widest text-white" data-v-d7ec059c> PRISM ATELIER </span></div><p class="text-sm font-body text-zinc-400 max-w-md leading-relaxed" data-v-d7ec059c> A multidisciplinary creative tech laboratory engineering bespoke WebGL, GLSL shader choreography, and high-conversion flagship web experiences for global brands. </p>',2)),C("div",XR,[C("a",{href:"mailto:contact@prism-atelier.dev",class:"inline-flex items-center gap-2 text-xs font-mono text-prism-cyan hover:underline",onMouseenter:o[0]||(o[0]=a=>{j(e)("HOVER"),j(i)()}),onMouseleave:o[1]||(o[1]=(...a)=>j(t)&&j(t)(...a))},[Me(j(SR),{class:"w-4 h-4"}),o[19]||(o[19]=C("span",null,"contact@prism-atelier.dev",-1))],32)])]),C("div",$R,[o[25]||(o[25]=C("p",{class:"text-xs font-mono uppercase text-hud-text tracking-widest"}," Freelance & Direct ",-1)),C("ul",YR,[C("li",null,[C("a",{href:"#",class:"hover:text-prism-cyan transition-colors flex items-center gap-1.5",onMouseenter:o[2]||(o[2]=a=>j(e)("HOVER")),onMouseleave:o[3]||(o[3]=(...a)=>j(t)&&j(t)(...a))},[o[21]||(o[21]=C("span",null,"Upwork Pro Profile",-1)),Me(j(Cr),{class:"w-3.5 h-3.5 text-hud-text"})],32)]),C("li",null,[C("a",{href:"#",class:"hover:text-prism-cyan transition-colors flex items-center gap-1.5",onMouseenter:o[4]||(o[4]=a=>j(e)("HOVER")),onMouseleave:o[5]||(o[5]=(...a)=>j(t)&&j(t)(...a))},[o[22]||(o[22]=C("span",null,"Fiverr Pro Top Rated",-1)),Me(j(Cr),{class:"w-3.5 h-3.5 text-hud-text"})],32)]),C("li",null,[C("a",{href:"#",class:"hover:text-prism-cyan transition-colors flex items-center gap-1.5",onMouseenter:o[6]||(o[6]=a=>j(e)("HOVER")),onMouseleave:o[7]||(o[7]=(...a)=>j(t)&&j(t)(...a))},[o[23]||(o[23]=C("span",null,"Awwwards Directory",-1)),Me(j(Cr),{class:"w-3.5 h-3.5 text-hud-text"})],32)]),C("li",null,[C("a",{href:"#",class:"hover:text-prism-cyan transition-colors flex items-center gap-1.5",onMouseenter:o[8]||(o[8]=a=>j(e)("HOVER")),onMouseleave:o[9]||(o[9]=(...a)=>j(t)&&j(t)(...a))},[o[24]||(o[24]=C("span",null,"Telegram Direct",-1)),Me(j(Cr),{class:"w-3.5 h-3.5 text-hud-text"})],32)])])]),C("div",qR,[o[30]||(o[30]=C("p",{class:"text-xs font-mono uppercase text-hud-text tracking-widest"}," Network & Code ",-1)),C("ul",jR,[C("li",null,[C("a",{href:"#",class:"hover:text-prism-magenta transition-colors flex items-center gap-1.5",onMouseenter:o[10]||(o[10]=a=>j(e)("HOVER")),onMouseleave:o[11]||(o[11]=(...a)=>j(t)&&j(t)(...a))},[o[26]||(o[26]=C("span",null,"GitHub Repository",-1)),Me(j(Cr),{class:"w-3.5 h-3.5 text-hud-text"})],32)]),C("li",null,[C("a",{href:"#",class:"hover:text-prism-magenta transition-colors flex items-center gap-1.5",onMouseenter:o[12]||(o[12]=a=>j(e)("HOVER")),onMouseleave:o[13]||(o[13]=(...a)=>j(t)&&j(t)(...a))},[o[27]||(o[27]=C("span",null,"Twitter / X (@prism_dev)",-1)),Me(j(Cr),{class:"w-3.5 h-3.5 text-hud-text"})],32)]),C("li",null,[C("a",{href:"#",class:"hover:text-prism-magenta transition-colors flex items-center gap-1.5",onMouseenter:o[14]||(o[14]=a=>j(e)("HOVER")),onMouseleave:o[15]||(o[15]=(...a)=>j(t)&&j(t)(...a))},[o[28]||(o[28]=C("span",null,"LinkedIn Atelier",-1)),Me(j(Cr),{class:"w-3.5 h-3.5 text-hud-text"})],32)]),C("li",null,[C("a",{href:"#",class:"hover:text-prism-magenta transition-colors flex items-center gap-1.5",onMouseenter:o[16]||(o[16]=a=>j(e)("HOVER")),onMouseleave:o[17]||(o[17]=(...a)=>j(t)&&j(t)(...a))},[o[29]||(o[29]=C("span",null,"CodePen Creative Lab",-1)),Me(j(Cr),{class:"w-3.5 h-3.5 text-hud-text"})],32)])])])]),o[31]||(o[31]=C("div",{class:"pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-hud-text"},[C("div",null," (C) 2026 PRISM CREATIVE ATELIER. ALL RIGHTS RESERVED. "),C("div",{class:"flex items-center gap-4"},[C("span",null,"DESIGNED FOR MAXIMUM WOW"),C("span",null,"-"),C("span",{class:"text-prism-cyan"},"VUE 3 + THREE.JS + GSAP")])],-1))])]))}}),Rp=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},ZR=Rp(KR,[["__scopeId","data-v-d7ec059c"]]),JR={key:0,class:"fixed inset-0 pointer-events-none z-[9999] hidden md:block overflow-hidden"},QR={key:0,class:"animate-fade-in text-center px-2"},eP=Fn({__name:"CustomCursor",setup(n){const{cursorState:e,cursorLabel:t}=Zr(),i=ht(-100),r=ht(-100),s=ht(-100),o=ht(-100),a=ht(!1);let l;function c(f){i.value=f.clientX,r.value=f.clientY,a.value||(a.value=!0)}function u(){s.value+=(i.value-s.value)*.18,o.value+=(r.value-o.value)*.18,l=requestAnimationFrame(u)}return ir(()=>{window.matchMedia("(pointer: fine)").matches&&(window.addEventListener("mousemove",c),l=requestAnimationFrame(u))}),Kr(()=>{window.removeEventListener("mousemove",c),cancelAnimationFrame(l)}),(f,d)=>a.value?(Re(),We("div",JR,[C("div",{class:Xt(["fixed top-0 left-0 w-2.5 h-2.5 -ml-1.25 -mt-1.25 rounded-full bg-prism-cyan transition-transform duration-75 ease-out shadow-[0_0_12px_#00F0FF]",{"opacity-0":j(e)==="VIEW_CASE"||j(e)==="DRAG"}]),style:ri({transform:`translate3d(${i.value}px, ${r.value}px, 0)`})},null,6),C("div",{class:Xt(["fixed top-0 left-0 rounded-full flex items-center justify-center font-display font-bold tracking-widest text-[10px] text-black uppercase transition-all duration-300 ease-out backdrop-blur-sm -translate-x-1/2 -translate-y-1/2 select-none",[j(e)==="DEFAULT"?"w-9 h-9 border border-white/25 bg-transparent":"",j(e)==="HOVER"?"w-14 h-14 bg-prism-cyan/20 border border-prism-cyan scale-110 shadow-[0_0_24px_rgba(0,240,255,0.4)]":"",j(e)==="VIEW_CASE"?"w-24 h-24 bg-gradient-to-tr from-prism-cyan via-white to-prism-magenta text-black shadow-[0_0_32px_rgba(255,255,255,0.6)] scale-100":"",j(e)==="DRAG"?"w-20 h-20 bg-prism-magenta text-white shadow-[0_0_28px_#FF2E93]":"",j(e)==="TWEAK"?"w-20 h-20 bg-prism-gold text-black shadow-[0_0_28px_#FFD166]":""]]),style:ri({transform:`translate3d(${s.value}px, ${o.value}px, 0)`})},[j(t)?(Re(),We("span",QR,Ie(j(t)),1)):nr("",!0)],6)])):nr("",!0)}}),Qi=Fn({__name:"UiBadge",props:{variant:{default:"glass"},dot:{type:Boolean,default:!1}},setup(n){return(e,t)=>(Re(),We("span",{class:Xt(["inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono font-bold tracking-wider uppercase rounded-full border backdrop-blur-xl shadow-lg transition-all duration-300 select-none",[n.variant==="cyan"?"bg-void-950/85 border-prism-cyan/40 text-prism-cyan shadow-[0_0_12px_rgba(0,240,255,0.15)]":"",n.variant==="magenta"?"bg-void-950/85 border-prism-magenta/40 text-prism-magenta shadow-[0_0_12px_rgba(255,46,147,0.15)]":"",n.variant==="gold"?"bg-void-950/85 border-prism-gold/40 text-prism-gold shadow-[0_0_12px_rgba(255,209,102,0.15)]":"",n.variant==="glass"?"bg-void-950/85 border-white/20 text-white hover:border-white/40 shadow-black/60":""]])},[n.dot?(Re(),We("span",{key:0,class:Xt(["w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0",[n.variant==="cyan"?"bg-prism-cyan shadow-[0_0_8px_#00F0FF]":"",n.variant==="magenta"?"bg-prism-magenta shadow-[0_0_8px_#FF2E93]":"",n.variant==="gold"?"bg-prism-gold shadow-[0_0_8px_#FFD166]":"",n.variant==="glass"?"bg-white shadow-[0_0_6px_#fff]":""]])},null,2)):nr("",!0),C0(e.$slots,"default")],2))}}),tP={class:"relative h-60 md:h-80 w-full overflow-hidden -mt-14"},nP=["src","alt"],iP={class:"absolute bottom-6 left-6 md:left-10 right-6 flex flex-wrap items-end justify-between gap-4"},rP={class:"flex items-center gap-3 mb-2"},sP={class:"text-xs font-mono text-hud-text"},oP={class:"text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white"},aP={class:"text-right hidden sm:block"},lP={class:"text-xl font-mono font-bold text-prism-cyan"},cP={class:"p-6 md:p-10 space-y-8"},uP={class:"text-base md:text-lg text-zinc-300 font-body leading-relaxed"},fP={class:"grid grid-cols-1 sm:grid-cols-3 gap-4"},dP={class:"text-xs font-mono uppercase text-hud-text tracking-wider"},hP={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},pP={class:"p-6 rounded-2xl bg-void-950/60 border border-white/5 space-y-3"},mP={class:"flex items-center gap-2 text-prism-magenta font-mono text-xs uppercase tracking-wider"},gP={class:"text-sm font-body text-zinc-300 leading-relaxed"},_P={class:"p-6 rounded-2xl bg-void-950/60 border border-white/5 space-y-3"},vP={class:"flex items-center gap-2 text-prism-cyan font-mono text-xs uppercase tracking-wider"},xP={class:"text-sm font-body text-zinc-300 leading-relaxed"},yP={key:0,class:"p-5 rounded-2xl bg-void-950/50 border border-white/5"},SP={class:"flex items-center gap-2 mb-3 text-prism-gold font-mono text-xs uppercase tracking-wider"},bP={class:"flex flex-wrap gap-2"},MP={class:"flex flex-wrap gap-2"},EP={class:"pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4"},wP={class:"text-xs font-mono text-hud-text"},TP={class:"text-white"},AP=Fn({__name:"CaseModal",props:{project:{},isOpen:{type:Boolean}},emits:["close"],setup(n,{emit:e}){const t=n,i=e,{playClick:r,playSwoosh:s}=xr();function o(){r(),i("close")}function a(l){l.key==="Escape"&&t.isOpen&&o()}return al(()=>t.isOpen,l=>{l?(s(),document.body.style.overflow="hidden"):document.body.style.overflow=""}),ir(()=>{window.addEventListener("keydown",a)}),Kr(()=>{window.removeEventListener("keydown",a),document.body.style.overflow=""}),(l,c)=>(Re(),_n(Vh,{"enter-active-class":"transition duration-300 ease-out","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"transition duration-200 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:Zt(()=>[n.isOpen&&n.project?(Re(),We("div",{key:0,"data-lenis-prevent":"",class:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-void-950/90 backdrop-blur-2xl overflow-y-auto",onClick:Pi(o,["self"])},[C("div",{"data-lenis-prevent":"",class:"relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-void-900 border border-white/10 rounded-3xl shadow-2xl shadow-black/90 my-auto text-left",style:ri({borderColor:`${n.project.accentColor}33`})},[C("div",{class:"sticky top-0 left-0 right-0 h-1 bg-gradient-to-r z-30",style:ri({backgroundImage:`linear-gradient(to right, ${n.project.accentColor}, #FF2E93, #00F0FF)`})},null,4),C("button",{class:"sticky top-6 right-6 float-right z-30 w-10 h-10 rounded-full bg-void-950/90 border border-white/20 hover:border-white/40 text-white flex items-center justify-center transition-all hover:scale-110 cursor-pointer shadow-lg ml-auto mr-6 mt-4",onClick:o},[Me(j(fy),{class:"w-5 h-5"})]),C("div",tP,[C("img",{src:n.project.thumbnail,alt:n.project.title,class:"w-full h-full object-cover filter brightness-90"},null,8,nP),c[1]||(c[1]=C("div",{class:"absolute inset-0 bg-gradient-to-t from-void-900 via-void-900/40 to-transparent"},null,-1)),C("div",iP,[C("div",null,[C("div",rP,[Me(Qi,{variant:"cyan",dot:""},{default:Zt(()=>[Wt(Ie(n.project.category),1)]),_:1}),C("span",sP,Ie(n.project.year)+" // "+Ie(n.project.client),1)]),C("h2",oP,Ie(n.project.title),1)]),C("div",aP,[c[0]||(c[0]=C("span",{class:"text-xs font-mono text-hud-text"},"CASE ID",-1)),C("p",lP,"// "+Ie(n.project.number),1)])])]),C("div",cP,[C("div",null,[C("p",uP,Ie(n.project.description),1)]),C("div",fP,[(Re(!0),We(mt,null,sn(n.project.metrics,(u,f)=>(Re(),We("div",{key:f,class:"p-5 rounded-2xl bg-void-950/80 border border-white/5 flex flex-col justify-between"},[C("span",dP,Ie(u.label),1),C("p",{class:"text-2xl sm:text-3xl font-display font-bold text-white mt-2",style:ri({color:n.project.accentColor})},Ie(u.value),5)]))),128))]),C("div",hP,[C("div",pP,[C("div",mP,[Me(j(Cp),{class:"w-4 h-4"}),c[2]||(c[2]=C("span",null,"The Engineering Challenge",-1))]),C("p",gP,Ie(n.project.challenge),1)]),C("div",_P,[C("div",vP,[Me(j(Ap),{class:"w-4 h-4"}),c[3]||(c[3]=C("span",null,"Architectural Solution",-1))]),C("p",xP,Ie(n.project.solution),1)])]),n.project.awards&&n.project.awards.length>0?(Re(),We("div",yP,[C("div",SP,[Me(j(Tp),{class:"w-4 h-4"}),c[4]||(c[4]=C("span",null,"Accolades & Industry Recognition",-1))]),C("div",bP,[(Re(!0),We(mt,null,sn(n.project.awards,u=>(Re(),_n(Qi,{key:u,variant:"gold"},{default:Zt(()=>[Wt(" 🏆 "+Ie(u),1)]),_:2},1024))),128))])])):nr("",!0),C("div",null,[c[5]||(c[5]=C("span",{class:"block text-xs font-mono text-hud-text uppercase tracking-wider mb-3"},"Technologies Deployed",-1)),C("div",MP,[(Re(!0),We(mt,null,sn(n.project.techStack,u=>(Re(),_n(Qi,{key:u,variant:"glass"},{default:Zt(()=>[Wt(Ie(u),1)]),_:2},1024))),128))])]),C("div",EP,[C("div",wP,[c[6]||(c[6]=Wt(" ROLE: ",-1)),C("span",TP,Ie(n.project.role),1)]),Me(Aa,{variant:"primary",size:"md",onClick:o},{default:Zt(()=>[...c[7]||(c[7]=[Wt(" Close Case Study ",-1)])]),_:1})])])],4)])):nr("",!0)]),_:1}))}}),CP={class:"fixed bottom-6 left-6 z-40 select-none font-mono text-left"},RP={class:"flex items-center gap-1.5 text-xs font-bold text-white"},PP={class:"text-[10px] text-zinc-400 group-hover:text-white transition-colors"},LP={key:0,class:"mt-2.5 p-4 rounded-2xl bg-void-950/95 border border-white/15 backdrop-blur-2xl shadow-2xl w-72 space-y-3"},DP={class:"flex items-center justify-between pb-2 border-b border-white/10"},IP={class:"flex items-center gap-1.5 text-xs font-bold text-white"},UP={class:"space-y-2 text-xs"},NP={class:"flex items-center justify-between"},OP={class:"text-hud-text text-[11px] flex items-center gap-1"},FP={class:"font-bold text-white"},kP={class:"space-y-0.5 pt-1"},BP={class:"text-hud-text text-[10px] flex items-center gap-1"},zP=["title"],HP=Fn({__name:"PerformanceHud",setup(n){const e=ht(!1),t=ht(120),i=ht(8.3),r=ht("WebGL 2.0 Accelerating"),s=ht("Hardware GPU");let o=0,a=performance.now(),l;function c(){try{const f=document.createElement("canvas"),d=f.getContext("webgl2")||f.getContext("webgl");if(d){const h=d.getExtension("WEBGL_debug_renderer_info");if(h){const _=d.getParameter(h.UNMASKED_RENDERER_WEBGL),g=d.getParameter(h.UNMASKED_VENDOR_WEBGL);r.value=g||"High Performance",s.value=_?_.replace(/ANGLE \((.*)\)/,"$1"):"Dedicated GPU"}}}catch{r.value="Hardware Accelerated"}}function u(){const f=performance.now();if(o++,f-a>=500){const d=Math.round(o*1e3/(f-a));t.value=Math.min(d,144),i.value=parseFloat((1e3/Math.max(t.value,1)).toFixed(1)),o=0,a=f}l=requestAnimationFrame(u)}return ir(()=>{c(),l=requestAnimationFrame(u)}),Kr(()=>{cancelAnimationFrame(l)}),(f,d)=>(Re(),We("div",CP,[C("div",{class:"flex items-center gap-3 px-3.5 py-2 rounded-full bg-void-950/90 border border-white/15 backdrop-blur-xl shadow-2xl hover:border-prism-cyan/40 transition-all cursor-pointer group",onClick:d[0]||(d[0]=h=>e.value=!e.value)},[C("span",{class:Xt(["w-2 h-2 rounded-full animate-ping",t.value>=90?"bg-emerald-400":t.value>=50?"bg-prism-cyan":"bg-prism-gold"])},null,2),C("div",RP,[C("span",{class:Xt(t.value>=90?"text-emerald-400":"text-prism-cyan")},Ie(t.value),3),d[1]||(d[1]=C("span",{class:"text-[10px] text-zinc-400 font-normal"},"FPS",-1))]),d[2]||(d[2]=C("div",{class:"h-3 w-px bg-white/15 mx-0.5"},null,-1)),C("span",PP,Ie(e.value?"HIDE HUD":"GPU METRICS"),1),e.value?(Re(),_n(j(mR),{key:1,class:"w-3 h-3 text-zinc-400 group-hover:text-white"})):(Re(),_n(j(gR),{key:0,class:"w-3 h-3 text-zinc-400 group-hover:text-white"}))]),Me(Vh,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"opacity-0 translate-y-2 scale-95","enter-to-class":"opacity-100 translate-y-0 scale-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"opacity-100 translate-y-0 scale-100","leave-to-class":"opacity-0 translate-y-2 scale-95"},{default:Zt(()=>[e.value?(Re(),We("div",LP,[C("div",DP,[C("div",IP,[Me(j(ay),{class:"w-3.5 h-3.5 text-prism-cyan"}),d[3]||(d[3]=C("span",null,"WebGL Engine HUD",-1))]),d[4]||(d[4]=C("span",{class:"text-[9px] px-1.5 py-0.5 rounded bg-emerald-400/20 text-emerald-400 font-bold"}," OPTIMIZED ",-1))]),C("div",UP,[C("div",NP,[C("span",OP,[Me(j(dy),{class:"w-3 h-3 text-prism-gold"}),d[5]||(d[5]=Wt(" Frame Budget: ",-1))]),C("span",FP,Ie(i.value)+" ms ("+Ie(t.value)+" FPS)",1)]),C("div",kP,[C("span",BP,[Me(j(Cp),{class:"w-3 h-3 text-prism-magenta"}),d[6]||(d[6]=Wt(" Active GPU Device: ",-1))]),C("p",{class:"text-[11px] text-zinc-200 font-medium truncate",title:s.value},Ie(s.value),9,zP)]),d[7]||(d[7]=C("div",{class:"flex items-center justify-between pt-1 border-t border-white/5 text-[11px]"},[C("span",{class:"text-hud-text"},"Pipeline:"),C("span",{class:"text-prism-cyan font-bold"},"Three.js 0.162 // GLSL ES")],-1))])])):nr("",!0)]),_:1})]))}}),GP={id:"hero",class:"relative h-screen w-full flex flex-col justify-between pt-28 pb-8 px-4 sm:px-8 select-none overflow-hidden"},VP={class:"flex items-center gap-5"},WP=Fn({__name:"HeroSection",setup(n){const{playClick:e}=xr(),{scrollTo:t}=cf(),i=ht(null);ir(()=>{gn.timeline({defaults:{ease:"power4.out",duration:1.2}}).from(".hero-line-1, .hero-line-2, .hero-line-3",{y:50,opacity:0,rotateX:-10,stagger:.1,delay:.1}).from(i.value,{opacity:0,y:25,duration:.8},"-=0.5")});function r(){e(),t("#works")}return(s,o)=>(Re(),We("section",GP,[o[3]||(o[3]=_u('<div class="w-full flex items-center justify-between z-10 pointer-events-none opacity-0"><span>TOP SPACING</span></div><div class="backdrop-layer w-full max-w-6xl mx-auto text-center my-auto pointer-events-none flex flex-col justify-center items-center select-none space-y-1 sm:space-y-2 px-4"><div class="w-full overflow-hidden flex justify-center"><h1 class="hero-line-1 whitespace-nowrap text-3xl sm:text-5xl md:text-6xl lg:text-[4.4vw] font-display font-black uppercase tracking-tight leading-tight text-white drop-shadow-[0_4px_32px_rgba(0,0,0,0.95)]"> PRISM CREATIVE STUDIO </h1></div><div class="w-full overflow-hidden flex justify-center"><h2 class="hero-line-2 whitespace-nowrap text-3xl sm:text-5xl md:text-6xl lg:text-[4.8vw] font-display font-black uppercase tracking-tight leading-tight text-white drop-shadow-[0_4px_32px_rgba(0,0,0,0.95)]"> DIGITAL EXPERIENCE </h2></div><div class="w-full overflow-hidden flex justify-center"><p class="hero-line-3 whitespace-nowrap text-2xl sm:text-4xl md:text-5xl lg:text-[4.1vw] font-display font-black uppercase tracking-tight leading-tight text-white drop-shadow-[0_4px_32px_rgba(0,0,0,0.95)]"> &amp; WEBGL ATELIER </p></div></div>',2)),C("div",{ref_key:"bottomHudRef",ref:i,class:"max-w-7xl mx-auto w-full z-30 flex flex-col sm:flex-row items-end sm:items-center justify-between gap-4 pointer-events-auto"},[o[2]||(o[2]=_u('<div class="flex items-center gap-4 sm:gap-5 p-3 sm:p-4 rounded-2xl bg-void-950/85 border border-white/15 backdrop-blur-2xl shadow-2xl"><div class="w-10 sm:w-11 h-10 sm:h-11 rounded-xl bg-void-900 border border-white/15 overflow-hidden flex items-center justify-center relative flex-shrink-0 shadow-lg"><div class="w-5 h-5 rounded bg-gradient-to-tr from-prism-cyan via-prism-magenta to-prism-gold rotate-45 animate-spin-slow opacity-95 shadow-[0_0_14px_#00F0FF]"></div></div><div class="text-left space-y-0.5"><div class="flex items-center gap-2"><span class="text-xs font-display font-bold tracking-wider text-white uppercase">WORKS</span><span class="text-[10px] font-mono text-prism-cyan font-bold">70%</span></div><p class="text-[10px] sm:text-[11px] font-mono text-zinc-400"> Coordinates: 40.7128 N, 74.0060 W | New York </p></div><div class="hidden md:block h-8 w-px bg-white/15 mx-1"></div><div class="hidden md:block text-left space-y-0.5"><span class="text-xs font-display font-bold tracking-wider text-white uppercase">SERVICES</span><p class="text-[11px] font-mono text-zinc-400"> Coordinates: 51.5074 N, 0.1278 W | London </p></div></div>',1)),C("div",VP,[Me(Aa,{variant:"primary",size:"md",onClick:r},{default:Zt(()=>[o[0]||(o[0]=C("span",null,"Explore Projects",-1)),Me(j(dR),{class:"w-3.5 h-3.5 animate-bounce"})]),_:1}),o[1]||(o[1]=C("span",{class:"hidden lg:inline text-xs font-mono text-hud-text tracking-widest uppercase"}," Paris | LA ",-1))])],512)]))}}),XP={class:"flex items-center gap-3 mb-8"},$P={class:"text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight text-white flex flex-wrap gap-x-3 gap-y-2"},YP={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"},qP={class:"w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"},jP={class:"text-3xl sm:text-4xl lg:text-[2.2rem] xl:text-4xl font-condensed font-black text-white tracking-normal mb-1.5 whitespace-nowrap"},KP={class:"text-[11px] font-mono uppercase tracking-wider text-hud-text"},ZP="We architect digital masterworks at the exact intersection of high-octane WebGL 3D graphics, fluid physics choreography, and conversion psychology. In a web flooded with generic templates, PRISM engineers bespoke interactive worlds that command premium valuations and captivate global audiences.",JP=Fn({__name:"ManifestoSection",setup(n){gn.registerPlugin(ot);const e=ht(null),t=ht(null);ir(()=>{if(!t.value)return;const r=t.value.querySelectorAll(".manifesto-word");gn.fromTo(r,{opacity:.15,y:15},{opacity:1,y:0,stagger:.05,ease:"none",scrollTrigger:{trigger:e.value,start:"top 75%",end:"bottom 60%",scrub:.8}})});const i=[{value:"120 FPS",label:"Ultra-Fluid Frame Rate",icon:dy,color:"text-prism-cyan"},{value:"14+",label:"Awwwards & FWA Honors",icon:Tp,color:"text-prism-gold"},{value:"$50M+",label:"Client Value Generated",icon:xR,color:"text-prism-magenta"},{value:"100%",label:"Bespoke GLSL Codebase",icon:cy,color:"text-emerald-400"}];return(r,s)=>(Re(),We("section",{id:"manifesto",ref_key:"sectionRef",ref:e,class:"relative py-28 px-4 sm:px-8 md:px-10 max-w-7xl mx-auto z-20 select-none"},[C("div",XP,[Me(Qi,{variant:"magenta",dot:""},{default:Zt(()=>[...s[0]||(s[0]=[Wt(" Studio Manifesto // 01 ",-1)])]),_:1}),s[1]||(s[1]=C("span",{class:"text-xs font-mono text-hud-text uppercase tracking-widest"}," Why Creative Development Dominates ",-1))]),C("div",{ref_key:"manifestoWords",ref:t,class:"mb-16"},[C("p",$P,[(Re(!0),We(mt,null,sn(ZP.split(" "),(o,a)=>(Re(),We("span",{key:a,class:"manifesto-word inline-block transition-colors duration-200"},Ie(o),1))),128))])],512),C("div",YP,[(Re(),We(mt,null,sn(i,(o,a)=>C("div",{key:a,class:"p-6 sm:p-7 rounded-3xl bg-void-950/80 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-300 group overflow-hidden"},[C("div",qP,[(Re(),_n(kh(o.icon),{class:Xt(["w-5 h-5",o.color])},null,8,["class"]))]),C("p",jP,Ie(o.value),1),C("p",KP,Ie(o.label),1)])),64))])],512))}}),Xi=[{id:"neo-vortex",number:"01",title:"NEO VORTEX",subtitle:"Autonomous AI Neural Compute Platform",client:"Vortex Quantum Labs (San Francisco)",year:"2026",role:"Creative WebGL Engineering & Art Direction",category:"WEBGL & 3D",tags:["THREE.JS","CUSTOM GLSL","PARTICLE PHYSICS","GSAP SCROLL"],awards:["Awwwards Site of the Day","FWA of the Day","CSSDA Best UI/UX"],metrics:[{label:"Conversion Lift",value:"+142%"},{label:"Avg Session Time",value:"3m 48s"},{label:"Series-A Funding Raised",value:"$24M"}],thumbnail:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",accentColor:"#00F0FF",description:"A groundbreaking WebGL interactive experience representing quantum neural compute matrices through high-density particle fluid dynamics and optical chromatic dispersion.",challenge:"Deliver 120 FPS high-fidelity 3D fluid simulations across desktop and mobile without stalling main-thread UI interactions.",solution:"Engineered an instanced particle computation engine utilizing GPGPU curl noise textures, GPU instanced meshes, and adaptive dynamic resolution scaling.",techStack:["Vue 3","Three.js GPGPU","GLSL Shaders","GSAP ScrollTrigger","Lenis Smooth Scroll","TailwindCSS"]},{id:"aetheria-xr",number:"02",title:"AETHERIA XR",subtitle:"Spatial Computing & Mixed Reality OS",client:"Aetheria Systems (Zurich / Tokyo)",year:"2025",role:"Lead Spatial Frontend Architect",category:"SPATIAL XR",tags:["WEBXR","THREE.JS","PHYSICS ENGINE","SHADERS"],awards:["Awwwards Developer Award","FWA of the Month"],metrics:[{label:"Frame Rate",value:"120 FPS"},{label:"App Store Waitlist",value:"180K+"},{label:"Global Press Features",value:"35+"}],thumbnail:"https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop",accentColor:"#FF2E93",description:"An avant-garde digital ecosystem showcasing next-generation holographic interface primitives, spatial depth audio, and interactive refractive glass geometry.",challenge:"Translating complex spatial UI navigation paradigms into intuitive browser gestures with instantaneous feedback.",solution:"Designed custom raycasting controllers paired with inertia-weighted spring kinematics and optical Fresnel shader material pipelines.",techStack:["Vue 3 Composition API","Three.js","Web Audio API","Custom Postprocessing","TypeScript"]},{id:"lumina-void",number:"03",title:"LUMINA VOID",subtitle:"Haute Horlogerie & Digital Timepiece Exhibition",client:"Atelier Lumina (Geneva)",year:"2025",role:"Creative WebGL & Motion Developer",category:"LUXURY MOTION",tags:["RAYMARCHING","PBR MATERIALS","KINETIC MOTION","LENIS"],awards:["CSSDA Special Kudos","Awwwards Mobile of the Week"],metrics:[{label:"Pre-Order Volume",value:"$8.2M"},{label:"Bounce Rate Reduction",value:"-38%"},{label:"Lighthouse Performance",value:"98/100"}],thumbnail:"https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop",accentColor:"#FFD166",description:"A digital high-luxury gallery unveiling a limited-edition tourbillon mechanical watch through interactive 3D exploded assemblies and micro-precision animations.",challenge:"Achieving photorealistic metallic reflections, diamond caustics, and sapphire crystal transparency in real-time WebGL.",solution:"Implemented HDRI environment probe reflections, custom transmission roughness shaders, and cinematic GSAP camera path interpolations.",techStack:["Vue 3","Three.js PBR","GLSL Transmission","GSAP Timeline","Lenis"]},{id:"kroma-ai",number:"04",title:"KROMA AI",subtitle:"Generative Diffusion Intelligence Suite",client:"Kroma Labs (New York)",year:"2026",role:"Interactive Developer & System Designer",category:"AI PRODUCT",tags:["GENERATIVE CANVAS","WEB WORKERS","BENTO UI","GLSL NOISE"],awards:["Awwwards Honorable Mention","FWA of the Day"],metrics:[{label:"Monthly Active Users",value:"1.2M+"},{label:"Design System Adoption",value:"100%"},{label:"Customer Retention",value:"91%"}],thumbnail:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",accentColor:"#4D6BFE",description:"An ultra-refined SaaS interface combining generative noise shaders, interactive bento grid layouts, and real-time neural canvas rendering.",challenge:"Rendering heavy multi-layered canvas previews without blocking standard interactive Vue state mutations.",solution:"Delegated background image synthesis to Web Workers while maintaining a lightweight GLSL post-processing pass on the main thread.",techStack:["Vue 3","TypeScript","Web Workers","TailwindCSS","GSAP Flip"]},{id:"chrono-pulse",number:"05",title:"CHRONO PULSE",subtitle:"Hyper-Performance Electric Hypercar Showcase",client:"Chrono Motors (Milan / Munich)",year:"2025",role:"Lead Creative Developer",category:"IMMERSIVE BRAND",tags:["3D CONFIGURATOR","THREE.JS","AUDIO SYNTH","GSAP SCROLL"],awards:["Awwwards Site of the Month Nominee","CSSDA Site of the Day"],metrics:[{label:"VIP Test Drive Bookings",value:"4,200+"},{label:"Global Reach",value:"3.8M Views"},{label:"Engagement Rate",value:"14.6%"}],thumbnail:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",accentColor:"#00F0FF",description:"A high-octane 3D car configurator featuring real-time carbon fiber shaders, aerodynamic particle wind tunnels, and dynamic engine acoustic synthesis.",challenge:"Smoothly streaming high-poly GLTF CAD models without long initial loader pauses.",solution:"Implemented Draco mesh compression, progressive LOD level-of-detail streaming, and Web Audio API Doppler effect synthesis.",techStack:["Vue 3","Three.js Draco","Custom GLSL Shaders","Web Audio API","GSAP"]}],QP={class:"max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"},eL={class:"flex items-center gap-3 mb-3"},tL={class:"max-w-7xl mx-auto mb-10 flex flex-wrap items-center gap-2.5"},nL=["onClick"],iL=["onClick"],rL={class:"relative h-64 sm:h-72 md:h-80 w-full overflow-hidden preserve-3d"},sL=["src","alt"],oL={class:"absolute top-4 sm:top-5 left-4 sm:left-5 right-4 sm:right-5 flex items-center justify-between z-10"},aL={class:"w-9 h-9 rounded-full bg-void-950/90 border border-white/20 backdrop-blur-md flex items-center justify-center text-xs font-mono font-bold text-white group-hover:bg-prism-cyan group-hover:text-black transition-colors shadow-lg"},lL={key:0,class:"absolute bottom-4 left-4 sm:left-5 z-10 flex items-center gap-1.5 text-[11px] font-mono text-prism-gold bg-void-950/90 backdrop-blur-md px-3 py-1 rounded-full border border-prism-gold/40 shadow-lg"},cL={class:"p-6 sm:p-8 space-y-4 text-left"},uL={class:"flex items-baseline justify-between gap-2"},fL={class:"text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight group-hover:text-prism-cyan transition-colors"},dL={class:"text-xs font-mono font-bold text-hud-text"},hL={class:"text-sm font-body text-zinc-300 line-clamp-2"},pL={class:"grid grid-cols-2 gap-3 pt-4 border-t border-white/5"},mL={class:"block text-[10px] font-mono uppercase text-hud-text"},gL={class:"flex flex-wrap gap-1.5 pt-2"},_L=Fn({__name:"ShowcaseSection",emits:["select-project"],setup(n,{emit:e}){gn.registerPlugin(ot);const t=e,{setCursor:i,resetCursor:r}=Zr(),{playHover:s,playClick:o}=xr(),a=ht(null),l=ht(null);let c=null;const u=ht("ALL"),f=[{id:"ALL",label:"All Cases",count:Xi.length},{id:"WEBGL 3D",label:"WebGL 3D",count:Xi.filter(v=>v.category.includes("3D")||v.category.includes("WebGL")).length},{id:"SPATIAL XR",label:"Spatial XR",count:Xi.filter(v=>v.category.includes("XR")||v.category.includes("Spatial")).length},{id:"AI PRODUCT",label:"GenAI Suites",count:Xi.filter(v=>v.category.includes("AI")).length},{id:"LUXURY MOTION",label:"Luxury & Auto",count:Xi.filter(v=>v.category.includes("Luxury")||v.category.includes("Motion")).length}],d=Dl(()=>u.value==="ALL"?Xi:u.value==="WEBGL 3D"?Xi.filter(v=>v.category.includes("3D")||v.category.includes("WebGL")):u.value==="SPATIAL XR"?Xi.filter(v=>v.category.includes("XR")||v.category.includes("Spatial")):u.value==="AI PRODUCT"?Xi.filter(v=>v.category.includes("AI")):u.value==="LUXURY MOTION"?Xi.filter(v=>v.category.includes("Luxury")||v.category.includes("Motion")):Xi);function h(v){o(),u.value=v,u0(()=>{_(),g()})}function _(){if(!l.value)return;const v=l.value.querySelectorAll(".project-card");gn.fromTo(v,{opacity:0,y:25,scale:.96},{opacity:1,y:0,scale:1,duration:.5,stagger:.06,ease:"power3.out"})}function g(){if(c&&(c.kill(),c=null),window.innerWidth>=768&&l.value&&a.value&&d.value.length>1){const v=l.value.scrollWidth-window.innerWidth+140;c=ot.create({trigger:a.value,start:"top top",end:()=>`+=${Math.max(v,600)}`,pin:!0,scrub:1,animation:gn.to(l.value,{x:()=>-v,ease:"none"}),invalidateOnRefresh:!0})}else l.value&&gn.set(l.value,{clearProps:"x,transform"})}function m(v,y){const b=y.getBoundingClientRect(),A=v.clientX-b.left,w=v.clientY-b.top,D=b.width/2,U=b.height/2,S=(w-U)/U*-8,P=(A-D)/D*8,F=y.querySelector(".card-image"),te=y.querySelector(".chromatic-ripple");F&&gn.to(F,{rotateX:S,rotateY:P,scale:1.06,duration:.4,ease:"power2.out",transformPerspective:800}),te&&gn.to(te,{x:A-D,y:w-U,opacity:.6,duration:.3})}function p(v){const y=v.querySelector(".card-image"),b=v.querySelector(".chromatic-ripple");y&&gn.to(y,{rotateX:0,rotateY:0,scale:1,duration:.6,ease:"power2.out"}),b&&gn.to(b,{opacity:0,duration:.5})}ir(()=>{g(),window.addEventListener("resize",g)}),Kr(()=>{c&&c.kill(),window.removeEventListener("resize",g)});function x(v){o(),t("select-project",v)}return(v,y)=>(Re(),We("section",{id:"works",ref_key:"sectionRef",ref:a,class:"relative min-h-screen py-24 px-4 md:px-10 z-20 select-none overflow-hidden"},[C("div",QP,[C("div",null,[C("div",eL,[Me(Qi,{variant:"cyan",dot:""},{default:Zt(()=>[...y[5]||(y[5]=[Wt(" Selected Works // 02 ",-1)])]),_:1}),y[6]||(y[6]=C("span",{class:"text-xs font-mono text-hud-text uppercase tracking-wider"}," Curated WebGL Case Studies ",-1))]),y[7]||(y[7]=C("h2",{class:"text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight"}," ARCHITECTED TO WIN. ",-1))]),y[8]||(y[8]=C("div",{class:"hidden md:flex items-center gap-4 text-xs font-mono text-hud-text"},[C("span",{class:"w-2 h-2 rounded-full bg-prism-cyan animate-ping"}),C("span",null,"SCROLL HORIZONTALLY TO EXPLORE CASES")],-1))]),C("div",tL,[(Re(),We(mt,null,sn(f,b=>C("button",{key:b.id,class:Xt(["px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 flex items-center gap-2 cursor-pointer border",[u.value===b.id?"bg-void-950/90 border-prism-cyan text-prism-cyan shadow-[0_0_16px_rgba(0,240,255,0.2)] font-bold":"bg-void-950/60 border-white/10 text-hud-text hover:text-white hover:border-white/25"]]),onClick:A=>h(b.id),onMouseenter:y[0]||(y[0]=A=>{j(i)("HOVER"),j(s)()}),onMouseleave:y[1]||(y[1]=(...A)=>j(r)&&j(r)(...A))},[C("span",null,Ie(b.label),1),C("span",{class:Xt(["px-1.5 py-0.2 rounded-full text-[10px]",u.value===b.id?"bg-prism-cyan/20 text-prism-cyan":"bg-white/5 text-zinc-500"])},Ie(b.count),3)],42,nL)),64))]),C("div",{ref_key:"trackRef",ref:l,class:"flex flex-col md:flex-row gap-8 md:gap-10 pb-8 will-change-transform"},[(Re(!0),We(mt,null,sn(d.value,b=>(Re(),We("div",{key:b.id,ref_for:!0,ref:A=>{},class:"project-card w-full md:w-[480px] lg:w-[540px] flex-shrink-0 group cursor-pointer",onClick:A=>x(b),onMousemove:y[2]||(y[2]=A=>m(A,v.$el)),onMouseleave:y[3]||(y[3]=A=>{p(v.$el),j(r)()}),onMouseenter:y[4]||(y[4]=A=>{j(i)("VIEW_CASE","VIEW CASE"),j(s)()})},[C("div",{class:"relative rounded-3xl bg-void-950/85 border border-white/10 overflow-hidden backdrop-blur-2xl transition-all duration-500 group-hover:border-white/30 group-hover:-translate-y-2 group-hover:shadow-[0_24px_60px_rgba(0,0,0,0.85)]",style:ri({borderColor:`${b.accentColor}22`})},[C("div",rL,[C("img",{src:b.thumbnail,alt:b.title,class:"card-image w-full h-full object-cover transition-transform duration-500 ease-out filter brightness-95"},null,8,sL),y[9]||(y[9]=C("div",{class:"chromatic-ripple absolute inset-0 opacity-0 pointer-events-none mix-blend-screen bg-gradient-to-tr from-prism-cyan/30 via-prism-magenta/30 to-prism-gold/20 filter blur-xl transition-opacity duration-300"},null,-1)),y[10]||(y[10]=C("div",{class:"absolute inset-0 bg-gradient-to-t from-void-950 via-void-950/30 to-transparent"},null,-1)),C("div",oL,[Me(Qi,{variant:"cyan",dot:""},{default:Zt(()=>[Wt(Ie(b.category),1)]),_:2},1024),C("span",aL,[Me(j(Cr),{class:"w-4 h-4"})])]),b.awards[0]?(Re(),We("div",lL,[Me(j(Tp),{class:"w-3.5 h-3.5"}),C("span",null,Ie(b.awards[0]),1)])):nr("",!0)]),C("div",cL,[C("div",uL,[C("h3",fL,Ie(b.title),1),C("span",dL," // "+Ie(b.number),1)]),C("p",hL,Ie(b.description),1),C("div",pL,[(Re(!0),We(mt,null,sn(b.metrics.slice(0,2),(A,w)=>(Re(),We("div",{key:w},[C("span",mL,Ie(A.label),1),C("span",{class:"text-lg font-display font-bold text-white",style:ri({color:b.accentColor})},Ie(A.value),5)]))),128))]),C("div",gL,[(Re(!0),We(mt,null,sn(b.tags.slice(0,3),A=>(Re(),We("span",{key:A,class:"px-2.5 py-0.5 text-[10px] font-mono text-hud-text rounded bg-white/5 border border-white/5"},Ie(A),1))),128))])])],4)],40,iL))),128))],512)],512))}}),vL=Rp(_L,[["__scopeId","data-v-abf1c576"]]),xL={class:"space-y-2 text-left select-none"},yL={class:"flex items-center justify-between"},SL={class:"text-xs font-mono uppercase text-hud-text tracking-wider"},bL={class:"relative flex items-center h-5"},ML=["min","max","step","value"],EL={key:0,class:"text-[10px] font-body text-zinc-400 leading-tight"},wL=Fn({__name:"UiSlider",props:{label:{},modelValue:{},min:{},max:{},step:{},unit:{default:""},accentColor:{default:"#00F0FF"},description:{default:""}},emits:["update:modelValue"],setup(n,{emit:e}){y1(o=>({v091589fa:o.accentColor}));const t=n,i=e,r=Dl(()=>(t.modelValue-t.min)/(t.max-t.min)*100);function s(o){const a=o.target;i("update:modelValue",parseFloat(a.value))}return(o,a)=>(Re(),We("div",xL,[C("div",yL,[C("span",SL,Ie(n.label),1),C("span",{class:"text-xs font-mono font-bold",style:ri({color:n.accentColor})},Ie(n.modelValue.toFixed(2))+Ie(n.unit),5)]),C("div",bL,[C("input",{type:"range",min:n.min,max:n.max,step:n.step,value:n.modelValue,class:"custom-slider w-full h-1.5 bg-void-900 rounded-lg appearance-none cursor-pointer focus:outline-none",style:ri({background:`linear-gradient(to right, ${n.accentColor} 0%, ${n.accentColor} ${r.value}%, #141622 ${r.value}%, #141622 100%)`}),onInput:s},null,44,ML)]),n.description?(Re(),We("p",EL,Ie(n.description),1)):nr("",!0)]))}}),jc=Rp(wL,[["__scopeId","data-v-ab6a4fe0"]]),TL={id:"shader-lab",class:"relative py-28 px-4 sm:px-8 md:px-10 max-w-7xl mx-auto z-20 select-none"},AL={class:"flex flex-wrap items-end justify-between gap-6 mb-12"},CL={class:"flex items-center gap-3 mb-3"},RL={class:"p-6 sm:p-8 md:p-10 rounded-3xl bg-void-950/85 border border-white/10 backdrop-blur-2xl shadow-2xl space-y-10"},PL={class:"space-y-4"},LL={class:"flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-300"},DL={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"},IL=["onClick"],UL={class:"text-xl"},NL={class:"space-y-0.5"},OL={class:"block text-xs font-display font-bold text-white"},FL={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2 border-t border-white/5"},kL={class:"space-y-4 pt-2 border-t border-white/5"},BL={class:"flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-300"},zL={class:"grid grid-cols-1 sm:grid-cols-3 gap-4"},HL=["onClick"],GL={class:"flex items-center justify-between mb-2"},VL={class:"font-display font-bold text-sm text-white"},WL={class:"flex items-center gap-1.5"},XL={class:"text-xs font-mono text-hud-text"},$L={class:"pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4"},YL={class:"flex items-center gap-3"},qL=Fn({__name:"ShaderLabSection",emits:["update-config"],setup(n,{emit:e}){const t=e,{setCursor:i,resetCursor:r}=Zr(),{playClick:s,playHover:o,playSwoosh:a}=xr(),l=Ca({shape:"icosahedron",dispersion:1,roughness:.08,transmission:.82,colorTheme:0,wireframe:!0,rotationSpeed:.65}),c={shape:"icosahedron",dispersion:1,roughness:.08,transmission:.82,colorTheme:0,wireframe:!0,rotationSpeed:.65},u=[{id:"icosahedron",name:"Diamond Icosahedron",icon:"💎"},{id:"torusKnot",name:"Quantum Torus Knot",icon:"🌀"},{id:"octahedron",name:"Cyber Octahedron",icon:"🔷"},{id:"dodecahedron",name:"Prismatic Dodecahedron",icon:"⭐"}],f=[{id:0,name:"Prism Rainbow & Cyan",color:"from-prism-cyan to-prism-magenta",dots:["#00F0FF","#FF2E93","#FFD166"],desc:"Full visible light spectrum"},{id:1,name:"Cyber Magenta & Violet",color:"from-prism-magenta to-prism-violet",dots:["#FF2E93","#7B2CBF","#FF80BF"],desc:"Deep ultraviolet laser caustics"},{id:2,name:"Quantum Gold & Amber",color:"from-prism-gold to-amber-600",dots:["#FFD166","#FF9F1C","#E71D36"],desc:"Warm radiant luxury photons"}];function d(p,x){l[p]=x,t("update-config",{[p]:x})}function h(p){a(),l.shape=p,t("update-config",{shape:p})}function _(p){s(),l.colorTheme=p,t("update-config",{colorTheme:p})}function g(){s(),l.wireframe=!l.wireframe,t("update-config",{wireframe:l.wireframe})}function m(){s(),Object.assign(l,c),t("update-config",{...c})}return(p,x)=>(Re(),We("section",TL,[C("div",AL,[C("div",null,[C("div",CL,[Me(Qi,{variant:"gold",dot:""},{default:Zt(()=>[...x[12]||(x[12]=[Wt(" Interactive 3D Lab // 03 ",-1)])]),_:1}),x[13]||(x[13]=C("span",{class:"text-xs font-mono text-hud-text uppercase tracking-wider"}," Real-Time GLSL Shaders & Physics Sandbox ",-1))]),x[14]||(x[14]=C("h2",{class:"text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight"}," TWEAK THE CRYSTAL. ",-1))]),C("button",{class:"flex items-center gap-2 px-4 py-2 rounded-full bg-void-950/80 border border-white/10 hover:border-white/30 text-xs font-mono text-hud-text hover:text-white transition-all cursor-pointer shadow-lg",onClick:m,onMouseenter:x[0]||(x[0]=v=>j(i)("HOVER")),onMouseleave:x[1]||(x[1]=(...v)=>j(r)&&j(r)(...v))},[Me(j(MR),{class:"w-3.5 h-3.5"}),x[15]||(x[15]=C("span",null,"RESET DEFAULTS",-1))],32)]),C("div",RL,[C("div",PL,[C("div",LL,[Me(j(hR),{class:"w-4 h-4 text-prism-cyan"}),x[16]||(x[16]=C("span",null,"Select 3D Geometry Shape",-1))]),C("div",DL,[(Re(),We(mt,null,sn(u,v=>C("button",{key:v.id,class:Xt(["p-4 rounded-2xl border text-left transition-all duration-300 flex items-center gap-3 cursor-pointer",[l.shape===v.id?"bg-void-900 border-prism-cyan shadow-[0_0_20px_rgba(0,240,255,0.15)] ring-1 ring-prism-cyan":"bg-void-950/60 border-white/5 hover:border-white/20 text-zinc-400 hover:text-white"]]),onClick:y=>h(v.id),onMouseenter:x[2]||(x[2]=y=>{j(i)("HOVER"),j(o)()}),onMouseleave:x[3]||(x[3]=(...y)=>j(r)&&j(r)(...y))},[C("span",UL,Ie(v.icon),1),C("div",NL,[C("span",OL,Ie(v.name),1),x[17]||(x[17]=C("span",{class:"block text-[10px] font-mono text-hud-text"},"Dual-Pass Facets",-1))])],42,IL)),64))])]),C("div",FL,[Me(jc,{label:"Light Dispersion","model-value":l.dispersion,min:.1,max:3,step:.05,unit:"","accent-color":"#00F0FF",description:"Calculates chromatic separation of refracted RGB spectral rays.","onUpdate:modelValue":x[4]||(x[4]=v=>d("dispersion",v))},null,8,["model-value"]),Me(jc,{label:"Micro-Roughness","model-value":l.roughness,min:.01,max:.5,step:.01,unit:"","accent-color":"#FF2E93",description:"Controls specular crystal gleam and facet sharpness.","onUpdate:modelValue":x[5]||(x[5]=v=>d("roughness",v))},null,8,["model-value"]),Me(jc,{label:"Transmission Clarity","model-value":l.transmission,min:.1,max:1,step:.01,unit:"%","accent-color":"#FFD166",description:"Simulates optical light passing through solid dielectric crystal.","onUpdate:modelValue":x[6]||(x[6]=v=>d("transmission",v))},null,8,["model-value"]),Me(jc,{label:"Orbital Speed","model-value":l.rotationSpeed,min:.1,max:2.5,step:.05,unit:"x","accent-color":"#34D399",description:"Angular velocity of the 3D crystal polyhedron in space.","onUpdate:modelValue":x[7]||(x[7]=v=>d("rotationSpeed",v))},null,8,["model-value"])]),C("div",kL,[C("div",BL,[Me(j(uy),{class:"w-4 h-4 text-prism-gold"}),x[18]||(x[18]=C("span",null,"Spectral Color Themes",-1))]),C("div",zL,[(Re(),We(mt,null,sn(f,v=>C("button",{key:v.id,class:Xt(["p-5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group cursor-pointer",[l.colorTheme===v.id?"bg-void-900 border-prism-cyan shadow-[0_0_24px_rgba(0,240,255,0.15)] ring-1 ring-prism-cyan":"bg-void-950/60 border-white/5 hover:border-white/20 text-zinc-400 hover:text-white"]]),onClick:y=>_(v.id),onMouseenter:x[8]||(x[8]=y=>{j(i)("HOVER"),j(o)()}),onMouseleave:x[9]||(x[9]=(...y)=>j(r)&&j(r)(...y))},[C("div",GL,[C("span",VL,Ie(v.name),1),C("div",WL,[(Re(!0),We(mt,null,sn(v.dots,(y,b)=>(Re(),We("span",{key:b,class:"w-2.5 h-2.5 rounded-full",style:ri({backgroundColor:y})},null,4))),128))])]),C("p",XL,Ie(v.desc),1)],42,HL)),64))])]),C("div",$L,[C("div",YL,[C("button",{class:Xt(["flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-mono transition-all cursor-pointer",[l.wireframe?"bg-prism-cyan/15 border-prism-cyan text-prism-cyan shadow-[0_0_12px_rgba(0,240,255,0.2)]":"bg-void-900 border-white/10 text-hud-text hover:text-white"]]),onClick:g,onMouseenter:x[10]||(x[10]=v=>j(i)("HOVER")),onMouseleave:x[11]||(x[11]=(...v)=>j(r)&&j(r)(...v))},[Me(j(vR),{class:"w-3.5 h-3.5"}),C("span",null,"WIREFRAME: "+Ie(l.wireframe?"ON":"OFF"),1)],34)]),x[19]||(x[19]=C("div",{class:"text-xs font-mono text-hud-text"},[C("span",null,"PIPELINE: "),C("span",{class:"text-white font-bold"},"THREE.JS PMREM + DUAL-PASS GLSL")],-1))])])]))}}),jL=[{id:"webgl-3d",number:"01",title:"Creative WebGL & 3D Shaders",tagline:"Hyper-immersive, awards-winning interactive 3D web experiences.",description:"We engineer bespoke WebGL scenes, custom GLSL vertex/fragment shaders, particle fluid dynamics, and optical dispersion models that turn standard websites into world-class digital art.",features:["Custom GLSL Vertex & Fragment Shaders","Interactive 3D Meshes & GPGPU Particles","Zero-Latency 60/120 FPS Performance Architecture","Photorealistic PBR Materials & Caustics"],icon:"Sparkles",badge:"FLAGSHIP EXPERTISE"},{id:"motion-gsap",number:"02",title:"Kinetic Motion & Micro-Physics",tagline:"Fluid choreography engineered with mathematical precision.",description:"Every scroll, hover, and drag carries organic weight. We leverage GSAP 3, Lenis inertial physics, and responsive SVG/Canvas choreography to captivate visitors and drive conversions.",features:["Inertial Lenis Smooth Scroll Architecture","GSAP ScrollTrigger Timeline Orchestration","Split-Type Kinetic Typography Reveals","Magnetic Cursor Trailing & Spring Mechanics"],icon:"Activity",badge:"AWARDS BENCHMARK"},{id:"brand-experience",number:"03",title:"Digital Brand Architecture & UI/UX",tagline:"Avant-garde digital presence for high-growth tech & luxury.",description:"From Silicon Valley AI unicorns to European luxury ateliers, we architect distinctive design systems, Bento Grid UI frameworks, and interactive product narratives.",features:["Avant-Garde Typography & Design Tokens","Interactive Bento Grids & HUD Overlays","High-Conversion Landing Page Archetypes","Sound Design & Web Audio API Synthesis"],icon:"Layers",badge:"HIGH IMPACT"},{id:"fullstack-arch",number:"04",title:"High-Performance Frontend Engineering",tagline:"Enterprise-grade stability meets creative avant-garde execution.",description:"We ensure your creative website loads instantaneously worldwide, passes 100/100 Lighthouse audits, is fully accessible, and scales smoothly across every device.",features:["Vue 3 / TypeScript Clean Architecture","Adaptive DPR & Mobile GPU Throttling","Automated Asset Optimization & Zero-Leak GC","Complete SEO, OpenGraph & Structured Data"],icon:"Cpu",badge:"ENGINEERING EXCELLENCE"}],KL={id:"services",class:"relative py-28 px-4 md:px-10 max-w-7xl mx-auto z-20 select-none"},ZL={class:"flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16"},JL={class:"flex items-center gap-3 mb-3"},QL={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},e3={class:"relative z-10 space-y-6"},t3={class:"flex items-center justify-between"},n3={class:"w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-prism-cyan group-hover:scale-110 transition-transform"},i3={class:"flex items-baseline gap-2 mb-2"},r3={class:"text-2xl sm:text-3xl font-display font-bold text-white tracking-tight group-hover:text-prism-cyan transition-colors"},s3={class:"text-xs font-mono text-hud-text font-bold"},o3={class:"text-sm font-display font-medium text-prism-gold mb-3"},a3={class:"text-sm font-body text-zinc-300 leading-relaxed"},l3={class:"space-y-2 pt-4 border-t border-white/5"},c3={class:"relative z-10 pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-hud-text group-hover:text-white transition-colors"},u3=Fn({__name:"ServicesBento",setup(n){const{setCursor:e,resetCursor:t}=Zr(),{playHover:i}=xr(),r={Sparkles:uy,Activity:ay,Layers:yR,Cpu:Cp};function s(o,a){const l=a.getBoundingClientRect(),c=o.clientX-l.left,u=o.clientY-l.top;a.style.setProperty("--mouse-x",`${c}px`),a.style.setProperty("--mouse-y",`${u}px`)}return(o,a)=>(Re(),We("section",KL,[C("div",ZL,[C("div",null,[C("div",JL,[Me(Qi,{variant:"cyan",dot:""},{default:Zt(()=>[...a[3]||(a[3]=[Wt(" Capabilities // 04 ",-1)])]),_:1}),a[4]||(a[4]=C("span",{class:"text-xs font-mono text-hud-text uppercase tracking-wider"}," Full-Spectrum Creative Engineering ",-1))]),a[5]||(a[5]=C("h2",{class:"text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight"}," CORE CAPABILITIES. ",-1))]),a[6]||(a[6]=C("p",{class:"text-sm font-body text-zinc-400 max-w-md"}," We bridge the gap between avant-garde visual artistry and bulletproof software engineering. ",-1))]),C("div",QL,[(Re(!0),We(mt,null,sn(j(jL),(l,c)=>(Re(),We("div",{key:l.id,class:"relative p-8 md:p-10 rounded-3xl bg-void-950/70 border border-white/10 backdrop-blur-2xl overflow-hidden group hover:border-white/25 transition-all duration-300 flex flex-col justify-between",onMousemove:a[0]||(a[0]=u=>s(u,u.currentTarget)),onMouseenter:a[1]||(a[1]=u=>{j(e)("HOVER"),j(i)()}),onMouseleave:a[2]||(a[2]=(...u)=>j(t)&&j(t)(...u))},[a[8]||(a[8]=C("div",{class:"pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300",style:{background:"radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(0, 240, 255, 0.08), transparent 40%)"}},null,-1)),C("div",e3,[C("div",t3,[C("div",n3,[(Re(),_n(kh(r[l.icon]),{class:"w-6 h-6"}))]),Me(Qi,{variant:"glass"},{default:Zt(()=>[Wt(Ie(l.badge),1)]),_:2},1024)]),C("div",null,[C("div",i3,[C("h3",r3,Ie(l.title),1),C("span",s3,"// "+Ie(l.number),1)]),C("p",o3,Ie(l.tagline),1),C("p",a3,Ie(l.description),1)]),C("div",l3,[(Re(!0),We(mt,null,sn(l.features,(u,f)=>(Re(),We("div",{key:f,class:"flex items-center gap-2.5 text-xs font-mono text-zinc-300"},[Me(j(Ap),{class:"w-3.5 h-3.5 text-prism-cyan flex-shrink-0"}),C("span",null,Ie(u),1)]))),128))])]),C("div",c3,[a[7]||(a[7]=C("span",null,"DEPLOYABLE WITHIN 2-4 WEEKS",-1)),Me(j(ly),{class:"w-4 h-4 text-prism-cyan group-hover:translate-x-1 transition-transform"})])],32))),128))])]))}}),f3={id:"estimator",class:"relative py-28 px-4 sm:px-8 md:px-10 max-w-7xl mx-auto z-20 select-none text-left"},d3={class:"max-w-3xl mb-12 space-y-3"},h3={class:"flex items-center gap-3"},p3={class:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"},m3={class:"lg:col-span-7 p-6 sm:p-8 md:p-10 rounded-3xl bg-void-950/85 border border-white/10 backdrop-blur-2xl shadow-2xl space-y-8"},g3={class:"space-y-4"},_3={class:"grid grid-cols-1 sm:grid-cols-2 gap-3"},v3=["onClick"],x3={class:"flex items-center justify-between"},y3={class:"font-display font-bold text-sm text-white"},S3={class:"text-xs font-mono text-prism-cyan font-bold"},b3={class:"text-[11px] font-body text-zinc-400 leading-relaxed"},M3={class:"space-y-4 pt-4 border-t border-white/5"},E3={class:"grid grid-cols-1 sm:grid-cols-2 gap-3"},w3=["onClick"],T3={class:"flex items-center gap-2.5"},A3={class:"text-xs font-body font-medium"},C3={class:"text-xs font-mono text-zinc-400 font-bold whitespace-nowrap"},R3={class:"space-y-4 pt-4 border-t border-white/5"},P3={class:"grid grid-cols-1 sm:grid-cols-3 gap-3"},L3=["onClick"],D3={class:"block text-xs font-display font-bold text-white"},I3={class:"block text-[10px] font-mono text-prism-gold"},U3={class:"lg:col-span-5 sticky top-28 p-6 sm:p-8 rounded-3xl bg-void-950/90 border border-white/15 backdrop-blur-2xl shadow-2xl space-y-6"},N3={class:"flex items-center justify-between pb-4 border-b border-white/10"},O3={class:"flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-hud-text"},F3={class:"space-y-1"},k3={class:"text-3xl sm:text-4xl xl:text-5xl font-display font-black text-white tracking-tight"},B3={class:"space-y-2.5 py-4 border-y border-white/5 text-xs font-mono text-zinc-300"},z3={class:"flex items-center gap-2"},H3={class:"flex items-center gap-2"},G3={class:"flex items-center gap-2"},V3={class:"flex items-center gap-2"},W3=Fn({__name:"CostEstimator",emits:["inject-scope"],setup(n,{emit:e}){const t=e,{setCursor:i,resetCursor:r}=Zr(),{playClick:s,playHover:o,playSwoosh:a}=xr(),{scrollTo:l}=cf(),c=[{id:"webgl-atelier",name:"Flagship WebGL Atelier",basePrice:7500,desc:"Bespoke 3D brand launch site with GSAP kinetic choreography."},{id:"product-config",name:"3D Product Configurator",basePrice:5500,desc:"Real-time interactive 3D viewer with materials & lighting."},{id:"spatial-xr",name:"Spatial XR & Immersive Web",basePrice:9e3,desc:"Cutting-edge WebXR spatial computing experience."},{id:"motion-sprint",name:"Motion Engineering Sprint",basePrice:3500,desc:"Front-end subcontracting for complex WebGL/GSAP modules."}],u=ht(c[0]),f=ht([{id:"glsl",name:"Custom GLSL Shaders & GPGPU Particles",price:2e3,selected:!0},{id:"physics",name:"Physics Engine & Dynamic Collisions",price:1500,selected:!1},{id:"audio",name:"Procedural Web Audio Synthesizer",price:800,selected:!0},{id:"cms",name:"Headless CMS & Global CDN Pipeline",price:1800,selected:!1}]),d=[{id:"rush",name:"Express Launch (2–3 Weeks)",multiplier:1.25,badge:"High Priority"},{id:"standard",name:"Standard Agile (4–6 Weeks)",multiplier:1,badge:"Recommended"},{id:"enterprise",name:"Quarterly Suite (8+ Weeks)",multiplier:1.15,badge:"Full Spectrum"}],h=ht(d[1]),_=Dl(()=>{const y=u.value.basePrice,b=f.value.filter(w=>w.selected).reduce((w,D)=>w+D.price,0),A=(y+b)*h.value.multiplier;return Math.round(A/100)*100}),g=Dl(()=>Math.round(_.value*1.35/100)*100);function m(y){s(),y.selected=!y.selected}function p(y){a(),u.value=y}function x(y){s(),h.value=y}function v(){a();const y=f.value.filter(A=>A.selected).map(A=>A.name).join(", "),b=`$${(_.value/1e3).toFixed(0)}k – $${(g.value/1e3).toFixed(0)}k`;t("inject-scope",{service:u.value.name,budget:"$10k – $20k",summary:`Scope: ${u.value.name} | Timeline: ${h.value.name} | Addons: ${y||"None"} | Calculated Est: ${b}`}),l("#contact")}return(y,b)=>(Re(),We("section",f3,[C("div",d3,[C("div",h3,[Me(Qi,{variant:"cyan",dot:""},{default:Zt(()=>[...b[6]||(b[6]=[Wt(" Transparent Pricing Engine ",-1)])]),_:1}),b[7]||(b[7]=C("span",{class:"text-xs font-mono text-hud-text uppercase tracking-widest"}," Project Cost Estimator ",-1))]),b[8]||(b[8]=C("h2",{class:"text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight"}," CALCULATE YOUR ROI. ",-1)),b[9]||(b[9]=C("p",{class:"text-sm sm:text-base font-body text-zinc-400"}," Tailor your technical scope and get an instantaneous investment estimate designed for high-ticket commercial impact. ",-1))]),C("div",p3,[C("div",m3,[C("div",g3,[b[10]||(b[10]=C("label",{class:"block text-xs font-mono uppercase tracking-widest text-zinc-300"}," 1. Select Deliverable Archetype ",-1)),C("div",_3,[(Re(),We(mt,null,sn(c,A=>C("button",{key:A.id,type:"button",class:Xt(["p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer space-y-1.5",[u.value.id===A.id?"bg-void-900 border-prism-cyan shadow-[0_0_20px_rgba(0,240,255,0.15)] ring-1 ring-prism-cyan":"bg-void-950/60 border-white/5 hover:border-white/20 text-zinc-400 hover:text-white"]]),onClick:w=>p(A),onMouseenter:b[0]||(b[0]=w=>{j(i)("HOVER"),j(o)()}),onMouseleave:b[1]||(b[1]=(...w)=>j(r)&&j(r)(...w))},[C("div",x3,[C("span",y3,Ie(A.name),1),C("span",S3,"$"+Ie(A.basePrice.toLocaleString())+"+",1)]),C("p",b3,Ie(A.desc),1)],42,v3)),64))])]),C("div",M3,[b[11]||(b[11]=C("label",{class:"block text-xs font-mono uppercase tracking-widest text-zinc-300"}," 2. Technical Depth & Visual Capabilities ",-1)),C("div",E3,[(Re(!0),We(mt,null,sn(f.value,A=>(Re(),We("button",{key:A.id,type:"button",class:Xt(["p-3.5 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between gap-3 cursor-pointer",[A.selected?"bg-void-900 border-prism-magenta/80 text-white shadow-[0_0_16px_rgba(255,46,147,0.15)]":"bg-void-950/60 border-white/5 text-zinc-400 hover:border-white/20 hover:text-white"]]),onClick:w=>m(A),onMouseenter:b[2]||(b[2]=w=>j(i)("HOVER")),onMouseleave:b[3]||(b[3]=(...w)=>j(r)&&j(r)(...w))},[C("div",T3,[C("div",{class:Xt(["w-5 h-5 rounded-md border flex items-center justify-center transition-colors",A.selected?"bg-prism-magenta border-prism-magenta text-black":"border-white/20"])},[A.selected?(Re(),_n(j(qc),{key:0,class:"w-3.5 h-3.5 stroke-[3]"})):nr("",!0)],2),C("span",A3,Ie(A.name),1)]),C("span",C3,"+$"+Ie(A.price),1)],42,w3))),128))])]),C("div",R3,[b[12]||(b[12]=C("label",{class:"block text-xs font-mono uppercase tracking-widest text-zinc-300"}," 3. Production Velocity & Timeline ",-1)),C("div",P3,[(Re(),We(mt,null,sn(d,A=>C("button",{key:A.id,type:"button",class:Xt(["p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer space-y-1",[h.value.id===A.id?"bg-void-900 border-prism-gold shadow-[0_0_16px_rgba(255,209,102,0.15)] ring-1 ring-prism-gold":"bg-void-950/60 border-white/5 hover:border-white/20 text-zinc-400 hover:text-white"]]),onClick:w=>x(A),onMouseenter:b[4]||(b[4]=w=>j(i)("HOVER")),onMouseleave:b[5]||(b[5]=(...w)=>j(r)&&j(r)(...w))},[C("span",D3,Ie(A.name),1),C("span",I3,Ie(A.badge),1)],42,L3)),64))])])]),C("div",U3,[C("div",N3,[C("div",O3,[Me(j(pR),{class:"w-4 h-4 text-prism-cyan"}),b[13]||(b[13]=C("span",null,"Investment Estimate",-1))]),b[14]||(b[14]=C("span",{class:"text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-400/20 text-emerald-400 border border-emerald-400/30"}," High-Ticket ROI ",-1))]),C("div",F3,[b[16]||(b[16]=C("span",{class:"text-xs font-mono uppercase tracking-wider text-hud-text"},"ESTIMATED BALLPARK",-1)),C("div",k3,[Wt(" $"+Ie(_.value.toLocaleString())+" ",1),b[15]||(b[15]=C("span",{class:"text-xl sm:text-2xl font-body font-normal text-zinc-500"},"–",-1)),Wt(" $"+Ie(g.value.toLocaleString()),1)]),b[17]||(b[17]=C("p",{class:"text-xs font-mono text-zinc-400 pt-1"}," USD // Fixed-price milestone billing with zero hidden costs. ",-1))]),C("div",B3,[C("div",z3,[Me(j(qc),{class:"w-4 h-4 text-prism-cyan flex-shrink-0"}),b[18]||(b[18]=C("span",null,"120 FPS WebGL Performance Guarantee",-1))]),C("div",H3,[Me(j(qc),{class:"w-4 h-4 text-prism-cyan flex-shrink-0"}),b[19]||(b[19]=C("span",null,"100% Full IP & Source Code Ownership",-1))]),C("div",G3,[Me(j(qc),{class:"w-4 h-4 text-prism-cyan flex-shrink-0"}),b[20]||(b[20]=C("span",null,"Awwwards & FWA Quality Benchmark",-1))]),C("div",V3,[Me(j(_R),{class:"w-4 h-4 text-prism-gold flex-shrink-0"}),C("span",null,"Estimated Delivery: "+Ie(h.value.name.split(" ")[0])+" ("+Ie(h.value.name.split("(")[1].replace(")",""))+")",1)])]),Me(Aa,{variant:"primary",size:"lg",class:"w-full justify-center",onClick:v},{default:Zt(()=>[b[21]||(b[21]=C("span",null,"Inject Scope Into Brief",-1)),Me(j(ly),{class:"w-4 h-4"})]),_:1}),b[22]||(b[22]=C("p",{class:"text-[11px] font-mono text-zinc-500 text-center"}," Transfers configured scope directly to the project submission form. ",-1))])])]))}}),X3={id:"contact",class:"relative py-28 px-4 sm:px-8 md:px-10 max-w-7xl mx-auto z-20 select-none"},$3={class:"text-center max-w-3xl mx-auto mb-16 space-y-4"},Y3={class:"flex items-center justify-center gap-3"},q3={class:"max-w-4xl mx-auto p-6 sm:p-8 md:p-12 rounded-3xl bg-void-950/85 border border-white/10 backdrop-blur-2xl shadow-2xl text-left"},j3={key:0,class:"py-16 text-center space-y-6 animate-fade-in"},K3={class:"w-16 h-16 rounded-full bg-emerald-400/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_32px_rgba(52,211,153,0.3)]"},Z3={class:"space-y-2"},J3={class:"text-sm font-mono text-hud-text max-w-md mx-auto"},Q3={class:"space-y-3"},eD={class:"flex flex-wrap gap-2.5"},tD=["onClick"],nD={class:"space-y-3"},iD={class:"flex flex-wrap gap-2.5"},rD=["onClick"],sD={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},oD={class:"space-y-2"},aD={class:"space-y-2"},lD={class:"space-y-2"},cD={class:"flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5"},uD={class:"flex items-center gap-2 text-xs font-mono text-hud-text"},fD={key:0,class:"animate-pulse"},dD={key:1,class:"flex items-center gap-2"},hD=Fn({__name:"ContactSection",setup(n,{expose:e}){const{setCursor:t,resetCursor:i}=Zr(),{playClick:r,playSwoosh:s}=xr(),o=Ca({name:"",email:"",service:"WebGL & 3D Experience",budget:"$5k - $10k",message:""}),a=ht(!1),l=ht(!1),c=["WebGL & 3D Experience","Flagship Creative Site","3D Product Configurator","Subcontracting / Motion"],u=["$3k - $5k","$5k - $10k","$10k - $20k","$20k+"];function f(){r(),a.value=!0,setTimeout(()=>{a.value=!1,l.value=!0,s()},1200)}function d(){l.value=!1,o.name="",o.email="",o.message=""}function h(_){c.includes(_.service)&&(o.service=_.service),o.budget=_.budget,o.message=_.summary}return e({setCustomScope:h}),(_,g)=>(Re(),We("section",X3,[C("div",$3,[C("div",Y3,[Me(Qi,{variant:"magenta",dot:""},{default:Zt(()=>[...g[7]||(g[7]=[Wt(" Initialize Collaboration // 05 ",-1)])]),_:1})]),g[8]||(g[8]=C("h2",{class:"text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight"}," LET'S BUILD A MASTERPIECE. ",-1)),g[9]||(g[9]=C("p",{class:"text-sm sm:text-base font-body text-zinc-300"}," Ready to captivate your audience and command premium industry authority? Fill out the brief below or contact directly. ",-1))]),C("div",q3,[l.value?(Re(),We("div",j3,[C("div",K3,[Me(j(Ap),{class:"w-8 h-8"})]),C("div",Z3,[g[10]||(g[10]=C("h3",{class:"text-2xl sm:text-3xl font-display font-bold text-white"},"INQUIRY RECEIVED.",-1)),C("p",J3," Thank you "+Ie(o.name)+". Our creative directors will review your brief and reply within 12 business hours. ",1)]),Me(Aa,{variant:"primary",size:"md",onClick:d},{default:Zt(()=>[...g[11]||(g[11]=[Wt(" Send Another Message ",-1)])]),_:1})])):(Re(),We("form",{key:1,class:"space-y-8",onSubmit:Pi(f,["prevent"])},[C("div",Q3,[g[12]||(g[12]=C("label",{class:"block text-xs font-mono uppercase text-hud-text tracking-wider"}," 1. Select Project Scope ",-1)),C("div",eD,[(Re(),We(mt,null,sn(c,m=>C("button",{key:m,type:"button",class:Xt(["px-4 py-2.5 text-xs font-mono rounded-full border transition-all cursor-pointer",[o.service===m?"bg-prism-cyan/20 border-prism-cyan text-prism-cyan shadow-[0_0_16px_rgba(0,240,255,0.2)] font-bold":"bg-void-900/60 border-white/10 text-hud-text hover:text-white hover:border-white/20"]]),onClick:p=>{o.service=m,j(r)()},onMouseenter:g[0]||(g[0]=p=>j(t)("HOVER")),onMouseleave:g[1]||(g[1]=(...p)=>j(i)&&j(i)(...p))},Ie(m),43,tD)),64))])]),C("div",nD,[g[13]||(g[13]=C("label",{class:"block text-xs font-mono uppercase text-hud-text tracking-wider"}," 2. Anticipated Investment Tier ",-1)),C("div",iD,[(Re(),We(mt,null,sn(u,m=>C("button",{key:m,type:"button",class:Xt(["px-4 py-2.5 text-xs font-mono rounded-full border transition-all cursor-pointer",[o.budget===m?"bg-prism-magenta/20 border-prism-magenta text-prism-magenta shadow-[0_0_16px_rgba(255,46,147,0.2)] font-bold":"bg-void-900/60 border-white/10 text-hud-text hover:text-white hover:border-white/20"]]),onClick:p=>{o.budget=m,j(r)()},onMouseenter:g[2]||(g[2]=p=>j(t)("HOVER")),onMouseleave:g[3]||(g[3]=(...p)=>j(i)&&j(i)(...p))},Ie(m),43,rD)),64))])]),C("div",sD,[C("div",oD,[g[14]||(g[14]=C("label",{class:"block text-xs font-mono uppercase text-hud-text tracking-wider"}," Your Name / Studio ",-1)),xf(C("input",{"onUpdate:modelValue":g[4]||(g[4]=m=>o.name=m),type:"text",required:"",placeholder:"e.g. Alex Vance",class:"w-full px-5 py-4 rounded-2xl bg-void-900/80 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-prism-cyan focus:ring-1 focus:ring-prism-cyan transition-all text-sm font-body"},null,512),[[Af,o.name]])]),C("div",aD,[g[15]||(g[15]=C("label",{class:"block text-xs font-mono uppercase text-hud-text tracking-wider"}," Work Email Address ",-1)),xf(C("input",{"onUpdate:modelValue":g[5]||(g[5]=m=>o.email=m),type:"email",required:"",placeholder:"alex@company.com",class:"w-full px-5 py-4 rounded-2xl bg-void-900/80 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-prism-cyan focus:ring-1 focus:ring-prism-cyan transition-all text-sm font-body"},null,512),[[Af,o.email]])])]),C("div",lD,[g[16]||(g[16]=C("label",{class:"block text-xs font-mono uppercase text-hud-text tracking-wider"}," Project Overview & Goals ",-1)),xf(C("textarea",{"onUpdate:modelValue":g[6]||(g[6]=m=>o.message=m),rows:"4",required:"",placeholder:"Tell us about your brand, launch deadlines, or desired interactive features...",class:"w-full px-5 py-4 rounded-2xl bg-void-900/80 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-prism-cyan focus:ring-1 focus:ring-prism-cyan transition-all text-sm font-body resize-none"},null,512),[[Af,o.message]])]),C("div",cD,[C("div",uD,[Me(j(cy),{class:"w-4 h-4 text-emerald-400"}),g[17]||(g[17]=C("span",null,"NDA & Confidentiality Guaranteed",-1))]),Me(Aa,{variant:"primary",size:"lg",disabled:a.value},{default:Zt(()=>[a.value?(Re(),We("span",fD,"Transmitting Brief...")):(Re(),We("span",dD,[g[18]||(g[18]=C("span",null,"Submit Project Brief",-1)),Me(j(ER),{class:"w-4 h-4"})]))]),_:1},8,["disabled"])])],32))])]))}}),pD={class:"relative min-h-screen bg-void-950 text-white selection:bg-prism-cyan selection:text-black"},mD={class:"content-layer"},gD=Fn({__name:"App",setup(n){const e=ht(null);let t=null;const{initLenis:i}=cf();let r;const s=ht(null),o=ht(!1),a=ht(null);function l(d){s.value=d,o.value=!0}function c(){o.value=!1}function u(d){t&&t.updateLabConfig(d)}function f(d){a.value&&a.value.setCustomScope(d)}return ir(()=>{r=i(),e.value&&(t=new O2(e.value)),window.addEventListener("scroll",()=>{if(t){const d=document.documentElement.scrollHeight-window.innerHeight,h=d>0?window.scrollY/d:0;t.setScrollProgress(h)}},{passive:!0})}),Kr(()=>{r&&r(),t&&t.destroy()}),(d,h)=>(Re(),We("div",pD,[C("canvas",{id:"webgl-canvas",ref_key:"canvasRef",ref:e},null,512),h[0]||(h[0]=C("div",{class:"grain-overlay"},null,-1)),Me(eP),Me(kR),C("main",mD,[Me(WP),Me(JP),Me(vL,{onSelectProject:l}),Me(qL,{onUpdateConfig:u}),Me(u3),Me(W3,{onInjectScope:f}),Me(hD,{ref_key:"contactSectionRef",ref:a},null,512)]),Me(HP),Me(ZR),Me(AP,{"is-open":o.value,project:s.value,onClose:c},null,8,["is-open","project"])]))}}),_D=H1(gD);_D.mount("#app");
