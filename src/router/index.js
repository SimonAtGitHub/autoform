import Vue from 'vue';
import Router from 'vue-router';


import Test from '../pages/test/test';
import Test1 from '../pages/test/test1';
import Test2 from '../pages/test/test2';

Vue.use(Router);

let routes = [
    {
        path: '/',
        component: Test
    },
    {
        path: '/query',
        component: Test1
    },
    {
        path: '/form',
        component: Test2
    }
];

export default new Router({
    routes
});