<template>
  <v-card
    class="ml-auto"
    max-width="500"
  >
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>Add venue</span>
      <v-avatar
        color="primary lighten-2"
        class="subheading white--text"
        size="24"
        v-text="step"
      ></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
          <v-text-field
            label="Venue Name"
            outlined
            single-line
          ></v-text-field>

          <v-text-field
            label="State"
            outlined
            single-line
          ></v-text-field>

          <v-text-field
            label="City"
            outlined
            single-line
          ></v-text-field>

          <v-text-field
            label="Venue Address"
            outlined
            single-line
          ></v-text-field>

          <v-textarea
          outlined
          single-line
          no-resize
          label="Venue Description"
          ></v-textarea>

        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text>
          <v-text-field
            label="Password"
            type="password"
          ></v-text-field>
          <v-text-field
            label="Confirm Password"
            type="password"
          ></v-text-field>
          <span class="caption grey--text text--darken-1">
            Please enter a password for your account
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="3">
        <div class="pa-4 text-center">
          <v-img
            class="mb-4"
            contain
            height="128"
            src="https://cdn.vuetifyjs.com/images/logos/v.svg"
          ></v-img>
          <h3 class="title font-weight-light mb-2">Welcome to Vuetify</h3>
          <span class="caption grey--text">Thanks for signing up!</span>
        </div>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        :disabled="step === 1"
        text
        @click="step--"
      >
        Back
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="step === 3"
        color="primary"
        depressed
        @click="step++"
      >
        Next
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      step: 1,
    }),

    computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Sign-up'
          case 2: return 'Create a password'
          default: return 'Account created'
        }
      },
    },
  }
</script>