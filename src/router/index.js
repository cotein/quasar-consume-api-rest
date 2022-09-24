import { route } from 'quasar/wrappers';
import { SessionStorage } from 'quasar'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'
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

        const user = store.getters['auth/AuthUser'];

        if(to.matched.some(record => record.meta.requiresAuth)){
            if ( ! user ) {
                next({ name: 'Login' })
            } else {
                if (path === '/dashboard') {
                    if (! user.company) {
                        next({name: 'CompanyPage'});
                    }else{
                        next();
                    }
                }else if (path === '/meli/token'){
                    const { code } = to.query;
                    const { data } = store.dispatch('auth/meliToken', code);
                }
                else{
                    next();
                }
            } 
        } else {
            console.log("🚀 ~ file: index.js ~ line 56 ~ Router.beforeEach ~ else", 'else')
            next();
        }
    })

    return Router
})
