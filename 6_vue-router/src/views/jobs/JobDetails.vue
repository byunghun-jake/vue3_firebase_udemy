<template>
  <h1>JobDetails</h1>
  <!-- <p>The job id is {{ $route.params.jobId }}</p> -->
  <p>The job id is {{ jobId }}</p>
</template>

<script>
export default {
  name: "JobDetails",
  props: {
    jobId: {
      type: [Number, String],
    },
  },
}
</script>

<style></style>
