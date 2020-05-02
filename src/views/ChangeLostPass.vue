<template>
  <div class="login mt-9 mb-0 pa-3">
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
            label="New Password"
            v-model="password"
            outlined
            type='password'
          ></v-text-field>
          <v-text-field
            label="Confirm New Password"
            v-model="cpassword"
            outlined
            type='password'
          ></v-text-field>
          <v-btn x-large color="#001F90" dark block @click='login'
          >Change Password</v-btn>
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
      email: ''
    }),
    created () {
        axios.post(`${this.$store.state.url}/checklostpasstoken/${this.$router.params.id}-${this.$router.params.token}`)
        .then((res) => {
            console.log(res)
        })
    },
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
      resetpassword () {
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
