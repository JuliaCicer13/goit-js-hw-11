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
   

        photoList.insertAdjacentHTML =
            createMarkUp(data.hits);
	
});

