<script lang="ts" setup>
import Footer from "@/components/footer.vue";
import { ref } from "vue";

const result = ref("这里将输出结果");

const handleAlert = () => {
  alert("这是一个 Alert 弹窗");
  result.value = "点击了 Alert 弹窗";
};

const handleConfirm = () => {
  let ok = confirm("这是一个 Confirm 弹窗");
  result.value = ok
    ? "点击了 Confirm 弹窗的确定按钮"
    : "点击了 Confirm 弹窗的取消按钮";
};

const handlePrompt = () => {
  let input = prompt("这是一个 Prompt 弹窗", "默认值");
  result.value = input
    ? `点击了 Prompt 弹窗的确定按钮，输入的内容是：${input}`
    : "点击了 Prompt 弹窗的取消按钮";
};
</script>

<template>
  <div class="dialog-container">
    <div class="dialog-content">
        <h2>弹窗</h2>
      <input
        type="button"
        value="Alert 弹窗"
        class="dialog-button"
        name="alert"
        id="alert"
        @click="handleAlert"
      />
      <input
        type="button"
        value="Confirm 弹窗"
        class="dialog-button"
        name="confirm"
        id="confirm"
        @click="handleConfirm"
      />
      <input
        type="button"
        value="Prompt 弹窗"
        class="dialog-button"
        name="prompt"
        id="prompt"
        @click="handlePrompt"
      />
      <p class="result" id="result">{{ result }}</p>
    </div>
  </div>
  <Footer />
</template>

<style>
.dialog-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  min-height: 70vh;
}

.dialog-content {
  width: clamp(200px, 50%, 400px);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
