<template lang="pug">
div
    .shy {{ reflection.kindString }}
    h1
        type-icon.mr2(:kind="reflection.kind")
        | {{ reflection.name }}
    comment-renderer(v-if="reflection.comment", :comment="reflection.comment")
    flags-renderer.mt1(v-if="reflection.flags && Object.keys(reflection.flags).length > 0", :flags="reflection.flags")
    
    hr.mv3
    
    code
        type-renderer(:type="reflection.type")

    .mt2(v-if="reflection.typeParameter")
        span(slot="header")
            h4 Type Parameters
        ul
            li(v-for="p in reflection.typeParameter", :key="p.id")
                b {{ p.name }}
    
    hr.mv3
    
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
