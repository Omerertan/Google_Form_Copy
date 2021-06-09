import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    formTitle: "Başlıksız Form",
    formDescription: "Form Açıklaması",
    selectedAnswer: "Kısa Yanıt",
    questionArray: [
      {
        id: 0,
        name: "Soru 1",
        image: "",
        answerType: "ShortAnswer",
        answers: [],
      },
      {
        id: 1,
        name: "Soru 2",
        image: "",
        answerType: "Paragraph",
        answers: [],
      },
      {
        id: 2,
        name: "Soru 3",
        image: "",
        answerType: "Paragraph",
        answers: [],
      },
      {
        id: 3,
        name: "Soru 4",
        image: "",
        answerType: "MultipleChoiceAnswer",
        answers: [
          {
            id: 1,
            answer: "1.Yanıt",
          },
          {
            id: 2,
            answer: "2.Yanıt",
          },
          {
            id: 3,
            answer: "3.Yanıt",
          },
        ],
      },
    ],
    answerList: [
      {
        id: 1,
        name: "Kısa Yanıt",
        componentName: "ShortAnswer",
      },
      {
        id: 2,
        name: "Paragraf",
        componentName: "Paragraph",
      },
      {
        id: 3,
        name: "Çoktan seçmeli",
        componentName: "MultipleChoiceAnswer",
      },
      {
        id: 4,
        name: "Onay kutuları",
        componentName: "CheckBoxAnswer",
      },
      {
        id: 5,
        name: "Açılır menü",
        componentName: "DropDownMenu",
      },
      {
        id: 6,
        name: "Doğrusal ölçek",
        componentName: "LinearScale",
      },
      {
        id: 7,
        name: "Çoktan seçmeli tablosu",
        componentName: "MultipleChoiceTable",
      },
      {
        id: 8,
        name: "Onay kutusu tablosu",
        componentName: "CheckBoxTable",
      },
    ],
    multipleChoiceAnswer: {
      id: 1,
      title: "1.seçenek",
      image: "",
    },
    checkBoxAnswer: {
      id: 1,
      title: "1.seçenek",
    },
    shortAnswer: {
      text: "",
    },
    longAnswer: {
      text: "",
    },
    dropDownMenuAnswer: {
      id: 1,
      title: "1.seçenek",
    },
    linearScaleAnswer: {
      initialValue: 0,
      finalValue: 0,
      initialValueTitle: "",
      finalValueTitle: "",
    },
    multipleChoiceTable: {
      id: 1,
      rowTitle: "",
      column: {
        id: 1,
      },
    },
    columnTableAnswer: {
      id: 1,
      title: "",
      columnType: "",
    },
  },
  getters: {
    getHeaderTitle(state) {
      return state.formTitle;
    },
    getHeaderDescription(state) {
      return state.formDescription;
    },
    getAnswerList(state) {
      return state.answerList;
    },
    getQuestionArray(state) {
      return state.questionArray;
    },
    getQuestionType(state) {
      // Card atanan soru tipi
      return state.card.questionType;
    },
    getSelectedAnswer(state) {
      return state.selectedAnswer;
    },
  },
  mutations: {
    setHeaderTitle(state, value) {
      state.formTitle = value;
    },
    setHeaderDescription(state, value) {
      state.formDescription = value;
    },
    addQuestion(state, value) {
      // let l = state.questionArray.length;
      let item = {
        id: value,
        name: "Soru ",
        image: "",
        answerType: "ShortAnswer",
        answers: [],
      };
      // state.questionArray.push(item);
      // console.log("Sorular: ", state.questionArray);
      // console.log("id: ", value);
      state.questionArray.splice(value, 0, item);
      for (let index = 0; index < state.questionArray.length; index++) {
        state.questionArray[index].id = index;
      }
    },
    copyQuestion(state, value) {
      // console.log("copy: ", value);
      let item = {
        id: value.id,
        name: value.name,
        image: value.image,
        answerType: value.answerType,
        answers: value.answers,
      };
      state.questionArray.splice(item.id, 0, item);
      for (let index = 0; index < state.questionArray.length; index++) {
        state.questionArray[index].id = index;
      }
    },
    removeQuestion(state, value) {
      let item = { id: value.id };
      let element = state.questionArray.findIndex((x) => x.id === item.id);
      if (element >= 0) {
        state.questionArray.splice(element, 1);
      }
      // console.log(element);
    },
    updateQuestionList(state, value) {
      let item = state.questionArray.find((x) => x.id === value.id);
      if (item) {
        item.name = value.name;
      }
    },
    setQuestionImage(state, value) {
      let obj = {
        id: value.id,
        imageUrl: value.image,
      };
      let item = state.questionArray.find((x) => x.id === obj.id);
      item.image = obj.imageUrl;
      // console.log(value);
    },
    setDraggableQuestion(state) {
      for (let index = 0; index < state.questionArray.length; index++) {
        state.questionArray[index].id = index;
      }
    },
    removeQuestionImage(state, id) {
      let item = state.questionArray.find((x) => x.id === id);
      item.image = "";
    },
    addAnswer(state, id) {
      let item = state.questionArray.find((x) => x.id === id);
      let total = item.answers.length;
      total != 0 || total != null ? total++ : total;
      item.answers.push({ id: total, answer: total + ". Yanıt" });
    },
    removeAnswer(state, value) {
      let item = state.questionArray.find((x) => x.id === value.questionId);
      let index = item.answers.findIndex((x) => x.id === value.answerId);
      item.answers.splice(index, 1);
    },
  },
  actions: {},
  modules: {},
});
