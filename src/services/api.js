import axios from 'axios';

const API_KEY = '32728160-634e7d154d1682a06810c8278';

axios.defaults.baseURL = 'https://pixabay.com/api';

const imagesAPI = axios.create({
  params: {
    image_type: 'photo',
    orientation: 'horizontal',
    key: API_KEY,
  }
})



export async function requestImages (page, query, per_page) {
    const { data } = await imagesAPI.get(
      '',
      { params: { page: page, per_page: per_page, q: query } }
    );
    return data;
}