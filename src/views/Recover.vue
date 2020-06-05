<template>
  <div class="login mt-9 mb-0 pa-3 pt-12">
  <br>
  <br>
  <v-card
    :loading="loading"
    shaped
    class="mx-auto my-12 mt-12 mb-9"
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
           <div class="text-center ma-2 mt-n3">
          Don't have an Account? <router-link to="/owner" class="ml-0.5"> Join as an Owner</router-link>
          </div>
    <br>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    data: () => ({
      loading: false,
      email: '',
    }),
    methods: {
      loginerrorfunc (message, show) {
       let item = {
            errormessagealert: message,
            erroralert: show
          }
          this.$store.commit("setErrorAlert", item)
      },

      emailsentsuccessfunc (message, show) {
       let item = {
            dismissablemessage: message,
            dismissablealert: show
          }
          this.$store.commit("setDismissableAlert", item)
      },

      login () {
        this.loading = true
        axios.post(`${this.$store.state.url}/recover`, {
          email: this.email
        }).then((res) => {
          if (res.status == 200 && res.data.success === true) {
            this.loading = false
            this.email = ''
            this.emailsentsuccessfunc(res.data.message, true)
          } else {
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
  background-color: #f1f1f1;
  min-height: 100vh;
  max-height: auto;
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
