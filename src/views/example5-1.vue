<script lang="ts" setup>
import Footer from '@/components/footer.vue';
import { ref } from 'vue';

const e5Input = ref('');

const e5Output = ref('Type something in the input box.')

const e5InputHandler = (e: Event) => {
  e5Input.value = (e.target as HTMLInputElement).value;
  e5Output.value = e5Input.value ? `You typed: ${e5Input.value}` : 'Type something in the input box.';
};
</script>

<template>
  <div class="e5-container">
    <p>{{ e5Output }}</p>
    <input type="text" id="e5-Input" name="e5-Input" :value="e5Input" @input="e5InputHandler" maxlength="50">
  </div>
  <Footer />
</template>

<style>
.e5-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  min-height: 70vh;
}

#e5-Input {
    width: clamp(200px, 50%, 400px);
}
</style>
