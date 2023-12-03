<script lang="ts" setup>
import Footer from '@/components/footer.vue';

</script>

<template>
  <div class="e6-container">
    <h1>跳转前的页面</h1>
    <a href="/example6-2" target="_blank">跳转链接</a>
  </div>
  <Footer />
</template>

<style>
.e6-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  min-height: 70vh;
}

</style>
