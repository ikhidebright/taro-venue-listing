import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  url: 'http://localhost:8000',
  insertvenueid: null,
  insertvenuename: null,
  insertquestionid: null,
  questionsandanswers: null,
  booking: null,
  user: null,
  loggedInOwnerVenues: null,
  isLoggedIn: false,
  venued: null,
  items: null,
  reviews: null,
  venues: null,
  displayamenities: [],
  logindetails: null,
  amenities: [
'Air Conditioner',
'Chairs',
'Changing Room',
'Cold Room',
'Drums',
'Fans',
'Internet',
'Lighting',
'Parking Space',
'Power supply',
'Projector',
'Rest Room',
'Security',
'Sound System',
'Stage',
'Tables',
'Television',
'Writing Board'],
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

    setAmenities (state, item) {
      state.displayamenities = item
    },

    setBook (state, item) {
      state.booking = item
    },

    setInsertVenue (state, item) {
      state.insertvenueid = item.id
      state.insertvenuename = item.name
    },

    setLoggedinOwnerVenues (state, item) {
      state.loggedInOwnerVenues = item
    },

    setUser (state, item) {
      state.user = item
      if(state.user && state.user != null) {
        state.isLoggedIn = true
      } else {
        state.isLoggedIn = false
      }
    },

    setLogin (state, item) {
      state.logindetails = item
    },

    setQuestionsandanswers (state, item) {
      state.questionsandanswers = item
    },

    setQuestionId (state, item) {
      state.insertquestionid = item
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
  getters: {
    myvenues: async (state) => {
      let x = axios.get(`${state.url}/ownervenue/${state.user[0].id}`)
              return x
    },
    addamenities: (state) => (arr, id) => {
      let x;
      arr.forEach((item) => {
        axios.post(`${state.url}/amenities`, {
          indexer: item,
          venue_id: id
        }).then((res) => {
          x = res
        })
      })
      return x
    }
  },
  actions: {
     async getAmenities ({ state, commit }, id) {
      let item = await axios.get(`${state.url}/amenities/${id.id}`)
      commit('setAmenities', item.data.result)
    },

    async getQuestionsandanswers ({ state, commit }, id) {
      let item = await axios.get(`${state.url}/questionsandanswers/${id.id}`)
      commit('setQuestionsandanswers', item.data.result)
    } 
  },
  modules: {}
});
