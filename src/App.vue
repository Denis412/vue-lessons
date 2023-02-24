<template>
  <div id="app">
    <h1>Мой магазин</h1>
    <VMainWrapper />
  </div>
</template>

<script>
import VMainWrapper from "@/components/v-main-wrapper.vue";
export default {
  name: "app",
  components: {
    VMainWrapper,
  },
};
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";

* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
}

body {
  background: #f1f1f1;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
