<template>
    <div class="container">
        <img :src="product.image" :alt="'Image of ' + product.name" loading="lazy">
        <div>
            <h2>{{ product.name }}</h2>
            <p>{{ product.price }} $</p>
            <button v-if="product.available" @click="addToCart(product)">Buy</button>
            <button v-else class="disable">Unavailable</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductShort',
    props: {
        product: Array
    },
    methods: {
        addToCart(product) {
            console.log('Add to cart', product)
            let cart = JSON.parse(localStorage.getItem('cart')) || []
            cart.push(product)
            localStorage.setItem('cart', JSON.stringify(cart))
            window.location.href = '/cart'
        }
    }
}
</script>
  
<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
    padding: 1rem;
    background-color: #f8f9fa;
    border-radius: 0.25rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
}
.container img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
}
.container div {
    flex: 1;
    margin-left: 1rem;
}
.container h2 {
    font-size: 1.5rem;
    margin: 0;
}
.container p {
    margin: 0;
}
.container button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
}
.container button:hover {
    background-color: #0056b3;
}

.container button.disable {
    background-color: #6c757d;
    cursor: not-allowed;
}
</style>