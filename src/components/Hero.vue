<template>
  <v-carousel hide-delimiters :show-arrows="false">
    <v-carousel-item
      src="https://images.squarespace-cdn.com/content/v1/54174487e4b03dbd0c081bda/1431633576407-9A5VEBMLLTUZOFZQCGJZ/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Nigerian-Wedding-Photographer-43.JPG"
      transition="fade-transition"
      class="img"
    >
    <template>

      <!--hero text desk-->
      <v-container class="hidden-sm-and-down">
        <div class="word">
        <h1>Book over 350 Venues and Event Centers in Abuja</h1>
        </div>
      </v-container>


      <!--hero text mo-->
      <v-container class="hidden-sm-and-up mt-6">
        <div class="word mt-12">
        <h2 class="mt-12">Book over 350 Venues and Event Centers in Abuja</h2>
        </div>
      </v-container>


      <!-- search bar desktop -->
  <div class="src mx-auto hidden-sm-and-down">
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="3">
          <v-text-field
            label="Venue or Location"
            single-line
            v-model="venueOrLocation"
            outlined
            append-icon="mdi-crosshairs-gps"
            @click:append="getUserLocation"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            type="number"
            label="Number of Guest"
            v-model="numberOfGuest"
            single-line
            outlined
          ></v-text-field>
        </v-col>
         <v-col class="d-flex" cols="12" sm="3">
        <v-select
          :items="venuetype"
          label="Event Type"
          single-line
          v-model="venueType"
          outlined
        ></v-select>
      </v-col>
        <v-col cols="12" sm="3">
          <v-btn x-large color="#001F90" dark>Search venue</v-btn>
          </v-col>
        </v-row>
    </v-container>
  </v-form>
  </div> 


 <!-- search bar mobile -->
  <div class="src hidden-sm-and-up">
  <v-form>
    <v-container>
      <v-container>
      <v-row>
          <v-text-field
            label="Venue or Location"
            single-line
            outlined
            v-model="venueOrLocation"
            append-icon="mdi-crosshairs-gps"
            @click:append="getUserLocation"
          ></v-text-field>
        </v-row>
        </v-container>

        <v-row class="mt-n9">
        <v-col cols="6">
          <v-text-field
            type="number"
            label="Number of Guest"
            v-model="numberOfGuest"
            single-line
            outlined
          ></v-text-field>
        </v-col>

         <v-col class="d-flex" cols="6">
        <v-select
          :items="venuetype"
          label="Event Type"
          single-line
          v-model="venueType"
          outlined
        ></v-select>
      </v-col>
       </v-row>
       <v-container>
        <v-row class="mt-n9">
          <v-btn large block color="#001F90" dark>Search venue</v-btn>
          </v-row>
          </v-container>
    </v-container>
          </v-form>
  </div> 
  </template>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    name: "Hero",
    data () {
      return {
        venueOrLocation: null,
        numberOfGuest: null,
        venueType: null,
        venuetype: ['Wedding reception', 'Meeting', 'Training', 'Conference', 'Get Together', 'Product Lunch', 'Corporate Party', 'Wedding Anniversery', 'Engagement Party', 'Birthday Party', 'Class Reunion', 'Brand Promotion', 'Fashion Show', 'Pool Party', 'Award Show', 'Exhibition', 'Bachelor Party', 'Other']
      }
    },
    methods: {
      getUserLocation () {
        alert("heyy")
      }
    }
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

.img {
  height: auto;
}
</style>