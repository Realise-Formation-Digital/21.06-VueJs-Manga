<template>
  <div>
    <h1></h1>
    test1

    <!-- Butto that trigger the events that get the beer list
    <b-btn @click="getBeers()">Get Beers </b-btn>

    -->

    <!-- Loop over beers -->
    <div v-for="(manga, index) in mangas" :key="index">
      <card
        :mangaTitle="manga.title"
        :rank="manga.rank"
        :img="manga.image_url"
        :start_date="manga.start_date"
        :end_date="manga.end_date"

      />
    </div>
  </div>
</template>

<script>
import card from '../components/card.vue'
const axios = require("axios"); // import axios to use the REST API

export default {
  name: "Page1",
  components: {
    card
  },
      mounted() {
      this.getMangas()
    },
  data() {
    return {
      mangas: [],
    };
  },
  methods: {
    handleEvent(message) {
      console.log("Recu", message);
    },
    
    async getMangas() {
      
      // Get the answer from the server (Punk Api) and stock it in result
      const result = await axios.get("http://192.168.1.61:8000/v3/top/manga/");
      console.log("result", result);
      // Stock the result in dynamic variable that connect HTML and JS
      this.mangas = result.data.top;
    },
  },
};
</script>

<style scoped>
.tekstba {
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 12;
-webkit-box-orient: vertical;
}
</style>