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

}
</script>
