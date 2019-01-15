module.exports = {
    apps : [{
      name        : "easy-mock",
      script      : "./app.js",
      watch       : true,
      env: {
        "NODE_ENV": "production",
      }
    }]
  }