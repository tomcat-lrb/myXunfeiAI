import { createStore } from 'vuex'
import API from '../api/index'

export const store = createStore({
    state () {
        return {
            userInfo: null
        }
    },
    mutations: {
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo
        }
    },
    actions: {
        async fetchUserInfo({commit}) {
            try {
                let res = await API.getUserInfo()
                console.log('看看请求到的数据', res)
                commit('setUserInfo', res.data.userInfo)
            } catch (error) {
                console.log(error)
            }
        }
    }
})