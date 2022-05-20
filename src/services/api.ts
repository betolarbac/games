import axios from "axios";


const api = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        page_size:'30',
    }
});

export default api;

