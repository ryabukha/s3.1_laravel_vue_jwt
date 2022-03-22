import Vue from "vue";
import VueRouter from "vue-router";
import {next} from "lodash/seq";

Vue.use(VueRouter)

const route = new VueRouter({
    mode: "history",

    routes: [
        {
            path: '/', component: () => import('./components/Index'),
            name: 'index'
        },
        {
            path: '/fruits', component: () => import('./components/Fruit/IndexComponent'),
            name: 'fruit.index'
        },
        {
            path: '/users/login', component: () => import('./components/User/LoginComponent'),
            name: 'user.login'
        },
        {
            path: '/users/registration', component: () => import('./components/User/RegistrationComponent'),
            name: 'user.registration'
        },
        {
            path: '/users/personal', component: () => import('./components/User/PersonalComponent'),
            name: 'user.personal'
        },
        {
            path: '*', component: () => import('./components/User/PersonalComponent'),
            name: '404'
        }
    ]
})

route.beforeEach((to, from, next) => {
    const accessToken = localStorage.getItem('access_token')

    if (!accessToken) {
        if (to.name === 'user.login' || to.name === 'user.registration') {
            return next()
        } else {
            return next({name: 'user.login'})
        }
    }

    if (to.name === 'user.login' || to.name === 'user.registration' && accessToken) {
        return next({name: 'user.personal'})
    }
    next()
})

export default route
