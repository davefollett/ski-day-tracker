<template>
  <v-card
    class="mx-auto"
    max-width="400"
    raised
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">{{date}}</div>
        <v-list-item-title class="headline mb-1">{{ low }}°F  {{ high }}°F</v-list-item-title>
        <v-list-item-subtitle>{{summary}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="40"
      >
      <skycon :condition="icon" width="40" height="40"></skycon>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
import { format } from 'date-fns'

export default {
  name: 'SkiDayForecast',
  props: {
    epoch: {
      type: Number,
      required: true
    },
    summary: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    minTemp: {
      type: Number,
      required: true
    },
    maxTemp: {
      type: Number,
      required: true
    }
  },
  computed: {
    date: function () {
      const result = new Date(this.epoch * 1000)
      return format(result, 'EEE, MM/dd/yyyy')
      // return `${result.getFullYear()}-${result.getMonth() + 1}-${result.getDate()}`
    },
    low: function () {
      return Math.round(this.minTemp)
    },
    high: function () {
      return Math.round(this.maxTemp)
    }
  }
}
// <v-card
//     class="mx-auto"
//     max-width="400"
//     raised
//   >
//     <v-card-title>{{ date }}</v-card-title>
//     <v-card-subtitle>{{ summary }}</v-card-subtitle>
//     <v-card-text>
//       <div>
//       <skycon :condition="icon" width="40" height="40"></skycon>
//       <p>{{ low }}°F  {{ high }}°F</p>
//       </div>
//     </v-card-text>
//   </v-card>
</script>
