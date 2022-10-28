import httpClient from "@/plugins/http-client";
import router from "@/router";

export default {
  login: async ({ commit }, payload) => {
    const user = await httpClient.post("/Auth/Login", payload);
    commit("login", user);
    await router.push({ name: "Home" });
  },
  signup: async ({ commit }, payload) => {
    const user = await httpClient.post("/Auth/Signup", payload);
    commit("login", user);
    await router.push({ name: "Home" });
  },
  whoAmI: async ({ commit }) => {
    const user = await httpClient.get("/Auth/WhoAmI");
    if (user) {
      commit("login", user);
      await router.push({ name: "Home" });
    }
  },
  logout: async ({ commit }) => {
    await httpClient.post("/Auth/Logout");
    commit("logout");
    await router.push({ name: "Login" });
  },
  getFoods: async ({ commit, state }) => {
    const route =
      "/Foods" +
      (state.selectedFilter && state.selectedFilter !== "All"
        ? "?type=" + state.selectedFilter
        : "");
    const foods = await httpClient.get(route);
    commit("setFoods", foods);
  },
  getFilters: async ({ commit }) => {
    const filters = await httpClient.get("/Foods/GetFoodTypes");
    commit("setFilters", filters);
  },
  changeCartItem: async ({ commit, dispatch }, payload) => {
    try {
      commit("setIsLoading", true);
      await httpClient.post("/CartItems/ChangeCartItem", {
        count: payload.count,
        foodId: payload.foodId,
      });
      dispatch("getFoods");
      dispatch("getCartItems");
    } finally {
      commit("setIsLoading", false);
    }
  },
  getCartItems: async ({ commit }) => {
    const cartItems = await httpClient.get("/CartItems");
    commit("setCartItems", cartItems);
  },
};
