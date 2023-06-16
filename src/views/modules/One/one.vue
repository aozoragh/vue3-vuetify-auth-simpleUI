<template>
  <div class="module-one">
    <span class="module-title">Module One - Self Reflection</span>
    <div class="module-sub-content">
      <div class="module-option">
        <span
          :class="{ 'module-option-clicked': this.current_module_option === 'Module' }"
          @click="this.current_module_option = 'Module'"
          >Module</span
        ><span
          :class="{ 'module-option-clicked': this.current_module_option === 'Material' }"
          @click="this.current_module_option = 'Material'"
          >Material</span
        >
      </div>
      <div class="module-module" v-if="this.current_module_option === 'Module'">
        <div class="intro-video">
          <video src="" poster="@/assets/image/module/video.png"></video>
        </div>
        <div class="module-content-header">
          <span>Module Content</span>
          <div>
            <span>100% Complete</span>
            <span>7/7 Steps</span>
          </div>
        </div>
        <div class="module-list">
          <span
            >Introduction
            <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
          /></span>
          <span
            >People All Around Us Quit Addictions
            <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
          /></span>
          <span
            >How Uncle Ozzie Quit Smoking
            <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
          /></span>
          <span
            >What Is Addiction?
            <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
          /></span>
          <span
            >How Do So Many People Quit
            <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
          /></span>
          <span
            >Addictions?
            <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
          /></span>
          <span
            >Feeling Your Power
            <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
          /></span>
          <span
            >How to Beat Addiction
            <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
          /></span>
        </div>
      </div>
      <div class="module-material" v-if="this.current_module_option === 'Material'">
        <span>Module 1 - Reading Material:</span>
        <span>Module 1 : Self Reflection - Download PDF</span>
        <span class="italic">Additional reading material for this module:</span>
        <div class="additional-reading">
          <a href=""
            >Module 1 - Additional Reading - Why It Doesnt Make Sense to Call Addiction a
            Disease</a
          >
          <a href="">Module 1 - Additional Reading - Are People Born Alcoholics</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModuleOne",
  data() {
    return {
      current_module_option: "Module",
    };
  },
};
</script>

<style scoped>
.module-one {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
}
.module-one .module-title {
  font-weight: 700;
  font-size: 43px;
  line-height: 52px;
  color: #333333;
}
.module-sub-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
}
.module-one .module-option {
  font-weight: 500;
  font-size: 16px;
  line-height: 39px;
  color: #4d5c6d;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border-bottom: 3px solid #e7e9ec;
}
.module-option .module-option-clicked {
  border-bottom: 3px solid #73a1db !important;
}
.module-one .module-option > span {
  width: 190px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -3px;

  border-bottom: 3px solid transparent;
}
.module-one .module-option > span:hover {
  cursor: pointer;
  border-bottom: 3px solid #73a1db;
}
.module-module {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
}
.intro-video {
  width: 100%;
}
.intro-video > video {
  width: 100%;
}
.module-content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.module-content-header > span {
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
}
.module-content-header > div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  line-height: 15px;
}
.module-content-header > div > span:first-child {
  color: #0a66aa;
  font-weight: 700;
}
.module-content-header > div > span:last-child {
  color: #939597;
  font-weight: 400;
}
.module-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
}
.module-list > span {
  width: 100%;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f5f6f9;
  color: #939597;
  font-weight: 500;
  font-size: 16px;
  line-height: 37px;
}
.module-material {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
}
.module-material .additional-reading {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
}
</style>
