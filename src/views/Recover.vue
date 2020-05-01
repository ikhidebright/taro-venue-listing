<template>
  <div class="login mt-9 mb-0 pa-3">
  <br>
  <br>
  <br>
  <v-card
    :loading="loading"
    shaped
    class="mx-auto my-12 mt-1 mb-9"
    max-width="374"
    sm='flat'
  >
      <v-col cols="12" sm="12" md="12">
      <br>
          <v-text-field
            v-model="email"
            label="Enter Account e-mail"
            outlined
          ></v-text-field>
          <v-btn x-large color="#001F90" dark block @click='login'
          >Find Account</v-btn>
        </v-col>
    </v-card>
           <v-card 
           class="mx-auto my-12 mb-9 mt-n6" 
           max-width="374"
           text
           flat
           color="#f5f5f5"
           >
           <div class="text-center ma-2">
          I Remeber my password <router-link to="/login" class="ml-0.5">Login</router-link>
          </div>
          </v-card>
    <br>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    data: () => ({
      loading: false,
      email: ''
    }),
    methods: {
      loginerrorfunc (message, show) {
       let item = {
            errormessagealert: message,
            erroralert: show
          }
          this.$store.commit("setErrorAlert", item)
      },
      registersuccessfunc (message, show) {
       let item = {
            successmessagealert: message,
            successalert: show
          }
          this.$store.commit("setSuccessAlert", item)
      },
      login () {
        axios.post(`${this.$store.state.url}/login`, {
          email: this.email,
          password: this.password
        }).then((res) => {
          if (res.status == 201 && res.data.success === true) {
           console.log(res)
           this.status = res
          } else {
          this.status = null
          this.loading = false
          this.loginerrorfunc(res.data.message, true)
          }
        }).catch ((error) => {
          this.status = null
          this.loginerrorfunc(error, true)
          this.loading = false
        })
      }
    },
}
</script>

<style scoped>
.login {
  height: auto;
  margin: 0;
  background-color:#f5f5f5;
}

i {
  font-size: 19vmin
}

@media only screen and (min-width: 600px) {
  i {
  font-size: 12vmin
}
}
</style>
