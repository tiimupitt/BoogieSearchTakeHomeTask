// home page for searching music artists

<template>
  <div class="Index">
    <Header title="Album Search" />
    <div class="flex justify-center">
      <!-- set the max content width to 1024px / lg -->
      <div id="innerContainer" class="flex justify-center">
        <ArtistSearchForm />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import ArtistSearchForm from "../components/ArtistSearchForm";

export default {
  name: "Index",
  components: {
    Header,
    ArtistSearchForm,
  },
};
</script>

<style scoped>
#innerContainer {
  width: 1024px;
}
</style>