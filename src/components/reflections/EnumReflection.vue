<template lang="pug">
div
    .shy Enum
    h1 {{ reflection.name }}
    comment-renderer(v-if="reflection.comment", :comment="reflection.comment")
    
    hr.mv3

    el-card.box-card.mv2(v-for="c in reflection.children", :key="c.id")
        reflection-renderer(:reflection="c")
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IContainerReflection } from "@/types";

@Component
export default class EnumReflection extends Vue {

    @Prop()
    reflection!: IContainerReflection;

}
</script>
