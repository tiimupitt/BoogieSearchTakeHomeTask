// web page header component

<template>
  <header>
    <!-- background -->
    <div
      class="
        h-60
        bg-gradient-to-t
        from-gray-800
        to-indigo-900
        shadow-xl
        mb-6
        flex
        justify-center
        max-w-full
        overflow-hidden
      "
    >
      <!-- sets max width to 1024px/lg -->
      <div class="flex w-full max-w-screen-lg">
        <!-- artist image -->
        <img
          v-if="image"
          :src="image"
          class="
            opacity-20
            max-w-full
            self-baseline
            object-cover
            transform
            translate-x-32
            mt-4
          "
        />
        <!-- main title -->
        <h1
          :class="`max-w-full text-5xl text-gray-100 font-extrabold uppercase pt-32 whitespace-nowrap overflow-hidden
        ${doubleTitle ? 'absolute text-left pl-16' : 'text-center'}`"
        >
          {{ title }}
        </h1>
        <!-- large outline text -->
        <h1
          id="outlineText"
          v-if="doubleTitle"
          class="
            max-w-full
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
            overflow-hidden
          "
        >
          {{ title }}
        </h1>
      </div>
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
