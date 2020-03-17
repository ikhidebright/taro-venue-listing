<template>
  <v-card
    class=""
    max-width="250"
    to="/venue/23-Landmark-Event-Center"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="110px"
    ></v-img>

    <v-card-title>
      Landmark Event Center
    </v-card-title>

    <v-card-subtitle>
      Ikeja, Lagos
    </v-card-subtitle>

  </v-card>
</template>

<script>
export default {
    name: 'VenueCard'
}
</script>

<style scoped>
.moredetailsbutton {
    background-color: #ffffff;
    width: 60%;
    border: 1px solid #001F90;
}
</style>