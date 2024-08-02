<template>
    <section>
        <h2>{{ user.name }}</h2>
        <h1>{{ user }}</h1>
        <div>
            <img :src="user.profile_photo_url" alt="profile image">
            <p>Email: {{ user.email }}</p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ProfileUser',
    props: {
        user: Object
    }
}
</script>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
}

h2 {
    margin: 0;
}

div {
    display: flex;
    align-items: center;
    margin: 1rem 0;
}

div img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 1rem;
}

div p {
    margin: 0;
}

</style>