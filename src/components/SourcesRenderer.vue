<template lang="pug">
span.shy.small
    div(v-for="s in sources")
        | Defined in&nbsp;
        a(href="#") {{ s.fileName }}:{{ s.line }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ISource } from "@/types";

@Component
export default class SourcesRenderer extends Vue {

    @Prop()
    sources!: ISource[];

}
</script>
