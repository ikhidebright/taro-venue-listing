<template>
  <v-card
    flat
    class="ml-3 hidden-sm-and-down"
  >
    <v-card-text>
      <v-row
      >
        <v-btn-toggle
          v-model="toggle_exclusive"
          mandatory
        >
          <v-btn small @click='bestmatch'>
            Best match
          </v-btn>
          <v-btn small>
            Best sellers
          </v-btn>
          <v-btn small>
           Newest
          </v-btn>
          <v-btn small>
            Trending
          </v-btn>
           <v-btn small>
            Highest likes
          </v-btn>
           <v-btn small>
            Available
          </v-btn>
          <v-btn small @click='rated'>
            Best rated
          </v-btn>
        </v-btn-toggle>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        toggle_exclusive: undefined
        }
    },
    methods: {
      rated () {
        let rate = this.$store.state.venues.sort((a,b) => {
          return b.rating - a.rating
        })
        this.$store.commit('setItem', rate)
      },

      bestmatch () {
        this.$store.commit('setItem', this.$store.state.venues)
      }
    }
  }
</script>