!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=72)}({72:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}FCBH.docReady((function(){new r}));var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.paymentForm=this.getPaymentForm(),this.validatePaymentForm(this.paymentForm)&&this.createHiddenInputs()}var t,r,o;return t=e,(r=[{key:"validatePaymentForm",value:function(e){var t=e.currency_code,n=e.amounts,r=e.recurring_donation,o=e.pledge_time;return!!(t&&n&&r&&o)||(window.location="/vision-virtual-summit-2020",!1)}},{key:"getPaymentForm",value:function(){return FCBH.getFromStorage(FCBH.GIVE_FORM)||{}}},{key:"createHiddenInputs",value:function(){var e=document.querySelector("#wf-form-Vision-Virtual-Summit-Personal-Info-Form"),t=this.createProgramInput(),n=this.createWhenInput(),r=this.createAmountInput();e.prepend(t,n,r)}},{key:"createProgramInput",value:function(){var e,t,n=document.createElement("input");return n.type="hidden",n.name="program",n.id="program",n.value=null===(e=this.paymentForm)||void 0===e||null===(t=e.program)||void 0===t?void 0:t.project_title,n}},{key:"createWhenInput",value:function(){var e=document.createElement("input");return e.type="hidden",e.name="donate-when",e.id="donate-when",e.value=this.paymentForm.pledge_time,e}},{key:"createAmountInput",value:function(){var e,t,n=document.createElement("input");return n.type="hidden",n.name="amount",n.id="amount",n.value=null===(e=this.paymentForm)||void 0===e||null===(t=e.amounts)||void 0===t?void 0:t.usdValue,n}}])&&n(t.prototype,r),o&&n(t,o),e}()}});
//# sourceMappingURL=virtual_summit2020_2.js.map