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
      "
    >
      <h1 class="text-5xl text-gray-100 font-extrabold uppercase">
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
