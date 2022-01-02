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
        overflow-hidden
        flex
        justify-center
      "
    >
      <!-- sets max width to 1024px/lg -->
      <div id="innerContainer" class="flex">
        <!-- artist image -->
        <img
          v-if="image"
          :src="image"
          class="
            opacity-20
            w-screen
            self-baseline
            object-cover
            transform
            translate-x-32
            mt-4
          "
        />

        <!-- main title -->
        <h1
          :class="`w-full text-5xl text-gray-100 font-extrabold uppercase pt-32 whitespace-nowrap
        ${doubleTitle ? 'absolute text-left pl-16' : 'text-center'}`"
        >
          {{ title }}
        </h1>

        <!-- doubled outline text -->
        <h1
          id="outlineText"
          v-if="doubleTitle"
          class="
            w-auto
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
#innerContainer {
  width: 1024px;
}
</style>
