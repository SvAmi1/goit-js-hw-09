const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),a=document.querySelector("body");let d=null;t.addEventListener("click",(function(){startBtn.disabled=!0,e.disabled=!1,d=setInterval((()=>{a.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.addEventListener("click",(function(){e.disabled=!0,startBtn.disabled=!1,clearInterval(d)})),e.disabled=!0;
//# sourceMappingURL=01-color-switcher.e7900910.js.map
