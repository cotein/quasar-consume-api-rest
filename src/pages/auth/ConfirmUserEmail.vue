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
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router'
export default defineComponent({
    
    name: 'ConfirmUserEmail',

    setup () {

        const route = useRoute()

        onMounted(() => {
            const token = route.params.token
        })
    }
})
</script>

