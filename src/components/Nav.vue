<template>
  <div>Nav
     <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

    <b-navbar-brand> Logo </b-navbar-brand>

    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-text><b-btn to="/" variant="outline-primary">Home</b-btn></b-nav-text>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-text><b-btn to="/beers" variant="outline-primary">Mangas</b-btn></b-nav-text>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-text><b-btn to="/beers" variant="outline-primary">À propos</b-btn></b-nav-text>
      </b-navbar-nav>
      <b-navbar-nav>
        <b-nav-text><b-btn to="/beers" variant="outline-primary">Contact</b-btn></b-nav-text>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style scoped>

</style>