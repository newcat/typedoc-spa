<template lang="pug">
div
    h1 {{ reflection.name }}
    p(v-if="description") {{ description }}
    
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
