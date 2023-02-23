export default {
  actions: {
    async fetchProducts({ commit }) {
      fetch("http://localhost:3000/products")
        .then((response) => response.json())
        .then((products) => commit("updateProducts", products))
        .catch((error) => console.log(error));
    },
  },
  mutations: {
    addProductInCart(state, newProduct) {
      state.productsInCart.push(newProduct);
    },
    updateProducts(state, products) {
      state.allProducts = products;
    },
  },
  state: {
    allProducts: [],
    productsInCart: [],
  },
  getters: {
    productsInCartCount(state) {
      return state.productsInCart.length;
    },
    allProducts(state) {
      return state.allProducts;
    },
    addedInCartProducts(state) {
      return state.productsInCart;
    },
  },
};
