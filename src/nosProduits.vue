<template>
  <div>
    <div class="titre-nos-produits">
      <div class="moitie">
        <h2>LAKSØN - Maison Scandinave à Lille & Rouen</h2>
        <p>Gastronomie suédoise, norvégienne et danoise​</p>
      </div>
      <div class="moitie"></div>
    </div>

    <div class="album">
      <div class="colonne">
        <!-- <a href="./components/nosProduitsImage1"> -->
        <div class="photo animation one">
          <!-- <image-modal :image-source="imageSource"></image-modal> -->
          <img
            src="./assets/page-nosProduits/1-Traiteur-Dood-min-scaled.jpg"
            alt="Traiteur-Dood-min-scaled"
          />
          <div class="survol">
            <p>
              Saumon fumé écossais, saumon mariné gravdlax, truite fumée, saumon
              sauvage de la baltique fumé
            </p>
          </div>
        </div>
        <!-- </a> -->
        <div class="photo animation two">
          <img
            src="./assets/page-nosProduits/2-Eise-04-decembre-2018IMG_9542-min-scaled.jpg"
            alt="2-Eise-04-decembre-2018IMG_9542-min-scaled"
          />
          <div class="survol">
            <p>Pavé de renne de Laponie, légumes de saison</p>
          </div>
        </div>
        <div class="photo animation three">
          <img
            src="./assets/page-nosProduits/3-Eise-04-decembre-2018IMG_9330-min-scaled.jpg"
            alt="3-Eise-04-decembre-2018IMG_9330-min-scaled"
          />
          <div class="survol">
            <p>Tranche de saumon fumé écossais bio</p>
          </div>
        </div>
      </div>

      <div class="colonne">
        <div class="photo animation four">
          <img
            src="./assets/page-nosProduits/4-Saumon-Gravlax-Dood-min-scaled.jpg"
            alt="4-Saumon-Gravlax-Dood-min-scaled"
          />
          <div class="survol">
            <p>Saumon gravdlax Lakson</p>
          </div>
        </div>
        <div class="photo animation five">
          <img
            src="./assets/page-nosProduits/5-Eise-04-decembre-2018IMG_9558-min-scaled.jpg"
            alt="5-Eise-04-decembre-2018IMG_9558-min-scaled"
          />
          <div class="survol">
            <p>Macaron à la mangue, sorbet aux airelles</p>
          </div>
        </div>
        <div class="photo animation six">
          <img
            src="./assets/page-nosProduits/6-Eise-04-decembre-2018IMG_9454-min-scaled.jpg"
            alt="6-Eise-04-decembre-2018IMG_9454-min-scaled"
          />
          <div class="survol">
            <p>Filet d'anguille fumée, cœur de saumon et maquereau fumé</p>
          </div>
        </div>
      </div>

      <div class="colonne">
        <div class="photo animation seven">
          <img
            src="./assets/page-nosProduits/7-Hareng-Dood-min-scaled.jpg"
            alt="7-Hareng-Dood-min-scaled"
          />
          <div class="survol">
            <p>
              Hareng Bismark, harang mariné sauce moutarde, hareng mariné sauce
              curry, gambas Kashmir...
            </p>
          </div>
        </div>
        <div class="photo animation height">
          <img
            src="./assets/page-nosProduits/8-Eise-04-decembre-2018IMG_9508-min-scaled.jpg"
            alt="8-Eise-04-decembre-2018IMG_9508-min-scaled"
          />
          <div class="survol">
            <p>
              Saumon sauvage, thon fumé, crevettes Boréalis, hareng maatjes,
              saumon gravdlax Lakson, perles de Mujol
            </p>
          </div>
        </div>
        <div class="photo animation nine">
          <img
            src="./assets/page-nosProduits/9-Eise-04-decembre-2018IMG_9328-min-scaled.jpg"
            alt="9-Eise-04-decembre-2018IMG_9328-min-scaled"
          />
          <div class="survol">
            <p>Saumon fumé écossais tranché</p>
          </div>
        </div>
      </div>
      <div class="colonne">
        <div class="photo animation ten">
          <img
            src="./assets/page-nosProduits/10-Eise-04-decembre-2018IMG_9610-min-scaled.jpg"
            alt="10-Eise-04-decembre-2018IMG_9610-min-scaled"
          />
          <div class="survol">
            <p>
              Maquereau fumé, thon fumé, caviar maison Prunier, blinis maison
            </p>
          </div>
        </div>
        <div class="photo animation eleven">
          <img
            src="./assets/page-nosProduits/11-Eise-04-decembre-2018IMG_9486-min-scaled.jpg"
            alt="11-Eise-04-decembre-2018IMG_9486-min-scaled"
          />
          <div class="survol">
            <p>Foie gras mi-cuit, chutney d'airelles, compotée de pommes</p>
          </div>
        </div>
        <div class="photo animation"></div>
      </div>
    </div>

    <p class="paragraphe-centre">
      “La gastronomie est l'art d'utiliser la nourriture pour créer le bonheur.”
      <br />Charles Monselet
    </p>
  </div>
