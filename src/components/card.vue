<template>
  <b-card
    :title="mangaTitle"
    :img-src="img"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem"
    class="mb-2"
  >
    <b-card-text> Rank: {{ rank }} <br /> </b-card-text>
    <b-button class="center edinbutton" variant="primary">Voir plus</b-button>
    <b-button href="#" variant="primary" @click="selectManga()">VOIR</b-button>
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
  methods: {
    selectManga() {
      console.log("Clicked");
      this.$emit("selectedManga", this.id);
    },
          showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['my-modal'].toggle('#toggle-btn')
      }
  },
};

/*MODAL START*/

</script>

<style scoped>
.center {
  background: rgb(97, 97, 97);
}
.card-img,
.card-img-top {
  width: 320px;
  height: 320px;
}
.card-body {
  height: 130px;
}
.edinbutton {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
.mb-2 {
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 10px;
  margin-top: 40px;
}
</style>