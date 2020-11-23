import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios
if (process.env.PROD) {
    Vue.prototype.$axios.defaults.baseURL = "https://app.woodsland.com.vn:2002";
  } else {
    Vue.prototype.$axios.defaults.baseURL = "http://localhost:2003";
  }
