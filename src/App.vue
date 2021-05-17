<template>
  <v-app>
    <Toolbar />
    <v-main class="main">
      <v-container id="container">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Toolbar from "../src/components/Toolbar";
export default {
  name: "App",
  components: {
    Toolbar,
  },
  data: () => ({}),
};
</script>
<style scoped>
/* .link {
  text-decoration: none;
  text-transform: capitalize;
  font-size: 12px;
  color: #673ab7;
} */
.main {
  background-color: #f0ebf8;
}
</style>
