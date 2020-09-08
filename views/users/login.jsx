const React = require("react");

class Login extends React.Component {
  render() {

    let message = this.props.message;

    return (
      <html>
        <body>
          <h1>Login to Expense Tracker</h1>
          <div>
            <form method="POST" action="/login">
              Username: <input type="text" name="username" />
              <br />
              Password: <input type="password" name="password" />
              <br />
              <div>
                <input type="submit" value="Login" />
              </div>
              <div>
                <a href="/signup">Register</a>
              </div>
              <div>
                <a href="/">Homepage</a>
              </div>
            </form>
          </div>
          <br />
          <div>
            {message}
          </div>

        </body>
      </html>
    );
  }
}

module.exports = Login;
