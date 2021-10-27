<template>
  <div style="background-color: rgb(13, 202, 240)">
            <!-- row logo, social et bouton contact -->
    <b-row >
              <!-- col image -->
      <b-col>

        <img src="../assets/img/logo.jpg" alt="img" id="logo"  />
      </b-col>
                  <!-- col social -->
       <b-col id="social">
          <img src="../assets/img/facebook.png" alt="img" width="55px" />
          <img src="../assets/img/instagram.png" alt="img" width="50px" />
          <img src="../assets/img/linkedin.png" alt="img" width="45px" />
      </b-col>
       
      <b-col>
        <b-button href="Contact" id="contact">Contact</b-button>
      </b-col>
    </b-row>

 
            <!-- Row copyright -->
    <b-row>
      <b-col>
        <p class="copyrights" id="copy">
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
#contact {
  margin-top: 130px;
}
#logo{
  margin-top: 60px;
  width: 100px;
}
#copy{
margin-top: 30px;
}
#social{
  margin-top: 130px;
}
</style>