const routes = [
    {
        path: '/',
        name: '/',
        meta: {
            menuCode: 'lrb01'
        },
        component: () => import('@/view/myXunfeiAI/index.vue')
    },
    {
        path: '/myXunfeiAI',
        name: 'myXunfeiAI',
        meta: {
            menuCode: 'lrb01'
        },
        component: () => import('@/view/myXunfeiAI/index.vue')
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            menuCode: 'lrb02'
        },
        component: () => import('@/view/login/index.vue')
    },
    {
        path: '/myXunfeiAI/list',
        name: 'myXunfeiAIList',
        meta: {
            menuCode: 'lrb03'
        },
        component: () => import('@/view/myXunfeiAI/list.vue')
    }
]

export default routes