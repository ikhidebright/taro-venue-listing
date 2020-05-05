<template>
  <v-carousel hide-delimiters :show-arrows="false" touchless="true">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      transition="fade-transition"
    >
    <template>
      <v-container class="hidden-sm-and-down">
        <div class="word">
        <h1>Find and Book Venues in Nigeria</h1>
        <h2>from over 7,600 halls in Nigeria</h2>
        </div>
      </v-container>

      <v-container class="hidden-sm-and-up mt-12">
        <div class="word mt-12">
        <div class="mt-12"></div>
        <br>
        <h2 class="mt-12">Find and Book Venues in Nigeria from over 7,600 halls in Nigeria</h2>
      <!--  <p class="subtitle-1 font-weight-light">from over 7,600 halls in Nigeria</p> -->
        </div>
      </v-container>
      <!--
  <div class="src mx-auto">
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="3">
          <v-text-field
            label="Venue or Location"
            single-line
            outlined
            append-icon="mdi-crosshairs-gps"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="3">
          <v-text-field
            type="number"
            label="Number of Guest"
            single-line
            outlined
          ></v-text-field>
        </v-col>
        
         <v-col class="d-flex" cols="12" sm="3">
        <v-select
          :items="venuetype"
          label="Event Type"
          single-line
          outlined
        ></v-select>
      </v-col>

        <v-col cols="12" sm="3">
          <v-btn x-large color="#001F90" dark>Search venue</v-btn>
          </v-col>

        </v-row>
    </v-container>
  </v-form>
  </div> -->
</template>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        name: "Hero",
        items: [
          {
            src: 'https://images.squarespace-cdn.com/content/v1/54174487e4b03dbd0c081bda/1431633576407-9A5VEBMLLTUZOFZQCGJZ/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Nigerian-Wedding-Photographer-43.JPG',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
         venuetype: ['Wedding reception', 'Meeting', 'Training', 'Conference', 'Get Together', 'Product Lunch', 'Corporate Party', 'Wedding Anniversery', 'Engagement Party', 'Birthday Party', 'Class Reunion', 'Brand Promotion', 'Fashion Show', 'Pool Party', 'Award Show', 'Exhibition', 'Bachelor Party', 'Other']
      }
    },
  }
</script>

<style scoped>
.word {
color: white;
margin: 10% 0 14% 0;
}

.src {
  background-color: rgba(0, 0, 0, 0.61);
  color: #0b0a4e
}
</style>