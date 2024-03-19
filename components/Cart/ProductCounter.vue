<script setup>
const props = defineProps(["count", "product_id"]);
const store = useDataStore();

const product_count = ref(props.count);

</script>

<template>
  <PrimeInputNumber
    v-model="product_count"
    @update:modelValue="store.change_product_count(props.product_id, product_count)"
    showButtons
    buttonLayout="horizontal"
    inputClass="text-center w-4rem"
    incrementButtonClass="w-2rem"
    decrementButtonClass="w-2rem"
    :useGrouping="false"
    :min="1"
    :allowEmpty="false"
  />
</template>
