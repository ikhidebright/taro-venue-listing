<template>
  <v-card
    @click='vcard(ite.venue_id)'
    class=""
    max-width="250"
    :to="`/venue/${ite.venue_id}-${ite.name.replace(/[' ']+/g,'-').toLowerCase()}`"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="110px"
    ></v-img>

    <v-card-title>
    {{ ite.name }}
    </v-card-title>

    <v-card-subtitle>
      {{ ite.city}}, {{ ite.state }}
    </v-card-subtitle>

  </v-card>
</template>

<script>
import axios from 'axios'

export default {
    name: 'VenueCard',
    props: ['ite'],
    methods: {
        vcard (venue_id) {
        axios.get(`http://localhost:8000/venues/${venue_id}`)
        .then((res) => {
            this.$store.commit('setVenueD', res.data.result)
      })
        }
    }
}
</script>

<style scoped>
.moredetailsbutton {
    background-color: #ffffff;
    width: 60%;
    border: 1px solid #001F90;
}
</style>