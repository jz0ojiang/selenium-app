<script lang="ts" setup>
import Footer from "@/components/footer.vue";
import { ref } from "vue";

const e5_2_block_click = ref("Click me!");

var timer = 0;

const clickHandler = () => {
  e5_2_block_click.value = "Clicked!";
  // 重置上一个计时器
  clearTimeout(timer);

  timer = setTimeout(() => {
    e5_2_block_click.value = "Click me!";
  }, 5000);
};

const e5_2_block_dbclick = ref("Double Click me!");

var timer_2 = 0;
const dbclickHandler = () => {
  e5_2_block_dbclick.value = "Double clicked!";
  // 重置上一个计时器
  clearTimeout(timer_2);
  console.log(1);
  timer_2 = setTimeout(() => {
    e5_2_block_dbclick.value = "Double Click me!";
  }, 5000);
};


const dragX = ref(0);
const dragY = ref(0);
const clientX = ref(0);
const clientY = ref(0);
const clientDisplay = ref('block');

const dragStartHandler = (e: DragEvent) => {
  // 获取鼠标位置
  dragX.value = e.screenX;
  dragY.value = e.screenY;
};

const dragHandler = (e: DragEvent) => {
  clientDisplay.value = 'none'
};

const dragEndHandler = (e: DragEvent) => { 
  // 获取鼠标位置，与 dragStartHandler 中的位置相减得到偏移量
  clientX.value += e.screenX - dragX.value;
  clientY.value += e.screenY - dragY.value;
  clientDisplay.value = 'block'
  dragX.value = 0;
  dragY.value = 0;

};
</script>

<template>
  <div class="e5_2-container">
    <div
      class="e5_2-block-hover e5_2-disable-select"
      id="e5_2-block-hover"
      name="e5_2-block-hover"
    >
      Hover me!
    </div>
    <div
      class="e5_2-block-click e5_2-disable-select"
      id="e5_2-block-click"
      name="e5_2-block-click"
      @click="clickHandler"
    >
      {{ e5_2_block_click }}
    </div>
    <div
      class="e5_2-block-doubleclick e5_2-disable-select"
      id="e5_2-block-doubleclick"
      name="e5_2-block-doubleclick"
      @dblclick="dbclickHandler"
    >
      {{ e5_2_block_dbclick }}
    </div>
    <div
      class="e5_2-block-drag"
      id="e5_2-block-drag"
      name="e5_2-block-drag"
      draggable="true"
      @dragstart="dragStartHandler"
      @drag="dragHandler"
      @dragend="dragEndHandler"
      :style="`transform: translate(${clientX}px, ${clientY}px)`"
    >
      Drag me!
    </div>
  </div>
  <Footer />
</template>

<style>
.e5_2-disable-select {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.e5_2-container {
  display: grid;
  width: 50%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(3, 1fr);
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
    background-color: #ee0000;
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
    background-color: #0073ee;
    color: #fff;
  }
}

.e5_2-block-doubleclick {
  width: 200px;
  height: 200px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:active {
    background-color: #00eeee;
    color: #fff;
  }
}

.e5_2-block-drag {
  position: fixed;
  width: 200px;
  height: 200px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  bottom: 100px;
  left: calc(50% - 100px);
  z-index: 1;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  &:active {
    background-color: #b600ee;
    color: #fff;
  }
}

label {
  margin-right: 10px;
}
</style>
