<template>
  <div>
    <div class="rounded-sm border border-gray-300">
      <div class="stack w-full py-9 font-black text-center text-white text-5xl">
        MY SKILLSETS
      </div>

      <div class="space-y-3 w-full pt-4 text-white">
       <Languages />
       <Web />
       <JsFrameWork />
       <CssFramework />
       <DatabaseQuery />
       <VersionControl />
       <Utilities />
       
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>
<style scoped>
.stack {
  background: var(--primary);
}
</style>
