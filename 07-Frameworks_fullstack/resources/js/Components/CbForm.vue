<template>
    <form id="fy" @submit.prevent="submitForm">

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
            const month = expiry.split('/')[0];
            const year = expiry.split('/')[1];
            const cvv = document.getElementById('cvv').value;

            if (!isValid(cardNumber)) {
                alert('Invalid card number');
                return;
            }

            if (!isExpirationDateValid(month, year)) {
                alert('Invalid expiry date');
                return;
            }

            if (!isSecurityCodeValid(cardNumber, cvv)) {
                alert('Invalid CVV');
                return;
            }

            alert('Payment successful');
            let overlay = document.querySelector('.overlay');
            overlay.style.display = 'none';
            let form = document.getElementById('fy');
            form.style.display = 'none';
        }
    }
}
</script>

<style scoped>
#fy {
    position: absolute;
    top : 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    z-index: 10;
    background-color: white;
}


.form-group {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
}

.form-group label {
    margin: 0.5rem 0;
}

.form-control {
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: 1px solid #ced4da;
}

.btn {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    z-index: 2;
}

</style>