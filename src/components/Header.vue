<template>
  <v-card dark flat>
    <v-app-bar flat elevate-on-scroll dense>
      <v-app-bar-title>Porter</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn :to="name='home'">Home</v-btn>
      <v-btn :to="name='about'">About</v-btn>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>
