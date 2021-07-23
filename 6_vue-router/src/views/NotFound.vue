<template>
  <h2>404</h2>
  <h3>"{{ catchAll }}" Page not found</h3>
</template>

<script>
import { ref } from "vue"
export default {
  name: "NotFound",
  props: {
    catchAll: {
      type: String,
    },
  },
}
</script>

<style></style>
