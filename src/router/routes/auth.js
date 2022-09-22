export default {

    name: 'auth',
    component: () => import('./../../layouts/AuthLayout.vue'),
    children: [
        {
            path: '',
            name: 'login',
            component: () => import('../../pages/auth/LoginPage.vue')
        },
        {
            path: '/registro',
            name: 'register',
            component: () => import('../../pages/auth/RegisterPage.vue')
        },
        {
            path: '/confirm/:token',
            name: 'ConfirmUserEmail',
            component: () => import('../../pages/auth/ConfirmUserEmail.vue')
        },
    ]
}