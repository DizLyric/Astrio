<script setup>
const store = useDataStore();
</script>

<template>
  <div id="filter-panel" class="col-2 p-0">
    <PrimeListbox
      class="shadow-3"
      v-model="store.selected_brands"
      :options="store.brands.data.value"
      multiple
      optionLabel="title"
    >
      <template #empty>
        <PrimeSkeleton
          v-for="(item, idx) in 10"
          :key="idx"
          style="margin-bottom: 0.5rem"
          borderRadius="16px"
        />
      </template>
    </PrimeListbox>
  </div>
</template>

<style scoped></style>
