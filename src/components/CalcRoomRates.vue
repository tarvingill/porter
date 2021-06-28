<template>
  <div class="pa-6">
    <v-container>
      <v-text-field
        @keypress.enter="addRate()"
        rounded
        outlined
        placeholder="Enter base rate"
        v-model="baseRate"
        hint="Press enter to add value"
      ></v-text-field>

      <v-row justify="end">
        <v-btn @click="removeAllRates()" outlined>Clear all</v-btn>
      </v-row>
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

      <h1 class="my-12">Selected add ons {{ addOnsCounter }}</h1>
      <v-chip-group class="my-2" show-arrows>
        <v-chip
          label
          @click:close="removeAddOn()"
          close
          v-for="(value, index) in values"
          :key="index"
          color="red"
        >
          {{ newVal }}
          {{ value.roomName }}
          {{ value.roomRate }}
        </v-chip>
      </v-chip-group>

      <v-data-table
        class="data-table"
        hide-default-footer
        :items="items"
        :headers="headers"
      >
        <template slot="body.append">
          <tr class="total-style">
            <th><h3>Total</h3></th>
            <th v-for="total in totals" :key="total.name">
              <h2>{{ sumOfRates(total.name) }}</h2>
            </th>
          </tr>
        </template>
        <template v-slot:[`item.actions`]="{ night }">
          <v-btn @click="deleteNight(night)" icon>
            <v-icon small> mdi-delete </v-icon>
          </v-btn>
        </template>
      </v-data-table>

      <v-row justify="end" class="my-6">
        <v-btn @click="removeAllAddOns()" outlined>Clear Add Ons</v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseRate: null,
      grandTotal: null,
      editedIndex: -1,
      limit: 5,
      newVal: null,
      valueArrayElements: null,
      nightNumber: 1,
      totalRate: null,
      addOnsCounter: null,
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
          name: "Breakfast Included ",
          rate: "26",
        },
        {
          name: "Valet ",
          rate: "20",
        },
        {
          name: "Upgrade Fee",
          rate: "35",
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
    };
  },
  //mounts data from previous session
  created() {
    // // const valuesArray = JSON.parse(localStorage.getItem("values"));
    // // this.values = valuesArray;
    // // const itemsArray = JSON.parse(localStorage.getItem("items"));
    // // this.items = itemsArray;
    // // const localAddOnsCounter = JSON.parse(
    // //   localStorage.getItem("addOnsCounter")
    // // );
    // this.addOnsCounter = localAddOnsCounter;
    this.totalCount();
  },
  updated() {
    this.contentPersist();
    this.totalCount();
  },
  methods: {
    deleteNight(night) {
      this.editedIndex = this.items.indexOf(night);
      this.items.splice(this.editedIndex, 1);
    },
    contentPersist() {
      localStorage.setItem("values", JSON.stringify(this.values));
      localStorage.setItem("items", JSON.stringify(this.items));
    },
    totalCount() {
      this.totalRate = this.values.reduce((acc, item) => {
        return Number(acc) + Number(item.roomRate);
      }, 0);
    },
    addRate() {
      if (this.baseRate > 0) {
        this.items.push({
          name: `Night ${this.nightNumber}`,
          mkVal: Number(this.baseRate),
          smkVal: this.baseRate > 0 ? Number(this.baseRate) + Number(20) : null,
          hkVal: this.baseRate > 0 ? Number(this.baseRate) + Number(35) : null,
          shkVal: this.baseRate > 0 ? Number(this.baseRate) + Number(55) : null,
          esVal: this.baseRate > 0 ? Number(this.baseRate) + Number(140) : null,
        });
      }
      this.nightNumber++;
      this.baseRate = null;
    },
    removeAllRates() {
      this.baseRate = this.values = [];
      this.items = [];
      this.totalRate = null;
      this.nightNumber = 1;
      this.addOnsCounter = null;
    },
    selectAddOns(index) {
      this.values.push({
        roomRate: this.rooms[index].rate,
        roomName: this.rooms[index].name,
      });
      this.addOnsCounter = this.values.length;
      localStorage.setItem("addOnsCounter", JSON.stringify(this.addOnsCounter));
      // console.log(this.values);
      // let val;
      // this.values.forEach((index) => {
      //   this.values.find(
      //     (element) => index.element.roomRate === this.rooms[0].rate
      //   );
      // });
      // console.log();
    },
    removeAddOn(index) {
      this.values.splice(index, 1);
      this.addOnsCounter--;
    },
    removeAllAddOns() {
      this.values = [];
      this.addOnsCounter = null;
    },
    sumOfRates(key) {
      let totalVal;
      totalVal = this.items.reduce((a, b) => a + (b[key] || 0), 0);
      return totalVal + this.totalRate;
    },
  },
};
</script>>

<style scoped>
* {
  font-size: medium;
}
</style>