import Vue from "vue";

export default Vue.extend({
    props: ["type"],
    render(h) {
        let el;
        if (this.type.id) {
            // this is a reference
            el = h("reference-renderer", { props: {
                text: this.type.name,
                id: this.type.id
            } });
        } else if (this.type.type === "array") {
            el = h("span", [
                h("type-renderer", { props: { type: this.type.elementType } }),
                h("span", "[]")
            ]);
        } else {
            el = h("span", this.type.name);
        }
        if (this.type.typeArguments) {
            const elements = [el, h("span", { staticClass: "shy" }, "<")];
            this.type.typeArguments.forEach((ta: any, i: number) => {
                elements.push(
                    h("type-renderer", { props: { type: ta } }),
                    h("span", { staticClass: "shy" }, ", ")
                );
            });
            elements.pop();
            elements.push(h("span", { staticClass: "shy" }, ">"));
            return h("span", elements);
        } else {
            return el;
        }
    }
});
