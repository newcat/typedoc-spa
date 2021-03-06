import { CreateElement } from "vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { IType } from "@/types";

import SignaturePreview from "./reflections/signature/Preview.vue";

@Component
export default class TypeRenderer extends Vue {

    @Prop()
    type!: IType;

    render(h: CreateElement) {
        return this.renderType(h, this.type);
    }

    renderType(h: CreateElement, t: IType) {
        const elements: any = [];
        if (!t) { return null; }

        if (t.id) {
            // this is a reference
            elements.push(h("reference-renderer", { props: { id: t.id } }, [
                h("span", { slot: "default" }, t.name)
            ]));
        } else if (t.type === "array") {
            elements.push(h("span", [
                this.renderType(h, t.elementType),
                h("span", "[]")
            ]));
        } else if (t.type === "union") {
            t.types.forEach((ut) => {
                elements.push(
                    this.renderType(h, ut),
                    h("span", { domProps: { innerHTML: "&nbsp;|&nbsp;" } })
                );
            });
            elements.pop();
        } else if (t.type === "reflection") {
            const d = t.declaration!;
            if (d.signatures) {
                d.signatures.forEach((s) => {
                    elements.push(h(SignaturePreview, { props: { signature: s } }));
                });
            }
        } else {
            elements.push(h("span", t.name));
        }

        if (t.typeArguments) {
            elements.push(h("span", { staticClass: "shy" }, "<"));
            t.typeArguments.forEach((ta: any, i: number) => {
                elements.push(
                    this.renderType(h, ta),
                    h("span", { staticClass: "shy" }, ", ")
                );
            });
            elements.pop();
            elements.push(h("span", { staticClass: "shy" }, ">"));
        }

        if (elements.length === 1) {
            return elements[0];
        } else {
            return h("span", elements);
        }

    }

}
