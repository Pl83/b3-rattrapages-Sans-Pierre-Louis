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
    <div class="overlay"></div>
</template>

<script>
import { isValid, isExpirationDateValid, isSecurityCodeValid } from 'creditcard.js';
export default {
    name: 'CbForm',
    methods: {
        submitForm() {
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
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
    z-index: 3;
}

.form-group {
    margin: 1rem 0;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: block;
    z-index: 2;
}

</style>