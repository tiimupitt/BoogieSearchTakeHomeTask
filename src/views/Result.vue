<template>
  <div class="Result">
    <Header
      :title="artistName"
      doubleTitle
      :image="artistData.strArtistClearart"
      v-if="artistData"
    />
    <Albums :artistData="artistData" v-if="artistData" />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Albums from "../components/Albums.vue";
export default {
  name: "Result",
  components: {
    Header,
    Albums,
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
