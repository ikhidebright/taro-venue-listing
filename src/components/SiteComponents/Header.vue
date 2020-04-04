<template>
<div class='head'>
    <v-app-bar
      color="white"
      fixed
      elevate
      height = '60'
    >


      <v-toolbar-title class='logo mr-12'>taro</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-text-field
        hide-details
        append-icon="search"
        label='Search venue, location'
        class='mr-12'
        dense
        single-line
        outlined
      ></v-text-field>

        <v-toolbar-items>

        <v-divider :inset="inset" vertical></v-divider>

        <v-btn text>
          Login
        </v-btn>

        <v-divider :inset="inset" vertical></v-divider>

        <v-btn text to='/addvenue'>
         List your venue
        </v-btn>

      </v-toolbar-items>

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
        <v-list
        nav
        dense
      >
        <v-list-item-group v-model="item" color="primary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.link"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
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
    </v-app-bar>
    <v-divider></v-divider>
    </div>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      item: 0,
      items: [
        { text: 'Manage venue', icon: 'mdi-folder', link: '/dashboard' },
        { text: 'Add a venue', icon: 'mdi-account-multiple', link: '/add' },
        { text: 'Booking History', icon: 'mdi-history', link: '/history' },
        { text: 'Account settings', icon: 'mdi-cogs', link: '/settings' }
      ],
    }),
  }
</script>

<style scoped>
.head {
border-bottom: 5px solid green;
}
</style>