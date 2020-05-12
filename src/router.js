import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{ 
    path: '/', 
    component: () => import('@/components/main.vue'),
    children: [
        {
            name: 'main',
            path: '',
            component: () => import('./components/books/dashboard.vue')
        },
        {
            name: 'book1',
            path: '/book1',
            component: () => import('./components/books/book1.vue')
        },
        {
            name: 'book2',
            path: '/book2',
            component: () => import('./components/books/book2.vue')
        },
        
    ]}
  ]

  const router = new VueRouter({
    routes, // `routes: routes`의 줄임
    // scrollBehavior: (to, from, savedPosition) => {
    //     let scrollTo = 0
    
    //     if (to.hash) {
    //       scrollTo = to.hash
    //     } else if (savedPosition) {
    //       scrollTo = savedPosition.y
    //     }
    
    //     return goTo(scrollTo)
    //   },
  })

  export default router;