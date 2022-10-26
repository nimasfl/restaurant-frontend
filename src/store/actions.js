// import httpClient from "@/plugins/http-client";

export default {
  login: async ({ commit }) => {
    // const token = await httpClient.post("/login", payload);
    commit("login", "token");
  },
  logout: ({ commit }) => {
    commit("logout");
  },
  signup: async ({ commit }) => {
    // const token = await httpClient.post("/signup", payload);
    commit("login", "token");
  },
};
