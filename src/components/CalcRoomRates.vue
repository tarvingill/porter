<template>
  <div class="pa-6">
    <!-- Input for base rate -->
    <v-container>
      <v-text-field
        @keypress.enter="addRate()"
        rounded
        outlined
        placeholder="Enter base rate"
        v-model="baseRate"
        hint="Press enter to add value"
      ></v-text-field>

      <!-- Clear all button -->
      <v-row justify="end">
        <v-btn @click="removeAllValues()" outlined>Clear all</v-btn>
      </v-row>

      <!-- Add on's selection array -->
      <v-chip-group class="my-6" show-arrows>
        <v-chip
          @click="selectAddOns(index)"
          class="ma-2 pa-4"
          v-for="(room, index) in rooms"
          :key="index"
          :color="room.color"
          ><b>
            {{ room.name }}
            {{ room.rate }}
          </b>
        </v-chip>
      </v-chip-group>

      <!-- Selected add ons array -->
      <h1 class="my-12">Selected add ons</h1>
      <v-chip-group class="my-2" show-arrows>
        <v-chip
          label
          @click:close="removeAddOn()"
          close
          v-for="(value, index) in values"
          :key="index"
          color="red"
        >
          <b>
            {{ value.roomName }}
            {{ value.roomRate }}
          </b>
        </v-chip>
      </v-chip-group>

      <!-- Remove all add-ons button -->
      <v-row justify="end" class="my-6">
        <v-btn @click="removeAllAddOns()" outlined>Clear Add Ons</v-btn>
      </v-row>

      <!-- Table of nights and room rates  -->
      <v-data-table
        class="data-table"
        hide-default-footer
        :items="items"
        :headers="headers"
      >
        <!-- Total room rate for the arbitrary number of nights -->
        <template slot="body.append">
          <tr class="total-style">
            <th><h3>Total</h3></th>
            <th v-for="total in totals" :key="total.name">
              <h2>{{ sumOfRates(total.name) }}</h2>
            </th>
          </tr>
        </template>

        <!-- Total room rates divided by number of nights (average) -->
        <template v-if="nightNumber > 1" slot="body.append">
          <tr class="average-style">
            <th><h3>Average</h3></th>
            <th v-for="average in averages" :key="average.name">
              <h2>{{ averageOfRates(average.name) }}</h2>
            </th>
          </tr>
        </template>
        <!-- Delete button for each night in array -->
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn @click="removeRate(item)" icon>
            <v-icon small> mdi-delete </v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseRate: null,
      nightNumber: 1,
      editedIndex: -1,
      totalRate: null,
      items: [],
      values: [],
      headers: [
        { value: "name" },
        { text: "MK/MD", value: "mkVal", sortable: false },
        { text: "HK/HD", value: "hkVal", sortable: false },
        { text: "SMK/SMD", value: "smkVal", sortable: false },
        { text: "SHK/SHD", value: "shkVal", sortable: false },
        { text: "ES", value: "esVal", sortable: false },
        { value: "actions", sortable: false },
      ],
      rooms: [
        {
          name: "Rollaway",
          rate: "35",
        },
        {
          name: "Breakfast Included",
          rate: "26",
        },
        {
          name: "Valet",
          rate: "20",
        },
      ],
      totals: [
        {
          name: "mkVal",
        },
        {
          name: "hkVal",
        },
        {
          name: "smkVal",
        },
        {
          name: "shkVal",
        },
        {
          name: "esVal",
        },
      ],
      averages: [
        {
          name: "mkVal",
        },
        {
          name: "hkVal",
        },
        {
          name: "smkVal",
        },
        {
          name: "shkVal",
        },
        {
          name: "esVal",
        },
      ],
    };
  },
  created() {
    this.totalCount();
  },
  updated() {
    this.totalCount();
  },
  methods: {
    addRate() {
      if (this.baseRate > 0) {
        this.items.push({
          name: "Night",
          mkVal: Number(this.baseRate),
          smkVal: this.baseRate > 0 ? Number(this.baseRate) + Number(20) : null,
          hkVal: this.baseRate > 0 ? Number(this.baseRate) + Number(35) : null,
          shkVal: this.baseRate > 0 ? Number(this.baseRate) + Number(55) : null,
          esVal: this.baseRate > 0 ? Number(this.baseRate) + Number(140) : null,
        });
      }
      // this.items.forEach(element => {
      //   if(element == null,) {
      //     this.items.splice
      //   }
      // });
      this.nightNumber++;
      this.baseRate = null;
    },
    selectAddOns(index) {
      this.values.push({
        roomRate: this.rooms[index].rate,
        roomName: this.rooms[index].name,
      });
      /** Test code */

      // console.log(this.values);
      // const newItem = [{ name: "Rollaway", name: "Valet" }];
      // const duplicateIndex = this.values
      //   .map((item) => item.roomName)
      //   .indexOf(newItem[0].name);
    },
    removeRate(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.items.splice(this.editedIndex, 1);
      this.closeDelete();
      this.nightNumber--;
      console.log(this.items);
    },
    closeDelete() {
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    removeAllValues() {
      this.baseRate = null;
      this.items = [];
      this.values = [];
      this.totalRate = null;
      this.nightNumber = 1;
      this.addOnsCounter = null;
    },

    removeAddOn(index) {
      this.values.splice(index, 1);
      this.addOnsCounter--;
    },
    removeAllAddOns() {
      this.values = [];
      this.addOnsCounter = null;
    },
    totalCount() {
      this.totalRate = this.values.reduce((acc, item) => {
        return Number(acc) + Number(item.roomRate);
      }, 0);
    },
    sumOfRates(key) {
      let totalVal;
      totalVal = this.items.reduce((a, b) => a + (b[key] || 0), 0);
      return totalVal + this.totalRate;
    },
    averageOfRates(key) {
      let sumVal;
      let finalVal;
      let averagedVal;
      sumVal = this.items.reduce((a, b) => a + (b[key] || 0), 0);
      finalVal = sumVal + this.totalRate;
      averagedVal = finalVal / this.items.length;
      return averagedVal.toPrecision(5);
    },
  },
};
</script>>

<style scoped>
* {
  font-size: medium;
}
</style>