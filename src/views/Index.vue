<template>
  <div class="Index">
    <Header title="Album Search" />
    <div class="flex justify-center px-48">
      <Input icon="search" placeholder="Search artist" />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Input from "../components/Input";

export default {
  name: "Index",
  components: {
    Header,
    Input,
  },
};
</script>