import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import test from "./test";

export default new Vuex.Store({
    state: {
        raw: test
    },
    getters: {
        reflections(state) {
            const reflections = [];
            const stack = (state.raw.children as any[]).slice();
            while (stack.length > 0) {
                const el = stack.pop();
                reflections[el.id] = el;
                if (el.children) { el.children.forEach((c: any) => stack.push(c)); }
            }
            return reflections;
        }
    },
    mutations: {

    },
    actions: {

    },
});
