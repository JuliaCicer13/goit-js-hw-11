import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.createElement('form');
const input = document.createElement('input');
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
  
  

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((users) => {
			// Дані від бекенда
			console.log(users);
         
		})
    .catch((error) => console.log(error));
});





