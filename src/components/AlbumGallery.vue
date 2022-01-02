// display album artwork

<template>
  <div>
    <!-- title -->
    <p class="text-xl text-gray-800 font-bold text-left mb-4">Album artwork</p>
    <!-- album front and back artwork -->
    <div class="rounded-md overflow-hidden w-72 shadow-md">
      <img :src="album.strAlbumThumb" class="object-cover" />
      <img :src="album.strAlbumThumbBack" class="object-cover" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AlbumGallery",
  props: {
    album: Object,
  },
};
</script>