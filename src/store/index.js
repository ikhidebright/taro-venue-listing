import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import Api from "@/Services/Event.service"
/*eslint-disable*/

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  location: null,
  url: 'https://venue-app-backend.herokuapp.com',
  insertvenueid: null,
  venuegallery: [],
  insertvenuename: null,
  insertquestionid: null,
  questionsandanswers: null,
  successmessagealert: null,
  successalert: false,
  errormessagealert: null,
  erroralert: false,
  dismissablealert: false,
  dismissablemessage: null,
  booking: null,
  user: null,
  loggedInOwnerVenues: null,
  isLoggedIn: false,
  venued: null,
  items: null,
  reviews: null,
  venues: null,
  displayamenities: [],
  logindetails: {
    email: '',
    password: '',
    registered: false
  },
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
'Writing Board'
],
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
    topCities: ['Lagos', 'Abuja'],
    topEvents: ['Weddings', 'Conferences', 'Meetings', 'Birthdays', 'Engagement Party', 'Parties']
  },
  mutations: {
    // set user location
    setLocation (state, item) {
      state.location = item
    },

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

    // setting the image gallery in venue details pages
    setVenueGallery (state, item) {
      state.venuegallery = item
      let coverImage = {
        id: state.venued[0].name,
        image: state.venued[0].thumbnail_image,
        venue_id: state.venued[0].name
      }
      state.venuegallery.unshift(coverImage)
    },

    // setting a logged in user
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

    // setting question id to use when adding answers
    setQuestionId (state, item) {
      state.insertquestionid = item
    },

    setVenueD (state, item) {
      state.venued = item
    },

    setErrorAlert (state, item) {
      state.errormessagealert = item.errormessagealert
      state.erroralert = item.erroralert
    },

    setDismissableAlert (state, item) {
      state.dismissablealert = item.dismissablealert
      state.dismissablemessage = item.dismissablemessage
    },

    setSuccessAlert (state, item) {
      state.successmessagealert = item.successmessagealert
      state.successalert = item.successalert
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

    async getVenueGallery ({ state, commit }, id) {
      let item = await axios.get(`${state.url}/getgallery/${id.id}`)
      commit('setVenueGallery', item.data.result)
    },

    async getQuestionsandanswers ({ state, commit }, id) {
      let item = await axios.get(`${state.url}/questionsandanswers/${id.id}`)
      commit('setQuestionsandanswers', item.data.result)
    },
    // error dispatch
    async setError ({ commit }, payload) {
      commit("setErrorAlert", {
        errormessagealert: payload.message,
        erroralert: payload.show
      })
    },
    // get location
    async getLocation ({ commit }, payload) {
      let location = await Api.getLocationFromGoogle(payload.lat, payload.log)
      let userLocation = {
        number: location.data.results[0].address_components[0].long_name,
        roadName: location.data.results[0].address_components[1].long_name,
        townName: location.data.results[0].address_components[2].long_name,
        city: location.data.results[0].address_components[3].long_name,
        state: location.data.results[0].address_components[5].long_name,
        LGA: location.data.results[0].address_components[4].long_name,
        fullAddress: location.data.results[0].formatted_address
      }
      commit("setLocation", userLocation)
    }
  },
  modules: {}
});
