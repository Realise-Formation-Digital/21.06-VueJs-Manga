<template>
  <b-card
    :title="manga.title"
    :img-src="img"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2" >
    <b-card-text>
      Score:      {{score}}
      Rank:      {{rank}}
    </b-card-text>

    <b-button class="center" href="" variant="primary">VIEW</b-button>
  </b-card>


  
</template>

<script>
export default {
  name: "Manga",
  props: {
    title: {
      type: String,
      default: "",
      required: true,
    },
    score: {
      type: String,
      default: "",
      required: false,
    },
    img: {
      type: String,
      default: "",
      required: true,
    },
    rank: {
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