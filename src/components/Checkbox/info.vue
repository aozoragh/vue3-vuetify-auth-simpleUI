<template>
  <div class="checkbox-container">
    <v-checkbox color="info" v-model="localModel"></v-checkbox>
  </div>
</template>

<script>
export default {
  name: "CheckboxInfo",
  props: {
    modelValue: Boolean,
  },
  data() {
    return {
      localModel: this.modelValue,
    };
  },
  computed: {},
};
</script>

<style scoped>
.checkbox-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23px;
  height: 23px;
}
.checkbox-container > div {
  display: flex;
  justify-content: center;
  align-items: center;
  /* transform: translateY(-16px); */
}
</style>
