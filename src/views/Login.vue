<template>
  <div class="login mt-5">
  <br>
  <br>
  <v-container>
  <v-col cols="12" sm="12" md="12">
  <v-alert
      color="green"
      dark
      class="pa-5"
      icon="mdi-firework"
      dense
    >
      Registration Succesfull Login your account now to add venues!
    </v-alert>

     <v-alert
      dark
      class="pa-5"
      dense
      color="red"
      border="left"
      v-if="alert"
    >
     {{ alert }}
        <br>
        </v-alert>

        </v-col>
        </v-container>
  <v-card
    :loading="loading"
    class="mx-auto my-12 mt-1"
    max-width="374"
    sm='flat'
  >
      <v-col cols="12" sm="12" md="12">

      <h2>Login</h2>

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
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    data: () => ({
      loading: false,
      show2: false,
      checkbox: false,
      alert: null,
      password: '',
      status: '',
      email: '',
      id: ''
    }),
    /**data: () => ({
        password: this.$store.state.logindetails.password || this.password,
        email: this.$store.state.logindetails.email || this.email,
    }), **/
    methods: {
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
          if (res.status == 201) {
           console.log(res)
           this.status = res.status
           this.$store.commit("setUser", res.data.result)
          } else {
          this.alert = res.data.message
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
          if (this.status == 201) {
          this.loading = false
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
  height: 90vh
}
</style>
