<template>
  <div class="container">
    <div class="signup-title">
      <h2>Self Help Essentials ($29/month)</h2>
      <h4>Alcohol Program</h4>
    </div>
    <div class="signup">
      <div class="signup_summary">
        <span class="signup_summary-title">Here's what you get</span>
        <div class="signup_summary-list">
          <div v-for="item of contactInfoSummaryList" :key="item.id">
            <span class="signup_summary-icon"
              ><img alt="tick img" src="@/assets/image/signup/check.svg"
            /></span>
            <span
              ><b>{{ item.title }}</b> - {{ item.desc }}
            </span>
          </div>
        </div>
      </div>
      <div class="signup_step1">
        <SignupStepTrack :active="2" />
        <span class="signup_step1_title"> Create a Password </span>
        <div class="signup_step1_main">
          <div>
            <span class="signup_step1_main_title">Password</span>
            <SignupInput
              :type="'password'"
              :placeholder="'Password'"
              :onChange="onChangePsw"
            />
          </div>
          <!-- <div>
            <span class="signup_step1_main_title">Confirm Password</span>
            <SignupInput :type="'password'" :placeholder="'Confirm Password'" />
          </div> -->
          <div class="psw-requirement">
            <div>
              <DotIcon :width="20" :height="20" :color="dotIconColor.lowercase" />
              <span>One lowercase character</span>
            </div>
            <div>
              <DotIcon :width="20" :height="20" :color="dotIconColor.special" />
              <span>One special character</span>
            </div>
            <div>
              <DotIcon :width="20" :height="20" :color="dotIconColor.uppercase" />
              <span>One uppercase character</span>
            </div>
            <div>
              <DotIcon :width="20" :height="20" :color="dotIconColor.length" />
              <span>8 characters minimum</span>
            </div>
            <div>
              <DotIcon :width="20" :height="20" :color="dotIconColor.number" />
              <span>One number</span>
            </div>
          </div>
          <span class="all-set-psw" v-if="isValid"
            ><img src="@/assets/image/icon/module/tick.png" alt="tick" /> Your password is
            secure and you're all set.</span
          >
          <span class="invalid-password" v-if="isSubmitted && !isValid"
            ><WarnIcon /> Invalid Password!</span
          >
        </div>
        <div class="signup_step2_button">
          <router-link to="/signup">{{ back }}</router-link>
          <div class="button-300-60">
            <SuccessButton
              :label="'Continue'"
              :onClick="onCompleteOrderHandler"
              :disable="!isValid"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignupStepTrack from "@/components/templates/SignupStep/step.vue";
import SuccessButton from "@/components/Button/SuccessButton.vue";
import SignupInput from "@/components/Input/input.vue";
import DotIcon from "@/components/icons/dot.vue";
import WarnIcon from "@/components/icons/warn.vue";

import { setPsw } from "@/api/user";
import { toast } from "vue3-toastify";

