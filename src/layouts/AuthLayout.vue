<template>
    <q-layout view="lHh Lpr lFf">

        <q-page-container>
            <router-view v-slot="{ Component }">
                <transition name="fade">
                    <component :is="Component" />
                </transition>
            </router-view>
        </q-page-container>

    </q-layout>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    
    name: 'AuthLayout',
    
})
</script>
<style scoped>
    .v-enter-active,
    .v-leave-active {
      transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
      opacity: 0;
    }
</style>
