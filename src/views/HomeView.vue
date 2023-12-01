<script setup lang="ts">
import SearchBox from '@/components/SearchBox.vue';
import Footer from '@/components/footer.vue';


</script>

<template>
  <div class="home-container">
    <div class="home-col"></div>
    <div class="home-content">
      <img src="/logo.png" class="home-logo" />
      <h1 name="title" id="home-title" class="home-title">自动化测试：Selenium</h1>
      <SearchBox />
    </div>
  </div>
  
  <Footer />
</template>

<style lang="scss">
.home-container {
  display: grid;
  font-size: 1.5rem;
  font-weight: bold;
  height: 100vh;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  grid-template-rows: 1fr 4fr;
}
.home-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.home-logo {
  height: 4em;
  pointer-events: none;
  border-radius: 6px;
}
h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 1rem;
}
</style>