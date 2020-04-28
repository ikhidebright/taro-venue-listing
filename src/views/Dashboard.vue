<template>
    <div class="dashboard mt-8">
    <v-container>
    <v-row class='mb-1 mt-4'>
    <div class='headline font-weight-light text-capitalize ml-3'>{{ name[0].last_name }}'s venues</div>
    <v-spacer></v-spacer>
   <!-- <v-btn color="#001F90" dark to='/propose' class="mr-3">Add Venue</v-btn> -->
    </v-row>
    </v-container>
    <v-divider></v-divider>
    <v-container class="mt-5">

     <!--if no venues starts -->
   
      <v-col cols="12" sm="12" md="12">
      <p class="font-weight-light text-center mx-auto my-12 mt-12" v-if='venues.length < 1'>
      Seems you don't have any Venue added yet, <router-link to='/propose'>Add one now!</router-link>
      </p>
      </v-col>

    <!--if no venues end -->

    <div v-for="venue in venues" :key="venue.id">
    <DashboardVenueCards :venue="venue"/>
    </div>
    </v-container>
    </div>
</template>

<script>
import DashboardVenueCards from "@/components/VenueCards/DashboardVenueCards.vue";

export default {
    name: 'Dashboard',
    components: {
        DashboardVenueCards
    },
    computed: {
        venues () {
            return this.$store.state.loggedInOwnerVenues
        },
        name () {
            return this.$store.state.user
      }
    }
}
</script>

<style scoped>
.dashboard {
    background-color:#f5f5f5;
    height: auto;
   padding-bottom: 10vh;
}
</style>