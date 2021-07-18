<template>
  <div class="dialog-background">
    <div class="dialog">
      <header>
        <slot name="header">
          <div>
            기본 헤더
          </div>
        </slot>
      </header>
      <main>
        <slot>
          <div>
            기본 내용
          </div>
        </slot>
      </main>
      <footer>
        <slot name="footer">
          <button @click="$emit('closeModal')">닫기</button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheModal",
  emits: ["closeModal"],
}
</script>

<style scoped lang="scss">
.dialog-background {
  z-index: 999;
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);

  .dialog {
    width: 340px;
    background: white;
    margin: auto;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);

    header {
      background: lightblue;
      padding: 1rem;
      font-size: 1.5rem;
      font-weight: 700;
      display: flex;
    }
    main {
      padding: 16px;
    }
    footer {
      padding: 16px;
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
