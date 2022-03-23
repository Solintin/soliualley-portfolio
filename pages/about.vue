<template>
  <div>
    <div class="rounded-lg">
      <Header title="about me" />

      <div
        class="
          p-5
          h-full
          grid grid-cols
          sm:grid-cols-2
          gap-4
          mt-2
          bg-gray-900
          text-white
        "
      >
        <div class="space-y-2 text-md font-medium leading-7 tracking-tighter">
          <p>
            Hello
            <span>
              <img class="h-6 w-6 inline" :src="hand" alt="waving-hand" />
            </span>
            I am
            <span class="font-bold">Soliu Alley</span> a
            <span class="font-bold"
              >Full Stack Software Engineer</span
            >
            currently working with Jand2Gidi- A Logistic Company in Lagos, Nigeria. An active Software Developer with about 3years of building
            experience.
          </p>
          <p>
            I Love transforming beautiful designs into full-fledged interactive
            web applications for various clients.
          </p>
          <p>
            I am an enthusiastic team player, deep creative thinker and a
            pragmatic problem solver.
          </p>
          <p>
            I give live to awesome designs which are rich in scalability,
            responsiveness and user friendly, also i write clean, readable and
            maintainable codes. I absolutely love learning new and cutting edge technologies and taking
            on new challenges.
          </p>
        </div>

        <div class="my-7 grid order-first sm:order-last place-content-center">
          <div class="border-2 border-green-800 p-1 mt-4">
            <img
              src="~/assets/images/Profile-Pic.jpg"
              class="bg-gray-700 rounded-sm h-72 w-84"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import hand from '@/assets/images/hand.png'
export default {
  data() {
    return {
      hand: hand,
    }
  },
}
</script>
<style scoped></style>
