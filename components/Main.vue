<template>
  <div>
    <div class="main bg-white p-4 rounded-l-md overflow-scroll">
      <slot />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.main {
  /* width: 82vw; */
  /* min-width: 200px; */
  height: calc(100vh - 40px);
  max-height: 850px;
}
</style>
