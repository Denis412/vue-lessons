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
export default {
  name: "v-main-wrapper",
};
</script>

<style lang="scss">
.v-main-wrapper {
  color: white;
  max-width: 3000px;
  min-width: 100vw;
  min-height: 100vh;
  background: #282626;
  box-shadow: 0 0 10px orangered;
}
</style>
