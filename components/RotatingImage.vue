<template>
  <div>
    <div class="flex flex-col items-center">
      <!-- image -->
      <div class="relative">
        <div
          class="
            h-28
            absolute
            w-28
            animate-spin
            border-2 border-white
            mt-6
            rounded-full
          "
        >
          <span class="absolute -top-3 -right-2">
            <img src="@/assets/images/html.png" class="h-6 w-6" alt="" />
          </span>
          <span class="absolute -top-8 right-12">
            <img src="@/assets/images/css.png" class="h-6 w-6" alt="" />
          </span>
          <span class="absolute -top-3 -left-3">
            <img src="@/assets/images/javascript.png" class="h-6 w-6" alt="" />
          </span>
          <span class="absolute -bottom-3 -right-1">
            <img src="@/assets/images/react.png" class="h-6 w-6" alt="" />
          </span>
          <span class="absolute top-13 -left-8">
            <img src="@/assets/images/vue.png" class="h-6 w-6" alt="" />
          </span>
          <span class="absolute top-13 -right-7">
            <img src="@/assets/images/firebase.png" class="h-6 w-6" alt="" />
          </span>
          <span class="absolute -bottom-8 right-12">
            <img src="@/assets/images/git.png" class="h-6 w-6" alt="" />
          </span>
          <span class="absolute -bottom-1 -left-3">
            <img src="@/assets/images/tailwind.png" class="h-6 w-6" alt="" />
          </span>
        </div>

        <img
          class="rounded-full h-28 w-28 mt-6 ring-white p-1 0bject-fit"
          :src="myImage"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import myImage from '@/assets/images/Profile-Pic_1.jpg'

export default {
  data() {
    return {
      myImage: myImage,
    }
  },
}
</script>

<style scoped>
.top-13{
    top : 44px
}
</style>
