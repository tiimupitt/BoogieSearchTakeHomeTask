// home page for searching music artists

<template>
  <div class="Index">
    <Header title="Album Search" />
    <div class="flex justify-center">
      <!-- set the max content width to 1024px / lg -->
      <div class="flex justify-center w-full max-w-screen-lg">
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