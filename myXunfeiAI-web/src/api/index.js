import http from './http'

const url = {
    getUserInfo: '/api/v1/getUserInfo'
}

const API = {
    getUserInfo: function (opt) {
        return http({
            url: url.getUserInfo,
            method: 'get',
            params: opt
        })
    }
}

export default API