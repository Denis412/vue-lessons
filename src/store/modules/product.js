export default {
  actions: {
    fetchProducts({ commit }) {
      fetch("http://localhost:3000/products")
        .then((response) => response.json())
        .then((products) => commit("updateProducts", products))
        .catch((error) => console.log(error));
    },
  },
  mutations: {
    addProductInCart(state, newProduct) {
      const index = state.productsInCart.findIndex(
        (mass) => mass.findIndex((product) => product === newProduct) !== -1
      );
      index !== -1
        ? state.productsInCart[index].push(newProduct)
        : state.productsInCart.push([newProduct]);
    },
    deleteProductInCart(state, deleteProduct) {
      const index = state.productsInCart.findIndex(
        (mass) => mass.findIndex((product) => product === deleteProduct) !== -1
      );
      if (index !== -1) {
        state.productsInCart[index].length > 1
          ? state.productsInCart[index].splice(0, 1)
          : state.productsInCart.splice(index, 1);
      }
    },
    updateProducts(state, products) {
      state.allProducts = products;
    },
  },
  state: {
    allProducts: [],
    productsInCart: [],
    checkedProducts: [],
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
    allProductsInCartCountPrice(state) {
      return state.productsInCart.reduce((sum, group) => {
        return sum + group.reduce((acc, product) => acc + product.price, 0);
      }, 0);
    },
    allProductsInCartCount(state) {
      return state.productsInCart.reduce((sum, group) => sum + group.length, 0);
    },
  },
};
