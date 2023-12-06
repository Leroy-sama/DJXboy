import { createRouter, createWebHistory } from "vue-router";

import AboutPage from "../pages/AboutPage.vue";
import ContactPage from "../pages/ContactPage.vue";
import EventsPage from "../pages/EventsPage.vue";
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
    },
    {
        path: "/about",
        component: AboutPage,
    },
    {
        path: "/events",
        component: EventsPage,
    },
    {
        path: "/mixtapes",
        component: MixTapes,
    },
    {
        path: "/contact",
        component: ContactPage,
    },
    {
        path: "/:notFound(.*)",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
