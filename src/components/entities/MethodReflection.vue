<template lang="pug">
div
    flags-renderer(v-if="reflection.flags && Object.keys(reflection.flags).length > 0", :flags="reflection.flags")
    hr.mv1.hide-if-first

    code(v-for="s in reflection.signatures")
        b {{ s.name }}
        span (
        span(v-for="(p, i) in s.parameters", :key="p.id")
            span {{ p.name }}:&nbsp;
            i
                type-renderer(:type="p.type")
            span(v-if="s.parameters.length - 1 > i") ,&nbsp;
        span ):&nbsp;
        i
            type-renderer(:type="s.type")

    hr.mv1.hide-if-last
    sources-renderer(:sources="reflection.sources")
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ISignatureReflection } from "@/types";

@Component
export default class MethodReflection extends Vue {

    @Prop()
    reflection!: ISignatureReflection;

}
</script>
