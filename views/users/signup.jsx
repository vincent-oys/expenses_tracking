const React = require("react");

class Signup extends React.Component {
  render() {

    let message = this.props.message

    return (
      <html>
        <body>
          <h1>Register an Account Today!</h1>
          <div>
            <form method="POST" action="/signup">
              Username:{" "}
              <input type="text" placeholder="Enter Username" name="username" required />
              <br />
              Password:{" "}
              <input type="password" placeholder="Enter Password" name="password" required />
              <br />
              <div>
                <input type="submit" value="Signup" />
              </div>
              <div>
                <a href="/login">Login</a>
              </div>
              <div>
                <a href="/">Homepage</a>
              </div>
            </form>
          </div>
          <div>
            {message}
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Signup;
