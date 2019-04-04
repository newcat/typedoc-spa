<template lang="pug">
div
    table.w100.param-table.mb2(v-if="signature.parameters && signature.parameters.length > 0")
        thead
            tr
                th.ph2 Parameter
                th.ph2 Type
                th.ph2 Description
        tbody
            tr(v-for="p in signature.parameters")
                td.ph2
                    code {{ p.name }}
                td.ph2
                    code
                        type-renderer(:type="p.type")
                td.ph2
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
