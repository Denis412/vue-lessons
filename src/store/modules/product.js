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
      state.productsInCart.push(
        // Добавление поля id для карточек товаров, добавленных в корзину
        Object.assign({}, newProduct, { id: state.productsInCart.length + 1 })
      );
    },
    deleteProductInCart(state, deleteProduct) {
      const index = state.productsInCart.findIndex(
        (product) => deleteProduct.id === product.id
      );
      // console.log(deleteProduct === state.allProducts[index]);
      if (index !== -1) state.productsInCart.splice(index, 1);
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
