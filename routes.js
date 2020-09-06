const { useReducer } = require("react");

module.exports = (app, allModels) => {
  const usersControllerCallbacks = require("./controllers/users")(allModels);
  const trackerControllerCallbacks = require("./controllers/tracker")(allModels);

  app.get("/", usersControllerCallbacks.welcome);
  app.get("/login", usersControllerCallbacks.loginPage);
  app.post("/login", usersControllerCallbacks.login);
  app.get("/signup", usersControllerCallbacks.getSignup);
  app.post("/signup", usersControllerCallbacks.postSignup);

  app.get("/tracker", trackerControllerCallbacks.main);
  app.post("/tracker", trackerControllerCallbacks.postExpense);
  app.put("/tracker/:id", trackerControllerCallbacks.putExpense);
  app.delete("/tracker/:id", trackerControllerCallbacks.deleteExpense);
};
