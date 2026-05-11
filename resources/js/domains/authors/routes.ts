import Overview from "./pages/Overview.vue";
import Create from "./pages/Create.vue";
import Edit from "./pages/Edit.vue";

export const authorRoutes = [
    { path: "/authors", component: Overview, name: "authors.overview" },
    { path: "/create", component: Create, name: "authors.create" },
    { path: "/authors/:id/edit", component: Edit, name: "authors.edit"},
];
