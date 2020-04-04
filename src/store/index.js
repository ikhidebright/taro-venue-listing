import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  booking: null,
  venued: null,
  items: null,
  venues: null,
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

    setVenueD (state, item) {
      state.venued = item
    },
    
    setItem (state, item) {
      state.items = item
    }
  },
  actions: {},
  modules: {}
});
