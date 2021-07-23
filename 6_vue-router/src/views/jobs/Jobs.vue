<template>
  <h1>JOBS</h1>
  <div v-if="!jobs.length">
    직업이 없어요!
  </div>
  <ul class="job" v-else>
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
    const jobs = ref([])

    const getJobs = async () => {
      try {
        const res = await fetch("http://localhost:3000/jobs")
        const parsedRes = await res.json()
        jobs.value = parsedRes
      } catch (error) {
        console.log(error.message)
      }
    }
    getJobs()

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
