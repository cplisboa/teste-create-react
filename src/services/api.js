import axios from "axios";

const baseUrl = 'https://professorfeijo.com.br/tt/api-php';

const api = axios.create({
    baseURL: baseUrl
});

export default api;