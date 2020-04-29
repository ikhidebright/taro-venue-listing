<template>
  <v-card
    class=""
    max-width="250"
    :to="`/venue/${ite.venue_id}-${ite.name.replace(/[' ']+/g,'-').toLowerCase()}`"
  >
    <v-img
      :src="ite.thumbnail_image"
      height="110px"
    >
   <v-btn
        small
        dark
        v-if="ite.status == false"
        color='green'
        class="mr-4 transperent subheading caption"
        :title="`${ite.name} is Available`"
      >
      Available
      </v-btn>

      <v-btn
        small
        dark
        v-if="ite.status == true"
        color='red'
        class="mr-4 transperent subheading caption"
        :title="`${ite.name} is Booked`"
      >
      Booked
      </v-btn>
      
      </v-img>

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