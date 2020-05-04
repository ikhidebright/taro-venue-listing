<template>
    <div class="innercom">
    <v-container>
            <h3 class="subheading">Venues Near {{ items[0].city }}, {{ items[0].state }}</h3>
            </v-container>
    <v-container>
    <v-slide-group show-arrows>
      <v-slide-item
        v-for="ite in item"
        :key="ite.venue_id"
        class="ma-2"
      >
          <VenueCardV2 :ite="ite"/>
      </v-slide-item>
    </v-slide-group>
    </v-container>
    <br>
    </div>
</template>

<script>
import VenueCardV2 from '@/components/VenueCards/VenueCardV2.vue'
import axios from 'axios'

export default {
    name: 'NearbyVenues',
    props: ['items'],
    data: () => ({
      model: null,
      item: []
    }),
    components: {
        VenueCardV2
    },

    created () {
      axios.get(`${this.$store.state.url}/places/${this.items[0].state}`)
      .then((res) => {
        this.item = res.data.result
        console.log(this.item)
      })
    }
}
</script>

<style scoped>
</style>