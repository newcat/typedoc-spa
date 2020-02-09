<template lang="pug">
    el-container
        el-header(height="70px").flex.aic.header
            h1.c-pointer.flex-grow(@click="go(-1)") {{ loadedModule ? loadedModule.name : "" }}
            el-select.ml2(:value="selectedModuleName", @change="onSelectedModuleChanged", placeholder="Module")
                el-option(v-for="m in modules", :key="m.name", :label="m.name", :value="m.name")
        el-container(v-loading="loading")
            el-aside.aside
                el-menu.no-border(:default-active="reflection ? reflection.id.toString() : '-1'")
                    el-menu-item(index="-1", @click="go(-1)") Home
                    el-submenu(v-for="(group, i) in (raw ? raw.groups : [])", :key="i", :index="'h' + i.toString()")
                        template(slot="title") {{ group.title }}
                        el-menu-item(v-for="n in group.children", :key="n", :index="n.toString()", @click="go(n)")
                            type-icon.mr1(:kind="getReflection(n).kind")
                            | {{ getReflection(n).name }}
            el-main
                reflection-renderer(v-if="reflection" :reflection="reflection")
                table-of-contents(v-else-if="loadedModule", :reflections="raw.children")
                    template(v-slot:default="{ reflection }")
                        reference-renderer(:reflection="reflection")
                            type-icon.mr1(:kind="reflection.kind")
                            | {{ reflection.name }}
                el-alert(v-else-if="!loading", type="warning", show-icon) Module "{{ $route.params.module }}" not found
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import "./components/index";
import { Kind, IReflection, IContainerReflection, IModule } from "@/types";
import RouteMapper from "@/routeMapper";
import findReflection from "@/reflectionFinder";

@Component
export default class App extends Vue {

    reflection: IReflection|null = null;
    notFound = true;

    reverseMap = new Map<string, Kind>(Array.from(RouteMapper.entries()).map(([k, v]) => ([v, k] as [string, Kind])));

    modules = (window as any).$typedoc.modules as IModule[];
    selectedModuleName = "";

    get raw() {
        return this.$store.state.raw as IReflection|null;
    }

    get loadedModule() {
        return this.$store.state.loadedModule;
    }

    get loading() {
        return this.$store.state.loading;
    }

    getReflection(id: number) {
        return this.$store.getters.reflections[id] as IReflection;
    }

    @Watch("$route", { immediate: true })
    async onRouteUpdate() {
        const r = this.$route;

        if (!r.params.module && this.modules.length > 0) {
            this.$router.replace({ name: "home", params: { module: this.modules[0].name } });
            return;
        }

        if ((this.loadedModule && this.loadedModule.name) !== r.params.module) {
            const mod = this.modules.find((m) => m.name === r.params.module);
            await this.loadModule(mod);
        }

        if (r.name === "home") {
            this.reflection = null;
        } else if (this.raw && this.reverseMap.has(r.name || "")) {
            this.reflection = findReflection(r.params.name, [this.raw], this.reverseMap.get(r.name!)!) || null;
        } else {
            this.$router.replace({ name: "home" });
        }

    }

    onSelectedModuleChanged(value: string) {
        this.$router.push({ name: "home", params: { module: value } });
    }

    async loadModule(mod?: IModule) {
        await this.$store.dispatch("loadModule", mod);
        if (mod) { this.selectedModuleName = mod.name; }
    }

    go(n: number) {
        if (n === -1) {
            return this.$router.push({ name: "home" });
        }
        const e = this.getReflection(n);
        if (e && RouteMapper.has(e.kind)) {
            const r = RouteMapper.get(e.kind)!;
            this.$router.push({ name: r, params: { name: e.name } });
        }
    }

}
</script>
