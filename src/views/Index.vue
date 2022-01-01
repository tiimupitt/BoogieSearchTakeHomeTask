<template>
  <div class="Index">
    <Header title="Album Search" />
    <!-- <form
      method="get"
      action="https://www.theaudiodb.com/api/v1/json/2/search.php?s=coldplay"
      class="flex justify-center px-48"
    >
      <Input icon="search" placeholder="Search artist" />
    </form> -->

    <ArtistSearchForm />
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