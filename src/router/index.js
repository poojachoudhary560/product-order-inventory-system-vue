import Vue from 'vue'
import Router from 'vue-router';

import HomePage from '../components/HomePage';
import ProductList from '../components/ProductList';
import ProductTypeList from '../components/ProductTypeList';
import UserList from '../components/UserList'
import ProductInfo from '../products/ProductInfo'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage
        },
        {
            path: '/product/:productType/:id',
            name: 'ProductInfo',
            component: ProductInfo
        },
        {
            path: '/products',
            name: 'Products',
            component: ProductList
        },
        {
            path: '/types',
            name: 'ProductTypeList',
            component: ProductTypeList
        },
        {
            path: '/users',
            name: 'Users',
            component: UserList
        },
    ],
});