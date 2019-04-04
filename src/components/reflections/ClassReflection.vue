<template lang="pug">
div
    .shy {{ reflection.kindString }}
    h1
        type-icon.mr2(:kind="reflection.kind")
        | {{ reflection.name }}
    comment-renderer(v-if="reflection.comment", :comment="reflection.comment")
    flags-renderer.mt1(v-if="reflection.flags && Object.keys(reflection.flags).length > 0", :flags="reflection.flags")
    
    hr.mv3

    el-card.box-card(v-if="reflection.typeParameter")
        span(slot="header")
            h3 Type Parameters
        ul
            li(v-for="p in reflection.typeParameter", :key="p.id")
                b {{ p.name }}

    el-card.box-card.mv2(v-for="c in reflection.children", :key="c.id")
        reflection-renderer(:reflection="c")

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IDeclarationReflection } from "@/types";

@Component
export default class ClassReflection extends Vue {

    @Prop({ type: Object, required: true })
    reflection!: IDeclarationReflection;

    get description() {
        return this.reflection.comment && this.reflection.comment.shortText || "";
    }

}
</script>
