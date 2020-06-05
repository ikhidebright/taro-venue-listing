<template>
<div>
 <v-app-bar
      color="#ffffff"
      fixed
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <!-- Brad Title-->
      <v-toolbar-title
      class="ml-n5"
      >
      Taro
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- Search Bar-->
      <v-form
      v-if="this.$route.name != 'Home'"
      @submit.prevent="search"
      >
      <v-text-field
        hide-details
        color="#001F90"
        filled
        append-icon="search"
        label='Search venues, location'
        class='mr-lg-12 mr-6 searchBar float-left'
        dense
        v-model='searchValue'
        single-line
        required
        outlined
      ></v-text-field>
       </v-form>


      <!-- Bar action buttons-->
       <v-toolbar-items class='hidden-xs-only'>
        <v-divider vertical v-if="!this.$store.state.isLoggedIn"></v-divider>
        <v-btn text to='/login' v-if="!this.$store.state.isLoggedIn">
          Login
        </v-btn>
        <v-divider vertical v-if="!this.$store.state.isLoggedIn"></v-divider>
        <v-btn text to='/owner' v-if="!this.$store.state.isLoggedIn" class="mr-n5">
         List your venue
        </v-btn>
        <v-divider inset vertical v-if="this.$store.state.isLoggedIn" class='hidden-xs-only'></v-divider>
        <v-btn text to='/propose' class='hidden-xs-only mr-0' v-if="this.$store.state.isLoggedIn">
        Add a venue
        </v-btn>
        <v-divider inset vertical v-if="this.$store.state.isLoggedIn" class='hidden-xs-only'></v-divider>
      </v-toolbar-items>
    </v-app-bar>


    <!-- Side Bar-->
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
          class='hidden-sm-and-up'
        >
          <v-list-item>
            <!-- <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon> -->
            <v-list-item-title>List your venue</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <!-- <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon> -->
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </div>
</template>

<script>
/*eslint-disable*/
  export default {
    data: () => ({
      drawer: false,
      searchValue: null,
      group: true
    }),
    methods: {
      search () {
        if (this.searchValue) {
          alert("1")
        }
      }
    }
  }
</script>

<style scoped>
</style>