import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.createElement('form');
const input = document.createElement('input');
const photoList = document.createElement('ul');

input.type = 'text';
input.name = 'search';
input.placeholder = 'Enter search query...';
form.appendChild(input);


form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const searchValue = input.value.trim();

     if (searchValue === "") {
       iziToast.show({
         title: "Error",
         message: "These fields are empty, please, fill these all!",
       color: "red",})
       return;
  };
  
  

    fetch("https://pixabay.com/api/?key={ KEY }&q=yellow+flowers&image_type=photo")
    .then((response) => {
      if (!response.ok || array === "") {
        iziToast.show({
          titel: "Error",
          message: "Sorry, there are no images matching your search query. Please try again!",
          color: "red",
        })
      }
      return response.json();
    })
    .then((photo) => {
      // Дані від бекенда
       const markup = photo
    .map((photo) => {
         
      return



    })
    .join("");
  
  photoList.insertAdjacentHTML("beforeend", markup);
			console.log(photo);
         
		})
    .catch((error) => console.log(error));
});










