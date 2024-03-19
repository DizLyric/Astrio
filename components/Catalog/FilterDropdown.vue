<script setup>
const store = useDataStore();
</script>

<template>
  <PrimeMultiSelect
    v-model="store.selected_brands"
    display="comma"
    :showToggleAll="false"
    :options="store.brands.data.value"
    optionLabel="title"
    placeholder="Фильтрация"
    selectedItemsLabel="Элементов выбрано: {}"
    :maxSelectedLabels="3"
  />
</template>
