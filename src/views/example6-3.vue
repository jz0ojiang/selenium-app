<script lang="ts" setup>
import Footer from '@/components/footer.vue';
import { ref } from 'vue';

const show = ref(false)
var sec = ref(0)

var timer = setInterval(() => {
  sec.value++
  if (sec.value >= 5) {
    show.value = true
    clearInterval(timer)
  }
}, 1000)
</script>

<template>
  <div class="e6-container">
    <h1 name="e6-timer" id="e6-timer" class="e6-timer" >{{ sec }}</h1>
    <h2 name="e6-result" id="e6-result" class="e6-result" v-if="show">加载完毕</h2>
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
