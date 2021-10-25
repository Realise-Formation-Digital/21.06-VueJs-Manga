<template>
  <div id="app">
    <Nav/>
      <b-container>
        <router-view></router-view>
      </b-container>
    <Foot
    id="foot"/>

  </div>
</template>

<script>

import Nav from "./components/Nav";
import Foot from "./components/Foot";

export default {
  name: 'App',
  components: {
    Foot,
    Nav
  }
}
</script>
<style>
#foot {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
