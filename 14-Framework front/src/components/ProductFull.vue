<template>
    <div class="container" :slug="slug">
        <h2>{{ title }}</h2>
        <section>
            <div>
                <img :src="imagePath" :alt="'image of ' + title">
            </div>
            <div>   
                <ul>
                    <li>{{ content }}</li>
                    <li>{{ price }} $</li>
                    <li>{{ quantity }} left in stock</li>
                    <li>{{ stars }}/5</li>
                    <li>{{ available ? 'In Stock' : 'Out of Stock' }}</li>
                    <li>Expiration Date: {{ expiarationDate }}</li>
                    <li>Added: {{ addDate }}</li>
                </ul>
                <ButtonAction :action="deleteProduct" text="Delete"/>
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
        ...mapMutations(['removeProduct']),
        deleteProduct() {
            this.removeProduct({ slug: this.slug });
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
        available: {
            type: Boolean,
            required: true
        },
        imagePath: {
            type: String,
            required: false
        },
        expiarationDate: {
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

    .greetings h1,
    .greetings h3 {
        text-align: center;
    }

    @media (min-width: 1024px) {
        .greetings h1,
        .greetings h3 {
            text-align: left;
        }
    }
</style>
