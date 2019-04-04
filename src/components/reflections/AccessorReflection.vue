<template lang="pug">
div
    flags-renderer(v-if="reflection.flags && Object.keys(reflection.flags).length > 0", :flags="reflection.flags")

    h3.mt2
        type-icon.mr1(:kind="reflection.kind")
        | {{ reflection.name }}
    div(v-if="reflection.getSignature")
        el-card.box-card.mv2(v-for="s in reflection.getSignature", :key="s.id")
            signature-preview(:signature="s", name="get")
            signature-detail(:signature="s")
    div(v-if="reflection.setSignature")
        el-card.box-card.mv2(v-for="s in reflection.setSignature", :key="s.id")
            signature-preview(:signature="s", name="set")
            signature-detail(:signature="s")

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
export default class AccessorReflection extends Vue {

    @Prop()
    reflection!: IDeclarationReflection;

}
</script>
