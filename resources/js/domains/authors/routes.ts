import Overview from "./pages/Overview.vue";
import Create from "./pages/Create.vue";

export const authorRoutes = [
    { path: "/authors", component: Overview, name: "authors.overview" },
    { path: "/create", component: Create, name: "authors.create" },
];
