<template>
  <div class="project" :class="{ complete: project.complete }">
    <div class="actions">
      <h3 class="title" @click="showDetails = !showDetails">
        {{ project.title }}
      </h3>
      <div class="icons">
        <router-link
          :to="{
            name: 'EditProject',
            params: {
              projectId: project.id,
            },
          }"
          ><span class="material-icons icon">edit</span></router-link
        >
        <span @click="deleteProject" class="material-icons icon">delete</span>
        <span
          @click="toggleCompleteProject"
          class="material-icons icon"
          :class="{ complete: project.complete }"
        >
          done
        </span>
      </div>
    </div>
    <div class="details" v-show="showDetails">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity"
export default {
  name: "ProjectListItem",
  props: {
    project: Object,
  },
  emits: ["delete", "toggleComplete"],
  setup(props, { emit }) {
    const showDetails = ref(false)
    const uri = `http://localhost:3000/projects/${props.project.id}`
    const deleteProject = async () => {
      try {
        const res = await fetch(uri, { method: "DELETE" })
        console.log(res)
        emit("delete", props.project.id)
      } catch (error) {
        console.log(error)
      }
    }
    const toggleCompleteProject = async () => {
      try {
        const res = await fetch(uri, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            complete: !props.project.complete,
          }),
        })
        emit("toggleComplete", props.project.id)
      } catch (error) {}
    }

    return {
      showDetails,
      deleteProject,
      toggleCompleteProject,
    }
  },
}
</script>

<style scoped lang="scss">
.project {
  @apply rounded grid gap-4 py-6 px-4 bg-white border-l-8 border-red-500 shadow transition-all;

  &.complete {
    @apply border-green-400;
  }

  .actions {
    @apply flex items-center justify-between;

    .title {
      @apply text-xl font-bold w-full cursor-pointer select-none;

      &:hover {
        @apply text-blue-600;
      }
    }
  }

  .icons {
    @apply flex;

    .icon {
      @apply text-2xl px-2 flex items-center justify-center text-gray-400 cursor-pointer select-none;

      &.complete {
        @apply text-green-400;
      }

      &:hover {
        @apply text-gray-600;
      }
    }
  }
}
</style>
