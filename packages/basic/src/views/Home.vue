<template>
  <div class="home">
    <h1>我是基座的首页</h1>
    <div @click="to">去tabClient页面</div>
  </div>
</template>
<script setup>


import {useRouter} from "vue-router";
let router = useRouter()
const to = () => {
  router.replace('/tabClient/list')
}
</script>
