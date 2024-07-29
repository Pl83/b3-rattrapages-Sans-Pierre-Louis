<template>
    <div class="box">
        <form action="">
            <fieldset>
                <legend> Add a product : </legend>

                <label for="title">Title :</label>
                <input type="text" id="title" name="title" required><br><br>
                <label for="content">Content :</label>
                <input type="text" id="content" name="content" required><br><br>
                <label for="price">Price :</label>
                <input type="number" id="price" name="price" required><br><br>
                <label for="quantity">Quantity :</label>
                <input type="number" id="quantity" name="quantity" required><br><br>
                <label for="stars">Stars :</label>
                <input type="number" id="stars" name="stars" required><br><br>
                <label for="available">Available :</label>
                <input type="checkbox" id="available" name="available" required><br><br>
                <label for="imagePath">Image Path :</label>
                <input type="text" id="imagePath" name="imagePath" required><br><br>
                <label for="expirationDate">Expiration Date :</label>
                <input type="date" id="expirationDate" name="expirationDate" required><br><br>
                <button type="submit">Submit</button>
            </fieldset>
        </form>
    </div>
    <div class="overlay"></div>
</template>

<script>
export default {
    name: 'ProductForm',
}
</script>

<style scoped>
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }

    .box {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 20px;
        z-index: 2;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    fieldset {
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 10px 15px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    legend {
        font-size: 20px;
        font-weight: bold;
    }

    label {
        font-size: 16px;
        font-weight: bold;
    }

    input {
        margin: 5px 0;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #ccc;
    }

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
        border-radius: 5px;
    }

    button:hover {
        cursor: pointer;
        background-color: transparent;
        color: #4CAF50;
    }
</style>