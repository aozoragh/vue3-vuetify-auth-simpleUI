<template>
  <div class="app">
    <NavbarComponent />
    <div class="body-container">
      <router-view />
    </div>
  </div>
</template>

<script>
// import LandingComponent from './components/Landing.vue'
import NavbarComponent from "./views/Navbar.vue";

export default {
  name: "App",
  components: {
    NavbarComponent,
  },
  data() {},
  computed: {},
  mounted() {
    const ls = localStorage.getItem("c_route");
    this.$store.dispatch("setCurrentRoute", ls);
  },
};
</script>

<style scoped>
.app {
  width: 100vw;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.body-container {
  padding-top: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
