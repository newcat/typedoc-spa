import Vue from "vue";
import "./reflections/index";

import CommentRenderer from "./CommentRenderer.vue";
import FlagsRenderer from "./FlagsRenderer.vue";
import ReferenceRenderer from "./ReferenceRenderer";
import ReflectionRenderer from "./ReflectionRenderer";
import SourcesRenderer from "./SourcesRenderer.vue";
import TableOfContents from "./TableOfContents.vue";
import TypeIcon from "./TypeIcon";
import TypeRenderer from "./TypeRenderer";

Vue.component("comment-renderer", CommentRenderer);
Vue.component("flags-renderer", FlagsRenderer);
Vue.component("reference-renderer", ReferenceRenderer);
Vue.component("reflection-renderer", ReflectionRenderer);
Vue.component("sources-renderer", SourcesRenderer);
Vue.component("table-of-contents", TableOfContents);
Vue.component("type-icon", TypeIcon);
Vue.component("type-renderer", TypeRenderer);
