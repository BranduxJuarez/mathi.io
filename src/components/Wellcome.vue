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

.esquinaIzquierda12 {
  display: none !important;
}
.esquinaIzquierda123 {
  display: none !important;
}

@media only screen and (max-width: 600px) {
  /* For tablets: */
  .superiorIzquierda {
    width: 30% !important;
    left: 2rem;
    display: none;
  }

  .superiorDerecha {
    width: 60% !important;
  }

  .esquinaDerecha {
    width: 80% !important;
    width: 66% !important;
    /* top: 496px 
    animation: run 12s linear infinite alternate;
    */
    animation: run 15s linear infinite ;
    right: -19%;
  }
  .esquinaIzquierda {
      width: 84% !important;
      top: 0px;
      rotate: 10px;
      transform: scaleY(-1);
  }

  .esquinaIzquierda12 {
    display: block !important;
    width: 100%;
  }

  .esquinaIzquierda123 {
    display: block !important;
    width: 100%;
    transform: scaleX(-1);
  }
}

.box-canvas{
  position: relative;
  margin: auto;
  display: block;
  margin-bottom: 8%;
  width: 230px;
  height:600px;
  animation: floatUp 5s infinite linear;
  z-index: 99999999999
}
.botonClick {
  animation: 1.3s botonClick infinite
}


@keyframes botonClick {
  20% {
    transform: perspective(200px) translateZ(50px) 
  }
}
@keyframes floatUp {
  0% {
    transform: translateY(100vh);
  }
  
  100% {
    transform: translateY(-480px);
  }
}
@keyframes run{
    0% { 
      transform: translateX(0px) rotate(-90deg);
    }
     100% { 
      transform: translateY(-1000px) rotate(-90deg);
    }  
}





.red {
  --balloon-color: var(--red);
  --highlight-color: #FC9999;
  --top-initial: 40px;
  --string-angle: -20deg;
}

.yellow {
  --balloon-color: #F2F24B;
  --highlight-color: #E5E570;
  --top-initial: 80px;
  --left-initial: 50px;
  --string-angle: -8deg;
}

.green {
  --balloon-color: var(--green);
  --highlight-color: #BAD6D3;
  --top-initial: 0;
  --left-initial: 80px;
  --string-angle: 1deg;
}

.blue {
  --balloon-color: dodgerblue;
  --highlight-color: #6AB5FC;
  --left-initial: 100px;
  --top-initial: 110px;
  --string-angle: 10deg;
}

.orange {
  --balloon-color: orange;
  --highlight-color: #F9B94A;
  --left-initial: 140px;
  --top-initial: 50px;
  --string-angle: 18deg;
}

.balloon-wrapper {
  position: absolute;
  left: var(--left-initial);
  top: var(--top-initial);
  width: 85px;
}

.string {
  position: absolute;
  top: 110px;
  left: 42px;
  transform: rotate(var(--string-angle));
  transform-origin: top left;
  width: 2px;
  height: 250px;
  background: #50535E;
}

.balloon {
  position: absolute;
  width: 85px;
  height: 100px;
  background: var(--balloon-color);
  border-radius: 50%;
}

.balloon::before {
  content: '';
  position: absolute;
  right: 20px;
  top: 15px;
  width: 15px;
  height: 35px;
  box-shadow: 5px 0 0 var(--highlight-color);
  border-radius: 50%;
  transform: rotate(-30deg);
}

.balloon::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -15px;
  width: 25px;
  height: 20px;
  background: var(--balloon-color);
  clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
}
</style>
<template>
    
    <!-- <div class="box-canvas">
      <div class="balloon-wrapper orange">
        <div class="string"></div>
        <div class="balloon"></div>
      </div>
      <div class="balloon-wrapper blue">
        <div class="string"></div>
        <div class="balloon"></div>
      </div>
      <div class="balloon-wrapper yellow">
        <div class="string"></div>
        <div class="balloon"></div>
      </div>
    </div> -->

  <section  class="w-full h-screen bg-slate-100 min-h-screen fixed inset-0 grid place-items-center z-50 bg-texture bg-cover">
    <!-- Frames -->
    <img class="frame top-0 left-0 animate__animated animate__fadeInLeft superiorIzquierda" src="@/assets/images/frame-mirror.png" alt="frame" >
    <img class="frame top-0 right-0 animate__animated animate__fadeInRight superiorDerecha" src="@/assets/images/frame.png" alt="frame">
    <img class="frame bottom-0 right-0 esquinaDerecha" src="@/assets/images/INFERIORDERECHA.png" alt="frame">
    <img class="frame bottom-0 left-0 esquinaIzquierda" src="@/assets/images/INFERIORIZQUIERDA.png" alt="frame">
    
    <img class="frame bottom-0 left-0 esquinaIzquierda12" src="@/assets/images/INFERIORIZQUIERDA.png" alt="frame">
    <img class="frame bottom-0 left-0 esquinaIzquierda123" src="@/assets/images/INFERIORIZQUIERDA.png" alt="frame">
    <!-- Frames -->
    <!-- Wedding couple -->
    <div class="w-6/12 text-center text-xs md:text-lg lg:text-xl contenido">
      <!-- Decoration -->
      <img src="@/assets/images/decoration-asset-1.png" class="animate__animated animate__swing w-10/12 md:w-8/12 mx-auto">
      
      <div class="mt-5 animate__animated animate__zoomInUp">
        <p>{{ weddingDate }}</p>
        <h1 class="satisfy-font text-5xl lg:text-6xl my-4 text-green-600" style="color: #1b2937">{{ couples.join(' & ') }}</h1>
        <p>
            Deseamos compartir contigo la inmensa alegría de su llegada. 
            <br>
            Únetenos en un Baby Shower especial para celebrar este momento único.
            <br>
            <b>¡No faltes!</b>
        </p> 
        
       <!-- CTA -->
        <button 
          type="buton" 
          @click="openInvitation"
          class="botonClick w-10/12 md:w-8/12 text-sm md-text-lg mt-12 font-medium z-50 border border-blue-500 text-blue-500 bg-light p-2 rounded-full pointer active:scale-90 hover:bg-blue-500 hover:text-gray-100 duration-300">
          <span>🎉</span>
          Descarga tu invitación
       </button>
       <canvas id="canvas" style="z-index: 99999999"></canvas>
       <!-- CTA -->
      </div>
    </div>
    <!-- Wedding couple -->
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { watch } from 'vue'
import { useState } from '@/stores/state.js'
import confetti  from "canvas-confetti/src/confetti.js";
const state = useState()
const couples = ref(['Soy Mathías'])
const weddingDate = ref('Noviembre, 11 del 2023')

const openInvitation = () => {
  debugger
  const urlPDF = 'https://drive.google.com/uc?export=download&id=16qKin6sAmtPkO2ESZJrhNgGzAh1_Swkg';
  window.open(urlPDF, '_blank');
  confetti({
    particleCount: 500,
    spread: 100,
    origin: { y: 0.6 }
  });
}

</script>
