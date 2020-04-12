<template>
  <div class="login mt-5">
  <br>
  <br>
  <br>
  <v-card
    :loading="loading"
    class="mx-auto my-12 mt-5"
    max-width="374"
    sm='flat'
  >
      <v-col cols="12" sm="12" md="12">
      <v-alert
      text
      dense
      color="red"
      border="left"
      v-if="alert"
    >
     {{ alert }}
        <br>
        </v-alert>

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
     <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    data: () => ({
      loading: false,
      overlay: false,
      show2: false,
      checkbox: false,
      alert: null,
      password: '',
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
          if (res.status === 201) {
           console.log(res)
           this.$store.commit("setUser", res.data.result)
           this.overlay = !this.overlay
           this.loading = false
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
      overlay (val) {
        let getOwnerVenues = this.$store.getters.myvenues
        getOwnerVenues.then(x => this.$store.commit("setLoggedinOwnerVenues", x.data.result))
        val && setTimeout(() => {
          this.overlay = false
          this.$router.push('/dashboard')
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
