<template>
  <div class="v-main-wrapper">
    <main
      class="v-main-wrapper__content flex-container flex-container-align-c flex-container-column"
    >
      <Suspense>
        <template #default>
          <keep-alive>
            <router-view> </router-view>
          </keep-alive>
        </template>
        <template #fallback>
          <h1>Loading...</h1>
        </template>
      </Suspense>
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
  color: white;
  min-height: 100vh;
  background: #282626;
  box-shadow: 0 0 10px orangered;
}
</style>
