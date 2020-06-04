<template>
  <div class="home">
    <Hero />
    <br>
    <br>
    <div class="col-lg-9 mx-auto col-sm-3">
    <div class="d-sm-flex flex-sm-column d-lg-flex flex-lg-row mb-auto flex-wrap justify-space-around">
    <div v-for="item in items" :key="item.id">
    <VenueCard :item="item"/>
    </div>
    </div>
    </div>
    <br>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import VenueCard from "@/components/VenueCards/VenueCard.vue";
import axios from 'axios'

export default {
  name: "Home",
  components: {
    Hero,
    VenueCard
  },
  data () {
    return {
    items: []
  }
 },
 created () {
   axios.get(`${this.$store.state.url}/venues`)
   .then((res) => {
     this.items = res.data.result
   })   
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