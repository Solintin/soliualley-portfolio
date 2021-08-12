<template>
  <div>
    <div
      class="
        absolute
        top-0
        left-0
        bottom-0
        right-0
        m-3
        bg-hero-wallpaper bg-gray-400 bg-cover bg-center bg-no-repeat
        rounded-lg
      "
    >
      <div class="h-full w-full bg-opacity-80 bg-black pt-20 pl-16">
        <div class="sm:text-5xl space-y-4 typed text-white"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          hid: 'type-writer',
          src: 'https://unpkg.com/typewriter-effect@latest/dist/core.js',
          defer: true,
        },
      ],
    }
  },
  mounted() {
    var app = document.querySelector('.typed')

    var typewriter = new Typewriter(app, {
      loop: true,
      delay: 100,
    })

    typewriter
      
      .typeString("  Hello!")
      .typeString('<div></div>')
      .pauseFor(1000)
      .typeString(' <span> My Name is Soliu Alley B. </span>')
      .pauseFor(1000)
      .typeString('<div></div>')
      .typeString(
        "I'm a <span class='font-bold text-red-400'> Front-end Developer</span> "
      )
      .pauseFor(700)
      .deleteChars(20)
      .typeString("<span class='font-bold text-red-400'>Programmer</span>")
      .pauseFor(700)
      .deleteChars(10)
      .typeString("<span class='font-bold text-red-400'>Freelancer</span>")
      .pauseFor(700)
      .typeString('<div></div>')
      .pauseFor(1000)
      .typeString(
        "I <span class='text-green-500 font-bold'> Build</span> and give <span class='text-green-500 font-bold'>Live</span> to Ideas and Awesome Designs"
      )
      .pauseFor(1000)
      .start()
  },
}
</script>
<style scoped>
.Typerwriter__cursor {
  display: inline;
}
</style>
