<template>
  <v-app id="inspire">
    <core-drawer />
    <core-bar />
    <v-content class="ml-8">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import drawer from "./core/drawer";
import bar from "./core/bar";

export default {
  components: {
    "core-drawer": drawer,
    "core-bar": bar,
  },
  props: {
    source: String,
  },
  data: () => ({
    drawer: false,
  }),
};
</script>
