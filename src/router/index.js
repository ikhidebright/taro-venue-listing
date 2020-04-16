/* eslint-disable no-unused-vars */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Venue from "../views/Venue.vue";
import ManageVenue from "../views/ManageVenue.vue";
import Bookings from "../views/Bookings.vue";
import Privacy from "../views/Privacy.vue";
import Terms from "../views/Terms.vue";
import Event from "../views/Event.vue";
import Cities from "../views/Cities.vue";
import Dashboard from "../views/Dashboard.vue";
import AddNewVenue from "../views/AddNewVenue.vue";
import HeadSearch from "../views/HeadSearch.vue";
import axios from 'axios'
import store from '@/store'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/search",
    name: "HeadSearch ",
    component: HeadSearch,
    props: (route) => ({ query: route.query.q }),
    beforeEnter: (to, from, next) => {
      axios.get(`http://localhost:8000/search/${to.query.q}`)
        .then((res) => {
          store.commit('setVenue', res.data.result)
          store.commit('setItem', res.data.result)
          next()
      })
    }
  },
  {
    path: "/propose",
    name: "AddNewVenue",
    component: AddNewVenue
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: Privacy
  },
  {
    path: "/terms",
    name: "Terms",
    component: Terms
  },
  {
    path: "/bookings",
    name: "Bookings",
    component: Bookings
  },
  {
    path: "/manage/:id-:name",
    name: "ManageVenue",
    component: ManageVenue
  },
  {
    path: "/venue/:id-:name",
    name: "Venue",
    component: Venue,
    beforeEnter: (to, from, next) => {
      axios.get(`http://localhost:8000/venues/${to.params.id}`)
        .then((res) => {
          store.commit('setVenueD', res.data.result)
          next()
      })
      axios.get(`${store.state.url}/reviews/${to.params.id}`)
        .then((res) => {
          store.commit("setReview", res.data.result)
        })

        this.$store.dispatch({
          type: 'getAmenities',
          id: to.params.id
    })
    }
  },
  {
    path: "/cities/:name",
    name: "Cities",
    component: Cities
  },
  {
    path: "/event/:name",
    name: "Event",
    component: Event
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/owner",
    name: "OwnersJoin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/OwnersJoin.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
}
});

export default router;
