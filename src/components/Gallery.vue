<template>
  <div>
    <p class="text-xl text-gray-800 font-bold text-left mb-4">Artist gallery</p>
    <div class="mr-8 rounded-md overflow-hidden w-56 shadow-md">
      <img
        v-for="key in galleryKeys"
        :src="artistData[key]"
        :key="key"
        class="h-36 object-cover"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  props: {
    artistData: Object,
  },
  data() {
    return {
      galleryKeys: [],
    };
  },
  async created() {
    if (this.artistData) {
      // search for all gallery images in the artist object
      this.galleryKeys = Object.keys(this.artistData).filter((key) =>
        key.includes("strArtistFanart")
      );
      console.log(this.galleryKeys);
    }
  },
};
</script>