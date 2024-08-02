interface IProduct {

    _title: string;
    _description: string;
    _price: number; 
    _stock: number;
    _rated: number;
    _available: boolean;
    _image: string;
    _expire: Date;
    _added: Date;

    createProduct(): void;
    updateProduct(): void;
    deleteProduct(): void;

}

export default IProduct ;