(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Ma={};/**
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
 */const _u=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ad=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],u=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},yu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,u=a?n[s+1]:0,l=s+2<n.length,d=l?n[s+2]:0,p=i>>2,y=(i&3)<<4|u>>4;let I=(u&15)<<2|d>>6,R=d&63;l||(R=64,a||(I=64)),r.push(t[p],t[y],t[I],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(_u(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ad(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],u=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const y=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||u==null||d==null||y==null)throw new Rd;const I=i<<2|u>>4;if(r.push(I),d!==64){const R=u<<4&240|d>>2;if(r.push(R),y!==64){const P=d<<6&192|y;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Rd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cd=function(n){const e=_u(n);return yu.encodeByteArray(e,!0)},Zr=function(n){return Cd(n).replace(/\./g,"")},Eu=function(n){try{return yu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Sd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bd=()=>Sd().__FIREBASE_DEFAULTS__,Pd=()=>{if(typeof process>"u"||typeof Ma>"u")return;const n=Ma.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},kd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Eu(n[1]);return e&&JSON.parse(e)},ys=()=>{try{return bd()||Pd()||kd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Iu=n=>{var e,t;return(t=(e=ys())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Nd=n=>{const e=Iu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Tu=()=>{var n;return(n=ys())===null||n===void 0?void 0:n.config},wu=n=>{var e;return(e=ys())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Dd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Od(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Zr(JSON.stringify(t)),Zr(JSON.stringify(a)),""].join(".")}/**
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
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function Ld(){var n;const e=(n=ys())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Md(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ud(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fd(){const n=Ee();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Bd(){return!Ld()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function jd(){try{return typeof indexedDB=="object"}catch{return!1}}function qd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const $d="FirebaseError";class et extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=$d,Object.setPrototypeOf(this,et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,or.prototype.create)}}class or{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Gd(i,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new et(s,u,r)}}function Gd(n,e){return n.replace(Hd,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Hd=/\{\$([^}]+)}/g;function zd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function es(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(xa(i)&&xa(a)){if(!es(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function xa(n){return n!==null&&typeof n=="object"}/**
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
 */function ar(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Un(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Kd(n,e){const t=new Wd(n,e);return t.subscribe.bind(t)}class Wd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Qd(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=li),s.error===void 0&&(s.error=li),s.complete===void 0&&(s.complete=li);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function li(){}/**
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
 */function we(n){return n&&n._delegate?n._delegate:n}class Vt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Dt="[DEFAULT]";/**
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
 */class Yd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Dd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xd(e))try{this.getOrInitializeService({instanceIdentifier:Dt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Dt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dt){return this.instances.has(e)}getOptions(e=Dt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(i);r===u&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Jd(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dt){return this.component?this.component.multipleInstances?e:Dt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jd(n){return n===Dt?void 0:n}function Xd(n){return n.instantiationMode==="EAGER"}/**
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
 */class Zd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Yd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var B;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(B||(B={}));const ef={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},tf=B.INFO,nf={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},rf=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=nf[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hi{constructor(e){this.name=e,this._logLevel=tf,this._logHandler=rf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ef[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}const sf=(n,e)=>e.some(t=>n instanceof t);let Ua,Fa;function of(){return Ua||(Ua=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function af(){return Fa||(Fa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vu=new WeakMap,Ti=new WeakMap,Au=new WeakMap,hi=new WeakMap,zi=new WeakMap;function cf(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(ft(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&vu.set(t,n)}).catch(()=>{}),zi.set(e,n),e}function uf(n){if(Ti.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Ti.set(n,e)}let wi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ti.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Au.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ft(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function lf(n){wi=n(wi)}function hf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(di(this),e,...t);return Au.set(r,e.sort?e.sort():[e]),ft(r)}:af().includes(n)?function(...e){return n.apply(di(this),e),ft(vu.get(this))}:function(...e){return ft(n.apply(di(this),e))}}function df(n){return typeof n=="function"?hf(n):(n instanceof IDBTransaction&&uf(n),sf(n,of())?new Proxy(n,wi):n)}function ft(n){if(n instanceof IDBRequest)return cf(n);if(hi.has(n))return hi.get(n);const e=df(n);return e!==n&&(hi.set(n,e),zi.set(e,n)),e}const di=n=>zi.get(n);function ff(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),u=ft(a);return r&&a.addEventListener("upgradeneeded",l=>{r(ft(a.result),l.oldVersion,l.newVersion,ft(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),u.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const pf=["get","getKey","getAll","getAllKeys","count"],gf=["put","add","delete","clear"],fi=new Map;function Ba(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(fi.get(e))return fi.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=gf.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||pf.includes(t)))return;const i=async function(a,...u){const l=this.transaction(a,s?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),s&&l.done]))[0]};return fi.set(e,i),i}lf(n=>({...n,get:(e,t,r)=>Ba(e,t)||n.get(e,t,r),has:(e,t)=>!!Ba(e,t)||n.has(e,t)}));/**
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
 */class mf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(_f(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function _f(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vi="@firebase/app",ja="0.10.18";/**
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
 */const Ye=new Hi("@firebase/app"),yf="@firebase/app-compat",Ef="@firebase/analytics-compat",If="@firebase/analytics",Tf="@firebase/app-check-compat",wf="@firebase/app-check",vf="@firebase/auth",Af="@firebase/auth-compat",Rf="@firebase/database",Cf="@firebase/data-connect",Sf="@firebase/database-compat",bf="@firebase/functions",Pf="@firebase/functions-compat",kf="@firebase/installations",Nf="@firebase/installations-compat",Df="@firebase/messaging",Of="@firebase/messaging-compat",Vf="@firebase/performance",Lf="@firebase/performance-compat",Mf="@firebase/remote-config",xf="@firebase/remote-config-compat",Uf="@firebase/storage",Ff="@firebase/storage-compat",Bf="@firebase/firestore",jf="@firebase/vertexai",qf="@firebase/firestore-compat",$f="firebase",Gf="11.2.0";/**
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
 */const Ai="[DEFAULT]",Hf={[vi]:"fire-core",[yf]:"fire-core-compat",[If]:"fire-analytics",[Ef]:"fire-analytics-compat",[wf]:"fire-app-check",[Tf]:"fire-app-check-compat",[vf]:"fire-auth",[Af]:"fire-auth-compat",[Rf]:"fire-rtdb",[Cf]:"fire-data-connect",[Sf]:"fire-rtdb-compat",[bf]:"fire-fn",[Pf]:"fire-fn-compat",[kf]:"fire-iid",[Nf]:"fire-iid-compat",[Df]:"fire-fcm",[Of]:"fire-fcm-compat",[Vf]:"fire-perf",[Lf]:"fire-perf-compat",[Mf]:"fire-rc",[xf]:"fire-rc-compat",[Uf]:"fire-gcs",[Ff]:"fire-gcs-compat",[Bf]:"fire-fst",[qf]:"fire-fst-compat",[jf]:"fire-vertex","fire-js":"fire-js",[$f]:"fire-js-all"};/**
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
 */const ts=new Map,zf=new Map,Ri=new Map;function qa(n,e){try{n.container.addComponent(e)}catch(t){Ye.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function rn(n){const e=n.name;if(Ri.has(e))return Ye.debug(`There were multiple attempts to register component ${e}.`),!1;Ri.set(e,n);for(const t of ts.values())qa(t,n);for(const t of zf.values())qa(t,n);return!0}function Ki(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ve(n){return n.settings!==void 0}/**
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
 */const Kf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pt=new or("app","Firebase",Kf);/**
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
 */class Wf{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pt.create("app-deleted",{appName:this._name})}}/**
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
 */const dn=Gf;function Ru(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ai,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw pt.create("bad-app-name",{appName:String(s)});if(t||(t=Tu()),!t)throw pt.create("no-options");const i=ts.get(s);if(i){if(es(t,i.options)&&es(r,i.config))return i;throw pt.create("duplicate-app",{appName:s})}const a=new Zd(s);for(const l of Ri.values())a.addComponent(l);const u=new Wf(t,r,a);return ts.set(s,u),u}function Cu(n=Ai){const e=ts.get(n);if(!e&&n===Ai&&Tu())return Ru();if(!e)throw pt.create("no-app",{appName:n});return e}function gt(n,e,t){var r;let s=(r=Hf[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const u=[`Unable to register library "${s}" with version "${e}":`];i&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ye.warn(u.join(" "));return}rn(new Vt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Qf="firebase-heartbeat-database",Yf=1,Yn="firebase-heartbeat-store";let pi=null;function Su(){return pi||(pi=ff(Qf,Yf,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Yn)}catch(t){console.warn(t)}}}}).catch(n=>{throw pt.create("idb-open",{originalErrorMessage:n.message})})),pi}async function Jf(n){try{const t=(await Su()).transaction(Yn),r=await t.objectStore(Yn).get(bu(n));return await t.done,r}catch(e){if(e instanceof et)Ye.warn(e.message);else{const t=pt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ye.warn(t.message)}}}async function $a(n,e){try{const r=(await Su()).transaction(Yn,"readwrite");await r.objectStore(Yn).put(e,bu(n)),await r.done}catch(t){if(t instanceof et)Ye.warn(t.message);else{const r=pt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ye.warn(r.message)}}}function bu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Xf=1024,Zf=30*24*60*60*1e3;class ep{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new np(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ga();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=Zf}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ye.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ga(),{heartbeatsToSend:r,unsentEntries:s}=tp(this._heartbeatsCache.heartbeats),i=Zr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Ye.warn(t),""}}}function Ga(){return new Date().toISOString().substring(0,10)}function tp(n,e=Xf){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Ha(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ha(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class np{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jd()?qd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Jf(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return $a(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return $a(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ha(n){return Zr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function rp(n){rn(new Vt("platform-logger",e=>new mf(e),"PRIVATE")),rn(new Vt("heartbeat",e=>new ep(e),"PRIVATE")),gt(vi,ja,n),gt(vi,ja,"esm2017"),gt("fire-js","")}rp("");var sp="firebase",ip="11.2.0";/**
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
 */gt(sp,ip,"app");var za=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mt,Pu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,g){function _(){}_.prototype=g.prototype,T.D=g.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(E,w,A){for(var m=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)m[qe-2]=arguments[qe];return g.prototype[w].apply(E,m)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,g,_){_||(_=0);var E=Array(16);if(typeof g=="string")for(var w=0;16>w;++w)E[w]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(w=0;16>w;++w)E[w]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=T.g[0],_=T.g[1],w=T.g[2];var A=T.g[3],m=g+(A^_&(w^A))+E[0]+3614090360&4294967295;g=_+(m<<7&4294967295|m>>>25),m=A+(w^g&(_^w))+E[1]+3905402710&4294967295,A=g+(m<<12&4294967295|m>>>20),m=w+(_^A&(g^_))+E[2]+606105819&4294967295,w=A+(m<<17&4294967295|m>>>15),m=_+(g^w&(A^g))+E[3]+3250441966&4294967295,_=w+(m<<22&4294967295|m>>>10),m=g+(A^_&(w^A))+E[4]+4118548399&4294967295,g=_+(m<<7&4294967295|m>>>25),m=A+(w^g&(_^w))+E[5]+1200080426&4294967295,A=g+(m<<12&4294967295|m>>>20),m=w+(_^A&(g^_))+E[6]+2821735955&4294967295,w=A+(m<<17&4294967295|m>>>15),m=_+(g^w&(A^g))+E[7]+4249261313&4294967295,_=w+(m<<22&4294967295|m>>>10),m=g+(A^_&(w^A))+E[8]+1770035416&4294967295,g=_+(m<<7&4294967295|m>>>25),m=A+(w^g&(_^w))+E[9]+2336552879&4294967295,A=g+(m<<12&4294967295|m>>>20),m=w+(_^A&(g^_))+E[10]+4294925233&4294967295,w=A+(m<<17&4294967295|m>>>15),m=_+(g^w&(A^g))+E[11]+2304563134&4294967295,_=w+(m<<22&4294967295|m>>>10),m=g+(A^_&(w^A))+E[12]+1804603682&4294967295,g=_+(m<<7&4294967295|m>>>25),m=A+(w^g&(_^w))+E[13]+4254626195&4294967295,A=g+(m<<12&4294967295|m>>>20),m=w+(_^A&(g^_))+E[14]+2792965006&4294967295,w=A+(m<<17&4294967295|m>>>15),m=_+(g^w&(A^g))+E[15]+1236535329&4294967295,_=w+(m<<22&4294967295|m>>>10),m=g+(w^A&(_^w))+E[1]+4129170786&4294967295,g=_+(m<<5&4294967295|m>>>27),m=A+(_^w&(g^_))+E[6]+3225465664&4294967295,A=g+(m<<9&4294967295|m>>>23),m=w+(g^_&(A^g))+E[11]+643717713&4294967295,w=A+(m<<14&4294967295|m>>>18),m=_+(A^g&(w^A))+E[0]+3921069994&4294967295,_=w+(m<<20&4294967295|m>>>12),m=g+(w^A&(_^w))+E[5]+3593408605&4294967295,g=_+(m<<5&4294967295|m>>>27),m=A+(_^w&(g^_))+E[10]+38016083&4294967295,A=g+(m<<9&4294967295|m>>>23),m=w+(g^_&(A^g))+E[15]+3634488961&4294967295,w=A+(m<<14&4294967295|m>>>18),m=_+(A^g&(w^A))+E[4]+3889429448&4294967295,_=w+(m<<20&4294967295|m>>>12),m=g+(w^A&(_^w))+E[9]+568446438&4294967295,g=_+(m<<5&4294967295|m>>>27),m=A+(_^w&(g^_))+E[14]+3275163606&4294967295,A=g+(m<<9&4294967295|m>>>23),m=w+(g^_&(A^g))+E[3]+4107603335&4294967295,w=A+(m<<14&4294967295|m>>>18),m=_+(A^g&(w^A))+E[8]+1163531501&4294967295,_=w+(m<<20&4294967295|m>>>12),m=g+(w^A&(_^w))+E[13]+2850285829&4294967295,g=_+(m<<5&4294967295|m>>>27),m=A+(_^w&(g^_))+E[2]+4243563512&4294967295,A=g+(m<<9&4294967295|m>>>23),m=w+(g^_&(A^g))+E[7]+1735328473&4294967295,w=A+(m<<14&4294967295|m>>>18),m=_+(A^g&(w^A))+E[12]+2368359562&4294967295,_=w+(m<<20&4294967295|m>>>12),m=g+(_^w^A)+E[5]+4294588738&4294967295,g=_+(m<<4&4294967295|m>>>28),m=A+(g^_^w)+E[8]+2272392833&4294967295,A=g+(m<<11&4294967295|m>>>21),m=w+(A^g^_)+E[11]+1839030562&4294967295,w=A+(m<<16&4294967295|m>>>16),m=_+(w^A^g)+E[14]+4259657740&4294967295,_=w+(m<<23&4294967295|m>>>9),m=g+(_^w^A)+E[1]+2763975236&4294967295,g=_+(m<<4&4294967295|m>>>28),m=A+(g^_^w)+E[4]+1272893353&4294967295,A=g+(m<<11&4294967295|m>>>21),m=w+(A^g^_)+E[7]+4139469664&4294967295,w=A+(m<<16&4294967295|m>>>16),m=_+(w^A^g)+E[10]+3200236656&4294967295,_=w+(m<<23&4294967295|m>>>9),m=g+(_^w^A)+E[13]+681279174&4294967295,g=_+(m<<4&4294967295|m>>>28),m=A+(g^_^w)+E[0]+3936430074&4294967295,A=g+(m<<11&4294967295|m>>>21),m=w+(A^g^_)+E[3]+3572445317&4294967295,w=A+(m<<16&4294967295|m>>>16),m=_+(w^A^g)+E[6]+76029189&4294967295,_=w+(m<<23&4294967295|m>>>9),m=g+(_^w^A)+E[9]+3654602809&4294967295,g=_+(m<<4&4294967295|m>>>28),m=A+(g^_^w)+E[12]+3873151461&4294967295,A=g+(m<<11&4294967295|m>>>21),m=w+(A^g^_)+E[15]+530742520&4294967295,w=A+(m<<16&4294967295|m>>>16),m=_+(w^A^g)+E[2]+3299628645&4294967295,_=w+(m<<23&4294967295|m>>>9),m=g+(w^(_|~A))+E[0]+4096336452&4294967295,g=_+(m<<6&4294967295|m>>>26),m=A+(_^(g|~w))+E[7]+1126891415&4294967295,A=g+(m<<10&4294967295|m>>>22),m=w+(g^(A|~_))+E[14]+2878612391&4294967295,w=A+(m<<15&4294967295|m>>>17),m=_+(A^(w|~g))+E[5]+4237533241&4294967295,_=w+(m<<21&4294967295|m>>>11),m=g+(w^(_|~A))+E[12]+1700485571&4294967295,g=_+(m<<6&4294967295|m>>>26),m=A+(_^(g|~w))+E[3]+2399980690&4294967295,A=g+(m<<10&4294967295|m>>>22),m=w+(g^(A|~_))+E[10]+4293915773&4294967295,w=A+(m<<15&4294967295|m>>>17),m=_+(A^(w|~g))+E[1]+2240044497&4294967295,_=w+(m<<21&4294967295|m>>>11),m=g+(w^(_|~A))+E[8]+1873313359&4294967295,g=_+(m<<6&4294967295|m>>>26),m=A+(_^(g|~w))+E[15]+4264355552&4294967295,A=g+(m<<10&4294967295|m>>>22),m=w+(g^(A|~_))+E[6]+2734768916&4294967295,w=A+(m<<15&4294967295|m>>>17),m=_+(A^(w|~g))+E[13]+1309151649&4294967295,_=w+(m<<21&4294967295|m>>>11),m=g+(w^(_|~A))+E[4]+4149444226&4294967295,g=_+(m<<6&4294967295|m>>>26),m=A+(_^(g|~w))+E[11]+3174756917&4294967295,A=g+(m<<10&4294967295|m>>>22),m=w+(g^(A|~_))+E[2]+718787259&4294967295,w=A+(m<<15&4294967295|m>>>17),m=_+(A^(w|~g))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+g&4294967295,T.g[1]=T.g[1]+(w+(m<<21&4294967295|m>>>11))&4294967295,T.g[2]=T.g[2]+w&4294967295,T.g[3]=T.g[3]+A&4294967295}r.prototype.u=function(T,g){g===void 0&&(g=T.length);for(var _=g-this.blockSize,E=this.B,w=this.h,A=0;A<g;){if(w==0)for(;A<=_;)s(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<g;)if(E[w++]=T.charCodeAt(A++),w==this.blockSize){s(this,E),w=0;break}}else for(;A<g;)if(E[w++]=T[A++],w==this.blockSize){s(this,E),w=0;break}}this.h=w,this.o+=g},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var g=1;g<T.length-8;++g)T[g]=0;var _=8*this.o;for(g=T.length-8;g<T.length;++g)T[g]=_&255,_/=256;for(this.u(T),T=Array(16),g=_=0;4>g;++g)for(var E=0;32>E;E+=8)T[_++]=this.g[g]>>>E&255;return T};function i(T,g){var _=u;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=g(T)}function a(T,g){this.h=g;for(var _=[],E=!0,w=T.length-1;0<=w;w--){var A=T[w]|0;E&&A==g||(_[w]=A,E=!1)}this.g=_}var u={};function l(T){return-128<=T&&128>T?i(T,function(g){return new a([g|0],0>g?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return y;if(0>T)return N(d(-T));for(var g=[],_=1,E=0;T>=_;E++)g[E]=T/_|0,_*=4294967296;return new a(g,0)}function p(T,g){if(T.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(T.charAt(0)=="-")return N(p(T.substring(1),g));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(g,8)),E=y,w=0;w<T.length;w+=8){var A=Math.min(8,T.length-w),m=parseInt(T.substring(w,w+A),g);8>A?(A=d(Math.pow(g,A)),E=E.j(A).add(d(m))):(E=E.j(_),E=E.add(d(m)))}return E}var y=l(0),I=l(1),R=l(16777216);n=a.prototype,n.m=function(){if(O(this))return-N(this).m();for(var T=0,g=1,_=0;_<this.g.length;_++){var E=this.i(_);T+=(0<=E?E:4294967296+E)*g,g*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(P(this))return"0";if(O(this))return"-"+N(this).toString(T);for(var g=d(Math.pow(T,6)),_=this,E="";;){var w=ee(_,g).g;_=H(_,w.j(g));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=w,P(_))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function P(T){if(T.h!=0)return!1;for(var g=0;g<T.g.length;g++)if(T.g[g]!=0)return!1;return!0}function O(T){return T.h==-1}n.l=function(T){return T=H(this,T),O(T)?-1:P(T)?0:1};function N(T){for(var g=T.g.length,_=[],E=0;E<g;E++)_[E]=~T.g[E];return new a(_,~T.h).add(I)}n.abs=function(){return O(this)?N(this):this},n.add=function(T){for(var g=Math.max(this.g.length,T.g.length),_=[],E=0,w=0;w<=g;w++){var A=E+(this.i(w)&65535)+(T.i(w)&65535),m=(A>>>16)+(this.i(w)>>>16)+(T.i(w)>>>16);E=m>>>16,A&=65535,m&=65535,_[w]=m<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function H(T,g){return T.add(N(g))}n.j=function(T){if(P(this)||P(T))return y;if(O(this))return O(T)?N(this).j(N(T)):N(N(this).j(T));if(O(T))return N(this.j(N(T)));if(0>this.l(R)&&0>T.l(R))return d(this.m()*T.m());for(var g=this.g.length+T.g.length,_=[],E=0;E<2*g;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(var w=0;w<T.g.length;w++){var A=this.i(E)>>>16,m=this.i(E)&65535,qe=T.i(w)>>>16,En=T.i(w)&65535;_[2*E+2*w]+=m*En,z(_,2*E+2*w),_[2*E+2*w+1]+=A*En,z(_,2*E+2*w+1),_[2*E+2*w+1]+=m*qe,z(_,2*E+2*w+1),_[2*E+2*w+2]+=A*qe,z(_,2*E+2*w+2)}for(E=0;E<g;E++)_[E]=_[2*E+1]<<16|_[2*E];for(E=g;E<2*g;E++)_[E]=0;return new a(_,0)};function z(T,g){for(;(T[g]&65535)!=T[g];)T[g+1]+=T[g]>>>16,T[g]&=65535,g++}function K(T,g){this.g=T,this.h=g}function ee(T,g){if(P(g))throw Error("division by zero");if(P(T))return new K(y,y);if(O(T))return g=ee(N(T),g),new K(N(g.g),N(g.h));if(O(g))return g=ee(T,N(g)),new K(N(g.g),g.h);if(30<T.g.length){if(O(T)||O(g))throw Error("slowDivide_ only works with positive integers.");for(var _=I,E=g;0>=E.l(T);)_=Pe(_),E=Pe(E);var w=te(_,1),A=te(E,1);for(E=te(E,2),_=te(_,2);!P(E);){var m=A.add(E);0>=m.l(T)&&(w=w.add(_),A=m),E=te(E,1),_=te(_,1)}return g=H(T,w.j(g)),new K(w,g)}for(w=y;0<=T.l(g);){for(_=Math.max(1,Math.floor(T.m()/g.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=d(_),m=A.j(g);O(m)||0<m.l(T);)_-=E,A=d(_),m=A.j(g);P(A)&&(A=I),w=w.add(A),T=H(T,m)}return new K(w,T)}n.A=function(T){return ee(this,T).h},n.and=function(T){for(var g=Math.max(this.g.length,T.g.length),_=[],E=0;E<g;E++)_[E]=this.i(E)&T.i(E);return new a(_,this.h&T.h)},n.or=function(T){for(var g=Math.max(this.g.length,T.g.length),_=[],E=0;E<g;E++)_[E]=this.i(E)|T.i(E);return new a(_,this.h|T.h)},n.xor=function(T){for(var g=Math.max(this.g.length,T.g.length),_=[],E=0;E<g;E++)_[E]=this.i(E)^T.i(E);return new a(_,this.h^T.h)};function Pe(T){for(var g=T.g.length+1,_=[],E=0;E<g;E++)_[E]=T.i(E)<<1|T.i(E-1)>>>31;return new a(_,T.h)}function te(T,g){var _=g>>5;g%=32;for(var E=T.g.length-_,w=[],A=0;A<E;A++)w[A]=0<g?T.i(A+_)>>>g|T.i(A+_+1)<<32-g:T.i(A+_);return new a(w,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Pu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,mt=a}).apply(typeof za<"u"?za:typeof self<"u"?self:typeof window<"u"?window:{});var Mr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ku,Fn,Nu,qr,Ci,Du,Ou,Vu;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mr=="object"&&Mr];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,c){if(c)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var v=o[f];if(!(v in h))break e;h=h[v]}o=o[o.length-1],f=h[o],c=c(f),c!=f&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function i(o,c){o instanceof String&&(o+="");var h=0,f=!1,v={next:function(){if(!f&&h<o.length){var C=h++;return{value:c(C,o[C]),done:!1}}return f=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}s("Array.prototype.values",function(o){return o||function(){return i(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function l(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function p(o,c,h){return o.call.apply(o.bind,arguments)}function y(o,c,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,f),o.apply(c,v)}}return function(){return o.apply(c,arguments)}}function I(o,c,h){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:y,I.apply(null,arguments)}function R(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function P(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,v,C){for(var k=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)k[Q-2]=arguments[Q];return c.prototype[v].apply(f,k)}}function O(o){const c=o.length;if(0<c){const h=Array(c);for(let f=0;f<c;f++)h[f]=o[f];return h}return[]}function N(o,c){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(l(f)){const v=o.length||0,C=f.length||0;o.length=v+C;for(let k=0;k<C;k++)o[v+k]=f[k]}else o.push(f)}}class H{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function z(o){return/^[\s\xa0]*$/.test(o)}function K(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function ee(o){return ee[" "](o),o}ee[" "]=function(){};var Pe=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function te(o,c,h){for(const f in o)c.call(h,o[f],f,o)}function T(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function g(o){const c={};for(const h in o)c[h]=o[h];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,c){let h,f;for(let v=1;v<arguments.length;v++){f=arguments[v];for(h in f)o[h]=f[h];for(let C=0;C<_.length;C++)h=_[C],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function w(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function A(o){u.setTimeout(()=>{throw o},0)}function m(){var o=Bs;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class qe{constructor(){this.h=this.g=null}add(c,h){const f=En.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var En=new H(()=>new $h,o=>o.reset());class $h{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let In,Tn=!1,Bs=new qe,Mo=()=>{const o=u.Promise.resolve(void 0);In=()=>{o.then(Gh)}};var Gh=()=>{for(var o;o=m();){try{o.h.call(o.g)}catch(h){A(h)}var c=En;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}Tn=!1};function tt(){this.s=this.s,this.C=this.C}tt.prototype.s=!1,tt.prototype.ma=function(){this.s||(this.s=!0,this.N())},tt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var Hh=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};u.addEventListener("test",h,c),u.removeEventListener("test",h,c)}catch{}return o}();function wn(o,c){if(de.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(Pe){e:{try{ee(c.nodeName);var v=!0;break e}catch{}v=!1}v||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:zh[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&wn.aa.h.call(this)}}P(wn,de);var zh={2:"touch",3:"pen",4:"mouse"};wn.prototype.h=function(){wn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var _r="closure_listenable_"+(1e6*Math.random()|0),Kh=0;function Wh(o,c,h,f,v){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=v,this.key=++Kh,this.da=this.fa=!1}function yr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Er(o){this.src=o,this.g={},this.h=0}Er.prototype.add=function(o,c,h,f,v){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var k=qs(o,c,f,v);return-1<k?(c=o[k],h||(c.fa=!1)):(c=new Wh(c,this.src,C,!!f,v),c.fa=h,o.push(c)),c};function js(o,c){var h=c.type;if(h in o.g){var f=o.g[h],v=Array.prototype.indexOf.call(f,c,void 0),C;(C=0<=v)&&Array.prototype.splice.call(f,v,1),C&&(yr(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function qs(o,c,h,f){for(var v=0;v<o.length;++v){var C=o[v];if(!C.da&&C.listener==c&&C.capture==!!h&&C.ha==f)return v}return-1}var $s="closure_lm_"+(1e6*Math.random()|0),Gs={};function xo(o,c,h,f,v){if(Array.isArray(c)){for(var C=0;C<c.length;C++)xo(o,c[C],h,f,v);return null}return h=Bo(h),o&&o[_r]?o.K(c,h,d(f)?!!f.capture:!1,v):Qh(o,c,h,!1,f,v)}function Qh(o,c,h,f,v,C){if(!c)throw Error("Invalid event type");var k=d(v)?!!v.capture:!!v,Q=zs(o);if(Q||(o[$s]=Q=new Er(o)),h=Q.add(c,h,f,k,C),h.proxy)return h;if(f=Yh(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)Hh||(v=k),v===void 0&&(v=!1),o.addEventListener(c.toString(),f,v);else if(o.attachEvent)o.attachEvent(Fo(c.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Yh(){function o(h){return c.call(o.src,o.listener,h)}const c=Jh;return o}function Uo(o,c,h,f,v){if(Array.isArray(c))for(var C=0;C<c.length;C++)Uo(o,c[C],h,f,v);else f=d(f)?!!f.capture:!!f,h=Bo(h),o&&o[_r]?(o=o.i,c=String(c).toString(),c in o.g&&(C=o.g[c],h=qs(C,h,f,v),-1<h&&(yr(C[h]),Array.prototype.splice.call(C,h,1),C.length==0&&(delete o.g[c],o.h--)))):o&&(o=zs(o))&&(c=o.g[c.toString()],o=-1,c&&(o=qs(c,h,f,v)),(h=-1<o?c[o]:null)&&Hs(h))}function Hs(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[_r])js(c.i,o);else{var h=o.type,f=o.proxy;c.removeEventListener?c.removeEventListener(h,f,o.capture):c.detachEvent?c.detachEvent(Fo(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=zs(c))?(js(h,o),h.h==0&&(h.src=null,c[$s]=null)):yr(o)}}}function Fo(o){return o in Gs?Gs[o]:Gs[o]="on"+o}function Jh(o,c){if(o.da)o=!0;else{c=new wn(c,this);var h=o.listener,f=o.ha||o.src;o.fa&&Hs(o),o=h.call(f,c)}return o}function zs(o){return o=o[$s],o instanceof Er?o:null}var Ks="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bo(o){return typeof o=="function"?o:(o[Ks]||(o[Ks]=function(c){return o.handleEvent(c)}),o[Ks])}function fe(){tt.call(this),this.i=new Er(this),this.M=this,this.F=null}P(fe,tt),fe.prototype[_r]=!0,fe.prototype.removeEventListener=function(o,c,h,f){Uo(this,o,c,h,f)};function Ie(o,c){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=c.type||c,typeof c=="string")c=new de(c,o);else if(c instanceof de)c.target=c.target||o;else{var v=c;c=new de(f,o),E(c,v)}if(v=!0,h)for(var C=h.length-1;0<=C;C--){var k=c.g=h[C];v=Ir(k,f,!0,c)&&v}if(k=c.g=o,v=Ir(k,f,!0,c)&&v,v=Ir(k,f,!1,c)&&v,h)for(C=0;C<h.length;C++)k=c.g=h[C],v=Ir(k,f,!1,c)&&v}fe.prototype.N=function(){if(fe.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],f=0;f<h.length;f++)yr(h[f]);delete o.g[c],o.h--}}this.F=null},fe.prototype.K=function(o,c,h,f){return this.i.add(String(o),c,!1,h,f)},fe.prototype.L=function(o,c,h,f){return this.i.add(String(o),c,!0,h,f)};function Ir(o,c,h,f){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var v=!0,C=0;C<c.length;++C){var k=c[C];if(k&&!k.da&&k.capture==h){var Q=k.listener,ce=k.ha||k.src;k.fa&&js(o.i,k),v=Q.call(ce,f)!==!1&&v}}return v&&!f.defaultPrevented}function jo(o,c,h){if(typeof o=="function")h&&(o=I(o,h));else if(o&&typeof o.handleEvent=="function")o=I(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(o,c||0)}function qo(o){o.g=jo(()=>{o.g=null,o.i&&(o.i=!1,qo(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Xh extends tt{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:qo(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vn(o){tt.call(this),this.h=o,this.g={}}P(vn,tt);var $o=[];function Go(o){te(o.g,function(c,h){this.g.hasOwnProperty(h)&&Hs(c)},o),o.g={}}vn.prototype.N=function(){vn.aa.N.call(this),Go(this)},vn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ws=u.JSON.stringify,Zh=u.JSON.parse,ed=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function Qs(){}Qs.prototype.h=null;function Ho(o){return o.h||(o.h=o.i())}function zo(){}var An={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ys(){de.call(this,"d")}P(Ys,de);function Js(){de.call(this,"c")}P(Js,de);var bt={},Ko=null;function Tr(){return Ko=Ko||new fe}bt.La="serverreachability";function Wo(o){de.call(this,bt.La,o)}P(Wo,de);function Rn(o){const c=Tr();Ie(c,new Wo(c))}bt.STAT_EVENT="statevent";function Qo(o,c){de.call(this,bt.STAT_EVENT,o),this.stat=c}P(Qo,de);function Te(o){const c=Tr();Ie(c,new Qo(c,o))}bt.Ma="timingevent";function Yo(o,c){de.call(this,bt.Ma,o),this.size=c}P(Yo,de);function Cn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},c)}function Sn(){this.g=!0}Sn.prototype.xa=function(){this.g=!1};function td(o,c,h,f,v,C){o.info(function(){if(o.g)if(C)for(var k="",Q=C.split("&"),ce=0;ce<Q.length;ce++){var G=Q[ce].split("=");if(1<G.length){var pe=G[0];G=G[1];var ge=pe.split("_");k=2<=ge.length&&ge[1]=="type"?k+(pe+"="+G+"&"):k+(pe+"=redacted&")}}else k=null;else k=C;return"XMLHTTP REQ ("+f+") [attempt "+v+"]: "+c+`
`+h+`
`+k})}function nd(o,c,h,f,v,C,k){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+v+"]: "+c+`
`+h+`
`+C+" "+k})}function $t(o,c,h,f){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+sd(o,h)+(f?" "+f:"")})}function rd(o,c){o.info(function(){return"TIMEOUT: "+c})}Sn.prototype.info=function(){};function sd(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var v=f[1];if(Array.isArray(v)&&!(1>v.length)){var C=v[0];if(C!="noop"&&C!="stop"&&C!="close")for(var k=1;k<v.length;k++)v[k]=""}}}}return Ws(h)}catch{return c}}var wr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Jo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xs;function vr(){}P(vr,Qs),vr.prototype.g=function(){return new XMLHttpRequest},vr.prototype.i=function(){return{}},Xs=new vr;function nt(o,c,h,f){this.j=o,this.i=c,this.l=h,this.R=f||1,this.U=new vn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Xo}function Xo(){this.i=null,this.g="",this.h=!1}var Zo={},Zs={};function ei(o,c,h){o.L=1,o.v=Sr($e(c)),o.m=h,o.P=!0,ea(o,null)}function ea(o,c){o.F=Date.now(),Ar(o),o.A=$e(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),pa(h.i,"t",f),o.C=0,h=o.j.J,o.h=new Xo,o.g=Da(o.j,h?c:null,!o.m),0<o.O&&(o.M=new Xh(I(o.Y,o,o.g),o.O)),c=o.U,h=o.g,f=o.ca;var v="readystatechange";Array.isArray(v)||(v&&($o[0]=v.toString()),v=$o);for(var C=0;C<v.length;C++){var k=xo(h,v[C],f||c.handleEvent,!1,c.h||c);if(!k)break;c.g[k.key]=k}c=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Rn(),td(o.i,o.u,o.A,o.l,o.R,o.m)}nt.prototype.ca=function(o){o=o.target;const c=this.M;c&&Ge(o)==3?c.j():this.Y(o)},nt.prototype.Y=function(o){try{if(o==this.g)e:{const ge=Ge(this.g);var c=this.g.Ba();const zt=this.g.Z();if(!(3>ge)&&(ge!=3||this.g&&(this.h.h||this.g.oa()||Ta(this.g)))){this.J||ge!=4||c==7||(c==8||0>=zt?Rn(3):Rn(2)),ti(this);var h=this.g.Z();this.X=h;t:if(ta(this)){var f=Ta(this.g);o="";var v=f.length,C=Ge(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pt(this),bn(this);var k="";break t}this.h.i=new u.TextDecoder}for(c=0;c<v;c++)this.h.h=!0,o+=this.h.i.decode(f[c],{stream:!(C&&c==v-1)});f.length=0,this.h.g+=o,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=h==200,nd(this.i,this.u,this.A,this.l,this.R,ge,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Q,ce=this.g;if((Q=ce.g?ce.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!z(Q)){var G=Q;break t}}G=null}if(h=G)$t(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ni(this,h);else{this.o=!1,this.s=3,Te(12),Pt(this),bn(this);break e}}if(this.P){h=!0;let ke;for(;!this.J&&this.C<k.length;)if(ke=id(this,k),ke==Zs){ge==4&&(this.s=4,Te(14),h=!1),$t(this.i,this.l,null,"[Incomplete Response]");break}else if(ke==Zo){this.s=4,Te(15),$t(this.i,this.l,k,"[Invalid Chunk]"),h=!1;break}else $t(this.i,this.l,ke,null),ni(this,ke);if(ta(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ge!=4||k.length!=0||this.h.h||(this.s=1,Te(16),h=!1),this.o=this.o&&h,!h)$t(this.i,this.l,k,"[Invalid Chunked Response]"),Pt(this),bn(this);else if(0<k.length&&!this.W){this.W=!0;var pe=this.j;pe.g==this&&pe.ba&&!pe.M&&(pe.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),ci(pe),pe.M=!0,Te(11))}}else $t(this.i,this.l,k,null),ni(this,k);ge==4&&Pt(this),this.o&&!this.J&&(ge==4?ba(this.j,this):(this.o=!1,Ar(this)))}else wd(this.g),h==400&&0<k.indexOf("Unknown SID")?(this.s=3,Te(12)):(this.s=0,Te(13)),Pt(this),bn(this)}}}catch{}finally{}};function ta(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function id(o,c){var h=o.C,f=c.indexOf(`
`,h);return f==-1?Zs:(h=Number(c.substring(h,f)),isNaN(h)?Zo:(f+=1,f+h>c.length?Zs:(c=c.slice(f,f+h),o.C=f+h,c)))}nt.prototype.cancel=function(){this.J=!0,Pt(this)};function Ar(o){o.S=Date.now()+o.I,na(o,o.I)}function na(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Cn(I(o.ba,o),c)}function ti(o){o.B&&(u.clearTimeout(o.B),o.B=null)}nt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(rd(this.i,this.A),this.L!=2&&(Rn(),Te(17)),Pt(this),this.s=2,bn(this)):na(this,this.S-o)};function bn(o){o.j.G==0||o.J||ba(o.j,o)}function Pt(o){ti(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Go(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function ni(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||ri(h.h,o))){if(!o.K&&ri(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var v=f;if(v[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Or(h),Nr(h);else break e;ai(h),Te(18)}}else h.za=v[1],0<h.za-h.T&&37500>v[2]&&h.F&&h.v==0&&!h.C&&(h.C=Cn(I(h.Za,h),6e3));if(1>=ia(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Nt(h,11)}else if((o.K||h.g==o)&&Or(h),!z(c))for(v=h.Da.g.parse(c),c=0;c<v.length;c++){let G=v[c];if(h.T=G[0],G=G[1],h.G==2)if(G[0]=="c"){h.K=G[1],h.ia=G[2];const pe=G[3];pe!=null&&(h.la=pe,h.j.info("VER="+h.la));const ge=G[4];ge!=null&&(h.Aa=ge,h.j.info("SVER="+h.Aa));const zt=G[5];zt!=null&&typeof zt=="number"&&0<zt&&(f=1.5*zt,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const ke=o.g;if(ke){const Lr=ke.g?ke.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Lr){var C=f.h;C.g||Lr.indexOf("spdy")==-1&&Lr.indexOf("quic")==-1&&Lr.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(si(C,C.h),C.h=null))}if(f.D){const ui=ke.g?ke.g.getResponseHeader("X-HTTP-Session-Id"):null;ui&&(f.ya=ui,Y(f.I,f.D,ui))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var k=o;if(f.qa=Na(f,f.J?f.ia:null,f.W),k.K){oa(f.h,k);var Q=k,ce=f.L;ce&&(Q.I=ce),Q.B&&(ti(Q),Ar(Q)),f.g=k}else Ca(f);0<h.i.length&&Dr(h)}else G[0]!="stop"&&G[0]!="close"||Nt(h,7);else h.G==3&&(G[0]=="stop"||G[0]=="close"?G[0]=="stop"?Nt(h,7):oi(h):G[0]!="noop"&&h.l&&h.l.ta(G),h.v=0)}}Rn(4)}catch{}}var od=class{constructor(o,c){this.g=o,this.map=c}};function ra(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sa(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ia(o){return o.h?1:o.g?o.g.size:0}function ri(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function si(o,c){o.g?o.g.add(c):o.h=c}function oa(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}ra.prototype.cancel=function(){if(this.i=aa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function aa(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return O(o.i)}function ad(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var c=[],h=o.length,f=0;f<h;f++)c.push(o[f]);return c}c=[],h=0;for(f in o)c[h++]=o[f];return c}function cd(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const f in o)c[h++]=f;return c}}}function ca(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=cd(o),f=ad(o),v=f.length,C=0;C<v;C++)c.call(void 0,f[C],h&&h[C],o)}var ua=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ud(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),v=null;if(0<=f){var C=o[h].substring(0,f);v=o[h].substring(f+1)}else C=o[h];c(C,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function kt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof kt){this.h=o.h,Rr(this,o.j),this.o=o.o,this.g=o.g,Cr(this,o.s),this.l=o.l;var c=o.i,h=new Nn;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),la(this,h),this.m=o.m}else o&&(c=String(o).match(ua))?(this.h=!1,Rr(this,c[1]||"",!0),this.o=Pn(c[2]||""),this.g=Pn(c[3]||"",!0),Cr(this,c[4]),this.l=Pn(c[5]||"",!0),la(this,c[6]||"",!0),this.m=Pn(c[7]||"")):(this.h=!1,this.i=new Nn(null,this.h))}kt.prototype.toString=function(){var o=[],c=this.j;c&&o.push(kn(c,ha,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(kn(c,ha,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(kn(h,h.charAt(0)=="/"?dd:hd,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",kn(h,pd)),o.join("")};function $e(o){return new kt(o)}function Rr(o,c,h){o.j=h?Pn(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Cr(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function la(o,c,h){c instanceof Nn?(o.i=c,gd(o.i,o.h)):(h||(c=kn(c,fd)),o.i=new Nn(c,o.h))}function Y(o,c,h){o.i.set(c,h)}function Sr(o){return Y(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Pn(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function kn(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,ld),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function ld(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ha=/[#\/\?@]/g,hd=/[#\?:]/g,dd=/[#\?]/g,fd=/[#\?@]/g,pd=/#/g;function Nn(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function rt(o){o.g||(o.g=new Map,o.h=0,o.i&&ud(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=Nn.prototype,n.add=function(o,c){rt(this),this.i=null,o=Gt(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function da(o,c){rt(o),c=Gt(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function fa(o,c){return rt(o),c=Gt(o,c),o.g.has(c)}n.forEach=function(o,c){rt(this),this.g.forEach(function(h,f){h.forEach(function(v){o.call(c,v,f,this)},this)},this)},n.na=function(){rt(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let f=0;f<c.length;f++){const v=o[f];for(let C=0;C<v.length;C++)h.push(c[f])}return h},n.V=function(o){rt(this);let c=[];if(typeof o=="string")fa(this,o)&&(c=c.concat(this.g.get(Gt(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},n.set=function(o,c){return rt(this),this.i=null,o=Gt(this,o),fa(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function pa(o,c,h){da(o,c),0<h.length&&(o.i=null,o.g.set(Gt(o,c),O(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var f=c[h];const C=encodeURIComponent(String(f)),k=this.V(f);for(f=0;f<k.length;f++){var v=C;k[f]!==""&&(v+="="+encodeURIComponent(String(k[f]))),o.push(v)}}return this.i=o.join("&")};function Gt(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function gd(o,c){c&&!o.j&&(rt(o),o.i=null,o.g.forEach(function(h,f){var v=f.toLowerCase();f!=v&&(da(this,f),pa(this,v,h))},o)),o.j=c}function md(o,c){const h=new Sn;if(u.Image){const f=new Image;f.onload=R(st,h,"TestLoadImage: loaded",!0,c,f),f.onerror=R(st,h,"TestLoadImage: error",!1,c,f),f.onabort=R(st,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=R(st,h,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else c(!1)}function _d(o,c){const h=new Sn,f=new AbortController,v=setTimeout(()=>{f.abort(),st(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:f.signal}).then(C=>{clearTimeout(v),C.ok?st(h,"TestPingServer: ok",!0,c):st(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(v),st(h,"TestPingServer: error",!1,c)})}function st(o,c,h,f,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),f(h)}catch{}}function yd(){this.g=new ed}function Ed(o,c,h){const f=h||"";try{ca(o,function(v,C){let k=v;d(v)&&(k=Ws(v)),c.push(f+C+"="+encodeURIComponent(k))})}catch(v){throw c.push(f+"type="+encodeURIComponent("_badmap")),v}}function br(o){this.l=o.Ub||null,this.j=o.eb||!1}P(br,Qs),br.prototype.g=function(){return new Pr(this.l,this.j)},br.prototype.i=function(o){return function(){return o}}({});function Pr(o,c){fe.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Pr,fe),n=Pr.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,On(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Dn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,On(this)),this.g&&(this.readyState=3,On(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ga(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function ga(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Dn(this):On(this),this.readyState==3&&ga(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Dn(this))},n.Qa=function(o){this.g&&(this.response=o,Dn(this))},n.ga=function(){this.g&&Dn(this)};function Dn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,On(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function On(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Pr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ma(o){let c="";return te(o,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function ii(o,c,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=ma(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):Y(o,c,h))}function Z(o){fe.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Z,fe);var Id=/^https?$/i,Td=["POST","PUT"];n=Z.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xs.g(),this.v=this.o?Ho(this.o):Ho(Xs),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(C){_a(this,C);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var v in f)h.set(v,f[v]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const C of f.keys())h.set(C,f.get(C));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(C=>C.toLowerCase()=="content-type"),v=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Td,c,void 0))||f||v||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,k]of h)this.g.setRequestHeader(C,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ia(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){_a(this,C)}};function _a(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,ya(o),kr(o)}function ya(o){o.A||(o.A=!0,Ie(o,"complete"),Ie(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ie(this,"complete"),Ie(this,"abort"),kr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),kr(this,!0)),Z.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ea(this):this.bb())},n.bb=function(){Ea(this)};function Ea(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Ge(o)!=4||o.Z()!=2)){if(o.u&&Ge(o)==4)jo(o.Ea,0,o);else if(Ie(o,"readystatechange"),Ge(o)==4){o.h=!1;try{const k=o.Z();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var f;if(f=k===0){var v=String(o.D).match(ua)[1]||null;!v&&u.self&&u.self.location&&(v=u.self.location.protocol.slice(0,-1)),f=!Id.test(v?v.toLowerCase():"")}h=f}if(h)Ie(o,"complete"),Ie(o,"success");else{o.m=6;try{var C=2<Ge(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",ya(o)}}finally{kr(o)}}}}function kr(o,c){if(o.g){Ia(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Ie(o,"ready");try{h.onreadystatechange=f}catch{}}}function Ia(o){o.I&&(u.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Ge(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Ge(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Zh(c)}};function Ta(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function wd(o){const c={};o=(o.g&&2<=Ge(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(z(o[f]))continue;var h=w(o[f]);const v=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const C=c[v]||[];c[v]=C,C.push(h)}T(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vn(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function wa(o){this.Aa=0,this.i=[],this.j=new Sn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Vn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Vn("baseRetryDelayMs",5e3,o),this.cb=Vn("retryDelaySeedMs",1e4,o),this.Wa=Vn("forwardChannelMaxRetries",2,o),this.wa=Vn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new ra(o&&o.concurrentRequestLimit),this.Da=new yd,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=wa.prototype,n.la=8,n.G=1,n.connect=function(o,c,h,f){Te(0),this.W=o,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=Na(this,null,this.W),Dr(this)};function oi(o){if(va(o),o.G==3){var c=o.U++,h=$e(o.I);if(Y(h,"SID",o.K),Y(h,"RID",c),Y(h,"TYPE","terminate"),Ln(o,h),c=new nt(o,o.j,c),c.L=2,c.v=Sr($e(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=c.v,h=!0),h||(c.g=Da(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Ar(c)}ka(o)}function Nr(o){o.g&&(ci(o),o.g.cancel(),o.g=null)}function va(o){Nr(o),o.u&&(u.clearTimeout(o.u),o.u=null),Or(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function Dr(o){if(!sa(o.h)&&!o.s){o.s=!0;var c=o.Ga;In||Mo(),Tn||(In(),Tn=!0),Bs.add(c,o),o.B=0}}function vd(o,c){return ia(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Cn(I(o.Ga,o,c),Pa(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const v=new nt(this,this.j,o);let C=this.o;if(this.S&&(C?(C=g(C),E(C,this.S)):C=this.S),this.m!==null||this.O||(v.H=C,C=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=Ra(this,v,c),h=$e(this.I),Y(h,"RID",o),Y(h,"CVER",22),this.D&&Y(h,"X-HTTP-Session-Id",this.D),Ln(this,h),C&&(this.O?c="headers="+encodeURIComponent(String(ma(C)))+"&"+c:this.m&&ii(h,this.m,C)),si(this.h,v),this.Ua&&Y(h,"TYPE","init"),this.P?(Y(h,"$req",c),Y(h,"SID","null"),v.T=!0,ei(v,h,null)):ei(v,h,c),this.G=2}}else this.G==3&&(o?Aa(this,o):this.i.length==0||sa(this.h)||Aa(this))};function Aa(o,c){var h;c?h=c.l:h=o.U++;const f=$e(o.I);Y(f,"SID",o.K),Y(f,"RID",h),Y(f,"AID",o.T),Ln(o,f),o.m&&o.o&&ii(f,o.m,o.o),h=new nt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Ra(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),si(o.h,h),ei(h,f,c)}function Ln(o,c){o.H&&te(o.H,function(h,f){Y(c,f,h)}),o.l&&ca({},function(h,f){Y(c,f,h)})}function Ra(o,c,h){h=Math.min(o.i.length,h);var f=o.l?I(o.l.Na,o.l,o):null;e:{var v=o.i;let C=-1;for(;;){const k=["count="+h];C==-1?0<h?(C=v[0].g,k.push("ofs="+C)):C=0:k.push("ofs="+C);let Q=!0;for(let ce=0;ce<h;ce++){let G=v[ce].g;const pe=v[ce].map;if(G-=C,0>G)C=Math.max(0,v[ce].g-100),Q=!1;else try{Ed(pe,k,"req"+G+"_")}catch{f&&f(pe)}}if(Q){f=k.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,f}function Ca(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;In||Mo(),Tn||(In(),Tn=!0),Bs.add(c,o),o.v=0}}function ai(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Cn(I(o.Fa,o),Pa(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Sa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Cn(I(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Te(10),Nr(this),Sa(this))};function ci(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function Sa(o){o.g=new nt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=$e(o.qa);Y(c,"RID","rpc"),Y(c,"SID",o.K),Y(c,"AID",o.T),Y(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&Y(c,"TO",o.ja),Y(c,"TYPE","xmlhttp"),Ln(o,c),o.m&&o.o&&ii(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Sr($e(c)),h.m=null,h.P=!0,ea(h,o)}n.Za=function(){this.C!=null&&(this.C=null,Nr(this),ai(this),Te(19))};function Or(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function ba(o,c){var h=null;if(o.g==c){Or(o),ci(o),o.g=null;var f=2}else if(ri(o.h,c))h=c.D,oa(o.h,c),f=1;else return;if(o.G!=0){if(c.o)if(f==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var v=o.B;f=Tr(),Ie(f,new Yo(f,h)),Dr(o)}else Ca(o);else if(v=c.s,v==3||v==0&&0<c.X||!(f==1&&vd(o,c)||f==2&&ai(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),v){case 1:Nt(o,5);break;case 4:Nt(o,10);break;case 3:Nt(o,6);break;default:Nt(o,2)}}}function Pa(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function Nt(o,c){if(o.j.info("Error code "+c),c==2){var h=I(o.fb,o),f=o.Xa;const v=!f;f=new kt(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Rr(f,"https"),Sr(f),v?md(f.toString(),h):_d(f.toString(),h)}else Te(2);o.G=0,o.l&&o.l.sa(c),ka(o),va(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Te(2)):(this.j.info("Failed to ping google.com"),Te(1))};function ka(o){if(o.G=0,o.ka=[],o.l){const c=aa(o.h);(c.length!=0||o.i.length!=0)&&(N(o.ka,c),N(o.ka,o.i),o.h.i.length=0,O(o.i),o.i.length=0),o.l.ra()}}function Na(o,c,h){var f=h instanceof kt?$e(h):new kt(h);if(f.g!="")c&&(f.g=c+"."+f.g),Cr(f,f.s);else{var v=u.location;f=v.protocol,c=c?c+"."+v.hostname:v.hostname,v=+v.port;var C=new kt(null);f&&Rr(C,f),c&&(C.g=c),v&&Cr(C,v),h&&(C.l=h),f=C}return h=o.D,c=o.ya,h&&c&&Y(f,h,c),Y(f,"VER",o.la),Ln(o,f),f}function Da(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new Z(new br({eb:h})):new Z(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Oa(){}n=Oa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Vr(){}Vr.prototype.g=function(o,c){return new Se(o,c)};function Se(o,c){fe.call(this),this.g=new wa(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!z(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!z(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Ht(this)}P(Se,fe),Se.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Se.prototype.close=function(){oi(this.g)},Se.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Ws(o),o=h);c.i.push(new od(c.Ya++,o)),c.G==3&&Dr(c)},Se.prototype.N=function(){this.g.l=null,delete this.j,oi(this.g),delete this.g,Se.aa.N.call(this)};function Va(o){Ys.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}P(Va,Ys);function La(){Js.call(this),this.status=1}P(La,Js);function Ht(o){this.g=o}P(Ht,Oa),Ht.prototype.ua=function(){Ie(this.g,"a")},Ht.prototype.ta=function(o){Ie(this.g,new Va(o))},Ht.prototype.sa=function(o){Ie(this.g,new La)},Ht.prototype.ra=function(){Ie(this.g,"b")},Vr.prototype.createWebChannel=Vr.prototype.g,Se.prototype.send=Se.prototype.o,Se.prototype.open=Se.prototype.m,Se.prototype.close=Se.prototype.close,Vu=function(){return new Vr},Ou=function(){return Tr()},Du=bt,Ci={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},wr.NO_ERROR=0,wr.TIMEOUT=8,wr.HTTP_ERROR=6,qr=wr,Jo.COMPLETE="complete",Nu=Jo,zo.EventType=An,An.OPEN="a",An.CLOSE="b",An.ERROR="c",An.MESSAGE="d",fe.prototype.listen=fe.prototype.K,Fn=zo,Z.prototype.listenOnce=Z.prototype.L,Z.prototype.getLastError=Z.prototype.Ka,Z.prototype.getLastErrorCode=Z.prototype.Ba,Z.prototype.getStatus=Z.prototype.Z,Z.prototype.getResponseJson=Z.prototype.Oa,Z.prototype.getResponseText=Z.prototype.oa,Z.prototype.send=Z.prototype.ea,Z.prototype.setWithCredentials=Z.prototype.Ha,ku=Z}).apply(typeof Mr<"u"?Mr:typeof self<"u"?self:typeof window<"u"?window:{});const Ka="@firebase/firestore";/**
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
 */class _e{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_e.UNAUTHENTICATED=new _e(null),_e.GOOGLE_CREDENTIALS=new _e("google-credentials-uid"),_e.FIRST_PARTY=new _e("first-party-uid"),_e.MOCK_USER=new _e("mock-user");/**
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
 */let fn="11.2.0";/**
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
 */const Lt=new Hi("@firebase/firestore");function Wt(){return Lt.logLevel}function D(n,...e){if(Lt.logLevel<=B.DEBUG){const t=e.map(Wi);Lt.debug(`Firestore (${fn}): ${n}`,...t)}}function Je(n,...e){if(Lt.logLevel<=B.ERROR){const t=e.map(Wi);Lt.error(`Firestore (${fn}): ${n}`,...t)}}function sn(n,...e){if(Lt.logLevel<=B.WARN){const t=e.map(Wi);Lt.warn(`Firestore (${fn}): ${n}`,...t)}}function Wi(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function x(n="Unexpected state"){const e=`FIRESTORE (${fn}) INTERNAL ASSERTION FAILED: `+n;throw Je(e),new Error(e)}function W(n,e){n||x()}function F(n,e){return n}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends et{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class We{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Lu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class op{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(_e.UNAUTHENTICATED))}shutdown(){}}class ap{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class cp{constructor(e){this.t=e,this.currentUser=_e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){W(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new We;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new We,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},u=l=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>u(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?u(l):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new We)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(W(typeof r.accessToken=="string"),new Lu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string"),new _e(e)}}class up{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=_e.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class lp{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new up(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(_e.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dp{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){W(this.o===void 0);const r=i=>{i.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,D("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(W(typeof t.token=="string"),this.R=t.token,new hp(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function fp(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Mu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=fp(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function q(n,e){return n<e?-1:n>e?1:0}function on(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class ie{static now(){return ie.fromMillis(Date.now())}static fromDate(e){return ie.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new ie(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new V(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class U{static fromTimestamp(e){return new U(e)}static min(){return new U(new ie(0,0))}static max(){return new U(new ie(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Oe{constructor(e,t,r){t===void 0?t=0:t>e.length&&x(),r===void 0?r=e.length-t:r>e.length-t&&x(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Oe.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Oe?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Oe.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return Math.sign(e.length-t.length)}static compareSegments(e,t){const r=Oe.isNumericId(e),s=Oe.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Oe.extractNumericId(e).compare(Oe.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return mt.fromString(e.substring(4,e.length-2))}}class J extends Oe{construct(e,t,r){return new J(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new J(t)}static emptyPath(){return new J([])}}const pp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class le extends Oe{construct(e,t,r){return new le(e,t,r)}static isValidIdentifier(e){return pp.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),le.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new le(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new V(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new V(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new V(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(i(),s++)}if(i(),a)throw new V(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new le(t)}static emptyPath(){return new le([])}}/**
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
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(J.fromString(e))}static fromName(e){return new L(J.fromString(e).popFirst(5))}static empty(){return new L(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&J.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return J.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new J(e.slice()))}}function gp(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=U.fromTimestamp(r===1e9?new ie(t+1,0):new ie(t,r));return new Et(s,L.empty(),e)}function mp(n){return new Et(n.readTime,n.key,-1)}class Et{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Et(U.min(),L.empty(),-1)}static max(){return new Et(U.max(),L.empty(),-1)}}function _p(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:q(n.largestBatchId,e.largestBatchId))}/**
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
 */const yp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ep{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function pn(n){if(n.code!==b.FAILED_PRECONDITION||n.message!==yp)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new S((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof S?t:S.resolve(t)}catch(t){return S.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):S.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):S.reject(t)}static resolve(e){return new S((t,r)=>{t(e)})}static reject(e){return new S((t,r)=>{r(e)})}static waitFor(e){return new S((t,r)=>{let s=0,i=0,a=!1;e.forEach(u=>{++s,u.next(()=>{++i,a&&i===s&&t()},l=>r(l))}),a=!0,i===s&&t()})}static or(e){let t=S.resolve(!1);for(const r of e)t=t.next(s=>s?S.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new S((r,s)=>{const i=e.length,a=new Array(i);let u=0;for(let l=0;l<i;l++){const d=l;t(e[d]).next(p=>{a[d]=p,++u,u===i&&r(a)},p=>s(p))}})}static doWhile(e,t){return new S((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Ip(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function gn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Es{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Es.oe=-1;function Is(n){return n==null}function ns(n){return n===0&&1/n==-1/0}function Tp(n){return typeof n=="number"&&Number.isInteger(n)&&!ns(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function wp(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Wa(e)),e=vp(n.get(t),e);return Wa(e)}function vp(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function Wa(n){return n+""}/**
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
 */function Qa(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function At(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function xu(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class X{constructor(e,t){this.comparator=e,this.root=t||ue.EMPTY}insert(e,t){return new X(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ue.BLACK,null,null))}remove(e){return new X(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ue.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xr(this.root,e,this.comparator,!1)}getReverseIterator(){return new xr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xr(this.root,e,this.comparator,!0)}}class xr{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ue{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ue.RED,this.left=s??ue.EMPTY,this.right=i??ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ue(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ue.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw x();const e=this.left.check();if(e!==this.right.check())throw x();return e+(this.isRed()?0:1)}}ue.EMPTY=null,ue.RED=!0,ue.BLACK=!1;ue.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(e,t,r,s,i){return this}insert(e,t,r){return new ue(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class oe{constructor(e){this.comparator=e,this.data=new X(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ya(this.data.getIterator())}getIteratorFrom(e){return new Ya(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof oe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new oe(this.comparator);return t.data=e,t}}class Ya{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class be{constructor(e){this.fields=e,e.sort(le.comparator)}static empty(){return new be([])}unionWith(e){let t=new oe(le.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new be(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return on(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Uu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class he{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Uu("Invalid base64 string: "+i):i}}(e);return new he(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new he(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}he.EMPTY_BYTE_STRING=new he("");const Ap=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function It(n){if(W(!!n),typeof n=="string"){let e=0;const t=Ap.exec(n);if(W(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ne(n.seconds),nanos:ne(n.nanos)}}function ne(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Tt(n){return typeof n=="string"?he.fromBase64String(n):he.fromUint8Array(n)}/**
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
 */function Qi(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ts(n){const e=n.mapValue.fields.__previous_value__;return Qi(e)?Ts(e):e}function Jn(n){const e=It(n.mapValue.fields.__local_write_time__.timestampValue);return new ie(e.seconds,e.nanos)}/**
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
 */class Rp{constructor(e,t,r,s,i,a,u,l,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=d}}class Xn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Xn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Xn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ur={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function wt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Qi(n)?4:Sp(n)?9007199254740991:Cp(n)?10:11:x()}function Fe(n,e){if(n===e)return!0;const t=wt(n);if(t!==wt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Jn(n).isEqual(Jn(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=It(s.timestampValue),u=It(i.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Tt(s.bytesValue).isEqual(Tt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ne(s.geoPointValue.latitude)===ne(i.geoPointValue.latitude)&&ne(s.geoPointValue.longitude)===ne(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ne(s.integerValue)===ne(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ne(s.doubleValue),u=ne(i.doubleValue);return a===u?ns(a)===ns(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return on(n.arrayValue.values||[],e.arrayValue.values||[],Fe);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},u=i.mapValue.fields||{};if(Qa(a)!==Qa(u))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(u[l]===void 0||!Fe(a[l],u[l])))return!1;return!0}(n,e);default:return x()}}function Zn(n,e){return(n.values||[]).find(t=>Fe(t,e))!==void 0}function an(n,e){if(n===e)return 0;const t=wt(n),r=wt(e);if(t!==r)return q(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return q(n.booleanValue,e.booleanValue);case 2:return function(i,a){const u=ne(i.integerValue||i.doubleValue),l=ne(a.integerValue||a.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1}(n,e);case 3:return Ja(n.timestampValue,e.timestampValue);case 4:return Ja(Jn(n),Jn(e));case 5:return q(n.stringValue,e.stringValue);case 6:return function(i,a){const u=Tt(i),l=Tt(a);return u.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const u=i.split("/"),l=a.split("/");for(let d=0;d<u.length&&d<l.length;d++){const p=q(u[d],l[d]);if(p!==0)return p}return q(u.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const u=q(ne(i.latitude),ne(a.latitude));return u!==0?u:q(ne(i.longitude),ne(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Xa(n.arrayValue,e.arrayValue);case 10:return function(i,a){var u,l,d,p;const y=i.fields||{},I=a.fields||{},R=(u=y.value)===null||u===void 0?void 0:u.arrayValue,P=(l=I.value)===null||l===void 0?void 0:l.arrayValue,O=q(((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0,((p=P==null?void 0:P.values)===null||p===void 0?void 0:p.length)||0);return O!==0?O:Xa(R,P)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Ur.mapValue&&a===Ur.mapValue)return 0;if(i===Ur.mapValue)return 1;if(a===Ur.mapValue)return-1;const u=i.fields||{},l=Object.keys(u),d=a.fields||{},p=Object.keys(d);l.sort(),p.sort();for(let y=0;y<l.length&&y<p.length;++y){const I=q(l[y],p[y]);if(I!==0)return I;const R=an(u[l[y]],d[p[y]]);if(R!==0)return R}return q(l.length,p.length)}(n.mapValue,e.mapValue);default:throw x()}}function Ja(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return q(n,e);const t=It(n),r=It(e),s=q(t.seconds,r.seconds);return s!==0?s:q(t.nanos,r.nanos)}function Xa(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=an(t[s],r[s]);if(i)return i}return q(t.length,r.length)}function cn(n){return Si(n)}function Si(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=It(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Tt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return L.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Si(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Si(t.fields[a])}`;return s+"}"}(n.mapValue):x()}function $r(n){switch(wt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ts(n);return e?16+$r(e):16;case 5:return 2*n.stringValue.length;case 6:return Tt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+$r(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return At(r.fields,(i,a)=>{s+=i.length+$r(a)}),s}(n.mapValue);default:throw x()}}function bi(n){return!!n&&"integerValue"in n}function Yi(n){return!!n&&"arrayValue"in n}function Za(n){return!!n&&"nullValue"in n}function ec(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Gr(n){return!!n&&"mapValue"in n}function Cp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Gn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return At(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Gn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Gn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Sp(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ae{constructor(e){this.value=e}static empty(){return new Ae({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Gr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gn(t)}setAll(e){let t=le.emptyPath(),r={},s=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=u.popLast()}a?r[u.lastSegment()]=Gn(a):s.push(u.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Gr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Fe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Gr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){At(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ae(Gn(this.value))}}function Fu(n){const e=[];return At(n.fields,(t,r)=>{const s=new le([t]);if(Gr(r)){const i=Fu(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new be(e)}/**
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
 */class ye{constructor(e,t,r,s,i,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=u}static newInvalidDocument(e){return new ye(e,0,U.min(),U.min(),U.min(),Ae.empty(),0)}static newFoundDocument(e,t,r,s){return new ye(e,1,t,U.min(),r,s,0)}static newNoDocument(e,t){return new ye(e,2,t,U.min(),U.min(),Ae.empty(),0)}static newUnknownDocument(e,t){return new ye(e,3,t,U.min(),U.min(),Ae.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ae.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ae.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class rs{constructor(e,t){this.position=e,this.inclusive=t}}function tc(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=L.comparator(L.fromName(a.referenceValue),t.key):r=an(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function nc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Fe(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ss{constructor(e,t="asc"){this.field=e,this.dir=t}}function bp(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Bu{}class se extends Bu{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new kp(e,t,r):t==="array-contains"?new Op(e,r):t==="in"?new Vp(e,r):t==="not-in"?new Lp(e,r):t==="array-contains-any"?new Mp(e,r):new se(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Np(e,r):new Dp(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(an(t,this.value)):t!==null&&wt(this.value)===wt(t)&&this.matchesComparison(an(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Be extends Bu{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Be(e,t)}matches(e){return ju(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ju(n){return n.op==="and"}function qu(n){return Pp(n)&&ju(n)}function Pp(n){for(const e of n.filters)if(e instanceof Be)return!1;return!0}function Pi(n){if(n instanceof se)return n.field.canonicalString()+n.op.toString()+cn(n.value);if(qu(n))return n.filters.map(e=>Pi(e)).join(",");{const e=n.filters.map(t=>Pi(t)).join(",");return`${n.op}(${e})`}}function $u(n,e){return n instanceof se?function(r,s){return s instanceof se&&r.op===s.op&&r.field.isEqual(s.field)&&Fe(r.value,s.value)}(n,e):n instanceof Be?function(r,s){return s instanceof Be&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,u)=>i&&$u(a,s.filters[u]),!0):!1}(n,e):void x()}function Gu(n){return n instanceof se?function(t){return`${t.field.canonicalString()} ${t.op} ${cn(t.value)}`}(n):n instanceof Be?function(t){return t.op.toString()+" {"+t.getFilters().map(Gu).join(" ,")+"}"}(n):"Filter"}class kp extends se{constructor(e,t,r){super(e,t,r),this.key=L.fromName(r.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class Np extends se{constructor(e,t){super(e,"in",t),this.keys=Hu("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Dp extends se{constructor(e,t){super(e,"not-in",t),this.keys=Hu("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Hu(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>L.fromName(r.referenceValue))}class Op extends se{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Yi(t)&&Zn(t.arrayValue,this.value)}}class Vp extends se{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Zn(this.value.arrayValue,t)}}class Lp extends se{constructor(e,t){super(e,"not-in",t)}matches(e){if(Zn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Zn(this.value.arrayValue,t)}}class Mp extends se{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Yi(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Zn(this.value.arrayValue,r))}}/**
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
 */class xp{constructor(e,t=null,r=[],s=[],i=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=u,this.ue=null}}function rc(n,e=null,t=[],r=[],s=null,i=null,a=null){return new xp(n,e,t,r,s,i,a)}function Ji(n){const e=F(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Pi(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Is(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>cn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>cn(r)).join(",")),e.ue=t}return e.ue}function Xi(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!bp(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!$u(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!nc(n.startAt,e.startAt)&&nc(n.endAt,e.endAt)}function ki(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ws{constructor(e,t=null,r=[],s=[],i=null,a="F",u=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=u,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Up(n,e,t,r,s,i,a,u){return new ws(n,e,t,r,s,i,a,u)}function Zi(n){return new ws(n)}function sc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Fp(n){return n.collectionGroup!==null}function Hn(n){const e=F(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new oe(le.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ss(i,r))}),t.has(le.keyField().canonicalString())||e.ce.push(new ss(le.keyField(),r))}return e.ce}function Le(n){const e=F(n);return e.le||(e.le=Bp(e,Hn(n))),e.le}function Bp(n,e){if(n.limitType==="F")return rc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ss(s.field,i)});const t=n.endAt?new rs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new rs(n.startAt.position,n.startAt.inclusive):null;return rc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ni(n,e,t){return new ws(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function vs(n,e){return Xi(Le(n),Le(e))&&n.limitType===e.limitType}function zu(n){return`${Ji(Le(n))}|lt:${n.limitType}`}function Qt(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Gu(s)).join(", ")}]`),Is(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>cn(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>cn(s)).join(",")),`Target(${r})`}(Le(n))}; limitType=${n.limitType})`}function As(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):L.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Hn(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,u,l){const d=tc(a,u,l);return a.inclusive?d<=0:d<0}(r.startAt,Hn(r),s)||r.endAt&&!function(a,u,l){const d=tc(a,u,l);return a.inclusive?d>=0:d>0}(r.endAt,Hn(r),s))}(n,e)}function jp(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ku(n){return(e,t)=>{let r=!1;for(const s of Hn(n)){const i=qp(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function qp(n,e,t){const r=n.field.isKeyField()?L.comparator(e.key,t.key):function(i,a,u){const l=a.data.field(i),d=u.data.field(i);return l!==null&&d!==null?an(l,d):x()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x()}}/**
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
 */class Ft{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){At(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return xu(this.inner)}size(){return this.innerSize}}/**
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
 */const $p=new X(L.comparator);function Xe(){return $p}const Wu=new X(L.comparator);function Bn(...n){let e=Wu;for(const t of n)e=e.insert(t.key,t);return e}function Qu(n){let e=Wu;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Ot(){return zn()}function Yu(){return zn()}function zn(){return new Ft(n=>n.toString(),(n,e)=>n.isEqual(e))}const Gp=new X(L.comparator),Hp=new oe(L.comparator);function j(...n){let e=Hp;for(const t of n)e=e.add(t);return e}const zp=new oe(q);function Kp(){return zp}/**
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
 */function eo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ns(e)?"-0":e}}function Ju(n){return{integerValue:""+n}}function Wp(n,e){return Tp(e)?Ju(e):eo(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Rs{constructor(){this._=void 0}}function Qp(n,e,t){return n instanceof is?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Qi(i)&&(i=Ts(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof er?Zu(n,e):n instanceof tr?el(n,e):function(s,i){const a=Xu(s,i),u=ic(a)+ic(s.Pe);return bi(a)&&bi(s.Pe)?Ju(u):eo(s.serializer,u)}(n,e)}function Yp(n,e,t){return n instanceof er?Zu(n,e):n instanceof tr?el(n,e):t}function Xu(n,e){return n instanceof os?function(r){return bi(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class is extends Rs{}class er extends Rs{constructor(e){super(),this.elements=e}}function Zu(n,e){const t=tl(e);for(const r of n.elements)t.some(s=>Fe(s,r))||t.push(r);return{arrayValue:{values:t}}}class tr extends Rs{constructor(e){super(),this.elements=e}}function el(n,e){let t=tl(e);for(const r of n.elements)t=t.filter(s=>!Fe(s,r));return{arrayValue:{values:t}}}class os extends Rs{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function ic(n){return ne(n.integerValue||n.doubleValue)}function tl(n){return Yi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Jp(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof er&&s instanceof er||r instanceof tr&&s instanceof tr?on(r.elements,s.elements,Fe):r instanceof os&&s instanceof os?Fe(r.Pe,s.Pe):r instanceof is&&s instanceof is}(n.transform,e.transform)}class Xp{constructor(e,t){this.version=e,this.transformResults=t}}class Ne{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ne}static exists(e){return new Ne(void 0,e)}static updateTime(e){return new Ne(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Cs{}function nl(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new sl(n.key,Ne.none()):new cr(n.key,n.data,Ne.none());{const t=n.data,r=Ae.empty();let s=new oe(le.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Rt(n.key,r,new be(s.toArray()),Ne.none())}}function Zp(n,e,t){n instanceof cr?function(s,i,a){const u=s.value.clone(),l=ac(s.fieldTransforms,i,a.transformResults);u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof Rt?function(s,i,a){if(!Hr(s.precondition,i))return void i.convertToUnknownDocument(a.version);const u=ac(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(rl(s)),l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Kn(n,e,t,r){return n instanceof cr?function(i,a,u,l){if(!Hr(i.precondition,a))return u;const d=i.value.clone(),p=cc(i.fieldTransforms,l,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Rt?function(i,a,u,l){if(!Hr(i.precondition,a))return u;const d=cc(i.fieldTransforms,l,a),p=a.data;return p.setAll(rl(i)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(y=>y.field))}(n,e,t,r):function(i,a,u){return Hr(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function eg(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Xu(r.transform,s||null);i!=null&&(t===null&&(t=Ae.empty()),t.set(r.field,i))}return t||null}function oc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&on(r,s,(i,a)=>Jp(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class cr extends Cs{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Rt extends Cs{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function rl(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function ac(n,e,t){const r=new Map;W(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,u=e.data.field(i.field);r.set(i.field,Yp(a,u,t[s]))}return r}function cc(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Qp(i,a,e))}return r}class sl extends Cs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tg extends Cs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ng{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Zp(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Kn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Kn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Yu();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let u=this.applyToLocalView(a,i.mutatedFields);u=t.has(s.key)?null:u;const l=nl(a,u);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),j())}isEqual(e){return this.batchId===e.batchId&&on(this.mutations,e.mutations,(t,r)=>oc(t,r))&&on(this.baseMutations,e.baseMutations,(t,r)=>oc(t,r))}}class to{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){W(e.mutations.length===r.length);let s=function(){return Gp}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new to(e,t,r,s)}}/**
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
 */class rg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class sg{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var re,$;function ig(n){switch(n){default:return x();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function il(n){if(n===void 0)return Je("GRPC error has no .code"),b.UNKNOWN;switch(n){case re.OK:return b.OK;case re.CANCELLED:return b.CANCELLED;case re.UNKNOWN:return b.UNKNOWN;case re.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case re.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case re.INTERNAL:return b.INTERNAL;case re.UNAVAILABLE:return b.UNAVAILABLE;case re.UNAUTHENTICATED:return b.UNAUTHENTICATED;case re.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case re.NOT_FOUND:return b.NOT_FOUND;case re.ALREADY_EXISTS:return b.ALREADY_EXISTS;case re.PERMISSION_DENIED:return b.PERMISSION_DENIED;case re.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case re.ABORTED:return b.ABORTED;case re.OUT_OF_RANGE:return b.OUT_OF_RANGE;case re.UNIMPLEMENTED:return b.UNIMPLEMENTED;case re.DATA_LOSS:return b.DATA_LOSS;default:return x()}}($=re||(re={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function og(){return new TextEncoder}/**
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
 */const ag=new mt([4294967295,4294967295],0);function uc(n){const e=og().encode(n),t=new Pu;return t.update(e),new Uint8Array(t.digest())}function lc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new mt([t,r],0),new mt([s,i],0)]}class no{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new jn(`Invalid padding: ${t}`);if(r<0)throw new jn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new jn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new jn(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=mt.fromNumber(this.Te)}de(e,t,r){let s=e.add(t.multiply(mt.fromNumber(r)));return s.compare(ag)===1&&(s=new mt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=uc(e),[r,s]=lc(t);for(let i=0;i<this.hashCount;i++){const a=this.de(r,s,i);if(!this.Ee(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new no(i,s,t);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.Te===0)return;const t=uc(e),[r,s]=lc(t);for(let i=0;i<this.hashCount;i++){const a=this.de(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class jn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ss{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ur.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ss(U.min(),s,new X(q),Xe(),j())}}class ur{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ur(r,t,j(),j(),j())}}/**
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
 */class zr{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class ol{constructor(e,t){this.targetId=e,this.me=t}}class al{constructor(e,t,r=he.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class hc{constructor(){this.fe=0,this.ge=dc(),this.pe=he.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=j(),t=j(),r=j();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:x()}}),new ur(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=dc()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,W(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class cg{constructor(e){this.Be=e,this.Le=new Map,this.ke=Xe(),this.qe=Fr(),this.Qe=Fr(),this.Ke=new X(q)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.je(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.De(e.resumeToken));break;default:x()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((r,s)=>{this.je(s)&&t(s)})}Je(e){const t=e.targetId,r=e.me.count,s=this.Ye(t);if(s){const i=s.target;if(ki(i))if(r===0){const a=new L(i.path);this.We(t,a,ye.newNoDocument(a,U.min()))}else W(r===1);else{const a=this.Ze(t);if(a!==r){const u=this.Xe(e),l=u?this.et(u,e,a):1;if(l!==0){this.He(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,d)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,u;try{a=Tt(r).toUint8Array()}catch(l){if(l instanceof Uu)return sn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new no(a,s,i)}catch(l){return sn(l instanceof jn?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.Te===0?null:u}et(e,t,r){return t.me.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Be.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Be.nt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(u)||(this.We(t,i,null),s++)}),s}it(e){const t=new Map;this.Le.forEach((i,a)=>{const u=this.Ye(a);if(u){if(i.current&&ki(u.target)){const l=new L(u.target.path);this.st(l).has(a)||this.ot(a,l)||this.We(a,l,ye.newNoDocument(l,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=j();this.Qe.forEach((i,a)=>{let u=!0;a.forEachWhile(l=>{const d=this.Ye(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new Ss(e,t,this.Ke,this.ke,r);return this.ke=Xe(),this.qe=Fr(),this.Qe=Fr(),this.Ke=new X(q),s}Ue(e,t){if(!this.je(e))return;const r=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,t)?s.Fe(t,1):s.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Le.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new hc,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new oe(q),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new oe(q),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||D("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new hc),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function Fr(){return new X(L.comparator)}function dc(){return new X(L.comparator)}const ug={asc:"ASCENDING",desc:"DESCENDING"},lg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hg={and:"AND",or:"OR"};class dg{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Di(n,e){return n.useProto3Json||Is(e)?e:{value:e}}function as(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cl(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function fg(n,e){return as(n,e.toTimestamp())}function Me(n){return W(!!n),U.fromTimestamp(function(t){const r=It(t);return new ie(r.seconds,r.nanos)}(n))}function ro(n,e){return Oi(n,e).canonicalString()}function Oi(n,e){const t=function(s){return new J(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function ul(n){const e=J.fromString(n);return W(pl(e)),e}function Vi(n,e){return ro(n.databaseId,e.path)}function gi(n,e){const t=ul(e);if(t.get(1)!==n.databaseId.projectId)throw new V(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new V(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new L(hl(t))}function ll(n,e){return ro(n.databaseId,e)}function pg(n){const e=ul(n);return e.length===4?J.emptyPath():hl(e)}function Li(n){return new J(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function hl(n){return W(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function fc(n,e,t){return{name:Vi(n,e),fields:t.value.mapValue.fields}}function gg(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:x()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,p){return d.useProto3Json?(W(p===void 0||typeof p=="string"),he.fromBase64String(p||"")):(W(p===void 0||p instanceof Buffer||p instanceof Uint8Array),he.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(d){const p=d.code===void 0?b.UNKNOWN:il(d.code);return new V(p,d.message||"")}(a);t=new al(r,s,i,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=gi(n,r.document.name),i=Me(r.document.updateTime),a=r.document.createTime?Me(r.document.createTime):U.min(),u=new Ae({mapValue:{fields:r.document.fields}}),l=ye.newFoundDocument(s,i,a,u),d=r.targetIds||[],p=r.removedTargetIds||[];t=new zr(d,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=gi(n,r.document),i=r.readTime?Me(r.readTime):U.min(),a=ye.newNoDocument(s,i),u=r.removedTargetIds||[];t=new zr([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=gi(n,r.document),i=r.removedTargetIds||[];t=new zr([],i,s,null)}else{if(!("filter"in e))return x();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new sg(s,i),u=r.targetId;t=new ol(u,a)}}return t}function mg(n,e){let t;if(e instanceof cr)t={update:fc(n,e.key,e.value)};else if(e instanceof sl)t={delete:Vi(n,e.key)};else if(e instanceof Rt)t={update:fc(n,e.key,e.data),updateMask:Rg(e.fieldMask)};else{if(!(e instanceof tg))return x();t={verify:Vi(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const u=a.transform;if(u instanceof is)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof er)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof tr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof os)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw x()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:fg(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:x()}(n,e.precondition)),t}function _g(n,e){return n&&n.length>0?(W(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?Me(s.updateTime):Me(i);return a.isEqual(U.min())&&(a=Me(i)),new Xp(a,s.transformResults||[])}(t,e))):[]}function yg(n,e){return{documents:[ll(n,e.path)]}}function Eg(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=ll(n,s);const i=function(d){if(d.length!==0)return fl(Be.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(p=>function(I){return{field:Yt(I.field),direction:wg(I.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=Di(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ct:t,parent:s}}function Ig(n){let e=pg(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){W(r===1);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=function(y){const I=dl(y);return I instanceof Be&&qu(I)?I.getFilters():[I]}(t.where));let a=[];t.orderBy&&(a=function(y){return y.map(I=>function(P){return new ss(Jt(P.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(I))}(t.orderBy));let u=null;t.limit&&(u=function(y){let I;return I=typeof y=="object"?y.value:y,Is(I)?null:I}(t.limit));let l=null;t.startAt&&(l=function(y){const I=!!y.before,R=y.values||[];return new rs(R,I)}(t.startAt));let d=null;return t.endAt&&(d=function(y){const I=!y.before,R=y.values||[];return new rs(R,I)}(t.endAt)),Up(e,s,a,i,u,"F",l,d)}function Tg(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function dl(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Jt(t.unaryFilter.field);return se.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Jt(t.unaryFilter.field);return se.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Jt(t.unaryFilter.field);return se.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Jt(t.unaryFilter.field);return se.create(a,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(n):n.fieldFilter!==void 0?function(t){return se.create(Jt(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Be.create(t.compositeFilter.filters.map(r=>dl(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return x()}}(t.compositeFilter.op))}(n):x()}function wg(n){return ug[n]}function vg(n){return lg[n]}function Ag(n){return hg[n]}function Yt(n){return{fieldPath:n.canonicalString()}}function Jt(n){return le.fromServerFormat(n.fieldPath)}function fl(n){return n instanceof se?function(t){if(t.op==="=="){if(ec(t.value))return{unaryFilter:{field:Yt(t.field),op:"IS_NAN"}};if(Za(t.value))return{unaryFilter:{field:Yt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ec(t.value))return{unaryFilter:{field:Yt(t.field),op:"IS_NOT_NAN"}};if(Za(t.value))return{unaryFilter:{field:Yt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yt(t.field),op:vg(t.op),value:t.value}}}(n):n instanceof Be?function(t){const r=t.getFilters().map(s=>fl(s));return r.length===1?r[0]:{compositeFilter:{op:Ag(t.op),filters:r}}}(n):x()}function Rg(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function pl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class dt{constructor(e,t,r,s,i=U.min(),a=U.min(),u=he.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(e){return new dt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new dt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new dt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new dt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Cg{constructor(e){this.ht=e}}function Sg(n){const e=Ig({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ni(e,e.limit,"L"):e}/**
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
 */class bg{constructor(){this.ln=new Pg}addToCollectionParentIndex(e,t){return this.ln.add(t),S.resolve()}getCollectionParents(e,t){return S.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return S.resolve()}deleteFieldIndex(e,t){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,t){return S.resolve()}getDocumentsMatchingTarget(e,t){return S.resolve(null)}getIndexType(e,t){return S.resolve(0)}getFieldIndexes(e,t){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,t){return S.resolve(Et.min())}getMinOffsetFromCollectionGroup(e,t){return S.resolve(Et.min())}updateCollectionGroup(e,t,r){return S.resolve()}updateIndexEntries(e,t){return S.resolve()}}class Pg{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new oe(J.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new oe(J.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const pc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ve{static withCacheSize(e){return new ve(e,ve.DEFAULT_COLLECTION_PERCENTILE,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ve.DEFAULT_COLLECTION_PERCENTILE=10,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ve.DEFAULT=new ve(41943040,ve.DEFAULT_COLLECTION_PERCENTILE,ve.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ve.DISABLED=new ve(-1,0,0);/**
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
 */class un{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new un(0)}static Qn(){return new un(-1)}}/**
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
 */function gc([n,e],[t,r]){const s=q(n,t);return s===0?q(e,r):s}class kg{constructor(e){this.Gn=e,this.buffer=new oe(gc),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();gc(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ng{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){D("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){gn(t)?D("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await pn(t)}await this.Yn(3e5)})}}class Dg{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return S.resolve(Es.oe);const r=new kg(t);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(pc)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),pc):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let r,s,i,a,u,l,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(y=>(y>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),s=this.params.maximumSequenceNumbersToCollect):s=y,a=Date.now(),this.nthSequenceNumber(e,s))).next(y=>(r=y,u=Date.now(),this.removeTargets(e,r,t))).next(y=>(i=y,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(y=>(d=Date.now(),Wt()<=B.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${i} targets in `+(l-u)+`ms
	Removed ${y} documents in `+(d-l)+`ms
Total Duration: ${d-p}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:y})))}}function Og(n,e){return new Dg(n,e)}/**
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
 */class Vg{constructor(){this.changes=new Ft(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ye.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?S.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Lg{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Mg{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Kn(r.mutation,s,be.empty(),ie.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,j()).next(()=>r))}getLocalViewOfDocuments(e,t,r=j()){const s=Ot();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Bn();return i.forEach((u,l)=>{a=a.insert(u,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Ot();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,j()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,s){let i=Xe();const a=zn(),u=function(){return zn()}();return t.forEach((l,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof Rt)?i=i.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Kn(p.mutation,d,p.mutation.getFieldMask(),ie.now())):a.set(d.key,be.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var y;return u.set(d,new Lg(p,(y=a.get(d))!==null&&y!==void 0?y:null))}),u))}recalculateAndSaveOverlays(e,t){const r=zn();let s=new X((a,u)=>a-u),i=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(l=>{const d=t.get(l);if(d===null)return;let p=r.get(l)||be.empty();p=u.applyToLocalView(d,p),r.set(l,p);const y=(s.get(u.batchId)||j()).add(l);s=s.insert(u.batchId,y)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const l=u.getNext(),d=l.key,p=l.value,y=Yu();p.forEach(I=>{if(!i.has(I)){const R=nl(t.get(I),r.get(I));R!==null&&y.set(I,R),i=i.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,y))}return S.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return L.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Fp(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):S.resolve(Ot());let u=-1,l=i;return a.next(d=>S.forEach(d,(p,y)=>(u<y.largestBatchId&&(u=y.largestBatchId),i.get(p)?S.resolve():this.remoteDocumentCache.getEntry(e,p).next(I=>{l=l.insert(p,I)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,l,d,j())).next(p=>({batchId:u,changes:Qu(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(r=>{let s=Bn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Bn();return this.indexManager.getCollectionParents(e,i).next(u=>S.forEach(u,l=>{const d=function(y,I){return new ws(I,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(p=>{p.forEach((y,I)=>{a=a.insert(y,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((l,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,ye.newInvalidDocument(p)))});let u=Bn();return a.forEach((l,d)=>{const p=i.get(l);p!==void 0&&Kn(p.mutation,d,be.empty(),ie.now()),As(t,d)&&(u=u.insert(l,d))}),u})}}/**
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
 */class xg{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return S.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Me(s.createTime)}}(t)),S.resolve()}getNamedQuery(e,t){return S.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(s){return{name:s.name,query:Sg(s.bundledQuery),readTime:Me(s.readTime)}}(t)),S.resolve()}}/**
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
 */class Ug{constructor(){this.overlays=new X(L.comparator),this.dr=new Map}getOverlay(e,t){return S.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Ot();return S.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.Tt(e,t,i)}),S.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.dr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.dr.delete(r)),S.resolve()}getOverlaysForCollection(e,t,r){const s=Ot(),i=t.length+1,a=new L(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const l=u.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return S.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new X((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=i.get(d.largestBatchId);p===null&&(p=Ot(),i=i.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const u=Ot(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,p)=>u.set(d,p)),!(u.size()>=s)););return S.resolve(u)}Tt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.dr.get(s.largestBatchId).delete(r.key);this.dr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new rg(t,r));let i=this.dr.get(t);i===void 0&&(i=j(),this.dr.set(t,i)),this.dr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Fg{constructor(){this.sessionToken=he.EMPTY_BYTE_STRING}getSessionToken(e){return S.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,S.resolve()}}/**
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
 */class so{constructor(){this.Er=new oe(ae.Ar),this.Rr=new oe(ae.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){const r=new ae(e,t);this.Er=this.Er.add(r),this.Rr=this.Rr.add(r)}mr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.gr(new ae(e,t))}pr(e,t){e.forEach(r=>this.removeReference(r,t))}yr(e){const t=new L(new J([])),r=new ae(t,e),s=new ae(t,e+1),i=[];return this.Rr.forEachInRange([r,s],a=>{this.gr(a),i.push(a.key)}),i}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new L(new J([])),r=new ae(t,e),s=new ae(t,e+1);let i=j();return this.Rr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new ae(e,0),r=this.Er.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ae{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return L.comparator(e.key,t.key)||q(e.br,t.br)}static Vr(e,t){return q(e.br,t.br)||L.comparator(e.key,t.key)}}/**
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
 */class Bg{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new oe(ae.Ar)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ng(i,t,r,s);this.mutationQueue.push(a);for(const u of s)this.vr=this.vr.add(new ae(u.key,i)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return S.resolve(a)}lookupMutationBatch(e,t){return S.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Fr(r),i=s<0?0:s;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ae(t,0),s=new ae(t,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],a=>{const u=this.Cr(a.br);i.push(u)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new oe(q);return t.forEach(s=>{const i=new ae(s,0),a=new ae(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,a],u=>{r=r.add(u.br)})}),S.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;L.isDocumentKey(i)||(i=i.child(""));const a=new ae(new L(i),0);let u=new oe(q);return this.vr.forEachWhile(l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(l.br)),!0)},a),S.resolve(this.Mr(u))}Mr(e){const t=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){W(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return S.forEach(t.mutations,s=>{const i=new ae(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Bn(e){}containsKey(e,t){const r=new ae(t,0),s=this.vr.firstAfterOrEqual(r);return S.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class jg{constructor(e){this.Nr=e,this.docs=function(){return new X(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Nr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return S.resolve(r?r.document.mutableCopy():ye.newInvalidDocument(t))}getEntries(e,t){let r=Xe();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ye.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Xe();const a=t.path,u=new L(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:d,value:{document:p}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||_p(mp(p),r)<=0||(s.has(p.key)||As(t,p))&&(i=i.insert(p.key,p.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,t,r,s){x()}Br(e,t){return S.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new qg(this)}getSize(e){return S.resolve(this.size)}}class qg extends Vg{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),S.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class $g{constructor(e){this.persistence=e,this.Lr=new Ft(t=>Ji(t),Xi),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.kr=0,this.qr=new so,this.targetCount=0,this.Qr=un.qn()}forEachTarget(e,t){return this.Lr.forEach((r,s)=>t(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.kr&&(this.kr=t),S.resolve()}Un(e){this.Lr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new un(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,S.resolve()}updateTargetData(e,t){return this.Un(t),S.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Lr.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.Lr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,u.targetId)),s++)}),S.waitFor(i).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,t){const r=this.Lr.get(t)||null;return S.resolve(r)}addMatchingKeys(e,t,r){return this.qr.mr(t,r),S.resolve()}removeMatchingKeys(e,t,r){this.qr.pr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),S.resolve()}getMatchingKeysForTargetId(e,t){const r=this.qr.Sr(t);return S.resolve(r)}containsKey(e,t){return S.resolve(this.qr.containsKey(t))}}/**
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
 */class gl{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Es(0),this.Ur=!1,this.Ur=!0,this.Wr=new Fg,this.referenceDelegate=e(this),this.Gr=new $g(this),this.indexManager=new bg,this.remoteDocumentCache=function(s){return new jg(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new Cg(t),this.jr=new xg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ug,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Kr[e.toKey()];return r||(r=new Bg(t,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,r){D("MemoryPersistence","Starting transaction:",e);const s=new Gg(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,t){return S.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,t)))}}class Gg extends Ep{constructor(e){super(),this.currentSequenceNumber=e}}class io{constructor(e){this.persistence=e,this.Zr=new so,this.Xr=null}static ei(e){return new io(e)}get ti(){if(this.Xr)return this.Xr;throw x()}addReference(e,t,r){return this.Zr.addReference(r,t),this.ti.delete(r.toString()),S.resolve()}removeReference(e,t,r){return this.Zr.removeReference(r,t),this.ti.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),S.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.ti,r=>{const s=L.fromPath(r);return this.ni(e,s).next(i=>{i||t.removeEntry(s,U.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(r=>{r?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return S.or([()=>S.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class cs{constructor(e,t){this.persistence=e,this.ri=new Ft(r=>wp(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Og(this,t)}static ei(e,t){return new cs(e,t)}Hr(){}Jr(e){return S.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}nr(e){let t=0;return this.er(e,r=>{t++}).next(()=>t)}er(e,t){return S.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?S.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Br(e,a=>this.ir(e,a,t).next(u=>{u||(r++,i.removeEntry(a,U.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),S.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),S.resolve()}removeReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),S.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),S.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=$r(e.data.value)),t}ir(e,t,r){return S.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.ri.get(t);return S.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class oo{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Wi=r,this.Gi=s}static zi(e,t){let r=j(),s=j();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new oo(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Hg{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class zg{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return Bd()?8:Ip(Ee())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Xi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.es(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Hg;return this.ts(e,t,a).next(u=>{if(i.result=u,this.Hi)return this.ns(e,t,a,u.size)})}).next(()=>i.result)}ns(e,t,r,s){return r.documentReadCount<this.Ji?(Wt()<=B.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Qt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),S.resolve()):(Wt()<=B.DEBUG&&D("QueryEngine","Query:",Qt(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(Wt()<=B.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Qt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Le(t))):S.resolve())}Xi(e,t){if(sc(t))return S.resolve(null);let r=Le(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Ni(t,null,"F"),r=Le(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=j(...i);return this.Zi.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(l=>{const d=this.rs(t,u);return this.ss(t,d,a,l.readTime)?this.Xi(e,Ni(t,null,"F")):this.os(e,d,t,l)}))})))}es(e,t,r,s){return sc(t)||s.isEqual(U.min())?S.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const a=this.rs(t,i);return this.ss(t,a,r,s)?S.resolve(null):(Wt()<=B.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qt(t)),this.os(e,a,t,gp(s,-1)).next(u=>u))})}rs(e,t){let r=new oe(Ku(e));return t.forEach((s,i)=>{As(e,i)&&(r=r.add(i))}),r}ss(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,t,r){return Wt()<=B.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Qt(t)),this.Zi.getDocumentsMatchingQuery(e,t,Et.min(),r)}os(e,t,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class Kg{constructor(e,t,r,s){this.persistence=e,this._s=t,this.serializer=s,this.us=new X(q),this.cs=new Ft(i=>Ji(i),Xi),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Mg(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function Wg(n,e,t,r){return new Kg(n,e,t,r)}async function ml(n,e){const t=F(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Ps(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],u=[];let l=j();for(const d of s){a.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}for(const d of i){u.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(r,l).next(d=>({Ts:d,removedBatchIds:a,addedBatchIds:u}))})})}function Qg(n,e){const t=F(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.hs.newChangeBuffer({trackRemovals:!0});return function(u,l,d,p){const y=d.batch,I=y.keys();let R=S.resolve();return I.forEach(P=>{R=R.next(()=>p.getEntry(l,P)).next(O=>{const N=d.docVersions.get(P);W(N!==null),O.version.compareTo(N)<0&&(y.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),p.addEntry(O)))})}),R.next(()=>u.mutationQueue.removeMutationBatch(l,y))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let l=j();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(l=l.add(u.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function _l(n){const e=F(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function Yg(n,e){const t=F(n),r=e.snapshotVersion;let s=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.hs.newChangeBuffer({trackRemovals:!0});s=t.us;const u=[];e.targetChanges.forEach((p,y)=>{const I=s.get(y);if(!I)return;u.push(t.Gr.removeMatchingKeys(i,p.removedDocuments,y).next(()=>t.Gr.addMatchingKeys(i,p.addedDocuments,y)));let R=I.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(y)!==null?R=R.withResumeToken(he.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):p.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(p.resumeToken,r)),s=s.insert(y,R),function(O,N,H){return O.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0}(I,R,p)&&u.push(t.Gr.updateTargetData(i,R))});let l=Xe(),d=j();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))}),u.push(Jg(i,a,e.documentUpdates).next(p=>{l=p.Is,d=p.ds})),!r.isEqual(U.min())){const p=t.Gr.getLastRemoteSnapshotVersion(i).next(y=>t.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));u.push(p)}return S.waitFor(u).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,d)).next(()=>l)}).then(i=>(t.us=s,i))}function Jg(n,e,t){let r=j(),s=j();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Xe();return t.forEach((u,l)=>{const d=i.get(u);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),l.isNoDocument()&&l.version.isEqual(U.min())?(e.removeEntry(u,l.readTime),a=a.insert(u,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(u,l)):D("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",l.version)}),{Is:a,ds:s}})}function Xg(n,e){const t=F(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Zg(n,e){const t=F(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Gr.getTargetData(r,e).next(i=>i?(s=i,S.resolve(s)):t.Gr.allocateTargetId(r).next(a=>(s=new dt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.us=t.us.insert(r.targetId,r),t.cs.set(e,r.targetId)),r})}async function Mi(n,e,t){const r=F(n),s=r.us.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!gn(a))throw a;D("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function mc(n,e,t){const r=F(n);let s=U.min(),i=j();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,p){const y=F(l),I=y.cs.get(p);return I!==void 0?S.resolve(y.us.get(I)):y.Gr.getTargetData(d,p)}(r,a,Le(e)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(a,u.targetId).next(l=>{i=l})}).next(()=>r._s.getDocumentsMatchingQuery(a,e,t?s:U.min(),t?i:j())).next(u=>(em(r,jp(e),u),{documents:u,Es:i})))}function em(n,e,t){let r=n.ls.get(e)||U.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.ls.set(e,r)}class _c{constructor(){this.activeTargetIds=Kp()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tm{constructor(){this._o=new _c,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,r){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new _c,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class nm{uo(e){}shutdown(){}}/**
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
 */class yc{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Br=null;function mi(){return Br===null?Br=function(){return 268435456+Math.round(2147483648*Math.random())}():Br++,"0x"+Br.toString(16)}/**
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
 */const rm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class sm{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const me="WebChannelConnection";class im extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+t.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(t,r,s,i,a){const u=mi(),l=this.No(t,r.toUriEncodedString());D("RestConnection",`Sending RPC '${t}' ${u}:`,l,s);const d={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(d,i,a),this.Lo(t,l,d,s).then(p=>(D("RestConnection",`Received RPC '${t}' ${u}: `,p),p),p=>{throw sn("RestConnection",`RPC '${t}' ${u} failed with error: `,p,"url: ",l,"request:",s),p})}ko(t,r,s,i,a,u){return this.Oo(t,r,s,i,a)}Bo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}No(t,r){const s=rm[t];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,r,s){const i=mi();return new Promise((a,u)=>{const l=new ku;l.setWithCredentials(!0),l.listenOnce(Nu.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case qr.NO_ERROR:const p=l.getResponseJson();D(me,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(p)),a(p);break;case qr.TIMEOUT:D(me,`RPC '${e}' ${i} timed out`),u(new V(b.DEADLINE_EXCEEDED,"Request time out"));break;case qr.HTTP_ERROR:const y=l.getStatus();if(D(me,`RPC '${e}' ${i} failed with status:`,y,"response text:",l.getResponseText()),y>0){let I=l.getResponseJson();Array.isArray(I)&&(I=I[0]);const R=I==null?void 0:I.error;if(R&&R.status&&R.message){const P=function(N){const H=N.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(H)>=0?H:b.UNKNOWN}(R.status);u(new V(P,R.message))}else u(new V(b.UNKNOWN,"Server responded with status "+l.getStatus()))}else u(new V(b.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{D(me,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);D(me,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",d,r,15)})}qo(e,t,r){const s=mi(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Vu(),u=Ou(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Bo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const p=i.join("");D(me,`Creating RPC '${e}' stream ${s}: ${p}`,l);const y=a.createWebChannel(p,l);let I=!1,R=!1;const P=new sm({Eo:N=>{R?D(me,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(I||(D(me,`Opening RPC '${e}' stream ${s} transport.`),y.open(),I=!0),D(me,`RPC '${e}' stream ${s} sending:`,N),y.send(N))},Ao:()=>y.close()}),O=(N,H,z)=>{N.listen(H,K=>{try{z(K)}catch(ee){setTimeout(()=>{throw ee},0)}})};return O(y,Fn.EventType.OPEN,()=>{R||(D(me,`RPC '${e}' stream ${s} transport opened.`),P.So())}),O(y,Fn.EventType.CLOSE,()=>{R||(R=!0,D(me,`RPC '${e}' stream ${s} transport closed`),P.Do())}),O(y,Fn.EventType.ERROR,N=>{R||(R=!0,sn(me,`RPC '${e}' stream ${s} transport errored:`,N),P.Do(new V(b.UNAVAILABLE,"The operation could not be completed")))}),O(y,Fn.EventType.MESSAGE,N=>{var H;if(!R){const z=N.data[0];W(!!z);const K=z,ee=(K==null?void 0:K.error)||((H=K[0])===null||H===void 0?void 0:H.error);if(ee){D(me,`RPC '${e}' stream ${s} received error:`,ee);const Pe=ee.status;let te=function(_){const E=re[_];if(E!==void 0)return il(E)}(Pe),T=ee.message;te===void 0&&(te=b.INTERNAL,T="Unknown error status: "+Pe+" with message "+ee.message),R=!0,P.Do(new V(te,T)),y.close()}else D(me,`RPC '${e}' stream ${s} received:`,z),P.vo(z)}}),O(u,Du.STAT_EVENT,N=>{N.stat===Ci.PROXY?D(me,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Ci.NOPROXY&&D(me,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.bo()},0),P}}function _i(){return typeof document<"u"?document:null}/**
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
 */function bs(n){return new dg(n,!0)}/**
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
 */class yl{constructor(e,t,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=t,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,t-r);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class El{constructor(e,t,r,s,i,a,u,l){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new yl(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===b.RESOURCE_EXHAUSTED?(Je(t.toString()),Je("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===t&&this.I_(r,s)},r=>{e(()=>{const s=new V(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.d_(s)})})}I_(e,t){const r=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.d_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return D("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class om extends El{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=gg(this.serializer,e),r=function(i){if(!("targetChange"in i))return U.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?Me(a.readTime):U.min()}(e);return this.listener.R_(t,r)}V_(e){const t={};t.database=Li(this.serializer),t.addTarget=function(i,a){let u;const l=a.target;if(u=ki(l)?{documents:yg(i,l)}:{query:Eg(i,l).ct},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=cl(i,a.resumeToken);const d=Di(i,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){u.readTime=as(i,a.snapshotVersion.toTimestamp());const d=Di(i,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);const r=Tg(this.serializer,e);r&&(t.labels=r),this.c_(t)}m_(e){const t={};t.database=Li(this.serializer),t.removeTarget=e,this.c_(t)}}class am extends El{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return W(!!e.streamToken),this.lastStreamToken=e.streamToken,W(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){W(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=_g(e.writeResults,e.commitTime),r=Me(e.commitTime);return this.listener.y_(r,t)}w_(){const e={};e.database=Li(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>mg(this.serializer,r))};this.c_(t)}}/**
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
 */class cm extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new V(b.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Oo(e,Oi(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(b.UNKNOWN,i.toString())})}ko(e,t,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.ko(e,Oi(t,r),s,a,u,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(b.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class um{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Je(t),this.C_=!1):D("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class lm{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(a=>{r.enqueueAndForget(async()=>{Bt(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(l){const d=F(l);d.k_.add(4),await lr(d),d.K_.set("Unknown"),d.k_.delete(4),await Ps(d)}(this))})}),this.K_=new um(r,s)}}async function Ps(n){if(Bt(n))for(const e of n.q_)await e(!0)}async function lr(n){for(const e of n.q_)await e(!1)}function Il(n,e){const t=F(n);t.L_.has(e.targetId)||(t.L_.set(e.targetId,e),lo(t)?uo(t):mn(t).s_()&&co(t,e))}function ao(n,e){const t=F(n),r=mn(t);t.L_.delete(e),r.s_()&&Tl(t,e),t.L_.size===0&&(r.s_()?r.a_():Bt(t)&&t.K_.set("Unknown"))}function co(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}mn(n).V_(e)}function Tl(n,e){n.U_.xe(e),mn(n).m_(e)}function uo(n){n.U_=new cg({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.L_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),mn(n).start(),n.K_.F_()}function lo(n){return Bt(n)&&!mn(n).i_()&&n.L_.size>0}function Bt(n){return F(n).k_.size===0}function wl(n){n.U_=void 0}async function hm(n){n.K_.set("Online")}async function dm(n){n.L_.forEach((e,t)=>{co(n,e)})}async function fm(n,e){wl(n),lo(n)?(n.K_.O_(e),uo(n)):n.K_.set("Unknown")}async function pm(n,e,t){if(n.K_.set("Online"),e instanceof al&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const u of i.targetIds)s.L_.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.L_.delete(u),s.U_.removeTarget(u))}(n,e)}catch(r){D("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await us(n,r)}else if(e instanceof zr?n.U_.$e(e):e instanceof ol?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(U.min()))try{const r=await _l(n.localStore);t.compareTo(r)>=0&&await function(i,a){const u=i.U_.it(a);return u.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const p=i.L_.get(d);p&&i.L_.set(d,p.withResumeToken(l.resumeToken,a))}}),u.targetMismatches.forEach((l,d)=>{const p=i.L_.get(l);if(!p)return;i.L_.set(l,p.withResumeToken(he.EMPTY_BYTE_STRING,p.snapshotVersion)),Tl(i,l);const y=new dt(p.target,l,d,p.sequenceNumber);co(i,y)}),i.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){D("RemoteStore","Failed to raise snapshot:",r),await us(n,r)}}async function us(n,e,t){if(!gn(e))throw e;n.k_.add(1),await lr(n),n.K_.set("Offline"),t||(t=()=>_l(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await Ps(n)})}function vl(n,e){return e().catch(t=>us(n,t,e))}async function ks(n){const e=F(n),t=vt(e);let r=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;gm(e);)try{const s=await Xg(e.localStore,r);if(s===null){e.B_.length===0&&t.a_();break}r=s.batchId,mm(e,s)}catch(s){await us(e,s)}Al(e)&&Rl(e)}function gm(n){return Bt(n)&&n.B_.length<10}function mm(n,e){n.B_.push(e);const t=vt(n);t.s_()&&t.f_&&t.g_(e.mutations)}function Al(n){return Bt(n)&&!vt(n).i_()&&n.B_.length>0}function Rl(n){vt(n).start()}async function _m(n){vt(n).w_()}async function ym(n){const e=vt(n);for(const t of n.B_)e.g_(t.mutations)}async function Em(n,e,t){const r=n.B_.shift(),s=to.from(r,e,t);await vl(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ks(n)}async function Im(n,e){e&&vt(n).f_&&await async function(r,s){if(function(a){return ig(a)&&a!==b.ABORTED}(s.code)){const i=r.B_.shift();vt(r).__(),await vl(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ks(r)}}(n,e),Al(n)&&Rl(n)}async function Ec(n,e){const t=F(n);t.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=Bt(t);t.k_.add(3),await lr(t),r&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Ps(t)}async function Tm(n,e){const t=F(n);e?(t.k_.delete(2),await Ps(t)):e||(t.k_.add(2),await lr(t),t.K_.set("Unknown"))}function mn(n){return n.W_||(n.W_=function(t,r,s){const i=F(t);return i.b_(),new om(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Ro:hm.bind(null,n),mo:dm.bind(null,n),po:fm.bind(null,n),R_:pm.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),lo(n)?uo(n):n.K_.set("Unknown")):(await n.W_.stop(),wl(n))})),n.W_}function vt(n){return n.G_||(n.G_=function(t,r,s){const i=F(t);return i.b_(),new am(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:_m.bind(null,n),po:Im.bind(null,n),p_:ym.bind(null,n),y_:Em.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await ks(n)):(await n.G_.stop(),n.B_.length>0&&(D("RemoteStore",`Stopping write stream with ${n.B_.length} pending writes`),n.B_=[]))})),n.G_}/**
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
 */class ho{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new We,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,u=new ho(e,t,a,s,i);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fo(n,e){if(Je("AsyncQueue",`${e}: ${n}`),gn(n))return new V(b.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Zt{static emptySet(e){return new Zt(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||L.comparator(t.key,r.key):(t,r)=>L.comparator(t.key,r.key),this.keyedMap=Bn(),this.sortedSet=new X(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Zt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Zt;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Ic{constructor(){this.z_=new X(L.comparator)}track(e){const t=e.doc.key,r=this.z_.get(t);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(t,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(t):e.type===1&&r.type===2?this.z_=this.z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):x():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class ln{constructor(e,t,r,s,i,a,u,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new ln(e,t,Zt.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class wm{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class vm{constructor(){this.queries=Tc(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,r){const s=F(t),i=s.queries;s.queries=Tc(),i.forEach((a,u)=>{for(const l of u.J_)l.onError(r)})})(this,new V(b.ABORTED,"Firestore shutting down"))}}function Tc(){return new Ft(n=>zu(n),vs)}async function Cl(n,e){const t=F(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new wm,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await t.onListen(s,!0);break;case 1:i.H_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const u=fo(a,`Initialization of query '${Qt(e.query)}' failed`);return void e.onError(u)}t.queries.set(s,i),i.J_.push(e),e.ea(t.onlineState),i.H_&&e.ta(i.H_)&&po(t)}async function Sl(n,e){const t=F(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.J_.indexOf(e);a>=0&&(i.J_.splice(a,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Am(n,e){const t=F(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const u of a.J_)u.ta(s)&&(r=!0);a.H_=s}}r&&po(t)}function Rm(n,e,t){const r=F(n),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(t);r.queries.delete(e)}function po(n){n.X_.forEach(e=>{e.next()})}var xi,wc;(wc=xi||(xi={})).na="default",wc.Cache="cache";class bl{constructor(e,t,r){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ln(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const r=t!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=ln.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==xi.Cache}}/**
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
 */class Pl{constructor(e){this.key=e}}class kl{constructor(e){this.key=e}}class Cm{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=j(),this.mutatedKeys=j(),this.Va=Ku(e),this.ma=new Zt(this.Va)}get fa(){return this.Ea}ga(e,t){const r=t?t.pa:new Ic,s=t?t.ma:this.ma;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,u=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,y)=>{const I=s.get(p),R=As(this.query,y)?y:null,P=!!I&&this.mutatedKeys.has(I.key),O=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let N=!1;I&&R?I.data.isEqual(R.data)?P!==O&&(r.track({type:3,doc:R}),N=!0):this.ya(I,R)||(r.track({type:2,doc:R}),N=!0,(l&&this.Va(R,l)>0||d&&this.Va(R,d)<0)&&(u=!0)):!I&&R?(r.track({type:0,doc:R}),N=!0):I&&!R&&(r.track({type:1,doc:I}),N=!0,(l||d)&&(u=!0)),N&&(R?(a=a.add(R),i=O?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{ma:a,pa:r,ss:u,mutatedKeys:i}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const a=e.pa.j_();a.sort((p,y)=>function(R,P){const O=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x()}};return O(R)-O(P)}(p.type,y.type)||this.Va(p.doc,y.doc)),this.wa(r),s=s!=null&&s;const u=t&&!s?this.Sa():[],l=this.Ra.size===0&&this.current&&!s?1:0,d=l!==this.Aa;return this.Aa=l,a.length!==0||d?{snapshot:new ln(this.query,e.ma,i,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:u}:{ba:u}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new Ic,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.Ea=this.Ea.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ea=this.Ea.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=j(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const t=[];return e.forEach(r=>{this.Ra.has(r)||t.push(new kl(r))}),this.Ra.forEach(r=>{e.has(r)||t.push(new Pl(r))}),t}va(e){this.Ea=e.Es,this.Ra=j();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return ln.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class Sm{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class bm{constructor(e){this.key=e,this.Fa=!1}}class Pm{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new Ft(u=>zu(u),vs),this.Oa=new Map,this.Na=new Set,this.Ba=new X(L.comparator),this.La=new Map,this.ka=new so,this.qa={},this.Qa=new Map,this.Ka=un.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function km(n,e,t=!0){const r=Ml(n);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await Nl(r,e,t,!0),s}async function Nm(n,e){const t=Ml(n);await Nl(t,e,!0,!1)}async function Nl(n,e,t,r){const s=await Zg(n.localStore,Le(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let u;return r&&(u=await Dm(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Il(n.remoteStore,s),u}async function Dm(n,e,t,r,s){n.Ua=(y,I,R)=>async function(O,N,H,z){let K=N.view.ga(H);K.ss&&(K=await mc(O.localStore,N.query,!1).then(({documents:T})=>N.view.ga(T,K)));const ee=z&&z.targetChanges.get(N.targetId),Pe=z&&z.targetMismatches.get(N.targetId)!=null,te=N.view.applyChanges(K,O.isPrimaryClient,ee,Pe);return Ac(O,N.targetId,te.ba),te.snapshot}(n,y,I,R);const i=await mc(n.localStore,e,!0),a=new Cm(e,i.Es),u=a.ga(i.documents),l=ur.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(u,n.isPrimaryClient,l);Ac(n,t,d.ba);const p=new Sm(e,t,a);return n.xa.set(e,p),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),d.snapshot}async function Om(n,e,t){const r=F(n),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(a=>!vs(a,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Mi(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&ao(r.remoteStore,s.targetId),Ui(r,s.targetId)}).catch(pn)):(Ui(r,s.targetId),await Mi(r.localStore,s.targetId,!0))}async function Vm(n,e){const t=F(n),r=t.xa.get(e),s=t.Oa.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ao(t.remoteStore,r.targetId))}async function Lm(n,e,t){const r=qm(n);try{const s=await function(a,u){const l=F(a),d=ie.now(),p=u.reduce((R,P)=>R.add(P.key),j());let y,I;return l.persistence.runTransaction("Locally write mutations","readwrite",R=>{let P=Xe(),O=j();return l.hs.getEntries(R,p).next(N=>{P=N,P.forEach((H,z)=>{z.isValidDocument()||(O=O.add(H))})}).next(()=>l.localDocuments.getOverlayedDocuments(R,P)).next(N=>{y=N;const H=[];for(const z of u){const K=eg(z,y.get(z.key).overlayedDocument);K!=null&&H.push(new Rt(z.key,K,Fu(K.value.mapValue),Ne.exists(!0)))}return l.mutationQueue.addMutationBatch(R,d,H,u)}).next(N=>{I=N;const H=N.applyToLocalDocumentSet(y,O);return l.documentOverlayCache.saveOverlays(R,N.batchId,H)})}).then(()=>({batchId:I.batchId,changes:Qu(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,u,l){let d=a.qa[a.currentUser.toKey()];d||(d=new X(q)),d=d.insert(u,l),a.qa[a.currentUser.toKey()]=d}(r,s.batchId,t),await hr(r,s.changes),await ks(r.remoteStore)}catch(s){const i=fo(s,"Failed to persist write");t.reject(i)}}async function Dl(n,e){const t=F(n);try{const r=await Yg(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.La.get(i);a&&(W(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Fa=!0:s.modifiedDocuments.size>0?W(a.Fa):s.removedDocuments.size>0&&(W(a.Fa),a.Fa=!1))}),await hr(t,r,e)}catch(r){await pn(r)}}function vc(n,e,t){const r=F(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.xa.forEach((i,a)=>{const u=a.view.ea(e);u.snapshot&&s.push(u.snapshot)}),function(a,u){const l=F(a);l.onlineState=u;let d=!1;l.queries.forEach((p,y)=>{for(const I of y.J_)I.ea(u)&&(d=!0)}),d&&po(l)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Mm(n,e,t){const r=F(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.La.get(e),i=s&&s.key;if(i){let a=new X(L.comparator);a=a.insert(i,ye.newNoDocument(i,U.min()));const u=j().add(i),l=new Ss(U.min(),new Map,new X(q),a,u);await Dl(r,l),r.Ba=r.Ba.remove(i),r.La.delete(e),go(r)}else await Mi(r.localStore,e,!1).then(()=>Ui(r,e,t)).catch(pn)}async function xm(n,e){const t=F(n),r=e.batch.batchId;try{const s=await Qg(t.localStore,e);Vl(t,r,null),Ol(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await hr(t,s)}catch(s){await pn(s)}}async function Um(n,e,t){const r=F(n);try{const s=await function(a,u){const l=F(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return l.mutationQueue.lookupMutationBatch(d,u).next(y=>(W(y!==null),p=y.keys(),l.mutationQueue.removeMutationBatch(d,y))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,p,u)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>l.localDocuments.getDocuments(d,p))})}(r.localStore,e);Vl(r,e,t),Ol(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await hr(r,s)}catch(s){await pn(s)}}function Ol(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function Vl(n,e,t){const r=F(n);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function Ui(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Oa.get(e))n.xa.delete(r),t&&n.Ma.Wa(r,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(r=>{n.ka.containsKey(r)||Ll(n,r)})}function Ll(n,e){n.Na.delete(e.path.canonicalString());const t=n.Ba.get(e);t!==null&&(ao(n.remoteStore,t),n.Ba=n.Ba.remove(e),n.La.delete(t),go(n))}function Ac(n,e,t){for(const r of t)r instanceof Pl?(n.ka.addReference(r.key,e),Fm(n,r)):r instanceof kl?(D("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,e),n.ka.containsKey(r.key)||Ll(n,r.key)):x()}function Fm(n,e){const t=e.key,r=t.path.canonicalString();n.Ba.get(t)||n.Na.has(r)||(D("SyncEngine","New document in limbo: "+t),n.Na.add(r),go(n))}function go(n){for(;n.Na.size>0&&n.Ba.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new L(J.fromString(e)),r=n.Ka.next();n.La.set(r,new bm(t)),n.Ba=n.Ba.insert(t,r),Il(n.remoteStore,new dt(Le(Zi(t.path)),r,"TargetPurposeLimboResolution",Es.oe))}}async function hr(n,e,t){const r=F(n),s=[],i=[],a=[];r.xa.isEmpty()||(r.xa.forEach((u,l)=>{a.push(r.Ua(l,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const y=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(l.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(l.targetId,y?"current":"not-current")}if(d){s.push(d);const y=oo.zi(l.targetId,d);i.push(y)}}))}),await Promise.all(a),r.Ma.R_(s),await async function(l,d){const p=F(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>S.forEach(d,I=>S.forEach(I.Wi,R=>p.persistence.referenceDelegate.addReference(y,I.targetId,R)).next(()=>S.forEach(I.Gi,R=>p.persistence.referenceDelegate.removeReference(y,I.targetId,R)))))}catch(y){if(!gn(y))throw y;D("LocalStore","Failed to update sequence numbers: "+y)}for(const y of d){const I=y.targetId;if(!y.fromCache){const R=p.us.get(I),P=R.snapshotVersion,O=R.withLastLimboFreeSnapshotVersion(P);p.us=p.us.insert(I,O)}}}(r.localStore,i))}async function Bm(n,e){const t=F(n);if(!t.currentUser.isEqual(e)){D("SyncEngine","User change. New user:",e.toKey());const r=await ml(t.localStore,e);t.currentUser=e,function(i,a){i.Qa.forEach(u=>{u.forEach(l=>{l.reject(new V(b.CANCELLED,a))})}),i.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await hr(t,r.Ts)}}function jm(n,e){const t=F(n),r=t.La.get(e);if(r&&r.Fa)return j().add(r.key);{let s=j();const i=t.Oa.get(e);if(!i)return s;for(const a of i){const u=t.xa.get(a);s=s.unionWith(u.view.fa)}return s}}function Ml(n){const e=F(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Dl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jm.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Mm.bind(null,e),e.Ma.R_=Am.bind(null,e.eventManager),e.Ma.Wa=Rm.bind(null,e.eventManager),e}function qm(n){const e=F(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xm.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Um.bind(null,e),e}class ls{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=bs(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return Wg(this.persistence,new zg,e.initialUser,this.serializer)}ja(e){return new gl(io.ei,this.serializer)}za(e){return new tm}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ls.provider={build:()=>new ls};class $m extends ls{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){W(this.persistence.referenceDelegate instanceof cs);const r=this.persistence.referenceDelegate.garbageCollector;return new Ng(r,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?ve.withCacheSize(this.cacheSizeBytes):ve.DEFAULT;return new gl(r=>cs.ei(r,t),this.serializer)}}class Fi{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Bm.bind(null,this.syncEngine),await Tm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new vm}()}createDatastore(e){const t=bs(e.databaseInfo.databaseId),r=function(i){return new im(i)}(e.databaseInfo);return function(i,a,u,l){return new cm(i,a,u,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,u){return new lm(r,s,i,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>vc(this.syncEngine,t,0),function(){return yc.p()?new yc:new nm}())}createSyncEngine(e,t){return function(s,i,a,u,l,d,p){const y=new Pm(s,i,a,u,l,d);return p&&(y.$a=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=F(s);D("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await lr(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Fi.provider={build:()=>new Fi};/**
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
 */class xl{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Je("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Gm{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=_e.UNAUTHENTICATED,this.clientId=Mu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{D("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(D("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new We;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=fo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function yi(n,e){n.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ml(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Rc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Hm(n);D("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Ec(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Ec(e.remoteStore,s)),n._onlineComponents=e}async function Hm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await yi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===b.FAILED_PRECONDITION||s.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;sn("Error using user provided cache. Falling back to memory cache: "+t),await yi(n,new ls)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await yi(n,new $m(void 0));return n._offlineComponents}async function Ul(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await Rc(n,n._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await Rc(n,new Fi))),n._onlineComponents}function zm(n){return Ul(n).then(e=>e.syncEngine)}async function Fl(n){const e=await Ul(n),t=e.eventManager;return t.onListen=km.bind(null,e.syncEngine),t.onUnlisten=Om.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Nm.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Vm.bind(null,e.syncEngine),t}function Km(n,e,t={}){const r=new We;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,u,l,d){const p=new xl({next:I=>{p.eu(),a.enqueueAndForget(()=>Sl(i,y));const R=I.docs.has(u);!R&&I.fromCache?d.reject(new V(b.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&I.fromCache&&l&&l.source==="server"?d.reject(new V(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(I)},error:I=>d.reject(I)}),y=new bl(Zi(u.path),p,{includeMetadataChanges:!0,ua:!0});return Cl(i,y)}(await Fl(n),n.asyncQueue,e,t,r)),r.promise}function Wm(n,e,t={}){const r=new We;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,u,l,d){const p=new xl({next:I=>{p.eu(),a.enqueueAndForget(()=>Sl(i,y)),I.fromCache&&l.source==="server"?d.reject(new V(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(I)},error:I=>d.reject(I)}),y=new bl(u,p,{includeMetadataChanges:!0,ua:!0});return Cl(i,y)}(await Fl(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Bl(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Cc=new Map;/**
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
 */function jl(n,e,t){if(!t)throw new V(b.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Qm(n,e,t,r){if(e===!0&&r===!0)throw new V(b.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Sc(n){if(!L.isDocumentKey(n))throw new V(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function bc(n){if(L.isDocumentKey(n))throw new V(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function mo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":x()}function je(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=mo(n);throw new V(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Pc{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Qm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Bl((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new V(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new V(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new V(b.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ns{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pc({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new op;switch(r.type){case"firstParty":return new lp(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Cc.get(t);r&&(D("ComponentProvider","Removing Datastore"),Cc.delete(t),r.terminate())}(this),Promise.resolve()}}function Ym(n,e,t,r={}){var s;const i=(n=je(n,Ns))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&sn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let u,l;if(typeof r.mockUserToken=="string")u=r.mockUserToken,l=_e.MOCK_USER;else{u=Od(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new V(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new _e(d)}n._authCredentials=new ap(new Lu(u,l))}}/**
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
 */class Ds{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ds(this.firestore,e,this._query)}}class Ce{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _t(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ce(this.firestore,e,this._key)}}class _t extends Ds{constructor(e,t,r){super(e,t,Zi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ce(this.firestore,null,new L(e))}withConverter(e){return new _t(this.firestore,e,this._path)}}function kc(n,e,...t){if(n=we(n),jl("collection","path",e),n instanceof Ns){const r=J.fromString(e,...t);return bc(r),new _t(n,null,r)}{if(!(n instanceof Ce||n instanceof _t))throw new V(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(e,...t));return bc(r),new _t(n.firestore,null,r)}}function hs(n,e,...t){if(n=we(n),arguments.length===1&&(e=Mu.newId()),jl("doc","path",e),n instanceof Ns){const r=J.fromString(e,...t);return Sc(r),new Ce(n,null,new L(r))}{if(!(n instanceof Ce||n instanceof _t))throw new V(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(e,...t));return Sc(r),new Ce(n.firestore,n instanceof _t?n.converter:null,new L(r))}}/**
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
 */class Nc{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new yl(this,"async_queue_retry"),this.fu=()=>{const r=_i();r&&D("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const t=_i();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const t=_i();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const t=new We;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!gn(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw Je("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=t,t}enqueueAfterDelay(e,t,r){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const s=ho.createAndSchedule(this,e,t,r,i=>this.Su(i));return this.Eu.push(s),s}pu(){this.Au&&x()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Eu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}class _n extends Ns{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Nc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Nc(e),this._firestoreClient=void 0,await e}}}function Jm(n,e){const t=typeof n=="object"?n:Cu(),r=typeof n=="string"?n:"(default)",s=Ki(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Nd("firestore");i&&Ym(s,...i)}return s}function _o(n){if(n._terminated)throw new V(b.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Xm(n),n._firestoreClient}function Xm(n){var e,t,r;const s=n._freezeSettings(),i=function(u,l,d,p){return new Rp(u,l,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Bl(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Gm(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(u){const l=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(l),_online:l}}(n._componentsProvider))}/**
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
 */class hn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hn(he.fromBase64String(e))}catch(t){throw new V(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new hn(he.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Os{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new le(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class yo{constructor(e){this._methodName=e}}/**
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
 */class Eo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Io{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const Zm=/^__.*__$/;class e_{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Rt(e,this.data,this.fieldMask,t,this.fieldTransforms):new cr(e,this.data,t,this.fieldTransforms)}}class ql{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Rt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function $l(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class To{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new To(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:r,Nu:!1});return s.Bu(e),s}Lu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return ds(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if($l(this.Mu)&&Zm.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class t_{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||bs(e)}$u(e,t,r,s=!1){return new To({Mu:e,methodName:t,Ku:r,path:le.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wo(n){const e=n._freezeSettings(),t=bs(n._databaseId);return new t_(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Gl(n,e,t,r,s,i={}){const a=n.$u(i.merge||i.mergeFields?2:0,e,t,s);vo("Data must be an object, but it was:",a,r);const u=Hl(r,a);let l,d;if(i.merge)l=new be(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const p=[];for(const y of i.mergeFields){const I=Bi(e,y,t);if(!a.contains(I))throw new V(b.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);Kl(p,I)||p.push(I)}l=new be(p),d=a.fieldTransforms.filter(y=>l.covers(y.field))}else l=null,d=a.fieldTransforms;return new e_(new Ae(u),l,d)}class Vs extends yo{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Vs}}function n_(n,e,t,r){const s=n.$u(1,e,t);vo("Data must be an object, but it was:",s,r);const i=[],a=Ae.empty();At(r,(l,d)=>{const p=Ao(e,l,t);d=we(d);const y=s.Lu(p);if(d instanceof Vs)i.push(p);else{const I=Ls(d,y);I!=null&&(i.push(p),a.set(p,I))}});const u=new be(i);return new ql(a,u,s.fieldTransforms)}function r_(n,e,t,r,s,i){const a=n.$u(1,e,t),u=[Bi(e,r,t)],l=[s];if(i.length%2!=0)throw new V(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<i.length;I+=2)u.push(Bi(e,i[I])),l.push(i[I+1]);const d=[],p=Ae.empty();for(let I=u.length-1;I>=0;--I)if(!Kl(d,u[I])){const R=u[I];let P=l[I];P=we(P);const O=a.Lu(R);if(P instanceof Vs)d.push(R);else{const N=Ls(P,O);N!=null&&(d.push(R),p.set(R,N))}}const y=new be(d);return new ql(p,y,a.fieldTransforms)}function Ls(n,e){if(zl(n=we(n)))return vo("Unsupported field value:",e,n),Hl(n,e);if(n instanceof yo)return function(r,s){if(!$l(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const u of r){let l=Ls(u,s.ku(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=we(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Wp(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ie.fromDate(r);return{timestampValue:as(s.serializer,i)}}if(r instanceof ie){const i=new ie(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:as(s.serializer,i)}}if(r instanceof Eo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof hn)return{bytesValue:cl(s.serializer,r._byteString)};if(r instanceof Ce){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ro(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Io)return function(a,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(l=>{if(typeof l!="number")throw u.qu("VectorValues must only contain numeric values.");return eo(u.serializer,l)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${mo(r)}`)}(n,e)}function Hl(n,e){const t={};return xu(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):At(n,(r,s)=>{const i=Ls(s,e.Ou(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function zl(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ie||n instanceof Eo||n instanceof hn||n instanceof Ce||n instanceof yo||n instanceof Io)}function vo(n,e,t){if(!zl(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=mo(t);throw r==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+r)}}function Bi(n,e,t){if((e=we(e))instanceof Os)return e._internalPath;if(typeof e=="string")return Ao(n,e);throw ds("Field path arguments must be of type string or ",n,!1,void 0,t)}const s_=new RegExp("[~\\*/\\[\\]]");function Ao(n,e,t){if(e.search(s_)>=0)throw ds(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Os(...e.split("."))._internalPath}catch{throw ds(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ds(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new V(b.INVALID_ARGUMENT,u+n+l)}function Kl(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Wl{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ce(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new i_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ql("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class i_ extends Wl{data(){return super.data()}}function Ql(n,e){return typeof e=="string"?Ao(n,e):e instanceof Os?e._internalPath:e._delegate._internalPath}/**
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
 */function o_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class a_{convertValue(e,t="none"){switch(wt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Tt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw x()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return At(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>ne(a.doubleValue));return new Io(i)}convertGeoPoint(e){return new Eo(ne(e.latitude),ne(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ts(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Jn(e));default:return null}}convertTimestamp(e){const t=It(e);return new ie(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=J.fromString(e);W(pl(r));const s=new Xn(r.get(1),r.get(3)),i=new L(r.popFirst(5));return s.isEqual(t)||Je(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Yl(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class qn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jl extends Wl{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Kr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ql("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Kr extends Jl{data(e={}){return super.data(e)}}class c_{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new qn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Kr(this._firestore,this._userDataWriter,r.key,r,new qn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const l=new Kr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new qn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>i||u.type!==3).map(u=>{const l=new Kr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new qn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),p=a.indexOf(u.doc.key)),{type:u_(u.type),doc:l,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function u_(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x()}}/**
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
 */function l_(n){n=je(n,Ce);const e=je(n.firestore,_n);return Km(_o(e),n._key).then(t=>g_(e,n,t))}class Xl extends a_{constructor(e){super(),this.firestore=e}convertBytes(e){return new hn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ce(this.firestore,null,t)}}function h_(n){n=je(n,Ds);const e=je(n.firestore,_n),t=_o(e),r=new Xl(e);return o_(n._query),Wm(t,n._query).then(s=>new c_(e,r,n,s))}function d_(n,e,t){n=je(n,Ce);const r=je(n.firestore,_n),s=Yl(n.converter,e);return Ro(r,[Gl(wo(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Ne.none())])}function f_(n,e,t,...r){n=je(n,Ce);const s=je(n.firestore,_n),i=wo(s);let a;return a=typeof(e=we(e))=="string"||e instanceof Os?r_(i,"updateDoc",n._key,e,t,r):n_(i,"updateDoc",n._key,e),Ro(s,[a.toMutation(n._key,Ne.exists(!0))])}function p_(n,e){const t=je(n.firestore,_n),r=hs(n),s=Yl(n.converter,e);return Ro(t,[Gl(wo(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Ne.exists(!1))]).then(()=>r)}function Ro(n,e){return function(r,s){const i=new We;return r.asyncQueue.enqueueAndForget(async()=>Lm(await zm(r),s,i)),i.promise}(_o(n),e)}function g_(n,e,t){const r=t.docs.get(e._key),s=new Xl(n);return new Jl(n,s,e._key,r,new qn(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){fn=s})(dn),rn(new Vt("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),u=new _n(new cp(r.getProvider("auth-internal")),new dp(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new V(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xn(d.options.projectId,p)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),u._setSettings(i),u},"PUBLIC").setMultipleInstances(!0)),gt(Ka,"4.7.6",e),gt(Ka,"4.7.6","esm2017")})();function Co(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Zl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const m_=Zl,eh=new or("auth","Firebase",Zl());/**
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
 */const fs=new Hi("@firebase/auth");function __(n,...e){fs.logLevel<=B.WARN&&fs.warn(`Auth (${dn}): ${n}`,...e)}function Wr(n,...e){fs.logLevel<=B.ERROR&&fs.error(`Auth (${dn}): ${n}`,...e)}/**
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
 */function De(n,...e){throw So(n,...e)}function xe(n,...e){return So(n,...e)}function th(n,e,t){const r=Object.assign(Object.assign({},m_()),{[e]:t});return new or("auth","Firebase",r).create(e,{appName:n.name})}function Qe(n){return th(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function So(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return eh.create(n,...e)}function M(n,e,...t){if(!n)throw So(e,...t)}function He(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Wr(e),new Error(e)}function Ze(n,e){n||He(e)}/**
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
 */function ji(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function y_(){return Dc()==="http:"||Dc()==="https:"}function Dc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function E_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(y_()||xd()||"connection"in navigator)?navigator.onLine:!0}function I_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class dr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ze(t>e,"Short delay should be less than long delay!"),this.isMobile=Vd()||Ud()}get(){return E_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bo(n,e){Ze(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class nh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;He("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;He("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;He("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const T_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const w_=new dr(3e4,6e4);function Ct(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function St(n,e,t,r,s={}){return rh(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const u=ar(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:l},i);return Md()||(d.referrerPolicy="no-referrer"),nh.fetch()(sh(n,n.config.apiHost,t,u),d)})}async function rh(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},T_),e);try{const s=new A_(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw jr(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const u=i.ok?a.errorMessage:a.error.message,[l,d]=u.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw jr(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw jr(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw jr(n,"user-disabled",a);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw th(n,p,d);De(n,p)}}catch(s){if(s instanceof et)throw s;De(n,"network-request-failed",{message:String(s)})}}async function fr(n,e,t,r,s={}){const i=await St(n,e,t,r,s);return"mfaPendingCredential"in i&&De(n,"multi-factor-auth-required",{_serverResponse:i}),i}function sh(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?bo(n.config,s):`${n.config.apiScheme}://${s}`}function v_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class A_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(xe(this.auth,"network-request-failed")),w_.get())})}}function jr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=xe(n,e,r);return s.customData._tokenResponse=t,s}function Oc(n){return n!==void 0&&n.enterprise!==void 0}class R_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return v_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function C_(n,e){return St(n,"GET","/v2/recaptchaConfig",Ct(n,e))}/**
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
 */async function S_(n,e){return St(n,"POST","/v1/accounts:delete",e)}async function ih(n,e){return St(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Wn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function b_(n,e=!1){const t=we(n),r=await t.getIdToken(e),s=Po(r);M(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Wn(Ei(s.auth_time)),issuedAtTime:Wn(Ei(s.iat)),expirationTime:Wn(Ei(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ei(n){return Number(n)*1e3}function Po(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Wr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Eu(t);return s?JSON.parse(s):(Wr("Failed to decode base64 JWT payload"),null)}catch(s){return Wr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Vc(n){const e=Po(n);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function nr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof et&&P_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function P_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class k_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class qi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wn(this.lastLoginAt),this.creationTime=Wn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ps(n){var e;const t=n.auth,r=await n.getIdToken(),s=await nr(n,ih(t,{idToken:r}));M(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?oh(i.providerUserInfo):[],u=D_(n.providerData,a),l=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(u!=null&&u.length),p=l?d:!1,y={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:u,metadata:new qi(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(n,y)}async function N_(n){const e=we(n);await ps(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function D_(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function oh(n){return n.map(e=>{var{providerId:t}=e,r=Co(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function O_(n,e){const t=await rh(n,{},async()=>{const r=ar({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=sh(n,s,"/v1/token",`key=${i}`),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",nh.fetch()(a,{method:"POST",headers:u,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function V_(n,e){return St(n,"POST","/v2/accounts:revokeToken",Ct(n,e))}/**
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
 */class en{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){M(e.length!==0,"internal-error");const t=Vc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await O_(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new en;return r&&(M(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(M(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(M(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new en,this.toJSON())}_performRefresh(){return He("not implemented")}}/**
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
 */function it(n,e){M(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ze{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Co(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new k_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new qi(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await nr(this,this.stsTokenManager.getToken(this.auth,e));return M(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return b_(this,e)}reload(){return N_(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ze(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ps(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ve(this.auth.app))return Promise.reject(Qe(this.auth));const e=await this.getIdToken();return await nr(this,S_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,u,l,d,p;const y=(r=t.displayName)!==null&&r!==void 0?r:void 0,I=(s=t.email)!==null&&s!==void 0?s:void 0,R=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,P=(a=t.photoURL)!==null&&a!==void 0?a:void 0,O=(u=t.tenantId)!==null&&u!==void 0?u:void 0,N=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,H=(d=t.createdAt)!==null&&d!==void 0?d:void 0,z=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:K,emailVerified:ee,isAnonymous:Pe,providerData:te,stsTokenManager:T}=t;M(K&&T,e,"internal-error");const g=en.fromJSON(this.name,T);M(typeof K=="string",e,"internal-error"),it(y,e.name),it(I,e.name),M(typeof ee=="boolean",e,"internal-error"),M(typeof Pe=="boolean",e,"internal-error"),it(R,e.name),it(P,e.name),it(O,e.name),it(N,e.name),it(H,e.name),it(z,e.name);const _=new ze({uid:K,auth:e,email:I,emailVerified:ee,displayName:y,isAnonymous:Pe,photoURL:P,phoneNumber:R,tenantId:O,stsTokenManager:g,createdAt:H,lastLoginAt:z});return te&&Array.isArray(te)&&(_.providerData=te.map(E=>Object.assign({},E))),N&&(_._redirectEventId=N),_}static async _fromIdTokenResponse(e,t,r=!1){const s=new en;s.updateFromServerResponse(t);const i=new ze({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ps(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];M(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?oh(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),u=new en;u.updateFromIdToken(r);const l=new ze({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new qi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,d),l}}/**
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
 */const Lc=new Map;function Ke(n){Ze(n instanceof Function,"Expected a class definition");let e=Lc.get(n);return e?(Ze(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Lc.set(n,e),e)}/**
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
 */class ah{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ah.type="NONE";const Mc=ah;/**
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
 */function Qr(n,e,t){return`firebase:${n}:${e}:${t}`}class tn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Qr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Qr("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ze._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new tn(Ke(Mc),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Ke(Mc);const a=Qr(r,e.config.apiKey,e.name);let u=null;for(const d of t)try{const p=await d._get(a);if(p){const y=ze._fromJSON(e,p);d!==i&&(u=y),i=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new tn(i,e,r):(i=l[0],u&&await i._set(a,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new tn(i,e,r))}}/**
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
 */function xc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ch(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fh(e))return"Blackberry";if(ph(e))return"Webos";if(uh(e))return"Safari";if((e.includes("chrome/")||lh(e))&&!e.includes("edge/"))return"Chrome";if(dh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ch(n=Ee()){return/firefox\//i.test(n)}function uh(n=Ee()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lh(n=Ee()){return/crios\//i.test(n)}function hh(n=Ee()){return/iemobile/i.test(n)}function dh(n=Ee()){return/android/i.test(n)}function fh(n=Ee()){return/blackberry/i.test(n)}function ph(n=Ee()){return/webos/i.test(n)}function ko(n=Ee()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function L_(n=Ee()){var e;return ko(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function M_(){return Fd()&&document.documentMode===10}function gh(n=Ee()){return ko(n)||dh(n)||ph(n)||fh(n)||/windows phone/i.test(n)||hh(n)}/**
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
 */function mh(n,e=[]){let t;switch(n){case"Browser":t=xc(Ee());break;case"Worker":t=`${xc(Ee())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${dn}/${r}`}/**
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
 */class x_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,u)=>{try{const l=e(i);a(l)}catch(l){u(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function U_(n,e={}){return St(n,"GET","/v2/passwordPolicy",Ct(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const F_=6;class B_{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:F_,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,u;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(u=l.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class j_{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Uc(this),this.idTokenSubscription=new Uc(this),this.beforeStateQueue=new x_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=eh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ke(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await tn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ih(this,{idToken:e}),r=await ze._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ve(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===u)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ps(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=I_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ve(this.app))return Promise.reject(Qe(this));const t=e?we(e):null;return t&&M(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ve(this.app)?Promise.reject(Qe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ve(this.app)?Promise.reject(Qe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ke(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await U_(this),t=new B_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new or("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await V_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ke(e)||this._popupRedirectResolver;M(t,this,"argument-error"),this.redirectPersistenceManager=await tn.create(this,[Ke(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(u,this,"internal-error"),u.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&__(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function jt(n){return we(n)}class Uc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kd(t=>this.observer=t)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ms={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function q_(n){Ms=n}function _h(n){return Ms.loadJS(n)}function $_(){return Ms.recaptchaEnterpriseScript}function G_(){return Ms.gapiScript}function H_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class z_{constructor(){this.enterprise=new K_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class K_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const W_="recaptcha-enterprise",yh="NO_RECAPTCHA";class Q_{constructor(e){this.type=W_,this.auth=jt(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,u)=>{C_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const d=new R_(l);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(l=>{u(l)})})}function s(i,a,u){const l=window.grecaptcha;Oc(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(yh)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new z_().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(u=>{if(!t&&Oc(window.grecaptcha))s(u,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=$_();l.length!==0&&(l+=u),_h(l).then(()=>{s(u,i,a)}).catch(d=>{a(d)})}}).catch(u=>{a(u)})})}}async function Fc(n,e,t,r=!1,s=!1){const i=new Q_(n);let a;if(s)a=yh;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const u=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in u){const l=u.phoneEnrollmentInfo.phoneNumber,d=u.phoneEnrollmentInfo.recaptchaToken;Object.assign(u,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in u){const l=u.phoneSignInInfo.recaptchaToken;Object.assign(u,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return u}return r?Object.assign(u,{captchaResp:a}):Object.assign(u,{captchaResponse:a}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function $i(n,e,t,r,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Fc(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await Fc(n,e,t,t==="getOobCode");return r(n,u)}else return Promise.reject(a)})}/**
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
 */function Y_(n,e){const t=Ki(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(es(i,e??{}))return s;De(s,"already-initialized")}return t.initialize({options:e})}function J_(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ke);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function X_(n,e,t){const r=jt(n);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Eh(e),{host:a,port:u}=Z_(e),l=u===null?"":`:${u}`;r.config.emulator={url:`${i}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:u,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),ey()}function Eh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Z_(n){const e=Eh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Bc(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Bc(a)}}}function Bc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ey(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class No{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return He("not implemented")}_getIdTokenResponse(e){return He("not implemented")}_linkToIdToken(e,t){return He("not implemented")}_getReauthenticationResolver(e){return He("not implemented")}}async function ty(n,e){return St(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function ny(n,e){return fr(n,"POST","/v1/accounts:signInWithPassword",Ct(n,e))}/**
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
 */async function ry(n,e){return fr(n,"POST","/v1/accounts:signInWithEmailLink",Ct(n,e))}async function sy(n,e){return fr(n,"POST","/v1/accounts:signInWithEmailLink",Ct(n,e))}/**
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
 */class rr extends No{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new rr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new rr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $i(e,t,"signInWithPassword",ny);case"emailLink":return ry(e,{email:this._email,oobCode:this._password});default:De(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $i(e,r,"signUpPassword",ty);case"emailLink":return sy(e,{idToken:t,email:this._email,oobCode:this._password});default:De(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function nn(n,e){return fr(n,"POST","/v1/accounts:signInWithIdp",Ct(n,e))}/**
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
 */const iy="http://localhost";class Mt extends No{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Mt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):De("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Co(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Mt(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return nn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,nn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,nn(e,t)}buildRequest(){const e={requestUri:iy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ar(t)}return e}}/**
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
 */function oy(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ay(n){const e=xn(Un(n)).link,t=e?xn(Un(e)).deep_link_id:null,r=xn(Un(n)).deep_link_id;return(r?xn(Un(r)).link:null)||r||t||e||n}class Do{constructor(e){var t,r,s,i,a,u;const l=xn(Un(e)),d=(t=l.apiKey)!==null&&t!==void 0?t:null,p=(r=l.oobCode)!==null&&r!==void 0?r:null,y=oy((s=l.mode)!==null&&s!==void 0?s:null);M(d&&p&&y,"argument-error"),this.apiKey=d,this.operation=y,this.code=p,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(u=l.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){const t=ay(e);try{return new Do(t)}catch{return null}}}/**
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
 */class yn{constructor(){this.providerId=yn.PROVIDER_ID}static credential(e,t){return rr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Do.parseLink(t);return M(r,"argument-error"),rr._fromEmailAndCode(e,r.code,r.tenantId)}}yn.PROVIDER_ID="password";yn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";yn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ih{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class pr extends Ih{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ct extends pr{constructor(){super("facebook.com")}static credential(e){return Mt._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch{return null}}}ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";ct.PROVIDER_ID="facebook.com";/**
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
 */class ut extends pr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Mt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ut.credential(t,r)}catch{return null}}}ut.GOOGLE_SIGN_IN_METHOD="google.com";ut.PROVIDER_ID="google.com";/**
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
 */class lt extends pr{constructor(){super("github.com")}static credential(e){return Mt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lt.credential(e.oauthAccessToken)}catch{return null}}}lt.GITHUB_SIGN_IN_METHOD="github.com";lt.PROVIDER_ID="github.com";/**
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
 */class ht extends pr{constructor(){super("twitter.com")}static credential(e,t){return Mt._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ht.credential(t,r)}catch{return null}}}ht.TWITTER_SIGN_IN_METHOD="twitter.com";ht.PROVIDER_ID="twitter.com";/**
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
 */async function cy(n,e){return fr(n,"POST","/v1/accounts:signUp",Ct(n,e))}/**
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
 */class xt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await ze._fromIdTokenResponse(e,r,s),a=jc(r);return new xt({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=jc(r);return new xt({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function jc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class gs extends et{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,gs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new gs(e,t,r,s)}}function Th(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?gs._fromErrorAndOperation(n,i,e,r):i})}async function uy(n,e,t=!1){const r=await nr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return xt._forOperation(n,"link",r)}/**
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
 */async function ly(n,e,t=!1){const{auth:r}=n;if(Ve(r.app))return Promise.reject(Qe(r));const s="reauthenticate";try{const i=await nr(n,Th(r,s,e,n),t);M(i.idToken,r,"internal-error");const a=Po(i.idToken);M(a,r,"internal-error");const{sub:u}=a;return M(n.uid===u,r,"user-mismatch"),xt._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&De(r,"user-mismatch"),i}}/**
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
 */async function wh(n,e,t=!1){if(Ve(n.app))return Promise.reject(Qe(n));const r="signIn",s=await Th(n,r,e),i=await xt._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function hy(n,e){return wh(jt(n),e)}/**
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
 */async function vh(n){const e=jt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function dy(n,e,t){if(Ve(n.app))return Promise.reject(Qe(n));const r=jt(n),a=await $i(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",cy).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&vh(n),l}),u=await xt._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(u.user),u}function fy(n,e,t){return Ve(n.app)?Promise.reject(Qe(n)):hy(we(n),yn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&vh(n),r})}function py(n,e,t,r){return we(n).onIdTokenChanged(e,t,r)}function gy(n,e,t){return we(n).beforeAuthStateChanged(e,t)}const ms="__sak";/**
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
 */class Ah{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ms,"1"),this.storage.removeItem(ms),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const my=1e3,_y=10;class Rh extends Ah{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=gh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);M_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,_y):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},my)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rh.type="LOCAL";const yy=Rh;/**
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
 */class Ch extends Ah{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ch.type="SESSION";const Sh=Ch;/**
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
 */function Ey(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class xs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new xs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const u=Array.from(a).map(async d=>d(t.origin,i)),l=await Ey(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xs.receivers=[];/**
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
 */function Oo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Iy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((u,l)=>{const d=Oo("",20);s.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(y){const I=y;if(I.data.eventId===d)switch(I.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),u(I.data.response);break;default:clearTimeout(p),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Ue(){return window}function Ty(n){Ue().location.href=n}/**
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
 */function bh(){return typeof Ue().WorkerGlobalScope<"u"&&typeof Ue().importScripts=="function"}async function wy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vy(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Ay(){return bh()?self:null}/**
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
 */const Ph="firebaseLocalStorageDb",Ry=1,_s="firebaseLocalStorage",kh="fbase_key";class gr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Us(n,e){return n.transaction([_s],e?"readwrite":"readonly").objectStore(_s)}function Cy(){const n=indexedDB.deleteDatabase(Ph);return new gr(n).toPromise()}function Gi(){const n=indexedDB.open(Ph,Ry);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(_s,{keyPath:kh})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(_s)?e(r):(r.close(),await Cy(),e(await Gi()))})})}async function qc(n,e,t){const r=Us(n,!0).put({[kh]:e,value:t});return new gr(r).toPromise()}async function Sy(n,e){const t=Us(n,!1).get(e),r=await new gr(t).toPromise();return r===void 0?null:r.value}function $c(n,e){const t=Us(n,!0).delete(e);return new gr(t).toPromise()}const by=800,Py=3;class Nh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Py)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xs._getInstance(Ay()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await wy(),!this.activeServiceWorker)return;this.sender=new Iy(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gi();return await qc(e,ms,"1"),await $c(e,ms),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>qc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Sy(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>$c(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Us(s,!1).getAll();return new gr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),by)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nh.type="LOCAL";const ky=Nh;new dr(3e4,6e4);/**
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
 */function Ny(n,e){return e?Ke(e):(M(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Vo extends No{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return nn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return nn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Dy(n){return wh(n.auth,new Vo(n),n.bypassAuthState)}function Oy(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),ly(t,new Vo(n),n.bypassAuthState)}async function Vy(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),uy(t,new Vo(n),n.bypassAuthState)}/**
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
 */class Dh{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:u}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Dy;case"linkViaPopup":case"linkViaRedirect":return Vy;case"reauthViaPopup":case"reauthViaRedirect":return Oy;default:De(this.auth,"internal-error")}}resolve(e){Ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ly=new dr(2e3,1e4);class Xt extends Dh{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Xt.currentPopupAction&&Xt.currentPopupAction.cancel(),Xt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){Ze(this.filter.length===1,"Popup operations only handle one event");const e=Oo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ly.get())};e()}}Xt.currentPopupAction=null;/**
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
 */const My="pendingRedirect",Yr=new Map;class xy extends Dh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Yr.get(this.auth._key());if(!e){try{const r=await Uy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Yr.set(this.auth._key(),e)}return this.bypassAuthState||Yr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Uy(n,e){const t=jy(e),r=By(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Fy(n,e){Yr.set(n._key(),e)}function By(n){return Ke(n._redirectPersistence)}function jy(n){return Qr(My,n.config.apiKey,n.name)}async function qy(n,e,t=!1){if(Ve(n.app))return Promise.reject(Qe(n));const r=jt(n),s=Ny(r,e),a=await new xy(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const $y=10*60*1e3;class Gy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Hy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Oh(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(xe(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$y&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gc(e))}saveEventToCache(e){this.cachedEventUids.add(Gc(e)),this.lastProcessedEventTime=Date.now()}}function Gc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Oh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Hy(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Oh(n);default:return!1}}/**
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
 */async function zy(n,e={}){return St(n,"GET","/v1/projects",e)}/**
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
 */const Ky=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Wy=/^https?/;async function Qy(n){if(n.config.emulator)return;const{authorizedDomains:e}=await zy(n);for(const t of e)try{if(Yy(t))return}catch{}De(n,"unauthorized-domain")}function Yy(n){const e=ji(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Wy.test(t))return!1;if(Ky.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Jy=new dr(3e4,6e4);function Hc(){const n=Ue().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Xy(n){return new Promise((e,t)=>{var r,s,i;function a(){Hc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hc(),t(xe(n,"network-request-failed"))},timeout:Jy.get()})}if(!((s=(r=Ue().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ue().gapi)===null||i===void 0)&&i.load)a();else{const u=H_("iframefcb");return Ue()[u]=()=>{gapi.load?a():t(xe(n,"network-request-failed"))},_h(`${G_()}?onload=${u}`).catch(l=>t(l))}}).catch(e=>{throw Jr=null,e})}let Jr=null;function Zy(n){return Jr=Jr||Xy(n),Jr}/**
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
 */const eE=new dr(5e3,15e3),tE="__/auth/iframe",nE="emulator/auth/iframe",rE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iE(n){const e=n.config;M(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?bo(e,nE):`https://${n.config.authDomain}/${tE}`,r={apiKey:e.apiKey,appName:n.name,v:dn},s=sE.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${ar(r).slice(1)}`}async function oE(n){const e=await Zy(n),t=Ue().gapi;return M(t,n,"internal-error"),e.open({where:document.body,url:iE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rE,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=xe(n,"network-request-failed"),u=Ue().setTimeout(()=>{i(a)},eE.get());function l(){Ue().clearTimeout(u),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
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
 */const aE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cE=500,uE=600,lE="_blank",hE="http://localhost";class zc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dE(n,e,t,r=cE,s=uE){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const l=Object.assign(Object.assign({},aE),{width:r.toString(),height:s.toString(),top:i,left:a}),d=Ee().toLowerCase();t&&(u=lh(d)?lE:t),ch(d)&&(e=e||hE,l.scrollbars="yes");const p=Object.entries(l).reduce((I,[R,P])=>`${I}${R}=${P},`,"");if(L_(d)&&u!=="_self")return fE(e||"",u),new zc(null);const y=window.open(e||"",u,p);M(y,n,"popup-blocked");try{y.focus()}catch{}return new zc(y)}function fE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const pE="__/auth/handler",gE="emulator/auth/handler",mE=encodeURIComponent("fac");async function Kc(n,e,t,r,s,i){M(n.config.authDomain,n,"auth-domain-config-required"),M(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:dn,eventId:s};if(e instanceof Ih){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",zd(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,y]of Object.entries({}))a[p]=y}if(e instanceof pr){const p=e.getScopes().filter(y=>y!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const u=a;for(const p of Object.keys(u))u[p]===void 0&&delete u[p];const l=await n._getAppCheckToken(),d=l?`#${mE}=${encodeURIComponent(l)}`:"";return`${_E(n)}?${ar(u).slice(1)}${d}`}function _E({config:n}){return n.emulator?bo(n,gE):`https://${n.authDomain}/${pE}`}/**
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
 */const Ii="webStorageSupport";class yE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sh,this._completeRedirectFn=qy,this._overrideRedirectResult=Fy}async _openPopup(e,t,r,s){var i;Ze((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Kc(e,t,r,ji(),s);return dE(e,a,Oo())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Kc(e,t,r,ji(),s);return Ty(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Ze(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await oE(e),r=new Gy(e);return t.register("authEvent",s=>(M(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ii,{type:Ii},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ii];a!==void 0&&t(!!a),De(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Qy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return gh()||uh()||ko()}}const EE=yE;var Wc="@firebase/auth",Qc="1.8.2";/**
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
 */class IE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function TE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wE(n){rn(new Vt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;M(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mh(n)},d=new j_(r,s,i,l);return J_(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),rn(new Vt("auth-internal",e=>{const t=jt(e.getProvider("auth").getImmediate());return(r=>new IE(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),gt(Wc,Qc,TE(n)),gt(Wc,Qc,"esm2017")}/**
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
 */const vE=5*60,AE=wu("authIdTokenMaxAge")||vE;let Yc=null;const RE=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>AE)return;const s=t==null?void 0:t.token;Yc!==s&&(Yc=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function CE(n=Cu()){const e=Ki(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Y_(n,{popupRedirectResolver:EE,persistence:[ky,yy,Sh]}),r=wu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=RE(i.toString());gy(t,a,()=>a(t.currentUser)),py(t,u=>a(u))}}const s=Iu("auth");return s&&X_(t,`http://${s}`),t}function SE(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}q_({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=xe("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",SE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wE("Browser");const bE={apiKey:"AIzaSyDo9nRtzMTFaGFfGWgqlcksi5Y9h7x46x0",authDomain:"webdevtrends-59dcf.firebaseapp.com",projectId:"webdevtrends-59dcf",storageBucket:"webdevtrends-59dcf.firebasestorage.app",messagingSenderId:"711058905449",appId:"1:711058905449:web:b29e4821f76656e45cc5f8"},Vh=Ru(bE),$n=Jm(Vh),Fs=CE(Vh);var Jc;(function(n){n.STRING="string",n.NUMBER="number",n.INTEGER="integer",n.BOOLEAN="boolean",n.ARRAY="array",n.OBJECT="object"})(Jc||(Jc={}));/**
 * @license
 * Copyright 2024 Google LLC
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
 */var Xc;(function(n){n.LANGUAGE_UNSPECIFIED="language_unspecified",n.PYTHON="python"})(Xc||(Xc={}));var Zc;(function(n){n.OUTCOME_UNSPECIFIED="outcome_unspecified",n.OUTCOME_OK="outcome_ok",n.OUTCOME_FAILED="outcome_failed",n.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(Zc||(Zc={}));/**
 * @license
 * Copyright 2024 Google LLC
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
 */const eu=["user","model","function","system"];var tu;(function(n){n.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",n.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",n.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",n.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",n.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(tu||(tu={}));var nu;(function(n){n.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",n.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",n.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",n.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",n.BLOCK_NONE="BLOCK_NONE"})(nu||(nu={}));var ru;(function(n){n.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",n.NEGLIGIBLE="NEGLIGIBLE",n.LOW="LOW",n.MEDIUM="MEDIUM",n.HIGH="HIGH"})(ru||(ru={}));var su;(function(n){n.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",n.SAFETY="SAFETY",n.OTHER="OTHER"})(su||(su={}));var Qn;(function(n){n.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",n.STOP="STOP",n.MAX_TOKENS="MAX_TOKENS",n.SAFETY="SAFETY",n.RECITATION="RECITATION",n.LANGUAGE="LANGUAGE",n.OTHER="OTHER"})(Qn||(Qn={}));var iu;(function(n){n.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",n.RETRIEVAL_QUERY="RETRIEVAL_QUERY",n.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",n.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",n.CLASSIFICATION="CLASSIFICATION",n.CLUSTERING="CLUSTERING"})(iu||(iu={}));var ou;(function(n){n.MODE_UNSPECIFIED="MODE_UNSPECIFIED",n.AUTO="AUTO",n.ANY="ANY",n.NONE="NONE"})(ou||(ou={}));var au;(function(n){n.MODE_UNSPECIFIED="MODE_UNSPECIFIED",n.MODE_DYNAMIC="MODE_DYNAMIC"})(au||(au={}));/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Re extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class Kt extends Re{constructor(e,t){super(e),this.response=t}}class Lh extends Re{constructor(e,t,r,s){super(e),this.status=t,this.statusText=r,this.errorDetails=s}}class yt extends Re{}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const PE="https://generativelanguage.googleapis.com",kE="v1beta",NE="0.21.0",DE="genai-js";var Ut;(function(n){n.GENERATE_CONTENT="generateContent",n.STREAM_GENERATE_CONTENT="streamGenerateContent",n.COUNT_TOKENS="countTokens",n.EMBED_CONTENT="embedContent",n.BATCH_EMBED_CONTENTS="batchEmbedContents"})(Ut||(Ut={}));class OE{constructor(e,t,r,s,i){this.model=e,this.task=t,this.apiKey=r,this.stream=s,this.requestOptions=i}toString(){var e,t;const r=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||kE;let i=`${((t=this.requestOptions)===null||t===void 0?void 0:t.baseUrl)||PE}/${r}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function VE(n){const e=[];return n!=null&&n.apiClient&&e.push(n.apiClient),e.push(`${DE}/${NE}`),e.join(" ")}async function LE(n){var e;const t=new Headers;t.append("Content-Type","application/json"),t.append("x-goog-api-client",VE(n.requestOptions)),t.append("x-goog-api-key",n.apiKey);let r=(e=n.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(r){if(!(r instanceof Headers))try{r=new Headers(r)}catch(s){throw new yt(`unable to convert customHeaders value ${JSON.stringify(r)} to Headers: ${s.message}`)}for(const[s,i]of r.entries()){if(s==="x-goog-api-key")throw new yt(`Cannot set reserved header name ${s}`);if(s==="x-goog-api-client")throw new yt(`Header name ${s} can only be set using the apiClient field`);t.append(s,i)}}return t}async function ME(n,e,t,r,s,i){const a=new OE(n,e,t,r,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},BE(i)),{method:"POST",headers:await LE(a),body:s})}}async function mr(n,e,t,r,s,i={},a=fetch){const{url:u,fetchOptions:l}=await ME(n,e,t,r,s,i);return xE(u,l,a)}async function xE(n,e,t=fetch){let r;try{r=await t(n,e)}catch(s){UE(s,n)}return r.ok||await FE(r,n),r}function UE(n,e){let t=n;throw n instanceof Lh||n instanceof yt||(t=new Re(`Error fetching from ${e.toString()}: ${n.message}`),t.stack=n.stack),t}async function FE(n,e){let t="",r;try{const s=await n.json();t=s.error.message,s.error.details&&(t+=` ${JSON.stringify(s.error.details)}`,r=s.error.details)}catch{}throw new Lh(`Error fetching from ${e.toString()}: [${n.status} ${n.statusText}] ${t}`,n.status,n.statusText,r)}function BE(n){const e={};if((n==null?void 0:n.signal)!==void 0||(n==null?void 0:n.timeout)>=0){const t=new AbortController;(n==null?void 0:n.timeout)>=0&&setTimeout(()=>t.abort(),n.timeout),n!=null&&n.signal&&n.signal.addEventListener("abort",()=>{t.abort()}),e.signal=t.signal}return e}/**
 * @license
 * Copyright 2024 Google LLC
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
 */function Lo(n){return n.text=()=>{if(n.candidates&&n.candidates.length>0){if(n.candidates.length>1&&console.warn(`This response had ${n.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),Xr(n.candidates[0]))throw new Kt(`${at(n)}`,n);return jE(n)}else if(n.promptFeedback)throw new Kt(`Text not available. ${at(n)}`,n);return""},n.functionCall=()=>{if(n.candidates&&n.candidates.length>0){if(n.candidates.length>1&&console.warn(`This response had ${n.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),Xr(n.candidates[0]))throw new Kt(`${at(n)}`,n);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),cu(n)[0]}else if(n.promptFeedback)throw new Kt(`Function call not available. ${at(n)}`,n)},n.functionCalls=()=>{if(n.candidates&&n.candidates.length>0){if(n.candidates.length>1&&console.warn(`This response had ${n.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),Xr(n.candidates[0]))throw new Kt(`${at(n)}`,n);return cu(n)}else if(n.promptFeedback)throw new Kt(`Function call not available. ${at(n)}`,n)},n}function jE(n){var e,t,r,s;const i=[];if(!((t=(e=n.candidates)===null||e===void 0?void 0:e[0].content)===null||t===void 0)&&t.parts)for(const a of(s=(r=n.candidates)===null||r===void 0?void 0:r[0].content)===null||s===void 0?void 0:s.parts)a.text&&i.push(a.text),a.executableCode&&i.push("\n```"+a.executableCode.language+`
`+a.executableCode.code+"\n```\n"),a.codeExecutionResult&&i.push("\n```\n"+a.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function cu(n){var e,t,r,s;const i=[];if(!((t=(e=n.candidates)===null||e===void 0?void 0:e[0].content)===null||t===void 0)&&t.parts)for(const a of(s=(r=n.candidates)===null||r===void 0?void 0:r[0].content)===null||s===void 0?void 0:s.parts)a.functionCall&&i.push(a.functionCall);if(i.length>0)return i}const qE=[Qn.RECITATION,Qn.SAFETY,Qn.LANGUAGE];function Xr(n){return!!n.finishReason&&qE.includes(n.finishReason)}function at(n){var e,t,r;let s="";if((!n.candidates||n.candidates.length===0)&&n.promptFeedback)s+="Response was blocked",!((e=n.promptFeedback)===null||e===void 0)&&e.blockReason&&(s+=` due to ${n.promptFeedback.blockReason}`),!((t=n.promptFeedback)===null||t===void 0)&&t.blockReasonMessage&&(s+=`: ${n.promptFeedback.blockReasonMessage}`);else if(!((r=n.candidates)===null||r===void 0)&&r[0]){const i=n.candidates[0];Xr(i)&&(s+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(s+=`: ${i.finishMessage}`))}return s}function sr(n){return this instanceof sr?(this.v=n,this):new sr(n)}function $E(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=t.apply(n,e||[]),s,i=[];return s={},a("next"),a("throw"),a("return"),s[Symbol.asyncIterator]=function(){return this},s;function a(I){r[I]&&(s[I]=function(R){return new Promise(function(P,O){i.push([I,R,P,O])>1||u(I,R)})})}function u(I,R){try{l(r[I](R))}catch(P){y(i[0][3],P)}}function l(I){I.value instanceof sr?Promise.resolve(I.value.v).then(d,p):y(i[0][2],I)}function d(I){u("next",I)}function p(I){u("throw",I)}function y(I,R){I(R),i.shift(),i.length&&u(i[0][0],i[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const uu=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function GE(n){const e=n.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),t=KE(e),[r,s]=t.tee();return{stream:zE(r),response:HE(s)}}async function HE(n){const e=[],t=n.getReader();for(;;){const{done:r,value:s}=await t.read();if(r)return Lo(WE(e));e.push(s)}}function zE(n){return $E(this,arguments,function*(){const t=n.getReader();for(;;){const{value:r,done:s}=yield sr(t.read());if(s)break;yield yield sr(Lo(r))}})}function KE(n){const e=n.getReader();return new ReadableStream({start(r){let s="";return i();function i(){return e.read().then(({value:a,done:u})=>{if(u){if(s.trim()){r.error(new Re("Failed to parse stream"));return}r.close();return}s+=a;let l=s.match(uu),d;for(;l;){try{d=JSON.parse(l[1])}catch{r.error(new Re(`Error parsing JSON response: "${l[1]}"`));return}r.enqueue(d),s=s.substring(l[0].length),l=s.match(uu)}return i()})}}})}function WE(n){const e=n[n.length-1],t={promptFeedback:e==null?void 0:e.promptFeedback};for(const r of n){if(r.candidates)for(const s of r.candidates){const i=s.index;if(t.candidates||(t.candidates=[]),t.candidates[i]||(t.candidates[i]={index:s.index}),t.candidates[i].citationMetadata=s.citationMetadata,t.candidates[i].groundingMetadata=s.groundingMetadata,t.candidates[i].finishReason=s.finishReason,t.candidates[i].finishMessage=s.finishMessage,t.candidates[i].safetyRatings=s.safetyRatings,s.content&&s.content.parts){t.candidates[i].content||(t.candidates[i].content={role:s.content.role||"user",parts:[]});const a={};for(const u of s.content.parts)u.text&&(a.text=u.text),u.functionCall&&(a.functionCall=u.functionCall),u.executableCode&&(a.executableCode=u.executableCode),u.codeExecutionResult&&(a.codeExecutionResult=u.codeExecutionResult),Object.keys(a).length===0&&(a.text=""),t.candidates[i].content.parts.push(a)}}r.usageMetadata&&(t.usageMetadata=r.usageMetadata)}return t}/**
 * @license
 * Copyright 2024 Google LLC
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
 */async function Mh(n,e,t,r){const s=await mr(e,Ut.STREAM_GENERATE_CONTENT,n,!0,JSON.stringify(t),r);return GE(s)}async function xh(n,e,t,r){const i=await(await mr(e,Ut.GENERATE_CONTENT,n,!1,JSON.stringify(t),r)).json();return{response:Lo(i)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */function Uh(n){if(n!=null){if(typeof n=="string")return{role:"system",parts:[{text:n}]};if(n.text)return{role:"system",parts:[n]};if(n.parts)return n.role?n:{role:"system",parts:n.parts}}}function ir(n){let e=[];if(typeof n=="string")e=[{text:n}];else for(const t of n)typeof t=="string"?e.push({text:t}):e.push(t);return QE(e)}function QE(n){const e={role:"user",parts:[]},t={role:"function",parts:[]};let r=!1,s=!1;for(const i of n)"functionResponse"in i?(t.parts.push(i),s=!0):(e.parts.push(i),r=!0);if(r&&s)throw new Re("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!r&&!s)throw new Re("No content is provided for sending chat message.");return r?e:t}function YE(n,e){var t;let r={model:e==null?void 0:e.model,generationConfig:e==null?void 0:e.generationConfig,safetySettings:e==null?void 0:e.safetySettings,tools:e==null?void 0:e.tools,toolConfig:e==null?void 0:e.toolConfig,systemInstruction:e==null?void 0:e.systemInstruction,cachedContent:(t=e==null?void 0:e.cachedContent)===null||t===void 0?void 0:t.name,contents:[]};const s=n.generateContentRequest!=null;if(n.contents){if(s)throw new yt("CountTokensRequest must have one of contents or generateContentRequest, not both.");r.contents=n.contents}else if(s)r=Object.assign(Object.assign({},r),n.generateContentRequest);else{const i=ir(n);r.contents=[i]}return{generateContentRequest:r}}function lu(n){let e;return n.contents?e=n:e={contents:[ir(n)]},n.systemInstruction&&(e.systemInstruction=Uh(n.systemInstruction)),e}function JE(n){return typeof n=="string"||Array.isArray(n)?{content:ir(n)}:n}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const hu=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],XE={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function ZE(n){let e=!1;for(const t of n){const{role:r,parts:s}=t;if(!e&&r!=="user")throw new Re(`First content should be with role 'user', got ${r}`);if(!eu.includes(r))throw new Re(`Each item should include role field. Got ${r} but valid roles are: ${JSON.stringify(eu)}`);if(!Array.isArray(s))throw new Re("Content should have 'parts' property with an array of Parts");if(s.length===0)throw new Re("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const u of s)for(const l of hu)l in u&&(i[l]+=1);const a=XE[r];for(const u of hu)if(!a.includes(u)&&i[u]>0)throw new Re(`Content with role '${r}' can't contain '${u}' part`);e=!0}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */const du="SILENT_ERROR";class eI{constructor(e,t,r,s={}){this.model=t,this.params=r,this._requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,r!=null&&r.history&&(ZE(r.history),this._history=r.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,t={}){var r,s,i,a,u,l;await this._sendPromise;const d=ir(e),p={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(u=this.params)===null||u===void 0?void 0:u.systemInstruction,cachedContent:(l=this.params)===null||l===void 0?void 0:l.cachedContent,contents:[...this._history,d]},y=Object.assign(Object.assign({},this._requestOptions),t);let I;return this._sendPromise=this._sendPromise.then(()=>xh(this._apiKey,this.model,p,y)).then(R=>{var P;if(R.response.candidates&&R.response.candidates.length>0){this._history.push(d);const O=Object.assign({parts:[],role:"model"},(P=R.response.candidates)===null||P===void 0?void 0:P[0].content);this._history.push(O)}else{const O=at(R.response);O&&console.warn(`sendMessage() was unsuccessful. ${O}. Inspect response object for details.`)}I=R}),await this._sendPromise,I}async sendMessageStream(e,t={}){var r,s,i,a,u,l;await this._sendPromise;const d=ir(e),p={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(u=this.params)===null||u===void 0?void 0:u.systemInstruction,cachedContent:(l=this.params)===null||l===void 0?void 0:l.cachedContent,contents:[...this._history,d]},y=Object.assign(Object.assign({},this._requestOptions),t),I=Mh(this._apiKey,this.model,p,y);return this._sendPromise=this._sendPromise.then(()=>I).catch(R=>{throw new Error(du)}).then(R=>R.response).then(R=>{if(R.candidates&&R.candidates.length>0){this._history.push(d);const P=Object.assign({},R.candidates[0].content);P.role||(P.role="model"),this._history.push(P)}else{const P=at(R);P&&console.warn(`sendMessageStream() was unsuccessful. ${P}. Inspect response object for details.`)}}).catch(R=>{R.message!==du&&console.error(R)}),I}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */async function tI(n,e,t,r){return(await mr(e,Ut.COUNT_TOKENS,n,!1,JSON.stringify(t),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
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
 */async function nI(n,e,t,r){return(await mr(e,Ut.EMBED_CONTENT,n,!1,JSON.stringify(t),r)).json()}async function rI(n,e,t,r){const s=t.requests.map(a=>Object.assign(Object.assign({},a),{model:e}));return(await mr(e,Ut.BATCH_EMBED_CONTENTS,n,!1,JSON.stringify({requests:s}),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class fu{constructor(e,t,r={}){this.apiKey=e,this._requestOptions=r,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=Uh(t.systemInstruction),this.cachedContent=t.cachedContent}async generateContent(e,t={}){var r;const s=lu(e),i=Object.assign(Object.assign({},this._requestOptions),t);return xh(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},s),i)}async generateContentStream(e,t={}){var r;const s=lu(e),i=Object.assign(Object.assign({},this._requestOptions),t);return Mh(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},s),i)}startChat(e){var t;return new eI(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(t=this.cachedContent)===null||t===void 0?void 0:t.name},e),this._requestOptions)}async countTokens(e,t={}){const r=YE(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),s=Object.assign(Object.assign({},this._requestOptions),t);return tI(this.apiKey,this.model,r,s)}async embedContent(e,t={}){const r=JE(e),s=Object.assign(Object.assign({},this._requestOptions),t);return nI(this.apiKey,this.model,r,s)}async batchEmbedContents(e,t={}){const r=Object.assign(Object.assign({},this._requestOptions),t);return rI(this.apiKey,this.model,e,r)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class sI{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new Re("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new fu(this.apiKey,e,t)}getGenerativeModelFromCachedContent(e,t,r){if(!e.name)throw new yt("Cached content must contain a `name` field.");if(!e.model)throw new yt("Cached content must contain a `model` field.");const s=["model","systemInstruction"];for(const a of s)if(t!=null&&t[a]&&e[a]&&(t==null?void 0:t[a])!==e[a]){if(a==="model"){const u=t.model.startsWith("models/")?t.model.replace("models/",""):t.model,l=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(u===l)continue}throw new yt(`Different value for "${a}" specified in modelParams (${t[a]}) and cachedContent (${e[a]})`)}const i=Object.assign(Object.assign({},t),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new fu(this.apiKey,i,r)}}const Fh=["meatList","dairyList","vegetablesList","fruitList","snacksList"],qt={};Fh.forEach(n=>{qt[n]=document.getElementById(n)});const iI=qt.meatList,oI=qt.dairyList,aI=qt.vegetablesList,cI=qt.fruitList,uI=qt.snacksList,Bh=document.getElementById("email"),jh=document.getElementById("password"),lI=document.getElementById("loginBtn"),pu=document.getElementById("login-form"),gu=document.getElementById("main-container"),hI=document.getElementById("registerBtn"),dI=document.getElementById("logoutBtn");document.getElementById("listInput");const fI=document.getElementById("addListBtn"),qh=document.getElementById("chat-input"),pI=document.getElementById("send-btn"),gI=document.getElementById("chat-history");document.getElementById("chatbot-toggle");const mI=document.getElementById("emptyList"),_I=async(n,e)=>{try{const r=(await dy(Fs,n,e)).user;await yI(r.uid,r.email)}catch(t){console.error("Error during registration: ",t.message)}},yI=async(n,e)=>{try{const t=hs($n,"users",n);await d_(t,{email:e,createdAt:new Date})}catch(t){console.error("Error adding user to Firestore: ",t.message)}},EI=async(n,e)=>{try{const r=(await fy(Fs,n,e)).user;alert("Login successful.")}catch(t){alert("Email or password is incorrect. Please try again."),errorMessage.textContent=`Error: ${t.message}`}};lI.addEventListener("click",async()=>{const n=Bh.value,e=jh.value;await EI(n,e)});hI.addEventListener("click",async()=>{const n=Bh.value,e=jh.value;await _I(n,e)});dI.addEventListener("click",async()=>{await Fs.signOut()});function II(n){const e=document.createElement("div");return e.textContent=n,e.innerHTML}Fs.onAuthStateChanged(n=>{if(n){pu.style.display="none",gu.style.display="block";const e=n.uid,t=async(d,p)=>{try{const y=kc($n,"groceries",d,"list");for(const I of p)await p_(y,I)}catch(y){console.error("Error adding document: ",y)}};fI.addEventListener("click",async()=>{const d=document.getElementById("listInput"),p=document.getElementById("category").value,y=II(d.value.trim());y&&(await t(e,[{name:y,category:p,completed:!1}]),await s(),d.value="",liveRegion.textContent=`New list added: ${y}`)}),Object.values(qt).forEach(d=>{d.addEventListener("click",async p=>{if(p.target.tagName==="LI"){const y=p.target.id;if(!y){console.error("No item ID found on the clicked element");return}try{await f_(hs($n,"groceries",e,"list",y),{completed:!0}),liveRegion.textContent="Completed.",setTimeout(async()=>{await s(),liveRegion.textContent="Ready.",console.log(liveRegion.textContent)},1e3)}catch(I){console.error("Error updating document: ",I),liveRegion.textContent="Error: Could not complete the item."}}})});const r=async d=>{try{const p=kc($n,"groceries",d,"list");return(await h_(p)).docs.map(R=>({id:R.id,...R.data()}))}catch(p){return console.error("Error fetching grocery list: ",p),[]}},s=async()=>{(await r(e)).forEach(p=>{if(!p.completed){let y=document.createElement("li");switch(y.textContent=p.name,y.id=p.id,y.setAttribute("tabindex","0"),p.completed&&(y.style.textDecoration="line-through"),p.category){case"meat":iI.appendChild(y);break;case"dairy":oI.appendChild(y);break;case"vegetables":aI.appendChild(y);break;case"fruits":cI.appendChild(y);break;case"snacks":uI.appendChild(y);break}}}),Mn("meatList"),Mn("dairyList"),Mn("vegetablesList"),Mn("fruitList"),Mn("snacksList")};s(),a();let i;async function a(){const p=(await l_(hs($n,"apikey","googlegenai"))).data().key;i=new sI(p).getGenerativeModel({model:"gemini-1.5-flash"})}async function u(d){return await i.generateContent(d)}pI.addEventListener("click",async()=>{let d=qh.value.trim().toLowerCase();d?(console.log("Prompt: ",d),l(d)||u(d)):ot("Please enter a prompt")});async function l(d){const p=/add\s+(.+?)\s+(?:to|in)\s+(\w+)/i,y=d.match(p);if(console.log("Match: ",y),y){const I=y[1].trim(),R=y[2].trim();if(I&&R)try{await t(e,[{name:I,category:R,completed:!1}]),ot(`${I} added to ${R} category.`),await s()}catch(P){ot("Error adding to Firestore: "+P.message)}else ot("Please provide both the item and category.");return!0}else if(d.startsWith("complete")){let I=d.replace("complete","").trim();if(I)try{result?ot("List "+I+" marked as complete."):ot("List not found!")}catch(R){ot("Error marking list as complete: "+R.message)}else ot("Please specify a list to complete.");return!0}return!1}}else pu.style.display="block",gu.style.display="none"});const mu="/WebDevTrends/service-worker.js";"serviceWorker"in navigator&&navigator.serviceWorker.register(mu,{scope:"/WebDevTrends/"}).then(e=>console.log("Service Worker Registered for scope:",mu,"with",import.meta.url)).catch(e=>console.error("Service Worker Error:",e));function ot(n){let e=document.createElement("div");e.textContent=n,e.className="history",gI.appendChild(e),qh.value=""}function Mn(n){let e=document.querySelector(`#${n}`).closest(".list-category");if(e){const r=e.querySelector("ul");r&&r.children.length===0?e.style.display="none":e.style.display="block"}const t=Fh.every(r=>document.querySelectorAll(`#${r} li`).length===0);mI.style.display=t?"block":"none"}document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("chatbot-container"),e=document.getElementById("chatbot-toggle"),t=document.getElementById("hide-chat");e.addEventListener("click",()=>{n.style.display="block",e.style.display="none"}),t.addEventListener("click",()=>{n.style.display="none",e.style.display="inline-block"})});
