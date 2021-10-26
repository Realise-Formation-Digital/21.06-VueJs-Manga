<template>
  <div>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
      :img-height="100"
        buttonText="Get the most fun "
        img-src="https://cdn.myanimelist.net/images/manga/3/179882.jpg?s=dac8109140406ca296cf4946296b5037"
      >
      </b-carousel-slide>
      <b-carousel-slide
        buttonText="Get the most populars"
        img-src="https://cdn.myanimelist.net/images/manga/3/55539.jpg?s=b4d9e935b7152f0c9e69b34a7797fe02"
      >
      </b-carousel-slide>
      <b-carousel-slide
        buttonText="Get the most iconics"
        img-src="https://cdn.myanimelist.net/images/manga/2/181787.jpg?s=bbd3ff81b5d8e50781531c60cd68773f"
      >
      </b-carousel-slide>
      <b-carousel-slide
        buttonText="Get the most terrifics"
        img-src="https://cdn.myanimelist.net/images/manga/3/54525.jpg?s=c660994ac8ba790d9e6bb2400f7c73cd"
      >
      </b-carousel-slide>
    </b-carousel>
  </div>
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
