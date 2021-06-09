<template>
  <v-container class="fill-height" fluid style="max-height: 500px">
    <v-row align="center" class="d-flex justify-center" no-gutters>
      <v-col cols="6">
        <v-img :src="imageString" aspect-ratio="1" height="250" contain>
          <v-btn
            absolute
            color="red"
            class="white--text"
            fab
            small
            @click="removeImage"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "ImageInput",
  props: {
    imageString: String,
    id: Number,
  },
  methods: {
    removeImage() {
      // console.log("Image :", { id: this.id });
      this.$store.commit("removeQuestionImage", this.id);
    },
  },
};
</script>
<style scoped></style>
