import axios from 'axios';

const API_KEY = '32728160-634e7d154d1682a06810c8278';

axios.defaults.baseURL = 'https://pixabay.com/api';

export async function requestImages (page, query, per_page) {
    const { data } = await axios.get(
      `?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=${per_page}`
    );
    return data;
}