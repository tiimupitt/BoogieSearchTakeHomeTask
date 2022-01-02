// display detailed data for single album

<template>
  <div class="Album">
    <Header
      v-if="album"
      :title="album.strArtist + ' / ' + album.strAlbum"
      doubleTitle
      :image="album.strAlbumCDart"
    />
    <div class="flex justify-center w-screen overflow-hidden">
      <!-- set the max content width to 1024px / lg -->
      <div id="innerContainer" class="flex flex-col mb-8 justify-center">
        <!-- back button -->
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
            justify-between
            mb-4
            px-8
          "
        >
          <!-- release date -->
          <div class="flex">
            <p>Released in&nbsp;</p>
            <p class="text-indigo-600">{{ album.intYearReleased }},</p>
          </div>
          <!-- genre type -->
          <div class="flex">
            <p>&nbsp;in the genre of&nbsp;</p>
            <p class="text-indigo-600">{{ album.strGenre }},</p>
          </div>
          <!-- record label -->
          <div class="flex">
            <p>&nbsp;Record label&nbsp;</p>
            <p class="text-indigo-600">{{ album.strLabel }}</p>
          </div>
        </div>
        <!-- 1px divider line -->
        <div class="h-0 border-t mb-4 mx-8" />
        <!-- track list and artwork -->
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
      IdAlbum: decodeURI(window.location.pathname.split("/")[2]), // find the album id in the url
      album: {
        tracks: [],
      },
    };
  },
  async created() {
    // fetch album track data
    let trackResponse = await fetch(
      `https://theaudiodb.com/api/v1/json/2/track.php?m=${this.IdAlbum}`
    );
    const trackData = await trackResponse.json();
    this.album.tracks = trackData.track;

    // fetch the ablum artwork (not included in previous fetch)
    let albumResponse = await fetch(
      `https://theaudiodb.com/api/v1/json/2/album.php?i=${this.album.tracks[0].idArtist}`
    );
    const albumData = await albumResponse.json();

    // spread the responses into one object
    albumData.album.map((album) => {
      if (album.idAlbum == this.IdAlbum) {
        this.album = { ...album, ...this.album };
      }
    });
  },
  methods: {
    // navigate to the previous page
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