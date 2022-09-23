<template>
  <q-page padding>
      dashboard
  </q-page>
</template>

<script>
import { useStore } from 'vuex';
export default {
    name: 'DashBoard',

    setup(props) {
      
        const store = useStore();

        return {
            store
        }
    },

    beforeRouteEnter(to, from, next) {
        next( vm => {
            
            const user = vm.store.getters['auth/AuthUser'];

            if (!user.company) {
                vm.$router.push({ name: 'CompanyPage'})
            }
        })
    }

}
</script>
