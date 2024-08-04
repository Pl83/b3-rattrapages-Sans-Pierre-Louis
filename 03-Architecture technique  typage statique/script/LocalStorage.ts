import Product from "./Product";

class LocalStorage {

    constructor(private listProduct: Product[]) {
    }

    public static createProduct(product:Product):Product {
        // check that the price is positive and above zero, check that the stock is positive and above or equal to zero, check that the rated is between 0 and 5
        if(product.getPrice < 0) {
            throw new Error('Price must be positive');
        }

        if(product.getStock < 0) {
            throw new Error('Stock must be positive or equal to zero');
        }

        if(product.getRated < 0 || product.getRated > 5) {
            throw new Error('Rated must be between 0 and 5');
        }

        // create the product
        let allProducts : any = localStorage.getItem('products') || '[]';
        allProducts = JSON.parse(allProducts);
        allProducts.push(product);
        localStorage.setItem('products', JSON.stringify(allProducts));
        return product;
    }

    public static selectAllProduct():Product[] {
        let allProducts : any = localStorage.getItem('products') || '[]';
        allProducts = JSON.parse(allProducts);
        return allProducts;
    }

    public static delete(product:Product):string {
        let allProducts : any = localStorage.getItem('products') || '[]';
        allProducts = JSON.parse(allProducts);
        allProducts = allProducts.filter((item:Product) => item._title !== product._title);
        localStorage.setItem('products', JSON.stringify(allProducts));
        return 'Product deleted' + product._title;
    }

    public static update(product:Product):string {
        let allProducts : any = localStorage.getItem('products') || '[]';
        allProducts = JSON.parse(allProducts);
        let productToUpdate = allProducts.find((item:Product) => item._title === product._title);
        allProducts = allProducts.filter((item:Product) => item._title !== product._title);
        productToUpdate = product;
        if (productToUpdate._stock > 0) {
            productToUpdate._available = true;
        } else {
            productToUpdate._available = false;
        }
        allProducts.push(productToUpdate);
        localStorage.setItem('products', JSON.stringify(allProducts));
        return 'Product updated' + product._title; 
    }

}

export default LocalStorage;