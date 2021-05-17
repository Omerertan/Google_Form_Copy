<template>
  <v-row class="mx-auto col-md-12">
    <v-col cols="12" sm="11" md="11">
      <v-alert
        :border="visible"
        colored-border
        color="#4285f4"
        elevation="2"
        @click="giveStick"
        v-click-outside="changeStick"
        id="alert"
      >
        <v-row class="ml-1 mr-1">
          <div class="stick d-flex justify-center">
            <v-icon>mdi-drag-horizontal</v-icon>
          </div>
          <v-col cols="12" sm="6" md="6" class="d-flex">
            <v-text-field label="Soru" v-model="item.name"> </v-text-field>
          </v-col>
          <v-col cols="12" sm="1" md="1" class="align-center d-flex">
            <v-btn
              class="pa-0"
              small
              fab
              depressed
              icon
              append-icon="mdi-image"
            >
              <v-icon light> mdi-image-outline </v-icon>
            </v-btn>
          </v-col>
          <v-col cols="12" sm="5" md="5" class="d-flex align-end py-2">
            <v-select
              :items="getAnswerList"
              item-text="name"
              item.value="name"
              :option="getAnswerList"
              v-model="item.answerType"
              dense
              outlined
              hide-selected
            >
            </v-select>
          </v-col>
        </v-row>

        <v-row class="ml-1 mr-1 d-flex">
          <v-col cols="12" sm="10" md="10" class="pa-1"
            ><v-text-field
              label="Kısa yanıt metni"
              append-outer-icon="mdi-close"
              @click:append-outer="removeAnswer"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="1" md="1" class="pa-0 d-flex mx-auto mt-4">
            <v-btn class="pa-0" small fab depressed icon>
              <v-icon light> mdi-image-outline </v-icon>
            </v-btn>
          </v-col>
        </v-row>

        <v-row class="d-flex mx-auto pt-4 topStick">
          <v-col
            class="d-flex justify-end py-0 rightStick"
            cols="12"
            sm="9"
            md="9"
          >
            <v-btn depressed icon class="mr-1">
              <v-icon dark> mdi-content-copy </v-icon>
            </v-btn>
            <v-btn depressed icon>
              <v-icon dark> mdi-delete </v-icon>
            </v-btn>
          </v-col>
          <v-col class="d-flex justify-center py-1" cols="12" sm="3" md="3">
            <p class="mx-auto">Gerekli</p>
          </v-col>
        </v-row>
      </v-alert>
    </v-col>
    <v-col
      tag="div"
      cols="12"
      sm="1"
      md="1"
      class="d-flex flex-column align-center d-sm-none d-md-flex"
      outlined
      v-if="editForm"
    >
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
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Card",
  components: {},
  data: () => ({
    visible: undefined,
    editForm: false,
    selected: "",
  }),
  props: {
    question: Object,
    id: Number,
  },
  methods: {
    giveStick() {
      this.visible = "left";
      this.editForm = true;
      // console.log({
      //   id: this.question.id,
      //   name: this.question.name,
      // });
    },
    changeStick() {
      this.visible = undefined;
      this.editForm = false;
    },
    removeAnswer() {
      // Cevabı silmek için
      console.log("Cevap silindi");
    },
  },
  computed: {
    getAnswerList() {
      return this.$store.getters.getAnswerList;
    },
    getQuestionType() {
      return this.$store.getters.getQuestionType;
    },
    item: {
      get() {
        return this.question;
      },
      set(value) {
        this.$store.commit("updateQuestionList", {
          id: this.question.id,
          name: value,
        });
      },
    },
  },
};
</script>

<style scoped>
.rightStick {
  height: 32px;
  border-right: 1.5px solid #e0e0e0;
}
.topStick {
  border-top: 1px solid #e0e0e0;
}
.editMenu {
  background-color: white;
  border: 1px solid #dadce0;
  border-radius: 8px;
  padding: 10px;
}
.stick {
  width: 100%;
  height: 12px;
  background-color: white;
}
.stick:hover {
  cursor: all-scroll;
}

@media screen and (max-width: 700px) {
  .editMenu {
    display: none !important;
  }
}
</style>
