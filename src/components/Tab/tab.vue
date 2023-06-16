<template>
  <div>
    <v-tabs v-model="model" centered>
      <v-tab v-for="i in 2" :key="i" :value="i"> Item {{ i }} </v-tab>
    </v-tabs>
  </div>
</template>

<script>
export default {
  name: "SignupTab",
  data() {
    return {
      model: "tab-2",
    };
  },
};
</script>

<style scoped></style>
