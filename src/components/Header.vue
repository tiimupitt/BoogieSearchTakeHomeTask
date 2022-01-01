<template>
  <header>
    <div
      class="
        h-60
        bg-gradient-to-t
        from-gray-800
        to-indigo-900
        shadow-xl
        mb-6
        overflow-hidden
        flex
        justify-end
      "
    >
      <img
        :src="image"
        class="
          opacity-20
          w-screen
          self-baseline
          object-cover
          transform
          translate-x-32
        "
      />
      <h1
        :class="`w-screen text-5xl text-gray-100 font-extrabold uppercase pt-32
        ${doubleTitle ? 'absolute text-left pl-16' : 'text-center'}`"
      >
        {{ title }}
      </h1>

      <h1
        id="outlineText"
        v-if="doubleTitle"
        class="
          w-screen
          mt-4
          text-9xl
          uppercase
          font-bold
          tracking-wider
          transform
          scale-y-150
          text-transparent
          opacity-10
          text-left
          pl-8
          whitespace-nowrap
          pt-28
          absolute
        "
      >
        {{ title }}
      </h1>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
    doubleTitle: Boolean,
    image: String,
  },
};
</script>

<style scoped>
#outlineText {
  -webkit-text-stroke: 2px white;
}
</style>
