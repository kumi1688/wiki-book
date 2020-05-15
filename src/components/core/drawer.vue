<template>
  <v-container>
    <v-navigation-drawer
      :value="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-list-group
            v-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              link
              :to="child.to"
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ child.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="item.text" link :to="item.to">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import bookList from "../../../public/books/bookList.json";
import fs from "fs";

bookList.forEach((book) => {
  const result = fs.readFileSync(`${book}/index.js`);
  console.log(result);
});

export default {
  computed: {
    drawer() {
      return this.$store.state.drawer;
    },
  },
  created: function() {
    const defaultRoute = {
      icon: "mdi-view-dashboard",
      text: "메인화면",
      to: "/",
    };
    this.items = [{ ...defaultRoute }];
    console.log(bookList);
  },
  data: function() {
    return {
      items: [
        {
          icon: "mdi-view-dashboard",
          text: "메인화면",
          to: "/",
        },
        {
          icon: "mdi-chevron-up",
          "icon-alt": "mdi-chevron-down",
          text: "MQTT 소개",
          model: false,
          children: [
            { icon: "mdi-view-dashboard", text: "mqtt 소개", to: "/book1" },
            { icon: "mdi-view-dashboard", text: "mqtt 실습", to: "/book2" },
          ],
        },
      ],
    };
  },
};
</script>
