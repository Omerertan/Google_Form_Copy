<template>
  <v-flex>
    <v-row v-for="item in answerList" :key="item.id">
      <v-col cols="12" sm="11" class="pa-1">
        <v-hover v-slot="{ hover }">
          <v-text-field
            v-model="item.answer"
            color="purple"
            :class="{ 'on-hover': hover }"
            prepend-icon="mdi-checkbox-blank-outline"
          >
          </v-text-field>
        </v-hover>
      </v-col>
      <v-col cols="12" sm="1" class="pa-1">
        <v-btn
          class="pa-0"
          small
          fab
          depressed
          icon
          @click="removeAnswer(item.id)"
        >
          <v-icon light> mdi-close </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" class="pa-1">
        <v-checkbox label="Seçenek Ekle" @click="addAnswer"></v-checkbox>
      </v-col>
    </v-row>
  </v-flex>
</template>
<script>
export default {
  name: "CheckBoxAnswer",
  props: {
    answerList: Array,
    id: Number,
  },
  methods: {
    addAnswer() {
      this.$store.commit("addAnswer", this.id);
    },
    removeAnswer(id) {
      this.$store.commit("removeAnswer", { questionId: this.id, answerId: id });
    },
  },
};
</script>
<style scoped>
.v-text-field >>> .v-input__slot::before {
  text-decoration: none;
}
.v-text-field:not(.on-hover) {
  opacity: 0.6;
}
</style>
