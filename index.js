import{S as w,a as v,i as m}from"./assets/vendor-Bd09HrDK.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();const g=e=>` 
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
  </li>`,P=()=>{new w(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()},E="https://pixabay.com/api/?",y=async(e,t)=>{const o=new URLSearchParams({key:"49011950-2d803ac0681f77f6ebc5cb6af",q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:40,page:t});try{return(await v.get(`${E}${o}`)).data}catch(i){throw new Error(i.message)}},c=document.querySelector(".js-page-form"),l=document.querySelector(".js-gallery"),f=document.querySelector(".js-loader"),p=document.querySelector(".load-more-btn-js"),r={searchedValue:"",page:null,total:null,perPage:18},S=async e=>{e.preventDefault(),r.searchedValue=c.elements.user_query.value.trim(),r.page=1,b();const t=await y(r.searchedValue,r.page);if(t.hits&&t.hits.length===0){m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.innerHTML="",c.reset(),d(),h();return}const o=t.hits.map(i=>g(i)).join("");l.innerHTML=o,r.total=t.totalHits,L(),d(),u()},$=async()=>{h(),b(),r.page+=1;const t=(await y(r.searchedValue,r.page)).hits.map(o=>g(o)).join("");l.insertAdjacentHTML("beforeend",t),P(),d(),u(),L(),q()},b=()=>{f.classList.remove("is-hidden")},d=()=>{f.classList.add("is-hidden")},u=()=>{p.classList.remove("is-hidden")},h=()=>{p.classList.add("is-hidden")},L=()=>{const t=Math.ceil(r.total/18);r.page>=t?(h(),m.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):u()},q=()=>{const t=l.firstElementChild.getBoundingClientRect().height+102;scrollBy({behavior:"smooth",top:t*2})};p.addEventListener("click",$);c.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
