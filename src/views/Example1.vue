<script lang="ts" setup>
import Footer from '@/components/footer.vue';
import { ref } from 'vue';

const e1Input = ref('');

const e1Output = ref('Type something in the input box.')

const e1InputHandler = (e: Event) => {
  e1Input.value = (e.target as HTMLInputElement).value;
  e1Output.value = e1Input.value ? `You typed: ${e1Input.value}` : 'Type something in the input box.';
};
</script>

<template>
  <div class="e1-container">
    <p>{{ e1Output }}</p>
    <input type="text" id="e1-Input" name="e1-Input" :value="e1Input" @input="e1InputHandler">
  </div>
  <Footer />
</template>

<style>
.e1-container {
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
