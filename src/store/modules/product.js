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
    pushProductInTheCart(state, newProduct) {
      const index = state.productsInTheCart.findIndex(
        (mass) => mass.findIndex((product) => product === newProduct) !== -1
      );
      index !== -1
        ? state.productsInTheCart[index].push(newProduct)
        : state.productsInTheCart.push([newProduct]);
    },
    deleteProductInCart(state, deleteProduct) {
      const index = state.productsInTheCart.findIndex(
        (mass) => mass.findIndex((product) => product === deleteProduct) !== -1
      );
      if (index !== -1) {
        state.productsInTheCart[index].length > 1
          ? state.productsInTheCart[index].splice(0, 1)
          : state.productsInTheCart.splice(index, 1);
      }
    },
    deleteAllProductsGroup(state, deleteGroup) {
      const index = state.productsInTheCart.findIndex(
        (group) => group === deleteGroup
      );
      if (index !== -1) state.productsInTheCart.splice(index, 1);
    },
    updateProducts(state, products) {
      state.allProducts = products;
    },
  },
  state: {
    allProducts: [],
    productsInTheCart: [],
    checkedProducts: [],
  },
  getters: {
    productsInCartCount(state) {
      return state.productsInTheCart.length;
    },
    allProducts(state) {
      return state.allProducts;
    },
    allProductsInTheCart(state) {
      return state.productsInTheCart;
    },
    allProductsInCartCountPrice(state) {
      return state.productsInTheCart.reduce((sum, group) => {
        return sum + group.reduce((acc, product) => acc + product.price, 0);
      }, 0);
    },
    allProductsInCartCount(state) {
      return state.productsInTheCart.reduce(
        (sum, group) => sum + group.length,
        0
      );
    },
  },
};
