<script setup>
import _ from "lodash";

const store = useDataStore();

function getBrandNameById(brand_id) {
  return store.brands.data.value.find((brand) => brand.id == brand_id)["title"];
}

const product_cost = (product_price, product_count) =>
  computed(() => product_price * product_count);

const total_cost = computed(() =>
  _.round(
    _.reduce(
      store.cart,
      (sum, item) => sum + item.regular_price.value * item.count,
      0
    ),
    2
  )
);
</script>

<template>
  <div
    v-if="!store.cart_count && !store.products.pending.value"
    class="flex flex-column align-items-center py-4 m-auto col-6 mt-8 surface-50 border-solid border-1 border-300 border-round"
  >
    <h1 class="text-center">Корзина пуста!</h1>
    <p class="text-center">
      Посмотрите предложения на <NuxtLink to="/">главной странице</NuxtLink>
    </p>
  </div>

  <template v-else>
    <div
      class="flex justify-content-center m-auto col-11 my-4 surface-50 border-solid border-1 border-300 border-round"
    >
      <h1 class="m-0">Корзина</h1>
    </div>
    <PrimeDataView :value="store.cart" layout="list" class="col-11 m-auto">
      <template #header>
        <div class="flex justify-content-end align-items-center">
          <ClearCartDialog />
        </div>
      </template>
      <template #list="slotProps">
        <div class="grid grid-nogutter">
          <div
            v-for="(product, index) in slotProps.items"
            :key="product.id"
            class="col-12"
          >
            <div
              class="flex flex-column sm:flex-row sm:align-items-center gap-3"
              :class="{ 'border-top-1 surface-border': index !== 0 }"
            >
              <div class="md:w-10rem relative">
                <PrimeImage
                  imageClass="block xl:block mx-auto border-round w-full"
                  :src="product.image"
                />
              </div>
              <div
                class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4"
              >
                <div
                  class="flex flex-row md:flex-column justify-content-between align-items-start gap-2"
                >
                  <div>
                    <div class="text-lg font-medium text-900 mt-2">
                      {{ product.title }}
                    </div>
                    <PrimeSkeleton
                      v-if="store.brands.pending.value"
                      class="w-full"
                      borderRadius="16px"
                    />
                    <span v-else class="font-medium text-secondary text-sm">
                      {{ getBrandNameById(product.brand) }}
                    </span>
                  </div>
                </div>
                <div class="flex md:align-items-center gap-5">
                  <span class="text-xl font-semibold text-900">
                    {{ product.regular_price.value }}
                    {{ product.regular_price.currency }}
                  </span>

                  <div>
                    <ProductCounter
                      :count="product.count"
                      :product_id="product.id"
                    />
                  </div>

                  <span class="text-xl font-semibold text-900">
                    {{
                      product_cost(product.regular_price.value, product.count)
                    }}
                    {{ product.regular_price.currency }}
                  </span>

                  <div class="flex flex-row-reverse md:flex-row gap-2">
                    <PrimeButton
                      @click="store.remove_from_cart(product.id)"
                      icon="pi pi-times"
                      severity="danger"
                      class="flex-auto md:flex-initial white-space-nowrap"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>

      <template #empty>
        <div class="grid grid-nogutter">
          <div v-for="i in 6" :key="i" class="col-12">
            <div
              class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4"
              :class="{ 'border-top-1 surface-border': i !== 0 }"
            >
              <PrimeSkeleton
                class="w-9 sm:w-16rem xl:w-10rem h-6rem block xl:block mx-auto border-round"
              />
              <div
                class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4"
              >
                <div
                  class="flex flex-column align-items-center sm:align-items-start gap-3"
                >
                  <PrimeSkeleton class="w-8rem border-round h-2rem" />
                  <PrimeSkeleton class="w-6rem border-round h-1rem" />
                  <div class="flex align-items-center gap-3">
                    <PrimeSkeleton class="w-6rem border-round h-1rem" />
                    <PrimeSkeleton class="w-3rem border-round h-1rem" />
                  </div>
                </div>
                <div
                  class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2"
                >
                  <PrimeSkeleton class="w-4rem border-round h-2rem" />
                  <PrimeSkeleton shape="circle" class="w-3rem h-3rem" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </PrimeDataView>
    <hr />
    <div
      id="total-cost"
      class="flex flex-column align-items-end gap-4 my-4 px-4"
    >
      <span class="text-xl font-semibold text-900"
        >Общая стоимость: {{ total_cost }} USD</span
      >
      <PrimeButton label="Оформить заказ" size="large" class="w-15rem" />
    </div>
  </template>
</template>
