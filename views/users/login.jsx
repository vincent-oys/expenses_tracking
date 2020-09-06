const React = require("react");

class Login extends React.Component {
  render() {
    return (
      <html>
        <body>
          <h1>Login to Expense Tracker</h1>
          <div>
            <form method="POST" action="/login">
              Username: <input type="text" name="username" id="" />
              <br />
              Password: <input type="password" name="password" id="" />
              <br />
              <input type="submit" value="Login" />
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Login;
