<template>
  <nav class="filter-nav">
    <button @click="updateFilter('all')" :class="{ active: filter === 'all' }">
      VIEW ALL
    </button>
    <button
      @click="updateFilter('completed')"
      :class="{ active: filter === 'completed' }"
    >
      COMPLETED
    </button>
    <button
      @click="updateFilter('ongoing')"
      :class="{ active: filter === 'ongoing' }"
    >
      ONGOING
    </button>
  </nav>
</template>

<script>
export default {
  name: "FilterNav",
  props: {
    filter: String,
  },
  setup(_, { emit }) {
    const updateFilter = (filter) => {
      emit("filterChange", filter)
    }
    return {
      updateFilter,
    }
  },
}
</script>

<style scoped lang="scss">
.filter-nav {
  @apply mb-6;

  button {
    @apply outline-none text-gray-400 font-bold mr-4;

    &:last-child {
      @apply mr-0;
    }

    &.active {
      @apply text-green-500;
    }
  }
}
</style>
