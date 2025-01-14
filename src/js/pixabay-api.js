import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.createElement('form');


form.addEventListener("submit", () =>{
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
            if (users === "") {
iziToast.show("Error: These fields are empty , please, fill these all!")
            }
		})
    .catch((error) => console.log(error));
});





