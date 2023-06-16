<template>
  <div class="coach-container">
    <v-radio color="info" :value="info.id">
      <template v-slot:label>
        <div class="coach-content-container">
          <img :src="this.info.avatar" alt="avatar" />
          <div class="coach-details">
            <span class="coach-name">{{ info.name }}</span>
            <span class="coach-desc">{{ info.desc }}</span>
            <!-- <div class="coach-view-more">
              <span class="coach-view-more-desc">{{ viewMoreText }}</span>
              <a class="link" @click="onVueMoreHandler">{{ viewMoreLabel }}</a>
            </div> -->
            <span class="coach-timezone" v-if="info.timezone"
              ><b>{{ info.name }}'s Timezone:</b> {{ info.timezone }}</span
            >
          </div>
        </div>
      </template>
    </v-radio>
  </div>
</template>

<script>
export default {
  name: "CoachComponent",
  props: {
    info: Object,
  },
  data() {
    return {
      viewMoreText: `${this.info.desc.substr(0, 100)}......`,
      viewMoreLabel: "View More",
    };
  },
  computed: {},
  methods: {
    onVueMoreHandler() {
      if (this.viewMoreLabel === "View More") {
        this.viewMoreText = this.info.desc;
        this.viewMoreLabel = "Cancel";
      } else if (this.viewMoreLabel === "Cancel") {
        this.viewMoreText = `${this.info.desc.substr(0, 100)}......`;
        this.viewMoreLabel = "View More";
      }
    },
  },
};
</script>

<style scoped>
.coach-container {
  padding: 40px 10px 40px 20px;
  display: flex;
  justify-content: stretch;
  align-items: center;
  /* gap: 30px; */
  width: 100%;
  border-top: 1px solid #e7e7e7;
  /* border-bottom: 1px solid #e7e7e7; */

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
  @media screen and (max-width: 425px) {
    padding-left: 10px;
  }
}
.coach-container:hover {
  background-color: #ffffff;
  cursor: pointer;
}
.coach-content-container {
  width: 100%;
  display: flex;
  justify-content: stretch;
  align-items: center;
  gap: 30px;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    gap: 5px;
  }
}
.coach-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  color: #666666;
  @media screen and (max-width: 700px) {
    align-items: center;
  }
}
.coach-name {
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
}
.coach-desc {
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  /* @media screen and (max-width: 768px) {
    display: none;
    font-size: 1rem;
  } */
}
.coach-timezone {
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
}
.coach-timezone b {
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
}
img {
  width: 150px;
  height: 150px;
  @media screen and (max-width: 700px) {
    width: 20vw;
    height: 20vw;
  }
  @media screen and (max-width: 425px) {
    width: 85px;
    height: 85px;
  }
}
.link {
  font-style: italic;
}
.coach-view-more-desc {
  font-weight: 400;
  font-size: 1rem;
  line-height: 30px;
  @media screen and (max-width: 425px) {
    font-size: 14px;
    line-height: 18px;
  }
}
.coach-view-more {
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 5px;
  }
}
</style>
