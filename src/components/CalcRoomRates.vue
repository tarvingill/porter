<template>
  <div class="pa-12">
    <!-- Base rate input -->
    <v-row>
      <v-col cols="6">
        <v-text-field
          type="number"
          rounded
          outlined
          placeholder="Enter base rate"
          prepend-inner-icon="mdi-currency-usd"
          clearable
          v-model="baseRate"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          clearable
          rounded
          outlined
          v-model="numberOfNights"
          placeholder="How many nights stay?"
          type="number"
        ></v-text-field>
      </v-col>
    </v-row>

    <!-- Items to be selected -->
    <v-row>
      <v-col cols="4" class="item-size">
        <v-chip-group column>
          <v-chip @click="selectMK()" class="ma-2">
            {{MountainKing}}
            <v-col>{{ baseRate }}</v-col>
          </v-chip>
          <v-chip @click="selectMD()" class="ma-2">
            {{MountainTwin}}
            <v-col>{{ baseRate }}</v-col>
          </v-chip>
          <v-chip @click="selectHK()" class="ma-2">
            {{HarbourKing}}
            <v-col>{{ resultHK }}</v-col>
          </v-chip>
          <v-chip @click="selectHD()" class="ma-2">
            {{HarbourTwin}}
            <v-col>{{ resultHD }}</v-col>
          </v-chip>
          <v-chip @click="selectSMK()" class="ma-2">
            {{SuperiorMountainKing}}
            <v-col>{{ resultSMK }}</v-col>
          </v-chip>
          <v-chip @click="selectSMD()" class="ma-2">
            {{SuperiorMountainTwin}}
            <v-col>{{ resultSMD }}</v-col>
          </v-chip>
          <v-chip @click="selectSHK()" class="ma-2">
            {{SuperiorHarbourKing}}
            <v-col>{{ resultSHK }}</v-col>
          </v-chip>
          <v-chip @click="selectSHD()" class="ma-2">
            {{SuperiorHarbourTwin}}
            <v-col>{{ resultSHD }}</v-col>
          </v-chip>
        </v-chip-group>
        <v-chip @click="selectRollaway()" class="ma-2">
          {{rollaway}}
          <v-col>{{ rollawayRate }}</v-col>
        </v-chip>
        <v-chip @click="selectSelfPark()" class="ma-2">
          {{selfParking}}
          <v-col>{{ selfParkRate }}</v-col>
        </v-chip>
      </v-col>

      <!-- Cart section -->
      <v-divider vertical></v-divider>
      <v-col>
        <v-row justify="end">
          <v-btn small depressed rounded @click="removeAllValuesInCart()">Clear selection</v-btn>
        </v-row>
        <v-card class="cart-size" flat>
          <v-chip-group column>
            <v-chip
              @click:close="removeValueInCart()"
              close
              v-for="(value, index) in values"
              :key="index"
            >{{value.roomName}} {{value.room}}</v-chip>
          </v-chip-group>
        </v-card>
        <v-divider></v-divider>
        <v-col>Total = ${{ totalRate }}</v-col>
        <v-col v-show="numberOfNights > 0">Average per night = ${{ avgRate }}</v-col>
      </v-col>
    </v-row>

    <!-- Calculate average section -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      MountainKing: "MK",
      MountainTwin: "MD",
      HarbourKing: "HK",
      HarbourTwin: "HD",
      SuperiorHarbourKing: "SHK",
      SuperiorHarbourTwin: "SHD",
      SuperiorMountainKing: "SMK",
      SuperiorMountainTwin: "SMD",
      rollaway: "Rollaway",
      selfParking: "Self Parking",

      numberOfNights: null,
      baseRate: null,
      newRoomRate: null,
      selfParkRate: 10,
      avgRate: null,
      totalRate: null,
      rollawayRate: 30,
      resultSMK: null,
      resultSMD: null,
      resultSHK: null,
      resultSHD: null,
      resultHK: null,
      resultHD: null,
      values: []
    };
  },
  methods: {
    selectRollaway() {
      this.values.push({
        room: this.rollawayRate,
        roomName: this.rollaway
      });
    },
    selectSelfPark() {
      this.values.push({
        room: this.selfParkRate,
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
      this.numberOfNights = null;
      this.avgRate = null;
    }
  },
  watch: {
    values: {
      handler: function(val, oldVal, totalRate) {
        this.totalRate = this.values.reduce((acc, item) => {
          return Number(acc) + Number(item.room);
        }, null);
        let shortenedAvg = Number(this.totalRate) / Number(this.numberOfNights);
        this.avgRate = shortenedAvg.toPrecision(5);
      }
    },
    numberOfNights() {
      if (this.numberOfNights > 0) {
        let shortenedAvg = Number(this.totalRate) / Number(this.numberOfNights);
        this.avgRate = shortenedAvg.toPrecision(4);
      } else {
        this.avgRate = null;
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

<style scoped>
.cart-size {
  margin: 0.5cm;
  padding: 0.5cm;
  min-height: 5cm;
}
</style>