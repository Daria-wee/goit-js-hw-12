import{S as w,a as P,i as n}from"./assets/vendor-Bd09HrDK.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const p=e=>` 
  <li class="gallery-item">
    <a class="gallery-link" href="${e.largeImageURL}">
      <img
        class="gallery-image"
        src="${e.webformatURL}"
        alt="${e.tags}"
      />
    </a>
    <div class="img-details">
      <p class="detail-item"><b>Likes:</b> ${e.likes}</p>
      <p class="detail-item"><b>Views:</b> ${e.views}</p>
      <p class="detail-item"><b>Comments:</b> ${e.comments}</p>
      <p class="detail-item"><b>Downloads:</b> ${e.downloads}</p>
    </div>
  </li>`,m=()=>{new w(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()},S="https://pixabay.com/api/?",v="49011950-2d803ac0681f77f6ebc5cb6af",u=async(e,a)=>{const o=new URLSearchParams({key:v,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40,page:a});try{return(await P.get(`${S}${o}`)).data}catch(i){throw hideLoader(),iziToast.error({message:"Something went wrong. Please try again!",position:"topRight"}),new Error(i.message)}},d=document.querySelector(".js-search-form"),l=document.querySelector(".js-gallery"),y=document.querySelector(".js-loader"),g=document.querySelector(".load-more-btn-js"),r={searchedValue:"",page:null,total:null,perPage:18},E=async e=>{e.preventDefault();const a=d.elements.user_query.value.trim();if(!a){n.warning({message:"Please enter a search query!",position:"topRight"});return}r.searchedValue=a,r.page=1,f();try{const o=await u(r.searchedValue,r.page,r.perPage);if(o.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.innerHTML="",d.reset(),h();return}l.innerHTML=o.hits.map(p).join(""),m(),r.total=o.totalHits,L()}catch{n.error({message:"Something went wrong. Please try again!",position:"topRight"})}finally{b()}},R=async()=>{h(),f(),r.page+=1;try{const e=await u(r.searchedValue,r.page,r.perPage);l.insertAdjacentHTML("beforeend",e.hits.map(p).join("")),m(),L(),q()}catch{n.error({message:"Something went wrong while loading more images. Please try again!",position:"topRight"})}finally{b()}},f=()=>y.classList.remove("is-hidden"),b=()=>y.classList.add("is-hidden"),$=()=>g.classList.remove("is-hidden"),h=()=>g.classList.add("is-hidden"),L=()=>{const e=Math.ceil(r.total/r.perPage);r.page>=e?(h(),n.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):$()},q=()=>{const{height:e}=l.firstElementChild.getBoundingClientRect();scrollBy({behavior:"smooth",top:e*2})};g.addEventListener("click",R);d.addEventListener("submit",E);
//# sourceMappingURL=index.js.map
