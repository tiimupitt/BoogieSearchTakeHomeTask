<template>
  <div class="w-full">
    <h2 class="text-xl text-gray-800 font-bold text-left mb-4">
      {{ album.tracks.length }} tracks
    </h2>
    <div class="w-full rounded-md overflow-hidden shadow-md">
      <div
        v-for="(track, index) in album.tracks"
        :key="track.idTrack"
        :class="`${
          index % 2 ? 'bg-gray-200' : 'bg-gray-100'
        } py-4 px-8 w-full flex justify-between text-center`"
      >
        <p>{{ index + 1 }}. {{ track.strTrack }}</p>
        <p>{{ convertDuration(track.intDuration) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlbumTracks",
  props: {
    album: Object,
  },
  methods: {
    //   convert track time from ms into mins and seconds
    convertDuration(duration) {
      duration /= 60000;
      duration = duration.toString();
      let splitTime = duration.split(".");
      return `${splitTime[0]} minutes ${splitTime[1].slice(0, 2)} seconds`;
    },
  },
};
</script>