export default {
  name: "SigninComponent",
  components: {
    SignupStepTrack,
    SuccessButton,
    SignupInput,
    DotIcon,
    WarnIcon,
  },
  data() {
    return {
      password: "",
      contactInfoSummaryList: [
        {
          id: 1,
          title: "Structured online program",
          desc: "with 8 comprehensive modules and over 50 thought-provoking exercises",
        },
        {
          id: 2,
          title: "Developed by Dr. Stanton Peele,",
          desc: "the world leading authority on non-12 step addiction recovery",
        },
        {
          id: 3,
          title: "Private video coaching ",
          desc:
            "option to schedule one-to-one coaching through our secure online video conferencing application",
        },
        {
          id: 4,
          title: "Life Story Journaling ",
          desc:
            "reflect on the journey that you have travelled through life to bring you to where you are today",
        },
        {
          id: 5,
          title: "Instant Access ",
          desc: "you'll get instant access to the entire program on the very next page",
        },
        {
          id: 6,
          title: "Risk-Free 30 Day Trial",
          desc:
            "to try the ENTIRE program so you can decide for yourself if it is for you",
        },
      ],
      back: "< Back",
      dotIconColor: {
        lowercase: "#666666",
        special: "#666666",
        uppercase: "#666666",
        length: "#666666",
        number: "#666666",
      },

      isSubmitted: false,
    };
  },
  methods: {
    async onCompleteOrderHandler() {
      this.isSubmitted = true;
      const id = localStorage?.getItem("currentUser");
      if (!this.isValid) return;
      const res = await setPsw(id, this.password);
      if (res?.status) {
        toast.success(res.message);
        this.$router.push("/signup-3");
      } else toast.error(res.message);
    },
    onChangePsw(e) {
      this.password = e.target.value;
      if (/[a-z]/.test(this.password)) {
        this.dotIconColor.lowercase = "#10BE0D";
      } else {
        this.dotIconColor.lowercase = "#666666";
      }
      if (/[A-Z]/.test(this.password)) {
        this.dotIconColor.uppercase = "#10BE0D";
      } else {
        this.dotIconColor.uppercase = "#666666";
      }
      // if (/[:"£()_+=`¬/:\\|]/.test(this.password)) {
      if (/[:"£()_+=`¬/|@~<>!$%^&]/.test(this.password)) {
        this.dotIconColor.special = "#10BE0D";
      } else {
        this.dotIconColor.special = "#666666";
      }
      if (/[0-9]/.test(this.password)) {
        this.dotIconColor.number = "#10BE0D";
      } else {
        this.dotIconColor.number = "#666666";
      }
      if (this.password.length >= 8) {
        this.dotIconColor.length = "#10BE0D";
      } else {
        this.dotIconColor.length = "#666666";
      }
    },
  },
  computed: {
    isValid() {
      for (var i in this.dotIconColor) {
        if (this.dotIconColor[i] === "#666666") {
          return false;
        }
      }
      return true;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 425px) {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}
.signup {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 80%;
  padding-top: 20px;
  @media screen and (max-width: 990px) {
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
}
.signup_summary {
  width: 50%;
  padding: 20px 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  @media screen and (max-width: 990px) {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    padding: 35px 20px;
  }
}
.signup_step1 {
  width: 50%;
  padding: 5px 50px 20px 50px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  @media screen and (max-width: 990px) {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    padding: 35px 20px;
  }
}
.signup_summary-title {
  font-family: "Ovo";
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  line-height: 39px;

  color: #000000;
  @media screen and (max-width: 425px) {
    font-size: 2rem;
  }
}
.signup_summary-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
}
.signup_summary-list > div {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
}
.signup_step1_main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  width: 100%;
}
.signup_step1_main > div {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
}

.signup_step1_main_checkbox-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.signup_step1_main_checkbox-group > div {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
}
.signup_step1_main_title {
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  color: #666666;
}
.signup_step1_title {
  font-family: "Ovo";
  font-weight: 400;
  font-size: 40px;
  line-height: 45px;

  color: #000000;
  @media screen and (max-width: 425px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 330px) {
    font-size: 1.9rem;
  }
}
.signup_step1_main_warn {
  display: flex;
  flex-direction: row !important;
  justify-content: flex-start !important;
  align-items: center !important;
  gap: 10px !important;
  color: #dfa129;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  border-bottom: 1px solid #e7e7e7;
  @media screen and (max-width: 425px) {
    font-size: 0.9rem;
  }
}
.signup_step2_button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 425px) {
    flex-direction: column-reverse;
    gap: 15px;
  }
}
.psw-requirement {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row !important;
  justify-content: space-between !important;
  align-items: flex-start !important;
}
.psw-requirement > div {
  width: 48%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  color: #666666;
  @media screen and (max-width: 425px) {
    width: 100%;
  }
}
.invalid-password {
  color: red;
  width: 100%;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
}
.all-set-psw {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  color: #357af6;
  font-size: 14px;
  width: 100%;
}
</style>
