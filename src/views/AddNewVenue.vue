<template>
<v-container class="mt-9">
<br>
<br>
<br>
  <v-stepper v-model="e1" alt-labels text flat>
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">step 1</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">step 2</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">step 3</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <div class="manage mt-0">
      <v-container>
       <v-col cols="12" sm="12" md="9">
      <p class='mt-6 mb-6'>Our platform boost of 100,000+ visitors monthly who are in need of event centers, spaces for meetings, weddings, outdoor occassions and more. Add your venue now and start connecting!</p>
 </v-col>

 <v-col cols="12" sm="8" md="8">
      <v-alert
      text
      dense
      color="teal"
      icon="mdi-clock-fast"
      border="left"
    >
     <b> New venues are subjected to Review from taro.ng team before approval</b>
        <br>
        </v-alert>
        </v-col>

      <v-col cols="12" sm="6" md="6">
          <v-text-field
            label="Venue name"
            v-model='venuename'
            outlined
          ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="6">
          <v-row class=''>
          <v-col cols="12" sm="6" md="6">
           <v-select
          :items="this.$store.state.venueTypeFilter"
          label="Venue type"
          v-model='venuetype'
          single-line
          outlined
        ></v-select>
          </v-col>

          <v-col cols="12" sm="6" md="6">
          <v-text-field
          type='number'
            prefix= '₦'
            label="Venue price"
            v-model='price'
            outlined
          ></v-text-field>
          </v-col>
          </v-row>
          </v-col>

          <v-col cols="12" sm="6" md="6">
          <v-row class=''>
          <v-col cols="12" sm="6" md="6">
           <v-text-field
          type='number'
            label="Venue capacity"
            v-model='capacity'
            outlined
          ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="6">
           <v-text-field
            label="Street"
            v-model='street'
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

          <v-col cols="12" md="6">
        <v-textarea
          outlined
          no-resize
          name="input-7-4"
          label="Venue Description"
          v-model='description'
          ></v-textarea>
      </v-col>

<v-col cols="12" md="6">
      <p class="body-1 mb-3 mt-n5">Choose amenities</p>

      <v-chip-group
        v-model="amenity"
        column
        multiple
      >
       <div
        v-for="amenity in amenities"
        :key="amenity"
      >
        <v-chip filter outlined>{{ amenity }}</v-chip>
        </div>
      </v-chip-group>
     </v-col>


      <v-col cols="12" sm="6" md="6">
    <v-btn
      color="#001F90" dark
      @click="addvenue"
    >
     Continue
    </v-btn>
  </v-col>
<v-container>  
</v-container>
</v-container>
</div>

      <!--  <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>

        <v-btn text>Cancel</v-btn> -->
      </v-stepper-content>

      <v-stepper-content step="2">
        <h3 class="subheading mb-5">Now Answer some FAQ's about {{ insertedName }}</h3>

          <v-col cols="12" sm="6">
    <v-expansion-panels
      inset
      focusable
      tile
    >
     <v-expansion-panel
        v-for="item in ques"
        :key="item.id"
      >
        <v-expansion-panel-header @click="addques(item.ques)"><b>{{ item.ques }}</b></v-expansion-panel-header>
        <v-expansion-panel-content class="mt-4">
        <v-text-field
            label="Answer"
            hint='Answer with Yes/No and explain your answers further'
            v-model='answer'
            outlined
          ></v-text-field> <v-btn
      color="#001F90" dark
      @click="addans"
    >
     Save
    </v-btn>
         </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels> 
  </v-col>

  <br>
  <Addmap :insertedName="insertedName"/>
 <br>
  <v-col cols="12" sm="6" md="6">
    <v-btn
      color="#001F90" dark
      @click="e1 = 3"
    >
     Continue
    </v-btn>
  </v-col>
      </v-stepper-content>

      <v-stepper-content step="3">
         <h3 class="subheading mb-5">Add photo Gallery for {{ insertedName }}</h3>

    
