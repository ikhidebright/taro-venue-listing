<template>
<div class='main mb-9'>
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
              <v-card-title class="headline">{{venue.name}}</v-card-title>
            <v-card-subtitle>{{venue.city}}, {{venue.state}}</v-card-subtitle>
            <p class="ml-4 body-2">{{ venue.description }}</p>
               </div>
         </div>
             <v-card-actions>
              <v-btn text :to="`/manage/${venue.venue_id}-${venue.name.replace(/[' ']+/g,'-').toLowerCase()}`">Manage</v-btn>
              <v-spacer></v-spacer>
          <v-btn
        small
        dark
        color='#325567'
        class="mr-4 transperent caption"
      >
        <v-icon>mdi-eye</v-icon> <span class="subheading caption">{{ venue.views }}</span>
      </v-btn> 
       <v-btn
        small
        dark
        color='#325567'
        class="mr-4 transperent caption"
      >
        <v-icon>mdi-heart</v-icon> <span class="subheading caption">{{ venue.likes }}</span>
      </v-btn> 
      <v-switch persistent-hint=true :hint="`${message == true? 'Booked' : 'Available'}`" v-model="message" color="green"></v-switch>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
</div>
</template>

<script>
export default {
    name: 'VenueCard',
    props: ["venue"],
    data () {
      return {
        message: false
      }
    }
}
</script>

<style scoped>
</style>