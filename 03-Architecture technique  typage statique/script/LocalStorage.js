class LocalStorage {
    constructor(listProduct) {
        this.listProduct = listProduct;
    }
    static createProduct(product) {
        // check that the price is positive and above zero, check that the stock is positive and above or equal to zero, check that the rated is between 0 and 5
        if (product.getPrice < 0) {
            throw new Error('Price must be positive');
        }
        if (product.getStock < 0) {
            throw new Error('Stock must be positive or equal to zero');
        }
        if (product.getRated < 0 || product.getRated > 5) {
            throw new Error('Rated must be between 0 and 5');
        }
        // create the product
        let allProducts = localStorage.getItem('products') || '[]';
        allProducts = JSON.parse(allProducts);
        allProducts.push(product);
        localStorage.setItem('products', JSON.stringify(allProducts));
        return product;
    }
    static selectAllProduct() {
        let allProducts = localStorage.getItem('products') || '[]';
        allProducts = JSON.parse(allProducts);
        return allProducts;
    }
    static delete(product) {
        let allProducts = localStorage.getItem('products') || '[]';
        allProducts = JSON.parse(allProducts);
        allProducts = allProducts.filter((item) => item.getTitle !== product.getTitle);
        localStorage.setItem('products', JSON.stringify(allProducts));
        return 'Product deleted' + product.getTitle;
    }
    static update(product) {
        let allProducts = localStorage.getItem('products') || '[]';
        allProducts = JSON.parse(allProducts);
        allProducts = allProducts.map((item) => {
            if (item.getTitle === product.getTitle) {
                return product;
            }
            return item;
        });
        localStorage.setItem('products', JSON.stringify(allProducts));
        return 'Product updated' + product.getTitle;
    }
}
export default LocalStorage;
