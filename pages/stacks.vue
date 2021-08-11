<template>
  <div>
    <div class="rounded-sm border border-gray-300">
      <div class="stack w-full py-9 font-black text-center text-white text-5xl">
        MY SKILLSETS
      </div>

      <div class="space-y-3 w-full pt-4 text-white">
        <div class=" bg-gray-900 p-4 shadow-xl">
          <div class="border-b text-white text-2xl  border-white py-4">
            <span> LANGUAGES</span>
          </div>
          <div class="py-4 flex flex-wrap  items-center space-x-6">
           
            <div class='grid place-content-center space-y-4'>
                <img src="~/assets/images/javascript.png"  class='h-16 w-16 object-cover' alt="">
                <div>JavaScript</div>
            </div>
                      
            <div class='text-center space-y-4'>
                <img src="~/assets/images/javascript.png"  class='h-16 w-16 object-cover' alt="">
                <div>JavaScript</div>
            </div>
                      
            <div class='text-center space-y-4'>
                <img src="~/assets/images/javascript.png"  class='h-16 w-16 object-cover' alt="">
                <div>JavaScript</div>
            </div>
                      
            <div class='text-center space-y-4'>
                <img src="~/assets/images/javascript.png"  class='h-16 w-16 object-cover' alt="">
                <div>JavaScript</div>
            </div>
                      
           
            
           
            
          </div>
        </div>
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
