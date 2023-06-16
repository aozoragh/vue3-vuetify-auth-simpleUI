<template>
  <div class="sidebar">
    <div class="sidebar-title">
      <h3>Life Process Program</h3>
      <span>Helping You Lead a Life of Purpose</span>
    </div>
    <div class="progress">
      <div class="perentage">
        <div class="done"></div>
      </div>
      <div class="progress-desc">
        <span><b>6% Complete</b></span>
        <span>Last activity on December 20, 2022</span>
      </div>
    </div>
    <div class="module-list">
      <div class="tbody-tr">
        <div class="clickable-item">
          <span class="tr-title"> Introduction </span>
          <div class="tr-details">
            <span class="tr-details-topic">1 Topics</span>
            <span class="tr-details-icon"
              ><img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
          </div>
        </div>
      </div>
      <div class="tbody-tr">
        <div class="clickable-item">
          <span
            class="tr-title"
            @click="onModuleClickHandler(1, 'Module One - Self Reflection')"
          >
            Module One - Self Reflection
          </span>
          <div class="tr-details">
            <span class="tr-details-topic">7 Topics</span>
            <span class="tr-details-icon"
              ><img alt="progress icon" src="@/assets/image/icon/module/half.png"
            /></span>
          </div>
        </div>
        <div class="tbody-drop" v-if="currentModule === 1">
          <div class="drop-state">
            <span>Module Content</span>
            <span>100% Complete</span>
            <span>7/7 Steps</span>
          </div>
          <div class="drop-list">
            <span @click="sidebarItemClickHandler(1, 1, 'Introduction')"
              >- Introduction
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              @click="
                sidebarItemClickHandler(1, 2, 'People All Around Us Quit Addictions')
              "
              >- People All Around Us Quit Addictions
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span @click="sidebarItemClickHandler(1, 3, 'How Uncle Ozzie Quit Smoking?')"
              >- How Uncle Ozzie Quit Smoking?
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span @click="sidebarItemClickHandler(1, 4, 'What Is Addiction?')"
              >- What Is Addiction?
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              @click="
                sidebarItemClickHandler(1, 5, 'How Do So Many People Quit Addictions?')
              "
              >- How Do So Many People Quit Addictions?
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <!-- <span @click="sidebarItemClickHandler(1, 6, 'Addictions?')"
              >- ?
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span> -->
            <span @click="sidebarItemClickHandler(1, 6, 'Feeling Your Power')"
              >- Feeling Your Power
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span @click="sidebarItemClickHandler(1, 7, 'How to Beat Addiction')"
              >- How to Beat Addiction
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.1 - Initial Assessment
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.2 - Mood Matters
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.3 - Resources
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.4 - What I Value
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.5 - Personality
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.6 - Greater Horizons
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.7 - Plans/Goals
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.8 Skills
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
          </div>
        </div>
      </div>
      <div class="tbody-tr">
        <div class="clickable-item">
          <span class="tr-title" @click="onModuleClickHandler(2, 'Module Two - Values')">
            Module Two - Values
          </span>
          <div class="tr-details">
            <span class="tr-details-topic">11 Topics</span>
            <span class="tr-details-icon"
              ><img alt="progress icon" src="@/assets/image/icon/module/half.png"
            /></span>
          </div>
        </div>
        <div class="tbody-drop" v-if="currentModule === 2">
          <div class="drop-state">
            <span>Module Content</span>
            <span>100% Complete</span>
            <span>7/7 Steps</span>
          </div>
          <div class="drop-list">
            <span
              >- Introduction
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- People All Around Us Quit Addictions
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- How Uncle Ozzie Quit Smoking
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- What Is Addiction?
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- How Do So Many People Quit
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- Addictions?
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- Feeling Your Power
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- How to Beat Addiction
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.1 - Initial Assessment
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.2 - Mood Matters
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.3 - Resources
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.4 - What I Value
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.5 - Personality
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.6 - Greater Horizons
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.7 - Plans/Goals
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.8 Skills
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
          </div>
        </div>
      </div>
      <div class="tbody-tr">
        <div class="clickable-item">
          <span
            class="tr-title"
            @click="onModuleClickHandler(3, 'Module Three - Motivation')"
          >
            Module Three - Motivation
          </span>
          <div class="tr-details">
            <span class="tr-details-topic">13 Topics</span>
            <span class="tr-details-icon"
              ><img alt="progress icon" src="@/assets/image/icon/module/half.png"
            /></span>
          </div>
        </div>
        <div class="tbody-drop" v-if="currentModule === 3">
          <div class="drop-state">
            <span>Module Content</span>
            <span>100% Complete</span>
            <span>7/7 Steps</span>
          </div>
          <div class="drop-list">
            <span
              >- Introduction
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- People All Around Us Quit Addictions
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- How Uncle Ozzie Quit Smoking
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- What Is Addiction?
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- How Do So Many People Quit
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- Addictions?
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- Feeling Your Power
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- How to Beat Addiction
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.1 - Initial Assessment
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.2 - Mood Matters
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.3 - Resources
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.4 - What I Value
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.5 - Personality
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.6 - Greater Horizons
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.7 - Plans/Goals
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.8 Skills
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
          </div>
        </div>
      </div>
      <div class="tbody-tr">
        <div class="clickable-item">
          <span
            class="tr-title"
            @click="onModuleClickHandler(4, 'Module Four - Resources')"
          >
            Module Four - Resources
          </span>
          <div class="tr-details">
            <span class="tr-details-topic">15 Topics</span>
            <span class="tr-details-icon"
              ><img alt="progress icon" src="@/assets/image/icon/module/half.png"
            /></span>
          </div>
        </div>
        <div class="tbody-drop" v-if="currentModule === 4">
          <div class="drop-state">
            <span>Module Content</span>
            <span>100% Complete</span>
            <span>7/7 Steps</span>
          </div>
          <div class="drop-list">
            <span
              >- Introduction
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- People All Around Us Quit Addictions
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- How Uncle Ozzie Quit Smoking
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- What Is Addiction?
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- How Do So Many People Quit
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- Addictions?
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- Feeling Your Power
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- How to Beat Addiction
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.1 - Initial Assessment
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.2 - Mood Matters
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.3 - Resources
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.4 - What I Value
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.5 - Personality
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.6 - Greater Horizons
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.7 - Plans/Goals
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.8 Skills
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
          </div>
        </div>
      </div>
      <div class="tbody-tr">
        <div class="clickable-item">
          <span
            class="tr-title"
            @click="onModuleClickHandler(5, 'Module Five - Resources')"
          >
            Module Five - Resources
          </span>
          <div class="tr-details">
            <span class="tr-details-topic">15 Topics</span>
            <span class="tr-details-icon"
              ><img alt="progress icon" src="@/assets/image/icon/module/half.png"
            /></span>
          </div>
        </div>
        <div class="tbody-drop" v-if="currentModule === 5">
          <div class="drop-state">
            <span>Module Content</span>
            <span>100% Complete</span>
            <span>7/7 Steps</span>
          </div>
          <div class="drop-list">
            <span
              >- Introduction
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- People All Around Us Quit Addictions
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- How Uncle Ozzie Quit Smoking
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- What Is Addiction?
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- How Do So Many People Quit
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- Addictions?
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- Feeling Your Power
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- How to Beat Addiction
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.1 - Initial Assessment
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.2 - Mood Matters
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.3 - Resources
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.4 - What I Value
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.5 - Personality
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.6 - Greater Horizons
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.7 - Plans/Goals
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.8 Skills
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
          </div>
        </div>
      </div>
      <div class="tbody-tr">
        <div class="clickable-item">
          <span class="tr-title" @click="onModuleClickHandler(6, 'Module Six - Support')">
            Module Six - Support
          </span>
          <div class="tr-details">
            <span class="tr-details-topic">18 Topics</span>
            <span class="tr-details-icon"
              ><img alt="progress icon" src="@/assets/image/icon/module/half.png"
            /></span>
          </div>
        </div>
        <div class="tbody-drop" v-if="currentModule === 6">
          <div class="drop-state">
            <span>Module Content</span>
            <span>100% Complete</span>
            <span>7/7 Steps</span>
          </div>
          <div class="drop-list">
            <span
              >- Introduction
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- People All Around Us Quit Addictions
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- How Uncle Ozzie Quit Smoking
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- What Is Addiction?
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- How Do So Many People Quit
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- Addictions?
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- Feeling Your Power
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- How to Beat Addiction
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.1 - Initial Assessment
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.2 - Mood Matters
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.3 - Resources
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.4 - What I Value
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.5 - Personality
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.6 - Greater Horizons
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.7 - Plans/Goals
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.8 Skills
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
          </div>
        </div>
      </div>
      <div class="tbody-tr">
        <div class="clickable-item">
          <span
            class="tr-title"
            @click="onModuleClickHandler(7, 'Module Seven - Maturity')"
          >
            Module Seven - Maturity
          </span>
          <div class="tr-details">
            <span class="tr-details-topic">13 Topics</span>
            <span class="tr-details-icon"
              ><img alt="progress icon" src="@/assets/image/icon/module/half.png"
            /></span>
          </div>
        </div>
        <div class="tbody-drop" v-if="currentModule === 7">
          <div class="drop-state">
            <span>Module Content</span>
            <span>100% Complete</span>
            <span>7/7 Steps</span>
          </div>
          <div class="drop-list">
            <span
              >- Introduction
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- People All Around Us Quit Addictions
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- How Uncle Ozzie Quit Smoking
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- What Is Addiction?
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- How Do So Many People Quit
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- Addictions?
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- Feeling Your Power
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- How to Beat Addiction
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.1 - Initial Assessment
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.2 - Mood Matters
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.3 - Resources
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.4 - What I Value
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.5 - Personality
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.6 - Greater Horizons
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.7 - Plans/Goals
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.8 Skills
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
          </div>
        </div>
      </div>
      <div class="tbody-tr">
        <div class="clickable-item">
          <span
            class="tr-title"
            @click="onModuleClickHandler(8, 'Module Eight - Greater Goals')"
          >
            Module Eight - Greater Goals
          </span>
          <div class="tr-details">
            <span class="tr-details-topic">10 Topics</span>
            <span class="tr-details-icon"
              ><img alt="progress icon" src="@/assets/image/icon/module/half.png"
            /></span>
          </div>
        </div>
        <div class="tbody-drop" v-if="currentModule === 8">
          <div class="drop-state">
            <span>Module Content</span>
            <span>100% Complete</span>
            <span>7/7 Steps</span>
          </div>
          <div class="drop-list">
            <span
              >- Introduction
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- People All Around Us Quit Addictions
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- How Uncle Ozzie Quit Smoking
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- What Is Addiction?
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- How Do So Many People Quit
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- Addictions?
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- Feeling Your Power
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span
              >- How to Beat Addiction
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.1 - Initial Assessment
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.2 - Mood Matters
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.3 - Resources
              <img alt="progress icon" src="@/assets/image/icon/module/tick.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.4 - What I Value
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.5 - Personality
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.6 - Greater Horizons
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.7 - Plans/Goals
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
            <span class="drop-exercise"
              >Exercise 1.8 Skills
              <img alt="progress icon" src="@/assets/image/icon/module/empty.png"
            /></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModuleSidebarComponent",
  data() {
    return {};
  },
  methods: {
    onModuleClickHandler(num, title) {
      this.$store.dispatch("setCurrentModule", { id: num, title: title });
      this.$store.dispatch("setCurrentContent", { mId: 0, id: 0, title: "" });
    },
    sidebarItemClickHandler(mId, id, title) {
      this.$store.dispatch("setCurrentContent", { mId: mId, id: id, title: title });
    },
  },
  computed: {
    currentModule() {
      return this.$store.state.breadcrumb.module.id;
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sidebar-title {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.sidebar-title > h3 {
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #666666;
}
.sidebar-title > span {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #666666;
}
.progress {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 40px;
  gap: 30px;
}
.progress-desc {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.perentage {
  position: relative;
  width: 100%;
  height: 3px;
  background-color: #e7e9ec;
}
.perentage .done {
  position: absolute;
  top: 0;
  left: 0;
  width: 6%;
  height: 3px;
  background-color: #73a1db;
}
.module-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 110px;
  width: 100%;
  gap: 9px;
}
.tbody-tr {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: #f5f6f9;
}
.tbody-tr .clickable-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
}
.tr-title {
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
}
.tr-title:hover {
  color: #357af6;
  cursor: pointer;
}
.tr-details {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.tr-details-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.tbody-drop {
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
.tbody-drop .drop-state {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 25px 25px 0 25px;
}
.drop-state > span:nth-child(1) {
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #666666;
}
.drop-state > span:nth-child(2) {
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #0a66aa;
}
.drop-state > span:nth-child(3) {
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #939597;
}
.tbody-drop .drop-list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  width: 100%;
}
.drop-list > span {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
}
.drop-list > span:hover {
  cursor: pointer;
  background-color: #f7f7f7;
  color: #357af6;
}
</style>
