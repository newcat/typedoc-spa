<template lang="pug">
    el-container
        el-header(height="70px").flex.aic.header
            h1.c-pointer(@click="go(-1)") {{ raw.name }}
            el-select.ml2(v-model="selectedModuleName", placeholder="Module")
                el-option(v-for="m in modules", :key="m.name", :label="m.name", :value="m.name")
        el-container
            el-aside.aside
                el-menu.no-border(:default-active="reflection ? reflection.id.toString() : '-1'")
                    el-menu-item(index="-1", @click="go(-1)") Home
                    el-submenu(v-for="(group, i) in raw.groups", :key="i", :index="'h' + i.toString()")
                        template(slot="title") {{ group.title }}
                        el-menu-item(v-for="n in group.children", :key="n", :index="n.toString()", @click="go(n)")
                            type-icon.mr1(:kind="getReflection(n).kind")
                            | {{ getReflection(n).name }}
            el-main
                reflection-renderer(v-if="reflection" :reflection="reflection")
                table-of-contents(v-else, :reflections="raw.children")
                    template(v-slot:default="{ reflection }")
                        reference-renderer(:reflection="reflection")
                            type-icon.mr1(:kind="reflection.kind")
                            | {{ reflection.name }}
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

    modules = (window as any).$typedoc.modules;
    selectedModuleName = this.modules[0].name;

    get raw() {
        return this.$store.state.raw;
    }

    get selectedModule() {
        return this.modules.find((m: any) => m.name === this.selectedModuleName);
    }

    mounted() {
        this.$store.dispatch("loadModule", this.selectedModule.file);
    }

    getReflection(id: number) {
        return this.$store.getters.reflections[id] as IReflection;
    }

    @Watch("$route", { immediate: true })
    onRouteUpdate() {
        const r = this.$route;
        if (this.reverseMap.has(r.name || "")) {
            this.reflection = findReflection(r.params.name, [this.raw], this.reverseMap.get(r.name!)!) || null;
        } else {
            this.reflection = null;
        }
    }

    @Watch("selectedModule")
    onSelectedModuleChanged() {
        this.$store.dispatch("loadModule", this.selectedModule.file);
    }

    go(n: number) {
        if (n === -1) {
            return this.$router.push("/");
        }
        const e = this.getReflection(n);
        if (e && RouteMapper.has(e.kind)) {
            const r = RouteMapper.get(e.kind)!;
            this.$router.push({ name: r, params: { name: e.name } });
        }
    }

}
</script>
