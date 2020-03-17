<template>
    <div class="innercom">
    <v-container>
            <h3 class="subheading">Venues Near Ikeja, Lagos</h3>
            </v-container>
    <v-slide-group show-arrows>
      <v-slide-item
        v-for="n in 10"
        :key="n"
        class="ma-2"
      >
          <VenueCardV2 />
      </v-slide-item>
    </v-slide-group>
    <br>
    </div>
</template>

<script>
import VenueCardV2 from '@/components/VenueCards/VenueCardV2.vue'
export default {
    name: 'NearbyVenues',
    data: () => ({
      model: null,
    }),
    components: {
        VenueCardV2
    }
}
</script>

<style scoped>
</style>