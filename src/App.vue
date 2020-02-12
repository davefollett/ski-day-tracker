<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="white--text">SKI DAY TRACKER</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense nav class="py-0">
        <v-list-item-content>
          <v-btn to="/" text @click="drawer = false">
            <span class="mr-2">Home</span>
          </v-btn>
          <v-btn to="/boyne" text @click="drawer = false">
            <span class="mr-2">Boyne Mountain</span>
          </v-btn>
          <v-btn to="/mtholly" text @click="drawer = false">
            <span class="mr-2">Mt Holly</span>
          </v-btn>
        </v-list-item-content>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer color="primary">
      <a class="black--text" href="https://darksky.net/poweredby/">Powered by Dark Sky</a>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data: () => ({
    drawer: false
  })
}
</script>
