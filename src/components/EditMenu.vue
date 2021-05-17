<template>
  <div class="d-flex flex-column editMenu justify-center" id="editMenu">
    <v-btn class="mb-2" small icon>
      <v-icon>mdi-plus-circle-outline</v-icon>
    </v-btn>
    <v-btn class="mb-2" small icon>
      <v-icon>mdi-file-import-outline</v-icon>
    </v-btn>
    <v-btn class="mb-2" small icon>
      <v-icon>mdi-text-shadow</v-icon>
    </v-btn>
    <v-btn class="mb-2" small icon>
      <v-icon>mdi-image-outline</v-icon>
    </v-btn>
    <v-btn class="mb-2" small icon>
      <v-icon>mdi-video-outline</v-icon>
    </v-btn>
    <v-btn class="mb-2" small icon>
      <v-icon>mdi-view-agenda-outline</v-icon>
    </v-btn>
  </div>
</template>
<script>
export default {
  name: "EditMenu",
  data: () => ({
    deneme: "dneme",
  }),
};
</script>
<style scoped>
.editMenu {
  background-color: white;
  border: 1px solid #dadce0;
  border-radius: 8px;
  padding: 10px;
}

@media screen and (max-width: 700px) {
  .editMenu {
    display: none !important;
  }
}
</style>
