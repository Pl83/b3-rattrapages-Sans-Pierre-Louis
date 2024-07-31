<template>
    <h1>All our Products</h1>
    <section>  
        <ProductShort v-for="product in products" :key="product.uuid" :product="product" />
    </section>
</template>

<script>
import ProductShort from '@/Components/ProductShort.vue'

export default {
    name: 'Products',
    components: {
        ProductShort
    },
    props: {
        products: Array
    }
}
</script>

<style scoped>

h1 {
    text-align: center;
    margin: 2rem;
    font-size: 2rem;
}

section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin: 2rem;
}

@media (max-width: 768px) {
    section {
        grid-template-columns: 1fr;
    }
}
</style>