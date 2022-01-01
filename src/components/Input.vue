<template>
  <!-- input border -->
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
    <!-- input text field -->
    <input
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      :required="required"
      @input="$emit('update:modelValue', $event.target.value)"
      class="
        placeholder-gray-900
        border-0
        text-gray-900 text-lg
        px-0
        focus:ring-0
      "
    />
    <!-- input icon -->
    <div class="flex items-center">
      <p class="text-2xl text-gray-500">
        <font-awesome-icon :icon="icon" />
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
    modelValue: String,
    required: {
      type: Boolean,
      default: false,
    },
  },
};
</script>