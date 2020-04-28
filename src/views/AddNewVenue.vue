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
      <i color="red">
     <b> 
     New venues are subjected to Review from taro.ng team before approval
     </b>
      </i>
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
     Save
    </v-btn>
  </v-col>
<v-container>  
</v-container>
</v-container>
</div>
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
<p class="font-weight-bold ml-3">Is this map location correct for your venue</p>
<div class="ml-3">
  <v-checkbox
      v-model="checkbox"
      input-value="checkbox"
      :label="checkbox? 'Yes, the map location is correct' : 'No, map location is wrong'"
        ></v-checkbox>
        </div>
 <br>
  <v-col cols="12" sm="6" md="6">
    <v-btn
      color="#001F90" dark
      @click="addMap"
    >
     Continue
    </v-btn>
  </v-col>
      </v-stepper-content>
      <v-stepper-content step="3">
         <h3 class="subheading mb-5 ml-n1">Add photo Gallery for {{ insertedName }}</h3>
  <p class="font-weight-bold">Pick a Cover image</p>
  <p class="text--secondary">Allowed Formats (png, jpg, jpeg)</p>
  <p class="text--secondary">Image should be below 200kb</p>
    <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        class=""
        max-width="344"
      >
        <v-img :src="cover"></v-img>
        <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="#036358"
          >
            <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
          </v-overlay>
        </v-fade-transition>
      </v-card>
    </template>
  </v-hover>
  <br>
  <p class="font-weight-bold">Add a minimum of 3 and maximum of 10 images to {{ insertedName }}'s gallery</p>
    <v-btn
      color="#001F90"
      dark
    >
    <input type="file" multiple class="uploadButton" id="files" ref="files" v-on:change="handleFilesUpload()"/>
    </v-btn>
    <div class="d-flex mb-auto flex-wrap mt-4">
 <div
        v-for="image in moreimages" 
        :key="image.image_id"
        class="ma-1"
      >
    <v-img
      class='ml-1'
      :src="image.image"
      height="14vh"
      width='100'
    > 
    <v-col cols="3" sm="3">
            <v-btn fab
        dark
        small
        @click="deleteMoreImage(image.image_id)"
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
        <br>
        <v-col cols="12" sm="12" lg="12">
        <v-row>
  <v-spacer></v-spacer>
    <v-btn
      color="#001F90" 
      dark
      tile
      :disabled="moreimages.length < 3"
      @click="finish"
    >
     Finish
    </v-btn>
    </v-row>
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
      e1: 3,
      answer: "",
      cover: null,
      overlay: false,
      checkbox: false,
      file: '',
      files: [],
      moreimages: [],
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
    // delete more images 
    deleteMoreImage (x) {
       axios.post(`${this.$store.state.url}/deleteimage`, {
         imageId: x
       }).then((res) => {
          if (res.status === 200 && res.data.success === true) {
            this.moreimages = this.moreimages.filter(item => item.image_id != x)
            this.addvenuesuccessfunc(res.data.message, true)
          } else {
            this.addvenueerrorfunc(res.data.message, true)
          }
       })
    },

    addvenueerrorfunc (message, show) {
       let item = {
            errormessagealert: message,
            erroralert: show
          }
          this.$store.commit("setErrorAlert", item)
      },

      addvenuesuccessfunc (message, show) {
       let item = {
            successmessagealert: message,
            successalert: show
          }
          this.$store.commit("setSuccessAlert", item)
      },

    handleFileUpload(){
    this.file = this.$refs.file.files[0];
    if (this.file.type == "image/png" || this.file.type == "image/jpeg" || this.file.type == "image/jpg") {
    this.submitFile()
    } else {
      this.addvenueerrorfunc("invalid file type", true)
    }
  },

    handleFilesUpload(){
    this.files.push(this.$refs.files.files);
    this.submitFiles()
  },

  submitFiles () {
    if (this.files[0].length > 9) {
      this.addvenueerrorfunc("Files Cannot Exceed 9", true)
      this.files = []
    } else {
      this.files[0].forEach((file) => {
        let formData = new FormData();
            formData.append('image', file);
            formData.append("venue_id", 1)
            axios.post(`${this.$store.state.url}/addgallery`,
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then((res) => {
              if (res.status === 200 && res.data.success === true) {
                 console.log(res)
                 let image = {
                   image_id: res.data.result.insertId,
                   image: res.data.image
                 }
                 this.moreimages.unshift(image)
                 let numberOfImagesUploaded = this.moreimages.length;
                 this.addvenuesuccessfunc(`Successfully Added ${numberOfImagesUploaded} Images`, true)
                 this.files = []
              } else {
                this.addvenueerrorfunc(res.data.message, true)
                this.files = null
              }
        })
        .catch((e) => {
          this.addvenueerrorfunc(e, true)
          this.files = null
        });
      })
    }
  },

    submitFile () {
            let formData = new FormData();
            formData.append('image', this.file);
            formData.append("venue_id", this.insertedId)
            axios.post(`${this.$store.state.url}/addimage`,
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then((res) => {
              if (res.status === 200 && res.data.success === true) {
                 this.cover = res.data.image
                 this.addvenuesuccessfunc(res.data.message, true)
              } else {
                this.addvenueerrorfunc(res.data.message, true)
                this.file = null
              }
        })
        .catch((e) => {
          this.addvenueerrorfunc(e, true)
          this.file = null
        });
      },

      next (x) {
        setTimeout (() => {
        this.e1 = x
        this.alert = false
        this.erroralert = false
        }, 6000)
      },

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
          this.alert = true
          this.messagealert = res.data.message
          this.addamenity(this.amenity, res.data.result.insertId)
          this.$store.commit("setInsertVenue", item)
          this.next(2)
          console.log(res)
          }
        }).catch((err) => {
          this.erroralert = true
          this.messagealert = err
          this.next(1)
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
      },
      addMap () {
        axios.patch(`${this.$store.state.url}/showmap/${this.insertedId}`, {
          show_map: this.checkbox
        }).then((res) => {
          if (res.status == 200) {
          this.e1 = 3
          console.log(res)
          }
        })
      },
      finish () {
        this.$router.push('/dashboard')
      }
    },
    created () {
      this.cover = 'https://cdn.vuetifyjs.com/images/cards/forest-art.jpg'
    },
    components: {
      Addmap 
    },
    computed: {
      coverImage () {
        return this.cover
      },

      ques () {
        let x = [
             {
              id: 1,
              ques: `Does ${this.insertedName} have Restrooms?`
               }, 
             {
               id: 2,
               ques: `Does ${this.insertedName} provide power?`
               }, 
              {
                id: 3,
                ques: `What type of chairs does ${this.insertedName} provide?`
                },
              {
                id: 4,
                ques: `Is there parking space at ${this.insertedName}?`
              },
              {
                id: 5,
                ques: `Does ${this.insertedName} allow external Decorator?`
                },
              {
                id: 6,
                ques: `Does ${this.insertedName} provide security?`
                },
              {
                id: 7,
                ques: `Does ${this.insertedName} provide projector?`
                },
              {
                id: 8,
                ques: `What type of flooring does ${this.insertedName} have?`
              },
              {
                id: 9, 
                ques: `What type of tables does ${this.insertedName} Provide?`
                },
              {
                id: 10, 
                ques: `Does ${this.insertedName} have Drappings?`
                },
              {
                id: 11,
                ques: `Does ${this.insertedName} have Chandelier?`
                },
              {
                id: 12,
                ques: `Does ${this.insertedName} have a stage?`
                },
              {
                id: 13,
                ques: `Does ${this.insertedName} have Changing room?`
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
/* work around bug on v-dialog not honoring origin="center top" parameter */
.v-alert {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 40%;
  margin-top: 5rem;
}

.text {
  width: 50%;
  margin: 0 auto;
}

/* for mobile */
@media only screen and (max-width: 600px) {

.text {
  width: 100%;
  margin: 0;
}

.v-alert {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 90%;
  margin-top: 5rem;
}
}
</style>