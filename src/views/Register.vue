<template>
  <div class="register">
      <v-form>
    <v-container>
      <v-row>

        <v-col cols="12" sm="3">
         <v-text-field
            v-model="firstName"
            :rules="[rules.required]"
            label="First Name"
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="3">
          <v-text-field
            v-model="lastName"
            :rules="[rules.required]"
            label="Last Name"
            outlined
          ></v-text-field>
        </v-col>

      </v-row>

      <v-row>

        <v-col cols="12" sm="3">
         <v-text-field
            v-model="phoneNumber"
            :rules="[rules.required]"
            :type="number"
            label="Phone Number"
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="3">
          <v-text-field
            v-model="email"
            label="E-mail"
            :rules="[rules.required, rules.email]"
            outlined
          ></v-text-field>
        </v-col>

      </v-row>

      <v-row>

        <v-col cols="12" sm="3">
         <v-text-field
            type="password"
            v-model="password"
            :rules="[rules.required]"
            label="Password"
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="3">
          <v-text-field
          type="password"
            v-model="confirmPassword"
            :rules="[rules.required]"
            label="Confirm Password"
            outlined
          ></v-text-field>
        </v-col>
        
      </v-row>
      <v-btn
          text
          color="primary"
          type="submit"
          block
        >Register</v-btn>
    </v-container>
  </v-form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        show2: false,
        password: null,
        email: null,
        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
           }
         }
      }
    },
  }
</script>
