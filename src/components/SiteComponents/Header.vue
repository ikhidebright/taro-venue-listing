<template>
<div class='head'>
    <v-app-bar
      color="white"
      fixed = true
      elevate
      height = '60'
    >


      <v-toolbar-title class='logo mr-12' to='/'>taro</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-text-field
        hide-details
        color="#001F90"
        filled
        append-icon="search"
       @click:append="alert('heyy')"
        label='Search venues, location'
        class='mr-lg-12 mr-2'
        @keyup="search"
        dense
        v-model='src'
        single-line
        outlined
      ></v-text-field>

        <v-toolbar-items class='hidden-xs-only'>

        <v-divider :inset="inset" vertical v-if="!this.$store.state.isLoggedIn"></v-divider>

        <v-btn text to='/login' v-if="!this.$store.state.isLoggedIn">
          Login
        </v-btn>

        <v-divider :inset="inset" vertical v-if="!this.$store.state.isLoggedIn"></v-divider>

        <v-btn text to='/owner' v-if="!this.$store.state.isLoggedIn" class="mr-n5">
         List your venue
        </v-btn>

<v-divider :inset="inset" vertical v-if="this.$store.state.isLoggedIn" class='hidden-xs-only'></v-divider>
          <v-btn text to='/propose' class='hidden-xs-only mr-0' v-if="this.$store.state.isLoggedIn">
         Add a venue
        </v-btn>
        <v-divider :inset="inset" vertical v-if="this.$store.state.isLoggedIn" class='hidden-xs-only'></v-divider>

      </v-toolbar-items>

       <!--<v-app-bar-nav-icon @click="drawer = true" class='hidden-sm-and-up' v-if="!this.$store.state.isLoggedIn"></v-app-bar-nav-icon>-->


<v-menu
      v-model="menu"
      :close-on-content-click="true"
      open-on-click
      :nudge-width="200"
      offset-x
      class="hidden-sm-and-up"
      transition="scale-transition"
      v-if="!this.$store.state.isLoggedIn"
    >
      <template v-slot:activator="{ on }">
        <v-toolbar-items class=''>
          <v-btn
          v-on="on"
          text
          class="mr-lg-n4 hidden-sm-and-up">
      <v-icon dark>mdi-menu</v-icon>
    </v-btn>
    </v-toolbar-items>

      </template>
      <v-card>
        <v-list
        nav
        dense
      >
        <v-list-item-group v-model="item" color="primary">
          <v-list-item
            v-for="(item, i) in itemsmobile"
            :key="i"
            :to="item.link"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content 
            >
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      </v-card>
    </v-menu>




       <v-menu
      v-model="menu"
      :close-on-content-click="true"
      open-on-click
      :nudge-width="200"
      offset-x
      class="mr-lg-9"
      transition="scale-transition"
      v-if="this.$store.state.isLoggedIn"
    >
      <template v-slot:activator="{ on }">
        <v-toolbar-items class=''>
          <v-btn
          v-on="on"
          text
          class="mr-lg-n4">
      <v-icon dark>mdi-menu</v-icon>
    </v-btn>
    </v-toolbar-items>

      </template>
      <v-card>
        <v-list>
          <v-list-item>

            <v-list-item-content>
              <v-list-item-title><b>{{ name[0].first_name }} {{ name[0].last_name }}</b> </v-list-item-title>
              <!-- <v-list-item-subtitle>Founder of Vuetify.js</v-list-item-subtitle> -->
            </v-list-item-content>

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

            <v-list-item-content 
            @click="leave(item.text)"
            >
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      </v-card>
    </v-menu>
    </v-app-bar>
    <v-divider></v-divider>
    </div>
</template>

<script>
import store from '@/store'
import axios from 'axios'

  export default {
    data: () => ({
      drawer: false,
      src: '',
      item: 0,
      items: [
        { text: 'Manage venue', icon: 'mdi-folder', link: '/dashboard' },
        { text: 'Add a venue', icon: 'mdi-clipboard-plus', link: '/propose' },
        { text: 'Account settings', icon: 'mdi-cogs', link: '/settings' },
        { text: 'Log out', icon: 'mdi-power-plug-off', link: '/'}
      ],
      itemsmobile: [
        { text: 'Login', icon: 'mdi-login', link: '/login' },
        { text: 'List your venue', icon: 'mdi-plus-circle', link: '/owner' }
      ],
    }),
    computed: {
     name () {
        return store.state.user
      }
    },
    methods: {
      src () {
        alert("heuyy")
      },

      search (e) {
        if (e.keyCode === 13) {
          axios.get(`${this.$store.state.url}/search/${this.src}`)
        .then((res) => {
            this.$store.commit('setVenue', res.data.result)
            this.$store.commit('setItem', res.data.result)
      })
          this.$router.push({ path: 'search', query: { q: this.src } })
          this.src = ''
        }
      },
      logout () {
        this.$store.commit("setUser", null)
      },
      leave (x) {
        if (x === 'Log out') {
          this.logout()
        }
      }
    }
  }
</script>

<style scoped>
.head {
border-bottom: 5px solid green;
}

/deep/ .v-text-field{
      width: 180px;
}

@media only screen and (min-width: 600px) {
/deep/ .v-text-field{
      width: 0px;
}
}
</style>