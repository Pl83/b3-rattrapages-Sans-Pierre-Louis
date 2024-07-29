<template>
    <button @click="action">{{ text }}</button>
</template>

<script>
export default {
    name: 'ButtonAction',
    props: {
        action: {
            type: Function,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
    button {
        background-color: #4CAF50;
        border: 1px solid #4CAF50;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        transition: ease-in-out 0.2s;
    }

    button:hover {
        cursor: pointer;
        background-color: transparent;
        color: #4CAF50;
    }
</style>