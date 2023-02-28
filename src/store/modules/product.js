export default {
  actions: {
    fetchProducts({ commit }) {
      fetch("http://localhost:3000/products")
        .then((response) => response.json())
        .then((products) => {
          commit("updateError", {});
          commit("updateProducts", products);
        })
        .catch(() => {
          commit("updateError", new Error("Ошибка запроса на сервер!"));
        });
    },
  },
  mutations: {
    pushProductInTheCart(state, newProduct) {
      newProduct.quantity++;
      if (newProduct.quantity <= 1) state.productsInTheCart.push(newProduct);
    },

    deleteProductInCart(state, deleteProduct) {
      deleteProduct.quantity--;
      if (deleteProduct.quantity < 1) {
        state.productsInTheCart = state.productsInTheCart.filter(
          (product) => product !== deleteProduct
        );
      }
    },

    deleteAllProductsGroup(state, deleteGroup) {
      deleteGroup.quantity = 0;
      state.productsInTheCart = state.productsInTheCart.filter(
        (product) => product !== deleteGroup
      );
    },

    updateProducts(state, products) {
      state.allProducts = products;
    },

    updateError(state, error) {
      state.error = error;
    },
  },
  state: {
    allProducts: [],
    productsInTheCart: [],
    error: {},
  },
  getters: {
    productsInCartCount(state) {
      return state.productsInTheCart.length;
    },

    error(state) {
      return state.error;
    },

    allProducts(state) {
      return state.allProducts;
    },

    allProductsInTheCart(state) {
      return state.productsInTheCart;
    },

    allProductsInCartCount(state) {
      return state.productsInTheCart.reduce(
        (sum, product) => sum + product.quantity,
        0
      );
    },

    allProductsInCartCountPrice(state) {
      return state.productsInTheCart.reduce(
        (sum, product) => sum + product.quantity * product.price,
        0
      );
    },
  },
};
