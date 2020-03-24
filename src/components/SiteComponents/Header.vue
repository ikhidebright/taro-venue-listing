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

      <v-btn text class="hidden-sm-and-down" to='/addvenue'>
      List your venue
      </v-btn>

       <v-app-bar-nav-icon @click="drawer = true" class='d-lg-none'></v-app-bar-nav-icon>

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