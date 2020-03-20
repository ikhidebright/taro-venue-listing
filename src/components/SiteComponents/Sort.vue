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
          <v-btn small>
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
           Price
          </v-btn>
          <v-btn small>
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
        toggle_exclusive: undefined,
      }
    },
  }
</script>