const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.querySelector("body");let a=null;e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,a=setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,clearInterval(a)})),t.disabled=!0;
//# sourceMappingURL=01-color-switcher.6c284937.js.map
