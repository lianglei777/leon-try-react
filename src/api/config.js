import axios from 'axios';

export const baseUrl = "http://192.168.9.74:4000"; // 接口url

const axiosInstance = axios.create({
    baseURL: baseUrl
});

axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, "网络错误");
    }
);

export { axiosInstance };