import _ from "lodash";
import { getData, setData } from "nuxt-storage/local-storage";

export const useDataStore = defineStore("data", () => {

  /* ----- State ----- */

  const [selected_brands, selected_sort] = [ref(), ref()];
  const products = useFetch("data/products.json", { server: false });
  const brands = useFetch("data/brands.json", { server: false });
  const cart = ref([]);

  onBeforeMount(() => {
    if (getData("cart")) {
      cart.value = getData("cart");
    }
  });

  /* ----- Getters ----- */

  const filtered_products = computed(() => {
    if (_.isEmpty(selected_brands.value)) {
      return products.data.value;
    } else {
      return _.filter(products.data.value, (product) =>
        selected_brands.value.some((brand) => product.brand === brand.id)
      );
    }
  });

  const cart_count = computed(() => cart.value.length);


  /* ----- Actions ----- */

  function add_to_cart(product) {
    cart.value = _.concat(cart.value, { ...product, count: 1 });
    setData("cart", cart.value, "30", "d");
  }

  function remove_from_cart(product_id) {
    _.remove(cart.value, { id: product_id });
    setData("cart", cart.value, "30", "d");
  }

  function clear_cart() {
    cart.value = [];
    setData("cart", cart.value, "30", "d");
  }
  
  function change_product_count(product_id, product_count) {
    cart.value = _.map(cart.value, (item) =>
      item.id == product_id ? { ...item, count: product_count } : item
    );
    setData("cart", cart.value, "30", "d");
  }


  return {
    cart,
    brands,
    products,
    cart_count,
    clear_cart,
    add_to_cart,
    selected_sort,
    selected_brands,
    remove_from_cart,
    filtered_products,
    change_product_count
  };
});
