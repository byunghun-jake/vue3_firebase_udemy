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
        <button>Edit Project</button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity"
import { onMounted } from "@vue/runtime-core"
import { useRouter } from "vue-router"
export default {
  name: "EditProject",
  props: {
    projectId: [String, Number],
  },
  setup(props) {
    const router = useRouter()
    const formData = reactive({
      title: "",
      details: "",
    })

    const uri = `http://localhost:3000/projects/${props.projectId}`

    const handleSubmit = async () => {
      if (!formData.title || !formData.details) {
        alert("뭐라고요?")
        return
      }
      try {
        await fetch(uri, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
        router.push({ name: "Home" })
      } catch (error) {
        console.log(error)
      }
    }

    onMounted(async () => {
      const res = await fetch(uri)
      const project = await res.json()
      console.log(project)
      formData.title = project.title
      formData.details = project.details
    })

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
