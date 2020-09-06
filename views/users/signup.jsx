const React = require("react");

class Signup extends React.Component {
  render() {
    return (
      <html>
        <body>
          <h1>Register an Account Today!</h1>
          <div>
            <form method="POST" action="/signup">
              Username:{" "}
              <input
                type="text"
                placeholder="Enter Username"
                name="username"
                id=""
                required
              />
              <br />
              Password:{" "}
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                id=""
                required
              />
              <br />
              <input type="submit" value="Signup" />
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Signup;
