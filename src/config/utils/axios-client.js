import axios from "axios";

const SERVER_URL = 'http://192.168.111.68:82'

const AxiosClient = axios.create({
    baseURL: SERVER_URL
});



export default AxiosClient;
