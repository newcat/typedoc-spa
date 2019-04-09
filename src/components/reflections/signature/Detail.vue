<template lang="pug">
div
    table.w100.param-table.mb2(v-if="signature.parameters && signature.parameters.length > 0")
        thead
            tr
                th.ph2.pv0 Parameter
                th.ph2.pv0 Type
                th.ph2.pv0 Description
        tbody
            tr(v-for="p in signature.parameters", :key="p.id")
                td.ph2.pv0
                    code {{ p.name }}
                td.ph2.pv0
                    code
                        type-renderer(:type="p.type")
                td.ph2.pv0
                    comment-renderer(v-if="p.comment", :comment="p.comment")
    
    comment-renderer.mb2(v-if="signature.comment", :comment="signature.comment")

    div
        b Returns
        br
        code
            type-renderer(:type="signature.type")
        span(v-if="signature.comment && signature.comment.returns") :&nbsp;{{ signature.comment.returns }}

    // TODO: Returns
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ISignatureReflection } from "@/types";

@Component
export default class SignatureDetail extends Vue {

    @Prop()
    signature!: ISignatureReflection;

}
</script>

<style>
.param-table thead th {
    border-bottom: 1px solid #EBEEF5;
}
</style>
