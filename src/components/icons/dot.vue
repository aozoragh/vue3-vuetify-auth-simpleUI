<template>
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 13.75C12.0711 13.75 13.75 12.0711 13.75 10C13.75 7.92892 12.0711 6.25 10 6.25C7.92892 6.25 6.25 7.92892 6.25 10C6.25 12.0711 7.92892 13.75 10 13.75Z"
      :fill="color"
      :stroke="color"
      stroke-width="4"
    />
  </svg>
</template>

<script>
export default {
  name: "DotIcon",
  props: {
    width: Number,
    height: Number,
    color: String,
  },
};
</script>
