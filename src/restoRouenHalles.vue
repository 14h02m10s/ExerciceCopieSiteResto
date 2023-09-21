<script>
export default {
  name: "resto-lille",
};
</script>

<template>
  <div>
    <div class="fjord4"></div>

    <!-- SECOND PART -->
    <div class="secondpart">
      <h2>LAKSØN - Maison Scandinave à Rouen (Halles Agrivin)</h2>
      <div class="separate"></div>
      <p>Spécialités Nordiques et de poissons frais depuis 1987</p>

      <div class="englobeurBouton">
        <a
          href="https://lakson.fr/wp-content/uploads/2023/02/Carte-Lakson-Lille-site-0223.pdf"
          target="_blank"
        >
          <div class="boutonrouge-restolille">VOIR LE CATALOGUE TRAITEUR</div>
        </a>
      </div>

      <p class="paragraphe-centre">1 Bd Ferdinand de Lesseps, 76000 Rouen</p>

      <div class="englobeur-horaires">
        <div class="liste-horaire">
          <ul>
            <li class="titre-liste">Informations</li>
            <li>Tél. 06 59 87 56 83­</li>
            <li>lakson.agrivin@gmail.com</li>
          </ul>
        </div>
        <div class="liste-horaire">
          <ul>
            <li class="titre-liste">Horaires d’ouverture :</li>
            <li>11h - 23h du Lundi au Samedi</li>
            <li>11h - 16h le Dimanche</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- THIRDPART -->
    <div class="thirdpart">
      <div class="divpetitesimages">
        <div class="sousdivpetitesimages">
          <img
            class="petitesimages ptimg1"
            src="./assets/pages-restos/Vu-stand-et-planche-Agrivin.jpeg.webp"
            alt="cour intérieure Lille"
          />
        </div>
        <div class="sousdivpetitesimages">
          <img
            class="petitesimages ptimg2"
            src="./assets/pages-restos/Planche-tartine-Lakson-Agrivin.jpeg.webp"
            alt="Boutique Lille"
          />
        </div>
      </div>
      <div class="partietexte">
        <h2>Le Laksøn de Rouen (Halles Agrivin)</h2>
        <br />
        <h3>Premier restaurant scandinave de Rouen</h3>
        <br />
        <p class="textenoir">
          Situé dans les Halles Agrivin sur le parvis du Dock 76, le stand
          LAKSØN vous propose un assortiment de poissons fumés ou marinés à
          emporter chez vous ou à déguster sur place.
          <br />
          <br />
          Saumon mariné, Harengs marinés, Flétan fumé... venez découvrir les
          spécialités scandinaves qui raviront votre palais.
        </p>
        <br />
        <a href="#/reservations">
          <div class="boutonblanc coutourrouge">RÉSERVER UNE TABLE</div>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.fjord4 {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-image: url("./assets/pages-restos/plus-beaux-fjords-de-norvege.webp");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-origin: border-box;
}

.coutourrouge {
  border: 1px solid #cd2428;
}
</style>