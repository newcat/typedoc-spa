import Vue from "vue";
import RouteMapper from "@/routeMapper";
import { IReflection } from "@/types";

export default Vue.extend({
    props: ["text", "id"],
    render(h) {
        const e = this.$store.getters.reflections[this.id] as IReflection;
        if (e && RouteMapper.has(e.kind)) {
            const to = { name: RouteMapper.get(e.kind)!, params: { name: e.name } };
            return h("router-link", { props: { to } }, this.text);
        } else {
            return h("span", this.text);
        }
    }
});
