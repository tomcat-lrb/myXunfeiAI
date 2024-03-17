import { toRaw } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import routes from "../route.config"
import { store } from "../store"

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async (to, from, next) => {
    await store.dispatch('fetchUserInfo')
    const userInfo = toRaw(store.state).userInfo
    console.log('看看路由中的登录信息', userInfo.menuCode)
    if (userInfo.menuCode.includes(to.meta.menuCode)) {
        next()
    } else {
        console.log('无菜单权限')
        next(false)
    }
})

export default router