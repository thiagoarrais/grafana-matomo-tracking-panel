/*! For license information please see module.js.LICENSE.txt */
define(["react","@grafana/data"],(function(t,e){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=3)}([function(e,r){e.exports=t},function(t,r){t.exports=e},,function(t,e,r){"use strict";r.r(e);var n=r(1);var a=function(){return(a=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)};var o=r(0),i=r.n(o);var c=i.a.createContext({});var s=({trackLink:t})=>{const e=e=>{if(!e.target)return;const{target:r}=e,{nodeName:n}=r;if("A"===n&&t){const{href:e}=r;e&&!e.match(new RegExp(`^(http://www.|https://www.|http://|https://)+(${window.location.hostname})`))&&t({href:e})}};i.a.useEffect(()=>(window.document.addEventListener("click",e),()=>window.document.removeEventListener("click",e)),[])};var u=function(){const t=i.a.useContext(c);return{trackEvent:e=>t.trackEvent&&t.trackEvent(e),trackEvents:()=>t.trackEvents&&t.trackEvents(),trackPageView:e=>t.trackPageView&&t.trackPageView(e),trackSiteSearch:e=>t.trackSiteSearch&&t.trackSiteSearch(e),trackLink:e=>t.trackLink&&t.trackLink(e),enableLinkTracking:()=>s(t),pushInstruction:(e,...r)=>{t.pushInstruction&&t.pushInstruction(e,...r)}}};const d={urlBase:null,siteId:1},l="trackEvent",m="trackLink",p="trackSiteSearch",h="trackPageView",f="trackEcommerceOrder",k="trackEcommerceCartUpdate";var v=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(r[n[a]]=t[n[a]])}return r};var w=class{constructor(t){const e=Object.assign(Object.assign({},d),t);if(!e.urlBase)throw new Error("Matomo urlBase is required.");this.initialize(e)}initialize({urlBase:t,siteId:e,userId:r,trackerUrl:n,srcUrl:a,disabled:o,heartBeat:i,linkTracking:c=!0,configurations:s={}}){var u;const d="/"!==t[t.length-1]?t+"/":t;if("undefined"==typeof window)return;if(window._paq=window._paq||[],0!==window._paq.length)return;if(o)return;this.pushInstruction("setTrackerUrl",null!=n?n:d+"matomo.php"),this.pushInstruction("setSiteId",e),r&&this.pushInstruction("setUserId",r),Object.entries(s).forEach(t=>{this.pushInstruction(t[0],t[1])}),(!i||i&&i.active)&&this.enableHeartBeatTimer(null!==(u=i&&i.seconds)&&void 0!==u?u:15),this.enableLinkTracking(c);const l=document,m=l.createElement("script"),p=l.getElementsByTagName("script")[0];m.type="text/javascript",m.async=!0,m.defer=!0,m.src=a||d+"matomo.js",p&&p.parentNode&&p.parentNode.insertBefore(m,p)}enableHeartBeatTimer(t){this.pushInstruction("enableHeartBeatTimer",t)}enableLinkTracking(t){this.pushInstruction("enableLinkTracking",t)}trackEventsForElements(t){t.length&&t.forEach(t=>{t.addEventListener("click",()=>{const{matomoCategory:e,matomoAction:r,matomoName:n,matomoValue:a}=t.dataset;if(!e||!r)throw new Error("Error: data-matomo-category and data-matomo-action are required.");this.trackEvent({category:e,action:r,name:n,value:Number(a)})})})}trackEvents(){const t='[data-matomo-event="click"]';let e=!1;if(this.mutationObserver||(e=!0,this.mutationObserver=new MutationObserver(e=>{e.forEach(e=>{e.addedNodes.forEach(e=>{if(!(e instanceof HTMLElement))return;e.matches(t)&&this.trackEventsForElements([e]);const r=Array.from(e.querySelectorAll(t));this.trackEventsForElements(r)})})})),this.mutationObserver.observe(document,{childList:!0,subtree:!0}),e){const e=Array.from(document.querySelectorAll(t));this.trackEventsForElements(e)}}stopObserving(){this.mutationObserver&&this.mutationObserver.disconnect()}trackEvent(t){var{category:e,action:r,name:n,value:a}=t,o=v(t,["category","action","name","value"]);if(!e||!r)throw new Error("Error: category and action are required.");this.track(Object.assign({data:[l,e,r,n,a]},o))}trackSiteSearch(t){var{keyword:e,category:r,count:n}=t,a=v(t,["keyword","category","count"]);if(!e)throw new Error("Error: keyword is required.");this.track(Object.assign({data:[p,e,r,n]},a))}trackLink({href:t,linkType:e="link"}){this.pushInstruction(m,t,e)}trackPageView(t){this.track(Object.assign({data:[h]},t))}addEcommerceItem({sku:t,productName:e,productCategory:r,productPrice:n=0,productQuantity:a=1}){this.pushInstruction("addEcommerceItem",t,e,r,n,a)}trackEcommerceOrder({orderId:t,orderRevenue:e,orderSubTotal:r,taxAmount:n,shippingAmount:a,discountOffered:o=!1}){this.track({data:[f,t,e,r,n,a,o]})}trackEcommerceCartUpdate(t){this.pushInstruction(k,t)}setEcommerceView({sku:t,productName:e,productCategory:r,productPrice:n}){this.pushInstruction("setEcommerceView",t,e,r,n)}setEcommerceCategoryView(t){this.setEcommerceView({productCategory:t,productName:!1,sku:!1})}track({data:t=[],documentTitle:e=window.document.title,href:r=window.location.href,customDimensions:n=!1}){t.length&&(n&&Array.isArray(n)&&n.length&&n.map(t=>this.pushInstruction("setCustomDimension",t.id,t.value)),this.pushInstruction("setCustomUrl",r),this.pushInstruction("setDocumentTitle",e),this.pushInstruction(...t))}pushInstruction(t,...e){return"undefined"!=typeof window&&window._paq.push([t,...e]),this}};var g=function(t){return new w(t)};var y=({children:t,value:e})=>{const r=c;return i.a.createElement(r.Provider,{value:e},t)},E=function(t){var e=u().trackPageView;return Object(o.useEffect)((function(){e({})}),[0]),i.a.createElement("div",null)};r.d(e,"plugin",(function(){return b}));var b=new n.PanelPlugin((function(t){var e=t.options,r=g(e);return i.a.createElement(y,{value:r},i.a.createElement(E,a({},t)))})).setPanelOptions((function(t){return t.addTextInput({path:"urlBase",name:"Matomo URL",description:"Base URL for Matomo instance",defaultValue:"https://yourinstance.matomo.cloud/"}).addNumberInput({path:"siteId",name:"Site ID",description:"Site ID identifying the Grafana instance in Matomo",defaultValue:1})}))}])}));
//# sourceMappingURL=module.js.map