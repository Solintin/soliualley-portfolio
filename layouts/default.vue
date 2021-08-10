<template>
  <div id="container">
    <div
      class="
        h-4
        w-4
        sm:h-6
        sm:w-6
        fixed
        z-50
        bg-green-200
        rounded-full
        sm:p-5
        p-4
        top-1
        left-1
        grid
        place-content-center
      "
    >
      X
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style>

#container {
  background: linear-gradient(-90deg, hsla(0, 0%, 100%, 0.3), rgba(0, 0, 0, 0.1))
    var(--primary);
  padding: 20px;
}
</style>
