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
    <h1 class="ml-5 mb-2">Venues for {{ $route.params.name.replace(/[-]+/g," ") }}</h1>
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
import axios from 'axios'

export default {
  name: "Home",
  components: {
    VenueCard,
    Sort,
    Sort2
  },
  data () {
    return {
    items: []
  }
 },

 created () {
      let id = this.$route.params.name.replace(/[-]+/g," ").toLowerCase()
      axios.get(`${this.$store.state.url}/event/${id}`)
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