import axios from "axios"
export const axiosInstance = axios.create({
    baseURL : "https://node-blogspot.onrender.com/api/"
});
