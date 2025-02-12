
import iziToast  from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Додатковий імпорт стилів
import { createMarkUp } from "./js/render-functions";

import { fetchImages } from "./js/pixabay-api";

// Создаю форму :
const form = document.createElement('form');
form.classList.add('form');
// Создаю инпут:
const input = document.createElement('input');
// Теперь кнопочки:
const searchButton = document.createElement("button");
searchButton.classList.add("searchButton");
const loadMoreButon = document.createElement("button");
// Стили для инпута:
input.classList.add('input');
input.type = 'text';
input.name = 'search';
input.placeholder = 'Enter search query...';
input.style.marginRight = "10px";


// Настройки кнопки поиска :
searchButton.type = "submit";
searchButton.textContent = "Search";
searchButton.style.marginRight = "10px";

// Настройки кнопки "LoadMore":
loadMoreButon.type = "button";
loadMoreButon.textContent = "LoadMore";
loadMoreButon.id = "load-more";
loadMoreButon.style.display = "none";

// Добавление єлементов в форму:
form.appendChild(input);
form.appendChild(searchButton);
form.appendChild(loadMoreButon);

// Добавляю форму в DOM:

document.body.appendChild(form);
// Выравниваю элементы по горизонтали

form.style.alignItems = "center";
form.style.position = "fixed";
form.style.top = "40px";
form.style.left = "50%";
form.style.transform = "translate(-50%, -50%)";
form.style.justifyContent = "center";
form.style.gap = "10px"
const photoList = document.createElement('ul');

// Индикатор перед НТТР запросом!!!

const loader = document.querySelector('.loader');

// Данные для НТТР запроса перед самом запросом:

form.addEventListener("submit", (event) => {


  event.preventDefault();

  // Показать индикатор
  loader.style.display = 'block';


  setTimeout(() => {
    loader.style.display = 'none';


  } , 3000);
  
  const searchValue = input.value.trim();

     if (!searchValue) {
       iziToast.show({
         title: "Error",
         message: "These fields are empty, please, fill these all!",
       color: "red",})
       loader.style.display = 'none';
       
       return;
  };
   
    fetchImages(searchValue)
      .then((data) => {
      
      // Дані від бекенда
        if (!data.hits.length === 0) {
            iziToast.show({
              title: "Error",
              message: "Sorry, there are no any matching your search query. Please try again!",
              color: "red",
        })
      
       }
     const gallery =
     document.getElementById('gallery');
     gallery.innerHTML = ''; 
     gallery.append(photoList);
     photoList.insertAdjacentHTML("beforeend", createMarkUp(data.hits));
     
		})
     .catch((error) =>
      console.log(error));
    })
     .finally(() => {
      loader.style.display = 'none';
});

