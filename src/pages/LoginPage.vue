<template>
    <q-layout view="lHh Lpr lFf" class="flex flex-center bg-grey-1">
        <q-page class="bg-grey-3 window-height window-width row justify-center items-center">
            <div class="login">
                <div class="login-body">
                    <a class="login-brand" href="index.html">
                    <img class="img-responsive" src="img/logo.svg" alt="Elephant">
                    </a>
                    <h3 class="login-heading">Login</h3>
                    <g-login />
                    <div class="login-form">
                    <form data-toggle="md-validator">
                        <div class="md-form-group md-label-floating">
                            <input
                                v-model="email"
                                class="md-form-control" 
                                type="email" 
                                name="email" 
                                spellcheck="false" 
                                autocomplete="off" 
                                data-msg-required="Ingresar dirección de correo electrónico." required>
                            <label class="md-control-label">Email</label>
                        </div>
                        <div class="md-form-group md-label-floating">
                            <input
                                v-model="password"
                                class="md-form-control" 
                                type="password" 
                                name="password" 
                                minlength="6" 
                                data-msg-minlength="La contraseña debe contener al menos 6 carateres" data-msg-required="Ingresar contraseña" required>
                            <label class="md-control-label">Password</label>
                        </div>
                        <div class="md-form-group md-custom-controls">
                            <!-- <label class="custom-control custom-control-primary custom-checkbox">
                                <input class="custom-control-input" type="checkbox" checked="checked">
                                <span class="custom-control-indicator"></span>
                                <span class="custom-control-label">Keep me signed in</span>
                            </label>
                            <span aria-hidden="true"> · </span> -->
                            <a href="password-3.html">Forgot password?</a>
                        </div>
                        <button class="btn btn-primary btn-block" type="submit">Sign in</button>
                    </form>
                    </div>
                </div>
                <div class="login-footer">
                    ¿Todavía no tiene una cuenta? <router-link  to="/registro" >Regístrese</router-link>
                    
                </div>
            </div>
        </q-page>
    </q-layout>
</template>

<script>
import { defineComponent, ref,onMounted, onBeforeMount } from 'vue'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import GLogin from './../components/auth/G-Login.vue';
export default defineComponent({
    
    name: 'LoginPage',

    components: { GLogin},

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

        const scripts = [
            'elephant.min.js',
            'landing-page.min.js',
            'vendor.min.js'
        ];

        onBeforeMount(() => {
            const body = document.getElementsByTagName('body')[0];
            body.classList.add('page-loaded');

            const link = document.createElement('link')
            link.setAttribute('rel', "stylesheet" );
            link.setAttribute('href', "https://fonts.googleapis.com/css?family=Roboto:300,400,400italic,500,700" );
            document.head.appendChild(link);
        }),
        onMounted(() => {
            const externalScript = document.createElement('script')
            externalScript.setAttribute('src', "https://code.jquery.com/jquery-3.6.1.min.js" )
            document.head.appendChild(externalScript);

            scripts.forEach(el => {

                const externalScript = document.createElement('script')
                externalScript.setAttribute('src', `./../js/${el}` )
                document.head.appendChild(externalScript)
            });
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
    @import "./../css/elephant.min.css";
    @import "./../css/login-3.min.css";
    @import "./../css/vendor.min.css";
</style>