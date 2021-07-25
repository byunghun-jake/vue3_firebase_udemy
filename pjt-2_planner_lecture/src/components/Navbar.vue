<template>
  <nav class="main-nav">
    <router-link :to="{ name: 'Home' }">Projects</router-link>
    <router-link :to="{ name: 'AddProject' }">AddProject</router-link>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
}
</script>

<style scoped lang="scss">
.main-nav {
  @apply p-4 bg-gray-100 mb-10 flex justify-center;

  a {
    @apply py-2 mx-2 inline-block border-b-4 border-transparent text-gray-500;

    &.router-link-active {
      @apply border-green-400;
    }
  }
}
</style>
