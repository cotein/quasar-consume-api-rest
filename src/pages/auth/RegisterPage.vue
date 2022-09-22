<template>
        <q-page class="bg-grey-3 window-height window-width row justify-center items-center">
            <div class="signup">
                <div class="signup-body">
                    <a class="signup-brand" href="#">
                        <img class="img-responsive" src="img/logo.svg" alt="Elephant">
                    </a>
                   <!--  <p class="signup-heading">
                        <em>Get started with a free account. 30 day free trial, unlimited users, no credit card required.</em>
                    </p> -->
                    <!-- <div class="signup-divider">
                        <div class="divider">
                            <div class="divider-content">OR</div>
                        </div>
                    </div> -->
                    <div class="signup-form">
                        <form @submit.prevent="onSubmit">
                            <div class="row gutter-xs">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="first-name">Nombre</label>
                                        <input id="first-name" 
                                            class="form-control" 
                                            type="text" 
                                            v-model="userForm.name"
                                            placeholder="Ingrese su nombre." 
                                            >
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label for="last-name">Apellido</label>
                                        <input id="last-name" 
                                            class="form-control" 
                                            type="text" 
                                            v-model="userForm.lastName"
                                            placeholder="Ingrese su apellido." 
                                            >
                                    </div>
                                </div>
                            </div>
                            <div class="row gutter-xs">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input id="email" 
                                            class="form-control" 
                                            type="email" 
                                            v-model="userForm.email" 
                                            autocomplete="off" 
                                            placeholder="Ingrese su correo electrónico." 
                                            >
                                    </div>
                                </div>
                            </div>
                            <div class="row gutter-xs">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input id="password" 
                                            class="form-control" 
                                            type="password" 
                                            v-model="userForm.password" 
                                            placeholder="Ingrese su contraseña." 
                                            >
                                        <!-- <small class="help-block">6-character minimum; case sensitive.</small> -->
                                    </div>
                                </div>
                            </div>
                            <div class="row gutter-xs">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label for="password">Confirmar Password</label>
                                        <input id="password" 
                                            class="form-control" 
                                            type="password" 
                                            v-model="userForm.confirmPassword" 
                                            placeholder="Vuelva a ingresar su contraseña." 
                                            >
                                        <!-- <small class="help-block">6-character minimum; case sensitive.</small> -->
                                    </div>
                                </div>
                            </div>
                           <!--  <div class="row gutter-xs">
                                <div class="col-xs-12">
                                    <div class="form-group">
                                        <label class="custom-control custom-control-primary custom-checkbox">
                                            <input id="agree" class="custom-control-input" type="checkbox" name="agree" placeholder="In order to use our services, you must agree to the Terms of Service." >
                                            <span class="custom-control-indicator"></span>
                                            <small class="custom-control-label">I agree to the Elephant <a href="#">Terms of Service</a>.</small>
                                        </label>
                                    </div>
                                </div>
                            </div> -->
                            <button class="btn btn-primary btn-block" type="submit">Aceptar</button>
                        </form>
                    </div>
                </div>
                <div class="signup-footer">
                    ¿Ya tiene una cuenta? <router-link :to="{name: 'login'}" >LOG IN</router-link>
                </div>
            </div>
        </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useAuth } from './../../composables/useAuth';

export default defineComponent({
    
    name: 'RegisterPage',

    setup () {

        const userForm = ref({
            name: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
        
        const { createUser } = useAuth();

        return {
            userForm,

            onSubmit: async () => {
                console.log("🚀 ~ file: RegisterPage.vue ~ line 134 ~ onSubmit: ~ userForm", userForm.value)
                createUser(userForm.value);
            }
        }
    }
})
</script>
<style scoped>
    @import "./../../css/elephant.min.css";
    @import "./../../css/signup-2.min.css";
    @import "./../../css/vendor.min.css";
</style>
