import Vue from "vue";
import Router from "vue-router";

import RouteMapper from "./routeMapper";

Vue.use(Router);

const routes = Array.from(RouteMapper.entries())
    .map(([k, v]) => ({ path: `:module/${v}/:name`, name: v }));

routes.push({ path: "/:module/", name: "home" });

export default new Router({
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0,
        };
    }
});
