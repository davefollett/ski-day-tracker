<template>
  <div class="home">
    <p class="display-1 text-center">{{forecast.name}}</p>
    <SkiDayForecastCard class="ma-2"
      v-for="day in forecast.days"
      :key="day.time"
      :epoch="day.time"
      :summary="day.summary"
      :icon="day.icon"
      :minTemp="day.temperatureMin"
      :maxTemp="day.temperatureMax"
    />
    <v-footer color="primary">
      <a class="black--text" href="https://darksky.net/poweredby/">Powered by Dark Sky</a>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </div>
</template>

<script>
import SkiDayForecastCard from '@/components/SkiDayForecastCard.vue'
const axios = require('axios')

export default {
  name: 'SkiDayForecast',
  components: {
    SkiDayForecastCard
  },
  props: {
    location: {
      type: String,
      required: true
    }
  },
  data: () => ({
    forecast: {
      days: [
        {
          time: 0,
          summary: '',
          icon: 'none',
          temperatureMin: 0,
          temperatureMax: 0
        }
      ]
    }
  }),
  created () {
    axios
      .get(`${process.env.VUE_APP_ROOT_API}/${this.location}`)
      .then(response => {
        this.forecast = response.data
      })
  }
}
</script>
