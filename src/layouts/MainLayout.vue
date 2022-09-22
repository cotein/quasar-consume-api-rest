<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="las la-bars"
          aria-label="Menu"
          @click="toogleSideMenu"
        />

        <q-toolbar-title>
          Facturador Digital
        </q-toolbar-title>

        <div>
          <div class="q-pa-md">
            <q-btn-dropdown color="primary" label="Dropdown Button">
              <q-list>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Photos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Videos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Articles</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="sideMenuOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Navegación
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

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
import EssentialLink from 'components/EssentialLink.vue'
//import {linksList} from './../router/link-list';
import {sales} from './../router/routes/sales';
import {purchaser} from './../router/routes/purchaser';

import { useUI } from './../composables/useUI';

export default defineComponent({
    
    name: 'MainLayout',

    components: {
        EssentialLink
    },

    setup () {
       
        const linksList = {...sales, ...purchaser}
        console.log("🚀 ~ file: MainLayout.vue ~ line 96 ~ setup ~ linksList", linksList)
        const { sideMenuOpen, toogleSideMenu } = useUI();

        return {
            linksList,
            sideMenuOpen,
            toogleSideMenu
        }
    }
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
