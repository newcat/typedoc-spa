<template lang="pug">
div
    el-tag(v-for="tag in tags", :key="tag") {{ tag }}
    hr.mv1(v-if="tags && tags.length > 0")
    code
        b {{ entity.name }}:&nbsp;
        i
            type-renderer(:type="entity.type")
        template(v-if="entity.defaultValue")
            | &nbsp;=&nbsp;{{ entity.defaultValue.trim() }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class PropertyEntity extends Vue {

    @Prop()
    entity!: any;

    get tags() {
        const tags: string[] = [];
        if (this.entity.flags.isProtected) { tags.push("Protected"); }
        if (this.entity.flags.isPrivate) { tags.push("Private"); }
        return tags;
    }

}
</script>
