<template>
    <div class="container product">
        <h2>{{ title }}</h2>
        <input type="hidden" id="slug" name="slug" :value="slug">
        <section>
            <div>
                <img :src="imagePath" :alt="'image of ' + title">
            </div>
            <div>   
                <ul>
                    <li>About our product: {{ content }}</li>
                    <li>Cost: {{ price }} $</li>
                    <li>In Stock: <input type="number" id="quantity" name="quantity" min="0" :placeholder="quantity"></li>
                    <ButtonAction @click="changeQuantity" text="Change Quantity"/>
                    <li>Rated: <input type="number" id="stars" name="stars" max="5" min="0" :placeholder="stars">/5</li>
                    <ButtonAction @click="changeStars" text="Change Stars"/>
                    <li>Expiration Date: {{ expirationDate }}</li>
                    <li>Added: {{ addDate }}</li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import ButtonAction from './ButtonAction.vue';

export default {
    name: 'ProductFull',
    components: {
        ButtonAction
    },
    methods: {
        ...mapMutations(['updateQuantity', 'updateStars']),
        changeStars() {

            let stars = document.getElementById('stars').value;

            if (stars < 0 || stars > 5) {
                alert('Stars must be between 0 and 5');
                return;
            }

            this.updateStars({ Slug: document.getElementById('slug').value, stars: stars });
        },
        changeQuantity() {

            let quantity = document.getElementById('quantity').value;

            if (quantity.toString().includes('-')) {
                alert("Quantity can't be negative");
                return;
            }

            this.updateQuantity({ Slug: document.getElementById('slug').value, quantity: quantity });
        }
    },
    props: {
        title: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        stars: {
            type: Number,
            required: true
        },
        imagePath: {
            type: String,
            required: false
        },
        expirationDate: {
            type: String,
            required: true
        },
        addDate: {
            type: String,
            required: true
        }
    }
}

</script>

<style scoped>

    .container {
        margin: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 10px 15px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        width: fit-content;
    }

    .container:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }

    h2 {
        font-weight: 500;
        font-size: 2.6rem;
        position: relative;
        top: -10px;
    }

    section {
        display: flex;
        justify-content: space-between;
    }

    input {
        width: 40px;
    }

    img {
        width: 200px;
        height: 200px;
    }

    ul {
        list-style-type: none;
    }

    li {
        margin: 10px 0;
    }

    h1,
    h3 {
        text-align: center;
    }

    @media (min-width: 1024px) {
        h1,
        h3 {
            text-align: left;
        }
    }
</style>
