!function a(u,s,c){function i(t,e){if(!s[t]){if(!u[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(l)return l(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var o=s[t]={exports:{}};u[t][0].call(o.exports,function(e){return i(u[t][1][e]||e)},o,o.exports,a,u,s,c)}return s[t].exports}for(var l="function"==typeof require&&require,e=0;e<c.length;e++)i(c[e]);return i}({1:[function(e,t,r){"use strict";var n=e("../functions/querySelector"),o=u(e("./../components/lazyLoading")),a=u(e("../components/hamburger"));function u(e){return e&&e.__esModule?e:{default:e}}var s=(0,n.qSA)(".js-lazy"),c=(0,n.qS)(".main-header");document.addEventListener("DOMContentLoaded",function(){0<s.length&&(0,o.default)(s),null!==c&&(0,a.default)()})},{"../components/hamburger":2,"../functions/querySelector":4,"./../components/lazyLoading":3}],2:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=e("../functions/querySelector");r.default=function(){var t=(0,o.qS)(".js-hamburger"),r=(0,o.qS)("body"),n=(0,o.qS)(".main-header__nav");t.addEventListener("click",function(){e(t.classList.contains("is-active"))});var e=function(e){t.classList.toggle("is-active"),t.setAttribute("aria-expanded","".concat(e?"false":"true")),r.classList.toggle("disabled-scroll"),n.classList.toggle("is-opened")}}},{"../functions/querySelector":4}],3:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;r.default=function(e){function r(t){return["data-src","data-srcset"].map(function(e){return t.removeAttribute(e)})}function t(e){var t;"IMG"===e.tagName?(e.setAttribute("src",e.dataset.src),"PICTURE"===(t=e).parentElement.nodeName&&Array.from(t.parentElement.querySelectorAll("source")).map(function(e){e.setAttribute("srcset",e.dataset.srcset),r(e)})):"SOURCE"!==e.tagName&&e.style.setProperty("background-image","url(".concat(e.dataset.src,")")),e.hasAttribute("srcset")&&e.setAttribute("srcset",e.dataset.srcset),r(e)}if("IntersectionObserver"in window){var n=new IntersectionObserver(function(e){e.map(function(e){e.isIntersecting&&(t(e.target),n.unobserve(e.target))})},{rootMargin:"0px 0px 20px 0px"});e.map(function(e){return n.observe(e)})}else e.map(t)}},{}],4:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.qSA=r.qS=void 0;var n=document.querySelector.bind(document);r.qS=n;r.qSA=function(e){return Array.from(document.querySelectorAll("".concat(e)))}},{}]},{},[1]);