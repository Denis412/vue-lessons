export default {
  actions: {
    async fetchProducts({ commit }) {
      const response = await fetch("http://localhost:3000/products");
      const products = await response.json();

      commit("updateProducts", products);
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
