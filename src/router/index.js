import { createRouter, createWebHistory } from "vue-router";

import AboutPage from "../pages/AboutPage.vue";
import ContactPage from "../pages/ContactPage.vue";
import ServicesPage from "../pages/ServicesPage.vue";
import HomePage from "../pages/HomePage.vue";
import MixTapes from "../pages/MixTapes.vue";
import NotFound from "../pages/NotFound.vue";

const routes = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        component: HomePage,
        meta: {
            title: "Home",
        },
    },
    {
        path: "/about",
        component: AboutPage,
        meta: {
            title: "About",
        },
    },
    {
        path: "/services",
        component: ServicesPage,
        meta: {
            title: "Services",
        },
    },
    {
        path: "/mixtapes",
        component: MixTapes,
        meta: {
            title: "Mixtapes",
        },
    },
    {
        path: "/contact",
        component: ContactPage,
        meta: {
            title: "Contact",
        },
    },
    {
        path: "/:notFound(.*)",
        component: NotFound,
        meta: {
            title: "Not Found",
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | DJ Xboy`;
    next();
});

export default router;
