<template>
  <div>
    <div class="main relative bg-white sm:p-3 pt-24  sm:rounded-l-md  overflow-scroll">
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
