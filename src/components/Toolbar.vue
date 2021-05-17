<template>
  <v-card id="card">
    <v-toolbar color="white" flat>
      <v-app-bar color="white" flat>
        <v-img
          alt="Google Form Copy"
          class="shrink mr-2"
          contain
          src="@/assets/icon.png"
          transition="scale-transition"
          width="40"
        />
        <v-toolbar-title>{{ title }}</v-toolbar-title>
      </v-app-bar>

      <v-spacer></v-spacer>

      <!-- <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn> -->

      <v-btn class="deep-purple accent-5" dark> Gönder </v-btn>

      <!-- <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn> -->

      <template v-slot:extension>
        <v-tabs class="d-flex justify-center">
          <v-tabs-slider color="deep-purple accent-5"></v-tabs-slider>

          <!-- <v-tab
              v-for="item in tabs"
              :key="item"
              color="deep-purple accent-5"
            >
              <router-link :to="item.link" class="link">
                {{ item.name }}
              </router-link>
            </v-tab> -->
          <v-tab color="deep-purple accent-5" to="/" class="link">
            Sorular
          </v-tab>
          <v-tab color="deep-purple accent-5" to="/response" class="link">
            Yanıtlar
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <!-- <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in tabs" :key="item">
          <v-card flat>
            <v-card-text v-text="text"></v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items> -->
  </v-card>
</template>
<script>
export default {
  name: "Toolbar",
  data: () => ({
    deneme: "Başlıksız Form",
  }),
  computed: {
    title() {
      return this.$store.getters.getHeaderTitle;
    },
  },
};
</script>
<style scoped>
.link {
  text-decoration: none;
  text-transform: capitalize;
  font-size: 12px;
  color: #673ab7;
}
#card {
  position: fixed;
  width: 100%;
  z-index: 5;
}
</style>
