import { createStore } from 'vuex'

export default createStore({
  state: {
    Products: [
        {
            id: 1,
            title: 'Product 1',
            slug: 'product-1',
            description: 'This is the description of product 1',
            price: 100,
            quantity: 10,
            stars: 4,
            available: true,
            imagePath: 'https://via.placeholder.com/150',
            expirationDate: '2022-12-31',
            addDate: '2021-01-01',
            category: 'Category 1'
        },
        {
            id: 2,
            title: 'Product 2',
            slug: 'product-2',
            description: 'This is the description of product 2',
            price: 200,
            quantity: 20,
            stars: 3,
            available: false,
            imagePath: 'https://via.placeholder.com/150',
            expirationDate: '2022-12-31',
            addDate: '2021-01-01',
            category: 'Category 1'
        },
        {
            id: 3,
            title: 'Product 3',
            slug: 'product-3',
            description: 'This is the description of product 3',
            price: 300,
            quantity: 30,
            stars: 5,
            available: true,
            imagePath: 'https://via.placeholder.com/150',
            expirationDate: '2022-12-31',
            addDate: '2021-01-01',
            category: 'Category 2'
        },
        {
            id: 4,
            title: 'Product 4',
            slug: 'product-4',
            description: 'This is the description of product 4',
            price: 400,
            quantity: 40,
            stars: 2,
            available: false,
            imagePath: 'https://via.placeholder.com/150',
            expirationDate: '2022-12-31',
            addDate: '2021-01-01',
            category: 'Category 2'
        },
        {
            id: 5,
            title: 'Product 5',
            slug: 'product-5',
            description: 'This is the description of product 5',
            price: 500,
            quantity: 50,
            stars: 1,
            available: true,
            imagePath: 'https://via.placeholder.com/150',
            expirationDate: '2022-12-31',
            addDate: '2021-01-01',
            category: 'Category 3'
        }
    ]
  },
  getters: {
  },
  mutations: {
        addProduct(state, product) {
            state.Products.push(product);
        },
        removeProduct(state, product) {
            state.Products = state.Products.filter(p => p.slug !== product.slug);
        },
        updateQuantity(state, { product, quantity }) {
            const index = state.Products.findIndex(p => p.slug === product.slug);
            if (typeof quantity !== 'number') {
                quantity = parseInt(quantity);
            };
            state.Products[index].quantity = quantity;
            if (quantity === 0) {
                state.Products[index].available = false;
            } else {
                state.Products[index].available = true;
            };
        },
        updateStars(state, { product, stars }) {
            const index = state.Products.findIndex(p => p.slug === product.slug);
            if (typeof stars !== 'number') {
                stars = parseInt(stars);
            };
            if (stars < 0 || stars > 5) {
                return;
            };
            state.Products[index].stars = stars;
        }
    },
  actions: {
  },
  modules: {
  }
})