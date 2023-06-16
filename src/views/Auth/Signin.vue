<template>
  <div class="login">
    <div class="login_img">
      <div class="login-mask">
        <div>
          <span>Our goal is simple:</span>
          <span
            >To help you recover from your addiction and learn to lead a joyful,
            meaningful life. Login to continue your journey of recovery.</span
          >
        </div>
      </div>
    </div>
    <div class="login_dialog">
      <div class="login_dialog-box">
        <img class="login-logo" src="@/assets/logo.png" alt="login logo" />
        <span class="login-note"
          >To access your membership content, please login using your email address and
          password.</span
        >
        <div class="login_ipt-group">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </div>
        <div class="login_ipt-group">
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Password"
            required
          ></v-text-field>
        </div>
        <div class="login_remember">
          <v-checkbox label="Remember me" color="info"></v-checkbox>
        </div>
        <div class="button-full-60 login-btn"><SuccessButton :label="'Login'" /></div>
        <div class="login_out-link">
          <router-link to="/" class="link">Forgot Password</router-link>
          <router-link to="/signup" class="link">Sign up</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SuccessButton from "@/components/Button/SuccessButton.vue";

export default {
  name: "SigninComponent",
  components: { SuccessButton },
  data() {
    return {
      email: "",
      password: "",
      emailRules: [
        (value) => {
          if (value) return true;

          return "E-mail is required.";
        },
        (value) => {
          if (/.+@.+\..+/.test(value)) return true;

          return "E-mail must be valid.";
        },
      ],
      passwordRules: [
        (value) => {
          if (value) return true;
          return "Password is required.";
        },
        // (value) => {

        // }
      ],
    };
  },
  methods: {
    login() {
      // Perform login logic here
    },
    signUpHandler() {
      this.$store.dispatch("setCurrentRoute", "/signup");
    },
  },
};
</script>

<style scoped>
.login {
  width: 100vw;
  height: calc(100vh - 80px);

  display: flex;
  justify-content: center;
  align-items: center;
}

.login_img {
  background: url("@/assets/login.jpg") no-repeat;
  background-size: cover;
  width: 50%;
  height: 100%;
  position: relative;

  @media screen and (max-width: 875px) {
    display: none;
  }
}
.login-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-mask div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.login-mask span:first-child {
  font-size: 2.5rem;
  max-width: 350px;
}
.login-mask span:last-child {
  font-size: 1.3rem;
  max-width: 350px;
}
.login_dialog {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  @media screen and (max-width: 875px) {
    width: 100%;
    padding: 0 20px;
  }
}
.login_dialog-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 30px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #cccccc;
  box-shadow: 5px 5px 10px #cccccc;
  width: 100%;
  max-width: 400px;
  @media screen and (max-width: 875px) {
    padding-left: 15px;
    padding-right: 15px;
  }
}
.login-note {
  padding: 0.9375rem;
  background-color: #0591c5;
  border-radius: 10px;
  font-size: 14px;
  line-height: 24px;
  color: #fff;
}
.login_ipt-group {
  width: 100%;
}
.login_remember {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}
.login-btn {
  margin-top: -30px;
}
.login_out-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-style: italic;
}
</style>
