<template>
    <q-page class="bg" padding>
        <q-card class="my-card q-mb-md">
            <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
                <q-form
                    @submit="onSubmit"
                    @reset="onReset"
                    class="q-gutter-md"
                >
                    
                    <div>
                        <div class="row q-col-gutter-x-lg q-col-gutter-y-lg">
                            <div class="col-8">
                                <q-input v-model="text" type="text" label="RAZÒN SOCIAL" />
                            </div>
                            <div class="col-4">
                                <q-input 
                                    bottom-slots 
                                    v-model="search_number" 
                                    label="CUIT" 
                                    counter 
                                    maxlength="11" 
                                >
                                    <template v-slot:append>
                                        <q-btn round dense flat icon="las la-search" 
                                        >
                                            <q-tooltip class="bg-amber text-black shadow-4" :offset="[10, 10]">
                                                Buscar
                                            </q-tooltip>
                                        </q-btn>
                                    </template>
                                </q-input>
                            </div>
                        </div>
                        <q-btn label="Submit" type="submit" color="primary"/>
                        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
                    </div>
                </q-form>
            </q-card-section>
            <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </q-card-section>
        </q-card>
        <q-card class="my-card">
            <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
            <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script>
export default {
    name: 'CompanyPage',
}
</script>
<style scoped>
    .bg {
        background-color: #ededed;
    }
</style>