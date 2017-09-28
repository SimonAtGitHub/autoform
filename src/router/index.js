import Vue from 'vue';
import Router from 'vue-router';



import Test from './pages/test/test';
import Test1 from './pages/test/test1';
import Test2 from './pages/test/test2';

Vue.use(Router);

let routes = [{
    path: '/test/test',
    component: Test
}, {
    path: '/test/test1',
    component: Test1
}, {
    path: '/test/test2',
    component: Test2
}, {
    path: '/hotel/overseas/taskmanage',
    component: hotelOverseasTaskManage,
    meta: {
        menuUrl: '/tdc/hotelmatch/oversea/api/v1/menus',
        activeMenu: 3

    }
}, {
    path: '*',
    component: notFound
}];

export default new Router({
    routes
});