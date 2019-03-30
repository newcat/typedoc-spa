<template lang="pug">
    el-container
        el-header
            h1 {{ raw.name }}
        el-container
            el-aside
                el-menu
                    el-submenu(v-for="(group, i) in raw.groups", :key="i", :index="i.toString()")
                        template(slot="title") {{ group.title }}
                        el-menu-item(v-for="n in group.children", :key="n") {{ getEntity(n).name }}
            el-main
                entity-renderer(:entity="raw.children[4]")
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import "./components/index";

@Component
export default class App extends Vue {

    get raw() {
        return this.$store.state.raw;
    }

    getEntity(id: number) {
        return this.$store.getters.entities[id];
    }

}
</script>
