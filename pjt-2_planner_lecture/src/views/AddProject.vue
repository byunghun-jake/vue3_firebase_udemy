<template>
  <div class="container">
    <div class="max-w-lg mx-auto bg-white p-10">
      <form @submit.prevent="handleSubmit">
        <div class="input-container">
          <input v-model="formData.title" type="text" required />
          <label :class="{ active: formData.title }">TITLE</label>
        </div>
        <div class="input-container">
          <textarea v-model="formData.details" required></textarea>
          <label :class="{ active: formData.details }">DETAILS</label>
        </div>
        <button>Add Project</button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity"
import { useRouter } from "vue-router"
export default {
  name: "AddProject",
  setup() {
    const router = useRouter()

    const formData = reactive({
      title: "",
      details: "",
    })
    const uri = `http://localhost:3000/projects`

    const handleSubmit = async () => {
      if (!formData.title || !formData.details) {
        alert("모든 항목을 입력하세요")
        return
      }
      const project = {
        ...formData,
        complete: false,
      }
      try {
        await fetch(uri, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(project),
        })
        console.log(project)
        router.push({ name: "Home" })
      } catch (error) {
        console.log(error)
      }
    }

    return {
      formData,
      handleSubmit,
    }
  },
}
</script>

<style scoped lang="scss">
form {
  @apply grid gap-4;

  .input-container {
    @apply relative;

    input,
    textarea {
      @apply relative z-10 bg-transparent border rounded-md px-4 py-4 w-full outline-none focus:ring-2 ring-blue-500;
    }

    textarea {
      @apply resize-none;
    }

    label {
      @apply absolute top-4 left-4 transform transition-all font-bold text-gray-400 bg-white px-1;

      &.active {
        @apply -top-2 text-xs font-bold z-20;
      }
    }

    input:focus + label,
    textarea:focus + label {
      @apply -top-2 text-xs font-bold z-20 text-blue-500;
    }
  }
}
</style>
