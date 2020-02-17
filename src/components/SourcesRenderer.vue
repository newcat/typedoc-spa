<template lang="pug">
span.shy.small
    div(v-for="s in sources")
        | Defined in&nbsp;
        a(v-if="getUrl(s)", :href="getUrl(s)", target="_blank") {{ s.fileName }}:{{ s.line }}
        u(v-else) {{ s.fileName }}:{{ s.line }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ISource } from "@/types";

@Component
export default class SourcesRenderer extends Vue {

    @Prop()
    sources!: ISource[];

    getUrl(source: ISource) {
        const p = this.$store.state.loadedModule.githubBasePath;
        return p ? `${p}/${source.fileName}#L${source.line}` : "";
    }

}
</script>
