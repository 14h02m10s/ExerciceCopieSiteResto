<template>
  <div>
    <img :src="imageSource" alt="Image" @click="showImageModal" />
    <div v-if="showModal" @click="closeImageModal" class="image-modal">
      <img :src="imageSource" alt="Image en grand" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      imageSource: "../assets/page-nosProduits/1-Traiteur-Dood-min-scaled.jpg",
    };
  },
  methods: {
    showImageModal() {
      this.showModal = true;
    },
    closeImageModal() {
      this.showModal = false;
    },
  },
};
</script>

<!-- <template>
  <div class="contenant-agrandissement">
    <img
      src="assets/page-nosProduits/1-Traiteur-Dood-min-scaled.jpg"
      class="image"
      alt="Traiteur-Dood-min-scaled"
    />
    <img
      @click="$emit('close')"
      class="croix"
      src="../assets/noun-cross-2310545.jpg"
      alt="fermer"
    />
  </div>
</template>

<script>
export default {
  name: "nos-produits-img1",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.contenant-agrandissement {
  background-color: white;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
.image {
  margin: 4rem;
}
.croix {
  position: absolute;
  top: 0;
  margin-top: 2rem;
  cursor: pointer;
}
</style> -->