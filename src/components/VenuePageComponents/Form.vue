<template>
  <v-card
    class=""
    max-width="600"
    tile
    flat
  >

    <v-window v-model="step">
      <v-window-item :value="1">
      <v-card-title>
      <v-row>
     <span class="headline ml-3">Book {{items[0].name}}</span>
     <v-spacer></v-spacer>
        <v-btn
        fab
        dark
        color='red'
        small
        class="mr-4"
        title="close"
        @click="$emit('closemodal')"
      >
        <v-icon> mdi-close-circle</v-icon>
      </v-btn>
    
     </v-row>
    </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
        <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="dateFormatted"
              label="*Event Date"
              outlined
              :allowed-dates="allowedDates"
              @blur="date = parseDate(dateFormatted)"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
        </v-menu>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
          :items="venuetype"
          label="*Event Type"
          v-model='event'
          single-line
          outlined
        ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                label="*First Name"
                required
                v-model='first_name'
                outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                label="*Last Name"
                required
                v-model='last_name'
                outlined
              ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                type='number'
                label="*Phone Number"
                hint='e.g 08067998961'
                required
                v-model='phone'
                outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                label="*Email"
                required
                v-model='email'
                outlined
              ></v-text-field>
              </v-col>
            </v-row>
          <small>*indicates required field</small>
          </v-container>
        </v-card-text> 
      </v-window-item>

      <v-window-item :value="2">
      <v-card-title>
      <v-row>
     <span class="headline ml-3">Price of {{items[0].name}}</span>
     <v-spacer></v-spacer>
        <v-btn
        fab
        dark
        color='red'
        small
        class="mr-4"
        title="close"
        @click="$emit('closemodal')"
      >
        <v-icon> mdi-close-circle</v-icon>
      </v-btn>
    
     </v-row>
    </v-card-title>
        <v-card-text> 
        <v-alert
      text
      dense
      color="teal"
      icon="mdi-clock-fast"
      border="left"
    >
      Perfect! Our customer support staff witll call you shortly
        to assist with your request. Below is a breakdown of your details
        <br>
        </v-alert>
        <v-container>

        <v-row>
        <v-col>
         Full Name
        </v-col>
        <v-col>
         {{ first_name }} {{ last_name }}
        </v-col>
        </v-row>

        <v-row>
        <v-col>
         Event date
        </v-col>
        <v-col>
         {{ date }}
        </v-col>
        </v-row>

        <v-row>
        <v-col>
         Event type
        </v-col>
        <v-col>
         {{ event }}
        </v-col>
        </v-row>

         <v-row>
        <v-col>
         Venue Price
        </v-col>
        <v-col>
         ₦{{items[0].price}}
        </v-col>
        </v-row>
        
        <br>
        <b><i>Pay the Sum of ₦{{halfprice}} to Book now and Balance Later</i></b>

        </v-container>
        </v-card-text>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
    <!--  <v-btn
        :disabled="step === 1"
        text
        @click="step--"
      >
        Back
      </v-btn> -->
      <v-spacer></v-spacer>
      <v-btn
        :disabled="step === 2 || email.length < 5 || first_name.length < 2 || last_name.length < 2 || phone.length < 9 || event === ''"
        v-if="step != 2"
        color="#001F90"
        class="price"
        flat
        @click="next"
      >
        Next
      </v-btn>

      
        <v-btn
        color="#001F90"
        class="price"
        v-on="on"
        v-if="step === 2"
        flat
        :value="halfprice"
        @click="payWithRave"
        >
        Pay ₦{{halfprice}} now
        </v-btn>

    </v-card-actions>
  </v-card>
</template>

<script>
/* eslint-disable no-unused-vars */
import axios from 'axios'
import unirest from 'unirest'

  export default {
    data: vm => ({
      email: '',
      phone: '',
      first_name: '',
      last_name: '',
      event: '',
      step: 1,
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      dialog: false,
      menu1: false,
      menu2: false,
      getpaidSetup: null,
      venuetype: ['Wedding reception', 'Meeting', 'Training', 'Conference', 'Get Together', 'Product Lunch', 'Corporate Party', 'Wedding Anniversery', 'Engagement Party', 'Birthday Party', 'Class Reunion', 'Brand Promotion', 'Fashion Show', 'Pool Party', 'Award Show', 'Exhibition', 'Bachelor Party', 'Other']
    }),
    props: ['items'],
   
     watch: {
      date () {
        this.dateFormatted = this.formatDate(this.date)
      },
    },

    computed: {
      bookdetails () {
          return this.$store.state.booking
      },

      halfprice () {
          return this.items[0].price/2
      },

      computedDateFormatted () {
        return this.formatDate(this.date)
      },


      currentTitle () {
        switch (this.step) {
          case 1: return 'Sign-up'
          case 2: return 'Create a password'
          default: return 'Account created'
        }
      },
    },
    methods: {
      payWithRave () {
         window.getpaidSetup({
            PBFPubKey: process.env.VUE_APP_RAVE,
            customer_email: this.email,
            amount: this.items[0].price/2,
            customer_firstname: this.first_name,
            customer_lastname: this.last_name,
            customer_phone: this.phone,
            custom_title: `Payment for ${this.items[0].name}`,
            currency: "NGN",
            txref: "rave-123456",
            meta: [{
                metaname: "flightID",
                metavalue: "AP1234"
            }],
            onclose: function() {},
            callback: function(response) {
                var txref = response.tx.txRef; // collect txRef returned and pass to a 					server page to complete status check.

                console.log("This is the response returned after a charge", response);

              if (
                    response.tx.chargeResponseCode == "00" ||
                    response.tx.chargeResponseCode == "0"
                ) {



 var payload =
 {
  "SECKEY": "FLWSECK-e6db11d1f8a6208de8cb2f94e293450e-X",
  "txref": response.tx.txRef
};

var server_url = "https://api.ravepay.com/flwv3-pug/getpaidx/api/v2/verify"; 
//please make sure to change this to production url when you go live

//make a post request to the server
unirest.post(server_url)
      .headers({'Content-Type': 'application/json'})
      .send(payload)
      .end(function(response) {
            console.log("This is the response returned after a charge", response);
            //check status is success.
          if (response.body.data.status === "successful" && response.body.data.chargecode == '00') {
              //check if the amount is same as amount you wanted to charge just to be very sure
              if (response.body.data.amount === this.items[0].price/2) {
                  console.log("Payment successful");
                  //then give value for the payment
                
              }
          }
      })
              // redirect to a success page
                    console.log("Payment successful");
                } else {
                    // redirect to a failure page.
                    console.log("Payment failed");
                }
     window.close(); // use this to close the modal immediately after payment.
            }
        });
    },

        formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
    
        next () {
          this.book()
          let book = {
          email: this.email,
          phone: this.phone,
          first_name: this.first_name,
          last_name: this.last_name,
          date: this.dateFormatted,
          event: this.event
      }
            this.step++
            this.$store.commit("setBook", book)
        },

        book () {
          axios.post(`${this.$store.state.url}/book`, {
          email: this.email,
          phone_number: this.phone,
          first_name: this.first_name,
          last_name: this.last_name,
          event_date: this.dateFormatted,
          event_type: this.event,
          venue_id: this.items[0].venue_id
          }).then((res) => {
            console.log(res)
          })
        },

        allowedDates: val => parseInt(val.split('-')[2], 10) % 2 === 0,
    }
  }
</script>

<style scoped>
.price {
    color: white
}
</style>