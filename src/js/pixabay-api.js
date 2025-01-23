const MY_API_KEY = '48269071-e04b626909c4b310c40a55ae0';
const searchValue = 'p'
export function fetchImages () {
  const params = new URLSearchParams({
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

   return fetch(`https://pixabay.com/api/?key=${MY_API_KEY}&q=${searchValue}&${params}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
    })
    .then((data) => {
      
      return response.json(data.hits); // Возвращаем данные для дальнейшей обработки
    })
    .catch((error) => {
     return console.error('Ошибка:', error);
    });
}












