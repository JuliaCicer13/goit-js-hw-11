import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.createElement('form');
const input = document.createElement('input');
const photoList = document.createElement('ul');

input.type = 'text';
input.name = 'search';
input.placeholder = 'Enter search query...';
form.appendChild(input);

const MY_API_KEY = "48269071-e04b626909c4b310c40a55ae0";

const params = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',

})

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
   
  

    fetch(`https://pixabay.com/api/?key=${MY_API_KEY}&q=${searchValue}&${params}`)
    .then((response) => {
      if (!response.ok) {
          throw new Error(response.status);
        }
         return response.json();
      })
     
      .then((data) => {
      
        
      // Дані від бекенда
        if (data.hits.length === 0) {
            iziToast.show({
              title: "Error",
              message: "Sorry, there are no any matching your search query. Please try again!",
              color: "red",
        })
            return;
       }
  
        photoList.insertAdjacentHTML =
            createMarkUp(data.hits);
		})
        .catch((error) =>
            console.log(error));
});

