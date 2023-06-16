<template>
  <div class="empty-msg-box">
    <span :class="{ small: smallSpan }">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: "EmptyMsg",
  props: {
    label: String,
    smallSpan: Boolean,
  },
};
</script>

<style scoped>
.empty-msg-box {
  /* width: 300px;
  height: 69px; */
  width: 100%;
  max-width: 265px;
  background: url("@/assets/image/signup/empty.png");
  background-size: cover;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 425px) {
    transform: scale(0.8) translateY(-20px) translateX(-33px);
  }
}
span {
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  color: #ffffff;
  transform: translateY(5px);
  @media screen and (max-width: 425px) {
    font-size: 1rem !important;
  }
}
.small {
  font-size: 14px !important;
  @media screen and (max-width: 1440px) {
    font-size: 18px !important;
  }
  @media screen and (max-width: 425px) {
    font-size: 1rem !important;
  }
}
</style>
