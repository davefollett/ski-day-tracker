<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <SkiDayForecast class="ma-2"
      v-for="day in mtholly.days"
      :key="day.time"
      :epoch="day.time"
      :summary="day.summary"
      :icon="day.icon"
      :minTemp="day.temperatureMin"
      :maxTemp="day.temperatureMax"
    />
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import SkiDayForecast from '@/components/SkiDayForecast.vue'
const axios = require('axios')

export default {
  name: 'home',
  components: {
    // HelloWorld,
    SkiDayForecast
  },
  data: () => ({
    mtholly: {
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
      .get(`${process.env.VUE_APP_ROOT_API}/mtholly`)
      .then(response => {
        this.mtholly = response.data
      })
  }
}
</script>
