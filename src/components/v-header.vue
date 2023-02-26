<template>
  <header
    class="header flex-container-justify-between flex-container flex-container-align-c"
  >
    <slot />
  </header>
</template>

<script>
export default {
  props: {},
};
</script>

<style lang="scss">
.header {
  min-height: 5rem;
  padding: 0 2rem;
  background: #171717;

  & p {
    font-size: 1rem;
    margin-left: 1rem;
  }
}
</style>
