<template>
    <NavBar />
    <h1>All our Products</h1>
    <CbForm />
    <section>  
        <ProductShort v-for="product in products" :key="product.uuid" :product="product" />
    </section>
</template>

<script>
import ProductShort from '@/Components/ProductShort.vue'
import NavBar from '@/Components/NavBar.vue'
import CbForm from '@/Components/CbForm.vue';

export default {
    name: 'Products',
    components: {
        ProductShort,
        NavBar,
        CbForm
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