<template>
  <div class="login mt-5 mb-12">
  <br>
  <br>
  <v-container>
   <div class="text">
      <v-alert
      :value="false"
      color="green"
      class="mr-9"
      dark
      max-width="900"
      border="top"
      icon="mdi-alert-outline"
      dismissible
      transition="scroll-y-transition"
    >
      Registration Succesfull! Login now to add venues!
        </v-alert>
        </div>

         <div class="text">
      <v-alert
      :value="loginalert"
      color="pink"
      class="mr-9"
      dark
      max-width="900"
      border="top"
      icon="mdi-alert-outline"
      dismissible
      transition="scroll-y-transition"
    >
      {{ loginerror }}
        </v-alert>
        </div>

  <v-col cols="12" sm="6" md="6" class="mt-6">
        </v-col>
        </v-container>
  <v-card
    :loading="loading"
    shaped
    class="mx-auto my-12 mt-1 mb-12"
    max-width="374"
    sm='flat'
  >
      <v-col cols="12" sm="12" md="12">
<div class="text-center ma-2">
      <i class="fas fa-user-circle text-center"></i>
</div>
      <br>

          <v-text-field
            v-model="email"
            label="E-mail"
            outlined
          ></v-text-field>

           <v-text-field
            label="Password"
            v-model="password"
            outlined
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show2 ? 'text' : 'password'"
            @click:append="show2 = !show2"
          ></v-text-field>

          <v-checkbox
      v-model="checkbox"
      input-value="checkbox"
      label="Remember password"
        ></v-checkbox>

          <v-btn x-large color="#001F90" dark block @click='login'
          >Login</v-btn>
        </v-col>
    </v-card>
    <br>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    data: () => ({
      loading: false,
      show2: false,
      checkbox: false,
      loginalert: false,
      loginerror: null,
      password: '',
      status: '',
      email: '',
      id: ''
    }),
    methods: {
      loginerrorfunc () {
       let x = setInterval (() => {
          this.loginalert = false
          clearInterval(x)
        }, 4000)
      },

      login () {
        this.loading = true
        if (this.checkbox) {
          localStorage.setItem("email", this.email)
          localStorage.setItem("password", this.password)
          localStorage.setItem("checkbox", this.checkbox)
        } else {
          localStorage.removeItem("checkbox")
          localStorage.removeItem("email")
          localStorage.removeItem("password")
          this.$store.commit("setLogin", null)
        }

        axios.post(`${this.$store.state.url}/login`, {
          email: this.email,
          password: this.password
        }).then((res) => {
          if (res.status == 201 && res.data.success === true) {
           console.log(res)
           this.status = res
          } else {
          this.loginerror = res.data.message
          this.loginalert = true
          this.loginerrorfunc()
          this.loading = false
          }
        })
      }
    },
    created () {
      if (localStorage.getItem("checkbox")) {
     let logindetails = {
       email: localStorage.getItem("email"),
       password: localStorage.getItem("password"),
       checkbox: localStorage.getItem("checkbox")
     } 
        this.$store.commit("setLogin", logindetails)
        this.password = this.$store.state.logindetails.password
        this.email = this.$store.state.logindetails.email
        this.checkbox = this.$store.state.logindetails.checkbox
    }
        this.password = this.$store.state.logindetails.password
        this.email = this.$store.state.logindetails.email
        console.log(this.$store.state.logindetails.email)
  },
  watch: {
      loading (val) {
        let getOwnerVenues = this.$store.getters.myvenues
        getOwnerVenues.then(x => this.$store.commit("setLoggedinOwnerVenues", x.data.result))
        val && setTimeout(() => {
          if (this.status.status === 201 && this.status.data.success === true) {
          this.loading = false
          this.$store.commit("setUser", this.status.data.result)
          this.$router.push('/dashboard')
          } else {
             this.loading = false
          }
        }, 10000)
      },
    },
}
</script>

<style scoped>
.login {
  height: auto
}

i {
  font-size: 12vmin
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
