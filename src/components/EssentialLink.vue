<template>
  <!-- <q-item
    clickable
    tag="a"
    @click="navigateTo"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item> -->
    <div class="q-pa-xs" style="max-width: 350px">
        <q-list bordered class="rounded-borders">
            <q-expansion-item
                expand-separator
                :icon="icon"
                :label="label"
                :caption="title"
                default-opened
            >
                <q-expansion-item
                    class="q-pl-sm"
                    :header-inset-level="1"
                    expand-separator
                    icon="receipt"
                    label="Receipts"
                    default-opened
                >
                    <q-list dense class="q-pl-xl">
                        <q-item
                            clickable
                            tag="a"
                            @click="navigateTo"
                        >
                            <q-item-section v-if="icon" avatar >
                                <q-icon :name="icon" />
                            </q-item-section>

                            <q-item-section>
                                <q-item-label>{{ title }}</q-item-label>
                                <q-item-label caption>{{ caption }}</q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-expansion-item>
            </q-expansion-item>

        </q-list>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import {useRouter} from 'vue-router';

export default defineComponent({
    
    name: 'EssentialLink',
    
    props: {
        title: {
            type: String,
            required: true
        },

        caption: {
            type: String,
            default: ''
        },

        link: {
            type: String,
            default: '#'
        },

        icon: {
            type: String,
            default: ''
        }
    },

    setup(props){

        const router = useRouter();
        
        return{

            navigateTo() {
                router.push(props.link);
            }
        }
    }
})
</script>
