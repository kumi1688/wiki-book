<template>
  <v-app>
    <core-drawer />
    <core-bar />
    <v-content class="ml-2 mt-2">
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
  data: () => ({}),
};
</script>
