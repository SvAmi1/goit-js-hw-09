const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.querySelector("body");let a=null;srartBtn.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,a=setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,clearInterval(a)})),e.disabled=!0;
//# sourceMappingURL=01-color-switcher.eb8805b7.js.map
