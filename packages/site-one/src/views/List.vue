<template>
  <div class="about">
    <h1>This is an site-one List page</h1>
    <div @click="toFilter">去site-one的筛选页</div>
  </div>
</template>
<script setup>
const toFilter = () => {
  console.log(
    window?.microApp.getData().changeRoute({
      path: "/site-one/filter",
    })
  );
};
</script>
