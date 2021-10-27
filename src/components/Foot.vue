<template>
  <div>
    <b-row>
      <b-col>
        <div>
          <b-navbar toggleable="lg" type="dark" variant="info">
            <!-- Just an image -->
            <b-navbar variant="faded" type="light">
              <b-navbar-brand href="#">
                <img src="../assets/img/logo.jpg" alt="img" width="100px"/>
              </b-navbar-brand>
            </b-navbar>
            <b-navbar-brand href="#">Manga</b-navbar-brand>


            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-button href="Contact">Contact</b-button>
            <b-collapse id="nav-collapse" is-nav>
            </b-collapse>
                        
          </b-navbar>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col> 
        <p class="copyrights" style="background-color: rgb(13, 202, 240);">
        Copyright © 2021 manga-news.com | Tous droits réservés<br />Toutes les
        illustrations sont sous © Copyright donc la propriété de leurs auteurs
        et éditeurs respectifs.
      </p>
      </b-col>

      
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Foot",
};
</script>

<style scoped>
</style>