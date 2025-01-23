import{S as d}from"./vendor-8c59ed88.js";function v(s){const a=document.getElementById("gallery");if(a){a.innerHTML="";const t=document.createElement("ul");t.classList.add("photo-list");const i=s.map(({webformatURL:e,largeImageURL:l,tags:o,likes:p,views:c,comments:r,downloads:n})=>`
      <li class="wrap-card">
        <a class="link-card" href="${l}">
          <img class="photo-card" src="${e}" alt="${o}"/>
        </a>
        <div class="info">
          <div class="wrap-text">
            <p><b>Likes</b> ${p}</p>
          </div>
          <div class="wrap-text">
            <p><b>Views</b> ${c}</p>
          </div>
          <div class="wrap-text-two">
            <p><b>Comments</b> ${r}</p>
          </div>
          <div class="wrap-text-two">
            <p><b>Downloads</b> ${n}</p>
          </div>
        </div>
      </li>
      `).join("");t.innerHTML=i,a.append(t),new d("#gallery a",{captionsData:"alt",captionDelay:250}).refresh()}}export{v as c};
//# sourceMappingURL=render-functions-c83978e9.js.map
