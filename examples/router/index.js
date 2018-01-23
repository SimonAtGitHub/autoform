import Vue from 'vue'
import Router from 'vue-router'
import Demo from '../pages/demo.vue'
import Demo2 from '../pages/demo2.vue'
import Demo3 from '../pages/demo3.vue'
import Remote from '../pages/remote.vue'
import Tab1 from '../pages/tab1.vue'

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
        },
        {
            path: '/demo3',
            name: 'Demo3',
            component: Demo3
        },
        {
            path: '/remote',
            name: 'Remote',
            component: Remote
        },
        {
            path: '/tab1',
            name: 'Tab1',
            component: Tab1
        }
    ]
})
