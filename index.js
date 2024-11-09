import{S as u,i as l}from"./assets/vendor-BrddEoy-.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m=o=>o.map(({webformatURL:i,largeImageURL:r,tags:a,likes:e,views:t,comments:s,downloads:p})=>`
        <li class="card">
            
            <a href="${r}">
            <img src="${i}" class="image" height="152px" width="360px" alt="${a}" />
            </a>
        
            <div class="card-description-wrapper">
            <div class="card-description-item"> 
                    <p class="card-description-title">Likes </p>
                    <p class="card-description-title-value">${e} </p>
            </div>
            <div class="card-description-item"> 
                    <p class="card-description-title">Views </p>
                    <p class="card-description-title-value">${t} </p>
            </div>
            <div class="card-description-item"> 
                    <p class="card-description-title">Comments </p>
                    <p class="card-description-title-value">${s} </p>
            </div>
            <div class="card-description-item"> 
                    <p class="card-description-title">Downloads</p>
                    <p class="card-description-title-value">${p} </p>
            </div>
            </div>
            </li>
        `),f="46982769-551c832606b75e5005f83cf77",h="https://pixabay.com/api/",g=o=>{const i=new URLSearchParams({key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${h}?${i}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})},d=document.querySelector(".form"),c=document.querySelector("ul.gallery"),n=()=>document.querySelector("span").classList.toggle("loader"),y=new u(".gallery a",{caption:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),v=()=>l.show({message:"Input is empty!",position:"topRight",icon:"ico-warning",backgroundColor:"purple",messageSize:"16",messageColor:"#fff",theme:"dark",maxWidth:"432px"}),L=()=>l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageSize:"16",messageColor:"#fff",theme:"dark",maxWidth:"350px",icon:"ico-error"}),b=o=>{o.preventDefault();const i=o.currentTarget.elements.imageText.value.toLowerCase().trim();if(!i)return v();c.innerHTML="",n(),g(i).then(r=>{if(!r.hits.length)return L();c.insertAdjacentHTML("beforeend",m(r.hits).join("")),y.refresh()}).catch(r=>console.log(r)).finally(()=>n()),d.reset()};d.addEventListener("submit",b);
//# sourceMappingURL=index.js.map
