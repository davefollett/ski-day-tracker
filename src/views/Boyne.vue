<template>
  <div>
    <p class="display-1 text-center">{{boyne.name}}</p>
    <SkiDayForecast class="ma-2"
      v-for="day in boyne.days"
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
import SkiDayForecast from '@/components/SkiDayForecast.vue'
const axios = require('axios')

export default {
  name: 'boyne',
  components: {
    SkiDayForecast
  },
  data: () => ({
    boyne: {
      name: 'Boyne Mountain',
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
      .get(`${process.env.VUE_APP_ROOT_API}/boyne`)
      .then(response => {
        this.boyne = response.data
      })
  }
}
</script>
