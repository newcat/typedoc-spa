<template lang="pug">
div
    span.el-tag.mr1(v-for="tag in flagsArray", :key="tag") {{ tag }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class FlagsRenderer extends Vue {

    @Prop()
    flags!: Record<string, boolean>;

    get flagsArray() {
        if (!this.flags) { return []; }
        return Object.keys(this.flags).map((s) => s[2].toUpperCase() + s.substring(3));
    }

}
</script>
