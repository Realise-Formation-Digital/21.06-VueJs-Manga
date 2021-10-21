import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//Pages
import Home from "../pages/Home.vue";
import Manga from "../pages/Manga.vue";
import AboutUs from "../pages/AboutUs.vue";
import Contact from "../pages/Contact.vue";

const routes = [
    { path: '/', 
      component: Home
    },

    { path: '/manga', 
      component: Manga
    },

    { path: '/aboutus', 
      component: AboutUs
    },

    { path: '/contact', 
      component: Contact
    },
]




const router = new VueRouter({
    mode: 'history',
    routes: routes // short for `routes: routes`
}) 

export default router
