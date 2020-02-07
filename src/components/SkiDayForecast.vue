<template>
  <v-card
    class="mx-auto"
    max-width="400"
    raised
  >
    <v-card-title>{{ date }}</v-card-title>
    <v-card-subtitle>{{ summary }}</v-card-subtitle>
    <v-card-text>
      <p>{{ icon }} {{ low }}°F  {{ high }}°F
      </p>
    </v-card-text>
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
</script>
