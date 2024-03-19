<script setup>
const store = useDataStore();
</script>

<template>
  <PrimeSidebar close-icon="pi pi-times">
    <template #container>
      <div class="flex flex-column h-full">
        <div
          class="flex align-items-center justify-content-between p-2 flex-shrink-0"
        >
          <AppLogo />
          <span>
            <PrimeButton
              type="button"
              @click="$emit('update:visible', false)"
              icon="pi pi-times"
              rounded
              outlined
              class="h-2rem w-2rem"
            />
          </span>
        </div>
        <div class="overflow-y-auto">
          <ul class="list-none p-3 m-0 overflow-hidden">
            <li>
              <NuxtLink
                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors"
              >
                <i class="pi pi-chart-bar mr-2"></i>
                <span class="font-medium">Сравнение</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors"
              >
                <i class="pi pi-heart mr-2"></i>
                <span class="font-medium">Избранное</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/cart"
                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors no-underline"
              >
                <i class="pi pi-shopping-cart mr-2"></i>
                <span class="font-medium">Корзина</span>
                <span
                  v-if="store.cart_count"
                  class="inline-flex align-items-center justify-content-center ml-auto bg-primary text-white border-circle"
                  style="min-width: 1.5rem; height: 1.5rem"
                >
                  {{ store.cart_count }}
                </span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors"
              >
                <i class="pi pi-user mr-2"></i>
                <span class="font-medium">Аккаунт</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="mt-auto">
          <hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
          <a
            class="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors"
          >
            <PrimeAvatar icon="pi pi-user" shape="circle" />
            <span class="font-bold">Developed by DizLyric</span>
          </a>
        </div>
      </div>
    </template>
  </PrimeSidebar>
</template>

<style scoped></style>
