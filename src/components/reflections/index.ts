import Vue from "vue";

import AccessorReflection from "./AccessorReflection.vue";
import ClassReflection from "./ClassReflection.vue";
import MethodReflection from "./MethodReflection.vue";
import PropertyReflection from "./PropertyReflection.vue";

Vue.component("accessor-reflection", AccessorReflection);
Vue.component("class-reflection", ClassReflection);
Vue.component("method-reflection", MethodReflection);
Vue.component("property-reflection", PropertyReflection);
