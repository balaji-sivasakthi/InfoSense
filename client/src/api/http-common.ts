import { Axios } from './../../node_modules/axios/index.d';
import axios from "axios";

const APP_MODE = import.meta.env.VITE_APP_MODE

let base_url = (APP_MODE == 'development') 
? import.meta.env.VITE_APP_BASE_URL
: import.meta.env.VITE_APP_DEV_BASE_URL

let intance:Axios = axios.create({
    baseURL: base_url,
    timeout: 3000,
});

export default intance;
