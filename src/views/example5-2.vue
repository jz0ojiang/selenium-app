<script lang="ts" setup>
import Footer from '@/components/footer.vue';
import { ref } from 'vue';

const e5_2_block_click = ref("Click me!")

var timer = 0

const clickHandler = () => {
  e5_2_block_click.value = "Clicked!"
  // 重置上一个计时器
  clearTimeout(timer)

  timer = setTimeout(() => {
    e5_2_block_click.value = "Click me!"
  }, 5000);
}

</script>

<template>
  <div class="e5_2-container">
    <div class="e5_2-block-hover" id="e5_2-block-hover" name="e5_2-block-hover">
      Hover me!
    </div>
    <div class="e5_2-block-click" id="e5_2-block-click" name="e5_2-block-click" @click="clickHandler">
      {{ e5_2_block_click }}
    </div>
  </div>
  <Footer />
</template>

<style>
.e5_2-container {
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

.e5_2-block-hover {
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

.e5_2-block-click {
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
