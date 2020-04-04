<template>
<div class='main'>
<v-row dense>
        <v-col cols="12" sm='12' lg='9'>
          <v-card
            color="#385F73"
            dark
            dense
          >
          <div class="d-flex flex-no-wrap">
          <div>
          <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></v-img>
              </v-avatar>
             </div>
              <div>
              <v-card-title class="headline">Digworths services</v-card-title>
            <v-card-subtitle>Ikoyi, Lagos</v-card-subtitle>
            <p class="ml-4 body-2">A Conference Hall perfect for presentations or conferences for 15 guests (boardroom) fully equipped with Modern multimedia facilities to make your conference or meeting memorable.</p>
               </div>
         </div>
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
      <v-switch persistent-hint=true :hint="`${message == true? 'Booked' : 'Vacant'}`" v-model="message" color="red"></v-switch>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
</div>
</template>

<script>
export default {
    name: 'VenueCard',
    data () {
      return {
        message: false
      }
    }
}
</script>

<style scoped>
</style>