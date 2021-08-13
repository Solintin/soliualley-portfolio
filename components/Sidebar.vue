<template>
  <div>
    <div
      :class="[
        isOpen ? 'open-nav' : null,
        'side-bar  absolute right-0 left-0 top-0 sm:rounded-r-md',
      ]"
    >
      <div class="w-full flex flex-col">
        <div
          class="
            flex
            justify-between
            sm:inline sm:items-center
            border-b
            py-4
            px-5
            border-green-800
          "
        >
          <div class="sm:block hidden">
            <RotatingImage />
          </div>

          <div class="sm:text-center">
            <h1 class="text-3xl text-semibold sm:mt-10 text-white">
              Soliu Alley
            </h1>
            <p class="text-gray-300 text-md">Front-end Developer</p>
          </div>
          <div class="sm:hidden  mt-2" @click="handleNav">
            <span v-if="isOpen">
              <font-awesome-icon class="text-4xl" :icon="['fas', 'times']" />
            </span>
            <span v-else class='space-y-2'>
              <div class='h-1 w-10 bg-white rounded-full'></div>
              <div class='h-1 w-6 ml-4 bg-white rounded-full'></div>
              <div class='h-1 w-4 ml-6 bg-white rounded-full'></div>
              <!-- <font-awesome-icon class="text-2xl" :icon="['fas', 'bars']" /> -->
            </span>
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
                @click="handleNav"
              >
                <nuxt-link :to="{ name: route.link }">
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
          link: 'skillset',
          name: 'Skillsets',
          icon: 'tools',
          type: 'fas',
          routeName: 'skillset',
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
      isOpen: false,
    }
  },
  methods: {
    handleNav() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style scoped>
.side-bar {
  
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)),
    var(--primary);
  height: calc(100vh - 40px);
  max-height: 850px;
  color: white;
  overflow-y: scroll;
}
@media (max-width: 640px) {
  .side-bar {
    height: 6rem;
    color: white;
    width: 100%;
    transition: height 0.7s linear;
    margin-left : -1px;
    margin-top : -1px;
  }
  .side-bar.open-nav {
    height: 24rem;
    transition: height 0.7s linear;
  }
  li.active::before {
    display: none;
  }
  li {
    padding: 15px;
    font-size: 20px;
  }
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
