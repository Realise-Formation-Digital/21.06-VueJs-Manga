<template>
  <div>
    <!--Nav/!-->
    <b-navbar
      toggleable="sm"
      type="light"
      style="background-color: rgb(13, 202, 240)">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <b-navbar-brand style="margin-left: 80px"
        ><a href="/"><img src="../assets/img/logo.jpg" width="100" /></a
      ></b-navbar-brand>
      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-text
            ><b-btn to="/" variant="outline-primary">Home</b-btn></b-nav-text>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-text
            ><b-btn to="/manga" variant="outline-primary"
              >Mangas</b-btn
            ></b-nav-text          >
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-text
            ><b-btn to="/aboutus" variant="outline-primary"
              >About Us</b-btn
            ></b-nav-text>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-text>
            <b-btn to="/contact" variant="outline-primary"
              >Contact</b-btn
            ></b-nav-text>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style >
</style>
