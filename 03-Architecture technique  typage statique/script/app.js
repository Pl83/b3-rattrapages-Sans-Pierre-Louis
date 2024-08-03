import LocalStorage from "./LocalStorage.js";
import Product from "./Product.js";
try {
    localStorage.getItem('products');
    console.log('localStorage not empty');
    if (!localStorage.getItem('products')) {
        console.log('localStorage empty');
        localStorage.setItem('products', JSON.stringify([]));
        let product1 = new Product('product1', 'description1', 100, 10, 5, true, 'https://via.placeholder.com/200', new Date(), new Date());
        let product2 = new Product('product2', 'description2', 200, 20, 4, true, 'https://via.placeholder.com/200', new Date(), new Date());
        let product3 = new Product('product3', 'description3', 300, 30, 3, true, 'https://via.placeholder.com/200', new Date(), new Date());
        let product4 = new Product('product4', 'description4', 400, 0, 2, false, 'https://via.placeholder.com/200', new Date(), new Date());
        let product5 = new Product('product5', 'description5', 500, 50, 1, true, 'https://via.placeholder.com/200', new Date(), new Date());
        let product6 = new Product('product6', 'description6', 600, 60, 5, true, 'https://via.placeholder.com/200', new Date(), new Date());
        product1.createProduct();
        product2.createProduct();
        product3.createProduct();
        product4.createProduct();
        product5.createProduct();
        product6.createProduct();
    }
}
catch (e) {
    console.error(e);
}
function displayProducts(array) {
    const container = document.getElementById('productsList');
    let content = '';
    array.forEach((product) => {
        content += `
            <div class="product">
                <h2>${product._title}</h2>
                <div>
                <img src="${product._image}" alt="${product._title}" loading="lazy">
                <ul>
                    <li class="available"></li>
                    <li>${product._price} $(USD)</li>
                    <li>${product._rated}/5 ⭐</li>
                    <li class="peremption">Expire in:</li>
                    <li>About this product: ${product._description}</li>
                </ul>
                </div>
            </div>
        `;
    });
    container.innerHTML = content;
    let Allperemption = document.querySelectorAll('.peremption');
    Allperemption.forEach((peremption) => {
        let expire = new Date();
        let expireDate = new Date(expire.getFullYear(), expire.getMonth() + 1, expire.getDate());
        let result = (expireDate.getTime() - expire.getTime()) / (1000 * 60 * 60 * 24);
        result = Math.round(result);
        peremption.innerHTML = 'Expire in: ' + result + ' days';
    });
    let Allavailable = document.querySelectorAll('.available');
    let i = 0;
    Allavailable.forEach((available) => {
        if (array[i]._available) {
            available.innerHTML = `${array[i]._stock} left in stock`;
        }
        else {
            available.innerHTML = 'Sorry we are out of stock';
        }
        i++;
    });
}
let allProducts = LocalStorage.selectAllProduct();
displayProducts(allProducts);
