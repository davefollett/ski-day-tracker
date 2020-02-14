<template>
  <v-card
    class="mx-auto"
    max-width="400"
    raised
    @click="openDarkSky"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">{{displayDate}}</div>
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
    forecast: {
      type: Object,
      required: true
    },
    coordinate: {
      type: Object,
      required: true
    }
  },
  computed: {
    date: function () {
      return new Date(this.forecast.time * 1000)
    },
    displayDate: function () {
      return format(this.date, 'EEE, MM/dd/yyyy')
    },
    urlDate: function () {
      return format(this.date, 'yyyy-MM-dd')
    },
    summary: function () {
      return this.forecast.summary
    },
    icon: function () {
      return this.forecast.icon
    },
    low: function () {
      return Math.round(this.forecast.temperatureMin)
    },
    high: function () {
      return Math.round(this.forecast.temperatureMax)
    },
    darkSkyURL: function () {
      return `https://darksky.net/details/${this.coordinate.latitude},${this.coordinate.longitude}/${this.urlDate}`
    }
  },
  methods: {
    openDarkSky: function () {
      window.open(this.darkSkyURL, '_blank')
    }
  }
}
</script>
