export default {
  login: (state, user) => {
    state.isAuthenticated = true;
    console.log(user);
    state.loggedInUser = {
      id: user.id,
      name: user.name,
      username: user.username,
    };
  },
  logout: (state) => {
    state.isAuthenticated = false;
    state.loggedInUser = null;
  },
  setFoods(state, payload) {
    state.foods = payload;
  },
  setFilters(state, payload) {
    state.filters = ["All", ...payload];
  },
  selectFilter(state, payload) {
    state.selectedFilter = payload;
  },
  setIsLoading(state, isLoading) {
    state.isLoading = isLoading;
  },
  setCartItems(state, payload) {
    state.cartItems = payload;
  },
};
