<template>
    <form @submit.prevent="submitForm">

        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" >
        </div>
        <div class="form-group">
            <label for="cardNumber">card Number</label>
            <input type="text" class="form-control" id="cardNumber">
        </div>
        <div class="form-group">
            <label for="expiry">Expiry</label>
            <input type="text" class="form-control" id="expiry">
        </div>
        <div class="form-group">
            <label for="cvv">CVV</label>
            <input type="text" class="form-control" id="cvv">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>

    </form>
</template>

<script>
import { isValid, isExpirationDateValid, isSecurityCodeValid, getCreditCardNameByNumber } from 'creditcard.js';
export default {
    name: 'CbForm',
    methods: {
        submitForm() {
            const name = document.getElementById('name').value;
            const cardNumber = document.getElementById('cardNumber').value;
            const expiry = document.getElementById('expiry').value;
            const cvv = document.getElementById('cvv').value;

            if (!isValid(cardNumber)) {
                alert('Invalid card number');
                return;
            }

            if (!isExpirationDateValid(expiry)) {
                alert('Invalid expiry date');
                return;
            }

            if (!isSecurityCodeValid(cardNumber, cvv)) {
                alert('Invalid CVV');
                return;
            }

            alert('Payment successful');
        }
    }
}
</script>

<style scoped>
    .form-group {
        margin-bottom: 1rem;
    }
    label {
        display: block;
        margin-bottom: 0.5rem;
    }
    input {
        width: 100%;
        padding: 0.5rem;
        font-size: 1rem;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
    }
    button {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        cursor: pointer;
    }
    button:hover {
        background-color: #0056b3;
    }
</style>