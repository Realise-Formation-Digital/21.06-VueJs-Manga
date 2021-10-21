import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//Pages
import Home from "../pages/Home.vue";
import Manga from "../pages/Manga.vue";
import Contact from "../pages/AboutUs.vue";
import AboutUs from "../pages/Contact.vue";

const routes = [
    { path: '/', 
      component: Home
    },

    { path: '/Manga', 
      component: Manga
    },

    { path: '/AboutUs', 
      component: AboutUs
    },

    { path: '/Contact', 
      component: Contact
    },
]




const router = new VueRouter({
    mode: 'history',
    routes: routes // short for `routes: routes`
}) 

export default router
