<template>
  <h1>Modal을 테스트해볼거예용</h1>
  <button @click="showModal = true">modal 호출!</button>
  <teleport v-if="showModal" to=".modals">
    <TheModal @closeModal="showModal = false">
      <template v-slot:header>
        <span>고생하셨습니다!</span>
      </template>
      <template v-slot>
        <span>오늘 업무는 어떠셨나요?</span>
      </template>
      <template v-slot:footer>
        <button @click="showModal = false">😥</button>
        <button @click="showModal = false">😀</button>
        <button @click="showModal = false">😍</button>
      </template>
    </TheModal>
  </teleport>
</template>

<script>
import TheModal from "@/components/TheModal.vue"
import { ref } from "@vue/reactivity"

export default {
  name: "App",
  components: {
    TheModal,
  },
  setup() {
    const showModal = ref(false)
    return { showModal }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

* {
  box-sizing: border-box;
}
</style>
