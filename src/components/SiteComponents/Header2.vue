<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="white lighten-2" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            {{item.title}}
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app color="white darken-4" dark>
            <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-toolbar-title>{{appTitle}}</v-toolbar-title>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn text class="hidden-sm-and-down" to='/howitworks'>How it works</v-btn>
            <!-- sign in hover menu -->
            <v-menu
      :close-on-content-click="false"
      open-on-hover
      :nudge-width="120"
      transition="slide-x-transition"
      class="ma-4"
    >
      <template v-slot:activator="{ on }">

          <v-btn text class="hidden-sm-and-down" v-on="on">Sign in</v-btn>
        
          <!-- <v-avatar color="indigo"
          dark
          v-on="on">
      <v-icon dark>mdi-account-circle</v-icon>
    </v-avatar> -->

    <!-- <v-avatar>
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar> -->
      </template>

      <v-card>
        

        <v-divider></v-divider>
        <v-btn text large block color="#001F90" to="/login">Sign in</v-btn>
        <v-btn text large block color="#001F90" to="/register">Register</v-btn>
        <!-- <v-btn text large block>Settings</v-btn>
        <v-btn text large block>Booking History</v-btn>
        <v-btn text large block>Sign out</v-btn> -->
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

        <!-- <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text @click="menu = false">Cancel</v-btn>
          <v-btn color="primary" text @click="menu = false">Save</v-btn>
        </v-card-actions> -->
      </v-card>
    </v-menu>
            <!-- <v-btn text class="hidden-sm-and-down" to='/addvene'>Sign in</v-btn> -->
            <v-btn text class="hidden-sm-and-down" to='/addvenue'>List your venue</v-btn>

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
        <v-btn text large block to="/manage"><v-icon>mdi-lead-pencil</v-icon>Manage Venue</v-btn>
        <v-btn text large block><v-icon>mdi-content-save</v-icon>Saved Venues</v-btn>
        <v-btn text large block> <v-icon>mdi-settings</v-icon> Settings</v-btn>
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

        <!-- <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text @click="menu = false">Cancel</v-btn>
          <v-btn color="primary" text @click="menu = false">Save</v-btn>
        </v-card-actions> -->
      </v-card>
    </v-menu>

        </v-toolbar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'taro.ng',
            drawer: false,
            items: [
                { title: 'Menu' },
                { title: 'Sign In' },
                { title: 'Join' }
            ],

            // login avatar click

            fav: true,
            menu: false,
            message: false,
            hints: true,
        };
    }
};
</script>
