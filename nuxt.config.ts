// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    "nuxt-primevue",
    "nuxt-lodash",
    ["@pinia/nuxt", { autoImports: ["defineStore", "acceptHMRUpdate", "storeToRefs"] }]
  ],

  css: ["/public/css/style.css"],
  postcss: {
    plugins: {
      autoprefixer: {}
    }
  },

  components: [
    {
      path: "~/components",
      pathPrefix: false
    }
  ],

  // ----- PrimeVue Config -----
  primevue: {
    usePrimeVue: true,
    components: {
      prefix: "Prime",
      include: [
        "Card",
        "Image",
        "Avatar",
        "Button",
        "Sidebar",
        "Listbox",
        "Checkbox",
        "DataView",
        "Dropdown",
        "Skeleton",
        "IconField",
        "InputIcon",
        "InputText",
        "ScrollTop",
        "InputSwitch",
        "InputNumber",
        "MultiSelect",
        "OverlayPanel",
        "SelectButton",
        "ConfirmDialog",
        "DataViewLayoutOptions"
      ]
    },

    directives: {
      include: ["Tooltip", "Badge"]
    }
  }
});
