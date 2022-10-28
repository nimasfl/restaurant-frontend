module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    https: process.env.USE_SSL === "true",
    public:
      process.env.USE_SSL === "true"
        ? "https://0.0.0.0:8080/"
        : "http://0.0.0.0:8080/",
  },
};
