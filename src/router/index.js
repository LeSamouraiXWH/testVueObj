
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
    {
        path:"",
        redirect:'/home'},
    {
        path:"/home",
        component:()=>import('../components/HelloWorld'),
        children:[
            {
                path:'',
                redirect:'message1'
            },
            {
                path:'message1',
                component:()=>import('../components/Message1')
            },
            {
                path:'message2',
                component:()=>import('../components/Message2')
            }
        ]

    },
    {
        path:"/about/:id",
        component:()=>import('../components/About'),

    }
]

const routers =  new VueRouter({
    routes,
    mode:'history'
})

export default routers
