<template>
    <q-layout view="lHh Lpr lFf" class="flex flex-center bg-grey-1">
        <q-page >
            <div id="g_id_onload"
         data-client_id="589168399862-iehsgach2sm3186mtd77n5f59ceajrbk.apps.googleusercontent.com"
         data-auto_prompt="false"
         data-callback="handleCredentialResponse">
      </div>
      
            <div class="signup">
                <div class="signup-body">
                    <a class="signup-brand" href="index.html">
                    <img class="img-responsive" src="img/logo.svg" alt="Elephant">
                    </a>
                    <p class="signup-heading">
                    <em>Get started with a free account. 30 day free trial, unlimited users, no credit card required.</em>
                    </p>
                    <GLogin />
                    <div class="signup-divider">
                    <div class="divider">
                        <div class="divider-content">OR</div>
                    </div>
                    </div>
                    <div class="signup-form">
                        <form data-toggle="validator" data-groups='{"birthdate": "birth_month birth_day birth_year"}'>
                            <div class="row gutter-xs">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="first-name">First name</label>
                                        <input id="first-name" class="form-control" type="text" name="first_name" spellcheck="false" data-msg-required="Please enter your first name." required>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="last-name">Last name</label>
                                        <input id="last-name" class="form-control" type="text" name="last_name" spellcheck="false" data-msg-required="Please enter your last name." required>
                                    </div>
                                </div>
                            </div>
                            <div class="row gutter-xs">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input id="email" class="form-control" type="email" name="email" spellcheck="false" autocomplete="off" data-msg-required="Please enter your email address." required>
                                    </div>
                                </div>
                            </div>
                            <div class="row gutter-xs">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input id="password" class="form-control" type="password" name="password" minlength="6" data-msg-minlength="Password must be 6 characters or more." data-msg-required="Please enter your password." required>
                                        <small class="help-block">6-character minimum; case sensitive.</small>
                                    </div>
                                </div>
                            </div>
                            <div class="row gutter-xs">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="custom-control custom-control-primary custom-checkbox">
                                            <input id="agree" class="custom-control-input" type="checkbox" name="agree" data-msg-required="In order to use our services, you must agree to the Terms of Service." required>
                                            <span class="custom-control-indicator"></span>
                                            <small class="custom-control-label">I agree to the Elephant <a href="#">Terms of Service</a>.</small>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-primary btn-block" type="submit">Sign up</button>
                        </form>
                    </div>
                </div>
                <div class="signup-footer">
                    ¿Ya tiene una cuenta? <router-link  to="/login" >LOG IN</router-link>
                </div>
                </div>
        </q-page>
    </q-layout>
</template>

<script>
import { defineComponent, onMounted, onBeforeMount, ref } from 'vue'
import {useStore} from 'vuex';
import { useRouter } from 'vue-router';
import GLogin from './../components/auth/G-Login.vue';
export default defineComponent({
    
    name: 'RegisterPage',

    components : {GLogin},

    setup () {
        
        const store = useStore();
        const router = useRouter();
        
        const scripts = [
            'elephant.min.js',
            'landing-page.min.js',
            'vendor.min.js'
        ];

        onBeforeMount(() => {
            const externalScript = document.createElement('script')
            externalScript.setAttribute('src', "https://code.jquery.com/jquery-3.6.1.min.js" )
            document.head.appendChild(externalScript);
        })
        onMounted(() => {
            
            scripts.forEach(el => {
                const externalScript = document.createElement('script')
                externalScript.setAttribute('src', `./../js/${el}` )
                document.head.appendChild(externalScript)
            });

        })

    }
})
</script>
<style scoped>
    @import "./../css/elephant.min.css";
    @import "./../css/signup-2.min.css";
    @import "./../css/vendor.min.css";
</style>
