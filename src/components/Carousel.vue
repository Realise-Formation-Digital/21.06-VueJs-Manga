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
       <h1 class="text-success">><a href="https://myanimelist.net/character/1706/Martis" target="_blank" class="text-warning">Get the most psychidelics</a></h1>
      <template #img>
        <img
        id=""
          class="d-block w-100"
          width="1920"
          height="600"
          src="../assets/img/slide01.jpeg"
          alt="image slot"
       >
      </template>
    </b-carousel-slide>

     <b-carousel-slide>
        <h1 class="text-success"><a href="https://myanimelist.net/character/1706/Martis" target="_blank" class="text-warning">Get the most populars</a></h1>
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
      <h1 class="text-dark"><a href="https://myanimelist.net/character/1706/Martis" target="_blank" class="text-warning">Get the most iconics</a></h1>
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
      <h1 class="text-danger"><a href="https://myanimelist.net/character/1706/Martis" target="_blank" class="text-warning">Get the most terifics</a></h1>
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
