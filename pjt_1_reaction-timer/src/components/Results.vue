<template>
  <h3>ReactionTime: {{ reactionTime }}</h3>
</template>

<script>
export default {
  name: "Results",
  props: {
    reactionTime: {
      type: Number,
    },
  },
}
</script>

<style></style>
