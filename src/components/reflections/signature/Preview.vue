<template lang="pug">
code
    type-icon.mr1(:kind="signature.kind")
    b {{ displayName }}
    span (
    span(v-for="(p, i) in signature.parameters", :key="p.id")
        span {{ p.name }}:&nbsp;
        i
            type-renderer(:type="p.type")
        span(v-if="signature.parameters.length - 1 > i") ,&nbsp;
    span ):&nbsp;
    i
        type-renderer(:type="signature.type")
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ISignatureReflection } from "@/types";

@Component
export default class SignaturePreview extends Vue {

    @Prop()
    signature!: ISignatureReflection;

    @Prop({ default: "" })
    name!: string;

    get displayName() {
        if (this.name) {
            return this.name;
        } else if (this.signature.name === "__call") {
            return "";
        } else {
            return this.signature.name;
        }
    }

}
</script>
