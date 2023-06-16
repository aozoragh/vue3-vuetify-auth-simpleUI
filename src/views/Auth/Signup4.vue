<template>
  <div class="container">
    <div class="signup-title">
      <h2>Let’s get you assigned to a coach!</h2>
    </div>
    <div class="signup">
      <SignupStepTrack :active="4" />
      <div class="signup-step3-header">
        <span class="signup_step3_title">
          Please select which coach you would like to work with.
        </span>
        <!--<span class="signup_step3_sub-title">You can change your selection later.</span>-->
        <span class="signup_step3_desc"
          >Your coach will be there to support you through the program, with regular
          feedback and 1-1 coaching sessions. You can change your selection later.
        </span>
      </div>
      <!-- <div class="signup_step3_"> -->
      <v-radio-group v-model="ex8" column class="signup_step3_coachs">
        <Coach
          v-for="item of coachs"
          :key="item.id"
          :info="{
            id: item.id,
            avatar: item.avatar,
            name: item.name,
            desc: item.desc,
            timezone: item.timezone,
          }"
        />
        <!-- </div> -->
      </v-radio-group>
      <div class="signup_step3_button">
        <router-link to="/signup-2">{{ back }}</router-link>
        <div class="button-300-60">
          <SuccessButton :label="'Continue'" :onClick="onSubmitHandler" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignupStepTrack from "@/components/templates/SignupStep/step.vue";
import SuccessButton from "@/components/Button/SuccessButton.vue";
import Coach from "@/components/templates/Coach/coach.vue";
import anneImg from "@/assets/image/coach/anne1.png";
import deeImg from "@/assets/image/coach/dee.png";
import zachImg from "@/assets/image/coach/zach.png";
import noImg from "@/assets/image/coach/no.png";

import { toast } from "vue3-toastify";

export default {
  name: "SigninComponent",
  components: {
    SignupStepTrack,
    SuccessButton,
    Coach,
  },
  data() {
    return {
      auth: { email: "", password: "" },
      coachs: [
        {
          id: 1,
          avatar: anneImg,
          name: "Anne",
          desc:
            "Zach once battled addictions of his own – including a destructive involvement with opiates – he now lives a healthy and happy life with his wife and daughter in Vermont. Zach is a columnist for Filter Magazine and looks after the Life Process Program Podcast. Using a very non-judgemental approach, Zach is passionate about helping people understand themselves better and how their addiction may be holding them back from living the life they wish to lead.",
          timezone: "New York (Current Time: 04:30)",
        },
        {
          id: 2,
          avatar: deeImg,
          name: "Dee",
          desc:
            "Zach once battled addictions of his own – including a destructive involvement with opiates – he now lives a healthy and happy life with his wife and daughter in Vermont. Zach is a columnist for Filter Magazine and looks after the Life Process Program Podcast. Using a very non-judgemental approach, Zach is passionate about helping people understand themselves better and how their addiction may be holding them back from living the life they wish to lead.",
          timezone: "New York (Current Time: 04:30)",
        },
        {
          id: 3,
          avatar: zachImg,
          name: "Zach",
          desc:
            "Zach once battled addictions of his own – including a destructive involvement with opiates – he now lives a healthy and happy life with his wife and daughter in Vermont. Zach is a columnist for Filter Magazine and looks after the Life Process Program Podcast. Using a very non-judgemental approach, Zach is passionate about helping people understand themselves better and how their addiction may be holding them back from living the life they wish to lead.",
          timezone: "New York (Current Time: 04:30)",
        },
        {
          id: 0,
          avatar: noImg,
          name: "Can't Decide ?",
          desc: "If you prefer we can assign a coach to you randomly.",
          timezone: "",
        },
      ],
      // back: "< Back",
      ex8: NaN,
    };
  },
  methods: {
    onSubmitHandler() {
      if (isNaN(this.ex8)) {
        toast.warn("Please select a Coach before continue.");
        return;
      }
      this.$router.push("/signup-5");
    },
  },
};
</script>

<style scoped>
.container {
  align-items: center !important;
  padding: 30px;
  gap: 50px;
  width: 100%;
  @media screen and (max-width: 425px) {
    padding: 20px;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}
.signup {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 100%;
  max-width: 80%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
  @media screen and (max-width: 425px) {
    padding: 20px;
  }
}
.signup-step3-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
}
.signup_step3_title {
  font-family: "Ovo";
  font-weight: 400;
  font-size: 40px;
  line-height: 35px;

  color: #000000;
  @media screen and (max-width: 425px) {
    font-size: 1.8rem;
  }
}
.signup_step3_sub-title {
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #666666;
}
.signup_step3_desc {
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;

  color: #666666;
}
.signup_step3_button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 425px) {
    flex-direction: column-reverse;
    gap: 15px;
  }
}
.signup-title {
  margin-bottom: -50px;
  @media screen and (max-width: 425px) {
    margin-bottom: -80px;
    width: 90%;
  }
}
</style>
