!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=66)}({66:function(e,n){function t(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,n,t,r,o,i,u){try{var a=e[i](u),c=a.value}catch(e){return void t(e)}a.done?n(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(o,i){var u=e.apply(n,t);function a(e){r(u,o,i,a,c,"next",e)}function c(e){r(u,o,i,a,c,"throw",e)}a(void 0)}))}}FCBH.docReady(o(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new i,e.next=3,n.init();case 3:case"end":return e.stop()}}),e)}))));var i=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,r,i,u;return n=e,(r=[{key:"init",value:(u=o(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.createPaginationClickListener();case 1:case"end":return e.stop()}}),e,this)}))),function(){return u.apply(this,arguments)})},{key:"createPaginationClickListener",value:function(){var e=this;setTimeout((function(){document.querySelectorAll(".fs-pagination-page").forEach((function(n){node.addEventListener("click",(function(n){window.scrollTo({top:0,behavior:"smooth"}),e.createPaginationClickListener()}))}))}),2e3)}}])&&t(n.prototype,r),i&&t(n,i),e}()}});
//# sourceMappingURL=pagination.js.map