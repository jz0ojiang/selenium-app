<template>
  <footer>
    <p>Selenium 测试用网页 - 教程地址：<a href="https://blog.im0o.top/posts/9fd7e7bd.html#%E8%87%AA%E5%8A%A8%E5%8C%96%E6%B5%8B%E8%AF%95">软件测试专题</a></p>
    <p v-if="ishome()">Icon from：野狼好朋友 @magpie</p>
    <RouterLink v-else to="/">返回首页</RouterLink>
  </footer>
</template>

<script setup lang="ts">
const ishome = () => {
  return window.location.pathname === '/';
}
</script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  min-height: 2.5rem;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
footer a {
  color: #2222b4;
  text-decoration: none;
}
</style>