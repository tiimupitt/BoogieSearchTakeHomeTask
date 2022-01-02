// display artist images

<template>
  <div>
    <!-- component title -->
    <p class="text-xl text-gray-800 font-bold text-left mb-4">Artist gallery</p>
    <!-- image contaner -->
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
  name: "ArtistGallery",
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
      // search for all keys in the artist object which contain links to images
      this.galleryKeys = Object.keys(this.artistData).filter((key) =>
        key.includes("strArtistFanart")
      );
    }
  },
};
</script>