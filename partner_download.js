!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=65)}({65:function(e,n){function t(e,n,t,r,o,i,a){try{var l=e[i](a),d=l.value}catch(e){return void t(e)}l.done?n(d):Promise.resolve(d).then(r,o)}function r(e){return function(){var n=this,r=arguments;return new Promise((function(o,i){var a=e.apply(n,r);function l(e){t(a,o,i,l,d,"next",e)}function d(e){t(a,o,i,l,d,"throw",e)}l(void 0)}))}}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=[],a=[],l=[];FCBH.docReady((function(){var e=document.getElementById("mp3-language-partners-2"),n=document.getElementById("language-search-dropdown"),t=function(e,t){!function(e,t,r){if(38!==e&&40!==e&&13!==e){var i,a,l=function(){var e=n;e.innerHTML="",e.style.display="none";var l=t.toLowerCase();if(i=0,l.length>0){e.style.display="block";var c=function(){if(i>7)return{v:{v:void 0}};var n=r[a];if(0==n.toLowerCase().search(l)){i++;var t=n.slice(0,l.length),o=n.slice(l.length),c=document.createElement("div");c.innerHTML="<strong>"+t+"</strong>"+o,c.onclick=function(){d(n)},e.appendChild(c)}};for(a=0;a<r.length;a++){var s=c();if("object"===o(s))return s.v}0==i&&(e.style.display="none",console.log("no matches"))}}();if("object"===o(l))l.v}}(e,t,i.map((function(e){return e.english_name})))},d=function(e){n.style.display="none",c(e,!1),u(e)};function c(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ENGESVN2DA";console.log(e),console.log(i);var t=i.find((function(n){return n.english_name.toLowerCase()===(null==e?void 0:e.toLowerCase())}))||{english_name:"English",language_family_code:"ENG"};p(t,n)}function s(e){var t=n,r=t.querySelector(".isActive");if("block"===t.style.display)if("mouseover"===e.type&&"strong"!=e.target.nodeName.toLowerCase())r&&r.classList.remove("isActive"),(r=e.target).classList.add("isActive");else if("keyup"!=e.type||40!=e.which&&38!=e.which)"keyup"==e.type&&13==e.which&&r&&d(r.innerText);else{if(e.preventDefault(),r&&r.classList.remove("isActive"),40==e.which)r=r?r.nextElementSibling||r:t.firstChild;else if(38==e.which){if(!r)return;r=r.previousElementSibling||r}r.classList.add("isActive"),u(r.innerText)}}function u(n){e.value=n}function f(){return(f=r(regeneratorRuntime.mark((function e(){var n,t,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,FCBH.axiosInstance.get("https://dbt.io/library/volumelanguage?key=149ae094a3593feba119e15db433804f&media=audio&v=3");case 3:for(n=e.sent,t=n.data,r=[],o=0;o<t.length;o++)r.indexOf(t[o].language_family_code)<0&&(r.push(t[o].language_family_code),i.push(t[o]));c(void 0,"ENGESVN2DA"),u("English"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0),g("An error occurred. Please try again later.");case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function p(e,n){if(e){a=[],l=[],document.getElementById("searchDiv")&&(document.getElementById("searchDiv").style.display="none");for(var t=["https://dbt.io/library/volume?key=149ae094a3593feba119e15db433804f&media=audio&status=live&delivery=digital_download&language_family_code="+e.language_family_code+"&v=2","https://dbt.io/library/volume?key=149ae094a3593feba119e15db433804f&media=audio&status=live&delivery=digital_download&language_family_code="+e.language_family_code+"&rich=1&v=3"],r=0;r<t.length;r++)$.get({url:t[r],dataType:"json",success:function(e){if(e){for(var t=0;t<e.length;t++)l.indexOf(e[t].dam_id)<0&&(a.push(e[t]),l.push(e[t].dam_id));if(m(a,n),e.length>0)h(n||a[0].dam_id)}},error:function(){g("An error occurred. Please try again later.")}})}}function m(e,n){for(var t=document.querySelector("#version-partners .dropdown-list");t.firstChild;)t.removeChild(t.firstChild);if(e.length>0)for(var r=function(){i=e[o],a=i.dam_id.slice(6,7),l="","N"==a?l="New Testament":"O"==a?l="Old Testament":"P"==a&&(l="Partial");var r=document.createElement("A");r.href="#",r.classList.add("dropdown-link","w-dropdown-link");var d=document.createTextNode(i.volume_name+" Audio "+i.media_type+" "+l);r.id=i.dam_id,r.appendChild(d),r.addEventListener("click",(function(){!function(e,n){if(b(),e){console.log("here",t);var t=document.querySelector("#w-dropdown-toggle-0 div");t.setAttribute("data-value",e),t.textContent=n,t.dispatchEvent(new MouseEvent("mouseup",{view:window,bubbles:!0,cancelable:!1})),t.dispatchEvent(new MouseEvent("click",{view:window,bubbles:!0,cancelable:!1})),h(e)}}(r.id,r.textContent)})),t.appendChild(r),n&&n.toLowerCase()==i.dam_id.toLowerCase()&&(r.selected=!0,i.dam_id)},o=0;o<e.length;o++){var i,a,l;r()}else{var d=document.createElement("A");d.href="#",d.classList.add("dropdown-link","w-dropdown-link");var c=document.createTextNode("No versions available.");d.appendChild(c),d.id="noVersion",t.appendChild(d)}var s=document.querySelector("#w-dropdown-toggle-0 div");s.style.overflow="hidden",s.setAttribute("data-value",t.firstChild.id),s.textContent=t.firstChild.textContent}function h(e){if(e){var n=e.slice(0,7),t={};$.get({url:"https://dbt.io/library/metadata?key=149ae094a3593feba119e15db433804f&dam_id="+n.toUpperCase()+"&v=3",dataType:"json",success:function(e){if(e)for(var n=0;n<e.length;n++){if("DA"==e[n].dam_id.slice(-2)){t.publisherMark=e[n].mark;for(var r=0;r<e[n].organization.length;r++){var o=e[n].organization[r];"licensor"==o.organization_role&&(t.licensor=o.organization,t.licensorURL=o.organization_url),"holder"==o.organization_role&&(t.holderOrg=o.organization,t.holderURL=o.organization_url)}}"ET"==e[n].dam_id.slice(-2)&&(t.copyrightMark=e[n].mark,e[n].organization.length>0&&(t.copyrighter=e[n].organization[0].organization,t.copyrighterURL=e[n].organization[0].organization_url))}for(var i=document.querySelector("#wf-form-MP3-Downloads-Partner .txt-notice");i.lastChild;)i.removeChild(i.lastChild);if(function(e){for(var n in e)if(e.hasOwnProperty(n))return!0;return!1}(t)){if(t.copyrightMark){var a=document.createElement("span");a.innerHTML=t.copyrightMark,a.classList.add("block"),i.appendChild(a)}if(t.copyrighter&&t.copyrighterURL){var l=document.createElement("span");l.innerHTML="<a href='"+t.copyrighterURL+"'>"+t.copyrighter+"</a>",l.classList.add("block"),i.appendChild(l)}if(t.licensor&&t.licensorURL){var d=document.createElement("span");d.innerHTML="<a href='"+t.licensorURL+"'> "+t.licensor+"</a>",d.classList.add("block"),i.appendChild(d)}if(t.holderOrg&&t.holderURL){var c=document.createElement("span");c.innerHTML="This Bible audio is brought to you by <a href='"+t.holderURL+"'>"+t.holderOrg+"</a>",c.classList.add("block"),i.appendChild(c)}if(t.publisherMark){var s=document.createElement("span");s.innerHTML=t.publisherMark,s.classList.add("block"),i.appendChild(s)}}else i.textContent="No copyright information available."},error:function(){}})}}function y(e){e.preventDefault(),b();var n=document.querySelector("#w-dropdown-toggle-0 div").getAttribute("data-value");if("noVersion"!==n){var t=Array.from(document.querySelectorAll("#version-partners .dropdown-list a")).findIndex((function(e){return e.id===n}));if(t<0)return console.log("COULDN'T FIND VERSION"),void g("An error occurred. Please try again later.");if(v=a[t],!v)return console.log("VERSION IS NOT TRUE"),void g("An error occurred. Please try again later.");var r=document.createElement("a");r.download=!0,r.href="https://fcbhabdm.s3.amazonaws.com/mp3audiobibles2/"+v.dam_id+"/"+v.dam_id+".zip",r.click()}else g("Please select an audio bible version.")}function g(e){var n=document.querySelector(".w-form-fail"),t=n.querySelector("div");n.style.display="block",t.innerHTML=e}function b(){document.querySelector(".w-form-fail").style.display="none"}e.onclick=e.onkeyup=function(e){t(e.which,e.target.value)},e.addEventListener("keyup",(function(e){return s(e)})),n.addEventListener("mouseover",(function(e){return s(e)})),e.addEventListener("keydown",(function(e){40!=e.which&&38!=e.which&&13!=e.which||e.preventDefault()})),function(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0){parseInt(e.substring(n+5,e.indexOf(".",n)),10)<10&&(document.getElementById("ie-error").style.display="block")}}(),function(){return f.apply(this,arguments)}().finally((function(){document.querySelectorAll(".dropdown-list").forEach((function(e){e.style["max-height"]="300px",e.style.overflow="auto"}))})),document.getElementById("wf-form-MP3-Downloads-Partner").addEventListener("submit",y),document.querySelectorAll("#wf-form-MP3-Downloads-Partner input[type='submit']").forEach((function(e){e.addEventListener("click",y)}))}))}});
//# sourceMappingURL=partner_download.js.map