import Vue from "vue";
import "./entities/index";

import ReflectionRenderer from "./ReflectionRenderer";
import FlagsRenderer from "./FlagsRenderer.vue";
import ReferenceRenderer from "./ReferenceRenderer";
import SourcesRenderer from "./SourcesRenderer.vue";
import TypeRenderer from "./TypeRenderer";

Vue.component("reflection-renderer", ReflectionRenderer);
Vue.component("flags-renderer", FlagsRenderer);
Vue.component("reference-renderer", ReferenceRenderer);
Vue.component("sources-renderer", SourcesRenderer);
Vue.component("type-renderer", TypeRenderer);
