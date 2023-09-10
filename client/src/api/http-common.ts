import { Axios } from './../../node_modules/axios/index.d';
import axios from "axios";

let intance:Axios = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    timeout: 3000,
});

export default intance;
