<template>

      <b-card
        :title="mangaTitle"
        :img-src="img"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width:300px; margin:5px;"
        class="mb-2 edinslika"
        @click="selectManga()"
      >
        <b-card-text> Rank: {{ rank }} <br /> </b-card-text>

    <b-button href="#" class="dugme" variant="primary" @click="selectManga()">VOIR</b-button>
      </b-card>

</template>

<script>
export default {
  name: "Manga",
  props: {
    id: {
      type: Number,
      required: false,
    },
    mangaTitle: {
      type: String,
      default: "",
      required: true,
    },
    rank: {
      type: Number,
      default: 0,
      required: false,
    },
    img: {
      type: String,
      default: "",
      required: true,
    },
    start_date: {
      type: String,
      default: "",
      required: false,
    },
    end_date: {
      type: String,
      default: "",
      required: false,
    },
  },
  methods: {
    selectManga() {
      console.log("Clicked");
      this.$emit("selectedManga", this.id);
    },
  },  
};

/*MODAL START*/

</script>

<style scoped>
.edinkartica{
  height: 520px;


}
.card-img-top {
  width: 300px;
  height: 270px;

}
.dugme {
  right: 10px;
  position: absolute;
bottom: 10px;
}

</style>