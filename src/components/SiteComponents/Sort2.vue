<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12 hidden-sm-and-down"
    max-width="374"
    color="#f0f1f1"
  >
  <v-card-title>Filter</v-card-title>

<v-col cols="12">

<p>Tell us your budget</p>

      <v-text-field
            type="number"
            label="Budget"
            single-line
            outlined
          ></v-text-field>


<p>How many guests are you expecting</p>
          <v-radio-group v-model="radioGroup">
      <v-radio
        v-for="n in 5"
        :key="n"
        :label="`Radio ${n}`"
        :value="n"
      ></v-radio>
    </v-radio-group>

<p>Venue Types</p>
    <v-checkbox
              v-model="ex4"
              v-for="n in 5"
              :key="n"
              :label="`Radio ${n}`"
              color="indigo darken-3"
              value="indigo darken-3"
              hide-details
            ></v-checkbox>
            <br>

            <p>Event Type</p>
          <v-radio-group v-model="radioGroup">
      <v-radio
        v-for="n in 5"
        :key="n"
        :label="`Radio ${n}`"
        :value="n"
      ></v-radio>
    </v-radio-group>
    </v-col>

    <v-card-actions>
      <v-btn
        color="red lighten-2"
        text
        outlined
        @click="reserve"
      >
        Reset
      </v-btn>

      <v-btn
        color="#001F90"
        dark
        tile
        @click="reserve"
      >
        Apply Filter
      </v-btn>

    </v-card-actions>
  </v-card>
</template>
