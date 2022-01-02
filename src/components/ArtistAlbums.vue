// display all of the artists albums as a series of cards with images / details

<template>
  <div class="font-bold w-full ml-10">
    <!-- Found <numAlbums> results for <artistName> -->
    <div class="flex text-lg text-gray-800">
      <p>Found&nbsp;</p>
      <p v-if="albumsData.length" class="text-indigo-600">
        {{ albumsData.length }}&nbsp;
      </p>
      <p>results for&nbsp;</p>
      <p class="text-indigo-600">"{{ artistData.strArtist }}"</p>
    </div>

    <!-- container for each album card -->
    <div
      v-for="album in albumsData"
      :key="album.idAlbum"
      class="
        h-32
        w-full
        flex
        my-3
        shadow-md
        rounded-lg
        overflow-hidden
        cursor-pointer
        hover:opacity-80
      "
      @click="handleClick(album.idAlbum)"
    >
      <!-- if there is no album artwork, display "no artwork" instead -->
      <div
        class="
          w-32
          h-32
          bg-gray-200
          absolute
          z-0
          rounded-l-lg
          flex
          items-center
          justify-center
        "
      >
        <p class="text-gray-400">No Image</p>
      </div>
      <!-- album artwork -->
      <img
        :src="album.strAlbumThumb"
        class="h-32 w-auto z-10 absolute rounded-l-lg"
      />
      <!-- album name and year of release -->
      <div
        class="bg-gray-100 pl-40 text-xl flex flex-col justify-center w-full"
      >
        <p class="text-left text-indigo-600">
          {{ album.intYearReleased }}
        </p>
        <p class="text-left">{{ album.strAlbum }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArtistAlbums",
  props: {
    artistData: Object,
  },
  data() {
    return {
      albumsData: [],
      idSelectedAlbum: null,
    };
  },
  async created() {
    // fetch album data for the artist
    if (this.artistData) {
      let response = await fetch(
        `https://theaudiodb.com/api/v1/json/2/album.php?i=${this.artistData.idArtist}`
      );
      const data = await response.json();

      // sort the albums by release date
      this.albumsData = data.album.sort((a, b) => {
        return b.intYearReleased - a.intYearReleased;
      });
    }
  },
  methods: {
    // when an album card is clicked, redirect to a page showing more detail on it
    handleClick(idAlbum) {
      window.location.href = "/Album/" + idAlbum;
    },
  },
};
</script>
