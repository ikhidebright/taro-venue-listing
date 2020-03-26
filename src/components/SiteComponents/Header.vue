<template>
<div class='head'>
    <v-app-bar
      color="gray"
      fixed
      flat
      height = '60'
    >

      <v-toolbar-title class='logo mr-12'>taro</v-toolbar-title>

      <v-text-field
        hide-details
        append-icon="search"
        label='Search venue, location'
        class='ml-12'
        dense
        single-line
        outlined
      ></v-text-field>

      <v-spacer></v-spacer>

      <v-btn text class="hidden-sm-and-down mr-5" to='/'>
      Login
      </v-btn>

      <v-btn text class="hidden-sm-and-down mr-5" to='/addvenue'>
      List your venue
      </v-btn>

       <v-app-bar-nav-icon @click="drawer = true" class='d-lg-none'></v-app-bar-nav-icon>

       <v-menu
      v-model="menu"
      :close-on-content-click="false"
      open-on-hover
      :nudge-width="200"
      offset-x
      transition="scale-transition"
    >
      <template v-slot:activator="{ on }">
        
          <v-avatar color="indigo"
          dark
          v-on="on">
      <v-icon dark>mdi-account-circle</v-icon>
    </v-avatar>

    <!-- <v-avatar>
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar> -->
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Ikhide Bright</v-list-item-title>
              <!-- <v-list-item-subtitle>Founder of Vuetify.js</v-list-item-subtitle> -->
            </v-list-item-content>

            <v-list-item-action>
              <!-- <v-btn
                :class="fav ? 'red--text' : ''"
                icon
                @click="fav = !fav"
              >
                <v-icon>mdi-heart</v-icon>
              </v-btn> -->
            </v-list-item-action>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>
        <v-btn text large tile block to="/dashboard"><v-icon>mdi-lead-pencil</v-icon>Manage Venue</v-btn>
        <v-btn text large block to="/bookings"><v-icon>mdi-history</v-icon>Bookings</v-btn>
        <v-btn text large block><v-icon>mdi-power-plug-off</v-icon>Sign out</v-btn>
        <v-list>
          <!-- <v-list-item>
            <v-list-item-action>
              <v-switch v-model="message" color="purple"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Enable messages</v-list-item-title>
          </v-list-item> -->

          <!-- <v-list-item>
            <v-list-item-action>
              <v-switch v-model="hints" color="#001F90"></v-switch>
            </v-list-item-action>
            <v-list-item-title>Enable Dark mode</v-list-item-title>
          </v-list-item> -->
        </v-list>
      </v-card>
    </v-menu>


       <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

      <!-- <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
    </v-app-bar>
    </div>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
    }),
  }
</script>

<style scoped>
.head {
border-bottom: 5px solid green;
}
</style>