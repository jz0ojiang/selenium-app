<script lang="ts" setup>
import Footer from '@/components/footer.vue';
import { ref } from 'vue';

const e2_block_click = ref("Click me!")

var timer = 0

const clickHandler = () => {
  e2_block_click.value = "Clicked!"
  // 重置上一个计时器
  clearTimeout(timer)

  timer = setTimeout(() => {
    e2_block_click.value = "Click me!"
  }, 5000);
}

</script>

<template>
  <div class="e2-container">
    <div class="e2-block-hover" id="e2-block-hover" name="e2-block-hover">
      Hover me!
    </div>
    <div class="e2-block-click" id="e2-block-click" name="e2-block-click" @click="clickHandler">
      {{ e2_block_click }}
    </div>
  </div>
  <Footer />
</template>

<style>
.e2-container {
  display: flex;
  width: 50%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;
  min-height: 70vh;
}

.e2-block-hover {
  width: 200px;
  height: 200px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #EE0000;
    color: #fff;
  }
}

.e2-block-click {
  width: 200px;
  height: 200px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:active {
    background-color: #0073EE;
    color: #fff;
  }
}

label {
  margin-right: 10px;
}
</style>
