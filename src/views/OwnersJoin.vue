<template>
    <div class="addvenue">
        <HeroAddVenue />
        <div class="hey pt-5 pb-5">
        <v-container>
      <v-row no-gutters>
      <v-col
        cols="12"
        sm="3"
        lg="3"
        class="mx-auto"
      >
        <v-card
          class="pa-2"
          flat
          color="#f1f1f1"
        >
   <div class="text-center"> <i class="fas fa-rocket"></i></div>
     <h4 class="subtitle-1 font-weight-bold text-center">Get started quickly</h4>
<p class="body-1 text-center">Listing your venues on taro.com is fast, easy and free, get started in minutes
</p>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        sm="3"    
        lg="3"    
        class="mx-auto"
      >
        <v-card
          class="pa-2"
          flat
          color="#f1f1f1"
        >
        
     <div class="text-center"><i class="fas fa-check-circle"></i></div>
     <h4 class="subtitle-1 font-weight-bold text-center">Get verified requests</h4>
<p class="body-1 text-center">Join today and get connected to clients that need your services</p>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        sm="3"
        lg="3"
        class="mx-auto"
      >
        <v-card
          class="pa-2"
          flat
          color="#f1f1f1"
        >
<div class="text-center"><i class="fas fa-chart-pie"></i></div>
<h4 class="subtitle-1 font-weight-bold text-center">Increased Revenue</h4>
<p class="body-1 text-center">Discuss with clients, finalize negotiations and get hired</p>
        </v-card>
      </v-col>
    </v-row>
         </v-container>
        </div>
        
    <v-container>
     <v-card flat
     max-width="600"
     >
<p class="body-1">Taro.ng is a platform where you list venues, event
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
            :rules="[() => !!firstname || 'This field is required']"
            :error-messages="errorMessages"
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
            :rules="[() => !!lastname || 'This field is required']"
            :error-messages="errorMessages"
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
            :error-messages="errorMessages"
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
            :rules="[rules.password]"
            :error-messages="errorMessages"
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
            :rules="[() => confirmpassword == ccpassword || 'Password do not match']"
            :error-messages="errorMessages"
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
            label="Phone number"
            hint="e.g 08064513824"
            :disabled="loading"
            outlined
            maxlength="11"
            counter
            :rules="[rules.required, rules.counter]"
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
      :disabled="loading || firstname.length < 2 || 
                 lastname.length < 2 || phone.length < 11 || 
                 phone.length > 11 || password != confirmpassword"
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
    name: "OwnersJoin",
    data: () => ({
      loading: false,
      password: null,
      rules: {
        counter: value => value.length <= 20 || 'Max 20 characters',
        email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
        password: v => (v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
          'Password must contain an upper case letter, a numeric character, and a special character',
        required: v => !!v || 'This field is required',
      },
      loader: null,
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      confirmpassword: '',
      count: 0
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

      name () {
        this.errorMessages = ''
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
          if (res.status === 200 && this.count > 0) {
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
    },
    computed: {
      ccpassword () {
        return this.password
      },
    },
}
</script>

<style scoped>

i {
  font-size: 8vmin;
  text-align: center;
}

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