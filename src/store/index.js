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
        answerType: "Kısa Yanıt",
      },
      {
        id: 1,
        name: "Soru 2",
        answerType: "Paragraf",
      },
      {
        id: 2,
        name: "Soru 3",
        answerType: "Paragraf",
      },
      {
        id: 3,
        name: "Soru 4",
        answerType: "Paragraf",
      },
    ],
    answerList: [
      {
        id: 1,
        name: "Kısa Yanıt",
      },
      {
        id: 2,
        name: "Paragraf",
      },
      {
        id: 3,
        name: "Çoktan seçmeli",
      },
      {
        id: 4,
        name: "Onay kutuları",
      },
      {
        id: 5,
        name: "Açılır menü",
      },
      {
        id: 6,
        name: "Doğrusal ölçek",
      },
      {
        id: 7,
        name: "Çoktan seçmeli tablosu",
      },
      {
        id: 8,
        name: "Onay kutusu tablosu",
      },
      {
        id: 9,
        name: "Onay kutusu tablosu",
      },
      {
        id: 10,
        name: "Tarih",
      },
      {
        id: 11,
        name: "Saat",
      },
    ],
    card: {
      id: 1,
      name: "Soru",
      image: "",
      answerType: "Kısa Yanıt",
      answers: [],
    },
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
        answerType: "Kısa Yanıt",
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
    setDraggableQuestion(state) {
      for (let index = 0; index < state.questionArray.length; index++) {
        state.questionArray[index].id = index;
      }
    },
  },
  actions: {},
  modules: {},
});
