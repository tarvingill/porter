<template>
  <div>
    <v-toolbar flat hide-on-scroll>
      <v-tabs centered>
        <v-tab :to="(name = '/')">Room Rates</v-tab>
      </v-tabs>
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            icon
            v-model="darkSwitchState"
            @click="darkPersist()"
          >
            <v-icon>{{
              !$vuetify.theme.dark
                ? "mdi-white-balance-sunny "
                : "mdi-moon-waxing-crescent"
            }}</v-icon>
          </v-btn>
        </template>
        <span>Change theme</span>
      </v-tooltip>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    darkSwitchState: true,
  }),
  created() {
    const theme = localStorage.getItem("dark_theme");
    if (theme == "true") {
      this.$vuetify.theme.dark = true;
    } else {
      this.$vuetify.theme.dark = false;
    }
    this.darkSwitchState = localStorage.getItem("dark_theme_state");
  },
  //make dark theme persist in browser
  methods: {
    darkPersist() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem(
        "dark_theme",
        JSON.stringify(this.$vuetify.theme.dark)
      );
      this.darkSwitchState = !this.darkSwitchState;
      localStorage.setItem(
        "dark_theme_state",
        JSON.stringify(this.darkSwitchState)
      );
    },
  },
};
</script>
