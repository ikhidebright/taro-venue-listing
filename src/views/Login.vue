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

          <v-btn x-large color="#001F90" dark>Sign in</v-btn>

        </v-col>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        show2: false,
        password: null,
        email: null
      }
    },
  }
</script>
