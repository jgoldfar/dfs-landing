!function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(n){return e[n]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/",n(n.s="mdyV")}({QRet:function(e,n,t){"use strict";function o(e,n){f.options.__h&&f.options.__h(c,e,p||n),p=0;var t=c.__H||(c.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function r(e){return p=1,function(e,n,t){var r=o(a++,2);return r.t=e,r.__c||(r.__=[t?t(n):u(void 0,n),function(e){var n=r.t(r.__[0],e);r.__[0]!==n&&(r.__=[n,r.__[1]],r.__c.setState({}))}],r.__c=c),r.__}(u,e)}function l(){for(var e;e=d.shift();)if(e.__P)try{e.__H.__h.forEach(i),e.__H.__h.forEach(_),e.__H.__h=[]}catch(n){e.__H.__h=[],f.options.__e(n,e.__v)}}function i(e){var n=c,t=e.__c;"function"==typeof t&&(e.__c=void 0,t()),c=n}function _(e){var n=c;e.__c=e.__(),c=n}function u(e,n){return"function"==typeof n?n(e):n}t.d(n,"a",(function(){return r}));var a,c,s,f=t("hosL"),p=0,d=[],h=f.options.__b,m=f.options.__r,v=f.options.diffed,y=f.options.__c,g=f.options.unmount;f.options.__b=function(e){c=null,h&&h(e)},f.options.__r=function(e){m&&m(e),a=0;var n=(c=e.__c).__H;n&&(n.__h.forEach(i),n.__h.forEach(_),n.__h=[])},f.options.diffed=function(e){v&&v(e);var n=e.__c;n&&n.__H&&n.__H.__h.length&&(1!==d.push(n)&&s===f.options.requestAnimationFrame||((s=f.options.requestAnimationFrame)||function(e){var n,t=function(){clearTimeout(o),b&&cancelAnimationFrame(n),setTimeout(e)},o=setTimeout(t,100);b&&(n=requestAnimationFrame(t))})(l)),c=null},f.options.__c=function(e,n){n.some((function(e){try{e.__h.forEach(i),e.__h=e.__h.filter((function(e){return!e.__||_(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],f.options.__e(t,e.__v)}})),y&&y(e,n)},f.options.unmount=function(e){g&&g(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach((function(e){try{i(e)}catch(e){n=e}})),n&&f.options.__e(n,t.__v))};var b="function"==typeof requestAnimationFrame},QfWi:function(e,n,t){"use strict";t.r(n);var o=t("ugae");n.default=o.a},hosL:function(e,n,t){"use strict";function o(e,n){for(var t in n)e[t]=n[t];return e}function r(e){var n=e.parentNode;n&&n.removeChild(e)}function l(e,n,t){var o,r,l,_={};for(l in n)"key"==l?o=n[l]:"ref"==l?r=n[l]:_[l]=n[l];if(arguments.length>2&&(_.children=arguments.length>3?O.call(arguments,2):t),"function"==typeof e&&null!=e.defaultProps)for(l in e.defaultProps)void 0===_[l]&&(_[l]=e.defaultProps[l]);return i(e,_,o,r,null)}function i(e,n,t,o,r){var l={type:e,props:n,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++j:r};return null==r&&null!=W.vnode&&W.vnode(l),l}function _(){return{current:null}}function u(e){return e.children}function a(e,n){this.props=e,this.context=n}function c(e,n){if(null==n)return e.__?c(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?c(e):null}function s(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return s(e)}}function f(e){(!e.__d&&(e.__d=!0)&&L.push(e)&&!p.__r++||M!==W.debounceRendering)&&((M=W.debounceRendering)||U)(p)}function p(){for(var e;p.__r=L.length;)e=L.sort((function(e,n){return e.__v.__b-n.__v.__b})),L=[],e.some((function(e){var n,t,r,l,i,_;e.__d&&(i=(l=(n=e).__v).__e,(_=n.__P)&&(t=[],(r=o({},l)).__v=l.__v+1,w(_,l,r,n.__n,void 0!==_.ownerSVGElement,null!=l.__h?[i]:null,t,null==i?c(l):i,l.__h),x(t,l),l.__e!=i&&s(l)))}))}function d(e,n,t,o,r,l,_,a,s,f){var p,d,m,y,g,b,k,x=o&&o.__k||R,C=x.length;for(t.__k=[],p=0;p<n.length;p++)if(null!=(y=t.__k[p]=null==(y=n[p])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?i(null,y,null,null,y):Array.isArray(y)?i(u,{children:y},null,null,null):y.__b>0?i(y.type,y.props,y.key,null,y.__v):y)){if(y.__=t,y.__b=t.__b+1,null===(m=x[p])||m&&y.key==m.key&&y.type===m.type)x[p]=void 0;else for(d=0;d<C;d++){if((m=x[d])&&y.key==m.key&&y.type===m.type){x[d]=void 0;break}m=null}w(e,y,m=m||q,r,l,_,a,s,f),g=y.__e,(d=y.ref)&&m.ref!=d&&(k||(k=[]),m.ref&&k.push(m.ref,null,y),k.push(d,y.__c||g,y)),null!=g?(null==b&&(b=g),"function"==typeof y.type&&y.__k===m.__k?y.__d=s=h(y,s,e):s=v(e,y,m,x,g,s),"function"==typeof t.type&&(t.__d=s)):s&&m.__e==s&&s.parentNode!=e&&(s=c(m))}for(t.__e=b,p=C;p--;)null!=x[p]&&("function"==typeof t.type&&null!=x[p].__e&&x[p].__e==t.__d&&(t.__d=c(o,p+1)),P(x[p],x[p]));if(k)for(p=0;p<k.length;p++)S(k[p],k[++p],k[++p])}function h(e,n,t){for(var o,r=e.__k,l=0;r&&l<r.length;l++)(o=r[l])&&(o.__=e,n="function"==typeof o.type?h(o,n,t):v(t,o,o,r,o.__e,n));return n}function m(e,n){return n=n||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){m(e,n)})):n.push(e)),n}function v(e,n,t,o,r,l){var i,_,u;if(void 0!==n.__d)i=n.__d,n.__d=void 0;else if(null==t||r!=l||null==r.parentNode)e:if(null==l||l.parentNode!==e)e.appendChild(r),i=null;else{for(_=l,u=0;(_=_.nextSibling)&&u<o.length;u+=2)if(_==r)break e;e.insertBefore(r,l),i=l}return void 0!==i?i:r.nextSibling}function y(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]=null==t?"":"number"!=typeof t||I.test(n)?t:t+"px"}function g(e,n,t,o,r){var l;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(n in o)t&&n in t||y(e.style,n,"");if(t)for(n in t)o&&t[n]===o[n]||y(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])l=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+l]=t,t?o||e.addEventListener(n,l?k:b,l):e.removeEventListener(n,l?k:b,l);else if("dangerouslySetInnerHTML"!==n){if(r)n=n.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null!=t&&(!1!==t||"a"===n[0]&&"r"===n[1])?e.setAttribute(n,t):e.removeAttribute(n))}}function b(e){this.l[e.type+!1](W.event?W.event(e):e)}function k(e){this.l[e.type+!0](W.event?W.event(e):e)}function w(e,n,t,r,l,i,_,c,s){var f,p,h,m,v,y,g,b,k,w,x,S=n.type;if(void 0!==n.constructor)return null;null!=t.__h&&(s=t.__h,c=n.__e=t.__e,n.__h=null,i=[c]),(f=W.__b)&&f(n);try{e:if("function"==typeof S){if(b=n.props,k=(f=S.contextType)&&r[f.__c],w=f?k?k.props.value:f.__:r,t.__c?g=(p=n.__c=t.__c).__=p.__E:("prototype"in S&&S.prototype.render?n.__c=p=new S(b,w):(n.__c=p=new a(b,w),p.constructor=S,p.render=E),k&&k.sub(p),p.props=b,p.state||(p.state={}),p.context=w,p.__n=r,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=S.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=o({},p.__s)),o(p.__s,S.getDerivedStateFromProps(b,p.__s))),m=p.props,v=p.state,h)null==S.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==S.getDerivedStateFromProps&&b!==m&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,w),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,w)||n.__v===t.__v){p.props=b,p.state=p.__s,n.__v!==t.__v&&(p.__d=!1),p.__v=n,n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(e){e&&(e.__=n)})),p.__h.length&&_.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,w),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(m,v,y)}))}p.context=w,p.props=b,p.state=p.__s,(f=W.__r)&&f(n),p.__d=!1,p.__v=n,p.__P=e,f=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(r=o(o({},r),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(y=p.getSnapshotBeforeUpdate(m,v)),x=null!=f&&f.type===u&&null==f.key?f.props.children:f,d(e,Array.isArray(x)?x:[x],n,t,r,l,i,_,c,s),p.base=n.__e,n.__h=null,p.__h.length&&_.push(p),g&&(p.__E=p.__=null),p.__e=!1}else null==i&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=C(t.__e,n,t,r,l,i,_,s);(f=W.diffed)&&f(n)}catch(e){n.__v=null,(s||null!=i)&&(n.__e=c,n.__h=!!s,i[i.indexOf(c)]=null),W.__e(e,n,t)}}function x(e,n){W.__c&&W.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){W.__e(e,n.__v)}}))}function C(e,n,t,o,l,i,_,u){var a,s,f,p=t.props,h=n.props,m=n.type,v=0;if("svg"===m&&(l=!0),null!=i)for(;v<i.length;v++)if((a=i[v])&&"setAttribute"in a==!!m&&(m?a.localName===m:3===a.nodeType)){e=a,i[v]=null;break}if(null==e){if(null===m)return document.createTextNode(h);e=l?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,h.is&&h),i=null,u=!1}if(null===m)p===h||u&&e.data===h||(e.data=h);else{if(i=i&&O.call(e.childNodes),s=(p=t.props||q).dangerouslySetInnerHTML,f=h.dangerouslySetInnerHTML,!u){if(null!=i)for(p={},v=0;v<e.attributes.length;v++)p[e.attributes[v].name]=e.attributes[v].value;(f||s)&&(f&&(s&&f.__html==s.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}if(function(e,n,t,o,r){var l;for(l in t)"children"===l||"key"===l||l in n||g(e,l,null,t[l],o);for(l in n)r&&"function"!=typeof n[l]||"children"===l||"key"===l||"value"===l||"checked"===l||t[l]===n[l]||g(e,l,n[l],t[l],o)}(e,h,p,l,u),f)n.__k=[];else if(v=n.props.children,d(e,Array.isArray(v)?v:[v],n,t,o,l&&"foreignObject"!==m,i,_,i?i[0]:t.__k&&c(t,0),u),null!=i)for(v=i.length;v--;)null!=i[v]&&r(i[v]);u||("value"in h&&void 0!==(v=h.value)&&(v!==e.value||"progress"===m&&!v||"option"===m&&v!==p.value)&&g(e,"value",v,p.value,!1),"checked"in h&&void 0!==(v=h.checked)&&v!==e.checked&&g(e,"checked",v,p.checked,!1))}return e}function S(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){W.__e(e,t)}}function P(e,n,t){var o,l;if(W.unmount&&W.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||S(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){W.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(l=0;l<o.length;l++)o[l]&&P(o[l],n,"function"!=typeof e.type);t||null==e.__e||r(e.__e),e.__e=e.__d=void 0}function E(e,n,t){return this.constructor(e,t)}function T(e,n,t){var o,r,i;W.__&&W.__(e,n),r=(o="function"==typeof t)?null:t&&t.__k||n.__k,i=[],w(n,e=(!o&&t||n).__k=l(u,null,[e]),r||q,q,void 0!==n.ownerSVGElement,!o&&t?[t]:r?null:n.firstChild?O.call(n.childNodes):null,i,!o&&t?t:r?r.__e:n.firstChild,o),x(i,e)}function A(e,n){T(e,n,A)}function D(e,n,t){var r,l,_,u=o({},e.props);for(_ in n)"key"==_?r=n[_]:"ref"==_?l=n[_]:u[_]=n[_];return arguments.length>2&&(u.children=arguments.length>3?O.call(arguments,2):t),i(e.type,u,r||e.key,l||e.ref,null)}function H(e,n){var t={__c:n="__cC"+N++,__:e,Consumer:function(e,n){return e.children(n)},Provider:function(e){var t,o;return this.getChildContext||(t=[],(o={})[n]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&t.some(f)},this.sub=function(e){t.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){t.splice(t.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Provider.__=t.Consumer.contextType=t}t.r(n),t.d(n,"render",(function(){return T})),t.d(n,"hydrate",(function(){return A})),t.d(n,"createElement",(function(){return l})),t.d(n,"h",(function(){return l})),t.d(n,"Fragment",(function(){return u})),t.d(n,"createRef",(function(){return _})),t.d(n,"isValidElement",(function(){return F})),t.d(n,"Component",(function(){return a})),t.d(n,"cloneElement",(function(){return D})),t.d(n,"createContext",(function(){return H})),t.d(n,"toChildArray",(function(){return m})),t.d(n,"options",(function(){return W}));var O,W,j,F,L,U,M,N,q={},R=[],I=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;O=R.slice,W={__e:function(e,n){for(var t,o,r;n=n.__;)if((t=n.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(e)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(e),r=t.__d),r)return t.__E=t}catch(n){e=n}throw e}},j=0,F=function(e){return null!=e&&void 0===e.constructor},a.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=o({},this.state),"function"==typeof e&&(e=e(o({},t),this.props)),e&&o(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),f(this))},a.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),f(this))},a.prototype.render=u,L=[],U="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0,N=0},mdyV:function(e,n,t){"use strict";t.r(n);var o=t("hosL");const{h:r,render:l,hydrate:i}=o,_=e=>e&&e.default?e.default:e,u=e=>"/"===e[e.length-1]?e:e+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(u(t.p)+"sw-esm.js"),"function"==typeof _(t("QfWi"))){let e=document.getElementById("preact_root")||document.body.firstElementChild,n=()=>{let n=_(t("QfWi")),o={};const a=document.querySelector('[type="__PREACT_CLI_DATA__"]');a&&(o=JSON.parse(decodeURI(a.innerHTML)).preRenderData||o);const c={preRenderData:o},s=o.url?u(o.url):"";(i&&s===u(location.pathname)?i:l)(r(n,{CLI_DATA:c}),document.body,e)};0,n()}},ugae:function(e,n,t){"use strict";(function(e){function o(n){return e("div",{class:"error-message w-form-fail container w-container"},e("p",null,"Sorry",n.name?` ${n.name}`:"",", something went wrong while submitting the form.",e("br",null),"Try again"))}function r(n){const t=n.name?n.name.split(" "):["",""],o=2==t.length&&t[0]?t[0]:n.name;return e(i.Fragment,null,e("div",{class:"success-message w-form-done container w-container"},e("p",null,"Awesome, ",o?` ${o}`:"","! Thank you for your inquiry. We will get back to you as soon as possible!"),e("p",null,"Schedule a call with us at your convenience ",e("a",{href:"#",onclick:()=>{Calendly.initPopupWidget({url:"https://calendly.com/jgoldfar/intro",prefill:{name:n.name,email:n.email}})}},"with Calendly"))))}function l(){return e(i.Fragment,null,e("h1",{class:"heading"},"Desert Frog Solutions"),e("p",{class:"subtitle"},"Partnering with visionaries, creators, entrepreneurs, and impactful organizations ",e("br",null),"Delivering IT and data solutions that enable success",e("br",null)),e("p",{class:"subtitle questiontext"},"Our mission is to help professionals remain competitive and discover opportunities through adaptive, robust, and forward-looking solutions that fit their challenges."),e("p",{class:"subtitle questiontext"},e("ul",null,e("li",null,"Do you need innovative, reliable, and cost-effective results?"),e("li",null,"Do you want to understand and upgrade your systems?"),e("li",null,"Do you need resources and expertise to advance your vision?"))),e("p",{class:"subtitle"},"You need to stand out",e("br",null)," We want to make it happen",e("br",null)))}var i=t("hosL"),_=t("QRet");n.a=function(){const[n,t]=Object(_.a)(""),[i,u]=Object(_.a)(""),[a,c]=Object(_.a)(!1),[s,f]=Object(_.a)(!1);return e("div",{id:"preact_root"},e("div",{class:"header-section wf-section"},e("div",{class:"container w-container"},e(l,null),a?e(r,{name:n,email:i}):"",e("div",{class:"sign-up-form w-form",style:a?"display: none;":""},e("form",{name:"wf-form-signup-form","data-name":"Signup Form",id:"email-form",action:"",method:"post",enctype:"multipart/form-data",class:"w-clearfix",onSubmit:e=>{e.preventDefault();const n=new FormData(e.target);return fetch("https://usebasin.com/f/c5e3a00dbed9",{method:"POST",headers:{Accept:"application/json"},body:n}).then((e=>{200===e.status?c(!0):(f(!0),setTimeout((()=>{f(!1)}),3e3))})).catch((()=>{f(!0),setTimeout((()=>{f(!1)}),3e3)}))}},e("input",{type:"text",class:"field fieldfullwidth w-input",maxlength:"256",name:"Name","data-name":"Name",placeholder:"Enter your name (*)",id:"Name",required:"true",onChange:e=>{t(e.target.value),console.log(n)}}),e("textarea",{placeholder:"Share your project, product, or challenge. Or just say Hi!",maxlength:"5000",id:"Challenge",name:"Challenge",required:"","data-name":"field",class:"field fieldfullwidth fieldenterchallenge w-input"}),e("input",{type:"email",class:"field w-input",maxlength:"256",name:"email","data-name":"Email",placeholder:"Enter your email address (*)",id:"field",onChange:e=>{u(e.target.value),console.log(i)},required:"true"}),e("input",{type:"submit",value:"Contact Us","data-wait":"Please wait...",class:"button w-button"}))),s?e(o,{name:n}):"")))}}).call(this,t("hosL").h)}});
//# sourceMappingURL=bundle.98099.esm.js.map