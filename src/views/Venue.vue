<template>
    <div class="venuePage mt-9">
    <br>
    <v-container>
  <v-card
    max-width="804"
    flat = true
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="60vh"
    ></v-img>
<div class="d-flex mb-auto flex-wrap mt-1">
<v-slide-group show-arrows>
 <v-slide-item
        v-for="item in 8" 
        :key="item.id"
        class="ma-1"
      >
    <v-img
      class='ml-1'
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="7vh"
      width='70'
      @click='changePic()'
    ></v-img>
     </v-slide-item>
    </v-slide-group>
    </div>

    <h1 class="mt-1">
     {{ items[0].name }}
    </h1>

    <p class="ml-2 mt-1">
       <router-link :to="`/cities/${items[0].city}`" class="li"> {{ items[0].city }}</router-link>, <router-link :to="`/cities/${items[0].state}`" class="li"> {{ items[0].state }}</router-link>
    </p>

    <v-rating
      background-color="orange lighten-3"
      readonly = true
      :value="`${items[0].rating}`"
      color="amber"
      dense
      half-increments
      medium
    >
    </v-rating>

    <v-btn
    class="ma" outlined color="#001F90"
    text
    :to="`/event/${items[0].type.toLowerCase()}`"
    small> 
    <v-icon class="mr-2" dense>home</v-icon>
    {{ items[0].type }}
</v-btn>

      <v-btn
    class="ma-2" outlined color="#001F90"
    text
    small> 
    <v-icon class="mr-2" dense>mdi-account-multiple</v-icon>
    {{ items[0].capacity }} Capacity
</v-btn>

    <v-card-actions>
      <!-- <v-btn text>Meeting Room
</v-btn>

      <v-btn
        color="purple"
        text
      >
        Explore
      </v-btn> -->
      <p class="desc">
          A Conference Hall perfect for presentations or conferences for 15 guests (boardroom) fully equipped with Modern multimedia facilities to make your conference or meeting memorable.
      </p>
      

      <v-spacer></v-spacer>
      <!-- <v-btn icon color="red">
        <v-icon>mdi-heart</v-icon>
      </v-btn> -->
      
      <v-speed-dial
      v-model="fab"
      :top="top"
      :bottom="bottom"
      :right="right"
      :left="left"
      :direction="direction"
      :open-on-hover="hover"
      :transition="transition"
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="#001F90"
          dark
          fab
        >
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else title="Share venue">mdi-share-variant</v-icon>
        </v-btn>
      </template>
      <v-btn
        fab
        dark
        small
        color="indigo"
        title="Share on Facebook"
      >
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="black"
        title="Share via e-mail"
        :to="`http://email.com`"
      >
        <v-icon>mdi-email</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="red"
        title="Share on Slack"
        :to="`http://slack.com/${$route.params.name}`"
      >
        <v-icon>mdi-slack</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="blue"
        title="Share on Twitter"
      >
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
    </v-speed-dial>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

      </div>
    </v-expand-transition>
  </v-card>
  </v-container>
  <Amenities :items="items"/>
  <GetPrice :items="items"/>
  <VenueFAQs :items="items"/>
  <CustomersReview :items="items"/>
  <NearbyVenues :items="items"/>
        <!-- <h2>{{ $route.params.id }}</h2>
        <h2>{{ $route.params.name }}</h2> -->
    </div>
</template>

<script>
import NearbyVenues from '@/components/VenuePageComponents/NearbyVenues.vue'
import CustomersReview from '@/components/VenuePageComponents/CustomersReview.vue'
import Amenities from '@/components/VenuePageComponents/Amenities.vue'
import VenueFAQs from '@/components/VenuePageComponents/VenueFAQs.vue'
import GetPrice from '@/components/VenuePageComponents/GetPrice.vue'
import axios from 'axios'

export default {
 data: () => ({
      direction: 'top',
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: 'slide-y-reverse-transition',
      items: []
    }),

    components: {
        NearbyVenues,
        CustomersReview,
        Amenities,
        VenueFAQs,
        GetPrice
    },

    methods: {
      changePic () {
        alert('clicked')
      }
    },

    computed: {
      activeFab () {
        switch (this.tabs) {
          case 'one': return { class: 'purple', icon: 'account_circle' }
          case 'two': return { class: 'red', icon: 'edit' }
          case 'three': return { class: 'green', icon: 'keyboard_arrow_up' }
          default: return {}
        }
      },
    },

    created () {
      axios.get(`http://localhost:8000/venues/${this.$route.params.id}`)
      .then((res) => {
        this.items = res.data.result
      })
    }

    // watch: {
    //   top (val) {
    //     this.bottom = !val
    //   },
    //   right (val) {
    //     this.left = !val
    //   },
    //   bottom (val) {
    //     this.top = !val
    //   },
    //   left (val) {
    //     this.right = !val
    //   },
    // },
}
</script>

<style scoped>
.venueprofile {
    width: 70%;
    height: 80vh;
}

.desc {
    width: 60%;
}

.price {
    width: 100%;
    color: white;
    z-index: 1;
}

.venuePage {
    background-color: #ffffff;
}
</style>