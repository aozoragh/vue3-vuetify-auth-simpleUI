<template>
  <div class="body">
    <div class="module-sidebar"><Sidebar /></div>
    <div class="module-body">
      <div class="breadcrumbs">
        <v-breadcrumbs :items="getBreadcrumbs"></v-breadcrumbs>
      </div>
      <div class="module-state" v-if="isModule">
        <span class="current-module">MODULE {{ currentModuleId }}</span> of 8
      </div>
      <div class="module-state" v-if="!isModule">
        <span class="current-module">MODULE {{ currentModuleId }},</span> TOPIC
        {{ currentContentId }}
      </div>
      <div class="module-content">
        <component :is="ModuleComponent" v-if="isModule" />
        <component :is="ContentComponent" v-if="!isModule" />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/templates/ModuleSidebar/sidebar.vue";
// modules
import ModuleOne from "@/views/modules/One/one.vue";
// contents
import IntroComponent1 from "@/views/modules/One/Content/Intro.vue";
import AddictionComponent1 from "@/views/modules/One/Content/Addiction.vue";
import BeatAddictionComponent1 from "@/views/modules/One/Content/BeatAddiction.vue";
import PeopleComponent1 from "@/views/modules/One/Content/People.vue";
import Power1 from "@/views/modules/One/Content/Power.vue";
import QuitAddictionComponent1 from "@/views/modules/One/Content/QuitAddiction.vue";
import SmokingComponent1 from "@/views/modules/One/Content/Smoking.vue";

export default {
  name: "ModulePage",
  components: {
    Sidebar,
    ModuleOne,
    IntroComponent1,
    AddictionComponent1,
    BeatAddictionComponent1,
    PeopleComponent1,
    Power1,
    QuitAddictionComponent1,
    SmokingComponent1,
  },
  data() {
    return {
      contents: [
        IntroComponent1,
        PeopleComponent1,
        SmokingComponent1,
        AddictionComponent1,
        QuitAddictionComponent1,
        Power1,
        BeatAddictionComponent1,
      ],
    };
  },
  computed: {
    ModuleComponent() {
      return "ModuleOne";
    },
    ContentComponent() {
      const _content = this.$store.state.breadcrumb.content.id;
      return this.contents[_content - 1];
    },
    getBreadcrumbs() {
      const _module = this.$store.state.breadcrumb.module.title;
      const _content = this.$store.state.breadcrumb.content.title;
      console.log("module: ", _module);
      console.log("content: ", _content);
      return _content !== "" && _module !== ""
        ? ["Welcome To The Life Process Program", _module, _content]
        : _module !== "" && _content === ""
        ? ["Welcome To The Life Process Program", _module]
        : ["Welcome To The Life Process Program"];
    },
    currentModuleId() {
      return this.$store.state.breadcrumb.module.id;
    },
    currentContentTitle() {
      return this.$store.state.breadcrumb.content.title;
    },
    currentContentId() {
      return this.$store.state.breadcrumb.content.id;
    },
    isModule() {
      const _content = this.$store.state.breadcrumb.content.title;
      return _content === "";
    },
  },
};
</script>

<style scoped>
.body {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.module-sidebar {
  width: 500px;
}
.module-body {
  width: calc(100% - 500px);
  background-color: #fff;
  padding: 20px 50px;

  padding-right: calc((100vw - 1400px) / 2);
}
.breadcrumbs {
  border-bottom: 1px solid #ebebeb;
}
.module-state {
  color: #666666;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  padding: 20px;
}
.current-module {
  color: #0a66aa;
}
.module-content {
  padding: 20px;
}
</style>
