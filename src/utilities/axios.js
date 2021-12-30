import axios from 'axios'

const axiosInstance = (data) =>
    axios.create({
        baseURL: 'http://127.0.0.1:5000/',
        headers: {
            'Authorization': data,
            'Content-Type': 'application/json',
            'accept': 'application/json'
        }
    });
export default axiosInstance;