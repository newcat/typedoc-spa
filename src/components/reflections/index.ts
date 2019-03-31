import Vue from "vue";

import ClassReflection from "./ClassReflection.vue";
import EnumReflection from "./EnumReflection.vue";
import MethodReflection from "./MethodReflection.vue";
import PropertyReflection from "./PropertyReflection.vue";

Vue.component("class-reflection", ClassReflection);
Vue.component("enum-reflection", EnumReflection);
Vue.component("method-reflection", MethodReflection);
Vue.component("property-reflection", PropertyReflection);
