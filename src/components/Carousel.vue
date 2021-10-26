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
       <h1><a href="https://myanimelist.net/character/1706/Martis" class="text-warning">Get the most psychidelics</a></h1>
      <template #img>
        <img
        id=""
          class="d-block w-100"
          width="1000"
          height="480"
          src="https://cdn.myanimelist.net/images/manga/3/179882.jpg?s=dac8109140406ca296cf4946296b5037"
          alt="image slot"
       >
      </template>
    </b-carousel-slide>

     <b-carousel-slide>
        <h1 class="text-success">Get the most populars</h1>
      <template #img>
        <img
          class="d-block w-100"
          height="480"
          src="https://cdn.myanimelist.net/images/manga/3/55539.jpg?s=b4d9e935b7152f0c9e69b34a7797fe02"
          alt="image slot"
       >
         </template>
    </b-carousel-slide>
    
    <b-carousel-slide>
      <h1 class="text-dark">Get the most iconics</h1>
      <template #img>
        <img
          class="d-block w-100"
          height="480"
          src="https://cdn.myanimelist.net/images/manga/2/181787.jpg?s=bbd3ff81b5d8e50781531c60cd68773f"
          alt="image slot"
       >
      </template>
    </b-carousel-slide>

     <b-carousel-slide>
      <h1 class="text-danger">Get the most terifics</h1>
      <template #img>
        <img
          class="d-block w-100"
          height="480"
          src="https://cdn.myanimelist.net/images/manga/3/54525.jpg?s=c660994ac8ba790d9e6bb2400f7c73cd"
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
