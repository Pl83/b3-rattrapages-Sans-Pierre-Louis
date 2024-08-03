class LocalStorage {
    constructor(listProduct) {
        this.listProduct = listProduct;
    }
    static createProduct(product) {
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
