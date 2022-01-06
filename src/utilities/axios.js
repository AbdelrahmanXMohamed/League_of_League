import axios from 'axios'

const axiosInstance = (data) =>
    axios.create({
        baseURL: '/',
        headers: {
            'Authorization': data,
            'Content-Type': 'application/json',
            'accept': 'application/json'
        }
    });
export default axiosInstance;