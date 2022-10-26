import store from "@/store";

export default (to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated;
  if (!isAuthenticated && to.name !== "Login") {
    next("Login");
  }
  next();
};
