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
            outlined
            label="Last Name"
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
            v-model="email"
            label="Email"
            type="email"
            outlined
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
            v-model="password"
            label="Password"
            type="password"
            outlined
            required
          ></v-text-field>
        </v-col>

         <v-col
          cols="12"
          md="3"
        >
          <v-text-field
            v-model="confirmpassword"
            label="Confirm password"
            type="password"
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
            v-model="phone"
            type="number"
            label="Phone number"
            hint="e.g 08064513824"
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
         <div class="text-center">
    <v-btn
      x-large color="#001F90" dark block
      @click="register"
    >
     Join now!
    </v-btn>

    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
  </v-col>
</v-row>
  </v-form>
    </v-container>
    </div>
</template>

<script>
import HeroAddVenue from '@/components/HeroAddVenue.vue'
import axios from 'axios'

export default {
    name: "",
    data: () => ({
      overlay: false,
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      phone: '',
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
     watch: {
      overlay (val) {
        val && setTimeout(() => {
          this.overlay = false
        }, 10000)
      },
    },
    methods: {
      register () {
        this.overlay = !this.overlay
        axios.post('http://localhost:8000/join', {
          first_name: this.firstname,
          last_name: this.lastname,
          email: this.email,
          password: this.password,
          phone_number: this.phone
        })
        .then((res) => {
          if (res.status == 200) {
            let logindetails = {
              email: this.email,
              password: this.password
            }
            this.$store.commit("setLogin", logindetails)
            this.$router.push('/login')
          }
        })
      }
    },
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