<template>
  <div>
    <input
      :type="type_"
      :placeholder="placeholder"
      @input="onChange"
      :class="{ invalid: isEmpty }"
    />
    <span @click="toggleShow" v-if="isPassword" class="eye-icon"
      ><EyeIcon :type="showState"
    /></span>
  </div>
</template>

<script>
import EyeIcon from "@/components/icons/eye.vue";
export default {
  name: "SignupInput",
  props: {
    type: String,
    placeholder: String,
    onChange: Function,
    isEmpty: Boolean,
  },
  components: {
    EyeIcon,
  },
  data() {
    return {
      showState: "hidden",
      type_: this.type,
    };
  },
  methods: {
    toggleShow() {
      if (this.showState === "hidden") {
        this.showState = "show";
        this.type_ = "text";
      } else {
        this.showState = "hidden";
        this.type_ = "password";
      }
    },
  },
  computed: {
    isPassword() {
      return this.type === "password";
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: stretch;
  align-items: center;
  width: 100%;
  position: relative;
}
input {
  width: 100%;
  height: 60px;
  background: #fafafa;
  border: 2px solid #e7e7e7;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 3rem;
}
.eye-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 1.3rem;
}
.eye-icon:hover {
  cursor: pointer;
}
.invalid {
  border: 1px solid #73a1db;
}
</style>
