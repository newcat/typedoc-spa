import Vue from "vue";
import "./entities/index";

import EntityRenderer from "./EntityRenderer";
import ReferenceRenderer from "./ReferenceRenderer";
import TypeRenderer from "./TypeRenderer";

Vue.component("entity-renderer", EntityRenderer);
Vue.component("reference-renderer", ReferenceRenderer);
Vue.component("type-renderer", TypeRenderer);
