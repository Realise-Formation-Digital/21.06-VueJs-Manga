<template>



  <b-card
    :title="mangaTitle"
    :img-src="img"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Rank:      {{rank}} <br>
      Start date:      {{start_date}}<br>
      End date:      {{end_date}}
    </b-card-text>

    <b-button class="center" :href="url" variant="primary">Voir plus</b-button>
  </b-card>


  
</template>

<script>
export default {
  name: "Manga",
  props: {
    mangaTitle: {
      type: String,
      default: "",
      required: true,
    },
    rank: {
      type: String,
      default: "",
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
      required: true,
    },
      end_date: {
      type: String,
      default: "",
      required: true,
    },
  },
};



/*MODAL START*/



</script>

<style scoped>
.center {
      background: red;
}
.card-img, .card-img-top {

  width: 25%;
}


</style>