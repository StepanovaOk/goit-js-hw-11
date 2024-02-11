import{S as m,i as p}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();new m(".image-link",{captionsData:"alt",captionDelay:250});const f=document.querySelector(".form"),h=document.querySelector(".input-name"),a=document.querySelector(".loader"),l=document.querySelector(".gallery");f.addEventListener("submit",g);function g(c){c.preventDefault();const o=h.value.trim();o===""&&p.error({title:"Error",message:"Please enter a search query"});const i="https://pixabay.com",s="/api/",e="42310325-d8e2b88bd4f4d7db9639050a5",t=new URLSearchParams({key:e,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),r=`${i}${s}?${t}`;a.classList.add("visible"),fetch(r).then(n=>n.json()).then(n=>{b(n.hits),a.classList.remove("visible")}).catch(n=>{console.log("Error fetching data:",n),a.classList.remove("visible")})}function y(c,o,i,s,e,t,r){return`<li class="photo">
  <div class="photo-card">
    <a class="image-link" data-lightbox="image" href="${o}">
    <img class="gallery-image" data-source="${o}"  src="${c}" alt="${i}"></img>
    </a>
    </div>
      <div class="description">
        <p class="description-item"> Likes ${s}</p>
        <p class="description-item"> Views ${e}</p>
        <p class="description-item"> Comments ${t}</p>
        <p class="description-item"> Downloads ${r}</p>
    
    </div>
  </li>`}function b(c){l.innerHTML="",c.forEach(o=>{const{webformatURL:i,largeImageURL:s,tags:e,likes:t,views:r,comments:n,downloads:d}=o,u=y(i,s,e,t,r,n,d);l.insertAdjacentHTML("beforeend",u)}),lightbox.refresh()}
//# sourceMappingURL=commonHelpers.js.map
