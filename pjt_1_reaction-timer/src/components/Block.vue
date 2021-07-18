<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
    여기를 클릭하세요!
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated, ref } from "vue"
export default {
  name: "Block",
  props: {
    delay: {
      type: Number,
      required: true,
    },
  },
  emits: ["endGame"],
  setup(props, { emit }) {
    const showBlock = ref(false)
    const timer = ref(null)
    const reactionTime = ref(0)

    const startTimer = () => {
      timer.value = setInterval(() => {
        reactionTime.value += 10
      }, 10)
    }

    const stopTimer = () => {
      clearInterval(timer.value)
      console.log(reactionTime.value)
      emit("endGame", reactionTime.value)
    }

    onMounted(() => {
      setTimeout(() => {
        showBlock.value = true
        console.log(`delay: ${props.delay}`)
      }, props.delay)
    })
    onUpdated(() => {
      console.log("onUpdated!")
      startTimer()
    })
    onUnmounted(() => {
      console.log("onUnmounted")
    })
    return {
      showBlock,
      timer,
      reactionTime,
      stopTimer,
    }
  },
}
</script>

<style scoped>
.block {
  width: 400px;
  border-radius: 16px;
  background: #0faf87;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
  user-select: none;
  cursor: pointer;
}
</style>
