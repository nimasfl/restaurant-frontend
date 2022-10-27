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
};
