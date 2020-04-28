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
      loginerror: null,
      password: '',
      status: '',
      email: '',
      id: ''
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
  },
  watch: {
      loading (val) {
        val && setTimeout(() => {
          if (this.status.status === 201 && this.status.data.success === true) {
          this.loading = false
          this.$store.commit("setUser", this.status.data.result)
          let getOwnerVenues = this.$store.getters.myvenues
          getOwnerVenues.then(x => this.$store.commit("setLoggedinOwnerVenues", x.data.result))
          this.$router.push('/dashboard')
          } else {
             this.status = null
             this.loading = false
          }
        }, 10000)
      },
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
