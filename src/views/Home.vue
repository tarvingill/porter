<template>
  <v-container>
    <v-text-field
      type="number"
      rounded
      solo
      outlined
      placeholder="Enter base rate"
      prepend-inner-icon="mdi-currency-usd"
      clearable
      v-model="baseRate"
    ></v-text-field>
    <v-row justify="space-between">
      <v-card class="pa-4 ma-4" width="5cm">
        Mountain King
        <v-col>{{ baseRate }}</v-col>
      </v-card>
      <v-card class="pa-4 ma-4" width="5cm">
        Mountain Twin
        <v-col>{{ baseRate }}</v-col>
      </v-card>
      <v-card class="pa-4 ma-4" width="5cm">
        Harbour King
        <v-col>{{ resultHK_HD }}</v-col>
      </v-card>
      <v-card class="pa-4 ma-4" width="5cm">
        Harbor Twin
        <v-col>{{ resultHK_HD }}</v-col>
      </v-card>
      <v-card class="pa-4 ma-4" width="5cm">
        Superior Mountain King
        <v-col>{{ resultSMK_SMD }}</v-col>
      </v-card>
      <v-card class="pa-4 ma-4" width="5cm">
        Superior Mountain Twin
        <v-col>{{ resultSMK_SMD }}</v-col>
      </v-card>
      <v-card class="pa-4 ma-4" width="5cm">
        Superior Harbour King
        <v-col>{{ resultSHK_SHD }}</v-col>
      </v-card>
      <v-card class="pa-4 ma-4" width="5cm">
        Superior Harbour Twin
        <v-col>{{ resultSHK_SHD }}</v-col>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    baseRate: null,
    resultSMK_SMD: null,
    resultSHK_SHD: null,
    resultHK_HD: null
  }),
  watch: {
    baseRate() {
      if (this.baseRate > 0) {
        this.resultHK_HD = Number(this.baseRate) + Number(20);
        this.resultSHK_SHD = Number(this.baseRate) + Number(30);
        this.resultSMK_SMD = Number(this.baseRate) + Number(45);
      } else {
        this.resultSMK_SMD = null;
        this.resultSHK_SHD = null;
        this.resultHK_HD = null;
      }
    }
  }
};
</script>
