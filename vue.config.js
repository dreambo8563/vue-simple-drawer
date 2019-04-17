module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/vue-simple-drawer/" : "/",
  css: {
    extract: false
  }
};
