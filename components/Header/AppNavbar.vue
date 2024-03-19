<script setup>
const store = useDataStore();
</script>

<template>
  <div
    id="navbar"
    class="col-8 justify-content-between align-items-center hidden lg:flex"
  >
    <div id="navbar__search-form">
      <PrimeIconField iconPosition="right">
        <PrimeInputIcon
          id="navbar__search-icon"
          class="pi pi-search cursor-pointer"
        />
        <PrimeInputText id="navbar__search-input" placeholder="Поиск..." />
      </PrimeIconField>
    </div>

    <div id="navbar__links" class="flex gap-3">
      <NuxtLink>
        <PrimeButton
          v-tooltip.bottom="'Сравнение'"
          icon="pi pi-chart-bar"
          severity="secondary"
          text
          raised
        />
      </NuxtLink>
      <NuxtLink>
        <PrimeButton
          v-tooltip.bottom="'Избранное'"
          icon="pi pi-heart"
          severity="secondary"
          text
          raised
        />
      </NuxtLink>
      <NuxtLink
        to="/cart"
        v-badge="store.cart_count"
      >
        <PrimeButton
          v-tooltip.bottom="'Корзина'"
          icon="pi pi-shopping-cart"
          severity="secondary"
          text
          raised
        />
      </NuxtLink>
      <NuxtLink>
        <PrimeButton
          v-tooltip.bottom="'Аккаунт'"
          icon="pi pi-user"
          severity="secondary"
          text
          raised
        />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
