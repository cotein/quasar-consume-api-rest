<template>
        <q-page class="bg-grey-3 window-height window-width row justify-center items-center">
            <div class="q-pa-md q-gutter-sm">
                <q-banner rounded class="bg-secondary text-white">

                    Acutenticado correctamente

                </q-banner>
            </div>
        </q-page>
</template>

<script>
import { defineComponent, onMounted } from 'vue';
import { useRoute } from 'vue-router'
export default defineComponent({
    
    name: 'MeliToken',

    setup () {

        const route = useRoute()

        onMounted(() => {
            
            console.log("🚀 ~ file: MeliToken.vue ~ line 34 ~ setTimeout ~ setTimeout", 'setTimeout')
            setTimeout(() => {
               /*  const params = route.params
            console.log("🚀 ~ file: MeliToken.vue ~ line 26 ~ onMounted ~ params", params) */

            console.log("🚀 ~ file: MeliToken.vue ~ line 30 ~ setTimeout ~ route", route)
            const query = route.query
            console.log("🚀 ~ file: MeliToken.vue ~ line 29 ~ onMounted ~ query", query)
            }, 5000);
        })
    }
})
</script>

