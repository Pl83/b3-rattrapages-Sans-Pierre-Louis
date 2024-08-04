import LocalStorage from "./LocalStorage";
import Product from "./Product";

try {
    localStorage.getItem('products');
    console.log('localStorage not empty');
    if(!localStorage.getItem('products')) {
        console.log('localStorage empty');
        localStorage.setItem('products', JSON.stringify([]));
        let product1 = new Product('Product 1', 'product-1', 'description1', 100, 10, 5, true, 'https://via.placeholder.com/200', new Date(), new Date());
        let product2 = new Product('Product 2', 'product-2', 'description2', 200, 20, 4, true, 'https://via.placeholder.com/200', new Date(), new Date());
        let product3 = new Product('Product 3', 'product-3', 'description3', 300, 30, 3, true, 'https://via.placeholder.com/200', new Date(), new Date());
        let product4 = new Product('Product 4', 'product-4', 'description4', 400, 0, 2, false, 'https://via.placeholder.com/200', new Date(), new Date());
        let product5 = new Product('Product 5', 'product-5', 'description5', 500, 50, 1, true, 'https://via.placeholder.com/200', new Date(), new Date());
        let product6 = new Product('Product 6', 'product-6', 'description6', 600, 0, 5, false, 'https://via.placeholder.com/200', new Date(), new Date());

        product1.createProduct();
        product2.createProduct();
        product3.createProduct();
        product4.createProduct();
        product5.createProduct();
        product6.createProduct();
    }
} catch (e) {
    console.error(e);
}

const overlay = (<HTMLInputElement>document.querySelector('.overlay'));
const aside = (<HTMLInputElement>document.querySelector('aside'));
const formStock = (<HTMLInputElement>document.querySelector('.formStock'));
const showForm = (<HTMLInputElement>document.getElementById('showForm'));
overlay.addEventListener('click', (e) => {
    aside.style.display = 'none';
    overlay.style.display = 'none';
    formStock.style.display = 'none';
});

showForm.addEventListener('click', (e) => {
    aside.style.display = 'block';
    overlay.style.display = 'block';
});

function displayProducts(array : any) {
    const container = (<HTMLInputElement>document.getElementById('productsList'));
    let content : string = '';
    array.forEach((product:Product) => {
        let shortDate : any = product._added
        shortDate = shortDate.toString();
        shortDate = shortDate.toString();
        shortDate = shortDate.slice(0, 10);
        content += `
            <div class="product">
                <h2>${product._title}</h2>
                <div>
                <section>
                <img src="${product._image}" alt="${product._title}" loading="lazy">
                <section>
                    <button class="delete ${product._slug}">Delete</button>
                    <button class="update ${product._slug}">Update</button>
                </section>
                </section>
                <ul>
                    <li class="available"></li>
                    <li>${product._price} $(USD)</li>
                    <li>${product._rated}/5 ⭐</li>
                    <li class="peremption">Expire in:</li>
                    <li>About this product: ${product._description}</li>
                    <li>Added on: ${shortDate}</li>
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
        if(array[i]._available) {
            available.innerHTML = `${array[i]._stock} left in stock`;
        } else {
            available.innerHTML = 'Sorry we are out of stock';
        }
        i++;
    });
    let deleteButtons = (<HTMLCollection>document.getElementsByClassName("delete"));
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', (e) => {
            let slug = deleteButtons[i].classList[1];
            let product = array.find((product:Product) => product._slug === slug);
            console.log(product);
            LocalStorage.delete(product);
            allProducts = LocalStorage.selectAllProduct();
            displayProducts(allProducts);
        });
    }

    let updateButtons = (<HTMLCollection>document.getElementsByClassName("update"));
    for (let i = 0; i < updateButtons.length; i++) {
        updateButtons[i].addEventListener('click', (e) => {
            let slug = updateButtons[i].classList[1];
            let product = array.find((product:Product) => product._slug === slug);
            let formStock = (<HTMLInputElement>document.querySelector('.formStock'));

            overlay.style.display = 'block';
            formStock.style.display = 'block';

            let updetabtn = (<HTMLInputElement>document.getElementById('updateStock'));
            let newStock = (<HTMLInputElement>document.getElementById('newStock'));

            updetabtn.addEventListener('click', (e) => {
                let newStockValue = parseInt(newStock.value);
                product._stock = newStockValue;
                LocalStorage.update(product);
                allProducts = LocalStorage.selectAllProduct();
                displayProducts(allProducts);
                overlay.style.display = 'none';
                formStock.style.display = 'none';
            });
        });
    }

}

function addProduct() {
    const title = (<HTMLInputElement>document.getElementById('title')).value;
    const slug = title.toLowerCase().replace(/ /g, '-');
    const description = (<HTMLInputElement>document.getElementById('description')).value;
    const price = parseInt((<HTMLInputElement>document.getElementById('price')).value);
    const stock = parseInt((<HTMLInputElement>document.getElementById('stock')).value);
    let available = false;
    if (stock > 0) {
        available = true
    };
    const rated = parseInt((<HTMLInputElement>document.getElementById('rated')).value);
    let expireElement = document.getElementById('expire');
    let expire : any = expireElement ? (<HTMLInputElement>expireElement).value : '';
    console.log(expire);
    expire = new Date(expire);
    const image = (<HTMLInputElement>document.getElementById('image')).value;
    const added = new Date();
    let product = new Product(title, slug, description, price, stock, rated, available, image, expire, added);
    product.createProduct();
    allProducts = LocalStorage.selectAllProduct();
    displayProducts(allProducts);
}

function deleteProduct(product:Product) {
    product.deleteProduct();
    allProducts = LocalStorage.selectAllProduct();
    displayProducts(allProducts);
}

let allProducts = LocalStorage.selectAllProduct();
displayProducts(allProducts);

const createProduct = (<HTMLInputElement>document.getElementById('createProduct'));
createProduct.addEventListener('click', (e) => {
    addProduct();
});

