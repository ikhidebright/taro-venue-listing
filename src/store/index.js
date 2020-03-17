import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    topCities: ['Lagos', 'Abuja', 'Enugu', 'Kano', 'Port Harcourt'],
    topEvents: ['Weddings', 'Conferences', 'Meetings', 'Birthdays', 'Engagement Party', 'Parties']
  },
  mutations: {},
  actions: {},
  modules: {}
});
