<template>
  <div>
    Contact

    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>
      <br />

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
      <br />
      <b-form-group
        id="input-group-2"
        label="Your Message:"
        label-for="input-2"
      >
        <b-form-textarea
          id="input-1"
          v-model="form.message"
          type="message"
          rows="3"
          max-rows="6"
          placeholder="Enter your message"
          required
        ></b-form-textarea>
      </b-form-group>
      <br />

      <b-button type="submit" variant="primary">SEND</b-button>
      <!--b-button type="reset" variant="danger">Reset</!--b-button!-->
    </b-form>
    <!--
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
!-->
    <br />
    <div id="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.9127650590526!2d6.200637315876729!3d46.19229459258493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21a409b191840de1%3A0x55206748a6794bc4!2sCr%C3%A9ation%20de%20site%20internet%20%C3%A0%20Gen%C3%A8ve%20-%20Creasite.ch!5e0!3m2!1sfr!2sch!4v1634803456049!5m2!1sfr!2sch"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  created () {
     document.title = "Manga | Contact";
  },
  data() {
    return {
      form: {
        email: "",
        name: "",
        message: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.message = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style scoped>
</style>