const routes = [
    {
        path: '/',
        component: () => import('./../layouts/LandingPage.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('./../pages/LoginPage.vue')
    },
    {
        path: '/registro',
        name: 'Register',
        component: () => import('./../pages/RegisterPage.vue')
    },
    {
        path: '/system',
        component: () => import('./../layouts/MainLayout.vue'),
        children: [
            { 
                path: 'dashboard', 
                name: 'DashBoard',
                component: () => import('./../pages/dashboard.vue'),
                meta : {
                    requiresAuth : true
                }
            },
            { 
                path: 'pagetest', 
                name: 'PageTest',
                component: () => import('./../pages/PageTest.vue'),
                meta : {
                    requiresAuth : true
                }
            }
        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue')
    }
]

export default routes
