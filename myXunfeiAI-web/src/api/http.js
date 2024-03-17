import axios from 'axios'

// 创建axios实例
const http = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 20000
})

// 请求拦截器
http.interceptors.request.use(
    config => {
        return config
    },
    error => {
        console.log(error)
        Promise.reject(error)
    }
)

// 响应拦截器
http.interceptors.response.use(
    response => {
        const res = response.data
        return res
    },
    error => {
        console.log('请求错误', error)
        return Promise.reject(error)
    }
)

export default http