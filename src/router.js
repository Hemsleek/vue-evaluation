import { createWebHistory, createRouter } from 'vue-router'

import HomePage from './pages/index.vue'
import ProductDetail from './pages/productDetail.vue'
import SearchResult from './pages/searchResult.vue'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/product-detail',
        name: 'ProductDetail',
        component: ProductDetail
    },
    {
        path: '/search-result',
        name: 'SearchResult',
        component: SearchResult
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
