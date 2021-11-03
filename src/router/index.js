import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import {userInfo} from '../service/api'

import Home from '@/views/home/Home.vue'
import Detail from "@/views/detail/detail.vue"
import Space from "@/views/user-space/space.vue"
import Login from "@/views/user-login/index.vue"
import Edit from "@/views/user-space/edit.vue"
import Create from "@/views/create/create.vue"
import Recipe from "@/views/recipe/recipe.vue"
import Store from "@/store"
import MenuList from '@/views/user-space/menu-list.vue'
import Fans from '@/views/user-space/fans.vue'
import Car from '@/views/car/car.vue'
const router = new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            name: "Home",
            component: Home
        },
        {
            path: "/recipe",
            name: "recipe",
            component: Recipe
        },
        {
            path: "/detail",
            name: "detail",
            component: Detail
        },
        {
            path: "/space",
            name: "space",
            component: Space,
            redirect:{
                name:'works'
            },
            meta:{
                login:true
            },
            children:[
                {
                    path: "works",
                    name: "works",
                    component: MenuList,
                    meta:{
                        login:true
                    },
                },
                {
                    path: "fans",
                    name: "fans",
                    component: Fans,
                    meta:{
                        login:true
                    }
                },
                {
                    path: "following",
                    name: "following",
                    component: Fans,
                    meta:{
                        login:true
                    }
                },
                {
                    path:"collection",
                    name:"collection",
                    component:MenuList,
                    meta:{
                        login:true
                    }
                }
            ]
        },
        {
            path: "/edit",
            name: "edit",
            component: Edit,
        },
        {
            path: "/create",
            name: "create",
            component: Create
        },
        {
            path: "/login",
            name: "login",
            component: Login,
        },
        {
            path:"/car",
            name:"car",
            component:Car
        }
    ]
});
//路由守卫
router.beforeEach(async (to, from, next) => {
    //next() :是否通过  
    //  参数   ：无         通过
    //          false       不通过
    //          具体地址     跳转到指定的地址

    /*
    验证登录
    有些路由是需要登录的，判断登录状态
        1，没有登录：跳转到登录页
        2，登录，直接进入
    有些路由不需要登录，直接进入；
    ps:是否需要登录 --meta
    
    
    */
    const token = localStorage.getItem('token');
    const isLogin = !!token;
    //进入路由的时候，需要向后端发送token，验证是否合法
    const data = await userInfo();
    Store.commit('chageUserInfo', data.data);
    if (to.matched.some(item => item.meta.login)) { //需要登录


        if (isLogin) { //已经登录的 直接通过
            if (data.error === 400) { //后端告诉你，登录不成功
                next({
                    name: 'login'
                });
                localStorage.removeItem();
                return;
            }
            if (to.name === 'login') {
                next({
                    name: 'Home'
                })
            } else {
                next()
            }
            console.log('1')
            return
        }
        if (!isLogin && to.name === 'login') { //未登录，但是要去登录页
            next()
        }
        if (!isLogin && to.name !== 'login') { //未登录，去的也不是登录页
            next({
                name: 'login'
            });
        }
    } else {
        next()
    }
})
export default router;