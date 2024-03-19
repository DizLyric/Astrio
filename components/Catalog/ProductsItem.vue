<script setup>
import _ from "lodash";

const store = useDataStore();
const layout = ref("grid");

function getBrandNameById(brand_id) {
  return store.brands.data.value.find((brand) => brand.id == brand_id)["title"];
}

function check_product(product_id) {
  return _.find(store.cart, { id: product_id }) ? true : false;
}
</script>

<template>
  <PrimeDataView
    :value="store.filtered_products"
    :layout="layout"
    sortField="regular_price.value"
    :sortOrder="store.selected_sort"
    :rows="8"
    paginator
  >
    <template #header>
      <div class="flex justify-content-between align-items-center">
        <div id="list-control" class="flex flex-wrap gap-2">
          <SortDropdown />
          <FilterDropdown class="lg:hidden" />
        </div>
        <PrimeDataViewLayoutOptions v-model="layout" />
      </div>
    </template>

    <template #list="slotProps">
      <div class="grid grid-nogutter">
        <div
          v-for="(product, idx) in slotProps.items"
          :key="idx"
          class="col-12"
        >
          <div
            class="flex flex-column sm:flex-row sm:align-items-center gap-3 px-3"
            :class="{ 'border-top-1 surface-border': idx !== 0 }"
          >
            <div class="md:w-10rem relative">
              <PrimeImage
                imageClass="block xl:block mx-auto border-round w-full"
                :src="product.image"
                preview
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
                <div class="surface-100 p-1" style="border-radius: 30px">
                  <div
                    class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2"
                    style="
                      border-radius: 30px;
                      box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04),
                        0px 1px 2px 0px rgba(0, 0, 0, 0.06);
                    "
                  >
                    <span class="text-900 font-medium text-sm">{{ 5 }}</span>
                    <i class="pi pi-star-fill text-yellow-500"></i>
                  </div>
                </div>
              </div>
              <div class="flex flex-column md:align-items-end gap-5">
                <span class="text-xl font-semibold text-900">
                  {{ product.regular_price.value }}
                  {{ product.regular_price.currency }}
                </span>
                <div class="flex flex-row-reverse md:flex-row gap-2">
                  <PrimeButton icon="pi pi-chart-bar" outlined />
                  <PrimeButton icon="pi pi-heart" outlined />
                  <PrimeButton
                    @click="store.add_to_cart(product)"
                    :icon="
                      !check_product(product.id)
                        ? 'pi pi-shopping-cart'
                        : 'pi pi-check'
                    "
                    :disabled="check_product(product.id)"
                    class="flex-auto md:flex-initial white-space-nowrap"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template #grid="slotProps">
      <div class="grid grid-nogutter">
        <div
          v-for="(product, idx) in slotProps.items"
          :key="idx"
          class="xl:col-3 lg:col-4 md:col-6 sm:col-12 p-2"
        >
          <div
            class="p-4 border-1 surface-border surface-card border-round flex flex-column"
          >
            <div class="surface-50 flex justify-content-center border-round 3">
              <div class="relative mx-auto">
                <PrimeImage
                  imageClass="border-round w-full"
                  :src="product.image"
                  style="max-width: 300px"
                  preview
                />
              </div>
            </div>
            <div class="pt-4">
              <div
                class="flex flex-row justify-content-between align-items-start gap-2"
              >
                <div>
                  <div class="text-lg font-medium text-900 mt-1">
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
                <div class="surface-100 p-1" style="border-radius: 30px">
                  <div
                    class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2"
                    style="
                      border-radius: 30px;
                      box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04),
                        0px 1px 2px 0px rgba(0, 0, 0, 0.06);
                    "
                  >
                    <span class="text-900 font-medium text-sm">5</span>
                    <i class="pi pi-star-fill text-yellow-500"></i>
                  </div>
                </div>
              </div>
              <div class="flex flex-column gap-4 mt-4">
                <span class="text-2xl font-semibold text-900">
                  {{ product.regular_price.value }}
                  {{ product.regular_price.currency }}
                </span>
                <div class="flex gap-2">
                  <PrimeButton
                    @click="store.add_to_cart(product)"
                    :icon="
                      !check_product(product.id)
                        ? 'pi pi-shopping-cart'
                        : 'pi pi-check'
                    "
                    :disabled="check_product(product.id)"
                    class="flex-auto white-space-nowrap"
                  />
                  <PrimeButton icon="pi pi-chart-bar" outlined />
                  <PrimeButton icon="pi pi-heart" outlined />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template #empty>
      <div class="grid grid-nogutter">
        <div
          v-for="i in 12"
          :key="i"
          class="xl:col-3 lg:col-4 md:col-6 sm:col-12 p-2 p-2"
        >
          <div class="p-4 border-1 surface-border surface-card border-round">
            <div
              class="flex flex-wrap align-items-center justify-content-between gap-2"
            >
              <PrimeSkeleton class="w-6rem border-round h-2rem" />
              <PrimeSkeleton class="w-3rem border-round h-1rem" />
            </div>
            <div class="flex flex-column align-items-center gap-3 py-5">
              <PrimeSkeleton class="w-9 border-round h-10rem" />
              <PrimeSkeleton class="w-8rem border-round h-2rem" />
              <PrimeSkeleton class="w-6rem border-round h-1rem" />
            </div>
            <div class="flex align-items-center justify-content-between">
              <PrimeSkeleton class="w-4rem border-round h-2rem" />
              <PrimeSkeleton shape="circle" class="w-3rem h-3rem" />
            </div>
          </div>
        </div>
      </div>
    </template>
  </PrimeDataView>
</template>
