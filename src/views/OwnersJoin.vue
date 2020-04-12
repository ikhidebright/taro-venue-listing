<template>
    <div class="addvenue">
        <HeroAddVenue />
        <div class="hey">
        <v-container>
        <v-row>
        <v-col col="12" lg="3" sm="9">
     <v-icon>mdi-whatsapp</v-icon>
     <h4>Get verified requests</h4>
<p>Join today and get connected to clients that need your services</p>
</v-col>


<v-col col="12" lg="3" sm="9">
     <v-icon>mdi-whatsapp</v-icon>
     <h4>Send price estimates</h4>
<p>Choose the requests to accept and send price estimates to clients
</p>
</v-col>


<v-col col="12" lg="3" sm="9">
<v-icon>mdi-whatsapp</v-icon>
<h4>Get hired</h4>
Discuss with clients, finalize negotiations and get hired
            
</v-col>
        </v-row>
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
            :disabled="loading"
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
            :disabled="loading"
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
            label="Email address"
            :disabled="loading"
            :rules="[rules.email]"
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
            :disabled="loading"
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
            :disabled="loading"
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
            :disabled="loading"
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
<v-checkbox
        v-model="agreement"
        :rules="[rules.required]"
        color="#001F90"
      >
        <template v-slot:label>
          I agree to the&nbsp;
          <a href="#" @click.stop.prevent="dialog = true">Terms of Service</a>
          &nbsp;and&nbsp;
          <a href="#" @click.stop.prevent="dialog = true">Privacy Policy</a>*
        </template>
      </v-checkbox>
      </v-col>
      </v-row>

 <v-row>
        <v-col
          cols="12"
          md="6"
        >
        <v-btn
      class="bt"
      large
      :loading="loading"
      :disabled="loading"
      color="#001F90"
      @click="register(), loader = 'loading'"
    >
      Join now!
    </v-btn>

  </v-col>
</v-row>
  </v-form>
  <br>
  <br>
    </v-container>
    </div>
</template>

<script>
import HeroAddVenue from '@/components/HeroAddVenue.vue'
import axios from 'axios'

export default {
    name: "",
    data: () => ({
      loading: false,
      rules: {
        email: v => (v || '').match(/@/) || 'Please enter a valid email',
        length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
        password: v => (v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
          'Password must contain an upper case letter, a numeric character, and a special character',
        required: v => !!v || 'This field is required',
      },
      loader: null,
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      phone: '',
      count: 0,
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
      loader () {
        const l = this.loader
        this[l] = !this[l]
        setTimeout(() => {
          this[l] = false
          this.count = 5
          }, 10000)
        this.loader = null
      },
    },
     
    methods: {
      register () {
        axios.post('http://localhost:8000/join', {
          first_name: this.firstname,
          last_name: this.lastname,
          email: this.email,
          password: this.password,
          phone_number: this.phone
        })
        .then((res) => {
          console.log(res)
          if (res.status == 200 && this.count > 0) {
            let logindetails = {
              email: this.email,
              password: this.password,
              suc: true
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
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .bt {
    color: white;
  }
</style>