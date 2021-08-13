<template>
  <div
    class="
      header
      w-full
      py-5
      sm:py-9
      font-black
      text-center text-white text-3xl
      sm:text-5xl
      uppercase
    "
  >
    {{title}}
  </div>
</template>
<script>
export default {
    props : ['title']
}
</script>
<style scoped>
.header {
  background: var(--primary);
}
</style>
