export default {
  isAuthenticated: (state) => state.isAuthenticated,
  loggedInUser: (state) => state.loggedInUser,
  foods: (state) => state.foods,
  filters: (state) => state.filters,
  selectedFilter: (state) => state.selectedFilter,
  isLoading: (state) => state.isLoading,
  cartItems: (state) => state.cartItems,
};
