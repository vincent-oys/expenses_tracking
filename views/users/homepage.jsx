const React = require("react");

class Homepage extends React.Component {
  render() {
    return (
      <html>
        <body>
          <h1>Welcome to Tweedr</h1>
          <div>
            <form method="GET" action="/login">
              <input type="submit" value="Login" />
            </form>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Homepage;
