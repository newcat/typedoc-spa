import Vue from "vue";
import { Kind } from "../types";

const colors = {
    clazz: "lightskyblue",
    interface: "limegreen",
    enumeration: "orange",
    default: "purple"
};

const mapping = new Map([
    [Kind.Enum, { icon: "layer-group", color: colors.enumeration }],
    [Kind.EnumMember, { icon: "stop-circle", color: colors.enumeration }],
    [Kind.Class, { icon: "dice-d6", color: colors.clazz }],
    [Kind.Interface, { icon: "cube", color: colors.interface }],
    [Kind.Property, { icon: "dot-circle", color: colors.clazz }],
    [Kind.Method, { icon: "play-circle", color: colors.clazz }],
    [Kind.CallSignature, { icon: "play-circle", color: colors.clazz }],
    [Kind.Constructor, { icon: "plus-circle", color: colors.clazz }],
    [Kind.ConstructorSignature, { icon: "plus-circle", color: colors.clazz }],
    [Kind.Accessor, { icon: "exchange-alt", color: colors.clazz }],
    [Kind.SetSignature, { icon: "exchange-alt", color: colors.clazz }],
    [Kind.GetSignature, { icon: "exchange-alt", color: colors.clazz }],
    [Kind.ObjectLiteral, { icon: "code", color: colors.default }],
    [Kind.Variable, { icon: "dot-circle", color: colors.default }],
    [Kind.Function, { icon: "play-circle", color: colors.default }],
    [Kind.TypeAlias, { icon: "vector-square", color: colors.default }]
]);

export default Vue.extend({
    props: ["kind"],
    render(h) {
        const { icon, color } = mapping.get(this.kind) || { icon: "poo", color: "red" };
        return h("span", { staticClass: `fas fa-${icon}`, style: `color: ${color};` });
    }
});
