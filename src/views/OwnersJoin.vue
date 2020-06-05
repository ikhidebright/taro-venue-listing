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
   <div class="text-center ma-4"> <i class="fas fa-rocket"></i></div>
     <h4 class="subtitle-1 font-weight-bold text-center">Get started quickly</h4>
<p class="bod text-center">Listing your venues on taro.com is fast, easy and free, get started in minutes
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
     <div class="text-center ma-4"><i class="fas fa-check-circle"></i></div>
     <h4 class="subtitle-1 font-weight-bold text-center">Get verified requests</h4>
<p class="bod text-center">Join today and get connected to clients that need your services</p>
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
<div class="text-center ma-4"><i class="fas fa-chart-pie"></i></div>
<h4 class="subtitle-1 font-weight-bold text-center">Increased Revenue</h4>
<p class="bod text-center">Discuss with clients, finalize negotiations and get hired</p>
        </v-card>
      </v-col>
    </v-row>
         </v-container>
        </div>       
    <v-container>
     <v-card flat
     max-width="600"
     >
<p class="body-1 xs-text-center">Taro.ng is a platform where you list venues, event
centers, halls for rent. With Taro.ng, you get to 
reach a wider audience and boost your revenue.
Our platform boost of 100,000+ visitors monthly
who are in need of event centers, spaces
for meetings, weddings, outdoor occassions and
more. We list professional event venues, conference 
centres, hotel halls, gardens, school fields, open 
spaces, yachts, gallerias and convention centres.</p>
</v-card>
      <v-form
        ref="form"
        v-model="valid"
        validation
      >
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
            :rules="rules.passwordRules"
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
            type="number"
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
          md="12"
        >
<v-checkbox
        v-model="agreement"
        required
        :rules="[rules.required]"
        color="#001F90"
      >
        <template v-slot:label>
          I agree to the
          <a href="#" @click.stop.prevent="dialog = true" class="mr-2 ml-2">Terms of Service</a> and
          <a href="#" @click.stop.prevent="dialog = true" class="ml-2">Privacy Policy</a>*
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
      color="#001F90"
      block
      @click="register"
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
/*eslint-disable*/
import HeroAddVenue from '@/components/HeroAddVenue.vue'

export default {
    name: "OwnersJoin",
    data: () => ({
      loading: false,
      valid: false,
      password: null,
      rules: {
        counter: value => value.length === 11 || 'Max 11 characters',
        email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail'
          },
        length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
        // password: v => (v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
        //   'Password must be a minimum of 8 characters long',
        required: v => !!v || 'This field is required',
        passwordRules: [
        v => !!v || 'Password is Required',
        v => (v || '').length >= 8 || 'Password must be a minimum of 8 characters long'
      ]
      },
      loader: null,
      firstname: '',
      lastname: '',
      agreement: false,
      dialog: false,
      email: '',
      phone: '',
      confirmpassword: ''
    }),

    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]
        setTimeout(() => {
          this[l] = false
          }, 10000)
        this.loader = null
      }
    },
     methods: {
       validate () {
        this.$refs.form.validate()
      },
      register () {
        this.validate()
        if (!this.valid) {
          // error 
        } else {
          this.loader = 'loading'
        }
      },
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

.addvenue {
  min-height: 100vh;
  max-height: auto;
}

i {
  font-size: 6vmin;
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

  .bod {
color: #000;
font-family: 'Open Sans';
font-size: 0.9rem;
}

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
  i {
  font-size: 10vmin;
  text-align: center;
}

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