<template>
  <div class="container">
    <div class="signup-title">
      <h2>Almost There...</h2>
    </div>
    <div class="step4-container">
      <SignupStepTrack :active="5" />
      <div class="signup-step4-main">
        <span class="signup-step4-main-title">Confirm your settings</span>
        <span class="signup-step4-main-desc"
          >Please confirm your preferred Date and Time Format, and confirm your Country
          and Time Zone.</span
        >
        <div class="step4-select">
          <div class="date-time">
            <div class="date-format">
              <span class="select-sub-title">Date Format</span>
              <div class="signup-step4-select-wrapper">
                <v-select :items="dateFormatList" v-model="value.dateFormat"></v-select>
              </div>
              <EmptyMsg :label="'This is required field'" v-if="isEmptyDateFormat" />
            </div>
            <div class="time-format">
              <span class="select-sub-title">Time Format</span>
              <div class="signup-step4-select-wrapper">
                <v-select :items="timeFormatList" v-model="value.timeFormat"></v-select>
              </div>
              <EmptyMsg :label="'This is required field'" v-if="isEmptytimeFormat" />
            </div>
          </div>
          <div class="country">
            <span class="select-sub-title">Country</span>
            <div class="signup-step4-select-wrapper">
              <v-select :items="countryList" v-model="value.country"></v-select>
            </div>
            <EmptyMsg :label="'This is required field'" v-if="isEmptyCountry" />
          </div>
          <div class="timezone">
            <div>
              <span class="select-sub-title">Time Zone</span>
              <span>Current Time: 11:27am</span>
            </div>
            <div class="signup-step4-select-wrapper">
              <v-select :items="getTimezoneList" v-model="value.timezone"></v-select>
            </div>
          </div>
        </div>
      </div>
      <div class="signup_step4_button">
        <router-link to="/signup-4">{{ back }}</router-link>
        <div class="button-300-60">
          <SuccessButton :label="'Proceed'" :onClick="onClickHandler" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignupStepTrack from "@/components/templates/SignupStep/step.vue";
import SuccessButton from "@/components/Button/SuccessButton.vue";

import EmptyMsg from "@/components/templates/emptyWarn/empty.vue";

export default {
  name: "SigninComponent",
  components: {
    SignupStepTrack,
    SuccessButton,
    EmptyMsg,
  },
  data() {
    return {
      value: {
        dateFormat: "",
        timeFormat: "",
        country: "",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      dateFormatList: ["DD/MM/YYYY", "YYYY/MM/DD"],
      timeFormatList: ["12h (am/pm)", "24h"],
      countryList: ["United Kingdom", "United State", "Canada"],
      timezoneList: ["Eastern Time - US & Canada"],
      // back: "< Back",
      currentTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      isSubmitted: false,
    };
  },
  methods: {
    onClickHandler() {
      console.log(3232323, this.currentTimezone);
      this.isSubmitted = true;
    },
  },
  computed: {
    // currentTimezone() {
    //   return Intl.DateTimeFormat().resolvedOptions().timeZone;
    // },
    getTimezoneList() {
      return [...this.timezoneList, this.currentTimezone];
    },
    isEmptyCountry() {
      return this.isSubmitted && this.value.country === "";
    },
    isEmptyDateFormat() {
      return this.isSubmitted && this.value.dateFormat === "";
    },
    isEmptytimeFormat() {
      return this.isSubmitted && this.value.timeFormat === "";
    },
  },
};
</script>

<style scoped>
.container {
  align-items: center !important;
  padding-bottom: 20px;
  margin-top: 10px;
  @media screen and (max-width: 425px) {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}
.step4-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 550px;
  gap: 25px;
  background: #fff;
  padding: 20px;
}
.signup-step4-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
}
.signup-step4-main-title {
  font-family: "Ovo";
  font-weight: 400;
  font-size: 40px;
  line-height: 45px;
  color: #000000;
  @media screen and (max-width: 425px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 375px) {
    font-size: 1.8rem;
  }
}
.signup-step4-main-desc {
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #666666;
  @media screen and (max-width: 425px) {
    font-size: 1rem;
  }
}
.step4-select {
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  border-bottom: 1px solid #e7e7e7;
}
.date-time {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
}
.date-format,
.time-format {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  gap: 10px;
  @media screen and (max-width: 425px) {
    width: 100%;
  }
}
.country {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
}
.timezone {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
}
.timezone > div:first-child {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.signup-step4-select-wrapper {
  width: 100%;
  height: 60px;
}
.select-sub-title {
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  color: #666666;
}
.signup_step4_button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 425px) {
    flex-direction: column-reverse;
    gap: 15px;
  }
}
</style>
