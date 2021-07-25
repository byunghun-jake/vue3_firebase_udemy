<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar"
export default {
  components: { Navbar },
  setup() {},
}
</script>

<style lang="scss">
body {
  @apply bg-gray-200;
}
</style>
