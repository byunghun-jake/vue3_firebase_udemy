<template>
  <h3>ReactionTime: {{ score }} ms</h3>
  <p>{{ score < 500 ? "Excelent" : "Normal" }}</p>
  <hr />
  <h4>Rank</h4>
  <ul>
    <li v-for="s in rank" :key="s[1]">
      {{ s[0] }}
    </li>
  </ul>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, ref } from "vue"
export default {
  name: "Results",
  props: {
    score: {
      type: Number,
    },
  },
  setup(props) {
    const rank = ref([])
    rank.value.push([props.score, Date.now()])

    onBeforeMount(() => {
      const storedRank = localStorage.getItem("rank")
      console.log(storedRank)
      if (storedRank) {
        rank.value.push(...JSON.parse(storedRank))
        rank.value.sort((a, b) => a[0] - b[0])
      }
    })

    onBeforeUnmount(() => {
      localStorage.setItem("rank", JSON.stringify(rank.value))
    })

    return { rank }
  },
}
</script>

<style scoped>
p {
  font-size: 1.25rem;
  color: green;
  font-weight: bold;
}
</style>
