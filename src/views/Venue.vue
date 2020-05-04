<template>
    <div class="venuePage mt-9">
    <br>
    <v-container>
  <v-card
    max-width="804"
    flat = true
  >
    <v-img
      :src="coverpicture"
      height="60vh"
    > <v-col cols="12" sm="12">
     <v-btn
        small
        dark
        color='red'
        class="mr-4 transperent caption"
        :title="liked && items[0].likes > 1 ? `You and ${items[0].likes - 1} others like ${items[0].name}` : 
                liked && items[0].likes < 1 ? `You like ${items[0].name}` : `Like ${items[0].name}`"
        @click="like(items[0])"
      >
        <v-icon>mdi-heart</v-icon> <span class="subheading caption">{{ items[0].likes }}</span>
      </v-btn>  
       <v-btn
        small
        :title="`${items[0].views} people has seen ${items[0].name}`"
        class="mr-4 transperent caption"
      >
        <v-icon>mdi-eye</v-icon> <span class="subheading caption">{{ items[0].views }}</span>
      </v-btn> 
          <v-btn
        small
        dark
        v-if="items[0].status == true"
        color='red'
        class="mr-4 transperent subheading caption"
        :title="`${items[0].name} is Booked`"
      >
      Booked
      </v-btn>

       <v-btn
        small
        dark
        v-if="items[0].status == false"
        color='green'
        class="mr-4 transperent subheading caption"
        :title="`${items[0].name} is Available`"
      >
      Available
      </v-btn>
          </v-col>
          </v-img>
<div class="d-flex mb-auto flex-wrap mt-1">
<v-slide-group show-arrows>
 <v-slide-item
        v-for="item in venuegallery" 
        :key="item.id"
        class="ma-1"
      >
    <v-img
      class='ml-1'
      :src="item.image"
      height="7vh"
      width='70'
      @click='changePic(item.image)'
    ></v-img>
     </v-slide-item>
    </v-slide-group>
    </div>

    <h1 class="mt-1">
     {{ items[0].name }}
    </h1>

    <p class="ml-2 mt-1">
    <v-icon class="mr-2" dense>mdi-map-marker</v-icon>   <router-link :to="`/cities/${items[0].city.replace(/[' ']+/g,'-').toLowerCase()}`" class="li"> {{ items[0].city }}</router-link>, <router-link :to="`/cities/${items[0].state.replace(/[' ']+/g,'-').toLowerCase()}`" class="li"> {{ items[0].state }}</router-link>
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
    :to="`/event/${items[0].type.replace(/[' ']+/g,'-').toLowerCase()}`"
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
      <p class="font-weight-light body-1 mr-2">
      {{ items[0].description }}
        </p>
      <v-spacer></v-spacer>
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
       <div data-href="https://developers.facebook.com/docs/plugins/" 
data-layout="button_count" data-size="small"><a target="_blank" 
:href="`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftaro.netlify.app${$route.path}&amp;src=sdkpreparse`" class="fb-xfbml-parse-ignore"> 
<v-btn
        fab
        dark
        small
        color="indigo"
        title="Share on Facebook"
      >
    
<v-icon>mdi-facebook</v-icon>
</v-btn></a>
</div>
<a :href="`mailto:?subject=Check out ${items[0].name}&amp;body=Check out this site http://taro.netlify.app/${$route.path}`"
   title="Share by Email">
      <v-btn
        fab
        dark
        small
        color="black"
        title="Share via e-mail"
      >
        <v-icon>mdi-email</v-icon>
      </v-btn>
      </a>
     <!-- <v-btn
        fab
        dark
        small
        color="red"
        title="Share on Slack"
        :to="`http://slack.com/${$route.params.name}`"
      >
        <v-icon>mdi-slack</v-icon>
      </v-btn> -->
      <a class="twitter-share-button"
  :href="`https://twitter.com/intent/tweet?text=Hello guys check out ${items[0].name}`">
      <v-btn
        fab
        dark
        small
        color="blue"
        title="Share on Twitter"
      >
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      </a>
    </v-speed-dial>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
      </div>
    </v-expand-transition>
  </v-card>
  </v-container>
  <GetPrice :items="items"/>
  <Amenities :items="items" :displayamenities="displayamenities" :amenities="amenities"/>
  <VenueFAQs :items="items" :questionsandanswers="questionsandanswers"/>
  <Map :items="items"/>
  <CustomersReview :items="items" :reviews="reviews"/>
  <NearbyVenues :items="items"/>
    </div>
