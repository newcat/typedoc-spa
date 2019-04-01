<template lang="pug">
div
    // TODO: Replace with custom table
    el-table(v-if="signature.parameters && signature.parameters.length > 0" :data="signature.parameters")
        el-table-column(label="Parameter")
            template(slot-scope="{ row }")
                code {{ row.name }}
        el-table-column(label="Type")
            template(slot-scope="{ row }")
                code
                    type-renderer(:type="row.type")
        el-table-column(label="Description")
            template(slot-scope="{ row }")
                comment-renderer(v-if="row.comment", :comment="row.comment")
    
    comment-renderer.mt2(v-if="signature.comment", :comment="signature.comment")

    div.mt2
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
