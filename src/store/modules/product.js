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
      const group = state.productsInTheCart.find((mass) =>
        mass.find((product) => product === newProduct)
      ); // Поиск группы товаров newProduct

      // Если соответствующая группа найдена,
      // то добавляем в ее конец newProduct,
      // иначе - создаем группу и добавляем туда newProduct
      group
        ? group.push(newProduct)
        : state.productsInTheCart.push([newProduct]);
    },

    deleteProductInCart(state, deleteProduct) {
      const group = state.productsInTheCart.find((gr) =>
        gr.find((product) => product === deleteProduct)
      ); // Поиск группы товаров deleteProduct

      // Если соответствующая группа найдена и ее размер больше одного товара,
      // то удаляем с ее конца deleteProduct,
      // иначе если размер группы один товар - удаляем всю группу
      if (group) {
        group.length > 1
          ? group.pop()
          : (state.productsInTheCart = state.productsInTheCart.filter(
              (gr) => gr !== group
            ));
      }
    },

    deleteAllProductsGroup(state, deleteGroup) {
      state.productsInTheCart = state.productsInTheCart.filter(
        (group) => group !== deleteGroup
      ); // Удаление всей группы товаров deleteGroup целиком
    },

    updateProducts(state, products) {
      state.allProducts = products;
    },
  },
  state: {
    allProducts: [],
    productsInTheCart: [],
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

    allProductsInCartCount(state, getters) {
      return getters.allProductsInTheCart.reduce(
        (sum, group) => sum + group.length,
        0
      ); // Подсчет количества всех товаров в корзине
    },

    allProductsInCartCountPrice(state, getters) {
      return getters.allProductsInTheCart.reduce(
        (sum, group) =>
          sum + group.reduce((acc, product) => acc + product.price, 0),
        0
      ); // Подсчет стоимости всех товаров в корзине
    },
  },
};
