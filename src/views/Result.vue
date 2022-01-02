<template>
  <div class="Result">
    <Header
      :title="artistName"
      doubleTitle
      :image="artistData.strArtistClearart"
      v-if="artistData"
    />
    <div class="flex justify-center">
      <div id="innerContainer" class="flex gap-24 mb-8">
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
      artistName: decodeURI(window.location.pathname.split("/")[2]),
      artistData: null,
    };
  },
  async created() {
    // console.log(this.artistName);

    let response = await fetch(
      `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${this.artistName}`
    );
    const data = await response.json();
    this.artistData = data.artists[0];

    console.log(this.artistData);
  },
};
</script>

<style scoped>
#innerContainer {
  width: 1024px;
}
</style>
