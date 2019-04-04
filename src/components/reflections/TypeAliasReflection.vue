<template lang="pug">
div
    .shy {{ reflection.kindString }}
    h1.mb1
        type-icon.mr2(:kind="reflection.kind")
        | {{ reflection.name }}
    flags-renderer(v-if="reflection.flags && Object.keys(reflection.flags).length > 0", :flags="reflection.flags")

    hr.mv1.hide-if-first
    
    code
        type-renderer(:type="reflection.type")

    .mt2(v-if="reflection.typeParameter")
        span(slot="header")
            h4 Type Parameters
        ul
            li(v-for="p in reflection.typeParameter", :key="p.id")
                b {{ p.name }}
    
    hr.mv1.hide-if-last
    sources-renderer(:sources="reflection.sources")
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TypeAliasReflection extends Vue {

    @Prop()
    reflection!: any;

}
</script>
