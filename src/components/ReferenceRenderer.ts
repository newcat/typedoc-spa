import Vue from "vue";

export default Vue.extend({
    props: ["text", "id"],
    render(h) {
        // TODO
        return h("a", { domProps: { href: "#" } }, this.text);
    }
});
