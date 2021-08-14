<template>
  <div id="container">
    <!-- <div
      class="
        hidden
        h-4
        w-4
        sm:h-6 sm:w-6
        fixed
        z-50
        bg-green-200
        rounded-full
        sm:p-5
        p-4
        top-1
        left-1
        sm:grid
        place-content-center
      "
    >
      X
    </div> -->
    <div class="wrapper   grid grid-cols-12">
      <div class="sm:col-span-9 lg:col-span-10 col-span-full sm:order-first order-last ">
        <Main>
          <Nuxt />
        </Main>
      </div>
      <div class="relative sm:col-span-3 lg:col-span-2 col-span-full block">
        <Sidebar />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
#container {
  background: linear-gradient(
      -90deg,
      hsla(0, 0%, 100%, 0.3),
      rgba(219, 160, 160, 0.1)
    )
    var(--primary);
  padding: 10px;
  height: 100vh;
  width : 100vw;
}
.wrapper{
  max-width : 1400px;
}
</style>
