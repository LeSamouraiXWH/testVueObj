import VueRouter from 'vue-router'
import Vue from 'vue'

const Home = () => import('../view/home/Home')
const Carts = () => import('../view/cart/Carts')
const Profile = () => import('../view/profile/Profile')
const Category = () => import('../view/category/Category')


Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/carts',
        component:Carts
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'/category',
        component:Category
    }
]

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router