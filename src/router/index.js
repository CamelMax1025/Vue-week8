import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/login',
    component: () => import('../views/FrontView/LoginView.vue'),
  },
  // DashBoard Pages
  {
    path: '/admin',
    component: () => import('../views/DashBoardView/AdminDashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/DashBoardView/AdminProducts.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/DashBoardView/AdminOrders.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/DashBoardView/AdminCoupons.vue'),
      },
      {
        path: 'article',
        component: () => import('../views/DashBoardView/AdminArticle.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/FrontView/HomeView.vue')
      }
      ,
      {
        path: 'cart',
        component: () => import('../views/FrontView/UserCart.vue'),
      },
      {
        path: 'checkout',
        component: () => import('../views/FrontView/CheckOutView.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('../views/FrontView/ProductView.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/FrontView/ProductsView.vue')
      },
      {
        path: 'checkoutsuccess',
        component: () => import('../views/FrontView/CheckOutSuccessView.vue'),
      },

    ],
  },
  {
    path: '/admin/:pathMatch(.*)*',
    redirect: { name: 'Login' },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
