import Vue from "vue";
import RouteMapper from "@/routeMapper";
import { IReflection } from "@/types";

export default Vue.extend({
    props: ["id", "reflection"],
    render(h) {
        const reflection = this.reflection || this.$store.getters.reflections[this.id] as IReflection;
        if (reflection && RouteMapper.has(reflection.kind)) {
            const to = { name: RouteMapper.get(reflection.kind)!, params: { name: reflection.name } };
            return h("router-link", { props: { to } }, this.$slots.default);
        } else {
            return h("span", this.$slots.default);
        }
    }
});
