<template>
  <div class="container">
    <FilterNav @filterChange="filter = $event" :filter="filter" />
    <ul class="project-list" v-if="!loading && filteredProjects.length">
      <li v-for="project in filteredProjects" :key="project.id">
        <ProjectListItem
          :project="project"
          @delete="handleDelete"
          @toggleComplete="handlecToggleComplete"
        ></ProjectListItem>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue"
import ProjectListItem from "@/components/ProjectListItem"
import FilterNav from "@/components/FilterNav"

export default {
  name: "Home",
  components: { ProjectListItem, FilterNav },
  setup() {
    const projects = ref([])
    const loading = ref(true)
    const filter = ref("all")

    const getProjects = async () => {
      try {
        const res = await fetch("http://localhost:3000/projects")
        projects.value = await res.json()
        loading.value = false
        console.log(projects.value)
      } catch (error) {
        console.log(error)
      }
    }

    const handleDelete = (projectId) => {
      projects.value = projects.value.filter(
        (project) => project.id !== projectId,
      )
    }

    const filteredProjects = computed(() => {
      return projects.value.filter((project) => {
        if (filter.value === "all") {
          return true
        } else if (filter.value === "completed" && project.complete) {
          return true
        } else if (filter.value === "ongoing" && !project.complete) {
          return true
        }
        return false
      })
    })

    const handlecToggleComplete = (projectId) => {
      // 모든 projects를 순회하지 않도록 some 메서드를 사용
      projects.value.some((project) => {
        console.log(project)
        if (project.id === projectId) {
          project.complete = !project.complete
          return true
        }
        return false
      })
    }

    onMounted(() => {
      getProjects()
    })

    return {
      filteredProjects,
      loading,
      filter,
      handleDelete,
      handlecToggleComplete,
    }
  },
}
</script>

<style lang="scss" scoped>
.project-list {
  @apply grid gap-4;
}
</style>
