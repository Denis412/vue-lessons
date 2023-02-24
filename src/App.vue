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

.flex-container {
  display: flex;

  &-column {
    flex-direction: column;
  }

  &-justify-between {
    justify-content: space-between;
  }

  &-align-c {
    align-items: center;
  }
}

.white-color-text {
  color: white;
}

.black-container {
  box-shadow: 0 0 8px 0 orangered;
  border-radius: 1rem;
  background: #131313;
}

.clickable-text {
  color: #57579a;
  margin-top: 0.5rem;
  cursor: pointer;
}

.button-active {
  color: white;
  border: none;
  border-radius: 6px;
  background: orangered;
  cursor: pointer;
  transition: 0.2s;

  &:focus {
    background: orangered;
  }

  &:active {
    transform: scale(0.95);
    background: #fc5a1d;
  }
}
</style>
