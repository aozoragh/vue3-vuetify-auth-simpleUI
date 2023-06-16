<template>
  <div class="profile">
    <span class="coach-name">Your Coach: {{ coachName }}</span>
    <div class="coach-image">
      <img src="@/assets/image/coach/anne.png" alt="Anne" />
    </div>
    <div class="buttons">
      <v-btn color="#357AF6" class="text-white button">Schedule a Session</v-btn>
      <v-btn color="#357AF6" class="text-white button">Message {{ coachName }}</v-btn>
    </div>
    <div class="profile-text">
      <span class="desc"
        >You are entitled to free introductory 1-1 coaching session with your coach,
        {{ coachName }}.</span
      >
      <a class="schedule-btn link">Schedule Now</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileComponent",
  data: () => {
    return {
      coachName: "Anne",
    };
  },
};
</script>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  background-color: #fff;
  border-radius: 10px;
  filter: drop-shadow(0px 0px 15px rgba(191, 208, 252, 0.7));
  padding: 50px 20px;
}
.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  width: 100%;
}
.buttons > .button {
  width: 160px;
}

.profile-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.desc {
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  font-weight: 600;
}

.schedule-btn {
  text-decoration: underline;
  font-weight: bold;
}
.schedule-btn:hover {
  cursor: pointer;
}
.coach-name {
  font-weight: 600;
}
</style>
