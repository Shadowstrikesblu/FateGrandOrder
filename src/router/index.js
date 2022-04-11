import { createRouter, createWebHistory } from "vue-router";

import Home from '../App.vue';
import Details from '../components/Details.vue';
import Servants from '../components/Servants.vue';
// Nous créons d'abord nos Routes
const routes = [
  {
    path: "/",
    component: Home,
  },

  {
    name:'Details',
    path: "/Details/:name",
    component:Details,
    props:true,
  },
  {
    path:"/Servants",
    component:Servants,
  }
];

// export default createRouter({
//   history: createWebHistory(),
//   routes,
// });
export default  createRouter({
  history: createWebHistory(),
  routes,
})

// export default router;

// app.use(router)
// app.mount("#app")