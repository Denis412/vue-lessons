<template>
  <div v-if="error" class="v-modal-shadow">
    <div
      class="v-modal-wrapper black-container flex-container flex-container-column flex-container-align-c white-color-text"
    >
      <header class="v-modal-header link-default-orangered flex-container">
        <slot name="header">
          <h2>Header</h2>
        </slot>
      </header>
      <main class="v-modal-main">
        <slot name="main">
          <div class="v-modal-content">Content</div>
        </slot>
      </main>
      <footer class="v-modal-footer">
        <slot name="footer">
          <div>
            <button>Ok</button>
            <button>Cancel</button>
          </div>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    return {
      error: computed(() => store.getters.error.message),
    };
  },
};
</script>

<style lang="scss">
.v-modal-shadow {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.4);
}

.v-modal-wrapper {
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;

  padding: 1rem;

  width: 50rem;
  min-height: 15rem;

  transform: translate(-50%, -50%);

  & h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
}

.v-modal-header {
  width: 100%;
  justify-content: center;
}

.v-modal-main {
  margin-top: 1rem;
}

.v-modal-footer {
  margin-top: 1rem;
}
</style>
