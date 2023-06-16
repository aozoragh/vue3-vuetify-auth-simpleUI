<template>
  <div @click="onClick">{{ label }}</div>
</template>

<script>
export default {
  name: "CancelButton",
  props: {
    label: String,
    onClick: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped>
button {
  height: 100% !important;
}
</style>
