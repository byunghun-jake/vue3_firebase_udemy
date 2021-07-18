<template>
  <h1>Reaction Timer</h1>
  <button @click="startGame" :disabled="isPlaying">시작</button>
  <Block v-if="isPlaying" :delay="delay" @endGame="endGame" />
  <Results v-if="!isPlaying && score" :score="score" />
</template>

<script>
import { ref } from "@vue/reactivity"
import Block from "@/components/Block.vue"
import Results from "@/components/Results.vue"
export default {
  name: "App",
  components: { Block, Results },
  setup() {
    const isPlaying = ref(false)
    const delay = ref(null)
    const score = ref(0)
    const startGame = () => {
      isPlaying.value = true
      delay.value = Math.floor(Math.random() * 5000) + 2000
    }

    const endGame = (time) => {
      score.value = time
      isPlaying.value = false
    }

    return { isPlaying, delay, startGame, score, endGame }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>
