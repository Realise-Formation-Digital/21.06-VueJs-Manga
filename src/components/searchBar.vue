<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <b-form-input
          v-model="text"
          placeholder="Enter your name"
        ></b-form-input>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "searchBar",
  props: {
  },
  data() {
    return {
      text: null
    };
  },
  methods: {
    async handleSearch(id) {
      console.log("ecoute", id)
    }
  }
};
</script>

<style>
</style>