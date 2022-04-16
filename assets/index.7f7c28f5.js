const gc=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};gc();function vs(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const mc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_c=vs(mc);function po(t){return!!t||t===""}function ys(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=de(r)?bc(r):ys(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(de(t))return t;if(he(t))return t}}const vc=/;(?![^(]*\))/g,yc=/:(.+)/;function bc(t){const e={};return t.split(vc).forEach(n=>{if(n){const r=n.split(yc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function bs(t){let e="";if(de(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const r=bs(t[n]);r&&(e+=r+" ")}else if(he(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Z={},Ht=[],Ne=()=>{},Ic=()=>!1,Ec=/^on[^a-z]/,gr=t=>Ec.test(t),Is=t=>t.startsWith("onUpdate:"),ve=Object.assign,Es=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},wc=Object.prototype.hasOwnProperty,K=(t,e)=>wc.call(t,e),$=Array.isArray,pn=t=>mr(t)==="[object Map]",Tc=t=>mr(t)==="[object Set]",j=t=>typeof t=="function",de=t=>typeof t=="string",ws=t=>typeof t=="symbol",he=t=>t!==null&&typeof t=="object",go=t=>he(t)&&j(t.then)&&j(t.catch),Rc=Object.prototype.toString,mr=t=>Rc.call(t),Sc=t=>mr(t).slice(8,-1),Ac=t=>mr(t)==="[object Object]",Ts=t=>de(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Gn=vs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_r=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Cc=/-(\w)/g,zt=_r(t=>t.replace(Cc,(e,n)=>n?n.toUpperCase():"")),Oc=/\B([A-Z])/g,Xt=_r(t=>t.replace(Oc,"-$1").toLowerCase()),mo=_r(t=>t.charAt(0).toUpperCase()+t.slice(1)),Mr=_r(t=>t?`on${mo(t)}`:""),wn=(t,e)=>!Object.is(t,e),Jn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},tr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Kr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ni;const Pc=()=>ni||(ni=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Fe;class _o{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Fe&&(this.parent=Fe,this.index=(Fe.scopes||(Fe.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Fe;try{return Fe=this,e()}finally{Fe=n}}}on(){Fe=this}off(){Fe=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.active=!1}}}function vo(t){return new _o(t)}function kc(t,e=Fe){e&&e.active&&e.effects.push(t)}const Rs=t=>{const e=new Set(t);return e.w=0,e.n=0,e},yo=t=>(t.w&gt)>0,bo=t=>(t.n&gt)>0,Nc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=gt},Mc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];yo(s)&&!bo(s)?s.delete(t):e[n++]=s,s.w&=~gt,s.n&=~gt}e.length=n}},qr=new WeakMap;let ln=0,gt=1;const Gr=30;let Oe;const Et=Symbol(""),Jr=Symbol("");class Ss{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,kc(this,r)}run(){if(!this.active)return this.fn();let e=Oe,n=dt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Oe,Oe=this,dt=!0,gt=1<<++ln,ln<=Gr?Nc(this):ri(this),this.fn()}finally{ln<=Gr&&Mc(this),gt=1<<--ln,Oe=this.parent,dt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Oe===this?this.deferStop=!0:this.active&&(ri(this),this.onStop&&this.onStop(),this.active=!1)}}function ri(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let dt=!0;const Io=[];function Qt(){Io.push(dt),dt=!1}function Zt(){const t=Io.pop();dt=t===void 0?!0:t}function we(t,e,n){if(dt&&Oe){let r=qr.get(t);r||qr.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Rs()),Eo(s)}}function Eo(t,e){let n=!1;ln<=Gr?bo(t)||(t.n|=gt,n=!yo(t)):n=!t.has(Oe),n&&(t.add(Oe),Oe.deps.push(t))}function Ye(t,e,n,r,s,i){const o=qr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?Ts(n)&&a.push(o.get("length")):(a.push(o.get(Et)),pn(t)&&a.push(o.get(Jr)));break;case"delete":$(t)||(a.push(o.get(Et)),pn(t)&&a.push(o.get(Jr)));break;case"set":pn(t)&&a.push(o.get(Et));break}if(a.length===1)a[0]&&Yr(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Yr(Rs(c))}}function Yr(t,e){for(const n of $(t)?t:[...t])(n!==Oe||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const xc=vs("__proto__,__v_isRef,__isVue"),wo=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(ws)),Dc=As(),Lc=As(!1,!0),Uc=As(!0),si=Fc();function Fc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=G(this);for(let i=0,o=this.length;i<o;i++)we(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(G)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Qt();const r=G(this)[e].apply(this,n);return Zt(),r}}),t}function As(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?el:Co:e?Ao:So).get(r))return r;const o=$(r);if(!t&&o&&K(si,s))return Reflect.get(si,s,i);const a=Reflect.get(r,s,i);return(ws(s)?wo.has(s):xc(s))||(t||we(r,"get",s),e)?a:oe(a)?!o||!Ts(s)?a.value:a:he(a)?t?Oo(a):en(a):a}}const $c=To(),Bc=To(!0);function To(t=!1){return function(n,r,s,i){let o=n[r];if(Tn(o)&&oe(o)&&!oe(s))return!1;if(!t&&!Tn(s)&&(Po(s)||(s=G(s),o=G(o)),!$(n)&&oe(o)&&!oe(s)))return o.value=s,!0;const a=$(n)&&Ts(r)?Number(r)<n.length:K(n,r),c=Reflect.set(n,r,s,i);return n===G(i)&&(a?wn(s,o)&&Ye(n,"set",r,s):Ye(n,"add",r,s)),c}}function Hc(t,e){const n=K(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Ye(t,"delete",e,void 0),r}function jc(t,e){const n=Reflect.has(t,e);return(!ws(e)||!wo.has(e))&&we(t,"has",e),n}function Wc(t){return we(t,"iterate",$(t)?"length":Et),Reflect.ownKeys(t)}const Ro={get:Dc,set:$c,deleteProperty:Hc,has:jc,ownKeys:Wc},Vc={get:Uc,set(t,e){return!0},deleteProperty(t,e){return!0}},zc=ve({},Ro,{get:Lc,set:Bc}),Cs=t=>t,vr=t=>Reflect.getPrototypeOf(t);function Wn(t,e,n=!1,r=!1){t=t.__v_raw;const s=G(t),i=G(e);e!==i&&!n&&we(s,"get",e),!n&&we(s,"get",i);const{has:o}=vr(s),a=r?Cs:n?ks:Rn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Vn(t,e=!1){const n=this.__v_raw,r=G(n),s=G(t);return t!==s&&!e&&we(r,"has",t),!e&&we(r,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function zn(t,e=!1){return t=t.__v_raw,!e&&we(G(t),"iterate",Et),Reflect.get(t,"size",t)}function ii(t){t=G(t);const e=G(this);return vr(e).has.call(e,t)||(e.add(t),Ye(e,"add",t,t)),this}function oi(t,e){e=G(e);const n=G(this),{has:r,get:s}=vr(n);let i=r.call(n,t);i||(t=G(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?wn(e,o)&&Ye(n,"set",t,e):Ye(n,"add",t,e),this}function ai(t){const e=G(this),{has:n,get:r}=vr(e);let s=n.call(e,t);s||(t=G(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Ye(e,"delete",t,void 0),i}function ci(){const t=G(this),e=t.size!==0,n=t.clear();return e&&Ye(t,"clear",void 0,void 0),n}function Kn(t,e){return function(r,s){const i=this,o=i.__v_raw,a=G(o),c=e?Cs:t?ks:Rn;return!t&&we(a,"iterate",Et),o.forEach((l,f)=>r.call(s,c(l),c(f),i))}}function qn(t,e,n){return function(...r){const s=this.__v_raw,i=G(s),o=pn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),f=n?Cs:e?ks:Rn;return!e&&we(i,"iterate",c?Jr:Et),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function Ze(t){return function(...e){return t==="delete"?!1:this}}function Kc(){const t={get(i){return Wn(this,i)},get size(){return zn(this)},has:Vn,add:ii,set:oi,delete:ai,clear:ci,forEach:Kn(!1,!1)},e={get(i){return Wn(this,i,!1,!0)},get size(){return zn(this)},has:Vn,add:ii,set:oi,delete:ai,clear:ci,forEach:Kn(!1,!0)},n={get(i){return Wn(this,i,!0)},get size(){return zn(this,!0)},has(i){return Vn.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:Kn(!0,!1)},r={get(i){return Wn(this,i,!0,!0)},get size(){return zn(this,!0)},has(i){return Vn.call(this,i,!0)},add:Ze("add"),set:Ze("set"),delete:Ze("delete"),clear:Ze("clear"),forEach:Kn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=qn(i,!1,!1),n[i]=qn(i,!0,!1),e[i]=qn(i,!1,!0),r[i]=qn(i,!0,!0)}),[t,n,e,r]}const[qc,Gc,Jc,Yc]=Kc();function Os(t,e){const n=e?t?Yc:Jc:t?Gc:qc;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(K(n,s)&&s in r?n:r,s,i)}const Xc={get:Os(!1,!1)},Qc={get:Os(!1,!0)},Zc={get:Os(!0,!1)},So=new WeakMap,Ao=new WeakMap,Co=new WeakMap,el=new WeakMap;function tl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nl(t){return t.__v_skip||!Object.isExtensible(t)?0:tl(Sc(t))}function en(t){return Tn(t)?t:Ps(t,!1,Ro,Xc,So)}function rl(t){return Ps(t,!1,zc,Qc,Ao)}function Oo(t){return Ps(t,!0,Vc,Zc,Co)}function Ps(t,e,n,r,s){if(!he(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=nl(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function ht(t){return Tn(t)?ht(t.__v_raw):!!(t&&t.__v_isReactive)}function Tn(t){return!!(t&&t.__v_isReadonly)}function Po(t){return!!(t&&t.__v_isShallow)}function ko(t){return ht(t)||Tn(t)}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function Kt(t){return tr(t,"__v_skip",!0),t}const Rn=t=>he(t)?en(t):t,ks=t=>he(t)?Oo(t):t;function No(t){dt&&Oe&&(t=G(t),Eo(t.dep||(t.dep=Rs())))}function Mo(t,e){t=G(t),t.dep&&Yr(t.dep)}function oe(t){return!!(t&&t.__v_isRef===!0)}function Ns(t){return xo(t,!1)}function sl(t){return xo(t,!0)}function xo(t,e){return oe(t)?t:new il(t,e)}class il{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:G(e),this._value=n?e:Rn(e)}get value(){return No(this),this._value}set value(e){e=this.__v_isShallow?e:G(e),wn(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Rn(e),Mo(this))}}function Ke(t){return oe(t)?t.value:t}const ol={get:(t,e,n)=>Ke(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return oe(s)&&!oe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Do(t){return ht(t)?t:new Proxy(t,ol)}function al(t){const e=$(t)?new Array(t.length):{};for(const n in t)e[n]=ll(t,n);return e}class cl{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function ll(t,e,n){const r=t[e];return oe(r)?r:new cl(t,e,n)}class ul{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ss(e,()=>{this._dirty||(this._dirty=!0,Mo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=G(this);return No(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function fl(t,e,n=!1){let r,s;const i=j(t);return i?(r=t,s=Ne):(r=t.get,s=t.set),new ul(r,s,i||!s,n)}function pt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){yr(i,e,n)}return s}function Me(t,e,n,r){if(j(t)){const i=pt(t,e,n,r);return i&&go(i)&&i.catch(o=>{yr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Me(t[i],e,n,r));return s}function yr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){pt(c,null,10,[t,o,a]);return}}dl(t,n,s,r)}function dl(t,e,n,r=!0){console.error(t)}let nr=!1,Xr=!1;const Ee=[];let ze=0;const gn=[];let un=null,Lt=0;const mn=[];let rt=null,Ut=0;const Lo=Promise.resolve();let Ms=null,Qr=null;function xs(t){const e=Ms||Lo;return t?e.then(this?t.bind(this):t):e}function hl(t){let e=ze+1,n=Ee.length;for(;e<n;){const r=e+n>>>1;Sn(Ee[r])<t?e=r+1:n=r}return e}function Uo(t){(!Ee.length||!Ee.includes(t,nr&&t.allowRecurse?ze+1:ze))&&t!==Qr&&(t.id==null?Ee.push(t):Ee.splice(hl(t.id),0,t),Fo())}function Fo(){!nr&&!Xr&&(Xr=!0,Ms=Lo.then(Ho))}function pl(t){const e=Ee.indexOf(t);e>ze&&Ee.splice(e,1)}function $o(t,e,n,r){$(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Fo()}function gl(t){$o(t,un,gn,Lt)}function ml(t){$o(t,rt,mn,Ut)}function Ds(t,e=null){if(gn.length){for(Qr=e,un=[...new Set(gn)],gn.length=0,Lt=0;Lt<un.length;Lt++)un[Lt]();un=null,Lt=0,Qr=null,Ds(t,e)}}function Bo(t){if(mn.length){const e=[...new Set(mn)];if(mn.length=0,rt){rt.push(...e);return}for(rt=e,rt.sort((n,r)=>Sn(n)-Sn(r)),Ut=0;Ut<rt.length;Ut++)rt[Ut]();rt=null,Ut=0}}const Sn=t=>t.id==null?1/0:t.id;function Ho(t){Xr=!1,nr=!0,Ds(t),Ee.sort((n,r)=>Sn(n)-Sn(r));const e=Ne;try{for(ze=0;ze<Ee.length;ze++){const n=Ee[ze];n&&n.active!==!1&&pt(n,null,14)}}finally{ze=0,Ee.length=0,Bo(),nr=!1,Ms=null,(Ee.length||gn.length||mn.length)&&Ho(t)}}function _l(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Z;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[f]||Z;p?s=n.map(y=>y.trim()):h&&(s=n.map(Kr))}let a,c=r[a=Mr(e)]||r[a=Mr(zt(e))];!c&&i&&(c=r[a=Mr(Xt(e))]),c&&Me(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Me(l,t,6,s)}}function jo(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!j(t)){const c=l=>{const f=jo(l,e,!0);f&&(a=!0,ve(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(r.set(t,null),null):($(i)?i.forEach(c=>o[c]=null):ve(o,i),r.set(t,o),o)}function br(t,e){return!t||!gr(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,Xt(e))||K(t,e))}let ke=null,Ir=null;function rr(t){const e=ke;return ke=t,Ir=t&&t.type.__scopeId||null,e}function Tg(t){Ir=t}function Rg(){Ir=null}function Wo(t,e=ke,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&_i(-1);const i=rr(e),o=t(...s);return rr(i),r._d&&_i(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function xr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:f,renderCache:h,data:p,setupState:y,ctx:R,inheritAttrs:x}=t;let A,C;const L=rr(t);try{if(n.shapeFlag&4){const F=s||r;A=Be(f.call(F,F,h,i,y,p,R)),C=c}else{const F=e;A=Be(F.length>1?F(i,{attrs:c,slots:a,emit:l}):F(i,null)),C=e.props?c:vl(c)}}catch(F){vn.length=0,yr(F,t,1),A=_e(At)}let z=A;if(C&&x!==!1){const F=Object.keys(C),{shapeFlag:ie}=z;F.length&&ie&7&&(o&&F.some(Is)&&(C=yl(C,o)),z=An(z,C))}return n.dirs&&(z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&(z.transition=n.transition),A=z,rr(L),A}const vl=t=>{let e;for(const n in t)(n==="class"||n==="style"||gr(n))&&((e||(e={}))[n]=t[n]);return e},yl=(t,e)=>{const n={};for(const r in t)(!Is(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function bl(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?li(r,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==r[p]&&!br(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?li(r,o,l):!0:!!o;return!1}function li(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!br(n,i))return!0}return!1}function Il({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const El=t=>t.__isSuspense;function wl(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):ml(t)}function Yn(t,e){if(ue){let n=ue.provides;const r=ue.parent&&ue.parent.provides;r===n&&(n=ue.provides=Object.create(r)),n[t]=e}}function Je(t,e,n=!1){const r=ue||ke;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&j(e)?e.call(r.proxy):e}}const ui={};function _n(t,e,n){return Vo(t,e,n)}function Vo(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Z){const a=ue;let c,l=!1,f=!1;if(oe(t)?(c=()=>t.value,l=Po(t)):ht(t)?(c=()=>t,r=!0):$(t)?(f=!0,l=t.some(ht),c=()=>t.map(C=>{if(oe(C))return C.value;if(ht(C))return It(C);if(j(C))return pt(C,a,2)})):j(t)?e?c=()=>pt(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Me(t,a,3,[p])}:c=Ne,e&&r){const C=c;c=()=>It(C())}let h,p=C=>{h=A.onStop=()=>{pt(C,a,4)}};if(Cn)return p=Ne,e?n&&Me(e,a,3,[c(),f?[]:void 0,p]):c(),Ne;let y=f?[]:ui;const R=()=>{if(!!A.active)if(e){const C=A.run();(r||l||(f?C.some((L,z)=>wn(L,y[z])):wn(C,y)))&&(h&&h(),Me(e,a,3,[C,y===ui?void 0:y,p]),y=C)}else A.run()};R.allowRecurse=!!e;let x;s==="sync"?x=R:s==="post"?x=()=>ye(R,a&&a.suspense):x=()=>{!a||a.isMounted?gl(R):R()};const A=new Ss(c,x);return e?n?R():y=A.run():s==="post"?ye(A.run.bind(A),a&&a.suspense):A.run(),()=>{A.stop(),a&&a.scope&&Es(a.scope.effects,A)}}function Tl(t,e,n){const r=this.proxy,s=de(t)?t.includes(".")?zo(r,t):()=>r[t]:t.bind(r,r);let i;j(e)?i=e:(i=e.handler,n=e);const o=ue;qt(this);const a=Vo(s,i.bind(r),n);return o?qt(o):Rt(),a}function zo(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function It(t,e){if(!he(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),oe(t))It(t.value,e);else if($(t))for(let n=0;n<t.length;n++)It(t[n],e);else if(Tc(t)||pn(t))t.forEach(n=>{It(n,e)});else if(Ac(t))for(const n in t)It(t[n],e);return t}function Ko(t){return j(t)?{setup:t,name:t.name}:t}const Zr=t=>!!t.type.__asyncLoader,qo=t=>t.type.__isKeepAlive;function Rl(t,e){Go(t,"a",e)}function Sl(t,e){Go(t,"da",e)}function Go(t,e,n=ue){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Er(e,r,n),n){let s=n.parent;for(;s&&s.parent;)qo(s.parent.vnode)&&Al(r,e,n,s),s=s.parent}}function Al(t,e,n,r){const s=Er(e,t,r,!0);Ls(()=>{Es(r[e],s)},n)}function Er(t,e,n=ue,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Qt(),qt(n);const a=Me(e,n,t,o);return Rt(),Zt(),a});return r?s.unshift(i):s.push(i),i}}const Qe=t=>(e,n=ue)=>(!Cn||t==="sp")&&Er(t,e,n),Jo=Qe("bm"),Cl=Qe("m"),Ol=Qe("bu"),Pl=Qe("u"),kl=Qe("bum"),Ls=Qe("um"),Nl=Qe("sp"),Ml=Qe("rtg"),xl=Qe("rtc");function Dl(t,e=ue){Er("ec",t,e)}let es=!0;function Ll(t){const e=Xo(t),n=t.proxy,r=t.ctx;es=!1,e.beforeCreate&&fi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:h,mounted:p,beforeUpdate:y,updated:R,activated:x,deactivated:A,beforeDestroy:C,beforeUnmount:L,destroyed:z,unmounted:F,render:ie,renderTracked:H,renderTriggered:V,errorCaptured:ge,serverPrefetch:ae,expose:fe,inheritAttrs:Se,components:Ae,directives:Te,filters:ce}=e;if(l&&Ul(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ee in o){const J=o[ee];j(J)&&(r[ee]=J.bind(n))}if(s){const ee=s.call(n,n);he(ee)&&(t.data=en(ee))}if(es=!0,i)for(const ee in i){const J=i[ee],be=j(J)?J.bind(n,n):j(J.get)?J.get.bind(n,n):Ne,Nt=!j(J)&&j(J.set)?J.set.bind(n):Ne,We=Pe({get:be,set:Nt});Object.defineProperty(r,ee,{enumerable:!0,configurable:!0,get:()=>We.value,set:De=>We.value=De})}if(a)for(const ee in a)Yo(a[ee],r,n,ee);if(c){const ee=j(c)?c.call(n):c;Reflect.ownKeys(ee).forEach(J=>{Yn(J,ee[J])})}f&&fi(f,t,"c");function le(ee,J){$(J)?J.forEach(be=>ee(be.bind(n))):J&&ee(J.bind(n))}if(le(Jo,h),le(Cl,p),le(Ol,y),le(Pl,R),le(Rl,x),le(Sl,A),le(Dl,ge),le(xl,H),le(Ml,V),le(kl,L),le(Ls,F),le(Nl,ae),$(fe))if(fe.length){const ee=t.exposed||(t.exposed={});fe.forEach(J=>{Object.defineProperty(ee,J,{get:()=>n[J],set:be=>n[J]=be})})}else t.exposed||(t.exposed={});ie&&t.render===Ne&&(t.render=ie),Se!=null&&(t.inheritAttrs=Se),Ae&&(t.components=Ae),Te&&(t.directives=Te)}function Ul(t,e,n=Ne,r=!1){$(t)&&(t=ts(t));for(const s in t){const i=t[s];let o;he(i)?"default"in i?o=Je(i.from||s,i.default,!0):o=Je(i.from||s):o=Je(i),oe(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function fi(t,e,n){Me($(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Yo(t,e,n,r){const s=r.includes(".")?zo(n,r):()=>n[r];if(de(t)){const i=e[t];j(i)&&_n(s,i)}else if(j(t))_n(s,t.bind(n));else if(he(t))if($(t))t.forEach(i=>Yo(i,e,n,r));else{const i=j(t.handler)?t.handler.bind(n):e[t.handler];j(i)&&_n(s,i,t)}}function Xo(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>sr(c,l,o,!0)),sr(c,e,o)),i.set(e,c),c}function sr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&sr(t,i,n,!0),s&&s.forEach(o=>sr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Fl[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Fl={data:di,props:vt,emits:vt,methods:vt,computed:vt,beforeCreate:me,created:me,beforeMount:me,mounted:me,beforeUpdate:me,updated:me,beforeDestroy:me,beforeUnmount:me,destroyed:me,unmounted:me,activated:me,deactivated:me,errorCaptured:me,serverPrefetch:me,components:vt,directives:vt,watch:Bl,provide:di,inject:$l};function di(t,e){return e?t?function(){return ve(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function $l(t,e){return vt(ts(t),ts(e))}function ts(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function me(t,e){return t?[...new Set([].concat(t,e))]:e}function vt(t,e){return t?ve(ve(Object.create(null),t),e):e}function Bl(t,e){if(!t)return e;if(!e)return t;const n=ve(Object.create(null),t);for(const r in e)n[r]=me(t[r],e[r]);return n}function Hl(t,e,n,r=!1){const s={},i={};tr(i,wr,1),t.propsDefaults=Object.create(null),Qo(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:rl(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function jl(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=G(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(br(t.emitsOptions,p))continue;const y=e[p];if(c)if(K(i,p))y!==i[p]&&(i[p]=y,l=!0);else{const R=zt(p);s[R]=ns(c,a,R,y,t,!1)}else y!==i[p]&&(i[p]=y,l=!0)}}}else{Qo(t,e,s,i)&&(l=!0);let f;for(const h in a)(!e||!K(e,h)&&((f=Xt(h))===h||!K(e,f)))&&(c?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=ns(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!K(e,h)&&!0)&&(delete i[h],l=!0)}l&&Ye(t,"set","$attrs")}function Qo(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Gn(c))continue;const l=e[c];let f;s&&K(s,f=zt(c))?!i||!i.includes(f)?n[f]=l:(a||(a={}))[f]=l:br(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=G(n),l=a||Z;for(let f=0;f<i.length;f++){const h=i[f];n[h]=ns(s,c,h,l[h],t,!K(l,h))}}return o}function ns(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=K(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&j(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(qt(s),r=l[n]=c.call(null,e),Rt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Xt(n))&&(r=!0))}return r}function Zo(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!j(t)){const f=h=>{c=!0;const[p,y]=Zo(h,e,!0);ve(o,p),y&&a.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return r.set(t,Ht),Ht;if($(i))for(let f=0;f<i.length;f++){const h=zt(i[f]);hi(h)&&(o[h]=Z)}else if(i)for(const f in i){const h=zt(f);if(hi(h)){const p=i[f],y=o[h]=$(p)||j(p)?{type:p}:p;if(y){const R=mi(Boolean,y.type),x=mi(String,y.type);y[0]=R>-1,y[1]=x<0||R<x,(R>-1||K(y,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function hi(t){return t[0]!=="$"}function pi(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function gi(t,e){return pi(t)===pi(e)}function mi(t,e){return $(e)?e.findIndex(n=>gi(n,t)):j(e)&&gi(e,t)?0:-1}const ea=t=>t[0]==="_"||t==="$stable",Us=t=>$(t)?t.map(Be):[Be(t)],Wl=(t,e,n)=>{const r=Wo((...s)=>Us(e(...s)),n);return r._c=!1,r},ta=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ea(s))continue;const i=t[s];if(j(i))e[s]=Wl(s,i,r);else if(i!=null){const o=Us(i);e[s]=()=>o}}},na=(t,e)=>{const n=Us(e);t.slots.default=()=>n},Vl=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=G(e),tr(e,"_",n)):ta(e,t.slots={})}else t.slots={},e&&na(t,e);tr(t.slots,wr,1)},zl=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Z;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ve(s,e),!n&&a===1&&delete s._):(i=!e.$stable,ta(e,s)),o=e}else e&&(na(t,e),o={default:1});if(i)for(const a in s)!ea(a)&&!(a in o)&&delete s[a]};function Sg(t,e){const n=ke;if(n===null)return t;const r=Tr(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Z]=e[i];j(o)&&(o={mounted:o,updated:o}),o.deep&&It(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function mt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Qt(),Me(c,n,8,[t.el,a,t,e]),Zt())}}function ra(){return{app:null,config:{isNativeTag:Ic,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Kl=0;function ql(t,e){return function(r,s=null){j(r)||(r=Object.assign({},r)),s!=null&&!he(s)&&(s=null);const i=ra(),o=new Set;let a=!1;const c=i.app={_uid:Kl++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:pu,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&j(l.install)?(o.add(l),l.install(c,...f)):j(l)&&(o.add(l),l(c,...f))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,f){return f?(i.components[l]=f,c):i.components[l]},directive(l,f){return f?(i.directives[l]=f,c):i.directives[l]},mount(l,f,h){if(!a){const p=_e(r,s);return p.appContext=i,f&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,Tr(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,f){return i.provides[l]=f,c}};return c}}function rs(t,e,n,r,s=!1){if($(t)){t.forEach((p,y)=>rs(p,e&&($(e)?e[y]:e),n,r,s));return}if(Zr(r)&&!s)return;const i=r.shapeFlag&4?Tr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,f=a.refs===Z?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(de(l)?(f[l]=null,K(h,l)&&(h[l]=null)):oe(l)&&(l.value=null)),j(c))pt(c,a,12,[o,f]);else{const p=de(c),y=oe(c);if(p||y){const R=()=>{if(t.f){const x=p?f[c]:c.value;s?$(x)&&Es(x,i):$(x)?x.includes(i)||x.push(i):p?(f[c]=[i],K(h,c)&&(h[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else p?(f[c]=o,K(h,c)&&(h[c]=o)):oe(c)&&(c.value=o,t.k&&(f[t.k]=o))};o?(R.id=-1,ye(R,n)):R()}}}const ye=wl;function Gl(t){return Jl(t)}function Jl(t,e){const n=Pc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:h,nextSibling:p,setScopeId:y=Ne,cloneNode:R,insertStaticContent:x}=t,A=(u,d,g,v=null,_=null,E=null,S=!1,I=null,w=!!d.dynamicChildren)=>{if(u===d)return;u&&!an(u,d)&&(v=k(u),Re(u,_,E,!0),u=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:b,ref:N,shapeFlag:O}=d;switch(b){case Fs:C(u,d,g,v);break;case At:L(u,d,g,v);break;case Dr:u==null&&z(d,g,v,S);break;case $e:Te(u,d,g,v,_,E,S,I,w);break;default:O&1?H(u,d,g,v,_,E,S,I,w):O&6?ce(u,d,g,v,_,E,S,I,w):(O&64||O&128)&&b.process(u,d,g,v,_,E,S,I,w,te)}N!=null&&_&&rs(N,u&&u.ref,E,d||u,!d)},C=(u,d,g,v)=>{if(u==null)r(d.el=a(d.children),g,v);else{const _=d.el=u.el;d.children!==u.children&&l(_,d.children)}},L=(u,d,g,v)=>{u==null?r(d.el=c(d.children||""),g,v):d.el=u.el},z=(u,d,g,v)=>{[u.el,u.anchor]=x(u.children,d,g,v,u.el,u.anchor)},F=({el:u,anchor:d},g,v)=>{let _;for(;u&&u!==d;)_=p(u),r(u,g,v),u=_;r(d,g,v)},ie=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=p(u),s(u),u=g;s(d)},H=(u,d,g,v,_,E,S,I,w)=>{S=S||d.type==="svg",u==null?V(d,g,v,_,E,S,I,w):fe(u,d,_,E,S,I,w)},V=(u,d,g,v,_,E,S,I)=>{let w,b;const{type:N,props:O,shapeFlag:M,transition:U,patchFlag:q,dirs:se}=u;if(u.el&&R!==void 0&&q===-1)w=u.el=R(u.el);else{if(w=u.el=o(u.type,E,O&&O.is,O),M&8?f(w,u.children):M&16&&ae(u.children,w,null,v,_,E&&N!=="foreignObject",S,I),se&&mt(u,null,v,"created"),O){for(const re in O)re!=="value"&&!Gn(re)&&i(w,re,null,O[re],E,u.children,v,_,T);"value"in O&&i(w,"value",null,O.value),(b=O.onVnodeBeforeMount)&&Ue(b,v,u)}ge(w,u,u.scopeId,S,v)}se&&mt(u,null,v,"beforeMount");const X=(!_||_&&!_.pendingBranch)&&U&&!U.persisted;X&&U.beforeEnter(w),r(w,d,g),((b=O&&O.onVnodeMounted)||X||se)&&ye(()=>{b&&Ue(b,v,u),X&&U.enter(w),se&&mt(u,null,v,"mounted")},_)},ge=(u,d,g,v,_)=>{if(g&&y(u,g),v)for(let E=0;E<v.length;E++)y(u,v[E]);if(_){let E=_.subTree;if(d===E){const S=_.vnode;ge(u,S,S.scopeId,S.slotScopeIds,_.parent)}}},ae=(u,d,g,v,_,E,S,I,w=0)=>{for(let b=w;b<u.length;b++){const N=u[b]=I?st(u[b]):Be(u[b]);A(null,N,d,g,v,_,E,S,I)}},fe=(u,d,g,v,_,E,S)=>{const I=d.el=u.el;let{patchFlag:w,dynamicChildren:b,dirs:N}=d;w|=u.patchFlag&16;const O=u.props||Z,M=d.props||Z;let U;g&&_t(g,!1),(U=M.onVnodeBeforeUpdate)&&Ue(U,g,d,u),N&&mt(d,u,g,"beforeUpdate"),g&&_t(g,!0);const q=_&&d.type!=="foreignObject";if(b?Se(u.dynamicChildren,b,I,g,v,q,E):S||be(u,d,I,null,g,v,q,E,!1),w>0){if(w&16)Ae(I,d,O,M,g,v,_);else if(w&2&&O.class!==M.class&&i(I,"class",null,M.class,_),w&4&&i(I,"style",O.style,M.style,_),w&8){const se=d.dynamicProps;for(let X=0;X<se.length;X++){const re=se[X],Ce=O[re],Mt=M[re];(Mt!==Ce||re==="value")&&i(I,re,Ce,Mt,_,u.children,g,v,T)}}w&1&&u.children!==d.children&&f(I,d.children)}else!S&&b==null&&Ae(I,d,O,M,g,v,_);((U=M.onVnodeUpdated)||N)&&ye(()=>{U&&Ue(U,g,d,u),N&&mt(d,u,g,"updated")},v)},Se=(u,d,g,v,_,E,S)=>{for(let I=0;I<d.length;I++){const w=u[I],b=d[I],N=w.el&&(w.type===$e||!an(w,b)||w.shapeFlag&70)?h(w.el):g;A(w,b,N,null,v,_,E,S,!0)}},Ae=(u,d,g,v,_,E,S)=>{if(g!==v){for(const I in v){if(Gn(I))continue;const w=v[I],b=g[I];w!==b&&I!=="value"&&i(u,I,b,w,S,d.children,_,E,T)}if(g!==Z)for(const I in g)!Gn(I)&&!(I in v)&&i(u,I,g[I],null,S,d.children,_,E,T);"value"in v&&i(u,"value",g.value,v.value)}},Te=(u,d,g,v,_,E,S,I,w)=>{const b=d.el=u?u.el:a(""),N=d.anchor=u?u.anchor:a("");let{patchFlag:O,dynamicChildren:M,slotScopeIds:U}=d;U&&(I=I?I.concat(U):U),u==null?(r(b,g,v),r(N,g,v),ae(d.children,g,N,_,E,S,I,w)):O>0&&O&64&&M&&u.dynamicChildren?(Se(u.dynamicChildren,M,g,_,E,S,I),(d.key!=null||_&&d===_.subTree)&&sa(u,d,!0)):be(u,d,g,N,_,E,S,I,w)},ce=(u,d,g,v,_,E,S,I,w)=>{d.slotScopeIds=I,u==null?d.shapeFlag&512?_.ctx.activate(d,g,v,S,w):kt(d,g,v,_,E,S,w):le(u,d,w)},kt=(u,d,g,v,_,E,S)=>{const I=u.component=cu(u,v,_);if(qo(u)&&(I.ctx.renderer=te),lu(I),I.asyncDep){if(_&&_.registerDep(I,ee),!u.el){const w=I.subTree=_e(At);L(null,w,d,g)}return}ee(I,u,d,g,_,E,S)},le=(u,d,g)=>{const v=d.component=u.component;if(bl(u,d,g))if(v.asyncDep&&!v.asyncResolved){J(v,d,g);return}else v.next=d,pl(v.update),v.update();else d.component=u.component,d.el=u.el,v.vnode=d},ee=(u,d,g,v,_,E,S)=>{const I=()=>{if(u.isMounted){let{next:N,bu:O,u:M,parent:U,vnode:q}=u,se=N,X;_t(u,!1),N?(N.el=q.el,J(u,N,S)):N=q,O&&Jn(O),(X=N.props&&N.props.onVnodeBeforeUpdate)&&Ue(X,U,N,q),_t(u,!0);const re=xr(u),Ce=u.subTree;u.subTree=re,A(Ce,re,h(Ce.el),k(Ce),u,_,E),N.el=re.el,se===null&&Il(u,re.el),M&&ye(M,_),(X=N.props&&N.props.onVnodeUpdated)&&ye(()=>Ue(X,U,N,q),_)}else{let N;const{el:O,props:M}=d,{bm:U,m:q,parent:se}=u,X=Zr(d);if(_t(u,!1),U&&Jn(U),!X&&(N=M&&M.onVnodeBeforeMount)&&Ue(N,se,d),_t(u,!0),O&&B){const re=()=>{u.subTree=xr(u),B(O,u.subTree,u,_,null)};X?d.type.__asyncLoader().then(()=>!u.isUnmounted&&re()):re()}else{const re=u.subTree=xr(u);A(null,re,g,v,u,_,E),d.el=re.el}if(q&&ye(q,_),!X&&(N=M&&M.onVnodeMounted)){const re=d;ye(()=>Ue(N,se,re),_)}d.shapeFlag&256&&u.a&&ye(u.a,_),u.isMounted=!0,d=g=v=null}},w=u.effect=new Ss(I,()=>Uo(u.update),u.scope),b=u.update=w.run.bind(w);b.id=u.uid,_t(u,!0),b()},J=(u,d,g)=>{d.component=u;const v=u.vnode.props;u.vnode=d,u.next=null,jl(u,d.props,v,g),zl(u,d.children,g),Qt(),Ds(void 0,u.update),Zt()},be=(u,d,g,v,_,E,S,I,w=!1)=>{const b=u&&u.children,N=u?u.shapeFlag:0,O=d.children,{patchFlag:M,shapeFlag:U}=d;if(M>0){if(M&128){We(b,O,g,v,_,E,S,I,w);return}else if(M&256){Nt(b,O,g,v,_,E,S,I,w);return}}U&8?(N&16&&T(b,_,E),O!==b&&f(g,O)):N&16?U&16?We(b,O,g,v,_,E,S,I,w):T(b,_,E,!0):(N&8&&f(g,""),U&16&&ae(O,g,v,_,E,S,I,w))},Nt=(u,d,g,v,_,E,S,I,w)=>{u=u||Ht,d=d||Ht;const b=u.length,N=d.length,O=Math.min(b,N);let M;for(M=0;M<O;M++){const U=d[M]=w?st(d[M]):Be(d[M]);A(u[M],U,g,null,_,E,S,I,w)}b>N?T(u,_,E,!0,!1,O):ae(d,g,v,_,E,S,I,w,O)},We=(u,d,g,v,_,E,S,I,w)=>{let b=0;const N=d.length;let O=u.length-1,M=N-1;for(;b<=O&&b<=M;){const U=u[b],q=d[b]=w?st(d[b]):Be(d[b]);if(an(U,q))A(U,q,g,null,_,E,S,I,w);else break;b++}for(;b<=O&&b<=M;){const U=u[O],q=d[M]=w?st(d[M]):Be(d[M]);if(an(U,q))A(U,q,g,null,_,E,S,I,w);else break;O--,M--}if(b>O){if(b<=M){const U=M+1,q=U<N?d[U].el:v;for(;b<=M;)A(null,d[b]=w?st(d[b]):Be(d[b]),g,q,_,E,S,I,w),b++}}else if(b>M)for(;b<=O;)Re(u[b],_,E,!0),b++;else{const U=b,q=b,se=new Map;for(b=q;b<=M;b++){const Ie=d[b]=w?st(d[b]):Be(d[b]);Ie.key!=null&&se.set(Ie.key,b)}let X,re=0;const Ce=M-q+1;let Mt=!1,Zs=0;const on=new Array(Ce);for(b=0;b<Ce;b++)on[b]=0;for(b=U;b<=O;b++){const Ie=u[b];if(re>=Ce){Re(Ie,_,E,!0);continue}let Le;if(Ie.key!=null)Le=se.get(Ie.key);else for(X=q;X<=M;X++)if(on[X-q]===0&&an(Ie,d[X])){Le=X;break}Le===void 0?Re(Ie,_,E,!0):(on[Le-q]=b+1,Le>=Zs?Zs=Le:Mt=!0,A(Ie,d[Le],g,null,_,E,S,I,w),re++)}const ei=Mt?Yl(on):Ht;for(X=ei.length-1,b=Ce-1;b>=0;b--){const Ie=q+b,Le=d[Ie],ti=Ie+1<N?d[Ie+1].el:v;on[b]===0?A(null,Le,g,ti,_,E,S,I,w):Mt&&(X<0||b!==ei[X]?De(Le,g,ti,2):X--)}}},De=(u,d,g,v,_=null)=>{const{el:E,type:S,transition:I,children:w,shapeFlag:b}=u;if(b&6){De(u.component.subTree,d,g,v);return}if(b&128){u.suspense.move(d,g,v);return}if(b&64){S.move(u,d,g,te);return}if(S===$e){r(E,d,g);for(let O=0;O<w.length;O++)De(w[O],d,g,v);r(u.anchor,d,g);return}if(S===Dr){F(u,d,g);return}if(v!==2&&b&1&&I)if(v===0)I.beforeEnter(E),r(E,d,g),ye(()=>I.enter(E),_);else{const{leave:O,delayLeave:M,afterLeave:U}=I,q=()=>r(E,d,g),se=()=>{O(E,()=>{q(),U&&U()})};M?M(E,q,se):se()}else r(E,d,g)},Re=(u,d,g,v=!1,_=!1)=>{const{type:E,props:S,ref:I,children:w,dynamicChildren:b,shapeFlag:N,patchFlag:O,dirs:M}=u;if(I!=null&&rs(I,null,g,u,!0),N&256){d.ctx.deactivate(u);return}const U=N&1&&M,q=!Zr(u);let se;if(q&&(se=S&&S.onVnodeBeforeUnmount)&&Ue(se,d,u),N&6)P(u.component,g,v);else{if(N&128){u.suspense.unmount(g,v);return}U&&mt(u,null,d,"beforeUnmount"),N&64?u.type.remove(u,d,g,_,te,v):b&&(E!==$e||O>0&&O&64)?T(b,d,g,!1,!0):(E===$e&&O&384||!_&&N&16)&&T(w,d,g),v&&Nr(u)}(q&&(se=S&&S.onVnodeUnmounted)||U)&&ye(()=>{se&&Ue(se,d,u),U&&mt(u,null,d,"unmounted")},g)},Nr=u=>{const{type:d,el:g,anchor:v,transition:_}=u;if(d===$e){m(g,v);return}if(d===Dr){ie(u);return}const E=()=>{s(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(u.shapeFlag&1&&_&&!_.persisted){const{leave:S,delayLeave:I}=_,w=()=>S(g,E);I?I(u.el,E,w):w()}else E()},m=(u,d)=>{let g;for(;u!==d;)g=p(u),s(u),u=g;s(d)},P=(u,d,g)=>{const{bum:v,scope:_,update:E,subTree:S,um:I}=u;v&&Jn(v),_.stop(),E&&(E.active=!1,Re(S,u,d,g)),I&&ye(I,d),ye(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},T=(u,d,g,v=!1,_=!1,E=0)=>{for(let S=E;S<u.length;S++)Re(u[S],d,g,v,_)},k=u=>u.shapeFlag&6?k(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),Y=(u,d,g)=>{u==null?d._vnode&&Re(d._vnode,null,null,!0):A(d._vnode||null,u,d,null,null,null,g),Bo(),d._vnode=u},te={p:A,um:Re,m:De,r:Nr,mt:kt,mc:ae,pc:be,pbc:Se,n:k,o:t};let W,B;return e&&([W,B]=e(te)),{render:Y,hydrate:W,createApp:ql(Y,W)}}function _t({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function sa(t,e,n=!1){const r=t.children,s=e.children;if($(r)&&$(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=st(s[i]),a.el=o.el),n||sa(o,a))}}function Yl(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Xl=t=>t.__isTeleport,Ql=Symbol(),$e=Symbol(void 0),Fs=Symbol(void 0),At=Symbol(void 0),Dr=Symbol(void 0),vn=[];let wt=null;function ir(t=!1){vn.push(wt=t?null:[])}function Zl(){vn.pop(),wt=vn[vn.length-1]||null}let or=1;function _i(t){or+=t}function ia(t){return t.dynamicChildren=or>0?wt||Ht:null,Zl(),or>0&&wt&&wt.push(t),t}function ss(t,e,n,r,s,i){return ia(Tt(t,e,n,r,s,i,!0))}function eu(t,e,n,r,s){return ia(_e(t,e,n,r,s,!0))}function is(t){return t?t.__v_isVNode===!0:!1}function an(t,e){return t.type===e.type&&t.key===e.key}const wr="__vInternal",oa=({key:t})=>t!=null?t:null,Xn=({ref:t,ref_key:e,ref_for:n})=>t!=null?de(t)||oe(t)||j(t)?{i:ke,r:t,k:e,f:!!n}:t:null;function Tt(t,e=null,n=null,r=0,s=null,i=t===$e?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&oa(e),ref:e&&Xn(e),scopeId:Ir,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return a?($s(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=de(n)?8:16),or>0&&!o&&wt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&wt.push(c),c}const _e=tu;function tu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Ql)&&(t=At),is(t)){const a=An(t,e,!0);return n&&$s(a,n),a}if(hu(t)&&(t=t.__vccOpts),e){e=nu(e);let{class:a,style:c}=e;a&&!de(a)&&(e.class=bs(a)),he(c)&&(ko(c)&&!$(c)&&(c=ve({},c)),e.style=ys(c))}const o=de(t)?1:El(t)?128:Xl(t)?64:he(t)?4:j(t)?2:0;return Tt(t,e,n,r,s,o,i,!0)}function nu(t){return t?ko(t)||wr in t?ve({},t):t:null}function An(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?su(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&oa(a),ref:e&&e.ref?n&&s?$(s)?s.concat(Xn(e)):[s,Xn(e)]:Xn(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==$e?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&An(t.ssContent),ssFallback:t.ssFallback&&An(t.ssFallback),el:t.el,anchor:t.anchor}}function aa(t=" ",e=0){return _e(Fs,null,t,e)}function ru(t="",e=!1){return e?(ir(),eu(At,null,t)):_e(At,null,t)}function Be(t){return t==null||typeof t=="boolean"?_e(At):$(t)?_e($e,null,t.slice()):typeof t=="object"?st(t):_e(Fs,null,String(t))}function st(t){return t.el===null||t.memo?t:An(t)}function $s(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),$s(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(wr in e)?e._ctx=ke:s===3&&ke&&(ke.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:ke},n=32):(e=String(e),r&64?(n=16,e=[aa(e)]):n=8);t.children=e,t.shapeFlag|=n}function su(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=bs([e.class,r.class]));else if(s==="style")e.style=ys([e.style,r.style]);else if(gr(s)){const i=e[s],o=r[s];o&&i!==o&&!($(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ue(t,e,n,r=null){Me(t,e,7,[n,r])}const os=t=>t?la(t)?Tr(t)||t.proxy:os(t.parent):null,ar=ve(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>os(t.parent),$root:t=>os(t.root),$emit:t=>t.emit,$options:t=>Xo(t),$forceUpdate:t=>()=>Uo(t.update),$nextTick:t=>xs.bind(t.proxy),$watch:t=>Tl.bind(t)}),iu={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(r!==Z&&K(r,e))return o[e]=1,r[e];if(s!==Z&&K(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&K(l,e))return o[e]=3,i[e];if(n!==Z&&K(n,e))return o[e]=4,n[e];es&&(o[e]=0)}}const f=ar[e];let h,p;if(f)return e==="$attrs"&&we(t,"get",e),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Z&&K(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,K(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return s!==Z&&K(s,e)?(s[e]=n,!0):r!==Z&&K(r,e)?(r[e]=n,!0):K(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Z&&K(t,o)||e!==Z&&K(e,o)||(a=i[0])&&K(a,o)||K(r,o)||K(ar,o)||K(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:K(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},ou=ra();let au=0;function cu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||ou,i={uid:au++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new _o(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zo(r,s),emitsOptions:jo(r,s),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=_l.bind(null,i),t.ce&&t.ce(i),i}let ue=null;const ca=()=>ue||ke,qt=t=>{ue=t,t.scope.on()},Rt=()=>{ue&&ue.scope.off(),ue=null};function la(t){return t.vnode.shapeFlag&4}let Cn=!1;function lu(t,e=!1){Cn=e;const{props:n,children:r}=t.vnode,s=la(t);Hl(t,n,s,e),Vl(t,r);const i=s?uu(t,e):void 0;return Cn=!1,i}function uu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Kt(new Proxy(t.ctx,iu));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?du(t):null;qt(t),Qt();const i=pt(r,t,0,[t.props,s]);if(Zt(),Rt(),go(i)){if(i.then(Rt,Rt),e)return i.then(o=>{vi(t,o,e)}).catch(o=>{yr(o,t,0)});t.asyncDep=i}else vi(t,i,e)}else ua(t,e)}function vi(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:he(e)&&(t.setupState=Do(e)),ua(t,n)}let yi;function ua(t,e,n){const r=t.type;if(!t.render){if(!e&&yi&&!r.render){const s=r.template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ve(ve({isCustomElement:i,delimiters:a},o),c);r.render=yi(s,l)}}t.render=r.render||Ne}qt(t),Qt(),Ll(t),Zt(),Rt()}function fu(t){return new Proxy(t.attrs,{get(e,n){return we(t,"get","$attrs"),e[n]}})}function du(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=fu(t))},slots:t.slots,emit:t.emit,expose:e}}function Tr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Do(Kt(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ar)return ar[n](t)}}))}function hu(t){return j(t)&&"__vccOpts"in t}const Pe=(t,e)=>fl(t,e,Cn);function fa(t,e,n){const r=arguments.length;return r===2?he(e)&&!$(e)?is(e)?_e(t,null,[e]):_e(t,e):_e(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&is(n)&&(n=[n]),_e(t,e,n))}const pu="3.2.33",gu="http://www.w3.org/2000/svg",bt=typeof document!="undefined"?document:null,bi=bt&&bt.createElement("template"),mu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?bt.createElementNS(gu,t):bt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>bt.createTextNode(t),createComment:t=>bt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>bt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{bi.innerHTML=r?`<svg>${t}</svg>`:t;const a=bi.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function _u(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function vu(t,e,n){const r=t.style,s=de(n);if(n&&!s){for(const i in n)as(r,i,n[i]);if(e&&!de(e))for(const i in e)n[i]==null&&as(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Ii=/\s*!important$/;function as(t,e,n){if($(n))n.forEach(r=>as(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=yu(t,e);Ii.test(n)?t.setProperty(Xt(r),n.replace(Ii,""),"important"):t[r]=n}}const Ei=["Webkit","Moz","ms"],Lr={};function yu(t,e){const n=Lr[e];if(n)return n;let r=zt(e);if(r!=="filter"&&r in t)return Lr[e]=r;r=mo(r);for(let s=0;s<Ei.length;s++){const i=Ei[s]+r;if(i in t)return Lr[e]=i}return e}const wi="http://www.w3.org/1999/xlink";function bu(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(wi,e.slice(6,e.length)):t.setAttributeNS(wi,e,n);else{const i=_c(e);n==null||i&&!po(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Iu(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=po(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[da,Eu]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let cs=0;const wu=Promise.resolve(),Tu=()=>{cs=0},Ru=()=>cs||(wu.then(Tu),cs=da());function Ft(t,e,n,r){t.addEventListener(e,n,r)}function Su(t,e,n,r){t.removeEventListener(e,n,r)}function Au(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Cu(e);if(r){const l=i[e]=Ou(r,s);Ft(t,a,l,c)}else o&&(Su(t,a,o,c),i[e]=void 0)}}const Ti=/(?:Once|Passive|Capture)$/;function Cu(t){let e;if(Ti.test(t)){e={};let n;for(;n=t.match(Ti);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Xt(t.slice(2)),e]}function Ou(t,e){const n=r=>{const s=r.timeStamp||da();(Eu||s>=n.attached-1)&&Me(Pu(r,n.value),e,5,[r])};return n.value=t,n.attached=Ru(),n}function Pu(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ri=/^on[a-z]/,ku=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?_u(t,r,s):e==="style"?vu(t,n,r):gr(e)?Is(e)||Au(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Nu(t,e,r,s))?Iu(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),bu(t,e,r,s))};function Nu(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Ri.test(e)&&j(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ri.test(e)&&de(n)?!1:e in t}const Si=t=>{const e=t.props["onUpdate:modelValue"];return $(e)?n=>Jn(e,n):e};function Mu(t){t.target.composing=!0}function Ai(t){const e=t.target;e.composing&&(e.composing=!1,xu(e,"input"))}function xu(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const Ag={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Si(s);const i=r||s.props&&s.props.type==="number";Ft(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():i&&(a=Kr(a)),t._assign(a)}),n&&Ft(t,"change",()=>{t.value=t.value.trim()}),e||(Ft(t,"compositionstart",Mu),Ft(t,"compositionend",Ai),Ft(t,"change",Ai))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Si(i),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Kr(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Du=["ctrl","shift","alt","meta"],Lu={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Du.some(n=>t[`${n}Key`]&&!e.includes(n))},Cg=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Lu[e[s]];if(i&&i(n,e))return}return t(n,...r)},Uu=ve({patchProp:ku},mu);let Ci;function Fu(){return Ci||(Ci=Gl(Uu))}const $u=(...t)=>{const e=Fu().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Bu(r);if(!s)return;const i=e._component;!j(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Bu(t){return de(t)?document.querySelector(t):t}var Hu=!1;/*!
  * pinia v2.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let ha;const Rr=t=>ha=t,pa=Symbol();function ls(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var yn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(yn||(yn={}));function ju(){const t=vo(!0),e=t.run(()=>Ns({}));let n=[],r=[];const s=Kt({install(i){Rr(s),s._a=i,i.provide(pa,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Hu?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const ga=()=>{};function Oi(t,e,n,r=ga){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&ca()&&Ls(s),s}function xt(t,...e){t.slice().forEach(n=>{n(...e)})}function us(t,e){for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];ls(s)&&ls(r)&&t.hasOwnProperty(n)&&!oe(r)&&!ht(r)?t[n]=us(s,r):t[n]=r}return t}const Wu=Symbol();function Vu(t){return!ls(t)||!t.hasOwnProperty(Wu)}const{assign:Ve}=Object;function zu(t){return!!(oe(t)&&t.effect)}function Ku(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const f=al(n.state.value[t]);return Ve(f,i,Object.keys(o||{}).reduce((h,p)=>(h[p]=Kt(Pe(()=>{Rr(n);const y=n._s.get(t);return o[p].call(y,y)})),h),{}))}return c=ma(t,l,e,n),c.$reset=function(){const h=s?s():{};this.$patch(p=>{Ve(p,h)})},c}function ma(t,e,n={},r,s){let i;const o=n.state,a=Ve({actions:{}},n),c={deep:!0};let l,f,h=Kt([]),p=Kt([]),y;const R=r.state.value[t];!o&&!R&&(r.state.value[t]={}),Ns({});function x(H){let V;l=f=!1,typeof H=="function"?(H(r.state.value[t]),V={type:yn.patchFunction,storeId:t,events:y}):(us(r.state.value[t],H),V={type:yn.patchObject,payload:H,storeId:t,events:y}),xs().then(()=>{l=!0}),f=!0,xt(h,V,r.state.value[t])}const A=ga;function C(){i.stop(),h=[],p=[],r._s.delete(t)}function L(H,V){return function(){Rr(r);const ge=Array.from(arguments),ae=[],fe=[];function Se(ce){ae.push(ce)}function Ae(ce){fe.push(ce)}xt(p,{args:ge,name:H,store:F,after:Se,onError:Ae});let Te;try{Te=V.apply(this&&this.$id===t?this:F,ge)}catch(ce){throw xt(fe,ce),ce}return Te instanceof Promise?Te.then(ce=>(xt(ae,ce),ce)).catch(ce=>(xt(fe,ce),Promise.reject(ce))):(xt(ae,Te),Te)}}const z={_p:r,$id:t,$onAction:Oi.bind(null,p),$patch:x,$reset:A,$subscribe(H,V={}){const ge=Oi(h,H,V.detached,()=>ae()),ae=i.run(()=>_n(()=>r.state.value[t],fe=>{(V.flush==="sync"?f:l)&&H({storeId:t,type:yn.direct,events:y},fe)},Ve({},c,V)));return ge},$dispose:C},F=en(Ve({},z));r._s.set(t,F);const ie=r._e.run(()=>(i=vo(),i.run(()=>e())));for(const H in ie){const V=ie[H];if(oe(V)&&!zu(V)||ht(V))o||(R&&Vu(V)&&(oe(V)?V.value=R[H]:us(V,R[H])),r.state.value[t][H]=V);else if(typeof V=="function"){const ge=L(H,V);ie[H]=ge,a.actions[H]=V}}return Ve(F,ie),Ve(G(F),ie),Object.defineProperty(F,"$state",{get:()=>r.state.value[t],set:H=>{x(V=>{Ve(V,H)})}}),r._p.forEach(H=>{Ve(F,i.run(()=>H({store:F,app:r._a,pinia:r,options:a})))}),R&&o&&n.hydrate&&n.hydrate(F.$state,R),l=!0,f=!0,F}function qu(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=ca();return a=a||l&&Je(pa),a&&Rr(a),a=ha,a._s.has(r)||(i?ma(r,e,s,a):Ku(r,s,a)),a._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const _a=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",tn=t=>_a?Symbol(t):"_vr_"+t,Gu=tn("rvlm"),Pi=tn("rvd"),Bs=tn("r"),va=tn("rl"),fs=tn("rvl"),$t=typeof window!="undefined";function Ju(t){return t.__esModule||_a&&t[Symbol.toStringTag]==="Module"}const Q=Object.assign;function Ur(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const bn=()=>{},Yu=/\/$/,Xu=t=>t.replace(Yu,"");function Fr(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=tf(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Qu(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ki(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Zu(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Gt(e.matched[r],n.matched[s])&&ya(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Gt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ya(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!ef(t[n],e[n]))return!1;return!0}function ef(t,e){return Array.isArray(t)?Ni(t,e):Array.isArray(e)?Ni(e,t):t===e}function Ni(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function tf(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var On;(function(t){t.pop="pop",t.push="push"})(On||(On={}));var In;(function(t){t.back="back",t.forward="forward",t.unknown=""})(In||(In={}));function nf(t){if(!t)if($t){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Xu(t)}const rf=/^[^#]+#/;function sf(t,e){return t.replace(rf,"#")+e}function of(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Sr=()=>({left:window.pageXOffset,top:window.pageYOffset});function af(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=of(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Mi(t,e){return(history.state?history.state.position-e:-1)+t}const ds=new Map;function cf(t,e){ds.set(t,e)}function lf(t){const e=ds.get(t);return ds.delete(t),e}let uf=()=>location.protocol+"//"+location.host;function ba(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),ki(c,"")}return ki(n,t)+r+s}function ff(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const y=ba(t,location),R=n.value,x=e.value;let A=0;if(p){if(n.value=y,e.value=p,o&&o===R){o=null;return}A=x?p.position-x.position:0}else r(y);s.forEach(C=>{C(n.value,R,{delta:A,type:On.pop,direction:A?A>0?In.forward:In.back:In.unknown})})};function c(){o=n.value}function l(p){s.push(p);const y=()=>{const R=s.indexOf(p);R>-1&&s.splice(R,1)};return i.push(y),y}function f(){const{history:p}=window;!p.state||p.replaceState(Q({},p.state,{scroll:Sr()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f),{pauseListeners:c,listen:l,destroy:h}}function xi(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Sr():null}}function df(t){const{history:e,location:n}=window,r={value:ba(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:uf()+t+c;try{e[f?"replaceState":"pushState"](l,"",p),s.value=l}catch(y){console.error(y),n[f?"replace":"assign"](p)}}function o(c,l){const f=Q({},e.state,xi(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,f,!0),r.value=c}function a(c,l){const f=Q({},s.value,e.state,{forward:c,scroll:Sr()});i(f.current,f,!0);const h=Q({},xi(r.value,c,null),{position:f.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function hf(t){t=nf(t);const e=df(t),n=ff(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Q({location:"",base:t,go:r,createHref:sf.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function pf(t){return typeof t=="string"||t&&typeof t=="object"}function Ia(t){return typeof t=="string"||typeof t=="symbol"}const et={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ea=tn("nf");var Di;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Di||(Di={}));function Jt(t,e){return Q(new Error,{type:t,[Ea]:!0},e)}function tt(t,e){return t instanceof Error&&Ea in t&&(e==null||!!(t.type&e))}const Li="[^/]+?",gf={sensitive:!1,strict:!1,start:!0,end:!0},mf=/[.+*?^${}()[\]/\\]/g;function _f(t,e){const n=Q({},gf,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const p=l[h];let y=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(mf,"\\$&"),y+=40;else if(p.type===1){const{value:R,repeatable:x,optional:A,regexp:C}=p;i.push({name:R,repeatable:x,optional:A});const L=C||Li;if(L!==Li){y+=10;try{new RegExp(`(${L})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${R}" (${L}): `+F.message)}}let z=x?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;h||(z=A&&l.length<2?`(?:/${z})`:"/"+z),A&&(z+="?"),s+=z,y+=20,A&&(y+=-8),x&&(y+=-20),L===".*"&&(y+=-50)}f.push(y)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const f=l.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const y=f[p]||"",R=i[p-1];h[R.name]=y&&R.repeatable?y.split("/"):y}return h}function c(l){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const y of p)if(y.type===0)f+=y.value;else if(y.type===1){const{value:R,repeatable:x,optional:A}=y,C=R in l?l[R]:"";if(Array.isArray(C)&&!x)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const L=Array.isArray(C)?C.join("/"):C;if(!L)if(A)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${R}"`);f+=L}}return f}return{re:o,score:r,keys:i,parse:a,stringify:c}}function vf(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function yf(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=vf(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const bf={type:0,value:""},If=/[a-zA-Z0-9_]/;function Ef(t){if(!t)return[[]];if(t==="/")return[[bf]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${l}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",f="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:If.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function wf(t,e,n){const r=_f(Ef(t.path),n),s=Q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Tf(t,e){const n=[],r=new Map;e=Fi({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,h,p){const y=!p,R=Sf(f);R.aliasOf=p&&p.record;const x=Fi(e,f),A=[R];if("alias"in f){const z=typeof f.alias=="string"?[f.alias]:f.alias;for(const F of z)A.push(Q({},R,{components:p?p.record.components:R.components,path:F,aliasOf:p?p.record:R}))}let C,L;for(const z of A){const{path:F}=z;if(h&&F[0]!=="/"){const ie=h.record.path,H=ie[ie.length-1]==="/"?"":"/";z.path=h.record.path+(F&&H+F)}if(C=wf(z,h,x),p?p.alias.push(C):(L=L||C,L!==C&&L.alias.push(C),y&&f.name&&!Ui(C)&&o(f.name)),"children"in R){const ie=R.children;for(let H=0;H<ie.length;H++)i(ie[H],C,p&&p.children[H])}p=p||C,c(C)}return L?()=>{o(L)}:bn}function o(f){if(Ia(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){let h=0;for(;h<n.length&&yf(f,n[h])>=0&&(f.record.path!==n[h].record.path||!wa(f,n[h]));)h++;n.splice(h,0,f),f.record.name&&!Ui(f)&&r.set(f.record.name,f)}function l(f,h){let p,y={},R,x;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw Jt(1,{location:f});x=p.record.name,y=Q(Rf(h.params,p.keys.filter(L=>!L.optional).map(L=>L.name)),f.params),R=p.stringify(y)}else if("path"in f)R=f.path,p=n.find(L=>L.re.test(R)),p&&(y=p.parse(R),x=p.record.name);else{if(p=h.name?r.get(h.name):n.find(L=>L.re.test(h.path)),!p)throw Jt(1,{location:f,currentLocation:h});x=p.record.name,y=Q({},h.params,f.params),R=p.stringify(y)}const A=[];let C=p;for(;C;)A.unshift(C.record),C=C.parent;return{name:x,path:R,params:y,matched:A,meta:Cf(A)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Rf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Sf(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Af(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Af(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Ui(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Cf(t){return t.reduce((e,n)=>Q(e,n.meta),{})}function Fi(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function wa(t,e){return e.children.some(n=>n===t||wa(t,n))}const Ta=/#/g,Of=/&/g,Pf=/\//g,kf=/=/g,Nf=/\?/g,Ra=/\+/g,Mf=/%5B/g,xf=/%5D/g,Sa=/%5E/g,Df=/%60/g,Aa=/%7B/g,Lf=/%7C/g,Ca=/%7D/g,Uf=/%20/g;function Hs(t){return encodeURI(""+t).replace(Lf,"|").replace(Mf,"[").replace(xf,"]")}function Ff(t){return Hs(t).replace(Aa,"{").replace(Ca,"}").replace(Sa,"^")}function hs(t){return Hs(t).replace(Ra,"%2B").replace(Uf,"+").replace(Ta,"%23").replace(Of,"%26").replace(Df,"`").replace(Aa,"{").replace(Ca,"}").replace(Sa,"^")}function $f(t){return hs(t).replace(kf,"%3D")}function Bf(t){return Hs(t).replace(Ta,"%23").replace(Nf,"%3F")}function Hf(t){return t==null?"":Bf(t).replace(Pf,"%2F")}function cr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function jf(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Ra," "),o=i.indexOf("="),a=cr(o<0?i:i.slice(0,o)),c=o<0?null:cr(i.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function $i(t){let e="";for(let n in t){const r=t[n];if(n=$f(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&hs(i)):[r&&hs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Wf(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function cn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function it(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Jt(4,{from:n,to:e})):h instanceof Error?a(h):pf(h)?a(Jt(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let f=Promise.resolve(l);t.length<3&&(f=f.then(c)),f.catch(h=>a(h))})}function $r(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Vf(a)){const l=(a.__vccOpts||a)[e];l&&s.push(it(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=Ju(l)?l.default:l;i.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&it(p,n,r,i,o)()}))}}return s}function Vf(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Bi(t){const e=Je(Bs),n=Je(va),r=Pe(()=>e.resolve(Ke(t.to))),s=Pe(()=>{const{matched:c}=r.value,{length:l}=c,f=c[l-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(Gt.bind(null,f));if(p>-1)return p;const y=Hi(c[l-2]);return l>1&&Hi(f)===y&&h[h.length-1].path!==y?h.findIndex(Gt.bind(null,c[l-2])):p}),i=Pe(()=>s.value>-1&&qf(n.params,r.value.params)),o=Pe(()=>s.value>-1&&s.value===n.matched.length-1&&ya(n.params,r.value.params));function a(c={}){return Kf(c)?e[Ke(t.replace)?"replace":"push"](Ke(t.to)).catch(bn):Promise.resolve()}return{route:r,href:Pe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const zf=Ko({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Bi,setup(t,{slots:e}){const n=en(Bi(t)),{options:r}=Je(Bs),s=Pe(()=>({[ji(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ji(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:fa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Oa=zf;function Kf(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function qf(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Hi(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ji=(t,e,n)=>t!=null?t:e!=null?e:n,Gf=Ko({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=Je(fs),s=Pe(()=>t.route||r.value),i=Je(Pi,0),o=Pe(()=>s.value.matched[i]);Yn(Pi,i+1),Yn(Gu,o),Yn(fs,s);const a=Ns();return _n(()=>[a.value,o.value,t.name],([c,l,f],[h,p,y])=>{l&&(l.instances[f]=c,p&&p!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=p.leaveGuards),l.updateGuards.size||(l.updateGuards=p.updateGuards))),c&&l&&(!p||!Gt(l,p)||!h)&&(l.enterCallbacks[f]||[]).forEach(R=>R(c))},{flush:"post"}),()=>{const c=s.value,l=o.value,f=l&&l.components[t.name],h=t.name;if(!f)return Wi(n.default,{Component:f,route:c});const p=l.props[t.name],y=p?p===!0?c.params:typeof p=="function"?p(c):p:null,x=fa(f,Q({},y,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return Wi(n.default,{Component:x,route:c})||x}}});function Wi(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Pa=Gf;function Jf(t){const e=Tf(t.routes,t),n=t.parseQuery||jf,r=t.stringifyQuery||$i,s=t.history,i=cn(),o=cn(),a=cn(),c=sl(et);let l=et;$t&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Ur.bind(null,m=>""+m),h=Ur.bind(null,Hf),p=Ur.bind(null,cr);function y(m,P){let T,k;return Ia(m)?(T=e.getRecordMatcher(m),k=P):k=m,e.addRoute(k,T)}function R(m){const P=e.getRecordMatcher(m);P&&e.removeRoute(P)}function x(){return e.getRoutes().map(m=>m.record)}function A(m){return!!e.getRecordMatcher(m)}function C(m,P){if(P=Q({},P||c.value),typeof m=="string"){const B=Fr(n,m,P.path),u=e.resolve({path:B.path},P),d=s.createHref(B.fullPath);return Q(B,u,{params:p(u.params),hash:cr(B.hash),redirectedFrom:void 0,href:d})}let T;if("path"in m)T=Q({},m,{path:Fr(n,m.path,P.path).path});else{const B=Q({},m.params);for(const u in B)B[u]==null&&delete B[u];T=Q({},m,{params:h(m.params)}),P.params=h(P.params)}const k=e.resolve(T,P),Y=m.hash||"";k.params=f(p(k.params));const te=Qu(r,Q({},m,{hash:Ff(Y),path:k.path})),W=s.createHref(te);return Q({fullPath:te,hash:Y,query:r===$i?Wf(m.query):m.query||{}},k,{redirectedFrom:void 0,href:W})}function L(m){return typeof m=="string"?Fr(n,m,c.value.path):Q({},m)}function z(m,P){if(l!==m)return Jt(8,{from:P,to:m})}function F(m){return V(m)}function ie(m){return F(Q(L(m),{replace:!0}))}function H(m){const P=m.matched[m.matched.length-1];if(P&&P.redirect){const{redirect:T}=P;let k=typeof T=="function"?T(m):T;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=L(k):{path:k},k.params={}),Q({query:m.query,hash:m.hash,params:m.params},k)}}function V(m,P){const T=l=C(m),k=c.value,Y=m.state,te=m.force,W=m.replace===!0,B=H(T);if(B)return V(Q(L(B),{state:Y,force:te,replace:W}),P||T);const u=T;u.redirectedFrom=P;let d;return!te&&Zu(r,k,T)&&(d=Jt(16,{to:u,from:k}),Nt(k,k,!0,!1)),(d?Promise.resolve(d):ae(u,k)).catch(g=>tt(g)?tt(g,2)?g:be(g):ee(g,u,k)).then(g=>{if(g){if(tt(g,2))return V(Q(L(g.to),{state:Y,force:te,replace:W}),P||u)}else g=Se(u,k,!0,W,Y);return fe(u,k,g),g})}function ge(m,P){const T=z(m,P);return T?Promise.reject(T):Promise.resolve()}function ae(m,P){let T;const[k,Y,te]=Yf(m,P);T=$r(k.reverse(),"beforeRouteLeave",m,P);for(const B of k)B.leaveGuards.forEach(u=>{T.push(it(u,m,P))});const W=ge.bind(null,m,P);return T.push(W),Dt(T).then(()=>{T=[];for(const B of i.list())T.push(it(B,m,P));return T.push(W),Dt(T)}).then(()=>{T=$r(Y,"beforeRouteUpdate",m,P);for(const B of Y)B.updateGuards.forEach(u=>{T.push(it(u,m,P))});return T.push(W),Dt(T)}).then(()=>{T=[];for(const B of m.matched)if(B.beforeEnter&&!P.matched.includes(B))if(Array.isArray(B.beforeEnter))for(const u of B.beforeEnter)T.push(it(u,m,P));else T.push(it(B.beforeEnter,m,P));return T.push(W),Dt(T)}).then(()=>(m.matched.forEach(B=>B.enterCallbacks={}),T=$r(te,"beforeRouteEnter",m,P),T.push(W),Dt(T))).then(()=>{T=[];for(const B of o.list())T.push(it(B,m,P));return T.push(W),Dt(T)}).catch(B=>tt(B,8)?B:Promise.reject(B))}function fe(m,P,T){for(const k of a.list())k(m,P,T)}function Se(m,P,T,k,Y){const te=z(m,P);if(te)return te;const W=P===et,B=$t?history.state:{};T&&(k||W?s.replace(m.fullPath,Q({scroll:W&&B&&B.scroll},Y)):s.push(m.fullPath,Y)),c.value=m,Nt(m,P,T,W),be()}let Ae;function Te(){Ae=s.listen((m,P,T)=>{const k=C(m),Y=H(k);if(Y){V(Q(Y,{replace:!0}),k).catch(bn);return}l=k;const te=c.value;$t&&cf(Mi(te.fullPath,T.delta),Sr()),ae(k,te).catch(W=>tt(W,12)?W:tt(W,2)?(V(W.to,k).then(B=>{tt(B,20)&&!T.delta&&T.type===On.pop&&s.go(-1,!1)}).catch(bn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),ee(W,k,te))).then(W=>{W=W||Se(k,te,!1),W&&(T.delta?s.go(-T.delta,!1):T.type===On.pop&&tt(W,20)&&s.go(-1,!1)),fe(k,te,W)}).catch(bn)})}let ce=cn(),kt=cn(),le;function ee(m,P,T){be(m);const k=kt.list();return k.length?k.forEach(Y=>Y(m,P,T)):console.error(m),Promise.reject(m)}function J(){return le&&c.value!==et?Promise.resolve():new Promise((m,P)=>{ce.add([m,P])})}function be(m){return le||(le=!m,Te(),ce.list().forEach(([P,T])=>m?T(m):P()),ce.reset()),m}function Nt(m,P,T,k){const{scrollBehavior:Y}=t;if(!$t||!Y)return Promise.resolve();const te=!T&&lf(Mi(m.fullPath,0))||(k||!T)&&history.state&&history.state.scroll||null;return xs().then(()=>Y(m,P,te)).then(W=>W&&af(W)).catch(W=>ee(W,m,P))}const We=m=>s.go(m);let De;const Re=new Set;return{currentRoute:c,addRoute:y,removeRoute:R,hasRoute:A,getRoutes:x,resolve:C,options:t,push:F,replace:ie,go:We,back:()=>We(-1),forward:()=>We(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:kt.add,isReady:J,install(m){const P=this;m.component("RouterLink",Oa),m.component("RouterView",Pa),m.config.globalProperties.$router=P,Object.defineProperty(m.config.globalProperties,"$route",{enumerable:!0,get:()=>Ke(c)}),$t&&!De&&c.value===et&&(De=!0,F(s.location).catch(Y=>{}));const T={};for(const Y in et)T[Y]=Pe(()=>c.value[Y]);m.provide(Bs,P),m.provide(va,en(T)),m.provide(fs,c);const k=m.unmount;Re.add(m),m.unmount=function(){Re.delete(m),Re.size<1&&(l=et,Ae&&Ae(),c.value=et,De=!1,le=!1),k()}}}}function Dt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Yf(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Gt(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Gt(l,c))||s.push(c))}return[n,r,s]}const Xf="modulepreload",Vi={},Qf="./",Zf=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${Qf}${r}`,r in Vi)return;Vi[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":Xf,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ed=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Na={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,y=l&63;c||(y=64,o||(p=64)),r.push(n[f],n[h],n[p],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ka(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ed(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const p=i<<2|a>>4;if(r.push(p),l!==64){const y=a<<4&240|l>>2;if(r.push(y),h!==64){const R=l<<6&192|h;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},td=function(t){const e=ka(t);return Na.encodeByteArray(e,!0)},Ma=function(t){return td(t).replace(/\./g,"")},nd=function(t){try{return Na.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sd(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pe())}function id(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function od(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ad(){const t=pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function cd(){return typeof indexedDB=="object"}function ld(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud="FirebaseError";class nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ud,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Dn.prototype.create)}}class Dn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?fd(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new nn(s,a,r)}}function fd(t,e){return t.replace(dd,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const dd=/\{\$([^}]+)}/g;function hd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function lr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(zi(i)&&zi(o)){if(!lr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function zi(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function dn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function pd(t,e){const n=new gd(t,e);return n.subscribe.bind(n)}class gd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");md(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Br),s.error===void 0&&(s.error=Br),s.complete===void 0&&(s.complete=Br);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function md(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Br(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t,e){return new Promise((n,r)=>{t.onsuccess=s=>{n(s.target.result)},t.onerror=s=>{var i;r(`${e}: ${(i=s.target.error)===null||i===void 0?void 0:i.message}`)}})}class Ki{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n="readonly"){return new xa(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new Da(this._db.createObjectStore(e,n))}close(){this._db.close()}}class xa{constructor(e){this._transaction=e,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new Da(this._transaction.objectStore(e))}}class Da{constructor(e){this._store=e}index(e){return new qi(this._store.index(e))}createIndex(e,n,r){return new qi(this._store.createIndex(e,n,r))}get(e){const n=this._store.get(e);return hn(n,"Error reading from IndexedDB")}put(e,n){const r=this._store.put(e,n);return hn(r,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return hn(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return hn(e,"Error clearing IndexedDB object store")}}class qi{constructor(e){this._index=e}get(e){const n=this._index.get(e);return hn(n,"Error reading from IndexedDB")}}function _d(t,e,n){return new Promise((r,s)=>{try{const i=indexedDB.open(t,e);i.onsuccess=o=>{r(new Ki(o.target.result))},i.onerror=o=>{var a;s(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},i.onupgradeneeded=o=>{n(new Ki(i.result),o.oldVersion,o.newVersion,new xa(i.transaction))}}catch(i){s(`Error opening indexedDB: ${i.message}`)}})}class Yt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new rd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bd(e))try{this.getOrInitializeService({instanceIdentifier:yt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yt){return this.instances.has(e)}getOptions(e=yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yt){return this.component?this.component.multipleInstances?e:yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yd(t){return t===yt?void 0:t}function bd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const Ed={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},wd=ne.INFO,Td={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Rd=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Td[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class La{constructor(e){this.name=e,this._logLevel=wd,this._logHandler=Rd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ed[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ad(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ad(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ps="@firebase/app",Gi="0.7.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=new La("@firebase/app"),Cd="@firebase/app-compat",Od="@firebase/analytics-compat",Pd="@firebase/analytics",kd="@firebase/app-check-compat",Nd="@firebase/app-check",Md="@firebase/auth",xd="@firebase/auth-compat",Dd="@firebase/database",Ld="@firebase/database-compat",Ud="@firebase/functions",Fd="@firebase/functions-compat",$d="@firebase/installations",Bd="@firebase/installations-compat",Hd="@firebase/messaging",jd="@firebase/messaging-compat",Wd="@firebase/performance",Vd="@firebase/performance-compat",zd="@firebase/remote-config",Kd="@firebase/remote-config-compat",qd="@firebase/storage",Gd="@firebase/storage-compat",Jd="@firebase/firestore",Yd="@firebase/firestore-compat",Xd="firebase",Qd="9.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua="[DEFAULT]",Zd={[ps]:"fire-core",[Cd]:"fire-core-compat",[Pd]:"fire-analytics",[Od]:"fire-analytics-compat",[Nd]:"fire-app-check",[kd]:"fire-app-check-compat",[Md]:"fire-auth",[xd]:"fire-auth-compat",[Dd]:"fire-rtdb",[Ld]:"fire-rtdb-compat",[Ud]:"fire-fn",[Fd]:"fire-fn-compat",[$d]:"fire-iid",[Bd]:"fire-iid-compat",[Hd]:"fire-fcm",[jd]:"fire-fcm-compat",[Wd]:"fire-perf",[Vd]:"fire-perf-compat",[zd]:"fire-rc",[Kd]:"fire-rc-compat",[qd]:"fire-gcs",[Gd]:"fire-gcs-compat",[Jd]:"fire-fst",[Yd]:"fire-fst-compat","fire-js":"fire-js",[Xd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=new Map,gs=new Map;function eh(t,e){try{t.container.addComponent(e)}catch(n){js.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Pn(t){const e=t.name;if(gs.has(e))return js.debug(`There were multiple attempts to register component ${e}.`),!1;gs.set(e,t);for(const n of ur.values())eh(n,t);return!0}function Fa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Ct=new Dn("app","Firebase",th);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=Qd;function rh(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ua,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Ct.create("bad-app-name",{appName:String(r)});const s=ur.get(r);if(s){if(lr(t,s.options)&&lr(n,s.config))return s;throw Ct.create("duplicate-app",{appName:r})}const i=new Id(r);for(const a of gs.values())i.addComponent(a);const o=new nh(t,n,i);return ur.set(r,o),o}function sh(t=Ua){const e=ur.get(t);if(!e)throw Ct.create("no-app",{appName:t});return e}function jt(t,e,n){var r;let s=(r=Zd[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),js.warn(a.join(" "));return}Pn(new Yt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="firebase-heartbeat-database",oh=1,kn="firebase-heartbeat-store";let Hr=null;function $a(){return Hr||(Hr=_d(ih,oh,(t,e)=>{switch(e){case 0:t.createObjectStore(kn)}}).catch(t=>{throw Ct.create("storage-open",{originalErrorMessage:t.message})})),Hr}async function ah(t){try{return(await $a()).transaction(kn).objectStore(kn).get(Ba(t))}catch(e){throw Ct.create("storage-get",{originalErrorMessage:e.message})}}async function Ji(t,e){try{const r=(await $a()).transaction(kn,"readwrite");return await r.objectStore(kn).put(e,Ba(t)),r.complete}catch(n){throw Ct.create("storage-set",{originalErrorMessage:n.message})}}function Ba(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch=1024,lh=30*24*60*60*1e3;class uh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Yi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=lh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Yi(),{heartbeatsToSend:n,unsentEntries:r}=fh(this._heartbeatsCache.heartbeats),s=Ma(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Yi(){return new Date().toISOString().substring(0,10)}function fh(t,e=ch){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Xi(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Xi(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cd()?ld().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ah(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ji(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ji(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Xi(t){return Ma(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(t){Pn(new Yt("platform-logger",e=>new Sd(e),"PRIVATE")),Pn(new Yt("heartbeat",e=>new uh(e),"PRIVATE")),jt(ps,Gi,t),jt(ps,Gi,"esm2017"),jt("fire-js","")}hh("");var ph="firebase",gh="9.6.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jt(ph,gh,"app");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Ws(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Ha(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mh=Ha,ja=new Dn("auth","Firebase",Ha());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=new La("@firebase/auth");function Qn(t,...e){Qi.logLevel<=ne.ERROR&&Qi.error(`Auth (${Ar}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t,...e){throw Vs(t,...e)}function He(t,...e){return Vs(t,...e)}function _h(t,e,n){const r=Object.assign(Object.assign({},mh()),{[e]:n});return new Dn("auth","Firebase",r).create(e,{appName:t.name})}function Vs(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ja.create(t,...e)}function D(t,e,...n){if(!t)throw Vs(e,...n)}function qe(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qn(e),new Error(e)}function Xe(t,e){t||qe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=new Map;function Ge(t){Xe(t instanceof Function,"Expected a class definition");let e=Zi.get(t);return e?(Xe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Zi.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(t,e){const n=Fa(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(lr(i,e!=null?e:{}))return s;xe(s,"already-initialized")}return n.initialize({options:e})}function yh(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ge);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function bh(){return eo()==="http:"||eo()==="https:"}function eo(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bh()||id()||"connection"in navigator)?navigator.onLine:!0}function Eh(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xe(n>e,"Short delay should be less than long delay!"),this.isMobile=sd()||od()}get(){return Ih()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t,e){Xe(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th=new Un(3e4,6e4);function Fn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $n(t,e,n,r,s={}){return Va(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ln(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Wa.fetch()(za(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Va(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},wh),e);try{const s=new Rh(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw jr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw jr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw jr(t,"email-already-in-use",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw _h(t,f,l);xe(t,f)}}catch(s){if(s instanceof nn)throw s;xe(t,"network-request-failed")}}async function Bn(t,e,n,r,s={}){const i=await $n(t,e,n,r,s);return"mfaPendingCredential"in i&&xe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function za(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?zs(t.config,s):`${t.config.apiScheme}://${s}`}class Rh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(He(this.auth,"network-request-failed")),Th.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function jr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=He(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sh(t,e){return $n(t,"POST","/v1/accounts:delete",e)}async function Ah(t,e){return $n(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ch(t,e=!1){const n=rn(t),r=await n.getIdToken(e),s=Ks(r);D(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:En(Wr(s.auth_time)),issuedAtTime:En(Wr(s.iat)),expirationTime:En(Wr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Wr(t){return Number(t)*1e3}function Ks(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Qn("JWT malformed, contained fewer than 3 sections"),null;try{const s=nd(n);return s?JSON.parse(s):(Qn("Failed to decode base64 JWT payload"),null)}catch(s){return Qn("Caught error parsing JWT payload as JSON",s),null}}function Oh(t){const e=Ks(t);return D(e,"internal-error"),D(typeof e.exp!="undefined","internal-error"),D(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof nn&&Ph(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ph({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=En(this.lastLoginAt),this.creationTime=En(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Nn(t,Ah(n,{idToken:r}));D(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?xh(i.providerUserInfo):[],a=Mh(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ka(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function Nh(t){const e=rn(t);await fr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Mh(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function xh(t){return t.map(e=>{var{providerId:n}=e,r=Ws(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dh(t,e){const n=await Va(t,{},async()=>{const r=Ln({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=za(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Wa.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken!="undefined","internal-error"),D(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Oh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return D(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Dh(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Mn;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(D(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(D(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mn,this.toJSON())}_performRefresh(){return qe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t,e){D(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class St{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ws(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ka(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Nn(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ch(this,e)}reload(){return Nh(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new St(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await fr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Nn(this,Sh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(l=n.createdAt)!==null&&l!==void 0?l:void 0,L=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:z,emailVerified:F,isAnonymous:ie,providerData:H,stsTokenManager:V}=n;D(z&&V,e,"internal-error");const ge=Mn.fromJSON(this.name,V);D(typeof z=="string",e,"internal-error"),nt(h,e.name),nt(p,e.name),D(typeof F=="boolean",e,"internal-error"),D(typeof ie=="boolean",e,"internal-error"),nt(y,e.name),nt(R,e.name),nt(x,e.name),nt(A,e.name),nt(C,e.name),nt(L,e.name);const ae=new St({uid:z,auth:e,email:p,emailVerified:F,displayName:h,isAnonymous:ie,photoURL:R,phoneNumber:y,tenantId:x,stsTokenManager:ge,createdAt:C,lastLoginAt:L});return H&&Array.isArray(H)&&(ae.providerData=H.map(fe=>Object.assign({},fe))),A&&(ae._redirectEventId=A),ae}static async _fromIdTokenResponse(e,n,r=!1){const s=new Mn;s.updateFromServerResponse(n);const i=new St({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await fr(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qa.type="NONE";const to=qa;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t,e,n){return`firebase:${t}:${e}:${n}`}class Wt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Zn(this.userKey,s.apiKey,i),this.fullPersistenceKey=Zn("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?St._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Wt(Ge(to),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Ge(to);const o=Zn(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const f=await l._get(o);if(f){const h=St._fromJSON(e,f);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Wt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Wt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ya(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ga(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qa(e))return"Blackberry";if(Za(e))return"Webos";if(qs(e))return"Safari";if((e.includes("chrome/")||Ja(e))&&!e.includes("edge/"))return"Chrome";if(Xa(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ga(t=pe()){return/firefox\//i.test(t)}function qs(t=pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ja(t=pe()){return/crios\//i.test(t)}function Ya(t=pe()){return/iemobile/i.test(t)}function Xa(t=pe()){return/android/i.test(t)}function Qa(t=pe()){return/blackberry/i.test(t)}function Za(t=pe()){return/webos/i.test(t)}function Cr(t=pe()){return/iphone|ipad|ipod/i.test(t)}function Lh(t=pe()){var e;return Cr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Uh(){return ad()&&document.documentMode===10}function ec(t=pe()){return Cr(t)||Xa(t)||Za(t)||Qa(t)||/windows phone/i.test(t)||Ya(t)}function Fh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(t,e=[]){let n;switch(t){case"Browser":n=no(pe());break;case"Worker":n=`${no(pe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ar}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ro(this),this.idTokenSubscription=new ro(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ja,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ge(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Wt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,i=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fr(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Eh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?rn(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ge(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Dn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ge(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await Wt.create(this,[Ge(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return D(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Or(t){return rn(t)}class ro{constructor(e){this.auth=e,this.observer=null,this.addObserver=pd(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qe("not implemented")}_getIdTokenResponse(e){return qe("not implemented")}_linkToIdToken(e,n){return qe("not implemented")}_getReauthenticationResolver(e){return qe("not implemented")}}async function Bh(t,e){return $n(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hh(t,e){return Bn(t,"POST","/v1/accounts:signInWithPassword",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jh(t,e){return Bn(t,"POST","/v1/accounts:signInWithEmailLink",Fn(t,e))}async function Wh(t,e){return Bn(t,"POST","/v1/accounts:signInWithEmailLink",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Gs{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new xn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new xn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Hh(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return jh(e,{email:this._email,oobCode:this._password});default:xe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Bh(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Wh(e,{idToken:n,email:this._email,oobCode:this._password});default:xe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vt(t,e){return Bn(t,"POST","/v1/accounts:signInWithIdp",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh="http://localhost";class Ot extends Gs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ot(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ws(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ot(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vt(e,n)}buildRequest(){const e={requestUri:Vh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ln(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Kh(t){const e=fn(dn(t)).link,n=e?fn(dn(e)).deep_link_id:null,r=fn(dn(t)).deep_link_id;return(r?fn(dn(r)).link:null)||r||n||e||t}class Js{constructor(e){var n,r,s,i,o,a;const c=fn(dn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,h=zh((s=c.mode)!==null&&s!==void 0?s:null);D(l&&f&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Kh(e);try{return new Js(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(){this.providerId=sn.PROVIDER_ID}static credential(e,n){return xn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Js.parseLink(n);return D(r,"argument-error"),xn._fromEmailAndCode(e,r.code,r.tenantId)}}sn.PROVIDER_ID="password";sn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";sn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends nc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends Hn{constructor(){super("facebook.com")}static credential(e){return Ot._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch{return null}}}ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";ct.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends Hn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ot._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return lt.credential(n,r)}catch{return null}}}lt.GOOGLE_SIGN_IN_METHOD="google.com";lt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends Hn{constructor(){super("github.com")}static credential(e){return Ot._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ut.credential(e.oauthAccessToken)}catch{return null}}}ut.GITHUB_SIGN_IN_METHOD="github.com";ut.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends Hn{constructor(){super("twitter.com")}static credential(e,n){return Ot._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ft.credential(n,r)}catch{return null}}}ft.TWITTER_SIGN_IN_METHOD="twitter.com";ft.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qh(t,e){return Bn(t,"POST","/v1/accounts:signUp",Fn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await St._fromIdTokenResponse(e,r,s),o=so(r);return new Pt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=so(r);return new Pt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function so(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends nn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,dr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new dr(e,n,r,s)}}function rc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?dr._fromErrorAndOperation(t,i,e,r):i})}async function Gh(t,e,n=!1){const r=await Nn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Pt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jh(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Nn(t,rc(r,s,e,t),n);D(i.idToken,r,"internal-error");const o=Ks(i.idToken);D(o,r,"internal-error");const{sub:a}=o;return D(t.uid===a,r,"user-mismatch"),Pt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&xe(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sc(t,e,n=!1){const r="signIn",s=await rc(t,r,e),i=await Pt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Yh(t,e){return sc(Or(t),e)}async function Xh(t,e,n){const r=Or(t),s=await qh(r,{returnSecureToken:!0,email:e,password:n}),i=await Pt._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function Qh(t,e,n){return Yh(rn(t),sn.credential(e,n))}function Zh(t){return rn(t).signOut()}const hr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hr,"1"),this.storage.removeItem(hr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(){const t=pe();return qs(t)||Cr(t)}const tp=1e3,np=10;class oc extends ic{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ep()&&Fh(),this.fallbackToPolling=ec(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Uh()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,np):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},tp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}oc.type="LOCAL";const rp=oc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac extends ic{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ac.type="SESSION";const cc=ac;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Pr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await sp(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ys("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return window}function op(t){je().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(){return typeof je().WorkerGlobalScope!="undefined"&&typeof je().importScripts=="function"}async function ap(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function lp(){return lc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="firebaseLocalStorageDb",up=1,pr="firebaseLocalStorage",fc="fbase_key";class jn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kr(t,e){return t.transaction([pr],e?"readwrite":"readonly").objectStore(pr)}function fp(){const t=indexedDB.deleteDatabase(uc);return new jn(t).toPromise()}function _s(){const t=indexedDB.open(uc,up);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(pr,{keyPath:fc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(pr)?e(r):(r.close(),await fp(),e(await _s()))})})}async function io(t,e,n){const r=kr(t,!0).put({[fc]:e,value:n});return new jn(r).toPromise()}async function dp(t,e){const n=kr(t,!1).get(e),r=await new jn(n).toPromise();return r===void 0?null:r.value}function oo(t,e){const n=kr(t,!0).delete(e);return new jn(n).toPromise()}const hp=800,pp=3;class dc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _s(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>pp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pr._getInstance(lp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ap(),!this.activeServiceWorker)return;this.sender=new ip(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _s();return await io(e,hr,"1"),await oo(e,hr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>io(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>dp(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>oo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=kr(s,!1).getAll();return new jn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dc.type="LOCAL";const gp=dc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function _p(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=He("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",mp().appendChild(r)})}function vp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Un(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(t,e){return e?Ge(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs extends Gs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bp(t){return sc(t.auth,new Xs(t),t.bypassAuthState)}function Ip(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),Jh(n,new Xs(t),t.bypassAuthState)}async function Ep(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),Gh(n,new Xs(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bp;case"linkViaPopup":case"linkViaRedirect":return Ep;case"reauthViaPopup":case"reauthViaRedirect":return Ip;default:xe(this.auth,"internal-error")}}resolve(e){Xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp=new Un(2e3,1e4);class Bt extends hc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Bt.currentPopupAction&&Bt.currentPopupAction.cancel(),Bt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){Xe(this.filter.length===1,"Popup operations only handle one event");const e=Ys();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(He(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(He(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(He(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,wp.get())};e()}}Bt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp="pendingRedirect",Vr=new Map;class Rp extends hc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vr.get(this.auth._key());if(!e){try{const r=await Sp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vr.set(this.auth._key(),e)}return this.bypassAuthState||Vr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Sp(t,e){const n=Cp(e),r=Ap(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Ap(t){return Ge(t._redirectPersistence)}function Cp(t){return Zn(Tp,t.config.apiKey,t.name)}async function Op(t,e,n=!1){const r=Or(t),s=yp(r,e),o=await new Rp(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp=10*60*1e3;class kp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Np(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!pc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(He(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Pp&&this.cachedEventUids.clear(),this.cachedEventUids.has(ao(e))}saveEventToCache(e){this.cachedEventUids.add(ao(e)),this.lastProcessedEventTime=Date.now()}}function ao(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Np(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mp(t,e={}){return $n(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Dp=/^https?/;async function Lp(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Mp(t);for(const n of e)try{if(Up(n))return}catch{}xe(t,"unauthorized-domain")}function Up(t){const e=ms(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Dp.test(n))return!1;if(xp.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp=new Un(3e4,6e4);function co(){const t=je().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $p(t){return new Promise((e,n)=>{var r,s,i;function o(){co(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{co(),n(He(t,"network-request-failed"))},timeout:Fp.get()})}if(!((s=(r=je().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=je().gapi)===null||i===void 0)&&i.load)o();else{const a=vp("iframefcb");return je()[a]=()=>{gapi.load?o():n(He(t,"network-request-failed"))},_p(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw er=null,e})}let er=null;function Bp(t){return er=er||$p(t),er}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp=new Un(5e3,15e3),jp="__/auth/iframe",Wp="emulator/auth/iframe",Vp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Kp(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zs(e,Wp):`https://${t.config.authDomain}/${jp}`,r={apiKey:e.apiKey,appName:t.name,v:Ar},s=zp.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ln(r).slice(1)}`}async function qp(t){const e=await Bp(t),n=je().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:Kp(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Vp,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=He(t,"network-request-failed"),a=je().setTimeout(()=>{i(o)},Hp.get());function c(){je().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Jp=500,Yp=600,Xp="_blank",Qp="http://localhost";class lo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Zp(t,e,n,r=Jp,s=Yp){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Gp),{width:r.toString(),height:s.toString(),top:i,left:o}),l=pe().toLowerCase();n&&(a=Ja(l)?Xp:n),Ga(l)&&(e=e||Qp,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[y,R])=>`${p}${y}=${R},`,"");if(Lh(l)&&a!=="_self")return eg(e||"",a),new lo(null);const h=window.open(e||"",a,f);D(h,t,"popup-blocked");try{h.focus()}catch{}return new lo(h)}function eg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg="__/auth/handler",ng="emulator/auth/handler";function uo(t,e,n,r,s,i){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ar,eventId:s};if(e instanceof nc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof Hn){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${rg(t)}?${Ln(a).slice(1)}`}function rg({config:t}){return t.emulator?zs(t,ng):`https://${t.authDomain}/${tg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="webStorageSupport";class sg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cc,this._completeRedirectFn=Op}async _openPopup(e,n,r,s){var i;Xe((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=uo(e,n,r,ms(),s);return Zp(e,o,Ys())}async _openRedirect(e,n,r,s){return await this._originValidation(e),op(uo(e,n,r,ms(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Xe(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await qp(e),r=new kp(e);return n.register("authEvent",s=>(D(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zr,{type:zr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[zr];o!==void 0&&n(!!o),xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Lp(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ec()||qs()||Cr()}}const ig=sg;var fo="@firebase/auth",ho="0.19.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function cg(t){Pn(new Yt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{D(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),D(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tc(t)},f=new $h(a,c,l);return yh(f,n),f})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Pn(new Yt("auth-internal",e=>{const n=Or(e.getProvider("auth").getImmediate());return(r=>new og(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jt(fo,ho,ag(t)),jt(fo,ho,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(t=sh()){const e=Fa(t,"auth");return e.isInitialized()?e.getImmediate():vh(t,{popupRedirectResolver:ig,persistence:[gp,rp,cc]})}cg("Browser");const ug={apiKey:"AIzaSyDa_fhL81iuhkpDIxtk-rsOaMoGUJ4eLKI",authDomain:"vue-auth-test-9896f.firebaseapp.com",projectId:"vue-auth-test-9896f",storageBucket:"vue-auth-test-9896f.appspot.com",messagingSenderId:"1010891411797",appId:"1:1010891411797:web:9ba6a304cc87e57179dfdc"},fg=rh(ug),ot=lg(fg);var dg=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};const hg={},pg=Tt("h1",null,"Welcome",-1),gg=Tt("p",null,"This is a simple firebase authentication test.",-1),mg=[pg,gg];function _g(t,e){return ir(),ss("main",null,mg)}var vg=dg(hg,[["render",_g]]);const at=Jf({history:hf("./"),routes:[{path:"/",name:"home",component:vg,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:()=>Zf(()=>import("./LoginView.c9f83297.js"),["assets/LoginView.c9f83297.js","assets/LoginView.2fe50e69.css"])}]});at.beforeEach((t,e,n)=>{if(t.path==="/login"&&ot.currentUser){n("/");return}if(t.matched.some(r=>r.meta.requiresAuth)&&!ot.currentUser){n("/login");return}n()});const yg=qu("user",{state:()=>({user:null}),actions:{SET_USER(t){this.user=t},CLEAR_USER(){this.user=null},async login(t){const{email:e,password:n}=t;try{await Qh(ot,e,n)}catch(r){switch(r.code){case"auth/user-not-found":alert("User not found");break;case"auth/wrong-password":alert("Wrong password");default:alert("Something went wrong");break}return}this.SET_USER(ot.currentUser),at.push("/")},async register(t){const{email:e,password:n}=t;try{await Xh(ot,e,n)}catch(r){switch(r.code){case"auth/email-already-in-use":alert("Email already in use");break;case"auth/invalid-email":alert("Invalid email");break;case"auth/operation-not-allowed":alert("Operation not allowed");break;case"auth/weak-password":alert("Weak password");break;default:alert("Something went wrong");break}return}this.SET_USER(ot.currentUser),at.push("/")},async logout(){await Zh(ot),this.CLEAR_USER(),at.push("/login")},fetchUser(){ot.onAuthStateChanged(async t=>{t===null?this.CLEAR_USER():(this.SET_USER(t),at.isReady()&&at.currentRoute.value.path==="/login"&&at.push("/"))})}}});const bg={key:0},Ig={class:"wrapper"},Eg=aa("Home"),wg={setup(t){const e=yg();return Jo(()=>{e.fetchUser()}),(n,r)=>(ir(),ss($e,null,[Ke(e).user?(ir(),ss("header",bg,[Tt("div",Ig,[Tt("nav",null,[_e(Ke(Oa),{to:"/"},{default:Wo(()=>[Eg]),_:1}),Tt("button",{onClick:r[0]||(r[0]=s=>Ke(e).logout())},"Logout")])])])):ru("",!0),_e(Ke(Pa))],64))}},Qs=$u(wg);Qs.use(ju());Qs.use(at);Qs.mount("#app");export{dg as _,Tt as a,Sg as b,ss as c,Rg as d,ir as o,Tg as p,Ns as r,yg as u,Ag as v,Cg as w};
