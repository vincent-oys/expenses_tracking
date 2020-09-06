const express = require("express");
const methodOverride = require("method-override");

// initialize express app
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(methodOverride("_method"));

// set react-views to be the default view engine
const reactEngine = require("express-react-views").createEngine();
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", reactEngine);

const allModels = require("./db");

const setRoutesFunction = require("./routes");
setRoutesFunction(app, allModels);

const server = app.listen(3000, () => console.log("port 3000 connected"));

let onClose = () => {
  console.log("closing");

  server.close(() => {
    console.log("Process terminated");

    allModels.pool.end(() => console.log("DB connection pool shut down"));
  });
};

process.on("SIGTERM", onClose);
process.on("SIGINT", onClose);
