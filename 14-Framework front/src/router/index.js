import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '../views/ProductsView.vue'
import ProductView from '../views/ProductView.vue'

const routes = [
    {
        path: '/',
        name: 'Products',
        component: ProductsView
    },
    { 
        path: '/product/:slug',
        name: 'Product',
        component: ProductView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router