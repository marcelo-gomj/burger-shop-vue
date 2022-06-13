import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "../views/HomeView.vue";

const routes = [
    {
        path : "/",
        name : "HomeView",
        component : HomeView
    },{
        path : "/pedidos",
        name : "PedidosView",
        component : () => import("../views/PedidosView.vue")
    }
]

const router = createRouter({
    history : createWebHistory(process.env.BASE_URL),
    routes
})

export default router;