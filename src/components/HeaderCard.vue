<template>
  <v-row class="mx-auto col-md-12">
    <v-col cols="12" sm="11" md="11">
      <div class="stick"></div>
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
          <v-col cols="12" sm="12" md="12" class="d-flex"
            ><v-text-field
              placeholder="Başlıksız form"
              v-model="title"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="ml-1 mr-1">
          <v-col cols="12" sm="12" md="12" class="text-sm-body-2"
            ><v-text-field
              placeholder="Form açıklaması"
              v-model="description"
              dense
            ></v-text-field>
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
      v-if="formEditor"
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
    // items: ["Foo", "Bar", "Fizz", "Buzz"],
    compName: "header",
    visible: undefined,
    formEditor: false,
  }),
  methods: {
    giveStick() {
      this.visible = "left";
      this.formEditor = true;
    },
    changeStick() {
      this.visible = undefined;
      this.formEditor = false;
      this.$store.getters.getHeaderTitle == ""
        ? this.$store.commit("setHeaderTitle", "Başlıksız form")
        : null;
    },
  },
  computed: {
    title: {
      get() {
        return this.$store.getters.getHeaderTitle;
      },
      set(value) {
        this.$store.commit("setHeaderTitle", value);
      },
    },
    description: {
      get() {
        return this.$store.getters.getHeaderDescription;
      },
      set(value) {
        this.$store.commit("setHeaderDescription", value);
      },
    },
  },
};
</script>

<style scoped>
.stick {
  width: 100%;
  height: 10px;
  background-color: #673ab7;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
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
