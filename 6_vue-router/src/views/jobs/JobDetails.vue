<template>
  <div v-if="loading">
    데이터를 불러오는 중입니다.
  </div>
  <div v-else>
    <h1>{{ job.title }}</h1>
    <p>Job Detail: {{ job.details }}</p>
    <p>The job id is {{ jobId }}</p>
  </div>
</template>

<script>
import { ref } from "vue"
export default {
  name: "JobDetails",
  props: {
    jobId: {
      type: [Number, String],
    },
  },
  setup(props) {
    const job = ref(null)
    const loading = ref(true)
    const getJobDetail = async () => {
      const res = await fetch(`http://localhost:3000/jobs/${props.jobId}`)
      const parsedRes = await res.json()
      job.value = parsedRes
      loading.value = false
    }
    getJobDetail()
    return { job, loading }
  },
}
</script>

<style></style>
