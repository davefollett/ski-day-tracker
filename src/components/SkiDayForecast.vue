<template>
  <v-container fluid>
    <v-row justify="center">
      <div v-if="forecast">
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
      </div>
      <div v-else>
        <v-progress-circular
          indeterminate
          color="primary"
          size="80"
          width="8"
        ></v-progress-circular>
      </div>
    </v-row>
  </v-container>
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
    forecast: null
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
