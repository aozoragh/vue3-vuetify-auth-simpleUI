<template>
  <div class="signup-step-track">
    <span :class="{ 'signup-step-track-active': active === 1 }">STEP 1</span>
    <span :class="{ 'signup-step-track-active': active === 2 }">STEP 2</span>
    <span :class="{ 'signup-step-track-active': active === 3 }">STEP 3</span>
    <span :class="{ 'signup-step-track-active': active === 4 }">STEP 4</span>
    <span :class="{ 'signup-step-track-active': active === 5 }">STEP 5</span>
    <!-- <router-link to="/signup" :class="{ 'signup-step-track-active': active === 1 }"
      >STEP 1</router-link
    >
    <router-link to="/signup-2" :class="{ 'signup-step-track-active': active === 2 }"
      >STEP 2</router-link
    >
    <router-link to="/signup-3" :class="{ 'signup-step-track-active': active === 3 }"
      >STEP 3</router-link
    >
    <router-link to="/signup-4" :class="{ 'signup-step-track-active': active === 4 }"
      >STEP 4</router-link
    >
    <router-link to="/signup-5" :class="{ 'signup-step-track-active': active === 5 }"
      >STEP 5</router-link
    > -->
  </div>
</template>

<script>
export default {
  name: "SignupStepTrack",
  props: {
    active: Number,
  },
  computed: {},
};
</script>

<style scoped>
.signup-step-track {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  padding: 20px 0;
  border-bottom: 1px solid #e7e7e7;
  width: 100%;
  /* @media screen and (max-width: 990px) {
    position: fixed;
    top: 100px;
    left: 0;
    border: 1px solid red;
  } */
  @media screen and (max-width: 500px) {
    gap: 10px;
  }
  @media screen and (max-width: 350px) {
    gap: 5px;
  }
}
.signup-step-track > span {
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #d9d9d9;
  @media screen and (max-width: 375px) {
    font-size: 14px;
  }
}
/* .signup-step-track > a:hover {
  cursor: pointer;
  color: #73a1db !important;
} */
.signup-step-track-active {
  color: #73a1db !important;
}
</style>
