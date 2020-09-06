const { useReducer } = require("react");

module.exports = (app, allModels) => {
  const usersControllerCallbacks = require("./controllers/users")(allModels);

  app.get("/", usersControllerCallbacks.welcome);
  app.get("/login", usersControllerCallbacks.loginPage);
  app.post("/login", usersControllerCallbacks.login);
  app.get("/signup", usersControllerCallbacks.getSignup);
  app.post("/signup", usersControllerCallbacks.postSignup);
};
