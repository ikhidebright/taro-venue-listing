<template>
    <v-container>
<div>
  <div class="home">
    <br>
    <br>
    <br>
    <div class="d-flex flex-row mb-1">
  <Sort2 />
  <div>
    <h1 class="ml-5 mb-2">Venues & Event centers in {{ $route.params.name }}</h1>
    <Sort />
    <div class="d-sm-flex flex-sm-column d-lg-flex flex-lg-row mb-6">
    <div v-for="item in items" :key="item.id">
    <VenueCard :item="item"/>
    </div>
    </div>
    </div>
    </div>
    <br>
  </div>
  </div>
    </v-container>
</template>

<script>
// @ is an alias to /src
import VenueCard from "@/components/VenueCards/VenueCard.vue";
import Sort from "@/components/SiteComponents/Sort.vue";
import Sort2 from "@/components/SiteComponents/Sort2.vue";

export default {
  name: "Home",
  components: {
    VenueCard,
    Sort,
    Sort2
  },
  data () {
    return {
    items: [
      {
        id: 1,
        name: "Spring Fields Center",
        capacity: 300,
        city: "Lugbe",
        state: "Abuja"
      },
      {
        id: 2,
        name: "Glory Dome House",
        capacity: 1200,
        city: "Gwagwalada",
        state: "Abuja"
      },
      {
        id: 3,
        name: "The Civic Center",
        capacity: 4000,
        city: "Ikoyi",
        state: "Lagos"
      }
    ]
  }
 }
};
</script>

<style scoped>
.myflex {
  display: flex;
  flex-direction: column;
}

@media only screen and (min-width: 600px) {
  .myflex {
  display: flex;
  flex-direction: row
}
}
</style>