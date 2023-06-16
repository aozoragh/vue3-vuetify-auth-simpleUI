<template>
  <div class="select-container">
    <v-select :items="item"></v-select>
  </div>
</template>

<script>
export default {
  name: "SelectComponent",
  props: {
    item: Array,
    defaultValue: {},
  },
  data() {
    return {
      localDefaultValue: this.defaultValue,
    };
  },
};
</script>

<style scoped>
.select-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.select-container > div {
  transform: translateY(12px);
}
</style>
