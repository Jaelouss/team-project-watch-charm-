(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const l=document.querySelectorAll("main section");document.querySelectorAll(".menu-link");document.querySelectorAll(".menu-link-mob");const s=document.getElementById("sideMenu"),u=document.querySelector("header");let a=0;document.querySelector(".burger-menu").addEventListener("click",f);document.querySelector(".close-menu").addEventListener("click",m);const y=document.querySelectorAll("#sideMenu .menu-link-mob");y.forEach(t=>t.addEventListener("click",m));window.addEventListener("resize",h);window.addEventListener("scroll",w);window.addEventListener("scroll",d);window.addEventListener("load",d);function d(){let t=0;window.scrollY===0?t=0:l.forEach((i,e)=>{window.scrollY+50>=i.offsetTop&&(t=e)}),document.querySelectorAll(".menu-link, .menu-link-mob").forEach(i=>i.classList.remove("current-circle"));const n=document.querySelectorAll(`.menu-link[href="#${l[t].id}"]`),r=document.querySelectorAll(`.menu-link-mob[href="#${l[t].id}"]`);if(n.forEach(i=>i.classList.add("current-circle")),r.forEach(i=>i.classList.add("current-circle")),window.scrollY===0){const i=document.querySelector(".menu-link"),e=document.querySelector(".menu-link-mob");i&&i.classList.add("current-circle"),e&&e.classList.add("current-circle")}}function f(){let t=window.innerWidth<768?"200px":"330px";s.style.width=t,window.scrollY===0&&d()}function m(){s.style.width="0"}function h(){window.getComputedStyle(s).width!=="0px"&&f()}function w(){const t=window.scrollY;t>a?u.style.transform="translateY(-100%)":u.style.transform="translateY(0)",a=t}document.getElementById("toggle-btn").addEventListener("click",function(){const t=document.querySelectorAll(".catalog-list-item.hidden");if(window.innerWidth<768){let n=!1;t.forEach(r=>{(r.style.display==="none"||r.style.display==="")&&(n=!0)}),t.forEach(r=>{n?r.style.display="block":r.style.display="none"}),n?this.innerText="Hide":this.innerText="Show More"}});window.addEventListener("resize",function(){window.innerWidth>=768&&document.querySelectorAll(".catalog-list-item.hidden").forEach(n=>{n.style.display="block"})});function p(t,n){return t/n*100}let L=335,g=320,E=p(L,g);console.log(E+"%");
//# sourceMappingURL=index.js.map
