<template>
  <div class="box-border">
    <div
      class="
        contact
        w-full
        mb-2
        py-9
        font-black
        text-center text-white text-5xl
        uppercase
      "
    >
      contact me
    </div>

    <div class="h-full py-10 pl-10 text-white bg-gray-900">
      <div>
        <h1 class="text-4xl font-bold my-3 capitalize text-red-600">
          Want to get in touch or need me on your team ?
        </h1>
        <p class="text-xl leading-6">
          I am always open to new job opportunities.
        </p>
        <p class="text-xl leading-6">
          Feel free to get in touch with me through the below medium
        </p>

        <div
          class="space-y-4 mt-4"
          v-for="(contact, idx) in contactLinks"
          :key="idx"
        >
          <div class="flex items-center">
            <font-awesome-icon
              class="text-2xl text-green-500"
              :icon="[`${contact.type}`, `${contact.icon}`]"
            />

            <p class="hover:border-black border-b-2 text-xl ml-4 font-medium">
              <a :href="contact.link" target="_blank">{{ contact.desc }} </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactLinks: [
        {
          link: 'https://linkedin.com/in/soliu-alley',
          desc: 'linkedin.com/in/soliu-alley',
          icon: 'linkedin',
          type: 'fab',
        },
        {
          link: 'mailto:soliualley@gmial.com',
          desc: 'soliualley@gmail.com',
          icon: 'envelope',
          type: 'fas',
        },
        {
          link: 'https://github.com/solintin',
          desc: 'github.com/solintin',
          icon: 'github',
          type: 'fab',
        },
        {
          link: 'https://wa.link/i1tpls',
          desc: 'Click to chat me up',
          icon: 'whatsapp',
          type: 'fab',
        },
        {
          link: 'tel:+2348165966977',
          desc: 'Click to call',
          icon: 'phone',
          type: 'fas',
        },
      ],
    }
  },
}
</script>

<style scoped>
.contact {
  background: var(--primary);
}
</style>
