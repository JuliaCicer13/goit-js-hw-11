const MY_API_KEY = '48269071-e04b626909c4b310c40a55ae0';

export const fetchImages = (searchValue) => {
  const params = new URLSearchParams({
    key: '48269071-e04b626909c4b310c40a55ae0',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?key=${MY_API_KEY}&q=${searchValue}&${params}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      
      return data.hits; // Возвращаем данные для дальнейшей обработки
    })
    .catch((error) => {
      console.error('Ошибка:', error);
    });
}












