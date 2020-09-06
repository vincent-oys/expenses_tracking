const React = require("react");

class Homepage extends React.Component {
  render() {
    return (
      <html>
        <body>
          <h1>Welcome to Expense Tracker</h1>
          <div>
            <form method="GET" action="/login">
              <input type="submit" value="Login" />
            </form>
            <form method="GET" action="/signup">
              <input type="submit" value="Sign Up" />
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Homepage;
