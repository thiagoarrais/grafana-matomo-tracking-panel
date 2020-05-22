/*! For license information please see module.js.LICENSE.txt */
define(["react","@grafana/data"],(function(e,t){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=12)}([function(t,r){t.exports=e},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2);t.MatomoContext=n.default;var a=r(4);t.MatomoProvider=a.default;var o=r(5);t.createInstance=o.default;var i=r(10);t.useMatomo=i.default},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0)).default.createContext({});t.default=a},function(e,r){e.exports=t},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0)),o=n(r(2));t.default=function(e){var t=e.children,r=e.value,n=o.default;return a.default.createElement(n.Provider,{value:r},t)}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(6));t.default=function(e){return new a.default(e)}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(7)),i=a(r(9));t.types=i,"undefined"!=typeof window&&(window.MatomoTracker=o.default),t.default=o.default},function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};Object.defineProperty(t,"__esModule",{value:!0});var o=r(8),i=function(){function e(t){var r=n(n({},o.defaultOptions),t);if(!r.urlBase)throw new Error("Matomo urlBase is required.");e.initialize(r)}return e.initialize=function(e){var t=e.urlBase,r=e.siteId,n=e.trackerUrl,a=e.srcUrl,o=e.heartBeat,i=e.linkTracking,u=void 0===i||i;if("/"!==t[t.length-1]&&(t+="/"),"undefined"!=typeof window&&(window._paq=window._paq||[],0===window._paq.length)){window._paq.push(["setTrackerUrl",n||t+"matomo.php"]),window._paq.push(["setSiteId",r]),(!o||o&&o.active)&&this.enableHeartBeatTimer(15),this.enableLinkTracking(u);var c=document,d=c.createElement("script"),f=c.getElementsByTagName("script")[0];d.type="text/javascript",d.async=!0,d.defer=!0,d.src=a||t+"matomo.js",f&&f.parentNode&&f.parentNode.insertBefore(d,f)}},e.enableHeartBeatTimer=function(e){window._paq.push(["enableHeartBeatTimer",e])},e.enableLinkTracking=function(e){window._paq.push(["enableLinkTracking",e])},e.prototype.trackEvents=function(){var e=this,t=Array.from(document.querySelectorAll('[data-matomo-event="click"]'));t.length&&t.forEach((function(t){t.addEventListener("click",(function(){var r=t.dataset,n=r.matomoCategory,a=r.matomoAction,o=r.matomoName,i=r.matomoValue;if(!n||!a)throw new Error("Error: data-matomo-category and data-matomo-action are required.");e.trackEvent({category:n,action:a,name:o,value:Number(i)})}))}))},e.prototype.trackEvent=function(e){var t=e.category,r=e.action,i=e.name,u=e.value,c=a(e,["category","action","name","value"]);if(!t||!r)throw new Error("Error: category and action are required.");this.track(n({data:[o.TRACK_TYPES.TRACK_EVENT,t,r,i,u]},c))},e.prototype.trackSiteSearch=function(e){var t=e.keyword,r=e.category,i=e.count,u=a(e,["keyword","category","count"]);if(!t)throw new Error("Error: keyword is required.");this.track(n({data:[o.TRACK_TYPES.TRACK_SEARCH,t,r,i]},u))},e.prototype.trackLink=function(e){var t=e.href,r=e.linkType,n=void 0===r?"link":r;window._paq.push([o.TRACK_TYPES.TRACK_LINK,t,n])},e.prototype.trackPageView=function(e){this.track(n({data:[o.TRACK_TYPES.TRACK_VIEW]},e))},e.prototype.addEcommerceItem=function(e){var t=e.sku,r=e.productName,n=e.productCategory,a=e.productPrice,o=void 0===a?0:a,i=e.productQuantity,u=void 0===i?1:i;window._paq.push(["addEcommerceItem",t,r,n,o,u])},e.prototype.trackEcommerceOrder=function(e){var t=e.orderId,r=e.orderRevenue,n=e.orderSubTotal,a=e.taxAmount,i=e.shippingAmount,u=e.discountOffered,c=void 0!==u&&u;this.track({data:[o.TRACK_TYPES.TRACK_ECOMMERCE_ORDER,t,r,n,a,i,c]})},e.prototype.trackEcommerceCartUpdate=function(e){window._paq.push([o.TRACK_TYPES.TRACK_ECOMMERCE_CART_UPDATE,e])},e.prototype.setEcommerceView=function(e){var t=e.sku,r=e.productName,n=e.productCategory,a=e.productPrice;window._paq.push(["setEcommerceView",t,r,n,a])},e.prototype.setEcommerceCategoryView=function(e){this.setEcommerceView({productCategory:e,productName:!1,sku:!1})},e.prototype.track=function(e){var t=e.data,r=void 0===t?[]:t,n=e.documentTitle,a=void 0===n?window.document.title:n,o=e.href,i=void 0===o?window.location.href:o,u=e.customDimensions,c=void 0!==u&&u;r.length&&(c&&Array.isArray(c)&&c.length&&c.map((function(e){return window._paq.push(["setCustomDimension",e.id,e.value])})),window._paq.push(["setCustomUrl",i]),window._paq.push(["setDocumentTitle",a]),window._paq.push(r))},e}();t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions={urlBase:null,siteId:1},t.TRACK_TYPES={TRACK_EVENT:"trackEvent",TRACK_LINK:"trackLink",TRACK_SEARCH:"trackSiteSearch",TRACK_VIEW:"trackPageView",TRACK_ECOMMERCE_ORDER:"trackEcommerceOrder",TRACK_ECOMMERCE_CART_UPDATE:"trackEcommerceCartUpdate"}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0)),o=n(r(2)),i=n(r(11));t.default=function(){var e=a.default.useContext(o.default);return{trackEvent:function(t){return e.trackEvent&&e.trackEvent(t)},trackPageView:function(t){return e.trackPageView&&e.trackPageView(t)},trackSiteSearch:function(t){return e.trackSiteSearch&&e.trackSiteSearch(t)},trackLink:function(t){return e.trackLink&&e.trackLink(t)},enableLinkTracking:function(){return i.default(e)}}}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(r(0));t.default=function(e){var t=e.trackLink,r=function(e){if(e.target){var r=e.target;if("A"===r.nodeName&&t){var n=r.href;n&&!n.match(new RegExp("^(http://www.|https://www.|http://|https://)+("+window.location.hostname+")"))&&t({href:n})}}};a.default.useEffect((function(){return window.document.addEventListener("click",r),function(){return window.document.removeEventListener("click",r)}}),[])}},function(e,t,r){"use strict";r.r(t);var n=r(3);var a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var o=r(0),i=r.n(o),u=r(1),c=function(e){var t=Object(u.useMatomo)().trackPageView;return Object(o.useEffect)((function(){t({})}),[0]),i.a.createElement("div",null)};r.d(t,"plugin",(function(){return d}));var d=new n.PanelPlugin((function(e){var t=e.options,r=Object(u.createInstance)(t);return i.a.createElement(u.MatomoProvider,{value:r},i.a.createElement(c,a({},e)))})).setPanelOptions((function(e){return e.addTextInput({path:"urlBase",name:"Matomo URL",description:"Base URL for Matomo instance",defaultValue:"https://yourinstance.matomo.cloud/"}).addNumberInput({path:"siteId",name:"Site ID",description:"Site ID identifying the Grafana instance in Matomo",defaultValue:1})}))}])}));
//# sourceMappingURL=module.js.map