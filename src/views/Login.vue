<template>
  <div class="login">
      <v-col cols="12" sm="6" md="3">

      <h2>Sign in</h2>

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
  </div>
</template>

<script>
  export default {
    data () {
      return {
        show2: false,
        password: this.$store.state.logindetails.password,
        email: this.$store.state.logindetails.email,
        checkbox: false
      }
    },
    methods: {
      login () {
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
  }
}
</script>
