import IProduct from './Iproduct';

class Product implements IProduct {
    
    constructor(readonly _title: string, readonly _description: string, readonly _price: number, readonly _stock: number, readonly _rated: number, readonly _available: boolean, readonly _image: string, readonly _expire: Date, readonly _added: Date) {
        
    }
    createProduct(): void {
        throw new Error('Method not implemented.');
    }
    updateProduct(): void {
        throw new Error('Method not implemented.');
    }
    deleteProduct(): void {
        throw new Error('Method not implemented.');
    }

    get getTitle(): string {
        return this._title;
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