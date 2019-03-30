import Vue from "vue";
import { Kind } from "@/types";

export default Vue.extend({
    functional: true,
    props: ["entity"],
    render(h, context) {

        let component;
        const kind = context.props.entity.kind;
        if (kind & Kind.ClassOrInterface) {
            component = "class-entity";
        } else if (kind & Kind.VariableOrProperty) {
            component = "property-entity";
        } else {
            // tslint:disable-next-line: no-console
            console.warn("Unsupported entity type", context.props.entity.kind);
            return h("p", "Unsupported");
        }

        return h(component, { props: { entity: context.props.entity } });

    }
});
