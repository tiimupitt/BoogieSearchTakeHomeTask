// display artist search results

<template>
  <div class="Result">
    <Header
      :title="artistName"
      doubleTitle
      :image="artistData.strArtistClearart"
      v-if="artistData"
    />
    <div class="flex justify-center">
      <!-- set the max content width to 1024px / lg -->
      <div class="flex gap-24 mb-8 w-full max-w-screen-lg">
        <!-- back button -->
        <router-link
          to="/index"
          class="absolute top-0 text-white opacity-60 mt-4 ml-10 text-lg"
          ><font-awesome-icon icon="long-arrow-alt-left" />
          &nbsp;Back</router-link
        >
        <ArtistAlbums :artistData="artistData" v-if="artistData" />
        <ArtistGallery :artistData="artistData" v-if="artistData" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import ArtistAlbums from "../components/ArtistAlbums.vue";
import ArtistGallery from "../components/ArtistGallery.vue";

export default {
  name: "Result",
  components: {
    Header,
    ArtistAlbums,
    ArtistGallery,
  },
  data() {
    return {
      artistName: decodeURI(window.location.pathname.split("/")[2]), // find the artist name in the url
      artistData: null,
    };
  },
  async created() {
    // fetch data for the artist
    let response = await fetch(
      `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${this.artistName}`
    );
    const data = await response.json();
    this.artistData = data.artists[0];
  },
};
</script>

