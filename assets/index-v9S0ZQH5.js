(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))v(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const g of l.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&v(g)}).observe(document,{childList:!0,subtree:!0});function q(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function v(s){if(s.ep)return;s.ep=!0;const l=q(s);fetch(s.href,l)}})();const p=[{src:"src/images/disaplay-beige-2.jpg",alt:"abstract beige painting"},{src:"src/images/display- swirl-2.jpg",alt:"close up on abstract painting"},{src:"src/images/display-black.jpg",alt:"black abstract painting"},{src:"src/images/display-blue.jpg",alt:"blue and white abstract painting"},{src:"src/images/display-flower.jpg",alt:"abstract flower"},{src:"src/images/display-green.jpg",alt:"abstract beige and green"},{src:"src/images/display-green-forest.jpg",alt:"green forest abstract painting"},{src:"src/images/display-purple.jpg",alt:"purple abstract painting"},{src:"src/images/display-rust2.jpg",alt:"rust colored abstract painting"},{src:"src/images/display-grey-rust2.jpg",alt:" rust and grey abtracts painting"},{src:"src/images/display-white-black.jpg",alt:"white and black standing abstract painting"},{src:"src/images/display-red2.jpg",alt:"red abstract painting"}],m=[{src:"src/images/process-gold2.jpg",alt:""},{src:"src/images/process-spray.jpg",alt:""},{src:"src/images/process-beige.jpg",alt:""},{src:"src/images/process-dots.jpg",alt:""},{src:"src/images/process-gold.jpg",alt:""},{src:"src/images/process-red.jpg",alt:""}],M=document.querySelectorAll(".round-nav-button"),n=document.querySelector("#startSection"),c=document.querySelector("#gallerySection"),o=document.querySelector("#flexGallerySection"),f=document.querySelector("#flexProcessSection"),i=document.querySelector("#processSection"),a=document.querySelector("#contactSection"),r=document.querySelector("#backButton"),y=document.querySelector("#name"),h=document.querySelector("#email"),L=document.querySelector("#message"),u=document.querySelector("#formButton"),b=document.querySelector("#errorMessage");let d=0,S;function T(){n===null||a===null||c===null||r===null||i===null||(a.classList.remove("hidden"),i.classList.add("hidden"),n.classList.add("hidden"),c.classList.add("hidden"),r.classList.remove("hidden"))}function k(){!y||!u||!h||!L||!b||(y.value===""||h.value===""||L.value===""?b.innerHTML="Formuläret är under uppbyggnad.":(y.value="",h.value="",L.value="",b.innerHTML="",console.log("skicka mail")))}function w(){n===null||a===null||c===null||r===null||i===null||(i.classList.remove("hidden"),n.classList.add("hidden"),c.classList.add("hidden"),r.classList.remove("hidden"),a.classList.add("hidden"),clearInterval(S),P())}function P(){if(!(f===null||o===null)){f.innerHTML="",o.innerHTML="";for(let e=0;e<m.length;e++)f.innerHTML+=`
    <div class="image fade">
    <img src="${m[e].src}" alt="${m[e].alt}" width="100" height="100" loading="lazy">
    </div>
    `;j()}}function j(){let e;const t=document.querySelectorAll(".image");for(e=0;e<t.length;e++)t[e].classList.add("none");d++,d>t.length&&(d=1),t[d-1].classList.add("block"),S=setTimeout(j,2e3)}function O(){n===null||a===null||c===null||r===null||i===null||(n.classList.add("hidden"),c.classList.remove("hidden"),r.classList.remove("hidden"),i.classList.add("hidden"),a.classList.add("hidden"),H())}function H(){if(o!==null){o.innerHTML="";for(let e=0;e<p.length;e++)o.innerHTML+=`
        
        <img src="${p[e].src}" alt="${p[e].alt}" widht="100" height="100" loading="lazy">
        
        `}}function x(e){if(e===null||e.currentTarget===null)return;const t=e.target.innerHTML;t==="Galleri"?O():t==="Process"?w():t==="Kontakt"&&T()}function A(){n==null||n.classList.remove("hidden"),c==null||c.classList.add("hidden"),i==null||i.classList.add("hidden"),r==null||r.classList.add("hidden"),a==null||a.classList.add("hidden")}M.forEach(e=>{e.addEventListener("click",x)});r==null||r.addEventListener("click",A);u==null||u.addEventListener("click",k);
