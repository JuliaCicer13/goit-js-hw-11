import{S as w,i as u}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();function L(i){const s=document.getElementById("gallery");if(s){s.innerHTML="";const e=document.createElement("ul");e.classList.add("photo-list");const n=i.map(({webformatURL:o,largeImageURL:l,tags:h,likes:y,views:f,comments:g,downloads:b})=>`
      <li class="wrap-card">
        <a class="link-card" href="${l}">
          <img class="photo-card" src="${o}" alt="${h}"/>
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
      `).join("");e.innerHTML=n,s.append(e),new w("#gallery a",{captionsData:"alt",captionDelay:250}).refresh()}}const x="48269071-e04b626909c4b310c40a55ae0",E=i=>{const s=new URLSearchParams({key:"48269071-e04b626909c4b310c40a55ae0",image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?key=${x}&q=${i}&${s}`).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>e.hits).catch(e=>{console.error("Ошибка:",e)})},r=document.createElement("form");r.classList.add("form");const a=document.createElement("input"),c=document.createElement("button");c.classList.add("searchButton");const d=document.createElement("button");a.classList.add("input");a.type="text";a.name="search";a.placeholder="Enter search query...";a.style.marginRight="10px";c.type="submit";c.textContent="Search";c.style.marginRight="10px";d.type="button";d.textContent="LoadMore";d.id="load-more";d.style.display="none";r.appendChild(a);r.appendChild(c);r.appendChild(d);document.body.appendChild(r);r.style.alignItems="center";r.style.position="fixed";r.style.top="40px";r.style.left="50%";r.style.transform="translate(-50%, -50%)";r.style.justifyContent="center";r.style.gap="10px";const m=document.createElement("ul"),p=document.querySelector(".loader");r.addEventListener("submit",i=>{i.preventDefault(),p.style.display="block",setTimeout(()=>{p.style.display="none"},3e4);const s=a.value.trim();if(s===""){u.show({title:"Error",message:"These fields are empty, please, fill these all!",color:"red"});return}E(s).then(e=>{if(!e||!e.hits||e.hits.length===0)throw new Error("No images found")}).then(e=>{if(!e||!e.hits||e.hits.length===0){u.show({title:"Error",message:"Sorry, there are no any matching your search query. Please try again!",color:"red"});return}const n=document.getElementById("gallery");n.innerHTML="",n.append(m),console.log("data",e),m.insertAdjacentHTML("beforeend",L(e.hits))}).finally(()=>{p.style.display="none"}).catch(e=>console.log(e))});
//# sourceMappingURL=index.js.map
