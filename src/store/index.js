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
      name: "",
      image: "",
      answerType: "Soru tipi",
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
    updateQuestionList(state, value) {
      let item = state.questionArray.findIndex((x) => x.id === value.id);
      if (item) {
        item.name = value.name;
      }
    },
    setCardId(state, { newValue, oldValue }) {
      let moveItem = state.questionArray.find((x) => x.id === oldValue);
      let item = state.questionArray.find((x) => x.id === newValue);
      if (item && moveItem) {
        item.id = item.id + 1;
        moveItem.id = newValue;
      }
      // console.log("Actual: ", state.questionArray);
      // state.questionArray = value;
    },
  },
  actions: {},
  modules: {},
});
