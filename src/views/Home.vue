<template>
  <v-container>
    <h1>
      <u>General Hotel Info</u>
    </h1>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>{{ header }}</v-expansion-panel-header>
        <v-expansion-panel-content>{{ content }}</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <h1 v-for="item in items" :key="item.message">{{ item.message }}</h1>
    <v-btn @click="sort()"></v-btn>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [{ message: "Hello" }, { message: "lol" }, { message: "fuck" }]
  }),
  methods: {
    sort() {
      items.sort((a, b) => (a.title > b.title ? 1 : -1));
    }
  }
};
</script>

