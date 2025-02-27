import { createRouter } from "vue-router";
import { createWebHashHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;