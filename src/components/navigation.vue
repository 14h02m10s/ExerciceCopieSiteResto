<script>
export default {
  name: "NavB",
};
</script>

<template>
  <div class="navbar">
    <div class="menulogo">
      <a href="#/"
        ><img
          class="logo"
          alt="Vue logo"
          src="../assets/navbar/Lakson-logo.png"
      /></a>
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div class="menu"><a href="#/">Accueil</a></div>
    <div class="menu">
      <a href="#/contenu2"
        >Nos restaurants &nbsp;<i class="fleche"></i>&nbsp;</a
      >
      <div class="liste">
        <ul>
          <li>Lakson - Lille</li>
          <li>Lakson - Rouen</li>
          <li>Lakson - Rouen - Halles Agrivin</li>
        </ul>
      </div>
    </div>
    <div class="menu"><a href="#/contenu3">Nos produits</a></div>
    <div class="menu bout"><a href="#/contenu4">Réservations</a></div>
  </div>
</template>

<style>
.navbar {
  background-color: #cd2428;
  border: 1px solid #faf5d0;
  height: 3.5rem;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr;
  /* margin: 1rem; */
  color: #faf5d0;
  font-size: 1.2rem;
  font-family: "Cormorant Garamond", serif;
  font-weight: 100;
}

.logo {
  max-height: 1.2rem;
  max-width: 80%;
  padding: 0px 0px;
}

.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.bout {
  padding-right: 1.5rem;
}
.menulogo {
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 1rem;
}

a {
  text-decoration: none;
  color: inherit;
}
.menu:hover::before {
  content: "";
  position: absolute;
  background-color: #faf5d0;
  height: 1px;
  width: 100%;
  bottom: 0.5rem;
}
.fleche::after {
  content: "▾";
  position: absolute;
  font-style: normal;
}
.liste {
  display: none;
}
.liste:hover {
  display: block;
}
</style>