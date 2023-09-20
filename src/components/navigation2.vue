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

    <div>
      <ul class="mega-menu-main">
        <li class="lvl-0">
          <a class="lvl-0-mot" href="#/">Accueil</a>
        </li>
        <li class="lvl-0">
          <a href="#/">Restaurants &nbsp; <span class="fleche"></span></a>
          <ul class="mega-menu-tab">
            <li class="lvl-1">
              <ul class="lvl-2">
                <li><a href="#/RestaurantLille">Lakson - Lille</a></li>
                <li><a href="#/RestaurantRouen">Lakson - Rouen</a></li>
                <li>
                  <a href="#/RestaurantRouenHalles"
                    >Lakson - Rouen - Halles Agrivin</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="lvl-0">
          <a href="#/nos-produits">Nos produits</a>
        </li>
        <li class="lvl-0 bout">
          <a href="#/reservations">Réservations</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.navbar {
  background-color: #cd2428;
  border: 1px solid #faf5d0;
  height: 3.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
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

* {
  box-sizing: border-box;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}

.mega-menu-main {
  display: flex;
  /* justify-items: end; */
  justify-content: end;
  align-items: center;
  position: relative;
  /* background: rgba(33, 105, 236, 0.2); */
  height: 3.5rem;
}

.lvl-0 > a {
  padding: 2rem 2rem;
}
/* .lvl-0:hover > ul {
  display: flex;
} */
.lvl-0 {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.lvl-0:hover > .mega-menu-tab {
  /*2*/
  display: flex;
}
.mega-menu-tab {
  display: none;
  position: absolute;
  /* top: 2.4rem; */
  top: 4rem;
  /* bottom: 1rem; */
  left: 0;
  min-width: 18rem;
  background: #faf5d0;
  flex: 1 1 auto;
  z-index: 1;
}
.lvl-1 {
  flex: 1;
}
.lvl-2 {
  /* padding: 0rem 1rem; */
  color: #cd2428;
}
.lvl-2 li {
  padding: 0.5rem;
  flex: 1 1 auto;
  padding-left: 1rem;
}
.lvl-2 li:hover {
  color: #faf5d0;
  background-color: #cd2428;
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
.lvl-0:hover::after {
  content: "";
  position: absolute;
  background-color: #faf5d0;
  height: 1px;
  width: 100%;
  bottom: 1.5rem;
  /* display: block; */
}
.fleche::after {
  content: "▾";
  position: absolute;
  /* font-style: normal; */
  width: 10px;
}
.bout {
  padding-right: 1.5rem;
}
</style>