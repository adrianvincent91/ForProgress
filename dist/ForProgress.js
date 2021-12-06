!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ForProgress=e():t.ForProgress=e()}(this,(function(){return(()=>{"use strict";var t={476:(t,e,r)=>{r.r(e),r.d(e,{default:()=>a});var n=r(81),s=r.n(n),i=r(645),o=r.n(i)()(s());o.push([t.id,"div.forProgressContainer{position:fixed;top:0;left:0;width:100%;z-index:999999999;transition:opacity 500ms 250ms}div.forProgressContainer div.bar{transition:transform 250ms cubic-bezier(0.25, 1, 0.5, 1);transform:translate3d(-100%, 0px, 0px);position:relative;width:100%}div.forProgressContainer div.bar div.tip{height:100%;width:95px;position:absolute;right:0;transform:rotate(4deg) translate3d(0px, -3px, 0px);filter:blur(5px)}div.forProgressContainer .disableTransition{transition:none !important}",""]);const a=o.toString()},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,s,i){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(n)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(o[c]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);n&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),s&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=s):l[4]="".concat(s)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},450:function(t,e,r){const n=(this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}})(r(476));t.exports=class{constructor(t={}){this.settings={color:"red",autoIncrement:!0,autoIncrementSpeed:100,autoIncrementMaxPercent:1,autoIncrementFirstPercent:10,height:3,appendTo:"body",useCustomCss:!1},this.updateSettings(t),this.appendCss(),this.colorArray=this.getcolorArray(),this.currentPercent=0,this.currentAutoIncrementInterval=!1,this.isRunning=!1,this.autoIncrementIsPaused=!1}start(){this.reset();let{forProgressContainer:t,bar:e}=this.getForProgressElements();return t.classList.add("disableTransition"),e.classList.add("disableTransition"),this.setPercent(0),t.style.opacity="1",t.offsetHeight,t.classList.remove("disableTransition"),e.classList.remove("disableTransition"),this.startIncrement(),this}setPercent(t){return this.isRunning||this.start(),t<0||t>100||this.changeBarProgress(t),this}addPercent(t){this.isRunning||this.start();let e=this.currentPercent+t;return e>100&&(e=100),e<0&&(e=0),this.changeBarProgress(e),this}getPercent(){return this.currentPercent}done(){if(!this.isRunning)return this;let{forProgressContainer:t}=this.getForProgressElements();return this.clearCurrentAutoIncrementInterval(),this.setPercent(100),t.style.opacity="0",this.isRunning=!1,this}pause(){return this.autoIncrementIsPaused=!0,this}resume(){return this.autoIncrementIsPaused=!1,this}reset(){this.clearCurrentAutoIncrementInterval(),this.isRunning=!0,this.currentAutoIncrementInterval=!1,this.autoIncrementIsPaused=!this.settings.autoIncrement}changeBarProgress(t){let{bar:e}=this.getForProgressElements(),r=-100+t;e.style.transform=`translate3d(${r}%, 0px, 0px)`,this.currentPercent=t}createForProgressContainer(){let t=document.createElement("div");t.className="forProgressContainer";let e=document.createElement("div");e.className="bar";let r=document.createElement("div");return r.className="tip",e.append(r),t.append(e),e.style.background=this.gradientGenerator(),r.style.background=this.colorArray[this.colorArray.length-1],e.style.height=`${this.settings.height}px`,t}gradientGenerator(){return`linear-gradient(95deg, ${this.colorArray.map(((t,e)=>`${t} ${(100/(this.colorArray.length-1)*e).toFixed(2)}%`)).join(", ")})`}getcolorArray(){let t=this.settings.color;return"string"==typeof t?[t,t]:1===t.length?[t[0],t[0]]:t}getForProgressElements(){let t=document.querySelector("div.forProgressContainer");if(!t){t=this.createForProgressContainer();let e=document.querySelector(this.settings.appendTo);if(!e)throw`Cannot append to '${this.settings.appendTo}' as it does not exist in document`;e.append(t)}let e=t.querySelector("div.bar");return{forProgressContainer:t,bar:e}}startIncrement(){0!==this.currentPercent||this.autoIncrementIsPaused||this.setPercent(this.settings.autoIncrementFirstPercent),this.currentAutoIncrementInterval=setInterval((()=>{if(this.autoIncrementIsPaused)return;if(0===this.currentPercent&&0!==this.settings.autoIncrementFirstPercent)return void this.setPercent(this.settings.autoIncrementFirstPercent);let t=this.currentPercent+this.getRandomPercent();t<=99.5&&this.setPercent(t)}),this.settings.autoIncrementSpeed)}getRandomPercent(){return parseFloat((Math.random()*(.1-this.settings.autoIncrementMaxPercent)+this.settings.autoIncrementMaxPercent).toFixed(2))}updateSettings(t){for(let[e,r]of Object.entries(t))this.settings[e]=r}clearCurrentAutoIncrementInterval(){"number"==typeof this.currentAutoIncrementInterval&&clearInterval(this.currentAutoIncrementInterval)}appendCss(){if(this.settings.useCustomCss)return;let t=document.createElement("style");t.textContent=n.default,document.head.append(t)}}}},e={};function r(n){var s=e[n];if(void 0!==s)return s.exports;var i=e[n]={id:n,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.exports}return r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r(450)})()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBR3JCLElBQUlDLEVBQVMrRixFQUF5QkUsR0FBWSxDQUNqRDNGLEdBQUkyRixFQUVKbEcsUUFBUyxJQU9WLE9BSEFvRyxFQUFvQkYsR0FBVUcsS0FBS3BHLEVBQU9ELFFBQVNDLEVBQVFBLEVBQU9ELFFBQVNpRyxHQUdwRWhHLEVBQU9ELFEsT0NwQmZpRyxFQUFvQkssRUFBS3JHLElBQ3hCLElBQUlzRyxFQUFTdEcsR0FBVUEsRUFBT3VHLFdBQzdCLElBQU92RyxFQUFpQixRQUN4QixJQUFNLEVBRVAsT0FEQWdHLEVBQW9CUSxFQUFFRixFQUFRLENBQUVHLEVBQUdILElBQzVCQSxHQ0xSTixFQUFvQlEsRUFBSSxDQUFDekcsRUFBUzJHLEtBQ2pDLElBQUksSUFBSW5CLEtBQU9tQixFQUNYVixFQUFvQlcsRUFBRUQsRUFBWW5CLEtBQVNTLEVBQW9CVyxFQUFFNUcsRUFBU3dGLElBQzVFRSxPQUFPbUIsZUFBZTdHLEVBQVN3RixFQUFLLENBQUVzQixZQUFZLEVBQU1DLElBQUtKLEVBQVduQixNQ0ozRVMsRUFBb0JXLEVBQUksQ0FBQ0ksRUFBS0MsSUFBVXZCLE9BQU93QixVQUFVQyxlQUFlZCxLQUFLVyxFQUFLQyxHQ0NsRmhCLEVBQW9CbUIsRUFBS3BILElBQ0gsb0JBQVhxSCxRQUEwQkEsT0FBT0MsYUFDMUM1QixPQUFPbUIsZUFBZTdHLEVBQVNxSCxPQUFPQyxZQUFhLENBQUU3QixNQUFPLFdBRTdEQyxPQUFPbUIsZUFBZTdHLEVBQVMsYUFBYyxDQUFFeUYsT0FBTyxLQ0Y3QlEsRUFBb0IsTSIsInNvdXJjZXMiOlsid2VicGFjazovL0ZvclByb2dyZXNzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Gb3JQcm9ncmVzcy8uL3NyYy9Gb3JQcm9ncmVzcy5zY3NzIiwid2VicGFjazovL0ZvclByb2dyZXNzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9Gb3JQcm9ncmVzcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9ub1NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vRm9yUHJvZ3Jlc3MvLi9zcmMvRm9yUHJvZ3Jlc3MudHMiLCJ3ZWJwYWNrOi8vRm9yUHJvZ3Jlc3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRm9yUHJvZ3Jlc3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vRm9yUHJvZ3Jlc3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0ZvclByb2dyZXNzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vRm9yUHJvZ3Jlc3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Gb3JQcm9ncmVzcy93ZWJwYWNrL3N0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRm9yUHJvZ3Jlc3NcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiRm9yUHJvZ3Jlc3NcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfTk9fU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL25vU291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX05PX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LmZvclByb2dyZXNzQ29udGFpbmVye3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO3otaW5kZXg6OTk5OTk5OTk5O3RyYW5zaXRpb246b3BhY2l0eSA1MDBtcyAyNTBtc31kaXYuZm9yUHJvZ3Jlc3NDb250YWluZXIgZGl2LmJhcnt0cmFuc2l0aW9uOnRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMSwgMC41LCAxKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsIDBweCwgMHB4KTtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlfWRpdi5mb3JQcm9ncmVzc0NvbnRhaW5lciBkaXYuYmFyIGRpdi50aXB7aGVpZ2h0OjEwMCU7d2lkdGg6OTVweDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO3RyYW5zZm9ybTpyb3RhdGUoNGRlZykgdHJhbnNsYXRlM2QoMHB4LCAtM3B4LCAwcHgpO2ZpbHRlcjpibHVyKDVweCl9ZGl2LmZvclByb2dyZXNzQ29udGFpbmVyIC5kaXNhYmxlVHJhbnNpdGlvbnt0cmFuc2l0aW9uOm5vbmUgIWltcG9ydGFudH1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18udG9TdHJpbmcoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaSkge1xuICByZXR1cm4gaVsxXTtcbn07IiwiaW1wb3J0IGNzcyBmcm9tICcuL0ZvclByb2dyZXNzLnNjc3MnO1xuXG5pbnRlcmZhY2UgU2V0dGluZ3Mge1xuICAgIGNvbG9yPzogc3RyaW5nIHwgc3RyaW5nW10gJiB7IDA6IHN0cmluZyB9O1xuICAgIGF1dG9JbmNyZW1lbnQ/OiBib29sZWFuO1xuICAgIGF1dG9JbmNyZW1lbnRTcGVlZD86IG51bWJlcjtcbiAgICBhdXRvSW5jcmVtZW50TWF4UGVyY2VudD86IG51bWJlcjtcbiAgICBhdXRvSW5jcmVtZW50Rmlyc3RQZXJjZW50PzogbnVtYmVyO1xuICAgIGhlaWdodD86IG51bWJlcjtcbiAgICBhcHBlbmRUbz86IHN0cmluZztcbiAgICB1c2VDdXN0b21Dc3M/OiBib29sZWFuO1xufVxuXG5jbGFzcyBGb3JQcm9ncmVzcyB7XG5cbiAgICBwcml2YXRlIHNldHRpbmdzOiBSZXF1aXJlZDxTZXR0aW5ncz47XG4gICAgcHJpdmF0ZSBjdXJyZW50UGVyY2VudDogbnVtYmVyO1xuICAgIHByaXZhdGUgY3VycmVudEF1dG9JbmNyZW1lbnRJbnRlcnZhbDogbnVtYmVyIHwgYm9vbGVhbjtcbiAgICBwcml2YXRlIGlzUnVubmluZzogYm9vbGVhbjtcbiAgICBwcml2YXRlIGF1dG9JbmNyZW1lbnRJc1BhdXNlZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIGNvbG9yQXJyYXk6IHN0cmluZ1tdO1xuXG4gICAgY29uc3RydWN0b3IoY3VzdG9tU2V0dGluZ3M6IFNldHRpbmdzID0ge30pIHtcblxuICAgICAgICB0aGlzLnNldHRpbmdzID0ge1xuICAgICAgICAgICAgY29sb3I6ICdyZWQnLFxuICAgICAgICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcbiAgICAgICAgICAgIGF1dG9JbmNyZW1lbnRTcGVlZDogMTAwLFxuICAgICAgICAgICAgYXV0b0luY3JlbWVudE1heFBlcmNlbnQ6IDEsXG4gICAgICAgICAgICBhdXRvSW5jcmVtZW50Rmlyc3RQZXJjZW50OiAxMCxcbiAgICAgICAgICAgIGhlaWdodDogMyxcbiAgICAgICAgICAgIGFwcGVuZFRvOiAnYm9keScsXG4gICAgICAgICAgICB1c2VDdXN0b21Dc3M6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy51cGRhdGVTZXR0aW5ncyhjdXN0b21TZXR0aW5ncyk7XG4gICAgICAgIHRoaXMuYXBwZW5kQ3NzKCk7XG4gICAgICAgIHRoaXMuY29sb3JBcnJheSA9IHRoaXMuZ2V0Y29sb3JBcnJheSgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRQZXJjZW50ID0gMDtcbiAgICAgICAgdGhpcy5jdXJyZW50QXV0b0luY3JlbWVudEludGVydmFsID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYXV0b0luY3JlbWVudElzUGF1c2VkID0gZmFsc2U7XG5cbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogU3RhcnQgdGhlIHByb2dyZXNzIGJhci4gUmVzdGFydHMgaWYgYWxyZWFkeSBydW5uaW5nLlxuICAgICAqIEBwYXJhbSBhdXRvSW5jcmVtZW50IEVuYWJsZSBvciBkaXNhYmxlIGF1dG8gaW5jcmVtZW50LiBPdmVycmlkZXMgdGhlIHNldHRpbmdzIGF1dG9JbmNyZW1lbnQgcHJvcGVydHkuXG4gICAgICovXG4gICAgc3RhcnQoKTogdGhpcyB7XG5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuXG4gICAgICAgIGxldCB7IGZvclByb2dyZXNzQ29udGFpbmVyLCBiYXIgfSA9IHRoaXMuZ2V0Rm9yUHJvZ3Jlc3NFbGVtZW50cygpO1xuXG4gICAgICAgIGZvclByb2dyZXNzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVUcmFuc2l0aW9uJyk7XG4gICAgICAgIGJhci5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlVHJhbnNpdGlvbicpO1xuXG4gICAgICAgIHRoaXMuc2V0UGVyY2VudCgwKTtcbiAgICAgICAgZm9yUHJvZ3Jlc3NDb250YWluZXIuc3R5bGUub3BhY2l0eSA9ICcxJztcblxuICAgICAgICBmb3JQcm9ncmVzc0NvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIGZvclByb2dyZXNzQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVUcmFuc2l0aW9uJyk7XG4gICAgICAgIGJhci5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlVHJhbnNpdGlvbicpO1xuXG4gICAgICAgIHRoaXMuc3RhcnRJbmNyZW1lbnQoKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1hbnVhbGx5IHNldCB0aGUgcGVyY2VudCBvZiB0aGUgcHJvZ3Jlc3MgYmFyLlxuICAgICAqL1xuICAgIHNldFBlcmNlbnQocGVyY2VudDogbnVtYmVyKTogdGhpcyB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzUnVubmluZykgdGhpcy5zdGFydCgpO1xuXG4gICAgICAgIGlmIChwZXJjZW50IDwgMCB8fCBwZXJjZW50ID4gMTAwKSByZXR1cm4gdGhpcztcblxuICAgICAgICB0aGlzLmNoYW5nZUJhclByb2dyZXNzKHBlcmNlbnQpO1xuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCB0byB0aGUgY3VycmVudCBwZWNlbnQgb2YgdGhlIHByb2dyZXNzIGJhci4gVXNlIHtAbGluayBnZXRQZXJjZW50fSB0byBnZXQgdGhlIGN1cnJlbnQgcGVyY2VudCB2YWx1ZS5cbiAgICAgKi9cbiAgICBhZGRQZXJjZW50KHBlcmNlbnQ6IG51bWJlcikge1xuXG4gICAgICAgIGlmICghdGhpcy5pc1J1bm5pbmcpIHRoaXMuc3RhcnQoKTtcblxuICAgICAgICBsZXQgbmV3UGVyY2VudCA9IHRoaXMuY3VycmVudFBlcmNlbnQgKyBwZXJjZW50O1xuICAgICAgICBpZiAobmV3UGVyY2VudCA+IDEwMCkgbmV3UGVyY2VudCA9IDEwMDtcbiAgICAgICAgaWYgKG5ld1BlcmNlbnQgPCAwKSBuZXdQZXJjZW50ID0gMDtcblxuICAgICAgICB0aGlzLmNoYW5nZUJhclByb2dyZXNzKG5ld1BlcmNlbnQpO1xuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY3VycmVudCBwZXJjZW50IHZhbHVlIG9mIHRoZSBwcm9ncmVzcyBiYXIuXG4gICAgICovXG4gICAgZ2V0UGVyY2VudCgpOiBudW1iZXIge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRQZXJjZW50O1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcHJvZ3Jlc3MgYmFyIHRvIDEwMCUgYW5kIGZhZGVzIG91dFxuICAgICAqL1xuICAgIGRvbmUoKTogdGhpcyB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzUnVubmluZykgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgbGV0IHsgZm9yUHJvZ3Jlc3NDb250YWluZXIgfSA9IHRoaXMuZ2V0Rm9yUHJvZ3Jlc3NFbGVtZW50cygpO1xuICAgICAgICB0aGlzLmNsZWFyQ3VycmVudEF1dG9JbmNyZW1lbnRJbnRlcnZhbCgpO1xuICAgICAgICB0aGlzLnNldFBlcmNlbnQoMTAwKTtcbiAgICAgICAgZm9yUHJvZ3Jlc3NDb250YWluZXIuc3R5bGUub3BhY2l0eSA9ICcwJztcblxuICAgICAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGF1c2UgYXV0byBpbmNyZW1lbnRhdGlvbiAoaWYgZW5hYmxlZCkuXG4gICAgICovXG4gICAgcGF1c2UoKTogdGhpcyB7XG5cbiAgICAgICAgdGhpcy5hdXRvSW5jcmVtZW50SXNQYXVzZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc3VtZSBhdXRvIGluY3JlbWVudGF0aW9uLlxuICAgICAqL1xuICAgIHJlc3VtZSgpOiB0aGlzIHtcblxuICAgICAgICB0aGlzLmF1dG9JbmNyZW1lbnRJc1BhdXNlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgIH1cblxuICAgIHByaXZhdGUgcmVzZXQoKSB7XG5cbiAgICAgICAgdGhpcy5jbGVhckN1cnJlbnRBdXRvSW5jcmVtZW50SW50ZXJ2YWwoKTtcbiAgICAgICAgdGhpcy5pc1J1bm5pbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmN1cnJlbnRBdXRvSW5jcmVtZW50SW50ZXJ2YWwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hdXRvSW5jcmVtZW50SXNQYXVzZWQgPSAhdGhpcy5zZXR0aW5ncy5hdXRvSW5jcmVtZW50O1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGFuZ2VCYXJQcm9ncmVzcyhwZXJjZW50OiBudW1iZXIpIHtcblxuICAgICAgICBsZXQgeyBiYXIgfSA9IHRoaXMuZ2V0Rm9yUHJvZ3Jlc3NFbGVtZW50cygpO1xuXG4gICAgICAgIGxldCB0cmFuc2xhdGVQZXJjZW50ID0gLTEwMCArIHBlcmNlbnQ7XG4gICAgICAgIGJhci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHt0cmFuc2xhdGVQZXJjZW50fSUsIDBweCwgMHB4KWA7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50UGVyY2VudCA9IHBlcmNlbnQ7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUZvclByb2dyZXNzQ29udGFpbmVyKCk6IEhUTUxFbGVtZW50IHtcblxuICAgICAgICBsZXQgZm9yUHJvZ3Jlc3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9yUHJvZ3Jlc3NDb250YWluZXIuY2xhc3NOYW1lID0gJ2ZvclByb2dyZXNzQ29udGFpbmVyJztcblxuICAgICAgICBsZXQgYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJhci5jbGFzc05hbWUgPSAnYmFyJztcblxuICAgICAgICBsZXQgdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpcC5jbGFzc05hbWUgPSAndGlwJztcblxuICAgICAgICBiYXIuYXBwZW5kKHRpcCk7XG4gICAgICAgIGZvclByb2dyZXNzQ29udGFpbmVyLmFwcGVuZChiYXIpO1xuXG4gICAgICAgIGJhci5zdHlsZS5iYWNrZ3JvdW5kID0gdGhpcy5ncmFkaWVudEdlbmVyYXRvcigpO1xuICAgICAgICB0aXAuc3R5bGUuYmFja2dyb3VuZCA9IHRoaXMuY29sb3JBcnJheVt0aGlzLmNvbG9yQXJyYXkubGVuZ3RoIC0gMV07XG4gICAgICAgIGJhci5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLnNldHRpbmdzLmhlaWdodH1weGA7XG5cbiAgICAgICAgcmV0dXJuIGZvclByb2dyZXNzQ29udGFpbmVyO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBncmFkaWVudEdlbmVyYXRvcigpOiBzdHJpbmcge1xuXG4gICAgICAgIGxldCBjb2xvclBvc1N0cmluZyA9IHRoaXMuY29sb3JBcnJheVxuICAgICAgICAgICAgLm1hcCgoY29sb3IsIGkpID0+IHtcblxuICAgICAgICAgICAgICAgIGxldCBncmFkaWVudFBvcyA9ICgoMTAwIC8gKHRoaXMuY29sb3JBcnJheS5sZW5ndGggLSAxKSkgKiBpKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtjb2xvcn0gJHtncmFkaWVudFBvc30lYDtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5qb2luKCcsICcpO1xuXG4gICAgICAgIHJldHVybiBgbGluZWFyLWdyYWRpZW50KDk1ZGVnLCAke2NvbG9yUG9zU3RyaW5nfSlgO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRjb2xvckFycmF5KCk6IHN0cmluZ1tdIHtcblxuICAgICAgICBsZXQgY29sb3IgPSB0aGlzLnNldHRpbmdzLmNvbG9yO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnKSByZXR1cm4gW2NvbG9yLCBjb2xvcl07XG4gICAgICAgIGlmIChjb2xvci5sZW5ndGggPT09IDEpIHJldHVybiBbY29sb3JbMF0sIGNvbG9yWzBdXVxuICAgICAgICByZXR1cm4gY29sb3I7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEZvclByb2dyZXNzRWxlbWVudHMoKTogeyBmb3JQcm9ncmVzc0NvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGJhcjogSFRNTEVsZW1lbnQgfSB7XG5cbiAgICAgICAgbGV0IGZvclByb2dyZXNzQ29udGFpbmVyOiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuZm9yUHJvZ3Jlc3NDb250YWluZXInKTtcblxuICAgICAgICBpZiAoIWZvclByb2dyZXNzQ29udGFpbmVyKSB7XG5cbiAgICAgICAgICAgIGZvclByb2dyZXNzQ29udGFpbmVyID0gdGhpcy5jcmVhdGVGb3JQcm9ncmVzc0NvbnRhaW5lcigpO1xuICAgICAgICAgICAgbGV0IGFwcGVuZFRvRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNldHRpbmdzLmFwcGVuZFRvKTtcbiAgICAgICAgICAgIGlmICghYXBwZW5kVG9FbGVtZW50KSB0aHJvdyBgQ2Fubm90IGFwcGVuZCB0byAnJHt0aGlzLnNldHRpbmdzLmFwcGVuZFRvfScgYXMgaXQgZG9lcyBub3QgZXhpc3QgaW4gZG9jdW1lbnRgO1xuICAgICAgICAgICAgYXBwZW5kVG9FbGVtZW50LmFwcGVuZChmb3JQcm9ncmVzc0NvbnRhaW5lcik7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBiYXIgPSBmb3JQcm9ncmVzc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdkaXYuYmFyJykgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICAgICAgcmV0dXJuIHsgZm9yUHJvZ3Jlc3NDb250YWluZXIsIGJhciB9O1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydEluY3JlbWVudCgpIHtcblxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGVyY2VudCA9PT0gMCAmJiAhdGhpcy5hdXRvSW5jcmVtZW50SXNQYXVzZWQpIHRoaXMuc2V0UGVyY2VudCh0aGlzLnNldHRpbmdzLmF1dG9JbmNyZW1lbnRGaXJzdFBlcmNlbnQpO1xuXG4gICAgICAgIHRoaXMuY3VycmVudEF1dG9JbmNyZW1lbnRJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYXV0b0luY3JlbWVudElzUGF1c2VkKSByZXR1cm47XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRQZXJjZW50ID09PSAwICYmIHRoaXMuc2V0dGluZ3MuYXV0b0luY3JlbWVudEZpcnN0UGVyY2VudCAhPT0gMCkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQZXJjZW50KHRoaXMuc2V0dGluZ3MuYXV0b0luY3JlbWVudEZpcnN0UGVyY2VudClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IG5leHRQZXJjZW50ID0gdGhpcy5jdXJyZW50UGVyY2VudCArIHRoaXMuZ2V0UmFuZG9tUGVyY2VudCgpO1xuICAgICAgICAgICAgaWYgKG5leHRQZXJjZW50IDw9IDk5LjUpIHRoaXMuc2V0UGVyY2VudChuZXh0UGVyY2VudCk7XG5cbiAgICAgICAgfSwgdGhpcy5zZXR0aW5ncy5hdXRvSW5jcmVtZW50U3BlZWQpIGFzIHVua25vd24gYXMgbnVtYmVyO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSYW5kb21QZXJjZW50KCk6IG51bWJlciB7XG5cbiAgICAgICAgLy8gUmFuZG9tIG51bWJlciBiZXR3ZWVuIDAuMSBhbmQgdGhpcy5zZXR0aW5ncy5hdXRvSW5jcmVtZW50TWF4UGVyY2VudC5cbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoKE1hdGgucmFuZG9tKCkgKiAoMC4xIC0gdGhpcy5zZXR0aW5ncy5hdXRvSW5jcmVtZW50TWF4UGVyY2VudCkgKyB0aGlzLnNldHRpbmdzLmF1dG9JbmNyZW1lbnRNYXhQZXJjZW50KS50b0ZpeGVkKDIpKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlU2V0dGluZ3MoY3VzdG9tU2V0dGluZ3M6IFNldHRpbmdzKSB7XG5cbiAgICAgICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGN1c3RvbVNldHRpbmdzKSkge1xuXG4gICAgICAgICAgICAodGhpcy5zZXR0aW5ncyBhcyBhbnkpW2tleV0gPSB2YWx1ZTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGNsZWFyQ3VycmVudEF1dG9JbmNyZW1lbnRJbnRlcnZhbCgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmN1cnJlbnRBdXRvSW5jcmVtZW50SW50ZXJ2YWwgPT09ICdudW1iZXInKSBjbGVhckludGVydmFsKHRoaXMuY3VycmVudEF1dG9JbmNyZW1lbnRJbnRlcnZhbClcbiAgICB9XG5cbiAgICBwcml2YXRlIGFwcGVuZENzcygpIHtcblxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy51c2VDdXN0b21Dc3MpIHJldHVybjtcblxuICAgICAgICBsZXQgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgc3R5bGVFbGVtZW50LnRleHRDb250ZW50ID0gY3NzO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZChzdHlsZUVsZW1lbnQpO1xuXG4gICAgfVxuXG59O1xuXG5leHBvcnQgPSBGb3JQcm9ncmVzcztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNDUwKTtcbiJdLCJuYW1lcyI6WyJyb290IiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJhbWQiLCJ0aGlzIiwiX19fQ1NTX0xPQURFUl9FWFBPUlRfX18iLCJwdXNoIiwiaWQiLCJ0b1N0cmluZyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYSIsImRlZHVwZSIsInN1cHBvcnRzIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiayIsIl9rIiwiY29uc3RydWN0b3IiLCJjdXN0b21TZXR0aW5ncyIsInNldHRpbmdzIiwiY29sb3IiLCJhdXRvSW5jcmVtZW50IiwiYXV0b0luY3JlbWVudFNwZWVkIiwiYXV0b0luY3JlbWVudE1heFBlcmNlbnQiLCJhdXRvSW5jcmVtZW50Rmlyc3RQZXJjZW50IiwiaGVpZ2h0IiwiYXBwZW5kVG8iLCJ1c2VDdXN0b21Dc3MiLCJ1cGRhdGVTZXR0aW5ncyIsImFwcGVuZENzcyIsImNvbG9yQXJyYXkiLCJnZXRjb2xvckFycmF5IiwiY3VycmVudFBlcmNlbnQiLCJjdXJyZW50QXV0b0luY3JlbWVudEludGVydmFsIiwiaXNSdW5uaW5nIiwiYXV0b0luY3JlbWVudElzUGF1c2VkIiwic3RhcnQiLCJyZXNldCIsImZvclByb2dyZXNzQ29udGFpbmVyIiwiYmFyIiwiZ2V0Rm9yUHJvZ3Jlc3NFbGVtZW50cyIsImNsYXNzTGlzdCIsImFkZCIsInNldFBlcmNlbnQiLCJzdHlsZSIsIm9wYWNpdHkiLCJvZmZzZXRIZWlnaHQiLCJyZW1vdmUiLCJzdGFydEluY3JlbWVudCIsInBlcmNlbnQiLCJjaGFuZ2VCYXJQcm9ncmVzcyIsImFkZFBlcmNlbnQiLCJuZXdQZXJjZW50IiwiZ2V0UGVyY2VudCIsImRvbmUiLCJjbGVhckN1cnJlbnRBdXRvSW5jcmVtZW50SW50ZXJ2YWwiLCJwYXVzZSIsInJlc3VtZSIsInRyYW5zbGF0ZVBlcmNlbnQiLCJ0cmFuc2Zvcm0iLCJjcmVhdGVGb3JQcm9ncmVzc0NvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRpcCIsImFwcGVuZCIsImJhY2tncm91bmQiLCJncmFkaWVudEdlbmVyYXRvciIsInRvRml4ZWQiLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kVG9FbGVtZW50Iiwic2V0SW50ZXJ2YWwiLCJuZXh0UGVyY2VudCIsImdldFJhbmRvbVBlcmNlbnQiLCJwYXJzZUZsb2F0IiwiTWF0aCIsInJhbmRvbSIsImtleSIsInZhbHVlIiwiT2JqZWN0IiwiZW50cmllcyIsImNsZWFySW50ZXJ2YWwiLCJzdHlsZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImhlYWQiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiY2FsbCIsIm4iLCJnZXR0ZXIiLCJfX2VzTW9kdWxlIiwiZCIsImEiLCJkZWZpbml0aW9uIiwibyIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyJdLCJzb3VyY2VSb290IjoiIn0=