<template>
  <v-card
    class="mx-auto ml-4"
    max-width="280"
    :to="`/venue/${item.id}-${item.name.replace(/[' ']+/g,'-').toLowerCase()}`"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="130px"
    ></v-img>

    <v-card-title>
      {{ item.name }}
    </v-card-title>

    <!-- <v-card-subtitle>
      Ikeja, Lagos
    </v-card-subtitle> -->

    <v-card-text class="mt--7">
        
    <div class="ml-1">{{ item.city }}, {{ item.state }}</div>

    <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
<!-- 
        <div class="grey--text ml-2">4.5</div> -->
      </v-row>

      <!-- <div class="my-4 subtitle-1">
        $ • Italian, Cafe
      </div> -->

      <div class="ml-1">{{ item.capacity }} capacity</div>
    
      </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="#001F90"
        class="moredetailsbutton"
        :to="`/venue/${item.id}-${item.name.replace(/[' ']+/g,'-').toLowerCase()}`"
      >
        More Details
      </v-btn>
      <v-spacer></v-spacer>
      <!-- <v-btn icon color="red">
        <v-icon>mdi-heart</v-icon>
      </v-btn> -->
       <!-- <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn> -->
      <!-- <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn> -->
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <!-- <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text> -->
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