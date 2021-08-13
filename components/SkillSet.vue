<template>
  <div>
    <div class="bg-gray-900 p-4 shadow-xl">
      <div class="border-b uppercase text-white text-2xl border-white py-4">
        <span class="text-lg sm:text-2xl"> {{ SkillSet.title }} </span>
      </div>
      <div class="py-4 flex text-gray-400 flex-row flex-wrap sm:space-x-10">
        <div v-for="(tech, id) in SkillSet.technologies" :key="id">
          <div class=" mr-8 sm:mr-0 flex flex-col justify-center my-2 items-center space-y-6">
            <img :src="tech.icon" class="md:h-16 md:w-16  sm:h-14 sm:w-14   h-10 w-10" alt="" />
            <div>{{ tech.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['SkillSet'],
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
