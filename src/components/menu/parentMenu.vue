<template>
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
                    
                </q-expansion-item>
            </q-expansion-item>
</template>

<script>
export default {

}
</script>

<style>

</style>