<template>
  <v-card
    class="mx-auto ml-4 mb-9"
    max-width="280"
    :to="`/venue/${item.venue_id}-${item.name.replace(/[' ']+/g,'-').toLowerCase()}`"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="130px"
    > <v-btn
        small
        dark
        color='#325567'
        class="mr-4 transperent subheading caption"
        :title="`${item.name} is Available`"
      >
      Available
      </v-btn></v-img>
    <v-card-title>
      {{ item.name }}
    </v-card-title>
    <v-card-text class="mt--7">   
    <div class="ml-1">{{ item.city }}, {{ item.state }}</div>
    <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="`${item.rating}`"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
      </v-row>
      <div class="ml-1">{{ item.capacity }} capacity</div>
      </v-card-text>
    <v-card-actions>
      <v-btn
        text
        @click="vcard(item.venue_id)"
        color="#001F90"
        class="moredetailsbutton"
        :to="`/venue/${item.venue_id}-${item.name.replace(/[' ']+/g,'-').toLowerCase()}`"
      >
        More Details
      </v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>

export default {
    name: 'VenueCard',
    props: ["item"]
}
</script>

<style scoped>
.moredetailsbutton {
    background-color: #ffffff;
    width: 100%;
    border: 1px solid #001F90;
}
</style>