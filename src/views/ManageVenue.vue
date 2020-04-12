<template>
    <div class="manage mt-12">
      <v-container>
      <br>
<v-col cols="12" sm="9" md="9">
      <v-alert
      text
      dense
      color="teal"
      icon="mdi-clock-fast"
      border="left"
    >
     <b> Edits to Digworths Services Limited are subjected to Review from taro.ng team before approval </b>
        <br>
        </v-alert>
        </v-col>

      <v-col cols="12" sm="6" md="6">
          <v-text-field
            :label="venue.name"
            :value="venue.name"
            outlined
          ></v-text-field>
          </v-col>

 <v-col cols="12" sm="6" md="6">
          <v-row class=''>
          <v-col cols="12" sm="6" md="6">
           <v-select
          :items="state"
          label="Venue type"
          v-model='venuetype'
          single-line
          outlined
        ></v-select>
          </v-col>

          <v-col cols="12" sm="6" md="6">
          <v-text-field
          type='number'
            label="Capacity"
            v-model='capacity'
            outlined
          ></v-text-field>
          </v-col>
          </v-row>
          </v-col>


          <v-col cols="12" sm="6" md="6">
          <v-text-field
            label="Venue Address"
            v-model='address'
            outlined
          ></v-text-field>
          </v-col>

          
<v-col cols="12" sm="6" md="6">
          <v-row class=''>
          <v-col cols="12" sm="6" md="6">
           <v-select
          :items="this.$store.state.states"
          label="Choose State"
          v-model='state'
          single-line
          outlined
        ></v-select>
          </v-col>

          <v-col cols="12" sm="6" md="6">
          <v-text-field
            label="City"
            hint='e.g Ikoyi'
            v-model='city'
            outlined
          ></v-text-field>
          </v-col>
          </v-row>
          </v-col>

           <v-col cols="12" sm="6">
    <v-expansion-panels
      inset
      focusable
      tile
    >
      <v-expansion-panel
        v-for="(item,i) in 5"
        :key="i"
      >
        <v-expansion-panel-header>Item</v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-col>

  <br>

          <v-col cols="12" md="6">
        <v-textarea
          outlined
          no-resize
          name="input-7-4"
          label="Venue Description"
          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
        ></v-textarea>
      </v-col>

    <!-- adding images -->
<v-col cols="12" sm="6" md="6">
      <v-file-input
    v-model="files"
    color="#001F90"
    counter
    label="Add images"
    multiple
    placeholder="Select your files"
    append-icon="mdi-camera"
    prepend-icon=""
    outlined
    :show-size="1000"
  >
    <template v-slot:selection="{ index, text }">
      <v-chip
        v-if="index < 2"
        color="deep-purple accent-4"
        dark
        label
        small
      >
        {{ text }}
      </v-chip>

      <span
        v-else-if="index === 2"
        class="overline grey--text text--darken-3 mx-2"
      >
        +{{ files.length - 2 }} File(s)
      </span>
    </template>
  </v-file-input>
    </v-col>

<v-col cols="12" sm="6">
    <div class="d-flex mb-auto flex-wrap mt-1">
 <div
        v-for="item in 8" 
        :key="item.id"
        class="ma-1"
      >
    <v-img
      class='ml-1'
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="14vh"
      width='140'
      @click='changePic()'
    > 
    <v-col cols="12" sm="3">
            <v-btn fab
        dark
        small
        color='red'
        class="mb-auto"
        title="delete"
        >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-col>
           </v-img>
     </div>
    </div>
     </v-col>

<v-row>
        <v-col cols="12" sm="6" md="6">
         <div class="text-center">
    <v-btn
      x-large color="#001F90" dark block
      @click="overlay = !overlay"
    >
     Submit Change Request
    </v-btn>

    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
  </v-col>
</v-row>
     
      </v-container>
    </div>
</template>

<script>
export default {
    name: 'ManageVenue',
    data: () => ({
      overlay: false,
      files: [],
      state: ['Abia', 'Edo']
    }),
    computed: {
      venue () {
        return this.$store.state.loggedInOwnerVenues.filter((item) => {
          item.id == parseInt(this.$route.params.id)
        })
      }
    }
}
</script>

<style scoped>
</style>