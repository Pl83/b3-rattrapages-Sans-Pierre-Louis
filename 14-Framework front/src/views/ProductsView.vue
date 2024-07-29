<template>
    <h1>All Products</h1>
    <ProductFull title="Product 1" content="This is the first product" price="10" quantity="5" stars="4" available="true" imagePath="https://via.placeholder.com/150" expiarationDate="2022-12-31" addDate="2022-01-01"/>
</template>

<script>
import ProductFull from '@/components/ProductFull.vue';

export default {
    name: 'ProductsView',
    components: {
        ProductFull
    }
}
</script>

<style scoped>

</style>