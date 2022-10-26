class AuthService {
  constructor() {
    this.token = window.localStorage.getItem("token");
  }

  hasToken() {
    return !!this.token;
  }

  getToken() {
    return this.token;
  }

  removeToken() {
    window.localStorage.removeItem("token");
    location.reload();
  }

  setToken(token) {
    window.localStorage.setItem("token", token);
    this.token = token;
  }
}

export default new AuthService();
