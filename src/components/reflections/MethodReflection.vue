<template lang="pug">
div
    flags-renderer(v-if="reflection.flags && Object.keys(reflection.flags).length > 0", :flags="reflection.flags")

    el-table.mv2(:data="reflection.signatures", :show-header="false", row-key="id", default-expand-all)
        el-table-column(type="expand")
            template(slot-scope="{ row }")
                signature-detail(:signature="row")
        el-table-column
            template(slot-scope="{ row }")
                signature-preview(:signature="row")

    sources-renderer(:sources="reflection.sources")
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IDeclarationReflection } from "@/types";

import SignatureDetail from "./signature/Detail.vue";
import SignaturePreview from "./signature/Preview.vue";

@Component({
    components: { SignatureDetail, SignaturePreview }
})
export default class MethodReflection extends Vue {

    @Prop()
    reflection!: IDeclarationReflection;

}
</script>
