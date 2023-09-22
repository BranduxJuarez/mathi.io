<style scoped>
.frame {
  @apply absolute w-6/12 md:w-4/12 z-0;
}

@keyframes backOutUp-custom {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  20% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translateY(-700px) scale(0.7);
    transform: translateY(-100%) scale(0.7);
    opacity: 0.7;
  }
}
.close-page {
  animation: backOutUp-custom .5s 1s forwards;
}

.superiorIzquierda {
  width: 20% !important;
  left: 2rem;
  top: 1rem;
}
.superiorDerecha {
width: 35% !important;
}
.esquinaIzquierda {
width: 50% !important;

}

@media only screen and (max-width: 600px) {
  /* For tablets: */
  .superiorIzquierda {
    width: 30% !important;
  left: 2rem;

  }

  .superiorDerecha {
    width: 60% !important;
  }

  .esquinaDerecha {
  width: 80% !important;

  }
}
</style>
<template>
  <section  class="w-full h-screen bg-slate-100 min-h-screen fixed inset-0 grid place-items-center z-50 bg-texture bg-cover">
    <!-- Frames -->
    <img class="frame top-0 left-0 animate__animated animate__fadeInLeft superiorIzquierda" src="@/assets/images/frame-mirror.png" alt="frame" >
    <img class="frame top-0 right-0 animate__animated animate__fadeInRight superiorDerecha" src="@/assets/images/frame.png" alt="frame">
    <img class="frame bottom-0 right-0 esquinaDerecha" src="@/assets/images/INFERIORDERECHA.png" alt="frame">
    <img class="frame bottom-0 left-0 esquinaIzquierda" src="@/assets/images/INFERIORIZQUIERDA.png" alt="frame">
    <!-- Frames -->
    <!-- Wedding couple -->
    <div class="w-6/12 text-center text-xs md:text-lg lg:text-xl">
      <!-- Decoration -->
      <img src="@/assets/images/decoration-asset-1.png" class="animate__animated animate__swing w-10/12 md:w-8/12 mx-auto">
      
      <div class="mt-5 animate__animated animate__zoomInUp">
        <p>{{ weddingDate }}</p>
        <h1 class="satisfy-font text-5xl lg:text-6xl my-4 text-green-600" style="color: #1b2937">{{ couples.join(' & ') }}</h1>
        <p>
          Deseamos compartir contigo la inmesa alegria de su llegada
          <br><b>¡No faltes!</b>
        </p> 
        
       <!-- CTA -->
        <button 
          type="buton" 
          @click="openInvitation"
          class="w-10/12 md:w-8/12 text-sm md-text-lg mt-12 font-medium z-50 border border-blue-500 text-blue-500 bg-light p-2 rounded-full pointer active:scale-90 hover:bg-blue-500 hover:text-gray-100 duration-300">
          <i class="fa-solid fa-book-open mr-1"></i>
         Descargar Invitación
       </button>
       <!-- CTA -->
      </div>
    </div>
    <!-- Wedding couple -->
    </section>
</template>

<script setup>

import { ref } from 'vue'
import { watch } from 'vue'
import { computed } from 'vue'
import { useState } from '@/stores/state.js'
import { useRouter } from 'vue-router'
const state = useState()
const couples = ref(['Soy Mathías'])
const weddingDate = ref('Noviembre, 11 del 2023')

const openInvitation = () => {
  console.log('aaaaaa')
}
</script>
