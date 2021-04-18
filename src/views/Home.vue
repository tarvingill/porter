<template>
  <div>
    <!-- <RoomRatesCalc /> -->
    <v-container v-for="card in cards" :key="card.name">
      <v-row>
        <v-col>
          <v-card height="100%">
            <v-card-title>{{ card.name }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import RoomRatesCalc from "@/components/CalcRoomRates";
export default {
  // components: {
  //   RoomRatesCalc
  // }
  data: () => ({
    cards: {
      ConciergeCard: {
        name: "Concierge"
      },
      CalcRoomRatesCard: {
        name: "Calculate Room Rates"
      }
    }
  })
};
</script>

<style>
</style>