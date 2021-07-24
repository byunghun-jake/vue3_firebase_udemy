<template>
  <Navbar />
  <div class="container">
    <router-view
      :projects="projects"
      @addProject="onAddProject"
      @editProject="onEditProject"
      @toggleProjectDone="onToggleProjectDone"
      @deleteProject="onDeleteProject"
    />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import { ref } from "@vue/reactivity"
export default {
  components: { Navbar },
  setup() {
    const projects = ref([])

    const onAddProject = (data) => {
      projects.value.push(data)
    }

    const onToggleProjectDone = (projectId) => {
      projects.value.forEach((project) => {
        if (project.id === projectId) {
          project.done = !project.done
        }
      })
    }

    const onDeleteProject = (projectId) => {
      projects.value = projects.value.filter(
        (project) => project.id !== projectId,
      )
    }

    const onEditProject = (data) => {
      projects.value.forEach((project) => {
        if (project.id === data.id) {
          project.title = data.title
          project.details = data.details
        }
      })
    }

    return {
      projects,
      onAddProject,
      onToggleProjectDone,
      onDeleteProject,
      onEditProject,
    }
  },
}
</script>

<style lang="scss">
body {
  @apply bg-gray-200;

  #app {
    @apply min-h-screen;
  }
}
</style>
