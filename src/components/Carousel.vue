<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
    <b-button href="#" variant="primary" @click="selectActumanga()">{{buttonText}}</b-button>
      <!-- Text slides with image -->
      <b-carousel-slide
        buttonText="."
        img-src=""
      >
      </b-carousel-slide>
      <b-carousel-slide
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
      <p class="mt-4">Slides #: [{{ slide }}] Sliding: {{ sliding }}</p>
    </b-carousel>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: "carousel",
  props: {
    buttonText: {
      type: String,
      default: "",
      required: true,
    },

    img: {
      type: String,
      default: "",
      required: true,
    },
  },

  data() {
    return {
      slide: "",
      sliding: null,
    };
  },

  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    selectActumanga(){
      console.log("Clicked")
      this.$emit('selectedaActumanga', this.id)
    }
  },
};
</script>
