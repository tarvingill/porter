<template>
  <div class="pa-12">
    <v-row>
      <v-text-field
        :error-messages="this.message"
        class="mx-2"
        type="number"
        rounded
        outlined
        placeholder="Enter base rate"
        prepend-inner-icon="mdi-currency-usd"
        clearable
        v-model="baseRate"
      ></v-text-field>
      <v-text-field
        type="number"
        rounded
        outlined
        placeholder="How many nights?"
        clearable
        v-model="numberOfNights"
      ></v-text-field>
    </v-row>

    <v-chip-group column>
      <v-chip
        label
        @click="selectOption(index)"
        v-for="(room, index) in rooms"
        :key="room.id"
        :color="room.color"
      >
        {{ room.name }}
        {{ room.rate }}
      </v-chip>
    </v-chip-group>

    <v-row justify="end">
      <v-btn outlined @click="emptyCart()">Clear all</v-btn>
    </v-row>
    <v-row>
      <v-col>
        <v-col>
          <h4>Selected Items</h4>
        </v-col>
        <v-chip-group column>
          <v-chip
            label
            @click:close="removeValueInCart()"
            close
            v-for="value in values"
            :key="value.id"
            :color="value.color"
            >{{ value.roomName }} {{ value.roomRate }}
          </v-chip>
        </v-chip-group>
        <v-col> Total: {{ totalRate }} </v-col>
        <v-col> Average: {{ avgRate }} </v-col>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    values: [],
    baseRate: null,
    avgRate: null,
    totalRate: null,
    numberOfNights: null,
    message: null,
    rooms: [
      {
        name: "SE",
        color: "green lighten-2",
      },
      {
        name: "MK",
        color: "green lighten-2",
      },
      {
        name: "MD",
        color: "green lighten-2",
      },
      {
        name: "HK",
        color: "red lighten-2",
      },
      {
        name: "HD",
        color: "red lighten-2",
      },
      {
        name: "SMK",
        color: "green darken-2",
      },
      {
        name: "SMD",
        color: "green darken-2",
      },
      {
        name: "SHK",
        color: "red darken",
      },
      {
        name: "SHD",
        color: "red darken",
      },
      {
        name: "ES",
        color: "yellow darken-1",
      },
      {
        name: "Rollaway",
        rate: "10",
      },
      {
        name: "Breakfast Included",
        rate: "26",
      },
      {
        name: "Breakfast One Per Room",
        rate: "25",
      },
      {
        name: "Valet",
        rate: "20",
      },
      {
        name: "Upgrade Fee",
        rate: "35",
      },
    ],
  }),
  created() {
    let i;
    for (i = 10; i < 15; i++) {
      this.rooms[i].color = "orange";
    }
  },
  watch: {
    baseRate() {
      let i;
      for (i = 0; i < 3; i++) {
        this.rooms[i].rate = this.baseRate;
      }
      for (i = 3; i < 5; i++) {
        this.rooms[i].rate = Number(this.baseRate) + Number(35);
      }
      for (i = 5; i < 7; i++) {
        this.rooms[i].rate = Number(this.baseRate) + Number(20);
      }
      for (i = 7; i < 9; i++) {
        this.rooms[i].rate = Number(this.baseRate) + Number(55);
      }
      this.rooms[9].rate = Number(this.baseRate) + Number(130);
    },
    values() {
      this.totalRate = this.values.reduce((acc, item) => {
        return Number(acc) + Number(item.roomRate);
      }, null);

      this.avgRate =
        Number(this.totalRate) / Number(this.numberOfNights).toPrecision(5);
    },
    numberOfNights() {
      if (this.numberOfNights > 0) {
        this.avgRate =
          Number(this.totalRate) / Number(this.numberOfNights).toPrecision(5);
      } else {
        this.avgRate = null;
      }
    },
  },
  methods: {
    selectOption(index) {
      if (this.rooms[index].rate > 0) {
        this.values.push({
          roomRate: this.rooms[index].rate,
          roomName: this.rooms[index].name,
          color: this.rooms[index].color,
        });
      } else {
        this.message = "Enter base rate first";
      }
      setTimeout(() => (this.message = null), 3000);
    },
    emptyCart() {
      this.values = [];
      this.avgRate = null;
      this.totalRate = null;
    },
    removeValueInCart(index) {
      this.values.splice(index, 1);
    },
  },
};
</script>