<template>
  <div>
    <v-toolbar flat hide-on-scroll>
      <v-tabs centered>
        <v-tab :to="(name = '/')">Room Rates</v-tab>
      </v-tabs>
      <v-switch
        class="mt-6"
        @click="darkPersist()"
        :append-icon="
          !$vuetify.theme.dark
            ? 'mdi-moon-waxing-crescent'
            : 'mdi-white-balance-sunny'
        "
      ></v-switch>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  mounted() {
    const theme = localStorage.getItem("dark_theme");
    if (theme == "true") {
      this.$vuetify.theme.dark = true;
    } else {
      this.$vuetify.theme.dark = false;
    }
  },
  //make dark theme persist in browser
  methods: {
    darkPersist() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
  },
};
</script>
