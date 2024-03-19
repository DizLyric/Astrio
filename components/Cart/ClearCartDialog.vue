<script setup>
    const store = useDataStore();
    const confirm = useConfirm()

    const confirm_dialog = () => {
    confirm.require({
        message: 'Вы хотите очистить корзину?',
        header: 'Подтвердите действие',
        icon: 'pi pi-info-circle',
        rejectLabel: 'Отмена',
        acceptLabel: 'Очистить',
        rejectClass: 'p-button-secondary p-button-outlined',
        acceptClass: 'p-button-danger',
        accept: () => {
            store.clear_cart()
        }
    });
};
</script>

<template>
  <PrimeButton @click="confirm_dialog()" label="Очистить корзину" severity="danger" outlined />
  <PrimeConfirmDialog />
</template>
