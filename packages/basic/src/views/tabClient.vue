<template>
  <div class="nav">
    <span @click="active = 'site-one'">应用1</span
    ><span @click="active = 'site-two'">应用2</span>
  </div>
  <template v-for="tab in tabs" :key="tab.appName">
    <micro-app
      v-show="active === tab.appName"
      :name="tab.appName"
      :url="tab.url"
      baseroute="/tabClient"
      :data="microAppData"
    ></micro-app>
  </template>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

let router = useRouter();

let tabs = ref([
  { title: "应用1", appName: "site-one", url: "http://localhost:3010/" },
  { title: "应用2", appName: "site-two", url: "http://localhost:3020/" },
]);
let active = ref("site-one");

const microAppData = ref({
  changeRoute: ({ type, path, query }) => {
    switch (type) {
      case "replace":
        router.replace({ path, query });
        break;
      default: {
        router.push({ path, query });
      }
    }
  },
});
</script>
<style lang="less">
.nav {
  span {
    cursor: pointer;
  }
  span:nth-child(1) {
    margin-right: 20px;
  }
}
</style>
