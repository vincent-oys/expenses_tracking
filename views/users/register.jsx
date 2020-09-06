const React = require("react");

class Register extends React.Component {
  render() {
    return (
      <html>
        <body>
          <h1>Tweedr Registration</h1>
          <div>
            <form method="POST" action="">
              Username: <input type="text" name="username" id="" />
              <br />
              Password: <input type="password" name="password" id="" />
              <br />
              <input type="submit" value="Register" />
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Register;
