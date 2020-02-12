<template>
  <div>
    <SkiDayForecast location="boyne"/>
  </div>
</template>

<script>
import SkiDayForecast from '@/components/SkiDayForecast.vue'

export default {
  name: 'boyne',
  components: {
    SkiDayForecast
  }
}
</script>
