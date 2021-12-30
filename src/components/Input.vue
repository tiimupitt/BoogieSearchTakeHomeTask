<template>
  <div
    class="
      flex
      border border-gray-500
      rounded-lg
      py-2
      px-6
      shadow-md
      w-full
      justify-between
    "
  >
    <label>
      <input
        type="text"
        :placeholder="placeholder"
        class="
          placeholder-gray-900
          border-0
          text-gray-900 text-lg
          px-0
          focus:ring-0
        "
      />
    </label>
    <div class="flex items-center">
      <p class="text-2xl text-gray-500">
        <font-awesome-icon icon="search" />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    icon: String,
    placeholder: String,
  },
};
</script>