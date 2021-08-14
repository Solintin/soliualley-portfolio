<template>
  <div>
    <div class="main relative bg-white sm:p-3 sm:rounded-l-md overflow-scroll">
      <slot />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.main {
  height: calc(100vh - 20px);
}
@media (max-width: 640px) {
  .main{
    padding-top: 94px;
  }

}
</style>
