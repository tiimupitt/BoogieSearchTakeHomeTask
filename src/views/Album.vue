<template>
  <div class="Album">
    <Header
      v-if="album"
      :title="album.strArtist + ' / ' + album.strAlbum"
      doubleTitle
      :image="album.strAlbumCDart"
    />
    <div class="flex justify-center">
      <div id="innerContainer" class="flex flex-col mb-8 justify-center">
        <p
          @click="handleClick()"
          class="
            absolute
            top-0
            text-white
            opacity-60
            mt-4
            ml-10
            text-lg
            cursor-pointer
          "
        >
          <font-awesome-icon icon="long-arrow-alt-left" /> &nbsp;Back
        </p>

        <!-- album info -->
        <div
          class="
            flex
            text-lg
            font-bold
            text-gray-800
            w-full
            justify-center
            mb-4
          "
        >
          <p>Released in&nbsp;</p>
          <p class="text-indigo-600">{{ album.intYearReleased }},</p>

          <p>&nbsp;in the genre of&nbsp;</p>
          <p class="text-indigo-600">{{ album.strGenre }},</p>

          <p>&nbsp;under&nbsp;</p>
          <p class="text-indigo-600">{{ album.strLabel }}</p>
        </div>
        <div class="h-0 border-t-2 mb-4 opacity-60 mx-8" />
        <div class="flex w-full justify-between gap-24 px-8">
          <AlbumTracks :album="album" />
          <AlbumGallery :album="album" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import AlbumGallery from "../components/AlbumGallery.vue";
import AlbumTracks from "../components/AlbumTracks.vue";
export default {
  name: "Album",
  components: {
    Header,
    AlbumGallery,
    AlbumTracks,
  },
  data() {
    return {
      IdAlbum: decodeURI(window.location.pathname.split("/")[2]),
      album: {
        tracks: [],
      },
    };
  },
  async created() {
    // console.log(window.history);

    let trackResponse = await fetch(
      `https://theaudiodb.com/api/v1/json/2/track.php?m=${this.IdAlbum}`
    );
    const trackData = await trackResponse.json();
    this.album.tracks = trackData.track;

    let albumResponse = await fetch(
      `https://theaudiodb.com/api/v1/json/2/album.php?i=${this.album.tracks[0].idArtist}`
    );
    const albumData = await albumResponse.json();

    // console.log(this.IdAlbum);
    // console.log(albumData.album);

    albumData.album.map((album) => {
      if (album.idAlbum == this.IdAlbum) {
        this.album = { ...album, ...this.album };
      }
    });
  },
  methods: {
    handleClick() {
      window.history.back();
    },
  },
};
</script>

<style scoped>
#innerContainer {
  width: 1024px;
}
</style>