<template>
    <div class="innercom">
        <v-container>
        <h3 class="subheading">Reviews for {{ items[0].name }}</h3>     
    <p class="ml-2 mt-5" v-if="reviews.length < 1">There are no reviews for {{ items[0].name }} yet.
      Be the first to write a review.</p>
       <p class="ml-2 mt-5" v-if="reviews.length > 0">There are  {{ reviews.length }} reviews for {{ items[0].name }}</p>
  <v-row justify="left">
    <v-dialog v-model="dialog" persistent max-width="500px">
      <template v-slot:activator="{ on }">
<br>
<br>
    <v-btn color="#001F90" outlined class="ml-5" v-on="on">Write a Review</v-btn>   </template>
      <v-card>
        <v-card-title>
          <span class="headline">Review {{ items[0].name }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
          <v-alert
      text
      dense
      color="teal"
      icon="mdi-clock-fast"
      border="left"
      v-if='alert'
    >
     Thanks for reviewing {{ items[0].name }}!
        <br>
        </v-alert>
      <v-alert
      text
      dense
      color="red"
      border="left"
      v-if='error'
    >
     Sorry an error occured
        <br>
        </v-alert>
            <v-row>
              <v-col cols="12" sm="6" md="12">
                  <v-textarea
                  required
                  :disabled="disabled"
                  outlined
                  v-model="message"
                  auto-grow
                  label="Review"></v-textarea>
                </v-col>
          <v-rating
            :value="0"
            dense
            :readonly="disabled"
            v-model="stars"
            color="orange"
            background-color="orange"
            hover
            size="35"
            class="mr-2"
          ></v-rating>
        <v-spacer></v-spacer>
        <v-progress-circular v-if="load && !alert" indeterminate size="40"></v-progress-circular>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn 
        color="red lighten-2"
        outlined
        tile
        @click="dialog = false, load = false">
        Close
        </v-btn>
          <v-btn 
        color="#001F90"
        outlined
        tile 
        @click="review()">
        Rate
        </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  <v-row>
    <ReviewItem :reviews="reviews"/>
    </v-row>
        </v-container>
    </div>
</template>

<script>
import axios from 'axios'
import  ReviewItem from './ReviewItem'

export default {
    name: 'CustomersReview',
    props: ['items', 'reviews'],
    data () {
      return {
          dialog: false,
          load: false,
          alert: false,
          error: false,
          disabled: false,
          stars: '',
          message: ''
     }
    },
    methods: {
        review () {
        this.load = true
        this.disabled = true
        axios.post(`${this.$store.state.url}/review`, {
          stars: this.stars,
          message: this.message,
          venue_id: this.items[0].venue_id
        }).then((res) => {
          if(res.status == 200) {
          this.alert = true
           this.error = false
          this.stars = ''
          this.message = ''
          this.disabled = false
          } else {
          this.disabled = false
          this.alert = false
          this.error = true
          }
         axios.get(`${this.$store.state.url}/reviews/${this.items[0].venue_id}`)
        .then((res) => {
          this.$store.commit("setReview", res.data.result)
        })
        })
      }
    },
    components: {
      ReviewItem
    }
}
</script>

<style scoped>
</style>