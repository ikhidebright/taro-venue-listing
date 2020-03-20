<template>
  <div class="home">
    <Hero />
    <br>
    <br>
    <div class="d-sm-flex flex-sm-column d-lg-flex flex-lg-row mb-6">
    <div v-for="item in items" :key="item.id">
    <VenueCard :item="item"/>
    </div>
    </div>
    <br>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import VenueCard from "@/components/VenueCards/VenueCard.vue";

export default {
  name: "Home",
  components: {
    Hero,
    VenueCard
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