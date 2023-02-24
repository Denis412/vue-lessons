<template>
  <div class="v-main-wrapper">
    <main class="v-main-wrapper__content">
      <keep-alive>
        <router-view> </router-view>
      </keep-alive>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "v-main-wrapper",
  data() {
    return {
      title: "My store",
    };
  },
  computed: mapGetters(["productsInCartCount"]),
};
</script>

<style lang="scss">
.v-main-wrapper__content {
  display: flex;
  flex-direction: column;
  //justify-content: center;
  min-height: 100vh;
  align-items: center;
  background: #e3e2e2;
  box-shadow: 0 0 10px gray;
}
</style>
