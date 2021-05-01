<template>
  <v-toolbar dense flat hide-on-scroll>
    <v-tabs centered>
      <v-tab :to="(name = '/')">Room Rates</v-tab>
    </v-tabs>
    <v-switch
      class="mt-6"
      color="white"
      v-model="$vuetify.theme.dark"
      :append-icon="
        !$vuetify.theme.dark
          ? 'mdi-moon-waxing-crescent'
          : 'mdi-white-balance-sunny'
      "
    ></v-switch>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({}),
};
</script>
