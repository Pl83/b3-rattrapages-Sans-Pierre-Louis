import LocalStorage from './LocalStorage.js';
class Product {
    constructor(_title, _slug, _description, _price, _stock, _rated, _available, _image, _expire, _added) {
        this._title = _title;
        this._slug = _slug;
        this._description = _description;
        this._price = _price;
        this._stock = _stock;
        this._rated = _rated;
        this._available = _available;
        this._image = _image;
        this._expire = _expire;
        this._added = _added;
    }
    createProduct() {
        try {
            console.log('createProduct');
            LocalStorage.createProduct(this);
        }
        catch (e) {
            console.error(e);
        }
    }
    updateProduct() {
        console.log('updateProduct');
        LocalStorage.update(this);
    }
    deleteProduct() {
        console.log('deleteProduct');
        LocalStorage.delete(this);
    }
    get getTitle() {
        return this._title;
    }
    get getSlug() {
        return this._slug;
    }
    get getDescription() {
        return this._description;
    }
    get getPrice() {
        return this._price;
    }
    get getStock() {
        return this._stock;
    }
    get getRated() {
        return this._rated;
    }
    get getAvailable() {
        return this._available;
    }
    get getImage() {
        return this._image;
    }
    get getExpire() {
        return this._expire;
    }
}
export default Product;
