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
  props: {
    imageSource: "",
  },
  data() {
    return {
      showModal: false,
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

<style>
.image-modal {
  position: absolute;
  z-index: 1;
}
</style>