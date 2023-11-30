<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <RouterLink to="/">主页</RouterLink> |
      <RouterLink to="/e1">Page1</RouterLink> |
      <RouterLink to="/e2">Page2</RouterLink> |
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  gap: 10px;
  a {
    color: #000;
    text-decoration: none;
    &:hover {
      color: #f00;
    }
  }
}
</style>
