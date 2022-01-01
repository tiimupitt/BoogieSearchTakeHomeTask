<template>
  <div class="font-bold w-auto ml-10">
    <div class="flex text-lg text-gray-800">
      <p>Found&nbsp;</p>
      <p v-if="albumsData.length" class="text-indigo-600">
        {{ albumsData.length }}&nbsp;
      </p>
      <p>results for&nbsp;</p>
      <p class="text-indigo-600">"{{ artistData.strArtist }}"</p>
    </div>
    <div
      v-for="album in albumsData"
      :key="album.idAlbum"
      class="h-28 w-3/4 flex my-3 shadow-md rounded-lg overflow-hidden"
    >
      <img :src="album.strAlbumThumb" class="h-full" />
      <div
        class="bg-gray-100 pl-10 text-xl flex flex-col justify-center w-full"
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
  name: "Albums",
  components: {},
  props: {
    artistData: Object,
  },
  data() {
    return {
      albumsData: [],
    };
  },
  async created() {
    if (this.artistData) {
      let response = await fetch(
        `https://theaudiodb.com/api/v1/json/2/album.php?i=${this.artistData.idArtist}`
      );
      const data = await response.json();
      this.albumsData = data.album;
      // console.log(this.idArtist);
      //   console.log(this.albumsData.length());
      //   console.log(this.albumsData);
    }
  },
};
</script>
