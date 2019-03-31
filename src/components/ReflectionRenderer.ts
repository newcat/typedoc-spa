import Vue from "vue";
import { Kind } from "@/types";

export default Vue.extend({
    functional: true,
    props: ["reflection"],
    render(h, context) {

        let component;
        const kind = context.props.reflection.kind;
        if (kind & Kind.ClassOrInterface) {
            component = "class-reflection";
        } else if (kind & Kind.VariableOrProperty) {
            component = "property-reflection";
        } else if (kind & Kind.FunctionOrMethod) {
            component = "method-reflection";
        } else if (kind & Kind.Enum) {
            component = "enum-reflection";
        } else {
            // tslint:disable-next-line: no-console
            console.warn("Unsupported reflection type", context.props.reflection.kind);
            return h("p", "Unsupported");
        }

        return h(component, { props: { reflection: context.props.reflection } });

    }
});
