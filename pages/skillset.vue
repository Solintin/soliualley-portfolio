<template>
  <div>
    <div class="rounded-sm">
      <Header title="my skillset" />

      <div class="space-y-3 w-full pt-4 text-white">
        <SkillSet v-for="(skillset, id) in SkillSets" :key="id"
        :SkillSet="skillset"
         />
      </div>
    </div>
  </div>
</template>

<script>
import SkillSet from '~/components/SkillSetData'
export default {
  data() {
    return {
      SkillSets: SkillSet,
    }
  },
}
</script>
<style scoped>
.stack {
  background: var(--primary);
}
</style>
