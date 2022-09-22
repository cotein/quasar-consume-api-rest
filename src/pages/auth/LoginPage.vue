<template>
    <q-page class="bg-grey-3 window-height window-width row justify-center items-center">
            <div class="login">
                <div class="login-body">
                    <a class="login-brand" href="#">
                        <img class="img-responsive" src="img/logo.svg" alt="Elephant">
                    </a>
                    <h3 class="login-heading">Login</h3>
                    <div class="login-form">
                        <form @submit.prevent="">
                            <div class="md-form-group md-label-floating">
                                <input
                                    v-model="email"
                                    class="md-form-control" 
                                    type="email" 
                                    name="email" 
                                    autocomplete="off" 
                                    >
                                <label class="md-control-label">Email</label>
                            </div>
                            <div class="md-form-group md-label-floating">
                                <input
                                    v-model="password"
                                    class="md-form-control" 
                                    type="password" 
                                    name="password" 
                                    >
                                <label class="md-control-label">Password</label>
                            </div>
                            <div class="md-form-group md-custom-controls">
                                <!-- <label class="custom-control custom-control-primary custom-checkbox">
                                    <input class="custom-control-input" type="checkbox" checked="checked">
                                    <span class="custom-control-indicator"></span>
                                    <span class="custom-control-label">Keep me signed in</span>
                                </label>
                                <span aria-hidden="true"> · </span> -->
                                <a href="#">¿Olvidó su contraseña?</a>
                            </div>
                            <button class="btn btn-primary btn-block" type="submit">Ingresar</button>
                        </form>
                    </div>
                </div>
                <div class="login-footer">
                    ¿Todavía no tiene una cuenta? <router-link  :to="{name: 'register'}" >Regístrese</router-link>
                </div>
            </div>
        </q-page>
</template>


<script>
import { defineComponent, ref,onMounted, onBeforeMount } from 'vue'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default defineComponent({
    
    name: 'LoginPage',

    setup () {
        
        const store = useStore();
        const router = useRouter();

        const email = ref();
        const password = ref();
        const loading = ref(false);
        
        const login = async () => {

            loading.value = true;

            const {data} = await store.dispatch('auth/login',
                {
                    email:email.value,
                    password:password.value
                })
            .catch(err => console.log(err))
            .finally(()=>loading.value = false);

            if (data) {
                console.log(data);
                router.push({name: 'DashBoard'})
            }
        }

        onBeforeMount(() => {
            const body = document.getElementsByTagName('body')[0];
            body.classList.add('page-loaded');

            const link = document.createElement('link')
            link.setAttribute('rel', "stylesheet" );
            link.setAttribute('href', "https://fonts.googleapis.com/css?family=Roboto:300,400,400italic,500,700" );
            document.head.appendChild(link);
        })
        
        return {
            email,
            password,
            loading,
            login    
        }
    }
})
</script>
<style scoped>
    @import "./../../css/elephant.min.css";
    @import "./../../css/login-3.min.css";
    @import "./../../css/vendor.min.css";
</style>
