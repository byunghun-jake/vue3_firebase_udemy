<template>
  <div>
    <ul>
      <li>
        <button
          :class="{ active: selectedFilter === 'all' }"
          @click="selectFilter('all')"
        >
          VIEW ALL
        </button>
      </li>
      <li>
        <button
          :class="{ active: selectedFilter === 'completed' }"
          @click="selectFilter('completed')"
        >
          COMPLETED
        </button>
      </li>
      <li>
        <button
          :class="{ active: selectedFilter === 'ongoing' }"
          @click="selectFilter('ongoing')"
        >
          ONGOING
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FilterNav",
  props: {
    selectedFilter: String,
  },
  setup(props, { emit }) {
    const selectFilter = (filter) => {
      emit("selectFilter", filter)
    }
    return {
      selectFilter,
    }
  },
}
</script>

<style scoped lang="scss">
div {
  ul {
    @apply flex;
    button {
      @apply text-gray-400 font-bold text-sm py-2 px-4;
      &.active {
        @apply text-gray-900;
      }
      &:hover {
        @apply text-gray-500;
      }
    }
  }
}
</style>
