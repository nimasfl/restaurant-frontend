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
  whoAmI: async () => {
    await httpClient.get("/Auth/WhoAmI");
  },
  logout: async ({ commit }) => {
    await httpClient.post("/Auth/Logout");
    commit("logout");
    await router.push({ name: "Login" });
  },
};
