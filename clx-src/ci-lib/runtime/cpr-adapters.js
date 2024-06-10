function logger(n){return void 0===n&&(n="default"),cpr.utils.Logger.forTopic(n)}!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):n.ES6Promise=t()}(this,function(){"use strict";function n(n){return"function"==typeof n||"object"==typeof n&&null!==n}function t(n){return"function"==typeof n}function i(){return void 0!==D?function(){D(e)}:r()}function r(){var n=setTimeout;return function(){return n(e,1)}}function e(){for(var n=0;n<$;n+=2)(0,V[n])(V[n+1]),V[n]=void 0,V[n+1]=void 0;$=0}function o(n,t){var i=arguments,r=this,e=new this.constructor(c);void 0===e[X]&&A(e);var o=r.µn;return o?function(){var n=i[o-1];U(function(){return x(o,e,n,r.µt)})}():y(r,e,n,t),e}function u(n){var t=this;if(n&&"object"==typeof n&&n.constructor===t)return n;var i=new t(c);return p(i,n),i}function c(){}function f(){return new TypeError("You cannot resolve a promise with itself")}function s(){return new TypeError("A promises callback cannot return that same promise.")}function a(n){try{return n.then}catch(n){return H.error=n,H}}function h(n,t,i,r){try{n.call(t,i,r)}catch(n){return n}}function l(n,t,i){U(function(n){var r=!1,e=h(i,t,function(i){r||(r=!0,t!==i?p(n,i):b(n,i))},function(t){r||(r=!0,g(n,t))},"Settle: "+(n.µi||" unknown promise"));!r&&e&&(r=!0,g(n,e))},n)}function v(n,t){t.µn===B?b(n,t.µt):t.µn===G?g(n,t.µt):y(t,void 0,function(t){return p(n,t)},function(t){return g(n,t)})}function d(n,i,r){i.constructor===n.constructor&&r===o&&i.constructor.resolve===u?v(n,i):r===H?(g(n,H.error),H.error=null):void 0===r?b(n,i):t(r)?l(n,i,r):b(n,i)}function p(t,i){t===i?g(t,f()):n(i)?d(t,i,a(i)):b(t,i)}function w(n){n.µr&&n.µr(n.µt),m(n)}function b(n,t){n.µn===Z&&(n.µt=t,n.µn=B,0!==n.µe.length&&U(m,n))}function g(n,t){n.µn===Z&&(n.µn=G,n.µt=t,U(w,n))}function y(n,t,i,r){var e=n.µe,o=e.length;n.µr=null,e[o]=t,e[o+B]=i,e[o+G]=r,0===o&&n.µn&&U(m,n)}function m(n){var t=n.µe,i=n.µn;if(0!==t.length){for(var r=void 0,e=void 0,o=n.µt,u=0;u<t.length;u+=3)r=t[u],e=t[u+i],r?x(i,r,e,o):e(o);n.µe.length=0}}function _(){this.error=null}function j(n,t){try{return n(t)}catch(n){return J.error=n,J}}function x(n,i,r,e){var o=t(r),u=void 0,c=void 0,f=void 0,a=void 0;if(o){if((u=j(r,e))===J?(a=!0,c=u.error,u.error=null):f=!0,i===u)return void g(i,s())}else u=e,f=!0;i.µn!==Z||(o&&f?p(i,u):a?g(i,c):n===B?b(i,u):n===G&&g(i,u))}function O(n,t){try{t(function(t){p(n,t)},function(t){g(n,t)})}catch(t){g(n,t)}}function k(){return K++}function A(n){n[X]=K++,n.µn=void 0,n.µt=void 0,n.µe=[]}function E(n,t){this.µo=n,this.promise=new n(c),this.promise[X]||A(this.promise),S(t)?(this.µu=t,this.length=t.length,this.µc=t.length,this.µt=new Array(this.length),0===this.length?b(this.promise,this.µt):(this.length=this.length||0,this.µf(),0===this.µc&&b(this.promise,this.µt))):g(this.promise,I())}function I(){return new Error("Array Methods must be provided an Array")}function C(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function P(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function T(n){this[X]=k(),this.µt=this.µn=void 0,this.µe=[],c!==n&&("function"!=typeof n&&C(),this instanceof T?O(this,n):P())}var R=void 0,S=R=Array.isArray?Array.isArray:function(n){return"[object Array]"===Object.prototype.toString.call(n)},$=0,D=void 0,M=void 0,U=function(n,t){V[$]=n,V[$+1]=t,2===($+=2)&&(M?M(e):W())},F="undefined"!=typeof window?window:void 0,q=F||{},Y=q.MutationObserver||q.WebKitMutationObserver,z="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),N="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,V=new Array(1e3),W=void 0;W=z?function(){return process.nextTick(e)}:Y?function(){var n=0,t=new Y(e),i=document.createTextNode("");return t.observe(i,{characterData:!0}),function(){i.data=n=++n%2}}():N?function(){var n=new MessageChannel;return n.port1.onmessage=e,function(){return n.port2.postMessage(0)}}():void 0===F&&"function"==typeof require?function(){try{var n=require("vertx");return D=n.runOnLoop||n.runOnContext,i()}catch(n){return r()}}():r();var X=Math.random().toString(36).substring(16),Z=void 0,B=1,G=2,H=new _,J=new _,K=0;return E.prototype.µf=function(){for(var n=this.length,t=this.µu,i=0;this.µn===Z&&i<n;i++)this.µs(t[i],i)},E.prototype.µs=function(n,t){var i=this.µo,r=i.resolve;if(r===u){var e=a(n);if(e===o&&n.µn!==Z)this.µa(n.µn,t,n.µt);else if("function"!=typeof e)this.µc--,this.µt[t]=n;else if(i===T){var f=new i(c);d(f,n,e),this.µh(f,t)}else this.µh(new i(function(t){return t(n)}),t)}else this.µh(r(n),t)},E.prototype.µa=function(n,t,i){var r=this.promise;r.µn===Z&&(this.µc--,n===G?g(r,i):this.µt[t]=i),0===this.µc&&b(r,this.µt)},E.prototype.µh=function(n,t){var i=this;y(n,void 0,function(n){return i.µa(B,t,n)},function(n){return i.µa(G,t,n)})},T.all=function(n){return new E(this,n).promise},T.race=function(n){var t=this;return new t(S(n)?function(i,r){for(var e=n.length,o=0;o<e;o++)t.resolve(n[o]).then(i,r)}:function(n,t){return t(new TypeError("You must pass an array to race."))})},T.resolve=u,T.reject=function(n){var t=new this(c);return g(t,n),t},T.µl=function(n){M=n},T.µv=function(n){U=n},T.µd=U,T.prototype={constructor:T,then:o,catch:function(n){return this.then(null,n)}},T.polyfill=function(){var n=void 0;if("undefined"!=typeof global)n=global;else if("undefined"!=typeof self)n=self;else try{n=Function("return this")()}catch(n){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=n.Promise;if(t){var i=null;try{i=Object.prototype.toString.call(t.resolve())}catch(n){}if("[object Promise]"===i&&!t.cast)return}n.Promise=T},T.Promise=T,T.polyfill(),T}),function(n){var t=new Date(1710461541477),i=(t["toLocaleString"]||t["toString"]).apply(t);n.cpr=n.cpr||{},n.cpr.core=n.cpr.core||{},n.cpr.core.PlatformVersionInfo={getVersion:function(){return"1.0.4954"},getReleaseDate:function(){return t},getRuntimeIdentifier:function(){return"master@32d974773d95b50f98590f8a9ad457afae98c3ab"}},console.log("eXbuilder6 Runtime Version: 1.0.4954, Release Date: "+i)}(this);var __extends=this&&this.µp||function(){var n=function(t,i){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])})(t,i)};return function(t,i){function r(){this.constructor=t}if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");n(t,i),t.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),__spreadArray=this&&this.µw||function(n,t){for(var i=0,r=t.length,e=n.length;i<r;i++,e++)n[e]=t[i];return n},cpr;!function(n){!function(n){var t=function(){function t(){var t,i,r=_.toArray(arguments).filter(function(n){return"string"==typeof n}),e=new Error,o=e.stack;if(!o)try{throw e}catch(n){o=n.stack}if(o){var u=o.split(/\r\n|\n/);u.splice(0,1),o=u.join("\n")}switch(r.length){case 0:t="CError",i="No description";break;case 1:t="CError",i=r[0];break;case 2:t=r[0],i=r[1];break;default:throw new n.IllegalArgumentException}this.µb=t,this.µg=i,this.µy=o}return Object.defineProperty(t.prototype,"name",{get:function(){return this.µb},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"message",{get:function(){return this.µg},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"stack",{get:function(){return this.µy},enumerable:!1,configurable:!0}),t}();n.CError=t;var i=function(n){function t(t){return void 0===t&&(t="User did cancel the operation."),n.call(this,"CancelationException",t)||this}return __extends(t,n),t}(t);n.CancelationException=i;var r=function(n){function t(t){return void 0===t&&(t="The argument is invalid."),n.call(this,"IllegalArgumentException",t)||this}return __extends(t,n),t}(t);n.IllegalArgumentException=r;var e=function(n){function t(t){return void 0===t&&(t="Tried to access disposed resource."),n.call(this,"DisposeException",t)||this}return __extends(t,n),t}(t);n.DisposeException=e;var o=function(n){function t(t){return void 0===t&&(t="Called with illegal state."),n.call(this,"DisposeException",t)||this}return __extends(t,n),t}(t);n.IllegalStateException=o;var u=function(n){function t(t){return void 0===t&&(t="Unsupported operation was invoked."),n.call(this,"DisposeException",t)||this}return __extends(t,n),t}(t);n.UnsupportedOperationException=u}(n.exceptions||(n.exceptions={}))}(cpr||(cpr={}));var cpr;!function(n){!function(t){var i=0,r=function(){function n(){}return n.generateUUID=function(){return(i++).toString(36)},n.insert=function(n,t,i){return i<n.length?n.substring(0,i)+t+n.substring(i):n+t},n.deleteStr=function(n,t,i){return n.substring(0,t)+n.substring(i)},n.startsWith=function(n,t){return n.substring(0,t.length)===t},n.replaceRange=function(n,t,i,r){return n.substring(0,i)+t+n.substring(r)},n.replaceAt=function(n,t,i){return i>n.length-1?n:n.substring(0,i)+t+n.substring(i+1)},n.closetChars=function(n,t,i,r){void 0===n&&(n=[]);var e;if("left"==r){for(e=t;e>0;e--)if(n.indexOf(i.charAt(e))>-1&&e!=t){e+=1;break}}else if("right"==r)for(e=t;e<i.length&&!(n.indexOf(i.charAt(e))>-1&&e!=t);e++);return e},n.jumpChars=function(n,t,i,r){var e;if("left"==r){for(e=t;e>0;e--)if(n.indexOf(i.charAt(e))>-1){e-=1;break}n.indexOf(i.charAt(e))>-1&&(e=this.jumpChars(n,e,i,r))}else if("right"==r){for(e=t;e<i.length;e++)if(n.indexOf(i.charAt(e))>-1){e+=1;break}n.indexOf(i.charAt(e))>-1&&(e=this.jumpChars(n,e,i,r))}return e},n.toHalfWidth=function(n){return n.replace(/[！-～]/g,function(n){return String.fromCharCode(n.charCodeAt(0)-65248)})},n.toFullWidth=function(n){return n.replace(/[!-~]/g,function(n){return String.fromCharCode(n.charCodeAt(0)+65248)})},n.isFullwidth=function(n){return/[！-～]/g.test(n)},n.isHalfWidth=function(n){return/[!-~]/g.test(n)},n.isCharRefText=function(n){return/([&][#0-9a-z]*[;])+/gi.test(n)},n.isHTMLSpecialCharacterCode=function(n){return/^([&][#]?[0-9a-zA-Z]*[;])+$/gi.test(n)},n.µm=function(n){return/^-?[0-9]+$/.test(n)},n.µ_=function(n){return n?n.replace(new RegExp("<","g"),"&lt;").replace(new RegExp(">","g"),"&gt;"):n},n.compileTemplate=function(n){return _.template(n,{interpolate:/\$\{(.+?)\}/g})},n.format=function(n,t){return this.compileTemplate(n)(t)},n.measureText=function(t,i){var r=(n.CANVAS||(n.CANVAS=document.createElement("canvas"))).getContext("2d");return r.font=i,r.measureText(t).width},n.repeat=function(n,t){return String.prototype["repeat"]?n["repeat"](t):Array(t+1).join(n)},n.findDifferentFirstChar=function(n,t){for(var i=0;i<n.length;i++){var r=n.charAt(i),e=t.charAt(i);if(""==e)return"";if(e!=r)return e}return n.length<t.length?t.charAt(t.length-1):""},n.findInsertedTextIndex=function(n,t,i){for(var r=0,e="",o=-1,u=-1,c=function(){e="",r=0,o=-1},f=0;f<n.length;f++){var s=n.charAt(f),a=t.charAt(f);if(i.charAt(r)!=a&&c(),i.charAt(r)==a&&(0==r&&(o=f),e+=a,r++),s!=a&&-1==u){u=f;break}e==i&&c()}return o>-1&&u>o?o:-1==u&&n.length<t.length?n.length:-1==u?0:u},n.findMovedTextIndex=function(t,i,r){for(var e=[],o=[];;){var u=t.indexOf(r);u>-1&&(e.push(u),t=n.replaceRange(t,n.toFullWidth(r),u,u+r.length));var c=i.indexOf(r);if(c>-1&&(o.push(c),i=n.replaceRange(i,n.toFullWidth(r),c,c+r.length)),-1==u&&-1==c)break}return _.difference(o,e)[0]},n.CANVAS=null,n}();t.StringUtil=r;var e=function(){function t(){this.µj=[]}return t.prototype.µx=function(n){for(var t=0,i=n.length,r=[];t<i-1;++t){var e=n.charCodeAt(t);if(e>=55296&&e<=56319&&(e=n.charCodeAt(t+1))>=56320&&e<=57343){if(r.push(n.slice(t,t+2)),++t==n.length-1)return r}else r.push(n.charAt(t))}return r.push(n.charAt(t)),r},t.prototype.append=function(n){return 0==_.isArray(n)&&(n=this.µx(n)),this.µj=this.µj.concat(n),this},t.prototype.insert=function(t,i){if(i<0)throw new n.exceptions.IllegalArgumentException("index must be 0 or greater.");0==_.isArray(t)&&(t=this.µx(t));var r,e;return this.µj.length<i?(r=this.µj,e=[]):(r=this.µj.slice(0,i),e=this.µj.slice(i,this.µj.length)),this.µj=r.concat(t).concat(e),this},t.prototype.getIndexBySelection=function(n){for(var t="",i=0;i<this.µj.length;i++){if(t.length==n)return i;t+=this.µj[i]}return t.length==n?i:-1},Object.defineProperty(t.prototype,"length",{get:function(){return this.µj.length},enumerable:!1,configurable:!0}),t.prototype.deleteCharAt=function(n){this.µj.splice(n,1)},t.prototype.toString=function(){return this.µj.join("")},t}();t.StringBuffer=e}(n.utils||(n.utils={}))}(cpr||(cpr={}));var cpr;!function(n){!function(t){var i=function(){function t(){var n=this;this.µO=!1,this.µk=!1,this.µA=null,this.µE=new Promise(function(t,i){n.µI=t,n.µC=i})}return t.createCompletedFuture=function(n){var i=new t;return i.complete(n),i},t.prototype.complete=function(t){if(this.µO)throw new n.exceptions.IllegalStateException;this.µO=!0,this.µA=t,this.µI(t)},t.prototype.completeExceptionally=function(t){if(this.µO)throw new n.exceptions.IllegalStateException;this.µO=!0,this.µk=!0,this.µC(t)},t.prototype.isCompletedExceptionally=function(){return this.µk},t.prototype.isDone=function(){return this.µO},t.prototype.asPromise=function(){return this.µE},t.prototype.get=function(){return this.µO&&!this.µk?this.µA:null},t}();t.CompletableFuture=i}(n.utils||(n.utils={}))}(cpr||(cpr={}));var cpr;!function(n){!function(n){function t(n){return Array.prototype.slice.call(n)}function i(n,t){var i=o.µP(n);if(!i||0===i.length)return!1;t||(i=i.reverse());var e=document.activeElement;if(e!==n&&n.contains(e)){var u=i.indexOf(document.activeElement);if(u>=0&&u<i.length-1)return r(i[u+1],t),!0}else if(i.length>0)return r(i[0],t),!0;return!1}function r(t,r){var e;switch(null===(e=null===t||void 0===t?void 0:t.tagName)||void 0===e?void 0:e.toUpperCase()){case"":case null:break;case"IFRAME":var o=t;n.DOMKit.µT(o)?i(o.contentWindow.document.body,r)||o.contentWindow.focus():o.contentWindow.focus();break;default:t.focus()}}var e=['input:not([tabindex^="-"]):not([disabled])','select:not([tabindex^="-"]):not([disabled])','textarea:not([tabindex^="-"]):not([disabled])','button:not([tabindex^="-"]):not([disabled])','a[href]:not([tabindex^="-"]):not([disabled])','[tabindex]:not([tabindex^="-"]):not([disabled])','iframe:not([tabindex^="-"]):not([disabled])'].join(", "),o=function(){function n(){}return n.µP=function(n){var i=t(n.querySelectorAll(e)).filter(function(n){return null!=n.offsetParent});return i=i.sort(function(n,t){var r=n.tabIndex,e=t.tabIndex;if(0===r&&e>0)return 1;if(r>0&&0===e)return-1;var o=r-e;return 0!==o?o:i.indexOf(n)-i.indexOf(t)})},n.µR=function(n){if(!n)return 0;var t=window.getComputedStyle(n),i=parseInt(t.width);return"border-box"==t.boxSizing&&(i-=parseInt(t.borderLeftWidth),i-=parseInt(t.borderRightWidth)),i},n.µS=function(n){if(!n)return 0;var t=window.getComputedStyle(n),i=parseInt(t.height);return"border-box"==t.boxSizing&&(i-=parseInt(t.borderTopWidth),i-=parseInt(t.borderBottomWidth)),i},n.µ$=function(n,t){return i(n,t)},n.µD=function(n){if(n)return t(n.querySelectorAll(e)).some(function(n){return null!=n.offsetParent})},n.µT=function(n){var t=null;try{n.contentWindow.document}catch(n){t=n}return null==t},n.µM=function(n){return window["CSS"]&&window.CSS["escape"]?CSS.escape(n):n.replace(/([#\[\]\{\}\(\)\.\/])/g,"\\$1")},n.µU=function(t){if(!t)return"";for(var i=[],r=t;null!=r&&"body"!=r.tagName.toLocaleLowerCase()&&"break"!==function(){if(r.id)return i.push("#"+n.µM(r.id)),"break";if(r.parentElement.children.length>1){var t=Array.prototype.slice.call(r.parentElement.children),e=t.indexOf(r);if(1==r.classList.length){var o=r.classList.item(0);t.every(function(n,t){return t==e||!n.classList.contains(o)})?i.push(r.tagName.toLocaleLowerCase()+"."+r.classList.item(0)):i.push(r.tagName.toLocaleLowerCase()+":nth-child("+(e+1)+")")}else i.push(r.tagName.toLocaleLowerCase()+":nth-child("+(e+1)+")")}else i.push(r.tagName.toLocaleLowerCase());r=r.parentElement}(););return i.reverse(),i.join(" > ")},n}();n.DOMKit=o}(n.utils||(n.utils={}))}(cpr||(cpr={}));var cpr;!function(n){!function(n){function t(n,t){var i=String(n).replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(?:\/\/(?:([^:@\/?#]*)(?::([^:@\/?#]*))?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);if(!i)throw new RangeError;var r=i[1]||"",o=i[2]||"",u=i[3]||"",c=i[4]||"",f=i[5]||"",s=i[6]||"",a=i[7]||"",h=i[8]||"",l=i[9]||"";if(void 0!==t){var v;t instanceof e?v=t:t instanceof window.URL?v=new e(t.href):"string"==typeof t&&(v=new e(t));var d=""===r&&""===c&&""===o;d&&""===a&&""===h&&(h=v.search),d&&"/"!==a.charAt(0)&&(a=""!==a?(""===v.host&&""===v.username||""!==v.pathname?"":"/")+v.pathname.slice(0,v.pathname.lastIndexOf("/")+1)+a:v.pathname);var p=[];a.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(n){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];"/.."===n?p.pop():p.push(n)}),a=p.join("").replace(/^\//,"/"===a.charAt(0)?"/":""),d&&(s=v.port,f=v.hostname,u=v.password,o=v.username),""===r&&(r=v.protocol)}return{protocol:r,username:o,password:u,hostname:f,port:s,pathname:a,search:h,hash:l}}function i(n){if(0!==n.indexOf("?"))return[];var t=[];return n.substr(1).split("&").forEach(function(n){var i=n.split("="),r=decodeURIComponent(i[0]),e=decodeURIComponent(i[1]);t.push({name:r,value:e})}),t}var r=function(){function n(n){void 0===n&&(n=""),this.µF=[],this.µF=i(null!==n&&void 0!==n?n:"")}return n.prototype.µq=function(){this.µY=null,this.µz=null},n.prototype.append=function(n,t){this.µF.push({name:n,value:t}),this.µq()},n.prototype.delete=function(n){this.µF=this.µF.filter(function(t){return t.name!=n}),this.µq()},n.prototype.get=function(n){var t=this.µF.find(function(t){return t.name==n});return t?t.value:null},n.prototype.getAll=function(n){return this.µF.filter(function(t){return t.name==n}).map(function(n){return n.value})},n.prototype.has=function(n){return this.µF.some(function(t){return t.name==n})},n.prototype.set=function(n,t){var i=this.µF.findIndex(function(t){return t.name==n});-1!==i?(this.µF=this.µF.filter(function(t){return t.name!=n}),this.µF.splice(i,0,{name:n,value:t}),this.µq()):this.append(n,t)},n.prototype.sort=function(){this.µF.sort(function(n,t){return n.name.localeCompare(t.name)}),this.µq()},n.prototype.toString=function(){return this.search},n.prototype.forEach=function(n){var t=this;this.µF.forEach(function(i){n(i.value,i.name,t)})},Object.defineProperty(n.prototype,"search",{get:function(){return null==this.µz&&(this.µF.length>0?this.µz="?"+this.µF.map(function(n){return encodeURIComponent(n.name)+"="+encodeURIComponent(n.value)}).join("&"):this.µz=""),this.µz},set:function(n){this.µz=this.search,this.µF=i(n)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"query",{get:function(){if(null==this.µY){var n={};this.µF.forEach(function(t){var i=n[t.name];"string"==typeof i?n[t.name]=[i,t.value]:i instanceof Array?i.push(t.value):n[t.name]=t.value}),this.µY=n}return this.µY},enumerable:!1,configurable:!0}),n}(),e=function(){function n(n,i){var e=t(n,i);this.µN=new r,this.protocol=e.protocol,this.username=e.username,this.password=e.password,this.hostname=e.hostname,this.port=e.port,this.pathname=e.pathname,this.search=e.search,this.hash=e.hash}return Object.defineProperty(n.prototype,"href",{get:function(){return this.protocol+(""!==this.protocol||""!==this.host?"//":"")+(""!==this.username?this.username+(""!==this.password?":"+this.password:"")+"@":"")+this.host+this.pathname+this.search+this.hash},set:function(n){var i=t(n);this.protocol=i.protocol,this.username=i.username,this.password=i.password,this.hostname=i.hostname,this.port=i.port,this.pathname=i.pathname,this.search=i.search,this.hash=i.hash},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"host",{get:function(){return[this.hostname,this.port].filter(function(n){return null!=n&&n.length>0}).join(":")},set:function(n){var t=n.split(":");this.hostname=t[0]||"",this.port=t[1]||""},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"search",{get:function(){return this.µN.search},set:function(n){this.µN=new r(n)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"query",{get:function(){return this.µN.query},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"origin",{get:function(){return this.protocol+(""!==this.protocol||""!==this.host?"//":"")+this.host},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"searchParams",{get:function(){return this.µN},enumerable:!1,configurable:!0}),n.prototype.toString=function(){return this.href},n.prototype.getCopy=function(){return new n(this.href)},n.prototype.equals=function(t){return t instanceof n?this.href==t.href:"string"==typeof t&&this.href==t},n.prototype.identicallyEquals=function(t){var i;if(t instanceof n)i=t;else{if("string"!=typeof t)return!1;i=new n(t)}var r=this.getCopy();r.searchParams.sort();var e=i.getCopy();return e.searchParams.sort(),r.href==e.href},n}();n.URL=e}(n.utils||(n.utils={}))}(cpr||(cpr={}));var cpr;!function(n){!function(t){var i={},r=function(){function r(n){this.µV=[],this.µW=n,this.µX()}return r.forTopic=function(t){if("string"!=typeof t)throw new n.exceptions.IllegalArgumentException;return t=t.trim(),i[t]||(i[t]=new r(t)),i[t]},r.prototype.µX=function(){var n=this;this.µZ={owner:this,fn:function(){}},this.isActivated()&&(window["___syslog"]?this.µZ={owner:window,fn:window["___syslog"]}:console&&console.log&&(this.µZ={owner:console,fn:console.log})),this.log=this.µB(),this.µV.forEach(function(t){t.updator(n.µB())})},r.prototype.µB=function(){for(var n,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return(n=this.µZ.fn).bind.apply(n,__spreadArray([this.µZ.owner,this.µW],t))},r.prototype.log=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t]},r.prototype.activate=function(){this.isActivated()||(this.µG=!0,this.µX())},r.prototype.deactivate=function(){this.isActivated()&&(this.µG=!1,this.µX())},r.prototype.isActivated=function(){if(void 0===this.µG){var n=(new t.URL(location.href).query["x-debug"]||"").split(/[\s,]+/g);this.µG=-1!==n.indexOf(this.µW)||-1!==n.indexOf("all")}return this.µG},r.prototype.µH=function(n){var t=n.prefixes||[];return this.µV.push({updator:n.updator,bindedPrefixes:t}),this.µB.apply(this,t)},r}();t.Logger=r}(n.utils||(n.utils={}))}(cpr||(cpr={}));var cpr;!function(n){!function(t){!function(t){!function(t){function i(n){Object.getOwnPropertyNames(n.prototype).forEach(function(t){var i=Object.getOwnPropertyDescriptor(n.prototype,t);i.configurable&&i.enumerable&&i.value instanceof Function&&(Object.defineProperty(n.prototype,t,{value:i.value,enumerable:!1,configurable:!1}),r(n.name+"."+t+"을 이너머러블 하지 않도록 수정 하였습니다."))})}var r=n.utils.Logger.forTopic("array").µH({updator:function(n){return r=n}});void 0===Array.prototype["find"]&&Object.defineProperty(Array.prototype,"find",{value:function(n,t){t&&(n=n.bind(t));for(var i=0;i<this.length;i++){var r=this[i];if(n(r))return r}},enumerable:!1,configurable:!1}),void 0===Array.prototype["findIndex"]&&Object.defineProperty(Array.prototype,"findIndex",{value:function(n,t){t&&(n=n.bind(t));for(var i=0;i<this.length;i++)if(n(this[i]))return i;return-1},enumerable:!1,configurable:!1}),i(Array),i(String),i(Object)}(t.shim||(t.shim={}))}(t.internal||(t.internal={}))}(n.core||(n.core={}))}(cpr||(cpr={}));var cpr;!function(n){!function(t){var i,r=new n.utils.URL(location.href).pathname.split("/").pop(),e=n.utils.Logger.forTopic("channel").µH({prefixes:[location.hostname,r],updator:function(n){return e=n}});!function(n){n["HANDSHAKE"]="handshake",n["TRAVERSE_FOCUS"]="traverse-focus",n["CALL_FUNCTION"]="call",n["CALL_RESULT"]="result",n["CLOSE"]="close"}(i=t.EPMessageType||(t.EPMessageType={}));var o;!function(n){n["NORMAL"]="normal",n["RESULT_FIRST_CALLBACK"]="result-first-callback",n["ERROR_FIRST_CALLBACK"]="error-first-callback"}(o=t.PageFunctionCallType||(t.PageFunctionCallType={}));var u=function(){function r(t,i,r){var e=this;void 0===r&&(r={}),this.µJ=[],this.µK=!1,this.µL=!1,this.µQ=t,i instanceof MessagePort?this.µnn=n.utils.CompletableFuture.createCompletedFuture(i):this.µnn=i,this.µtn=Object.create(r),this.µnn.asPromise().then(function(n){n.onmessage=e.µin.bind(e)})}return r.µrn=function(n){var t;return(null===(t=n.data)||void 0===t?void 0:t["__type__"])==i.HANDSHAKE},r.createUpstreamChannel=function(i,o){void 0===o&&(o={});var u=new MessageChannel,c={__type__:t.EPMessageType.HANDSHAKE,port:u.port2,version:n.core.PlatformVersionInfo.getVersion()};i.postMessage(c,"*",[u.port2]);var f=new r(i,u.port1,o);return e("호스트에 접속 요청 보냄."),f},r.µen=function(n,t,i){return void 0===i&&(i={}),new r(n,t,i)},r.prototype.µon=function(n){this.µnn.asPromise().then(function(t){e("메시지 전송",n),t.postMessage(n)})},Object.defineProperty(r.prototype,"targetWindow",{get:function(){return this.µQ},enumerable:!1,configurable:!0}),r.prototype.µun=function(){return this.µnn.isDone()&&!this.µnn.isCompletedExceptionally()&&!this.µK&&!this.µL},r.prototype.µin=function(i){var r,o,u=i.data;switch(e("메시지 수신",u),u.__type__){case t.EPMessageType.TRAVERSE_FOCUS:null===(o=null===(r=this.µtn)||void 0===r?void 0:r.onFocus)||void 0===o||o.call(window,u.forward);break;case t.EPMessageType.CALL_RESULT:this.µcn(u);break;case t.EPMessageType.CALL_FUNCTION:this.µfn(u);break;case t.EPMessageType.CLOSE:e("채널 종료 메시지를 수신했습니다."),this.µsn();break;default:throw new n.exceptions.IllegalArgumentException(i.data)}},r.prototype.µan=function(n){var t={__type__:i.TRAVERSE_FOCUS,forward:n};this.µon(t)},r.prototype.callFunction=function(t,r,e){if(void 0===r&&(r=[]),void 0===e&&(e=o.NORMAL),this.µK)return Promise.reject(new n.exceptions.IllegalStateException("The connection was closed."));var u=new n.utils.CompletableFuture,c={__type__:i.CALL_FUNCTION,callType:e,fnName:t,args:r,callId:n.utils.StringUtil.generateUUID()};return this.µJ.push({callId:c.callId,future:u}),this.µon(c),u.asPromise()},r.prototype.µhn=function(n){var t,i,r;return null!==(r=null===(i=null===(t=this.µtn)||void 0===t?void 0:t.functionProvider)||void 0===i?void 0:i.call(this,n))&&void 0!==r?r:window[n]},r.prototype.µfn=function(n){var t=this,r=this.µhn(n.fnName);if("function"==typeof r)this.µln(r,n.args,n.callType).then(function(r){var e={__type__:i.CALL_RESULT,callId:n.callId,error:null,result:r};t.µon(e)}).catch(function(r){var e={__type__:i.CALL_RESULT,callId:n.callId,error:r,result:void 0};t.µon(e)});else{var e={__type__:i.CALL_RESULT,callId:n.callId,error:'The function "'+n.fnName+' was not found."',result:void 0};this.µon(e)}},r.prototype.µln=function(n,t,i){var r=(t||[]).slice();switch(i){case o.NORMAL:var e=n.apply(window,r);return e instanceof Promise?e:Promise.resolve(e);case o.ERROR_FIRST_CALLBACK:return new Promise(function(t,i){r.push(function(n,r){n?i(n):t(r)}),n.apply(window,r)});case o.RESULT_FIRST_CALLBACK:return new Promise(function(t,i){r.push(function(n,r){r?i(r):t(n)}),n.apply(window,r)})}},r.prototype.µcn=function(n){if(!this.µK){var t=this.µJ.findIndex(function(t){return t.callId==n.callId});if(-1!==t){var i=this.µJ.splice(t,1)[0];null==n.error?i.future.complete(n.result):i.future.completeExceptionally(n.error)}}},r.prototype.close=function(){this.µL||this.µK||(this.µL=!0,this.µon({__type__:i.CLOSE}))},r.prototype.µsn=function(){var n;this.µK||(this.µK=!0,this.µJ=[],null===(n=this.µnn)||void 0===n||delete n["onmessage"],e("채널 파기됨."))},r}();t.PageChannel=u}(n.protocols||(n.protocols={}))}(cpr||(cpr={}));var cpr;!function(n){!function(t){var i=window!=window.parent?window.parent:window.opener,r=!0,e=function(t){if(r){var i=n.utils.DOMKit.µP(document.body);i.length>0&&i[t?0:i.length-1].focus()}else document.body.focus()},o=null,u={},c=n.protocols.PageChannel.createUpstreamChannel(i,{onFocus:function(n){o?o(n):r&&e(n)},functionProvider:function(n){return u[n]}}),f=function(t){if("Tab"==t.key){var i=n.utils.DOMKit.µP(document.body),r=document.activeElement,e=i.indexOf(r);0===e&&t.shiftKey&&(r.blur(),s.focusHost(!1),t.preventDefault()),i.length>0&&e==i.length-1&&!t.shiftKey&&(r.blur(),s.focusHost(!0),t.preventDefault())}};window.addEventListener("unload",function(n){null===c||void 0===c||c.close()}),window.addEventListener("keydown",f);var s=function(){function t(){}return t.registerChannelFunction=function(n,t){u[n]=t},t.unregisterChannelFunction=function(n){if("string"==typeof n)delete u[n];else if("function"==typeof n){var t=Object.keys(u).find(function(t){return u[t]===n});t&&delete u[t]}},t.setFocusHandler=function(n){o=n},t.callHostFunction=function(t,i,r){return void 0===r&&(r=n.protocols.PageFunctionCallType.NORMAL),c.callFunction(t,i,r)},t.focusHost=function(n){c.µan(n)},t.getVersion=function(){return n.core.PlatformVersionInfo.getVersion()},t.getReleaseDate=function(){return n.core.PlatformVersionInfo.getReleaseDate()},t.disableAutoFocus=function(){r&&(r=!1,window.removeEventListener("keydown",f))},t}();t.PlatformAdapter=s}(n.adapters||(n.adapters={}))}(cpr||(cpr={}));