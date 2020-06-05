<template>
  <div class="login mt-9 mb-0 pa-3">
  <br>
  <br>
  <v-card
    :loading="loading"
    shaped
    class="mx-auto my-12 mt-6 mb-4"
    max-width="374"
    sm='flat'
  >
      <v-col cols="12" sm="12" md="12">
      <br>
      <v-form
        ref="form"
        v-model="valid"
        validation
      >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email Address"
            color="#001F90"
            type="email"
            outlined
            required
          ></v-text-field>
           <v-text-field
            label="Password"
            v-model="password"
            outlined
            required
            :rules="passwordRules"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show2 ? 'text' : 'password'"
            @click:append="show2 = !show2"
          ></v-text-field>
          <v-row class="mt-n3 mr-1">
          <v-spacer></v-spacer>
          <router-link to="/recover">Forgot Password?</router-link>
          </v-row>
          <v-checkbox
      v-model="checkbox"
      input-value="checkbox"
      label="Remember password"
        ></v-checkbox>
          <v-btn x-large color="#001F90" dark block @click='login'
          >Login</v-btn>
          </v-form>
        </v-col>
          </v-card>
           <div class="text-center mt-1">
          Don't have an Account? <router-link to="/owner" class="ml-0.5"> Join as an Owner</router-link>
          </div>
    <br>
  </div>
</template>

<script>
/*eslint-disable*/

  export default {
    data: () => ({
      loading: false,
      valid: false,
      show2: false,
      checkbox: false,
      loginerror: null,
      password: '',
      status: '',
      email: '',
      id: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Password is Required'
      ]
    }),
    methods: {
       validate () {
        this.$refs.form.validate()
      },
      login () {
        this.validate()
        if (!this.valid) {
          // error 
        } else {
        }
      },
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
