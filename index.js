import{S as L,i as u}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();function w(i){const s=document.getElementById("gallery");if(s){s.innerHTML="";const t=document.createElement("ul");t.classList.add("photo-list");const n=i.map(({webformatURL:o,largeImageURL:l,tags:y,likes:f,views:h,comments:g,downloads:b})=>`
      <li class="wrap-card">
        <a class="link-card" href="${l}">
          <img class="photo-card" src="${o}" alt="${y}"/>
        </a>
        <div class="info">
          <div class="wrap-text">
            <p><b>Likes</b> ${f}</p>
          </div>
          <div class="wrap-text">
            <p><b>Views</b> ${h}</p>
          </div>
          <div class="wrap-text-two">
            <p><b>Comments</b> ${g}</p>
          </div>
          <div class="wrap-text-two">
            <p><b>Downloads</b> ${b}</p>
          </div>
        </div>
      </li>
      `).join("");t.innerHTML=n,s.append(t),new L("#gallery a",{captionsData:"alt",captionDelay:250}).refresh()}}const x="48269071-e04b626909c4b310c40a55ae0";function v(i){const s=new URLSearchParams({q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?key=${x}&${s}`).then(t=>{if(!t.ok)throw new Error("Network response was not ok");return t.json()})}const r=document.createElement("form");r.classList.add("form");const a=document.createElement("input"),c=document.createElement("button");c.classList.add("searchButton");const d=document.createElement("button");a.classList.add("input");a.type="text";a.name="search";a.placeholder="Enter search query...";a.style.marginRight="10px";c.type="submit";c.textContent="Search";c.style.marginRight="10px";d.type="button";d.textContent="LoadMore";d.id="load-more";d.style.display="none";r.appendChild(a);r.appendChild(c);r.appendChild(d);document.body.appendChild(r);r.style.alignItems="center";r.style.position="fixed";r.style.top="40px";r.style.left="50%";r.style.transform="translate(-50%, -50%)";r.style.justifyContent="center";r.style.gap="10px";const m=document.createElement("ul"),p=document.querySelector(".loader");r.addEventListener("submit",i=>{i.preventDefault(),p.style.display="block",setTimeout(()=>{p.style.display="none"},3e3);const s=a.value.trim();if(!s){u.show({title:"Error",message:"These fields are empty, please, fill these all!",color:"red"}),p.style.display="none";return}v(s).then(t=>{!t.hits.length===0&&u.show({title:"Error",message:"Sorry, there are no any matching your search query. Please try again!",color:"red"});const n=document.getElementById("gallery");n.innerHTML="",n.append(m),m.insertAdjacentHTML("beforeend",w(t.hits))}).catch(t=>console.log(t))}).finally(()=>{p.style.display="none"});
//# sourceMappingURL=index.js.map
