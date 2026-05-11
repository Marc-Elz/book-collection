import Overview from "./pages/Overview.vue";
import Create from "./pages/Create.vue";

export const bookRoutes = [
    { path: "/books", component: Overview, name: "books.overview" },
    { path: "/create", component: Create, name: "books.create" },
];
