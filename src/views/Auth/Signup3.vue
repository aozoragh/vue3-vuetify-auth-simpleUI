<template>
  <div class="container">
    <div class="signup-title">
      <h2>Self Help Essentials ($29/month)</h2>
      <h4>Alcohol Program</h4>
    </div>
    <div class="signup">
      <div class="signup_summary">
        <span class="signup_summary-title">No Contract - Cancel Anytime</span>
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
        <SignupStepTrack :active="3" />
        <span class="signup_step1_title"> Payment Setup <span>($89/month)</span> </span>
        <div class="signup_step1_main">
          <div class="signup_step1_main_tab">
            <span
              @click="ChoosePaymentMethod('CC')"
              :class="{ 'step2-tab-selected': isCC }"
              >Credit Card</span
            >
            <span
              @click="ChoosePaymentMethod('PP')"
              :class="{ 'step2-tab-selected': isPP }"
              ><img alt="paypal icon" src="@/assets/image/icon/paypal.png"
            /></span>
          </div>
          <div class="signup_step1_main_content-cc" v-if="isCC">
            <div class="card-num">
              <span class="signup_step1_main_content-cc_card-num">Card Number*</span>
              <SignupInput
                :type="'text'"
                :placeholder="'Card Number'"
                :onChange="onChangeCardNumberHandler"
                :isEmpty="isEmptyCardNumber"
              />
              <EmptyMsg :label="'This is required field'" v-if="isEmptyCardNumber" />
              <EmptyMsg :label="'Invalid Card Number'" v-if="!isValidateCardNumber" />
            </div>
            <div class="block-row-38">
              <div :class="{ 'special-select-wrapper': isEmptyMonth }">
                <span class="signup_step1_main_content-cc_card-num">Expiry Month*</span>
                <div class="signup-step2-select-wrapper">
                  <v-select
                    :items="monthSelectItem"
                    v-model="card.expiry_month"
                  ></v-select>
                  <EmptyMsg
                    :label="'Required field'"
                    v-if="isEmptyMonth"
                    :smallSpan="true"
                  />
                </div>
              </div>
              <div :class="{ 'special-select-wrapper': isEmptyYear }">
                <span class="signup_step1_main_content-cc_card-num">Expiry Year*</span>
                <div class="signup-step2-select-wrapper">
                  <v-select :items="yearSelectItem" v-model="card.expiry_year"></v-select>
                  <EmptyMsg
                    :label="'Required field'"
                    v-if="isEmptyYear"
                    :smallSpan="true"
                  />
                </div>
              </div>
              <div>
                <span class="signup_step1_main_content-cc_card-num">CVV*</span>
                <SignupInput
                  :type="'text'"
                  :placeholder="'CVV'"
                  :onChange="onChangeCVVHandler"
                  :isEmpty="isEmptyCVV"
                />
                <EmptyMsg :label="'Required field'" v-if="isEmptyCVV" :smallSpan="true" />
                <EmptyMsg :label="'Invalid CVV'" v-if="!isValidCVV" :smallSpan="true" />
              </div>
            </div>
            <EmptyMsg :label="'Expiry Date is not valid'" v-if="!isValidExpiry" />
          </div>
          <div class="signup_step1_main_content-pp" v-if="isPP">
            <span
              >To finish sign-up, click the <b>Continue to PayPal</b> button and log into
              PayPal using your email and password.</span
            >
            <div class="button-300-60">
              <SuccessButton
                :label="'Continue to Paypal'"
                :onClick="onContinuPPHandler"
              />
            </div>
          </div>
        </div>
        <div class="signup_step1_button">
          <router-link to="/signup-2">{{ back }}</router-link>
          <div class="button-300-60" v-if="isCC">
            <SuccessButton :label="'Continue'" :onClick="onCompleteOrderHandler" />
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
// import SelectComponent from "@/components/Select/select.vue";
import EmptyMsg from "@/components/templates/emptyWarn/empty.vue";

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
      card: {
        number: "",
        expiry_month: "",
        expiry_year: "",
        cvv: "",
      },
      contactInfoSummaryList: [
        {
          id: 1,
          title: "Money Back Guarantee",
          desc: "Cancel within 30 days to get a full refund. No questions asked.",
        },
        {
          id: 2,
          title: "Secure Payments",
          desc: "with Stripe and Paypal for world leading secure payment processing.",
        },
        {
          id: 3,
          title: "Hibernate Option",
          desc: "For when you need to put your account on hold for a while.",
        },
        {
          id: 4,
          title: "Easy Cancellation",
          desc: "Cancel directly from within your account.",
        },
      ],
      payment_method: "CC",
      back: "< Back",
      monthSelectItem: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      yearSelectItem: [2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030],
      isSubmitted: false,
    };
  },
  methods: {
    ChoosePaymentMethod(method) {
      this.payment_method = method;
    },
    onCompleteOrderHandler() {
      this.isSubmitted = true;
      if (this.isEmptyCardNumber) return;
      if (this.isEmptyCVV) return;
      if (this.isEmptyYear) return;
      if (this.isEmptyMonth) return;
      if (!this.isValidCVV) return;
      if (!this.isValidExpiry) return;
      if (!this.isValidateCardNumber) return;

      this.$router.push("/signup-4");
    },
    onChangeCardNumberHandler(e) {
      this.card.number = e.target.value;
    },
    onChangeCVVHandler(e) {
      this.card.cvv = e.target.value;
    },
  },
  computed: {
    isCC() {
      return this.payment_method === "CC";
    },
    isPP() {
      return this.payment_method === "PP";
    },
    isEmptyCardNumber() {
      return this.isSubmitted && this.card.number === "";
    },
    isEmptyCVV() {
      return this.isSubmitted && this.card.cvv === "";
    },
    isEmptyMonth() {
      return this.isSubmitted && this.card.expiry_month === "";
    },
    isEmptyYear() {
      return this.isSubmitted && this.card.expiry_year === "";
    },
    isValidateCardNumber() {
      if (!this.isSubmitted) return true;
      if (this.isEmptyCardNumber) return true;
      var cardNumber = this.card.number; // insert the card number here

      cardNumber = cardNumber.replace(/\s/g, "");
      console.log(23232, cardNumber);

      if (/^4[0-9]{12}$/.test(cardNumber) || /^4[0-9]{15}$/.test(cardNumber)) return true; //visa
      if (/^5[0-9]{15}$/.test(cardNumber)) return true; //master
      if (/^3[47][0-9]{13}$/.test(cardNumber)) return true; //america
      if (/^6[0-9]{15}$/.test(cardNumber)) return true;
      //discover
      else return false;
    },
    isValidExpiry() {
      if (!this.isSubmitted) return true;
      if (this.isEmptyMonth || this.isEmptyYear) return true;
      const now = new Date();
      const currentYear = now.getFullYear();
      const currentMonth = now.getMonth() + 1;
      const month = parseInt(this.card.expiry_month);
      const year = parseInt(this.card.expiry_year);
      if (
        year < currentYear ||
        (year === currentYear && month < currentMonth) ||
        month < 1 ||
        month > 12
      ) {
        return false;
      } else {
        return true;
      }
    },
    isValidCVV() {
      if (!this.isSubmitted) return true;
      if (this.isEmptyCVV) return true;
      const cvvRegex = /^[0-9]{3,4}$/;

      if (cvvRegex.test(this.card.cvv)) {
        return true;
      }
      return false;
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
  align-items: center;
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
  padding: 50px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  @media screen and (max-width: 990px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    padding: 20px;
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
  gap: 30px;
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
.signup_step1_title {
  font-family: "Ovo";
  font-weight: 400;
  font-size: 35px;
  line-height: 45px;

  color: #000000;
  @media screen and (max-width: 590px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 425px) {
    font-size: 1.7rem;
    letter-spacing: -0.5px;
  }
  @media screen and (max-width: 375px) {
    font-size: 1.45rem;
  }
}
.signup_step1_title > span {
  color: #0a66aa;
}

.signup_step1_main_tab {
  width: 100%;
  border-bottom: 1px solid #e7e7e7;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  gap: 3px;
}
.signup_step1_main_tab > span {
  width: 160px;
  height: 68px;
  border: 1px solid #e7e7e7;
  border-top: 5px solid #e7e7e7;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -1px;
  font-size: 20px;
  color: #666;
}
.signup_step1_main_tab > span:hover {
  cursor: pointer;
  border-top: 5px solid #73a1db;
}
.step2-tab-selected {
  border-bottom: 2px solid #fff !important;
  border-top: 5px solid #73a1db !important;
}
.signup_step1_main_content-pp {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  padding: 0 10px 100px 10px;

  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #666666;
}
.signup_step1_main_content-cc {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
}
.signup_step1_main_content-cc > div {
  width: 100%;
}
.signup_step1_main_content-cc > .card-num {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 17px;
}
.signup_step1_main_content-cc_card-num {
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  color: #666666;
}
.block-row-38 {
  flex-wrap: wrap;
  gap: 0 !important;
  justify-content: space-between !important;
  align-items: flex-start !important;
}
.signup_step1_main_content-cc .block-row-38 > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 17px;
  width: 31%;
  @media screen and (max-width: 1440px) {
    width: 45%;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
}
.signup_step1_main_content-cc .block-row-38 > div:nth-child(2) {
  @media screen and (max-width: 425px) {
    margin-top: 10px;
  }
}
.signup_step1_main_content-cc .block-row-38 > div:last-child {
  @media screen and (max-width: 1440px) {
    width: 100% !important;
    margin-top: 10px;
  }
}

.signup_step1_button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 425px) {
    flex-direction: column-reverse;
    gap: 15px;
  }
}
.signup-step2-select-wrapper {
  width: 100%;
}
</style>
