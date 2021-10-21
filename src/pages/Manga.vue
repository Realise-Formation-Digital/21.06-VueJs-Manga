<template>
   <div>
<h1>MANGA</h1>
        <div v-for="(manga, index) in mangas" :key="index">
             
      <card
        :title="manga.title"
        :score="manga.score"
        :img="manga.image_url"
        :rank="manga.rank"
      />
    </div>
</div>
</template>

<script>

import card from '../components/card.vue'
const axios = require("axios"); // import axios to use the REST API

export default {
  name: "manga",
  components: {
    card
  },
      mounted() {
      this.getmangas()
    },
  data() {
    return {
      mangas: [],
    };
  },
  methods: {
    
    async getmangas() {
      
      // Get the answer from the server (Punk Api) and stock it in result
      const result = await axios.get("http://192.168.1.61:8000/v3/top/anime/1/");
      
      // Stock the result in dynamic variable that connect HTML and JS
      this.mangas = result.data;
    },
  },
};

</script>
<style scoped>
h1{
    color: red;
    margin-top: center;
}
.mb-2 {    float: left; }
</style>