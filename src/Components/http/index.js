import axios from "axios";

const storedBaseURL = sessionStorage.getItem('baseURL');

const http = axios.create({
    baseURL: storedBaseURL
})

export default http