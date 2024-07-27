<script setup>
defineProps({
    title: {
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
        required: true
    },
    expiarationDate: {
        type: Date,
        required: true
    },
    addDate: {
        type: Date,
        required: true
    }
})
</script>

<template>
    <h1>{{ title }}</h1>
    <section>
        <div>
            <img src="{{ imagePath }}" alt="image of {{ title }}">
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
        </div>
    </section>
</template>

<style scoped>
    h1 {
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