<v-col cols="12" sm="6" md="6">
      <v-file-input
    v-model="files"
    color="#001F90"
    counter
    label="Add images"
    multiple
    placeholder="Select Image"
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
    > 
    <v-col cols="3" sm="3">
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

        <br>
  <v-col cols="12" sm="6" md="6">
    <v-btn
      color="#001F90" dark
      @click="e1 = 1"
    >
     Submit
    </v-btn>
  </v-col>

      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
  </v-container>
</template>

<script>
import axios from 'axios'
import Addmap from '@/components/VenuePageComponents/Addmap.vue'

export default {
    name: 'AddVenue',
    data: () => ({
      e1: 1,
      answer: "",
      files: [],
      amenity: [],
      venuename: '',
      venuetype: '',
      capacity: '',
      price: '',
      street: '',
      city: '',
      address: '',
      state: '',
      description: ''
    }),
    methods: {
     addamenity (arr, id) {
      this.$store.getters.addamenities(arr, id)
      },
      addvenue () {
        let item = {
          id: null,
          name: null
        }
        axios.post(`${this.$store.state.url}/addvenue`, {
          name: this.venuename, 
          description: this.description, 
          street: this.street, 
          city: this.city, 
          state: this.state, 
          type: this.venuetype, 
          capacity: this.capacity, 
          price: this.price,
          address: this.address, 
          lat: 0, 
          log: 0, 
          owner_id: this.$store.state.user[0].id
        }).then((res) => {
          item.id = res.data.result.insertId
          item.name = this.venuename
          if (res.status == 200) {
          this.e1 = 2
          this.addamenity(this.amenity, res.data.result.insertId)
          this.$store.commit("setInsertVenue", item)
          console.log(res)
          }
        })
      },
      addques (ques) {
        axios.post(`${this.$store.state.url}/ques`, {
          ques: ques,
          venue_id: this.insertedId
        }).then((res) => {
          this.$store.commit("setQuestionId", res.data.result.insertId)
          console.log(res)
        })
      },
        addans () {
        axios.post(`${this.$store.state.url}/ans`, {
          answer: this.answer,
          question_id: this.insertedquestionId
        }).then((res) => {
          this.answer  = ""
          console.log(res)
        })
      }
    },
    created () {},
    components: {
      Addmap 
    },
    computed: {
      ques () {
        let x = [
             {
              id: 1,
              ques: `Does ${this.$store.state.insertvenuename} have Restrooms?`
               }, 
             {
               id: 2,
               ques: `Does ${this.$store.state.insertvenuename} provide power?`
               }, 
              {
                id: 3,
                ques: `What type of chairs does ${this.$store.state.insertvenuename} provide?`
                },
              {
                id: 4,
                ques: `Is there parking space at ${this.$store.state.insertvenuename}?`
              },
              {
                id: 5,
                ques: `Does ${this.$store.state.insertvenuename} allow external Decorator?`
                },
              {
                id: 6,
                ques: `Does ${this.$store.state.insertvenuename} provide security?`
                },
              {
                id: 7,
                ques: `Does ${this.$store.state.insertvenuename} provide projector?`
                },
              {
                id: 8,
                ques: `What type of flooring does ${this.$store.state.insertvenuenamee} have?`
              },
              {
                id: 9, 
                ques: `What type of tables does ${this.$store.state.insertvenuenamee} Provide?`
                },
              {
                id: 10, 
                ques: `Does ${this.$store.state.insertvenuename} have Drappings?`
                },
              {
                id: 11,
                ques: `Does ${this.$store.state.insertvenuename} have Chandelier?`
                },
              {
                id: 12,
                ques: `Does ${this.$store.state.insertvenuename} have a stage?`
                },
              {
                id: 13,
                ques: `Does ${this.$store.state.insertvenuename} have Changing room?`
                },
              {
                id: 14,
                ques: `Is there parking space at ${this.insertedName}?`
                }]

              return x
      },

      amenities () {
        return this.$store.state.amenities
      },

      insertedId () {
        return this.$store.state.insertvenueid
      },

      insertedName () {
        return this.$store.state.insertvenuename
      },

      insertedquestionId () {
        return this.$store.state.insertquestionid
      },
    }
}
</script>

<style scoped>
</style>