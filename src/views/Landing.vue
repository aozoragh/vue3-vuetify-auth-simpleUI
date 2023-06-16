<template>
  <div class="slide-container">
    <v-carousel cycle height="800" hide-delimiter-background show-arrows="hover">
      <v-carousel-item v-for="(slide, i) in slideImgs" :key="i">
        <div class="carousel-container">
          <img :src="require('@/assets/slides/' + slide + '.jpg')" alt="carousel image" />
          <!-- <img src='../assets/slides/1.jpg' alt="carousel image"> -->
          <!-- {{ slide }} Slide -->
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "LandingComponent",
  data() {
    return {
      slideImgs: ["1", "2", "3", "4", "5"],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.carousel-container > img {
  object-fit: contain;
}

.slide-container {
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
}
.slide-container button {
  height: auto !important;
}
</style>
