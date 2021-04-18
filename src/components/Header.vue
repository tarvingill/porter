<template>
  <v-card dark flat>
    <v-app-bar flat elevate-on-scroll dense>
      <v-app-bar-title>Porter</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn :to="name='/'">Home</v-btn>
      <v-btn :to="name='/concierge'">Concierge</v-btn>
      <v-btn :to="name='/room-rates'">Room Rates</v-btn>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>
