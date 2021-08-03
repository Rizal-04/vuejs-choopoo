import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home";
import Container from "@/containers/the-container";
import Article from "../views/article";

Vue.use(VueRouter);

function configRouters() {
  return [
    {
      path: "/",
      redirect: "/home",
      name: "",
      component: Container,
      children: [
        {
          path: "home",
          name: "Home",
          component: Home,
        },
        {
          path: "article",
          name: "Article",
          component: Article,
        },
      ],
    },
  ];
}

const router = new VueRouter({
  mode: "history",
  routes: configRouters(),
  scrollBehavior: () => ({ y: 0 }),
});

export default router;
