!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=77)}({16:function(e,t,n){"use strict";var r=n(28),a=n.n(r),o=n(29),i=n.n(o)()(a.a);i.push([e.i,".disabled {\n  color: darkred;\n}\n\n#language-queries {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n}\n\n.w-form {\n  display: flex;\n  justify-content: center;\n}","",{version:3,sources:["webpack://./src/styles/terms.css"],names:[],mappings:"AAAA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;AACb;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB",sourcesContent:[".disabled {\n  color: darkred;\n}\n\n#language-queries {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n}\n\n.w-form {\n  display: flex;\n  justify-content: center;\n}"],sourceRoot:""}]),t.a=i},27:function(e,t,n){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function s(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],a=0;a<e.length;a++){var o=e[a],c=t.base?o[0]+t.base:o[0],u=n[c]||0,l="".concat(c," ").concat(u);n[c]=u+1;var d=s(l),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:l,updater:y(f,t),references:1}),r.push(l)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function m(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,g=0;function y(e,t){var n,r,a;if(t.singleton){var o=g++;n=p||(p=u(t)),r=f.bind(null,n,o,!1),a=f.bind(null,n,o,!0)}else n=u(t),r=m.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=s(n[r]);i[a].references--}for(var o=c(e,t),u=0;u<n.length;u++){var l=s(n[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=o}}}},28:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var t=r(e,4),n=t[1],a=t[3];if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),s="/*# ".concat(i," */"),c=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[n].concat(c).concat([s]).join("\n")}return[n].join("\n")}},29:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},77:function(e,t,n){"use strict";n.r(t);var r=n(27),a=n.n(r),o=n(16),i={injectType:"styleTag",insert:"head",singleton:!1};a()(o.a,i),o.a.locals;function s(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t,n,r,a,o,i){try{var s=e[o](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){u(o,r,a,i,s,"next",e)}function s(e){u(o,r,a,i,s,"throw",e)}i(void 0)}))}}function d(){return(d=l(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://backup.faithcomesbyhearing.com/resources/gosplefilms.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.map((function(e){return e.data})));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),r=this;do{for(t=n.length;--t>=0&&n.item(t)!==r;);}while(t<0&&(r=r.parentElement));return r}),String.prototype.readify=function(){var e;return e=(e=this.replace(/_/gi," ")).charAt(0).toUpperCase()+e.slice(1)},document.addEventListener("click",(function(e){var t,n=e.path,r=document.getElementById("language-queries");null!=n&&n.includes(f)||null!=n&&n.includes(r)||(t=document.getElementById("language-queries"))&&(t.style.display="none")}));var f=document.getElementById("Search");f.onclick=function(){document.getElementById("language-queries").style.display="block",document.getElementById("Search").focus()},document.getElementById("Search").onkeyup=function(){var e=this.value.trim(),t=document.getElementById("language-queries"),n=s(document.querySelectorAll(".selected-language")).map((function(e){return e.dataset.sn}));if(t.innerHTML="",e){for(var r=window.fuse.search(e),a=0;a<r.length;a++)if(!(a>4)){var o=r[a].item;t.innerHTML+="<p class='query dropdown-link w-dropdown-link pointer' data-matbs='".concat(o.MATBookStatus,"'\n        data-lukbs='").concat(o.LUKBookStatus,"' data-jbs='").concat(o.JHNBookStatus,"' data-matvl='").concat(o.MATVimeoLink,"' \n        data-jvl='").concat(o.JHNVimeoLink,"' data-l='").concat(o.Language,"' data-v='").concat(o.Version,"' data-sn='").concat(o.StockNumber,"' \n        data-mrkvl='").concat(o.MRKVimeoLink,"' data-lukvl='").concat(o.LUKVimeoLink,"' data-rc='").concat(o.RegionContact,"' \n        data-sv='").concat(o.StreamingVideo,"' data-mrkbs='").concat(o.MRKBookStatus,"' data-rs='").concat(o.RecordingStatus,"' \n        style='margin:0;padding:10px 15px;border-bottom:1px solid #e6e6e6;cursor:pointer'> ").concat(o.Language," - ").concat(o.Version,"</p>")}for(var i=document.querySelectorAll(".query"),c=0;c<i.length;c++)n.includes(i[c].dataset.sn)&&(i[c].disabled=!0,i[c].classList.add("disabled")),i[c].onclick=function(e){document.getElementById("error").classList.remove("error-message"),document.getElementById("error").innerHTML="",e.target.classList.add("disabled"),!0!==e.target.disabled&&(document.getElementById("gf-languages-selected").innerHTML+="<p class='selected-language' data-l='".concat(this.dataset.l,"' data-v='").concat(this.dataset.v,"' data-sn='").concat(this.dataset.sn,"' \n            data-mrkvl='").concat(this.dataset.mrkvl,"' data-rc='").concat(this.dataset.rc,"' data-sv='").concat(this.dataset.sv,"' data-mrkbs='").concat(this.dataset.mrkbs,"' \n            data-matbs='").concat(this.dataset.matbs,"' data-lukbs='").concat(this.dataset.lukbs,"' data-jbs='").concat(this.dataset.jbs,"' data-matvl='").concat(this.dataset.matvl,"' \n            data-lukvl='").concat(this.dataset.lukvl,"' data-jvl='").concat(this.dataset.jvl,"' data-rs='").concat(this.dataset.rs,"'>\n            <span style='color:#9e1e35;font-weight:bold'>&#10004;</span> ").concat(this.dataset.l," - ").concat(this.dataset.v," \n            <span class='hover delete' style='text-decoration:underline;font-size:14px;color:#9e1e35;margin-left:15px;cursor:pointer'>Delete</span></p>")),e.target.disabled=!0,s(document.getElementsByClassName("delete")).forEach((function(e){e.addEventListener("click",(function(t){var n=s(document.querySelectorAll(".query")),r=e.parentElement.parentElement,a=e.parentElement,o=n.find((function(e){return e.dataset.sn==a.dataset.sn}));o&&(o.classList.remove("disabled"),o.disabled="false"),r.removeChild(a)}))}))}}};var m=function(e){var t=document.getElementById("error");t.classList.add("error-message"),t.innerHTML=e};document.querySelectorAll("input[type=submit]")[0].onclick=function(e){e.preventDefault();for(var t=document.querySelectorAll("input, textarea"),n=0;n<t.length;n++)t[n].style.border="1px solid #ccc",document.getElementById("error").innerHTML="";var r=document.getElementById("wf-form-gospel-films-terms").querySelectorAll("[required]");for(n=0;n<r.length;n++)if(!r[n].value.trim())return r[n].style.border="1px solid red",void m(r[n].name.readify()+" is required.");if(document.getElementById("Agree-Terms").checked)if(""!=document.getElementById("gf-languages-selected").innerHTML){for(var a,o=new FormData(document.getElementById("wf-form-gospel-films-terms")),i=document.getElementsByClassName("selected-language"),s=0;s<i.length;s++){var c=i[s];o.append("language[]",c.dataset.l),o.append("region_contact[]",c.dataset.rc),o.append("version[]",c.dataset.v),o.append("mat_vimeo_link[]",c.dataset.matvl),o.append("mrk_vimeo_link[]",c.dataset.mrkvl),o.append("john_vimeo_link[]",c.dataset.jvl),o.append("luke_vimeo_link[]",c.dataset.lukvl),o.append("stock_number[]",c.dataset.sn),o.append("mat_book_status[]",c.dataset.matbs),o.append("mrk_book_status[]",c.dataset.mrkbs),o.append("luke_book_status[]",c.dataset.lukbs),o.append("john_book_status[]",c.dataset.jbs),o.append("recording_status[]",c.dataset.rs)}document.querySelectorAll("input[type=submit]")[0].value="Processing...",(a=o,FCBH.axiosInstance.post("https://backup.faithcomesbyhearing.com/ci/index.php/Gospel_films/requestv1",a)).then((function(e){"success"===e.data?(document.getElementById("wf-form-gospel-films-terms").classList.add("success"),document.getElementById("wf-form-gospel-films-terms").innerHTML="<p class=txt-default-gray-dark>Thank you! Your request has been submitted. You will be hearing from our team once your request has been processed.</p>",window.scrollTo(0,0)):(m("Something went wrong. Please try again later."),document.querySelectorAll("input[type=submit]")[0].value="Submit")})).catch((function(e){m("Something went wrong. Please try again later."),document.querySelectorAll("input[type=submit]")[0].value="Submit"}))}else m("Please select a language.");else document.getElementById("error").innerHTML="Please agree to the above terms."},function(){return d.apply(this,arguments)}().then((function(e){window.fuse=new Fuse(e,{shouldSort:!0,includeScore:!0,threshold:.3,location:0,distance:100,maxPatternLength:32,minMatchCharLength:2,keys:["Language","Version"]})})).catch((function(e){console.log(e)})).finally((function(){}))}});
//# sourceMappingURL=terms.js.map