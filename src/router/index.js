import Vue from "vue";
import VueRouter from "vue-router";
import Coro from "../views/Coro.vue";
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

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Coro",
    component: Coro
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
    path: "/manage",
    name: "ManageVenue",
    component: ManageVenue
  },
  {
    path: "/venue/:id-:name",
    name: "Venue",
    component: Venue
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
    path: "/addvenue",
    name: "Addvenue",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Addvenue.vue")
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
