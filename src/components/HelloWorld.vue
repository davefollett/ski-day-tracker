<template>
  <v-card
    class="mx-auto"
    max-width="400"
    raised
  >
    <v-card-title>{{ starwars.name }}</v-card-title>
    <v-card-text>
      <p>
        Gender: {{ starwars.gender }}
        <br>
        Eye Color: {{ starwars.eye_color }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
const axios = require('axios')

export default {
  name: 'HelloWorld',

  data: () => ({
    starwars: ''
  }),
  mounted () {
    axios
      .get(`${process.env.VUE_APP_ROOT_API}/starwars`)
      .then(response => (this.starwars = response.data))
  }
}
</script>
