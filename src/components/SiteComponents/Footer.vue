<template>
    <div class="footer">
       <v-card
            class="d-flex flex-row justify-space-between ml-3"
            max-width="1100px"
            flat
            color="black"
            tile
    >

    <v-card flat
            color="black"
            class="foot hidden-sm-and-down">
         <ul>
             <li>
         <h2>Get More Bookings For Yor Venue</h2></li>
         <p>List your venue on tora.ng and reach more
people. It’s free and convinient</p>
           <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Venue Name"
            single-line
            outlined
            dark
            color='white'
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            type="tel"
            background-color="gray"
            label="Phone Number"
            color="white"
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
            color="black"
            class="foot">
         <ul>
             <li>
         <h4>Company</h4></li>
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
                 <router-link to='/addvenue' class="li">List your venue</router-link>
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
         
            <v-card class="foot"
            color="black"
            flat>
         <ul>
             <li>
         <h4>Events</h4></li>
             <li v-for="topevent in topEvents" :key="topevent">
                 <router-link :to="`/event/${topevent.toLowerCase()}`" class="li">{{ topevent }}</router-link>
             </li>
         </ul>
            </v-card>

            <v-card class="foot"
            color="black"
            flat>
         <ul>
             <li>
         <h4>Top Cities</h4></li>
             <li v-for="topcity in topCities" :key="topcity">
                 <router-link :to="`/cities/${topcity}`" class="li">{{ topcity }}</router-link>
             </li>
         </ul>
            </v-card>
            </v-card>

        <v-card class="foot ml-9 mt-7"
            color="black"
            flat>

            <v-btn
        fab
        dark
        small
        class="mr-4"
        href="http://facebook.com/taro"
        title="Follow us on Facebook"
      >
        <v-icon>mdi-facebook</v-icon>
      </v-btn>


            <v-btn
        fab
        dark
        small
        class="mr-4"
        href="http://twitter.com/taro"
        title="Follow us on Twitter"
      >
        <v-icon>mdi-twitter</v-icon>
      </v-btn>

        <v-btn
        fab
        dark
        small
        class="mr-4"
        href="http://instagram.com/taro"
        title="Follow us on Instagram"
      >
        <v-icon>mdi-instagram</v-icon>
      </v-btn>

      <v-btn
        fab
        dark
        small
        class="mr-4"
        mailto="http://facebook.com/taro"
        title="Send us a mail"
      >
        <v-icon>mdi-email</v-icon>
      </v-btn>

      <v-btn
        fab
        dark
        small
        class="mr-4"
        mailto="http://facebook.com/taro"
        title="Reach us via Whatsapp"
      >
        <v-icon>mdi-whatsapp</v-icon>
      </v-btn>

         <p class="mt-6"> Copyright © Taro.ng 2020. All rights reserved</p>

            </v-card>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data () {
        return {
            topCities: this.$store.state.topCities,
            topEvents: this.$store.state.topEvents
        }
    }
}
</script>
<style scoped>
.footer {
width: 100%;
height: auto;
box-sizing: border-box;
padding: 5vmin 0 5vmin 5vmin;
background-color: black;
}

ul {
    list-style-type: none;
    color: white;
    background-color: black;
}

.foot {
    color: white;
    background-color: black;
font-family: 'Open Sans';
}

.foot p {
    color: white;
font-family: 'Open Sans';
}

.foot i {
    color: white;
    font-size: 4vmin;
font-family: 'Open Sans';
}

router-link {
    color: white;
    background-color: black;
font-family: 'Open Sans';
}

.li {
color: #888888;
text-decoration: none;
background-color: black;
font-family: 'Open Sans';
font-size: 0.9rem;
}

.li:hover {
    color: rgb(150, 150, 150);
    text-decoration: underline;
}
</style>