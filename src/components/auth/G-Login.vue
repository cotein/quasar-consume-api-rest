<template>
    <div class="google-login">
        <GoogleLogin :callback="handleCredentialResponse" />
    </div>
</template>

<script>
import { api } from 'boot/axios';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { useQuasar } from 'quasar'

export default {

    name: 'G-Login',

    setup() {
        const $q = useQuasar()

        console.info('$q')
        console.info($q)
        console.info('$q')
        const router = useRouter();
        console.log('router', router)
        const store = useStore();

        const handleCredentialResponse = async (response) => {
            
            const body = {id_token : response.credential}

            const { data } = await api.post('http://localhost:8080/api/auth/google',{
                id_token : response.credential
            })
            
            if ( data ) {
                
                $q.sessionStorage.set('user', data.user);
                $q.sessionStorage.set('token', data.token);

                store.dispatch('auth/setAuthUser', data.user);
                store.dispatch('auth/setAuthToken', data.token);
                
                router.push({name: 'DashBoard'})
            }
          
        }

        return {
            handleCredentialResponse,
        };
    }
}
</script>
<style lang="scss" scoped>
    .google-login{
        width: 100%;
        text-align: center;
    }

</style>
