<template>
  <header>
    <div
      class="
        h-60
        bg-gradient-to-t
        from-gray-800
        to-indigo-900
        pt-32
        shadow-md
        mb-6
        overflow-hidden
      "
    >
      <h1
        :class="` text-5xl text-gray-100 font-extrabold uppercase
        ${doubleTitle ? 'absolute text-left pl-16' : 'text-center'}`"
      >
        {{ title }}
      </h1>

      <h1
        id="outlineText"
        v-if="doubleTitle"
        class="
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
    Image,
  },
};
</script>

<style scoped>
#outlineText {
  -webkit-text-stroke: 2px white;
}
</style>
