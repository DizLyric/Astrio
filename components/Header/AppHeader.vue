<script setup>
    const sidebar_show = ref(false)
</script>

<template>
    <header id="header" class="">
        <div id="header__wrapper" class="flex justify-content-between align-items-center py-1 px-2 sm:px-5 lg:py-2 lg:px-8">
            <AppLogo />
            <AppNavbar />
            <div id="header__toggle-sidebar" class="lg:hidden">
                <PrimeButton @click="sidebar_show = true" icon="pi pi-bars" severity="contrast" raised />
            </div>
        </div>
        <AppSidebar v-model:visible="sidebar_show" />
    </header>
</template>

<style scoped>


</style>