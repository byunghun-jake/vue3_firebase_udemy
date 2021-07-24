<template>
  <nav>
    <router-link :to="{ name: 'Home' }">Projects</router-link>
    <router-link :to="{ name: 'AddProject' }">Add a New Project</router-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
}
</script>

<style scoped lang="scss">
nav {
  @apply flex items-center justify-center py-10;
  a {
    @apply py-1 px-2 mx-2 border-b-4 border-transparent text-gray-500;

    &.router-link-exact-active {
      @apply border-green-400;
    }
  }
}
</style>
