<template>
  <b-container>
    <h1><p class="title text-center">CONTACT</p></h1>
    <b-row>
      <b-col lg="8" md="8" sm="12">
        <!-- Formulaire -->
        <form @submit.prevent="submitForm">
          <div>
            <label for="name">Name:</label><br />
            <input id="name" type="text" v-model="name" required />
          </div>
          <div>
            <label for="email">Email:</label><br />
            <input id="email" type="email" v-model="email" required />
          </div>
          <div>
            <label for="message">Message:</label><br />
            <textarea id="message" v-model="message" required></textarea>
          </div>
          <b-button
            squared
            variant="primary"
            :class="[name ? activeClass : '']"
            type="submit"
            >Send</b-button
          >
          <div>
            <h5>
              <p v-if="success">{{ success }}</p>
            </h5>

            <!--pre>{{ response }}</!--pre !-->
          </div>
        </form>

        <!-- Maps -->
        <div id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.9127650590526!2d6.200637315876729!3d46.19229459258493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21a409b191840de1%3A0x55206748a6794bc4!2sCr%C3%A9ation%20de%20site%20internet%20%C3%A0%20Gen%C3%A8ve%20-%20Creasite.ch!5e0!3m2!1sfr!2sch!4v1634803456049!5m2!1sfr!2sch"
            width="100%"
            height="480"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </b-col>
      <b-col lg="4" md="4" sm="12">
 
        <h2>Horaire:</h2>
        <b>Lundi</b>: 09:00–17:00<br />
        <b>Mardi</b>: 09:00–17:00<br />
        <b>Mercredi</b>: 09:00–17:00<br />
        <b>Jeudi</b>: 09:00–17:00<br />
        <b>Vendredi</b>: 09:00–17:00<br />
        <b>Samedi</b>: Fermé<br />
        <b>Dimanche</b>: Fermé

        <div class="text-nowrap bd-highlight" style="width: 8rem">
          <br />
          <b>Siège social :</b><br />
          8 rue Viguet, 1227 Les Acacias<br />
          Téléphone : <a href="">022 308 60 10</a><br />
          <br />
          <b>Directrice de la rédaction :</b><br />
          khady Dianko<br />

          <b>Hébergeur: REALISE</b><br />
          Siège social : 8 rue Viguet, <br />1227 Les Acacias - Genève<br />
          Siret: 424 761 419 00045<br />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
/* Import axios */
import axios from "axios";

export default {
  name: "Contact",
  /* Our title page */
  created() {
    document.title = "Manga | Contact";
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      response: "",
      success: "",
      activeClass: "active",
    };
  },
  methods: {
    /* WRITE DATA TO JSONSERVER */
    submitForm() {
      axios
        .post("http://localhost:3000/mails", {
          name: this.name,
          email: this.email,
          message: this.message,
        })
        .then((response) => {
          // console.log(response);
          // this.response = response.data
          this.success = "Message saved to JSON SERVER (db.json) successfully";
          this.response = JSON.stringify(response, null, 2);
        })
        .catch((error) => {
          this.response = "Error: " + error.response.status;
        });
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped>
input,
textarea {
  width: 100%;
}
.title {
  padding-top: 40px;
  padding-bottom: 40px;

}
</style>