import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        redirect:"/Home",
        path: '/',
        name: 'Main',
        component:()=>import("@/views/Main.vue"),
        children:[
            {
                path: '/home',
                name: 'Home',
                component:()=>import("@/views/Home.vue")
            },
            {
                path: '/intro',
                name: 'Intro',
                component:()=>import("@/views/Intro.vue")
            },
            {
                path: '/form',
                name: 'Form',
                component:()=>import("@/views/Form.vue")
            },
            {
                path: '/news',
                name: 'News',
                component:()=>import("@/views/News.vue")
            },
            {
                path: '/info',
                name: 'Info',
                component:()=>import("@/views/Info.vue")
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// export give main.js
export default router