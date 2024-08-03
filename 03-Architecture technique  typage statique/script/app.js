import LocalStorage from "./LocalStorage.js";
import Product from "./Product.js";
try {
    localStorage.getItem('products');
    console.log('localStorage not empty');
    if (!localStorage.getItem('products')) {
        console.log('localStorage empty');
        localStorage.setItem('products', JSON.stringify([]));
        let product1 = new Product('product1', 'description1', 100, 10, 5, true, 'image1', new Date(), new Date());
        console.log(product1);
        let product2 = new Product('product2', 'description2', 200, 20, 4, true, 'image2', new Date(), new Date());
        console.log(product2);
        let product3 = new Product('product3', 'description3', 300, 30, 3, true, 'image3', new Date(), new Date());
        console.log(product3);
        product1.createProduct();
        product2.createProduct();
        product3.createProduct();
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
                <p>About our product: ${product._description}</p>
                <p>${product._price} $</p>
            </div>
        `;
    });
    container.innerHTML = content;
}
let allProducts = LocalStorage.selectAllProduct();
displayProducts(allProducts);
