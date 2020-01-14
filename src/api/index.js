import axios from 'axios';

const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';
const URL = 'https://api.unsplash.com/photos/';

const fetchImages = async (page) => {
    const response = await axios.get(`${URL}?client_id=${key}&per_page=36&page=${page}`)
    return response.data
}

export { fetchImages };