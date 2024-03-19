<script setup></script>

<template>
  <div
    class="flex justify-content-center m-auto col-11 my-4 surface-50 border-solid border-1 border-300 border-round"
  >
    <h1 class="m-0">Каталог товаров</h1>
  </div>

  <main class="flex flex-grow-1 justify-content-center gap-2 col-11 m-auto">
    <FilterPanel class="hidden lg:block" />
    <div id="content" class="flex flex-column col-10 p-0">
      <ProductsItem />
    </div>
  </main>
</template>
