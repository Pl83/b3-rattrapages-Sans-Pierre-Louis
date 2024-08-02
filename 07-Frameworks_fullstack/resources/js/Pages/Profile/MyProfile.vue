<template>
    <NavBar />
    <h1>My profile</h1>
    <ProfileUser :user="user" />
    <h2>My purchase history</h2>
    <ProfilePurchase />
</template>

<script>
import ProfileUser from '@/Components/ProfileUser.vue'
import ProfilePurchase from '@/Components/ProfilePurchase.vue'
import NavBar from '@/Components/NavBar.vue'

export default {
    name: 'MyProfile',
    components: {
        ProfileUser,
        ProfilePurchase,
        NavBar
    },
    props: {
        user: Object
    }  
}
</script>

<style scoped>
h1 {
    text-align: center;
    margin: 2rem;
    font-size: 2rem;
}

h2 {
    text-align: center;
    margin: 2rem;
    font-size: 1.5rem;
}
</style>