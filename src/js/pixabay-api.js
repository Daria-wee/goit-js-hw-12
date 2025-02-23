import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/?';

export const getAxiosPhotos = async (searchedQuery, page) => {
  const urlParams = new URLSearchParams({
    key: '49011950-2d803ac0681f77f6ebc5cb6af',
    q: searchedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 40,
    page: page,
  });

  try {
    const response = await axios.get(`${BASE_URL}${urlParams}`);
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};