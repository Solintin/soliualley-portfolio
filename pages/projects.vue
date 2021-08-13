<template>
  <div>
    <Header 
      title="featured projects"
      />
    <div class="">
      <div class="bg-gray-900 py-6 px-5 mt-2 space-y-16 text-white">
        <!-- First Project  -->

        <div
          v-for="(project, id) in Projects"
          :key="project.id"
          :class="[id === Projects.length-1 ? 'border-b-0' : 'border-b', ' border-white pb-4 tracker-tigher font-thin text-md gap-8 grid sm:grid-cols-2 grid-col']"
        >
          <div :class="project.id % 2 == 0 ? 'sm:order-last' : null">
            <img
              :src="project.image"
              class="rounded-md sm:h-64 sm:w-full h-40 w-3/4 object-fit bg-gray-800 shadow-lg"
              :alt="project.title"
            />
          </div>
         
          <div>
            <h1 class="text-2xl font-bold uppercase">{{ project.title }}</h1>
            <p>{{ project.desc }}</p>
            <div class="py-2 text-green-300 flex justify-between">
              <ul>
                <li
                  class="inline rounded-full bg-gray-700 px-2 mr-2"
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
