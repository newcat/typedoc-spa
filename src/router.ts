import Vue from "vue";
import Router from "vue-router";

import RouteMapper from "./routeMapper";

Vue.use(Router);

const routes = Array.from(RouteMapper.entries())
    .map(([k, v]) => ({ path: `/${v}/:name`, name: v }));

export default new Router({ routes });
