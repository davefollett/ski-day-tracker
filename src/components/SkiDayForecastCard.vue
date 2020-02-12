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
  name: 'SkiDayForecastCard',
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
    },
    low: function () {
      return Math.round(this.minTemp)
    },
    high: function () {
      return Math.round(this.maxTemp)
    }
  }
}
</script>
