<template>
  <div class="home">
    <v-row no-gutters>
      <HeaderCard />
    </v-row>
    <draggable
      :list="qList"
      @end="onEnd"
      :force-fallback="true"
      :scroll-sensitivity="150"
    >
      <transition-group type="transition">
        <v-row
          v-for="element in qList"
          :key="element.id"
          :id="element.id"
          no-gutters
        >
          <Card :question="element" :id="element.id" />
          <p>{{ element }}</p>
        </v-row>
      </transition-group>
    </draggable>

    <p>Previous Index: {{ oldIndex }}</p>
    <p>Next Index: {{ newIndex }}</p>
  </div>
</template>

<script>
import Card from "../components/Card";
import HeaderCard from "../components/HeaderCard";
import draggable from "vuedraggable";
export default {
  name: "Home",
  components: {
    Card,
    HeaderCard,
    draggable,
  },
  data: () => ({
    questionArray: [],
    oldIndex: "",
    newIndex: "",
  }),
  created() {
    this.getQuestions();
  },
  methods: {
    onEnd(evt) {
      console.log(evt.newIndex);
      this.oldIndex = evt.oldIndex;
      this.newIndex = evt.newIndex;
      this.$store.commit("setCardId", {
        newValue: evt.newIndex,
        oldValue: evt.oldIndex,
      });
    },
    getQuestions() {
      this.questionArray = this.$store.getters.getQuestionArray;
      console.log(this.questionArray);
    },
  },
  computed: {
    qList() {
      return this.$store.getters.getQuestionArray;
    },
  },
};
</script>
<style scoped>
.home {
  width: 770px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 110px;
}
</style>
