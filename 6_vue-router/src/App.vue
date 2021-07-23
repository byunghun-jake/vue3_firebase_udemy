<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
  </div>

  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>
  <router-view />
</template>

<script>
import { useRouter } from "vue-router"
export default {
  setup() {
    const router = useRouter()
    const redirect = () => {
      router.push({ name: "Home" })
    }
    const back = () => {
      // Note: 뒤로가기 구현 시 필요한 사항
      router.go(-1)
    }
    const forward = () => {
      router.go(1)
    }
    return {
      redirect,
      back,
      forward,
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

button {
  margin: 8px 16px;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #999;
  }
}
</style>
