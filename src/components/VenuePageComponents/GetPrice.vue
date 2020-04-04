<template>
  <v-container>
  <v-row justify="left">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
      <v-btn color="#001F90"
  class="d-none d-lg-flex d-xl-flex mr-3 price2"
  v-on="on"
  flat
  tile
  >
  Request Reservation</v-btn>

  <v-btn color="#001F90"
  class="d-lg-none price"
  v-on="on"
  fixed = true
  flat
  tile
  block
  bottom>
  Request Reservation</v-btn>
        
      </template>
      <v-card>
        <Form :items="items" :bookdetails='bookdetails'/>
        <v-container>
      <!--  <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn 
        color="red lighten-2"
        outlined
        tile
        @click="dialog = false">
        Close
        </v-btn>
          <v-btn 
        color="#001F90"
        outlined
        tile 
        @click="dialog = false">
        See Price
        </v-btn>
        </v-card-actions> -->
         </v-container>
      </v-card>
    </v-dialog>
  </v-row>
  </v-container>
</template>

<script>
import Form from '@/components/VenuePageComponents/Form.vue'

  export default {
    props: ['items'],
    data: vm => ({
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      dialog: false,
      menu1: false,
      menu2: false,
      venuetype: ['Wedding reception', 'Meeting', 'Training', 'Conference', 'Get Together', 'Product Lunch', 'Corporate Party', 'Wedding Anniversery', 'Engagement Party', 'Birthday Party', 'Class Reunion', 'Brand Promotion', 'Fashion Show', 'Pool Party', 'Award Show', 'Exhibition', 'Bachelor Party', 'Other']
    }),

    components: {
      Form
    },

    computed: {
      bookdetails () {
          return this.$store.state.booking
      },

      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },

     watch: {
      date () {
        this.dateFormatted = this.formatDate(this.date)
      },
    },

    methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
    },
  }
</script>

<style scoped>
.price {
    width: 100%;
    color: white;
    z-index: 1;
    height: 5vh;
    padding: 4vh;
}

.price2 {
    width: 50%;
    color: white;
    margin: 0 0 0 3vmin;
}
</style>