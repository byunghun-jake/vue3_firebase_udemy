<template>
  <div class="container mx-auto bg-white max-w-lg p-10 mt-20">
    <div class="form">
      <div class="form-field">
        <label for="email">EMAIL</label>
        <input
          type="email"
          class="text-input"
          id="email"
          v-model="formData.email"
        />
      </div>
      <div class="form-field">
        <label for="password">PASSWORD</label>
        <input
          type="password"
          id="password"
          class="text-input"
          v-model="formData.password"
        />
      </div>
      <div class="form-field">
        <label for="role">ROLE</label>
        <select name="role" id="role" v-model="formData.role">
          <option value="FrontEnd">Web FrontEnd</option>
          <option value="BackEnd">Web BackEnd</option>
          <option value="Designer">Web Designer</option>
        </select>
      </div>
      <div class="form-field">
        <label for="skills">SKILLS</label>
        <input
          type="text"
          class="text-input"
          v-model="skillInputValue"
          @keyup="addSkill"
        />
        <ul class="skill-list">
          <li
            v-for="skill in formData.skills"
            :key="skill"
            class="skill-list-item"
            @click="deleteSkill(skill)"
          >
            {{ skill }}
          </li>
        </ul>
      </div>
      <div>
        <input
          type="checkbox"
          name="terms"
          id="terms"
          v-model="formData.terms"
        />
        <label for="terms">ACCEPT TERMS AND CONDITIONS</label>
      </div>
      <button class="submitBtn" @click="onSubmit">Create an Account</button>
    </div>
  </div>
  <div class="container mx-auto max-w-lg text-center">
    <p>email: {{ formData.email }}</p>
    <p>password: {{ formData.password }}</p>
    <p>role: {{ formData.role }}</p>
    <p>skills: {{ formData.skills }}</p>
    <p>terms: {{ formData.terms }}</p>
  </div>
</template>

<script>
import { reactive, ref } from "vue"
export default {
  name: "App",
  setup() {
    const formData = reactive({
      email: "",
      password: "",
      role: "FrontEnd",
      skills: [],
      terms: false,
    })
    const skillInputValue = ref("")
    const addSkill = (e) => {
      if (!skillInputValue.value.trim()) {
        return
      }
      if (e.key === "," || e.key === "Enter") {
        let value = skillInputValue.value.trim()
        if (e.key === ",") {
          value = value.slice(0, skillInputValue.value.length - 1)
        }
        if (!formData.skills.includes(value)) {
          formData.skills.push(value)
        }
        skillInputValue.value = ""
      }
    }

    const deleteSkill = (skill) => {
      formData.skills = formData.skills.filter((item) => {
        return item !== skill
      })
    }

    const onSubmit = () => {
      console.log(formData)
    }

    return {
      formData,
      skillInputValue,
      addSkill,
      deleteSkill,
      onSubmit,
    }
  },
}
</script>

<style lang="scss">
body {
  @apply bg-gray-200;
}

.form {
  @apply grid gap-6;

  .form-field {
    @apply w-full grid gap-1;

    label {
      @apply text-gray-400 font-medium;
    }

    input,
    select {
      @apply border-b border-gray-400 py-2 px-4;
    }

    option {
      @apply py-2 px-4;
    }

    .skill-list {
      @apply flex flex-wrap;

      .skill-list-item {
        @apply py-2 px-4 mr-2 mt-2 bg-green-600 text-white rounded-full cursor-pointer hover:bg-green-700;
      }
    }
  }
  .submitBtn {
    @apply mx-auto bg-blue-600 py-4 px-6 text-white rounded-md;
  }
}
</style>