</template>

<script>
// import NosProduitsImage1 from "./components/nosProduitsImage1.vue";
import ImageModal from "./components/ImageModal.vue";
export default {
  name: "nos-produits",
  components: {
    // "image-modal": NosProduitsImage1,
    "image-modal": ImageModal,
  },
  data() {
    return {
      imageSource:
        "/src/assets/page-nosProduits/1-Traiteur-Dood-min-scaled.jpg",
      // imageSource: "../assets/page-nosProduits/1-Traiteur-Dood-min-scaled.jpg",
    };
  },
  // methods: {
  //   showImageModal() {
  //     this.showModal = true;
  //   },
  //   closeImageModal() {
  //     this.showModal = false;
  //   },
  // },
};
</script>

<style>
.titre-nos-produits {
  /* height: 16vh; */
  background-color: #cd2428;
  color: #faf5d0;
  padding: 3rem;
  /* position: relative; */
  display: flex;
  flex-direction: row;
}
.moitie {
  width: 50%;
}
.album {
  display: flex;
  flex-direction: row;
  /* flex-wrap: nowrap; */
  /* flex: 1; */
  width: 100%;
  /* column-gap: 1em; */
  /* box-sizing: border-box; */
  justify-content: flex-start;
}
.colonne {
  display: flex;
  flex-direction: column;
  padding: 0.6rem;
  width: 25%;
}
.photo {
  /* padding: 0.5rem 0; */
  cursor: pointer;
  position: relative;
  margin: 0.5rem 0;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.photo img {
  width: 100%;
  height: 100%;
}
.survol p {
  font-family: "Cormorant Garamond", serif;
  padding: 1.1rem;
  text-align: center;
  color: white;
}
.photo .survol {
  /* padding: 0.5rem 0; */
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.3s ease;
  background-color: rgba(0, 0, 0, 0.5);
}
.photo:hover .survol {
  opacity: 1;
  animation-name: myAnim2;
  animation-timing-function: ease;
  animation-duration: 1.5s;
}
.animation {
  animation-name: myAnim;
  animation-timing-function: ease;
  animation-duration: 1.5s;
}
@keyframes myAnim {
  from {
    opacity: 0.8;
    transform: scale(0.2);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes myAnim2 {
  0% {
    opacity: 0;
    transform: rotateX(100deg);
    transform-origin: bottom;
  }

  100% {
    opacity: 1;
    transform: rotateX(0deg);
    transform-origin: bottom;
  }
}
/* @keyframes expandWidth {
  from {
    height: 0%;
  }

  to {
    height: 100%;
  }
} */
/* .album {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  width: 100%;
  flex-basis: auto;
  position: relative; 
}

.photo img {
  width: 100%;
  object-fit: fill;
} */

/* .one {
  grid-column: 1 / 2;
  grid-row: 1;
}
.two {
  grid-column: 1 / 2;
  grid-row: 2;
}
.three {
  grid-column: 1 / 2;
  grid-row: 3;
}
.four {
  grid-column: 2 / 3;
  grid-row: 1;
}
.five {
  grid-column: 2 / 3;
  grid-row: 2;
}
.six {
  grid-column: 2 / 3;
  grid-row: 3;
}
.seven {
  grid-column: 3/4;
  grid-row: 1;
}
.height {
  grid-column: 3/4;
  grid-row: 2;
}
.nine {
  grid-column: 3/4;
  grid-row: 3;
}
.ten {
  grid-column: 4/5;
  grid-row: 1;
}
.eleven {
  grid-column: 4/5;
  grid-row: 2;
} */
</style>