<template>
  <div class="form-container">
    <div class="input-container">
      <label>TITLE</label>
      <input v-model="formData.title" type="text" />
    </div>
    <div class="input-container">
      <label>DETAILS</label>
      <textarea v-model="formData.details" rows="4"></textarea>
    </div>
    <button @click="addProject">Add Project</button>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity"
import { useRouter } from "vue-router"
export default {
  name: "AddProject",
  emits: ["addProject"],
  setup(_, { emit }) {
    const router = useRouter()
    const formData = reactive({
      title: "",
      details: "",
      id: null,
      done: false,
    })
    const addProject = () => {
      if (!formData.title.trim().length || !formData.details.trim().length) {
        alert("필수 항목을 입력하세요")
        return
      }
      formData.id = Date.now()
      emit("addProject", formData)
      router.push({ name: "Home" })
    }
    return {
      formData,
      addProject,
    }
  },
}
</script>

<style scoped lang="scss">
.form-container {
  @apply bg-white rounded-md shadow-md py-6 px-4 mb-10 grid gap-4 max-w-lg mx-auto;

  .input-container {
    @apply grid gap-2;

    label {
      @apply font-bold text-gray-400;
    }

    input,
    textarea {
      @apply border border-gray-400 py-2 px-4 rounded;
    }
  }
  button {
    @apply bg-green-600 justify-self-center py-2 px-4 rounded text-white;
  }
}
</style>
