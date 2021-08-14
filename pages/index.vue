<template>
  <div>
    <div
      class="
        absolute
        sm:top-0
        top-24
        left-0
        bottom-0
        right-0
        m-3
        bg-hero-wallpaper bg-gray-400 bg-cover bg-center bg-no-repeat
        rounded-lg
      "
    >
      <div class="h-full w-full bg-opacity-80 bg-black pt-20 pl-8 sm:pl-12 pr-4">
        <div class="sm:text-5xl space-y-4 typed text-white"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
    
    }
  },
  mounted() {
    var app = document.querySelector('.typed')

    var typewriter = new Typewriter(app, {
      loop: true,
      delay: 100,
    })

    typewriter

      .typeString("<span class='text-3xl sm:text-5xl'> Hello! </span>")
      .typeString('<div></div>')
      .pauseFor(1000)
      .typeString("<span class='text-3xl sm:text-5xl'> My Name is Soliu Alley B. </span>")
      .pauseFor(1000)
      .typeString('<div></div>')
      .typeString(
        " <span class='text-3xl sm:text-5xl' > I'm a</span> <span class='text-3xl sm:text-5xl font-bold text-red-400'> Front-end Developer</span> "
      )
      .pauseFor(700)
      .deleteChars(20)
      .typeString(
        "<span class=' text-3xl sm:text-5xl font-bold text-red-400'>Programmer</span>"
      )
      .pauseFor(700)
      .deleteChars(10)
      .typeString(
        "<span class=' text-3xl sm:text-5xl font-bold text-red-400'>Freelancer.</span>"
      )
      .pauseFor(700)
      .typeString('<div></div>')
      .pauseFor(1000)
      .typeString(
        " <span class='text-3xl sm:text-5xl'> I <span class='text-green-500 font-bold'> Build</span> and give <span class='text-green-500 font-bold'>Live</span> to Ideas and Awesome Designs.</span>"
      )
      .pauseFor(1000)
      .start()
  },
}
</script>
<style scoped>
/* @media(max-width: 640px) { */

.Typewriter__cursor {
  line-height: 3rem !important;
}
/* } */
</style>
