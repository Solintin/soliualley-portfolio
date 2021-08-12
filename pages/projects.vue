<template>
  <div>
    <div
      class="
        project
        w-full
        mb-2
        py-9
        font-black
        text-center text-white text-5xl
      "
    >
      FEATURED PROJECTS
    </div>
    <div class="">
      <div class="bg-gray-900 p-6 space-y-16 text-white">
        <!-- First Project  -->

        <div
          class="tracker-tigher font-thin text-md gap-8 grid grid-cols-2"
          v-for="project in Projects"
          :key="project.id"
        >
          <div :class="project.id % 2 == 0 ? 'order-last' : null">
            <img
              :src="project.image"
              class="rounded-md h-64 w-full object-fit bg-gray-800 shadow-lg"
              :alt="project.title"
            />
          </div>
         
          <div>
            <h1 class="text-2xl font-bold uppercase">{{ project.title }}</h1>
            <p>{{ project.desc }}</p>
            <div class="py-2 text-green-300 flex justify-between">
              <ul class="space-x-1">
                <li
                  class="inline rounded-full bg-gray-700 px-2"
                  v-for="(tech, id) in project.stacks"
                  :key="id"
                >
                  {{ tech }}
                </li>
              </ul>
              <div class="ml-4 text-green-300">
                <a
                  :href="project.link"
                  target="_blank"
                  class="flex justify-center space-x-1"
                >
                  <div>
                    <font-awesome-icon :icon="['fas', 'desktop']" />
                  </div>
                  <div>Demo</div>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Projects from '~/components/ProjectData'
export default {
  data() {
    return {
      Projects: Projects,
    }
  },
  
}
</script>

<style scoped>
.project {
  background: var(--primary);
}
</style>
