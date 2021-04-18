<template>
  <v-container>
    <v-expansion-panels>
      <v-expansion-panel id="add-tours" v-for="tour in tours" :key="tour.name">
        <v-expansion-panel-header>{{tour.name}}</v-expansion-panel-header>
        <v-expansion-panel-content>{{tour.description}}</v-expansion-panel-content>
        <v-expansion-panel-content>{{tour.contact}}</v-expansion-panel-content>
        <v-expansion-panel-content>{{tour.link}}</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-text-field placeholder="Tour name" v-model="newTourName"></v-text-field>
    <v-textarea placeholder="Tour description" v-model="newDescription"></v-textarea>
    <v-btn @click="addTour()"></v-btn>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    newDescription: "",
    newTourName: "",
    tours: []
  }),
  methods: {
    addTour() {
      this.tours.push({
        name: this.newTourName,
        description: this.newDescription
      });
      //clear input field after data has been pushed into the array
      this.newTourName = "";
      this.newDescription = "";
    }
  }
};
</script>

<style>
</style>