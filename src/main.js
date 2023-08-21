import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.scss";
import App from "./App.vue";
import Home from "./pages/Home.vue";
import LikeThis from "./pages/LikeThis.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/like-this", component: LikeThis },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
});

createApp(App).use(router).mount("#app");
