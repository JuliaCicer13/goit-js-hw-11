const MY_API_KEY = '48269071-e04b626909c4b310c40a55ae0';
const searchValue = 'cats';
const params = new URLSearchParams({

  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,

});

fetch(`https://pixabay.com/api/?key=${MY_API_KEY}&q=${searchValue}&${params}`)
  .then((response) => {
    if (!response.ok) {
      iziToast.show({
        title: "Error",
        message: "Сеть не в порядке",
        color: "red",
     
      });

      return response.json();


    }
    then((data)=> {
      console.log(data);

    })
      .catch((error) => {
  
        console.log.error('Ошибка: error')
})

})









