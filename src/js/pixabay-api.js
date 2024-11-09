
const API_KEY = '46203221-a91cc8cf493e831e00cc5b047';

const BASE_URL = 'https://pixabay.com/api/';
        
export const backendData = text => {
  const options = new URLSearchParams({
      key: API_KEY,
      q: text,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
  });

  return fetch(`${BASE_URL}?${options}`).then(response => {
      if (!response.ok) {
          throw new Error(response.status);
      }
      return response.json();
  });
};