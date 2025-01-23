import{S as d}from"./vendor-8c59ed88.js";function x(a){const t=document.createElement("ul");t.classList.add("photo-list");const s=a.map(({webformatURL:e,largeImageURL:l,tags:i,likes:c,views:o,comments:p,downloads:r})=>`
     <li class="wrap-card">
       <a class"link-card" href="${l}">
         <img class="photo-card" src="${e}" alt="${i}"/>
      </a> 

          <div class="info">
          <div class = "wrap-text">
          <p>
             <b class"text">Likes</b> ${c}
           </p> 
          </div>
           <div class = "wrap-text">
           <p class"text">
             <b>Views</b> ${o}
           </p>
           
           </div>
           
           <div class = "wrap-text-two">
           <p class"text">
             <b>Comments</b>${p}
           </p>
           
           </div>

           <div class = "wrap-text-two">
           <p class"text">
             <b>Downloads</b>${r}
           </p>
           
           </div>
           
         </div>
    </li>
   `).join("");t.innerHTML=s,document.getElementById("gallery").append(t),new d("#gallery a",{captionsData:"alt",captionDelay:250}).refresh()}export{x as c};
//# sourceMappingURL=render-functions-ebc0967a.js.map
