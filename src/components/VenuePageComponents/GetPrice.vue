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
  bottom>
  Request Reservation</v-btn>
        
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Book Top western road trips</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
        <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="dateFormatted"
              label="*Event Date"
              outlined
              @blur="date = parseDate(dateFormatted)"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
        </v-menu>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
          :items="venuetype"
          label="*Event Type"
          single-line
          outlined
        ></v-select>
              </v-col>
              <v-col cols="12">
                <v-text-field
                label="*Full Name"
                required
                outlined
              ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                type='number'
                label="*Phone Number"
                required
                outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                label="*Email"
                required
                outlined
              ></v-text-field>
              </v-col>
            </v-row>
          <small>*indicates required field</small>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">See Price</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  </v-container>
</template>

<script>
  export default {
    data: vm => ({
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      dialog: false,
      menu1: false,
      menu2: false,
      venuetype: ['Wedding reception', 'Meeting', 'Training', 'Conference', 'Get Together', 'Product Lunch', 'Corporate Party', 'Wedding Anniversery', 'Engagement Party', 'Birthday Party', 'Class Reunion', 'Brand Promotion', 'Fashion Show', 'Pool Party', 'Award Show', 'Exhibition', 'Bachelor Party', 'Other']
    }),

    computed: {
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
    color: white;
    margin: 0 0 0 3vmin;
}
</style>