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
        <SignupStepTrack :active="1" />
        <span class="signup_step1_title"> Contact Information </span>
        <div class="signup_step1_main">
          <div>
            <span class="signup_step1_main_title">First Name*</span>
            <SignupInput
              :type="'text'"
              :placeholder="'First Name'"
              :onChange="onChangeFnameHandler"
              :isEmpty="isValidFname"
            />
            <EmptyMsg :label="'This is required field'" v-if="isValidFname" />
          </div>
          <div>
            <span class="signup_step1_main_title">Last Name</span>
            <SignupInput
              :type="'text'"
              :placeholder="'Last Name'"
              :onChange="onChangeLnameHandler"
            />
          </div>
          <div>
            <span class="signup_step1_main_title">Email Address*</span>
            <SignupInput
              :type="'email'"
              :placeholder="'you@example.com'"
              :onChange="onChangeEmailHandler"
              :isEmpty="!isValidEmail || isEmptyEmail"
            />
            <EmptyMsg :label="'This is required field'" v-if="isEmptyEmail" />
            <EmptyMsg :label="'Invalid Email Address'" v-if="!isValidEmail" />
          </div>
          <div>
            <span class="signup_step1_main_title">Confirm Email Address*</span>
            <SignupInput
              :type="'email'"
              :placeholder="'you@example.com'"
              :onChange="onChangeConfirmEmailHandler"
              :isEmpty="!isValidConfirmEmail || isEmptyConfirmEmail"
            />
            <EmptyMsg :label="'This is required field'" v-if="isEmptyConfirmEmail" />
            <EmptyMsg :label="'Confirm Email not matched'" v-if="!isValidConfirmEmail" />
          </div>
          <div class="signup_step1_main_checkbox-group">
            <v-checkbox
              v-model="auth.mailingList"
              color="info"
              label="By checking this box, you agree to be added to our mailing list. You can
                opt out at any time."
            ></v-checkbox>
            <v-checkbox color="info" v-model="auth.termsConditions">
              <template v-slot:label>
                <span
                  >By Checking this box, you agree to our
                  <a class="link">Terms of Service</a> and
                  <a class="link">Privacy Policy</a>.</span
                >
              </template>
            </v-checkbox>
          </div>
          <div class="signup_step1_main_warn" v-if="isWarn">
            <img src="@/assets/image/icon/warn-icon.svg" alt="warn icon" />
            <span>You must accept the policies in order to use Life Process Program</span>
          </div>
        </div>
        <div class="button-full-60">
          <SuccessButton :label="'Continue'" :onClick="onContnueHanler" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignupStepTrack from "@/components/templates/SignupStep/step.vue";
import SuccessButton from "@/components/Button/SuccessButton.vue";
import SignupInput from "@/components/Input/input.vue";
import EmptyMsg from "@/components/templates/emptyWarn/empty.vue";

import { toast } from "vue3-toastify";
import { setUserInfo } from "@/api/user";

export default {
  name: "SigninComponent",
  components: {
    SignupStepTrack,
    SuccessButton,
    SignupInput,
    EmptyMsg,
  },
  data() {
    return {
      auth: {
        email: "",
        confirmEmail: "",
        firstName: "",
        lastName: "",
        mailingList: false,
        termsConditions: false,
      },
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
          title: "Private video coaching",
          desc:
            "option to schedule one-to-one coaching through our secure online video conferencing application",
        },
        {
          id: 4,
          title: "Life Story Journaling",
          desc:
            "reflect on the journey that you have travelled through life to bring you to where you are today",
        },
        {
          id: 5,
          title: "Risk-Free 30 Day Trial",
          desc:
            "to try the ENTIRE program so you can decide for yourself if it is for you",
        },
      ],

      isSubmitted: false,
    };
  },
  methods: {
    async onContnueHanler() {
      this.isSubmitted = true;

      if (this.isWarn) return;
      if (this.isValidFname) return;
      if (this.isEmptyEmail) return;
      if (this.isEmptyConfirmEmail) return;
      if (!this.isValidEmail) return;
      if (!this.isValidConfirmEmail) return;
      const res = await setUserInfo(this.auth);
      console.log(1332, res);
      if (res?.status) {
        this.$store.dispatch("setCurrentUser", res.data);
        // toast.success(res.message);
        this.$router.push("/signup-2");
      } else {
        toast.error(res.message);
      }
    },
    onChangeEmailHandler(e) {
      this.auth.email = e.target.value;
    },
    onChangeConfirmEmailHandler(e) {
      this.auth.confirmEmail = e.target.value;
    },
    onChangeFnameHandler(e) {
      this.auth.firstName = e.target.value;
    },
    onChangeLnameHandler(e) {
      this.auth.lastName = e.target.value;
    },
  },
  computed: {
    isWarn() {
      return !this.auth.termsConditions && this.isSubmitted;
    },
    isValidFname() {
      return this.isSubmitted && this.auth.firstName === "";
    },
    isEmptyEmail() {
      return this.isSubmitted && this.auth.email === "";
    },
    isEmptyConfirmEmail() {
      return this.isSubmitted && this.auth.confirmEmail === "";
    },
    isValidEmail() {
      if (this.isEmptyEmail) return true;
      if (!this.isSubmitted) return true;
      return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.auth.email);
    },
    isValidConfirmEmail() {
      if (this.isEmptyConfirmEmail) return true;
      if (!this.isSubmitted) return true;
      return this.auth.email === this.auth.confirmEmail;
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
  @media screen and (max-width: 990px) {
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 1295px) {
    max-width: 100%;
  }
}
.signup_summary {
  width: 50%;
  padding: 50px 65px;
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
.signup_step1 {
  width: 50%;
  padding: 5px 50px 20px 50px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
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
  font-size: 30px;
  line-height: 39px;

  color: #000000;
  @media screen and (max-width: 425px) {
    font-size: 1.8rem;
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
  gap: 8px;
  width: 100%;
}
.signup_step1_main > div {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
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
  font-size: 15px;
  line-height: 24px;

  color: #666666;
}
.signup_step1_title {
  font-family: "Ovo";
  font-weight: 400;
  font-size: 35px;
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
  font-size: 14px;
  line-height: 19px;
  border-bottom: 1px solid #e7e7e7;

  @media screen and (max-width: 425px) {
    font-size: 0.8rem;
  }
}
</style>
