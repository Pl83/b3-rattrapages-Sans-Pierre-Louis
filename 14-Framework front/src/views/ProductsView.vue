<template>
    <h1>All Products</h1>
    <div class="bigContainer">
        <ProductFull v-for="product in Products" :key="product.id" :title="product.title" :content="product.content" :price="product.price" :quantity="product.quantity" :stars="product.stars" :available="product.available" :imagePath="product.imagePath" :expiarationDate="product.expirationDate" :addDate="product.addDate"/>
    </div>
</template>

<script>
import ProductFull from '@/components/ProductFull.vue';

export default {
    name: 'ProductsView',
    components: {
        ProductFull,
    },
    computed: {
        Products() {
            let products =this.$store.state.Products;
            return products;
        }
    }
}
</script>

<style scoped>

    h1 {
        text-align: center;
    }

    .bigContainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

</style>