<template>
  <div>
    <div class="grid grid-cols-12">
      <div class="sm:col-span-9 lg:col-span-10 col-span-full">
        <Main>
          <div
            class="
              h-full
              bg-hero-wallpaper bg-gray-400 bg-cover bg-center bg-no-repeat
              relative
              rounded-lg
            "
          >
            <div
              class="
                h-full
                top-0
                left-0
                w-full
                bg-opacity-80
                grid
                place-content-center
                bg-black
                absolute
              "
            >
              <h1 class="sm:text-5xl text-white">Hello !</h1>
              <div
                id="typing"

                class="absolute top-  left-1/2 tranform  text-red-500 sm:text-5xl text-white"
              ></div>
            </div>
          </div>
        </Main>
      </div>
      <div class="sm:col-span-3 lg:col-span-2 hidden sm:block">
        <Sidebar></Sidebar>
      </div>
    </div>
  </div>
</template>

<script>
import TypeIt from 'typeit'
// import Typed from 'typed.js'

export default {
  mounted() {
    new TypeIt("#typing", {
      strings: [
        'Developer',
        'Student',
        'IT Instructor',
        'Programmer',
        'Freelancer',
      ],
      speed : 150,
      loop : true
    }).go();
    // new Typed('div#typing', {
    //   strings: [
    //     'Developer',
    //     'Student',
    //     'IT Instructor',
    //     'Programmer',
    //     'Freelancer',
    //   ],
    //   typeSpeed: 100,
    //   backSpeed: 60,
    //   loop: true,
    // })
  },
}
</script>
