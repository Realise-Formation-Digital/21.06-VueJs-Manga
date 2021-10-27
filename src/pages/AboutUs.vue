<template>
      <b-container>
            <h1><p class="title text-center">ABOUT US</p></h1>
  <div>

    <b-img
      src="https://www.giardiniblog.it/wp-content/uploads/2020/05/Migliori-siti-per-leggere-manga.jpg"
      fluid
      alt="Responsive image"
      width="2000px"
    ></b-img>
    <p>
      L'enterprise est crée en juin 2021 par Marco, Frederick, Julien. Manga est
      un site créé par les fans pour les fans. Bien que des millions
      d’utilisateurs utilisent le site chaque mois, notre personnel se compose
      uniquement d’une petite équipe de bénévoles, y compris le fondateur, les
      développeurs et les modérateurs de contenu. Si vous êtes intéressé à
      contribuer, vérifiez comment soutenir le site. Pour vous aider avec des
      questions ou des suggestions sur le contenu du site (comme les anime,
      manga ou personnes), vous pouvez contacter le bon ensemble de modérateurs.
    </p>
    <h2 class="ml2">ÈQUIPE</h2>
    <!--add card team-->
    <div>
      <b-card-group>
        <b-card
          id="name"
          title="SARA POLESE"
          img-src="https://media-exp1.licdn.com/dms/image/C5603AQG7RmSQV6zfFg/profile-displayphoto-shrink_200_200/0/1626334019224?e=1640822400&v=beta&t=azpTeX1mpEy7MTsYSaBrBxR12gaKcN82fpeJWJZPFl8"
          img-alt="Image"
          img-top
        >
          <b-card-text id="job">
            Scrum Master
            <br />Web Devèloppeuse junior
          </b-card-text>
        </b-card>

        <b-card
          id="name"
          title="KHADY DIANKO"
          img-src="https://media-exp1.licdn.com/dms/image/C4D03AQFWEghYu0IZJA/profile-displayphoto-shrink_800_800/0/1517401072068?e=1640822400&v=beta&t=BZo2pmnOaDkqwbmdjGnUwgbY3mj_6dcYure_9kpZxyw"
          img-alt="Image"
          img-top
        >
          <b-card-text id="job"> <br />Web Devèloppeuse junior </b-card-text>
        </b-card>

        <b-card
          id="name"
          title="EDIN IBRAHIMOVIC"
          img-src="https://media-exp1.licdn.com/dms/image/C4D03AQGNkLl8KxsTvA/profile-displayphoto-shrink_200_200/0/1627053755082?e=1640822400&v=beta&t=jtpgjgmavYvNdNCSlJz7Kv0XsZyrb8lUvWcCFhCrC28"
          img-alt="Image"
          img-top
        >
          <b-card-text id="job"> <br />Web Devèloppeur Junior </b-card-text>
        </b-card>
      </b-card-group>
    </div>
  </div>
        </b-container>
</template>

<script>
export default {
  name: "Aboutus",
            created () {
            document.title = "Manga | About us";
        },
}
</script>

<style scoped>

h2 {
  color: red;
  text-align: center;
  margin-block: 55px;
  text-align-last: center;
}
p {
  margin-top: 40px;
  text-align: center;
}
#name {
  color: blue;
  margin-right: 30px;
  margin-left: 30px;
}
#equipe {
  color: blue;
  margin-right: 80px;
  margin-left: 80px;
}
#job {
  color: black;
  text-align: center;
}
.card-title {
  margin-bottom: -1.5rem;
}
h4,
.h4 {
  text-align: center;
  font-size: 1.5rem;
}
.title {
  padding-bottom: 40px;

}
</style>