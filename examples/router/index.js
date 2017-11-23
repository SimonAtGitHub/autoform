import Vue from 'vue'
import Router from 'vue-router'
import Demo from '../pages/demo.vue'
import Demo2 from '../pages/demo2.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'default',
            component: Demo
        },
        {
            path: '/demo',
            name: 'Demo',
            component: Demo
        },
        {
            path: '/demo2',
            name: 'Demo2',
            component: Demo2
        }
    ]
})
