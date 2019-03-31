<template lang="pug">
div
    p(v-if="comment.shortText") {{ comment.shortText }}
    p(v-if="comment.text") {{ comment.text }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IComment } from "@/types";

@Component
export default class CommentRenderer extends Vue {

    @Prop()
    comment!: IComment;

}
</script>
