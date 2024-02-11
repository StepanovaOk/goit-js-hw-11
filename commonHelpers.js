import{i as m,S as p}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const f=document.querySelector(".form"),h=document.querySelector(".input-name"),a=document.querySelector(".loader"),l=document.querySelector(".gallery");f.addEventListener("submit",g);function g(c){c.preventDefault();const r=h.value.trim();r===""&&m.error({title:"Error",message:"Please enter a search query"});const i="https://pixabay.com",s="/api/",e="42310325-d8e2b88bd4f4d7db9639050a5",t=new URLSearchParams({key:e,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),o=`${i}${s}?${t}`;a.classList.add("visible"),fetch(o).then(n=>n.json()).then(n=>{L(n.hits),a.classList.remove("visible")}).catch(n=>{console.log("Error fetching data:",n),a.classList.remove("visible")})}function y(c,r,i,s,e,t,o){return`<li class="photo">
  <div class="photo-card">
    <a class="image-link" data-lightbox="image" href="${r}">
    <img class="gallery-image" data-source="${r}"  src="${c}" alt="${i}"></img>
    </a>
    </div>
      <div class="description">
        <p class="description-item"> Likes ${s}</p>
        <p class="description-item"> Views ${e}</p>
        <p class="description-item"> Comments ${t}</p>
        <p class="description-item"> Downloads ${o}</p>
    
    </div>
  </li>`}function L(c){l.innerHTML="",c.forEach(r=>{const{webformatURL:i,largeImageURL:s,tags:e,likes:t,views:o,comments:n,downloads:d}=r,u=y(i,s,e,t,o,n,d);l.insertAdjacentHTML("beforeend",u)}),l.refresh()}new p(".image-link",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
