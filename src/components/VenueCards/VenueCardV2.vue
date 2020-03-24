<template>
  <v-card
    class=""
    max-width="250"
    :to="`/venue/${ite.venue_id}-${ite.name}`"
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
export default {
    name: 'VenueCard',
    props: ['ite']
}
</script>

<style scoped>
.moredetailsbutton {
    background-color: #ffffff;
    width: 60%;
    border: 1px solid #001F90;
}
</style>