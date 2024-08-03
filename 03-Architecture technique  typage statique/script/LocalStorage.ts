import Product from "./Product";

class LocalStorage {

    constructor(private listProduct: Product[]) {
    }

    public static createProduct(product:Product):Product {
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
        allProducts = allProducts.filter((item:Product) => item.getTitle !== product.getTitle);
        localStorage.setItem('products', JSON.stringify(allProducts));
        return 'Product deleted' + product.getTitle;
    }

    public static update(product:Product):string {
        let allProducts : any = localStorage.getItem('products') || '[]';
        allProducts = JSON.parse(allProducts);
        allProducts = allProducts.map((item:Product) => {
            if(item.getTitle === product.getTitle) {
                return product;
            }
            return item;
        });
        localStorage.setItem('products', JSON.stringify(allProducts));
        return 'Product updated' + product.getTitle;
    }

}

export default LocalStorage;