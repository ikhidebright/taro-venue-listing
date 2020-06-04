import Vue from 'vue'
import axios from 'axios'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)

/* eslint-disable */

const Api = axios.create({
    baseURL: "https://wejapabackend.herokuapp.com/api/",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': Vue.$cookies.get('we_japaTK')
    }
})

const Google = axios.create({
    baseURL: "https://maps.googleapis.com/maps/api/geocode/",
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
})

export default {
    // Login User
    login (userData) {
        return Api.post('/developer/login', userData)
    },
    // get all jobs
    getJobs (userID) {
        return Api.get('/job/all')
    },
    // getJobDetails
    getJobDetails (jobID) {
        return Api.get(`/job/${jobID}`)
    },
    // get user location
    async getLocationFromGoogle (lat, log) {
        return await Google.get(`/json?latlng=${lat},${log}&key=AIzaSyA1jQsO80a0jxsee89zxFgnAEod8Bn1GXM`);
    }
}