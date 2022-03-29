import { createRouter, createWebHistory } from "vue-router";
// Ici, on importe les composants qu'on veut configurer
// Dans ce cas, ce sera Accueil et Calculatrice
// import Retrieve from "./Retrieve.vue";
import Home from "./App.vue";

// Nous créons d'abord nos Routes
const routes = [

  {
    path: "/",
    component: Home,
  },

  {
    path: "/",
    component: Home,
  },
];

export default createRouter({

  history: createWebHistory(),

  routes,
});