<template>
  <v-card
    :loading="loading"
    class="my-12 hidden-sm-and-down"
    max-width="374"
    color="#f0f1f1"
    tile
    dense
  >
  <v-card-title><h3>Filter</h3></v-card-title>

<v-col cols="12">

<h5>Tell us your budget</h5>

      <v-text-field
            type="number"
            prefix= '₦'
            class='mt-4'
            label=""
            single-line
            outlined
          ></v-text-field>


<h5>How many guests are you expecting</h5>
          <v-radio-group v-model="radioGroup">
      <v-radio
        v-for="num in this.$store.state.numberOfGuestFilter"
        :key="num"
        :label="num"
        :value="num"
      ></v-radio>
    </v-radio-group>

<h5>Venue Types</h5>
    <v-checkbox
              v-model="ex4"
              v-for="vt in this.$store.state.venueTypeFilter"
              :key="vt"
              :label="vt"
              color="indigo darken-3"
              value="indigo darken-3"
              hide-details
            ></v-checkbox>
            <br>

            <h5>Event Type</h5>
          <v-radio-group v-model="radioGroup">
      <v-radio
        v-for="et in this.$store.state.eventTypeFilter"
        :key="et"
        :label="et"
        :value="et"
      ></v-radio>
    </v-radio-group>
    </v-col>

    <v-card-actions>
      <v-btn
        color="red lighten-2"
        text 
        @click="reserve"
      >
        Reset
      </v-btn>

      <v-btn
        color="#001F90"
        tile
        text 
        @click="reserve"
      >
        Apply Filter
      </v-btn>

    </v-card-actions>
  </v-card>
</template>
