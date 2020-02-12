<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="auto">
        <v-card
          class="mx-auto"
          min-width="200"
          raised
        >
          <v-card-title>Boyne Mountain</v-card-title>
          <v-card-text><router-link to="/boyne">Forecast</router-link></v-card-text>
        </v-card>
      </v-col>
      <v-col cols="auto" >
        <v-card
          class="mx-auto"
          min-width="200"
          raised
        >
          <v-card-title>Mt Holly</v-card-title>
          <v-card-text><router-link to="/mtholly">Forecast</router-link></v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
