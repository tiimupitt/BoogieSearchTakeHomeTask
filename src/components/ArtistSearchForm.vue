// input form to search for artist

<template>
  <form :action="'/result/' + artistName" class="w-full mx-48">
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
        min-w-min
        justify-between
      "
    >
      <!-- input text field -->
      <input
        v-model="artistName"
        placeholder="Search artist"
        required
        type="text"
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
          <font-awesome-icon icon="search" />
        </p>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "ArtistSearchForm",
  data() {
    return {
      artistName: "",
    };
  },
};
</script>
