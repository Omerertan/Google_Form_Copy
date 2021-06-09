<template>
  <v-row class="mx-auto">
    <v-col cols="12" sm="11">
      <v-alert
        :border="visible"
        colored-border
        color="#4285f4"
        elevation="2"
        @click="giveStick"
        v-click-outside="changeStick"
        id="alert"
      >
        <v-row class="ml-1 mr-1 col-sm-12">
          <div class="stick d-flex justify-center">
            <v-icon>mdi-drag-horizontal</v-icon>
          </div>
          <v-col cols="12" sm="5" class="d-flex">
            <v-text-field placeholder="Soru" v-model="item.name">
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="1" class="align-center d-flex">
            <v-btn
              class="pa-0"
              small
              fab
              depressed
              icon
              append-icon="mdi-image"
              @click="$refs.questionImage.click()"
            >
              <v-icon light> mdi-image-outline </v-icon>
            </v-btn>
            <input
              v-show="false"
              ref="questionImage"
              type="file"
              @change="addQuestionImage($event, item)"
            />
            <!-- <p>{{ item.image }}</p> -->
          </v-col>
          <v-col cols="12" sm="5" class="d-flex align-end py-2">
            <v-select
              :items="getAnswerList"
              item-text="name"
              item-value="componentName"
              :option="getAnswerList"
              v-model="item.answerType"
              dense
              outlined
              hide-selected
            >
            </v-select>
          </v-col>
        </v-row>

        <v-row class="ml-1 mr-1 d-flex col-sm-12" no-gutters v-if="item.image">
          <ImageInput :imageString="item.image" :id="item.id" />
        </v-row>

        <v-row class="ml-1 mr-1 d-flex col-sm-12" v-if="editForm" no-gutters>
          <v-col cols="12" sm="10" class="pa-1">
            <component
              :is="item.answerType"
              :answerList="item.answers"
              :id="item.id"
            >
              <CheckBoxAnswer />
              <CheckBoxTable />
              <DropDownMenu />
              <LinearScale />
              <MultipleChoiceAnswer />
              <MultipleChoiceTable />
              <Paragraph />
              <ShortAnswer />
            </component>
          </v-col>
          <!-- question image and question remove icon will be deleted from here -->
        </v-row>

        <v-row class="d-flex mx-auto pt-4 topStick">
          <v-col
            class="d-flex justify-end py-0 rightStick"
            cols="12"
            sm="9"
            md="9"
          >
            <v-btn depressed icon class="mr-1" @click="copyQuestion(item)">
              <v-icon dark> mdi-content-copy </v-icon>
            </v-btn>
            <v-btn depressed icon @click="removeQuestion(item)">
              <v-icon dark> mdi-delete </v-icon>
            </v-btn>
          </v-col>
          <v-col class="d-flex justify-center py-1" cols="12" sm="3">
            <p class="mx-auto">Gerekli</p>
          </v-col>
        </v-row>
      </v-alert>
    </v-col>
    <!-- edit menü -->
    <v-col
      tag="div"
      cols="12"
      sm="1"
      class="d-flex flex-column align-center d-sm-none d-md-flex"
      outlined
      v-if="editForm"
    >
      <div class="d-flex flex-column editMenu justify-center" id="editMenu">
        <v-btn class="mb-2" small icon @click="addQuestion(item.id)">
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
import CheckBoxAnswer from "./answers/CheckBoxAnswer";
import CheckBoxTable from "./answers/CheckBoxTable";
import DropDownMenu from "./answers/DropDownMenu";
import LinearScale from "./answers/LinearScale";
import MultipleChoiceAnswer from "./answers/MultipleChoiceAnswer";
import MultipleChoiceTable from "./answers/MultipleChoiceTable";
import Paragraph from "./answers/Paragraph";
import ShortAnswer from "./answers/ShortAnswer";
import ImageInput from "./ImageInput";
export default {
  name: "Card",
  components: {
    CheckBoxAnswer,
    CheckBoxTable,
    DropDownMenu,
    LinearScale,
    MultipleChoiceAnswer,
    MultipleChoiceTable,
    Paragraph,
    ShortAnswer,
    ImageInput,
  },
  data: () => ({
    visible: undefined,
    editForm: false,
    selected: "",
    questionImageUrl: "",
    answerImageUrl: "",
  }),
  props: {
    question: Object,
    id: Number,
  },
  methods: {
    giveStick() {
      this.visible = "left";
      this.editForm = true;
    },
    changeStick() {
      this.visible = undefined;
      this.editForm = false;
    },
    removeAnswer() {
      // Cevabı silmek için
      console.log("Cevap silindi");
    },
    addQuestion(value) {
      // console.log("Card id:", id);
      this.$store.commit("addQuestion", value);
    },
    copyQuestion(item) {
      this.$store.commit("copyQuestion", item);
      // console.log(item);
    },
    removeQuestion(item) {
      // console.log(item.id);
      this.$store.commit("removeQuestion", item);
    },
    addQuestionImage(e) {
      const files = e.target.files;
      this.imageBase64(files, "question");
    },
    addAnswerImage(e) {
      const files = e.target.files;
      this.imageBase64(files, "answer");
      // console.log("Cevap image: ", this.answerImageUrl);
    },
    imageBase64(files, t) {
      if (files[0] !== undefined) {
        if (files[0].name.lastIndexOf(".") <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(files[0]);

        fr.addEventListener("load", () => {
          if (t == "question") {
            this.$store.commit("setQuestionImage", {
              id: this.id,
              image: fr.result,
            });
          } else {
            this.answerImageUrl = fr.result;
          }
          // this.$store.commit("setImagePerson",this.imageFileUrl);
        });
      } else {
        this.clearImage();
      }
    },
    clearImage() {
      this.questionImageUrl = "";
      this.answerImageUrl = "";
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
  padding: 10px;
  border: 1.5px solid #dadce0;
  border-radius: 8px;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
    0 1px 1px 0 rgba(0, 0, 0, 0.141), 0 1px 3px 0 rgba(0, 0, 0, 0.122);
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
