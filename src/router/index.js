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
import Recover from "../views/Recover.vue"
import ChangeLostPass from "../views/ChangeLostPass.vue"
import axios from 'axios'
import store from '@/store'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: '8000+ Event venues, hotel halls and meeting rooms across Nigeria | taro.com',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ]
    },
    beforeEnter: ((to, from, next) => {
      document.title = to.meta.title
      next()
    })
  },
  {
    path: "/search",
    name: "HeadSearch ",
    component: HeadSearch,
    props: (route) => ({ query: route.query.q }),
    beforeEnter: (to, from, next) => {
      axios.get(`${store.state.url}/search/${to.query.q}`)
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
    component: AddNewVenue,
    beforeEnter: (to, from, next) => {
      if (store.state.isLoggedIn == false) {
        let item = {
          errormessagealert: "Sorry You have to Login first",
          erroralert: true
        }
          store.commit("setErrorAlert", item)
          next('login')
        }
        next()
    }
  },
  {
    path: "/set/:id-:token",
    name: "ChangeLostPass",
    component: ChangeLostPass
  },
  {
    path: "/recover",
    name: "Recover",
    component: Recover
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
      axios.get(`${store.state.url}/venues/${to.params.id}`)
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
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (store.state.isLoggedIn == false) {
        let item = {
          errormessagealert: "Sorry You have to Login first",
          erroralert: true
        }
          store.commit("setErrorAlert", item)
          next('login')
        }
        let getOwnerVenues = store.getters.myvenues
        getOwnerVenues.then(x => store.commit("setLoggedinOwnerVenues", x.data.result))
        next()
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: (to, from, next) => {
      if (to.query.q == "success") {
        console.log(to)
          let item = {
            successmessagealert: "Registration Succesfull Login now!!",
            successalert: true
          }
          store.commit("setSuccessAlert", item)
          next()
        }
        next()
    }
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
