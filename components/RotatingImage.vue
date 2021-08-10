<template>
  <div>
    <div class="flex flex-col items-center">
      <!-- image -->
      <div class="relative">
        <div
          class="
            h-32
            absolute
            w-32
            animate-spin
            border-2 border-white
            mt-6
            rounded-full
          "
        >
          <span class="absolute -top-1 -right-3">
            <img src="@/assets/images/html.png" class="h-7 w-7" alt="" />
          </span>
          <span class="absolute -top-8 right-14">
            <img src="@/assets/images/css.png" class="h-6 w-6" alt="" />
          </span>
          <span class="absolute -top-1 -left-3">
            <img src="@/assets/images/javascript.png" class="h-6 w-6" alt="" />
          </span>
          <span class="absolute -bottom-3 -right-1">
            <img src="@/assets/images/react.png" class="h-6 w-6" alt="" />
          </span>
          <span class="absolute top-14 -left-8">
            <img src="@/assets/images/vue.png" class="h-6 w-6" alt="" />
          </span>
          <span class="absolute top-14 -right-8">
            <img src="@/assets/images/firebase.png" class="h-6 w-6" alt="" />
          </span>
          <span class="absolute -bottom-8 right-14">
            <img src="@/assets/images/git.png" class="h-6 w-6" alt="" />
          </span>
          <span class="absolute -bottom-1 -left-3">
            <img src="@/assets/images/tailwind.png" class="h-6 w-6" alt="" />
          </span>
        </div>

        <img
          class="rounded-full h-32 w-32 mt-6 ring-white p-1 0bject-fit"
          :src="myImage"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import myImage from '@/assets/images/Profile-Pic.jpg'

export default {
  data() {
    return {
      myImage: myImage,
    }
  },
}
</script>

<style lang="scss" scoped></style>
