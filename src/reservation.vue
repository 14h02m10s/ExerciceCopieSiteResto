<script>
export default {
  name: "resas",
  data() {
    return {
      date: null,
      heure: "",
      tableauHoraires: [],
      horairechoisi: "",
      // divElementLille: document.getElementById("choix-lilleON"),
      // divElementRouen: document.getElementById("choix-rouenON"),
      borderColor1: "#cd2428",
      borderColor2: "#faf5d0",
      VilleChoisie: "",
      showDiv: false,
    };
  },
  methods: {
    viewDate() {
      console.log(this.date);
      const creneau = new Date(this.date);
      console.log(creneau);
      creneau.setHours(18, 0);
      console.log(creneau);

      this.tableauHoraires.push(creneau);
      console.log(this.tableauHoraires);

      //   let i = 18;
      //   let j = 0;
      //   do {
      //     creneau.setHours(i, j);
      //     if (i === 18) {
      //       j = 30;
      //     } else if (j === 30) {
      //       i += 1;
      //       j = 0;
      //     } else if (j === 0) {
      //       j = 30;
      //     }
      //     this.tableauHoraires.push(creneau);
      //   } while (i < 24);
      //   console.log(this.tableauHoraires);
      let newcreneau = new Date();
      do {
        const last = this.tableauHoraires[this.tableauHoraires.length - 1];
        console.log(last);
        let minutes = last.getMinutes();
        console.log(minutes);
        minutes += 30;
        newcreneau = new Date(last);
        newcreneau.setMinutes(minutes);
        console.log(newcreneau);
        this.tableauHoraires.push(newcreneau);
      } while (newcreneau.getHours() !== 23);
      console.log(this.tableauHoraires);
    },

    formatTime(dateTime) {
      const hours = dateTime.getHours().toString().padStart(2, "0");
      const minutes = dateTime.getMinutes().toString().padStart(2, "0");
      return `${hours}:${minutes}`;
    },
    viewHour(horaire) {
      this.horairechoisi = this.formatTime(horaire);
      console.log(`horaire choisi : ${this.horairechoisi}`);
      //   return this.horairechoisi;
    },
    changeBorderColorLille() {
      const preciseColor1 = "#cd2428";
      const preciseColor2 = "#faf5d0";
      this.VilleChoisie = "Lille";
      // Mettre à jour la couleur de la bordure en utilisant la classe
      //const divElement = document.querySelector('.color-changing-div');
      this.borderColor1 = preciseColor1;
      this.borderColor2 = preciseColor2;
      return this.VilleChoisie;
    },
    changeBorderColorRouen() {
      const preciseColor1 = "#faf5d0";
      const preciseColor2 = "#cd2428";
      this.VilleChoisie = "Rouen";
      // Mettre à jour la couleur de la bordure en utilisant la classe
      //const divElement = document.querySelector('.color-changing-div');
      this.borderColor1 = preciseColor1;
      this.borderColor2 = preciseColor2;
      return this.VilleChoisie;
    },
    toggleDiv() {
      console.log(this.showDiv);
      this.showDiv = true; // Inverse l'état d'affichage
      console.log(this.showDiv);
    },
  },
};
</script>

<template>
  <div>
    <div class="margin-top-5 centrer">
      <p>Dans quel restaurant souhaitez vous réserver ?</p>
    </div>
    <div class="choix-resto">
      <div
        id="choix-lilleON"
        :style="{ borderBottomColor: borderColor1 }"
        v-on:click="changeBorderColorLille"
      >
        <p>Lille</p>
      </div>
      <div
        id="choix-rouenON"
        :style="{ borderBottomColor: borderColor2 }"
        v-on:click="changeBorderColorRouen"
      >
        <p>Rouen</p>
      </div>
    </div>
    <div class="resa">
      <div>
        <select class="btn-horaire" v-model="selected">
          <!-- <option disabled value=""></option> -->
          <option>1 couvert</option>
          <option>2 couverts</option>
          <option>3 couverts</option>
          <option>4 couverts</option>
          <option>5 couverts</option>
          <option>6 couverts</option>
        </select>
      </div>
      <div>
        <input type="date" v-model="date" class="btn-horaire" />
        <div @click="viewDate" class="btn-horaire">Choisir un horaire</div>
        <!-- <p>la date de votre réservation : {{ date }}</p> -->
      </div>
      <div class="englobeur-btn-horaire">
        <!-- <input type="time" v-model="heure" /> -->
        <!-- <div class="btn-horaire" v-bind:key="item in tableauHoraires"> -->
        <div class="btn-horaire" v-for="item in tableauHoraires">
          <span @click="viewHour(item)">{{ formatTime(item) }}</span>
        </div>
      </div>
      <div class="btn-horaire" @click="toggleDiv">Valider</div>
      <div class="resultat-resa centrer margin-top-1" v-if="showDiv">
        <p>Nombre de couverts : {{ selected }}</p>
        <p>
          Vous venez bien de reserver une table à
          {{ this.VilleChoisie }} le {{ date }} à {{ horairechoisi }}.
        </p>
      </div>
      <div v-else></div>
    </div>
  </div>
</template>

<style>
.margin-top-5 {
  margin-top: 5rem;
}
.margin-top-1 {
  margin-top: 1rem;
}
.choix-resto {
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
  margin-top: 1rem;
}
#choix-lilleON {
  border-top: #faf5d0 1px solid;
  border-left: #faf5d0 1px solid;
  border-bottom: #faf5d0 1px solid;
  padding: 1rem;
  cursor: pointer;
  transition: border-color 0.2s ease;
}

#choix-rouenON {
  border-top: #faf5d0 1px solid;
  border-left: #faf5d0 1px solid;
  border-right: #faf5d0 1px solid;
  border-bottom: #faf5d0 1px solid;
  padding: 1rem;
  cursor: pointer;
}

/* #choix-rouen:active {
  border-bottom: #cd2428 1px solid;
} */
.resa {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: #faf5d0 1px solid;
  padding: 1rem;
  position: absolute;
  z-index: 0;
  width: 100%;
  margin: -1px 0 0 0;
}
.btn-horaire {
  background-color: #faf5d0;
  width: fit-content;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin: 0.5rem;
}
.btn-horaire:hover {
  background-color: #d3ce9d;
  cursor: pointer;
}
.englobeur-btn-horaire {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.centrer {
  text-align: center;
}
/* .resultat-resa {
  display: none;
} */
</style>