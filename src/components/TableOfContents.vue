<template lang="pug">
div
    div(v-for="(c, i) in categories", :key="c.header", :class="{ mb3: i + 1 !== categories.length }")
        h4.mv0 {{ c.header }}
        el-row(:gutter="10")
            el-col(v-for="r in c.reflections", :key="r.id", :xs="24", :sm="24", :md="12", :lg="8", :xl="6")
                slot(:reflection="r")
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { IReflection } from "../types";

@Component
export default class TableOfContents extends Vue {

    @Prop()
    reflections!: IReflection[];

    get categories() {
        if (!this.reflections) { return []; }
        const m = new Map<string, Set<IReflection>>();
        this.reflections.forEach((r) => {
            if (!m.has(r.kindString)) {
                m.set(r.kindString, new Set());
            }
            m.get(r.kindString)!.add(r);
        });
        return Array.from(m.entries())
            .map(([k, v]) => ({ header: k, reflections: Array.from(v) }));
    }

}
</script>
