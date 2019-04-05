import Vue from "vue";
import Vuex from "vuex";
import { IModule } from "./types";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        raw: {} as any,
        loadedModule: null as IModule|null
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
        setModule(state, [value, module]) {
            state.raw = value;
            state.loadedModule = module;
        }
    },
    actions: {
        async loadModule({ commit }, m: IModule) {
            if (m) {
                const r = await fetch(m.file);
                if (r.ok) {
                    commit("setModule", [await r.json(), m]);
                } else {
                    commit("setModule", [null, ""]);
                }
            } else {
                commit("setModule", [null, ""]);
            }
        }
    },
});
