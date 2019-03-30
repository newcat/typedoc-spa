<template lang="pug">
div
    h1 {{ entity.name }}
    p(v-if="description") {{ description }}
    
    hr.mv3

    el-card.box-card(v-if="entity.typeParameter")
        span(slot="header")
            h3 Type Parameters

    el-card.box-card.mv2(v-for="c in entity.children", :key="c.id")
        entity-renderer(:entity="c")

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ClassEntity extends Vue {

    @Prop({ type: Object, required: true })
    entity!: any;

    get description() {
        return this.entity.comment && this.entity.comment.shortText || "";
    }

}
</script>
