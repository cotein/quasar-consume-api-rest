import { route } from 'quasar/wrappers';
import { SessionStorage } from 'quasar'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'
import { api } from 'src/boot/axios';
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function ({ store, ssrContext } ) {
    const createHistory = process.env.SERVER
        ? createMemoryHistory
        : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

    const Router = createRouter({
        scrollBehavior: () => ({ left: 0, top: 0 }),
        routes,

        // Leave this as is and make changes in quasar.conf.js instead!
        // quasar.conf.js -> build -> vueRouterMode
        // quasar.conf.js -> build -> publicPath
        history: createHistory(process.env.VUE_ROUTER_BASE)
    });

    Router.beforeEach( async (to, from, next) => {
        
        const { path } = to;

        if (path === '/meli/token') {
            const { code } = to.query;
            console.log("🚀 ~ file: index.js ~ line 37 ~ Router.beforeEach ~ code", code)
            const APP_ID = '8134297603737971';
            store.dispatch('auth/meliToken', code);

                /* const CLIENT_SECRET = 'UOkOi9LKA4eGjguSqB074SLjthDRSF2g';

                const REDIRECT_URI = 'https://localhost:9000/meli/token';
                const pp = await api({ url: '/oauth/token', baseURL: 'https://api.mercadolibre.com', data: {
                    grant_type: 'code', 
                    client_id: APP_ID,
                    client_secret: CLIENT_SECRET,
                    code : code,
                    redirect_uri: 'https://localhost:9000/meli/token'  
                }  */
        }

        const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

        //const user = store.getters['auth/AuthUser'];
        const user = SessionStorage.getItem('user');
        if (to.name !== 'Login' && !user && requiresAuth) next({ name: 'Login' })
        else next();
    })

    return Router
})
