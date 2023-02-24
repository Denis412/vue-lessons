<template>
  <VMainWrapper />
</template>

<script>
import VMainWrapper from "@/components/v-main-wrapper.vue";
import { mapGetters } from "vuex";
export default {
  name: "app",
  components: {
    VMainWrapper,
  },
  computed: mapGetters(["productsInCartCount"]),
};
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";

* {
  padding: 0;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  background: #f1f1f1;
}

#app {
  width: 1800px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}
</style>
