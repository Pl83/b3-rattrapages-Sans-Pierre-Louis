<template>
    <header>
        <nav>
            <ul>
                <li>
                    <a href="/">Products</a>
                </li>
                <li>
                    <a href="/profile">Profile</a>
                </li>
                <li>
                    <a href="/cart">Cart</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>

export default {
    name: 'NavBar',
}
</script>

<style scoped>
    header {
        background-color: #333;
        color: white;
        padding: 1rem;
    }

    nav ul {
        display: flex;
        justify-content: space-around;
        list-style: none;
    }

    nav ul li {
        margin: 0 1rem;
    }

    nav ul li a {
        color: white;
        text-decoration: none;
    }

    nav ul li a:hover {
        text-decoration: underline;
        cursor: pointer;
    }

</style>