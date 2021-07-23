<template>
  <h1>JOBS</h1>
  <ul class="job">
    <li v-for="job in jobs" :key="job.id">
      <router-link
        :to="{
          name: 'JobDetails',
          params: {
            jobId: job.id,
          },
        }"
      >
        <h2>{{ job.title }}</h2>
      </router-link>
    </li>
  </ul>
  <router-view />
</template>

<script>
import { ref } from "@vue/reactivity"
export default {
  name: "Jobs",
  setup() {
    const jobs = ref([
      {
        title: "UX Designer",
        id: 1,
        details: "lorem",
      },
      {
        title: "UX Web Developer",
        id: 2,
        details: "lorem",
      },
      {
        title: "UX Vue Developer",
        id: 3,
        details: "lorem",
      },
    ])
    return {
      jobs,
    }
  },
}
</script>

<style scoped lang="scss">
.job {
  list-style: none;
  a {
    text-decoration: none;

    &.router-link-exact-active h2 {
      background: lightseagreen;
    }

    h2 {
      background: #f4f4f4;
      padding: 16px;
      border-radius: 8px;
      margin: 8px auto;
      max-width: 600px;
      cursor: pointer;
      color: #444;

      &:hover {
        background: seagreen;
      }
    }
  }
}
</style>
