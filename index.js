import{S as w,i as u}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function L(i){const t=document.getElementById("gallery");if(t){t.innerHTML="";const o=document.createElement("ul");o.classList.add("photo-list");const n=i.map(({webformatURL:r,largeImageURL:l,tags:h,likes:y,views:f,comments:g,downloads:b})=>`
      <li class="wrap-card">
        <a class="link-card" href="${l}">
          <img class="photo-card" src="${r}" alt="${h}"/>
        </a>
        <div class="info">
          <div class="wrap-text">
            <p><b>Likes</b> ${y}</p>
          </div>
          <div class="wrap-text">
            <p><b>Views</b> ${f}</p>
          </div>
          <div class="wrap-text-two">
            <p><b>Comments</b> ${g}</p>
          </div>
          <div class="wrap-text-two">
            <p><b>Downloads</b> ${b}</p>
          </div>
        </div>
      </li>
      `).join("");o.innerHTML=n,t.append(o),new w("#gallery a",{captionsData:"alt",captionDelay:250}).refresh()}}const x="48269071-e04b626909c4b310c40a55ae0",E="p";function v(){const i=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?key=${x}&q=${E}&${i}`).then(t=>{if(!t.ok)throw new Error("Network response was not ok");t.json()}).then(t=>t.hits).catch(t=>{console.error("Ошибка:",t)})}const s=document.createElement("form");s.classList.add("form");const a=document.createElement("input"),c=document.createElement("button");c.classList.add("searchButton");const d=document.createElement("button");a.classList.add("input");a.type="text";a.name="search";a.placeholder="Enter search query...";a.style.marginRight="10px";c.type="submit";c.textContent="Search";c.style.marginRight="10px";d.type="button";d.textContent="LoadMore";d.id="load-more";d.style.display="none";s.appendChild(a);s.appendChild(c);s.appendChild(d);document.body.appendChild(s);s.style.alignItems="center";s.style.position="fixed";s.style.top="40px";s.style.left="50%";s.style.transform="translate(-50%, -50%)";s.style.justifyContent="center";s.style.gap="10px";const m=document.createElement("ul"),p=document.querySelector(".loader");s.addEventListener("submit",i=>{if(i.preventDefault(),p.style.display="block",setTimeout(()=>{p.style.display="none"},3e4),!a.value.trim()){u.show({title:"Error",message:"These fields are empty, please, fill these all!",color:"red"});return}v().then(o=>{if(o.hits.length===0)throw new Error("No images found")}).then(o=>{if(!o||!o.hits||o.hits.length===0){u.show({title:"Error",message:"Sorry, there are no any matching your search query. Please try again!",color:"red"});return}const n=document.getElementById("gallery");n.innerHTML="",n.append(m),console.log("data",o),m.insertAdjacentHTML("beforeend",L(o.hits))}).finally(()=>{p.style.display="none"}).catch(o=>console.log(o))});
//# sourceMappingURL=index.js.map
