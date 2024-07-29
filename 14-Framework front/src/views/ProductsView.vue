<template>
    <h1>All Products</h1>
    <section>
        <div>
            <p>Filter :</p>
            <input type="text" placeholder="Filter products">
        </div>
        <div>
            <ButtonAction :action="addProducts" text="Add a product"/>
        </div>
    </section>
    <div class="bigContainer">
        <ProductFull v-for="product in Products" :key="product.id" :title="product.title" :slug="product.slug" :content="product.content" :price="product.price" :quantity="product.quantity" :stars="product.stars" :available="product.available" :imagePath="product.imagePath" :expiarationDate="product.expirationDate" :addDate="product.addDate"/>
    </div>

</template>

<script>
import ProductFull from '@/components/ProductFull.vue';
import ButtonAction from '@/components/ButtonAction.vue';
import ProductForm from '@/components/ProductForm.vue';

export default {
    name: 'ProductsView',
    components: {
        ProductFull,
        ButtonAction
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

    section {
        display: flex;
        justify-content: space-around;
    }

    .bigContainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

</style>