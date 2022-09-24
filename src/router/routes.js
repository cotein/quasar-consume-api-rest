import authRouter from './routes/auth';
import { useStore } from 'vuex';
const routes = [
    {
        path: '/home',
        component: () => import('./../layouts/LandingPage.vue')
    },
    {
        path: '/auth',
        ...authRouter
    },
    {
        path: '/meli/token',
        name: 'Melitoken',
        component: () => import('./../pages/MeliToken.vue'),
        meta : {
            requiresAuth : false
        },
        params: true
    },
    
    {
        path: '',
        component: () => import('./../layouts/MainLayout.vue'),
        children: [
            { 
                path: 'datos-de-la-empresa', 
                name: 'CompanyPage',
                component: () => import('./../pages/CompanyPage.vue'),
                meta : {
                    requiresAuth : true
                }
            },
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
