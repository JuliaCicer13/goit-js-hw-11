import"./assets/styles-7c1c74c9.js";import{i}from"./assets/vendor-8c59ed88.js";import{c as m}from"./assets/render-functions-c83978e9.js";const e=document.createElement("form");e.classList.add("form");const n=document.createElement("input"),o=document.createElement("button");o.classList.add("searchButton");const a=document.createElement("button");n.classList.add("input");n.type="text";n.name="search";n.placeholder="Enter search query...";n.style.marginRight="10px";o.type="submit";o.textContent="Search";o.style.marginRight="10px";a.type="button";a.textContent="LoadMore";a.id="load-more";a.style.display="none";e.appendChild(n);e.appendChild(o);e.appendChild(a);document.body.appendChild(e);e.style.alignItems="center";e.style.position="fixed";e.style.top="40px";e.style.left="50%";e.style.transform="translate(-50%, -50%)";e.style.justifyContent="center";e.style.gap="10px";const c=document.createElement("ul"),r=document.querySelector(".loader"),p="48269071-e04b626909c4b310c40a55ae0",y=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:"true"});e.addEventListener("submit",d=>{d.preventDefault(),r.style.display="block",setTimeout(()=>{r.style.display="none"},3e4);const s=n.value.trim();if(s===""){i.show({title:"Error",message:"These fields are empty, please, fill these all!",color:"red"});return}fetch(`https://pixabay.com/api/?key=${p}&q=${s}&${y}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(t.hits.length===0){i.show({title:"Error",message:"Sorry, there are no any matching your search query. Please try again!",color:"red"});return}const l=document.getElementById("gallery");l.innerHTML="",l.append(c),console.log("data",t),c.insertAdjacentHTML("beforeend",m(t.hits))}).finally(()=>{r.style.display="none"}).catch(t=>console.log(t))});
//# sourceMappingURL=main.js.map
