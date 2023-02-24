<template>
  <div class="v-main-wrapper">
    <keep-alive>
      <router-view> </router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "v-main-wrapper",
  data() {
    return {
      title: "My store",
    };
  },
};
</script>

<style lang="scss">
.v-main-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
}
</style>
