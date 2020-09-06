const sha256 = require("js-sha256");

module.exports = (db) => {
  let welcome = (req, res) => {
    // if (req.cookies.loggedIn === "true") {
    //   // res.send("WORKING")
    //   res.redirect(`tweed/${req.cookies.username}`);
    // } else {
    //   res.render("users/homepage");
    // }
    res.render("users/homepage");
  };

  let loginPage = (req, res) => {
    // res.clearCookie("username");
    // res.clearCookie("loggedIn");
    res.render("users/login");
  };

  let login = (req, res) => {
    let returnInfo = req.body;
    let username = returnInfo.username;
    let password = returnInfo.password;
    db.users.userLogin(username, password, (err, result) => {
      if (err) {
        console.log("-- Error in login controller", err.message);
      } else {
        if (result === false) {
          res.send("User not exist! Please try again");
        } else if (result === "wrong password") {
          res.send("Wrong Password!");
        } else {
          //   res.cookie("username", result.username);
          //   res.cookie("loggedIn", true);
          //   res.redirect(`tweed/${result.username}`);
          res.send("login success");
        }
      }
    });
  };

  let getSignup = (req, res) => {
    res.render("users/signup");
  };

  let postSignup = (req, res) => {
    let returnInfo = req.body;
    let username = returnInfo.username;
    let password = returnInfo.password;
    // let password = sha256(returnInfo.password);
    let values = [username, password];

    db.users.register(values, (err, result) => {
      if (err) {
        console.log("-- Error in postSignup controller", err.message);
      } else {
        console.log(result);
      }
    });
  };

  return {
    welcome,
    loginPage,
    login,
    getSignup,
    postSignup,
  };
};
