<template>
  <div
    class="v-main-wrapper flex-container flex-container-align-c flex-container-column"
  >
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "v-main-wrapper",
  components: {},
  computed: mapGetters(["productsInCartCount"]),
};
</script>

<style lang="scss">
.v-main-wrapper {
  color: white;
  min-height: 100vh;
  background: #282626;
  box-shadow: 0 0 10px orangered;
}
</style>
