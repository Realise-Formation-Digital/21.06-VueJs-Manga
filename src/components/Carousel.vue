<template>
  <b-carousel
    id="carousel-1"
    :interval="4000"
    controls
    indicators
    background="#ababab"
    style="text-shadow: 1px 1px 2px #333"
  >
    <!-- Text slides with image -->
    <b-carousel-slide>
       <h1><a  class="text-warning" href="https://myanimelist.net/manga/56981/Psychedelics" target="_blank">Get the most psychidelics</a></h1>
      <template #img>
        <img
        
          class="d-block w-100"
          width="1920"
          height="600"
          src="../assets/img/slide02.jpeg"
          alt="image slot"
       >
      </template>
    </b-carousel-slide>

     <b-carousel-slide>
        <h1 ><a class="text-success" href="https://myanimelist.net/anime/2403/Kodomo_no_Jikan_TV" target="_blank">Get the most populars</a></h1>
      <template #img>
        <img
          class="d-block w-100"
          width="1920"
          height="600"
          src="../assets/img/slide01.jpeg"
          alt="image slot"
       >
         </template>
    </b-carousel-slide>
    
    <b-carousel-slide>
      <h1 ><a class="text-black" href="https://myanimelist.net/anime/20555/SoniAni__Super_Sonico_The_Animation?q=iconic&cat=anime" target="_blank">Get the most iconic</a></h1>
      <template #img>
        <img
          class="d-block w-100"
          width="1920"
          height="600"
          src="../assets/img/slide03.jpeg"
          alt="image slot"
       >
      </template>
    </b-carousel-slide>

     <b-carousel-slide>
      <h1 ><a class="text-danger" href="https://myanimelist.net/anime/31339/Drifters?q=terrific&cat=anime" target="_blank">Get the most terrifics</a></h1>
      <template #img>
        <img
          class="d-block w-100"
          width="1920"
          height="600"
          src="../assets/img/slide04.jpeg"
          alt="image slot"
       >
      </template>
    </b-carousel-slide>
       
      
  </b-carousel>
</template>

<style>
</style>

<script>
export default {
  name: "carousel",
  props: {},

  data() {
    return {
      sliding: null,
    };
  },

  methods: {},
};
</script>
