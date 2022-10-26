import AuthService from "@/plugins/auth-service";

export default {
  login: (state, token) => {
    AuthService.setToken(token);
    state.isAuthenticated = true;
  },
  logout: (state) => {
    AuthService.removeToken();
    state.isAuthenticated = false;
  },
};
