import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  url: 'http://localhost:8000',
  booking: null,
  venued: null,
  items: null,
  reviews: null,
  venues: null,
  logindetails: null,
  states: [
    'Abia',
    'Abuja',
'Adamawa',
'Akwa Ibom',
'Anambra',
'Bauchi',
'Bayelsa',
'Benue',
'Borno',
'Cross River',
'Delta',
'Ebonyi',
'Enugu',
'Edo',
'Ekiti',
'Gombe',
'Imo',
'Jigawa',
'Kaduna',
'Kano',
'Katsina',
'Kebbi',
'Kogi',
'Kwara',
'Lagos',
'Nasarawa',
'Niger',
'Ogun',
'Ondo',
'Osun',
'Oyo',
'Plateau',
'Rivers',
'Sokoto',
'Taraba',
'Yobe',
'Zamfara',
  ],
  numberOfGuestFilter: [
      'Less than 100 Guests',
'100 - 200 Guests',
'200 - 400 Guests',
'400 - 600 Guests',
'600 - 1,000 Guests',
'More than 1,000 Guests'
  ],
  eventTypeFilter: [
'Wedding Halls',
'Outdoor Venues',
'Meeting Rooms',
'Conference Centers'
  ],
  venueTypeFilter: [
    'Auditorium',
'Boardroom',
'Civic Center',
'Club Hall',
'Conference Center',
'Coworking Space',
'Field'
  ],
    topCities: ['Lagos', 'Abuja', 'Enugu', 'Kano', 'Port Harcourt'],
    topEvents: ['Weddings', 'Conferences', 'Meetings', 'Birthdays', 'Engagement Party', 'Parties']
  },
  mutations: {
    setVenue (state, item) {
      state.venues = item
    },

    setBook (state, item) {
      state.booking = item
    },

    setLogin (state, item) {
      state.logindetails = item
    },

    setVenueD (state, item) {
      state.venued = item
    },

    setReview (state, item) {
      state.reviews = item
    },
    
    setItem (state, item) {
      state.items = item
    }
  },
  actions: {},
  modules: {}
});
