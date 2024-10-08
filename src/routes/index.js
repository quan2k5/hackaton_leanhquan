
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        redirect:"/admin"
        
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import('../views/Dashboard.vue'),
        
    },
    {
        path: '/admin/manager-user',
        name: 'manager-user',
        component: () => import('../views/manageUser.vue'),
       
    },
    {
        path: '/admin/manager-product',
        name: 'manager-product', 
        component: () => import('../views/manageProduct.vue'),
       
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: (to, from, savedPosition) => {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0, behavior: 'smooth' };
        }
    }
});

export default router;
