<script setup>
const store = useDataStore();

const sorting_modes = ref([
  { label: "Сначала дешевые", value: 1 },
  { label: "Сначала дорогие", value: -1 }
]);
</script>

<template>
  <PrimeDropdown
    v-model="store.selected_sort"
    :options="sorting_modes"
    showClear
    optionLabel="label"
    optionValue="value"
    placeholder="Сортировка"
  />
</template>
