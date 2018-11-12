!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-imgcaptcha",[],e):"object"==typeof exports?exports["vue-imgcaptcha"]=e():t["vue-imgcaptcha"]=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=1)}([function(t,e,n){"use strict";e.a={name:"vue-imgcaptcha",created:function(){console.log(this.config),this.config&&(this.options=Object.assign(this.options,this.config))},mounted:function(){this.init()},data:function(){return{numLib:[0,1,2,3,4,5,6,7,8,9],letterLib:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],textLib:["好","莫","高","这","及","鑫","测","佘","碗","蔡","庵"],fontStyleLib:["normal","italic","oblique"],fontWeightLib:[100,400,700,900],lineNum:5,dotNum:80,options:{length:4,height:40,width:140,type:"mixture"}}},props:{config:{type:Object}},methods:{init:function(){var t=this,e=this.$refs.canvas,n=e.getContext("2d");e.height=this.options.height,e.width=this.options.width,e.style.cursor="pointer",this.refresh(n),e.addEventListener("click",function(e){t.refresh(n)})},refresh:function(t){t.textBaseline="middle",this.drawBackground(t);for(var e=this.options.width/this.options.length,n=0;n<this.options.length;n++)this.drawFont(t,e*n,e);for(var i=0;i<this.lineNum;i++)this.drawLine(t);for(var o=0;o<this.dotNum;o++)this.drawDot(t)},drawBackground:function(t){var e=this.getRandomColor(170,220);t.fillStyle=e,t.fillRect(0,0,this.options.width,this.options.height)},drawFont:function(t,e,n){var i=this.getRandomNum(e,e+n/3),o=this.getRandomNum(this.options.height/3,this.options.height/2),r=this.letterLib.concat(this.numLib),s=r[this.getRandomNum(0,r.length)],a=this.getRandomNum(this.options.height/3*2,this.options.height)+"px",u=this.fontWeightLib[this.getRandomNum(0,this.fontWeightLib.length)],c=this.fontStyleLib[this.getRandomNum(0,this.fontStyleLib.length)],h=this.getRandomNum(-30,30),f=this.getRandomColor(20,130);t.fillStyle=f,t.font=c+" "+u+" "+a+" SimHei",t.translate(i,o),t.rotate(h*Math.PI/180),t.fillText(s,0,0),t.rotate(-h*Math.PI/180),t.translate(-i,-o)},drawLine:function(t){var e=this.getRandomNum(0,this.options.width/4),n=this.getRandomNum(0,this.options.height),i=this.getRandomNum(this.options.width/4*3,this.options.width),o=this.getRandomNum(0,this.options.height),r=this.getRandomColor(30,120);t.beginPath(),t.moveTo(e,n),t.lineTo(i,o),t.strokeStyle=r,t.stroke()},drawDot:function(t){var e=this.getRandomNum(0,this.options.width),n=this.getRandomNum(0,this.options.height),i=this.getRandomColor(30,120);t.beginPath(),t.arc(e,n,1.2,0,2*Math.PI),t.fillStyle=i,t.fill()},getRandomNum:function(t,e){return Math.floor(Math.random()*(e-t)+t)},getRandomColor:function(t,e){return"rgb("+this.getRandomNum(t,e)+", "+this.getRandomNum(t,e)+", "+this.getRandomNum(t,e)+")"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2);e.default={install:function(t,e){t.component("vue-imgcaptcha",i.a)}}},function(t,e,n){"use strict";function i(t){n(3)}var o=n(0),r=n(9),s=n(8),a=i,u=s(o.a,r.a,!1,a,null,null);e.a=u.exports},function(t,e,n){var i=n(4);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(6)("36b0059f",i,!0,{})},function(t,e,n){e=t.exports=n(5)(!1),e.push([t.i,"",""])},function(t,e){function n(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=i(o);return[n].concat(o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"})).concat([r]).join("\n")}return[n].join("\n")}function i(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=n(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){function i(t){for(var e=0;e<t.length;e++){var n=t[e],i=h[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(r(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(r(n.parts[o]));h[n.id]={id:n.id,refs:1,parts:s}}}}function o(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function r(t){var e,n,i=document.querySelector("style["+v+'~="'+t.id+'"]');if(i){if(p)return m;i.parentNode.removeChild(i)}if(b){var r=l++;i=d||(d=o()),e=s.bind(null,i,r,!1),n=s.bind(null,i,r,!0)}else i=o(),e=a.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function s(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=y(e,o);else{var r=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function a(t,e){var n=e.css,i=e.media,o=e.sourceMap;if(i&&t.setAttribute("media",i),g.ssrId&&t.setAttribute(v,e.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(7),h={},f=u&&(document.head||document.getElementsByTagName("head")[0]),d=null,l=0,p=!1,m=function(){},g=null,v="data-vue-ssr-id",b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n,o){p=n,g=o||{};var r=c(t,e);return i(r),function(e){for(var n=[],o=0;o<r.length;o++){var s=r[o],a=h[s.id];a.refs--,n.push(a)}e?(r=c(t,e),i(r)):r=[];for(var o=0;o<n.length;o++){var a=n[o];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete h[a.id]}}}};var y=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],i={},o=0;o<e.length;o++){var r=e[o],s=r[0],a=r[1],u=r[2],c=r[3],h={id:t+":"+o,css:a,media:u,sourceMap:c};i[s]?i[s].parts.push(h):n.push(i[s]={id:s,parts:[h]})}return n}},function(t,e){t.exports=function(t,e,n,i,o,r){var s,a=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(s=t,a=t.default);var c="function"==typeof a?a.options:a;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o);var h;if(r?(h=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=h):i&&(h=i),h){var f=c.functional,d=f?c.render:c.beforeCreate;f?(c._injectStyles=h,c.render=function(t,e){return h.call(e),d(t,e)}):c.beforeCreate=d?[].concat(d,h):[h]}return{esModule:s,exports:a,options:c}}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-img-captcha"},[n("canvas",{ref:"canvas",staticClass:"captcha-canvas"})])},o=[],r={render:i,staticRenderFns:o};e.a=r}])});
//# sourceMappingURL=vue-imgcaptcha.js.map