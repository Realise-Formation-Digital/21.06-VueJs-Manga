<template>
      <b-container>
            <h1><p class="title text-center">MANGAS </p></h1>
  <div>
    <!-- | CARD | -->
    <b-row>
      <b-col>
        <div v-for="(manga, index) in mangas" :key="index">
          <card
            class="edinkartica"
            :id="manga.mal_id"
            :mangaTitle="manga.title"
            :rank="manga.rank"
            :img="manga.image_url"
            :start_date="manga.start_date"
            :end_date="manga.end_date"
            @selectedManga="handleSelectedManga"
          />
        </div>
      </b-col>
    </b-row>
    <!-- | MODAL | -->
    <b-modal v-model="modalShow">
      <b-card no-body class="overflow-hidden" style="max-width: 540px">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img
              :src="selectedManga && selectedManga.image_url"
              :alt="selectedManga && selectedManga.name"
              class="rounded-0"
            ></b-card-img>
            <a :href="selectedManga && selectedManga.url" target="_blank"
              >LIEN EXTERNE</a
            >
          </b-col>
          <b-col md="6">
            <b-card-body :title="selectedManga && selectedManga.name">
              KANDJI:{{ selectedManga && selectedManga.name_kanji }}<br />
              <b-card-text class="tekstba">
                {{ selectedManga && selectedManga.about }}
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-modal>
  </div>
        </b-container>
</template>

<script>
import card from "../components/card.vue";
const axios = require("axios"); // import axios to use the REST API
export default {
  name: "Page1",
          // Page title
          created () {
            document.title = "Manga | Listes des mangas";
        },

  components: {
    // our components
    card,
  },
  mounted() {
    this.getMangas();
  },
  data() {
    // return data
    return {
      mangas: [],
      modalShow: false,
      selectedManga: null,
    };
  },

  methods: {
    handleEvent(message) {
      console.log("Recu", message);
    },
    async handleSelectedManga(id) {
      //console.log("ecoute", id);
      this.selectedManga = null;
      const caractereid = await axios.get(
        "http://192.168.1.61:8000/v3/character/" + id
      );
      console.log(caractereid);
      //this.selectedManga = this.mangas.find((manga) => manga.id === id);
      this.selectedManga = caractereid.data;
      this.modalShow = true;
    },

    async getMangas() {
      // Get the answer from the server (Punk Api) and stock it in result
      const result = await axios.get("http://192.168.1.61:8000/v3/top/manga/");

      //console.log("result", result);
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
.title {
  padding-top: 40px;
  padding-bottom: 40px;

}
</style>