<template>
  <v-btn
    class="success-button"
    :class="{ 'bg-green': isGreen }"
    :disabled="disable"
    @click="onClick"
    >{{ label }}</v-btn
  >
</template>

<script>
export default {
  name: "SuccessButton",
  props: {
    bgcolor: String,
    label: String,
    onClick: {
      type: Function,
      // required: true,
    },
    disable: Boolean,
  },
  computed: {
    isGreen() {
      return this.bgcolor === "green";
    },
  },
};
</script>

<style scoped>
.success-button {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 23px;
  line-height: 28px;
  color: #fff;
  border-radius: 100px;
  background-color: #357af6;
  @media screen and (max-width: 425px) {
    transform: scale(0.8);
  }
}
.bg-green {
  background: green;
}
button {
  height: 100% !important;
}
</style>
