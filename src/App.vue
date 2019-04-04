<template lang="pug">
    el-container
        el-header(height="70px").flex.aic.header
            h1 {{ raw.name }}
        el-container
            el-aside.aside
                el-menu.no-border
                    el-submenu(v-for="(group, i) in raw.groups", :key="i", :index="i.toString()")
                        template(slot="title") {{ group.title }}
                        el-menu-item(v-for="n in group.children", :key="n", @click="go(n)")
                            type-icon.mr1(:kind="getReflection(n).kind")
                            | {{ getReflection(n).name }}
            el-main
                reflection-renderer(v-if="reflection" :reflection="reflection")
                el-alert(v-else, show-icon, type="warning", title="Could not find requested reflection")
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import "./components/index";
import { Kind, IReflection, IContainerReflection } from "@/types";
import RouteMapper from "@/routeMapper";
import findReflection from "@/reflectionFinder";

@Component
export default class App extends Vue {

    reflection: IReflection|null = null;
    notFound = true;

    reverseMap = new Map<string, Kind>(Array.from(RouteMapper.entries()).map(([k, v]) => ([v, k] as [string, Kind])));

    get raw() {
        return this.$store.state.raw;
    }

    getReflection(id: number) {
        return this.$store.getters.reflections[id] as IReflection;
    }

    @Watch("$route", { immediate: true })
    onRouteUpdate() {
        const r = this.$route;
        if (this.reverseMap.has(r.name || "")) {
            this.reflection = findReflection(r.params.name, [this.raw], this.reverseMap.get(r.name!)!) || null;
        }
    }

    go(n: number) {
        const e = this.getReflection(n);
        if (e && RouteMapper.has(e.kind)) {
            const r = RouteMapper.get(e.kind)!;
            this.$router.push({ name: r, params: { name: e.name } });
        }
    }

}
</script>
