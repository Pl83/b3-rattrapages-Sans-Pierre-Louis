import IProduct from './IProduct';
import LocalStorage from './LocalStorage';

class Product implements IProduct {
    
    constructor(readonly _title: string, readonly _slug: string, readonly _description: string, readonly _price: number, readonly _stock: number, readonly _rated: number, readonly _available: boolean, readonly _image: string, readonly _expire: Date, readonly _added: Date) {
        
    }
    createProduct(): void {
        try {
            console.log('createProduct');
            LocalStorage.createProduct(this);
        } catch (e) {
            console.error(e);
        }
    }
    updateProduct(): void {
        console.log('updateProduct');
        LocalStorage.update(this);
    }
    deleteProduct(): void {
        console.log('deleteProduct');
        LocalStorage.delete(this);
    }

    get getTitle(): string {
        return this._title;
    }

    get getSlug(): string {
        return this._slug;
    }

    get getDescription(): string {
        return this._description;
    }

    get getPrice(): number {
        return this._price;
    }

    get getStock(): number {
        return this._stock;
    }

    get getRated(): number {
        return this._rated;
    }

    get getAvailable(): boolean {
        return this._available;
    }

    get getImage(): string {
        return this._image;
    }

    get getExpire(): Date {
        return this._expire;
    }

}

export default Product ;