<style scoped>

.button {
  @apply bg-gray-600 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-full text-lg grid place-items-center left-3 text-amber-400 z-50 mb-2;
  height: 40px;
  width: 40px;
} 

</style>>

<template>
  <audio ref="audioEl" autoplay>
    <source src="@/assets/audio/backsound.mp3" type="audio/mp3">
  </audio>
  <section class="fixed bottom-24 pl-2"  style="z-index: 999999999;">
    <button class="button" @click="control">
      <i v-if="!isPlayed" class="fa-solid fa-volume-off"></i>
      <i v-else class="fa-solid fa-volume-high"></i>
    </button>
  </section>
</template>

<script setup>

import { ref, computed, watch } from 'vue'
import { useState } from '@/stores/state.js'

const state = useState()

const audioEl = ref(null)
const isPlayed = ref(true)

const isAudioPlay = computed(() => state.isAudioPlay)

const audioClick = () => isPlayed.value = !isPlayed.value
const audioAction = () => isPlayed.value ? audioEl.value.play() : audioEl.value.pause()

const control = () => {
  audioClick()
  audioAction()
}
audioClick()
watch(isAudioPlay, control)

</script>