</template>

<script>
import NearbyVenues from '@/components/VenuePageComponents/NearbyVenues.vue'
import CustomersReview from '@/components/VenuePageComponents/CustomersReview.vue'
import Amenities from '@/components/VenuePageComponents/Amenities.vue'
import VenueFAQs from '@/components/VenuePageComponents/VenueFAQs.vue'
import GetPrice from '@/components/VenuePageComponents/GetPrice.vue'
import Map from '@/components/VenuePageComponents/Map.vue'
import axios from 'axios'

export default {
  name: "venue",
 data: () => ({
      direction: 'top',
      coverpicture: null,
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      liked: false,
      transition: 'slide-y-reverse-transition',
    }),

    components: {
        NearbyVenues,
        CustomersReview,
        Amenities,
        VenueFAQs,
        GetPrice,
        Map
    },
    methods: {
      assignCoverPicture () {
        this.coverpicture = this.items[0].thumbnail_image
      },

      changePic (x) {
        this.coverpicture = x
      },
      view () {
        axios.patch(`${this.$store.state.url}/view/${this.items[0].venue_id}`, {
          view: this.items[0].views +1
        }).then((res) => {
         console.log(res)
        })
      },
      settitle () {
      let title = this.items[0].name + ' | Event center in ' + this.items[0].city + ', ' + this.items[0].state + ' | taro.com'
      document.title = title
      },
      checklike () {
         let item = this.items[0].venue_id
         let liked = localStorage.getItem(item)
       if (liked == item) {
         this.liked = true
       } else {
         this.liked = false
       }
      },
      like (item) {
        if (!this.liked) {
        axios.patch(`${this.$store.state.url}/like/${item.venue_id}`, {
          like: item.likes +1
        }).then((res) => {
          if (res.status == 200) {
            this.liked = true
            localStorage.setItem(item.venue_id, item.venue_id)
          } else {
            alert("Sorry an error occured")
          }
        })
        }
      }
    },
    watch: {
      '$route.params.id' () {
        setTimeout (() => {
          this.assignCoverPicture()
          this.checklike()
          this.settitle()
        }, 2000)
        axios.get(`${this.$store.state.url}/venues/${this.$route.params.id}`)
        .then((res) => {
          console.log(res)
           this.$store.commit('setVenueD', res.data.result)
      })
      axios.get(`${this.$store.state.url}/reviews/${this.$route.params.id}`)
        .then((res) => {
          console.log(res)
          this.$store.commit("setReview", res.data.result)
        })
      this.checklike()
      this.view()
      this.assignCoverPicture()
      //set amenities
      this.$store.dispatch({
          type: 'getAmenities',
          id: this.$route.params.id
    })

    //set gallery
    this.$store.dispatch({
      type: "getVenueGallery",
      id: this.$route.params.id
    })

  //set Questions and answers
    this.$store.dispatch({
      type: "getQuestionsandanswers",
      id: this.$route.params.id
    })
    this.settitle()
    }
  },
    computed: {
      items () {
        return this.$store.state.venued
      },
      reviews () {
        return this.$store.state.reviews
      },

      displayamenities () {
        return this.$store.state.displayamenities
      },

      amenities () {
        return this.$store.state.amenities
      },

      questionsandanswers () {
        return this.$store.state.questionsandanswers
      },

      venuegallery () {
        return this.$store.state.venuegallery
      },

      activeFab () {
        switch (this.tabs) {
          case 'one': return { class: 'purple', icon: 'account_circle' }
          case 'two': return { class: 'red', icon: 'edit' }
          case 'three': return { class: 'green', icon: 'keyboard_arrow_up' }
          default: return {}
        }
      },
    },
    mounted () {
      this.checklike()
      this.view()
      this.assignCoverPicture()

      //set amenities
      this.$store.dispatch({
          type: 'getAmenities',
          id: this.$route.params.id
    })

     //set gallery
    this.$store.dispatch({
      type: "getVenueGallery",
      id: this.$route.params.id
    })

    //set Questions and answers
    this.$store.dispatch({
      type: "getQuestionsandanswers",
      id: this.$route.params.id
    })

    // set page title
    this.settitle()
    }
}
</script>

<style scoped>
.venueprofile {
    width: 70%;
    height: 80vh;
}

.desc {
    width: 60%;
    font-size: 1rem
}

.price {
    width: 100%;
    color: white;
    z-index: 1;
}

.venuePage {
    background-color: #ffffff;
}

a {
  text-decoration: none
}
</style>