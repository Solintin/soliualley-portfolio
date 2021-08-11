<template>
  <div>
    <div class="side-bar position-fixed rounded-r-md">
      <div
        class="
          h-72
          border-b border-green-800
          w-full
          p-4
          flex flex-col
          items-center
        "
      >
        <RotatingImage />
        <div class="text-center">
          <h1 class="text-3xl text-semibold mt-10 text-white">Soliu Alley</h1>
          <p class="text-gray-100 text-md">Front-end Developer</p>
        </div>
      </div>

      <!-- Navbars  -->
      <div class="h-1/2 text-right text-lg">
        <div>
          <ul>
            <li class="active">
              Home
              <font-awesome-icon class="ml-4" :icon="['fas', 'home']" />
            </li>
            <li>
              About <font-awesome-icon class="ml-4" :icon="['fas', 'user']" />
            </li>
            <li>
              Stacks <font-awesome-icon class="ml-4" :icon="['fas', 'tools']" />
            </li>
            <li>
              Project
              <font-awesome-icon class="ml-4" :icon="['fas', 'tasks']" />
            </li>
            <li >
              Contact
              <font-awesome-icon class="ml-4" :icon="['fas', 'envelope']" />
            </li>
          </ul>
        </div>
      </div>

      <!-- Footer -->

      <div
        class="
          mt-8
          text-lg
          space-x-6
          flex flex-row
          place-content-center
          text-green-100
        "
      >
        <div>
          <font-awesome-icon class="" :icon="['fab', 'linkedin']" />
        </div>
        <div>
          <font-awesome-icon class="" :icon="['fab', 'github']" />
        </div>
        <div>
          <font-awesome-icon class="" :icon="['fab', 'twitter']" />
        </div>
        <div>
          <font-awesome-icon class="" :icon="['fas', 'envelope']" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.side-bar {
  /* width: 17vw; */
  /* min-width: 200px; */
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)),
    var(--primary);
  height: calc(100vh - 40px);
  max-height: 850px;
  color: white;
}
li {
  padding: 14px;
  color: var(--primary-nav-color);
  cursor: pointer;
}
li.active {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45))
    var(--primary);
  color: #fff;
  position: relative;
  border-bottom: 2px solid var(--primary);
}
li.active::before {
  content: '';
  position: absolute;
  height: 10px;
  width: 10px;
  background: #fff;
  transform: rotate(45deg);
  padding: 10px;
  left: -10px;
  top: 17px;
}
li:hover {
  color: var(--primary-link-hover);
}
</style>
