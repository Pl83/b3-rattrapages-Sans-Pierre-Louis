<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    price: {
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
    }
})
</script>

<template>
    <h1>{{ title }}</h1>
    <img src="{{ imagePath }}" alt="image of {{ title }}">
    <ul>
        <li>{{ price }} $</li>
        <li>{{ stars }}/5</li>
        <li>{{ available ? 'In Stock' : 'Out of Stock' }}</li>
    </ul>
</template>

<style scoped>
h1 {
    font-size: 2rem;
    margin: 0;
}

img {
    max-width: 100%;
    height: auto;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    margin: 0.5rem 0;
}

</style>
