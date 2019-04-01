<template lang="pug">
div
    flags-renderer(v-if="reflection.flags && Object.keys(reflection.flags).length > 0", :flags="reflection.flags")
    hr.mv1.hide-if-first
    code
        b {{ reflection.name + optional }}:&nbsp;
        i
            type-renderer(:type="reflection.type")
        template(v-if="reflection.defaultValue")
            | &nbsp;=&nbsp;{{ reflection.defaultValue.trim() }}
    hr.mv1.hide-if-last
    sources-renderer(:sources="reflection.sources")
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class PropertyReflection extends Vue {

    @Prop()
    reflection!: any;

    get optional() {
        return this.reflection && this.reflection.flags && this.reflection.flags.isOptional ? "?" : "";
    }

}
</script>
