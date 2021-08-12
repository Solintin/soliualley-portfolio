<template>
  <div>
    <div class="side-bar position-fixed rounded-r-md">
      <div
        class=" w-full  flex flex-col "
      >
      <div class='items-center border-b p-4 border-green-800'>

        <RotatingImage />
        <div class="text-center">
          <h1 class="text-3xl text-semibold mt-10 text-white">Soliu Alley</h1>
          <p class="text-gray-300 text-md">Front-end Developer</p>
        </div>
      </div>

        <!-- Navbars  -->
        <div class="text-right text-md">
          <div>
            <ul>
              <li
                v-for="(route, idx) in routes"
                :key="idx"
                :class="$route.name === route.routeName ? 'active' : null"
              >
                <nuxt-link :to="{name : route.link}">
                  {{ route.name }}
                  <font-awesome-icon
                    class="ml-4"
                    :icon="[route.type, route.icon]"
                  />
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          link: 'index',
          name: 'Home',
          icon: 'home',
          type: 'fas',
          routeName: 'index',
        },
        {
          link: 'about',
          name: 'About',
          icon: 'user',
          type: 'fas',
          routeName: 'about',
        },
        {
          link: 'stacks',
          name: 'Stacks',
          icon: 'tools',
          type: 'fas',
          routeName: 'stacks',
        },
        {
          link: 'projects',
          name: 'Projects',
          icon: 'tasks',
          type: 'fas',
          routeName: 'projects',
        },
        {
          link: 'contact',
          name: 'Contact',
          icon: 'envelope',
          type: 'fas',
          routeName: 'contact',
        },
      ],
    }
  },
}
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
  overflow-y : scroll;
}
li {
  padding: 10px 15px;
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
  height: 7px;
  width: 7px;
  background: #fff;
  transform: rotate(45deg);
  padding: 7px;
  left: -8px;
  top: 14px;
}
li:hover {
  color: var(--primary-link-hover);
}
</style>
