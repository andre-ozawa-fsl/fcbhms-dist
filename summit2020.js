!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=71)}({71:function(e,t){function n(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){c=!0,a=e},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw a}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}FCBH.docReady((function(){FCBH.deleteFromStorage(FCBH.GIVE_FORM),new a}));var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"programVision",{label:"Vision 2033",outreach:"FCBH",project_fund_code:"Vision2033-Q",project_id:"3394",project_title:"Vision 2033",textContent:"Your gift will fund the next urgent recording and program needs. Help Faith Comes By Hearing accomplish the task of recording and providing God’s Word in every translated language by 2033."}),i(this,"programField",{label:"Field Programs",outreach:"FCBH",project_fund_code:"FCBH-N",project_id:"182",project_title:"Field Programs",textContent:"Your gift will send Audio Bibles to communities around the world, allowing them to be discipled in God’s pure Word."}),i(this,"programBibleRecording",{label:"Bible Recordings",outreach:"FCBH",project_fund_code:"FCBH-UN",project_id:"1610",project_title:"Bible Recordings",textContent:"Your gift will go toward recording God’s Word in another language, giving oral people the chance to hear the Truth and receive Christ."}),i(this,"amount",document.querySelector("#Chosen-Summit-Amount")),i(this,"otherAmount",new Cleave("#Chosen-Summit-Other-Amount",{prefix:"$",numeral:!0,numeralThousandsGroupStyle:"thousand"})),i(this,"otherAmmountNode",document.querySelector("#Chosen-Summit-Other-Amount")),this.otherAmmountNode.disabled=!0,this.amount.addEventListener("change",this.handleAmountChange.bind(this)),this.captureFormSubmission()}var t,r,a;return t=e,(r=[{key:"handleAmountChange",value:function(e){this.otherAmmountNode.disabled="other"!==e.target.value}},{key:"captureFormSubmission",value:function(){var e=this;document.getElementById("chosen-summit-form").addEventListener("submit",this.onGiveSubmit.bind(this)),document.querySelectorAll("#chosen-summit-form input[type='submit']").forEach((function(t){t.addEventListener("click",e.onGiveSubmit.bind(e))}))}},{key:"getProgram",value:function(e){switch(e){case"Chosen Summit Gift Program Designations Where Most Needed":return this.programVision;case"Chosen Summit Gift Program Designations Scripture Engagement":return this.programField;case"Chosen Summit Gift Program Designations Content creation":return this.programBibleRecording;default:return this.programVision}}},{key:"getRegions",value:function(){var e,t="",r=n(document.querySelectorAll('input[type="checkbox"]:checked+span'));try{for(r.s();!(e=r.n()).done;){var o=e.value;t+="- ".concat(o.textContent,"\n")}}catch(e){r.e(e)}finally{r.f()}return t||(t="- World"),"I have a heart for: \n".concat(t)}},{key:"createFormStructure",value:function(e,t,n){return{amounts:{value:e,usdValue:e},currency_code:"USD",program:t,recurring_donation:"no",regions:n}}},{key:"onGiveSubmit",value:function(e){var t;e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation();var n="other"===this.amount.value?this.otherAmount.getRawValue():this.amount.value;n=(n=String(n).replace("$",""))||"50000";var r=document.querySelector("#Chosen-Summit-Funding-Options").value,o=null===(t=document.querySelector('input[name="Chosen-Summit-Gift-Program-Designations"]:checked'))||void 0===t?void 0:t.value,i=this.getProgram(o),a=this.getRegions();FCBH.saveToStorage(FCBH.GIVE_FORM,this.createFormStructure(n,i,a)),window.location="today"===r?"/get-involved/give-2":"/chosen-summit-2020-6-or-12-months?when=".concat(r)}}])&&o(t.prototype,r),a&&o(t,a),e}()}});
//# sourceMappingURL=summit2020.js.map