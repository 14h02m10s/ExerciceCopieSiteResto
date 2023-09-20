<script>
export default {
  name: "resto-lille",
};
</script>

<template>
  <div>
    <div class="fjord3"></div>

    <!-- SECOND PART -->
    <div class="secondpart">
      <a href="/#/reservations">
        <div class="englobeurBouton">
          <div class="boutonblanc decalagebouton1">RÉSERVER UNE TABLE</div>
        </div>
      </a>
      <h2>LAKSØN - Maison Scandinave à Rouen</h2>
      <div class="separate"></div>
      <p>Spécialités Nordiques et de poissons frais depuis 1987</p>

      <p class="paragraphe-centre">
        Hangar n°, 10 Quai Ferdinand de Lesseps, 76000 Rouen
      </p>

      <div class="englobeur-horaires">
        <div class="liste-horaire">
          <ul>
            <li class="titre-liste">Informations</li>
            <li>Tél. 02 35 00 40 21</li>
            <li>lakson.rouen@gmail.com</li>
          </ul>
        </div>
        <div class="liste-horaire">
          <ul>
            <li class="titre-liste">Horaires d’ouverture :</li>
            <li>12h - 14h Mardi au Dimanche</li>
            <li>19h - 22h Mercredi au Samedi</li>
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
            src="./assets/pages-restos/Photo-interieur-Lakson-Rouen-5.jpg.webp"
            alt="cour intérieure Lille"
          />
        </div>
        <div class="sousdivpetitesimages">
          <img
            class="petitesimages ptimg2"
            src="./assets/pages-restos/Photo-interieur-Lakson-Rouen-1.jpg.webp"
            alt="Boutique Lille"
          />
        </div>
      </div>
      <div class="partietexte">
        <h2>Le Laksøn de Rouen</h2>
        <br />
        <h3>Premier restaurant scandinave de Rouen</h3>
        <br />
        <p class="textenoir">
          Idéalement située sur les quais de Seine à Rouen au pied du pont
          Flaubert disposant d'un grand parking.
          <br />
          <br />
          Le restaurant LAKSØN (anciennement Seine & Quai) dispose d'une salle
          de 40 couverts avec de grande baies vitrées avec vue sur la Seine et
          de 80 places en terrasse le long du quai.
          <br />
          <br />
          La terrasse vous accueille pour un moment hors du temps, laissez vous
          bercer par le flux des bateaux et des péniches sur l'eau...
          <br />
          <br />
          Le restaurant propose depuis 2019 une cuisine "fait maison" avec des
          produits de saison, ainsi qu'une gamme d'assiettes nordiques avec le
          fameux saumon Gravdlax, cuisiné dans le respect de la recette
          traditionnelle.
          <br />
          <br />
          Séminaire d'entreprise, repas d'affaires... le restaurant est à votre
          disposition pour une privatisation avec une formule repas assis ou
          cocktail dinatoire.
        </p>
        <br />
        <a href="/#/reservations">
          <div class="boutonblanc coutourrouge">RÉSERVER UNE TABLE</div>
        </a>
      </div>
    </div>

    <!-- FOURTHPART -->
    <div class="fourthpart-resto-rouen">
      <div class="division30-70">
        <div class="partie30">
          <h2>Les plats préférés de nos clients.</h2>
        </div>
        <div class="partie70">
          <div class="tiers">
            <img
              class="img-tiers"
              src="./assets/pages-restos/Saumon-sauvage-thon-fume-crevettes-Borealis-Hareng-Maatjes-saumon-Gravldax-Lakson-Perles-de-Mujol.jpg"
              alt="assiette fyn"
            />
            <h3 class="titre">Assiette Île de Fyn</h3>
            <p class="texteblanc">
              Saumon sauvage, thon fumé, crevettes Boréalis, Hareng Maatjes.
            </p>
          </div>

          <div class="tiers">
            <img
              class="img-tiers"
              src="./assets/pages-restos/Pave-de-Renne-de-Laponie-legumes-de-saison.jpg"
              alt="renne"
            />
            <h3 class="titre">Pavé de Renne de Laponie</h3>
            <p class="texteblanc">
              Pavé de reine de Laponie braisé, accompagné de ses légumes de
              saison.
            </p>
          </div>

          <div class="tiers">
            <img
              class="img-tiers"
              src="./assets/pages-restos/Saumon-fume-Ecossais-saumon-marine-Gravldax-Truite-fumee-saumon-sauvage-de-la-baltique-fume....jpg"
              alt="traiteur"
            />
            <h3 class="titre">Nos produits traiteur</h3>
            <p class="texteblanc">
              Saumon mariné Gravldax, Truite fumée, saumon sauvage de la
              baltique fumé...
            </p>
          </div>
        </div>
      </div>
      <div class="englobeurBouton">
        <a href="/#/nos-produits">
          <div class="boutonrouge">VOIR LA GALERIE</div>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.fjord3 {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-image: url("./assets/pages-restos/NORVEGE--finale-.jpeg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-origin: border-box;
}

.fourthpart-resto-rouen {
  /* height: 50vh; */
  background-color: #cd2428;
  color: #faf5d0;
  padding: 3rem;
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>