(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();(()=>{const s=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),i=()=>{const e=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!e),s.classList.toggle("is-open");const t=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[t](document.body)};o.addEventListener("click",i),n.addEventListener("click",i),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(s.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();(function(s){typeof s.matches!="function"&&(s.matches=s.msMatchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||function(o){for(var n=this,i=(n.document||n.ownerDocument).querySelectorAll(o),e=0;i[e]&&i[e]!==n;)++e;return Boolean(i[e])}),typeof s.closest!="function"&&(s.closest=function(o){for(var n=this;n&&n.nodeType===1;){if(n.matches(o))return n;n=n.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var s=document.querySelectorAll(".js-open-modal"),o=document.querySelector(".js-overlay-modal"),n=document.querySelectorAll(".js-modal-close");n.forEach(function(t){t.addEventListener("click",function(r){var a=this.closest(".modal");a.classList.remove("active"),o.classList.remove("active"),e()})}),s.forEach(function(t){t.addEventListener("click",function(r){r.preventDefault();var a=this.getAttribute("data-modal"),l=document.querySelector('.modal[data-modal="'+a+'"]');l.classList.add("active"),o.classList.add("active"),i()})}),document.body.addEventListener("keyup",function(t){var r=t.keyCode;r==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"),e())},!1),o.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active"),e()});function i(){document.body.style.overflow="hidden"}function e(){document.body.style.removeProperty("overflow")}});new Swiper(".swiper",{slidesPerView:1,autoplay:{delay:2e3,disableOnInteraction:!1},spaseBetween:18,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2.5},1200:{slidesPerView:4}},on:{init(){this.el.addEventListener("mouseenter",()=>{this.autoplay.stop()}),this.el.addEventListener("mouseleave",()=>{this.autoplay.start()})}}});new Swiper(".swiper-r",{slidesPerView:1,autoplay:{delay:2e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination-r",clickable:!0},breakpoints:{768:{slidesPerView:2,spaseBetween:16},1200:{slidesPerView:3,spaseBetween:20}},on:{init(){this.el.addEventListener("mouseenter",()=>{this.autoplay.stop()}),this.el.addEventListener("mouseleave",()=>{this.autoplay.start()})}}});new Swiper(".swiper-modal",{slidesPerView:1,autoplay:{delay:2e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination-modal",clickable:!0},on:{init(){this.el.addEventListener("mouseenter",()=>{this.autoplay.stop()}),this.el.addEventListener("mouseleave",()=>{this.autoplay.start()})}}});
