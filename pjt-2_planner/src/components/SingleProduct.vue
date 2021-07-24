<template>
  <div
    class="product-container"
    :class="{ completed: project.done, ongoing: !project.done }"
  >
    <div class="content">
      <p class="title" @click="detailShow = !detailShow">{{ project.title }}</p>
      <ul>
        <li>
          <button @click="$emit('deleteProject', project.id)">
            <span class="material-icons">
              delete
            </span>
          </button>
        </li>
        <li>
          <router-link
            :to="{ name: 'EditProject', params: { projectId: project.id } }"
          >
            <span class="material-icons">
              edit
            </span>
          </router-link>
        </li>
        <li>
          <button @click="$emit('toggleProjectDone', project.id)">
            <span class="material-icons" :class="{ done: project.done }">
              done
            </span>
          </button>
        </li>
      </ul>
    </div>
    <p class="detail" v-show="detailShow">{{ project.details }}</p>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity"
export default {
  name: "SingleProduct",
  props: ["project"],
  emits: ["toggleProjectDone", "deleteProject"],
  setup() {
    const detailShow = ref(false)
    return {
      detailShow,
    }
  },
}
</script>

<style scoped lang="scss">
.product-container {
  @apply rounded grid gap-4 py-6 px-4 bg-white border-l-8;

  &.completed {
    @apply border-green-400;
  }

  &.ongoing {
    @apply border-red-500;
  }

  .content {
    @apply flex items-center justify-between;

    .title {
      @apply text-xl font-bold w-full cursor-pointer;

      &:hover {
        @apply text-blue-600;
      }
    }
  }

  ul {
    @apply flex items-start;

    button,
    a {
      @apply w-10 h-10 flex items-center justify-center;

      span {
        @apply text-gray-400;

        &.done,
        &:hover {
          @apply text-green-400;
        }
      }
    }
  }
}
</style>
