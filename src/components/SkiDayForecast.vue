<template>
  <v-card
    class="mx-auto"
    max-width="400"
    raised
  >
    <v-card-title>{{ date }}</v-card-title>
    <v-card-text>
      <p>
        Icon: {{ icon }}
        <br>
        Low: {{ low }}
        <br>
        High: {{ high }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  name: 'SkiDayForecast',
  props: {
    epoch: {
      type: Number,
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
      return `${result.getFullYear()}-${result.getMonth() + 1}-${result.getDate()}`
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
