<template>
  <FilterNav :selectedFilter="selectedFilter" @selectFilter="onSelectFilter" />
  <div>
    <ul v-if="projects.length" class="product-list">
      <li v-for="project in filterdProjects" :key="project.id">
        <SingleProduct
          :project="project"
          @toggleProjectDone="onToggleProjectDone"
          @deleteProject="onDeleteProject"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import FilterNav from "@/components/FilterNav"
import SingleProduct from "@/components/SingleProduct"
import { ref } from "@vue/reactivity"
import { computed } from "@vue/runtime-core"

export default {
  name: "Home",
  components: { FilterNav, SingleProduct },
  props: {
    projects: {
      type: Array,
    },
  },
  setup(props, { emit }) {
    const selectedFilter = ref("all")

    const filterdProjects = computed(() => {
      return props.projects.filter((project) => {
        if (selectedFilter.value === "all") {
          return true
        } else if (selectedFilter.value === "completed") {
          return project.done === true
        } else if (selectedFilter.value === "ongoing") {
          return project.done === false
        }
      })
    })

    const onSelectFilter = (filter) => {
      selectedFilter.value = filter
    }

    const onToggleProjectDone = (projectId) => {
      emit("toggleProjectDone", projectId)
    }

    const onDeleteProject = (projectId) => {
      emit("deleteProject", projectId)
    }

    return {
      selectedFilter,
      filterdProjects,
      onSelectFilter,
      onToggleProjectDone,
      onDeleteProject,
    }
  },
}
</script>

<style lang="scss" scoped>
.product-list {
  @apply grid gap-4;
}
</style>
