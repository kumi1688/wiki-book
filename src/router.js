import Vue from 'vue';
import VueRouter from 'vue-router';

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]

  const router = new VueRouter({
    routes // `routes: routes`의 줄임
  })

  Vue.use(VueRouter);

  export default router;