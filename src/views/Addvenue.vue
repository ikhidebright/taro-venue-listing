<template>
    <div class="addvenue">
        <HeroAddVenue />
        <div class="hey">
        <v-container>
        <v-card
            class="d-flex flex-row justify-space-between ml-3 hey"
            max-width="1200"
            color="#f1f1f1"
            flat
            tile
    >
     <v-card flat
          color="#f1f1f1"
     >
     <v-icon>mdi-whatsapp</v-icon>
     <h4>Get verified requests</h4>
<p>Join today and get connected to clients that need your services</p>
</v-card>


<v-card flat
            color="#f1f1f1"
     >
     <v-icon>mdi-whatsapp</v-icon>
     <h4>Send price estimates</h4>
<p>Choose the requests to accept and send price estimates to clients
</p>
</v-card>


<v-card flat
            color="#f1f1f1"
>
<v-icon>mdi-whatsapp</v-icon>
<h4>Get hired</h4>
Discuss with clients, finalize negotiations and get hired
            
</v-card>
        </v-card>
         </v-container>
        </div>
        
    <v-container>
     <v-card flat
     max-width="600"
     >
<p>Taro.ng is a platform where you list venues, event
centers, halls for rent. With Taro.ng, you get to 
reach a wider audience and boost your revenue.
Our platform boost of 100,000+ visitors monthly
who are in need of event centers, spaces
for meetings, weddings, outdoor occassions and
more. We list professional event venues, conference 
centres, hotel halls, gardens, school fields, open 
spaces, yachts, gallerias and convention centres.</p>
</v-card>

<v-form v-model="valid">
      <v-row>
        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            outlined
            label="First Name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            outlined
            label="Last Name"
            required
          ></v-text-field>
        </v-col>
      </v-row>


      <v-row>
        <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            outlined
            required
          ></v-text-field>
        </v-col>

         <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="phone"
            label="Phone"
            type="tel"
            outlined
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="venuename"
            label="Venue Name"
            outlined
            required
          ></v-text-field>
        </v-col>
</v-row>

<v-row>
<v-col cols="12"
          md="3">
        <v-select
          :items="states"
          label="State"
          outlined
          single-line
        ></v-select>
      </v-col>

       <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="city"
            outlined
            label="City/Town"
            hint='e.g. Ikoyi'
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="venueaddress"
            outlined
            label="Venue Address"
            required
          ></v-text-field>
        </v-col>
</v-row>
 <v-row>
        <v-col
          cols="12"
          md="6"
        >
 <v-btn x-large color="#001F90" dark block>Submit</v-btn>
  </v-col>
</v-row>
  </v-form>
    </v-container>
    </div>
</template>

<script>
import HeroAddVenue from '@/components/HeroAddVenue.vue'
export default {
    name: "",
    data: () => ({
      states: [
"Abia",
'Abuja',
"Adamawa",
'Akwa Ibom',
'Anambra',
'Bauchi',
'Bayelsa',
'Benue',
'Borno',
'Cross River',
'Delta',
'Ebonyi',
'Enugu',
'Edo',
'Ekiti',
'Gombe',
'Imo',
'Jigawa',
'Kaduna',
'Kano',
'Katsina',
'Kebbi',
'Kogi',
'Kwara',
'Lagos',
'Nasarawa',
'Niger',
'Ogun',
'Ondo',
'Osun',
'Oyo',
'Plateau',
'Rivers',
'Sokoto',
'Taraba',
'Yobe',
"Zamfara",
       ]
    }),
    components: {
        HeroAddVenue
    }
}
</script>

<style scoped>
.hey {
  background-color: #f1f1f1;
  padding: 1vmin;
  margin-bottom: 5vmin;
  height: auto;
}
</style>