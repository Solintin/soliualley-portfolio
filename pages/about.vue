<template>
  <div>
    <div class="rounded-lg ">
      <div class="about w-full py-9  font-black text-center text-white text-5xl">
        ABOUT ME
      </div>

      <div class="h-full grid grid-cols-2 mt-2 bg-gray-900 text-white">
        <div
          class="p-10 space-y-2 text-md font-medium leading-7 tracking-tighter"
        >
          <p>
            Hello
            <span>
              <img class="h-6 w-6 inline" :src="hand" alt="waving-hand" />
            </span>
            I Am Soliu Alley a front End Developer Currently Working With
            AEIRG(Advanced Engineering Innovation Research Group). An active
            Software Developer with 1½ years of experience.
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
            I give live to awesome designs whcih are rich in scalbility,
            responsiveness and user friendly, also i write clean, readable and
            maintanable codes. I absolutely love learning new things and taking
            on new challenges.
          </p>
        </div>

        <div class="grid place-content-center">
          <div class="border-2 border-green-800 p-1 ">
            <img src="~/assets/images/Profile-Pic.jpg" class="bg-gray-700 rounded-sm h-72 w-84" alt="">
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
<style scoped>
.about {
  background: var(--primary);
}

</style>
