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
    <v-row>
      <v-col>
        <h2>Select items wanted</h2>
      </v-col>
      <v-chip-group column>
        <v-chip @click="selectMK()" class="pa-4 ma-4" width="5cm">
          {{MountainKing}}
          <v-col>{{ baseRate }}</v-col>
        </v-chip>
        <v-chip @click="selectMD()" class="pa-4 ma-4" width="5cm">
          {{MountainTwin}}
          <v-col>{{ baseRate }}</v-col>
        </v-chip>
        <v-chip @click="selectHK()" class="pa-4 ma-4" width="5cm">
          {{HarbourKing}}
          <v-col>{{ resultHK }}</v-col>
        </v-chip>
        <v-chip @click="selectHD()" class="pa-4 ma-4" width="5cm">
          {{HarbourTwin}}
          <v-col>{{ resultHD }}</v-col>
        </v-chip>
        <v-chip @click="selectSMK()" class="pa-4 ma-4" width="5cm">
          {{SuperiorMountainKing}}
          <v-col>{{ resultSMK }}</v-col>
        </v-chip>
        <v-chip @click="selectSMD()" class="pa-4 ma-4" width="5cm">
          {{SuperiorMountainTwin}}
          <v-col>{{ resultSMD }}</v-col>
        </v-chip>
        <v-chip @click="selectSHK()" class="pa-4 ma-4" width="5cm">
          {{SuperiorHarbourKing}}
          <v-col>{{ resultSHK }}</v-col>
        </v-chip>
        <v-chip @click="selectSHD()" class="pa-4 ma-4" width="5cm">
          {{SuperiorHarbourTwin}}
          <v-col>{{ resultSHD }}</v-col>
        </v-chip>
        <v-chip @click="selectRollaway()" class="pa-4 ma-4" width="5cm">
          {{rollaway}}
          <v-col>{{ rollawayValue }}</v-col>
        </v-chip>
        <v-chip @click="selectSelfPark()" class="pa-4 ma-4" width="5cm">
          {{selfParking}}
          <v-col>{{ selfParkInc }}</v-col>
        </v-chip>
      </v-chip-group>

      <v-container>
        <v-col>
          <v-row justify="space-between">
            <v-icon>mdi-cart</v-icon>
            <v-btn icon @click="removeAllValuesInCart()" class="ma-2">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-row>
        </v-col>
        <v-card class="pa-12" outlined>
          <v-chip-group column>
            <v-chip
              @click:close="removeValueInCart()"
              close
              v-for="(value, index) in values"
              :key="index"
            >{{value.roomName}} {{value.room}}</v-chip>
          </v-chip-group>
        </v-card>
        <v-col>Total = {{ totalRate }}</v-col>
        <v-row justify="space-between">
          <v-col>
            <v-text-field
              style="width:20%"
              v-model="numberOfNights"
              placeholder="How many nights stay?"
              type="number"
            ></v-text-field>
            <v-btn color="red" @click="calculateAverageRoomRate()" outlined>Calculate Average</v-btn>
            <v-col>Average = {{ avgRate }}</v-col>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    MountainKing: "Mountain King",
    MountainTwin: "Mountain Twin",
    HarbourKing: "Harbour King",
    HarbourTwin: "Harbour Twin",
    SuperiorHarbourKing: "Superior Harbour King",
    SuperiorHarbourTwin: "Superior Harbour Twin",
    SuperiorMountainKing: "Superior Mountain King",
    SuperiorMountainTwin: "Superior Mountain Twin",
    rollaway: "Rollaway",
    selfParking: "Self Parking",
    numberOfNights: null,
    baseRate: null,
    resultSMK: null,
    resultSMD: null,
    resultSHK: null,
    resultSHD: null,
    resultHK: null,
    resultHD: null,
    rollawayValue: 30,
    selfParkInc: 10,
    newRoomRate: null,
    avgRate: null,
    totalRate: null,
    chip: true,
    values: []
  }),
  methods: {
    selectRollaway() {
      this.values.push({
        room: this.rollawayValue,
        roomName: this.rollaway
      });
    },
    selectSelfPark() {
      this.values.push({
        room: this.selfParkInc,
        roomName: this.selfParking
      });
    },
    selectMK() {
      if (this.baseRate > 0) {
        this.newRoomRate = this.baseRate;
        this.values.push({
          room: this.newRoomRate,
          roomName: this.MountainKing
        });
      }
    },
    selectMD() {
      if (this.baseRate > 0) {
        this.newRoomRate = this.baseRate;
        this.values.push({
          room: this.newRoomRate,
          roomName: this.MountainTwin
        });
      }
    },
    selectSMK() {
      if (this.baseRate > 0) {
        this.newRoomRate = this.resultSMK;
        this.values.push({
          room: this.newRoomRate,
          roomName: this.SuperiorMountainKing
        });
      }
    },
    selectSMD() {
      if (this.baseRate > 0) {
        this.newRoomRate = this.resultSMD;
        this.values.push({
          room: this.newRoomRate,
          roomName: this.SuperiorMountainTwin
        });
      }
    },
    selectSHK() {
      if (this.baseRate > 0) {
        this.newRoomRate = this.resultSHK;
        this.values.push({
          room: this.newRoomRate,
          roomName: this.SuperiorHarbourKing
        });
      }
    },
    selectSHD() {
      if (this.baseRate > 0) {
        this.newRoomRate = this.resultSHD;
        this.values.push({
          room: this.newRoomRate,
          roomName: this.SuperiorHarbourTwin
        });
      }
    },
    selectHK() {
      if (this.baseRate > 0) {
        this.newRoomRate = this.resultHK;
        {
          this.values.push({
            room: this.newRoomRate,
            roomName: this.HarbourKing
          });
        }
      }
    },
    selectHD() {
      if (this.baseRate > 0) {
        this.newRoomRate = this.resultHD;
        {
          this.values.push({
            room: this.newRoomRate,
            roomName: this.HarbourTwin
          });
        }
      }
    },
    removeValueInCart(index) {
      this.values.splice(index, 1);
    },
    removeAllValuesInCart() {
      this.values = [];
    },
    calculateAverageRoomRate() {
      if (this.numberOfNights > 0) {
        let shortenedAvg = Number(this.totalRate) / Number(this.numberOfNights);
        this.avgRate = shortenedAvg.toPrecision(5);
      } else {
        this.avgRate = null;
      }
    }
  },
  watch: {
    values: {
      handler: function(val, oldVal, totalRate) {
        this.totalRate = this.values.reduce((acc, item) => {
          return Number(acc) + Number(item.room);
        }, null);
      }
    },
    baseRate() {
      if (this.baseRate > 0) {
        this.resultHK = Number(this.baseRate) + Number(20);
        this.resultHD = Number(this.baseRate) + Number(20);
        this.resultSHK = Number(this.baseRate) + Number(30);
        this.resultSHD = Number(this.baseRate) + Number(30);
        this.resultSMK = Number(this.baseRate) + Number(45);
        this.resultSMD = Number(this.baseRate) + Number(45);
      } else {
        this.resultSMK = null;
        this.resultSMD = null;
        this.resultSHK = null;
        this.resultSHD = null;
        this.resultHK = null;
        this.resultHD = null;
      }
    }
  }
};
</script>
