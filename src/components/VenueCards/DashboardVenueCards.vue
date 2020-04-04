<template>
<div class='main'>
<v-row dense>
        <v-col cols="12" sm='12' lg='9'>
          <v-card
            color="#385F73"
            dark
            dense
          >
            <v-card-title class="headline">Digworths services</v-card-title>
            <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>
            <v-card-actions>
              <v-btn text>Manage</v-btn>
              <v-spacer></v-spacer>
         <v-btn
        small
        color='#325567'
        class="mr-4 transperent"
        mailto="http://facebook.com/taro"
        title="views"
      >
        <v-icon>mdi-eye</v-icon> 25K
      </v-btn>
      <v-switch v-model="message" color="purple"></v-switch>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
</div>
</template>

<script>
export default {
    name: 'VenueCard'
}
</script>

<style scoped>
</style>