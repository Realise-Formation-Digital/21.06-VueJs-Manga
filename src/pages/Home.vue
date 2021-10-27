<template>
  <div>
    <!--link composants carousel-->
    <carousel />
    <cardhome/>
   
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import cardhome from "../components/cardhome.vue";


export default {
  name: "Home",
  created() {
    document.title = "Bienvenue sur site des mangas";
  },
  components: {
    Carousel,
    cardhome,
  },
};

</script>

<style scoped>
#card {
  margin-top: 100px;
  margin-left: 600px;
  margin-right: 600px;
}
#sara {
  margin-top: 50px;
}
</style>