<template>
    <div class="footer pa-lg-5 pt-5">
        <v-row>
        </v-row>
       <v-card
            class="d-flex flex-row justify-lg-space-between justify-md-space-between justify-xl-space-between ml-sm-0 mb-12 mb-lg-0"
            max-width="1100px"
            flat
            color="#08192b"
            tile
    >

    <v-card flat
            color="#08192b"
            class="foot hidden-xs-only">
         <ul>
             <li>
         <h2 class="title">Get More Bookings For Yor Venue</h2></li>
         <p class="body-2 font-weight-light">List your venue on tora.ng and reach more
people. It’s free and convinient</p>
           <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Venue Name"
            single-line
            outlined
            dark
            color='#cfd9e0'
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            type="tel"
            background-color="gray"
            label="Phone Number"
            color="#cfd9e0"
            dark
            single-line
            outlined
          ></v-text-field>
        </v-col>
           </v-row>  
           <v-btn x-large color="#888888" dark block outlined tile>Add Your Venue</v-btn>
         </ul>
            </v-card>


            <v-card flat
            color="#08192b"
            class="foot">
         <ul>
             <li>
         <h4 class="subtitle-2">Company</h4></li>
             <li>
                 <router-link to='/about' class="li">About </router-link>
             </li>
             <li>
                 <router-link to='/privacy' class="li">Privacy</router-link>
             </li>
             <li>
                 <router-link to='/terms' class="li"> Terms</router-link>
             </li>
             <li>
                 <router-link to='/howitworks' class="li">How it works</router-link>
             </li>
             <li>
                 <router-link to='/owner' class="li">List your venue</router-link>
             </li>
             <li>
                 <router-link to='/contact' class="li">Contact</router-link>
             </li>
             <li>
                 <router-link to='/weddings' class="li">Plan my Wedding</router-link>
             </li>

             <li>
                 <router-link to='/weddings' class="li">FAQs</router-link>
             </li>
         </ul>
            </v-card>
         
            <v-card class="foot ml-12"
            color="#08192b"
            flat>
         <ul>
             <li>
         <h4 class="subtitle-2">Events</h4></li>
             <li v-for="topevent in topEvents" :key="topevent">
                 <router-link :to="`/event/${topevent.replace(/[' ']+/g,'-').toLowerCase()}`" class="li">{{ topevent }}</router-link>
             </li>
         </ul>
            </v-card>

            <!-- <v-card class="foot hidden-sm-and-down"
            color="#08192b"
            flat>
         <ul>
             <li>
         <h4 class="subtitle-2">Top Cities</h4></li>
             <li v-for="topcity in topCities" :key="topcity" @click="city(topcity)">
                 <router-link :to="`/cities/${topcity.replace(/[' ']+/g,'-').toLowerCase()}`" class="li">{{ topcity }}</router-link>
             </li>
         </ul>
            </v-card> -->
            </v-card>

            <!-- <v-card class="foot d-lg-none d-md-none d-sm-none d-xl-none mb-8 mt-n5"
            color="#08192b"
            flat>
         <ul>
             <li>
         <h4 class="subtitle-2">Top Cities</h4></li>
             <li v-for="topcity in topCities" :key="topcity" @click="city(topcity)">
                 <router-link :to="`/cities/${topcity.replace(/[' ']+/g,'-').toLowerCase()}`" class="li">{{ topcity }}</router-link>
             </li>
         </ul>
            </v-card> -->

        <v-card class="foot ml-lg-and-up-9 mt-lg-7 ml-7 mt-n3"
            color="#08192b"
            flat>

            <v-btn
        fab
        x-small
        color="#cfd9e0"
        class="mr-4"
        href="http://facebook.com/taro"
        title="Follow us on Facebook"
      >
        <v-icon small>mdi-facebook</v-icon>
      </v-btn>


            <v-btn
        fab
        x-small
        color="#cfd9e0"
        class="mr-4"
        href="http://twitter.com/taro"
        title="Follow us on Twitter"
      >
        <v-icon small>mdi-twitter</v-icon>
      </v-btn>

        <v-btn
        fab
        x-small
        color="#cfd9e0"
        class="mr-4"
        href="http://instagram.com/taro"
        title="Follow us on Instagram"
      >
        <v-icon small>mdi-instagram</v-icon>
      </v-btn>

      <v-btn
        fab
        x-small
        color="#cfd9e0"
        class="mr-4"
        mailto="http://facebook.com/taro"
        title="Send us a mail"
      >
        <v-icon small>mdi-email</v-icon>
      </v-btn>

      <v-btn
        fab
        color="#cfd9e0"
        x-small
        class="mr-4"
        mailto="http://facebook.com/taro"
        title="Reach us via Whatsapp"
      >
        <v-icon small>mdi-whatsapp</v-icon>
      </v-btn>

         <p class="mt-6 mb-12 mb-lg-0 copyright"> Copyright © Taro.com 2020. All rights reserved</p>

            </v-card>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Footer',
    data () {
        return {
            topCities: this.$store.state.topCities,
            topEvents: this.$store.state.topEvents
        }
    },
    methods: {
        city (topcity) {
        axios.get(`${this.$store.state.url}/places/${topcity}`)
        .then((res) => {
            this.$store.commit('setVenue', res.data.result)
            this.$store.commit('setItem', res.data.result)
      })
        }
    }
}
</script>
<style scoped>
.footer {
width: 100%;
height: auto;
box-sizing: border-box;
background-color: #08192b;
}

ul {
    list-style-type: none;
    color: white;
    background-color: #08192b;
}

.foot {
    color: white;
    background-color: #08192b;
    font-family: 'Open Sans';
}

.foot p {
    color: white;
    font-family: 'Open Sans';
}

.foot i {
    color: #cfd9e0;
    font-size: 1vmin;
    font-family: 'Open Sans';
}

router-link {
    color: #cfd9e0;
    background-color: #08192b;
    font-family: 'Open Sans';
}

.li {
color: #cfd9e0;
text-decoration: none;
background-color: #08192b;
font-family: 'Open Sans';
font-size: 0.8rem;
}

.li:hover {
    color: rgb(150, 150, 150);
    text-decoration: underline;
}

.copyright {
color: #cfd9e0;
text-decoration: none;
background-color: #08192b;
font-family: 'Open Sans';
font-size: 0.8rem;
}
</style>