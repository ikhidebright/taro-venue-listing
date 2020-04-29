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
                <v-img :src="venue.thumbnail_image"></v-img>
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
              <v-row justify="">
    <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on }">
        <v-btn color="pink darken-1" class="ml-4" text v-on="on">Remove</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">Delete {{ venue.name }}?</v-card-title>
        <v-card-text color="red">Confirm that you want to delete {{ venue.name }}. This action is irreversible</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" text @click="dialog = false">Cancel</v-btn>
          <v-btn color="green darken-1" text @click='remove(venue.venue_id)'>Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
              
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
      <v-switch persistent-hint=true :hint="`${venue.status == true? 'Booked' : 'Available'}`" v-model="venue.status" color="green" @change="changestatus(venue)"></v-switch>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
</div>
</template>

<script>
import axios from "axios"

export default {
    name: 'VenueCard',
    props: ["venue"],
    data () {
      return {
        message: false,
        dialog: false
      }
    },
    methods: {
    addvenueerrorfunc (message, show) {
       let item = {
            errormessagealert: message,
            erroralert: show
          }
          this.$store.commit("setErrorAlert", item)
      },

      addvenuesuccessfunc (message, show) {
       let item = {
            successmessagealert: message,
            successalert: show
          }
          this.$store.commit("setSuccessAlert", item)
      },

      remove (x) {
          axios.post(`${this.$store.state.url}/deletevenue/${x}`)
          .then((res) => {
          if (res.status === 200 && res.data.success === true) {
            this.dialog = false
            this.addvenuesuccessfunc(res.data.message, true)
          } else {
            this.dialog = false
            this.addvenueerrorfunc(res.data.message, true)
          }
       }).catch((e) => {
         this.dialog = false
         this.addvenueerrorfunc(e, true)
       })
    },

    changestatus (x) {
          axios.patch(`${this.$store.state.url}/status`, {
            status: !x.status,
            venue_id: x.venue_id
          })
          .then((res) => {
          if (res.status === 200 && res.data.success === true) {
            let getOwnerVenues = this.$store.getters.myvenues
            getOwnerVenues.then(x => this.$store.commit("setLoggedinOwnerVenues", x.data.result))
            this.addvenuesuccessfunc(res.data.message, true)
          } else {
            this.addvenueerrorfunc(res.data.message, true)
          }
       }).catch((e) => {
         this.addvenueerrorfunc(e, true)
       })
    },
    }
}
</script>

<style scoped>
</style>