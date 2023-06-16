<template>
  <div class="container">
    <div class="sub-header">
      <h2>Life Process Program</h2>
      <h4>Helping You Lead a Life of Purpose</h4>
    </div>
    <div class="body">
      <div class="content">
        <div class="process">
          <div class="status-text">
            <span>6% Completed</span>
            <span>Last activity on December 20, 2022</span>
          </div>
          <div class="process-bar">
            <div class="process-bar_bg"></div>
            <div class="process-bar_processed"></div>
          </div>
          <div class="process_notification">In Progress</div>
        </div>

        <div class="table">
          <div class="thead">
            <span>Course Content</span>
            <span class="expand-all"><ArrowDownIcon /> Expand All</span>
          </div>
          <div class="tbody-tr">
            <span class="tr-title"> Introduction (Click Here To Get Started) </span>
            <div class="tr-details">
              <span class="tr-details-topic">1 Topics</span>
              <span class="tr-details-exercise">1 Exercise</span>
              <span class="tr-details-icon"
                ><img alt="progress icon" src="@/assets/image/icon/module/half.png"
              /></span>
            </div>
          </div>
          <div class="tbody-tr">
            <span class="tr-title"> Module One - Self Reflection </span>
            <div class="tr-details">
              <span class="tr-details-topic">7 Topics</span>
              <span class="tr-details-exercise">8 Exercises</span>
              <span class="tr-details-icon"
                ><img alt="progress icon" src="@/assets/image/icon/module/half.png"
              /></span>
            </div>
          </div>
          <div class="tbody-tr">
            <span class="tr-title"> Module Two - Values </span>
            <div class="tr-details">
              <span class="tr-details-topic">11 Topics</span>
              <span class="tr-details-exercise">6 Exercises</span>
              <span class="tr-details-icon"
                ><img alt="progress icon" src="@/assets/image/icon/module/empty.png"
              /></span>
            </div>
          </div>
          <div class="tbody-tr">
            <span class="tr-title"> Module Three - Motivation </span>
            <div class="tr-details">
              <span class="tr-details-topic">13 Topics</span>
              <span class="tr-details-exercise">6 Exercises</span>
              <span class="tr-details-icon"
                ><img alt="progress icon" src="@/assets/image/icon/module/empty.png"
              /></span>
            </div>
          </div>
          <div class="tbody-tr">
            <span class="tr-title"> Module Five - Resources </span>
            <div class="tr-details">
              <span class="tr-details-topic">15 Topics</span>
              <span class="tr-details-exercise">5 Exercises</span>
              <span class="tr-details-icon"
                ><img alt="progress icon" src="@/assets/image/icon/module/empty.png"
              /></span>
            </div>
          </div>
          <div class="tbody-tr">
            <span class="tr-title"> Introduction (Click Here To Get Started) </span>
            <div class="tr-details">
              <span class="tr-details-topic">1 Topics</span>
              <span class="tr-details-exercise">1 Exercises</span>
              <span class="tr-details-icon"
                ><img alt="progress icon" src="@/assets/image/icon/module/empty.png"
              /></span>
            </div>
          </div>
          <div class="tbody-tr">
            <span class="tr-title"> Module Six - Support </span>
            <div class="tr-details">
              <span class="tr-details-topic">18 Topics</span>
              <span class="tr-details-exercise">7 Exercises</span>
              <span class="tr-details-icon"
                ><img alt="progress icon" src="@/assets/image/icon/module/empty.png"
              /></span>
            </div>
          </div>
          <div class="tbody-tr">
            <span class="tr-title"> Module Seven - Maturity </span>
            <div class="tr-details">
              <span class="tr-details-topic">13 Topics</span>
              <span class="tr-details-exercise">5 Exercises</span>
              <span class="tr-details-icon"
                ><img alt="progress icon" src="@/assets/image/icon/module/empty.png"
              /></span>
            </div>
          </div>
          <div class="tbody-tr">
            <span class="tr-title"> Module Eight - Greater Goals </span>
            <div class="tr-details">
              <span class="tr-details-topic">10 Topics</span>
              <span class="tr-details-exercise">7 Exercises</span>
              <span class="tr-details-icon"
                ><img alt="progress icon" src="@/assets/image/icon/module/empty.png"
              /></span>
            </div>
          </div>
        </div>
      </div>
      <div class="profile">
        <ProfileComponent />
      </div>
    </div>
  </div>
</template>

<script>
import ProfileComponent from "@/components/templates/Profile/profile.vue";
import ArrowDownIcon from "@/components/icons/ArrowDown.vue";

export default {
  name: "IntroUnbooked",
  components: {
    ProfileComponent,
    ArrowDownIcon,
  },
};
</script>

<style scoped>
.body {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px;
  width: 100%;
  padding: 40px 0;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px;
  width: 100%;
}
.process {
  display: flex;
  justify-content: space-between;
  align-items: center;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.15));
  background-color: #fff;
  padding: 30px 25px;
  border-radius: 5px;
  width: 100%;
}
.status-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.status-text > span:first-child {
  font-size: 1rem;
  font-weight: 700;
  color: #666;
}
.status-text > span:last-child {
  font-size: 14px;
  font-weight: 400;
  color: #666;
}
.process_notification {
  background: #e7e9ec;
  border-radius: 50px;
  color: #728188;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
}
.profile {
  display: flex;
  justify-content: center;
  align-items: center;
}
.table {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.thead {
  font-weight: 600;
  color: #666;
}
.expand-all {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.thead,
.tbody-tr {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
}
.tbody-tr:nth-child(odd) {
  background: #f5f6f9;
  padding: 25px;
  color: #666;
}
.tbody-tr:nth-child(even) {
  background: rgba(131, 131, 131, 0.08);
  padding: 25px;
  color: #666;
}
.tr-title {
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
}
.tr-details {
  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 12px; */
}
.tr-details-topic,
.tr-details-exercise {
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  padding: 0 20px;
}
.tr-details-exercise {
  border-left: 1px solid #666;
}
.tr-details-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
