import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        raw: {} as any
    },
    getters: {
        reflections(state) {
            if (!state.raw.children) { return []; }
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
        setRaw(state, value) {
            state.raw = value;
        }
    },
    actions: {
        async loadModule({ commit }, file: string) {
            const r = await fetch(file);
            if (r.ok) {
                commit("setRaw", await r.json());
            }
        }
    },
});
